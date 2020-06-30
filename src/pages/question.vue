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
            :href="`/add-response/${question.id}`">
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
  },

  methods: {
    ...mapActions([
    ]),
    someTimeAgo(time) {
      return utils.someTimeAgo(time)
    },
    deleteQuestion() {
      questionService.delete(this.question.id)
      this.$f7router.back('/my-questions/', { force: true })
    },
    comment() {
      console.log('Comment click')
    },
  },
}
</script>

<style></style>
