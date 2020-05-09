<template>
  <f7-page>
    <!-- <amplify-authenticator> -->
    <!-- The rest of your app code -->
    <!-- Top Nav -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link
          class="panel-open"
          open-panel="left"
          icon="fas fa-bars" />
      </f7-nav-left>

      <f7-nav-title sliding>
        kiyânaw
      </f7-nav-title>
      <f7-nav-right>
        <f7-link
          ref="searchLink"
          class="searchbar-enable"
          icon-md="material:search" />
      </f7-nav-right>
      <f7-searchbar
        ref="searchbar"
        class="searchbar-components"
        expandable
        :backdrop="false"
        :custom-search="true"
        :disable-button="!this.$theme.aurora"
        @focus="searching = true"
        @searchbar:disable="searching = false"
        @searchbar:search="onSearch" />
    </f7-navbar>

    <f7-block v-if="!searching && !searchText">
      <p>
        Search for words or phrases you want to know in the
        {{ language }} language, or browse the list of submissions.
      </p>
      <br>
      <f7-row>
        <f7-col>
          <f7-button
            raised
            icon-md="material:search"
            class="searchbar-enable">
            Search
          </f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            raised
            icon-md="material:list"
            href="/browse/">
            Browse
          </f7-button>
        </f7-col>
      </f7-row>
      <f7-block v-if="!user">
        <f7-link href="/sign-in/">
          Sign in
        </f7-link>to submit content.
      </f7-block>
    </f7-block>

    <div v-if="searching && !searchText">
      <!-- <f7-block-title>Recent</f7-block-title> -->
      <f7-list class="nomargin">
        <f7-list-item
          title="visits"
          @click="$refs.searchbar.search('visits')" />
        <f7-list-item
          title="fontanelle"
          @click="$refs.searchbar.search('fontanelle')" />
        <f7-list-item
          title="itâhkamikisiw"
          @click="$refs.searchbar.search('itâhkamikisiw')" />
      </f7-list>
    </div>

    <div v-if="searchText.length">
      <f7-block-title>Search results for {{ searchText }}</f7-block-title>
      <f7-list>
        <f7-list-item
          link="#"
          title="tânispî ohci ê-nôhtê-kiyokêyan"
          header="How long do you want to visit?"
          footer="updated 3 minutes ago by bengodden"
          after="🎵" />

        <f7-list-item
          link="#"
          title="ahâw mâka"
          header="Okay then..."
          footer="updated 4 minutes ago by aaronfay"
          after="🎵" />

        <f7-list-item
          link="#"
          title="nitawi-wîcê-mêtawêmik kîtisânak"
          header="Go and play with your siblings"
          footer="updated 7 minutes by wjackson"
          after="🎵" />

        <f7-list-item
          link="#"
          title="kika-kî-nipân"
          header="You should be sleeping"
          footer="updated 15 minutes by jhill"
          after />

        <f7-list-item
          link="#"
          title="kiwâmpamâw cî kitôtêminaw Ben?"
          header="Have you seen our friend Ben?"
          footer="updated 21 minutes by rfletcher"
          after="🎵" />

        <f7-list-item
          link="#"
          title="mwêstas ê-wî-pîkiskwâtikok"
          header="I will talk to you all later"
          footer="updated 27 minutes by bgodden"
          after="🎵" />

        <f7-list-item
          link="#"
          title="tânitê êtikwê"
          header="I wonder where..."
          footer="updated 33 minutes by aogg"
          after="🎵" />

        <f7-list-item
          link="#"
          title="kitatamiskâtinâwâw kahkiyaw"
          header="I greet you all"
          footer="updated 40 minutes by tgreen"
          after="🎵" />
        <f7-list-item
          link="#"
          title="kiwâmpamâw cî kitôtêminaw Ben?"
          header="Have you seen our friend Ben?"
          footer="updated 21 minutes by rfletcher"
          after="🎵" />

        <f7-list-item
          link="#"
          title="mwêstas ê-wî-pîkiskwâtikok"
          header="I will talk to you all later"
          footer="updated 27 minutes by bgodden"
          after="🎵" />

        <f7-list-item
          link="#"
          title="tânitê êtikwê"
          header="I wonder where..."
          footer="updated 33 minutes by aogg"
          after="🎵" />

        <f7-list-item
          link="#"
          title="kitatamiskâtinâwâw kahkiyaw"
          header="I greet you all"
          footer="updated 40 minutes by tgreen"
          after="🎵" />
      </f7-list>
    </div>

    <f7-fab
      v-if="user"
      slot="fixed"
      position="right-bottom"
      color="blue">
      <f7-icon
        ios="f7:plus"
        aurora="f7:plus"
        md="material:add" />
      <f7-icon
        ios="f7:xmark"
        aurora="f7:xmark"
        md="material:close" />
      <f7-fab-buttons
        position="top"
        color="green">
        <f7-fab-button
          fab-close
          href="/new-enquiry/">
          <f7-icon
            md="material:create"
            size="15" />
        </f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
    <!-- <amplify-sign-out></amplify-sign-out> -->
    <!-- </amplify-authenticator> -->
  </f7-page>
</template>
<script>
import Timeout from 'smart-timeout'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    language: 'Cree',
    searching: false,
    searchText: '',
  }),
  computed: {
    ...mapGetters(['user', 'currentQuery']),
  },
  watch: {
    currentQuery(val) {
      console.log(val)
    },
  },
  methods: {
    ...mapActions(['setCurrentQuery']),
    // eslint-disable-next-line no-unused-vars
    onSearch(searchBar, query, previousQuery) {
      Timeout.set(this.setSearch, 250, query)
    },
    setSearch(query) {
      this.searchText = query
      this.setCurrentQuery(query)
    },
  },
}
</script>

<style lang="scss">
.navbar {
  .title {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
.search {
  .fas {
    opacity: 0.5;
  }
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 20px;
  .searchbox {
    margin-left: 12px;
  }
}

.nomargin {
  margin: 0;
}
</style>
