import type { AuthRepository } from '@/domain/auth/AuthRepository'
import type { LoginResponse } from '@/domain/auth/LoginResponse'

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async login(email: string, password: string): Promise<LoginResponse> {
    return this.authRepository.login(email, password)
  }
}
