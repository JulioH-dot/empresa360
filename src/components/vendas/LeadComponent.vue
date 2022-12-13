<template>
    <div>
        <h5> {{dados.id}} - {{dados.nome}}</h5>
        <div class="m-3 row">
            <label  class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>
        <div class="m-3 row">
            <label  class="col-sm-2 col-form-label">Nome: </label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>
        <div class="m-3 row">
            <label  class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
  </template>
  
  <script>
  import apiMixins from '@/apiMixins.js'
  
  export default {
    name: 'LeadComponent',
    mixins: [apiMixins],
    created(){
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
  }
  </script>
  
  <style>
  
  </style>