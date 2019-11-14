import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gare from '../views/Gare.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gare/:id',
    name: 'gare',
    component: Gare
  },
]

const router = new VueRouter({
  routes
})

export default router
