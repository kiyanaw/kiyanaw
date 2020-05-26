<template>
  <div>
    <f7-block>
      <p>  Choose language or sign in </p>

      <!-- INPUT FORM -->
      <f7-list no-hairlines-md>
        <!-- Language -->
        <f7-list-input
          label="Language"
          type="select"
          placeholder="Please choose..."
          :value="localUserLang"
          @change="localUserLang = $event.target.value">
          <option
            v-for="language in languages"
            :key="language">
            {{ language }}
          </option>
        </f7-list-input>

        <!-- SIGN IN BUTTON -->
        <f7-button
          v-if="!user"
          href="/sign-in/"
          panel-close
          fill
          color="orange"
          icon-md="material:https"
          icon-size="15"
          class="padd">
          Sign in
        </f7-button>
      </f7-list>
    </f7-block>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Onboarding',
  computed: {
    ...mapGetters([
      'user',
      'userLanguage',
      'languages',
      'regions',
      'userRegion',
      'dialects',
      'userDialect',
    ]),
    localUserLang: {
      get() {
        return this.userLanguage
      },
      set(val) {
        if (!this.userLanguage) {
          this.setCurrentLanguage(val)
        }
      },
    },
    localRegion: {
      get() {
        return this.userRegion
      },
      set(val) {
        if (!this.userRegion) {
          this.setCurrentRegion(val)
        }
      },
    },
    localDialect: {
      get() {
        return this.userDialect
      },
      set(val) {
        if (!this.userDialect) {
          this.setCurrentDialect(val)
        }
      },
    },
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'getUser',
      'setCurrentLanguage',
      'setCurrentDialect',
      'setCurrentRegion',
    ]),
  },
}
</script>

<style>

</style>
