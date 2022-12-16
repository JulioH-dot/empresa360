<template>
    <h5>Indicadores</h5>
</template>

<script>

export default{
    name:'Indicadores',
    created(){
        console.log(`indicadores ${this.$route.params.id}`)  //sem o uso de props
    }
}
</script>

<style>

</style>