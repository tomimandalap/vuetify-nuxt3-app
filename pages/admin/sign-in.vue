<template>
  <v-container>
    <h1 class="mb-5">Sign in</h1>

    <template v-if="error_message.length">
      <v-alert
        v-for="(message, i) in error_message"
        :key="i"
        density="comfortable"
        type="error"
        variant="tonal"
        class="mb-5"
      >
        {{ message }}
      </v-alert>
    </template>

    <v-form>
      <v-text-field
        v-model="form.phone"
        type="number"
        variant="outlined"
        label="Phone Number"
        placeholder="Ex: 628xxx"
        prepend-inner-icon="mdi-phone-classic"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :type="!show ? 'password' : 'text'"
        variant="outlined"
        label="Password"
        placeholder="Input your password"
        :append-inner-icon="!show ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="show = !show"
      ></v-text-field>

      <v-btn :loading="loading" block color="success" @click="onClickSignIn">
        Sign In
      </v-btn>
    </v-form>
  </v-container>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useOauthStore } from '~/store/oauth'
const oauthStore = useOauthStore()
const router = useRouter()

// state data
const show = ref(false)
const form = ref({
  phone: '',
  password: '',
  latlong: '',
  device_token: '',
  device_type: 2,
})

const loading = computed(() => oauthStore.loading)
const error_message = computed(() => oauthStore.error_message)

watch(error_message, (val) => {
  if (val && val.length) {
    setTimeout(() => {
      oauthStore.$reset()
    }, 3000)
  }
})

const onClickSignIn = async () => {
  oauthStore.loading = true
  const res = await oauthStore.signin(form.value)
  if (res) router.push('/admin')
}

definePageMeta({
  layout: 'auth',
})
useHead({
  titleTemplate: 'Sign In | %s',
})
</script>
