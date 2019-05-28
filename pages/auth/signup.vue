<template>
  <v-container class="negapad">
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 sm8 md4>
        <v-card flat>
          <v-card-title>
            <v-flex xs10 offset-xs1>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/consultorios-2c946.appspot.com/o/doctor.png?alt=media&token=5178cf6c-c691-4aeb-a699-a37fc7c35cc9"
                class="centroimg"
              />
            </v-flex>
            <v-flex xs12>
              <h2 class="centro">Registro de usuario</h2>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="register"
              >
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="name"
                      label="Nombre"
                      type="text"
                      hint="Nombre y Apellido"
                      color="red"
                      box
                      prepend-inner-icon="face"
                      clearable
                      required
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
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
                      :rules="passwordRules"
                      label="Clave"
                      type="password"
                      box
                      prepend-inner-icon="fingerprint"
                      color="red"
                      hint="Tu clave"
                      required
                      clearable
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="passwordConfirm"
                      :rules="[comparePasswords]"
                      label="Confirme su clave"
                      type="password"
                      prepend-inner-icon="fingerprint"
                      hint="Confirma tu clave"
                      required
                      color="red"
                      clearable
                      box
                      @keyup.enter="signUp"
                    />
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
            <small
              >Todos los campos son requeridos para registrar un usuario</small
            >
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-btn color="red" flat ripple to="/"
              ><v-icon left>arrow_back</v-icon>
              Regresar
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn type="submit" color="red" flat ripple @click.exact="signUp"
              ><v-icon left>restaurant_menu</v-icon>
              Registrar
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
    name: '',
    password: '',
    passwordConfirm: '',
    email: '',
    emailRules: [
      v => !!v || 'El e-mail es requerido',
      v => /.+@.+/.test(v) || 'El e-mail debe ser valido'
    ],
    passwordRules: [
      v => !!v || 'El Password es requerido',
      v =>
        v.length >= 6 ||
        'El password debe contener minimo 6 caracteres cualesquiera'
    ]
  }),
  computed: {
    comparePasswords() {
      return this.password === this.passwordConfirm
        ? true
        : 'la Clave no coincide'
    }
  },
  methods: {
    signUp: function() {
      const payload = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      this.$store.dispatch('auth/signUp', payload)
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: white;
  height: 900px;
}
.centro {
  text-align: center;
}
.centroimg {
  height: 100%;
  width: 100%;
}
.negapad {
  margin-top: -64px;
}
</style>
