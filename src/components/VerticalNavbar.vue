<template>
	<div class="page-wrapper flex-col">
		<div class="logo-div flex-row" v-if="toggler != undefined ? toggler : true ">
			<Icon :icon="icons.menuBoxed" class="toggler-icon" @click="toggleMenu()"/>
		</div>

		<div class="nav-wrapper" v-show="showMenu">
			<ul class="flex-col">

				<router-link :to="{name: 'home'}" class="nav-link">
					<span class="icon"><Icon :icon="icons.homeAlt" /></span>
					<span>Home</span>
				</router-link>

				<router-link :to="{name: 'projects'}" class="nav-link">
					<span class="icon"
						><Icon :icon="icons.trophyOutlined" /></span>
						<span>Projects</span>
				</router-link>

				<router-link :to="{name: 'billings'}" class="nav-link">
					<span class="icon"><Icon :icon="icons.bankIcon" /></span
					><span>Billings</span>
				</router-link>

				<router-link :to="{name: 'teamMembers'}" class="nav-link">
					<span class="icon"><Icon :icon="icons.profileMale" /></span
					><span>Team Members</span>
				</router-link>

				<router-link :to="{name: 'statistics'}" class="nav-link">
						<span class="icon"
						><Icon :icon="icons.bxBarChartAlt2" /></span
					><span>Statistics</span>
				</router-link>

				<router-link :to="{name: 'settings'}" class="nav-link">
					<span class="icon"><Icon :icon="icons.settingsIcon" /></span
					><span>Settings</span>
				</router-link>
			</ul>
		</div>

		<div class="footer-wrapper flex-row" v-show="showThumbnail">
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
	data(){
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
			showMenu: true,
			showThumbnail: true,
			toggler: this.showToggler,
		};
	},
	components: {
		Icon,
	},
	methods: {
		toggleMenu(){
			this.showMenu = !this.showMenu;
			this.showThumbnail = !this.showThumbnail;
			this.$emit("toggleMenu", this.showMenu)
		},
	},
	props: ["showToggler"],
	mounted(){
	}
};
</script>


<style scoped>
.page-wrapper {
	padding: 0.5rem;
	margin: 0rem;
	justify-content: flex-start;
	height: 100%;
	/* width: 90%;
	background-color: rgb(40, 107, 231); */
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
.nav-link {
	height: auto;
	width: 95%;
	padding: 1rem 1rem 1rem 1rem;
	margin: 1rem 0rem;
	border-radius: 0.5rem;
}
.nav-link:hover {
	box-shadow: rgb(199, 238, 231) 0px 0px 8px 1px inset;
	background-color: #4fbe8e;
}
.router-link-active {
	box-shadow: rgb(199, 238, 231)  0px 0px 8px 1px inset;
	background-color: #4fbe8e;
	font-weight: bold;
}
.nav-link span {
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