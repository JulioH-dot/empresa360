<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
          <div class="row">
            <div class="col-6">
                <label class="form-label">ID Contrato:</label>
                <input type="text" class="form-control" v-model="formSearch.id_like">
            </div>
            <div class="col-6">
              <label class="form-label">Data início:</label>
              <div class="input-group">
                <input type="date" class="form-control"  v-model="formSearch.data_inicio_gte">
                <input type="date" class="form-control"  v-model="formSearch.data_inicio_lte">
              </div>
            </div>
          </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="search()">Pesquisar</button>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Lead</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data Início</th>
          <th scope="col">Data Final</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{d.id}}</td>
          <td>{{d.lead.nome}}</td>
          <td>{{d.servico.servico}}</td>
          <td>{{d.data_inicio}}</td>
          <td>{{d.data_fim}}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import apiMixins from '@/apiMixins.js'
  
  
export default {
  name: 'Contratos',
  mixins: [apiMixins],
  data:()=>({
    relationshipParams: '_expand=lead&_expand=servico',
    formSearch:{
      id_like:'',
      data_inicio_gte:'',
      data_inicio_lte:''
    }
  }),
  methods:{
    search(){

      const url = `http://localhost:3000/contratos?${this.relationshipParams}`
    
      this.getDadosApi(url, this.formSearch)
    
    }
  },

  created(){
  
    const url = `http://localhost:3000/contratos?${this.relationshipParams}`
    
    this.getDadosApi(url, this.$route.query)
  },

  beforeRouteUpdate(to, next){
    //console.log(to.query)     //objeto vamos tranformar em URLSearchParams
    //console.log(from.query)  //objeto vamos tranformar em URLSearchParams

    const url =  `http://localhost:3000/contratos?${this.relationshipParams}`
    
    this.getDadosApi(url, to.query)
    next()
  }
}
</script>
  
<style>
  .btn{
    margin: 5px
  }
</style>