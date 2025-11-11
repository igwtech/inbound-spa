import type { Client } from '@/domain/client/Client'
import type { ClientRepository } from '@/domain/client/ClientRepository'

export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepository.findAll()
  }

  async findById(id: number): Promise<Client | null> {
    return this.clientRepository.findById(id)
  }
}
