import Vue from 'vue';

const state = {
  query: '',
};

const vgetters = {
  currentQuery(context) {
    return context.query;
  },
};

const actions = {
  setCurrentQuery(store, query) {
    console.log(query);
    store.commit('SET_QUERY', query);
  },
};

const mutations = {
  SET_QUERY(context, query) {
    Vue.set(context, 'query', query);
  },
};


export default {
  state,
  getters: vgetters,
  actions,
  mutations,
};
