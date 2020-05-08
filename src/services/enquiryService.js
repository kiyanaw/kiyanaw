import UUID from 'uuid'

import { API, graphqlOperation } from 'aws-amplify'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
// import * as subscriptions from '../graphql/subscriptions';

export default {
  async create(phrase) {
    const id = UUID.v1()
    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: phrase,
      languageIndex: 'todo',
      type: 'phrase',
      table: 'enquiry',
    }
    const response = await API.graphql(graphqlOperation(mutations.createEnquiry, { input }))
    // TODO: unwrap this
    return response.data.createEnquiry
  },

  async listRecent() {
    const input = {
      table: 'enquiry',
      updatedAt: { lte: new Date() },
      sortDirection: 'DESC',
    }
    const response = await API.graphql(graphqlOperation(queries.byUpdatedAt, { input }))
    console.log('enquiries', response)
  },
}
