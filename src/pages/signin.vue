<template>
  <f7-page>
    <f7-navbar title="Sign in" back-link="Back"></f7-navbar>
    <f7-block v-if="user"> You are signed in as {{ user.email }} </f7-block>
    <amplify-authenticator v-if="!user" />
    <amplify-sign-out v-if="user" />
  </f7-page>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Signin',
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['getUser', 'setUser']),
  },
  mounted() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.getUser()
      } else {
        this.setUser(false)
      }
    })
  },
}
</script>

<style></style>
