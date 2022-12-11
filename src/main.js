import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'


const vue = createApp(App)

vue.use(router) //adicionando as configurações de rotas a instância do vue

vue.mount('#app')

