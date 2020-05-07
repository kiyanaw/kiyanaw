const state = {
  user: {
    email: '',
    id: '',
    username: '',
    
  },
};

const vgetters = {
  user(state) {
    return state.user;
  }
};

const actions = {
  setUser(store, user) {
    store.commit('USER_LOGGED', user);
  }
};

const mutations = {
  USER_LOGGED(state, user) {
    state.user = user
  },
};


export default {
  state,
  vgetters,
  actions,
  mutations
}
