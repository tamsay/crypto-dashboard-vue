<template>
	<div class="page-container row">
		<div class="col-lg-2 vertical-nav-div">
			<VerticalNavbar />
		</div>
    <div class="col-lg-10 page-content-wrapper">
      <router-view/>
    </div>
	</div>
</template>

<script>
import VerticalNavbar from "./components/VerticalNavbar.vue";

export default {
	name: "App",
	components: {
		VerticalNavbar,
	},
	data: () => {
		return {
			
		};
	},
};
</script>

<style scoped>
.page-container {
	background-color: #161a1e;
	height: 100%;
  width: 100%;
  /* overflow-y: hidden; */
}
.vertical-nav-div {
	margin: 0rem;
	padding: 0rem;
	border-right: 1px solid rgba(255, 255, 255, 0.25);
  height: 100vh;
  overflow-y: auto;
}
.page-content-wrapper {
	margin: 0rem;
	padding: 1rem;
	color: white;
  height: 100%;
  overflow-y: hidden;
}
@media all and (min-width:1200px){}
</style>
