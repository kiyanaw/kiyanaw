<template>
  <f7-page>
    <f7-navbar
      title="History"
      back-link="back" />

    <f7-card
      v-for="enquiry in sortedHistory"
      :key="enquiry.id">
      <f7-card-content>
        {{ enquiry.text }}
      </f7-card-content>
      <f7-card-footer>
        {{ `Viewed ${ago(enquiry.viewedAt)}` }}
        <f7-link
          @click="goToDetail(enquiry.id)">
          View Details
        </f7-link>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'
import utils from '../utils/utils'

export default {
  name: 'History',
  computed: {
    ...mapGetters([
      'history',
    ]),
    sortedHistory() {
      // console.log('SORTING HAT', this.history)
      const { history } = this
      return history.sort((a, b) => {
        const aTime = new Date(a.viewedAt).getTime()
        const bTime = new Date(b.viewedAt).getTime()
        if (aTime > bTime) return -1
        if (bTime > aTime) return 1
        return 0
      })
    },
  },
  methods: {
    ago(time) {
      return utils.someTimeAgo(time)
    },
    goToDetail(id) {
      this.$f7router.navigate(`/detail/${id}`)
    },
  },
}
</script>

<style>

</style>
