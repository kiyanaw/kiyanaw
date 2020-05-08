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

  async listRecentEnquiries() {
    const enquiries = await enquiryService.listRecent()
    console.log(enquiries)
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
