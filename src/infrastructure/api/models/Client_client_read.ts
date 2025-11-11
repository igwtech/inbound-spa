/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { ClientHub_client_read } from './ClientHub_client_read';
import type { UserClient_client_read } from './UserClient_client_read';
export type Client_client_read = {
    readonly id?: number;
    clientId?: number;
    name?: string;
    clientHubs?: Array<ClientHub_client_read>;
    userClients?: Array<UserClient_client_read>;
    active?: boolean;
    createdAt?: string;
    posts?: Array<string>;
};

