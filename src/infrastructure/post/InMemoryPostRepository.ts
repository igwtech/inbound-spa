import type { CreatePost, Post } from '@/domain/post/Post'
import type { PostRepository } from '@/domain/post/PostRepository'

export class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [
    {
      postId: 'post-1',
      hub: 'hub-1',
      client: 'client-1',
      postType: 1,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ]

  async findAll(): Promise<Post[]> {
    return this.posts
  }

  async findById(id: string): Promise<Post | null> {
    const post = this.posts.find((post) => post.postId === id)
    return post || null
  }

  async create(post: CreatePost): Promise<Post> {
    const newPost: Post = {
      postId: `post-${this.posts.length + 1}`,
      status: 'published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...post
    }
    this.posts.push(newPost)
    return newPost
  }

  async update(post: Post): Promise<Post> {
    const index = this.posts.findIndex((p) => p.postId === post.postId)
    if (index !== -1) {
      this.posts[index] = post
    }
    return post
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter((post) => post.postId !== id)
  }

  clear(): void {
    this.posts = []
  }
}
