<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{dados.servico}}</div>
        <div class="card-body">
            <p class="card-text">{{dados.descricao}}</p>
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
    },
    
    watch:{
        $route(to){
            if(to.params.id != undefined){
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`) 
            }
        }
    }/*
    beforeRouteUpdate(to, next){
        // to = $route para onde estamos indo 
        // from = $route de onde estamos vindo
        // next = faz com que siga o fluxo de navegação

        if(to.params.id != undefined){
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`) 
        }

        next()
    }*/
  }
  </script>
  
  <style>
 
  </style>