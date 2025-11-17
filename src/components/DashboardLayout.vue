<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
    authStore.logout()
    router.push('/login')
}

const hasRole = (r: string) => authStore.roles?.includes(r)

const canViewPosts = computed(() => hasRole('ROLE_USER') || hasRole('ROLE_CLIENT') || hasRole('ROLE_HUB') || hasRole('ROLE_ADMIN'))
const canViewTokens = computed(() => hasRole('ROLE_USER') || hasRole('ROLE_CLIENT') || hasRole('ROLE_HUB') || hasRole('ROLE_ADMIN'))
const canViewWebhooks = computed(() => hasRole('ROLE_USER') || hasRole('ROLE_CLIENT') || hasRole('ROLE_HUB') || hasRole('ROLE_ADMIN'))
const canViewHubs = computed(() => hasRole('ROLE_CLIENT') || hasRole('ROLE_HUB') || hasRole('ROLE_ADMIN'))
const canViewClients = computed(() => hasRole('ROLE_HUB') || hasRole('ROLE_ADMIN'))

</script>

<template>
    <div class="flex h-screen bg-gray-900 text-white">
        <aside class="w-64 flex-shrink-0 bg-gray-800 p-6">
            <div class="mb-8 text-center">
                <img alt="Wdlnds logo" class="inline-block wdlnds-logo" src="@/assets/logo.svg" width="150" />
            </div>
            <nav class="flex flex-col space-y-8 text-center ">
                <RouterLink to="/" class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">Dashboard</RouterLink>
                <RouterLink v-if="canViewTokens" to="/api-tokens"
                    class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">API Tokens
                </RouterLink>
                <RouterLink v-if="canViewPosts" to="/posts" class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">
                    Posts</RouterLink>
                <RouterLink v-if="canViewHubs" to="/hubs" class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">Hubs
                </RouterLink>
                <RouterLink v-if="canViewClients" to="/clients"
                    class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">Clients
                </RouterLink>
                <RouterLink v-if="canViewWebhooks" to="/webhooks"
                    class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">Webhooks
                </RouterLink>
                <RouterLink to="/about" class="menu_item px-4 py-4 rounded-lg hover:bg-gray-700">About</RouterLink>
            </nav>
            <div class="mt-auto " style="bottom: calc(var(--spacing) * 6);position: fixed;width: 205px;">
                <a @click="logout" href="#"
                    class="menu_item logout block w-full px-4 py-2 text-center bg-gray-600 rounded-lg hover:bg-orange-700">Logout</a>
            </div>
        </aside>
        <main class="flex-1 p-10 overflow-y-auto">
            <RouterView />
        </main>
    </div>
</template>
<style lang="css">
.menu_item {
    margin-top: 2em;
    padding-top: .5em;
    padding-bottom: .5em;
}

.logout {
    vertical-align: bottom;
}
</style>
