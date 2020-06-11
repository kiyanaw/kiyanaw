<template>
  <f7-page>
    <f7-navbar
      title="New Question"
      back-link="Back" />
    <f7-block>
      <f7-list
        form>
        <!-- input vue models cannot be bound https://v2.framework7.io/vue/inputs.html -->
        <f7-list-input
          :value="phrase"
          type="text"
          label="How do I say:"
          placeholder="Type your phrase here..."
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
import { mapActions } from 'vuex'

export default {
  name: 'NewEnquiry',
  data: () => ({
    phrase: '',
  }),
  methods: {
    ...mapActions([
      'createQuestion',
    ]),
    async onSubmit() {
      this.$f7.dialog.preloader('Creating Question...')
      const question = await this.createQuestion(this.phrase)
      this.$f7.dialog.close()
      this.$f7router.navigate(`/question/${question.id}`)
    },
  },
}
</script>

<style></style>
