/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientHub_jsonld_hub_read } from './ClientHub_jsonld_hub_read';
export type Hub_jsonld_hub_read = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    hubId?: number;
    name?: string;
    active?: boolean;
    createdAt?: string;
    clientHubs?: Array<ClientHub_jsonld_hub_read>;
    posts?: Array<string>;
};

