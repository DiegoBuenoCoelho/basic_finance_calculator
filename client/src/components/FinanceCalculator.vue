<template>
	<div
		class="FinanceCalculator"
		:class="{}"
	>
		<FinanceCalculation />
		<ListCalculation />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceCalculator.scss";
import FinanceCalculation from "./FinanceCalculation/FinanceCalculation.vue";
import ListCalculation from "./ListCalculation/ListCalculation.vue";

export default defineComponent({
	name: "FinanceCalculator",
	components: {
		FinanceCalculation,
		ListCalculation,
	},
	props: {},
});
</script>
