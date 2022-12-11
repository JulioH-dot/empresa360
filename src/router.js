import {createRouter, createWebHistory} from 'vue-router'


import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent.vue'

//----inicio das rotas


const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path:'/home',  //localhost:8080/home
        component: Home
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