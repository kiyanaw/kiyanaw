<template>
  <f7-page v-if="enquiry">
    <f7-navbar
      title="Response"
      back-link="Back" />

    <f7-block>{{ enquiry.text }}</f7-block>
    <f7-block>
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
    </f7-block>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddResponse',
  props: {
    enquiryId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    phrase: '',
    enquiry: null,
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  async mounted() {
    this.enquiry = await this.getEnquiry(this.enquiryId)
  },
  methods: {
    ...mapActions([
      'createResponse',
      'getEnquiry',
    ]),
    async onSubmit() {
      this.$f7.dialog.preloader('Creating phrase...')
      await this.createResponse({ text: this.phrase, enquiryId: this.enquiryId })
      this.$f7.dialog.close()
    },

  },

}
</script>

<style></style>
