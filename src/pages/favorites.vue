<template>
  <f7-page>
    <f7-navbar
      title="Favorites"
      back-link="back" />
    <f7-card
      v-for="fav in favorites"
      :key="fav.id">
      <f7-card-content>
        {{ fav.text }}
      </f7-card-content>
      <f7-card-footer>
        {{ `Favorited ${ago(fav.favoritedAt)}` }}
        <f7-link
          @click="goToDetail(fav.id)">
          View Details
        </f7-link>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import utils from '../utils/utils'

export default {
  name: 'Favorites',
  computed: {
    ...mapGetters([
      'user',
    ]),
    favorites() {
      let userFavs = this.user.favorites
      userFavs = userFavs.sort((a, b) => {
        if (a.favoritedAt > b.favoritedAt) return -1
        if (b.favoritedAt > a.favorites) return 1
        return 0
      })
      return userFavs
    },
  },
  methods: {
    ...mapActions([
      'deleteFavorite',
    ]),
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
