<template>
  <div>
    Hello
    <!-- <div v-if="authState !== 'signedin'">You are signed out.</div> -->
    <amplify-authenticator>
      <div v-if="user">
        <div>Signed in as {{ user.name }}</div>
        <div>TODO: settings</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AuthStateApp',
  async mounted() {
    this.unsubscribeAuth = onAuthUIStateChange(async authState => {
      if (authState === 'signedin') {
        if (!this.user) {
          // newly signed in
          await this.getUser()
          this.$router.push({ path: '/' })
        }
      } else {
        this.setUser(null)
      }
    })
  },

  computed: {
    ...mapGetters(['user']),
  },

  data() {
    return {
      // user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    }
  },
  beforeDestroy() {
    console.log('destroy', this.user)
    this.unsubscribeAuth()
  },

  methods: {
    ...mapActions(['getUser', 'setUser']),
  },
}
</script>

<style>
/** 
 * TODO: some of these work, some dont?
 * https://docs.amplify.aws/ui/auth/authenticator/q/framework/vue#props-css-amplify-authenticator
 */
:root {
  --amplify-primary-color: #ff6347;
  --amplify-primary-tint: #ff7359;
  --amplify-primary-shade: #e0573e;
  --box-shadow: none;
  --container-display: block;
}
</style>
