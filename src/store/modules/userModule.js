import Vue from 'vue'
import assert from 'assert'
import userService from '../../services/userService'

const state = {
  user: null,
  languages: ['Cree', "Mi'kmaq"],
  dialects: ['test1', 'test2', 'test3', 'test4'],
  regions: ['r1', 'r2', 'r3', 'r4'],
}

const getters = {
  user(context) {
    return context.user
  },
  languages(context) {
    return context.languages
  },
  dialects(context) {
    return context.dialects
  },
  regions(context) {
    return context.regions
  },
  userLanguage(context) {
    return context.user.language
  },
  userDialect(context) {
    return context.user.dialect
  },
  userRegion(context) {
    return context.user.region
  },
}

const actions = {
  setUser(store, user) {
    if (!user) {
      userService.flushUser()
    }
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
