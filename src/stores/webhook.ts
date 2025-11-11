import { defineStore } from 'pinia'
import { InMemoryWebhookRepository } from '@/infrastructure/webhook/InMemoryWebhookRepository'
import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'

export const useWebhookStore = defineStore('webhook', {
  state: () => ({
    repository: new InMemoryWebhookRepository() as WebhookRepository
  })
})
