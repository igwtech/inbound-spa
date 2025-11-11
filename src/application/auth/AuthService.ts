import type { AuthRepository } from '@/domain/auth/AuthRepository';

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async login(email: string, password: string): Promise<string> {
    return this.authRepository.login(email, password);
  }
}
