<template>
  <f7-page>
    <f7-navbar
      title="Get Started"
      back-link-url="/" />
    <f7-block>
      <p>  Choose language or sign in </p>

      <div class="list">
        <ul>
          <li>
            <a
              href="#"
              class="item-link smart-select"
              data-close-on-select="true">
              <select
                v-model="localUserLang"
                name="Language">
                <option
                  v-for="lang in languages"
                  :key="lang"
                  :value="lang"
                  :selected="localUserLang === lang">
                  {{ lang }}
                </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Language</div>
                  <div class="item-after">{{ localUserLang }}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

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
    </f7-block>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Onboarding',
  computed: {
    ...mapGetters([
      'user',
      'userLanguage',
      'languages',
    ]),
    localUserLang: {
      get() {
        return this.userLanguage
      },
      set(val) {
        if (!this.userLanguage) {
          window.localStorage.setItem('language', val)
        }
      },
    },
  },
  mounted() {
  },
}
</script>

<style>

</style>
