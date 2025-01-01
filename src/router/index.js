import { createRouter, createWebHistory } from 'vue-router'
import Wrapper from '@/views/Wrapper.vue'
import LoginView from '@/views/auth/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/entrar',
      name: 'auth.login',
      component: LoginView,
    },
    {
      path: '/',
      component: Wrapper,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView,
        },
      ],
    },
  ],
})

export default router
