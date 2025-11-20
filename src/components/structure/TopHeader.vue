<template>
	<div
		class="TopHeader"
		:class="{}"
	>
		<img
			class="topLogo"
			src="../../assets/img/logo/xinnovations_top_logo.jpg"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./TopHeader.scss";

export default defineComponent({
	name: "TopHeader",
	props: {
		msg: String,
	},
});
</script>
