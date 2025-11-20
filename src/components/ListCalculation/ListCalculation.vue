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

<script lang="ts">
import { defineComponent } from "vue";
import "./ListCalculation.scss";
import "../../assets/scss/panel.scss";

export default defineComponent({
	name: "ListCalculation",
	components: {},
	props: {},
});
</script>
