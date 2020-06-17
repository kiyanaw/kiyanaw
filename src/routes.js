// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

import Home from './pages/home.vue'
import Browse from './pages/browse.vue'
import Detail from './pages/detail.vue'
import NewEnquiry from './pages/new-question.vue'
import Question from './pages/question.vue'
import AddResponse from './pages/add-response.vue'
import PanelLeftPage from './pages/panel-left.vue'
import Preferences from './pages/preferences.vue'
import Signin from './pages/signin.vue'
import About from './pages/about.vue'
import Playlist from './pages/playlist.vue'
import Favorites from './pages/favorites.vue'
import MyQuestions from './pages/myQuestions.vue'
import UnansweredQuestions from './pages/unansweredQuestions.vue'

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/playlist/',
    component: Playlist,
  },
  {
    path: '/favorites/',
    component: Favorites,
  },
  {
    path: '/new-question/',
    component: NewEnquiry,
  },
  {
    path: '/add-response/:enquiryId',
    component: AddResponse,
  },
  {
    path: '/browse/',
    component: Browse,
  },
  {
    path: '/detail/:enquiryId',
    component: Detail,
  },
  {
    path: '/question/:questionId',
    component: Question,
  },
  {
    path: '/my-questions/',
    component: MyQuestions,
  },
  {
    path: '/unanswered-questions/',
    component: UnansweredQuestions,
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
