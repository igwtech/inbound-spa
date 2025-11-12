import type { HubRepository } from '@/domain/hub/HubRepository'
import type { Hub } from '@/domain/hub/Hub'
import { HubService } from '@/infrastructure/api/services/HubService'

export class ApiHubRepository implements HubRepository {
  async findAll(): Promise<Hub[]> {
    const items = await HubService.apiHubsGetCollection()
    return items.map(item => ({
      id: item.id!,
      hubId: item.hubId!,
      name: item.name!,
      active: item.active!,
      createdAt: item.createdAt!
    }))
  }

  async findById(id: number): Promise<Hub | null> {
    try {
      const item = await HubService.apiHubsIdGet(id.toString())
      return {
        id: item.id!,
        hubId: item.hubId!,
        name: item.name!,
        active: item.active!,
        createdAt: item.createdAt!
      }
    } catch {
      return null
    }
  }

  clear(): void {
    // no-op for API repository
  }
}
