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
  GaxiosPromise,
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

export namespace datapipelines_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Data pipelines API
   *
   * Data Pipelines provides an interface for creating, updating, and managing recurring Data Analytics jobs.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datapipelines = google.datapipelines('v1');
   * ```
   */
  export class Datapipelines {
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
   * Represents an array of values. The elements can be of any type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1ArrayValue {
    /**
     * The elements of the array.
     */
    elements?: Schema$GoogleCloudDatapipelinesV1FieldValue[];
  }
  /**
   * Represents a non-dividable value.
   */
  export interface Schema$GoogleCloudDatapipelinesV1AtomicValue {
    /**
     * A boolean value.
     */
    booleanValue?: boolean | null;
    /**
     * An array of raw bytes.
     */
    bytesValue?: string | null;
    /**
     * An 8-bit signed value.
     */
    byteValue?: number | null;
    /**
     * A datetime value.
     */
    datetimeValue?: Schema$GoogleTypeDateTime;
    /**
     * A large decimal value, equivalent to Java BigDecimal.
     */
    decimalValue?: Schema$GoogleTypeDecimal;
    /**
     * A 64-bit floating point value.
     */
    doubleValue?: number | null;
    /**
     * A 32-bit floating point value.
     */
    floatValue?: number | null;
    /**
     * A 16-bit signed value.
     */
    int16Value?: number | null;
    /**
     * A 32-bit signed value.
     */
    int32Value?: number | null;
    /**
     * A 64-bit signed value.
     */
    int64Value?: string | null;
    /**
     * A string value.
     */
    stringValue?: string | null;
  }
  /**
   * Response message for BatchGetTransformDescriptions
   */
  export interface Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse {
    /**
     * List of requested transform descriptions.
     */
    transformDescriptions?: Schema$GoogleCloudDatapipelinesV1TransformDescription[];
  }
  /**
   * Request message for ComputeSchema
   */
  export interface Schema$GoogleCloudDatapipelinesV1ComputeSchemaRequest {
    /**
     * Required. The configuration for the transform. If this is not a source, then each input with its schema must be set. It is not required to have any outputs set.
     */
    config?: Schema$GoogleCloudDatapipelinesV1ConfiguredTransform;
    /**
     * Optional. In relation to the full pipeline graph, the schemas of the transforms that are used as inputs to the one for `config`. If `config` represents a transform for reading from some resource, then this should be empty. For all other transforms, at least one value must be provided.
     */
    inputSchemas?: Schema$GoogleCloudDatapipelinesV1Schema[];
    /**
     * Optional. If set, this will use the provided raw schema to compute the schema rather than connecting to any resources. Validation will still occur to make sure it is compatible with all input schemas. If the transform is an IO, the IO must support that schema type.
     */
    rawSchema?: Schema$GoogleCloudDatapipelinesV1RawSchemaInfo;
  }
  /**
   * A fully configured transform that can be validated.
   */
  export interface Schema$GoogleCloudDatapipelinesV1ConfiguredTransform {
    /**
     * Configuration values provided. These must match the schema provided in the row's schema.
     */
    config?: Schema$GoogleCloudDatapipelinesV1Row;
    /**
     * Unique resource name of the transform. This should be the same as the equivalent `TransformDescription` value.
     */
    uniformResourceName?: string | null;
  }
  /**
   * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
   */
  export interface Schema$GoogleCloudDatapipelinesV1DataflowJobDetails {
    /**
     * Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running.
     */
    currentWorkers?: number | null;
    /**
     * Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API.
     */
    resourceInfo?: {[key: string]: number} | null;
    /**
     * Output only. The SDK version used to run the job.
     */
    sdkVersion?: Schema$GoogleCloudDatapipelinesV1SdkVersion;
  }
  /**
   * Represents a selected value from an EnumerationType.
   */
  export interface Schema$GoogleCloudDatapipelinesV1EnumerationValue {
    /**
     * Name of the enum option.
     */
    name?: string | null;
  }
  /**
   * Info for a single field in the schema.
   */
  export interface Schema$GoogleCloudDatapipelinesV1Field {
    /**
     * Name of the field.
     */
    name?: string | null;
    /**
     * Type info for the field.
     */
    type?: Schema$GoogleCloudDatapipelinesV1FieldType;
  }
  /**
   * Type info about a field.
   */
  export interface Schema$GoogleCloudDatapipelinesV1FieldType {
    /**
     * If `type` is an array or iterable, this is the type contained in that array or iterable.
     */
    collectionElementType?: Schema$GoogleCloudDatapipelinesV1FieldType;
    /**
     * If `type` is a logical type, this is the info for the specific logical type.
     */
    logicalType?: Schema$GoogleCloudDatapipelinesV1LogicalType;
    /**
     * If `type` is a map, this is the key and value types for that map.
     */
    mapType?: Schema$GoogleCloudDatapipelinesV1MapType;
    /**
     * Whether or not this field is nullable.
     */
    nullable?: boolean | null;
    /**
     * If `type` is a row, this is the schema of that row.
     */
    rowSchema?: Schema$GoogleCloudDatapipelinesV1Schema;
    /**
     * Specific type of the field. For non-atomic types, the corresponding type info for that non-atomic must be set.
     */
    type?: string | null;
  }
  /**
   * A single value in a row. The value set must correspond to the correct type from the row's schema.
   */
  export interface Schema$GoogleCloudDatapipelinesV1FieldValue {
    /**
     * The array value of this field. Corresponds to TYPE_NAME_ARRAY in the schema.
     */
    arrayValue?: Schema$GoogleCloudDatapipelinesV1ArrayValue;
    /**
     * The atomic value of this field. Must correspond to the correct atomic type in the schema.
     */
    atomicValue?: Schema$GoogleCloudDatapipelinesV1AtomicValue;
    /**
     * The enum value of this field. Corresponds to TYPE_NAME_LOGICAL_TYPE in the schema if that logical type represents an `EnumerationType` type.
     */
    enumValue?: Schema$GoogleCloudDatapipelinesV1EnumerationValue;
    /**
     * The fixed-length byte collection of this field. Corresponds to TYPE_NAME_LOGICAL_TYPE in the schema if that logical type represents a `FixedBytes` type.
     */
    fixedBytesValue?: Schema$GoogleCloudDatapipelinesV1FixedBytesValue;
    /**
     * The iterable value of this field. Corresponds to TYPE_NAME_ITERABLE in the schema.
     */
    iterableValue?: Schema$GoogleCloudDatapipelinesV1IterableValue;
    /**
     * The map value of this field. Corresponds to TYPE_NAME_MAP in the schema.
     */
    mapValue?: Schema$GoogleCloudDatapipelinesV1MapValue;
    /**
     * The row value of this field. Corresponds to TYPE_NAME_ROW in the schema. This row also holds to its own schema.
     */
    rowValue?: Schema$GoogleCloudDatapipelinesV1Row;
  }
  /**
   * Represents a collection of bytes whose size is the same as the associated FixedBytes size value.
   */
  export interface Schema$GoogleCloudDatapipelinesV1FixedBytesValue {
    /**
     * The raw bytes. It must be exactly the size specified in the schema.
     */
    value?: string | null;
  }
  /**
   * The environment values to be set at runtime for a Flex Template.
   */
  export interface Schema$GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment {
    /**
     * Additional experiment flags for the job.
     */
    additionalExperiments?: string[] | null;
    /**
     * Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" \}`.
     */
    additionalUserLabels?: {[key: string]: string} | null;
    /**
     * Whether to enable Streaming Engine for the job.
     */
    enableStreamingEngine?: boolean | null;
    /**
     * Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs
     */
    flexrsGoal?: string | null;
    /**
     * Configuration for VM IPs.
     */
    ipConfiguration?: string | null;
    /**
     * Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/
     */
    kmsKeyName?: string | null;
    /**
     * The machine type to use for the job. Defaults to the value from the template if not specified.
     */
    machineType?: string | null;
    /**
     * The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
     */
    maxWorkers?: number | null;
    /**
     * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
     */
    network?: string | null;
    /**
     * The initial number of Compute Engine instances for the job.
     */
    numWorkers?: number | null;
    /**
     * The email address of the service account to run the job as.
     */
    serviceAccountEmail?: string | null;
    /**
     * Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
     */
    subnetwork?: string | null;
    /**
     * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    tempLocation?: string | null;
    /**
     * The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region.
     */
    workerRegion?: string | null;
    /**
     * The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
     */
    workerZone?: string | null;
    /**
     * The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.
     */
    zone?: string | null;
  }
  /**
   * Represents an iterable of values. The elements can be of any type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1IterableValue {
    /**
     * The elements of the iterable.
     */
    elements?: Schema$GoogleCloudDatapipelinesV1FieldValue[];
  }
  /**
   * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
   */
  export interface Schema$GoogleCloudDatapipelinesV1Job {
    /**
     * Output only. The time of job creation.
     */
    createTime?: string | null;
    /**
     * All the details that are specific to a Dataflow job.
     */
    dataflowJobDetails?: Schema$GoogleCloudDatapipelinesV1DataflowJobDetails;
    /**
     * Output only. The time of job termination. This is absent if the job is still running.
     */
    endTime?: string | null;
    /**
     * Output only. The internal ID for the job.
     */
    id?: string | null;
    /**
     * Required. The fully qualified resource name for the job.
     */
    name?: string | null;
    /**
     * The current state of the job.
     */
    state?: string | null;
    /**
     * Status capturing any error code or message related to job creation or execution.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Launch Flex Template parameter.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter {
    /**
     * Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
     */
    containerSpecGcsPath?: string | null;
    /**
     * The runtime environment for the Flex Template job.
     */
    environment?: Schema$GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
    /**
     * Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
     */
    jobName?: string | null;
    /**
     * Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
     */
    launchOptions?: {[key: string]: string} | null;
    /**
     * The parameters for the Flex Template. Example: `{"num_workers":"5"\}`
     */
    parameters?: {[key: string]: string} | null;
    /**
     * Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...\}`
     */
    transformNameMappings?: {[key: string]: string} | null;
    /**
     * Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
     */
    update?: boolean | null;
  }
  /**
   * A request to launch a Dataflow job from a Flex Template.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest {
    /**
     * Required. Parameter to launch a job from a Flex Template.
     */
    launchParameter?: Schema$GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
    /**
     * Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`.
     */
    location?: string | null;
    /**
     * Required. The ID of the Cloud Platform project that the job belongs to.
     */
    projectId?: string | null;
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Parameters to provide to the template being launched.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LaunchTemplateParameters {
    /**
     * The runtime environment for the job.
     */
    environment?: Schema$GoogleCloudDatapipelinesV1RuntimeEnvironment;
    /**
     * Required. The job name to use for the created job.
     */
    jobName?: string | null;
    /**
     * The runtime parameters to pass to the job.
     */
    parameters?: {[key: string]: string} | null;
    /**
     * Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
     */
    transformNameMapping?: {[key: string]: string} | null;
    /**
     * If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
     */
    update?: boolean | null;
  }
  /**
   * A request to launch a template.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LaunchTemplateRequest {
    /**
     * A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
     */
    gcsPath?: string | null;
    /**
     * The parameters of the template to launch. This should be part of the body of the POST request.
     */
    launchParameters?: Schema$GoogleCloudDatapipelinesV1LaunchTemplateParameters;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     */
    location?: string | null;
    /**
     * Required. The ID of the Cloud Platform project that the job belongs to.
     */
    projectId?: string | null;
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for ListJobs
   */
  export interface Schema$GoogleCloudDatapipelinesV1ListJobsResponse {
    /**
     * Results that were accessible to the caller. Results are always in descending order of job creation date.
     */
    jobs?: Schema$GoogleCloudDatapipelinesV1Job[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListPipelines.
   */
  export interface Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date.
     */
    pipelines?: Schema$GoogleCloudDatapipelinesV1Pipeline[];
  }
  /**
   * Represents the input for creating a specified logical type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LogicalType {
    /**
     * The enum represented by this logical type.
     */
    enumerationType?: Schema$GoogleCloudDatapipelinesV1LogicalTypeEnumerationType;
    /**
     * The fixed-size byte collection represented by this logical type.
     */
    fixedBytes?: Schema$GoogleCloudDatapipelinesV1LogicalTypeFixedBytes;
  }
  /**
   * Represents the Beam EnumerationType logical type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LogicalTypeEnumerationType {
    /**
     * Names of the values. The numeric value is the same as the index.
     */
    values?: string[] | null;
  }
  /**
   * Represents the Beam FixedBytes logical type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1LogicalTypeFixedBytes {
    /**
     * Number of bytes to allocate.
     */
    sizeBytes?: number | null;
  }
  /**
   * Represents a map in a schema.
   */
  export interface Schema$GoogleCloudDatapipelinesV1MapType {
    /**
     * Key type of the map. Only atomic types are supported.
     */
    mapKeyType?: Schema$GoogleCloudDatapipelinesV1FieldType;
    /**
     * Value type of the map.
     */
    mapValueType?: Schema$GoogleCloudDatapipelinesV1FieldType;
  }
  /**
   * Represents a key/value pairing.
   */
  export interface Schema$GoogleCloudDatapipelinesV1MapValue {
    /**
     * The entries in the map.
     */
    entries?: Schema$GoogleCloudDatapipelinesV1MapValueEntry[];
  }
  /**
   * A single entry in the map. Each entry must have a unique key.
   */
  export interface Schema$GoogleCloudDatapipelinesV1MapValueEntry {
    /**
     * The key value. Only atomic values are supported.
     */
    key?: Schema$GoogleCloudDatapipelinesV1FieldValue;
    /**
     * The value associated with the key. It may be of any type.
     */
    value?: Schema$GoogleCloudDatapipelinesV1FieldValue;
  }
  /**
   * The main pipeline entity and all the necessary metadata for launching and managing linked jobs.
   */
  export interface Schema$GoogleCloudDatapipelinesV1Pipeline {
    /**
     * Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service.
     */
    createTime?: string | null;
    /**
     * Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).
     */
    displayName?: string | null;
    /**
     * Output only. Number of jobs.
     */
    jobCount?: number | null;
    /**
     * Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service.
     */
    lastUpdateTime?: string | null;
    /**
     * The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.
     */
    name?: string | null;
    /**
     * Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.
     */
    pipelineSources?: {[key: string]: string} | null;
    /**
     * Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.
     */
    scheduleInfo?: Schema$GoogleCloudDatapipelinesV1ScheduleSpec;
    /**
     * Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.
     */
    schedulerServiceAccountEmail?: string | null;
    /**
     * Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.
     */
    state?: string | null;
    /**
     * Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
     */
    type?: string | null;
    /**
     * Workload information for creating new jobs.
     */
    workload?: Schema$GoogleCloudDatapipelinesV1Workload;
  }
  /**
   * The raw schema and its type.
   */
  export interface Schema$GoogleCloudDatapipelinesV1RawSchemaInfo {
    /**
     * The schema.
     */
    rawSchema?: string | null;
    /**
     * The type of the schema.
     */
    type?: string | null;
  }
  /**
   * Represents an Apache Beam row, though the `Any` nature of values is replaced with more concrete representations of valid values.
   */
  export interface Schema$GoogleCloudDatapipelinesV1Row {
    /**
     * Required. The schema of the row's data.
     */
    schema?: Schema$GoogleCloudDatapipelinesV1SchemaSource;
    /**
     * Required. The values of this Row. A fully built row is required to hold to the schema specified by `schema`.
     */
    values?: Schema$GoogleCloudDatapipelinesV1FieldValue[];
  }
  /**
   * Request message for RunPipeline
   */
  export interface Schema$GoogleCloudDatapipelinesV1RunPipelineRequest {}
  /**
   * Response message for RunPipeline
   */
  export interface Schema$GoogleCloudDatapipelinesV1RunPipelineResponse {
    /**
     * Job that was created as part of RunPipeline operation.
     */
    job?: Schema$GoogleCloudDatapipelinesV1Job;
  }
  /**
   * The environment values to set at runtime.
   */
  export interface Schema$GoogleCloudDatapipelinesV1RuntimeEnvironment {
    /**
     * Additional experiment flags for the job.
     */
    additionalExperiments?: string[] | null;
    /**
     * Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" \}.
     */
    additionalUserLabels?: {[key: string]: string} | null;
    /**
     * Whether to bypass the safety checks for the job's temporary directory. Use with caution.
     */
    bypassTempDirValidation?: boolean | null;
    /**
     * Whether to enable Streaming Engine for the job.
     */
    enableStreamingEngine?: boolean | null;
    /**
     * Configuration for VM IPs.
     */
    ipConfiguration?: string | null;
    /**
     * Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/
     */
    kmsKeyName?: string | null;
    /**
     * The machine type to use for the job. Defaults to the value from the template if not specified.
     */
    machineType?: string | null;
    /**
     * The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
     */
    maxWorkers?: number | null;
    /**
     * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
     */
    network?: string | null;
    /**
     * The initial number of Compute Engine instances for the job.
     */
    numWorkers?: number | null;
    /**
     * The email address of the service account to run the job as.
     */
    serviceAccountEmail?: string | null;
    /**
     * Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
     */
    subnetwork?: string | null;
    /**
     * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.
     */
    tempLocation?: string | null;
    /**
     * The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.
     */
    workerRegion?: string | null;
    /**
     * The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
     */
    workerZone?: string | null;
    /**
     * The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.
     */
    zone?: string | null;
  }
  /**
   * Details of the schedule the pipeline runs on.
   */
  export interface Schema$GoogleCloudDatapipelinesV1ScheduleSpec {
    /**
     * Output only. When the next Scheduler job is going to run.
     */
    nextJobTime?: string | null;
    /**
     * Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
     */
    schedule?: string | null;
    /**
     * Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
     */
    timeZone?: string | null;
  }
  /**
   * Represents a simplified Apache Beam schema.
   */
  export interface Schema$GoogleCloudDatapipelinesV1Schema {
    /**
     * Fields in the schema. Every field within a schema must have a unique name.
     */
    fields?: Schema$GoogleCloudDatapipelinesV1Field[];
    /**
     * An identifier of the schema for looking it up in a repository. This only needs to be set if the schema is stored in a repository.
     */
    referenceId?: string | null;
  }
  /**
   * Holds a schema or a reference to a schema in some repository.
   */
  export interface Schema$GoogleCloudDatapipelinesV1SchemaSource {
    /**
     * Schema located locally with the message.
     */
    localSchema?: Schema$GoogleCloudDatapipelinesV1Schema;
    /**
     * The `reference_id` value of a schema in a repository.
     */
    referenceId?: string | null;
  }
  /**
   * The version of the SDK used to run the job.
   */
  export interface Schema$GoogleCloudDatapipelinesV1SdkVersion {
    /**
     * The support status for this SDK version.
     */
    sdkSupportStatus?: string | null;
    /**
     * The version of the SDK used to run the job.
     */
    version?: string | null;
    /**
     * A readable string describing the version of the SDK.
     */
    versionDisplayName?: string | null;
  }
  /**
   * Request message for StopPipeline.
   */
  export interface Schema$GoogleCloudDatapipelinesV1StopPipelineRequest {}
  /**
   * Description of a schema-aware transform, which provides info on how it can be configured.
   */
  export interface Schema$GoogleCloudDatapipelinesV1TransformDescription {
    /**
     * Output only. The full name of this resource formatted as: projects/{project\}/locations/{location\}/transformDescriptions/{transform_description\} `transform_description` is the same as the `uniform_resource_name` field.
     */
    name?: string | null;
    /**
     * Available options for configuring the transform.
     */
    options?: Schema$GoogleCloudDatapipelinesV1Schema;
    /**
     * Unique resource name of the transform.
     */
    uniformResourceName?: string | null;
  }
  /**
   * Workload details for creating the pipeline jobs.
   */
  export interface Schema$GoogleCloudDatapipelinesV1Workload {
    /**
     * Template information and additional parameters needed to launch a Dataflow job using the flex launch API.
     */
    dataflowFlexTemplateRequest?: Schema$GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
    /**
     * Template information and additional parameters needed to launch a Dataflow job using the standard launch API.
     */
    dataflowLaunchTemplateRequest?: Schema$GoogleCloudDatapipelinesV1LaunchTemplateRequest;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$GoogleTypeDateTime {
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
    timeZone?: Schema$GoogleTypeTimeZone;
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
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
   */
  export interface Schema$GoogleTypeDecimal {
    /**
     * The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -\> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -\> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -\> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -\> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-\> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' \}; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.
     */
    value?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$GoogleTypeTimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string | null;
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
    pipelines: Resource$Projects$Locations$Pipelines;
    transformDescriptions: Resource$Projects$Locations$Transformdescriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.pipelines = new Resource$Projects$Locations$Pipelines(this.context);
      this.transformDescriptions =
        new Resource$Projects$Locations$Transformdescriptions(this.context);
    }

    /**
     * Computes the schema for the transform. Computation from `raw_schema` will always occur if it is set. This requires that the transform supports that encoding. If no raw schema is provided and if the transform is for an IO, then this will attempt to connect to the resource using the details provided in `config` and infer the schema from that. If the transform is not an IO, is a sink that doesn't exist yet, or is a sink with no schema requirement, then this will fall back to basing the schema off the one provided in `input_schemas`. The computed schema will be validated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.computeSchema({
     *     // Required. The full location formatted as "projects/{your-project\}/locations/{google-cloud-region\}". If attempting to infer the schema from an existing Google Cloud resource, the default Data Pipelines service account for this project will be used in making requests for the resource. If the region given for "{google-cloud-region\}" is different than the region where the resource is stored, then the data will be transferred to and processed in the region specified here, but it will not be persistently stored in this region.
     *     location: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "inputSchemas": [],
     *       //   "rawSchema": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fields": [],
     *   //   "referenceId": "my_referenceId"
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
    computeSchema(
      params: Params$Resource$Projects$Locations$Computeschema,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    computeSchema(
      params?: Params$Resource$Projects$Locations$Computeschema,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Schema>;
    computeSchema(
      params: Params$Resource$Projects$Locations$Computeschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeSchema(
      params: Params$Resource$Projects$Locations$Computeschema,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
    ): void;
    computeSchema(
      params: Params$Resource$Projects$Locations$Computeschema,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
    ): void;
    computeSchema(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
    ): void;
    computeSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Computeschema
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Schema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Schema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Computeschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Computeschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+location}:computeSchema').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1Schema>(
          parameters
        );
      }
    }

    /**
     * Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.listPipelines({
     *     // An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE
     *     filter: 'placeholder-value',
     *     // The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pipelines": []
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
    listPipelines(
      params: Params$Resource$Projects$Locations$Listpipelines,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listPipelines(
      params?: Params$Resource$Projects$Locations$Listpipelines,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>;
    listPipelines(
      params: Params$Resource$Projects$Locations$Listpipelines,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listPipelines(
      params: Params$Resource$Projects$Locations$Listpipelines,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
    ): void;
    listPipelines(
      params: Params$Resource$Projects$Locations$Listpipelines,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
    ): void;
    listPipelines(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
    ): void;
    listPipelines(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Listpipelines
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Listpipelines;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Listpipelines;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1ListPipelinesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Computeschema
    extends StandardParameters {
    /**
     * Required. The full location formatted as "projects/{your-project\}/locations/{google-cloud-region\}". If attempting to infer the schema from an existing Google Cloud resource, the default Data Pipelines service account for this project will be used in making requests for the resource. If the region given for "{google-cloud-region\}" is different than the region where the resource is stored, then the data will be transferred to and processed in the region specified here, but it will not be persistently stored in this region.
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatapipelinesV1ComputeSchemaRequest;
  }
  export interface Params$Resource$Projects$Locations$Listpipelines
    extends StandardParameters {
    /**
     * An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE
     */
    filter?: string;
    /**
     * The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Pipelines {
    context: APIRequestContext;
    jobs: Resource$Projects$Locations$Pipelines$Jobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Locations$Pipelines$Jobs(this.context);
    }

    /**
     * Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.create({
     *     // Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "jobCount": 0,
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "pipelineSources": {},
     *       //   "scheduleInfo": {},
     *       //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "workload": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "jobCount": 0,
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "pipelineSources": {},
     *   //   "scheduleInfo": {},
     *   //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "workload": {}
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
      params: Params$Resource$Projects$Locations$Pipelines$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Pipelines$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>;
    create(
      params: Params$Resource$Projects$Locations$Pipelines$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Pipelines$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Pipelines$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Create
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pipelines').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters
        );
      }
    }

    /**
     * Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.delete({
     *     // Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     *     name: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
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
      params: Params$Resource$Projects$Locations$Pipelines$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Pipelines$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Pipelines$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Pipelines$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Pipelines$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.get({
     *     // Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     *     name: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "jobCount": 0,
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "pipelineSources": {},
     *   //   "scheduleInfo": {},
     *   //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "workload": {}
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
      params: Params$Resource$Projects$Locations$Pipelines$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Pipelines$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>;
    get(
      params: Params$Resource$Projects$Locations$Pipelines$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Pipelines$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Pipelines$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Get
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters
        );
      }
    }

    /**
     * Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.patch({
     *     // The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.
     *     name: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "jobCount": 0,
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "pipelineSources": {},
     *       //   "scheduleInfo": {},
     *       //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *       //   "state": "my_state",
     *       //   "type": "my_type",
     *       //   "workload": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "jobCount": 0,
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "pipelineSources": {},
     *   //   "scheduleInfo": {},
     *   //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "workload": {}
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
      params: Params$Resource$Projects$Locations$Pipelines$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Pipelines$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>;
    patch(
      params: Params$Resource$Projects$Locations$Pipelines$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Pipelines$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Pipelines$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters
        );
      }
    }

    /**
     * Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.run({
     *     // Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     *     name: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
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
     *   // {
     *   //   "job": {}
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
      params: Params$Resource$Projects$Locations$Pipelines$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Projects$Locations$Pipelines$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>;
    run(
      params: Params$Resource$Projects$Locations$Pipelines$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Pipelines$Run,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Pipelines$Run,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
    ): void;
    run(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
    ): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Run
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1RunPipelineResponse>(
          parameters
        );
      }
    }

    /**
     * Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.stop({
     *     // Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     *     name: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
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
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "jobCount": 0,
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "pipelineSources": {},
     *   //   "scheduleInfo": {},
     *   //   "schedulerServiceAccountEmail": "my_schedulerServiceAccountEmail",
     *   //   "state": "my_state",
     *   //   "type": "my_type",
     *   //   "workload": {}
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
    stop(
      params: Params$Resource$Projects$Locations$Pipelines$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Pipelines$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>;
    stop(
      params: Params$Resource$Projects$Locations$Pipelines$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Pipelines$Stop,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Pipelines$Stop,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    stop(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
    ): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Stop
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1Pipeline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1Pipeline>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1Pipeline>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Pipelines$Create
    extends StandardParameters {
    /**
     * Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatapipelinesV1Pipeline;
  }
  export interface Params$Resource$Projects$Locations$Pipelines$Delete
    extends StandardParameters {
    /**
     * Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Pipelines$Get
    extends StandardParameters {
    /**
     * Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Pipelines$Patch
    extends StandardParameters {
    /**
     * The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatapipelinesV1Pipeline;
  }
  export interface Params$Resource$Projects$Locations$Pipelines$Run
    extends StandardParameters {
    /**
     * Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatapipelinesV1RunPipelineRequest;
  }
  export interface Params$Resource$Projects$Locations$Pipelines$Stop
    extends StandardParameters {
    /**
     * Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatapipelinesV1StopPipelineRequest;
  }

  export class Resource$Projects$Locations$Pipelines$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.pipelines.jobs.list({
     *     // The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     *     parent: 'projects/my-project/locations/my-location/pipelines/my-pipeline',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
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
      params: Params$Resource$Projects$Locations$Pipelines$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Pipelines$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Pipelines$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Pipelines$Jobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Pipelines$Jobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pipelines$Jobs$List
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pipelines$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Pipelines$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1ListJobsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Pipelines$Jobs$List
    extends StandardParameters {
    /**
     * The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Transformdescriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets transform descriptions in a batch, associated with a list of provided uniform resource names.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *     await datapipelines.projects.locations.transformDescriptions.batchGet({
     *       // Optional. The names of the transform descriptions being retrieved, formatted as "projects/{project\}/locations/{location\}/transformdescriptions/{transform_description\}". If no name is provided, all of the transform descriptions will be returned.
     *       names: 'placeholder-value',
     *       // Required. The project and location shared by all transform descriptions being retrieved, formatted as "projects/{project\}/locations/{location\}".
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "transformDescriptions": []
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
    batchGet(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Projects$Locations$Transformdescriptions$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>;
    batchGet(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Batchget,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transformdescriptions$Batchget
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transformdescriptions$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Transformdescriptions$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/transformDescriptions:batchGet'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1BatchGetTransformDescriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the transform description associated with the provided uniform resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datapipelines.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const datapipelines = google.datapipelines('v1');
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
     *   const res = await datapipelines.projects.locations.transformDescriptions.get({
     *     // Required. The full name formatted as "projects/{your-project\}/locations/{google-cloud-region\}/transformdescriptions/{uniform-resource-name\}".
     *     name: 'projects/my-project/locations/my-location/transformDescriptions/my-transformDescription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "options": {},
     *   //   "uniformResourceName": "my_uniformResourceName"
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
      params: Params$Resource$Projects$Locations$Transformdescriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Transformdescriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatapipelinesV1TransformDescription>;
    get(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transformdescriptions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transformdescriptions$Get
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatapipelinesV1TransformDescription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDatapipelinesV1TransformDescription>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transformdescriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Transformdescriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datapipelines.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatapipelinesV1TransformDescription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatapipelinesV1TransformDescription>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transformdescriptions$Batchget
    extends StandardParameters {
    /**
     * Optional. The names of the transform descriptions being retrieved, formatted as "projects/{project\}/locations/{location\}/transformdescriptions/{transform_description\}". If no name is provided, all of the transform descriptions will be returned.
     */
    names?: string[];
    /**
     * Required. The project and location shared by all transform descriptions being retrieved, formatted as "projects/{project\}/locations/{location\}".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Transformdescriptions$Get
    extends StandardParameters {
    /**
     * Required. The full name formatted as "projects/{your-project\}/locations/{google-cloud-region\}/transformdescriptions/{uniform-resource-name\}".
     */
    name?: string;
  }
}
