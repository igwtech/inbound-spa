import { defineStore } from 'pinia'
import { config } from '@/config'
import { InMemoryPostRepository } from '@/infrastructure/post/InMemoryPostRepository'
import { ApiPostRepository } from '@/infrastructure/post/ApiPostRepository'
import type { PostRepository } from '@/domain/post/PostRepository'
import type { Post } from '@/domain/post/Post'

export const usePostStore = defineStore('post', {
  state: () => ({
    repository: config.useApi ? new ApiPostRepository() : new InMemoryPostRepository(),
    posts: [] as Post[],
    current: null as Post | null,
    loading: false
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      try {
        this.posts = await this.repository.findAll()
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
    },
    async create(post: Post) {
      this.loading = true
      try {
        const created = await this.repository.create(post)
        this.posts.push(created)
        return created
      } finally {
        this.loading = false
      }
    },
    async update(post: Post) {
      this.loading = true
      try {
        const updated = await this.repository.update(post)
        const index = this.posts.findIndex((p) => p.id === updated.id)
        if (index !== -1) {
          this.posts.splice(index, 1, updated)
        }
        return updated
      } finally {
        this.loading = false
      }
    },
    async delete(id: number) {
      this.loading = true
      try {
        await this.repository.delete(id)
        this.posts = this.posts.filter((p) => p.id !== id)
      } finally {
        this.loading = false
      }
    }
  }
})
