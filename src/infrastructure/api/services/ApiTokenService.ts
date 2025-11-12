import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { ApiToken } from '../models/ApiToken'

export class ApiTokenService {
  /**
   * @returns ApiToken
   * @throws ApiError
   */
  public static getApiTokenCollection(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/tokens'
    })
  }

  /**
   * @param requestBody
   * @returns ApiToken
   * @throws ApiError
   */
  public static postApiTokenCollection({
    requestBody
  }: {
    requestBody: { name: string }
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tokens',
      body: requestBody,
      mediaType: 'application/ld+json'
    })
  }

  /**
   * @param id
   * @returns void
   * @throws ApiError
   */
  public static deleteApiTokenItem(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/tokens/{id}',
      path: {
        id: id
      }
    })
  }
}
