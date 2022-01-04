<template>
<div class="backdrop" v-show="showModal" @click = "toggleModal()" >
    <div class="modal-wrapper">
        <Nav v-bind:showToggler = "showToggler"  />
    </div>
</div>

</template>

<script>
import Nav from "./VerticalNavbar.vue";
export default {
    components:{
        Nav
    },
    data: () => {
        return{
            showToggler: false,
            showModal: true,
        }
    },
    methods: {
        toggleModal(){
            this.showModal = !this.showModal
            this.$emit("toggleMenu");
        }
    },
    mounted(){
        console.log(this.showModal)
    }
}
</script>

<style>
.backdrop {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 10000;
    background-color: blue;
    overflow-y: auto;
}
.modal-wrapper {
    position: relative;
    background-color: pink;
    width: 100%;
}

</style>