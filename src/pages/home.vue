<template>
  <f7-page>

    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>kiyânaw</f7-nav-title>
    </f7-navbar>

    <f7-block>
      <!-- <p class="hint">
        Ask for help with a word or phrase you would like to know how to say
        in the language, and optionally submit your own attempt.
      </p> -->
      <f7-row>
        <f7-col>
          <f7-input id="question"
            type="textarea"
            placeholder="How do I say..."
            resizable="true"></f7-input>
          </f7-col>
      </f7-row>
      <!-- <f7-row>
        <f7-col>
          <f7-button fill>Submit</f7-button>
        </f7-col>
      </f7-row> -->
    </f7-block>
    <f7-toolbar :position="bottom">
      <!-- <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link> -->
      <f7-button fill>Submit</f7-button>
    </f7-toolbar>
  </f7-page>
</template>

<script>

export default {
  data() {
    return {
      verbs: []
    }
  }
}
</script>
