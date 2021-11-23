<template>
	<div class="page-wrapper flex-col">
		<div class="logo-div flex-row">
			<Icon :icon="icons.menuBoxed" class="toggler-icon" />
		</div>

		<div class="nav-wrapper">
			<ul class="flex-col">
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.homeAlt" /></span>Home
				</li>
				<li class="flex-row">
					<span class="icon"
						><Icon :icon="icons.trophyOutlined" /></span
					>Projects
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.bankIcon" /></span
					>Billings
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.profileMale" /></span
					>Team Members
				</li>
				<li class="flex-row">
					<span class="icon"
						><Icon :icon="icons.bxBarChartAlt2" /></span
					>Statistics
				</li>
				<li class="flex-row">
					<span class="icon"><Icon :icon="icons.settingsIcon" /></span
					>Settings
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
	list-style-type: none;
	width: 100%;
	padding: 1rem;
	margin: 0.5rem 0rem;
	color: white;
	border-radius: 0.25rem;
	cursor: pointer;
	text-align: left;
	justify-content: flex-start;
	font-size: 0.875rem;
	box-shadow: 0 0 0.75rem rgba(231, 223, 223, 0.25);
	transition: transform 1s ease-in-out;

	/* box-shadow: 0 9px 0 rgba(219, 31, 5, 1),0px 9px 25px rgba(0, 0, 0, .7);
    background-color: rgba(219, 87, 51, 1);
    color: rgba(255, 255, 255, 1);   */

	border-radius: 0.5rem;
	/* background: linear-gradient(145deg, #2b4715, #335519); */
	box-shadow: 2px 2px 8px #253d12, -2px -2px 8px #3b611c;

	/* border: none;
 color: #090909;
 padding: 0.7em 1.7em;
 font-size: 18px;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff; */
}
li:hover {
	background-color: #f2f2f2;
	color: black;
}
li span {
	line-height: 1;
}
.icon {
	font-size: 1.5rem;
	margin-right: 1.5rem;
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