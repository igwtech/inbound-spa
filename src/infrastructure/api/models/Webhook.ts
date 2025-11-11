/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { User } from './User';
export type Webhook = {
    readonly id?: number;
    user?: User;
    uri?: string;
    authentication?: Array<string>;
    postTypes?: Array<string>;
    createdAt?: string;
};

