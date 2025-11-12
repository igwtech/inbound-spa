import type { ApiTokenRepository } from '@/domain/api-token/ApiTokenRepository'
import type { ApiToken } from '@/domain/api-token/ApiToken'
import { ApiTokenService } from '@/infrastructure/api/services/ApiTokenService'

export class ApiApiTokenRepository implements ApiTokenRepository {
  async findAll(): Promise<ApiToken[]> {
    const response = await ApiTokenService.getApiTokenCollection()
    return response['hydra:member']!.map((item: any) => item as ApiToken)
  }

  async create(name: string): Promise<ApiToken> {
    const response = await ApiTokenService.postApiTokenCollection({
      requestBody: { name }
    })
    return response as ApiToken
  }

  async delete(id: number): Promise<void> {
    await ApiTokenService.deleteApiTokenItem(id.toString())
  }
}
