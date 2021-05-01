<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="!searching">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>kiyânaw</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="onSearchClicked">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar app color="white" v-if="searching">
      <v-text-field
        hide-details
        ref="mainSearchInput"
        single-line
        @blur="onSearchBlur"
      >
        <template v-slot:prepend>
          <v-icon>mdi-arrow-left</v-icon>
        </template>
        <template v-slot:append>
          <v-icon>mdi-magnify</v-icon>
        </template>
      </v-text-field>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            kiyânaw
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <nav-item title="Search" icon="magnify"></nav-item>
          <nav-item title="My Questions" icon="forum"></nav-item>
          <nav-item
            title="Unanswered"
            icon="message-question-outline"
          ></nav-item>
          <nav-item title="Playlist" icon="playlist-music"></nav-item>
          <nav-item title="Favorites" icon="bookmark"></nav-item>
          <nav-item title="Preferences" icon="cog"></nav-item>
          <nav-item title="About" icon="information"></nav-item>
        </v-list-item-group>
      </v-list>

      <v-btn block>
        <!-- TODO -->
        Logout
      </v-btn>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import NavigationItem from './components/NavigationItem'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    'nav-item': NavigationItem,
  },

  data: () => ({
    drawer: false,
    group: null,
    searching: false,
  }),

  methods: {
    async onSearchClicked() {
      this.searching = true

      // allow some render time
      await new Promise(resolve => setTimeout(resolve, 5))
      this.$refs.mainSearchInput.focus()

      // register listener
    },

    onSearchBlur() {
      this.searching = false
    },
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
