<template>
	<div class="page-container row">
    <div class="mobile-nav-div">
      <MobileMenuHeader @toggleMenu = "toggleMobileMenu($event)"/>
      <MobileMenuModal  v-show="toggleMenu" @toggleMenu = "toggleMobileMenu($event)" />
    </div>
		<div class="col-lg-2 vertical-nav-div">
			<VerticalNavbar @toggleMenu = "toggleVerticalMenu($event, data)" />
		</div>
    <div class="col-lg-10 flex-row page-content-wrapper">
      <router-view/>
    </div>
	</div>
</template>

<script>
import VerticalNavbar from "./components/VerticalNavbar.vue";
import MobileMenuModal from "./components/MobileMenuModal.vue";
import MobileMenuHeader from "./components/MobileMenuHeader.vue";

export default {
	name: "App",
	components: {
		VerticalNavbar, MobileMenuModal, MobileMenuHeader,
	},
	data: () => {
		return {
			toggleMenu: false,
		};
	},
  methods: {
    toggleMobileMenu(){
      this.toggleMenu = !this.toggleMenu
    },
     toggleVerticalMenu(value){
      this.toggleMenu = !value
    }
  }
};
</script>

<style scoped>
.page-container {
	background-color: #161a1e;
	background-color: #191734;
  
	height: 100%;
  width: 100%;
  /* overflow-y: hidden; */
}
.mobile-nav-div {
	margin: 0rem;
	padding: 0rem;
	border-right: 1px solid rgba(255, 255, 255, 0.25);
  position: fixed;
  z-index: 10000;
  background-color: #161a1e;
}
.vertical-nav-div {
	display: none;
}
.page-content-wrapper {
	margin: 4rem 0rem 0rem 0rem;
	padding: 0.5rem;
	color: white;
  min-height: 100vh;
  overflow-y: hidden;
  align-items: flex-start;
}
@media all and (min-width:1200px){
    .page-container {
    flex-wrap: nowrap;
  }
  .mobile-nav-div{
    display: none;
  }
  .vertical-nav-div {
    display: block;
    margin: 0rem;
    padding: 0rem;
    border-right: 1px solid rgba(255, 255, 255, 0.25);
    height: 100vh;
    overflow-y: auto;
}
}
</style>
