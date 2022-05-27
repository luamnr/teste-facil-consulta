import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaUm from '../pages/PaginaUm.vue'
import PaginaDois from "../pages/PaginaDois"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaUm
  },
  {
    path: "/pagina2",
    name: "pagina2",
    component: PaginaDois
  },
  {
    path: '/*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  history: VueRouter.createMemoryHistory,
  base: process.env.BASE_URL,
  routes
})

export default router
