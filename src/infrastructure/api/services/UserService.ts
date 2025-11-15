/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_user_read_post_read } from '../models/User_user_read_post_read';
import type { User_user_write } from '../models/User_user_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Retrieves a User resource.
     * Retrieves a User resource.
     * @param id User identifier
     * @returns User_user_read_post_read User resource
     * @throws ApiError
     */
    public static userActivateGet(
        id: string,
    ): CancelablePromise<User_user_read_post_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activate/{token}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Creates a User resource.
     * Creates a User resource.
     * @param requestBody The new User resource
     * @returns User_user_read_post_read User resource created
     * @throws ApiError
     */
    public static userRegister(
        requestBody: User_user_write,
    ): CancelablePromise<User_user_read_post_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                403: `Forbidden`,
                422: `Unprocessable entity`,
            },
        });
    }
}
