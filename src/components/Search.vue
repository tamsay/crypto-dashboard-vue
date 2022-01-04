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
			v-on:input="searchInput"
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
			this.$emit('searchInputValue', this.searchValue)
		},
	},
};
</script>

<style scoped>
.wrapper {
	background-color: gray;
	padding: 0.5em;
	border-radius: 0.25rem;
	width: 100%;
	margin: 0.5rem 0rem;
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
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
	transition: background-color 50000s;
	-webkit-text-fill-color: #fff;
}
.searchInput::placeholder {
	color: white;
	font-weight: lighter;
}
.searchInput::focus {
	color: red;
	font-weight: lighter;
	outline: none;
	border: none;
	background-color: transparent;
}
p {
	color: white;
}
@media all and (min-width:768px){
	.wrapper {
	background-color: gray;
	padding: 0.5em;
	border-radius: 0.25rem;
	width: 70%;
	margin: 0rem;
	justify-content: flex-start;
}
}
</style>