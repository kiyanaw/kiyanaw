<template>
  <f7-page>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/" title="Search" panel-close>
        <f7-icon slot="media" material="search"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/playlist/" title="Playlist" panel-close>
        <f7-icon slot="media" material="queue_music"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/history/" title="History" panel-close>
        <f7-icon slot="media" material="history"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/preferences/" title="Preferences" panel-close>
        <f7-icon slot="media" material="settings"></f7-icon>
      </f7-list-item>
      <f7-list-item link="/about/" title="About" panel-close>
        <f7-icon slot="media" material="info"></f7-icon
      ></f7-list-item>
    </f7-list>
    <f7-button
      v-if="!user"
      href="/sign-in/"
      panel-close
      fill
      color="orange"
      icon-md="material:https"
      icon-size="15"
      class="padd"
    >
      Sign in
    </f7-button>
    <f7-button
      v-if="user"
      href="/sign-in/"
      panel-close
      outline
      color="orange"
      icon-md="material:https"
      icon-size="15"
      class="padd"
    >
      Sign out
    </f7-button>
  </f7-page>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters(['user']),
  },
  methods: {},
}
</script>

<style>
.padd {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
