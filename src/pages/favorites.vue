<template>
  <f7-page>
    <f7-navbar
      title="Favorites"
      back-link="back" />

    <f7-card
      v-for="fav in favorites"
      :key="fav.id">
      <f7-card-content :padding="false">
        <f7-card-header>
          {{ fav.text }}
        </f7-card-header>
        <div v-if="fav.responses.length >= 1">
          {{ fav.responses[0].text }}
        </div>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'
import utils from '../utils/utils'

export default {
  name: 'Favorites',
  computed: {
    ...mapGetters([
      'user',
    ]),
    favorites() {
      console.log(this.user.favorites)
      return this.user.favorites
    },
  },
  methods: {
    ago(time) {
      return utils.someTimeAgo(time)
    },
    goToDetail(id) {
      console.log('AAAAA')
      this.$f7router.navigate(`/detail/${id}`)
    },
  },
}
</script>

<style>

</style>
