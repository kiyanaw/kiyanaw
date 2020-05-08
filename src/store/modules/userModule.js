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
  updateAttribute(store, name, value) {
    // Update user object here, then send to service layer
    // TODO: restrict to only accept custom attributes
    const { user } = store.getters
    assert.ok(user.hasOwnProperty(name), `user does not have attribute ${name}`)
    user[name] = value
    userService.setCustomUserAttribute(name, value)
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
