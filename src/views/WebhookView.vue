<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Webhook } from '@/domain/webhook/Webhook'
import { useWebhookStore } from '@/stores/webhook'
import { WebhookService } from '@/application/webhook/WebhookService'

const webhooks = ref<Webhook[]>([])
const webhookStore = useWebhookStore()

onMounted(async () => {
    const webhookService = new WebhookService(webhookStore.repository)
    webhooks.value = await webhookService.findAll()
})
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
            <h1 class="text-3xl font-semibold text-white">Webhooks</h1>
            <p class="text-gray-400 mt-1">Configure webhooks for real-time integration updates</p>
        </div>

        <div v-if="webhooks.length > 0" class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-700/50">
                    <thead>
                        <tr class="bg-gray-800/80">
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">ID</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Endpoint URL</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">User</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700/30">
                        <tr v-for="webhook in webhooks" :key="webhook.id" class="hover:bg-gray-800/30 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-gray-300 font-medium">{{ webhook.id }}</span>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-300 font-mono text-sm truncate">{{ webhook.uri }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-300">{{ webhook.user }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">{{ webhook.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-else class="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <p class="text-gray-400 text-lg">No webhooks found</p>
            <p class="text-gray-500 text-sm mt-2">Configure your first webhook to receive real-time updates</p>
        </div>
    </div>
</template>
