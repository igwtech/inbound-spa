import { AuthService } from './application/auth/AuthService'
import { ApiTokenService } from './application/api-token/ApiTokenService'
import { ChartService } from './application/chart/ChartService'
import { config } from './config'
import { InMemoryAuthRepository } from './infrastructure/auth/InMemoryAuthRepository'
import { ApiAuthRepository } from './infrastructure/auth/ApiAuthRepository'
import { InMemoryApiTokenRepository } from './infrastructure/api-token/InMemoryApiTokenRepository'
import { ApiApiTokenRepository } from './infrastructure/api-token/ApiApiTokenRepository'
import { InMemoryChartRepository } from './infrastructure/chart/InMemoryChartRepository'

const authRepository = config.useApi ? new ApiAuthRepository() : new InMemoryAuthRepository()
export const authService = new AuthService(authRepository)

const apiTokenRepository = config.useApi
  ? new ApiApiTokenRepository()
  : new InMemoryApiTokenRepository()
export const apiTokenService = new ApiTokenService(apiTokenRepository)

const chartRepository = new InMemoryChartRepository()
export const chartService = new ChartService(chartRepository)
