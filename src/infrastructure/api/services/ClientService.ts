/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client_client_read } from '../models/Client_client_read';
import type { Client_client_write } from '../models/Client_client_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClientService {
    /**
     * Retrieves the collection of Client resources.
     * Retrieves the collection of Client resources.
     * @param page The collection page number
     * @returns Client_client_read Client collection
     * @throws ApiError
     */
    public static apiV1ClientsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Client_client_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients',
            query: {
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Creates a Client resource.
     * Creates a Client resource.
     * @param requestBody The new Client resource
     * @returns Client_client_read Client resource created
     * @throws ApiError
     */
    public static apiV1ClientsPost(
        requestBody: Client_client_write,
    ): CancelablePromise<Client_client_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/clients',
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
     * Retrieves a Client resource.
     * Retrieves a Client resource.
     * @param id Client identifier
     * @returns Client_client_read Client resource
     * @throws ApiError
     */
    public static apiV1ClientsIdGet(
        id: string,
    ): CancelablePromise<Client_client_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/clients/{id}',
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
