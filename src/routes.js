import Vue from 'vue'

import Home from './pages/home.vue'
import PanelLeftPage from './pages/panel-left.vue'
import Preferences from './pages/preferences.vue'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/preferences/',
    component: Preferences,
  },
]
