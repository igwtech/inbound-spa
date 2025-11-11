<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
    authStore.logout()
    router.push('/login')
}
</script>

<template>
    <div class="flex h-screen bg-gray-900 text-white">
        <aside class="w-64 flex-shrink-0 bg-gray-800 p-6">
            <div class="mb-8 text-center">
                <img alt="Wdlnds logo" class="inline-block" src="@/assets/logo.svg" width="150" />
            </div>
            <nav class="flex flex-col space-y-2">
                <RouterLink to="/" class="px-4 py-2 rounded-lg hover:bg-gray-700">Dashboard</RouterLink>
                <RouterLink to="/api-tokens" class="px-4 py-2 rounded-lg hover:bg-gray-700">API Tokens</RouterLink>
                <RouterLink to="/posts" class="px-4 py-2 rounded-lg hover:bg-gray-700">Posts</RouterLink>
                <RouterLink to="/clients-hubs" class="px-4 py-2 rounded-lg hover:bg-gray-700">Clients & Hubs
                </RouterLink>
                <RouterLink to="/webhooks" class="px-4 py-2 rounded-lg hover:bg-gray-700">Webhooks</RouterLink>
                <RouterLink to="/about" class="px-4 py-2 rounded-lg hover:bg-gray-700">About</RouterLink>
            </nav>
            <div class="mt-auto">
                <a @click="logout" href="#"
                    class="block w-full px-4 py-2 text-center bg-red-600 rounded-lg hover:bg-red-700">Logout</a>
            </div>
        </aside>
        <main class="flex-1 p-10 overflow-y-auto">
            <slot></slot>
        </main>
    </div>
</template>
