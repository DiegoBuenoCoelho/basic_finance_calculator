<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceQuote.scss";
import "../../assets/scss/panel.scss";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "FinanceQuote",
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
	props: {},
	methods: {
		handleClickApply(e: Event) {
			e.preventDefault();
			console.log("[handleClickApply]");
		},
		handleFormDataChange(event: Event) {
			event.preventDefault();
			const target = event.target as HTMLInputElement;
			const thisProperty = target.name;
			const thisValue = target.value;
			console.log(target.name, target.value);

			this.formInqQuote = {
				...this.formInqQuote,
				[thisProperty]: Number(thisValue),
			};

			console.log("state object: ", this.formInqQuote);
		},
	},
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
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
							class="input is-small is-info"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-evelope"></i>
						</span>
					</div>
				</div>
				<div class="buttonArea">
					<button
						class="button is-link is-small"
						@click="handleClickApply"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
