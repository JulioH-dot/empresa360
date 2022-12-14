<template>
  <div>
    <h5>Serviços components</h5>
    <hr>
    <div class="row">
      <div class="col mb-2" v-for="d in dados" :key="d.id">
        <div class="card card-person">
          <img :src="`/img/${d.icone}`" class="card-img-top">
          <div class="card-body text-center">
            <p class="card-text">{{d.servico}}</p>
          </div>
        </div>
      </div>
    </div>
    <router-view class="mt-3"/>
  </div>
</template>
  
<script>
import apiMixins from '@/apiMixins.js'
  
  
export default {
  name: 'Servicos',
  mixins: [apiMixins],
  created(){
    this.getDadosApi('http://localhost:3000/servicos')
  }
}
</script>
  
<style scoped>
  .card-person{
    width: 11rem
  }
</style>