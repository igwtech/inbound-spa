/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiToken_jsonld } from './ApiToken_jsonld';
import type { Post_jsonld } from './Post_jsonld';
import type { UserClient_jsonld } from './UserClient_jsonld';
import type { Webhook_jsonld } from './Webhook_jsonld';
export type User_jsonld = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    email?: string;
    passwordHash?: string;
    createdAt?: string;
    active?: boolean;
    role?: string;
    firstName?: string;
    lastName?: string;
    activationToken?: string | null;
    activationTokenExpiresAt?: string | null;
    apiTokens?: Array<ApiToken_jsonld>;
    userClients?: Array<UserClient_jsonld>;
    webhooks?: Array<Webhook_jsonld>;
    posts?: Array<Post_jsonld>;
    readonly userIdentifier?: string;
    readonly roles?: Array<string>;
    readonly password?: string;
    readonly clients?: Array<string>;
    readonly activationTokenValid?: boolean;
};

