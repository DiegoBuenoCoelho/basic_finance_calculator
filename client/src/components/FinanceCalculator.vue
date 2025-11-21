<script lang="ts">
import { defineComponent, ref } from "vue";
import "./FinanceCalculator.scss";
import FinanceCalculation from "./FinanceCalculation/FinanceCalculation.vue";
import ListCalculation from "./ListCalculation/ListCalculation.vue";
import { Quote } from "@/interfaces/Quote";
import { serverURL } from "@/config";
import axios from "axios";

export default defineComponent({
	name: "FinanceCalculator",
	components: {
		FinanceCalculation,
		ListCalculation,
	},
	props: {},
	data() {
		const endpoint = `${serverURL}`;
		let arQuotes = ref([]);
		return { endpoint, arQuotes };
	},

	methods: {
		getQuotesData: async function () {
			const myURL = `${this.endpoint}/quotes`;
			console.log("[ListCalculation setup]");
			try {
				const { data } = await axios.get(myURL);
				console.log(data);
				this.arQuotes = data.quotes;
			} catch (error) {
				console.error(error);
			}
		},

		onClickViewQuote(thisQuote: Quote) {
			console.log("[onClickViewQuote]");
		},
	},
	mounted() {
		this.getQuotesData();
	},
});
</script>

<template>
	<div
		class="FinanceCalculator"
		:class="{}"
	>
		<FinanceCalculation :getQuotesData="getQuotesData" />
		<ListCalculation
			:arQuotes="arQuotes"
			:getQuotesData="getQuotesData"
			:onClickViewQuote="onClickViewQuote"
		/>
	</div>
</template>
