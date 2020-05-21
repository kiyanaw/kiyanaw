import { API } from 'aws-amplify'
import { Auth } from '@aws-amplify/auth'

const AuthModes = {
  Cognito: 'AMAZON_COGNITO_USER_POOLS',
  Iam: 'AWS_IAM',
}

export default {
  async request(query, variables) {
    // check to see if we have a session to determine how we authenticate with the API
    let authMode = AuthModes.Cognito
    try {
      const user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      console.log('user', user)
    } catch (error) {
      authMode = AuthModes.Iam
    }

    return API.graphql({ query, variables, authMode })
  },
}
