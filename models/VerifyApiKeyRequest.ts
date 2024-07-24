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
import { HttpFile } from '../http/http';

export class VerifyApiKeyRequest {
    'workspaceId': string;
    'key': string;
    'requestedScopes': Array<ApiKeyScope>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestedScopes",
            "baseName": "requestedScopes",
            "type": "Array<ApiKeyScope>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VerifyApiKeyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

