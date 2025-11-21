<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./FinanceResult.scss";
import { Quote } from "@/interfaces/Quote";

export default defineComponent({
	name: "FinanceResult",
	props: {
		formInqQuote: {
			type: Object as PropType<Quote>,
			required: true,
		},
		handleFormDataChange: {
			type: Function as PropType<(e: Event) => void>,
			required: false,
		},
		onSave: {
			type: Function as PropType<(e: Event) => void>,
			required: false,
		},
	},
	methods: {},
	data(props) {
		// const obQuote = this.quoteToView ? this.quoteToView : this.formInqQuote;
		// return { obQuote };
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
						<span
							>{{
								formInqQuote.res_taxes.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})
							}}
							({{ formInqQuote.inq_taxrate.toFixed(2) }} %)</span
						>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Base Loan Amount:</div>
					<div class="value">
						<span>{{
							formInqQuote.res_baseloanamount.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})
						}}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Interest:</div>
					<div class="value">
						<span>{{
							formInqQuote.res_interest?.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})
						}}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Total Loan Amount:</div>
					<div class="value">
						<span>{{
							formInqQuote.res_totalloanamount?.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})
						}}</span>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property has-text-weight-semibold">Monthly Payment:</div>
					<div class="value">
						<span class="has-text-weight-semibold">{{
							formInqQuote.res_monthlypayment?.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})
						}}</span>
					</div>
				</div>

				<div class="quoteFields">
					<div class="property has-text-weight-semibold">Out Of Pocket:</div>
					<div class="value">
						<span class="has-text-weight-semibold">{{
							formInqQuote.res_outofpocket?.toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})
						}}</span>
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
							placeholder="Quote name"
						/>
					</div>
				</div>
				<div class="buttonArea saveQuote">
					<button
						class="button is-black is-small"
						@click="onSave"
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
