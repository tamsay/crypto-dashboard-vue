<template>
	<button @click="searchInput" class="flex-row">
		{{ name }}
		<Icon icon="codicon:settings" :rotate="1" class="icon" />
		<!-- <Icon icon="dashicons:admin-settings" :rotate="1" class="icon"/> -->
		<!-- <Icon icon="clarity:filter-grid-line" class="icon" /> -->
	</button>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
	data: () => {
		return {
			name: "Filter"
		};
	},
	components: {
		Icon
	},
	methods: {
		searchInput() {
			console.log("clicked");
		}
	}
};
</script>

<style scoped>
button {
	background-color: gray;
	padding: 0.25rem 0.625rem;
	border-radius: 0.25rem;
	border: none;
	outline: none;
	width: fit-content;
	font-size: 0.75rem;
	color: white;
	font-weight: bold;
}
.icon {
	font-size: 1.25rem;
	margin-left: 0.5rem;
	line-height: 1;
}
</style>