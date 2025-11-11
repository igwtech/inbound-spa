import { defineStore } from 'pinia'
import { InMemoryPostRepository } from '@/infrastructure/post/InMemoryPostRepository'
import type { PostRepository } from '@/domain/post/PostRepository'

export const usePostStore = defineStore('post', {
  state: () => ({
    repository: new InMemoryPostRepository() as PostRepository
  })
})
