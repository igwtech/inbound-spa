import type { Webhook } from '@/domain/webhook/Webhook'

export interface WebhookRepository {
  findAll(): Promise<Webhook[]>
  findById(id: number): Promise<Webhook | null>
  create(webhook: Webhook): Promise<Webhook>
  update(webhook: Webhook): Promise<Webhook>
  delete(id: number): Promise<void>
  clear(): void
}
