import Vue from 'vue'
// import assert from 'assert'
import userService from '../../services/userService'

const state = {
  user: null,
  languages: ['Cree', "Mi'kmaq"],
  dialects: ['test1', 'test2', 'test3', 'test4'],
  regions: ['r1', 'r2', 'r3', 'r4'],
  language: null,
  region: null,
  dialect: null,
  history: null,
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
    if (!context.language) {
      return window.localStorage.getItem('language')
    }
    return context.language
  },
  userDialect(context) {
    if (context.user) {
      return context.user.dialect
    }
    if (!context.dialect) {
      return window.localStorage.getItem('dialect')
    }
    return context.dialect
  },
  userRegion(context) {
    if (context.user) {
      return context.user.region
    }
    if (!context.region) {
      return window.localStorage.getItem('region')
    }
    return context.region
  },
  username(context) {
    return context.user.name
  },
  history(context) {
    return context.history
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
      store.commit('USER_LOGGED', warrior)
    }
  },

  async saveFavorites(store, enquiry) {
    const user = { ...store.getters.user }
    const favs = user.favorites
    const enquiryToSave = { ...enquiry }
    enquiryToSave.favoritedAt = new Date()
    if (favs.findIndex((el) => el.id === enquiry.id) <= -1) {
      favs.push(enquiryToSave)
      const result = await userService.save(user)
      if (result) {
        store.commit('USER_LOGGED', user)
      }
    }
  },

  async deleteFavorite(store, enquiry) {
    const user = { ...store.getters.user }
    const favs = user.favorites
    const idx = favs.findIndex((el) => el.id === enquiry.id)
    favs.splice(idx, 1)
    const result = await userService.save(user)
    if (result) {
      store.commit('USER_LOGGED', user)
    }
  },

  async createUser(store, warrior) {
    const result = await userService.createUserEntry(warrior)
    if (result) {
      result.data.createWarrior.profile = true
      store.commit('USER_LOGGED', result.data.createWarrior)
    }
  },

  setCurrentLanguage(store, lang) {
    window.localStorage.setItem('language', lang)
    store.commit('SET_CURRENT_LANGUAGE', lang)
  },
  setCurrentRegion(store, region) {
    window.localStorage.setItem('region', region)
    store.commit('SET_CURRENT_REGION', region)
  },
  setCurrentDialect(store, dialect) {
    window.localStorage.setItem('dialect', dialect)
    store.commit('SET_CURRENT_DIALECT', dialect)
  },

  updateHistory(store, enquiry) {
    // console.log('UPDATE HISTORY')
    let { history } = store.getters
    if (history === null || history === undefined) {
      history = JSON.parse(window.localStorage.getItem('history'))
      if (history === null || history === undefined) {
        history = []
      }
    }
    if (history.length > 10) {
      history = history.shift()
    }
    // If the item is already in the history, remove it where it's from so it can be put to the end
    const idx = history.findIndex((el) => el.id === enquiry.id)
    if (idx > -1) {
      history.splice(idx, 1)
    }
    // Push the item to the array and stringify it since localStorage only allaows strings
    const enquiryToPush = { ...enquiry }
    enquiryToPush.viewedAt = new Date()
    history.push(enquiryToPush)
    store.commit('SAVE_HISTORY', history)
    const stringHistory = JSON.stringify(history)
    window.localStorage.setItem('history', stringHistory)
  },

  syncHistory(store) {
    if (store.getters.history === null) {
      // console.log('SYNC HISTORY')
      store.commit('SAVE_HISTORY', JSON.parse(window.localStorage.getItem('history')))
    }
  },
}

const mutations = {
  USER_LOGGED(context, user) {
    Vue.set(context, 'user', user)
  },
  SET_CURRENT_LANGUAGE(context, lang) {
    Vue.set(context, 'language', lang)
  },
  SET_CURRENT_REGION(context, lang) {
    Vue.set(context, 'region', lang)
  },
  SET_CURRENT_DIALECT(context, lang) {
    Vue.set(context, 'dialect', lang)
  },
  SAVE_HISTORY(context, history) {
    Vue.set(context, 'history', history)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
