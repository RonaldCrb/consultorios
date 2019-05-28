<template>
  <v-app>
    <NavBar class="hidden-xs-only" />
    <v-content>
      <nuxt />
    </v-content>
    <BottomBar class="hidden-sm-and-up" />
  </v-app>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar'
import BottomBar from '@/components/Navigation/BottomBar'
export default {
  components: {
    BottomBar,
    NavBar
  }
}
</script>
