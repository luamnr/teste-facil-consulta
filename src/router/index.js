import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaUm from '../pages/PaginaUm.vue'
import PaginaDois from "../pages/PaginaDois"
import PaginaTres from "../pages/PaginaTres"
import PaginaQuatro from "../pages/PaginaQuatro"

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
    path: "/pagina3",
    name: "pagina3",
    component: PaginaTres
  },
  {
    path: "/pagina4",
    name: "pagina4",
    component: PaginaQuatro
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
