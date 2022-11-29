<template>
  <div>
    <v-btn color="error" @click="submit">Test API</v-btn>
  </div>
</template>
<script setup>
import axios from 'axios'

definePageMeta({
  layout: 'default',
})

const data = ref({
  phone: '6282208427599',
  password: 'password',
  latlong: '',
  device_token: '',
  device_type: 2,
})

const submit = async () => {
  const res = await axios.post(`/api-web/oauth/sign_in`, data.value)
  console.log('INI', res)
}
</script>
