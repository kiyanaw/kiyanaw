<template>
  <f7-page v-if="question">
    <f7-navbar
      title="Response"
      back-link="Back"
      :back-link-url="`/question/${question.id}`" />

    <f7-block>
      <f7-list form>
        <!-- input vue models cannot be bound https://v2.framework7.io/vue/inputs.html -->
        <f7-list-input
          :value="questionText"
          type="text"
          label="Question"
          @input="questionText = $event.target.value" />
        <f7-list-input
          :value="phrase"
          type="text"
          label="Response"
          placeholder="Type your response here..."
          clear-button
          @input="phrase = $event.target.value" />
        <f7-button
          :disabled="phrase.length < 2"
          fill
          @click="onSubmit">
          Submit
        </f7-button>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddResponse',
  props: {
    questionId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    phrase: '',
    questionText: '',
    question: null,
    useEnquiry: false,
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  async mounted() {
    this.$f7.dialog.preloader('Loading...')
    this.question = await this.getQuestion(this.questionId)
    this.$f7.dialog.close()
    this.questionText = this.question.text
  },
  methods: {
    ...mapActions([
      'createResponse',
      'getQuestion',
      'createEnquiry',
      'linkQuestion',
    ]),
    async onSubmit() {
      // Create Enquiry
      this.$f7.dialog.preloader('Saving...')
      const enq = await this.createEnquiry(this.questionText)
      // Create Response
      const responseObject = {
        enquiryId: enq.id,
        text: this.phrase,
      }
      await this.createResponse(responseObject)
      // Link to question
      const linkPayload = {
        question: this.question,
        enquiryID: enq.id,
      }
      await this.linkQuestion(linkPayload)
      this.$f7.dialog.close()
      this.$f7router.navigate(`/detail/${enq.id}`)
    },

  },

}
</script>

<style></style>
