import Vue from 'vue'
import questionService from '../../services/questionService'


const vstate = {
  question: null,
}

const getters = {
  question(context) {
    return context.question
  },
}

const actions = {
  async createQuestion(store, phrase) {
    const question = await questionService.create(phrase)
    store.commit('SET_QUESTION', question)
    return question
  },

  async getQuestion(store, id) {
    const question = await questionService.get(id)
    return question
  },
}

const mutations = {
  SET_QUESTION(context, question) {
    Vue.set(context, 'question', question)
  },
}

export default {
  state: vstate,
  getters,
  actions,
  mutations,
}
