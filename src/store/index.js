import Vue from 'vue'
import Vuex from 'vuex'

// import enquiry from './enquiry'
import user from './user'
// import search from './search'
// import response from './response'
// import question from './question'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // enquiry,
    user,
    // search,
    // response,
    // question,
  },
})
