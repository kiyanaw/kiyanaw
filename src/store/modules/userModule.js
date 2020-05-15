import Vue from 'vue'
import assert from 'assert'
import userService from '../../services/userService'

const state = {
  user: null,
  languages: ['Cree', "Mi'kmaq"],
  dialects: ['test1', 'test2', 'test3', 'test4'],
  regions: ['r1', 'r2', 'r3', 'r4'],
  language: null,
  region: null,
  dialect: null,
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
    if (context.user) {
      return context.user.language
    }
    return context.language
  },
  userDialect(context) {
    if (context.user) {
      return context.user.dialect
    }
    return context.dialect
  },
  userRegion(context) {
    if (context.user) {
      return context.user.region
    }
    return context.region
  },
  username(context) {
    console.log(context.user.preferred_username)
    return context.user.preferred_username
  },
}

const actions = {
  setUser(store, user) {
    if (!user) {
      userService.flushUser()
    }
    console.log('SET USER', user)
    store.commit('USER_LOGGED', user)
  },
  async setUsername(store, username) {
    return userService.setUsername(username)
  },
  async getUser(store) {
    userService.getUser().then((user) => {
      if (user) {
        console.log('USER TO SAVE', user)
        store.dispatch('setUser', user)
      }
    })
  },
  setCurrentLanguage(store, val) {
    store.commit('SET_CURRENT_LANGUAGE', val)
  },
  setCurrentRegion(store, val) {
    store.commit('SET_CURRENT_REGION', val)
  },
  setCurrentDialect(store, val) {
    store.commit('SET_CURRENT_DIALECT', val)
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
  updateUsername(store, payload) {
    userService.setRegularAttribute('preferred_username', payload).then(() => {
      window.setTimeout(() => { store.dispatch('getUser') }, 2000)
    })
  },
}

const mutations = {
  USER_LOGGED(context, user) {
    Vue.set(context, 'user', user)
  },
  SET_CURRENT_LANGUAGE(context, val) {
    window.localStorage.setItem('language', val)
    Vue.set(context, 'language', val)
  },
  SET_CURRENT_REGION(context, val) {
    window.localStorage.setItem('region', val)
    Vue.set(context, 'region', val)
  },
  SET_CURRENT_DIALECT(context, val) {
    window.localStorage.setItem('dialect', val)
    Vue.set(context, 'dialect', val)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
