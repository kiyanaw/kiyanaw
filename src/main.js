// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css'

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Material Icons
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css'

// Import Fontawesome Theme Styles
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css'

// Import fastClick
import FastClick from 'fastclick'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue'

// Import Vuex Storage
import Vuex from 'vuex'
import store from './store'

// import Amplify, * as AmplifyModules from "aws-amplify";
// import "@aws-amplify/ui-vue";
// import { AmplifyPlugin } from "aws-amplify-vue";

import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
// import Vuetify from 'vuetify'
// import awsconfig from "./aws-exports";

import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

// Vue.use(AmplifyPlugin, AmplifyModules);
// Different F7-Vue plugin initialization with f7 v3.0
Framework7.use(Framework7Vue)

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  Vuex,
  render: (c) => c('app'),
  components: {
    app,
  },
  mounted() {
    window.addEventListener('load', () => {
      // run after everything is in-place
      FastClick.attach(document.body)
    })
  },
})
