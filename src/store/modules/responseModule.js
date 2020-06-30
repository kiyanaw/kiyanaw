import responseService from '../../services/responseService'

const vstate = {
  // response: null,
}

const getters = {
}

const actions = {
  async createResponse(store, response) {
    const result = await responseService.create(response)
    return result
  },
}

const mutations = {
}

export default {
  state: vstate,
  getters,
  actions,
  mutations,
}
