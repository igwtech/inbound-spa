import type { Hub } from '@/domain/hub/Hub'

export interface HubRepository {
  findAll(): Promise<Hub[]>
  findById(id: number): Promise<Hub | null>
  clear(): void
}
