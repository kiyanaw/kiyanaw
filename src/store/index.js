import Vue from 'vue';
import Vuex from 'vuex';

// import SearchService from '../services/search'

// import enquiry from './modules/enquiry';
import user from './modules/user';
import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // enquiry,
    user,
    search,
  },
});
