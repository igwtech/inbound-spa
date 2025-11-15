import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ApiTokenView from '../views/ApiTokenView.vue'
import { useAuthStore } from '@/stores/auth'
import DashboardLayout from '@/components/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'api-tokens',
          name: 'api-tokens',
          component: ApiTokenView,
          meta: { roles: ['ROLE_USER', 'ROLE_CLIENT', 'ROLE_HUB', 'ROLE_ADMIN'] }
        },
        {
          path: 'posts',
          name: 'posts',
          component: () => import('../views/PostView.vue'),
          meta: { roles: ['ROLE_USER', 'ROLE_CLIENT', 'ROLE_HUB', 'ROLE_ADMIN'] }
        },
        {
          path: 'posts/create',
          name: 'create-post',
          component: () => import('../views/CreatePostView.vue'),
          meta: { roles: ['ROLE_USER', 'ROLE_CLIENT', 'ROLE_HUB', 'ROLE_ADMIN'] }
        },
        {
          path: 'hubs',
          name: 'hubs',
          component: () => import('../views/ClientHubView.vue'),
          meta: { roles: ['ROLE_CLIENT', 'ROLE_HUB', 'ROLE_ADMIN'] }
        },
        {
          path: 'clients',
          name: 'clients',
          component: () => import('../views/ClientHubView.vue'),
          meta: { roles: ['ROLE_HUB', 'ROLE_ADMIN'] }
        },
        {
          path: 'webhooks',
          name: 'webhooks',
          component: () => import('../views/WebhookView.vue'),
          meta: { roles: ['ROLE_USER', 'ROLE_CLIENT', 'ROLE_HUB', 'ROLE_ADMIN'] }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !authStore.isAuthenticated) {
    return next('/login')
  }

  if (to.meta.roles) {
    const requiredRoles = to.meta.roles as string[]
    const hasRole = authStore.roles.some((role) => requiredRoles.includes(role))
    if (!hasRole) {
      return next({ name: 'home' })
    }
  }

  next()
})

export default router
