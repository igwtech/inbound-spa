import type { User } from '@/domain/auth/User'

export interface Post {
  postId: string
  hubId: string
  clientId: string
  status: string
  createdAt: string
  updatedAt: string
  type: number
}

export interface CreatePost {
  hub: string
  client: string
  postType: number
  data: string[]
}
