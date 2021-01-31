<template>
  <f7-page>
    <f7-navbar
      title="Phrase"
      back-link="Back" />

    <f7-card
      v-if="enquiry">
      <f7-card-content>
        <h2>{{ enquiry.text }}</h2>
        <h3 v-if="enquiry.type === 'word'">
          {{ toSyllabics(enquiry.responses[0].text) }}
        </h3>
        <h3 v-if="enquiry.type === 'word'">
          {{ enquiry.responses[0].text }}
        </h3>
        <h2
          v-if="enquiry.type === 'word'"
          class="source">
          Source - Cree: Words, Arok Wolvengrey
        </h2>
      </f7-card-content>
      <f7-card-footer>
        <span v-if="enquiry.type !== 'word'">by {{ enquiry.warrior.name }} {{ someTimeAgo(enquiry.createdAt) }}</span>
        <f7-link
          v-if="user"
          :icon-md="isFav ? 'material:star_fill' : 'material:star_outline'"
          @click="toggleFav()">
          Favorite
        </f7-link>
      </f7-card-footer>
    </f7-card>

    <div v-if="enquiry && enquiry.type !== 'word'">
      <h3 class="responses-title">
        Responses
      </h3>
      <f7-card
        v-for="(response, index) in enquiry.responses"
        :key="response.id">
        <f7-card-footer class="response-author">
          {{ response.warrior.name }} responded {{ someTimeAgo(response.createdAt) }}:
        </f7-card-footer>
        <f7-card-content>
          <h2 class="response-title">
            {{ response.text }}
          </h2>
          <h2 class="response-title">
            {{ toSyllabics(response.text) }}
          </h2>
        </f7-card-content>
        <f7-card-footer>
          <span v-if="index === 0">Plains Cree (Y)</span>
          <span v-if="index === 1">Woods Cree (TH)</span>
          <f7-link><f7-icon material="playlist_add" />&nbsp; Add to playlist</f7-link>
          <f7-link><f7-icon material="play_circle_filled" />&nbsp; Play audio</f7-link>
        </f7-card-footer>
      </f7-card>
    </div>


    <!-- Floating tab button -->
    <f7-fab
      v-if="user"
      slot="fixed"
      position="right-bottom"
      color="blue"
      :href="`/add-response/${enquiryId}?enquiry=1`">
      <f7-icon
        ios="f7:create"
        aurora="f7:create"
        md="material:create" />
    </f7-fab>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { sro2syllabics } from 'cree-sro-syllabics'

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
      if (this.user) {
        return this.user.favorites.findIndex((el) => el.id === this.enquiryId) > -1
      }
      return false
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
    // this.updateHistory(enquiry)
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
    toSyllabics(text) {
      return sro2syllabics(text)
    },
  },
}
</script>

<style>
.responses-title {
  text-align: center;
  font-weight: normal;
  color:#7dbcff;
  margin-bottom: 0;
}
.response-author {
  font-size: 1em;
}
.response-title {
  margin:0;
}

.source {
  color: #999;
}
</style>
