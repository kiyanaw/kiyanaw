const state = {
  user: null,
};

const vgetters = {

};

const actions = {
  userLogged({ commit }, user) {
    commit('USER_LOGGED', user)
  },
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
