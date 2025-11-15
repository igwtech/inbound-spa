import type { PostRepository } from '@/domain/post/PostRepository'
import type { CreatePost, Post } from '@/domain/post/Post'
import { PostService } from '@/infrastructure/api/services/PostService'
import type { User } from '@/domain/auth/User'
import { pid } from 'process'

export class ApiPostRepository implements PostRepository {
  async findAll(): Promise<Post[]> {
    const items = await PostService.apiPostsGet()
    let itemId = 1
    return items.map((item: any) => {
      if (!item.postId || typeof item.postId === 'undefined') {
        throw new Error('Invalid post data: postId is missing')
      }
      return {
        postId: item.postId!,
        hub: item.hub!,
        client: item.client!,
        status: item.status!,
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        postType: item.postType!
      }
    })
  }

  async findById(id: string): Promise<Post | null> {
    try {
      const item = await PostService.apiPostGet(id.toString())
      if (!item.postId || typeof item.postId === 'undefined') {
        throw new Error('Invalid post data: owner or owner.id is missing')
      }
      let itemId = 1
      return {
        postId: item.postId!,
        hub: item.hub!,
        client: item.client!,
        status: item.status!,
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        postType: item.postType!
      }
    } catch {
      return null
    }
  }

  async create(post: CreatePost): Promise<Post> {
    const result = await PostService.postCreation(post)
    if (!result.postId || typeof result.postId === 'undefined') {
      throw new Error('Invalid post data: postId is missing')
    }
    return {
      postId: result.postId!,
      hub: result.hub!,
      client: result.client!,
      status: result.status!,
      createdAt: result.createdAt!,
      updatedAt: result.updatedAt!,
      postType: result.postType!
    }
  }

  async update(post: Post): Promise<Post> {
    // API does not support update endpoint; fallback to create
    return this.create({
      client: post.client,
      hub: post.hub,
      postType: post.postType,
      data: []
    })
  }

  async delete(id: string): Promise<void> {
    // API does not support delete endpoint; no-op
  }

  clear(): void {
    // no-op for API repository
  }
}
