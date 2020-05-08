<template>
  <!-- App -->
  <f7-app
    :params="f7params">
    <f7-statusbar />
    <f7-panel
      left
      cover>
      <f7-view
        url="/panel-left/"
        links-view=".view-main" />
    </f7-panel>
    <f7-view
      url="/"
      :main="true"
      class="ios-edges" />
  </f7-app>
</template>
<script>
// Import Routes...
import {
  f7App, f7Panel, f7View, f7Statusbar,
} from 'framework7-vue'
import routes from './routes'

let theme = 'md'
if (document.location.search.indexOf('theme=') >= 0) {
  // eslint-disable-next-line prefer-destructuring
  theme = document.location.search.split('theme=')[1].split('&')[0]
}

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
    f7Statusbar,
  },
  data() {
    return {
      f7params: {
        theme,
        routes,
        id: 'io.framework7.testapp',
      },
    }
  },
}
</script>
