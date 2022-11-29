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

definePageMeta({
  layout: 'default',
})
</script>
