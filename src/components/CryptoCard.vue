<template>
	<div class="wrapper flex-col" :class="size">
		<div class="icon-div flex-row">
			<span :style = "{backgroundColor : iconColor}" >
			{{ icon }}
			</span>
		</div>
		<div class="details-section flex-row">
			<div class="flex-col details-sub-div div1">
				<p class="coin-name">{{ coinName }}</p>
				<p class="ticker">{{ ticker }}</p>
			</div>

			<div class="flex-col details-sub-div div2">
				<img :src="miniChart" alt="mini-chart">
			</div>

			<div class="flex-col details-sub-div div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p :class="['percentage-change', percentageChange >= 0 ? 'positive' : 'negative']">
					{{ percentageChange >= 0 ? `+${percentageChange}` : `${percentageChange}`}}{{' '}}({{
						percentageCount
					}})
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import MiniChart from "../assets/images/mini-chart.png"

export default {
	data: () => {
		return {
			miniChart: MiniChart,		  
		};
	},
	props: [
		"icon",
		"iconColor",
		"coinName",
		"ticker",
		"currency",
		"currentPrice",
		"percentageChange",
		"percentageCount",
		"size"
	],
	components: {},
	methods: {}
};
</script>

<style scoped>
.wrapper {
	background-color: rgb(238, 131, 117);
	background-color: rgb(43, 40, 40);
	border-radius: 0.5rem;
	margin: 0.625rem 0rem;
	padding: 1rem 0.75rem;
	width: 100%;
}
.small{
	padding: 0.75rem 1rem;
}
.icon-div{
	justify-content: flex-start;
}
.icon-div span{
	border-radius: 0.25rem;
	padding: 0.25rem 0.5rem;
	line-height: 1;
	margin: 0rem;
	border: none;
	color: black;
	background-color: white;
	font-weight: bold;
}
.small .icon-div span{
	padding: 0.125rem 0.25rem;
}
.details-section {
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	margin: 1rem 0rem 0rem 0rem;
	width: 100%;
	overflow-x: auto;
}
.small .details-section{
	margin: 0.5rem 0rem;
}
.details-sub-div{
	min-width: 33.33%;
}
.div1 {
	align-items: flex-start;
}
.coin-name {
	font-size: 1.125rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
}
.small .coin-name{
	margin-bottom: 0.25rem;
}
.ticker {
	font-weight: bold;
	font-size: 0.875rem;
}
.div2 {
	padding: 0rem 0.25rem;
}
.div2 img {
	width: 100%;
	}
.div3 {
	align-items: flex-end;
}
.current-price {
	font-size: 1.125rem;
	margin-bottom: 0.5rem;
	font-weight: bold;
}
.small .current-price{
	margin-bottom: 0.25rem;
}
.percentage-change {
	font-weight: bold;
	font-size: 0.875rem;
}
</style>