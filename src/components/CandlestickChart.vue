<template>
	<div id="chart">
		<apexchart
			type="candlestick"
			height="400"
			:options="chartData.chartOptions"
			:series="chartData.series"
		></apexchart>
	</div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
	props: ["chartData"],
	components: {
		apexchart: VueApexCharts
	}
};
</script>

<style scoped>
#chart {
	width: 100%;
	color: white;
	height: 100%;
}
 #chart .apexcharts-tooltip {
    background: #f3f3f3;
    color: orange;
  }
</style>