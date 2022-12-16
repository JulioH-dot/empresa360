<template>
    <h5>Opções</h5>
</template>

<script>

export default{
    name:'Opcoes',
    props:['id'],
    created(){
        console.log(`opçoes ${this.id}`)  //recuperaando via props o parâmetro
    }
}
</script>

<style>

</style>