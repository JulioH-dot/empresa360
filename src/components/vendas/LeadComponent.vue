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
        <div class="col-auto d-flex justify-content-around">
            <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
  </template>
  
  <script>
  import apiMixins from '@/apiMixins.js'
  
  export default {
    name: 'LeadComponent',
    mixins: [apiMixins],
    props:['id'],
    created(){

        this.getDadosApi(`http://localhost:3000/leads/${this.id}`)
    },
    beforeRouteLeave(){
        const confirmar = window.confirm('Deseja Sair?')

        if(confirmar){
            return confirmar
        } else{
            return confirmar
        }
    }
  }
  </script>
  
  <style>
 
  </style>