<script setup>
import '@/assets/modernize/libs/jquery/dist/jquery.min.js'
import '@/assets/modernize/libs/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/modernize/js/sidebarmenu.js'
import '@/assets/modernize/js/app.min.js'
import '@/assets/modernize/libs/simplebar/dist/simplebar.js'

import Footer from '@/components/FooterTemplate.vue'
import Header from '@/components/HeaderTemplate.vue'
import Sidebar from '@/components/SidebarTemplate.vue'
</script>

<template>
  <div
    class="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
    <!-- Sidebar Start -->
    <Sidebar />
    <!--  Sidebar End -->
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <!--  Header Start -->
      <Header />
      <!--  Header End -->
      <div class="container-fluid">
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
@import '@/assets/modernize/css/styles.min.css';
</style>
