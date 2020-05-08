<template>
  <f7-page>
    <f7-navbar
      title="Preferences"
      back-link="Back" />

    <f7-block>
      <h1>
        User Settings
      </h1>

      <div class="list">
        <ul>
          <li>
            <a
              href="#"
              class="item-link smart-select"
              data-close-on-select="true">
              <select
                v-model="userLang"
                name="Language">
                <option
                  v-for="lang in languages"
                  :key="lang"
                  :value="lang"
                  :selected="userLang === lang">
                  {{ lang }}
                </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title">Language</div>
                  <div class="item-after">{{ userLang }}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Preferences',
  data: () => ({
    languages: ['Cree', "Mi'kmaq"],
  }),
  computed: {
    ...mapGetters([
      'user',
    ]),
    userLang: {
      get() {
        return this.user.language
      },
      set(val) {
        this.updateAttribute({ name: 'language', value: val })
      },
    },
  },
  methods: {
    ...mapActions([
      'updateAttribute',
    ]),
  },
}
</script>

<style></style>
