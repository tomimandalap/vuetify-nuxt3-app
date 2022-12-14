<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click="handleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Dashboard</v-app-bar-title>

      <template v-slot:append>
        <v-btn @click="handleLogout">Logout</v-btn>

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

    <v-navigation-drawer
      v-model="drawer"
      color="grey-darken-2"
    ></v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from 'vue'
import { useOauthStore } from '~/store/oauth'
useHead({
  titleTemplate: 'Admin | %s',
})

const router = useRouter()
const oauthStore = useOauthStore()
const theme = ref('dark')
const drawer = ref(null)

const handleDrawer = () => {
  drawer.value = !drawer.value
}

const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const handleLogout = () => {
  const res = oauthStore.signout()
  if (res) router.push('/')
}
</script>
