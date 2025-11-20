<script lang="ts">
import { defineComponent } from "vue";
import "./ListCalculation.scss";
import "../../assets/scss/panel.scss";
import getData from "@/hooks/useQuotes";

export default defineComponent({
	name: "ListCalculation",
	components: {},
	props: {},
	methods: {
		getQuotesData: () => {
			console.log("[ListCalculation setup]");
			const data = getData();
			console.log({ data });
		},
	},
	setup() {
		// let { data, isLoading, error } = useQuote();
		// console.warn(isLoading, error, data);
		// const arQuotes = data;
		// getQuotesData();
	},
});
</script>

<template>
	<div
		class="ListCalculation"
		:class="{}"
	>
		<div class="panel">
			<div class="title">Saved Quotes</div>
			<div class="content">... list ...</div>
		</div>
	</div>
</template>
