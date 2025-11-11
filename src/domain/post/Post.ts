import type { User } from '@/domain/auth/User'

export interface Post {
  id: number
  postId: string
  hub: string
  client: string
  postType: number
  status: string
  data: string[] | null
  metadata: string[] | null
  createdAt: string
  updatedAt: string
  owner: User
  type: number
}
