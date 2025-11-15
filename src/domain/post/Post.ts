import type { User } from '@/domain/auth/User'

export interface Post {
  postId: string
  hub: string
  client: string
  status: string
  createdAt: string
  updatedAt: string
  postType: number
}

export interface CreatePost {
  hub: string
  client: string
  postType: number
  data: string[]
}
