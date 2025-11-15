import type { LoginResponse } from './LoginResponse'

export interface AuthRepository {
  login(email: string, password: string): Promise<LoginResponse>
}
