<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import "./SavedQuote.scss";
import { Quote } from "@/types/Quote";
import { formatDate } from "@/utils/formatters";
import { serverURL } from "@/config";
import axios from "axios";

export default defineComponent({
	name: "SavedQuote",
	components: {},
	props: ["quote"],
	data(props) {
		let myQuote = props.quote;
		let myDate = props.quote.inq_timestamp;

		return { myDate, myQuote };
	},
	methods: {
		handleClickView(e: Event) {
			e.preventDefault();
			console.log("[handleClickView]", this.myQuote);
		},
		handleClickDelete: async function (e: Event) {
			e.preventDefault();
			console.log("[handleClickDelete]");

			const endpoint = `${serverURL}/quote`;
			console.log("[saveQuoteData ]");
			try {
				const quoteId = this.myQuote.id;
				const { data } = await axios.delete(endpoint, { data: { id: quoteId } });
				console.log("delete Executed", data);
			} catch (error) {
				console.error(error);
			}
		},
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
					>{{ myDate.split("T")[0] }} {{ myDate.split("T")[1].substr(0, 8) }}</span
				>
				{{ quote.res_quotename }}
			</div>
			<div class="quoteInfos">
				<div class="quoteItem">
					<div class="quoteItemName">Payment</div>
					<div class="quoteItemValue">${{ quote.res_monthlypayment }}</div>
				</div>
				<div class="quoteItem">
					<div class="quoteItemName">Out of Pocket</div>
					<div class="quoteItemValue">${{ quote.res_outofpocket }}</div>
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
