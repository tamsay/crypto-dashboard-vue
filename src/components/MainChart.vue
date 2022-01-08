<template>
	<div class="chart-wrapper flex-col">
		<div class="header flex-row">
			<select class='currency-dropdown' name="currency-dropdown" id="currency-dropdown">
				<option value="">BTC/USD</option>
				<option value="">BTC/ETH</option>
				<option value="">BTC/BSC</option>
				<option value="">BTC/NGN</option>
			</select>
			<button class='toggler flex-row'>
				<Icon
					class="icon"
					icon="heroicons-solid:menu-alt-2"
					:rotate="3"
				/>
			</button>
		</div>
		<div class="chart-div flex-row">
			<CandlestickChart :chartData="chartData" />
		</div>
	</div>
</template>

<script>
import { Icon } from "@iconify/vue";
import caretDownFill from "@iconify-icons/bi/caret-down-fill";
import CandlestickChart from "./CandlestickChart.vue";
import chartData from "../utils/candleStickChartData";

export default {
	data: () => {
		return {
			icons: {
				caretDownFill
			},
			chartData: chartData
		};
	},
	components: {
		Icon,
		CandlestickChart
	}
};
</script>

<style scoped>
.chart-wrapper {
	margin: 0.5rem 0rem;
}
.header {
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
}
.currency-dropdown {
	padding: 0.25rem 0.625rem 0.25rem 0.25rem;
	font-size: 1rem;
	color: white;
	background-color:gray;
	justify-content: space-around;
	align-items: center;
	width: fit-content;
	border-radius: 0.25rem;
	font-weight: bold;
	outline: none;
}
.toggler {
	color: white;
	background-color:gray;
	justify-content: center;
	width: auto;
	border-radius: 0.25rem;
	padding: 0.25rem;
}
.icon {
	font-size: 1rem;
	padding: 0rem;
	margin: 0rem;
}
.chart-div {
	width: 100%;
}
</style>