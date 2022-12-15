<template>
    <div>

        <h1>-_- Opsss!! Página não encontrada</h1>
        
    </div>

</template>

<script>


export default{
    name: 'PaginaNotFound',
    mounted(){
        
        setTimeout(()=>{
            this.$router.push('/')

        }, 5000)
    }
}
</script>
