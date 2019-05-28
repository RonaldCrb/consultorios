<template>
  <div>
    <!-- BARRA PARA MOVIL -->
    <v-card height="64px" flat>
      <v-bottom-nav :value="true" fixed>
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          color="primary"
          :to="item.to"
          router
          flat
        >
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'recent',
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
