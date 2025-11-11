import type { Client } from '@/domain/client/Client'
import type { ClientRepository } from '@/domain/client/ClientRepository'

export class InMemoryClientRepository implements ClientRepository {
  private clients: Client[] = [
    {
      id: 1,
      clientId: 1,
      name: 'Client 1',
      active: true,
      createdAt: new Date().toISOString()
    }
  ]

  async findAll(): Promise<Client[]> {
    return this.clients
  }

  async findById(id: number): Promise<Client | null> {
    const client = this.clients.find((client) => client.id === id)
    return client || null
  }

  clear(): void {
    this.clients = []
  }
}
