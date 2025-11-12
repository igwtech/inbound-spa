/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
import type { CreatePost, Post } from '@/domain/post/Post'
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostService {
    /**
     * Retrieves the collection of Post resources.
     * Retrieves the collection of Post resources.
     * @param page The collection page number
     * @returns Post Post collection
     * @throws ApiError
     */
    public static apiPostsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Post>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/posts',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a Post resource.
     * Creates a Post resource.
     * @param requestBody The new Post resource
     * @returns Post Post resource created
     * @throws ApiError
     */
    public static apiPostsCreate(
        requestBody: CreatePost,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: `/api/v1/post/${requestBody.hub}/${requestBody.client}/${requestBody.postType}`,
            body: requestBody.data,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Post resource.
     * Retrieves a Post resource.
     * @param id Post identifier
     * @returns Post Post resource
     * @throws ApiError
     */
    public static apiPostsIdGet(
        id: string,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
