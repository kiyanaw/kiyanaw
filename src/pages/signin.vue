<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>

      <f7-nav-title sliding>kiyânaw</f7-nav-title>
      <f7-nav-right>
        <f7-link ref="searchLink" class="searchbar-enable" icon-md="material:search"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <amplify-authenticator/>
    <amplify-sign-out />
    <!-- <form class="list" id="login">
      <ul>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">E-mail</div>
              <div class="item-input-wrap">
                <input type="email" name="email" placeholder="E-mail">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label"> Password </div>
              <div class="item-input-wrap">
                <input type="password" name="password" placeholder="Password">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </form> -->
    <!-- <f7-button
      @click="authUser"
      raised 
      fill color="orange"
      icon-md="material:https" 
      icon-size="15" 
      class="padd">
      Sign in
    </f7-button> -->
  </f7-page>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from 'aws-amplify';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Signin',
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
    ...mapActions([
      'setUser',
    ])
    // authUser() {
    //   let formData
    //   console.log(formData);
    // },
  },
  mounted() {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        console.log('WOOT');
        this.signedIn = true
        Auth.currentAuthenticatedUser().then((user) => {
          Auth.userAttributes(user).then((data) => {
            console.log(data);
          });
        });
      } else {
        console.log('BOOO');
        this.signedIn = false
      }
    });
  },
}
</script>

<style>

</style>