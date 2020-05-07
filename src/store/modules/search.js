import Vue from 'vue';

const state = {
  query: '',
};

const vgetters = {
  currentQuery(state) {
    return state.query;
  },
};

const actions = {
  setCurrentQuery(store, query) {
    console.log(query);
    store.commit('SET_QUERY', query);
  },
};

const mutations = {
  SET_QUERY(state, query) {
    state.query = query;
  },
};


export default {
  state,
  getters: vgetters,
  actions,
  mutations
}
