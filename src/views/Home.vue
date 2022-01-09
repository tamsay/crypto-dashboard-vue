<template>
	<div class="page-container row">
		<div class="col-md-9 page-content-wrapper flex-col">
			<Search @searchInputValue="searchValue($event)" />
			<PageHeader />
			<MainChart />
			<FeaturedCards />
		</div>
		<div class="col-md-3 aside-wrapper flex-col">
			<BalanceCard />
			<div class="asideCardsWrapper">
				<div class="card-wrapper" v-for="(card, index) in cardArray" v-bind:key="index">
				<CryptoCard
					:icon="card.icon"
          :iconColor="card.iconColor"
					:coinName="card.coinName"
					:ticker="card.ticker"
					:currency="card.currency"
					:currentPrice="card.currentPrice"
					:percentageChange="card.percentageChange"
					:percentageCount="card.percentageCount"
					:size="card.size"
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
import Search from "../components/Search.vue";
import PageHeader from "../components/PageHeader.vue";
import MainChart from "../components/MainChart.vue";
import FeaturedCards from "../components/FeaturedCards.vue";
import BalanceCard from "../components/BalanceCard.vue";
import SidebarChart from "../components/SidebarChart.vue";
import CryptoCard from "../components/CryptoCard.vue";

export default {
	name: "App",
	components: {
		Search,
		PageHeader,
		MainChart,
		FeaturedCards,
		BalanceCard,
		SidebarChart,
		CryptoCard
	},
	data: () => {
		return {
			cardArray: [
				{
					icon: "X",
          iconColor: "orange",
					coinName: "Ripple",
					ticker: "XRP",
					currency: "$",
					currentPrice: 50000,
					percentageChange: -10,
					percentageCount: 3,
          size: "small"
				},
				{
					icon: "O",
          iconColor: "blue",
					coinName: "Ecomi",
					ticker: "OMI",
					currency: "$",
					currentPrice: 600,
					percentageChange: 7,
					percentageCount: 9,
          size: "small"
				},
			],
      searchKeyword: ''
		};
	},
  methods: {
    searchValue(value){
      this.searchKeyword = value;
    }
  }
};
</script>

<style scoped>
.page-container {
	background-color: #161a1e;
}
.page-content-wrapper {
	color: white;
  justify-content: space-between;
}
.aside-wrapper {
	color: white;
	justify-content: space-between;
  align-items: center;
}
.asideCardsWrapper{
	margin: 1rem 0rem;
}
.asideCardsWrapper .card-wrapper{
  margin: 1rem 0rem 0rem 0rem;
}
.chartWrapper{
	justify-content: center;
	margin-top: 1rem;
}
@media all and (min-width:768px){

}
</style>
