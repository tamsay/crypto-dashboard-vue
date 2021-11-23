<template>
	<div class="wrapper flex-col">
		<div class="icon-div flex-row">
			<span>
			{{ icon }}
			</span>
		</div>
		<div class="details-section flex-row row">
			<div class="col-4 flex-col div1">
				<p class="coin-name">{{ coinName }}</p>
				<p class="ticker">{{ ticker }}</p>
			</div>

			<div class="col-4 flex-col div2">mini chart</div>

			<div class="col-4 flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p class="percentage-change">
					{{ gainIndicator }}{{ percentageChange }}({{
						percentageCount
					}})
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {};
	},
	props: [
		"icon",
		"coinName",
		"ticker",
		"currency",
		"currentPrice",
		"gainIndicator",
		"percentageChange",
		"percentageCount"
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
	padding: 0.75rem 1rem;
}
.icon-div{
	justify-content: flex-start;
}
.icon-div span{
	border-radius: 0.25rem;
	padding: 0.125rem 0.25rem;
	line-height: 1;
	margin: 0rem;
	border: none;
	color: black;
	background-color: white;
}
.details-section {
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	margin: 0.5rem 0rem;
}
.div1 {
	align-items: flex-start;
	width: auto;
}
.coin-name {
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 0.25rem;
}
.ticker {
	font-weight: bold;
	font-size: 0.625rem;
}
.div2 {
	width: auto;
	font-weight: bold;
	font-size: 0.875rem;
	padding: 0rem 0.5rem;
}
.div3 {
	align-items: flex-end;
	width: auto;
}
.current-price {
	font-size: 1rem;
	margin-bottom: 0.25rem;
	font-weight: bold;
}
.percentage-change {
	font-weight: bold;
	font-size: 0.625rem;
	color: rgb(44, 218, 44);
}
</style>