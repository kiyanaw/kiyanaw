import { API } from 'aws-amplify'

import userService from './userService'

export default {
  async request(query, input) {
    // NOTE: we intentionally go around the store here
    const user = await userService.getUser()

    let authMode = 'AMAZON_COGNITO_USER_POOLS'
    if (!user) {
      // AWS_IAM will allow for public: read as per the graphql schema
      authMode = 'AWS_IAM'
    }

    console.log('client user', user, authMode)
    return API.graphql({ query, variables: input, authMode })
  },
}
