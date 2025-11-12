import { AuthService } from './application/auth/AuthService'
import { ApiTokenService } from './application/api-token/ApiTokenService'
import { config } from './config'
import { InMemoryAuthRepository } from './infrastructure/auth/InMemoryAuthRepository'
import { ApiAuthRepository } from './infrastructure/auth/ApiAuthRepository'
import { InMemoryApiTokenRepository } from './infrastructure/api-token/InMemoryApiTokenRepository'
import { ApiApiTokenRepository } from './infrastructure/api-token/ApiApiTokenRepository'

const authRepository = config.useApi ? new ApiAuthRepository() : new InMemoryAuthRepository()
export const authService = new AuthService(authRepository)

const apiTokenRepository = config.useApi
  ? new ApiApiTokenRepository()
  : new InMemoryApiTokenRepository()
export const apiTokenService = new ApiTokenService(apiTokenRepository)
