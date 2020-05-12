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

    <!-- <f7-block-title>Some details</f7-block-title> -->
    <p>{{ enquiry }}</p>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const ago = new TimeAgo('en-US')

export default {
  name: 'Detail',
  computed: {
    ...mapGetters(['enquiry', 'user']),
  },

  mounted() {
    console.log(this.$f7router.history)
    // If we are here we are viewing the details of the
  },

  methods: {
    ago(dateString) {
      return ago.format(new Date(dateString))
    },
  },
}
</script>

<style></style>
