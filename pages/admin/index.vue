<template>
  <div>
    <h1>Admin</h1>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth-admin',
})
</script>
