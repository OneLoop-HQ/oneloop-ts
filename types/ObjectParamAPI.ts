import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApiKey } from '../models/ApiKey';
import { ApiKeyScope } from '../models/ApiKeyScope';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import { CreateApiKeyResponseApiKey } from '../models/CreateApiKeyResponseApiKey';
import { CreateWorkspaceRequest } from '../models/CreateWorkspaceRequest';
import { CreateWorkspaceResponse } from '../models/CreateWorkspaceResponse';
import { CreateWorkspaceScopeRequest } from '../models/CreateWorkspaceScopeRequest';
import { CreateWorkspaceScopeResponse } from '../models/CreateWorkspaceScopeResponse';
import { DeleteApiKeyResponse } from '../models/DeleteApiKeyResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorResponseError } from '../models/ErrorResponseError';
import { RefillApiKeyRequest } from '../models/RefillApiKeyRequest';
import { RefillApiKeyResponse } from '../models/RefillApiKeyResponse';
import { RetrieveAllWorkspaceScopesResponse } from '../models/RetrieveAllWorkspaceScopesResponse';
import { RetrieveApiKeyByIdResponse } from '../models/RetrieveApiKeyByIdResponse';
import { RetrieveApiKeysResponse } from '../models/RetrieveApiKeysResponse';
import { RetrieveWorkspaceByIdResponse } from '../models/RetrieveWorkspaceByIdResponse';
import { RetrieveWorkspaceResponse } from '../models/RetrieveWorkspaceResponse';
import { RotateApiKeyResponse } from '../models/RotateApiKeyResponse';
import { UpdateWorkspaceResponse } from '../models/UpdateWorkspaceResponse';
import { VerifyApiKeyRequest } from '../models/VerifyApiKeyRequest';
import { VerifyApiKeyResponse } from '../models/VerifyApiKeyResponse';
import { Workspace } from '../models/Workspace';
import { WorkspaceScope } from '../models/WorkspaceScope';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateApiKeyRequest {
    /**
     * 
     * @type CreateApiKeyRequest
     * @memberof DefaultApicreateApiKey
     */
    createApiKeyRequest?: CreateApiKeyRequest
}

export interface DefaultApiCreateWorkspaceRequest {
    /**
     * 
     * @type CreateWorkspaceRequest
     * @memberof DefaultApicreateWorkspace
     */
    createWorkspaceRequest?: CreateWorkspaceRequest
}

export interface DefaultApiCreateWorkspaceScopesRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateWorkspaceScopes
     */
    id: string
    /**
     * 
     * @type CreateWorkspaceScopeRequest
     * @memberof DefaultApicreateWorkspaceScopes
     */
    createWorkspaceScopeRequest?: CreateWorkspaceScopeRequest
}

export interface DefaultApiDeleteApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiKey
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiKey
     */
    akid: string
}

export interface DefaultApiGetApiKeyByIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiKeyById
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiKeyById
     */
    akid: string
}

export interface DefaultApiGetApiKeysRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiKeys
     */
    id: string
}

export interface DefaultApiGetWorkspaceRequest {
}

export interface DefaultApiGetWorkspaceByIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetWorkspaceById
     */
    id: string
}

export interface DefaultApiGetWorkspaceScopesRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetWorkspaceScopes
     */
    id: string
}

export interface DefaultApiRefillApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApirefillApiKey
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApirefillApiKey
     */
    akid: string
    /**
     * 
     * @type RefillApiKeyRequest
     * @memberof DefaultApirefillApiKey
     */
    refillApiKeyRequest?: RefillApiKeyRequest
}

export interface DefaultApiRotateApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApirotateApiKey
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApirotateApiKey
     */
    akid: string
}

export interface DefaultApiUpdateWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateWorkspace
     */
    id: string
    /**
     * 
     * @type UpdateWorkspaceResponse
     * @memberof DefaultApiupdateWorkspace
     */
    updateWorkspaceResponse?: UpdateWorkspaceResponse
}

export interface DefaultApiVerifyApiKeyRequest {
    /**
     * 
     * @type VerifyApiKeyRequest
     * @memberof DefaultApiverifyApiKey
     */
    verifyApiKeyRequest?: VerifyApiKeyRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an API key
     * @param param the request object
     */
    public createApiKeyWithHttpInfo(param: DefaultApiCreateApiKeyRequest = {}, options?: Configuration): Promise<HttpInfo<CreateApiKeyResponse>> {
        return this.api.createApiKeyWithHttpInfo(param.createApiKeyRequest,  options).toPromise();
    }

    /**
     * Create an API key
     * @param param the request object
     */
    public createApiKey(param: DefaultApiCreateApiKeyRequest = {}, options?: Configuration): Promise<CreateApiKeyResponse> {
        return this.api.createApiKey(param.createApiKeyRequest,  options).toPromise();
    }

    /**
     * Create a workspace
     * @param param the request object
     */
    public createWorkspaceWithHttpInfo(param: DefaultApiCreateWorkspaceRequest = {}, options?: Configuration): Promise<HttpInfo<CreateWorkspaceResponse>> {
        return this.api.createWorkspaceWithHttpInfo(param.createWorkspaceRequest,  options).toPromise();
    }

    /**
     * Create a workspace
     * @param param the request object
     */
    public createWorkspace(param: DefaultApiCreateWorkspaceRequest = {}, options?: Configuration): Promise<CreateWorkspaceResponse> {
        return this.api.createWorkspace(param.createWorkspaceRequest,  options).toPromise();
    }

    /**
     * Create a workspace scope
     * @param param the request object
     */
    public createWorkspaceScopesWithHttpInfo(param: DefaultApiCreateWorkspaceScopesRequest, options?: Configuration): Promise<HttpInfo<CreateWorkspaceScopeResponse>> {
        return this.api.createWorkspaceScopesWithHttpInfo(param.id, param.createWorkspaceScopeRequest,  options).toPromise();
    }

    /**
     * Create a workspace scope
     * @param param the request object
     */
    public createWorkspaceScopes(param: DefaultApiCreateWorkspaceScopesRequest, options?: Configuration): Promise<CreateWorkspaceScopeResponse> {
        return this.api.createWorkspaceScopes(param.id, param.createWorkspaceScopeRequest,  options).toPromise();
    }

    /**
     * Delets a key for a given workspace
     * @param param the request object
     */
    public deleteApiKeyWithHttpInfo(param: DefaultApiDeleteApiKeyRequest, options?: Configuration): Promise<HttpInfo<DeleteApiKeyResponse>> {
        return this.api.deleteApiKeyWithHttpInfo(param.id, param.akid,  options).toPromise();
    }

    /**
     * Delets a key for a given workspace
     * @param param the request object
     */
    public deleteApiKey(param: DefaultApiDeleteApiKeyRequest, options?: Configuration): Promise<DeleteApiKeyResponse> {
        return this.api.deleteApiKey(param.id, param.akid,  options).toPromise();
    }

    /**
     * Retrieve an API key by id
     * @param param the request object
     */
    public getApiKeyByIdWithHttpInfo(param: DefaultApiGetApiKeyByIdRequest, options?: Configuration): Promise<HttpInfo<RetrieveApiKeyByIdResponse>> {
        return this.api.getApiKeyByIdWithHttpInfo(param.id, param.akid,  options).toPromise();
    }

    /**
     * Retrieve an API key by id
     * @param param the request object
     */
    public getApiKeyById(param: DefaultApiGetApiKeyByIdRequest, options?: Configuration): Promise<RetrieveApiKeyByIdResponse> {
        return this.api.getApiKeyById(param.id, param.akid,  options).toPromise();
    }

    /**
     * Retrieve API keys for a workspace
     * @param param the request object
     */
    public getApiKeysWithHttpInfo(param: DefaultApiGetApiKeysRequest, options?: Configuration): Promise<HttpInfo<RetrieveApiKeysResponse>> {
        return this.api.getApiKeysWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieve API keys for a workspace
     * @param param the request object
     */
    public getApiKeys(param: DefaultApiGetApiKeysRequest, options?: Configuration): Promise<RetrieveApiKeysResponse> {
        return this.api.getApiKeys(param.id,  options).toPromise();
    }

    /**
     * Retrieve a workspace
     * @param param the request object
     */
    public getWorkspaceWithHttpInfo(param: DefaultApiGetWorkspaceRequest = {}, options?: Configuration): Promise<HttpInfo<RetrieveWorkspaceResponse>> {
        return this.api.getWorkspaceWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve a workspace
     * @param param the request object
     */
    public getWorkspace(param: DefaultApiGetWorkspaceRequest = {}, options?: Configuration): Promise<RetrieveWorkspaceResponse> {
        return this.api.getWorkspace( options).toPromise();
    }

    /**
     * Retrieve a workspace
     * @param param the request object
     */
    public getWorkspaceByIdWithHttpInfo(param: DefaultApiGetWorkspaceByIdRequest, options?: Configuration): Promise<HttpInfo<RetrieveWorkspaceByIdResponse>> {
        return this.api.getWorkspaceByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieve a workspace
     * @param param the request object
     */
    public getWorkspaceById(param: DefaultApiGetWorkspaceByIdRequest, options?: Configuration): Promise<RetrieveWorkspaceByIdResponse> {
        return this.api.getWorkspaceById(param.id,  options).toPromise();
    }

    /**
     * Retrieve workspace scopes
     * @param param the request object
     */
    public getWorkspaceScopesWithHttpInfo(param: DefaultApiGetWorkspaceScopesRequest, options?: Configuration): Promise<HttpInfo<RetrieveAllWorkspaceScopesResponse>> {
        return this.api.getWorkspaceScopesWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieve workspace scopes
     * @param param the request object
     */
    public getWorkspaceScopes(param: DefaultApiGetWorkspaceScopesRequest, options?: Configuration): Promise<RetrieveAllWorkspaceScopesResponse> {
        return this.api.getWorkspaceScopes(param.id,  options).toPromise();
    }

    /**
     * Refill a key for a given workspace
     * @param param the request object
     */
    public refillApiKeyWithHttpInfo(param: DefaultApiRefillApiKeyRequest, options?: Configuration): Promise<HttpInfo<RefillApiKeyResponse>> {
        return this.api.refillApiKeyWithHttpInfo(param.id, param.akid, param.refillApiKeyRequest,  options).toPromise();
    }

    /**
     * Refill a key for a given workspace
     * @param param the request object
     */
    public refillApiKey(param: DefaultApiRefillApiKeyRequest, options?: Configuration): Promise<RefillApiKeyResponse> {
        return this.api.refillApiKey(param.id, param.akid, param.refillApiKeyRequest,  options).toPromise();
    }

    /**
     * Rotate a key for a given workspace
     * @param param the request object
     */
    public rotateApiKeyWithHttpInfo(param: DefaultApiRotateApiKeyRequest, options?: Configuration): Promise<HttpInfo<RotateApiKeyResponse>> {
        return this.api.rotateApiKeyWithHttpInfo(param.id, param.akid,  options).toPromise();
    }

    /**
     * Rotate a key for a given workspace
     * @param param the request object
     */
    public rotateApiKey(param: DefaultApiRotateApiKeyRequest, options?: Configuration): Promise<RotateApiKeyResponse> {
        return this.api.rotateApiKey(param.id, param.akid,  options).toPromise();
    }

    /**
     * Updates a workspace
     * @param param the request object
     */
    public updateWorkspaceWithHttpInfo(param: DefaultApiUpdateWorkspaceRequest, options?: Configuration): Promise<HttpInfo<UpdateWorkspaceResponse>> {
        return this.api.updateWorkspaceWithHttpInfo(param.id, param.updateWorkspaceResponse,  options).toPromise();
    }

    /**
     * Updates a workspace
     * @param param the request object
     */
    public updateWorkspace(param: DefaultApiUpdateWorkspaceRequest, options?: Configuration): Promise<UpdateWorkspaceResponse> {
        return this.api.updateWorkspace(param.id, param.updateWorkspaceResponse,  options).toPromise();
    }

    /**
     * Verify a key for a given workspace
     * @param param the request object
     */
    public verifyApiKeyWithHttpInfo(param: DefaultApiVerifyApiKeyRequest = {}, options?: Configuration): Promise<HttpInfo<VerifyApiKeyResponse>> {
        return this.api.verifyApiKeyWithHttpInfo(param.verifyApiKeyRequest,  options).toPromise();
    }

    /**
     * Verify a key for a given workspace
     * @param param the request object
     */
    public verifyApiKey(param: DefaultApiVerifyApiKeyRequest = {}, options?: Configuration): Promise<VerifyApiKeyResponse> {
        return this.api.verifyApiKey(param.verifyApiKeyRequest,  options).toPromise();
    }

}
