<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back"
      back-link-url="/" />

    <f7-card
      :title="enquiry.text"
      :content="`Submitted by some@body.com ${ago(enquiry.createdAt)}`">
      <f7-card-footer>
        <f7-link icon-md="material:star_outline">
          Save
        </f7-link>
        <!-- <f7-link>Read more</f7-link> -->
      </f7-card-footer>
    </f7-card>

    <f7-link
      v-if="user"
      href="/add-response/">
      Add response
    </f7-link>

    <!-- TODO: Friendly message if no responses provided -->
    <f7-block
      v-for="response in responses"
      :key="response.id">
      <p> {{ response }} </p>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const ago = new TimeAgo('en-US')

export default {
  name: 'Detail',
  computed: {
    data: () => ({
      responses: [],
    }),
    ...mapGetters([
      'enquiry',
      'user',
    ]),
  },

  async mounted() {
    this.responses = await this.getEnquiry(this.enquiry.id).responses
  },

  methods: {
    ...mapActions([
      'getEnquiry',
    ]),
    ago(dateString) {
      return ago.format(new Date(dateString))
    },
  },
}
</script>

<style></style>
