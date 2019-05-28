<template>
  <v-container mt-5>
    <v-layout row wrap>
      <v-flex xs12 />
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState(['orders', 'rates'])
}
</script>

<style scoped></style>
