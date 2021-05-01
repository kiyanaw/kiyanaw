import VueRouter from 'vue-router'

import SignIn from './components/SignIn.vue'

const routes = [
  { path: '/sign-in/', component: SignIn },
  // { path: '/bar', component: Bar },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
