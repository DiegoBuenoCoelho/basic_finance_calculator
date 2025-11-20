<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./FinanceQuote.scss";
import "../../assets/scss/panel.scss";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "FinanceQuote",
	props: {
		formInqQuote: {
			type: Object as PropType<Quote>,
			required: true,
		},
		handleFormDataChange: {
			type: Function as PropType<(e: Event) => void>,
			required: false,
		},
		onApply: {
			type: Function as PropType<(e: Event) => void>,
			required: true,
		},
	},
	data(props) {
		// formInqQuote = props.formInqQuote;
		// return { formInqQuote };
		return {};
	},
	methods: {},
});
</script>

<template>
	<div
		class="FinanceQuote"
		:class="{}"
	>
		<div class="panel">
			<div class="title">Finance Quote</div>
			<div class="content quoteFieldsArea">
				<div class="quoteFields">
					<div class="property">Cost:</div>
					<div class="value">
						<input
							type="number"
							id="inq_cost"
							name="inq_cost"
							:value="formInqQuote.inq_cost"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Profit:</div>
					<div class="value">
						<input
							type="number"
							id="inq_profit"
							name="inq_profit"
							:value="formInqQuote.inq_profit"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Selling Price:</div>
					<div class="value">
						<input
							type="number"
							id="inq_sellingprice"
							name="inq_sellingprice"
							:value="formInqQuote.inq_sellingprice"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Term:</div>
					<div class="value">
						<input
							type="number"
							id="int_term"
							name="inq_term"
							:value="formInqQuote.inq_term"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Rate:</div>
					<div class="value">
						<input
							type="number"
							id="inq_rate"
							name="inq_rate"
							:value="formInqQuote.inq_rate"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Out Of Pocket:</div>
					<div class="value">
						<input
							type="number"
							id="inq_outofpocket"
							name="inq_outofpocket"
							:value="formInqQuote.inq_outofpocket"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="quoteFields">
					<div class="property">Tax Rate:</div>
					<div class="value">
						<input
							type="number"
							id="inq_taxrate"
							name="inq_taxrate"
							:value="formInqQuote.inq_taxrate"
							@change="handleFormDataChange"
							min="0"
							max="100000"
							class="input is-small"
						/>
					</div>
				</div>
				<div class="buttonArea">
					<button
						class="button is-black is-small"
						@click="onApply"
					>
						<span class="icon is-small">
							<i class="fas fa-check"></i>
						</span>
						Apply
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
