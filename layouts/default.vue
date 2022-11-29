<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="2">
      <v-app-bar-title>Dashboard</v-app-bar-title>

      <template v-slot:append>
        <v-btn @click="$router.push('/admin')">Dashboard</v-btn>

        <v-btn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          @click="onClick"
        >
          Theme
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from 'vue'

useHead({
  titleTemplate: 'Landing | %s',
})

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
