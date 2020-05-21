<template>
  <f7-page>
    <f7-navbar
      title="Preferences"
      back-link="Back" />

    <f7-block>
      <user-settings />
    </f7-block>
  </f7-page>
</template>

<script>
import userSettings from '../components/userSettings.vue'

export default {
  name: 'Preferences',
  components: {
    userSettings,
  },
  data: () => ({
  }),
}
</script>

<style></style>
