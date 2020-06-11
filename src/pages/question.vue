<template>
  <f7-page>
    <f7-navbar
      title="Question Details"
      back-link="Back" />

    <f7-card
      v-if="question"
      :title="question.text"
      :content="`Submitted by ${question.warrior.name} ${someTimeAgo(question.createdAt)}`">
      <f7-card-footer>
        <f7-link @click="deleteQuestion(question.id)">
          Delete
        </f7-link>
      </f7-card-footer>
    </f7-card>
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
      // TODO: Need to navigate somehow after deleting question but without messing up the router
      questionService.delete(this.question.id)
    },
  },
}
</script>

<style></style>
