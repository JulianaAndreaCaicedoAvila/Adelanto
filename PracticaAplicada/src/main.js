import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './style.css'
//componentes Mis clases 
import Login from './Login.vue'
import TareasDocente from './TareasDocente.vue'
import VistaDocente from './VistaDocente.vue'
import CargadePagina from './CargadePagina.vue'

//componentes de Bootstrap para el HTML
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js' 
import 'bootstrap-vue/dist/bootstrap-vue.min.css'


//Enrutador

const routes = [
    {
        path: '/', component: CargadePagina,
    },{
        path: '/TareasDocente', component: TareasDocente,
    },{
        path: '/VistaDocente', component: VistaDocente,
    },{
        path: '/Login', component: Login,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(CargadePagina)
app.use(router)
app.mount('#app')
