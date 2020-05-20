<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back"
      back-link-url="/" />

    <f7-card
      v-if="enquiry"
      :title="enquiry.text"
      :content="`Submitted by ${enquiry.warriorName} ${ago}`">
      <f7-card-footer>
        <f7-link icon-md="material:star_outline">
          Save
        </f7-link>
        <!-- <f7-link>Read more</f7-link> -->
      </f7-card-footer>
    </f7-card>

    <!-- TODO: Friendly message if no responses provided -->
    <div v-if="enquiry">
      <f7-block
        v-for="response in enquiry.responses"
        :key="response.id">
        <p> {{ response }} </p>
      </f7-block>
    </div>

    <!-- Floating tab button -->
    <f7-fab
      v-if="user"
      slot="fixed"
      position="right-bottom"
      color="blue"
      :href="`/add-response/${enquiryId}`">
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
  props: {
    enquiryId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    enquiry: null,
  }),
  computed: {
    ...mapGetters([
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
    console.log('getting responses')
    this.$f7.dialog.preloader('Loading enquiry...')
    this.enquiry = await this.getEnquiry(this.enquiryId)
    this.$f7.dialog.close()
    console.log('responses', this.responses)
  },

  methods: {
    ...mapActions([
      'getEnquiry',
    ]),
  },
}
</script>

<style></style>
