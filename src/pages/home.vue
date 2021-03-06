<template>
  <f7-page>
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

    <onboarding v-if="!searching && !searchText && !userLanguage" />

    <f7-block v-else-if="showSettings">
      <user-settings />
    </f7-block>

    <f7-block v-if="!searching && !searchText && userLanguage && !showSettings">
      <p>
        Search for words or phrases you want to know in the
        {{ userLanguage }} language, or browse the list of submissions.
      </p>
      <br>
      <f7-row>
        <f7-col>
          <f7-button
            raised fill
            icon-md="material:search"
            class="searchbar-enable">
            Search
          </f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            raised fill
            icon-md="material:list"
            href="/browse/">
            Browse
          </f7-button>
        </f7-col>
      </f7-row>
      <f7-block v-if="!user">
        <f7-link href="/sign-in/">
          Sign in
        </f7-link> to submit content.
      </f7-block>
    </f7-block>

    <f7-block v-if="!searching">
      <f7-block-title>Recent</f7-block-title>
      <f7-list class="nomargin">
        <f7-list-item
          v-for="question in sortedHistory"
          :key="question.id"
          :title="question.text"
          :link="`/detail/${question.id}`" />
      </f7-list>
    </f7-block>

    <f7-block v-if="searchText.length" class="search-results-block">
      <h3 class="search-results-header">Search results for "{{ searchText }}"</h3>
      <f7-card>
        <f7-list v-if="results">
          <f7-list-item
            v-for="result in results"
            :key="result.id"
            :link="`/detail/${result.enquiryId}`"
            :header="result.enquiryText"
            :title="result.responseText"
            :footer="'updated at ' + ago(result.updatedAt)"
            after="🎵" />
        </f7-list>
      </f7-card>
    </f7-block>

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
          href="/new-question/">
          <f7-icon
            md="material:create"
            size="15" />
        </f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
  </f7-page>
</template>
<script>
import Timeout from 'smart-timeout'
import { mapGetters, mapActions } from 'vuex'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import UserSettings from '../components/userSettings.vue'

// eslint-disable-next-line import/no-unresolved
import onboarding from '../components/onboarding.vue'
import searchService from '../services/search'

TimeAgo.addLocale(en)
const ago = new TimeAgo('en-US')

export default {
  name: 'Home',
  components: {
    onboarding,
    UserSettings,
  },
  data: () => ({
    language: 'Cree',
    searching: false,
    searchText: '',
    results: [],
  }),
  computed: {
    ...mapGetters([
      'user',
      'currentQuery',
      'userLanguage',
      'history',
    ]),
    sortedHistory() {
      const { history } = this
      if (history) {
        return history.sort((a, b) => {
          const aTime = new Date(a.viewedAt).getTime()
          const bTime = new Date(b.viewedAt).getTime()
          if (aTime > bTime) return -1
          if (bTime > aTime) return 1
          return 0
        })
      }
      return []
    },
    languageSet() {
      if (this.user) {
        return true
      }
      if (window.localStorage.getItem('language') || this.userLanguage) {
        return true
      }
      return false
    },
    showSettings() {
      if (this.user) {
        return !this.user?.profile
      }
      return false
    },
  },
  watch: {
  },
  mounted() {
    this.syncHistory()
  },
  methods: {
    ...mapActions([
      // 'setCurrentQuery',
      'getUser',
      'setUsername',
      'syncHistory',
    ]),
    goToDetail(id) {
      this.$f7router.navigate(`/detail/${id}`)
    },
    ago(dateString) {
      return ago.format(new Date(dateString))
    },
    // eslint-disable-next-line no-unused-vars
    onSearch(searchBar, query, previousQuery) {
      Timeout.set(this.setSearch, 250, query)
    },
    async setSearch(query) {
      this.searchText = query
      this.results = []
      this.$f7.dialog.preloader('Searching...')
      const results = await searchService.search(query)
      this.$f7.dialog.close()
      this.results = results
    },
  },
}
</script>

<style lang="scss">

.page {
  background-color: #deeeff;
}
.panel .page {
  background-color:white;
}
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

.search-results-block {
  padding:0;
  margin: 10px 0;
}
.search-results-header {
  text-align: center;
  font-weight: normal;
  color:#7dbcff;
  margin-bottom: 0;
}
</style>
