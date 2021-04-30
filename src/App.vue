<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavigationItem from './components/NavigationItem'

export default {
  name: 'App',

  components: {
    HelloWorld,
    'nav-item': NavigationItem,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
