<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiTokenService } from '@/services'
import type { ApiToken } from '@/domain/api-token/ApiToken'
import DashboardLayout from '@/components/DashboardLayout.vue'

const tokens = ref<ApiToken[]>([])
const isLoading = ref(true)
const errorMessage = ref<string | null>(null)

async function fetchTokens() {
    try {
        isLoading.value = true
        tokens.value = await apiTokenService.findAll()
    } catch (error) {
        errorMessage.value = 'Failed to fetch API tokens.'
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

async function createToken() {
    try {
        await apiTokenService.create('Token ' + (tokens.value.length + 1))
        await fetchTokens()
    } catch (error) {
        errorMessage.value = 'Failed to create API token.'
        console.error(error)
    }
}

async function deleteToken(id: number) {
    try {
        await apiTokenService.delete(id)
        await fetchTokens()
    } catch (error) {
        errorMessage.value = 'Failed to delete API token.'
        console.error(error)
    }
}

onMounted(fetchTokens)
</script>

<template>
    <DashboardLayout>
        <div class="p-8">
            <h1 class="text-3xl font-bold mb-6">API Token Management</h1>
            <button @click="createToken"
                class="mb-6 px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600">
                Create New Token
            </button>
            <div v-if="isLoading" class="text-center">Loading...</div>
            <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
            <div v-if="!isLoading && tokens.length" class="overflow-x-auto">
                <table class="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700">
                        <tr v-for="token in tokens" :key="token.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ token.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right">
                                <button @click="deleteToken(token.id)"
                                    class="px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p v-if="!isLoading && !tokens.length" class="text-center">No API tokens found.</p>
        </div>
    </DashboardLayout>
</template>
