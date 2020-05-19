import { v1 as uuidv1 } from 'uuid'
import client from './client'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
// import * as subscriptions from '../graphql/subscriptions';

export default {
  async create(phrase) {
    const id = uuidv1()
    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: phrase,
      languageIndex: 'todo',
      type: 'phrase',
      table: 'enquiry',
    }

    const response = await client.request(mutations.createEnquiry, { input })
    console.log('got enquiry', response)
    // TODO: unwrap this
    return response.data.createEnquiry
  },

  async getEnquiry(id) {
    const resp = await client.request(queries.getEnquiry, { table: 'enquiry', id })
    return resp.data
  },

  async listRecent() {
    const response = await client.request(queries.byEnquiryUpdatedAt, {
      table: 'enquiry',
      updatedAt: {
        gt: '0',
      },
      sortDirection: 'DESC',
    })

    return response.data.byEnquiryUpdatedAt.items
  },
}
