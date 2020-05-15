<template>
  <f7-page>
    <f7-navbar
      title="Sign in"
      back-link="Back" />
    <f7-block
      v-if="user && user.preferred_username"
      class="sign-out-block">
      You are signed in as {{ user.preferred_username }}
      <amplify-sign-out />
    </f7-block>
    <f7-block v-else-if="user && !user.preffered_username">
      <f7-input
        id="username"
        :value="localname"
        placeholder="Username"
        inline-label="true"
        type="text"
        validate="true"
        input-style="line-height: 36px; border-radius: 4px; font-size: 14px; text-align: center;"
        tabindex="1"
        @input="localname = $event.target.value" />

      <f7-button
        raised
        type="submit"
        @click="saveUsername()">
        Save
      </f7-button>
    </f7-block>
    <amplify-authenticator
      v-else-if="!user" />
  </f7-page>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
// import { Auth } from 'aws-amplify';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Signin',
  data: () => ({
    localname: '',
  }),
  computed: {
    ...mapGetters([
      'user',
      'username',
    ]),
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
    ...mapActions([
      'getUser',
      'setUser',
      'updateUsername',
    ]),
    saveUsername() {
      this.updateUsername(this.localname)
    },
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
