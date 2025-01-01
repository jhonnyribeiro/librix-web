<script setup>
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(() => {
  axios.post('http://127.0.0.1:8000/api/login',{
    email: 'test@example.com',
    password: 'password'
  })
})
</script>

<template>
  <h1>Login</h1>
</template>

<style scoped></style>
