import { v1 as uuidv1 } from 'uuid'
import client from './client'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

/**
createdAt: "2020-05-19T06:47:08.841Z"
extra: null
id: (...)
languageIndex: "todo"
owner: "f44b835a-01c4-4654-b4dd-5de9ca58acfd"
responses: Object
table: "enquiry"
text: "From my phone"
type: "phrase"
updatedAt: "2020-05-19T06:47:08.841Z"
 */

class Enquiry {
  constructor(data) {
    this.id = data.id
    this.text = data.text
    this.type = data.type
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.owner = data.owner
  }
}

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

  async get(id) {
    const response = await client.request(queries.getEnquiry, { id })
    return response.data
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
