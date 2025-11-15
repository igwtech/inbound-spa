/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientHub_hub_read } from './ClientHub_hub_read';
export type Hub_hub_read = {
    readonly id?: number;
    hubId?: number;
    name?: string;
    active?: boolean;
    createdAt?: string;
    clientHubs?: Array<ClientHub_hub_read>;
    posts?: Array<string>;
};

