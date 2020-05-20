<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back"
      back-link-url="/" />

    <f7-card
      :title="enquiry.text"
      :content="`Submitted by ${enquiry.owner} ${ago}`">
      <f7-card-footer>
        <f7-link icon-md="material:star_outline">
          Save
        </f7-link>
        <!-- <f7-link>Read more</f7-link> -->
      </f7-card-footer>
    </f7-card>

    <!-- TODO: Friendly message if no responses provided -->
    <f7-block v-if="!responses">
      There have been no responses for this enquiry
    </f7-block>
    <f7-block
      v-for="response in responses"
      :key="response.id">
      <p> {{ response }} </p>
    </f7-block>

    <!-- Floating tab button -->
    <f7-fab
      v-if="user"
      slot="fixed"
      position="right-bottom"
      color="blue"
      href="/add-response/">
      <f7-icon
        ios="f7:create"
        aurora="f7:create"
        md="material:create" />
    </f7-fab>
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
  data: () => ({
    responses: [],
  }),
  computed: {
    ...mapGetters([
      'enquiry',
      'user',
    ]),
    ago() {
      return ago.format(new Date(this.enquiry.createdAt))
    },
    enquiryOwner() {
      return this.userLookup(this.enquiry.owner)
    },
  },

  async mounted() {
    const details = await this.getEnquiry(this.enquiry.id)
    this.responses = details.responses
  },

  methods: {
    ...mapActions([
      'getEnquiry',
    ]),
  },
}
</script>

<style></style>
