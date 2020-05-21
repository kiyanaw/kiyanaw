import { v1 as uuidv1 } from 'uuid'
import client from './client'
import userService from './userService'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

/** ENTRY
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

class Response {
  constructor(data) {
    this.id = data.id
    this.text = data.text
    this.type = data.type
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.warriorName = data.warriorName
    // this.media
  }
}

class Enquiry {
  constructor(data) {
    this.id = data.id
    this.text = data.text
    this.type = data.type
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.owner = data.owner
    this.responses = []
    if (data.responses) {
      this.responses = data.responses.items.map((item) => new Response(item))
    }
    this.warriorName = data.warriorName
  }
}

export default {
  async create(phrase) {
    const user = await userService.get()
    console.log('user', user)

    const id = uuidv1()
    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: phrase,
      languageIndex: 'todo',
      type: 'phrase',
      table: 'enquiry',
      warriorName: user.name,
      warriorId: user.email,
    }

    const response = await client.request(mutations.createEnquiry, { input })

    // TODO: unwrap this
    return response.data.createEnquiry
  },

  async get(id) {
    const response = await client.request(queries.getEnquiry, { id })
    return new Enquiry(response.data.getEnquiry)
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
