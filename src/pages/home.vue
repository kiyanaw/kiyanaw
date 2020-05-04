<template>
  <f7-page>
    <f7-navbar>

      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>kiyânaw</f7-nav-title>
    </f7-navbar>

    <f7-block>
      <f7-row>
        <h1>How do I say:</h1>
        <f7-col>

        <div class="item-content item-input inline-label">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input type="text" placeholder="Question or phrase here..." id="question"/>
            </div>
          </div>
        </div>

        </f7-col>
      </f7-row>
    </f7-block>

    <f7-toolbar position="bottom">
      <f7-link fill></f7-link>
      <f7-link fill>Submit</f7-link>
    </f7-toolbar>



  </f7-page>
</template>

<script>
export default {
  // methods: {
  //   onPageInit() {
  mounted() {
      console.log('hello')
      const self = this;
      const app = self.$f7;
      // const fruits = self.fruits;
      // const $ = self.$$;
      window.app = app

      self.autocomplete = app.autocomplete.create({
        inputEl: '#question',
        openIn: 'dropdown',
        source(query, render) {
          console.log(query)
          const results = [
            'I want to tell you a story',
            'my story',
            'sacred stories',
            'tell me a story'
          ]
          render(results);
        },
      });
    }
  }
// }
</script>

<style>
#question {
  font-size: 1.4em;
  width: 100%;
}
.question-suggestions {
  color: #999;
}
.item-input-wrap {
  width: 100%;
}
</style>
