<template>
  <v-container class="pad">
    <v-layout flex align-center justify-center row wrap>
      <v-flex xs12 sm8 md4>
        <v-card color="black" flat>
          <v-card-title>
            <v-flex xs10 offset-xs3>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/consultorios-2c946.appspot.com/o/doctor.png?alt=media&token=5178cf6c-c691-4aeb-a699-a37fc7c35cc9"
                class="centroimg"
              />
            </v-flex>
            <v-flex xs12>
              <h2 class="centro">Ingresar Usuario</h2>
            </v-flex>
          </v-card-title>
          <v-card-text class="bg">
            <v-container class="pad2" grid-list-md>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="signIn"
              >
                <v-layout class="" wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
                      box
                      prepend-inner-icon="local_post_office"
                      color="red"
                      clearable
                      hint="Tu correo electronico"
                      required
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="password"
                      label="Clave"
                      type="password"
                      box
                      prepend-inner-icon="fingerprint"
                      color="red"
                      hint="Tu clave"
                      required
                      clearable
                      @keydown.enter="signIn"
                    />
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
            <small>Todos los campos son requeridos para ingresar</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="red" flat ripple to="/"
              ><v-icon left>arrow_back</v-icon>
              Regresar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="red"
              flat
              ripple
              @click.exact="signIn"
              @click.native="dialog = false"
              ><v-icon left>restaurant_menu</v-icon>
              Ingresar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: false,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'El email es necesario para enviar una remesa',
      v => /.+@.+/.test(v) || 'El email debe ser valido'
    ]
  }),
  methods: {
    signIn: function() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }
      this.$store.dispatch('auth/signIn', payload)
    }
  }
}
</script>

<style scoped>
.bg1 {
  background-color: red;
}
.centro {
  text-align: center;
}
.centroimg {
  height: 100%;
  width: 60%;
}
.pad2 {
  margin-top: -10%;
}
</style>
