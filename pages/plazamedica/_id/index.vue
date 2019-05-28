<template>
  <div class="minipad">
    <v-card flat class="ma-4">
      <img :src="doctor.img" class="imagen" alt="avatar" />
      <v-layout row pa-1>
        <v-flex xs4>
          <p>Nombre:</p>
        </v-flex>
        <v-flex xs8>
          <h4>{{ doctor.name }}</h4>
        </v-flex>
      </v-layout>
      <v-layout row pa-1>
        <v-flex xs4>
          <p>Telefono:</p>
        </v-flex>
        <v-flex xs8>
          <h4>{{ doctor.phone }}</h4>
        </v-flex>
      </v-layout>
      <v-layout row pa-1>
        <v-flex xs4>
          <p>Ciudad:</p>
        </v-flex>
        <v-flex xs8>
          <h4>{{ doctor.city }}</h4>
        </v-flex>
      </v-layout>
      <v-layout row pa-1>
        <v-flex xs4>
          <p>Especialidad:</p>
        </v-flex>
        <v-flex xs8>
          <h4>{{ doctor.specialty }}</h4>
        </v-flex>
      </v-layout>
      <AppointmentForm />
    </v-card>
  </div>
</template>
<script>
import AppointmentForm from '@/components/PlazaMedica/AppointmentForm'
export default {
  components: {
    AppointmentForm
  },
  computed: {
    doctor() {
      return this.$store.state.plazamedica.currentDoctor
    }
  },
  fetch({ store, params }) {
    const doctorId = params.id
    store.dispatch('plazamedica/setDoctor', doctorId)
  }
}
</script>

<style scoped>
.minipad {
  margin-top: -100px;
}
.card {
  color: white;
}
.imagen {
  padding: 40px;
  max-width: 100%;
}
.bgyellow {
  background-color: yellow;
  color: black;
}
</style>
