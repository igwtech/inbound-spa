import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'
import type { Webhook } from '@/domain/webhook/Webhook'
import { WebhookService } from '@/infrastructure/api/services/WebhookService'

export class ApiWebhookRepository implements WebhookRepository {
  async findAll(): Promise<Webhook[]> {
    const response = await WebhookService.getWebhookCollection()
    return response['hydra:member']!.map((item: any) => item as Webhook)
  }

  async findById(id: number): Promise<Webhook | null> {
    const response = await WebhookService.getWebhookItem(id.toString())
    return response as Webhook
  }

  async create(webhook: Webhook): Promise<Webhook> {
    const response = await WebhookService.postWebhookCollection({
      requestBody: webhook as any
    })
    return response as Webhook
  }

  async update(webhook: Webhook): Promise<Webhook> {
    const response = await WebhookService.putWebhookItem({
      id: webhook.id!.toString(),
      requestBody: webhook as any
    })
    return response as Webhook
  }

  async delete(id: number): Promise<void> {
    await WebhookService.deleteWebhookItem(id.toString())
  }

  clear(): void {
    // Not applicable for API
  }
}
