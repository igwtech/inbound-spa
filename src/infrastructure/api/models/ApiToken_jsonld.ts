/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
    user?: string;
    roles?: string | null;
    name?: string;
    description?: string | null;
    readonly expired?: boolean;
    readonly token?: string | null;
};

