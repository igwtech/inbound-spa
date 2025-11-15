/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post_CreatePostInput_post_write } from '../models/Post_CreatePostInput_post_write';
import type { Post_CreatePostOutput_post_read } from '../models/Post_CreatePostOutput_post_read';
import type { Post_post_read } from '../models/Post_post_read';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostService {
    /**
     * Creates a Post resource.
     * Creates a Post resource.
     * @param requestBody The new Post resource
     * @returns Post_CreatePostOutput_post_read Post resource created
     * @throws ApiError
     */
    public static postCreation(
        requestBody: Post_CreatePostInput_post_write,
    ): CancelablePromise<Post_CreatePostOutput_post_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/post/{hubId}/{clientId}/{type}',
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
     * Retrieves a Post resource.
     * Retrieves a Post resource.
     * @param id Post identifier
     * @returns Post_post_read Post resource
     * @throws ApiError
     */
    public static apiPostGet(
        id: string,
    ): CancelablePromise<Post_post_read> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/post/{postId}',
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
     * Retrieves the collection of Post resources.
     * Retrieves the collection of Post resources.
     * @param page The collection page number
     * @returns Post_post_read Post collection
     * @throws ApiError
     */
    public static apiPostsGet(
        page: number = 1,
    ): CancelablePromise<Array<Post_post_read>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/posts',
            query: {
                'page': page,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
}
