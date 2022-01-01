import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Billings from '../views/Billings.vue'
import TeamMembers from '../views/TeamMembers.vue'
import Statistics from '../views/Statistics.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/billings',
    name: 'billings',
    component: Billings,
  },
  {
    path: '/team-members',
    name: 'teamMembers',
    component: TeamMembers,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
