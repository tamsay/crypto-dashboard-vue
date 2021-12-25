<template>
	<div class="page-wrapper flex-col">
		<div class="logo-div flex-row">
			<Icon :icon="icons.menuBoxed" class="toggler-icon" />
		</div>

		<div class="nav-wrapper">
			<ul class="flex-col">
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.homeAlt" /></span>
					<span>Home</span>
					
				</li>
				<li class="flex-row">
					<span class="icon"
						><Icon :icon="icons.trophyOutlined" /></span>
						<span>Projects</span>
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.bankIcon" /></span
					><span>Billings</span>
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.profileMale" /></span
					><span>Team Members</span>
				</li>
				<li class="flex-row">
					<span class="icon"
						><Icon :icon="icons.bxBarChartAlt2" /></span
					><span>Statistics</span>
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.settingsIcon" /></span
					><span>Settings</span>
				</li>
			</ul>
		</div>

		<div class="footer-wrapper flex-row">
			<img :src="logo" alt="logo" class="logo" />
		</div>
	</div>
</template>

<script>
import logo from "../assets/images/logo.gif";
import { Icon } from "@iconify/vue";
import homeAlt from "@iconify-icons/uil/home-alt";
import trophyOutlined from "@iconify-icons/ant-design/trophy-outlined";
import bankIcon from "@iconify-icons/mdi/bank";
import profileMale from "@iconify-icons/et/profile-male";
import bxBarChartAlt2 from "@iconify-icons/bx/bx-bar-chart-alt-2";
import settingsIcon from "@iconify-icons/ci/settings";
import menuBoxed from "@iconify-icons/gg/menu-boxed";

export default {
	data: () => {
		return {
			logo: logo,
			icons: {
				homeAlt,
				trophyOutlined,
				bankIcon,
				profileMale,
				bxBarChartAlt2,
				settingsIcon,
				menuBoxed,
			},
		};
	},
	components: {
		Icon,
	},
};
</script>


<style scoped>
.page-wrapper {
	padding: 0.5rem;
	margin: 0rem;
	justify-content: flex-start;
	height: 100%;
}
.logo-div {
	width: 100%;
	justify-content: flex-start;
}
.toggler-icon {
	font-size: 3rem;
	color: white;
	margin-left: 0.5rem;
}
.nav-wrapper {
	width: 100%;
}
ul {
	width: 100%;
	margin: 0rem;
	padding: 0rem;
}
li {
	/* list-style-type: none;
	width: 100%;
	padding: 1rem;
	margin: 0.5rem 0rem;
	color: white;
	border-radius: 0.25rem;
	cursor: pointer;
	text-align: left;
	justify-content: flex-start;
	font-size: 0.875rem;
	border-radius: 0.5rem; */

height: 80px;
width: 100%;
padding: 1rem;
margin: 0.5rem 0rem;
	position: relative;
	display: inline-block;
	background: linear-gradient(180deg, #282828, #202020);
	box-shadow: inset -8px 0 8px rgba(0,0,0, 0.15), inset 0 -8px 8px rgba(0,0,0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75), 10px 20px 25px rgba(0,0,0,0.4);
	overflow: hidden;
	color: white;

}
li::before{
	content: '';
	position: absolute;
	top: 3px;
	left: 4px;
	bottom: 14px;
	right: 12px;
	background: linear-gradient(180deg, #232323, #4a4a4a);
	border-radius: 0.5rem;
	box-shadow: -10px -10px 10px rgba(255,255,255, 0.25), 10px 5px 10px rgba(0,0,0, 0.15);
	border-left: 1px solid #0004;
	border-bottom: 1px solid #0004;
	border-top: 1px solid #0009;
}
li:hover {
	background-color: #f2f2f2;
	color: black;
}
li span {
	position: relative;
	line-height: 1;
	color: white;
}
.icon {
	font-size: 1.25rem;
	margin-right: 0.875rem;
}
.footer-wrapper {
	margin-top: auto;
	margin-bottom: 2rem;
	width: 100%;
}
.footer-wrapper img {
	width: 5rem;
	border-radius: 50%;
	padding: 0rem;
}
</style>