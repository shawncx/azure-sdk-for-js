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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const backupId: msRest.OperationURLParameter = {
  parameterPath: "backupId",
  mapper: {
    required: true,
    serializedName: "backupId",
    type: {
      name: "String"
    }
  }
};
export const baseAddress: msRest.OperationURLParameter = {
  parameterPath: "baseAddress",
  mapper: {
    required: true,
    serializedName: "baseAddress",
    type: {
      name: "String"
    }
  }
};
export const billingLocation: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "billingLocation"
  ],
  mapper: {
    serializedName: "billingLocation",
    type: {
      name: "String"
    }
  }
};
export const deleteEmptyServerFarm: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteEmptyServerFarm"
  ],
  mapper: {
    serializedName: "deleteEmptyServerFarm",
    type: {
      name: "Boolean"
    }
  }
};
export const deleteMetrics: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteMetrics"
  ],
  mapper: {
    serializedName: "deleteMetrics",
    type: {
      name: "Boolean"
    }
  }
};
export const detailed: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "detailed"
  ],
  mapper: {
    serializedName: "detailed",
    type: {
      name: "Boolean"
    }
  }
};
export const details: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "details"
  ],
  mapper: {
    serializedName: "details",
    type: {
      name: "Boolean"
    }
  }
};
export const domainOwnershipIdentifierName: msRest.OperationURLParameter = {
  parameterPath: "domainOwnershipIdentifierName",
  mapper: {
    required: true,
    serializedName: "domainOwnershipIdentifierName",
    type: {
      name: "String"
    }
  }
};
export const durationInSeconds: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "durationInSeconds"
  ],
  mapper: {
    serializedName: "durationInSeconds",
    type: {
      name: "Number"
    }
  }
};
export const entityName: msRest.OperationURLParameter = {
  parameterPath: "entityName",
  mapper: {
    required: true,
    serializedName: "entityName",
    type: {
      name: "String"
    }
  }
};
export const environmentName: msRest.OperationQueryParameter = {
  parameterPath: "environmentName",
  mapper: {
    required: true,
    serializedName: "environmentName",
    type: {
      name: "String"
    }
  }
};
export const expiredOnly: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expiredOnly"
  ],
  mapper: {
    serializedName: "expiredOnly",
    type: {
      name: "Boolean"
    }
  }
};
export const featured: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "featured"
  ],
  mapper: {
    serializedName: "featured",
    type: {
      name: "Boolean"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const functionName: msRest.OperationURLParameter = {
  parameterPath: "functionName",
  mapper: {
    required: true,
    serializedName: "functionName",
    type: {
      name: "String"
    }
  }
};
export const gatewayName: msRest.OperationURLParameter = {
  parameterPath: "gatewayName",
  mapper: {
    required: true,
    serializedName: "gatewayName",
    type: {
      name: "String"
    }
  }
};
export const hostingEnvironmentName: msRest.OperationURLParameter = {
  parameterPath: "hostingEnvironmentName",
  mapper: {
    required: true,
    serializedName: "hostingEnvironmentName",
    type: {
      name: "String"
    }
  }
};
export const hostName0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "hostName"
  ],
  mapper: {
    serializedName: "hostName",
    type: {
      name: "String"
    }
  }
};
export const hostName1: msRest.OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    required: true,
    serializedName: "hostName",
    type: {
      name: "String"
    }
  }
};
export const id: msRest.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "String"
    }
  }
};
export const includeSlots: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeSlots"
  ],
  mapper: {
    serializedName: "includeSlots",
    type: {
      name: "Boolean"
    }
  }
};
export const instanceId: msRest.OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    required: true,
    serializedName: "instanceId",
    type: {
      name: "String"
    }
  }
};
export const linuxDynamicWorkersEnabled: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "linuxDynamicWorkersEnabled"
  ],
  mapper: {
    serializedName: "linuxDynamicWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};
export const linuxWorkersEnabled: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "linuxWorkersEnabled"
  ],
  mapper: {
    serializedName: "linuxWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};
export const maxFrameLength: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxFrameLength"
  ],
  mapper: {
    serializedName: "maxFrameLength",
    type: {
      name: "Number"
    }
  }
};
export const name: msRest.OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const namespaceName: msRest.OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    required: true,
    serializedName: "namespaceName",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "String"
    }
  }
};
export const osType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "osType"
  ],
  mapper: {
    serializedName: "osType",
    type: {
      name: "String"
    }
  }
};
export const osTypeSelected: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "osTypeSelected"
  ],
  mapper: {
    serializedName: "osTypeSelected",
    type: {
      name: "String"
    }
  }
};
export const premierAddOnName: msRest.OperationURLParameter = {
  parameterPath: "premierAddOnName",
  mapper: {
    required: true,
    serializedName: "premierAddOnName",
    type: {
      name: "String"
    }
  }
};
export const processId: msRest.OperationURLParameter = {
  parameterPath: "processId",
  mapper: {
    required: true,
    serializedName: "processId",
    type: {
      name: "String"
    }
  }
};
export const publicCertificateName: msRest.OperationURLParameter = {
  parameterPath: "publicCertificateName",
  mapper: {
    required: true,
    serializedName: "publicCertificateName",
    type: {
      name: "String"
    }
  }
};
export const recommendationId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "recommendationId"
  ],
  mapper: {
    serializedName: "recommendationId",
    type: {
      name: "String"
    }
  }
};
export const relayName: msRest.OperationURLParameter = {
  parameterPath: "relayName",
  mapper: {
    required: true,
    serializedName: "relayName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+[^\.]$/
    },
    type: {
      name: "String"
    }
  }
};
export const routeName: msRest.OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    required: true,
    serializedName: "routeName",
    type: {
      name: "String"
    }
  }
};
export const sasUrl: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sasUrl"
  ],
  mapper: {
    serializedName: "sasUrl",
    type: {
      name: "String"
    }
  }
};
export const siteExtensionId: msRest.OperationURLParameter = {
  parameterPath: "siteExtensionId",
  mapper: {
    required: true,
    serializedName: "siteExtensionId",
    type: {
      name: "String"
    }
  }
};
export const siteName: msRest.OperationURLParameter = {
  parameterPath: "siteName",
  mapper: {
    required: true,
    serializedName: "siteName",
    type: {
      name: "String"
    }
  }
};
export const skipToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skipToken"
  ],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String"
    }
  }
};
export const sku: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sku"
  ],
  mapper: {
    serializedName: "sku",
    type: {
      name: "String"
    }
  }
};
export const slot: msRest.OperationURLParameter = {
  parameterPath: "slot",
  mapper: {
    required: true,
    serializedName: "slot",
    type: {
      name: "String"
    }
  }
};
export const snapshotId: msRest.OperationURLParameter = {
  parameterPath: "snapshotId",
  mapper: {
    required: true,
    serializedName: "snapshotId",
    type: {
      name: "String"
    }
  }
};
export const softRestart: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "softRestart"
  ],
  mapper: {
    serializedName: "softRestart",
    type: {
      name: "Boolean"
    }
  }
};
export const sourceControlType: msRest.OperationURLParameter = {
  parameterPath: "sourceControlType",
  mapper: {
    required: true,
    serializedName: "sourceControlType",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const subscriptionName: msRest.OperationQueryParameter = {
  parameterPath: "subscriptionName",
  mapper: {
    required: true,
    serializedName: "subscriptionName",
    type: {
      name: "String"
    }
  }
};
export const synchronous: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "synchronous"
  ],
  mapper: {
    serializedName: "synchronous",
    type: {
      name: "Boolean"
    }
  }
};
export const threadId: msRest.OperationURLParameter = {
  parameterPath: "threadId",
  mapper: {
    required: true,
    serializedName: "threadId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "String"
    }
  }
};
export const updateSeen: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "updateSeen"
  ],
  mapper: {
    serializedName: "updateSeen",
    type: {
      name: "Boolean"
    }
  }
};
export const view: msRest.OperationURLParameter = {
  parameterPath: "view",
  mapper: {
    required: true,
    serializedName: "view",
    type: {
      name: "String"
    }
  }
};
export const vnetName: msRest.OperationURLParameter = {
  parameterPath: "vnetName",
  mapper: {
    required: true,
    serializedName: "vnetName",
    type: {
      name: "String"
    }
  }
};
export const webJobName: msRest.OperationURLParameter = {
  parameterPath: "webJobName",
  mapper: {
    required: true,
    serializedName: "webJobName",
    type: {
      name: "String"
    }
  }
};
export const workerName: msRest.OperationURLParameter = {
  parameterPath: "workerName",
  mapper: {
    required: true,
    serializedName: "workerName",
    type: {
      name: "String"
    }
  }
};
export const xenonWorkersEnabled: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "xenonWorkersEnabled"
  ],
  mapper: {
    serializedName: "xenonWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};