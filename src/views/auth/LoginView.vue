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
  <!--  Body Wrapper -->
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
       data-sidebar-position="fixed" data-header-position="fixed">
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-6 col-xxl-3">
            <div class="card mb-0">
              <div class="card-body">
                <router-link :to="{name:'dashboard'}" class="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="@/assets/modernize/images/logos/dark-logo.svg" width="180" alt="">
                </router-link>
                <p class="text-center">Seu controle de livros</p>
                <form>
                  <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="password">
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="form-check">
<!--                      <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked>-->
<!--                      <label class="form-check-label text-dark" for="flexCheckChecked">-->
<!--                        Remeber this Device-->
<!--                      </label>-->
                    </div>
                    <a class="text-primary fw-bold" href="#">Esqueceu sua senha ?</a>
                  </div>
                  <a href="#" class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Entrar</a>
                  <div class="d-flex align-items-center justify-content-center">
                    <p class="fs-4 mb-0 fw-bold">Novo por aqui?</p>
                    <a class="text-primary fw-bold ms-2" href="#">Crie uma conta</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
