<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{dados.servico}}</div>
        <div class="card-body">
            <p class="card-text">{{d.descricao}}</p>
        </div>
    </div>
  </template>
  
  <script>
  import apiMixins from '@/apiMixins.js'
  
  export default {
    name: 'ServicoComponent',
    mixins: [apiMixins],
    created(){
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    }
  }
  </script>
  
  <style>
 
  </style>