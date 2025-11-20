<template>
	<div
		class="FinanceCalculation"
		:class="{}"
	>
		<FinanceQuote />
		<FinanceResult />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceCalculation.scss";
import FinanceQuote from "./FinanceQuote.vue";
import FinanceResult from "./FinanceResult.vue";

export default defineComponent({
	name: "FinanceCalculation",
	components: {
		FinanceQuote,
		FinanceResult,
	},
	props: {},
});
</script>
