import Vue from 'vue'
import Vuex from 'vuex'

import SearchService from '../services/search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },

  actions: {
    async search(query) {},

    userLogged({ commit }, user) {
      commit('USER_LOGGED', user)
    },
  },

  mutations: {
    USER_LOGGED(state, user) {
      state.user = user
    },
  },
})
