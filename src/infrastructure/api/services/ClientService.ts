/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client_client_read } from '../models/Client_client_read';
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
    public static apiClientsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Client_client_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/clients',
            query: {
                'page': page,
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
    public static apiClientsIdGet(
        id: string,
    ): CancelablePromise<Client_client_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/clients/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
