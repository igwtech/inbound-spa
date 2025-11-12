import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { Webhook } from '../models/Webhook'

export class WebhookService {
  /**
   * @returns Webhook
   * @throws ApiError
   */
  public static getWebhookCollection(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/webhooks'
    })
  }

  /**
   * @param requestBody
   * @returns Webhook
   * @throws ApiError
   */
  public static postWebhookCollection({
    requestBody
  }: {
    requestBody: Webhook
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/webhooks',
      body: requestBody,
      mediaType: 'application/ld+json'
    })
  }

  /**
   * @param id
   * @returns Webhook
   * @throws ApiError
   */
  public static getWebhookItem(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/webhooks/{id}',
      path: {
        id: id
      }
    })
  }

  /**
   * @param id
   * @param requestBody
   * @returns Webhook
   * @throws ApiError
   */
  public static putWebhookItem({
    id,
    requestBody
  }: {
    id: string
    requestBody: Webhook
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/webhooks/{id}',
      path: {
        id: id
      },
      body: requestBody,
      mediaType: 'application/ld+json'
    })
  }

  /**
   * @param id
   * @returns void
   * @throws ApiError
   */
  public static deleteWebhookItem(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/webhooks/{id}',
      path: {
        id: id
      }
    })
  }
}
