<script lang="ts">
import { defineComponent, ref } from "vue";
import "./FinanceCalculator.scss";
import FinanceCalculation from "./FinanceCalculation/FinanceCalculation.vue";
import ListCalculation from "./ListCalculation/ListCalculation.vue";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "FinanceCalculator",
	components: {
		FinanceCalculation,
		ListCalculation,
	},
	props: {},
	data() {
		let boReload = false;

		return { boReload };
	},

	methods: {
		updateListSavedQuotes() {
			// assert the ref has the expected method to avoid 'unknown' type errors
			const child = this.$refs.childRef as { getQuotesData?: () => void } | undefined;
			child?.getQuotesData?.();
			// setTimeout(() => {
			// 	this.boReload = false;
			// }, 500);
		},
		onClickViewQuote(thisQuote: Quote) {
			console.log("[onClickViewQuote]");
		},
	},
});
</script>

<template>
	<div
		class="FinanceCalculator"
		:class="{}"
	>
		<FinanceCalculation :updateListSavedQuotes="updateListSavedQuotes" />
		<ListCalculation
			ref="childRef"
			:onClickViewQuote="(e: any) => onClickViewQuote(e as Quote)"
		/>
	</div>
</template>
