import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Galeria from '@/views/Galeria.vue'
import QuemSomos from '@/views/QuemSomos.vue'
import Contato from '@/views/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/quemsomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
