import { API } from 'aws-amplify'
import { Auth } from '@aws-amplify/auth'

// import userService from './userService'

export default {
  async request(query, variables) {
    // NOTE: we intentionally go around the store here
    const user = await Auth.currentAuthenticatedUser({ bypassCache: false })

    let authMode = 'AMAZON_COGNITO_USER_POOLS'
    if (!user) {
      // AWS_IAM will allow for public: read as per the graphql schema
      authMode = 'AWS_IAM'
    }

    return API.graphql({ query, variables, authMode })
  },
}
