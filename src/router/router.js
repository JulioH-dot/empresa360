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

import ServicoComponent from '@/components/servicos/ServicoComponent.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'

import PaginaNotFound from '@/views/PaginaNotFound.vue'
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