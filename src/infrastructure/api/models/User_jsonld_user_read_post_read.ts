/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post_jsonld_user_read_post_read } from './Post_jsonld_user_read_post_read';
export type User_jsonld_user_read_post_read = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    posts?: Array<Post_jsonld_user_read_post_read>;
};

