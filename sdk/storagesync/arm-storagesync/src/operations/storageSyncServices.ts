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
import * as Models from "../models";
import * as Mappers from "../models/storageSyncServicesMappers";
import * as Parameters from "../models/parameters";
import { StorageSyncManagementClientContext } from "../storageSyncManagementClientContext";

/** Class representing a StorageSyncServices. */
export class StorageSyncServices {
  private readonly client: StorageSyncManagementClientContext;

  /**
   * Create a StorageSyncServices.
   * @param {StorageSyncManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageSyncManagementClientContext) {
    this.client = client;
  }

  /**
   * Check the give namespace name availability.
   * @param locationName The desired region for the name check.
   * @param parameters Parameters to check availability of the given namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesCheckNameAvailabilityResponse>
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesCheckNameAvailabilityResponse>;
  /**
   * @param locationName The desired region for the name check.
   * @param parameters Parameters to check availability of the given namespace name
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  /**
   * @param locationName The desired region for the name check.
   * @param parameters Parameters to check availability of the given namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): Promise<Models.StorageSyncServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.StorageSyncServicesCheckNameAvailabilityResponse>;
  }

  /**
   * Create a new StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param parameters Storage Sync Service resource name.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesCreateResponse>
   */
  create(resourceGroupName: string, storageSyncServiceName: string, parameters: Models.StorageSyncServiceCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param parameters Storage Sync Service resource name.
   * @param callback The callback
   */
  create(resourceGroupName: string, storageSyncServiceName: string, parameters: Models.StorageSyncServiceCreateParameters, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param parameters Storage Sync Service resource name.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, storageSyncServiceName: string, parameters: Models.StorageSyncServiceCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  create(resourceGroupName: string, storageSyncServiceName: string, parameters: Models.StorageSyncServiceCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageSyncService>, callback?: msRest.ServiceCallback<Models.StorageSyncService>): Promise<Models.StorageSyncServicesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.StorageSyncServicesCreateResponse>;
  }

  /**
   * Get a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesGetResponse>
   */
  get(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  get(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageSyncService>, callback?: msRest.ServiceCallback<Models.StorageSyncService>): Promise<Models.StorageSyncServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StorageSyncServicesGetResponse>;
  }

  /**
   * Patch a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesUpdateResponse>
   */
  update(resourceGroupName: string, storageSyncServiceName: string, options?: Models.StorageSyncServicesUpdateOptionalParams): Promise<Models.StorageSyncServicesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param callback The callback
   */
  update(resourceGroupName: string, storageSyncServiceName: string, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, storageSyncServiceName: string, options: Models.StorageSyncServicesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.StorageSyncService>): void;
  update(resourceGroupName: string, storageSyncServiceName: string, options?: Models.StorageSyncServicesUpdateOptionalParams | msRest.ServiceCallback<Models.StorageSyncService>, callback?: msRest.ServiceCallback<Models.StorageSyncService>): Promise<Models.StorageSyncServicesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.StorageSyncServicesUpdateResponse>;
  }

  /**
   * Delete a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesDeleteResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.StorageSyncServicesDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.StorageSyncServicesDeleteResponse>;
  }

  /**
   * Get a StorageSyncService list by Resource group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageSyncServiceArray>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageSyncServiceArray>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageSyncServiceArray>, callback?: msRest.ServiceCallback<Models.StorageSyncServiceArray>): Promise<Models.StorageSyncServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.StorageSyncServicesListByResourceGroupResponse>;
  }

  /**
   * Get a StorageSyncService list by subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.StorageSyncServicesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.StorageSyncServicesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.StorageSyncServiceArray>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageSyncServiceArray>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageSyncServiceArray>, callback?: msRest.ServiceCallback<Models.StorageSyncServiceArray>): Promise<Models.StorageSyncServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.StorageSyncServicesListBySubscriptionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/locations/{locationName}/checkNameAvailability",
  urlParameters: [
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.StorageSyncServiceCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.StorageSyncServiceUpdateParameters
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncServiceArray,
      headersMapper: Mappers.StorageSyncServicesListByResourceGroupHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/storageSyncServices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncServiceArray,
      headersMapper: Mappers.StorageSyncServicesListBySubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};
