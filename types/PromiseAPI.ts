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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an API key
     * @param createApiKeyRequest 
     */
    public createApiKeyWithHttpInfo(createApiKeyRequest?: CreateApiKeyRequest, _options?: Configuration): Promise<HttpInfo<CreateApiKeyResponse>> {
        const result = this.api.createApiKeyWithHttpInfo(createApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Create an API key
     * @param createApiKeyRequest 
     */
    public createApiKey(createApiKeyRequest?: CreateApiKeyRequest, _options?: Configuration): Promise<CreateApiKeyResponse> {
        const result = this.api.createApiKey(createApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a workspace
     * @param createWorkspaceRequest 
     */
    public createWorkspaceWithHttpInfo(createWorkspaceRequest?: CreateWorkspaceRequest, _options?: Configuration): Promise<HttpInfo<CreateWorkspaceResponse>> {
        const result = this.api.createWorkspaceWithHttpInfo(createWorkspaceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a workspace
     * @param createWorkspaceRequest 
     */
    public createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest, _options?: Configuration): Promise<CreateWorkspaceResponse> {
        const result = this.api.createWorkspace(createWorkspaceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a workspace scope
     * @param id 
     * @param createWorkspaceScopeRequest 
     */
    public createWorkspaceScopesWithHttpInfo(id: string, createWorkspaceScopeRequest?: CreateWorkspaceScopeRequest, _options?: Configuration): Promise<HttpInfo<CreateWorkspaceScopeResponse>> {
        const result = this.api.createWorkspaceScopesWithHttpInfo(id, createWorkspaceScopeRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a workspace scope
     * @param id 
     * @param createWorkspaceScopeRequest 
     */
    public createWorkspaceScopes(id: string, createWorkspaceScopeRequest?: CreateWorkspaceScopeRequest, _options?: Configuration): Promise<CreateWorkspaceScopeResponse> {
        const result = this.api.createWorkspaceScopes(id, createWorkspaceScopeRequest, _options);
        return result.toPromise();
    }

    /**
     * Delets a key for a given workspace
     * @param id 
     * @param akid 
     */
    public deleteApiKeyWithHttpInfo(id: string, akid: string, _options?: Configuration): Promise<HttpInfo<DeleteApiKeyResponse>> {
        const result = this.api.deleteApiKeyWithHttpInfo(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Delets a key for a given workspace
     * @param id 
     * @param akid 
     */
    public deleteApiKey(id: string, akid: string, _options?: Configuration): Promise<DeleteApiKeyResponse> {
        const result = this.api.deleteApiKey(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an API key by id
     * @param id 
     * @param akid 
     */
    public getApiKeyByIdWithHttpInfo(id: string, akid: string, _options?: Configuration): Promise<HttpInfo<RetrieveApiKeyByIdResponse>> {
        const result = this.api.getApiKeyByIdWithHttpInfo(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an API key by id
     * @param id 
     * @param akid 
     */
    public getApiKeyById(id: string, akid: string, _options?: Configuration): Promise<RetrieveApiKeyByIdResponse> {
        const result = this.api.getApiKeyById(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Retrieve API keys for a workspace
     * @param id 
     */
    public getApiKeysWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<RetrieveApiKeysResponse>> {
        const result = this.api.getApiKeysWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve API keys for a workspace
     * @param id 
     */
    public getApiKeys(id: string, _options?: Configuration): Promise<RetrieveApiKeysResponse> {
        const result = this.api.getApiKeys(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a workspace
     */
    public getWorkspaceWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RetrieveWorkspaceResponse>> {
        const result = this.api.getWorkspaceWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieve a workspace
     */
    public getWorkspace(_options?: Configuration): Promise<RetrieveWorkspaceResponse> {
        const result = this.api.getWorkspace(_options);
        return result.toPromise();
    }

    /**
     * Retrieve a workspace
     * @param id 
     */
    public getWorkspaceByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<RetrieveWorkspaceByIdResponse>> {
        const result = this.api.getWorkspaceByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a workspace
     * @param id 
     */
    public getWorkspaceById(id: string, _options?: Configuration): Promise<RetrieveWorkspaceByIdResponse> {
        const result = this.api.getWorkspaceById(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve workspace scopes
     * @param id 
     */
    public getWorkspaceScopesWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<RetrieveAllWorkspaceScopesResponse>> {
        const result = this.api.getWorkspaceScopesWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve workspace scopes
     * @param id 
     */
    public getWorkspaceScopes(id: string, _options?: Configuration): Promise<RetrieveAllWorkspaceScopesResponse> {
        const result = this.api.getWorkspaceScopes(id, _options);
        return result.toPromise();
    }

    /**
     * Refill a key for a given workspace
     * @param id 
     * @param akid 
     * @param refillApiKeyRequest 
     */
    public refillApiKeyWithHttpInfo(id: string, akid: string, refillApiKeyRequest?: RefillApiKeyRequest, _options?: Configuration): Promise<HttpInfo<RefillApiKeyResponse>> {
        const result = this.api.refillApiKeyWithHttpInfo(id, akid, refillApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Refill a key for a given workspace
     * @param id 
     * @param akid 
     * @param refillApiKeyRequest 
     */
    public refillApiKey(id: string, akid: string, refillApiKeyRequest?: RefillApiKeyRequest, _options?: Configuration): Promise<RefillApiKeyResponse> {
        const result = this.api.refillApiKey(id, akid, refillApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Rotate a key for a given workspace
     * @param id 
     * @param akid 
     */
    public rotateApiKeyWithHttpInfo(id: string, akid: string, _options?: Configuration): Promise<HttpInfo<RotateApiKeyResponse>> {
        const result = this.api.rotateApiKeyWithHttpInfo(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Rotate a key for a given workspace
     * @param id 
     * @param akid 
     */
    public rotateApiKey(id: string, akid: string, _options?: Configuration): Promise<RotateApiKeyResponse> {
        const result = this.api.rotateApiKey(id, akid, _options);
        return result.toPromise();
    }

    /**
     * Updates a workspace
     * @param id 
     * @param updateWorkspaceResponse 
     */
    public updateWorkspaceWithHttpInfo(id: string, updateWorkspaceResponse?: UpdateWorkspaceResponse, _options?: Configuration): Promise<HttpInfo<UpdateWorkspaceResponse>> {
        const result = this.api.updateWorkspaceWithHttpInfo(id, updateWorkspaceResponse, _options);
        return result.toPromise();
    }

    /**
     * Updates a workspace
     * @param id 
     * @param updateWorkspaceResponse 
     */
    public updateWorkspace(id: string, updateWorkspaceResponse?: UpdateWorkspaceResponse, _options?: Configuration): Promise<UpdateWorkspaceResponse> {
        const result = this.api.updateWorkspace(id, updateWorkspaceResponse, _options);
        return result.toPromise();
    }

    /**
     * Verify a key for a given workspace
     * @param verifyApiKeyRequest 
     */
    public verifyApiKeyWithHttpInfo(verifyApiKeyRequest?: VerifyApiKeyRequest, _options?: Configuration): Promise<HttpInfo<VerifyApiKeyResponse>> {
        const result = this.api.verifyApiKeyWithHttpInfo(verifyApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Verify a key for a given workspace
     * @param verifyApiKeyRequest 
     */
    public verifyApiKey(verifyApiKeyRequest?: VerifyApiKeyRequest, _options?: Configuration): Promise<VerifyApiKeyResponse> {
        const result = this.api.verifyApiKey(verifyApiKeyRequest, _options);
        return result.toPromise();
    }


}



