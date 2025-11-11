import type { AuthRepository } from '@/domain/auth/AuthRepository';

export class InMemoryAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('mock-token');
      }, 500);
    });
  }
}
