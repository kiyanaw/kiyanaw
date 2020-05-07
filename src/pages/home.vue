<template>
  <f7-page>
    <!-- Top Nav -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>

      <f7-nav-title sliding>kiyânaw</f7-nav-title>
      <f7-nav-right>
        <f7-link ref="searchLink" class="searchbar-enable" icon-md="material:search"></f7-link>
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-components"
        ref="searchbar"
        expandable
        :backdrop="false"
        :custom-search="true"
        :disable-button="!this.$theme.aurora"
        @focus="searching = true"
        @searchbar:disable="searching = false"
        @searchbar:search="onSearch"
      ></f7-searchbar>
    </f7-navbar>

    <f7-block v-if="!searching && !searchText">
      <p>
        Search for words or phrases you want to know in the {{ language }} language, or browse the list of submissions.
      </p>
      <br />
      <f7-row>
        <f7-col>
          <f7-button raised icon-md="material:search" class="searchbar-enable">Search</f7-button>
        </f7-col>
        <f7-col>
          <f7-button raised icon-md="material:list">Browse</f7-button>
        </f7-col>
      </f7-row>
      <f7-block v-if="!user"> <f7-link href="/sign-in">Sign in</f7-link> to submit content. </f7-block>
    </f7-block>

    <div v-if="searching && !searchText">
      <!-- <f7-block-title>Recent</f7-block-title> -->
      <f7-list class="nomargin">
        <f7-list-item title="visits" @click="$refs.searchbar.search('visits')"></f7-list-item>
        <f7-list-item title="fontanelle" @click="$refs.searchbar.search('fontanelle')"></f7-list-item>
        <f7-list-item title="itâhkamikisiw" @click="$refs.searchbar.search('itâhkamikisiw')"></f7-list-item>
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
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="ahâw mâka"
          header="Okay then..."
          footer="updated 4 minutes ago by aaronfay"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="nitawi-wîcê-mêtawêmik kîtisânak"
          header="Go and play with your siblings"
          footer="updated 7 minutes by wjackson"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="kika-kî-nipân"
          header="You should be sleeping"
          footer="updated 15 minutes by jhill"
          after=""
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="kiwâmpamâw cî kitôtêminaw Ben?"
          header="Have you seen our friend Ben?"
          footer="updated 21 minutes by rfletcher"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="mwêstas ê-wî-pîkiskwâtikok"
          header="I will talk to you all later"
          footer="updated 27 minutes by bgodden"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="tânitê êtikwê"
          header="I wonder where..."
          footer="updated 33 minutes by aogg"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="kitatamiskâtinâwâw kahkiyaw"
          header="I greet you all"
          footer="updated 40 minutes by tgreen"
          after="🎵"
        >
        </f7-list-item>
        <f7-list-item
          link="#"
          title="kiwâmpamâw cî kitôtêminaw Ben?"
          header="Have you seen our friend Ben?"
          footer="updated 21 minutes by rfletcher"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="mwêstas ê-wî-pîkiskwâtikok"
          header="I will talk to you all later"
          footer="updated 27 minutes by bgodden"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="tânitê êtikwê"
          header="I wonder where..."
          footer="updated 33 minutes by aogg"
          after="🎵"
        >
        </f7-list-item>

        <f7-list-item
          link="#"
          title="kitatamiskâtinâwâw kahkiyaw"
          header="I greet you all"
          footer="updated 40 minutes by tgreen"
          after="🎵"
        >
        </f7-list-item>
      </f7-list>
    </div>

    <f7-fab v-if="user" position="right-bottom" slot="fixed" color="blue">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button label="Action 1">1</f7-fab-button>
        <f7-fab-button label="Action 2">2</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
  </f7-page>
</template>
<script>
// import { amplifyComponents } from "aws-amplify-vue";

import Store from '../store'

export default {
  name: 'Home',
  computed: {
    user: () => {
      return false
    },
  },
  data: () => {
    return {
      language: 'Cree',
      searching: false,
      searchText: '',
      searchTimeout: null,
      answersList: [
        {
          id: 1,
          link: '#',
          phrase: 'nitisiyihkason',
          query: 'My Name Is',
          language: 'X',
          dialect: 'Y',
          updated: new Date().toString(),
        },
        {
          id: 2,
          link: '#',
          phrase: 'teluisi',
          query: 'My Name Is',
          language: 'Mikmaq',
          dialect: 'Listguj',
          updated: new Date().toString(),
        },
      ],
    }
  },
  methods: {
    onSearch(searchBar, query, previousQuery) {
      console.log('got query', query)
      // TODO: throttle
      this.searchText = query
    },
    // executeSearch(queryString) {
    //   console.log(queryString)
    //   // Send to store action..... which should then send to service
    //   // Service should return query response which will populate answers
    // },
  },
  mounted() {
    window.foo = this
  },
  // watch: {
  //   searchText(newVal, oldVal) {
  //     if (newVal !== oldVal && newVal !== '') {
  //       // TODO: use smart-timeout
  //       window.clearTimeout(this.searchTimeout)
  //       this.searchTimeout = window.setTimeout(() => {
  //         this.executeSearch(newVal)
  //       }, 1000)
  //     }
  //   },
  // },
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
