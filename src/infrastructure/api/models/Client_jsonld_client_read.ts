/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientHub_jsonld_client_read } from './ClientHub_jsonld_client_read';
import type { UserClient_jsonld_client_read } from './UserClient_jsonld_client_read';
export type Client_jsonld_client_read = {
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly '@context'?: (string | Record<string, any>);
    readonly id?: number;
    clientId?: number;
    name?: string;
    clientHubs?: Array<ClientHub_jsonld_client_read>;
    userClients?: Array<UserClient_jsonld_client_read>;
    active?: boolean;
    createdAt?: string;
    posts?: Array<string>;
};

