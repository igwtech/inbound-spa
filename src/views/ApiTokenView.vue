<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiTokenService } from '@/services'
import type { ApiToken } from '@/domain/api-token/ApiToken'

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

async function deleteToken(token: ApiToken) {
    try {
        if (token.id) {
            await apiTokenService.delete(token.id)
            await fetchTokens()
        }
    } catch (error) {
        errorMessage.value = 'Failed to delete API token.'
        console.error(error)
    }
}

onMounted(fetchTokens)
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
            <h1 class="text-3xl font-semibold text-white">API Token Management</h1>
            <p class="text-gray-400 mt-1">Manage your API tokens for secure integration</p>
        </div>

        <div class="mb-6">
            <button @click="createToken"
                class="inline-flex items-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Create New Token
            </button>
        </div>

        <div v-if="isLoading" class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <span class="ml-3 text-gray-400">Loading tokens...</span>
        </div>

        <div v-if="errorMessage" class="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-400">{{ errorMessage }}</p>
            </div>
        </div>

        <div v-if="!isLoading && tokens.length" class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-700/50">
                    <thead>
                        <tr class="bg-gray-800/80">
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Token Name</th>
                            <th class="px-6 py-4 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/30">
                        <tr v-for="token in tokens" :key="token.id" class="hover:bg-gray-800/30 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-200 font-medium">{{ token.name }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right">
                                <button @click="deleteToken(token)"
                                    class="inline-flex items-center px-3 py-1.5 bg-red-600/80 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                    <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="!isLoading && !tokens.length" class="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <p class="text-gray-400 text-lg">No API tokens found</p>
            <p class="text-gray-500 text-sm mt-2">Create your first token to get started</p>
        </div>
    </div>
</template>
