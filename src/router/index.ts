import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ApiTokenView from '../views/ApiTokenView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/api-tokens',
      name: 'api-tokens',
      component: ApiTokenView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/clients-hubs',
      name: 'clients-hubs',
      component: () => import('../views/ClientHubView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/webhooks',
      name: 'webhooks',
      component: () => import('../views/WebhookView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !authStore.isAuthenticated) {
    return next('/login')
  }

  next()
})

export default router
