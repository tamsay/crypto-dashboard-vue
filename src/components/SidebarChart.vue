<template>
	<ColumnChart :options="chartData.chartOptions" :series="chartData.series" />
</template>

<script>
import ColumnChart from "./ColumnChart.vue";
import chartData from "../utils/sidebarData.js";

export default {
	data: () => {
		return {
			chartData: chartData
		};
	},
	components: {
		ColumnChart
	}
};
</script>