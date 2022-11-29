<template>
  <v-app>
    <v-btn color="primary" @click="submit">Test API</v-btn>
  </v-app>
</template>
<script setup>
import axios from 'axios'

const data = ref({
  phone: '6282208427570',
  password: 'juventus84',
  latlong: '',
  device_token: '',
  device_type: 2,
})

const submit = async () => {
  const res = await axios.post(`/api-web/oauth/sign_in`, data.value)
  // console.log("INI", config.public.baseAPI);
}
</script>
