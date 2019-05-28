<template>
  <v-container class="text-xs-center">
    <v-layout row align-center justify-center>
      <v-flex xs12>
        <v-dialog v-model="dialog" persistent>
          <v-btn
            slot="activator"
            class="cambio"
            large
            ripple
            color="primary"
            round
          >
            <v-icon left>calendar_today</v-icon>Pide una Cita!
          </v-btn>
          <v-card>
            <v-card-title>
              <h1 class="text-xs-center">Pide una Cita!</h1>
            </v-card-title>
            <v-card-text>
              <v-container fluid>
                <v-form
                  ref="form"
                  v-model="valid"
                  @submit.prevent="createAppointment"
                >
                  <v-layout column justify-center>
                    <v-flex xs12>
                      <v-date-picker
                        v-model="desiredDate"
                        :rules="desiredDateRules"
                        class="text-xs-center"
                        locale="es-ve"
                        reactive
                      ></v-date-picker>
                    </v-flex>
                    <v-flex xs12>
                      <v-textarea
                        v-model="comments"
                        :rules="commentsRules"
                        label="Motivo de la cita"
                        hint="Motivo de la cita"
                      />
                    </v-flex>
                    <v-layout row>
                      <v-flex xs6>
                        <v-btn color="red" flat @click.native="dialog = false">
                          <v-icon left>highlight_off</v-icon>Cancelar
                        </v-btn>
                      </v-flex>
                      <v-spacer></v-spacer>
                      <v-flex xs6>
                        <v-btn
                          :disabled="!valid"
                          color="primary"
                          @click.exact="createAppointment"
                          @click.native="dialog = false"
                        >
                          <v-icon left>perm_contact_calendar</v-icon>Pedir Cita!
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: false,
    comments: '',
    commentsRules: [v => !!v || 'Indique el motivo de la cita'],
    desiredDate: '',
    desiredDateRules: [
      v => !!v || 'Indique la fecha deseada para hacer la cita'
    ]
  }),
  methods: {
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    createAppointment: function() {
      const payload = {
        comments: this.comments,
        requestedDate: new Date(),
        desiredDate: this.desiredDate
      }
      this.$store.dispatch('appointments/createAppointment', payload)
    }
  }
}
</script>

<style scoped>
.headline {
  text-align: center;
}
.cambio {
  color: black;
}
.cambio:hover {
  color: #aeea00;
}
</style>
