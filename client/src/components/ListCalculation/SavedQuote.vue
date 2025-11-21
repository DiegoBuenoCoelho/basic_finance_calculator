<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import "./SavedQuote.scss";
import { Quote } from "@/interfaces/Quote";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { serverURL } from "@/config";
import axios from "axios";
import Swal from "sweetalert2";

export default defineComponent({
	name: "SavedQuote",
	components: {},
	props: {
		quote: {
			type: Object as PropType<Quote>,
			required: true,
		},
		getQuotesData: {
			type: Function as PropType<(e: Event) => void>,
			required: true,
		},
	},
	data(props) {
		let myQuote = props.quote;
		const myQuoteInfo = {
			...myQuote,
			myMonthlyPayment: formatCurrency(myQuote.res_monthlypayment),
			myOutOfPocke: formatCurrency(myQuote.res_outofpocket),
			myDate: props.quote.inq_timestamp,
		};

		return { myQuoteInfo };
	},
	methods: {
		handleClickView(e: Event) {
			e.preventDefault();
			console.log("[handleClickView]", this.myQuoteInfo);
		},
	},

	setup(props) {
		async function handleClickDelete(e: Event) {
			e.preventDefault();
			console.log("[handleClickDelete]");

			const endpoint = `${serverURL}/quote`;
			console.log("[saveQuoteData ]");
			try {
				const quoteId = props.quote.id;
				const { data } = await axios.delete(endpoint, { data: { id: quoteId } });
				console.log("delete Executed", data);

				// this.getQuotesData();
				props.getQuotesData?.(e);

				Swal.fire({
					title: "Quote deleted",
					text: "Quote was successfully deleted",
					icon: "success",
				});
			} catch (error: any) {
				// console.error(error);
				Swal.fire({
					title: "Quote not deleted deleted",
					text: error,
					icon: "error",
				});
			}
		}

		return { handleClickDelete };
	},
});
</script>

<template>
	<div
		class="SavedQuote"
		:class="{}"
	>
		<div class="savedQuoteData">
			<div class="quoteName">
				<span class="dateCreated"
					>{{ myQuoteInfo.myDate.split("T")[0] }}
					{{ myQuoteInfo.myDate.split("T")[1].substr(0, 8) }}</span
				>
				{{ quote.res_quotename }}
			</div>
			<div class="quoteInfos">
				<div class="quoteItem">
					<div class="quoteItemName">Payment</div>
					<div class="quoteItemValue">
						{{ myQuoteInfo.myMonthlyPayment }}
					</div>
				</div>
				<div class="quoteItem">
					<div class="quoteItemName">Out of Pocket</div>
					<div class="quoteItemValue">{{ myQuoteInfo.myOutOfPocke }}</div>
				</div>
			</div>
		</div>
		<div class="savedQuoteActions">
			<button
				class="button is-warning is-small"
				@click="handleClickView"
			>
				View
			</button>
			<button
				class="button is-danger is-small color-white"
				@click="handleClickDelete"
			>
				Delete
			</button>
		</div>
	</div>
</template>
