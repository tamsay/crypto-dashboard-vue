<template>
<div>
    <h2>Team Members Details Page</h2>
    <p> The route params details is: {{$route.params.id}}</p>
</div>

</template>

<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>