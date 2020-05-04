<template>
  <f7-page :page-content="false">

  <f7-fab position="right-bottom" slot="fixed" color="blue">
    <f7-icon ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
  </f7-fab>

    <f7-navbar title="Browse" back-link="Back"></f7-navbar>
    <f7-toolbar tabbar top>
      <f7-link tab-link="#tab-1" tab-link-active>Recent</f7-link>
      <f7-link tab-link="#tab-2">Unanswered</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="tab-1" class="page-content" tab-active>

          <f7-list>
            <f7-list-item link="#"
              title="tânispî ohci ê-nôhtê-kiyokêyan"
              header="How long do you want to visit?"
              footer="updated 3 minutes ago by bengodden"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="ahâw mâka"
              header="Okay then..."
              footer="updated 4 minutes ago by aaronfay"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="nitawi-wîcê-mêtawêmik kîtisânak"
              header="Go and play with your siblings"
              footer="updated 7 minutes by wjackson"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="kika-kî-nipân"
              header="You should be sleeping"
              footer="updated 15 minutes by jhill"
              after="">
            </f7-list-item>

            <f7-list-item link="#"
              title="kiwâmpamâw cî kitôtêminaw Ben?"
              header="Have you seen our friend Ben?"
              footer="updated 21 minutes by rfletcher"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="mwêstas ê-wî-pîkiskwâtikok"
              header="I will talk to you all later"
              footer="updated 27 minutes by bgodden"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="tânitê êtikwê"
              header="I wonder where..."
              footer="updated 33 minutes by aogg"
              after="🎵">
            </f7-list-item>

            <f7-list-item link="#"
              title="kitatamiskâtinâwâw kahkiyaw"
              header="I greet you all"
              footer="updated 40 minutes by tgreen"
              after="🎵">
            </f7-list-item>

          </f7-list>


      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<style>
.item-after {
  font-size: .8em !important;
  color: #aaa !important;
}
.item-header {
  color: #777 !important;
}
.list .item-inner {
  padding-right: 25px !important;
}
.item-footer {
  font-size: 0.6em !important;
}
</style>