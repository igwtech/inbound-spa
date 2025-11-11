import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'))
  const isAuthenticated = computed(() => !!token.value)

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  function clearToken() {
    token.value = null
    localStorage.removeItem('token')
  }

  async function login(email: string, password: string): Promise<void> {
    const newToken = await authService.login(email, password)
    setToken(newToken)
  }

  function logout() {
    clearToken()
  }

  return {
    token,
    isAuthenticated,
    login,
    logout,
  }
})
