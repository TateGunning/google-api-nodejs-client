// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace migrationcenter_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Migration Center API
   *
   * A unified platform that helps you accelerate your end-to-end cloud journey from your current on-premises or cloud environments to Google Cloud.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const migrationcenter = google.migrationcenter('v1alpha1');
   * ```
   */
  export class Migrationcenter {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A request to add assets to a group.
   */
  export interface Schema$AddAssetsToGroupRequest {
    /**
     * Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.
     */
    allowExisting?: boolean | null;
    /**
     * Required. List of assets to be added. The maximum number of assets that can be added in a single request is 1000.
     */
    assets?: Schema$AssetList;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * A request to aggregate one or more values.
   */
  export interface Schema$AggregateAssetsValuesRequest {
    /**
     * Array of aggregations to perform. Up to 25 aggregations can be defined.
     */
    aggregations?: Schema$Aggregation[];
    /**
     * Optional. The aggregation will be performed on assets that match the provided filter.
     */
    filter?: string | null;
    /**
     * Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
     */
    showHidden?: boolean | null;
  }
  /**
   * A response to a request to aggregated assets values.
   */
  export interface Schema$AggregateAssetsValuesResponse {
    /**
     * The aggregation results.
     */
    results?: Schema$AggregationResult[];
  }
  /**
   * Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.
   */
  export interface Schema$Aggregation {
    /**
     * Count the number of matching objects.
     */
    count?: Schema$AggregationCount;
    /**
     * The name of the field on which to aggregate.
     */
    field?: string | null;
    /**
     * Creates a frequency distribution of all field values.
     */
    frequency?: Schema$AggregationFrequency;
    /**
     * Creates a bucketed histogram of field values.
     */
    histogram?: Schema$AggregationHistogram;
    /**
     * Sum over a numeric field.
     */
    sum?: Schema$AggregationSum;
  }
  /**
   * Object count.
   */
  export interface Schema$AggregationCount {}
  /**
   * Frequency distribution of all field values.
   */
  export interface Schema$AggregationFrequency {}
  /**
   * Histogram of bucketed assets counts by field value.
   */
  export interface Schema$AggregationHistogram {
    /**
     * Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds.
     */
    lowerBounds?: number[] | null;
  }
  /**
   * Message describing a result of an aggregation.
   */
  export interface Schema$AggregationResult {
    count?: Schema$AggregationResultCount;
    field?: string | null;
    frequency?: Schema$AggregationResultFrequency;
    histogram?: Schema$AggregationResultHistogram;
    sum?: Schema$AggregationResultSum;
  }
  /**
   * The result of a count aggregation.
   */
  export interface Schema$AggregationResultCount {
    value?: string | null;
  }
  /**
   * The result of a frequency distribution aggregation.
   */
  export interface Schema$AggregationResultFrequency {
    values?: {[key: string]: string} | null;
  }
  /**
   * The result of a bucketed histogram aggregation.
   */
  export interface Schema$AggregationResultHistogram {
    /**
     * Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.
     */
    buckets?: Schema$AggregationResultHistogramBucket[];
  }
  /**
   * A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.
   */
  export interface Schema$AggregationResultHistogramBucket {
    /**
     * Count of items in the bucket.
     */
    count?: string | null;
    /**
     * Lower bound - inclusive.
     */
    lowerBound?: number | null;
    /**
     * Upper bound - exclusive.
     */
    upperBound?: number | null;
  }
  /**
   * The result of a sum aggregation.
   */
  export interface Schema$AggregationResultSum {
    value?: number | null;
  }
  /**
   * Sum of field values.
   */
  export interface Schema$AggregationSum {}
  /**
   * An asset represents a resource in your environment. Asset types include virtual machines and databases.
   */
  export interface Schema$Asset {
    /**
     * Output only. The list of groups that the asset is assigned to.
     */
    assignedGroups?: string[] | null;
    /**
     * Generic asset attributes.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the asset was created.
     */
    createTime?: string | null;
    /**
     * Output only. Asset information specific for database deployments.
     */
    databaseDeploymentDetails?: Schema$DatabaseDeploymentDetails;
    /**
     * Output only. Asset information specific for logical databases.
     */
    databaseDetails?: Schema$DatabaseDetails;
    /**
     * Optional. Indicates if the asset is hidden.
     */
    hidden?: boolean | null;
    /**
     * Optional. An optional reason for marking this asset as hidden.
     */
    hideReason?: string | null;
    /**
     * Output only. The timestamp when the asset was marked as hidden.
     */
    hideTime?: string | null;
    /**
     * Output only. The list of insights associated with the asset.
     */
    insightList?: Schema$InsightList;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Asset information specific for virtual machines.
     */
    machineDetails?: Schema$MachineDetails;
    /**
     * Output only. The full name of the asset.
     */
    name?: string | null;
    /**
     * Performance data for the asset.
     */
    performanceData?: Schema$AssetPerformanceData;
    /**
     * Output only. The list of sources contributing to the asset.
     */
    sources?: string[] | null;
    /**
     * Output only. Server generated human readable name of the asset.
     */
    title?: string | null;
    /**
     * Output only. The timestamp when the asset was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. Asset information specific for virtual machines.
     */
    virtualMachineDetails?: Schema$VirtualMachineDetails;
  }
  /**
   * Contains data reported from an inventory source on an asset.
   */
  export interface Schema$AssetFrame {
    /**
     * Generic asset attributes.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Optional. Frame collection type, if not specified the collection type will be based on the source type of the source the frame was reported on.
     */
    collectionType?: string | null;
    /**
     * Asset information specific for database deployments.
     */
    databaseDeploymentDetails?: Schema$DatabaseDeploymentDetails;
    /**
     * Asset information specific for logical databases.
     */
    databaseDetails?: Schema$DatabaseDetails;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Asset information specific for virtual and physical machines.
     */
    machineDetails?: Schema$MachineDetails;
    /**
     * Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored.
     */
    performanceSamples?: Schema$PerformanceSample[];
    /**
     * The time the data was reported.
     */
    reportTime?: string | null;
    /**
     * Optional. Trace token is optionally provided to assist with debugging and traceability.
     */
    traceToken?: string | null;
    /**
     * Asset information specific for virtual machines.
     */
    virtualMachineDetails?: Schema$VirtualMachineDetails;
  }
  /**
   * Lists the asset IDs of all assets.
   */
  export interface Schema$AssetList {
    /**
     * Required. A list of asset IDs
     */
    assetIds?: string[] | null;
  }
  /**
   * Performance data for an asset.
   */
  export interface Schema$AssetPerformanceData {
    /**
     * Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent.
     */
    dailyResourceUsageAggregations?: Schema$DailyResourceUsageAggregation[];
  }
  /**
   * Assets export job message.
   */
  export interface Schema$AssetsExportJob {
    /**
     * Optional. Conditions for selecting assets to export.
     */
    condition?: Schema$AssetsExportJobExportCondition;
    /**
     * Output only. Resource creation time.
     */
    createTime?: string | null;
    /**
     * Export asset inventory details.
     */
    inventory?: Schema$AssetsExportJobInventory;
    /**
     * Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. Resource name.
     */
    name?: string | null;
    /**
     * Export data regarding asset network dependencies.
     */
    networkDependencies?: Schema$AssetsExportJobNetworkDependencies;
    /**
     * Export asset with performance data.
     */
    performanceData?: Schema$AssetsExportJobPerformanceData;
    /**
     * Output only. Recent non expired executions of the job.
     */
    recentExecutions?: Schema$AssetsExportJobExecution[];
    /**
     * Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
     */
    showHidden?: boolean | null;
    /**
     * Export to Cloud Storage files downloadable using signed URIs.
     */
    signedUriDestination?: Schema$SignedUriDestination;
    /**
     * Output only. Resource update time.
     */
    updateTime?: string | null;
  }
  /**
   * Execution status of assets export job.
   */
  export interface Schema$AssetsExportJobExecution {
    /**
     * Output only. Completion time of the export.
     */
    endTime?: string | null;
    /**
     * Output only. Globally unique identifier of the execution.
     */
    executionId?: string | null;
    /**
     * Output only. Expiration time for the export and artifacts.
     */
    expireTime?: string | null;
    /**
     * Output only. Number of assets requested for export after resolving the requested filters.
     */
    requestedAssetCount?: number | null;
    /**
     * Output only. Result of the export execution.
     */
    result?: Schema$AssetsExportJobExecutionResult;
    /**
     * Output only. Execution timestamp.
     */
    startTime?: string | null;
  }
  /**
   * Contains the result of the assets export.
   */
  export interface Schema$AssetsExportJobExecutionResult {
    /**
     * Output only. Error encountered during export.
     */
    error?: Schema$Status;
    /**
     * Output only. List of output files.
     */
    outputFiles?: Schema$OutputFileList;
    /**
     * Output only. Signed URLs for downloading export artifacts.
     */
    signedUris?: Schema$SignedUris;
  }
  /**
   * Conditions for selecting assets to export.
   */
  export interface Schema$AssetsExportJobExportCondition {
    /**
     * Optional. Assets filter, supports the same syntax as asset listing.
     */
    filter?: string | null;
  }
  /**
   * Configuration for asset inventory details exports.
   */
  export interface Schema$AssetsExportJobInventory {}
  /**
   * Configuration for network dependencies exports.
   */
  export interface Schema$AssetsExportJobNetworkDependencies {
    /**
     * Optional. When this value is set to a positive integer, network connections data will be returned for the most recent days for which data is available. When this value is unset (or set to zero), all available data is returned.
     */
    maxDays?: number | null;
  }
  /**
   * Configuration for performance data exports.
   */
  export interface Schema$AssetsExportJobPerformanceData {
    /**
     * Optional. When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. When this value is unset (or set to zero), all available data is returned. The maximum value is 420; values above 420 will be coerced to 420. If unset (0 value) a default value of 40 will be used.
     */
    maxDays?: number | null;
  }
  /**
   * AWS EC2 specific details.
   */
  export interface Schema$AwsEc2PlatformDetails {
    /**
     * Optional. Whether the machine is hyperthreaded.
     */
    hyperthreading?: string | null;
    /**
     * The location of the machine in the AWS format.
     */
    location?: string | null;
    /**
     * AWS platform's machine type label.
     */
    machineTypeLabel?: string | null;
  }
  /**
   * Specific details for an AWS RDS database deployment.
   */
  export interface Schema$AwsRds {}
  /**
   * Azure VM specific details.
   */
  export interface Schema$AzureVmPlatformDetails {
    /**
     * Whether the machine is hyperthreaded.
     */
    hyperthreading?: string | null;
    /**
     * The location of the machine in the Azure format.
     */
    location?: string | null;
    /**
     * Azure platform's machine type label.
     */
    machineTypeLabel?: string | null;
    /**
     * Azure platform's provisioning state.
     */
    provisioningState?: string | null;
  }
  /**
   * A request to delete a list of asset.
   */
  export interface Schema$BatchDeleteAssetsRequest {
    /**
     * Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`.
     */
    allowMissing?: boolean | null;
    /**
     * Optional. Optional cascading rules for deleting related assets.
     */
    cascadingRules?: Schema$CascadingRule[];
    /**
     * Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project\}/locations/{location\}/assets/{name\}.
     */
    names?: string[] | null;
  }
  /**
   * A request to update a list of assets.
   */
  export interface Schema$BatchUpdateAssetsRequest {
    /**
     * Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch.
     */
    requests?: Schema$UpdateAssetRequest[];
  }
  /**
   * Response for updating a list of assets.
   */
  export interface Schema$BatchUpdateAssetsResponse {
    /**
     * Update asset content. The content only includes values after field mask being applied.
     */
    assets?: Schema$Asset[];
  }
  /**
   * Details about the BIOS.
   */
  export interface Schema$BiosDetails {
    /**
     * BIOS manufacturer.
     */
    biosManufacturer?: string | null;
    /**
     * BIOS name.
     */
    biosName?: string | null;
    /**
     * BIOS release date.
     */
    biosReleaseDate?: string | null;
    /**
     * BIOS version.
     */
    biosVersion?: string | null;
    /**
     * SMBIOS UUID.
     */
    smbiosUuid?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Cascading rule for related logical DBs.
   */
  export interface Schema$CascadeLogicalDBsRule {}
  /**
   * Specifies cascading rules for traversing relations.
   */
  export interface Schema$CascadingRule {
    /**
     * Cascading rule for related logical DBs.
     */
    cascadeLogicalDbs?: Schema$CascadeLogicalDBsRule;
  }
  /**
   * Cloud database migration target.
   */
  export interface Schema$CloudDatabaseMigrationTarget {
    /**
     * Cloud SQL for MySQL database shape.
     */
    cloudSqlForMysqlShape?: Schema$CloudSqlForMySqlShape;
    /**
     * Cloud SQL for PostgreSQL database shape.
     */
    cloudSqlForPostgresqlShape?: Schema$CloudSqlForPostgreSqlShape;
    /**
     * Cloud SQL for SQL Server database shape.
     */
    cloudSqlShape?: Schema$CloudSqlForSqlServerShape;
  }
  /**
   * Cloud SQL for MySQL database shape.
   */
  export interface Schema$CloudSqlForMySqlShape {
    /**
     * Output only. Predicted backup storage size in GiB.
     */
    backupStorageGb?: number | null;
    /**
     * Output only. Cloud SQL edition.
     */
    edition?: string | null;
    /**
     * Output only. Predicted Network Out traffic GiB per month.
     */
    egressGbPerMonth?: string | null;
    /**
     * Output only. Number of logical cores.
     */
    logicalCoreCount?: number | null;
    /**
     * Output only. Predicted amount of memory in MiB.
     */
    memoryMb?: number | null;
    /**
     * Output only. Predicted storage shape.
     */
    storage?: Schema$ComputeStorageDescriptor;
    /**
     * Output only. MySQL version to be used on the Cloud SQL for MySQL instance.
     */
    version?: string | null;
    /**
     * Output only. Cloud SQL zone availability.
     */
    zoneAvailability?: string | null;
  }
  /**
   * Cloud SQL for PostgreSQL database shape.
   */
  export interface Schema$CloudSqlForPostgreSqlShape {
    /**
     * Output only. Predicted backup storage size in GiB.
     */
    backupStorageGb?: number | null;
    /**
     * Output only. Cloud SQL edition.
     */
    edition?: string | null;
    /**
     * Output only. Predicted Network Out traffic GiB per month.
     */
    egressGbPerMonth?: string | null;
    /**
     * Output only. Number of logical cores.
     */
    logicalCoreCount?: number | null;
    /**
     * Output only. Predicted amount of memory in MiB.
     */
    memoryMb?: number | null;
    /**
     * Output only. Predicted storage shape.
     */
    storage?: Schema$ComputeStorageDescriptor;
    /**
     * Output only. PostgreSql version to be used on the Cloud SQL for PostgreSql instance.
     */
    version?: string | null;
    /**
     * Output only. Cloud SQL zone availability.
     */
    zoneAvailability?: string | null;
  }
  /**
   * Cloud SQL for SQL Server database shape.
   */
  export interface Schema$CloudSqlForSqlServerShape {
    /**
     * Output only. Predicted backup storage size in GiB.
     */
    backupStorageGb?: number | null;
    /**
     * Output only. Cloud SQL edition.
     */
    edition?: string | null;
    /**
     * Output only. Predicted Network Out traffic GiB per month.
     */
    egressGbPerMonth?: string | null;
    /**
     * Output only. Number of logical cores.
     */
    logicalCoreCount?: number | null;
    /**
     * Output only. Predicted amount of memory in MiB.
     */
    memoryMb?: number | null;
    /**
     * Output only. Whether simultaneous multithreading is enabled (see https://cloud.google.com/sql/docs/sqlserver/create-instance#smt-create-instance).
     */
    smtEnabled?: boolean | null;
    /**
     * Output only. Predicted storage shape.
     */
    storage?: Schema$ComputeStorageDescriptor;
    /**
     * Output only. Microsoft SQL Server version to be used on the Cloud SQL for SQL server instance.
     */
    version?: string | null;
    /**
     * Output only. Cloud SQL zone availability.
     */
    zoneAvailability?: string | null;
  }
  /**
   * Compute engine migration target.
   */
  export interface Schema$ComputeEngineMigrationTarget {
    /**
     * Description of the suggested shape for the migration target.
     */
    shape?: Schema$ComputeEngineShapeDescriptor;
  }
  /**
   * The user preferences relating to Compute Engine target platform.
   */
  export interface Schema$ComputeEnginePreferences {
    /**
     * License type to consider when calculating costs for operating systems. If unspecified, costs are calculated based on the default licensing plan. If os_pricing_preferences is specified, it overrides this field.
     */
    licenseType?: string | null;
    /**
     * Preferences concerning the machine types to consider on Compute Engine.
     */
    machinePreferences?: Schema$MachinePreferences;
    /**
     * Optional. Preferences for multithreading support on Windows Server.
     */
    multithreading?: string | null;
    /**
     * Optional. Pricing options for OS images.
     */
    osPricingPreferences?: Schema$OperatingSystemPricingPreferences;
    /**
     * Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.
     */
    persistentDiskType?: string | null;
  }
  /**
   * Compute Engine target shape descriptor.
   */
  export interface Schema$ComputeEngineShapeDescriptor {
    /**
     * Output only. Number of logical cores.
     */
    logicalCoreCount?: number | null;
    /**
     * Output only. Compute Engine machine type.
     */
    machineType?: string | null;
    /**
     * Output only. Memory in mebibytes.
     */
    memoryMb?: number | null;
    /**
     * Output only. Number of physical cores.
     */
    physicalCoreCount?: number | null;
    /**
     * Output only. Compute Engine machine series.
     */
    series?: string | null;
    /**
     * Output only. Whether simultaneous multithreading is enabled (see https://cloud.google.com/compute/docs/instances/set-threads-per-core).
     */
    smtEnabled?: boolean | null;
    /**
     * Output only. Compute Engine storage. Never empty.
     */
    storage?: Schema$ComputeStorageDescriptor[];
  }
  /**
   * Compute engine sole tenant migration target.
   */
  export interface Schema$ComputeEngineSoleTenantMigrationTarget {}
  /**
   * Compute Engine storage option descriptor.
   */
  export interface Schema$ComputeStorageDescriptor {
    /**
     * Disk size in GiB.
     */
    sizeGb?: number | null;
    /**
     * Output only. Disk type backing the storage.
     */
    type?: string | null;
  }
  /**
   * CPU usage sample.
   */
  export interface Schema$CpuUsageSample {
    /**
     * Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.
     */
    utilizedPercentage?: number | null;
  }
  /**
   * Contains a single output file of type CSV.
   */
  export interface Schema$CsvOutputFile {
    /**
     * Output only. Number of columns in the file.
     */
    columnsCount?: number | null;
    /**
     * Output only. Number of rows in the file.
     */
    rowCount?: number | null;
    /**
     * Output only. Signed URI destination.
     */
    signedUri?: Schema$SignedUri;
  }
  /**
   * Usage data aggregation for a single day.
   */
  export interface Schema$DailyResourceUsageAggregation {
    /**
     * CPU usage.
     */
    cpu?: Schema$DailyResourceUsageAggregationCPU;
    /**
     * Aggregation date. Day boundaries are at midnight UTC.
     */
    date?: Schema$Date;
    /**
     * Disk usage.
     */
    disk?: Schema$DailyResourceUsageAggregationDisk;
    /**
     * Memory usage.
     */
    memory?: Schema$DailyResourceUsageAggregationMemory;
    /**
     * Network usage.
     */
    network?: Schema$DailyResourceUsageAggregationNetwork;
  }
  /**
   * Statistical aggregation of CPU usage.
   */
  export interface Schema$DailyResourceUsageAggregationCPU {
    /**
     * CPU utilization percentage.
     */
    utilizationPercentage?: Schema$DailyResourceUsageAggregationStats;
  }
  /**
   * Statistical aggregation of disk usage.
   */
  export interface Schema$DailyResourceUsageAggregationDisk {
    /**
     * Disk I/O operations per second.
     */
    iops?: Schema$DailyResourceUsageAggregationStats;
    /**
     * Disk read I/O operations per second.
     */
    readIops?: Schema$DailyResourceUsageAggregationStats;
    /**
     * Disk write I/O operations per second.
     */
    writeIops?: Schema$DailyResourceUsageAggregationStats;
  }
  /**
   * Statistical aggregation of memory usage.
   */
  export interface Schema$DailyResourceUsageAggregationMemory {
    /**
     * Memory utilization percentage.
     */
    utilizationPercentage?: Schema$DailyResourceUsageAggregationStats;
  }
  /**
   * Statistical aggregation of network usage.
   */
  export interface Schema$DailyResourceUsageAggregationNetwork {
    /**
     * Network egress in B/s.
     */
    egressBps?: Schema$DailyResourceUsageAggregationStats;
    /**
     * Network ingress in B/s.
     */
    ingressBps?: Schema$DailyResourceUsageAggregationStats;
  }
  /**
   * Statistical aggregation of samples for a single resource usage.
   */
  export interface Schema$DailyResourceUsageAggregationStats {
    /**
     * Average usage value.
     */
    average?: number | null;
    /**
     * Median usage value.
     */
    median?: number | null;
    /**
     * 95th percentile usage value.
     */
    ninteyFifthPercentile?: number | null;
    /**
     * Peak usage value.
     */
    peak?: number | null;
  }
  /**
   * The details of a database deployment asset.
   */
  export interface Schema$DatabaseDeploymentDetails {
    /**
     * Output only. Aggregated stats for the database deployment.
     */
    aggregatedStats?: Schema$DatabaseDeploymentDetailsAggregatedStats;
    /**
     * Optional. Details of an AWS RDS instance.
     */
    awsRds?: Schema$AwsRds;
    /**
     * The database deployment edition.
     */
    edition?: string | null;
    /**
     * The database deployment generated ID.
     */
    generatedId?: string | null;
    /**
     * A manual unique ID set by the user.
     */
    manualUniqueId?: string | null;
    /**
     * Details of a MYSQL database deployment.
     */
    mysql?: Schema$MysqlDatabaseDeployment;
    /**
     * Details of a PostgreSQL database deployment.
     */
    postgresql?: Schema$PostgreSqlDatabaseDeployment;
    /**
     * Details of a Microsoft SQL Server database deployment.
     */
    sqlServer?: Schema$SqlServerDatabaseDeployment;
    /**
     * Details of the database deployment topology.
     */
    topology?: Schema$DatabaseDeploymentTopology;
    /**
     * The database deployment version.
     */
    version?: string | null;
  }
  /**
   * Aggregated stats for the database deployment.
   */
  export interface Schema$DatabaseDeploymentDetailsAggregatedStats {
    /**
     * Output only. The number of databases in the deployment.
     */
    databaseCount?: number | null;
  }
  /**
   * Details of database deployment's topology.
   */
  export interface Schema$DatabaseDeploymentTopology {
    /**
     * Optional. Number of total logical cores.
     */
    coreCount?: number | null;
    /**
     * Optional. Number of total logical cores limited by db deployment.
     */
    coreLimit?: number | null;
    /**
     * Optional. Disk allocated in bytes.
     */
    diskAllocatedBytes?: string | null;
    /**
     * Optional. Disk used in bytes.
     */
    diskUsedBytes?: string | null;
    /**
     * Optional. List of database instances.
     */
    instances?: Schema$DatabaseInstance[];
    /**
     * Optional. Total memory in bytes.
     */
    memoryBytes?: string | null;
    /**
     * Optional. Total memory in bytes limited by db deployment.
     */
    memoryLimitBytes?: string | null;
    /**
     * Optional. Number of total physical cores.
     */
    physicalCoreCount?: number | null;
    /**
     * Optional. Number of total physical cores limited by db deployment.
     */
    physicalCoreLimit?: number | null;
  }
  /**
   * Details of a logical database.
   */
  export interface Schema$DatabaseDetails {
    /**
     * The allocated storage for the database in bytes.
     */
    allocatedStorageBytes?: string | null;
    /**
     * The name of the database.
     */
    databaseName?: string | null;
    /**
     * The parent database deployment that contains the logical database.
     */
    parentDatabaseDeployment?: Schema$DatabaseDetailsParentDatabaseDeployment;
    /**
     * The database schemas.
     */
    schemas?: Schema$DatabaseSchema[];
  }
  /**
   * The identifiers of the parent database deployment.
   */
  export interface Schema$DatabaseDetailsParentDatabaseDeployment {
    /**
     * The parent database deployment generated ID.
     */
    generatedId?: string | null;
    /**
     * The parent database deployment optional manual unique ID set by the user.
     */
    manualUniqueId?: string | null;
  }
  /**
   * Details of a database instance.
   */
  export interface Schema$DatabaseInstance {
    /**
     * The instance's name.
     */
    instanceName?: string | null;
    /**
     * Optional. Networking details.
     */
    network?: Schema$DatabaseInstanceNetwork;
    /**
     * The instance role in the database engine.
     */
    role?: string | null;
  }
  /**
   * Network details of a database instance.
   */
  export interface Schema$DatabaseInstanceNetwork {
    /**
     * Optional. The instance's host names.
     */
    hostNames?: string[] | null;
    /**
     * Optional. The instance's IP addresses.
     */
    ipAddresses?: string[] | null;
    /**
     * Optional. The instance's primary MAC address.
     */
    primaryMacAddress?: string | null;
  }
  /**
   * Details of a group of database objects.
   */
  export interface Schema$DatabaseObjects {
    /**
     * The category of the objects.
     */
    category?: string | null;
    /**
     * The number of objects.
     */
    count?: string | null;
  }
  /**
   * DatabasePreferences enables you to create sets of preferences for your migrated databases.
   */
  export interface Schema$DatabasePreferences {
    /**
     * Optional. Preferences for target SQL Server on Cloud SQL when migrating from source Microsoft SQL server.
     */
    mssqlToCloudSqlForSqlServerPreferences?: Schema$DatabasePreferencesCloudSqlSqlServer;
    /**
     * Optional. Preferences for target MySQL on Cloud SQL when migrating from source MySQL.
     */
    mysqlToCloudSqlForMysqlPreferences?: Schema$DatabasePreferencesCloudSqlMySql;
    /**
     * Optional. Preferences for target PostgreSQL on Cloud SQL when migrating from source PostgreSQL.
     */
    postgresqlToCloudSqlForPostgresqlPreferences?: Schema$DatabasePreferencesCloudSqlPostgreSql;
  }
  /**
   * Preferences common to Cloud SQL databases.
   */
  export interface Schema$DatabasePreferencesCloudSqlCommon {
    /**
     * Optional. Preferences for database backups.
     */
    backup?: Schema$DatabasePreferencesCloudSqlCommonBackup;
    /**
     * Optional. Commitment plan to consider when calculating costs. Only regular CUDs (not flexible) are currently available.
     */
    commitmentPlan?: string | null;
    /**
     * Optional. Preferred Cloud SQL edition.
     */
    edition?: string | null;
    /**
     * Optional. Persistent disk type to use. If unspecified, a disk type is recommended based on available usage data. For SQL Server, only SSD is available. For MySQL and PostgreSQL, only STANDARD (HDD) and SSD types are available.
     */
    persistentDiskType?: string | null;
    /**
     * Optional. Sizing optimization strategy of the database. Currently supported for Cloud SQL are just two values: SIZING_OPTIMIZATION_STRATEGY_MODERATE and SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE. SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED will behave like SIZING_OPTIMIZATION_STRATEGY_MODERATE.
     */
    sizingOptimizationStrategy?: string | null;
    /**
     * Optional. Preferred zone availability.
     */
    zoneAvailability?: string | null;
  }
  /**
   * Preferences for database backups.
   */
  export interface Schema$DatabasePreferencesCloudSqlCommonBackup {
    /**
     * Optional. Automated backup mode.
     */
    backupMode?: string | null;
  }
  /**
   * Preferences for MySQL on Cloud SQL.
   */
  export interface Schema$DatabasePreferencesCloudSqlMySql {
    /**
     * Optional. Preferences to Cloud SQL databases.
     */
    common?: Schema$DatabasePreferencesCloudSqlCommon;
  }
  /**
   * Preferences for PostgreSQL on Cloud SQL.
   */
  export interface Schema$DatabasePreferencesCloudSqlPostgreSql {
    /**
     * Optional. Preferences to Cloud SQL databases.
     */
    common?: Schema$DatabasePreferencesCloudSqlCommon;
  }
  /**
   * Preferences for SQL Server on Cloud SQL.
   */
  export interface Schema$DatabasePreferencesCloudSqlSqlServer {
    /**
     * Optional. Preferences to Cloud SQL databases.
     */
    common?: Schema$DatabasePreferencesCloudSqlCommon;
    /**
     * Optional. Preferences for multithreading support.
     */
    multithreading?: string | null;
    /**
     * Optional. Edition of Microsoft SQL version that is used on a Cloud SQL for SQL server instance.
     */
    versionType?: string | null;
  }
  /**
   * Details of a database schema.
   */
  export interface Schema$DatabaseSchema {
    /**
     * Details of a Mysql schema.
     */
    mysql?: Schema$MySqlSchemaDetails;
    /**
     * List of details of objects by category.
     */
    objects?: Schema$DatabaseObjects[];
    /**
     * Details of a PostgreSql schema.
     */
    postgresql?: Schema$PostgreSqlSchemaDetails;
    /**
     * The name of the schema.
     */
    schemaName?: string | null;
    /**
     * Details of a SqlServer schema.
     */
    sqlServer?: Schema$SqlServerSchemaDetails;
    /**
     * The total size of tables in bytes.
     */
    tablesSizeBytes?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$DateTime {
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    day?: number | null;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    minutes?: number | null;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    month?: number | null;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    nanos?: number | null;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
    /**
     * Time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    utcOffset?: string | null;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    year?: number | null;
  }
  /**
   * Information about software detected on an asset.
   */
  export interface Schema$DetectedSoftware {
    /**
     * Output only. Software family of the detected software, e.g. Database, SAP family.
     */
    softwareFamily?: string | null;
    /**
     * Output only. Software's name.
     */
    softwareName?: string | null;
  }
  /**
   * Represents an installed Migration Center Discovery Client instance.
   */
  export interface Schema$DiscoveryClient {
    /**
     * Output only. Time when the discovery client was first created.
     */
    createTime?: string | null;
    /**
     * Optional. Free text description. Maximum length is 1000 characters.
     */
    description?: string | null;
    /**
     * Optional. Free text display name. Maximum length is 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Errors affecting client functionality.
     */
    errors?: Schema$Status[];
    /**
     * Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time.
     */
    expireTime?: string | null;
    /**
     * Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes).
     */
    heartbeatTime?: string | null;
    /**
     * Optional. Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. Full name of this discovery client.
     */
    name?: string | null;
    /**
     * Output only. The recommended versions of the discovery client.
     */
    recommendedVersions?: Schema$DiscoveryClientDiscoveryClientRecommendedVersion[];
    /**
     * Required. Service account used by the discovery client for various operation.
     */
    serviceAccount?: string | null;
    /**
     * Output only. This field is intended for internal use.
     */
    signalsEndpoint?: string | null;
    /**
     * Required. Full name of the source object associated with this discovery client.
     */
    source?: string | null;
    /**
     * Output only. Current state of the discovery client.
     */
    state?: string | null;
    /**
     * Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field.
     */
    ttl?: string | null;
    /**
     * Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field.
     */
    updateTime?: string | null;
    /**
     * Output only. Client version, as reported in recent heartbeat.
     */
    version?: string | null;
  }
  /**
   * Discovery client recommended version.
   */
  export interface Schema$DiscoveryClientDiscoveryClientRecommendedVersion {
    /**
     * Output only. The URI of the discovery client version.
     */
    uri?: string | null;
    /**
     * Output only. The version of the discovery client.
     */
    version?: string | null;
  }
  /**
   * Single disk entry.
   */
  export interface Schema$DiskEntry {
    /**
     * Disk label.
     */
    diskLabel?: string | null;
    /**
     * Disk label type (e.g. BIOS/GPT)
     */
    diskLabelType?: string | null;
    /**
     * Disk hardware address (e.g. 0:1 for SCSI).
     */
    hwAddress?: string | null;
    /**
     * Disks interface type (e.g. SATA/SCSI)
     */
    interfaceType?: string | null;
    /**
     * Partition layout.
     */
    partitions?: Schema$DiskPartitionList;
    /**
     * Disk status (e.g. online).
     */
    status?: string | null;
    /**
     * Disk capacity.
     */
    totalCapacityBytes?: string | null;
    /**
     * Disk free space.
     */
    totalFreeBytes?: string | null;
  }
  /**
   * VM disks.
   */
  export interface Schema$DiskEntryList {
    /**
     * Disk entries.
     */
    entries?: Schema$DiskEntry[];
  }
  /**
   * Disk Partition details.
   */
  export interface Schema$DiskPartition {
    /**
     * Partition capacity.
     */
    capacityBytes?: string | null;
    /**
     * Partition file system.
     */
    fileSystem?: string | null;
    /**
     * Partition free space.
     */
    freeBytes?: string | null;
    /**
     * Mount point (Linux/Windows) or drive letter (Windows).
     */
    mountPoint?: string | null;
    /**
     * Sub-partitions.
     */
    subPartitions?: Schema$DiskPartitionList;
    /**
     * Partition type (e.g. BIOS boot).
     */
    type?: string | null;
    /**
     * Partition UUID.
     */
    uuid?: string | null;
  }
  /**
   * Disk partition details.
   */
  export interface Schema$DiskPartitionDetails {
    /**
     * Output only. Total free space of all partitions.
     */
    freeSpaceBytes?: string | null;
    /**
     * Optional. List of partitions.
     */
    partitions?: Schema$DiskPartitionList;
    /**
     * Output only. Total capacity of all partitions.
     */
    totalCapacityBytes?: string | null;
  }
  /**
   * Disk partition list.
   */
  export interface Schema$DiskPartitionList {
    /**
     * Partition entries.
     */
    entries?: Schema$DiskPartition[];
  }
  /**
   * Disk usage sample. Values are across all disks.
   */
  export interface Schema$DiskUsageSample {
    /**
     * Average IOPS sampled over a short window. Must be non-negative. If read or write are set, the sum of read and write will override the value of the average_iops.
     */
    averageIops?: number | null;
    /**
     * Average read IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored.
     */
    averageReadIops?: number | null;
    /**
     * Average write IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored.
     */
    averageWriteIops?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message representing a frame which failed to be processed due to an error.
   */
  export interface Schema$ErrorFrame {
    /**
     * Output only. Frame ingestion time.
     */
    ingestionTime?: string | null;
    /**
     * Output only. The identifier of the ErrorFrame.
     */
    name?: string | null;
    /**
     * Output only. The frame that was originally reported.
     */
    originalFrame?: Schema$AssetFrame;
    /**
     * Output only. All the violations that were detected for the frame.
     */
    violations?: Schema$FrameViolationEntry[];
  }
  /**
   * A resource that reports result of the import job execution.
   */
  export interface Schema$ExecutionReport {
    /**
     * Validation errors encountered during the execution of the import job.
     */
    executionErrors?: Schema$ValidationReport;
    /**
     * Total number of asset frames reported for the import job.
     */
    framesReported?: number | null;
    /**
     * List of job-level errors. Deprecated, use the job errors under execution_errors instead.
     */
    jobErrors?: Schema$ImportError[];
    /**
     * Total number of rows in the import job.
     */
    totalRowsCount?: number | null;
  }
  /**
   * A resource that aggregates the validation errors found in an import job file.
   */
  export interface Schema$FileValidationReport {
    /**
     * List of file level errors.
     */
    fileErrors?: Schema$ImportError[];
    /**
     * The name of the file.
     */
    fileName?: string | null;
    /**
     * Flag indicating that processing was aborted due to maximum number of errors.
     */
    partialReport?: boolean | null;
    /**
     * Partial list of rows that encountered validation error.
     */
    rowErrors?: Schema$ImportRowError[];
  }
  /**
   * Describes the fit level of an asset for migration to a specific target.
   */
  export interface Schema$FitDescriptor {
    /**
     * Output only. Fit level.
     */
    fitLevel?: string | null;
  }
  /**
   * Collection of frame data.
   */
  export interface Schema$Frames {
    /**
     * A repeated field of asset data.
     */
    framesData?: Schema$AssetFrame[];
  }
  /**
   * A resource that contains a single violation of a reported `AssetFrame` resource.
   */
  export interface Schema$FrameViolationEntry {
    /**
     * The field of the original frame where the violation occurred.
     */
    field?: string | null;
    /**
     * A message describing the violation.
     */
    violation?: string | null;
  }
  /**
   * Single fstab entry.
   */
  export interface Schema$FstabEntry {
    /**
     * The mount point for the filesystem.
     */
    file?: string | null;
    /**
     * Used by dump to determine which filesystems need to be dumped.
     */
    freq?: number | null;
    /**
     * Mount options associated with the filesystem.
     */
    mntops?: string | null;
    /**
     * Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.
     */
    passno?: number | null;
    /**
     * The block special device or remote filesystem to be mounted.
     */
    spec?: string | null;
    /**
     * The type of the filesystem.
     */
    vfstype?: string | null;
  }
  /**
   * Fstab content.
   */
  export interface Schema$FstabEntryList {
    /**
     * Fstab entries.
     */
    entries?: Schema$FstabEntry[];
  }
  /**
   * A resource that represents a payload hosted on Google Cloud Storage.
   */
  export interface Schema$GCSPayloadInfo {
    /**
     * The import job format.
     */
    format?: string | null;
    /**
     * The payload path in Google Cloud Storage.
     */
    path?: string | null;
  }
  /**
   * A generic insight about an asset.
   */
  export interface Schema$GenericInsight {
    /**
     * Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links.
     */
    additionalInformation?: string[] | null;
    /**
     * Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. Text can contain md file style links.
     */
    defaultMessage?: string | null;
    /**
     * Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead.
     */
    messageId?: string | null;
  }
  /**
   * Generic platform details.
   */
  export interface Schema$GenericPlatformDetails {
    /**
     * Whether the machine is hyperthreaded.
     */
    hyperthreading?: string | null;
    /**
     * Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field.
     */
    location?: string | null;
  }
  /**
   * GKE migration target.
   */
  export interface Schema$GoogleKubernetesEngineMigrationTarget {}
  /**
   * A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
   */
  export interface Schema$Group {
    /**
     * Output only. The timestamp when the group was created.
     */
    createTime?: string | null;
    /**
     * Optional. The description of the group.
     */
    description?: string | null;
    /**
     * Optional. User-friendly display name.
     */
    displayName?: string | null;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The name of the group.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when the group was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Guest OS config information.
   */
  export interface Schema$GuestConfigDetails {
    /**
     * Mount list (Linux fstab).
     */
    fstab?: Schema$FstabEntryList;
    /**
     * Output only. Hosts file (/etc/hosts).
     */
    hosts?: Schema$HostsEntryList;
    /**
     * OS issue (typically /etc/issue in Linux).
     */
    issue?: string | null;
    /**
     * NFS exports.
     */
    nfsExports?: Schema$NfsExportList;
    /**
     * SELinux details.
     */
    selinux?: Schema$Selinux;
  }
  /**
   * Guest installed application information.
   */
  export interface Schema$GuestInstalledApplication {
    /**
     * License strings associated with the installed application.
     */
    licenses?: string[] | null;
    /**
     * Installed application name.
     */
    name?: string | null;
    /**
     * Source path.
     */
    path?: string | null;
    /**
     * Date application was installed.
     */
    time?: string | null;
    /**
     * Installed application vendor.
     */
    vendor?: string | null;
    /**
     * Installed application version.
     */
    version?: string | null;
  }
  /**
   * Guest installed application list.
   */
  export interface Schema$GuestInstalledApplicationList {
    /**
     * Application entries.
     */
    entries?: Schema$GuestInstalledApplication[];
  }
  /**
   * Information from Guest-level collections.
   */
  export interface Schema$GuestOsDetails {
    /**
     * OS and app configuration.
     */
    config?: Schema$GuestConfigDetails;
    /**
     * Runtime information.
     */
    runtime?: Schema$GuestRuntimeDetails;
  }
  /**
   * Guest OS runtime information.
   */
  export interface Schema$GuestRuntimeDetails {
    /**
     * Domain, e.g. c.stratozone-development.internal.
     */
    domain?: string | null;
    /**
     * Installed applications information.
     */
    installedApps?: Schema$GuestInstalledApplicationList;
    /**
     * Date since last booted (last uptime date).
     */
    lastUptime?: Schema$Date;
    /**
     * Machine name.
     */
    machineName?: string | null;
    /**
     * Runtime network information (connections, ports).
     */
    networkInfo?: Schema$RuntimeNetworkInfo;
    /**
     * Open files information.
     */
    openFileList?: Schema$OpenFileList;
    /**
     * Running processes.
     */
    processes?: Schema$RunningProcessList;
    /**
     * Running background services.
     */
    services?: Schema$RunningServiceList;
  }
  /**
   * Single /etc/hosts entry.
   */
  export interface Schema$HostsEntry {
    /**
     * List of host names / aliases.
     */
    hostNames?: string[] | null;
    /**
     * IP (raw, IPv4/6 agnostic).
     */
    ip?: string | null;
  }
  /**
   * Hosts content.
   */
  export interface Schema$HostsEntryList {
    /**
     * Output only. Hosts entries.
     */
    entries?: Schema$HostsEntry[];
  }
  /**
   * A resource that represents a payload file in an import job.
   */
  export interface Schema$ImportDataFile {
    /**
     * Output only. The timestamp when the file was created.
     */
    createTime?: string | null;
    /**
     * Optional. User-friendly display name. Maximum length is 256 characters.
     */
    displayName?: string | null;
    /**
     * Required. The payload format.
     */
    format?: string | null;
    /**
     * Output only. The name of the file.
     */
    name?: string | null;
    /**
     * Output only. The state of the import data file.
     */
    state?: string | null;
    /**
     * Information about a file that is uploaded to a storage service.
     */
    uploadFileInfo?: Schema$UploadFileInfo;
  }
  /**
   * A resource that reports the errors encountered while processing an import job.
   */
  export interface Schema$ImportError {
    /**
     * The error information.
     */
    errorDetails?: string | null;
    /**
     * The severity of the error.
     */
    severity?: string | null;
  }
  /**
   * A resource that represents the background job that imports asset frames.
   */
  export interface Schema$ImportJob {
    /**
     * Required. Reference to a source.
     */
    assetSource?: string | null;
    /**
     * Output only. The timestamp when the import job was completed.
     */
    completeTime?: string | null;
    /**
     * Output only. The timestamp when the import job was created.
     */
    createTime?: string | null;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The report with the results of running the import job.
     */
    executionReport?: Schema$ExecutionReport;
    /**
     * The payload is in Google Cloud Storage.
     */
    gcsPayload?: Schema$GCSPayloadInfo;
    /**
     * The payload is included in the request, mainly used for small import jobs.
     */
    inlinePayload?: Schema$InlinePayloadInfo;
    /**
     * Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The full name of the import job.
     */
    name?: string | null;
    /**
     * Output only. The state of the import job.
     */
    state?: string | null;
    /**
     * Output only. The timestamp when the import job was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. The report with the validation results of the import job.
     */
    validationReport?: Schema$ValidationReport;
  }
  /**
   * A resource that reports the import job errors at row level.
   */
  export interface Schema$ImportRowError {
    /**
     * Error details for an archive file.
     */
    archiveError?: Schema$ImportRowErrorArchiveErrorDetails;
    /**
     * The asset title.
     */
    assetTitle?: string | null;
    /**
     * Error details for a CSV file.
     */
    csvError?: Schema$ImportRowErrorCsvErrorDetails;
    /**
     * The list of errors detected in the row.
     */
    errors?: Schema$ImportError[];
    /**
     * The row number where the error was detected.
     */
    rowNumber?: number | null;
    /**
     * The name of the VM in the row.
     */
    vmName?: string | null;
    /**
     * The VM UUID.
     */
    vmUuid?: string | null;
    /**
     * Error details for an XLSX file.
     */
    xlsxError?: Schema$ImportRowErrorXlsxErrorDetails;
  }
  /**
   * Error details for an archive file.
   */
  export interface Schema$ImportRowErrorArchiveErrorDetails {
    /**
     * Error details for a CSV file.
     */
    csvError?: Schema$ImportRowErrorCsvErrorDetails;
    /**
     * The file path inside the archive where the error was detected.
     */
    filePath?: string | null;
  }
  /**
   * Error details for a CSV file.
   */
  export interface Schema$ImportRowErrorCsvErrorDetails {
    /**
     * The row number where the error was detected.
     */
    rowNumber?: number | null;
  }
  /**
   * Error details for an XLSX file.
   */
  export interface Schema$ImportRowErrorXlsxErrorDetails {
    /**
     * The row number where the error was detected.
     */
    rowNumber?: number | null;
    /**
     * The name of the sheet where the error was detected.
     */
    sheet?: string | null;
  }
  /**
   * A resource that represents the inline import job payload.
   */
  export interface Schema$InlinePayloadInfo {
    /**
     * The import job format.
     */
    format?: string | null;
    /**
     * List of payload files.
     */
    payload?: Schema$PayloadFile[];
  }
  /**
   * An insight about an asset.
   */
  export interface Schema$Insight {
    /**
     * Output only. A generic insight about an asset.
     */
    genericInsight?: Schema$GenericInsight;
    /**
     * Output only. An insight about potential migrations for an asset.
     */
    migrationInsight?: Schema$MigrationInsight;
    /**
     * Output only. An insight regarding software detected on an asset.
     */
    softwareInsight?: Schema$SoftwareInsight;
  }
  /**
   * Message containing insights list.
   */
  export interface Schema$InsightList {
    /**
     * Output only. Insights of the list.
     */
    insights?: Schema$Insight[];
    /**
     * Output only. Update timestamp.
     */
    updateTime?: string | null;
  }
  /**
   * An issue associated with a migration.
   */
  export interface Schema$Issue {
    /**
     * Output only. Details about a compatibility issue.
     */
    compatibilityIssue?: Schema$IssueCompatibilityIssue;
    /**
     * Output only. English description of the issue.
     */
    description?: string | null;
    /**
     * Output only. Unique identifier for this issue type.
     */
    issueCode?: string | null;
  }
  /**
   * Details about a compatibility issue.
   */
  export interface Schema$IssueCompatibilityIssue {
    /**
     * Output only. Name of the object associated with this compatibility issue relative to the relevant asset. Does not represent a fully qualified resource name and is not intended for programmatic use.
     */
    associatedObject?: string | null;
    /**
     * Output only. Type of object associated with this migration compatibility issue.
     */
    associatedObjectType?: string | null;
    /**
     * Output only. A string representation of actual value associated with this issue. Some values may contain aggregated information, such as a flag name and the actual value assigned to it.
     */
    associatedValue?: string | null;
    /**
     * Output only. Category of this compatibility issue.
     */
    category?: string | null;
  }
  /**
   * Response message for listing assets export jobs.
   */
  export interface Schema$ListAssetsExportJobsResponse {
    /**
     * Output only. The list of assets export jobs.
     */
    assetsExportJobs?: Schema$AssetsExportJob[];
    /**
     * Output only. A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing assets.
   */
  export interface Schema$ListAssetsResponse {
    /**
     * A list of assets.
     */
    assets?: Schema$Asset[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing discovery clients.
   */
  export interface Schema$ListDiscoveryClientsResponse {
    /**
     * List of discovery clients.
     */
    discoveryClients?: Schema$DiscoveryClient[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A response for listing error frames.
   */
  export interface Schema$ListErrorFramesResponse {
    /**
     * The list of error frames.
     */
    errorFrames?: Schema$ErrorFrame[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A response for listing groups.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * The list of Group
     */
    groups?: Schema$Group[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for listing payload files of an import job.
   */
  export interface Schema$ListImportDataFilesResponse {
    /**
     * The list of import data files.
     */
    importDataFiles?: Schema$ImportDataFile[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A response for listing import jobs.
   */
  export interface Schema$ListImportJobsResponse {
    /**
     * The list of import jobs.
     */
    importJobs?: Schema$ImportJob[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for listing preference sets.
   */
  export interface Schema$ListPreferenceSetsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of PreferenceSets
     */
    preferenceSets?: Schema$PreferenceSet[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing relations.
   */
  export interface Schema$ListRelationsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * A list of relations.
     */
    relations?: Schema$Relation[];
  }
  /**
   * Response message for listing report configs.
   */
  export interface Schema$ListReportConfigsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * A list of report configs.
     */
    reportConfigs?: Schema$ReportConfig[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing Reports.
   */
  export interface Schema$ListReportsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of Reports.
     */
    reports?: Schema$Report[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for listing sources.
   */
  export interface Schema$ListSourcesResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of sources.
     */
    sources?: Schema$Source[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Details of the machine architecture.
   */
  export interface Schema$MachineArchitectureDetails {
    /**
     * BIOS Details.
     */
    bios?: Schema$BiosDetails;
    /**
     * CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.
     */
    cpuArchitecture?: string | null;
    /**
     * Optional. CPU manufacturer, e.g., "Intel", "AMD".
     */
    cpuManufacturer?: string | null;
    /**
     * CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.
     */
    cpuName?: string | null;
    /**
     * Number of processor sockets allocated to the machine.
     */
    cpuSocketCount?: number | null;
    /**
     * Firmware type.
     */
    firmwareType?: string | null;
    /**
     * CPU hyper-threading support.
     */
    hyperthreading?: string | null;
    /**
     * Hardware vendor.
     */
    vendor?: string | null;
  }
  /**
   * Details of a machine.
   */
  export interface Schema$MachineDetails {
    /**
     * Architecture details (vendor, CPU architecture).
     */
    architecture?: Schema$MachineArchitectureDetails;
    /**
     * Number of logical CPU cores in the machine. Must be non-negative.
     */
    coreCount?: number | null;
    /**
     * Machine creation time.
     */
    createTime?: string | null;
    /**
     * Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks.
     */
    diskPartitions?: Schema$DiskPartitionDetails;
    /**
     * Disk details.
     */
    disks?: Schema$MachineDiskDetails;
    /**
     * Guest OS information.
     */
    guestOs?: Schema$GuestOsDetails;
    /**
     * Machine name.
     */
    machineName?: string | null;
    /**
     * The amount of memory in the machine. Must be non-negative.
     */
    memoryMb?: number | null;
    /**
     * Network details.
     */
    network?: Schema$MachineNetworkDetails;
    /**
     * Platform specific information.
     */
    platform?: Schema$PlatformDetails;
    /**
     * Power state of the machine.
     */
    powerState?: string | null;
    /**
     * Machine unique identifier.
     */
    uuid?: string | null;
  }
  /**
   * Details of machine disks.
   */
  export interface Schema$MachineDiskDetails {
    /**
     * List of disks.
     */
    disks?: Schema$DiskEntryList;
    /**
     * Raw disk scan result. This field is intended for human inspection. The format of this field may be lsblk output or any another raw output. The exact format may change without notice and should not be relied upon.
     */
    rawScanResult?: string | null;
    /**
     * Disk total Capacity.
     */
    totalCapacityBytes?: string | null;
    /**
     * Total disk free space.
     */
    totalFreeBytes?: string | null;
  }
  /**
   * Details of network adapters and settings.
   */
  export interface Schema$MachineNetworkDetails {
    /**
     * Default gateway address.
     */
    defaultGateway?: string | null;
    /**
     * List of network adapters.
     */
    networkAdapters?: Schema$NetworkAdapterList;
    /**
     * The primary IP address of the machine.
     */
    primaryIpAddress?: string | null;
    /**
     * MAC address of the machine. This property is used to uniqly identify the machine.
     */
    primaryMacAddress?: string | null;
    /**
     * The public IP address of the machine.
     */
    publicIpAddress?: string | null;
  }
  /**
   * The type of machines to consider when calculating virtual machine migration insights and recommendations for Compute Engine. Not all machine types are available in all zones and regions.
   */
  export interface Schema$MachinePreferences {
    /**
     * Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
     */
    allowedMachineSeries?: Schema$MachineSeries[];
  }
  /**
   * A machine series, for a target product (e.g. Compute Engine, Google Cloud VMware Engine).
   */
  export interface Schema$MachineSeries {
    /**
     * Code to identify a machine series. Consult this for more details on the available series for Compute Engine: https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison Consult this for more details on the available series for Google Cloud VMware Engine: https://cloud.google.com/vmware-engine/pricing
     */
    code?: string | null;
  }
  /**
   * Memory usage sample.
   */
  export interface Schema$MemoryUsageSample {
    /**
     * Percentage of system memory utilized. Must be in the interval [0, 100].
     */
    utilizedPercentage?: number | null;
  }
  /**
   * An insight about potential migrations for an asset.
   */
  export interface Schema$MigrationInsight {
    /**
     * Output only. A Cloud database migration target.
     */
    cloudDatabaseTarget?: Schema$CloudDatabaseMigrationTarget;
    /**
     * Output only. A Google Compute Engine Sole Tenant target.
     */
    computeEngineSoleTenantTarget?: Schema$ComputeEngineSoleTenantMigrationTarget;
    /**
     * Output only. A Google Compute Engine target.
     */
    computeEngineTarget?: Schema$ComputeEngineMigrationTarget;
    /**
     * Output only. Description of how well the asset this insight is associated with fits the proposed migration.
     */
    fit?: Schema$FitDescriptor;
    /**
     * Output only. A Google Kubernetes Engine target.
     */
    gkeTarget?: Schema$GoogleKubernetesEngineMigrationTarget;
    /**
     * Output only. Issues associated with this migration.
     */
    issues?: Schema$Issue[];
    /**
     * Output only. A VMWare Engine target.
     */
    vmwareEngineTarget?: Schema$VmwareEngineMigrationTarget;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * Specific details for a Mysql database deployment.
   */
  export interface Schema$MysqlDatabaseDeployment {
    /**
     * Optional. List of MySql plugins.
     */
    plugins?: Schema$MySqlPlugin[];
    /**
     * Optional. List of MySql properties.
     */
    properties?: Schema$MySqlProperty[];
    /**
     * Optional. Number of resource groups.
     */
    resourceGroupsCount?: number | null;
    /**
     * Optional. List of MySql variables.
     */
    variables?: Schema$MySqlVariable[];
  }
  /**
   * MySql plugin.
   */
  export interface Schema$MySqlPlugin {
    /**
     * Required. The plugin is active.
     */
    enabled?: boolean | null;
    /**
     * Required. The plugin name.
     */
    plugin?: string | null;
    /**
     * Required. The plugin version.
     */
    version?: string | null;
  }
  /**
   * MySql property.
   */
  export interface Schema$MySqlProperty {
    /**
     * Required. The property is enabled.
     */
    enabled?: boolean | null;
    /**
     * Required. The property numeric value.
     */
    numericValue?: string | null;
    /**
     * Required. The property name.
     */
    property?: string | null;
  }
  /**
   * Specific details for a Mysql database.
   */
  export interface Schema$MySqlSchemaDetails {
    /**
     * Optional. Mysql storage engine tables.
     */
    storageEngines?: Schema$MySqlStorageEngineDetails[];
  }
  /**
   * Mysql storage engine tables.
   */
  export interface Schema$MySqlStorageEngineDetails {
    /**
     * Optional. The number of encrypted tables.
     */
    encryptedTableCount?: number | null;
    /**
     * Required. The storage engine.
     */
    engine?: string | null;
    /**
     * Optional. The number of tables.
     */
    tableCount?: number | null;
  }
  /**
   * MySql variable.
   */
  export interface Schema$MySqlVariable {
    /**
     * Required. The variable category.
     */
    category?: string | null;
    /**
     * Required. The variable value.
     */
    value?: string | null;
    /**
     * Required. The variable name.
     */
    variable?: string | null;
  }
  /**
   * Details of network adapter.
   */
  export interface Schema$NetworkAdapterDetails {
    /**
     * Network adapter type (e.g. VMXNET3).
     */
    adapterType?: string | null;
    /**
     * NetworkAddressList
     */
    addresses?: Schema$NetworkAddressList;
    /**
     * MAC address.
     */
    macAddress?: string | null;
  }
  /**
   * List of network adapters.
   */
  export interface Schema$NetworkAdapterList {
    /**
     * Network adapter descriptions.
     */
    networkAdapters?: Schema$NetworkAdapterDetails[];
  }
  /**
   * Details of network address.
   */
  export interface Schema$NetworkAddress {
    /**
     * Whether DHCP is used to assign addresses.
     */
    assignment?: string | null;
    /**
     * Broadcast address.
     */
    bcast?: string | null;
    /**
     * Fully qualified domain name.
     */
    fqdn?: string | null;
    /**
     * Assigned or configured IP Address.
     */
    ipAddress?: string | null;
    /**
     * Subnet mask.
     */
    subnetMask?: string | null;
  }
  /**
   * List of allocated/assigned network addresses.
   */
  export interface Schema$NetworkAddressList {
    /**
     * Network address entries.
     */
    addresses?: Schema$NetworkAddress[];
  }
  export interface Schema$NetworkConnection {
    /**
     * Local IP address.
     */
    localIpAddress?: string | null;
    /**
     * Local port.
     */
    localPort?: number | null;
    /**
     * Process ID.
     */
    pid?: string | null;
    /**
     * Process or service name.
     */
    processName?: string | null;
    /**
     * Connection protocol (e.g. TCP/UDP).
     */
    protocol?: string | null;
    /**
     * Remote IP address.
     */
    remoteIpAddress?: string | null;
    /**
     * Remote port.
     */
    remotePort?: number | null;
    /**
     * Connection state (e.g. CONNECTED).
     */
    state?: string | null;
  }
  /**
   * Network connection list.
   */
  export interface Schema$NetworkConnectionList {
    /**
     * Network connection entries.
     */
    entries?: Schema$NetworkConnection[];
  }
  /**
   * Network usage sample. Values are across all network interfaces.
   */
  export interface Schema$NetworkUsageSample {
    /**
     * Average network egress in B/s sampled over a short window. Must be non-negative.
     */
    averageEgressBps?: number | null;
    /**
     * Average network ingress in B/s sampled over a short window. Must be non-negative.
     */
    averageIngressBps?: number | null;
  }
  /**
   * NFS export.
   */
  export interface Schema$NfsExport {
    /**
     * The directory being exported.
     */
    exportDirectory?: string | null;
    /**
     * The hosts or networks to which the export is being shared.
     */
    hosts?: string[] | null;
  }
  /**
   * NFS exports.
   */
  export interface Schema$NfsExportList {
    /**
     * NFS export entries.
     */
    entries?: Schema$NfsExport[];
  }
  /**
   * Open file Information.
   */
  export interface Schema$OpenFileDetails {
    /**
     * Opened file command.
     */
    command?: string | null;
    /**
     * Opened file file path.
     */
    filePath?: string | null;
    /**
     * Opened file file type.
     */
    fileType?: string | null;
    /**
     * Opened file user.
     */
    user?: string | null;
  }
  /**
   * Open file list.
   */
  export interface Schema$OpenFileList {
    /**
     * Open file details entries.
     */
    entries?: Schema$OpenFileDetails[];
  }
  /**
   * Pricing options for OS images.
   */
  export interface Schema$OperatingSystemPricingPreferences {
    /**
     * Optional. Pricing options for RHEL images.
     */
    rhel?: Schema$OperatingSystemPricingPreferencesOperatingSystemPricing;
    /**
     * Optional. Pricing options for SLES images.
     */
    sles?: Schema$OperatingSystemPricingPreferencesOperatingSystemPricing;
    /**
     * Optional. Pricing options for SLES for SAP images.
     */
    slesForSap?: Schema$OperatingSystemPricingPreferencesOperatingSystemPricing;
    /**
     * Optional. Pricing options for Windows images. No commitment plans are available, set it to unspecified.
     */
    windows?: Schema$OperatingSystemPricingPreferencesOperatingSystemPricing;
  }
  /**
   * Pricing options of an OS image.
   */
  export interface Schema$OperatingSystemPricingPreferencesOperatingSystemPricing {
    /**
     * Optional. The plan of commitments for committed use discounts (CUD).
     */
    commitmentPlan?: string | null;
    /**
     * Optional. License type for premium images (RHEL, RHEL for SAP, SLES, SLES for SAP, Windows Server).
     */
    licenseType?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Contains a single output file.
   */
  export interface Schema$OutputFile {
    /**
     * Output only. CSV output file.
     */
    csvOutputFile?: Schema$CsvOutputFile;
    /**
     * Output only. File size in bytes.
     */
    fileSizeBytes?: string | null;
    /**
     * Output only. XLSX output file.
     */
    xlsxOutputFile?: Schema$XlsxOutputFile;
  }
  /**
   * Contains a list of output files.
   */
  export interface Schema$OutputFileList {
    /**
     * List of output files.
     */
    entries?: Schema$OutputFile[];
  }
  /**
   * Payload file for inline import job payload.
   */
  export interface Schema$PayloadFile {
    /**
     * The file data.
     */
    data?: string | null;
    /**
     * The file name.
     */
    name?: string | null;
  }
  /**
   * Performance data sample.
   */
  export interface Schema$PerformanceSample {
    /**
     * CPU usage sample.
     */
    cpu?: Schema$CpuUsageSample;
    /**
     * Disk usage sample.
     */
    disk?: Schema$DiskUsageSample;
    /**
     * Memory usage sample.
     */
    memory?: Schema$MemoryUsageSample;
    /**
     * Network usage sample.
     */
    network?: Schema$NetworkUsageSample;
    /**
     * Time the sample was collected. If omitted, the frame report time will be used.
     */
    sampleTime?: string | null;
  }
  /**
   * Platform specific details for Physical Machines.
   */
  export interface Schema$PhysicalPlatformDetails {
    /**
     * Whether the machine is hyperthreaded.
     */
    hyperthreading?: string | null;
    /**
     * Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.
     */
    location?: string | null;
  }
  /**
   * Information about the platform.
   */
  export interface Schema$PlatformDetails {
    /**
     * AWS EC2 specific details.
     */
    awsEc2Details?: Schema$AwsEc2PlatformDetails;
    /**
     * Azure VM specific details.
     */
    azureVmDetails?: Schema$AzureVmPlatformDetails;
    /**
     * Generic platform details.
     */
    genericDetails?: Schema$GenericPlatformDetails;
    /**
     * Physical machines platform details.
     */
    physicalDetails?: Schema$PhysicalPlatformDetails;
    /**
     * VMware specific details.
     */
    vmwareDetails?: Schema$VmwarePlatformDetails;
  }
  /**
   * Specific details for a PostgreSQL database deployment.
   */
  export interface Schema$PostgreSqlDatabaseDeployment {
    /**
     * Optional. List of PostgreSql properties.
     */
    properties?: Schema$PostgreSqlProperty[];
    /**
     * Optional. List of PostgreSql settings.
     */
    settings?: Schema$PostgreSqlSetting[];
  }
  /**
   * PostgreSql extension.
   */
  export interface Schema$PostgreSqlExtension {
    /**
     * Required. The extension name.
     */
    extension?: string | null;
    /**
     * Required. The extension version.
     */
    version?: string | null;
  }
  /**
   * PostgreSql property.
   */
  export interface Schema$PostgreSqlProperty {
    /**
     * Required. The property is enabled.
     */
    enabled?: boolean | null;
    /**
     * Required. The property numeric value.
     */
    numericValue?: string | null;
    /**
     * Required. The property name.
     */
    property?: string | null;
  }
  /**
   * Specific details for a PostgreSql schema.
   */
  export interface Schema$PostgreSqlSchemaDetails {
    /**
     * Optional. PostgreSql foreign tables.
     */
    foreignTablesCount?: number | null;
    /**
     * Optional. PostgreSql extensions.
     */
    postgresqlExtensions?: Schema$PostgreSqlExtension[];
  }
  /**
   * PostgreSql setting.
   */
  export interface Schema$PostgreSqlSetting {
    /**
     * Required. The setting boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Required. The setting int value.
     */
    intValue?: string | null;
    /**
     * Required. The setting real value.
     */
    realValue?: number | null;
    /**
     * Required. The setting name.
     */
    setting?: string | null;
    /**
     * Required. The setting source.
     */
    source?: string | null;
    /**
     * Required. The setting string value. Notice that enum values are stored as strings.
     */
    stringValue?: string | null;
    /**
     * Optional. The setting unit.
     */
    unit?: string | null;
  }
  /**
   * The preferences that apply to all assets in a given context.
   */
  export interface Schema$PreferenceSet {
    /**
     * Output only. The timestamp when the preference set was created.
     */
    createTime?: string | null;
    /**
     * Optional. A set of preferences that applies to all databases in the context.
     */
    databasePreferences?: Schema$DatabasePreferences;
    /**
     * A description of the preference set.
     */
    description?: string | null;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Name of the PreferenceSet.
     */
    name?: string | null;
    /**
     * Optional. Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. If unspecified, VirtualMachinePreferences.RegionPreferences is used.
     */
    regionPreferences?: Schema$RegionPreferences;
    /**
     * Output only. The timestamp when the preference set was last updated.
     */
    updateTime?: string | null;
    /**
     * A set of preferences that applies to all virtual machines in the context.
     */
    virtualMachinePreferences?: Schema$VirtualMachinePreferences;
  }
  /**
   * The user preferences relating to target regions.
   */
  export interface Schema$RegionPreferences {
    /**
     * A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.
     */
    preferredRegions?: string[] | null;
  }
  /**
   * Message representing a relation between 2 resource.
   */
  export interface Schema$Relation {
    /**
     * Output only. The timestamp when the relation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The destination asset name in the relation.
     */
    dstAsset?: string | null;
    /**
     * Output only. Identifier. The identifier of the relation.
     */
    name?: string | null;
    /**
     * Output only. The source asset name in the relation.
     */
    srcAsset?: string | null;
    /**
     * Optional. The type of the relation.
     */
    type?: string | null;
  }
  /**
   * A request to remove assets from a group.
   */
  export interface Schema$RemoveAssetsFromGroupRequest {
    /**
     * Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.
     */
    allowMissing?: boolean | null;
    /**
     * Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000.
     */
    assets?: Schema$AssetList;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Report represents a point-in-time rendering of the ReportConfig results.
   */
  export interface Schema$Report {
    /**
     * Output only. Creation timestamp.
     */
    createTime?: string | null;
    /**
     * Free-text description.
     */
    description?: string | null;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Name of resource.
     */
    name?: string | null;
    /**
     * Report creation state.
     */
    state?: string | null;
    /**
     * Output only. Summary view of the Report.
     */
    summary?: Schema$ReportSummary;
    /**
     * Report type.
     */
    type?: string | null;
    /**
     * Output only. Last update timestamp.
     */
    updateTime?: string | null;
  }
  /**
   * A response to a call to `ReportAssetFrame`.
   */
  export interface Schema$ReportAssetFramesResponse {}
  /**
   * The groups and associated preference sets on which we can generate reports.
   */
  export interface Schema$ReportConfig {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Free-text description.
     */
    description?: string | null;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string | null;
    /**
     * Required. Collection of combinations of groups and preference sets.
     */
    groupPreferencesetAssignments?: Schema$ReportConfigGroupPreferenceSetAssignment[];
    /**
     * Output only. Name of resource.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents a combination of a group with a preference set.
   */
  export interface Schema$ReportConfigGroupPreferenceSetAssignment {
    /**
     * Required. Name of the group.
     */
    group?: string | null;
    /**
     * Required. Name of the Preference Set.
     */
    preferenceSet?: string | null;
  }
  /**
   * Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report.
   */
  export interface Schema$ReportSummary {
    /**
     * Aggregate statistics for unique assets across all the groups.
     */
    allAssetsStats?: Schema$ReportSummaryAssetAggregateStats;
    /**
     * Output only. Aggregate statistics for unique database assets across all the groups.
     */
    databaseStats?: Schema$ReportSummaryAssetAggregateStats;
    /**
     * Findings for each Group included in this report.
     */
    groupFindings?: Schema$ReportSummaryGroupFinding[];
    /**
     * Output only. Aggregate statistics for unique virtual machine assets across all the groups.
     */
    virtualMachineStats?: Schema$ReportSummaryAssetAggregateStats;
  }
  /**
   * Aggregate statistics for a collection of assets.
   */
  export interface Schema$ReportSummaryAssetAggregateStats {
    /**
     * Count of assets grouped by age.
     */
    assetAge?: Schema$ReportSummaryChartData;
    /**
     * Histogram showing a distribution of logical CPU core counts.
     */
    coreCountHistogram?: Schema$ReportSummaryHistogramChartData;
    /**
     * Output only. Count of assets grouped by database type. Keys here are taken from DatabaseType enum. Only present for databases.
     */
    databaseTypes?: Schema$ReportSummaryChartData;
    /**
     * Histogram showing a distribution of memory sizes.
     */
    memoryBytesHistogram?: Schema$ReportSummaryHistogramChartData;
    /**
     * Total memory split into Used/Free buckets.
     */
    memoryUtilization?: Schema$ReportSummaryChartData;
    /**
     * Total memory split into Used/Free buckets.
     */
    memoryUtilizationChart?: Schema$ReportSummaryUtilizationChartData;
    /**
     * Count of assets grouped by Operating System families. Only present for virtual machines.
     */
    operatingSystem?: Schema$ReportSummaryChartData;
    /**
     * Histogram showing a distribution of storage sizes.
     */
    storageBytesHistogram?: Schema$ReportSummaryHistogramChartData;
    /**
     * Total storage split into Used/Free buckets.
     */
    storageUtilization?: Schema$ReportSummaryChartData;
    /**
     * Total memory split into Used/Free buckets.
     */
    storageUtilizationChart?: Schema$ReportSummaryUtilizationChartData;
    /**
     * Count of the number of unique assets in this collection.
     */
    totalAssets?: string | null;
    /**
     * Sum of the CPU core count of all the assets in this collection.
     */
    totalCores?: string | null;
    /**
     * Sum of the memory in bytes of all the assets in this collection.
     */
    totalMemoryBytes?: string | null;
    /**
     * Sum of persistent storage in bytes of all the assets in this collection.
     */
    totalStorageBytes?: string | null;
  }
  /**
   * Describes a collection of data points rendered as a Chart.
   */
  export interface Schema$ReportSummaryChartData {
    /**
     * Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value.
     */
    dataPoints?: Schema$ReportSummaryChartDataDataPoint[];
  }
  /**
   * Describes a single data point in the Chart.
   */
  export interface Schema$ReportSummaryChartDataDataPoint {
    /**
     * The X-axis label for this data point.
     */
    label?: string | null;
    /**
     * The Y-axis value for this data point.
     */
    value?: number | null;
  }
  /**
   * DatabaseFinding contains an aggregate costs and shapes for a single database type.
   */
  export interface Schema$ReportSummaryDatabaseFinding {
    /**
     * Output only. Number of database assets which were successfully assigned in this finding.
     */
    allocatedAssetCount?: string | null;
    /**
     * Output only. Number of database assets in this finding.
     */
    totalAssets?: string | null;
  }
  /**
   * Summary Findings for a specific Group.
   */
  export interface Schema$ReportSummaryGroupFinding {
    /**
     * Summary statistics for all the assets in this group.
     */
    assetAggregateStats?: Schema$ReportSummaryAssetAggregateStats;
    /**
     * Output only. Asset type for the group finding.
     */
    assetType?: string | null;
    /**
     * Output only. Source asset database type for the group finding. Only present for databases.
     */
    databaseType?: string | null;
    /**
     * Description for this group finding.
     */
    description?: string | null;
    /**
     * Display Name for this group finding.
     */
    displayName?: string | null;
    /**
     * Output only. Full name of the group.
     */
    group?: string | null;
    /**
     * This field is deprecated, do not rely on it having a value.
     */
    overlappingAssetCount?: string | null;
    /**
     * Findings for each of the PreferenceSets for this group.
     */
    preferenceSetFindings?: Schema$ReportSummaryGroupPreferenceSetFinding[];
  }
  /**
   * Summary Findings for a specific Group/PreferenceSet combination.
   */
  export interface Schema$ReportSummaryGroupPreferenceSetFinding {
    /**
     * Output only. Details about databases in this finding. Only present for databases.
     */
    databaseFinding?: Schema$ReportSummaryDatabaseFinding;
    /**
     * Description for the Preference Set.
     */
    description?: string | null;
    /**
     * Display Name of the Preference Set
     */
    displayName?: string | null;
    /**
     * Output only. A set of findings that applies to all virtual machines in the input. Only present for virtual machines.
     */
    machineFinding?: Schema$ReportSummaryMachineFinding;
    /**
     * A set of preferences that applies to all machines in the context.
     */
    machinePreferences?: Schema$VirtualMachinePreferences;
    /**
     * Output only. Compute monthly cost for this preference set.
     */
    monthlyCostCompute?: Schema$Money;
    /**
     * Output only. Backup monthly cost for this preference set. Only present for databases.
     */
    monthlyCostDatabaseBackup?: Schema$Money;
    /**
     * Output only. Database licensing monthly cost for this preference set. Only present for databases.
     */
    monthlyCostDatabaseLicensing?: Schema$Money;
    /**
     * Output only. GCVE Protected nodes cost for this preference set.
     */
    monthlyCostGcveProtected?: Schema$Money;
    /**
     * Output only. Network Egress monthly cost for this preference set. Only present for virtual machines.
     */
    monthlyCostNetworkEgress?: Schema$Money;
    /**
     * Output only. All operating systems licensing monthly cost for this preference set. Only present for virtual machines.
     */
    monthlyCostOsLicense?: Schema$Money;
    /**
     * Output only. Miscellaneous monthly cost for this preference set.
     */
    monthlyCostOther?: Schema$Money;
    /**
     * Output only. VMware portable license monthly cost for this preference set. Only present for VMware target with portable license service type. This cost is not paid to google, but is an estimate of license costs paid to VMware.
     */
    monthlyCostPortableVmwareLicense?: Schema$Money;
    /**
     * Output only. Storage monthly cost for this preference set.
     */
    monthlyCostStorage?: Schema$Money;
    /**
     * Output only. Total monthly cost for this preference set.
     */
    monthlyCostTotal?: Schema$Money;
    /**
     * Output only. A copy of the preference set used for this finding.
     */
    preferenceSet?: Schema$PreferenceSet;
    /**
     * Target region for this Preference Set
     */
    preferredRegion?: string | null;
    /**
     * Text describing the pricing track specified for this Preference Set
     */
    pricingTrack?: string | null;
    /**
     * A set of findings that applies to Stole-Tenant machines in the input. Only present for virtual machines.
     */
    soleTenantFinding?: Schema$ReportSummarySoleTenantFinding;
    /**
     * Text describing the business priority specified for this Preference Set
     */
    topPriority?: string | null;
    /**
     * A set of findings that applies to VMWare machines in the input. Only present for virtual machines.
     */
    vmwareEngineFinding?: Schema$ReportSummaryVMWareEngineFinding;
  }
  /**
   * A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket.
   */
  export interface Schema$ReportSummaryHistogramChartData {
    /**
     * Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.
     */
    buckets?: Schema$ReportSummaryHistogramChartDataBucket[];
  }
  /**
   * A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.
   */
  export interface Schema$ReportSummaryHistogramChartDataBucket {
    /**
     * Count of items in the bucket.
     */
    count?: string | null;
    /**
     * Lower bound - inclusive.
     */
    lowerBound?: string | null;
    /**
     * Upper bound - exclusive.
     */
    upperBound?: string | null;
  }
  /**
   * A set of findings that applies to assets of type Virtual/Physical Machine.
   */
  export interface Schema$ReportSummaryMachineFinding {
    /**
     * Count of assets which were allocated.
     */
    allocatedAssetCount?: string | null;
    /**
     * Set of disk types allocated to assets.
     */
    allocatedDiskTypes?: string[] | null;
    /**
     * Set of regions in which the assets were allocated.
     */
    allocatedRegions?: string[] | null;
    /**
     * Distribution of assets based on the Machine Series.
     */
    machineSeriesAllocations?: Schema$ReportSummaryMachineSeriesAllocation[];
  }
  /**
   * Represents a data point tracking the count of assets allocated for a specific Machine Series.
   */
  export interface Schema$ReportSummaryMachineSeriesAllocation {
    /**
     * Count of assets allocated to this machine series.
     */
    allocatedAssetCount?: string | null;
    /**
     * The Machine Series (e.g. "E2", "N2")
     */
    machineSeries?: Schema$MachineSeries;
  }
  /**
   * A set of findings that applies to assets destined for Sole-Tenant nodes.
   */
  export interface Schema$ReportSummarySoleTenantFinding {
    /**
     * Count of assets which are allocated
     */
    allocatedAssetCount?: string | null;
    /**
     * Set of regions in which the assets are allocated
     */
    allocatedRegions?: string[] | null;
    /**
     * Set of per-nodetype allocation records
     */
    nodeAllocations?: Schema$ReportSummarySoleTenantNodeAllocation[];
  }
  /**
   * Represents the assets allocated to a specific Sole-Tenant node type.
   */
  export interface Schema$ReportSummarySoleTenantNodeAllocation {
    /**
     * Count of assets allocated to these nodes
     */
    allocatedAssetCount?: string | null;
    /**
     * Sole Tenant node type, e.g. "m3-node-128-3904"
     */
    node?: Schema$SoleTenantNodeType;
    /**
     * Count of this node type to be provisioned
     */
    nodeCount?: string | null;
  }
  /**
   * Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets.
   */
  export interface Schema$ReportSummaryUtilizationChartData {
    /**
     * Aggregate value which falls into the "Free" bucket.
     */
    free?: string | null;
    /**
     * Aggregate value which falls into the "Used" bucket.
     */
    used?: string | null;
  }
  /**
   * A set of findings that applies to assets destined for VMWare Engine.
   */
  export interface Schema$ReportSummaryVMWareEngineFinding {
    /**
     * Count of assets which are allocated
     */
    allocatedAssetCount?: string | null;
    /**
     * Set of regions in which the assets were allocated
     */
    allocatedRegions?: string[] | null;
    /**
     * Set of per-nodetype allocation records
     */
    nodeAllocations?: Schema$ReportSummaryVMWareNodeAllocation[];
  }
  /**
   * A VMWare Engine Node
   */
  export interface Schema$ReportSummaryVMWareNode {
    /**
     * Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes
     */
    code?: string | null;
  }
  /**
   * Represents assets allocated to a specific VMWare Node type.
   */
  export interface Schema$ReportSummaryVMWareNodeAllocation {
    /**
     * Count of assets allocated to these nodes
     */
    allocatedAssetCount?: string | null;
    /**
     * Count of this node type to be provisioned
     */
    nodeCount?: string | null;
    /**
     * VMWare node type, e.g. "ve1-standard-72"
     */
    vmwareNode?: Schema$ReportSummaryVMWareNode;
  }
  /**
   * A request to run an assets export job.
   */
  export interface Schema$RunAssetsExportJobRequest {
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Response message for running an assets export job.
   */
  export interface Schema$RunAssetsExportJobResponse {
    /**
     * Output only. Execution status of the assets export operation.
     */
    assetsExportJobExecution?: Schema$AssetsExportJobExecution;
  }
  /**
   * A request to run an import job.
   */
  export interface Schema$RunImportJobRequest {
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Guest OS running process details.
   */
  export interface Schema$RunningProcess {
    /**
     * Process extended attributes.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Process full command line.
     */
    cmdline?: string | null;
    /**
     * Process binary path.
     */
    exePath?: string | null;
    /**
     * Process ID.
     */
    pid?: string | null;
    /**
     * User running the process.
     */
    user?: string | null;
  }
  /**
   * List of running guest OS processes.
   */
  export interface Schema$RunningProcessList {
    /**
     * Running process entries.
     */
    processes?: Schema$RunningProcess[];
  }
  /**
   * Guest OS running service details.
   */
  export interface Schema$RunningService {
    /**
     * Service command line.
     */
    cmdline?: string | null;
    /**
     * Service binary path.
     */
    exePath?: string | null;
    /**
     * Service name.
     */
    name?: string | null;
    /**
     * Service pid.
     */
    pid?: string | null;
    /**
     * Service start mode (raw, OS-agnostic).
     */
    startMode?: string | null;
    /**
     * Service state (raw, OS-agnostic).
     */
    state?: string | null;
    /**
     * Service status.
     */
    status?: string | null;
  }
  /**
   * List of running guest OS services.
   */
  export interface Schema$RunningServiceList {
    /**
     * Running service entries.
     */
    services?: Schema$RunningService[];
  }
  /**
   * Runtime networking information.
   */
  export interface Schema$RuntimeNetworkInfo {
    /**
     * Network connections.
     */
    connections?: Schema$NetworkConnectionList;
    /**
     * Netstat (raw, OS-agnostic).
     */
    netstat?: string | null;
    /**
     * Netstat time collected.
     */
    netstatTime?: Schema$DateTime;
  }
  /**
   * SELinux details.
   */
  export interface Schema$Selinux {
    /**
     * Is SELinux enabled.
     */
    enabled?: boolean | null;
    /**
     * SELinux mode enforcing / permissive.
     */
    mode?: string | null;
  }
  /**
   * A request to send a discovery client heartbeat.
   */
  export interface Schema$SendDiscoveryClientHeartbeatRequest {
    /**
     * Optional. Errors affecting client functionality.
     */
    errors?: Schema$Status[];
    /**
     * Optional. Client application version.
     */
    version?: string | null;
  }
  /**
   * Describes the Migration Center settings related to the project.
   */
  export interface Schema$Settings {
    /**
     * Customer consent for Google sales to access their Cloud Migration Center project.
     */
    customerConsentForGoogleSalesToAccessMigrationCenter?: boolean | null;
    /**
     * Disable Cloud Logging for the Migration Center API. Users are billed for the logs.
     */
    disableCloudLogging?: boolean | null;
    /**
     * Output only. The name of the resource.
     */
    name?: string | null;
    /**
     * The preference set used by default for a project.
     */
    preferenceSet?: string | null;
  }
  /**
   * Contains a signed URI.
   */
  export interface Schema$SignedUri {
    /**
     * Output only. Name of the file the Signed URI references.
     */
    file?: string | null;
    /**
     * Output only. Download URI for the file.
     */
    uri?: string | null;
  }
  /**
   * Signed URI destination configuration.
   */
  export interface Schema$SignedUriDestination {
    /**
     * Required. The file format to export.
     */
    fileFormat?: string | null;
  }
  /**
   * Contains a list of Signed URIs.
   */
  export interface Schema$SignedUris {
    /**
     * Output only. List of signed URIs.
     */
    signedUris?: Schema$SignedUri[];
  }
  /**
   * An insight regarding software detected on an asset.
   */
  export interface Schema$SoftwareInsight {
    /**
     * Output only. Information about the detected software.
     */
    detectedSoftware?: Schema$DetectedSoftware;
  }
  /**
   * Preferences concerning Sole Tenancy nodes and VMs.
   */
  export interface Schema$SoleTenancyPreferences {
    /**
     * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
     */
    commitmentPlan?: string | null;
    /**
     * CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
     */
    cpuOvercommitRatio?: number | null;
    /**
     * Sole Tenancy nodes maintenance policy.
     */
    hostMaintenancePolicy?: string | null;
    /**
     * A list of sole tenant node types. An empty list means that all possible node types will be considered.
     */
    nodeTypes?: Schema$SoleTenantNodeType[];
    /**
     * Optional. Pricing options for OS images.
     */
    osPricingPreferences?: Schema$OperatingSystemPricingPreferences;
  }
  /**
   * A Sole Tenant node type.
   */
  export interface Schema$SoleTenantNodeType {
    /**
     * Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes
     */
    nodeName?: string | null;
  }
  /**
   * Source represents an object from which asset information is streamed to Migration Center.
   */
  export interface Schema$Source {
    /**
     * Output only. The timestamp when the source was created.
     */
    createTime?: string | null;
    /**
     * Free-text description.
     */
    description?: string | null;
    /**
     * User-friendly display name.
     */
    displayName?: string | null;
    /**
     * Output only. The number of frames that were reported by the source and contained errors.
     */
    errorFrameCount?: number | null;
    /**
     * If `true`, the source is managed by other service(s).
     */
    isManaged?: boolean | null;
    /**
     * Output only. The full name of the source.
     */
    name?: string | null;
    /**
     * Output only. Number of frames that are still being processed.
     */
    pendingFrameCount?: number | null;
    /**
     * The information confidence of the source. The higher the value, the higher the confidence.
     */
    priority?: number | null;
    /**
     * Output only. The state of the source.
     */
    state?: string | null;
    /**
     * Data source type.
     */
    type?: string | null;
    /**
     * Output only. The timestamp when the source was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Specific details for a Microsoft SQL Server database deployment.
   */
  export interface Schema$SqlServerDatabaseDeployment {
    /**
     * Optional. List of SQL Server features.
     */
    features?: Schema$SqlServerFeature[];
    /**
     * Optional. List of SQL Server server flags.
     */
    serverFlags?: Schema$SqlServerServerFlag[];
    /**
     * Optional. List of SQL Server trace flags.
     */
    traceFlags?: Schema$SqlServerTraceFlag[];
  }
  /**
   * SQL Server feature details.
   */
  export interface Schema$SqlServerFeature {
    /**
     * Required. Field enabled is set when a feature is used on the source deployment.
     */
    enabled?: boolean | null;
    /**
     * Required. The feature name.
     */
    featureName?: string | null;
  }
  /**
   * Specific details for a SqlServer database.
   */
  export interface Schema$SqlServerSchemaDetails {
    /**
     * Optional. SqlServer number of CLR objects.
     */
    clrObjectCount?: number | null;
  }
  /**
   * SQL Server server flag details.
   */
  export interface Schema$SqlServerServerFlag {
    /**
     * Required. The server flag name.
     */
    serverFlagName?: string | null;
    /**
     * Required. The server flag value set by the user.
     */
    value?: string | null;
    /**
     * Required. The server flag actual value. If `value_in_use` is different from `value` it means that either the configuration change was not applied or it is an expected behavior. See SQL Server documentation for more details.
     */
    valueInUse?: string | null;
  }
  /**
   * SQL Server trace flag details.
   */
  export interface Schema$SqlServerTraceFlag {
    /**
     * Required. The trace flag scope.
     */
    scope?: string | null;
    /**
     * Required. The trace flag name.
     */
    traceFlagName?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
  }
  /**
   * A request to update an asset.
   */
  export interface Schema$UpdateAssetRequest {
    /**
     * Required. The resource being updated.
     */
    asset?: Schema$Asset;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string | null;
  }
  /**
   * A resource that contains a URI to which a data file can be uploaded.
   */
  export interface Schema$UploadFileInfo {
    /**
     * Output only. The headers that were used to sign the URL.
     */
    headers?: {[key: string]: string} | null;
    /**
     * Output only. Upload URI for the file.
     */
    signedUri?: string | null;
    /**
     * Output only. Expiration time of the upload URI.
     */
    uriExpirationTime?: string | null;
  }
  /**
   * A request to validate an import job.
   */
  export interface Schema$ValidateImportJobRequest {
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * A resource that aggregates errors across import job files.
   */
  export interface Schema$ValidationReport {
    /**
     * List of errors found in files.
     */
    fileValidations?: Schema$FileValidationReport[];
    /**
     * List of job level errors.
     */
    jobErrors?: Schema$ImportError[];
  }
  /**
   * Details of the VM architecture.
   */
  export interface Schema$VirtualMachineArchitectureDetails {
    /**
     * BIOS Details.
     */
    bios?: Schema$BiosDetails;
    /**
     * CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.
     */
    cpuArchitecture?: string | null;
    /**
     * CPU manufacturer, e.g., "Intel", "AMD".
     */
    cpuManufacturer?: string | null;
    /**
     * CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.
     */
    cpuName?: string | null;
    /**
     * Number of processor sockets allocated to the machine.
     */
    cpuSocketCount?: number | null;
    /**
     * Deprecated: use VirtualMachineDetails.core_count instead. Number of CPU threads allocated to the machine.
     */
    cpuThreadCount?: number | null;
    /**
     * Firmware (BIOS/efi).
     */
    firmware?: string | null;
    /**
     * CPU hyperthreading support.
     */
    hyperthreading?: string | null;
    /**
     * Hardware vendor.
     */
    vendor?: string | null;
  }
  /**
   * Details of a VirtualMachine.
   */
  export interface Schema$VirtualMachineDetails {
    /**
     * Number of logical CPU cores in the VirtualMachine. Must be non-negative.
     */
    coreCount?: number | null;
    /**
     * VM creation timestamp.
     */
    createTime?: string | null;
    /**
     * Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks.
     */
    diskPartitions?: Schema$DiskPartitionDetails;
    /**
     * Guest OS information.
     */
    guestOs?: Schema$GuestOsDetails;
    /**
     * The amount of memory in the VirtualMachine. Must be non-negative.
     */
    memoryMb?: number | null;
    /**
     * What family the OS belong to, if known.
     */
    osFamily?: string | null;
    /**
     * The name of the operating system running on the VirtualMachine.
     */
    osName?: string | null;
    /**
     * The version of the operating system running on the virtual machine.
     */
    osVersion?: string | null;
    /**
     * Platform information.
     */
    platform?: Schema$PlatformDetails;
    /**
     * Power state of VM (poweredOn or poweredOff).
     */
    powerState?: string | null;
    /**
     * Folder name in vCenter where asset resides.
     */
    vcenterFolder?: string | null;
    /**
     * vCenter URL used in collection.
     */
    vcenterUrl?: string | null;
    /**
     * vCenter VM ID.
     */
    vcenterVmId?: string | null;
    /**
     * VM architecture details (vendor, cpu arch).
     */
    vmArchitecture?: Schema$VirtualMachineArchitectureDetails;
    /**
     * VM disk details.
     */
    vmDisks?: Schema$VirtualMachineDiskDetails;
    /**
     * Virtual Machine display name.
     */
    vmName?: string | null;
    /**
     * VM network details.
     */
    vmNetwork?: Schema$VirtualMachineNetworkDetails;
    /**
     * Virtual Machine unique identifier.
     */
    vmUuid?: string | null;
  }
  /**
   * Details of VM disks.
   */
  export interface Schema$VirtualMachineDiskDetails {
    /**
     * List of disks.
     */
    disks?: Schema$DiskEntryList;
    /**
     * Disk total Capacity.
     */
    hddTotalCapacityBytes?: string | null;
    /**
     * Total Disk Free Space.
     */
    hddTotalFreeBytes?: string | null;
    /**
     * Raw lsblk output in json.
     */
    lsblkJson?: string | null;
  }
  /**
   * Details of network adapters and settings.
   */
  export interface Schema$VirtualMachineNetworkDetails {
    /**
     * Default gateway address.
     */
    defaultGw?: string | null;
    /**
     * List of network adapters.
     */
    networkAdapters?: Schema$NetworkAdapterList;
    /**
     * IP address of the machine.
     */
    primaryIpAddress?: string | null;
    /**
     * MAC address of the machine. This property is used to uniqly identify the machine.
     */
    primaryMacAddress?: string | null;
    /**
     * Public IP address of the machine.
     */
    publicIpAddress?: string | null;
  }
  /**
   * VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
   */
  export interface Schema$VirtualMachinePreferences {
    /**
     * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
     */
    commitmentPlan?: string | null;
    /**
     * Optional. Compute Engine preferences concern insights and recommendations for Compute Engine target.
     */
    computeEnginePreferences?: Schema$ComputeEnginePreferences;
    /**
     * Optional. Parameters that affect network cost estimations. If not set, default values will be used for the parameters.
     */
    networkCostParameters?: Schema$VirtualMachinePreferencesNetworkCostParameters;
    /**
     * Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. If PreferenceSet.RegionPreferences is specified, it overrides this field.
     */
    regionPreferences?: Schema$RegionPreferences;
    /**
     * Optional. Custom data to use for sizing optimizations. Relevant when SizingOptimizationStrategy is set to "custom".
     */
    sizingOptimizationCustomParameters?: Schema$VirtualMachinePreferencesSizingOptimizationCustomParameters;
    /**
     * Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
     */
    sizingOptimizationStrategy?: string | null;
    /**
     * Preferences concerning Sole Tenant nodes and virtual machines.
     */
    soleTenancyPreferences?: Schema$SoleTenancyPreferences;
    /**
     * Target product for assets using this preference set. Specify either target product or business goal, but not both.
     */
    targetProduct?: string | null;
    /**
     * Preferences concerning insights and recommendations for Google Cloud VMware Engine.
     */
    vmwareEnginePreferences?: Schema$VmwareEnginePreferences;
  }
  /**
   * Parameters that affect network cost estimations.
   */
  export interface Schema$VirtualMachinePreferencesNetworkCostParameters {
    /**
     * Optional. An estimated percentage of priced outbound traffic (egress traffic) from the measured outbound traffic. Must be in the interval [0, 100].
     */
    estimatedEgressTrafficPercentage?: number | null;
  }
  /**
   * Custom data to use for sizing optimizations.
   */
  export interface Schema$VirtualMachinePreferencesSizingOptimizationCustomParameters {
    /**
     * Optional. Type of statistical aggregation of a resource utilization data, on which to base the sizing metrics.
     */
    aggregationMethod?: string | null;
    /**
     * Optional. Desired percentage of CPU usage. Must be in the interval [1, 100] (or 0 for default value).
     */
    cpuUsagePercentage?: number | null;
    /**
     * Optional. Desired percentage of memory usage. Must be in the interval [1, 100] (or 0 for default value).
     */
    memoryUsagePercentage?: number | null;
    /**
     * Optional. Desired increase factor of storage, relative to currently used storage. Must be in the interval [1.0, 2.0] (or 0 for default value).
     */
    storageMultiplier?: number | null;
  }
  /**
   * The type of machines to consider when calculating virtual machine migration insights and recommendations for VMware Engine. Not all machine types are available in all zones and regions.
   */
  export interface Schema$VMwareEngineMachinePreferences {
    /**
     * Optional. VMware Engine on Google Cloud machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
     */
    allowedMachineSeries?: Schema$MachineSeries[];
    /**
     * Optional. Whether to use VMware Engine Protected offering.
     */
    protectedNodes?: string | null;
    /**
     * Optional. Whether to use storage-only nodes, if those are available.
     */
    storageOnlyNodes?: string | null;
  }
  /**
   * VMWare engine migration target.
   */
  export interface Schema$VmwareEngineMigrationTarget {}
  /**
   * The user preferences relating to Google Cloud VMware Engine target platform.
   */
  export interface Schema$VmwareEnginePreferences {
    /**
     * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
     */
    commitmentPlan?: string | null;
    /**
     * CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
     */
    cpuOvercommitRatio?: number | null;
    /**
     * Optional. Discount percentage for the license offered to you by Broadcom. Must be between 0 and 100. Only valid when service_type is set to SERVICE_TYPE_PORTABLE_LICENSE.
     */
    licenseDiscountPercentage?: number | null;
    /**
     * Optional. Preferences concerning the machine types to consider on Google Cloud VMware Engine.
     */
    machinePreferences?: Schema$VMwareEngineMachinePreferences;
    /**
     * Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
     */
    memoryOvercommitRatio?: number | null;
    /**
     * Optional. GCVE service type (fully licensed or portable license).
     */
    serviceType?: string | null;
    /**
     * The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
     */
    storageDeduplicationCompressionRatio?: number | null;
  }
  /**
   * VMware specific details.
   */
  export interface Schema$VmwarePlatformDetails {
    /**
     * Whether the ESX is hyperthreaded.
     */
    esxHyperthreading?: string | null;
    /**
     * ESX version.
     */
    esxVersion?: string | null;
    /**
     * VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html.
     */
    osid?: string | null;
    /**
     * vCenter version.
     */
    vcenterVersion?: string | null;
  }
  /**
   * Contains a single output file of type XLSX.
   */
  export interface Schema$XlsxOutputFile {
    /**
     * Output only. Signed URI destination.
     */
    signedUri?: Schema$SignedUri;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    assets: Resource$Projects$Locations$Assets;
    assetsExportJobs: Resource$Projects$Locations$Assetsexportjobs;
    discoveryClients: Resource$Projects$Locations$Discoveryclients;
    groups: Resource$Projects$Locations$Groups;
    importJobs: Resource$Projects$Locations$Importjobs;
    operations: Resource$Projects$Locations$Operations;
    preferenceSets: Resource$Projects$Locations$Preferencesets;
    relations: Resource$Projects$Locations$Relations;
    reportConfigs: Resource$Projects$Locations$Reportconfigs;
    sources: Resource$Projects$Locations$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Projects$Locations$Assets(this.context);
      this.assetsExportJobs = new Resource$Projects$Locations$Assetsexportjobs(
        this.context
      );
      this.discoveryClients = new Resource$Projects$Locations$Discoveryclients(
        this.context
      );
      this.groups = new Resource$Projects$Locations$Groups(this.context);
      this.importJobs = new Resource$Projects$Locations$Importjobs(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.preferenceSets = new Resource$Projects$Locations$Preferencesets(
        this.context
      );
      this.relations = new Resource$Projects$Locations$Relations(this.context);
      this.reportConfigs = new Resource$Projects$Locations$Reportconfigs(
        this.context
      );
      this.sources = new Resource$Projects$Locations$Sources(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Gets the details of regional settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.getSettings({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/settings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customerConsentForGoogleSalesToAccessMigrationCenter": false,
     *   //   "disableCloudLogging": false,
     *   //   "name": "my_name",
     *   //   "preferenceSet": "my_preferenceSet"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSettings(
      params?: Params$Resource$Projects$Locations$Getsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Getsettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getsettings
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Settings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }

    /**
     * Updates the regional-level project settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.updateSettings({
     *     // Output only. The name of the resource.
     *     name: 'projects/my-project/locations/my-location/settings',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customerConsentForGoogleSalesToAccessMigrationCenter": false,
     *       //   "disableCloudLogging": false,
     *       //   "name": "my_name",
     *       //   "preferenceSet": "my_preferenceSet"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSettings(
      params?: Params$Resource$Projects$Locations$Updatesettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Updatesettings,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSettings(callback: BodyResponseCallback<Schema$Operation>): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updatesettings
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Getsettings
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Updatesettings
    extends StandardParameters {
    /**
     * Output only. The name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Settings;
  }

  export class Resource$Projects$Locations$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Aggregates the requested fields based on provided function.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.aggregateValues({
     *     // Required. Parent value for `AggregateAssetsValuesRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregations": [],
     *       //   "filter": "my_filter",
     *       //   "showHidden": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    aggregateValues(
      params: Params$Resource$Projects$Locations$Assets$Aggregatevalues,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateValues(
      params?: Params$Resource$Projects$Locations$Assets$Aggregatevalues,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateAssetsValuesResponse>>;
    aggregateValues(
      params: Params$Resource$Projects$Locations$Assets$Aggregatevalues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateValues(
      params: Params$Resource$Projects$Locations$Assets$Aggregatevalues,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateAssetsValuesResponse>,
      callback: BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
    ): void;
    aggregateValues(
      params: Params$Resource$Projects$Locations$Assets$Aggregatevalues,
      callback: BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
    ): void;
    aggregateValues(
      callback: BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
    ): void;
    aggregateValues(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Aggregatevalues
        | BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateAssetsValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateAssetsValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Aggregatevalues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Assets$Aggregatevalues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+parent}/assets:aggregateValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AggregateAssetsValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateAssetsValuesResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes list of Assets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.batchDelete({
     *     // Required. Parent value for batch asset delete.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowMissing": false,
     *       //   "cascadingRules": [],
     *       //   "names": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Locations$Assets$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Projects$Locations$Assets$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    batchDelete(
      params: Params$Resource$Projects$Locations$Assets$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Assets$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Locations$Assets$Batchdelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Batchdelete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/assets:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Updates the parameters of a list of assets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.batchUpdate({
     *     // Required. Parent value for batch asset update.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assets": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Projects$Locations$Assets$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Projects$Locations$Assets$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateAssetsResponse>>;
    batchUpdate(
      params: Params$Resource$Projects$Locations$Assets$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Locations$Assets$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateAssetsResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Locations$Assets$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateAssetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/assets:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateAssetsResponse>(parameters);
      }
    }

    /**
     * Deletes an asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.delete({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/assets/my-asset',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Assets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Assets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Assets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Assets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Assets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the details of an asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/assets/my-asset',
     *     // View of the assets. Defaults to BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignedGroups": [],
     *   //   "attributes": {},
     *   //   "createTime": "my_createTime",
     *   //   "databaseDeploymentDetails": {},
     *   //   "databaseDetails": {},
     *   //   "hidden": false,
     *   //   "hideReason": "my_hideReason",
     *   //   "hideTime": "my_hideTime",
     *   //   "insightList": {},
     *   //   "labels": {},
     *   //   "machineDetails": {},
     *   //   "name": "my_name",
     *   //   "performanceData": {},
     *   //   "sources": [],
     *   //   "title": "my_title",
     *   //   "updateTime": "my_updateTime",
     *   //   "virtualMachineDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Assets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Assets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Asset>>;
    get(
      params: Params$Resource$Projects$Locations$Assets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Assets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Assets$Get,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Asset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Get
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Asset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }

    /**
     * Lists all the assets in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListAssetsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
     *     showHidden: 'placeholder-value',
     *     // View of the assets. Defaults to BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assets": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Assets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Assets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/assets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of an asset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.patch({
     *     // Output only. The full name of the asset.
     *     name: 'projects/my-project/locations/my-location/assets/my-asset',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignedGroups": [],
     *       //   "attributes": {},
     *       //   "createTime": "my_createTime",
     *       //   "databaseDeploymentDetails": {},
     *       //   "databaseDetails": {},
     *       //   "hidden": false,
     *       //   "hideReason": "my_hideReason",
     *       //   "hideTime": "my_hideTime",
     *       //   "insightList": {},
     *       //   "labels": {},
     *       //   "machineDetails": {},
     *       //   "name": "my_name",
     *       //   "performanceData": {},
     *       //   "sources": [],
     *       //   "title": "my_title",
     *       //   "updateTime": "my_updateTime",
     *       //   "virtualMachineDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignedGroups": [],
     *   //   "attributes": {},
     *   //   "createTime": "my_createTime",
     *   //   "databaseDeploymentDetails": {},
     *   //   "databaseDetails": {},
     *   //   "hidden": false,
     *   //   "hideReason": "my_hideReason",
     *   //   "hideTime": "my_hideTime",
     *   //   "insightList": {},
     *   //   "labels": {},
     *   //   "machineDetails": {},
     *   //   "name": "my_name",
     *   //   "performanceData": {},
     *   //   "sources": [],
     *   //   "title": "my_title",
     *   //   "updateTime": "my_updateTime",
     *   //   "virtualMachineDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Assets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Assets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Asset>>;
    patch(
      params: Params$Resource$Projects$Locations$Assets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Assets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Asset>,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Assets$Patch,
      callback: BodyResponseCallback<Schema$Asset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Asset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Patch
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Asset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Asset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }

    /**
     * Reports a set of frames.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assets.reportAssetFrames(
     *     {
     *       // Required. Parent of the resource.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Required. Reference to a source.
     *       source: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "framesData": []
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reportAssetFrames(
      params: Params$Resource$Projects$Locations$Assets$Reportassetframes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reportAssetFrames(
      params?: Params$Resource$Projects$Locations$Assets$Reportassetframes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportAssetFramesResponse>>;
    reportAssetFrames(
      params: Params$Resource$Projects$Locations$Assets$Reportassetframes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportAssetFrames(
      params: Params$Resource$Projects$Locations$Assets$Reportassetframes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportAssetFramesResponse>,
      callback: BodyResponseCallback<Schema$ReportAssetFramesResponse>
    ): void;
    reportAssetFrames(
      params: Params$Resource$Projects$Locations$Assets$Reportassetframes,
      callback: BodyResponseCallback<Schema$ReportAssetFramesResponse>
    ): void;
    reportAssetFrames(
      callback: BodyResponseCallback<Schema$ReportAssetFramesResponse>
    ): void;
    reportAssetFrames(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assets$Reportassetframes
        | BodyResponseCallback<Schema$ReportAssetFramesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportAssetFramesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportAssetFramesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportAssetFramesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assets$Reportassetframes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Assets$Reportassetframes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha1/{+parent}/assets:reportAssetFrames'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportAssetFramesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportAssetFramesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Assets$Aggregatevalues
    extends StandardParameters {
    /**
     * Required. Parent value for `AggregateAssetsValuesRequest`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateAssetsValuesRequest;
  }
  export interface Params$Resource$Projects$Locations$Assets$Batchdelete
    extends StandardParameters {
    /**
     * Required. Parent value for batch asset delete.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteAssetsRequest;
  }
  export interface Params$Resource$Projects$Locations$Assets$Batchupdate
    extends StandardParameters {
    /**
     * Required. Parent value for batch asset update.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateAssetsRequest;
  }
  export interface Params$Resource$Projects$Locations$Assets$Delete
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Assets$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * View of the assets. Defaults to BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Assets$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListAssetsRequest`.
     */
    parent?: string;
    /**
     * Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
     */
    showHidden?: boolean;
    /**
     * View of the assets. Defaults to BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Assets$Patch
    extends StandardParameters {
    /**
     * Output only. The full name of the asset.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Asset;
  }
  export interface Params$Resource$Projects$Locations$Assets$Reportassetframes
    extends StandardParameters {
    /**
     * Required. Parent of the resource.
     */
    parent?: string;
    /**
     * Required. Reference to a source.
     */
    source?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Frames;
  }

  export class Resource$Projects$Locations$Assetsexportjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new assets export job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assetsExportJobs.create({
     *     // Required. The ID to use for the asset export job.
     *     assetsExportJobId: 'placeholder-value',
     *     // Required. The parent resource where the assts export job will be created.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "condition": {},
     *       //   "createTime": "my_createTime",
     *       //   "inventory": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "networkDependencies": {},
     *       //   "performanceData": {},
     *       //   "recentExecutions": [],
     *       //   "showHidden": false,
     *       //   "signedUriDestination": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Assetsexportjobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assetsexportjobs$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assetsexportjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Assetsexportjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/assetsExportJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes an assets export job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assetsExportJobs.delete({
     *     // Required. The name of the assets export job to delete.
     *     name: 'projects/my-project/locations/my-location/assetsExportJobs/my-assetsExportJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Assetsexportjobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assetsexportjobs$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assetsexportjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Assetsexportjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of an assets export job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assetsExportJobs.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/assetsExportJobs/my-assetsExportJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "condition": {},
     *   //   "createTime": "my_createTime",
     *   //   "inventory": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "networkDependencies": {},
     *   //   "performanceData": {},
     *   //   "recentExecutions": [],
     *   //   "showHidden": false,
     *   //   "signedUriDestination": {},
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Assetsexportjobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AssetsExportJob>>;
    get(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AssetsExportJob>,
      callback: BodyResponseCallback<Schema$AssetsExportJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Get,
      callback: BodyResponseCallback<Schema$AssetsExportJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$AssetsExportJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assetsexportjobs$Get
        | BodyResponseCallback<Schema$AssetsExportJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AssetsExportJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AssetsExportJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AssetsExportJob>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assetsexportjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assetsexportjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AssetsExportJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AssetsExportJob>(parameters);
      }
    }

    /**
     * Lists all the assets export jobs in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assetsExportJobs.list({
     *     // Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results that the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetsExportJobs": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Assetsexportjobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsExportJobsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAssetsExportJobsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$List,
      callback: BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assetsexportjobs$List
        | BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsExportJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsExportJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assetsexportjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assetsexportjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/assetsExportJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAssetsExportJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsExportJobsResponse>(
          parameters
        );
      }
    }

    /**
     * Runs an assets export job, returning an AssetsExportJobExecution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.assetsExportJobs.run({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/assetsExportJobs/my-assetsExportJob',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    run(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Assetsexportjobs$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Assetsexportjobs$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Assetsexportjobs$Run
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Assetsexportjobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Assetsexportjobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:run').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Assetsexportjobs$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the asset export job.
     */
    assetsExportJobId?: string;
    /**
     * Required. The parent resource where the assts export job will be created.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AssetsExportJob;
  }
  export interface Params$Resource$Projects$Locations$Assetsexportjobs$Delete
    extends StandardParameters {
    /**
     * Required. The name of the assets export job to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Assetsexportjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Assetsexportjobs$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Assetsexportjobs$Run
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAssetsExportJobRequest;
  }

  export class Resource$Projects$Locations$Discoveryclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new discovery client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.discoveryClients.create({
     *     // Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     *     discoveryClientId: 'placeholder-value',
     *     // Required. Parent resource.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "errors": [],
     *       //   "expireTime": "my_expireTime",
     *       //   "heartbeatTime": "my_heartbeatTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "recommendedVersions": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "signalsEndpoint": "my_signalsEndpoint",
     *       //   "source": "my_source",
     *       //   "state": "my_state",
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Discoveryclients$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Discoveryclients$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Discoveryclients$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Discoveryclients$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Discoveryclients$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Discoveryclients$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/discoveryClients').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a discovery client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.discoveryClients.delete({
     *     // Required. The discovery client name.
     *     name: 'projects/my-project/locations/my-location/discoveryClients/my-discoveryClient',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Discoveryclients$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Discoveryclients$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Discoveryclients$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Discoveryclients$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Discoveryclients$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Discoveryclients$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of a discovery client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.discoveryClients.get({
     *     // Required. The discovery client name.
     *     name: 'projects/my-project/locations/my-location/discoveryClients/my-discoveryClient',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "errors": [],
     *   //   "expireTime": "my_expireTime",
     *   //   "heartbeatTime": "my_heartbeatTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "recommendedVersions": [],
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "signalsEndpoint": "my_signalsEndpoint",
     *   //   "source": "my_source",
     *   //   "state": "my_state",
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Discoveryclients$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Discoveryclients$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DiscoveryClient>>;
    get(
      params: Params$Resource$Projects$Locations$Discoveryclients$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Discoveryclients$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DiscoveryClient>,
      callback: BodyResponseCallback<Schema$DiscoveryClient>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Discoveryclients$Get,
      callback: BodyResponseCallback<Schema$DiscoveryClient>
    ): void;
    get(callback: BodyResponseCallback<Schema$DiscoveryClient>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$Get
        | BodyResponseCallback<Schema$DiscoveryClient>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DiscoveryClient>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DiscoveryClient>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DiscoveryClient>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Discoveryclients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DiscoveryClient>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DiscoveryClient>(parameters);
      }
    }

    /**
     * Lists all the discovery clients in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.discoveryClients.list({
     *     // Optional. Filter expression to filter results by.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListDiscoveryClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveryClients` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "discoveryClients": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Discoveryclients$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Discoveryclients$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDiscoveryClientsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Discoveryclients$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Discoveryclients$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDiscoveryClientsResponse>,
      callback: BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Discoveryclients$List,
      callback: BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$List
        | BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDiscoveryClientsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDiscoveryClientsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Discoveryclients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/discoveryClients').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDiscoveryClientsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDiscoveryClientsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a discovery client.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.discoveryClients.patch({
     *     // Output only. Identifier. Full name of this discovery client.
     *     name: 'projects/my-project/locations/my-location/discoveryClients/my-discoveryClient',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Update mask is used to specify the fields to be overwritten in the `DiscoveryClient` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "errors": [],
     *       //   "expireTime": "my_expireTime",
     *       //   "heartbeatTime": "my_heartbeatTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "recommendedVersions": [],
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "signalsEndpoint": "my_signalsEndpoint",
     *       //   "source": "my_source",
     *       //   "state": "my_state",
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Discoveryclients$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Discoveryclients$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Discoveryclients$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Discoveryclients$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Discoveryclients$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Discoveryclients$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.discoveryClients.sendHeartbeat({
     *       // Required. The discovery client name.
     *       name: 'projects/my-project/locations/my-location/discoveryClients/my-discoveryClient',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "errors": [],
     *         //   "version": "my_version"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    sendHeartbeat(
      params: Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    sendHeartbeat(
      params?: Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    sendHeartbeat(
      params: Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendHeartbeat(
      params: Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    sendHeartbeat(
      params: Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    sendHeartbeat(callback: BodyResponseCallback<Schema$Operation>): void;
    sendHeartbeat(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:sendHeartbeat').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Discoveryclients$Create
    extends StandardParameters {
    /**
     * Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    discoveryClientId?: string;
    /**
     * Required. Parent resource.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DiscoveryClient;
  }
  export interface Params$Resource$Projects$Locations$Discoveryclients$Delete
    extends StandardParameters {
    /**
     * Required. The discovery client name.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Discoveryclients$Get
    extends StandardParameters {
    /**
     * Required. The discovery client name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Discoveryclients$List
    extends StandardParameters {
    /**
     * Optional. Filter expression to filter results by.
     */
    filter?: string;
    /**
     * Optional. Field to sort by.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDiscoveryClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveryClients` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Discoveryclients$Patch
    extends StandardParameters {
    /**
     * Output only. Identifier. Full name of this discovery client.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Update mask is used to specify the fields to be overwritten in the `DiscoveryClient` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DiscoveryClient;
  }
  export interface Params$Resource$Projects$Locations$Discoveryclients$Sendheartbeat
    extends StandardParameters {
    /**
     * Required. The discovery client name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendDiscoveryClientHeartbeatRequest;
  }

  export class Resource$Projects$Locations$Groups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds assets to a group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.addAssets({
     *     // Required. Group reference.
     *     group: 'projects/my-project/locations/my-location/groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowExisting": false,
     *       //   "assets": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addAssets(
      params: Params$Resource$Projects$Locations$Groups$Addassets,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addAssets(
      params?: Params$Resource$Projects$Locations$Groups$Addassets,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    addAssets(
      params: Params$Resource$Projects$Locations$Groups$Addassets,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addAssets(
      params: Params$Resource$Projects$Locations$Groups$Addassets,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addAssets(
      params: Params$Resource$Projects$Locations$Groups$Addassets,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addAssets(callback: BodyResponseCallback<Schema$Operation>): void;
    addAssets(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Addassets
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Addassets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Addassets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+group}:addAssets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['group'],
        pathParams: ['group'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a new group in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.create({
     *     // Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     *     groupId: 'placeholder-value',
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Groups$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Groups$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/groups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.delete({
     *     // Required. Name of the group resource.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Groups$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Groups$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of a group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Groups$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Group>>;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Group>,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Groups$Get,
      callback: BodyResponseCallback<Schema$Group>
    ): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Get
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Group>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Group>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Group>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }

    /**
     * Lists all groups in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListGroupsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groups": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Groups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGroupsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Groups$List,
      callback: BodyResponseCallback<Schema$ListGroupsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$List
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/groups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGroupsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.patch({
     *     // Output only. The name of the group.
     *     name: 'projects/my-project/locations/my-location/groups/my-group',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Groups$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Groups$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Removes assets from a group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.groups.removeAssets({
     *     // Required. Group reference.
     *     group: 'projects/my-project/locations/my-location/groups/my-group',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowMissing": false,
     *       //   "assets": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    removeAssets(
      params: Params$Resource$Projects$Locations$Groups$Removeassets,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeAssets(
      params?: Params$Resource$Projects$Locations$Groups$Removeassets,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    removeAssets(
      params: Params$Resource$Projects$Locations$Groups$Removeassets,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeAssets(
      params: Params$Resource$Projects$Locations$Groups$Removeassets,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeAssets(
      params: Params$Resource$Projects$Locations$Groups$Removeassets,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeAssets(callback: BodyResponseCallback<Schema$Operation>): void;
    removeAssets(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groups$Removeassets
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groups$Removeassets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Groups$Removeassets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+group}:removeAssets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['group'],
        pathParams: ['group'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Groups$Addassets
    extends StandardParameters {
    /**
     * Required. Group reference.
     */
    group?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddAssetsToGroupRequest;
  }
  export interface Params$Resource$Projects$Locations$Groups$Create
    extends StandardParameters {
    /**
     * Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    groupId?: string;
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Projects$Locations$Groups$Delete
    extends StandardParameters {
    /**
     * Required. Name of the group resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListGroupsRequest`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Groups$Patch
    extends StandardParameters {
    /**
     * Output only. The name of the group.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Projects$Locations$Groups$Removeassets
    extends StandardParameters {
    /**
     * Required. Group reference.
     */
    group?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveAssetsFromGroupRequest;
  }

  export class Resource$Projects$Locations$Importjobs {
    context: APIRequestContext;
    importDataFiles: Resource$Projects$Locations$Importjobs$Importdatafiles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.importDataFiles =
        new Resource$Projects$Locations$Importjobs$Importdatafiles(
          this.context
        );
    }

    /**
     * Creates an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.create({
     *     // Required. ID of the import job.
     *     importJobId: 'placeholder-value',
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetSource": "my_assetSource",
     *       //   "completeTime": "my_completeTime",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "executionReport": {},
     *       //   "gcsPayload": {},
     *       //   "inlinePayload": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "validationReport": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Importjobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/importJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.delete({
     *     // Optional. If set to `true`, any `ImportDataFiles` of this job will also be deleted If set to `false`, the request only works if the job has no data files.
     *     force: 'placeholder-value',
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/importJobs/my-importJob',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Importjobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/importJobs/my-importJob',
     *     // Optional. The level of details of the import job. Default value is FULL.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetSource": "my_assetSource",
     *   //   "completeTime": "my_completeTime",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "executionReport": {},
     *   //   "gcsPayload": {},
     *   //   "inlinePayload": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "validationReport": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Importjobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ImportJob>>;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ImportJob>,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Get,
      callback: BodyResponseCallback<Schema$ImportJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$ImportJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Get
        | BodyResponseCallback<Schema$ImportJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImportJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImportJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ImportJob>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImportJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImportJob>(parameters);
      }
    }

    /**
     * Lists all import jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListImportJobsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. The level of details of each import job. Default value is BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "importJobs": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Importjobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Importjobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListImportJobsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListImportJobsResponse>,
      callback: BodyResponseCallback<Schema$ListImportJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$List,
      callback: BodyResponseCallback<Schema$ListImportJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListImportJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$List
        | BodyResponseCallback<Schema$ListImportJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListImportJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListImportJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListImportJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/importJobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListImportJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListImportJobsResponse>(parameters);
      }
    }

    /**
     * Updates an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.patch({
     *     // Output only. The full name of the import job.
     *     name: 'projects/my-project/locations/my-location/importJobs/my-importJob',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetSource": "my_assetSource",
     *       //   "completeTime": "my_completeTime",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "executionReport": {},
     *       //   "gcsPayload": {},
     *       //   "inlinePayload": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "validationReport": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Importjobs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Importjobs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Importjobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Importjobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Importjobs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Runs an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.run({
     *     // Required. The name of the import job to run.
     *     name: 'projects/my-project/locations/my-location/importJobs/my-importJob',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    run(
      params: Params$Resource$Projects$Locations$Importjobs$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Importjobs$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Projects$Locations$Importjobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Importjobs$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Importjobs$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Run
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:run').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Validates an import job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.importJobs.validate({
     *     // Required. The name of the import job to validate.
     *     name: 'projects/my-project/locations/my-location/importJobs/my-importJob',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validate(
      params: Params$Resource$Projects$Locations$Importjobs$Validate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    validate(
      params?: Params$Resource$Projects$Locations$Importjobs$Validate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    validate(
      params: Params$Resource$Projects$Locations$Importjobs$Validate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validate(
      params: Params$Resource$Projects$Locations$Importjobs$Validate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    validate(
      params: Params$Resource$Projects$Locations$Importjobs$Validate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    validate(callback: BodyResponseCallback<Schema$Operation>): void;
    validate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Validate
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Validate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Importjobs$Validate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:validate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Importjobs$Create
    extends StandardParameters {
    /**
     * Required. ID of the import job.
     */
    importJobId?: string;
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportJob;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Delete
    extends StandardParameters {
    /**
     * Optional. If set to `true`, any `ImportDataFiles` of this job will also be deleted If set to `false`, the request only works if the job has no data files.
     */
    force?: boolean;
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. The level of details of the import job. Default value is FULL.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListImportJobsRequest`.
     */
    parent?: string;
    /**
     * Optional. The level of details of each import job. Default value is BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Patch
    extends StandardParameters {
    /**
     * Output only. The full name of the import job.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportJob;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Run
    extends StandardParameters {
    /**
     * Required. The name of the import job to run.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunImportJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Validate
    extends StandardParameters {
    /**
     * Required. The name of the import job to validate.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateImportJobRequest;
  }

  export class Resource$Projects$Locations$Importjobs$Importdatafiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an import data file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.importJobs.importDataFiles.create({
     *       // Required. The ID of the new data file.
     *       importDataFileId: 'placeholder-value',
     *       // Required. Name of the parent of the ImportDataFile.
     *       parent:
     *         'projects/my-project/locations/my-location/importJobs/my-importJob',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "format": "my_format",
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "uploadFileInfo": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/importDataFiles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Delete an import data file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.importJobs.importDataFiles.delete({
     *       // Required. Name of the ImportDataFile to delete.
     *       name: 'projects/my-project/locations/my-location/importJobs/my-importJob/importDataFiles/my-importDataFile',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets an import data file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.importJobs.importDataFiles.get({
     *       // Required. Name of the ImportDataFile.
     *       name: 'projects/my-project/locations/my-location/importJobs/my-importJob/importDataFiles/my-importDataFile',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "format": "my_format",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "uploadFileInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ImportDataFile>>;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ImportDataFile>,
      callback: BodyResponseCallback<Schema$ImportDataFile>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get,
      callback: BodyResponseCallback<Schema$ImportDataFile>
    ): void;
    get(callback: BodyResponseCallback<Schema$ImportDataFile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get
        | BodyResponseCallback<Schema$ImportDataFile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImportDataFile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImportDataFile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ImportDataFile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImportDataFile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImportDataFile>(parameters);
      }
    }

    /**
     * List import data files.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.importJobs.importDataFiles.list({
     *       // Filtering results.
     *       filter: 'placeholder-value',
     *       // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *       orderBy: 'placeholder-value',
     *       // The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of the parent of the `ImportDataFiles` resource.
     *       parent:
     *         'projects/my-project/locations/my-location/importJobs/my-importJob',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "importDataFiles": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListImportDataFilesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListImportDataFilesResponse>,
      callback: BodyResponseCallback<Schema$ListImportDataFilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List,
      callback: BodyResponseCallback<Schema$ListImportDataFilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListImportDataFilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List
        | BodyResponseCallback<Schema$ListImportDataFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListImportDataFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListImportDataFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListImportDataFilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/importDataFiles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListImportDataFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListImportDataFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Create
    extends StandardParameters {
    /**
     * Required. The ID of the new data file.
     */
    importDataFileId?: string;
    /**
     * Required. Name of the parent of the ImportDataFile.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportDataFile;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Delete
    extends StandardParameters {
    /**
     * Required. Name of the ImportDataFile to delete.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Importdatafiles$Get
    extends StandardParameters {
    /**
     * Required. Name of the ImportDataFile.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Importjobs$Importdatafiles$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the parent of the `ImportDataFiles` resource.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Preferencesets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new preference set in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.preferenceSets.create({
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     preferenceSetId: 'placeholder-value',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "databasePreferences": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "regionPreferences": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "virtualMachinePreferences": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Preferencesets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Preferencesets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Preferencesets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Preferencesets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Preferencesets$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Preferencesets$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Preferencesets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Preferencesets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/preferenceSets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a preference set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.preferenceSets.delete({
     *     // Required. Name of the group resource.
     *     name: 'projects/my-project/locations/my-location/preferenceSets/my-preferenceSet',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Preferencesets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Preferencesets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Preferencesets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Preferencesets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Preferencesets$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Preferencesets$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Preferencesets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Preferencesets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of a preference set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.preferenceSets.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/preferenceSets/my-preferenceSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "databasePreferences": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "regionPreferences": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "virtualMachinePreferences": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Preferencesets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Preferencesets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PreferenceSet>>;
    get(
      params: Params$Resource$Projects$Locations$Preferencesets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Preferencesets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PreferenceSet>,
      callback: BodyResponseCallback<Schema$PreferenceSet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Preferencesets$Get,
      callback: BodyResponseCallback<Schema$PreferenceSet>
    ): void;
    get(callback: BodyResponseCallback<Schema$PreferenceSet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Preferencesets$Get
        | BodyResponseCallback<Schema$PreferenceSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PreferenceSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PreferenceSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PreferenceSet>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Preferencesets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Preferencesets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreferenceSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PreferenceSet>(parameters);
      }
    }

    /**
     * Lists all the preference sets in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.preferenceSets.list({
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListPreferenceSetsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "preferenceSets": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Preferencesets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Preferencesets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPreferenceSetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Preferencesets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Preferencesets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPreferenceSetsResponse>,
      callback: BodyResponseCallback<Schema$ListPreferenceSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Preferencesets$List,
      callback: BodyResponseCallback<Schema$ListPreferenceSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPreferenceSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Preferencesets$List
        | BodyResponseCallback<Schema$ListPreferenceSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPreferenceSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPreferenceSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPreferenceSetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Preferencesets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Preferencesets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/preferenceSets').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPreferenceSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPreferenceSetsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a preference set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.preferenceSets.patch({
     *     // Output only. Name of the PreferenceSet.
     *     name: 'projects/my-project/locations/my-location/preferenceSets/my-preferenceSet',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "databasePreferences": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "regionPreferences": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "virtualMachinePreferences": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Preferencesets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Preferencesets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Preferencesets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Preferencesets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Preferencesets$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Preferencesets$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Preferencesets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Preferencesets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Preferencesets$Create
    extends StandardParameters {
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     *
     */
    preferenceSetId?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PreferenceSet;
  }
  export interface Params$Resource$Projects$Locations$Preferencesets$Delete
    extends StandardParameters {
    /**
     * Required. Name of the group resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Preferencesets$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Preferencesets$List
    extends StandardParameters {
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListPreferenceSetsRequest`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Preferencesets$Patch
    extends StandardParameters {
    /**
     * Output only. Name of the PreferenceSet.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PreferenceSet;
  }

  export class Resource$Projects$Locations$Relations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the details of an relation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.relations.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/relations/my-relation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "dstAsset": "my_dstAsset",
     *   //   "name": "my_name",
     *   //   "srcAsset": "my_srcAsset",
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Relations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Relations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Relation>>;
    get(
      params: Params$Resource$Projects$Locations$Relations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Relations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Relation>,
      callback: BodyResponseCallback<Schema$Relation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Relations$Get,
      callback: BodyResponseCallback<Schema$Relation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Relation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Relations$Get
        | BodyResponseCallback<Schema$Relation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Relation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Relation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Relation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Relations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Relations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Relation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Relation>(parameters);
      }
    }

    /**
     * Lists all the relations in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.relations.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListRelationsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Relations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Relations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRelationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Relations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Relations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRelationsResponse>,
      callback: BodyResponseCallback<Schema$ListRelationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Relations$List,
      callback: BodyResponseCallback<Schema$ListRelationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRelationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Relations$List
        | BodyResponseCallback<Schema$ListRelationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRelationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRelationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRelationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Relations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Relations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/relations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRelationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRelationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Relations$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Relations$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListRelationsRequest`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Reportconfigs {
    context: APIRequestContext;
    reports: Resource$Projects$Locations$Reportconfigs$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Projects$Locations$Reportconfigs$Reports(
        this.context
      );
    }

    /**
     * Creates a report configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.reportConfigs.create({
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61\}[a-z0-9])?.
     *     reportConfigId: 'placeholder-value',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "groupPreferencesetAssignments": [],
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reportconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/reportConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a ReportConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.reportConfigs.delete({
     *     // Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children.
     *     force: 'placeholder-value',
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/reportConfigs/my-reportConfig',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reportconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single ReportConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.reportConfigs.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/reportConfigs/my-reportConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "groupPreferencesetAssignments": [],
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportConfig>>;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReportConfig>,
      callback: BodyResponseCallback<Schema$ReportConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Get,
      callback: BodyResponseCallback<Schema$ReportConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReportConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Get
        | BodyResponseCallback<Schema$ReportConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reportconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportConfig>(parameters);
      }
    }

    /**
     * Lists ReportConfigs in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.reportConfigs.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListReportConfigsRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reportConfigs": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Reportconfigs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportConfigsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReportConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListReportConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$List,
      callback: BodyResponseCallback<Schema$ListReportConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReportConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$List
        | BodyResponseCallback<Schema$ListReportConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportConfigsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reportconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/reportConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReportConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportConfigsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reportconfigs$Create
    extends StandardParameters {
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61\}[a-z0-9])?.
     */
    reportConfigId?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportConfig;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$Delete
    extends StandardParameters {
    /**
     * Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children.
     */
    force?: boolean;
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListReportConfigsRequest`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Reportconfigs$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.reportConfigs.reports.create({
     *       // Required. Value for parent.
     *       parent:
     *         'projects/my-project/locations/my-location/reportConfigs/my-reportConfig',
     *       // Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61\}[a-z0-9])?.
     *       reportId: 'placeholder-value',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "displayName": "my_displayName",
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "summary": {},
     *         //   "type": "my_type",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Reports$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Reports$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Reports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reportconfigs$Reports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.reportConfigs.reports.delete({
     *       // Required. Name of the resource.
     *       name: 'projects/my-project/locations/my-location/reportConfigs/my-reportConfig/reports/my-report',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.reportConfigs.reports.get({
     *       // Required. Name of the resource.
     *       name: 'projects/my-project/locations/my-location/reportConfigs/my-reportConfig/reports/my-report',
     *       // Determines what information to retrieve for the Report.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "summary": {},
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Report>>;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Reports$Get
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Report>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Report>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reportconfigs$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * Lists Reports in a given ReportConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await migrationcenter.projects.locations.reportConfigs.reports.list({
     *       // Filtering results.
     *       filter: 'placeholder-value',
     *       // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *       orderBy: 'placeholder-value',
     *       // Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     *       pageSize: 'placeholder-value',
     *       // A token identifying a page of results that the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value for `ListReportsRequest`.
     *       parent:
     *         'projects/my-project/locations/my-location/reportConfigs/my-reportConfig',
     *       // Determines what information to retrieve for each Report.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reports": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Reportconfigs$Reports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reportconfigs$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reportconfigs$Reports$List
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reportconfigs$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Reportconfigs$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reportconfigs$Reports$Create
    extends StandardParameters {
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61\}[a-z0-9])?.
     */
    reportId?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$Reports$Delete
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$Reports$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Determines what information to retrieve for the Report.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Reportconfigs$Reports$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListReportsRequest`.
     */
    parent?: string;
    /**
     * Determines what information to retrieve for each Report.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Sources {
    context: APIRequestContext;
    errorFrames: Resource$Projects$Locations$Sources$Errorframes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.errorFrames = new Resource$Projects$Locations$Sources$Errorframes(
        this.context
      );
    }

    /**
     * Creates a new source in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.create({
     *     // Required. Value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     *     sourceId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "errorFrameCount": 0,
     *       //   "isManaged": false,
     *       //   "name": "my_name",
     *       //   "pendingFrameCount": 0,
     *       //   "priority": 0,
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Sources$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Sources$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/sources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.delete({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Sources$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Sources$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets the details of a source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.get({
     *     // Required. Name of the resource.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "errorFrameCount": 0,
     *   //   "isManaged": false,
     *   //   "name": "my_name",
     *   //   "pendingFrameCount": 0,
     *   //   "priority": 0,
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Source>>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Get,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(callback: BodyResponseCallback<Schema$Source>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Get
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Source>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * Lists all the sources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.list({
     *     // Filtering results.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results that the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for `ListSourcesRequest`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSourcesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/sources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.patch({
     *     // Output only. The full name of the source.
     *     name: 'projects/my-project/locations/my-location/sources/my-source',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "errorFrameCount": 0,
     *       //   "isManaged": false,
     *       //   "name": "my_name",
     *       //   "pendingFrameCount": 0,
     *       //   "priority": 0,
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Sources$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Sources$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Sources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Create
    extends StandardParameters {
    /**
     * Required. Value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    sourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Projects$Locations$Sources$Delete
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$List
    extends StandardParameters {
    /**
     * Filtering results.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListSourcesRequest`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Patch
    extends StandardParameters {
    /**
     * Output only. The full name of the source.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }

  export class Resource$Projects$Locations$Sources$Errorframes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the details of an error frame.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.errorFrames.get({
     *     // Required. The name of the frame to retrieve. Format: projects/{project\}/locations/{location\}/sources/{source\}/errorFrames/{error_frame\}
     *     name: 'projects/my-project/locations/my-location/sources/my-source/errorFrames/my-errorFrame',
     *     // Optional. An optional view mode to control the level of details for the frame. The default is a basic frame view.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ingestionTime": "my_ingestionTime",
     *   //   "name": "my_name",
     *   //   "originalFrame": {},
     *   //   "violations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Sources$Errorframes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ErrorFrame>>;
    get(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ErrorFrame>,
      callback: BodyResponseCallback<Schema$ErrorFrame>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$Get,
      callback: BodyResponseCallback<Schema$ErrorFrame>
    ): void;
    get(callback: BodyResponseCallback<Schema$ErrorFrame>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Errorframes$Get
        | BodyResponseCallback<Schema$ErrorFrame>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ErrorFrame>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ErrorFrame>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ErrorFrame>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Errorframes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Errorframes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ErrorFrame>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ErrorFrame>(parameters);
      }
    }

    /**
     * Lists all error frames in a given source and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/migrationcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const migrationcenter = google.migrationcenter('v1alpha1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await migrationcenter.projects.locations.sources.errorFrames.list(
     *     {
     *       // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value (the source) for `ListErrorFramesRequest`.
     *       parent: 'projects/my-project/locations/my-location/sources/my-source',
     *       // Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view.
     *       view: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorFrames": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Sources$Errorframes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListErrorFramesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListErrorFramesResponse>,
      callback: BodyResponseCallback<Schema$ListErrorFramesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Sources$Errorframes$List,
      callback: BodyResponseCallback<Schema$ListErrorFramesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListErrorFramesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Sources$Errorframes$List
        | BodyResponseCallback<Schema$ListErrorFramesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListErrorFramesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListErrorFramesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListErrorFramesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Sources$Errorframes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Sources$Errorframes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://migrationcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha1/{+parent}/errorFrames').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListErrorFramesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListErrorFramesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Sources$Errorframes$Get
    extends StandardParameters {
    /**
     * Required. The name of the frame to retrieve. Format: projects/{project\}/locations/{location\}/sources/{source\}/errorFrames/{error_frame\}
     */
    name?: string;
    /**
     * Optional. An optional view mode to control the level of details for the frame. The default is a basic frame view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Sources$Errorframes$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value (the source) for `ListErrorFramesRequest`.
     */
    parent?: string;
    /**
     * Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view.
     */
    view?: string;
  }
}
