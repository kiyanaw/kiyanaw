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
      <h1> How do I say: </h1>
      <f7-searchbar
        inline="true"
        custom-search="true"
        placeholder="Start typing word or phrase">
      </f7-searchbar>
    </f7-block>
    <f7-block>
      Recent Searches
      
    </f7-block>

  </f7-page>
</template>
<script>
// import { amplifyComponents } from "aws-amplify-vue";

export default {};
</script>

<style lang="scss"> 
.navbar { 
  .title {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>