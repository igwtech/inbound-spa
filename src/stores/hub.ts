import { defineStore } from 'pinia'
import { config } from '@/config'
import { InMemoryHubRepository } from '@/infrastructure/hub/InMemoryHubRepository'
import { ApiHubRepository } from '@/infrastructure/hub/ApiHubRepository'
import type { HubRepository } from '@/domain/hub/HubRepository'
import type { Hub } from '@/domain/hub/Hub'

export const useHubStore = defineStore('hub', {
  state: () => ({
    repository: config.useApi ? new ApiHubRepository() : new InMemoryHubRepository(),
    hubs: [] as Hub[],
    current: null as Hub | null,
    loading: false
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        this.hubs = await this.repository.findAll()
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
