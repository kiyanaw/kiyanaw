import { v1 as uuidv1 } from 'uuid'
import client from './client'
import userService from './userService'

import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'


class Question {
  constructor(data) {
    this.id = data.id
    this.text = data.text
    this.type = data.type
    this.createdAt = new Date(data.createdAt)
    this.owner = data.owner
    this.link = data.link
    this.responses = []
    if (data.responses) {
      this.responses = data.responses.items.map((item) => new Response(item))
    }
    this.warrior = data.warrior
  }
}

export default {
  async create(phrase) {
    console.log('CREATE')
    const user = await userService.get()

    const id = uuidv1()
    const input = {
      id,
      createdAt: new Date(),
      text: phrase,
      languageIndex: 'todo',
      warriorId: user.id,
      link: 'null',
    }
    const response = await client.request(mutations.createQuestion, { input })
    return new Question(response.data.createQuestion)
  },

  async get(id) {
    const question = await client.request(queries.getQuestion, { id })
    return new Question(question.data.getQuestion)
  },

  async listUserQuestions() {
    const user = await userService.get()
    const questions = await client.request(queries.listQuestions, { owner: user.id })
    return questions.data.listQuestions.items
  },

  async getUnansweredQuestions() {
    const user = await userService.get()
    if (user.isWarrior) {
      console.log('User is a warrior')
      let questions = await client.request(queries.listQuestions)
      questions = questions.data.listQuestions.items
      const unanswered = questions.filter((el) => el.link === 'null')
      console.log('unanswered', unanswered)
      return unanswered
    }
    console.log('User not warrior')
    return []
  },

  async delete(id) {
    const result = await client.request(mutations.deleteQuestion, { input: { id } })
    console.log(result)
    return result
  },
}
