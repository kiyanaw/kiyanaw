import { Auth } from '@aws-amplify/auth'
import client from './client'

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

let user

class User {
  constructor(data, userData) {
    this.id = data.attributes.email
    this.name = userData.name || data.attributes.email
    this.language = userData.language || window.localStorage.getItem('language') || null
    this.dialect = userData.dialect || window.localStorage.getItem('dialect') || null
    this.region = userData.region || window.localStorage.getItem('region') || null
    this.profile = userData.profile || false
    this.isWarrior = userData.isWarrior || false
  }
}

export default {
  async get() {
    window.Auth = Auth
    try {
      user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      if (user) {
        const warrior = await client.request(queries.getWarrior, { id: user.attributes.email })
        if (warrior.data.getWarrior !== null) {
          const userData = warrior.data.getWarrior
          userData.profile = true
          user = new User(user, userData)
        }
        const userData = {}
        userData.profile = false
        user = new User(user, userData)
      }
    } catch (error) {
      console.warn('User not authenticated', error.message)
    }
    return user
  },

  async createUserEntry(userObject) {
    const resp = await client.request(mutations.createWarrior, { input: userObject })
    user = userObject
    return resp
  },

  async deleteUser(id) {
    await client.request(mutations.deleteWarrior, { input: { id } })
  },

  flush() {
    user = null
  },
}
