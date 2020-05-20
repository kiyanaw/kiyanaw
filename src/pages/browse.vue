<template>
  <f7-page>
    <f7-navbar
      title="Recently asked"
      back-link="Foo"
      back-link-url="/" />
    <f7-list>
      <f7-list-item
        v-for="item in recentEnquiries"
        :key="item.id"
        :title="item.text"
        :subtitle="item.owner"
        :after="ago(item.updatedAt)"
        :link="'/detail/' + item.id" />
    </f7-list>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const ago = new TimeAgo('en-US')


export default {
  name: 'Detail',
  computed: {
    ...mapGetters([
      'recentEnquiries',
      'user',
    ]),
  },
  async mounted() {
    this.$f7.dialog.preloader('Loading recent ...')
    await this.listRecentEnquiries()
    this.$f7.dialog.close()
  },
  methods: {
    ...mapActions(['listRecentEnquiries']),

    ago(dateString) {
      return ago.format(new Date(dateString))
    },
  },
}
</script>

<style></style>
