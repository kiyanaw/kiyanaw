import enquiryService from '../../services/enquiry'

const state = {
  enquiry: null,
  recentEnquiries: []
}

const getters = {
  enquiry(state) {
    return state.enquiry
  },
  recentEnquiries(state) {
    return state.recentEnquiries
  }
}

const actions = {
  async createEnquiry(store, phrase) {
    const enquiry = await enquiryService.create(phrase)
    // if we just created an enquiry, we'll redirect to it
    store.commit('SET_ENQUIRY', enquiry)
    return enquiry
  },

  listRecentEnquiries() {
    const enquiries = await enquiryService.listRecent()
    store.
  },
}

const mutations = {
  SET_ENQUIRY(state, enquiry) {
    state.enquiry = enquiry
  },
  SET_RECENT_ENQUIRIES(state, list) {
    state.recentEnquiries = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
