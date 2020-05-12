import { v1 as uuidv1 } from 'uuid'

import { API, graphqlOperation } from 'aws-amplify'
import client from './client'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'
// import * as subscriptions from '../graphql/subscriptions';


// id: ID!
// createdAt: AWSDateTime!
// updatedAt: AWSDateTime!
// text: String!
// extra: AWSJSON
// type: PhraseType!
// languageIndex: String!
// enquiryId: ID!
// enquiry: Enquiry @connection(fields: ["enquiryId"])
// warriorId: String!
// warrior: Warrior @connection(fields: ["warriorId"])
// media: [Media] @connection(keyName: "ByResponse", fields: ["id"])
//   # this field is required to be able to sort on dates
// table: ResponseType!

// TODO: you are here fixing the client

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
    const response = await API.graphql(graphqlOperation(mutations.createResponse, { input }))
    // TODO: unwrap this
    return response.data.createEnquiry
  },

  // async listRecent() {
  //   const response = await API.graphql(
  //     graphqlOperation(queries.byEnquiryUpdatedAt, {
  //       table: 'enquiry',
  //       updatedAt: {
  //         gt: '0',
  //       },
  //       sortDirection: 'DESC',
  //     }),
  //   )

  //   console.log('enquiries', response)
  //   return response.data.byEnquiryUpdatedAt.items
  // },
}
