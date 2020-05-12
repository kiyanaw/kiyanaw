// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import store from './store'

import Home from './pages/home.vue'
import Browse from './pages/browse.vue'
import Detail from './pages/detail.vue'
import NewEnquiry from './pages/new-enquiry.vue'
import AddResponse from './pages/add-response.vue'
import PanelLeftPage from './pages/panel-left.vue'
import Preferences from './pages/preferences.vue'
import Signin from './pages/signin.vue'
import Onboarding from './pages/onboarding.vue'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/new-user/',
    component: Onboarding,
  },
  {
    path: '/new-enquiry/',
    component: NewEnquiry,
  },
  {
    path: '/add-response/',
    component: AddResponse,
  },
  {
    path: '/browse/',
    component: Browse,
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
