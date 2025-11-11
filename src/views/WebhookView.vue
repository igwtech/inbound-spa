<template>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Webhook } from '@/domain/webhook/Webhook'
import { WebhookService } from '@/application/webhook/WebhookService'
import { InMemoryWebhookRepository } from '@/infrastructure/webhook/InMemoryWebhookRepository'

const webhooks = ref<Webhook[]>([])

onMounted(async () => {
    const webhookRepository = new InMemoryWebhookRepository()
    const webhookService = new WebhookService(webhookRepository)
    webhooks.value = await webhookService.findAll()
})
</script>
