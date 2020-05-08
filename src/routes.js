import Vue from 'vue'

import Home from './pages/home.vue'
import Detail from './pages/detail.vue'
import NewEnquiry from './pages/new-enquiry.vue'
import PanelLeftPage from './pages/panel-left.vue'
import Preferences from './pages/preferences.vue'
import Signin from './pages/signin.vue'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/new-enquiry/',
    component: NewEnquiry,
  },
  {
    path: '/detail/',
    component: Detail,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/preferences/',
    component: Preferences,
  },
  {
    path: '/sign-in/',
    component: Signin,
  },
]
