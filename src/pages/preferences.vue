<template>
  <f7-page>
    <f7-navbar
      title="Preferences"
      back-link="Back"
    />

    <f7-block>
      <h1>User Settings</h1>

      <div class="list">
        <ul>
          <!-- Smart select item -->
          <li>
            <!-- Additional "smart-select" class -->
            <a
              href="#"
              class="item-link smart-select"
              data-close-on-select="true"
            >
              <!-- select -->
              <select name="Language">
                <!-- TODO: Wire up event to mutate user preference,
                 wire up "selected" prop to stored pref-->
                <option
                  v-for="lang in languages"
                  :key="lang"
                  :value="lang"
                > {{ lang }} </option>
              </select>
              <div class="item-content">
                <div class="item-inner">
                  <!-- Select label -->
                  <div class="item-title">Language</div>
                  <!-- Selected value, not required -->
                  <!-- <div class="item-after">Apple</div> -->
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
import { mapActions } from 'vuex';

export default {
  name: 'Preferences',
  data: () => ({
    languages: ['Cree', "Mi'kmaq"],
  }),
  methods: {
    ...mapActions([
      'setUserLanguage',
    ]),
    localSetLanguage() {
      this.setUserLanguage();
    },
  },
};
</script>

<style></style>
