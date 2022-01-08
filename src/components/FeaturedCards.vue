<template>
	<div class="component-wrapper flex-row">
		<div
			class="card-wrapper"
			v-for="(card, index) in cardArray"
			v-bind:key="index"
		>
			<CryptoCard
				:icon="card.icon"
				:iconColor="card.iconColor"
				:coinName="card.coinName"
				:ticker="card.ticker.toUpperCase()"
				:currency="card.currency"
				:currentPrice="card.currentPrice"
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
					iconColor:"yellow",
					coinName: "Bitcoin",
					ticker: "BTC",
					currency: "$",
					currentPrice: 60000,
					percentageChange: -4,
					percentageCount: 345,
				},
				{
					icon: "E",
					iconColor:"green",
					coinName: "Ethereum",
					ticker: "ETH",
					currency: "$",
					currentPrice: 5000,
					percentageChange: 4,
					percentageCount: 45
				},
				{
					icon: "H",
					iconColor:"pink",
					coinName: "Hydro",
					ticker: "HYDRO",
					currency: "$",
					currentPrice: 10000,
					percentageChange: -40,
					percentageCount: 4
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
	justify-content: space-around;
	flex-wrap: wrap;
}
.card-wrapper {
	min-width: 100%;
}

@media all and (min-width: 576px){
	.card-wrapper {
		min-width: 45%;
	}
}
</style>