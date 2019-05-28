<template>
  <div class="minipad">
    <h1>panel de usuario con historial medico</h1>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  computed: {
    appointments() {
      return this.$store.state.profile.appointments
    },
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  async fetch({ store }) {
    await store.dispatch('profile/setUserAppointments')
  }
}
</script>

<style scoped>
.minipad {
  margin-top: -50px;
}
</style>
