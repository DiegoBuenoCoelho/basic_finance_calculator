<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceCalculation.scss";
import FinanceQuote from "./FinanceQuote.vue";
import FinanceResult from "./FinanceResult.vue";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "FinanceCalculation",
	components: {
		FinanceQuote,
		FinanceResult,
	},
	data() {
		let formInqQuote: Quote = {
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

			if (thisProperty === "res_quotename") {
				this.formInqQuote = {
					...this.formInqQuote,
					[thisProperty]: thisValue,
				};
			} else {
				this.formInqQuote = {
					...this.formInqQuote,
					[thisProperty]: Number(thisValue),
				};
			}

			console.log("state object: ", this.formInqQuote);
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
		/>
		<FinanceResult
			:formInqQuote="formInqQuote"
			:handleFormDataChange="handleFormDataChange"
		/>
	</div>
</template>
