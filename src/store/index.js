import Vue from 'vue'
import Vuex from 'vuex'

import SearchService from '../services/search'

import user from './modules/user';
import search from './modules/search';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    search,
  }
})
