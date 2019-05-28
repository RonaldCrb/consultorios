<template>
  <div>
    <div class="hidden-xs-only elevation-5">
      <v-parallax
        src="https://www.downloadwallpapers.info/dl/2048x1152//2015/12/02/828533_cameron-chase-doctor-house-gregory-house-house-md-kutner-lisa-cuddy-thirteenth-wilson_3900x2250_h.jpg"
      >
        <v-layout column align-center justify-center>
          <v-card class="pa-5 tarjeta">
            <v-flex xs12 justify-center>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/consultorios-2c946.appspot.com/o/doctor.png?alt=media&token=5178cf6c-c691-4aeb-a699-a37fc7c35cc9"
                width="250"
              />
              <!-- <OrderForm /> -->
            </v-flex>

            <v-flex xs12>
              <h1 class="titulo">Cuidamos Tu Salud</h1>
            </v-flex>
          </v-card>
        </v-layout>
      </v-parallax>
    </div>

    <div class="hidden-sm-and-up movil">
      <v-layout column align-center justify-center>
        <v-flex xs12 justify-center>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/consultorios-2c946.appspot.com/o/doctor.png?alt=media&token=5178cf6c-c691-4aeb-a699-a37fc7c35cc9"
            width="250"
          />
          <!-- <OrderForm /> -->
        </v-flex>

        <v-flex xs12>
          <h1 class="titulo">Cuidamos Tu Salud</h1>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  color: black;
}
.tarjeta {
  border-radius: 25px;
}
.movil {
  margin-top: -30px;
}
</style>
