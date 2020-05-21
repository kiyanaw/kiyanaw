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
    return context.user.name
  },
}

const actions = {
  setUser(store, user) {
    if (!user) {
      userService.flush()
    }
    store.commit('USER_LOGGED', user)
  },

  async getUser(store) {
    userService.get().then((user) => {
      if (user) {
        store.dispatch('setUser', user)
      }
    })
  },

  async updateUser(store, warrior) {
    const result = await userService.save(warrior)
    if (result) {
      store.dispatch('USER_LOGGED', warrior)
    }
  },

  async createUser(store, warrior) {
    const result = await userService.createUserEntry(warrior)
    if (result) {
      store.dispatch('USER_LOGGED', warrior)
    }
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
