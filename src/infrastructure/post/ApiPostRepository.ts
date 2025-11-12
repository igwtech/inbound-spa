import type { PostRepository } from '@/domain/post/PostRepository'
import type { CreatePost, Post } from '@/domain/post/Post'
import { PostService } from '@/infrastructure/api/services/PostService'
import type { User } from '@/domain/auth/User'
import { pid } from 'process'

export class ApiPostRepository implements PostRepository {
  async findAll(): Promise<Post[]> {
    const items = await PostService.apiPostsGetCollection()
    let itemId = 1;
    return items.map((item: any) => {
      if (!item.postId || typeof item.postId === 'undefined') {
        throw new Error('Invalid post data: postId is missing')
      }
      return {
        postId: item.postId!,
        hubId: item.hubId!,
        clientId: item.clientId!,
        status: item.status!,
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        type: item.type!
      }
    })
  }

  async findById(id: number): Promise<Post | null> {
    try {
      const item = await PostService.apiPostsIdGet(id.toString())
      if (!item.postId || typeof item.postId === 'undefined') {
        throw new Error('Invalid post data: owner or owner.id is missing')
      }
      let itemId = 1;
      return {
        postId: item.postId!,
        hubId: item.hubId!,
        clientId: item.clientId!,
        status: item.status!,
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        type: item.type!
      }
    } catch {
      return null
    }
  }

  async create(post: CreatePost): Promise<Post> {
    const result = await PostService.apiPostsCreate(post)
    if (!result.postId || typeof result.postId === 'undefined') {
      throw new Error('Invalid post data: postId is missing')
    }
    return result
  }

  async update(post: Post): Promise<Post> {
    // API does not support update endpoint; fallback to create
    return this.create({
      client: post.clientId,
      hub: post.hubId,
      postType: post.type,
      data: []
    })
  }

  async delete(id: number): Promise<void> {
    // API does not support delete endpoint; no-op
  }

  clear(): void {
    // no-op for API repository
  }
}
