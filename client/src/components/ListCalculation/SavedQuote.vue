<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import "./SavedQuote.scss";
import { Quote } from "@/types/Quote";

export default defineComponent({
	name: "SavedQuote",
	components: {},
	props: ["quote"],
	data(props) {
		let myQuote = props.res_quotename;
	},
	methods: {},
});
// defineProps(["quote"]);
</script>

<template>
	<div
		class="SavedQuote"
		:class="{}"
	>
		{{ quote.res_quotename }}
	</div>
</template>
