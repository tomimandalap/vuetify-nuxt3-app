<template>
  <!-- <div>
    <v-btn color="error" @click="submit">Test API</v-btn>
  </div> -->

  <div class="d-flex justify-space-between align-center">
    <v-btn color="error" prepend-icon="mdi-minus" @click="onClickDecrement">
      Kurang
    </v-btn>
    <h3>{{ count }}</h3>
    <v-btn color="success" append-icon="mdi-plus" @click="onClickIncrement">
      Tambah
    </v-btn>
  </div>
</template>

<script setup>
// import axios from 'axios'
import { computed } from 'vue'
import { useCountStore } from '~/store/count'

definePageMeta({
  layout: 'default',
})

// data
const countStore = useCountStore()

// computed
const count = computed(() => countStore.count)

// methods
const onClickDecrement = () => {
  countStore.decrement()
}
const onClickIncrement = () => {
  countStore.increment()
}

// const data = ref({
//   phone: '6282208427599',
//   password: 'password',
//   latlong: '',
//   device_token: '',
//   device_type: 2,
// })

// const submit = async () => {
//   const res = await axios.post(`/api-web/oauth/sign_in`, data.value)
//   console.log('INI', res)
// }
</script>
