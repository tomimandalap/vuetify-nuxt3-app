<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Landing</v-app-bar-title>

      <template v-slot:append>
        <v-btn @click="$router.push('/admin')">Dashboard</v-btn>
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
useHead({
  titleTemplate: 'Landing | %s',
})
</script>
