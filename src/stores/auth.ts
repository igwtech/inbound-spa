import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services'
import type { User } from '@/domain/auth/User'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'))
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))
  const isAuthenticated = computed(() => !!token.value)
  const roles = computed(() => [user.value?.role])

  function setAuthData(newToken: string, newUser: User) {
    token.value = newToken
    user.value = newUser
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  function clearAuthData() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  async function login(email: string, password: string): Promise<void> {
    const response = await authService.login(email, password)
    setAuthData(response.token, response.user)
  }

  function logout() {
    clearAuthData()
  }

  return {
    token,
    user,
    isAuthenticated,
    roles,
    login,
    logout,
  }
})
