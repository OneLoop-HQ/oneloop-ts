/**
 * Oneloop API
 * API Key Management
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiKeyScope } from '../models/ApiKeyScope';
import { VerifyApiKeyResponseRateLimit } from '../models/VerifyApiKeyResponseRateLimit';
import { HttpFile } from '../http/http';

export class VerifyApiKeyResponse {
    'expiresAt': number | null;
    'requestedScopes': Array<ApiKeyScope>;
    'status': VerifyApiKeyResponseStatusEnum;
    'rateLimit'?: VerifyApiKeyResponseRateLimit;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "requestedScopes",
            "baseName": "requestedScopes",
            "type": "Array<ApiKeyScope>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "VerifyApiKeyResponseStatusEnum",
            "format": ""
        },
        {
            "name": "rateLimit",
            "baseName": "rateLimit",
            "type": "VerifyApiKeyResponseRateLimit",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VerifyApiKeyResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum VerifyApiKeyResponseStatusEnum {
    Valid = 'VALID',
    Expired = 'EXPIRED',
    Disabled = 'DISABLED',
    Deleted = 'DELETED',
    RateLimited = 'RATE_LIMITED',
    UsageLimited = 'USAGE_LIMITED',
    InvalidScopes = 'INVALID_SCOPES',
    Invalid = 'INVALID'
}

