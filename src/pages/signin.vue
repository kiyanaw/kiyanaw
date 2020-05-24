<template>
  <f7-page>
    <f7-navbar
      title="Sign in"
      back-link="Back" />
    <f7-block
      v-if="user && user.name"
      class="sign-out-block">
      You are signed in as {{ user.name }}
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
import { Hub } from '@aws-amplify/core'
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
    Hub.listen('auth', (info) => {
      console.log(info)
      if (info.payload.event === 'signIn') {
        // TO DO PUSH SET LANGUAGE TO USER PREF IF NOT ALREADY SET FOR USER
        window.localStorage.removeItem('language')

        // Populates user in the store
        this.getUser()

        // Redirects to home after good login
        this.$f7router.navigate('/')
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
