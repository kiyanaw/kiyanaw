import { v1 as uuidv1 } from 'uuid'
import client from './client'
import userService from './userService'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'


class Response {
  constructor(data) {
    this.id = data.id
    this.text = data.text
    this.type = data.type
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.warriorId = data.warriorId
    // this.warrior = data.warrior // TODO
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
    this.link = data.link
    this.responses = []
    if (data.responses) {
      this.responses = data.responses.items.map((item) => new Response(item))
    }
    this.warrior = data.warrior
  }
}

export default {
  async create(phrase) {
    const user = await userService.get()

    const id = uuidv1()
    const input = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      text: phrase,
      languageIndex: 'todo',
      type: 'phrase',
      table: 'enquiry',
      warriorId: user.id,
    }
    const response = await client.request(mutations.createEnquiry, { input })
    return new Enquiry(response.data.createEnquiry)
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
      limit: 50
    })

    // TODO: unwrap this
    return response.data.byEnquiryUpdatedAt.items
  },
}
