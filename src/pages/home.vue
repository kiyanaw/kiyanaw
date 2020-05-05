<template>
  <f7-page>
    <!-- Top Nav -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link
          class="panel-open"
          open-panel="left"
          icon="fas fa-bars"
        ></f7-link>
      </f7-nav-left>
      <div class="title">kiyânaw</div>
    </f7-navbar>
    
    <!-- Page content -->
    <f7-block>      
      <!-- Custom search bar --> 
      <div class="search">
        <i class="fas fa-search"></i>
        <input 
          class="searchbox"
          type="text"
          v-model="searchText"
          placeholder="How do I say ....." />
        <i class="fas fa-times" @click="searchText = ''"></i>
      </div>
    
    </f7-block>
    <f7-block>
      <div v-if="searchText === ''">
        <h3> Recent Searches </h3>
        <f7-list>
          <f7-list-item link="#"
            title="tânispî ohci ê-nôhtê-kiyokêyan"
            header="How long do you want to visit?"
            footer="updated 3 minutes ago by bengodden"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="ahâw mâka"
            header="Okay then..."
            footer="updated 4 minutes ago by aaronfay"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="nitawi-wîcê-mêtawêmik kîtisânak"
            header="Go and play with your siblings"
            footer="updated 7 minutes by wjackson"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="kika-kî-nipân"
            header="You should be sleeping"
            footer="updated 15 minutes by jhill"
            after="">
          </f7-list-item>

          <f7-list-item link="#"
            title="kiwâmpamâw cî kitôtêminaw Ben?"
            header="Have you seen our friend Ben?"
            footer="updated 21 minutes by rfletcher"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="mwêstas ê-wî-pîkiskwâtikok"
            header="I will talk to you all later"
            footer="updated 27 minutes by bgodden"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="tânitê êtikwê"
            header="I wonder where..."
            footer="updated 33 minutes by aogg"
            after="🎵">
          </f7-list-item>

          <f7-list-item link="#"
            title="kitatamiskâtinâwâw kahkiyaw"
            header="I greet you all"
            footer="updated 40 minutes by tgreen"
            after="🎵">
          </f7-list-item>
        </f7-list>
      </div>
      <div v-else>
        <h3> Answers </h3>
        <f7-list>
          <f7-list-item 
            v-for="item in answersList"
            :key="item.id"
            :link="item.link"
            :title="item.phrase"
            :header="item.query"
            :footer="item.updated"
            after="🎵">
          </f7-list-item>
        </f7-list>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
// import { amplifyComponents } from "aws-amplify-vue";

export default {
  name: 'Home',
  data: () => {
    return {
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
    };
  },
  methods: {
    executeSearch(queryString) {
      console.log(queryString);
      // Send to store action..... which should then send to service
      // Service should return query response which will populate answers
    },
  },
  mounted() {
    
  },
  watch: {
    searchText(newVal, oldVal) {
      if (newVal !== oldVal && newVal !== '') {
        window.clearTimeout(this.searchTimeout)
        this.searchTimeout = window.setTimeout(() => { this.executeSearch(newVal) }, 1000);
      }
    },
  }
};
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
</style>