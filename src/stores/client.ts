import { defineStore } from 'pinia'
import { InMemoryClientRepository } from '@/infrastructure/client/InMemoryClientRepository'
import type { ClientRepository } from '@/domain/client/ClientRepository'

export const useClientStore = defineStore('client', {
  state: () => ({
    repository: new InMemoryClientRepository() as ClientRepository
  })
})
