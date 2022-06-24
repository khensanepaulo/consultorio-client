import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/especialidades',
    name: 'especialidades',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-list.vue')
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: () => import(/* webpackChunkName: "about" */ '../views/agendamentoView.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import(/* webpackChunkName: "about" */ '../views/historicoView.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import(/* webpackChunkName: "about" */ '../views/medicoView.vue')
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacienteView.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretariaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
