import type { PostRepository } from '@/domain/post/PostRepository'
import type { Post } from '@/domain/post/Post'
import { PostService } from '@/infrastructure/api/services/PostService'
import type { User } from '@/domain/auth/User'

export class ApiPostRepository implements PostRepository {
  async findAll(): Promise<Post[]> {
    const items = await PostService.apiPostsGetCollection()
    return items.map((item: any) => {
      if (!item.owner || typeof item.owner.id === 'undefined') {
        throw new Error('Invalid post data: owner or owner.id is missing')
      }
      return {
        id: item.id!,
        postId: item.postId!,
        hub: item.hub!,
        client: item.client!,
        postType: item.postType!,
        status: item.status!,
        data: item.data || [],
        metadata: item.metadata || [],
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        owner: {
          ...item.owner,
          id: item.owner.id
        } as User,
        type: item.type!
      }
    })
  }

  async findById(id: number): Promise<Post | null> {
    try {
      const item = await PostService.apiPostsIdGet(id.toString())
      if (!item.owner || typeof item.owner.id === 'undefined') {
        throw new Error('Invalid post data: owner or owner.id is missing')
      }
      return {
        id: item.id!,
        postId: item.postId!,
        hub: item.hub!,
        client: item.client!,
        postType: item.postType!,
        status: item.status!,
        data: item.data || [],
        metadata: item.metadata || [],
        createdAt: item.createdAt!,
        updatedAt: item.updatedAt!,
        owner: {
          ...item.owner,
          id: item.owner.id
        } as User,
        type: item.type!
      }
    } catch {
      return null
    }
  }

  async create(post: Post): Promise<Post> {
    const result = await PostService.apiPostsPost(post)
    if (!result.owner || typeof result.owner.id === 'undefined') {
      throw new Error('Invalid post data: owner or owner.id is missing')
    }
    return {
      id: result.id!,
      postId: result.postId!,
      hub: result.hub!,
      client: result.client!,
      postType: result.postType!,
      status: result.status!,
      data: result.data || [],
      metadata: result.metadata || [],
      createdAt: result.createdAt!,
      updatedAt: result.updatedAt!,
      owner: {
        ...result.owner,
        id: result.owner.id
      } as User,
      type: result.type!
    }
  }

  async update(post: Post): Promise<Post> {
    // API does not support update endpoint; fallback to create
    return this.create(post)
  }

  async delete(id: number): Promise<void> {
    // API does not support delete endpoint; no-op
  }

  clear(): void {
    // no-op for API repository
  }
}
