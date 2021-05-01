import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Routes
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

// Amplify 2 config
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

// PWA setup
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
