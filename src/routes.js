import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import SearchPage from './pages/search.vue';
import BrowsePage from './pages/browse.vue';
import DetailPage from './pages/detail.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import Transcribe from './pages/transcribe.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/',
    component: BrowsePage,
  },

  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/transcribe/',
    component: Transcribe,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
