<script lang="ts">
import { defineComponent, PropType, defineEmits, ref, getCurrentInstance, computed } from "vue";
import "./FinanceCalculation.scss";
import FinanceQuote from "./FinanceQuote.vue";
import FinanceResult from "./FinanceResult.vue";
import { Quote } from "@/interfaces/Quote";
import { serverURL } from "@/config";
import axios from "axios";
import Swal from "sweetalert2";

export default defineComponent({
	name: "FinanceCalculation",
	components: {
		FinanceQuote,
		FinanceResult,
	},
	props: {
		quoteToView: {
			type: Object as PropType<Quote | null | undefined>,
			required: true,
		},
		getQuotesData: {
			type: Function as PropType<(e?: Event) => void>,
			required: true,
		},
		clearQuoteToView: {
			type: Function as PropType<(e?: Event) => void>,
			required: true,
		},
	},
	data(props) {
		const quoteToView = this.quoteToView;
		console.log("[FinanceCalculation]", { quoteToView });
		let formInqQuote: Quote | undefined = this.$props.quoteToView || {
			id: null,
			inq_cost: 0.0,
			inq_profit: 0,
			inq_sellingprice: 0,
			inq_term: 0,
			inq_rate: 0,
			inq_outofpocket: 0,
			inq_taxrate: 0,
			inq_timestamp: "",
			res_taxes: 0,
			res_baseloanamount: 0,
			res_interest: 0,
			res_totalloanamount: 0,
			res_monthlypayment: 0,
			res_outofpocket: 0,
			res_quotename: "",
		};
		return { formInqQuote };
	},

	methods: {
		handleFormDataChange(event: Event) {
			event.preventDefault();
			const target = event.target as HTMLInputElement;
			const thisProperty = target.name;
			const thisValue = target.value;
			console.log(target.name, target.value);

			switch (thisProperty) {
				case "inq_cost":
					this.formInqQuote = {
						...this.formInqQuote,
						inq_sellingprice: Number(thisValue) + this.formInqQuote.inq_profit,
						[thisProperty]: Number(thisValue),
					};
					break;
				case "inq_profit":
					this.formInqQuote = {
						...this.formInqQuote,
						inq_sellingprice: Number(thisValue) + this.formInqQuote.inq_cost,
						[thisProperty]: Number(thisValue),
					};
					break;
				case "inq_sellingprice":
					this.formInqQuote = {
						...this.formInqQuote,
						inq_profit: Number(thisValue) - this.formInqQuote.inq_cost,
						[thisProperty]: Number(thisValue),
					};
					break;
				case "res_quotename":
					this.formInqQuote = {
						...this.formInqQuote,
						[thisProperty]: thisValue,
					};
					break;
				default:
					this.formInqQuote = {
						...this.formInqQuote,
						[thisProperty]: Number(thisValue),
					};
					break;
			}
			// console.log("EEE", this.formInqQuote);
		},

		async onApply(e: Event) {
			e.preventDefault();
			console.log("[onApply]", this.formInqQuote);

			const endpoint = `${serverURL}/quoteCalc`;

			try {
				const thisQuote = this.formInqQuote;
				const { data } = await axios.post(endpoint, { data: thisQuote });
				console.log("put Executed", data);

				this.formInqQuote = data;
			} catch (error) {
				console.error(error);
			}
		},

		validateForm() {
			let field = null;
			const thiQuote = this.formInqQuote;
			if (thiQuote.inq_cost === 0) {
				field = "inq_cost";
			}
			if (thiQuote.inq_rate === 0) {
				field = "inq_rate";
			}
			if (thiQuote.inq_sellingprice === 0) {
				field = "inq_sellingprice";
			}
			if (thiQuote.inq_taxrate === 0) {
				field = "inq_taxrate";
			}
			if (thiQuote.res_quotename === "") {
				field = "res_quotename";
			}

			if (field) {
				throw Error(`FORM|Invalid value for field [${field}]`);
			}
		},
	},
	setup(props, ctx) {
		const inst = getCurrentInstance();
		const proxy = inst?.proxy as any;

		console.warn("setup", props.quoteToView);

		function restoreFormInput() {
			if (inst && (inst as any).data) {
				(inst as any).data.formInqQuote = {
					id: null,
					inq_cost: 0.0,
					inq_profit: 0,
					inq_sellingprice: 0,
					inq_term: 0,
					inq_rate: 0,
					inq_outofpocket: 0,
					inq_taxrate: 0,
					inq_timestamp: "",
					res_taxes: 0,
					res_baseloanamount: 0,
					res_interest: 0,
					res_totalloanamount: 0,
					res_monthlypayment: 0,
					res_outofpocket: 0,
					res_quotename: "",
				};
			}

			props.clearQuoteToView();
		}

		function onSave(e: Event) {
			e.preventDefault();
			console.log("[onSave]", (inst as any)?.data?.formInqQuote);

			try {
				if (proxy && typeof proxy.validateForm === "function") {
					proxy.validateForm();
				}
				if (proxy && typeof proxy.saveQuoteData === "function") {
					proxy.saveQuoteData();
				}
				if (proxy && typeof proxy.reloadSavedQuotes === "function") {
					proxy.reloadSavedQuotes();
				}
			} catch (error: any) {
				const errorType = error.message?.split("|")[0];
				const errorMessage = error.message?.split("|")[1];
				if (errorType === "FORM") {
					Swal.fire({
						title: "It was not possible to save",
						text: `${errorMessage}`,
						icon: "warning",
					});
				} else {
					Swal.fire({
						title: "It was not possible to save",
						html: `Sorry, something happend in our end.<br> Please, try it again later.`,
						icon: "error",
					});
				}
			}
		}

		async function saveQuoteData() {
			const endpoint = `${serverURL}/quote`;
			console.log("[saveQuoteData ]");
			try {
				const thisQuote = inst ? (inst as any).data.formInqQuote : null;
				if (thisQuote.id) {
					const { data } = await axios.put(endpoint, { data: thisQuote });
					console.log("put Executed", data);
				} else {
					const { data } = await axios.post(endpoint, { data: thisQuote });
					console.log("post Executed", data);
				}

				Swal.fire({
					title: "Quote saved",
					text: "Quote was successfully saved",
					icon: "success",
				});

				props.getQuotesData();
				restoreFormInput();
			} catch (error) {
				console.error(error);
			}
		}

		function checkProps() {
			if (props?.quoteToView) {
				console.log("AIAIA", props?.quoteToView);
			}
		}

		// expose functions to the template / component instance
		return {
			onSave,
			saveQuoteData,
			restoreFormInput,
			checkProps,
		};
	},
});
</script>

<template>
	<div
		class="FinanceCalculation"
		:class="{}"
	>
		<FinanceQuote
			:formInqQuote="quoteToView || formInqQuote"
			:handleFormDataChange="handleFormDataChange"
			:restoreFormInput="restoreFormInput"
			:onApply="onApply"
		/>
		<FinanceResult
			:formInqQuote="quoteToView || formInqQuote"
			:handleFormDataChange="handleFormDataChange"
			:onSave="onSave"
		/>
	</div>
</template>
