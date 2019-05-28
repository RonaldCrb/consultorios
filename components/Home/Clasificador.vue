<template>
  <v-container fluid class="bg">
    <v-form ref="form" @submit.prevent="setPlaza">
      <v-layout column align-center justify-center>
        <v-flex xs12 justify-center>
          <v-select
            v-model="city"
            prepend-inner-icon="room"
            class="selects"
            :items="cities"
            label="Ciudad"
            color="primary"
            solo
            clearable
            required
            background-color="white"
          ></v-select>
          <v-select
            v-model="specialty"
            prepend-inner-icon="room"
            class="selects"
            :items="specialties"
            label="Especialidad"
            color="primary"
            solo
            clearable
            required
            background-color="white"
          ></v-select>
        </v-flex>
        <v-btn
          :disabled="!city && !specialty"
          class="boton"
          type="submit"
          ripple
          x-large
          to="/plazamedica"
          @click.once="setPlaza"
          ><v-icon color="primary" size="60px" left>local_hospital</v-icon>
          <h1>IR A Plaza Medica</h1>
        </v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
export default {
  data: () => ({
    city: null,
    specialty: null,
    cities: ['Anaco', 'Lecheria'],
    specialties: ['Cardiologia', 'Ortodoncia']
  }),
  methods: {
    setPlaza() {
      const payload = {
        city: this.city,
        specialty: this.specialty
      }
      if (!this.city) {
        this.$store.dispatch('plazamedica/setPlazaSpecialty', this.specialty)
      } else if (!this.specialty) {
        this.$store.dispatch('plazamedica/setPlazaCity', this.city)
      } else {
        this.$store.dispatch('plazamedica/setPlazaFull', payload)
      }
    }
  }
}
</script>
<style scoped>
.boton {
  height: 80px;
  width: 100%;
}
.bg {
  background-color: #2196f3;
}
.selects {
  max-width: 550px;
  justify-content: center;
}
</style>
