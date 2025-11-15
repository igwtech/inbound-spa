/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiToken } from '../models/ApiToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiTokenService {
    /**
     * Removes the ApiToken resource.
     * Removes the ApiToken resource.
     * @param id ApiToken identifier
     * @returns void
     * @throws ApiError
     */
    public static tokensRevoke(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/api_token/{id}',
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
     * Retrieves the collection of ApiToken resources.
     * Retrieves the collection of ApiToken resources.
     * @param page The collection page number
     * @returns ApiToken ApiToken collection
     * @throws ApiError
     */
    public static tokensList(
        page: number = 1,
    ): CancelablePromise<{tokens: Array<ApiToken>}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/api_tokens',
            query: {
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Creates a ApiToken resource.
     * Creates a ApiToken resource.
     * @param requestBody The new ApiToken resource
     * @returns ApiToken ApiToken resource created
     * @throws ApiError
     */
    public static tokensCreate(
        requestBody: ApiToken,
    ): CancelablePromise<ApiToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/api_tokens',
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
