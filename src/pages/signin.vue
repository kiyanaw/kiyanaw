<template>
  <f7-page>
    <f7-navbar
      title="Sign in"
      back-link="Back" />
    <f7-block
      v-if="user"
      class="sign-out-block">
      You are signed in as {{ user.name }}
      <amplify-sign-out />
    </f7-block>
    <amplify-authenticator
      v-else-if="!user" />
  </f7-page>
</template>

<script>
import { Hub } from '@aws-amplify/core'
import { mapActions, mapGetters } from 'vuex'
import userService from '../services/userService'


export default {
  name: 'Signin',
  components: {
  },
  data: () => ({
    localname: '',
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  mounted() {
    Hub.listen('auth', (info) => {
      if (info.payload.event === 'signIn') {
        // Redirects to home after good login
        this.getUser()
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
