import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Currencies from '../views/Currencies.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/currencies',
    name: 'Currencies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => Currencies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
