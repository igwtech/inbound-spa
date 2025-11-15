import type { AuthRepository } from '@/domain/auth/AuthRepository'
import { LoginCheckService } from '@/infrastructure/api/services/LoginCheckService'
import type { User } from '@/domain/auth/User'
import { UserService } from '@/infrastructure/api/services/UserService'
import type { LoginResponse } from '@/domain/auth/LoginResponse'

export class ApiAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await LoginCheckService.loginCheckPost({
      email,
      password
    })

    if (response && response.token && response.user) {
      return {
        token: response.token,
        user: response.user as User
      }
    }

    throw new Error('Login failed')
  }

  async register(user: User): Promise<User> {
    const response = await UserService.userRegister(user)
    return response as User
  }
}
