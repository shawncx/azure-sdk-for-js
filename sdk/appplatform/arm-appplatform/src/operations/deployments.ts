/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/deploymentsMappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClientContext } from "../appPlatformManagementClientContext";

/** Class representing a Deployments. */
export class Deployments {
  private readonly client: AppPlatformManagementClientContext;

  /**
   * Create a Deployments.
   * @param {AppPlatformManagementClientContext} client Reference to the service client.
   */
  constructor(client: AppPlatformManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a Deployment and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentResource>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentResource>): void;
  get(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentResource>, callback?: msRest.ServiceCallback<Models.DeploymentResource>): Promise<Models.DeploymentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeploymentsGetResponse>;
  }

  /**
   * Create a new Deployment or update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the create or update operation
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, deploymentResource: Models.DeploymentResource, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serviceName,appName,deploymentName,deploymentResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeploymentsCreateOrUpdateResponse>;
  }

  /**
   * Operation to delete a Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serviceName,appName,deploymentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Operation to update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, deploymentResource: Models.DeploymentResource, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serviceName,appName,deploymentName,deploymentResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DeploymentsUpdateResponse>;
  }

  /**
   * Handles requests to list all resources in an App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListResponse>
   */
  list(resourceGroupName: string, serviceName: string, appName: string, options?: Models.DeploymentsListOptionalParams): Promise<Models.DeploymentsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, appName: string, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, appName: string, options: Models.DeploymentsListOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  list(resourceGroupName: string, serviceName: string, appName: string, options?: Models.DeploymentsListOptionalParams | msRest.ServiceCallback<Models.DeploymentResourceCollection>, callback?: msRest.ServiceCallback<Models.DeploymentResourceCollection>): Promise<Models.DeploymentsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DeploymentsListResponse>;
  }

  /**
   * List deployments for a certain service
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListForClusterResponse>
   */
  listForCluster(resourceGroupName: string, serviceName: string, options?: Models.DeploymentsListForClusterOptionalParams): Promise<Models.DeploymentsListForClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param callback The callback
   */
  listForCluster(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForCluster(resourceGroupName: string, serviceName: string, options: Models.DeploymentsListForClusterOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  listForCluster(resourceGroupName: string, serviceName: string, options?: Models.DeploymentsListForClusterOptionalParams | msRest.ServiceCallback<Models.DeploymentResourceCollection>, callback?: msRest.ServiceCallback<Models.DeploymentResourceCollection>): Promise<Models.DeploymentsListForClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listForClusterOperationSpec,
      callback) as Promise<Models.DeploymentsListForClusterResponse>;
  }

  /**
   * Start the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,serviceName,appName,deploymentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stop the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,serviceName,appName,deploymentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Restart the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  restart(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRestart(resourceGroupName,serviceName,appName,deploymentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get deployment log file URL
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsGetLogFileUrlResponse>
   */
  getLogFileUrl(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsGetLogFileUrlResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param callback The callback
   */
  getLogFileUrl(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.LogFileUrlResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogFileUrl(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LogFileUrlResponse>): void;
  getLogFileUrl(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LogFileUrlResponse>, callback?: msRest.ServiceCallback<Models.LogFileUrlResponse>): Promise<Models.DeploymentsGetLogFileUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      getLogFileUrlOperationSpec,
      callback) as Promise<Models.DeploymentsGetLogFileUrlResponse>;
  }

  /**
   * Create a new Deployment or update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the create or update operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, deploymentResource: Models.DeploymentResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        deploymentResource,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Operation to delete a Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Operation to update an exiting Deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param deploymentResource Parameters for the update operation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, deploymentResource: Models.DeploymentResource, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        deploymentResource,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Start the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stop the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Restart the deployment.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param deploymentName The name of the Deployment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestart(resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        appName,
        deploymentName,
        options
      },
      beginRestartOperationSpec,
      options);
  }

  /**
   * Handles requests to list all resources in an App.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentResourceCollection>, callback?: msRest.ServiceCallback<Models.DeploymentResourceCollection>): Promise<Models.DeploymentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DeploymentsListNextResponse>;
  }

  /**
   * List deployments for a certain service
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentsListForClusterNextResponse>
   */
  listForClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentsListForClusterNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForClusterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForClusterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentResourceCollection>): void;
  listForClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentResourceCollection>, callback?: msRest.ServiceCallback<Models.DeploymentResourceCollection>): Promise<Models.DeploymentsListForClusterNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForClusterNextOperationSpec,
      callback) as Promise<Models.DeploymentsListForClusterNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.version
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.version
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getLogFileUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LogFileUrlResponse
    },
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "deploymentResource",
    mapper: {
      ...Mappers.DeploymentResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResource
    },
    201: {
      bodyMapper: Mappers.DeploymentResource
    },
    202: {
      bodyMapper: Mappers.DeploymentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "deploymentResource",
    mapper: {
      ...Mappers.DeploymentResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResource
    },
    202: {
      bodyMapper: Mappers.DeploymentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRestartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForClusterNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
