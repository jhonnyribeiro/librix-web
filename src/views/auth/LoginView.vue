<script setup>

import axios from 'axios'

axios.defaults.withCredentials=true;
axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')

</script>

<template>
  <h1>Login</h1>
</template>

<style scoped>

</style>
