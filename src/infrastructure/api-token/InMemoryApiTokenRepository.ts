import type { ApiToken } from '@/domain/api-token/ApiToken'
import type { ApiTokenRepository } from '@/domain/api-token/ApiTokenRepository'

let tokens: ApiToken[] = [
  { id: 1, name: 'Token 1', token: 'token-1' },
  { id: 2, name: 'Token 2', token: 'token-2' }
]

export class InMemoryApiTokenRepository implements ApiTokenRepository {
  async findAll(): Promise<ApiToken[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tokens)
      }, 500)
    })
  }

  async create(name: string): Promise<ApiToken> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newToken: ApiToken = {
          id: 3,
          name: 'Token 3',
          token: 'token-3'
        }
        tokens.push(newToken)
        resolve(newToken)
      }, 500)
    })
  }

  async delete(id: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        tokens = tokens.filter((token) => token.id !== id)
        resolve()
      }, 500)
    })
  }
}
