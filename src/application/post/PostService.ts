import type { CreatePost, Post } from '@/domain/post/Post'
import type { PostRepository } from '@/domain/post/PostRepository'

export class PostService {
  constructor(private postRepository: PostRepository) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAll()
  }

  async findById(id: string): Promise<Post | null> {
    return this.postRepository.findById(id)
  }

  async create(post: CreatePost): Promise<Post> {
    return this.postRepository.create(post)
  }

  async update(post: Post): Promise<Post> {
    return this.postRepository.update(post)
  }

  async delete(id: string): Promise<void> {
    return this.postRepository.delete(id)
  }
}
