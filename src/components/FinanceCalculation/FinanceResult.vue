<template>
	<div
		class="FinanceResult"
		:class="{}"
	>
		<div class="panel">
			<div class="title">Result</div>
			<div class="content">content</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./FinanceResult.scss";

export default defineComponent({
	name: "FinanceResult",
	props: {},
});
</script>
