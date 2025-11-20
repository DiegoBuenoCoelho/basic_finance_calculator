<template>
	<div
		class="FinanceQuote"
		:class="{}"
	>
		<div class="panel">
			<div class="title">Finance Quote</div>
			<div class="content">content</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceQuote.scss";
import "../../assets/scss/panel.scss";

export default defineComponent({
	name: "FinanceQuote",
	props: {},
});
</script>
