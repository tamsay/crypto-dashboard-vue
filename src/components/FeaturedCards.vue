<template>
	<div class="component-wrapper flex-row">
		<div
			class="card-wrapper"
			v-for="(card, index) in cardArray"
			v-bind:key="index"
		>
			<CryptoCard
				:icon="card.icon"
				:coinName="card.coinName"
				:ticker="card.ticker"
				:currency="card.currency"
				:currentPrice="card.currentPrice"
				:gainIndicator="card.gainIndicator"
				:percentageChange="card.percentageChange"
				:percentageCount="card.percentageCount"
				:size="card.size"
			/>
		</div>
	</div>
</template>

<script>
import CryptoCard from "./CryptoCard.vue";
export default {
	data: () => {
		return {
			cardArray: [
				{
					icon: "B",
					coinName: "Bitcoin",
					ticker: "BTC",
					currency: "$",
					currentPrice: "60000",
					gainIndicator: "+",
					percentageChange: "4",
					percentageCount: "345",
				},
				{
					icon: "B",
					coinName: "Bitcoin",
					ticker: "BTC",
					currency: "$",
					currentPrice: "60000",
					gainIndicator: "+",
					percentageChange: "4",
					percentageCount: "345"
				},
				{
					icon: "B",
					coinName: "Bitcoin",
					ticker: "BTC",
					currency: "$",
					currentPrice: "60000",
					gainIndicator: "+",
					percentageChange: "4",
					percentageCount: "345"
				},
			]
		};
	},
	methods: {
		showCards() {}
	},
	components: {
		CryptoCard
	}
};
</script>

<style scoped>
.component-wrapper {
	justify-content: space-between;
	flex-wrap: wrap;
}
.card-wrapper {
	min-width: 32%;
}
</style>