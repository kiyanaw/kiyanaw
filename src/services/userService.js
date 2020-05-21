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

  async get2() {
    window.Auth = Auth
    const localUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
    if (localUser) {
      if (!this.getUser(localUser.attributes.email)) {
        this.createUserEntry()
      }
    }
  },

  async createUserEntry(userObject) {
    const warriorObject = {
      id: userObject.email,
      name: userObject.name || user.email,
      language: window.location.getItem('language') || '',
      dialect: window.location.getItem('dialect') || '',
      region: window.location.getItem('region') || '',
      isWarrior: false,
    }
    const resp = await client.request(mutations.createWarrior,
      { input: warriorObject })
    console.log(resp)
  },

  async getUser(email) {
    const warrior = await client.request(queries.getWarrior, email)
    console.log(warrior)
    return warrior.data
  },

  flush() {
    user = null
  },
}
