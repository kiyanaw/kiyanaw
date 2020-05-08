import Vue from 'vue'
import Vuex from 'vuex'

// import SearchService from '../services/search'

import enquiry from './modules/enquiryModule'
import user from './modules/userModule'
import search from './modules/searchModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    enquiry,
    user,
    search,
  },
})
