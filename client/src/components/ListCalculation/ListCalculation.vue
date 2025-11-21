<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import "./ListCalculation.scss";
import "../../assets/scss/panel.scss";
import { serverURL } from "@/config";
import axios from "axios";
import { Quote } from "@/types/Quote";
import SavedQuote from "./SavedQuote.vue";

export default defineComponent({
	name: "ListCalculation",
	components: {
		SavedQuote,
	},
	props: {
		// boReload: {
		// 	type: Boolean,
		// 	required: true,
		// },
		onClickViewQuote: {
			type: Function as PropType<(e: Event) => void>,
			required: true,
		},
	},
	data() {
		const endpoint = `${serverURL}/quotes`;
		let arQuotes = ref([]);

		return { endpoint, arQuotes };
	},
	methods: {
		getQuotesData: async function () {
			const endpoint = `${serverURL}/quotes`;
			console.log("[ListCalculation setup]");
			try {
				const { data } = await axios.get(endpoint);
				console.log(data);
				this.arQuotes = data.quotes;
			} catch (error) {
				console.error(error);
			}
		},
		// onDelete: async function (myQuote: Quote) {
		// 	console.log("[handleClickDelete]");

		// 	const endpoint = `${serverURL}/quote`;
		// 	console.log("[saveQuoteData ]");
		// 	try {
		// 		const quoteId = myQuote.id;
		// 		const { data } = await axios.delete(endpoint, { data: { id: quoteId } });
		// 		console.log("delete Executed", data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// },
	},
	mounted() {
		this.getQuotesData();
	},
});
</script>

<template>
	<div
		class="ListCalculation"
		:class="{}"
	>
		<div class="panel">
			<div
				class="title"
				@click="getQuotesData"
			>
				Saved Quotes
				<span class="reloadButton">
					<span class="icon is-small">
						<i class="icon-refresh"></i>
					</span>
				</span>
			</div>
			<div class="content savedQuotes">
				<SavedQuote
					v-for="(quote, index) in arQuotes"
					:key="index"
					:quote="quote"
					:onClickViewQuote="onClickViewQuote"
				/>
			</div>
		</div>
	</div>
</template>
