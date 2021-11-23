<template>
	<div class="page-container row">
		<div class="col-md-2 vertical-nav-div">
			<VerticalNavbar />
		</div>
		<div class="col-md-7 page-content-wrapper">
			<Search />
			<PageHeader />
			<MainChart />
			<FeaturedCards />
		</div>
		<div class="col-md-3 aside-wrapper">
			<BalanceCard />
			<div class="asideCardsWrapper">
				<div  v-for="(card, index) in cardArray" v-bind:key="index">
				<AsideCryptoCard
					:icon="card.icon"
					:coinName="card.coinName"
					:ticker="card.ticker"
					:currency="card.currency"
					:currentPrice="card.currentPrice"
					:gainIndicator="card.gainIndicator"
					:percentageChange="card.percentageChange"
					:percentageCount="card.percentageCount"
					class=""
				/>
				</div>
			</div>
		
			<div class="chartWrapper flex-row">
				<SidebarChart />
			</div>
		</div>
	</div>
</template>

<script>
import VerticalNavbar from "./components/VerticalNavbar.vue";
import Search from "./components/Search.vue";
import PageHeader from "./components/PageHeader.vue";
import MainChart from "./components/MainChart.vue";
import FeaturedCards from "./components/FeaturedCards.vue";
import BalanceCard from "./components/BalanceCard.vue";
import SidebarChart from "./components/SidebarChart.vue";
import AsideCryptoCard from "./components/AsideCryptoCard.vue";

export default {
	name: "App",
	components: {
		VerticalNavbar,
		Search,
		PageHeader,
		MainChart,
		FeaturedCards,
		BalanceCard,
		SidebarChart,
		AsideCryptoCard
	},
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
};
</script>

<style scoped>
.page-container {
	background-color: #161a1e;
	min-height: 100vh;
}
.vertical-nav-div {
	margin: 0rem;
	padding: 0rem;
	border-right: 1px solid rgba(255, 255, 255, 0.25);
}
.page-content-wrapper {
	margin: 0rem;
	padding: 1rem;
	color: white;
}
.aside-wrapper {
	margin: 0rem;
	padding: 0rem 1rem;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}
.asideCardsWrapper{
	margin-top: 1rem;
}
.chartWrapper{
	justify-content: center;
	margin-top: 1rem;
}
</style>
