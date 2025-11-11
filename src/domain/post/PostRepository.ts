import type { Post } from '@/domain/post/Post'

export interface PostRepository {
  findAll(): Promise<Post[]>
  findById(id: number): Promise<Post | null>
  create(post: Post): Promise<Post>
  update(post: Post): Promise<Post>
  delete(id: number): Promise<void>
}
