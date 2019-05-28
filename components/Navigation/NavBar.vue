<template>
  <div>
    <!-- BARRA DE NAVEGACION DESKTOP-->
    <v-toolbar fixed app>
      <v-img
        class="logo"
        src="https://firebasestorage.googleapis.com/v0/b/consultorios-2c946.appspot.com/o/doctor.png?alt=media&token=5178cf6c-c691-4aeb-a699-a37fc7c35cc9"
      ></v-img>
      <v-toolbar-title>
        Consultorios
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="(item, i) in items" :key="i" :to="item.to" router flat
          ><v-icon color="primary">{{ item.icon }}</v-icon
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'home',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'local_hospital',
          title: 'Plaza Medica',
          to: '/plazamedica'
        },
        {
          icon: 'favorite',
          title: 'Perfil Medico',
          to: '/panel'
        },
        {
          icon: 'face',
          title: 'Registrarse',
          to: '/auth/signup'
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  max-width: 64px;
  max-height: 64px;
}
</style>
