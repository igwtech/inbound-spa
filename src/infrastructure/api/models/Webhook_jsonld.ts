/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_jsonld } from './User_jsonld';
export type Webhook_jsonld = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    user?: User_jsonld;
    uri?: string;
    authentication?: Array<string>;
    postTypes?: Array<string>;
    createdAt?: string;
};

