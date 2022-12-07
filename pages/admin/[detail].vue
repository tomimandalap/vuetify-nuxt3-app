<template>
  <div>
    <h1>Detail {{ name }}</h1>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
definePageMeta({
  layout: 'dashboard',
})

const route = useRoute()
const name = ref('')

onMounted(() => {
  name.value = route.params.detail
})
</script>
