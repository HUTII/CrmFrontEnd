import { createWebHistory, createRouter } from 'vue-router'
import mainView from './mainView'

const routes = [
  {
    path: '/',
    component: () => import('@/components/MainView.vue'),
    children: mainView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})