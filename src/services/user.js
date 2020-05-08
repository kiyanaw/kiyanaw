import { Auth } from 'aws-amplify'

let user

class User {
  constructor(data) {
    this.email = data.attributes.email
    this.username = data.attributes.email
    this.groups = data.signInUserSession.accessToken.payload['cognito:groups'] || []
  }
}

export default {
  async getUser() {
    if (!user) {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      if (user) {
        user = new User(user)
      }
    }
    return user
  },
}
