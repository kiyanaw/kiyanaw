<template>
  <f7-page>
    <f7-navbar
      title="Sign in"
      back-link="Back" />
    <f7-block
      v-if="user"
      class="sign-out-block">
      You are signed in as {{ user.email }}
      <amplify-sign-out />
    </f7-block>
    <amplify-authenticator
      v-if="!user" />
  </f7-page>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
// import { Auth } from 'aws-amplify';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Signin',
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        window.localStorage.removeItem('language')
        this.getUser()
      } else {
        this.setUser(null)
      }
    })
  },
  methods: {
    ...mapActions(['getUser', 'setUser']),
  },
}
</script>

<style>
.sign-out-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
