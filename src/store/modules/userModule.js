import Vue from 'vue';
import userService from '../../services/userService';

const state = {
  user: null,
};

const getters = {
  user(context) {
    return context.user;
  },
};

const actions = {
  setUser(store, user) {
    store.commit('USER_LOGGED', user);
  },
  async getUser(store) {
    const user = await userService.getUser();
    if (user) {
      console.log('Authenticated user', user);
      store.dispatch('setUser', user);
    }
  },
  updateAttribute(store, attr) {
    userService.setUserAttribute(attr);
    store.dispatch('getUser');
  },
};

const mutations = {
  USER_LOGGED(context, user) {
    Vue.set(context, 'user', user);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
