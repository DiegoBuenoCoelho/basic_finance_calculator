<script lang="ts">
import { defineComponent, PropType, defineEmits } from "vue";
import "./FinanceCalculation.scss";
import FinanceQuote from "./FinanceQuote.vue";
import FinanceResult from "./FinanceResult.vue";
import { Quote } from "@/types/Quote";
import { serverURL } from "@/config";
import axios from "axios";

export default defineComponent({
	name: "FinanceCalculation",
	components: {
		FinanceQuote,
		FinanceResult,
	},
	props: {},
	data() {
		let formInqQuote: Quote = {
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
	emits: ["updateListSavedQuotes"],

	methods: {
		updateValue() {
			this.$emit("updateListSavedQuotes");
		},

		restoreFormInput() {
			this.formInqQuote = {
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
		},

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

			// } else {
			// 	this.formInqQuote = {
			// 		...this.formInqQuote,
			// 		[thisProperty]: Number(thisValue),
			// 	};
			// }

			// console.log("state object: ", this.formInqQuote);
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

		onSave(e: Event) {
			e.preventDefault();
			console.log("[onSave]", this.formInqQuote);
			this.saveQuoteData();
			if (typeof (this as any).reloadSavedQuotes === "function") {
				(this as any).reloadSavedQuotes();
			}
		},

		async saveQuoteData() {
			const endpoint = `${serverURL}/quote`;
			console.log("[saveQuoteData ]");
			try {
				const thisQuote = this.formInqQuote;
				const { data } = await axios.post(endpoint, { data: thisQuote });
				console.log("put Executed", data);

				this.updateValue();
				this.restoreFormInput();
			} catch (error) {
				console.error(error);
			}
		},
	},
});
</script>

<template>
	<div
		class="FinanceCalculation"
		:class="{}"
	>
		<FinanceQuote
			:formInqQuote="formInqQuote"
			:handleFormDataChange="handleFormDataChange"
			:onApply="onApply"
		/>
		<FinanceResult
			:formInqQuote="formInqQuote"
			:handleFormDataChange="handleFormDataChange"
			:onSave="onSave"
		/>
	</div>
</template>
