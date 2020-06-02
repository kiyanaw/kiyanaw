<template>
  <div class="settings">
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

    <!-- Region -->
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

    <f7-button
      v-if="!user.profile"
      raised
      type="submit"
      @click="saveUser()">
      Save
    </f7-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserSettings',
  data: () => ({
    hasProfile: false,
  }),
  computed: {
    ...mapGetters([
      'user',
      'languages',
      'dialects',
      'regions',
      'userLanguage',
      'userDialect',
      'userRegion',
    ]),
    localname: {
      get() {
        if (this.user.profile) {
          return this.user.name
        }
        return window.localStorage.getItem('name')
      },
      set(val) {
        if (this.user.profile) {
          const user = { ...this.user }
          user.name = val
          this.updateUser(user)
        }
        window.localStorage.setItem('name', val)
      },
    },
    localUserLang: {
      get() {
        if (this.user.profile) {
          return this.user.language
        }
        return window.localStorage.getItem('language')
      },
      set(val) {
        if (this.user.profile) {
          const user = { ...this.user }
          user.language = val
          this.updateUser(user)
        }
        this.setCurrentLanguage(val)
      },
    },
    localUserDialect: {
      get() {
        if (this.user.dialect) {
          return this.user.dialect
        }
        return window.localStorage.getItem('dialect')
      },
      set(val) {
        if (this.user.profile) {
          const user = { ...this.user }
          user.dialect = val
          this.updateUser(user)
        }
        this.setCurrentDialect(val)
      },
    },
    localUserRegion: {
      get() {
        if (this.user.profile) {
          return this.user.region
        }
        return window.localStorage.getItem('region')
      },
      set(val) {
        if (this.user.profile) {
          const user = { ...this.user }
          user.region = val
          this.updateUser(user)
        }
        this.setCurrentRegion(val)
      },
    },
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'updateAttribute',
      'updateUser',
      'createUser',
      'setCurrentDialect',
      'setCurrentRegion',
      'setCurrentLanguage',
    ]),
    saveUser() {
      const localUser = { ...this.user }
      localUser.language = window.localStorage.getItem('language')
      localUser.dialect = window.localStorage.getItem('dialect')
      localUser.region = window.localStorage.getItem('region')
      localUser.name = window.localStorage.getItem('name')
      delete localUser.profile
      this.createUser(localUser)
    },
  },
}
</script>

<style>

</style>
