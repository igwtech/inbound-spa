import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'
import type { Webhook } from '@/domain/webhook/Webhook'
import { WebhookService } from '@/infrastructure/api/services/WebhookService'

export class ApiWebhookRepository implements WebhookRepository {
  update(webhook: Webhook): Promise<Webhook> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<Webhook[]> {
    const response = await WebhookService.apiV1WebhooksGetCollection()
    return response.map((item: any) => item as Webhook)
  }

  async findById(id: number): Promise<Webhook | null> {
    const response = await WebhookService.apiV1WebhooksIdGet(id.toString())
    return response as Webhook
  }

  async create(webhook: Webhook): Promise<Webhook> {
    const response = await WebhookService.apiV1WebhooksPost(webhook)
    return response as Webhook
  }


  async delete(id: number): Promise<void> {
    await WebhookService.apiV1WebhooksIdDelete(id.toString())
  }

  clear(): void {
    // Not applicable for API
  }
}
