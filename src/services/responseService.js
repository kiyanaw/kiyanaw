import { v1 as uuidv1 } from 'uuid'

import { API, graphqlOperation } from 'aws-amplify'
import client from './client'

import * as mutations from '../graphql/mutations'

export default {

  async create(data) {
    const id = uuidv1()
    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: data.text,
      languageIndex: 'todo',
      type: 'phrase',
      table: 'response',
      enquiryId: data.enquiryId,
      warriorId: '1234',
    }
    // TODO: swap to client
    const response = await API.graphql(graphqlOperation(mutations.createResponse, { input }))
    // TODO: unwrap this
    return response.data.createEnquiry
  },
}
