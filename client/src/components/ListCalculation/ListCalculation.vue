<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import "./ListCalculation.scss";
import "../../assets/scss/panel.scss";
import { serverURL } from "@/config";
import axios from "axios";
import { Quote } from "@/interfaces/Quote";
import SavedQuote from "./SavedQuote.vue";

export default defineComponent({
	name: "ListCalculation",
	components: {
		SavedQuote,
	},
	props: {
		arQuotes: {
			type: Array as PropType<Quote[]>,
			required: true,
		},
		onClickViewQuote: {
			type: Function as PropType<(thisQuote: Quote) => void>,
			required: true,
		},
		getQuotesData: {
			type: Function as PropType<(e: Event) => void>,
			required: true,
		},
	},
});
</script>

<template>
	<div
		class="ListCalculation"
		:class="{}"
	>
		<div class="panel">
			<div
				class="title"
				@click="getQuotesData"
			>
				Saved Quotes
				<span class="reloadButton">
					<span class="icon is-small">
						<i class="icon-refresh"></i>
					</span>
				</span>
			</div>
			<div class="content savedQuotes">
				<SavedQuote
					v-for="(quote, index) in arQuotes"
					:key="index"
					:quote="quote"
					:onClickViewQuote="onClickViewQuote"
					:getQuotesData="getQuotesData"
				/>
			</div>
		</div>
	</div>
</template>
