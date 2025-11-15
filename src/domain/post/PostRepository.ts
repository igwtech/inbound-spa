import type { CreatePost, Post } from '@/domain/post/Post'

export interface PostRepository {
  findAll(): Promise<Post[]>
  findById(id: string): Promise<Post | null>
  create(post: CreatePost): Promise<Post>
  update(post: Post): Promise<Post>
  delete(id: string): Promise<void>
  clear(): void
}
