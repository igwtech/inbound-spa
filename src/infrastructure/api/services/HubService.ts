/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hub_hub_read } from '../models/Hub_hub_read';
import type { Hub_hub_write } from '../models/Hub_hub_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HubService {
    /**
     * Retrieves the collection of Hub resources.
     * Retrieves the collection of Hub resources.
     * @param page The collection page number
     * @returns Hub_hub_read Hub collection
     * @throws ApiError
     */
    public static apiV1HubsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Hub_hub_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/hubs',
            query: {
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Creates a Hub resource.
     * Creates a Hub resource.
     * @param requestBody The new Hub resource
     * @returns Hub_hub_read Hub resource created
     * @throws ApiError
     */
    public static apiV1HubsPost(
        requestBody: Hub_hub_write,
    ): CancelablePromise<Hub_hub_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/hubs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                403: `Forbidden`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Hub resource.
     * Retrieves a Hub resource.
     * @param id Hub identifier
     * @returns Hub_hub_read Hub resource
     * @throws ApiError
     */
    public static apiV1HubsIdGet(
        id: string,
    ): CancelablePromise<Hub_hub_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/hubs/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden`,
                404: `Resource not found`,
            },
        });
    }
}
