<template>
	<div id="chart">
		<apexchart
			type="bar"
			height="auto"
			:options="options"
			:series="series"
			class="inner-chart-wrapper"
		></apexchart>
	</div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
	props: ["options", "series"],
	components: {
		apexchart: VueApexCharts
	}
};
</script>

<style scoped>
#chart {
	width: 100%;
	color: black;
	height: 100%;
}
#chart .inner-chart-wrapper {
	/* min-height: 10px !important; */
}
</style>