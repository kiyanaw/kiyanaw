import Vue from 'vue'
import assert from 'assert'
import userService from '../../services/userService'

const state = {
  user: null,
}

const getters = {
  user(context) {
    return context.user
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
      store.dispatch('setUser', user)
    }
  },
  updateAttribute(store, payload) {
    // Update user object here, then send to service layer
    // TODO: restrict to only accept custom attributes
    const localUser = store.getters.user
    assert.ok(localUser.hasOwnProperty(payload.name), `user does not have attribute ${payload.name}`)
    localUser[payload.name] = payload.value
    userService.setCustomUserAttribute(payload.name, payload.value)
    // TODO: Handle error if response is not success and revert user object in store
    store.dispatch('getUser')
  },
}

const mutations = {
  USER_LOGGED(context, user) {
    Vue.set(context, 'user', user)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
