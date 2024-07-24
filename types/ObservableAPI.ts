import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create an API key
     * @param createApiKeyRequest 
     */
    public createApiKeyWithHttpInfo(createApiKeyRequest?: CreateApiKeyRequest, _options?: Configuration): Observable<HttpInfo<CreateApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.createApiKey(createApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an API key
     * @param createApiKeyRequest 
     */
    public createApiKey(createApiKeyRequest?: CreateApiKeyRequest, _options?: Configuration): Observable<CreateApiKeyResponse> {
        return this.createApiKeyWithHttpInfo(createApiKeyRequest, _options).pipe(map((apiResponse: HttpInfo<CreateApiKeyResponse>) => apiResponse.data));
    }

    /**
     * Create a workspace
     * @param createWorkspaceRequest 
     */
    public createWorkspaceWithHttpInfo(createWorkspaceRequest?: CreateWorkspaceRequest, _options?: Configuration): Observable<HttpInfo<CreateWorkspaceResponse>> {
        const requestContextPromise = this.requestFactory.createWorkspace(createWorkspaceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a workspace
     * @param createWorkspaceRequest 
     */
    public createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest, _options?: Configuration): Observable<CreateWorkspaceResponse> {
        return this.createWorkspaceWithHttpInfo(createWorkspaceRequest, _options).pipe(map((apiResponse: HttpInfo<CreateWorkspaceResponse>) => apiResponse.data));
    }

    /**
     * Create a workspace scope
     * @param id 
     * @param createWorkspaceScopeRequest 
     */
    public createWorkspaceScopesWithHttpInfo(id: string, createWorkspaceScopeRequest?: CreateWorkspaceScopeRequest, _options?: Configuration): Observable<HttpInfo<CreateWorkspaceScopeResponse>> {
        const requestContextPromise = this.requestFactory.createWorkspaceScopes(id, createWorkspaceScopeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWorkspaceScopesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a workspace scope
     * @param id 
     * @param createWorkspaceScopeRequest 
     */
    public createWorkspaceScopes(id: string, createWorkspaceScopeRequest?: CreateWorkspaceScopeRequest, _options?: Configuration): Observable<CreateWorkspaceScopeResponse> {
        return this.createWorkspaceScopesWithHttpInfo(id, createWorkspaceScopeRequest, _options).pipe(map((apiResponse: HttpInfo<CreateWorkspaceScopeResponse>) => apiResponse.data));
    }

    /**
     * Delets a key for a given workspace
     * @param id 
     * @param akid 
     */
    public deleteApiKeyWithHttpInfo(id: string, akid: string, _options?: Configuration): Observable<HttpInfo<DeleteApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.deleteApiKey(id, akid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delets a key for a given workspace
     * @param id 
     * @param akid 
     */
    public deleteApiKey(id: string, akid: string, _options?: Configuration): Observable<DeleteApiKeyResponse> {
        return this.deleteApiKeyWithHttpInfo(id, akid, _options).pipe(map((apiResponse: HttpInfo<DeleteApiKeyResponse>) => apiResponse.data));
    }

    /**
     * Retrieve an API key by id
     * @param id 
     * @param akid 
     */
    public getApiKeyByIdWithHttpInfo(id: string, akid: string, _options?: Configuration): Observable<HttpInfo<RetrieveApiKeyByIdResponse>> {
        const requestContextPromise = this.requestFactory.getApiKeyById(id, akid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiKeyByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an API key by id
     * @param id 
     * @param akid 
     */
    public getApiKeyById(id: string, akid: string, _options?: Configuration): Observable<RetrieveApiKeyByIdResponse> {
        return this.getApiKeyByIdWithHttpInfo(id, akid, _options).pipe(map((apiResponse: HttpInfo<RetrieveApiKeyByIdResponse>) => apiResponse.data));
    }

    /**
     * Retrieve API keys for a workspace
     * @param id 
     */
    public getApiKeysWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RetrieveApiKeysResponse>> {
        const requestContextPromise = this.requestFactory.getApiKeys(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve API keys for a workspace
     * @param id 
     */
    public getApiKeys(id: string, _options?: Configuration): Observable<RetrieveApiKeysResponse> {
        return this.getApiKeysWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RetrieveApiKeysResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a workspace
     */
    public getWorkspaceWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RetrieveWorkspaceResponse>> {
        const requestContextPromise = this.requestFactory.getWorkspace(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a workspace
     */
    public getWorkspace(_options?: Configuration): Observable<RetrieveWorkspaceResponse> {
        return this.getWorkspaceWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RetrieveWorkspaceResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a workspace
     * @param id 
     */
    public getWorkspaceByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RetrieveWorkspaceByIdResponse>> {
        const requestContextPromise = this.requestFactory.getWorkspaceById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkspaceByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a workspace
     * @param id 
     */
    public getWorkspaceById(id: string, _options?: Configuration): Observable<RetrieveWorkspaceByIdResponse> {
        return this.getWorkspaceByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RetrieveWorkspaceByIdResponse>) => apiResponse.data));
    }

    /**
     * Retrieve workspace scopes
     * @param id 
     */
    public getWorkspaceScopesWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RetrieveAllWorkspaceScopesResponse>> {
        const requestContextPromise = this.requestFactory.getWorkspaceScopes(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkspaceScopesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve workspace scopes
     * @param id 
     */
    public getWorkspaceScopes(id: string, _options?: Configuration): Observable<RetrieveAllWorkspaceScopesResponse> {
        return this.getWorkspaceScopesWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RetrieveAllWorkspaceScopesResponse>) => apiResponse.data));
    }

    /**
     * Refill a key for a given workspace
     * @param id 
     * @param akid 
     * @param refillApiKeyRequest 
     */
    public refillApiKeyWithHttpInfo(id: string, akid: string, refillApiKeyRequest?: RefillApiKeyRequest, _options?: Configuration): Observable<HttpInfo<RefillApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.refillApiKey(id, akid, refillApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refillApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refill a key for a given workspace
     * @param id 
     * @param akid 
     * @param refillApiKeyRequest 
     */
    public refillApiKey(id: string, akid: string, refillApiKeyRequest?: RefillApiKeyRequest, _options?: Configuration): Observable<RefillApiKeyResponse> {
        return this.refillApiKeyWithHttpInfo(id, akid, refillApiKeyRequest, _options).pipe(map((apiResponse: HttpInfo<RefillApiKeyResponse>) => apiResponse.data));
    }

    /**
     * Rotate a key for a given workspace
     * @param id 
     * @param akid 
     */
    public rotateApiKeyWithHttpInfo(id: string, akid: string, _options?: Configuration): Observable<HttpInfo<RotateApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.rotateApiKey(id, akid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rotateApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rotate a key for a given workspace
     * @param id 
     * @param akid 
     */
    public rotateApiKey(id: string, akid: string, _options?: Configuration): Observable<RotateApiKeyResponse> {
        return this.rotateApiKeyWithHttpInfo(id, akid, _options).pipe(map((apiResponse: HttpInfo<RotateApiKeyResponse>) => apiResponse.data));
    }

    /**
     * Updates a workspace
     * @param id 
     * @param updateWorkspaceResponse 
     */
    public updateWorkspaceWithHttpInfo(id: string, updateWorkspaceResponse?: UpdateWorkspaceResponse, _options?: Configuration): Observable<HttpInfo<UpdateWorkspaceResponse>> {
        const requestContextPromise = this.requestFactory.updateWorkspace(id, updateWorkspaceResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a workspace
     * @param id 
     * @param updateWorkspaceResponse 
     */
    public updateWorkspace(id: string, updateWorkspaceResponse?: UpdateWorkspaceResponse, _options?: Configuration): Observable<UpdateWorkspaceResponse> {
        return this.updateWorkspaceWithHttpInfo(id, updateWorkspaceResponse, _options).pipe(map((apiResponse: HttpInfo<UpdateWorkspaceResponse>) => apiResponse.data));
    }

    /**
     * Verify a key for a given workspace
     * @param verifyApiKeyRequest 
     */
    public verifyApiKeyWithHttpInfo(verifyApiKeyRequest?: VerifyApiKeyRequest, _options?: Configuration): Observable<HttpInfo<VerifyApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.verifyApiKey(verifyApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify a key for a given workspace
     * @param verifyApiKeyRequest 
     */
    public verifyApiKey(verifyApiKeyRequest?: VerifyApiKeyRequest, _options?: Configuration): Observable<VerifyApiKeyResponse> {
        return this.verifyApiKeyWithHttpInfo(verifyApiKeyRequest, _options).pipe(map((apiResponse: HttpInfo<VerifyApiKeyResponse>) => apiResponse.data));
    }

}
