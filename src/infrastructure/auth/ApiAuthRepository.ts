import type { AuthRepository } from '@/domain/auth/AuthRepository'
import { LoginCheckService } from '@/infrastructure/api/services/LoginCheckService'

export class ApiAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<string> {
    const response = await LoginCheckService.loginCheckPost({
      email,
      password
    })

    if (response.token) {
      return response.token
    }

    throw new Error('Login failed')
  }
}
