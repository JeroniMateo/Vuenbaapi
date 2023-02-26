import { createRouter, createWebHistory } from 'vue-router'
import NBA from '../views/NBA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nba',
      component: NBA
    }
  ]
})

export default router
