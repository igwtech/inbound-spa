import type { ApiTokenRepository } from '@/domain/api-token/ApiTokenRepository'
import type { ApiToken } from '@/domain/api-token/ApiToken'
import { ApiTokenService } from '@/infrastructure/api/services/ApiTokenService'

export class ApiApiTokenRepository implements ApiTokenRepository {
  async findAll(): Promise<ApiToken[]> {
    const response = await ApiTokenService.tokensList()
    if (response && Array.isArray(response.tokens)) {
      return response.tokens.map((item: any) => item as ApiToken)
    }
    return []
  }

  async create(name: string): Promise<ApiToken> {
    const response = await ApiTokenService.tokensCreate({
      name
    })
    return response as ApiToken
  }

  async delete(id: number): Promise<void> {
    await ApiTokenService.tokensRevoke(id.toString())
  }
}
