/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { Hub_hub_read } from '../models/Hub_hub_read';
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
    public static apiHubsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Hub_hub_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/hubs',
            query: {
                'page': page,
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
    public static apiHubsIdGet(
        id: string,
    ): CancelablePromise<Hub_hub_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/hubs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
