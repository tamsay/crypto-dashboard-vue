<template>
  <div class="flex-row component-wrapper">
      <div class="logo-div flex-row">
			<img :src="logo" alt="logo" class="logo" />
      </div>
      <div class="toggler-div flex-row">
			<Icon :icon="icons.menuBoxed" class="toggler-icon" @click = "toggleMenu()" />
		</div>
  </div>
</template>

<script>
import logo from "../assets/images/logo.gif";
import { Icon } from "@iconify/vue";
import menuBoxed from "@iconify-icons/gg/menu-boxed";

export default {
    data: () => {
        return {
            toggleState: false,
			logo: logo,
            icons: {
                menuBoxed
			},
        }
    },
    methods: {
        toggleMenu(){
            this.toggleState = !this.toggleState;
            this.$emit("toggleMenu", this.toggleState);
        }
    },
    components: {
		Icon,
	},
}
</script>

<style>
.component-wrapper{
    justify-content: space-between;
    padding: 0.25rem !important;
    /* background-color: #282748; */
	background-color: #191734;

}
.logo-div {
	width: 100%;
	justify-content: flex-start !important;
    align-items: center;
}
.logo-div .logo {
	width: 3rem;
	border-radius: 50%;
	padding: 0rem;
}
.toggler-div {
    justify-content: flex-end !important;
    align-items: center;
}
.toggler-icon {
	font-size: 3rem;
	color: white;
}
</style>