import Vue from 'vue'
import enquiryService from '../../services/enquiryService'

const vstate = {
  enquiry: null,
  recentEnquiries: [],
}

const getters = {
  enquiry(state) {
    return state.enquiry
  },
  recentEnquiries(state) {
    return state.recentEnquiries
  },
}

const actions = {
  async createEnquiry(store, phrase) {
    const enquiry = await enquiryService.create(phrase)
    // if we just created an enquiry, we'll redirect to it
    store.commit('SET_ENQUIRY', enquiry)
    return enquiry
  },

  async listRecentEnquiries(store) {
    const list = await enquiryService.listRecent()
    console.log('got list', list)
    store.commit('SET_RECENT_ENQUIRIES', list)
  },

  setEnquiry(store, enquiry) {
    store.commit('SET_ENQUIRY', enquiry)
  },

  async getEnquiry(store, enqId) {
    const result = await enquiryService.getEnquiry(enqId)
    return result
  },
}

const mutations = {
  SET_ENQUIRY(state, enquiry) {
    Vue.set(state, 'enquiry', enquiry)
  },
  SET_RECENT_ENQUIRIES(state, list) {
    Vue.set(state, 'recentEnquiries', list)
  },
}

export default {
  state: vstate,
  getters,
  actions,
  mutations,
}
