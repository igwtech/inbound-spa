<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref<string | null>(null)

async function handleLogin() {
    try {
        await authStore.login(email.value, password.value)
        router.push('/')
    } catch (error) {
        errorMessage.value = 'Failed to login. Please check your credentials.'
        console.error(error)
    }
}
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div class="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
            <img alt="Wdlnds logo" class="w-48 mx-auto mb-6" src="@/assets/logo.svg" />
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email" v-model="email" required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                    <input type="password" id="password" v-model="password" required
                        class="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-green-500 focus:border-green-500" />
                </div>
                <button type="submit"
                    class="w-full px-4 py-2 font-bold text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Login
                </button>
                <p v-if="errorMessage" class="text-sm text-center text-red-500">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>
