<template>
	<div class="flex-row wrapper">
		<div class="statistics-div flex-col">
			<div class="top-row">
				<span class="current-value">{{ currentValue }}</span>
				<span class="currency">{{ currency }}</span>
			</div>
			<div class="bottom-row">
				<span class="currency-symbol">{{ currencySymbol }}</span>
				<span class="previous-value">{{ previousValue }}</span>		
				<span :class="['percentage-change', percentageChange >= 0 ? 'positive' : 'negative']">{{ percentageChange >= 0 ? `+${percentageChange}` : `${percentageChange}`}}%</span>

			</div>
		</div>
		<div class="flex-row filter-btn-div">
			<FilterButton />
		</div>
	</div>
</template>

<script>
import FilterButton from "./FilterButton.vue";

export default {
	data: () => {
		return {
			currentValue: 65000,
			currency: "USD",
			currencySymbol: "$",
			previousValue: 50000,
			percentageChange: 8.5,
			profitLoss: "",
		};
	},
	components: {
		FilterButton
	},
	mounted(){
		this.profitLoss = this.percentageChange >= 0 ? "positive" : "negative"
	}
};
</script>

<style scoped>
.wrapper {
	justify-content: space-between;
	margin: 0.5rem 0rem;
}
.statistics-div {
	align-items: flex-start;
	margin-bottom: 1rem;
}
.current-value {
	margin-right: 0.25rem;
	font-size: 2rem;
	font-weight: bold;
}
.currency {
	font-size: 0.875rem;
}
.bottom-row{
	font-weight: bold;
}
.percentage-change {
	margin-left: 0.5rem;
}
.filter-btn-div {
	justify-content: flex-end;
}
</style>