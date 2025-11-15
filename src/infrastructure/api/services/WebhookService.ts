/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webhook_webhook_read } from '../models/Webhook_webhook_read';
import type { Webhook_webhook_write } from '../models/Webhook_webhook_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookService {
    /**
     * Creates a Webhook resource.
     * Creates a Webhook resource.
     * @param requestBody The new Webhook resource
     * @returns Webhook_webhook_read Webhook resource created
     * @throws ApiError
     */
    public static appInternalWebhookTriggerAll(
        requestBody: Webhook_webhook_write,
    ): CancelablePromise<Webhook_webhook_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/webhook/trigger-all/{clientId}/{hubId}/{postType}',
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
     * Creates a Webhook resource.
     * Creates a Webhook resource.
     * @param requestBody The new Webhook resource
     * @returns Webhook_webhook_read Webhook resource created
     * @throws ApiError
     */
    public static appInternalWebhookTrigger(
        requestBody: Webhook_webhook_write,
    ): CancelablePromise<Webhook_webhook_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/webhook/trigger/{postId}',
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
     * Retrieves the collection of Webhook resources.
     * Retrieves the collection of Webhook resources.
     * @param page The collection page number
     * @returns Webhook_webhook_read Webhook collection
     * @throws ApiError
     */
    public static apiV1WebhooksGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Webhook_webhook_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/webhooks',
            query: {
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Creates a Webhook resource.
     * Creates a Webhook resource.
     * @param requestBody The new Webhook resource
     * @returns Webhook_webhook_read Webhook resource created
     * @throws ApiError
     */
    public static apiV1WebhooksPost(
        requestBody: Webhook_webhook_write,
    ): CancelablePromise<Webhook_webhook_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/webhooks',
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
     * Retrieves a Webhook resource.
     * Retrieves a Webhook resource.
     * @param id Webhook identifier
     * @returns Webhook_webhook_read Webhook resource
     * @throws ApiError
     */
    public static apiV1WebhooksIdGet(
        id: string,
    ): CancelablePromise<Webhook_webhook_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/webhooks/{id}',
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
     * Removes the Webhook resource.
     * Removes the Webhook resource.
     * @param id Webhook identifier
     * @returns void
     * @throws ApiError
     */
    public static apiV1WebhooksIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/webhooks/{id}',
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
