import type { AuthRepository } from '@/domain/auth/AuthRepository'
import type { LoginResponse } from '@/domain/auth/LoginResponse'
import type { User } from '@/domain/auth/User'

export class InMemoryAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<LoginResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: 1,
          email: email,
          firstName: 'John',
          lastName: 'Doe',
          role: ['ROLE_ADMIN'],
          createdAt: new Date().toISOString(),
          active: true
        }
        const response: LoginResponse = {
          token: 'mock-token',
          user: user
        }
        resolve(response)
      }, 500)
    })
  }
}
