import type { Hub } from '@/domain/hub/Hub'
import type { HubRepository } from '@/domain/hub/HubRepository'

export class HubService {
  constructor(private hubRepository: HubRepository) {}

  async findAll(): Promise<Hub[]> {
    return this.hubRepository.findAll()
  }

  async findById(id: number): Promise<Hub | null> {
    return this.hubRepository.findById(id)
  }
}
