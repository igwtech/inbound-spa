/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_jsonld } from './User_jsonld';
export type Post_jsonld = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    postId?: string;
    hub?: string;
    client?: string;
    postType?: number;
    status?: string;
    data?: any[] | null;
    metadata?: any[] | null;
    createdAt?: string;
    updatedAt?: string;
    owner?: User_jsonld;
    type?: number;
};

