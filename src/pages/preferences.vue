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

        <!-- Dialect -->
        <div class="list">
          <ul>
            <li>
              <a
                href="#"
                class="item-link smart-select"
                data-close-on-select="true">
                <select
                  v-model="userDialect"
                  name="dialect">
                  <option
                    v-for="dialect in dialects"
                    :key="dialect"
                    :value="dialect"
                    :selected="userDialect === dialect">
                    {{ dialect }}
                  </option>
                </select>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title"> Dialect </div>
                    <div class="item-after">{{ userDialect }}</div>
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
                  v-model="userRegion"
                  name="region">
                  <option
                    v-for="region in regions"
                    :key="region"
                    :value="region"
                    :selected="userRegion === region">
                    {{ region }}
                  </option>
                </select>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title"> Region </div>
                    <div class="item-after">{{ userRegion }}</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
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
    dialects: ['test1', 'test2', 'test3', 'test4'],
    regions: ['r1', 'r2', 'r3', 'r4'],
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
    userDialect: {
      get() {
        return this.user.dialect
      },
      set(val) {
        this.updateAttribute({ name: 'dialect', value: val })
      },
    },
    userRegion: {
      get() {
        return this.user.region
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
