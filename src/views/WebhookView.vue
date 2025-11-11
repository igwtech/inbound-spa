<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Webhook } from '@/domain/webhook/Webhook'
import { useWebhookStore } from '@/stores/webhook'
import { WebhookService } from '@/application/webhook/WebhookService'
import DashboardLayout from '@/components/DashboardLayout.vue'

const webhooks = ref<Webhook[]>([])
const webhookStore = useWebhookStore()

onMounted(async () => {
    const webhookService = new WebhookService(webhookStore.repository)
    webhooks.value = await webhookService.findAll()
})
</script>

<template>
    <DashboardLayout>
        <div>
            <h1>Webhooks</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>URI</th>
                        <th>User</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="webhook in webhooks" :key="webhook.id">
                        <td>{{ webhook.id }}</td>
                        <td>{{ webhook.uri }}</td>
                        <td>{{ webhook.user.email }}</td>
                        <td>{{ webhook.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-if="webhooks.length === 0">No webhooks found</p>
        </div>
    </DashboardLayout>
</template>
