<template>
  <f7-page>
    <f7-navbar
      title="Unanswered Questions"
      back-link="back" />
    <f7-block
      v-if="questions.length > 0">
      <f7-card
        v-for="question in questions"
        :key="question.id">
        <f7-card-content>
          {{ question.text }}
        </f7-card-content>
        <f7-card-footer>
          {{ `Asked ${ago(question.createdAt)}` }}
          <f7-link
            @click="goToDetail(question.id)">
            View Details
          </f7-link>
        </f7-card-footer>
      </f7-card>
    </f7-block>
    <f7-block
      v-else-if="loaded && questions.length <= 0">
      <h2> No unanswered Questions :)</h2>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import utils from '../utils/utils'
import questionService from '../services/questionService'

export default {
  name: 'UnansweredQuestions',
  data: () => ({
    questions: [],
    loaded: false,
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  async mounted() {
    this.$f7.dialog.preloader('Loading ...')
    this.questions = await questionService.getUnansweredQuestions()
    this.$f7.dialog.close()
    this.loaded = true
  },
  methods: {
    ...mapActions([
      'deleteFavorite',
    ]),
    ago(time) {
      return utils.someTimeAgo(time)
    },
    goToDetail(id) {
      this.$f7router.navigate(`/question/${id}`)
    },
  },
}
</script>

<style>

</style>
