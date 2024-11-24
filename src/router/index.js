import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Home.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})