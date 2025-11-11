/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiToken } from './ApiToken';
import type { Post } from './Post';
import type { UserClient } from './UserClient';
import type { Webhook } from './Webhook';
export type User = {
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
    apiTokens?: Array<ApiToken>;
    userClients?: Array<UserClient>;
    webhooks?: Array<Webhook>;
    posts?: Array<Post>;
    readonly userIdentifier?: string;
    readonly roles?: Array<string>;
    readonly password?: string;
    readonly clients?: Array<string>;
    readonly activationTokenValid?: boolean;
};

