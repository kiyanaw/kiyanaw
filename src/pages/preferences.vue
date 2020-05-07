<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>

      <f7-nav-title sliding>kiyânaw</f7-nav-title>
      <f7-nav-right>
        <f7-link ref="searchLink" class="searchbar-enable" icon-md="material:search"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <f7-block>
      <h1> User Settings </h1>

      <div class="list">
        <ul>
          <!-- Smart select item -->
          <li>
            <!-- Additional "smart-select" class -->
            <a href="#" class="item-link smart-select" data-close-on-select="true">
              <!-- select -->
              <select name="Language">
                <!-- TODO: Wire up event to mutate user preference,
                 wire up "selected" prop to stored pref-->
                <option 
                  v-for="lang in languages"
                  :key="lang"
                  :value="lang"> {{lang}} </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <!-- Select label -->
                  <div class="item-title"> Language </div>
                  <!-- Selected value, not required -->
                  <!-- <div class="item-after">Apple</div> -->
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </f7-block>
  
  </f7-page>
</template>

<script>
export default {
  name: 'Preferences',
  data: () => {
    return {
      languages: [
        'Cree',
        'Mi\'kmaq'
      ]
    }
  },
  methods: {
  },
}
</script>

<style>

</style>