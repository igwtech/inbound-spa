import { AuthService } from './application/auth/AuthService';
import { ApiTokenService } from './application/api-token/ApiTokenService';
import { InMemoryAuthRepository } from './infrastructure/auth/InMemoryAuthRepository';
import { InMemoryApiTokenRepository } from './infrastructure/api-token/InMemoryApiTokenRepository';

const authRepository = new InMemoryAuthRepository();
export const authService = new AuthService(authRepository);

const apiTokenRepository = new InMemoryApiTokenRepository();
export const apiTokenService = new ApiTokenService(apiTokenRepository);
