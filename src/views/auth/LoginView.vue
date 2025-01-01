<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import {useRouter} from 'vue-router'
import router from '@/router/index.js'

const email = ref('test@example.com')
const password = ref('password')
const feedbackMessage = ref('')
const loading = ref(false)
const authStore = useAuthStore()

function login() {
  feedbackMessage.value = ''
  loading.value = true

  authStore.sanctum().then(() => {
    authStore
      .login(email.value, password.value)
      .then(() => {

        router.push({ name: 'dashboard' })
      })
      .catch((e) => {
        console.log(e)
        feedbackMessage.value = 'E-mail ou senha inválidos!'
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<template>
  <!--  Body Wrapper -->
  <div
    class="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center"
    >
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-6 col-xxl-3">
            <div class="card mb-0">
              <div class="card-body">
                <router-link
                  :to="{ name: 'dashboard' }"
                  class="text-nowrap logo-img text-center d-block py-3 w-100"
                >
                  <img src="@/assets/modernize/images/logos/dark-logo.svg" width="180" alt="" />
                </router-link>
                <p class="text-center">Seu controle de livros</p>
                <form @submit.prevent="login()">
                  <div v-if="feedbackMessage" class="alert alert-danger" role="alert">
                    {{ feedbackMessage }}
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="email"
                      name="email"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-label">Senha</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="form-check"></div>
                    <a class="text-primary fw-bold" href="#">Esqueceu sua senha ?</a>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                    :disabled="loading"
                  >
                    <span
                      v-if="loading"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span v-if="!loading">Entrar</span>
                    <span v-if="loading"> Carregando...</span>
                  </button>
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
