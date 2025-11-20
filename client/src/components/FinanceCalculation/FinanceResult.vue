<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./FinanceResult.scss";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "FinanceResult",
	props: {
		// formInqQuote: Object as PropType<Quote>,
		formInqQuote: {
			type: Object as PropType<Quote>,
			required: true,
		},
		handleFormDataChange: {
			type: Function as PropType<(e: Event) => void>,
			required: false,
		},
	},
	methods: {
		handleClickSave(e: Event) {
			e.preventDefault();
			console.log("[handleClickSave]");
		},
	},
});
</script>

<template>
	<div
		class="FinanceResult"
		:class="{}"
	>
		<div class="panel">
			<div class="title">Result</div>
			<div class="content quoteFieldsArea">
				<div class="quoteFields">
					<div class="property">Taxes:</div>
					<div class="value">
						<span>${{ formInqQuote.res_taxes.toFixed(2) }}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Base Loan Amount:</div>
					<div class="value">
						<span>${{ formInqQuote.res_baseloanamount.toFixed(2) }}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Interest:</div>
					<div class="value">
						<span>${{ formInqQuote.res_interest.toFixed(2) }}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Monthly Payment:</div>
					<div class="value">
						<span>${{ formInqQuote.res_monthlypayment.toFixed(2) }}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property has-text-weight-semibold">Total Loan Amount:</div>
					<div class="value">
						<span class="has-text-weight-semibold"
							>${{ formInqQuote.res_totalloanamount.toFixed(2) }}</span
						>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property has-text-weight-semibold">Out Of Pocket:</div>
					<div class="value">
						<span class="has-text-weight-semibold"
							>${{ formInqQuote.res_outofpocket.toFixed(2) }}</span
						>
					</div>
				</div>

				<div class="quoteFields">
					<div class="property">Quote Name:</div>
					<div class="value">
						<input
							type="text"
							id="res_quotename"
							name="res_quotename"
							:value="formInqQuote.res_quotename"
							@change="handleFormDataChange"
							class="input is-small quoteName"
						/>
					</div>
				</div>
				<div class="buttonArea">
					<button
						class="button is-black is-small"
						@click="handleClickSave"
					>
						<span class="icon is-small">
							<i class="fas fa-save"></i>
						</span>
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
