<template>
  <f7-page>
    <f7-block-title>
      Navigation
    </f7-block-title>
    <f7-list>
      <f7-list-item
        link="/"
        title="Search"
        panel-close>
        <f7-icon
          slot="media"
          material="search" />
      </f7-list-item>
      <f7-list-item
        link="/my-questions/"
        title="My Questions"
        panel-close>
        <f7-icon
          slot="media"
          material="question_answer" />
      </f7-list-item>
      <f7-list-item
        link="/"
        title="Unanswered"
        panel-close>
        <f7-icon
          slot="media"
          material="feedback" />
      </f7-list-item>
      <f7-list-item
        link="/playlist/"
        title="Playlist"
        panel-close>
        <f7-icon
          slot="media"
          material="queue_music" />
      </f7-list-item>
      <f7-list-item
        v-if="user && user.favorites"
        link="/favorites/"
        title="Favorites"
        panel-close>
        <f7-icon
          slot="media"
          material="favorite" />
      </f7-list-item>
      <f7-list-item
        v-if="user"
        link="/preferences/"
        title="Preferences"
        panel-close>
        <f7-icon
          slot="media"
          material="settings" />
      </f7-list-item>
      <f7-list-item
        link="/about/"
        title="About"
        panel-close>
        <f7-icon
          slot="media"
          material="info" />
      </f7-list-item>
    </f7-list>
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
    <f7-button
      v-else
      href="/sign-in/"
      panel-close
      outline
      color="orange"
      icon-md="material:https"
      icon-size="15"
      class="padd">
      Sign out
    </f7-button>
  </f7-page>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters([
      'user',
      'history',
      'userQuestions',
      'unansweredQuestions',
    ]),
  },
  mounted() {
    this.getUserQuestions()
    this.getUnansweredQuestions()
    // const { user } = this
    // user.isWarrior = true
    // this.updateUser(user)
  },
  methods: {
    ...mapActions([
      'getUserQuestions',
      'getUnansweredQuestions',
      'updateUser',
    ]),
  },
}
</script>

<style>
.padd {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
