# .DefaultApi

All URIs are relative to *https://prod.oneloop.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiKey**](DefaultApi.md#createApiKey) | **POST** /api/v1/api-key | Create an API key
[**createWorkspace**](DefaultApi.md#createWorkspace) | **POST** /api/v1/workspace | Create a workspace
[**createWorkspaceScopes**](DefaultApi.md#createWorkspaceScopes) | **POST** /api/v1/workspace/{id}/scope | Create a workspace scope
[**deleteApiKey**](DefaultApi.md#deleteApiKey) | **DELETE** /api/v1/workspace/{id}/api-key/{akid} | Delets a key for a given workspace
[**editApiKey**](DefaultApi.md#editApiKey) | **PATCH** /api/v1/workspace/{id}/api-key/{akid} | Edit an API key
[**generateLinkToken**](DefaultApi.md#generateLinkToken) | **POST** /api/v1/link-token | Generate a link token
[**getApiKeyById**](DefaultApi.md#getApiKeyById) | **GET** /api/v1/workspace/{id}/api-key/{akid} | Retrieve an API key by id
[**getApiKeys**](DefaultApi.md#getApiKeys) | **GET** /api/v1/workspace/{id}/api-key | Retrieve API keys for a workspace
[**getWorkspace**](DefaultApi.md#getWorkspace) | **GET** /api/v1/workspace | Retrieve a workspace
[**getWorkspaceById**](DefaultApi.md#getWorkspaceById) | **GET** /api/v1/workspace/{id} | Retrieve a workspace
[**getWorkspaceScopes**](DefaultApi.md#getWorkspaceScopes) | **GET** /api/v1/workspace/{id}/scopes | Retrieve workspace scopes
[**refillApiKey**](DefaultApi.md#refillApiKey) | **POST** /api/v1/workspace/{id}/api-key/{akid}/refill | Refill a key for a given workspace
[**rotateApiKey**](DefaultApi.md#rotateApiKey) | **POST** /api/v1/workspace/{id}/api-key/{akid}/rotate | Rotate a key for a given workspace
[**updateWorkspace**](DefaultApi.md#updateWorkspace) | **PATCH** /api/v1/workspace/{id} | Updates a workspace
[**validateLinkToken**](DefaultApi.md#validateLinkToken) | **GET** /api/v1/link-token | Validate a link token
[**verifyApiKey**](DefaultApi.md#verifyApiKey) | **POST** /api/v1/api-key/verify | Verify a key for a given workspace


# **createApiKey**
> CreateApiKeyResponse createApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateApiKeyRequest = {
  // CreateApiKeyRequest (optional)
  createApiKeyRequest: {
    name: "name_example",
    workspaceId: "workspaceId_example",
    prefix: "prefix_example",
    expiresAt: 0,
    totalUsageAllowed: 0,
    scopes: [
      {
        representation: "representation_example",
        create: true,
        read: true,
        update: true,
        del: true,
      },
    ],
    enabled: true,
    customerId: "customerId_example",
  },
};

apiInstance.createApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApiKeyRequest** | **CreateApiKeyRequest**|  |


### Return type

**CreateApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWorkspace**
> CreateWorkspaceResponse createWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateWorkspaceRequest = {
  // CreateWorkspaceRequest (optional)
  createWorkspaceRequest: {
    name: "name_example",
  },
};

apiInstance.createWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkspaceRequest** | **CreateWorkspaceRequest**|  |


### Return type

**CreateWorkspaceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created workspace |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWorkspaceScopes**
> CreateWorkspaceScopeResponse createWorkspaceScopes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateWorkspaceScopesRequest = {
  // string
  id: "id_example",
  // CreateWorkspaceScopeRequest (optional)
  createWorkspaceScopeRequest: {
    name: "name_example",
    representation: "representation_example",
    description: "description_example",
  },
};

apiInstance.createWorkspaceScopes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkspaceScopeRequest** | **CreateWorkspaceScopeRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**CreateWorkspaceScopeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created scope |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApiKey**
> DeleteApiKeyResponse deleteApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteApiKeyRequest = {
  // string
  id: "id_example",
  // string
  akid: "akid_example",
};

apiInstance.deleteApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **akid** | [**string**] |  | defaults to undefined


### Return type

**DeleteApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated deleted key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editApiKey**
> EditApiKeyResponse editApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiEditApiKeyRequest = {
  // string
  id: "id_example",
  // string
  akid: "akid_example",
  // EditApiKeyRequest (optional)
  editApiKeyRequest: {
    name: "name_example",
    enabled: true,
    scopes: [
      {
        id: "id_example",
        representation: "representation_example",
        create: true,
        read: true,
        update: true,
        del: true,
      },
    ],
  },
};

apiInstance.editApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editApiKeyRequest** | **EditApiKeyRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **akid** | [**string**] |  | defaults to undefined


### Return type

**EditApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The edited key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateLinkToken**
> GenerateLinkToken200Response generateLinkToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGenerateLinkTokenRequest = {
  // GenerateLinkTokenRequest (optional)
  generateLinkTokenRequest: {
    customerId: "customerId_example",
    workspaceId: "workspaceId_example",
  },
};

apiInstance.generateLinkToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateLinkTokenRequest** | **GenerateLinkTokenRequest**|  |


### Return type

**GenerateLinkToken200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The generated link token |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiKeyById**
> RetrieveApiKeyByIdResponse getApiKeyById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetApiKeyByIdRequest = {
  // string
  id: "id_example",
  // string
  akid: "akid_example",
};

apiInstance.getApiKeyById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **akid** | [**string**] |  | defaults to undefined


### Return type

**RetrieveApiKeyByIdResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiKeys**
> RetrieveApiKeysResponse getApiKeys()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetApiKeysRequest = {
  // string
  id: "id_example",
};

apiInstance.getApiKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RetrieveApiKeysResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API keys |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWorkspace**
> RetrieveWorkspaceResponse getWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RetrieveWorkspaceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWorkspaceById**
> RetrieveWorkspaceByIdResponse getWorkspaceById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorkspaceByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getWorkspaceById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RetrieveWorkspaceByIdResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWorkspaceScopes**
> RetrieveAllWorkspaceScopesResponse getWorkspaceScopes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorkspaceScopesRequest = {
  // string
  id: "id_example",
};

apiInstance.getWorkspaceScopes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RetrieveAllWorkspaceScopesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace scopes |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refillApiKey**
> RefillApiKeyResponse refillApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRefillApiKeyRequest = {
  // string
  id: "id_example",
  // string
  akid: "akid_example",
  // RefillApiKeyRequest (optional)
  refillApiKeyRequest: {
    amount: 0,
  },
};

apiInstance.refillApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refillApiKeyRequest** | **RefillApiKeyRequest**|  |
 **id** | [**string**] |  | defaults to undefined
 **akid** | [**string**] |  | defaults to undefined


### Return type

**RefillApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rotateApiKey**
> RotateApiKeyResponse rotateApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRotateApiKeyRequest = {
  // string
  id: "id_example",
  // string
  akid: "akid_example",
};

apiInstance.rotateApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **akid** | [**string**] |  | defaults to undefined


### Return type

**RotateApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly rotated key |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWorkspace**
> UpdateWorkspaceResponse updateWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateWorkspaceRequest = {
  // string
  id: "id_example",
  // UpdateWorkspaceResponse (optional)
  updateWorkspaceResponse: {
    workspace: {
      id: "id_example",
      name: "name_example",
      teamId: "teamId_example",
      defaultKeyPrefix: "defaultKeyPrefix_example",
      defaultAllowedIPs: [
        "defaultAllowedIPs_example",
      ],
      defaultRateLimitPerSecond: 0,
      defaultExpiration: 0,
      createdAt: "createdAt_example",
      updatedAt: "updatedAt_example",
    },
  },
};

apiInstance.updateWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWorkspaceResponse** | **UpdateWorkspaceResponse**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**UpdateWorkspaceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateLinkToken**
> ValidateLinkToken200Response validateLinkToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiValidateLinkTokenRequest = {
  // string
  token: "token_example",
};

apiInstance.validateLinkToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] |  | defaults to undefined


### Return type

**ValidateLinkToken200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The validation result |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyApiKey**
> VerifyApiKeyResponse verifyApiKey()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiVerifyApiKeyRequest = {
  // VerifyApiKeyRequest (optional)
  verifyApiKeyRequest: {
    key: "key_example",
    requestedScopes: [
      {
        id: "id_example",
        representation: "representation_example",
        create: true,
        read: true,
        update: true,
        del: true,
      },
    ],
    rateLimitConfig: {
      id: "id_example",
      limit: 0,
    },
  },
};

apiInstance.verifyApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyApiKeyRequest** | **VerifyApiKeyRequest**|  |


### Return type

**VerifyApiKeyResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The verification result |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


