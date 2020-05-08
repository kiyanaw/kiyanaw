import { Auth } from 'aws-amplify'

let user

class User {
  constructor(data, userData) {
    this.email = data.attributes.email
    this.username = data.attributes.email
    this.groups = data.signInUserSession.accessToken.payload['cognito:groups'] || []
    this.language = userData.find((el) => el.Name === 'custom:language')?.Value || null
    this.dialect = userData.find((el) => el.Name === 'custom:dialect')?.Value || null
    this.region = userData.find((el) => el.Name === 'custom:region')?.Value || null
  }
}

export default {
  async getUser() {
    if (!user) {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      if (user) {
        const userData = await Auth.userAttributes(user)
        user = new User(user, userData)
      }
    }
    return user
  },
  async setCustomUserAttribute(name, value) {
    // Accept two params attr name, value pair
    const attribute = {}
    attribute[`custom:${name}`] = value
    return Auth.updateUserAttributes(user, attribute)
  },
}
