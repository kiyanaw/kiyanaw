import { Auth } from '@aws-amplify/auth'
import client from './client'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

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

  async getCognitoUser() {
    const cognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
    if (cognitoUser) {
      return cognitoUser
    }
    return null
  },

  async createUserEntry(userObject) {
    const warriorObject = {
      id: userObject.email,
      name: userObject.name || user.email,
      language: window.localStorage.getItem('language') || 'Cree',
      dialect: window.localStorage.getItem('dialect') || '',
      region: window.localStorage.getItem('region') || '',
      isWarrior: false,
    }
    const resp = await client.request(mutations.createWarrior,
      { input: warriorObject })
    console.log(resp)
  },

  async getUser(email) {
    const warrior = await client.request(queries.getWarrior, { id: email })
    console.log(warrior.data.getWarrior)
    return warrior.data.getWarrior
  },

  // FOR DEV NOT FOR USE IN REAL LIFE!!!
  async deleteUser(email) {
    await client.request(mutations.deleteWarrior, { input: { id: email } })
  },

  async listUsers() {
    const allWarriors = await client.request(queries.listWarriors)
    console.log(allWarriors)
  },

  flush() {
    user = null
  },
}
