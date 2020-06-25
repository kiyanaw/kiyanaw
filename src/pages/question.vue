<template>
  <f7-page>
    <f7-navbar
      v-if="$f7router.previousRoute.path === '/new-question/'"
      title="Question Details"
      back-link
      back-link-force
      back-link-url="/" />
    <f7-navbar
      v-else
      title="Question Details"
      back-link />
    <f7-block>
      <f7-card
        v-if="question"
        :title="question.text"
        :content="`Submitted by ${question.warrior.name} ${someTimeAgo(question.createdAt)}`">
        <f7-card-footer>
          <f7-link
            v-if="question.warrior.id === user.id"
            @click="deleteQuestion(question.id)">
            <f7-icon
              material="delete" />Delete
          </f7-link>
          <f7-link
            v-if="user.isWarrior"
            @click="comment()">
            <f7-icon
              material="comment" /> Comment
          </f7-link>
          <f7-link
            v-if="user.isWarrior"
            @click="answer()">
            <f7-icon
              material="reply" /> Answer
          </f7-link>
        </f7-card-footer>
      </f7-card>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import utils from '../utils/utils'
import questionService from '../services/questionService'

export default {
  name: 'Detail',
  props: {
    questionId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    question: null,
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
  },

  async mounted() {
    const [question] = await Promise.all([
      questionService.get(this.questionId),
    ])
    this.question = question
    console.log(question, this.user)
    console.log('PREVIOUS ROUTE', this.$f7router.history, this.$f7router.previousRoute)
  },

  methods: {
    ...mapActions([
    ]),
    someTimeAgo(time) {
      return utils.someTimeAgo(time)
    },
    deleteQuestion() {
      // TODO: Need to navigate somehow after deleting question but without messing up the router
      questionService.delete(this.question.id)
      this.$f7router.back('/my-questions/', { force: true })
    },
    comment() {
      console.log('Comment click')
    },
    answer() {
      console.log('answer clicked')
    },
  },
}
</script>

<style></style>
