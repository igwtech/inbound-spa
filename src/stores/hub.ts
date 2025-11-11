import { defineStore } from 'pinia'
import { InMemoryHubRepository } from '@/infrastructure/hub/InMemoryHubRepository'
import type { HubRepository } from '@/domain/hub/HubRepository'

export const useHubStore = defineStore('hub', {
  state: () => ({
    repository: new InMemoryHubRepository() as HubRepository
  })
})
