import { Auth } from '@aws-amplify/auth'

let user

class User {
  constructor(data, userData) {
    this.email = data.attributes.email
    // this.name = TODO
    this.name = userData.find((el) => el.Name === 'preferred_username')?.Value || null
    this.groups = data.signInUserSession.accessToken.payload['cognito:groups'] || []
    this.language = userData.find((el) => el.Name === 'custom:language')?.Value || null
    this.dialect = userData.find((el) => el.Name === 'custom:dialect')?.Value || null
    this.region = userData.find((el) => el.Name === 'custom:region')?.Value || null
  }
}

export default {
  async get() {
    window.Auth = Auth
    try {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      if (user) {
        const userData = await Auth.userAttributes(user)
        user = new User(user, userData)
      }
    } catch (error) {
      console.warn('User not authenticated', error.message)
    }
    return user
  },
  // TODO: this is a leaky abstraction, fix
  async setCustomUserAttribute(name, value) {
    const attribute = {}
    attribute[`custom:${name}`] = value
    const curUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
    const response = await Auth.updateUserAttributes(curUser, attribute)
    // TODO: return error if response is not success
    return response
  },
  async setRegularAttribute(name, value) {
    const attribute = {}
    attribute[name] = value
    const curUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
    const response = await Auth.updateUserAttributes(curUser, attribute)
    return response
  },
  flush() {
    user = null
  },
}
