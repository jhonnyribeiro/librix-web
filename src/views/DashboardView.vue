<script setup>
// import '@/assets/modernize/libs/apexcharts/dist/apexcharts.min.js'
// import '@/assets/modernize/js/dashboard.js'

import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore();
</script>
<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-semibold mb-4">Dashboard</h5>
        <p class="mb-0">
          Tá logado jovem? {{authStore.isLoggedIn}}
        </p>
      </div>
    </div>
  </div>

  {{authStore}}
</template>
