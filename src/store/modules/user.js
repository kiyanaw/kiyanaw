import userService from '../../services/user'

const state = {
  user: null,
}

const getters = {
  user(state) {
    return state.user
  },
}

const actions = {
  setUser(store, user) {
    store.commit('USER_LOGGED', user)
  },
  async getUser(store) {
    const user = await userService.getUser()
    if (user) {
      console.log('Authenticated user', user)
      actions.setUser(store, user)
    }
  },
}

const mutations = {
  USER_LOGGED(state, user) {
    state.user = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
