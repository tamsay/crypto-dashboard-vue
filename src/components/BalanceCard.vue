<template>
<div class="container">

	<div class="wrapper flex-col top">
		<div class="icon-div flex-row"><Icon class="icon" :icon="icons.fireIcon" /></div>
		<div class="details-section flex-col col">
			<div class="flex-col div1">
				<p class="title">{{ cardTitle }}</p>
				<p class="balance">{{ balanceValue }}</p>
			</div>

			<div class="flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p class="percentage-change">
					{{ gainIndicator }}{{ percentageChange }}%
					<Icon :icon="icons.arrowUpRight" />
				</p>
			</div>
		</div>
	</div>

	<!-- <div class="wrapper flex-col middle">
		<div class="icon-div flex-row"><Icon class="icon" :icon="icons.fireIcon" /></div>
		<div class="details-section flex-col col">
			<div class="flex-col div1">
				<p class="title">{{ cardTitle }}</p>
				<p class="balance">{{ balanceValue }}</p>
			</div>

			<div class="flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p class="percentage-change">
					{{ gainIndicator }}{{ percentageChange }}%
					<Icon :icon="icons.arrowUpRight" />
				</p>
			</div>
		</div>
	</div>

	<div class="wrapper flex-col bottom">
		<div class="icon-div flex-row"><Icon class="icon" :icon="icons.fireIcon" /></div>
		<div class="details-section flex-col col">
			<div class="flex-col div1">
				<p class="title">{{ cardTitle }}</p>
				<p class="balance">{{ balanceValue }}</p>
			</div>

			<div class="flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p class="percentage-change">
					{{ gainIndicator }}{{ percentageChange }}%
					<Icon :icon="icons.arrowUpRight" />
				</p>
			</div>
		</div>
	</div> -->

</div>

</template>

<script>
import { Icon } from "@iconify/vue";
import fireIcon from "@iconify-icons/noto/fire";
import arrowUpRight from "@iconify-icons/akar-icons/arrow-up-right";

export default {
	data: () => {
		return {
			icon: "B",
			cardTitle: "Total Balance",
			balanceValue: "3,600,000",
			currency: "$",
			currentPrice: "600000",
			gainIndicator: "+",
			percentageChange: "4",
			icons: {
				fireIcon,
				arrowUpRight
			}
		};
	},
	components: { Icon },
	methods: {}
};
</script>

<style scoped>
.container {
	margin-top: 0rem;
	position: relative;
	height: 40vh;
}
.wrapper {
	width: fit-content;
	background-color: rgb(60, 137, 236);
	border-radius: 0.5rem;
	margin: 0rem 0rem;
	padding: 1.25rem 1rem;
	align-items: center;
}
.top {
	position: absolute;
	left: 0%;
	top: 10%;
	z-index: 1000;
}
.middle{
	top: 10%;
	position: absolute;
	left: 0%;
	z-index: 99;
	transform: rotate(17.5deg);
	transform-origin: 50% 100%;
	background-color: yellow;
}
.bottom{
	position: absolute;
	left: 0%;
	top: 10%;
	transform: rotate(39.5deg);
transform-origin: 50% 90%;
	background-color: red;
}
.icon-div {
	margin-bottom: 1rem;
}
.icon-div .icon{
	font-size: 2rem;

}
.details-section {
	align-items: center;
}
.div1 {
	align-items: center;
	width: auto;
}
.title {
	font-size: 0.875rem;
	font-weight: bold;
	margin-bottom: 1rem;
}
.balance {
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 1rem;
}
.div3 {
	align-items: center;
}
.current-price {
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 1rem;
}
.percentage-change {
	font-weight: bold;
	font-size: 1rem;
	margin-bottom: 1rem;
	color: rgb(68, 230, 68);
}
</style>