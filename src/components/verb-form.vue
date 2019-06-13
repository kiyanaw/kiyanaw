<template>
  <f7-block>
    <div class="verb-form">
      <strong>{{ start }}</strong>{{ middle }}<strong>{{ end }} - {{ wordOneSyllabics}}</strong>
    </div>
    <div v-if="twoForms" class="verb-form">
      or <strong>{{ start2 }}</strong>{{ middle2 }}<strong>{{ end2 }} - {{ wordTwoSyllabics}}</strong>
    </div>
    <!-- <p>{{ form }}</p> -->
  </f7-block>
</template>

<script>
import cree from 'cree-sro-syllabics'

export default {
  props: [
    'parts',
    'form'
  ],
  data() {
    const twoForms = this.parts ? this.parts.length > 3 : false
    let start = ''
    let middle = ''
    let end = ''
    let start2 = ''
    let middle2 = ''
    let end2 = ''
    let wordOneSyllabics = ''
    let wordTwoSyllabics = ''
    if (this.parts) {
      [start, middle, end, start2, middle2, end2] = this.parts
      wordOneSyllabics = cree.sro2syllabics(`${start}${middle}${end}`)
      wordTwoSyllabics = cree.sro2syllabics(`${start2}${middle2}${end2}`)
    }
    return {
      twoForms: twoForms,
      start: start,
      middle: middle,
      end: end,
      start2: start2,
      middle2: middle2,
      end2: end2,
      wordOneSyllabics: wordOneSyllabics,
      wordTwoSyllabics: wordTwoSyllabics
    }
  },

  // computed: {
  //   wordOneSyllabics: function () {
  //     return cree.sro2syllabics(this.wordOne)
  //   }
  // }
}
</script>
