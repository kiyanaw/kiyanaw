<template>
  <f7-page>
    <f7-navbar title="Transcribe" back-link="Back"></f7-navbar>
    <f7-block-title>Transcribe</f7-block-title>
    <f7-block strong>
      <div id="waveform"></div>
    </f7-block>
  </f7-page>
</template>

<script>

import WaveSurfer from 'wavesurfer';

// var wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     waveColor: 'violet',
//     progressColor: 'purple'
// });

export default {

  // load peaks file: http://wavesurfer-js.org/faq/
  mounted () {
    // console.log('hello world')
    this.surfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    this.surfer.load('https://cree-audio-bucket.s3-us-west-2.amazonaws.com/doreen.mp3');
  }
}
</script>