import Vue from 'vue'
import questionService from '../../services/questionService'


const vstate = {
  question: null,
  userQuestions: null,
  unansweredQuestions: null,
}

const getters = {
  question(context) {
    return context.question
  },
  userQuestions(context) {
    return context.userQuestions
  },
  unansweredQuestions(context) {
    return context.unansweredQuestions
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

  async getUserQuestions(store) {
    // const { user } = store.getters
    const questions = await questionService.listUserQuestions()
    store.commit('SET_USER_QUESTIONS', questions)
  },

  async getUnansweredQuestions(store) {
    const unanswered = await questionService.getUnansweredQuestions()
    store.commit('SET_UNANSWERED_LIST', unanswered)
  },

  async linkQuestion(store, payload) {
    const linkedQ = await questionService.updateLink(payload.enquiryID, payload.question)
    return linkedQ
  },
}

const mutations = {
  SET_QUESTION(context, question) {
    Vue.set(context, 'question', question)
  },
  SET_USER_QUESTIONS(context, questions) {
    Vue.set(context, 'userQuestions', questions)
  },
  SET_UNANSWERED_LIST(context, unanswered) {
    Vue.set(context, 'unansweredQuestions', unanswered)
  },
}

export default {
  state: vstate,
  getters,
  actions,
  mutations,
}
