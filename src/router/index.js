import { createRouter, createWebHistory } from 'vue-router'
import Nba from '../views/Nba.vue'
import Games from '../views/Games.vue'
import Players from '../views/Players.vue'
import Stats from '../views/Stats.vue'
import Teams from '../views/Teams.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nba',
      component: Nba
    },   {
      path: '/games',
      name: 'games',
      component: Games
    },   {
      path: '/players',
      name: 'players',
      component: Players
    },   {
      path: '/stats',
      name: 'stats',
      component: Stats
    },   {
      path: '/Teams',
      name: 'teams',
      component: Teams
    }
  ]
})

export default router
