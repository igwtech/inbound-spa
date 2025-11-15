/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '@/domain/auth/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { LoginResponse } from '@/domain/auth/LoginResponse';
export class LoginCheckService {
    /**
     * Creates a user token.
     * Creates a user token.
     * @param requestBody The login data
     * @returns any User token created
     * @throws ApiError
     */
    public static loginCheckPost(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
