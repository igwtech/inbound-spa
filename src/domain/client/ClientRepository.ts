import type { Client } from '@/domain/client/Client'

export interface ClientRepository {
  findAll(): Promise<Client[]>
  findById(id: number): Promise<Client | null>
  clear(): void
}
