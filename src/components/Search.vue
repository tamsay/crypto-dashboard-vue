<template>
	<div class="wrapper flex-row">
		<span
			><Icon icon="ri:search-line" class="icon" @click="searchInput"
		/></span>
		<input
		class="searchInput"
			type="search"
			name="search"
			id="search"
			placeholder="Search for stats"
			v-model="searchValue"
			v-on:keyup.enter="searchInput"
		/>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
	data: () => {
		return {
			searchValue: "",
		};
	},
	components: {
		Icon,
	},
	methods: {
		searchInput(e) {
			console.log(e.target.value);
			// this.searchValue = e.target.value.toUpperCase();
		},
	},
};
</script>

<style scoped>
.wrapper {
	background-color: gray;
	padding: 0.5em;
	border-radius: 0.25rem;
	width: 70%;
	margin-bottom: 1rem;
	justify-content: flex-start;
}
.icon {
	font-size: 1.5rem;
	margin-right: 0rem;
}
.searchInput {
	border: none;
	outline: none;
	width: 100%;
	padding-left: 0.5rem;
	background-color: transparent;
	color: white;
	font-weight: 450;
}
.searchInput::placeholder {
	color: white;
	font-weight: lighter;
}
p {
	color: white;
}
</style>