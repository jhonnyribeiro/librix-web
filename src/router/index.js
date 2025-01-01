import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/entrar',
      name: 'auth.login',
      component: import('../views/auth/LoginView.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      component: import('../views/DashboardView.vue'),
    },
  ],
})

export default router
