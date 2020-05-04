<template>

  <f7-page>
    
    <f7-navbar title="Detail" back-link="Back" style="text-transform: none"></f7-navbar>

    <f7-block style="margin:20px 0 ">
      <p class="title">How do I say:</p>
      <h2 class="question" style="margin-top: 5px; font-weight: normal">"My name is Drake"</h2>
    </f7-block>

    <f7-block style="margin:10px 0">
      <p class="title">Answers</p>
    </f7-block>
   

    <f7-card>
      <f7-card-content>
        <h3 class="answer">Drake <span class="blue">nitisiyihkâson</span></h3>
        <p style="margin:0 !important; color:#999;">Submitted Nov 8th by bgodden</p>
      </f7-card-content>

      <f7-card-footer>
        <f7-link><f7-chip text="Plains Cree Y"></f7-chip></f7-link>
        <f7-link>Add to playlist</f7-link>
        <f7-link><f7-icon material="play_circle_fill"></f7-icon></f7-link>
      </f7-card-footer>
    </f7-card>

    <f7-card>
      <f7-card-content>
        <h3 class="answer">Drake <span class="blue">nitisithihkâson</span></h3>
        <f7-link>Add to playlist</f7-link>
        <p style="margin:0 !important; color:#999;">Submitted Nov 8th by bgodden</p>
      </f7-card-content>
      
      <f7-card-footer>
        <f7-link><f7-chip text="Woods Cree TH"></f7-chip></f7-link>
        <f7-link>Add to playlist</f7-link>
        <f7-link><f7-icon material="play_circle_fill"></f7-icon></f7-link>
      </f7-card-footer>
    </f7-card>

    <f7-card>
      <f7-card-content>
        <h3 class="answer">Drake <span class="blue">nitisinihkâson</span></h3>
        <p style="margin:0 !important; color:#999;">Submitted Nov 8th by bgodden</p>
      </f7-card-content>
      
      <f7-card-footer>
        <f7-link><f7-chip text="Swampy Cree N"></f7-chip></f7-link>
      </f7-card-footer>
    </f7-card>

    <f7-card>
      <f7-card-content>
        <h3 class="answer">Drake <span class="blue">nitikawin</span></h3>
        <p style="margin:0 !important; color:#777; font-style: italic">"I am known as Drake"</p>
        <p style="margin:0 !important; color:#999;">Submitted Nov 9th by wjackson</p>
      </f7-card-content>
      
      <f7-card-footer>
        <f7-link><f7-chip text="Plains Cree Y"></f7-chip></f7-link>
        <f7-link>Add to playlist</f7-link>
        <f7-link><f7-icon material="play_circle_fill"></f7-icon></f7-link>
      </f7-card-footer>
    </f7-card>


    <!-- <f7-block-title>Answers</f7-block-title>
    <f7-list simple-list>
      <f7-list-item title="Item 1"><f7-chip text="Last One"></f7-chip></f7-list-item>
      <f7-list-item title="Item 2"></f7-list-item>
      <f7-list-item title="Item 3"></f7-list-item>
    </f7-list> -->


  </f7-page>
</template>
<style>
.answer {
  margin: 0;
}
.blue {
  color: blue!important;
}
.title {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  color:#999;
}
.chip {
  height: 20px!important;
}
.chip-label {
  font-size: 0.8em;
  height: 20px!important;
  line-height: 20px!important;
}
.card-footer {
  min-height: 20px !important;
  padding: 3px 7px !important;
}
.card-content-padding {
  padding:10px 10px 0 10px;
}
h3 {
  font-weight: normal;
  font-size: 1.2em;
}
</style>