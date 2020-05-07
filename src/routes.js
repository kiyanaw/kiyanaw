import Vue from 'vue'

import Home from './pages/home.vue'
import PanelLeftPage from './pages/panel-left.vue'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
]
