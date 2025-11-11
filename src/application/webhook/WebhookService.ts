import type { Webhook } from '@/domain/webhook/Webhook'
import type { WebhookRepository } from '@/domain/webhook/WebhookRepository'

export class WebhookService {
  constructor(private webhookRepository: WebhookRepository) {}

  async findAll(): Promise<Webhook[]> {
    return this.webhookRepository.findAll()
  }

  async findById(id: number): Promise<Webhook | null> {
    return this.webhookRepository.findById(id)
  }

  async create(webhook: Webhook): Promise<Webhook> {
    return this.webhookRepository.create(webhook)
  }

  async update(webhook: Webhook): Promise<Webhook> {
    return this.webhookRepository.update(webhook)
  }

  async delete(id: number): Promise<void> {
    return this.webhookRepository.delete(id)
  }
}
