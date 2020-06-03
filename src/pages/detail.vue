<template>
  <f7-page>
    <f7-navbar
      title="Detail"
      back-link="Back" />

    <f7-card
      v-if="enquiry"
      :title="enquiry.text"
      :content="`Submitted by ${enquiry.warrior.name} ${someTimeAgo(enquiry.createdAt)}`">
      <f7-card-footer>
        <f7-link
          :icon-md="isFav ? 'material:star_fill' : 'material:star_outline'"
          @click="toggleFav()">
          {{ isFav ? 'Un-Favorite' : 'Favorite ' }}
        </f7-link>
        <!-- <f7-link>Read more</f7-link> -->
      </f7-card-footer>
    </f7-card>

    <!-- TODO: Friendly message if no responses provided -->
    <div v-if="enquiry">
      <f7-card
        v-for="response in enquiry.responses"
        :key="response.id"
        :content="response.text"
        :footer="'by ' + response.warrior.name + ' ' + someTimeAgo(response.createdAt)" />
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
import utils from '../utils/utils'
import enquiryService from '../services/enquiryService'
import responseService from '../services/responseService'

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
    isFav() {
      return this.user.favorites.findIndex((el) => el.id === this.enquiryId) > -1
    },
  },

  async mounted() {
    this.$f7.dialog.preloader('Loading enquiry...')

    // pull a fresh copy of enquiry and responses to get warrior details
    // we go around the store here because this data won't be used elsewhere
    const [enquiry, responses] = await Promise.all([
      enquiryService.get(this.enquiryId),
      responseService.byEnquiry(this.enquiryId),
    ])

    // TODO: not sure if I like this approach yet
    enquiry.responses = responses
    this.enquiry = enquiry
    this.$f7.dialog.close()
    this.updateHistory(enquiry)
  },

  methods: {
    ...mapActions([
      // 'getEnquiry',
      // 'getResponsesByEnquiry',
      'saveFavorites',
      'deleteFavorite',
      'updateHistory',
    ]),
    toggleFav() {
      if (this.isFav) {
        this.deleteFavorite(this.enquiry)
      } else {
        this.saveFavorites(this.enquiry)
      }
    },
    someTimeAgo(time) {
      return utils.someTimeAgo(time)
    },
    addToHistory(enquiry) {
      let history = JSON.parse(window.localStorage.getItem('history'))
      // If the object doesn't exist we need to create it as an array
      if (history === null || history === undefined) {
        history = []
      }
      // We don't want to keep EVERYTHING so delete the first historical item after N records
      if (history.length > 10) {
        history = history.shift()
      }
      // If the item is already in the history, remove it where it's from so it can be put to the end
      const idx = history.findIndex((el) => el.id === enquiry.id)
      if (idx > -1) {
        history.splice(idx, 1)
      }
      // Push the item to the array and stringify it since localStorage only allaows strings
      const enquiryToPush = { ...enquiry }
      enquiryToPush.viewedAt = new Date()
      history.push(enquiryToPush)
      history = JSON.stringify(history)
      window.localStorage.setItem('history', history)
    },
  },
}
</script>

<style></style>
