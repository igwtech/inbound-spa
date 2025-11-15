import type { User } from '@/domain/auth/User'

export interface Webhook {
  id: number
  user: string
  uri: string
  authentication: string[]
  postTypes: string[]
  createdAt: string
}
