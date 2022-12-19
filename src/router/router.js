import {createRouter, createWebHistory} from 'vue-router'


import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent.vue'

//lazy loading
const Dashboard = ()=> import('@/components/dashboard/Dashboard.vue') 

const Servicos = ()=> import(/*webpackChunkName: "servicos"*/'@/components/servicos/Servicos.vue')
const Vendas = ()=> import(/*webpackChunkName: "vendas"*/'@/components/vendas/Vendas.vue')

//lazy loading
const Contratos= () => import(/*webpackChunkName: "vendas"*/'@/components/vendas/Contratos.vue') 

const Leads = ()=> import (/*webpackChunkName: "vendas"*/'@/components/vendas/Leads.vue')
const LeadComponent = ()=> import(/*webpackChunkName: "vendas"*/'@/components/vendas/LeadComponent.vue')
const VendasPadrao = ()=> import(/*webpackChunkName: "vendas"*/'@/components/vendas/VendasPadrao.vue')

const ServicoComponent = ()=> import(/*webpackChunkName: "servicos"*/'@/components/servicos/ServicoComponent.vue')
const Indicadores = ()=> import(/*webpackChunkName: "servicos"*/'@/components/servicos/Indicadores.vue')
const Opcoes = ()=> import(/*webpackChunkName: "servicos"*/'@/components/servicos/Opcoes.vue')

const PaginaNotFound = () => import('@/views/PaginaNotFound.vue' ) 
//----inicio das rotas

const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path:'/home',  //localhost:8080/home
        component: Home,
        children:[
            {
                path:'vendas',         //localhost:8080/home/vendas
                component: Vendas,      // não colocar a '/' do lado esquerdo senão o vue entende que é para renderizar a partir da rota raiz
                children:[
                    {
                        path: 'leads',              //localhost:8080/home/vendas/leads
                        component: Leads,
                        name: 'leads'
                    },
                    {
                        path: 'leads/:id',
                        props:true,              //localhost:8080/home/vendas/leads/idDinamico
                        component: LeadComponent,
                        name: 'lead',
                    },
                    {
                        path: 'contratos',          //localhost:8080/home/vendas/contratos
                        component: Contratos,
                        name: 'contratos'
                    },
                    {
                        path: '',          //localhost:8080/home/vendas/ = component padrão apresentado
                        component: VendasPadrao,
                        name:'vendasPadrao'
                    },
                ]
            },
            {
                path: 'servicos',       //localhost:8080/home/servicos
                component: Servicos,
                name: 'servicos',
                children:[
                    {
                        path:':id',
                        name: 'servico',
                        props:{
                            default: true,
                            indicadores: true,
                            opcoes: true,
                        },
                        components: {
                            default: ServicoComponent,
                            indicadores: Indicadores,
                            opcoes: Opcoes

                        },
                    }

                ]
            },
            {
                path: 'dashboard',       //localhost:8080/home/dashboard
                component:Dashboard,
                name: 'dashboard',
            }
            
        ]
    },
    {
        path: '/login',     //localhost:8080/login
        component: Login
    },
    /*{
        path: '/:catchAll(.*)*', // caso uma rota for digitada errada esse Regex identifica a rota errada, depois dá um redirect para a rota raiz
        redirect: '/'
    }*/
    {
        path: '/:catchAll(.*)*',
        component:PaginaNotFound
    }

]

const router = createRouter({
    history:  createWebHistory(),
    scrollBehavior(to, savedPosition){

        if(savedPosition){
            return savedPosition
        }
        
        if(to.hash){
            return {
                el: to.hash
            }
        }

        return {                // left = X; top=Y
            left: 0,
            top: 0
        }
    },
    routes: routes  //ou somente routes
})

router.beforeEach((to, from)=>{
    console.log(`Origem: ${from}`)
    console.log('----------------')
    console.log(`Destino: ${to}`)
    console.log('----------------')
    //verificar se o usuário está permitido acessar tal rota


})

export default router

//--- fim rotas