import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/Inicio',
            name: 'inicio',
            component: Inicio
        }, 
        {
            path: '/Busqueda',
            name: 'busqueda',
            component: () => import("./views/Busqueda.vue")
        }, {
            path: '/Ventas',
            name: 'ventas',
            component: () => import("./views/Ventas.vue")
        },
        {
            path: '/Total',
            name: 'total',
            component: () => import("./views/Ventas.vue")
        }   
    ]
})