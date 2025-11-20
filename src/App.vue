<template>
	<TopHeader />
	<FinanceCalculator />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./assets/scss/main.scss";
import TopHeader from "./components/structure/TopHeader.vue";
import FinanceCalculator from "./components/FinanceCalculator.vue";

export default defineComponent({
	name: "App",
	components: {
		TopHeader,
		FinanceCalculator,
	},
});
</script>
