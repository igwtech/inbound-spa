import { defineStore } from 'pinia'
import { config } from '@/config'
import { InMemoryWebhookRepository } from '@/infrastructure/webhook/InMemoryWebhookRepository'
import { ApiWebhookRepository } from '@/infrastructure/webhook/ApiWebhookRepository'
import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'
import type { Webhook } from '@/domain/webhook/Webhook'

export const useWebhookStore = defineStore('webhook', {
  state: () => ({
    repository: config.useApi ? new ApiWebhookRepository() : new InMemoryWebhookRepository(),
    webhooks: [] as Webhook[],
    current: null as Webhook | null,
    loading: false
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        this.webhooks = await this.repository.findAll()
      } finally {
        this.loading = false
      }
    },
    async fetchById(id: number) {
      this.loading = true
      try {
        this.current = await this.repository.findById(id)
      } finally {
        this.loading = false
      }
    },
    async create(webhook: Webhook) {
      this.loading = true
      try {
        const created = await this.repository.create(webhook)
        this.webhooks.push(created)
        return created
      } finally {
        this.loading = false
      }
    },
    async update(webhook: Webhook) {
      this.loading = true
      try {
        const updated = await this.repository.update(webhook)
        const index = this.webhooks.findIndex((w) => w.id === updated.id)
        if (index !== -1) {
          this.webhooks.splice(index, 1, updated)
        }
        return updated
      } finally {
        this.loading = false
      }
    },
    async delete(id: number) {
      this.loading = true
      try {
        await this.repository.delete(id)
        this.webhooks = this.webhooks.filter((w) => w.id !== id)
      } finally {
        this.loading = false
      }
    }
  }
})
