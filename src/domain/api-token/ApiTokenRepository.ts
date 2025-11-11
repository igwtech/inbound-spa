import type { ApiToken } from './ApiToken';

export interface ApiTokenRepository {
  findAll(): Promise<ApiToken[]>;
  create(name: string): Promise<ApiToken>;
  delete(id: number): Promise<void>;
}
