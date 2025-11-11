/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type ApiToken = {
    readonly id?: number;
    tokenId?: string;
    tokenHash?: string;
    expiresAt?: string;
    lastUsedAt?: string | null;
    active?: boolean;
    createdAt?: string;
    user?: User;
    roles?: string | null;
    name?: string;
    description?: string | null;
    readonly expired?: boolean;
    readonly token?: string | null;
};

