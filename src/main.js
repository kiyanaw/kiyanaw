/* eslint-disable no-unused-vars */
// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import F7 Vue Plugin
// eslint-disable-next-line import/extensions
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css';

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css';

// Import Material Icons
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css';

// Import Fontawesome Theme Styles
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css';

// Import fastClick
import FastClick from 'fastclick';

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component

// Import Vuex Storage
import Vuex from 'vuex';

import '@aws-amplify/ui-vue';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { Logger } from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports';

import store from './store';
import app from './main.vue';

Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules, Logger);
Vue.prototype.$Amplify = Amplify;

// Different F7-Vue plugin initialization with f7 v3.0
Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  Vuex,
  components: {
    app,
  },
  mounted() {
    window.addEventListener('load', () => {
      // run after everything is in-place
      FastClick.attach(document.body);

      // check for an authenticated user
      store.dispatch('getUser');
    });
  },
  render: (c) => c('app'),
});
