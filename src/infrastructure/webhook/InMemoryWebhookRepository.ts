import type { Webhook } from '@/domain/webhook/Webhook'
import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'

export class InMemoryWebhookRepository implements WebhookRepository {
  private webhooks: Webhook[] = [
    {
      id: 1,
      user: {
        id: 1,
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'admin',
        createdAt: new Date().toISOString(),
        active: true
      },
      uri: 'https://example.com/webhook',
      authentication: [],
      postTypes: [],
      createdAt: new Date().toISOString()
    }
  ]

  async findAll(): Promise<Webhook[]> {
    return this.webhooks
  }

  async findById(id: number): Promise<Webhook | null> {
    const webhook = this.webhooks.find((webhook) => webhook.id === id)
    return webhook || null
  }

  async create(webhook: Webhook): Promise<Webhook> {
    this.webhooks.push(webhook)
    return webhook
  }

  async update(webhook: Webhook): Promise<Webhook> {
    const index = this.webhooks.findIndex((w) => w.id === webhook.id)
    if (index !== -1) {
      this.webhooks[index] = webhook
    }
    return webhook
  }

  async delete(id: number): Promise<void> {
    this.webhooks = this.webhooks.filter((webhook) => webhook.id !== id)
  }

  clear(): void {
    this.webhooks = []
  }
}
