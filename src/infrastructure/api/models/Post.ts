/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type Post = {
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
    owner?: User;
    type?: number;
};

