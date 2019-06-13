<template>
  <f7-page>
    <f7-navbar>
      <f7-navbar :title="$f7route.params.lemma" back-link="Back"></f7-navbar>
    </f7-navbar>
    <f7-list>
      <f7-list-group v-for="(item, index) in Object.keys(paradigms)" :key="index">
        <f7-list-item :title="item" group-title></f7-list-item>
          <verb-form v-for="(form, fIndex) in paradigms[item]"
            :key="fIndex" :parts="split(forms[form])" :form="form">
          </verb-form>
        </f7-list-group>
    </f7-list>
  </f7-page>
</template>

<script>
// TODO: fix this hard reference
import * as Conjugator from '../../../tanisi-backend/dist/gater/conjugators'
import * as paradigmList from '../../../tanisi-backend/dist/gater/paradigms'
import * as FORMS from '../../../tanisi-backend/dist/gater/forms'
import VerbForm from '../components/verb-form.vue'

export default {

  data() {
    const type = this.$f7route.params.type
    const lemma = this.$f7route.params.lemma
    const forms = Conjugator.Conjugator.build(type, lemma)
    const imperative = forms[FORMS[type].Imp2Sg]
    return {
      paradigms: paradigmList.paradigmList[type],
      lemma: lemma,
      type: type,
      forms: forms,
      imperative: imperative
    }
  },

  components: {
    'verb-form': VerbForm
  },

  methods: {

    split: function (word) {
      if (word) {
        if (typeof word === 'object') {
          const [front, back] = word[0].split(this.imperative)
          const [front2, back2] = word[1].split(this.imperative)
          return [front, this.imperative, back, front2, this.imperative, back2]
        } else {
          const [front, back] = word.split(this.imperative)
          return [front, this.imperative, back]
        }
      }
    }
  }
}
</script>
