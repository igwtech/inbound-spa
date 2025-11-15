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
    <div class="p-8">
        <h1 class="text-3xl font-bold mb-6">Webhooks</h1>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-gray-800 rounded-lg">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">URI</th>
                        <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
                        <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Created At</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    <tr v-for="webhook in webhooks" :key="webhook.id">
                        <td class="px-6 py-4 whitespace-nowrap">{{ webhook.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ webhook.uri }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ webhook.user }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ webhook.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p v-if="webhooks.length === 0" class="mt-6 text-center">No webhooks found</p>
    </div>
</template>
