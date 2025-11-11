import type { Hub } from '@/domain/hub/Hub'
import type { HubRepository } from '@/domain/hub/HubRepository'

export class InMemoryHubRepository implements HubRepository {
  private hubs: Hub[] = [
    {
      id: 1,
      hubId: 1,
      name: 'Hub 1',
      active: true,
      createdAt: new Date().toISOString()
    }
  ]

  async findAll(): Promise<Hub[]> {
    return this.hubs
  }

  async findById(id: number): Promise<Hub | null> {
    const hub = this.hubs.find((hub) => hub.id === id)
    return hub || null
  }

  clear(): void {
    this.hubs = []
  }
}
