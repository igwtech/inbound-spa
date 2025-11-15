import type { ClientRepository } from '@/domain/client/ClientRepository'
import type { Client } from '@/domain/client/Client'
import { ClientService } from '@/infrastructure/api/services/ClientService'

export class ApiClientRepository implements ClientRepository {
  async findAll(): Promise<Client[]> {
    const items = await ClientService.apiV1ClientsGetCollection()
    return items.map(item => ({
      id: item.id!,
      clientId: item.clientId!,
      name: item.name!,
      active: item.active!,
      createdAt: item.createdAt!
    }))
  }

  async findById(id: number): Promise<Client | null> {
    try {
      const item = await ClientService.apiV1ClientsIdGet(id.toString())
      return {
        id: item.id!,
        clientId: item.clientId!,
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
