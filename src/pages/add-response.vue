<template>
  <f7-page>
    <f7-navbar
      title="Response"
      back-link="Back" />

    <f7-block>{{ enquiry.text }}</f7-block>
    <f7-list
      form>
      <!-- input vue models cannot be bound https://v2.framework7.io/vue/inputs.html -->
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
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddResponse',
  data: () => ({
    phrase: '',
  }),
  computed: {
    ...mapGetters(['enquiry', 'user']),
  },
  methods: {
    ...mapActions(['createResponse']),

    async onSubmit() {
      this.$f7.dialog.preloader('Creating phrase...')
      await this.createResponse({ text: this.phrase, enquiryId: this.enquiry.id })
      this.$f7.dialog.close()
    },

  },

}
</script>

<style></style>
