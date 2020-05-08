<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back"
      back-link-url="/"
    />
    <f7-block-title>
      Some details
    </f7-block-title>
    <p>{{ enquiry }}</p>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Detail',
  computed: {
    ...mapGetters(['recentEnquiries']),
  },
  methods: {
    ...mapActions(['listRecentEnquiries']),
  },

  mounted() {
    this.listRecentEnquiries();
  },
};
</script>

<style></style>
