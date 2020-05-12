<template>
  <f7-page>
    <f7-navbar
      title="Preferences"
      back-link="Back" />

    <f7-block>
      <!-- Language Setting -->
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

      <!-- Dialect -->
      <div class="list">
        <ul>
          <li>
            <a
              href="#"
              class="item-link smart-select"
              data-close-on-select="true">
              <select
                v-model="localUserDialect"
                name="dialect">
                <option
                  v-for="dialect in dialects"
                  :key="dialect"
                  :value="dialect"
                  :selected="localUserDialect === dialect">
                  {{ dialect }}
                </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title"> Dialect </div>
                  <div class="item-after">{{ localUserDialect }}</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="list">
        <ul>
          <li>
            <a
              href="#"
              class="item-link smart-select"
              data-close-on-select="true">
              <select
                v-model="localUserRegion"
                name="region">
                <option
                  v-for="region in regions"
                  :key="region"
                  :value="region"
                  :selected="localUserRegion === region">
                  {{ region }}
                </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title"> Region </div>
                  <div class="item-after">{{ localUserRegion }}</div>
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
  }),
  computed: {
    ...mapGetters([
      // 'user',
      'languages',
      'dialects',
      'regions',
      'userLanguage',
      'userDialect',
      'userRegion',
    ]),
    localUserLang: {
      get() {
        return this.userLanguage
      },
      set(val) {
        this.updateAttribute({ name: 'language', value: val })
      },
    },
    localUserDialect: {
      get() {
        return this.userDialect
      },
      set(val) {
        this.updateAttribute({ name: 'dialect', value: val })
      },
    },
    localUserRegion: {
      get() {
        return this.userRegion
      },
      set(val) {
        this.updateAttribute({ name: 'region', value: val })
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
