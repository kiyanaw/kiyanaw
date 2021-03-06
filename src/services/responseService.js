import { v1 as uuidv1 } from 'uuid'

import client from './client'
import userService from './userService'

import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'

export default {

  async create(data) {
    const id = uuidv1()
    const user = await userService.get()

    let extra
    if (user.dialect) {
      extra = extra || {}
      extra.dialect = user.dialect
    }
    if (user.region) {
      extra = extra || {}
      extra.region = user.region
    }
    extra = JSON.stringify(extra)

    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: data.text,
      languageIndex: 'todo', // FIXME
      type: 'phrase',
      table: 'response',
      enquiryId: data.enquiryId,
      warriorId: user.id,
      extra,
    }

    const response = await client.request(mutations.createResponse, { input })
    // TODO: unwrap this
    return response.data.createResponse
  },
  // async getResponse(id) {
  //   const response = await client.request(queries.getResponse)
  //   return response.data
  // },

  async byEnquiry(enquiryId) {
    const response = await client.request(queries.responseByEnquiry, { enquiryId })
    // TODO: unwrap this
    return response.data.responseByEnquiry.items
  },
}
