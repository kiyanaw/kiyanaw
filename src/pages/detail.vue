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
// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'
import { mapGetters, mapActions } from 'vuex'
import utils from '../utils/utils'

import enquiryService from '../services/enquiryService'
import responseService from '../services/responseService'


// TimeAgo.addLocale(en)
// const ago = new TimeAgo('en-US')

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
    // enquiryOwner() {
    //   return this.userLookup(this.enquiry.owner)
    // },
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
  },

  methods: {
    ...mapActions([
      // 'getEnquiry',
      // 'getResponsesByEnquiry',
      'saveFavorites',
      'deleteFavorite',
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
  },
}
</script>

<style></style>
