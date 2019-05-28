<template>
  <div class="minipad">
    <v-layout row wrap>
      <v-flex v-for="(doctor, i) in doctors" :key="i" xs12 md4>
        <v-card color="primary" class="ma-2 pa-2">
          <v-layout row>
            <v-flex xs4>
              <img :src="doctor.img" class="imagen" alt="avatar" />
            </v-flex>
            <v-flex xs8 pa-1>
              <h4 class="white--text">{{ doctor.name }}</h4>
              <h4 class="white--text">{{ doctor.phone }}</h4>
              <h4 class="white--text">{{ doctor.city }}</h4>
              <h4 class="white--text">{{ doctor.specialty }}</h4>
            </v-flex>
          </v-layout>
          <v-spacer></v-spacer>
          <v-flex xs3>
            <v-btn
              color="white"
              class="text-xs-center"
              :to="`/plazamedica/${doctor.id}`"
              >Ver</v-btn
            >
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  computed: {
    doctors() {
      return this.$store.state.plazamedica.doctors
    }
  }
}
</script>
<style scoped>
.minipad {
  margin-top: -50px;
}
.imagen {
  max-width: 100%;
}
</style>
