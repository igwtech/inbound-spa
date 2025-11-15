<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Client } from '@/domain/client/Client'
import { useClientStore } from '@/stores/client'
import { ClientService } from '@/application/client/ClientService'

const clients = ref<Client[]>([])
const clientStore = useClientStore()
const clientError = ref();
onMounted(async () => {
    const clientService = new ClientService(clientStore.repository)
    clients.value = await clientService.findAll()
})
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
            <h1 class="text-3xl font-semibold text-white">Clients</h1>
            <p class="text-gray-400 mt-1">Manage your connected clients</p>
        </div>

        <div v-if="clients.length > 0"
            class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden mb-12">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-700/50">
                    <thead>
                        <tr class="bg-gray-800/80">
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                ID</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Client ID</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Name</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Status</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/30">
                        <tr v-for="client in clients" :key="client.id"
                            class="hover:bg-gray-800/30 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">{{ client.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-300 font-mono text-sm">{{ client.clientId
                                }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div
                                        class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-200 font-medium">{{ client.name }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="client.active ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'">
                                    {{ client.active ? 'Active' : 'Inactive' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">{{ client.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-else class="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center mb-12">
            <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p class="text-gray-400 text-lg">No clients found</p>
        </div>
    </div>
</template>
