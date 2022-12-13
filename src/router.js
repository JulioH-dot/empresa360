import {createRouter, createWebHistory} from 'vue-router'


import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent.vue'

import Dashboard from '@/components/dashboard/Dashboard.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Vendas from '@/components/vendas/Vendas.vue'

import Contratos from '@/components/vendas/Contratos.vue'
import Leads from '@/components/vendas/Leads.vue'
import LeadComponent from'@/components/vendas/LeadComponent.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'


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
                        path: 'leads/:id',              //localhost:8080/home/vendas/leads/idDinamico
                        component: LeadComponent
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
                name: 'servicos'
            },
            {
                path: 'dashboard',       //localhost:8080/home/dashboard
                component: Dashboard,
                name: 'dashboard',
            }
            
        ]
    },
    {
        path: '/login',     //localhost:8080/login
        component: Login
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes: routes  //ou somente routes
})


export default router

//--- fim rotas