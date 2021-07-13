import VueRouter from 'vue-router'

import User from './pages/User.vue'

const routes = [{ path: '/user', component: User }]

const router = new VueRouter({
  // mode: 'history',
  routes,
})

export default router
