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
    path: '/especialidades-form',
    name: 'especialidades-form',
    component: () => import(/* webpackChunkName: "about" */ '../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-list.vue')
  },
  {
    path: '/convenio-form',
    name: 'convenio-form',
    component: () => import(/* webpackChunkName: "about" */ '../views/convenio/convenio-form.vue')
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: () => import(/* webpackChunkName: "about" */ '../views/agendamentoView.vue')
  },
  {
    path: '/agendamentoForm',
    name: 'agendamentoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/agendamentoForm.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import(/* webpackChunkName: "about" */ '../views/historicoView.vue')
  },
  {
    path: '/historicoForm',
    name: 'historicoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/historicoForm.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import(/* webpackChunkName: "about" */ '../views/medicoView.vue')
  },
  {
    path: '/medicoForm',
    name: 'medicoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/medicoForm.vue')
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacienteView.vue')
  },
  {
    path: '/pacienteForm',
    name: 'pacienteForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/pacienteForm.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretariaView.vue')
  },
  {
    path: '/secretariaForm',
    name: 'secretariaForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/secretariaForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
