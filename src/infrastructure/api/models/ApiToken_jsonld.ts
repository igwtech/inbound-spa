/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_jsonld } from './User_jsonld';
export type ApiToken_jsonld = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    tokenId?: string;
    tokenHash?: string;
    expiresAt?: string;
    lastUsedAt?: string | null;
    active?: boolean;
    createdAt?: string;
    user?: User_jsonld;
    roles?: string | null;
    name?: string;
    description?: string | null;
    readonly expired?: boolean;
    readonly token?: string | null;
};

