import { API } from 'aws-amplify'
import { Auth } from '@aws-amplify/auth'

export default {
  async request(query, variables) {
    // NOTE: we intentionally go around the store here
    let user = null
    let authMode = 'AMAZON_COGNITO_USER_POOLS'
    try {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false })
    } catch (error) {
      // no user
    }
    if (!user) {
      // AWS_IAM will allow for public: read as per the graphql schema
      authMode = 'AWS_IAM'
    }
    console.log('Client query authMode', authMode)

    return API.graphql({ query, variables, authMode })
  },
}
