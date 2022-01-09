<template>
<div class="container flex-col">

	<div class="wrapper flex-col top">
		<div class="icon-div flex-row"><Icon class="icon" :icon="icons.fireIcon" /></div>
		<div class="details-section flex-col col">
			<div class="flex-col div1">
				<p class="title">{{ cardTitle }}</p>
				<p class="balance">{{ balanceValue }}</p>
			</div>

			<div class="flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p :class="['percentage-change', percentageChange >= 0 ? 'positive' : 'negative']">
					{{ percentageChange >= 0 ? `+${percentageChange}` : `${percentageChange}`}}%
					<Icon v-if="percentageChange >= 0" :icon="icons.arrowUpRight" />
					<Icon v-else :icon="icons.arrowDownRight" />
					
				</p>
			</div>
		</div>
	</div>

	<div class="wrapper flex-col middle">
		<div class="icon-div flex-row"><Icon class="icon" :icon="icons.fireIcon" /></div>
		<div class="details-section flex-col col">
			<div class="flex-col div1">
				<p class="title">{{ cardTitle }}</p>
				<p class="balance">{{ balanceValue }}</p>
			</div>

			<div class="flex-col div3">
				<p class="current-price">{{ currency }}{{ currentPrice }}</p>
				<p :class="['percentage-change', percentageChange >= 0 ? 'positive' : 'negative']">
					{{ percentageChange >= 0 ? `+${percentageChange}` : `${percentageChange}`}}%
					<Icon v-if="percentageChange >= 0" :icon="icons.arrowUpRight" />
					<Icon v-else :icon="icons.arrowDownRight" />
					
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
				<p :class="['percentage-change', percentageChange >= 0 ? 'positive' : 'negative']">
					{{ percentageChange >= 0 ? `+${percentageChange}` : `${percentageChange}`}}%
					<Icon v-if="percentageChange >= 0" :icon="icons.arrowUpRight" />
					<Icon v-else :icon="icons.arrowDownRight" />
					
				</p>
			</div>
		</div>
	</div>

</div>

</template>

<script>
import { Icon } from "@iconify/vue";
import fireIcon from "@iconify-icons/noto/fire";
import arrowUpRight from "@iconify-icons/akar-icons/arrow-up-right";
import arrowDownRight from '@iconify-icons/akar-icons/arrow-down-right';

export default {
	data: () => {
		return {
			cardTitle: "Total Balance",
			balanceValue: 3600000,
			currency: "$",
			currentPrice: 600000,
			percentageChange: -40,
			icons: {
				fireIcon,
				arrowUpRight,
				arrowDownRight
			}
		};
	},
	components: { Icon },
	methods: {},
	mounted(){}
};
</script>

<style scoped>
.container {
	margin: 0rem;
	padding: 0rem 0rem;
	height: 50vh;
	align-items: center;	
}
.wrapper {
	width: fit-content;
	border-radius: 0.5rem;
	margin: 0rem 0rem;
	padding: 1.25rem 1rem;
	align-items: center;
}
.top {
	background-color: rgb(60, 137, 236);
	z-index: 1000; 
	transform: translateY(100%);
}
.tp::after {
	content: "";
	background-color: rgb(139, 236, 60);
	/* z-index: 99; */
	transform: translateY(-0%) rotate(17.5deg);
	transform-origin: 50% 100%;
	height: 100%;
}
.middle{
	z-index: 99;
	transform: translateY(-0%) rotate(17.5deg);
	transform-origin: 50% 100%;
	background-color: yellow;
	color: yellow;
}
.bottom{
	transform: translateY(-100%) rotate(39.5deg);
	transform-origin: 50% 90%;
	background-color: red;
	color: red;
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
}
</style>