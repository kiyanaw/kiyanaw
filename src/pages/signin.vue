<template>
  <f7-page>
    <f7-navbar
      title="Sign in"
      back-link="Back" />
    <f7-block
      v-if="user && hasProfile"
      class="sign-out-block">
      You are signed in as {{ user.name }}
      <amplify-sign-out />
    </f7-block>
    <f7-block v-else-if="user && !hasProfile">
      <user-settings />
    </f7-block>
    <amplify-authenticator
      v-else-if="!user" />
  </f7-page>
</template>

<script>
import { Hub } from '@aws-amplify/core'
import { mapActions, mapGetters } from 'vuex'
import UserSettings from '../components/userSettings.vue'
import userService from '../services/userService'


export default {
  name: 'Signin',
  components: {
    UserSettings,
  },
  data: () => ({
    localname: '',
    hasProfile: false,
  }),
  computed: {
    ...mapGetters([
      'user',
      'username',
    ]),
  },
  mounted() {
    if (this.user) {
      this.hasProfile = this.checkProfile()
    }
    Hub.listen('auth', (info) => {
      if (info.payload.event === 'signIn') {
        // TO DO PUSH SET LANGUAGE TO USER PREF IF NOT ALREADY SET FOR USER
        window.localStorage.removeItem('language')

        // Populates user in the store
        this.getUser().then(() => {
          this.hasProfile = this.checkProfile()
        })
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
    async checkProfile() {
      if (this.user) {
        const profile = await userService.getUser(this.user.id)
        if (profile === null) {
          return false
        }
        return true
      }
      return false
    },
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
