import { defineStore } from 'pinia'
import { config } from '@/config'
import { InMemoryClientRepository } from '@/infrastructure/client/InMemoryClientRepository'
import { ApiClientRepository } from '@/infrastructure/client/ApiClientRepository'
import type { ClientRepository } from '@/domain/client/ClientRepository'
import type { Client } from '@/domain/client/Client'

export const useClientStore = defineStore('client', {
  state: () => ({
    repository: config.useApi ? new ApiClientRepository() : new InMemoryClientRepository(),
    clients: [] as Client[],
    current: null as Client | null,
    loading: false
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        this.clients = await this.repository.findAll()
      } finally {
        this.loading = false
      }
    },
    async fetchById(id: number) {
      this.loading = true
      try {
        this.current = await this.repository.findById(id)
      } finally {
        this.loading = false
      }
    }
  }
})
