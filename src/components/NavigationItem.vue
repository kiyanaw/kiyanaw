<template>
  <v-list-item link :to="to">
    <v-list-item-icon>
      <v-icon>mdi-{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ title }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  props: ['title', 'icon', 'to'],
}
</script>
