import type { CreatePost, Post } from '@/domain/post/Post'
import type { PostRepository } from '@/domain/post/PostRepository'

export class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [
    {
      id: 1,
      postId: 'post-1',
      hub: 'hub-1',
      client: 'client-1',
      postType: 1,
      status: 'published',
      data: [],
      metadata: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      owner: {
        id: 1,
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'admin',
        createdAt: new Date().toISOString(),
        active: true
      },
      type: 1
    }
  ]

  async findAll(): Promise<Post[]> {
    return this.posts
  }

  async findById(id: number): Promise<Post | null> {
    const post = this.posts.find((post) => post.id === id)
    return post || null
  }

  async create(post: CreatePost): Promise<Post> {
    const newPost: Post = {
      id: this.posts.length + 1,
      postId: `post-${this.posts.length + 1}`,
      status: 'published',
      metadata: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      owner: {
        id: 1,
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        role: 'admin',
        createdAt: new Date().toISOString(),
        active: true
      },
      type: 1,
      ...post
    }
    this.posts.push(newPost)
    return newPost
  }

  async update(post: Post): Promise<Post> {
    const index = this.posts.findIndex((p) => p.id === post.id)
    if (index !== -1) {
      this.posts[index] = post
    }
    return post
  }

  async delete(id: number): Promise<void> {
    this.posts = this.posts.filter((post) => post.id !== id)
  }

  clear(): void {
    this.posts = []
  }
}
