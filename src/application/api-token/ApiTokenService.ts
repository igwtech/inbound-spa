import type { ApiToken } from '@/domain/api-token/ApiToken';
import type { ApiTokenRepository } from '@/domain/api-token/ApiTokenRepository';

export class ApiTokenService {
  constructor(private apiTokenRepository: ApiTokenRepository) {}

  async findAll(): Promise<ApiToken[]> {
    return this.apiTokenRepository.findAll();
  }

  async create(name: string): Promise<ApiToken> {
    return this.apiTokenRepository.create(name);
  }

  async delete(id: number): Promise<void> {
    return this.apiTokenRepository.delete(id)
  }
}
