<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back"
      back-link-url="/" />
    <f7-block-title>Recent</f7-block-title>
    <f7-list
      v-for="item in recentEnquiries"
      :key="item.id">
      <f7-list-item :title="item.text" />
    </f7-list>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Detail',
  computed: {
    ...mapGetters(['recentEnquiries']),
  },
  mounted() {
    this.listRecentEnquiries()
  },
  methods: {
    ...mapActions(['listRecentEnquiries']),
  },
}
</script>

<style></style>
