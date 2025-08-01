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

export namespace run_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Cloud Run Admin API
   *
   * Deploy and manage user provided container images that scale automatically based on incoming requests. The Cloud Run Admin API v1 follows the Knative Serving API specification, while v2 is aligned with Google Cloud AIP-based API standards, as described in https://google.aip.dev/.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const run = google.run('v2');
   * ```
   */
  export class Run {
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
   * Settings for Binary Authorization feature.
   */
  export interface Schema$GoogleCloudRunV2BinaryAuthorization {
    /**
     * Optional. If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
     */
    breakglassJustification?: string | null;
    /**
     * Optional. The path to a binary authorization policy. Format: `projects/{project\}/platforms/cloudRun/{policy-name\}`
     */
    policy?: string | null;
    /**
     * Optional. If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
     */
    useDefault?: boolean | null;
  }
  /**
   * Describes the Build step of the function that builds a container from the given source.
   */
  export interface Schema$GoogleCloudRunV2BuildConfig {
    /**
     * Optional. The base image used to build the function.
     */
    baseImage?: string | null;
    /**
     * Optional. Sets whether the function will receive automatic base image updates.
     */
    enableAutomaticUpdates?: boolean | null;
    /**
     * Optional. User-provided build-time environment variables for the function
     */
    environmentVariables?: {[key: string]: string} | null;
    /**
     * Optional. The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function".
     */
    functionTarget?: string | null;
    /**
     * Optional. Artifact Registry URI to store the built image.
     */
    imageUri?: string | null;
    /**
     * Output only. The Cloud Build name of the latest successful deployment of the function.
     */
    name?: string | null;
    /**
     * Optional. Service account to be used for building the container. The format of this field is `projects/{projectId\}/serviceAccounts/{serviceAccountEmail\}`.
     */
    serviceAccount?: string | null;
    /**
     * The Cloud Storage bucket URI where the function source code is located.
     */
    sourceLocation?: string | null;
    /**
     * Optional. Name of the Cloud Build Custom Worker Pool that should be used to build the Cloud Run function. The format of this field is `projects/{project\}/locations/{region\}/workerPools/{workerPool\}` where `{project\}` and `{region\}` are the project id and region respectively where the worker pool is defined and `{workerPool\}` is the short name of the worker pool.
     */
    workerPool?: string | null;
  }
  /**
   * Build information of the image.
   */
  export interface Schema$GoogleCloudRunV2BuildInfo {
    /**
     * Output only. Entry point of the function when the image is a Cloud Run function.
     */
    functionTarget?: string | null;
    /**
     * Output only. Source code location of the image.
     */
    sourceLocation?: string | null;
  }
  /**
   * Build the source using Buildpacks.
   */
  export interface Schema$GoogleCloudRunV2BuildpacksBuild {
    /**
     * Optional. The base image to use for the build.
     */
    baseImage?: string | null;
    /**
     * Optional. cache_image_uri is the GCR/AR URL where the cache image will be stored. cache_image_uri is optional and omitting it will disable caching. This URL must be stable across builds. It is used to derive a build-specific temporary URL by substituting the tag with the build ID. The build will clean up the temporary image on a best-effort basis.
     */
    cacheImageUri?: string | null;
    /**
     * Optional. Whether or not the application container will be enrolled in automatic base image updates. When true, the application will be built on a scratch base image, so the base layers can be appended at run time.
     */
    enableAutomaticUpdates?: boolean | null;
    /**
     * Optional. User-provided build-time environment variables.
     */
    environmentVariables?: {[key: string]: string} | null;
    /**
     * Optional. Name of the function target if the source is a function source. Required for function builds.
     */
    functionTarget?: string | null;
    /**
     * Optional. project_descriptor stores the path to the project descriptor file. When empty, it means that there is no project descriptor file in the source.
     */
    projectDescriptor?: string | null;
    /**
     * The runtime name, e.g. 'go113'. Leave blank for generic builds.
     */
    runtime?: string | null;
  }
  /**
   * Request message for deleting an Execution.
   */
  export interface Schema$GoogleCloudRunV2CancelExecutionRequest {
    /**
     * A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Indicates that the request should be validated without actually cancelling any resources.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
   */
  export interface Schema$GoogleCloudRunV2CloudSqlInstance {
    /**
     * The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project\}:{location\}:{instance\}
     */
    instances?: string[] | null;
  }
  /**
   * Defines a status condition for a resource.
   */
  export interface Schema$GoogleCloudRunV2Condition {
    /**
     * Output only. A reason for the execution condition.
     */
    executionReason?: string | null;
    /**
     * Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Human readable message indicating details about the current status.
     */
    message?: string | null;
    /**
     * Output only. A common (service-level) reason for this condition.
     */
    reason?: string | null;
    /**
     * Output only. A reason for the revision condition.
     */
    revisionReason?: string | null;
    /**
     * How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: string | null;
    /**
     * State of the condition.
     */
    state?: string | null;
    /**
     * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.
     */
    type?: string | null;
  }
  /**
   * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments can be supplied by the system to the container at runtime.
   */
  export interface Schema$GoogleCloudRunV2Container {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided.
     */
    args?: string[] | null;
    /**
     * Base image for this container. Only supported for services. If set, it indicates that the service is enrolled into automatic base image update.
     */
    baseImageUri?: string | null;
    /**
     * Output only. The build info of the container image.
     */
    buildInfo?: Schema$GoogleCloudRunV2BuildInfo;
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.
     */
    command?: string[] | null;
    /**
     * Names of the containers that must start before this container.
     */
    dependsOn?: string[] | null;
    /**
     * List of environment variables to set in the container.
     */
    env?: Schema$GoogleCloudRunV2EnvVar[];
    /**
     * Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed.
     */
    image?: string | null;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails.
     */
    livenessProbe?: Schema$GoogleCloudRunV2Probe;
    /**
     * Name of the container specified as a DNS_LABEL (RFC 1123).
     */
    name?: string | null;
    /**
     * List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
     */
    ports?: Schema$GoogleCloudRunV2ContainerPort[];
    /**
     * Compute Resource requirements by this container.
     */
    resources?: Schema$GoogleCloudRunV2ResourceRequirements;
    /**
     * Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails.
     */
    startupProbe?: Schema$GoogleCloudRunV2Probe;
    /**
     * Volume to mount into the container's filesystem.
     */
    volumeMounts?: Schema$GoogleCloudRunV2VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
     */
    workingDir?: string | null;
  }
  /**
   * Per-container override specification.
   */
  export interface Schema$GoogleCloudRunV2ContainerOverride {
    /**
     * Optional. Arguments to the entrypoint. Will replace existing args for override.
     */
    args?: string[] | null;
    /**
     * Optional. True if the intention is to clear out existing args list.
     */
    clearArgs?: boolean | null;
    /**
     * List of environment variables to set in the container. Will be merged with existing env for override.
     */
    env?: Schema$GoogleCloudRunV2EnvVar[];
    /**
     * The name of the container specified as a DNS_LABEL.
     */
    name?: string | null;
  }
  /**
   * ContainerPort represents a network port in a single container.
   */
  export interface Schema$GoogleCloudRunV2ContainerPort {
    /**
     * Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536.
     */
    containerPort?: number | null;
    /**
     * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
     */
    name?: string | null;
  }
  /**
   * Build the source using Docker. This means the source has a Dockerfile.
   */
  export interface Schema$GoogleCloudRunV2DockerBuild {}
  /**
   * In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).
   */
  export interface Schema$GoogleCloudRunV2EmptyDirVolumeSource {
    /**
     * The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional
     */
    medium?: string | null;
    /**
     * Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir
     */
    sizeLimit?: string | null;
  }
  /**
   * EnvVar represents an environment variable present in a Container.
   */
  export interface Schema$GoogleCloudRunV2EnvVar {
    /**
     * Required. Name of the environment variable. Must not exceed 32768 characters.
     */
    name?: string | null;
    /**
     * Literal value of the environment variable. Defaults to "", and the maximum length is 32768 bytes. Variable references are not supported in Cloud Run.
     */
    value?: string | null;
    /**
     * Source for the environment variable's value.
     */
    valueSource?: Schema$GoogleCloudRunV2EnvVarSource;
  }
  /**
   * EnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$GoogleCloudRunV2EnvVarSource {
    /**
     * Selects a secret and a specific version from Cloud Secret Manager.
     */
    secretKeyRef?: Schema$GoogleCloudRunV2SecretKeySelector;
  }
  /**
   * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
   */
  export interface Schema$GoogleCloudRunV2Execution {
    /**
     * Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The number of tasks which reached phase Cancelled.
     */
    cancelledCount?: number | null;
    /**
     * Output only. Represents time when the execution was completed. It is not guaranteed to be set in happens-before order across separate operations.
     */
    completionTime?: string | null;
    /**
     * Output only. The Condition of this Execution, containing its readiness status, and detailed error information in case it did not reach the desired state.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Output only. Represents time when the execution was acknowledged by the execution controller. It is not guaranteed to be set in happens-before order across separate operations.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string | null;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string | null;
    /**
     * Output only. The number of tasks which reached phase Failed.
     */
    failedCount?: number | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string | null;
    /**
     * Output only. The name of the parent Job.
     */
    job?: string | null;
    /**
     * Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels
     */
    labels?: {[key: string]: string} | null;
    /**
     * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
     */
    launchStage?: string | null;
    /**
     * Output only. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string | null;
    /**
     * Output only. The unique name of this Execution.
     */
    name?: string | null;
    /**
     * Output only. The generation of this Execution. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Specifies the maximum desired number of tasks the execution should run at any given time. Must be <= task_count. The actual number of tasks running in steady state will be less than this number when ((.spec.task_count - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism.
     */
    parallelism?: number | null;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The number of tasks which have retried at least once.
     */
    retriedCount?: number | null;
    /**
     * Output only. The number of actively running tasks.
     */
    runningCount?: number | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. Represents time when the execution started to run. It is not guaranteed to be set in happens-before order across separate operations.
     */
    startTime?: string | null;
    /**
     * Output only. The number of tasks which reached phase Succeeded.
     */
    succeededCount?: number | null;
    /**
     * Output only. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution.
     */
    taskCount?: number | null;
    /**
     * Output only. The template used to create tasks for this execution.
     */
    template?: Schema$GoogleCloudRunV2TaskTemplate;
    /**
     * Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
   */
  export interface Schema$GoogleCloudRunV2ExecutionReference {
    /**
     * Status for the execution completion.
     */
    completionStatus?: string | null;
    /**
     * Creation timestamp of the execution.
     */
    completionTime?: string | null;
    /**
     * Creation timestamp of the execution.
     */
    createTime?: string | null;
    /**
     * The deletion time of the execution. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * Name of the execution.
     */
    name?: string | null;
  }
  /**
   * ExecutionTemplate describes the data an execution should have when created from a template.
   */
  export interface Schema$GoogleCloudRunV2ExecutionTemplate {
    /**
     * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Specifies the maximum desired number of tasks the execution should run at given time. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.
     */
    parallelism?: number | null;
    /**
     * Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1.
     */
    taskCount?: number | null;
    /**
     * Required. Describes the task(s) that will be created when executing an execution.
     */
    template?: Schema$GoogleCloudRunV2TaskTemplate;
  }
  /**
   * Request message for exporting Cloud Run image.
   */
  export interface Schema$GoogleCloudRunV2ExportImageRequest {
    /**
     * Required. The export destination url (the Artifact Registry repo).
     */
    destinationRepo?: string | null;
  }
  /**
   * ExportImageResponse contains an operation Id to track the image export operation.
   */
  export interface Schema$GoogleCloudRunV2ExportImageResponse {
    /**
     * An operation ID used to track the status of image exports tied to the original pod ID in the request.
     */
    operationId?: string | null;
  }
  /**
   * ExportStatusResponse contains the status of image export operation, with the status of each image export job.
   */
  export interface Schema$GoogleCloudRunV2ExportStatusResponse {
    /**
     * The status of each image export job.
     */
    imageExportStatuses?: Schema$GoogleCloudRunV2ImageExportStatus[];
    /**
     * The operation id.
     */
    operationId?: string | null;
    /**
     * Output only. The state of the overall export operation.
     */
    operationState?: string | null;
  }
  /**
   * Represents a volume backed by a Cloud Storage bucket using Cloud Storage FUSE.
   */
  export interface Schema$GoogleCloudRunV2GCSVolumeSource {
    /**
     * Cloud Storage Bucket name.
     */
    bucket?: string | null;
    /**
     * A list of additional flags to pass to the gcsfuse CLI. Options should be specified without the leading "--".
     */
    mountOptions?: string[] | null;
    /**
     * If true, the volume will be mounted as read only for all mounts.
     */
    readOnly?: boolean | null;
  }
  /**
   * GRPCAction describes an action involving a GRPC port.
   */
  export interface Schema$GoogleCloudRunV2GRPCAction {
    /**
     * Optional. Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number | null;
    /**
     * Optional. Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC.
     */
    service?: string | null;
  }
  /**
   * HTTPGetAction describes an action based on HTTP Get requests.
   */
  export interface Schema$GoogleCloudRunV2HTTPGetAction {
    /**
     * Optional. Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: Schema$GoogleCloudRunV2HTTPHeader[];
    /**
     * Optional. Path to access on the HTTP server. Defaults to '/'.
     */
    path?: string | null;
    /**
     * Optional. Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number | null;
  }
  /**
   * HTTPHeader describes a custom header to be used in HTTP probes
   */
  export interface Schema$GoogleCloudRunV2HTTPHeader {
    /**
     * Required. The header field name
     */
    name?: string | null;
    /**
     * Optional. The header field value
     */
    value?: string | null;
  }
  /**
   * The status of an image export job.
   */
  export interface Schema$GoogleCloudRunV2ImageExportStatus {
    /**
     * The exported image ID as it will appear in Artifact Registry.
     */
    exportedImageDigest?: string | null;
    /**
     * Output only. Has the image export job finished (regardless of successful or failure).
     */
    exportJobState?: string | null;
    /**
     * The status of the export task if done.
     */
    status?: Schema$UtilStatusProto;
    /**
     * The image tag as it will appear in Artifact Registry.
     */
    tag?: string | null;
  }
  /**
   * Holds a single instance split entry for the Worker. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
   */
  export interface Schema$GoogleCloudRunV2InstanceSplit {
    /**
     * Specifies percent of the instance split to this Revision. This defaults to zero if unspecified.
     */
    percent?: number | null;
    /**
     * Revision to which to assign this portion of instances, if split allocation is by revision.
     */
    revision?: string | null;
    /**
     * The allocation type for this instance split.
     */
    type?: string | null;
  }
  /**
   * Represents the observed state of a single `InstanceSplit` entry.
   */
  export interface Schema$GoogleCloudRunV2InstanceSplitStatus {
    /**
     * Specifies percent of the instance split to this Revision.
     */
    percent?: number | null;
    /**
     * Revision to which this instance split is assigned.
     */
    revision?: string | null;
    /**
     * The allocation type for this instance split.
     */
    type?: string | null;
  }
  /**
   * Job represents the configuration of a single job, which references a container image that is run to completion.
   */
  export interface Schema$GoogleCloudRunV2Job {
    /**
     * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources. All system annotations in v1 now have a corresponding field in v2 Job. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Settings for the Binary Authorization feature.
     */
    binaryAuthorization?: Schema$GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string | null;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string | null;
    /**
     * Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string | null;
    /**
     * Output only. The deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Output only. Number of executions created for this job.
     */
    executionCount?: number | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted.
     */
    expireTime?: string | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string | null;
    /**
     * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Job.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Email address of the last authenticated modifier.
     */
    lastModifier?: string | null;
    /**
     * Output only. Name of the last created execution.
     */
    latestCreatedExecution?: Schema$GoogleCloudRunV2ExecutionReference;
    /**
     * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: string | null;
    /**
     * The fully qualified name of this Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}
     */
    name?: string | null;
    /**
     * Output only. The generation of this Job. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Returns true if the Job is currently being acted upon by the system to bring it into the desired state. When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, `observed_generation` and `latest_succeeded_execution`, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `observed_generation` and `generation`, `latest_succeeded_execution` and `latest_created_execution`. If reconciliation failed, `observed_generation` and `latest_succeeded_execution` will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in `terminal_condition` and `conditions`.
     */
    reconciling?: boolean | null;
    /**
     * A unique string used as a suffix for creating a new execution. The Job will become ready when the execution is successfully completed. The sum of job name and token length must be fewer than 63 characters.
     */
    runExecutionToken?: string | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * A unique string used as a suffix creating a new execution. The Job will become ready when the execution is successfully started. The sum of job name and token length must be fewer than 63 characters.
     */
    startExecutionToken?: string | null;
    /**
     * Required. The template used to create executions for this Job.
     */
    template?: Schema$GoogleCloudRunV2ExecutionTemplate;
    /**
     * Output only. The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state.
     */
    terminalCondition?: Schema$GoogleCloudRunV2Condition;
    /**
     * Output only. Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message containing a list of Executions.
   */
  export interface Schema$GoogleCloudRunV2ListExecutionsResponse {
    /**
     * The resulting list of Executions.
     */
    executions?: Schema$GoogleCloudRunV2Execution[];
    /**
     * A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message containing a list of Jobs.
   */
  export interface Schema$GoogleCloudRunV2ListJobsResponse {
    /**
     * The resulting list of Jobs.
     */
    jobs?: Schema$GoogleCloudRunV2Job[];
    /**
     * A token indicating there are more items than page_size. Use it in the next ListJobs request to continue.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message containing a list of Revisions.
   */
  export interface Schema$GoogleCloudRunV2ListRevisionsResponse {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue.
     */
    nextPageToken?: string | null;
    /**
     * The resulting list of Revisions.
     */
    revisions?: Schema$GoogleCloudRunV2Revision[];
  }
  /**
   * Response message containing a list of Services.
   */
  export interface Schema$GoogleCloudRunV2ListServicesResponse {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListServices request to continue.
     */
    nextPageToken?: string | null;
    /**
     * The resulting list of Services.
     */
    services?: Schema$GoogleCloudRunV2Service[];
  }
  /**
   * Response message containing a list of Tasks.
   */
  export interface Schema$GoogleCloudRunV2ListTasksResponse {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListTasks request to continue.
     */
    nextPageToken?: string | null;
    /**
     * The resulting list of Tasks.
     */
    tasks?: Schema$GoogleCloudRunV2Task[];
  }
  /**
   * Response message containing a list of WorkerPools.
   */
  export interface Schema$GoogleCloudRunV2ListWorkerPoolsResponse {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListWorkerPools request to continue.
     */
    nextPageToken?: string | null;
    /**
     * The resulting list of WorkerPools.
     */
    workerPools?: Schema$GoogleCloudRunV2WorkerPool[];
  }
  /**
   * Metadata represents the JSON encoded generated customer metadata.
   */
  export interface Schema$GoogleCloudRunV2Metadata {
    /**
     * JSON encoded Google-generated Customer Metadata for a given resource/project.
     */
    metadata?: string | null;
  }
  /**
   * Settings for multi-region deployment.
   */
  export interface Schema$GoogleCloudRunV2MultiRegionSettings {
    /**
     * Optional. System-generated unique id for the multi-region Service.
     */
    multiRegionId?: string | null;
    /**
     * Required. List of regions to deploy to, including primary region.
     */
    regions?: string[] | null;
  }
  /**
   * Direct VPC egress settings.
   */
  export interface Schema$GoogleCloudRunV2NetworkInterface {
    /**
     * Optional. The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork.
     */
    network?: string | null;
    /**
     * Optional. The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used.
     */
    subnetwork?: string | null;
    /**
     * Optional. Network tags applied to this Cloud Run resource.
     */
    tags?: string[] | null;
  }
  /**
   * Represents an NFS mount.
   */
  export interface Schema$GoogleCloudRunV2NFSVolumeSource {
    /**
     * Path that is exported by the NFS server.
     */
    path?: string | null;
    /**
     * If true, the volume will be mounted as read only for all mounts.
     */
    readOnly?: boolean | null;
    /**
     * Hostname or IP address of the NFS server
     */
    server?: string | null;
  }
  /**
   * Hardware constraints configuration.
   */
  export interface Schema$GoogleCloudRunV2NodeSelector {
    /**
     * Required. GPU accelerator type to attach to an instance.
     */
    accelerator?: string | null;
  }
  /**
   * RunJob Overrides that contains Execution fields to be overridden.
   */
  export interface Schema$GoogleCloudRunV2Overrides {
    /**
     * Per container override specification.
     */
    containerOverrides?: Schema$GoogleCloudRunV2ContainerOverride[];
    /**
     * Optional. The desired number of tasks the execution should run. Will replace existing task_count value.
     */
    taskCount?: number | null;
    /**
     * Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value.
     */
    timeout?: string | null;
  }
  /**
   * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$GoogleCloudRunV2Probe {
    /**
     * Optional. Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     */
    failureThreshold?: number | null;
    /**
     * Optional. GRPC specifies an action involving a gRPC port. Exactly one of httpGet, tcpSocket, or grpc must be specified.
     */
    grpc?: Schema$GoogleCloudRunV2GRPCAction;
    /**
     * Optional. HTTPGet specifies the http request to perform. Exactly one of httpGet, tcpSocket, or grpc must be specified.
     */
    httpGet?: Schema$GoogleCloudRunV2HTTPGetAction;
    /**
     * Optional. Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.
     */
    initialDelaySeconds?: number | null;
    /**
     * Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.
     */
    periodSeconds?: number | null;
    /**
     * Optional. TCPSocket specifies an action involving a TCP port. Exactly one of httpGet, tcpSocket, or grpc must be specified.
     */
    tcpSocket?: Schema$GoogleCloudRunV2TCPSocketAction;
    /**
     * Optional. Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.
     */
    timeoutSeconds?: number | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$GoogleCloudRunV2ResourceRequirements {
    /**
     * Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior.
     */
    cpuIdle?: boolean | null;
    /**
     * Only `memory` and `cpu` keys in the map are supported. Notes: * The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits
     */
    limits?: {[key: string]: string} | null;
    /**
     * Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.
     */
    startupCpuBoost?: boolean | null;
  }
  /**
   * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
   */
  export interface Schema$GoogleCloudRunV2Revision {
    /**
     * Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Holds the single container that defines the unit of execution for this Revision.
     */
    containers?: Schema$GoogleCloudRunV2Container[];
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string | null;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string | null;
    /**
     * The action to take if the encryption key is revoked.
     */
    encryptionKeyRevocationAction?: string | null;
    /**
     * If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.
     */
    encryptionKeyShutdownDuration?: string | null;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * The execution environment being used to host this Revision.
     */
    executionEnvironment?: string | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string | null;
    /**
     * Optional. Output only. True if GPU zonal redundancy is disabled on this revision.
     */
    gpuZonalRedundancyDisabled?: boolean | null;
    /**
     * Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA.
     */
    launchStage?: string | null;
    /**
     * Output only. The Google Console URI to obtain logs for the Revision.
     */
    logUri?: string | null;
    /**
     * Sets the maximum number of requests that each serving instance can receive.
     */
    maxInstanceRequestConcurrency?: number | null;
    /**
     * Output only. The unique name of this Revision.
     */
    name?: string | null;
    /**
     * The node selector for the revision.
     */
    nodeSelector?: Schema$GoogleCloudRunV2NodeSelector;
    /**
     * Output only. The generation of this Revision currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Service.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Scaling settings for this revision.
     */
    scaling?: Schema$GoogleCloudRunV2RevisionScaling;
    /**
     * Output only. The current effective scaling settings for the revision.
     */
    scalingStatus?: Schema$GoogleCloudRunV2RevisionScalingStatus;
    /**
     * Output only. The name of the parent service.
     */
    service?: string | null;
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has.
     */
    serviceAccount?: string | null;
    /**
     * Enables service mesh connectivity.
     */
    serviceMesh?: Schema$GoogleCloudRunV2ServiceMesh;
    /**
     * Enable session affinity.
     */
    sessionAffinity?: boolean | null;
    /**
     * Max allowed time for an instance to respond to a request.
     */
    timeout?: string | null;
    /**
     * Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
    /**
     * A list of Volumes to make available to containers.
     */
    volumes?: Schema$GoogleCloudRunV2Volume[];
    /**
     * VPC Access configuration for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
     */
    vpcAccess?: Schema$GoogleCloudRunV2VpcAccess;
  }
  /**
   * Settings for revision-level scaling settings.
   */
  export interface Schema$GoogleCloudRunV2RevisionScaling {
    /**
     * Optional. Maximum number of serving instances that this resource should have. When unspecified, the field is set to the server default value of 100. For more information see https://cloud.google.com/run/docs/configuring/max-instances
     */
    maxInstanceCount?: number | null;
    /**
     * Optional. Minimum number of serving instances that this resource should have.
     */
    minInstanceCount?: number | null;
  }
  /**
   * Effective settings for the current revision
   */
  export interface Schema$GoogleCloudRunV2RevisionScalingStatus {
    /**
     * The current number of min instances provisioned for this revision.
     */
    desiredMinInstanceCount?: number | null;
  }
  /**
   * RevisionTemplate describes the data a revision should have when created from a template.
   */
  export interface Schema$GoogleCloudRunV2RevisionTemplate {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Holds the single container that defines the unit of execution for this Revision.
     */
    containers?: Schema$GoogleCloudRunV2Container[];
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string | null;
    /**
     * Optional. The action to take if the encryption key is revoked.
     */
    encryptionKeyRevocationAction?: string | null;
    /**
     * Optional. If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.
     */
    encryptionKeyShutdownDuration?: string | null;
    /**
     * Optional. The sandbox environment to host this Revision.
     */
    executionEnvironment?: string | null;
    /**
     * Optional. True if GPU zonal redundancy is disabled on this revision.
     */
    gpuZonalRedundancyDisabled?: boolean | null;
    /**
     * Optional. Disables health checking containers during deployment.
     */
    healthCheckDisabled?: boolean | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Sets the maximum number of requests that each serving instance can receive. If not specified or 0, concurrency defaults to 80 when requested `CPU \>= 1` and defaults to 1 when requested `CPU < 1`.
     */
    maxInstanceRequestConcurrency?: number | null;
    /**
     * Optional. The node selector for the revision template.
     */
    nodeSelector?: Schema$GoogleCloudRunV2NodeSelector;
    /**
     * Optional. The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
     */
    revision?: string | null;
    /**
     * Optional. Scaling settings for this Revision.
     */
    scaling?: Schema$GoogleCloudRunV2RevisionScaling;
    /**
     * Optional. Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Enables service mesh connectivity.
     */
    serviceMesh?: Schema$GoogleCloudRunV2ServiceMesh;
    /**
     * Optional. Enable session affinity.
     */
    sessionAffinity?: boolean | null;
    /**
     * Optional. Max allowed time for an instance to respond to a request.
     */
    timeout?: string | null;
    /**
     * Optional. A list of Volumes to make available to containers.
     */
    volumes?: Schema$GoogleCloudRunV2Volume[];
    /**
     * Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
     */
    vpcAccess?: Schema$GoogleCloudRunV2VpcAccess;
  }
  /**
   * Request message to create a new Execution of a Job.
   */
  export interface Schema$GoogleCloudRunV2RunJobRequest {
    /**
     * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Overrides specification for a given execution of a job. If provided, overrides will be applied to update the execution or task spec.
     */
    overrides?: Schema$GoogleCloudRunV2Overrides;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean | null;
  }
  /**
   * SecretEnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$GoogleCloudRunV2SecretKeySelector {
    /**
     * Required. The name of the secret in Cloud Secret Manager. Format: {secret_name\} if the secret is in the same project. projects/{project\}/secrets/{secret_name\} if the secret is in a different project.
     */
    secret?: string | null;
    /**
     * The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias.
     */
    version?: string | null;
  }
  /**
   * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
   */
  export interface Schema$GoogleCloudRunV2SecretVolumeSource {
    /**
     * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. This might be in conflict with other options that affect the file mode, like fsGroup, and as a result, other mode bits could be set.
     */
    defaultMode?: number | null;
    /**
     * If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.
     */
    items?: Schema$GoogleCloudRunV2VersionToPath[];
    /**
     * Required. The name of the secret in Cloud Secret Manager. Format: {secret\} if the secret is in the same project. projects/{project\}/secrets/{secret\} if the secret is in a different project.
     */
    secret?: string | null;
  }
  /**
   * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
   */
  export interface Schema$GoogleCloudRunV2Service {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Settings for the Binary Authorization feature.
     */
    binaryAuthorization?: Schema$GoogleCloudRunV2BinaryAuthorization;
    /**
     * Optional. Configuration for building a Cloud Run function.
     */
    buildConfig?: Schema$GoogleCloudRunV2BuildConfig;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string | null;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string | null;
    /**
     * Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string | null;
    /**
     * One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
     */
    customAudiences?: string[] | null;
    /**
     * Optional. Disables public resolution of the default URI of this service.
     */
    defaultUriDisabled?: boolean | null;
    /**
     * Output only. The deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * User-provided description of the Service. This field currently has a 512-character limit.
     */
    description?: string | null;
    /**
     * Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permanently deleted.
     */
    expireTime?: string | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    generation?: string | null;
    /**
     * Optional. IAP settings on the Service.
     */
    iapEnabled?: boolean | null;
    /**
     * Optional. Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
     */
    ingress?: string | null;
    /**
     * Optional. Disables IAM permission check for run.routes.invoke for callers of this service. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.
     */
    invokerIamDisabled?: boolean | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Email address of the last authenticated modifier.
     */
    lastModifier?: string | null;
    /**
     * Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestCreatedRevision?: string | null;
    /**
     * Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestReadyRevision?: string | null;
    /**
     * Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: string | null;
    /**
     * Optional. Settings for multi-region deployment.
     */
    multiRegionSettings?: Schema$GoogleCloudRunV2MultiRegionSettings;
    /**
     * The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project\}/locations/{location\}/services/{service_id\}
     */
    name?: string | null;
    /**
     * Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revision`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.
     */
    reconciling?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Optional. Specifies service-level scaling settings
     */
    scaling?: Schema$GoogleCloudRunV2ServiceScaling;
    /**
     * Required. The template used to create revisions for this Service.
     */
    template?: Schema$GoogleCloudRunV2RevisionTemplate;
    /**
     * Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    terminalCondition?: Schema$GoogleCloudRunV2Condition;
    /**
     * Output only. True if Cloud Run Threat Detection monitoring is enabled for the parent project of this Service.
     */
    threatDetectionEnabled?: boolean | null;
    /**
     * Optional. Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.
     */
    traffic?: Schema$GoogleCloudRunV2TrafficTarget[];
    /**
     * Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    trafficStatuses?: Schema$GoogleCloudRunV2TrafficTargetStatus[];
    /**
     * Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
    /**
     * Output only. The main URI in which this Service is serving traffic.
     */
    uri?: string | null;
    /**
     * Output only. All URLs serving traffic for this Service.
     */
    urls?: string[] | null;
  }
  /**
   * Settings for Cloud Service Mesh. For more information see https://cloud.google.com/service-mesh/docs/overview.
   */
  export interface Schema$GoogleCloudRunV2ServiceMesh {
    /**
     * The Mesh resource name. Format: `projects/{project\}/locations/global/meshes/{mesh\}`, where `{project\}` can be project id or number.
     */
    mesh?: string | null;
  }
  /**
   * Scaling settings applied at the service level rather than at the revision level.
   */
  export interface Schema$GoogleCloudRunV2ServiceScaling {
    /**
     * Optional. total instance count for the service in manual scaling mode. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving.
     */
    manualInstanceCount?: number | null;
    /**
     * Optional. total max instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving.
     */
    maxInstanceCount?: number | null;
    /**
     * Optional. total min instances for the service. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving.
     */
    minInstanceCount?: number | null;
    /**
     * Optional. The scaling mode for the service.
     */
    scalingMode?: string | null;
  }
  /**
   * Location of the source in an archive file in Google Cloud Storage.
   */
  export interface Schema$GoogleCloudRunV2StorageSource {
    /**
     * Required. Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Optional. Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Required. Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
  }
  /**
   * Request message for submitting a Build.
   */
  export interface Schema$GoogleCloudRunV2SubmitBuildRequest {
    /**
     * Build the source using Buildpacks.
     */
    buildpackBuild?: Schema$GoogleCloudRunV2BuildpacksBuild;
    /**
     * Build the source using Docker. This means the source has a Dockerfile.
     */
    dockerBuild?: Schema$GoogleCloudRunV2DockerBuild;
    /**
     * Required. Artifact Registry URI to store the built image.
     */
    imageUri?: string | null;
    /**
     * Optional. The service account to use for the build. If not set, the default Cloud Build service account for the project will be used.
     */
    serviceAccount?: string | null;
    /**
     * Required. Source for the build.
     */
    storageSource?: Schema$GoogleCloudRunV2StorageSource;
    /**
     * Optional. Additional tags to annotate the build.
     */
    tags?: string[] | null;
    /**
     * Optional. Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project\}/locations/{region\}/workerPools/{workerPool\}` where `{project\}` and `{region\}` are the project id and region respectively where the worker pool is defined and `{workerPool\}` is the short name of the worker pool.
     */
    workerPool?: string | null;
  }
  /**
   * Response message for submitting a Build.
   */
  export interface Schema$GoogleCloudRunV2SubmitBuildResponse {
    /**
     * URI of the base builder image in Artifact Registry being used in the build. Used to opt into automatic base image updates.
     */
    baseImageUri?: string | null;
    /**
     * Warning message for the base image.
     */
    baseImageWarning?: string | null;
    /**
     * Cloud Build operation to be polled via CloudBuild API.
     */
    buildOperation?: Schema$GoogleLongrunningOperation;
  }
  /**
   * Task represents a single run of a container to completion.
   */
  export interface Schema$GoogleCloudRunV2Task {
    /**
     * Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations.
     */
    completionTime?: string | null;
    /**
     * Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Holds the single container that defines the unit of execution for this task.
     */
    containers?: Schema$GoogleCloudRunV2Container[];
    /**
     * Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations.
     */
    createTime?: string | null;
    /**
     * Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string | null;
    /**
     * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Output only. The name of the parent Execution.
     */
    execution?: string | null;
    /**
     * The execution environment being used to host this Task.
     */
    executionEnvironment?: string | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request.
     */
    expireTime?: string | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state.
     */
    generation?: string | null;
    /**
     * Optional. Output only. True if GPU zonal redundancy is disabled on this task.
     */
    gpuZonalRedundancyDisabled?: boolean | null;
    /**
     * Output only. Index of the Task, unique per execution, and beginning at 0.
     */
    index?: number | null;
    /**
     * Output only. The name of the parent Job.
     */
    job?: string | null;
    /**
     * Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Result of the last attempt of this Task.
     */
    lastAttemptResult?: Schema$GoogleCloudRunV2TaskAttemptResult;
    /**
     * Output only. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string | null;
    /**
     * Number of retries allowed per Task, before marking this Task failed.
     */
    maxRetries?: number | null;
    /**
     * Output only. The unique name of this Task.
     */
    name?: string | null;
    /**
     * Output only. The node selector for the task.
     */
    nodeSelector?: Schema$GoogleCloudRunV2NodeSelector;
    /**
     * Output only. The generation of this Task. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Indicates whether the resource's reconciliation is still in progress. See comments in `Job.reconciling` for additional information on reconciliation process in Cloud Run.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit.
     */
    retried?: number | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations.
     */
    scheduledTime?: string | null;
    /**
     * Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccount?: string | null;
    /**
     * Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations.
     */
    startTime?: string | null;
    /**
     * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
     */
    timeout?: string | null;
    /**
     * Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
    /**
     * A list of Volumes to make available to containers.
     */
    volumes?: Schema$GoogleCloudRunV2Volume[];
    /**
     * Output only. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
     */
    vpcAccess?: Schema$GoogleCloudRunV2VpcAccess;
  }
  /**
   * Result of a task attempt.
   */
  export interface Schema$GoogleCloudRunV2TaskAttemptResult {
    /**
     * Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. At most one of exit_code or term_signal will be set.
     */
    exitCode?: number | null;
    /**
     * Output only. The status of this attempt. If the status code is OK, then the attempt succeeded.
     */
    status?: Schema$GoogleRpcStatus;
    /**
     * Output only. Termination signal of the container. This is set to non-zero if the container is terminated by the system. At most one of exit_code or term_signal will be set.
     */
    termSignal?: number | null;
  }
  /**
   * TaskTemplate describes the data a task should have when created from a template.
   */
  export interface Schema$GoogleCloudRunV2TaskTemplate {
    /**
     * Holds the single container that defines the unit of execution for this task.
     */
    containers?: Schema$GoogleCloudRunV2Container[];
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string | null;
    /**
     * Optional. The execution environment being used to host this Task.
     */
    executionEnvironment?: string | null;
    /**
     * Optional. True if GPU zonal redundancy is disabled on this task template.
     */
    gpuZonalRedundancyDisabled?: boolean | null;
    /**
     * Number of retries allowed per Task, before marking this Task failed. Defaults to 3.
     */
    maxRetries?: number | null;
    /**
     * Optional. The node selector for the task template.
     */
    nodeSelector?: Schema$GoogleCloudRunV2NodeSelector;
    /**
     * Optional. Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds.
     */
    timeout?: string | null;
    /**
     * Optional. A list of Volumes to make available to containers.
     */
    volumes?: Schema$GoogleCloudRunV2Volume[];
    /**
     * Optional. VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
     */
    vpcAccess?: Schema$GoogleCloudRunV2VpcAccess;
  }
  /**
   * TCPSocketAction describes an action based on opening a socket
   */
  export interface Schema$GoogleCloudRunV2TCPSocketAction {
    /**
     * Optional. Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number | null;
  }
  /**
   * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
   */
  export interface Schema$GoogleCloudRunV2TrafficTarget {
    /**
     * Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
     */
    percent?: number | null;
    /**
     * Revision to which to send this portion of traffic, if traffic allocation is by revision.
     */
    revision?: string | null;
    /**
     * Indicates a string to be part of the URI to exclusively reference this target.
     */
    tag?: string | null;
    /**
     * The allocation type for this traffic target.
     */
    type?: string | null;
  }
  /**
   * Represents the observed state of a single `TrafficTarget` entry.
   */
  export interface Schema$GoogleCloudRunV2TrafficTargetStatus {
    /**
     * Specifies percent of the traffic to this Revision.
     */
    percent?: number | null;
    /**
     * Revision to which this traffic is sent.
     */
    revision?: string | null;
    /**
     * Indicates the string used in the URI to exclusively reference this target.
     */
    tag?: string | null;
    /**
     * The allocation type for this traffic target.
     */
    type?: string | null;
    /**
     * Displays the target URI.
     */
    uri?: string | null;
  }
  /**
   * VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.
   */
  export interface Schema$GoogleCloudRunV2VersionToPath {
    /**
     * Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    mode?: number | null;
    /**
     * Required. The relative path of the secret in the container.
     */
    path?: string | null;
    /**
     * The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version.
     */
    version?: string | null;
  }
  /**
   * Volume represents a named volume in a container.
   */
  export interface Schema$GoogleCloudRunV2Volume {
    /**
     * For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
     */
    cloudSqlInstance?: Schema$GoogleCloudRunV2CloudSqlInstance;
    /**
     * Ephemeral storage used as a shared volume.
     */
    emptyDir?: Schema$GoogleCloudRunV2EmptyDirVolumeSource;
    /**
     * Persistent storage backed by a Google Cloud Storage bucket.
     */
    gcs?: Schema$GoogleCloudRunV2GCSVolumeSource;
    /**
     * Required. Volume's name.
     */
    name?: string | null;
    /**
     * For NFS Voumes, contains the path to the nfs Volume
     */
    nfs?: Schema$GoogleCloudRunV2NFSVolumeSource;
    /**
     * Secret represents a secret that should populate this volume.
     */
    secret?: Schema$GoogleCloudRunV2SecretVolumeSource;
  }
  /**
   * VolumeMount describes a mounting of a Volume within a container.
   */
  export interface Schema$GoogleCloudRunV2VolumeMount {
    /**
     * Required. Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be `/cloudsql`. All instances defined in the Volume will be available as `/cloudsql/[instance]`. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
     */
    mountPath?: string | null;
    /**
     * Required. This must match the Name of a Volume.
     */
    name?: string | null;
  }
  /**
   * VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
   */
  export interface Schema$GoogleCloudRunV2VpcAccess {
    /**
     * VPC Access connector name. Format: `projects/{project\}/locations/{location\}/connectors/{connector\}`, where `{project\}` can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors.
     */
    connector?: string | null;
    /**
     * Optional. Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY.
     */
    egress?: string | null;
    /**
     * Optional. Direct VPC egress settings. Currently only single network interface is supported.
     */
    networkInterfaces?: Schema$GoogleCloudRunV2NetworkInterface[];
  }
  /**
   * WorkerPool acts as a top-level container that manages a set of configurations and revision templates which implement a pull-based workload. WorkerPool exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
   */
  export interface Schema$GoogleCloudRunV2WorkerPool {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 WorkerPool. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Settings for the Binary Authorization feature.
     */
    binaryAuthorization?: Schema$GoogleCloudRunV2BinaryAuthorization;
    /**
     * Arbitrary identifier for the API client.
     */
    client?: string | null;
    /**
     * Arbitrary version identifier for the API client.
     */
    clientVersion?: string | null;
    /**
     * Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the WorkerPool does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    conditions?: Schema$GoogleCloudRunV2Condition[];
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Output only. Email address of the authenticated creator.
     */
    creator?: string | null;
    /**
     * One or more custom audiences that you want this worker pool to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
     */
    customAudiences?: string[] | null;
    /**
     * Output only. The deletion time. It is only populated as a response to a Delete request.
     */
    deleteTime?: string | null;
    /**
     * User-provided description of the WorkerPool. This field currently has a 512-character limit.
     */
    description?: string | null;
    /**
     * Optional. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string | null;
    /**
     * Output only. For a deleted resource, the time after which it will be permamently deleted.
     */
    expireTime?: string | null;
    /**
     * Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    generation?: string | null;
    /**
     * Optional. Specifies how to distribute instances over a collection of Revisions belonging to the WorkerPool. If instance split is empty or not provided, defaults to 100% instances assigned to the latest `Ready` Revision.
     */
    instanceSplits?: Schema$GoogleCloudRunV2InstanceSplit[];
    /**
     * Output only. Detailed status information for corresponding instance splits. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    instanceSplitStatuses?: Schema$GoogleCloudRunV2InstanceSplitStatus[];
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPool.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Email address of the last authenticated modifier.
     */
    lastModifier?: string | null;
    /**
     * Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestCreatedRevision?: string | null;
    /**
     * Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    latestReadyRevision?: string | null;
    /**
     * Optional. The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
     */
    launchStage?: string | null;
    /**
     * The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_id\}`
     */
    name?: string | null;
    /**
     * Output only. The generation of this WorkerPool currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.
     */
    observedGeneration?: string | null;
    /**
     * Output only. Returns true if the WorkerPool is currently being acted upon by the system to bring it into the desired state. When a new WorkerPool is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the WorkerPool to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the WorkerPool, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created WorkerPools. Additional information on the failure can be found in `terminal_condition` and `conditions`.
     */
    reconciling?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Optional. Specifies worker-pool-level scaling settings
     */
    scaling?: Schema$GoogleCloudRunV2WorkerPoolScaling;
    /**
     * Required. The template used to create revisions for this WorkerPool.
     */
    template?: Schema$GoogleCloudRunV2WorkerPoolRevisionTemplate;
    /**
     * Output only. The Condition of this WorkerPool, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
     */
    terminalCondition?: Schema$GoogleCloudRunV2Condition;
    /**
     * Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
     */
    uid?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * WorkerPoolRevisionTemplate describes the data a worker pool revision should have when created from a template.
   */
  export interface Schema$GoogleCloudRunV2WorkerPoolRevisionTemplate {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate. This field follows Kubernetes annotations' namespacing, limits, and rules.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Holds list of the containers that defines the unit of execution for this Revision.
     */
    containers?: Schema$GoogleCloudRunV2Container[];
    /**
     * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
     */
    encryptionKey?: string | null;
    /**
     * Optional. The action to take if the encryption key is revoked.
     */
    encryptionKeyRevocationAction?: string | null;
    /**
     * Optional. If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour.
     */
    encryptionKeyShutdownDuration?: string | null;
    /**
     * Optional. True if GPU zonal redundancy is disabled on this worker pool.
     */
    gpuZonalRedundancyDisabled?: boolean | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 WorkerPoolRevisionTemplate.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The node selector for the revision template.
     */
    nodeSelector?: Schema$GoogleCloudRunV2NodeSelector;
    /**
     * Optional. The unique name for the revision. If this field is omitted, it will be automatically generated based on the WorkerPool name.
     */
    revision?: string | null;
    /**
     * Optional. Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Enables service mesh connectivity.
     */
    serviceMesh?: Schema$GoogleCloudRunV2ServiceMesh;
    /**
     * Optional. A list of Volumes to make available to containers.
     */
    volumes?: Schema$GoogleCloudRunV2Volume[];
    /**
     * Optional. VPC Access configuration to use for this Revision. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
     */
    vpcAccess?: Schema$GoogleCloudRunV2VpcAccess;
  }
  /**
   * Worker pool scaling settings.
   */
  export interface Schema$GoogleCloudRunV2WorkerPoolScaling {
    /**
     * Optional. The total number of instances in manual scaling mode.
     */
    manualInstanceCount?: number | null;
  }
  /**
   * ApprovalConfig describes configuration for manual approval of a build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1ApprovalConfig {
    /**
     * Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.
     */
    approvalRequired?: boolean | null;
  }
  /**
   * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1ApprovalResult {
    /**
     * Output only. The time when the approval decision was made.
     */
    approvalTime?: string | null;
    /**
     * Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.
     */
    approverAccount?: string | null;
    /**
     * Optional. An optional comment for this manual approval result.
     */
    comment?: string | null;
    /**
     * Required. The decision of this manual approval.
     */
    decision?: string | null;
    /**
     * Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.
     */
    url?: string | null;
  }
  /**
   * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1ArtifactObjects {
    /**
     * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
     */
    location?: string | null;
    /**
     * Path globs used to match files in the build's workspace.
     */
    paths?: string[] | null;
    /**
     * Output only. Stores timing information for pushing all artifact objects.
     */
    timing?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
  }
  /**
   * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Artifacts {
    /**
     * Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE.
     */
    goModules?: Schema$GoogleDevtoolsCloudbuildV1GoModule[];
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[] | null;
    /**
     * A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.
     */
    mavenArtifacts?: Schema$GoogleDevtoolsCloudbuildV1MavenArtifact[];
    /**
     * A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE.
     */
    npmPackages?: Schema$GoogleDevtoolsCloudbuildV1NpmPackage[];
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Schema$GoogleDevtoolsCloudbuildV1ArtifactObjects;
    /**
     * A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.
     */
    pythonPackages?: Schema$GoogleDevtoolsCloudbuildV1PythonPackage[];
  }
  /**
   * A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Build {
    /**
     * Output only. Describes this build's approval configuration, status, and result.
     */
    approval?: Schema$GoogleDevtoolsCloudbuildV1BuildApproval;
    /**
     * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
     */
    artifacts?: Schema$GoogleDevtoolsCloudbuildV1Artifacts;
    /**
     * Secrets and secret environment variables.
     */
    availableSecrets?: Schema$GoogleDevtoolsCloudbuildV1Secrets;
    /**
     * Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
     */
    buildTriggerId?: string | null;
    /**
     * Output only. Time at which the request to create the build was received.
     */
    createTime?: string | null;
    /**
     * Optional. Dependencies that the Cloud Build worker will fetch before executing user steps.
     */
    dependencies?: Schema$GoogleDevtoolsCloudbuildV1Dependency[];
    /**
     * Output only. Contains information about the build when status=FAILURE.
     */
    failureInfo?: Schema$GoogleDevtoolsCloudbuildV1FailureInfo;
    /**
     * Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.
     */
    finishTime?: string | null;
    /**
     * Optional. Configuration for git operations.
     */
    gitConfig?: Schema$GoogleDevtoolsCloudbuildV1GitConfig;
    /**
     * Output only. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.
     */
    images?: string[] | null;
    /**
     * Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket\}/log-${build_id\}.txt`.
     */
    logsBucket?: string | null;
    /**
     * Output only. URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string | null;
    /**
     * Output only. The 'Build' name with format: `projects/{project\}/locations/{location\}/builds/{build\}`, where {build\} is a unique identifier generated by the service.
     */
    name?: string | null;
    /**
     * Special options for this build.
     */
    options?: Schema$GoogleDevtoolsCloudbuildV1BuildOptions;
    /**
     * Output only. ID of the project.
     */
    projectId?: string | null;
    /**
     * TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.
     */
    queueTtl?: string | null;
    /**
     * Output only. Results of the build.
     */
    results?: Schema$GoogleDevtoolsCloudbuildV1Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets
     */
    secrets?: Schema$GoogleDevtoolsCloudbuildV1Secret[];
    /**
     * IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}`. ACCOUNT can be email address or uniqueId of the service account.
     */
    serviceAccount?: string | null;
    /**
     * Optional. The location of the source files to build.
     */
    source?: Schema$GoogleDevtoolsCloudbuildV1Source;
    /**
     * Output only. A permanent fixed identifier for source.
     */
    sourceProvenance?: Schema$GoogleDevtoolsCloudbuildV1SourceProvenance;
    /**
     * Output only. Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Output only. Status of the build.
     */
    status?: string | null;
    /**
     * Output only. Customer-readable message about the current status.
     */
    statusDetail?: string | null;
    /**
     * Required. The operations to be performed on the workspace.
     */
    steps?: Schema$GoogleDevtoolsCloudbuildV1BuildStep[];
    /**
     * Substitutions data for `Build` resource.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `Build`. These are not docker tags.
     */
    tags?: string[] | null;
    /**
     * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.
     */
    timing?: {[key: string]: Schema$GoogleDevtoolsCloudbuildV1TimeSpan} | null;
    /**
     * Output only. Non-fatal problems encountered during the execution of the build.
     */
    warnings?: Schema$GoogleDevtoolsCloudbuildV1Warning[];
  }
  /**
   * BuildApproval describes a build's approval configuration, state, and result.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1BuildApproval {
    /**
     * Output only. Configuration for manual approval of this build.
     */
    config?: Schema$GoogleDevtoolsCloudbuildV1ApprovalConfig;
    /**
     * Output only. Result of manual approval for this Build.
     */
    result?: Schema$GoogleDevtoolsCloudbuildV1ApprovalResult;
    /**
     * Output only. The state of this build's approval.
     */
    state?: string | null;
  }
  /**
   * Metadata for build operations.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1BuildOperationMetadata {
    /**
     * The build that the operation is tracking.
     */
    build?: Schema$GoogleDevtoolsCloudbuildV1Build;
  }
  /**
   * Optional arguments to enable specific features of builds.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1BuildOptions {
    /**
     * Option to include built-in and custom substitutions as env variables for all build steps.
     */
    automapSubstitutions?: boolean | null;
    /**
     * Optional. Option to specify how default logs buckets are setup.
     */
    defaultLogsBucketBehavior?: string | null;
    /**
     * Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error.
     */
    diskSizeGb?: string | null;
    /**
     * Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.
     */
    dynamicSubstitutions?: boolean | null;
    /**
     * Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs.
     */
    enableStructuredLogging?: boolean | null;
    /**
     * A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Option to specify the logging mode, which determines if and where build logs are stored.
     */
    logging?: string | null;
    /**
     * Option to define build log streaming behavior to Cloud Storage.
     */
    logStreamingOption?: string | null;
    /**
     * Compute Engine machine type on which to run the build.
     */
    machineType?: string | null;
    /**
     * Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
     */
    pool?: Schema$GoogleDevtoolsCloudbuildV1PoolOption;
    /**
     * Optional. Option to specify the Pub/Sub topic to receive build status updates.
     */
    pubsubTopic?: string | null;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string | null;
    /**
     * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.
     */
    secretEnv?: string[] | null;
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[] | null;
    /**
     * Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.
     */
    substitutionOption?: string | null;
    /**
     * Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$GoogleDevtoolsCloudbuildV1Volume[];
    /**
     * This field deprecated; please use `pool.name` instead.
     */
    workerPool?: string | null;
  }
  /**
   * A step in the build pipeline.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1BuildStep {
    /**
     * Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.
     */
    allowExitCodes?: number[] | null;
    /**
     * Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.
     */
    allowFailure?: boolean | null;
    /**
     * A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption.
     */
    automapSubstitutions?: boolean | null;
    /**
     * Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Output only. Return code from running the step.
     */
    exitCode?: number | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step's builder image only.
     */
    pullTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.
     */
    script?: string | null;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
     */
    secretEnv?: string[] | null;
    /**
     * Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
     */
    status?: string | null;
    /**
     * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for executing this build step.
     */
    timing?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$GoogleDevtoolsCloudbuildV1Volume[];
    /**
     * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
     */
    waitFor?: string[] | null;
  }
  /**
   * An image built by the pipeline.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1BuiltImage {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string | null;
    /**
     * Name used to push the container image to Google Container Registry, as presented to `docker push`.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pushing the specified image.
     */
    pushTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
  }
  /**
   * Location of the source in a 2nd-gen Google Cloud Build repository resource.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1ConnectedRepository {
    /**
     * Optional. Directory, relative to the source root, in which to run the build.
     */
    dir?: string | null;
    /**
     * Required. Name of the Google Cloud Build repository, formatted as `projects/x/locations/x/connections/x/repositories/x`.
     */
    repository?: string | null;
    /**
     * Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
     */
    revision?: string | null;
  }
  /**
   * A dependency that the Cloud Build worker will fetch before executing user steps.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Dependency {
    /**
     * If set to true disable all dependency fetching (ignoring the default source as well).
     */
    empty?: boolean | null;
    /**
     * Represents a git repository as a build dependency.
     */
    gitSource?: Schema$GoogleDevtoolsCloudbuildV1GitSourceDependency;
  }
  /**
   * This config defines the location of a source through Developer Connect.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
    /**
     * Required. Directory, relative to the source root, in which to run the build.
     */
    dir?: string | null;
    /**
     * Required. The Developer Connect Git repository link, formatted as `projects/x/locations/x/connections/x/gitRepositoryLink/x`.
     */
    gitRepositoryLink?: string | null;
    /**
     * Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
     */
    revision?: string | null;
  }
  /**
   * A fatal problem encountered during the execution of the build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1FailureInfo {
    /**
     * Explains the failure issue in more detail using hard-coded text.
     */
    detail?: string | null;
    /**
     * The name of the failure.
     */
    type?: string | null;
  }
  /**
   * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: Schema$GoogleDevtoolsCloudbuildV1Hash[];
  }
  /**
   * GitConfig is a configuration for git operations.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1GitConfig {
    /**
     * Configuration for HTTP related git operations.
     */
    http?: Schema$GoogleDevtoolsCloudbuildV1HttpConfig;
  }
  /**
   * Location of the source in any accessible Git repository.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1GitSource {
    /**
     * Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch.
     */
    revision?: string | null;
    /**
     * Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote.
     */
    url?: string | null;
  }
  /**
   * Represents a git repository as a build dependency.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1GitSourceDependency {
    /**
     * Optional. How much history should be fetched for the build (default 1, -1 for all history).
     */
    depth?: string | null;
    /**
     * Required. Where should the files be placed on the worker.
     */
    destPath?: string | null;
    /**
     * Optional. True if submodules should be fetched too (default false).
     */
    recurseSubmodules?: boolean | null;
    /**
     * Required. The kind of repo (url or dev connect).
     */
    repository?: Schema$GoogleDevtoolsCloudbuildV1GitSourceRepository;
    /**
     * Required. The revision that we will fetch the repo at.
     */
    revision?: string | null;
  }
  /**
   * A repository for a git source.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1GitSourceRepository {
    /**
     * The Developer Connect Git repository link formatted as `projects/x/locations/x/connections/x/gitRepositoryLink/x`
     */
    developerConnect?: string | null;
    /**
     * Location of the Git repository.
     */
    url?: string | null;
  }
  /**
   * Go module to upload to Artifact Registry upon successful completion of all build steps. A module refers to all dependencies in a go.mod file.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1GoModule {
    /**
     * Optional. The Go module's "module path". e.g. example.com/foo/v2
     */
    modulePath?: string | null;
    /**
     * Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5
     */
    moduleVersion?: string | null;
    /**
     * Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location.
     */
    repositoryLocation?: string | null;
    /**
     * Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo
     */
    repositoryName?: string | null;
    /**
     * Optional. Project ID of the Artifact Registry repository. Defaults to the build project.
     */
    repositoryProjectId?: string | null;
    /**
     * Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage
     */
    sourcePath?: string | null;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Hash {
    /**
     * The type of hash that was performed.
     */
    type?: string | null;
    /**
     * The hash value.
     */
    value?: string | null;
  }
  /**
   * HttpConfig is a configuration for HTTP related git operations.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1HttpConfig {
    /**
     * SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`.
     */
    proxySecretVersionName?: string | null;
  }
  /**
   * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1InlineSecret {
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    envMap?: {[key: string]: string} | null;
    /**
     * Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/x/locations/x/keyRings/x/cryptoKeys/x
     */
    kmsKeyName?: string | null;
  }
  /**
   * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1MavenArtifact {
    /**
     * Maven `artifactId` value used when uploading the artifact to Artifact Registry.
     */
    artifactId?: string | null;
    /**
     * Maven `groupId` value used when uploading the artifact to Artifact Registry.
     */
    groupId?: string | null;
    /**
     * Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
     */
    path?: string | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
    /**
     * Maven `version` value used when uploading the artifact to Artifact Registry.
     */
    version?: string | null;
  }
  /**
   * Npm package to upload to Artifact Registry upon successful completion of all build steps.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1NpmPackage {
    /**
     * Path to the package.json. e.g. workspace/path/to/package
     */
    packagePath?: string | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
  }
  /**
   * Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1PoolOption {
    /**
     * The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project\}/locations/{location\}/workerPools/{workerPoolId\}
     */
    name?: string | null;
  }
  /**
   * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1PythonPackage {
    /**
     * Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/x`, and sometimes additionally an `.asc` file.
     */
    paths?: string[] | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
  }
  /**
   * Location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1RepoSource {
    /**
     * Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Optional. Only trigger a build if the revision regex does NOT match the revision regex.
     */
    invertRegex?: boolean | null;
    /**
     * Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string | null;
    /**
     * Required. Name of the Cloud Source Repository.
     */
    repoName?: string | null;
    /**
     * Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string | null;
  }
  /**
   * Artifacts created by the build pipeline.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Results {
    /**
     * Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    artifactManifest?: string | null;
    /**
     * Time to push all non-container artifacts to Cloud Storage.
     */
    artifactTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * List of build step digests, in the order corresponding to build step indices.
     */
    buildStepImages?: string[] | null;
    /**
     * List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted.
     */
    buildStepOutputs?: string[] | null;
    /**
     * Optional. Go module artifacts uploaded to Artifact Registry at the end of the build.
     */
    goModules?: Schema$GoogleDevtoolsCloudbuildV1UploadedGoModule[];
    /**
     * Container images that were built as a part of the build.
     */
    images?: Schema$GoogleDevtoolsCloudbuildV1BuiltImage[];
    /**
     * Maven artifacts uploaded to Artifact Registry at the end of the build.
     */
    mavenArtifacts?: Schema$GoogleDevtoolsCloudbuildV1UploadedMavenArtifact[];
    /**
     * Npm packages uploaded to Artifact Registry at the end of the build.
     */
    npmPackages?: Schema$GoogleDevtoolsCloudbuildV1UploadedNpmPackage[];
    /**
     * Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    numArtifacts?: string | null;
    /**
     * Python artifacts uploaded to Artifact Registry at the end of the build.
     */
    pythonPackages?: Schema$GoogleDevtoolsCloudbuildV1UploadedPythonPackage[];
  }
  /**
   * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string | null;
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    secretEnv?: {[key: string]: string} | null;
  }
  /**
   * Pairs a secret environment variable with a SecretVersion in Secret Manager.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1SecretManagerSecret {
    /**
     * Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.
     */
    env?: string | null;
    /**
     * Resource name of the SecretVersion. In format: projects/x/secrets/x/versions/x
     */
    versionName?: string | null;
  }
  /**
   * Secrets and secret environment variables.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Secrets {
    /**
     * Secrets encrypted with KMS key and the associated secret environment variable.
     */
    inline?: Schema$GoogleDevtoolsCloudbuildV1InlineSecret[];
    /**
     * Secrets in Secret Manager and associated secret environment variable.
     */
    secretManager?: Schema$GoogleDevtoolsCloudbuildV1SecretManagerSecret[];
  }
  /**
   * Location of the source in a supported storage service.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Source {
    /**
     * Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource.
     */
    connectedRepository?: Schema$GoogleDevtoolsCloudbuildV1ConnectedRepository;
    /**
     * If provided, get the source from this Developer Connect config.
     */
    developerConnectConfig?: Schema$GoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
    /**
     * If provided, get the source from this Git repository.
     */
    gitSource?: Schema$GoogleDevtoolsCloudbuildV1GitSource;
    /**
     * If provided, get the source from this location in a Cloud Source Repository.
     */
    repoSource?: Schema$GoogleDevtoolsCloudbuildV1RepoSource;
    /**
     * If provided, get the source from this location in Cloud Storage.
     */
    storageSource?: Schema$GoogleDevtoolsCloudbuildV1StorageSource;
    /**
     * If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
     */
    storageSourceManifest?: Schema$GoogleDevtoolsCloudbuildV1StorageSourceManifest;
  }
  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1SourceProvenance {
    /**
     * Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: {
      [key: string]: Schema$GoogleDevtoolsCloudbuildV1FileHashes;
    } | null;
    /**
     * Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved.
     */
    resolvedConnectedRepository?: Schema$GoogleDevtoolsCloudbuildV1ConnectedRepository;
    /**
     * Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved.
     */
    resolvedGitSource?: Schema$GoogleDevtoolsCloudbuildV1GitSource;
    /**
     * A copy of the build's `source.repo_source`, if exists, with any revisions resolved.
     */
    resolvedRepoSource?: Schema$GoogleDevtoolsCloudbuildV1RepoSource;
    /**
     * A copy of the build's `source.storage_source`, if exists, with any generations resolved.
     */
    resolvedStorageSource?: Schema$GoogleDevtoolsCloudbuildV1StorageSource;
    /**
     * A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.
     */
    resolvedStorageSourceManifest?: Schema$GoogleDevtoolsCloudbuildV1StorageSourceManifest;
  }
  /**
   * Location of the source in an archive file in Cloud Storage.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1StorageSource {
    /**
     * Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
    /**
     * Optional. Option to specify the tool to fetch the source file for the build.
     */
    sourceFetcher?: string | null;
  }
  /**
   * Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1StorageSourceManifest {
    /**
     * Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Required. Cloud Storage object containing the source manifest. This object must be a JSON file.
     */
    object?: string | null;
  }
  /**
   * Start and end times for a build execution phase.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1TimeSpan {
    /**
     * End of time span.
     */
    endTime?: string | null;
    /**
     * Start of time span.
     */
    startTime?: string | null;
  }
  /**
   * A Go module artifact uploaded to Artifact Registry using the GoModule directive.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1UploadedGoModule {
    /**
     * Hash types and values of the Go Module Artifact.
     */
    fileHashes?: Schema$GoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * A Maven artifact uploaded using the MavenArtifact directive.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
    /**
     * Hash types and values of the Maven Artifact.
     */
    fileHashes?: Schema$GoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * An npm package uploaded to Artifact Registry using the NpmPackage directive.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1UploadedNpmPackage {
    /**
     * Hash types and values of the npm package.
     */
    fileHashes?: Schema$GoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded npm package.
     */
    uri?: string | null;
  }
  /**
   * Artifact uploaded using the PythonPackage directive.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1UploadedPythonPackage {
    /**
     * Hash types and values of the Python Artifact.
     */
    fileHashes?: Schema$GoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$GoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Volume {
    /**
     * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }
  /**
   * A non-fatal problem encountered during the execution of the build.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV1Warning {
    /**
     * The priority for this warning.
     */
    priority?: string | null;
    /**
     * Explanation of the warning generated.
     */
    text?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$GoogleIamV1Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
   * The request message for Operations.WaitOperation.
   */
  export interface Schema$GoogleLongrunningWaitOperationRequest {
    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: string | null;
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
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * This is proto2's version of MessageSet. DEPRECATED: DO NOT USE FOR NEW FIELDS. If you are using editions or proto2, please make your own extendable messages for your use case. If you are using proto3, please use `Any` instead. MessageSet was the implementation of extensions for proto1. When proto2 was introduced, extensions were implemented as a first-class feature. This schema for MessageSet was meant to be a "bridge" solution to migrate MessageSet-bearing messages from proto1 to proto2. This schema has been open-sourced only to facilitate the migration of Google products with MessageSet-bearing messages to open-source environments.
   */
  export interface Schema$Proto2BridgeMessageSet {}
  /**
   * Wire-format for a Status object
   */
  export interface Schema$UtilStatusProto {
    /**
     * copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6;
     */
    canonicalCode?: number | null;
    /**
     * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1;
     */
    code?: number | null;
    /**
     * Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3;
     */
    message?: string | null;
    /**
     * message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5;
     */
    messageSet?: Schema$Proto2BridgeMessageSet;
    /**
     * copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs
     */
    space?: string | null;
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
    builds: Resource$Projects$Locations$Builds;
    jobs: Resource$Projects$Locations$Jobs;
    operations: Resource$Projects$Locations$Operations;
    services: Resource$Projects$Locations$Services;
    workerPools: Resource$Projects$Locations$Workerpools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Locations$Builds(this.context);
      this.jobs = new Resource$Projects$Locations$Jobs(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.services = new Resource$Projects$Locations$Services(this.context);
      this.workerPools = new Resource$Projects$Locations$Workerpools(
        this.context
      );
    }

    /**
     * Export image for a given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.exportImage({
     *     // Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     *     name: 'projects/my-project/locations/my-location/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destinationRepo": "my_destinationRepo"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "operationId": "my_operationId"
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
    exportImage(
      params: Params$Resource$Projects$Locations$Exportimage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportImage(
      params?: Params$Resource$Projects$Locations$Exportimage,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportImageResponse>
    >;
    exportImage(
      params: Params$Resource$Projects$Locations$Exportimage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportImage(
      params: Params$Resource$Projects$Locations$Exportimage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
    ): void;
    exportImage(
      params: Params$Resource$Projects$Locations$Exportimage,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
    ): void;
    exportImage(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
    ): void;
    exportImage(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exportimage
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportImageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportImageResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exportimage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exportimage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:exportImage').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ExportImageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ExportImageResponse>(
          parameters
        );
      }
    }

    /**
     * Export image metadata for a given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.exportImageMetadata({
     *     // Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     *     name: 'projects/my-project/locations/my-location/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": "my_metadata"
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
    exportImageMetadata(
      params: Params$Resource$Projects$Locations$Exportimagemetadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportImageMetadata(
      params?: Params$Resource$Projects$Locations$Exportimagemetadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>;
    exportImageMetadata(
      params: Params$Resource$Projects$Locations$Exportimagemetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportImageMetadata(
      params: Params$Resource$Projects$Locations$Exportimagemetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportImageMetadata(
      params: Params$Resource$Projects$Locations$Exportimagemetadata,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportImageMetadata(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportImageMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exportimagemetadata
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exportimagemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exportimagemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:exportImageMetadata').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Metadata>(parameters);
      }
    }

    /**
     * Export generated customer metadata for a given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.exportMetadata({
     *     // Required. The name of the resource of which metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}` for Service `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution {project_id_or_number\} may contains domain-scoped project IDs
     *     name: 'projects/my-project/locations/my-location/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": "my_metadata"
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
    exportMetadata(
      params: Params$Resource$Projects$Locations$Exportmetadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportMetadata(
      params?: Params$Resource$Projects$Locations$Exportmetadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>;
    exportMetadata(
      params: Params$Resource$Projects$Locations$Exportmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportMetadata(
      params: Params$Resource$Projects$Locations$Exportmetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportMetadata(
      params: Params$Resource$Projects$Locations$Exportmetadata,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportMetadata(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exportmetadata
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exportmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exportmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:exportMetadata').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Metadata>(parameters);
      }
    }

    /**
     * Export generated customer metadata for a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.exportProjectMetadata({
     *     // Required. The name of the project of which metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}` for Project in a given location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "metadata": "my_metadata"
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
    exportProjectMetadata(
      params: Params$Resource$Projects$Locations$Exportprojectmetadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportProjectMetadata(
      params?: Params$Resource$Projects$Locations$Exportprojectmetadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>;
    exportProjectMetadata(
      params: Params$Resource$Projects$Locations$Exportprojectmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportProjectMetadata(
      params: Params$Resource$Projects$Locations$Exportprojectmetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportProjectMetadata(
      params: Params$Resource$Projects$Locations$Exportprojectmetadata,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportProjectMetadata(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
    ): void;
    exportProjectMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exportprojectmetadata
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Metadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Metadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exportprojectmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exportprojectmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:exportProjectMetadata').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Metadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Exportimage
    extends StandardParameters {
    /**
     * Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2ExportImageRequest;
  }
  export interface Params$Resource$Projects$Locations$Exportimagemetadata
    extends StandardParameters {
    /**
     * Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Exportmetadata
    extends StandardParameters {
    /**
     * Required. The name of the resource of which metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}` for Service `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution {project_id_or_number\} may contains domain-scoped project IDs
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Exportprojectmetadata
    extends StandardParameters {
    /**
     * Required. The name of the project of which metadata should be exported. Format: `projects/{project_id_or_number\}/locations/{location\}` for Project in a given location.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Submits a build in a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.builds.submit({
     *     // Required. The project and location to build in. Location must be a region, e.g., 'us-central1' or 'global' if the global builder is to be used. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "buildpackBuild": {},
     *       //   "dockerBuild": {},
     *       //   "imageUri": "my_imageUri",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "storageSource": {},
     *       //   "tags": [],
     *       //   "workerPool": "my_workerPool"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "baseImageUri": "my_baseImageUri",
     *   //   "baseImageWarning": "my_baseImageWarning",
     *   //   "buildOperation": {}
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
    submit(
      params: Params$Resource$Projects$Locations$Builds$Submit,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    submit(
      params?: Params$Resource$Projects$Locations$Builds$Submit,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2SubmitBuildResponse>
    >;
    submit(
      params: Params$Resource$Projects$Locations$Builds$Submit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    submit(
      params: Params$Resource$Projects$Locations$Builds$Submit,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
    ): void;
    submit(
      params: Params$Resource$Projects$Locations$Builds$Submit,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
    ): void;
    submit(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
    ): void;
    submit(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Builds$Submit
        | BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2SubmitBuildResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2SubmitBuildResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Builds$Submit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Builds$Submit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/builds:submit').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2SubmitBuildResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2SubmitBuildResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Builds$Submit
    extends StandardParameters {
    /**
     * Required. The project and location to build in. Location must be a region, e.g., 'us-central1' or 'global' if the global builder is to be used. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2SubmitBuildRequest;
  }

  export class Resource$Projects$Locations$Jobs {
    context: APIRequestContext;
    executions: Resource$Projects$Locations$Jobs$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Locations$Jobs$Executions(
        this.context
      );
    }

    /**
     * Creates a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.create({
     *     // Required. The unique identifier for the Job. The name of the job becomes {parent\}/jobs/{job_id\}.
     *     jobId: 'placeholder-value',
     *     // Required. The location and project in which this Job should be created. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "etag": "my_etag",
     *       //   "executionCount": 0,
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedExecution": {},
     *       //   "launchStage": "my_launchStage",
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "runExecutionToken": "my_runExecutionToken",
     *       //   "satisfiesPzs": false,
     *       //   "startExecutionToken": "my_startExecutionToken",
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Jobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.delete({
     *     // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Jobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets information about a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.get({
     *     // Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "binaryAuthorization": {},
     *   //   "client": "my_client",
     *   //   "clientVersion": "my_clientVersion",
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "etag": "my_etag",
     *   //   "executionCount": 0,
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "labels": {},
     *   //   "lastModifier": "my_lastModifier",
     *   //   "latestCreatedExecution": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "name": "my_name",
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "runExecutionToken": "my_runExecutionToken",
     *   //   "satisfiesPzs": false,
     *   //   "startExecutionToken": "my_startExecutionToken",
     *   //   "template": {},
     *   //   "terminalCondition": {},
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Job>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudRunV2Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Job>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Job>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Job>(parameters);
      }
    }

    /**
     * Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists Jobs. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.list({
     *     // Maximum number of Jobs to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListJobs. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The location and project to list resources on. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListJobsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListJobsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListJobsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.patch({
     *     // Optional. If set to true, and if the Job does not exist, it will create a new one. Caller must have both create and update permissions for this call if this is set to true.
     *     allowMissing: 'placeholder-value',
     *     // The fully qualified name of this Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "etag": "my_etag",
     *       //   "executionCount": 0,
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedExecution": {},
     *       //   "launchStage": "my_launchStage",
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "runExecutionToken": "my_runExecutionToken",
     *       //   "satisfiesPzs": false,
     *       //   "startExecutionToken": "my_startExecutionToken",
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Jobs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Jobs$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Triggers creation of a new Execution of this Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.run({
     *     // Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "overrides": {},
     *       //   "validateOnly": false
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
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Jobs$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Jobs$Run,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    run(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Run
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified Job. Overwrites any existing policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
    >;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The unique identifier for the Job. The name of the job becomes {parent\}/jobs/{job_id\}.
     */
    jobId?: string;
    /**
     * Required. The location and project in which this Job should be created. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     */
    parent?: string;
    /**
     * Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     */
    name?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$List
    extends StandardParameters {
    /**
     * Maximum number of Jobs to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListJobs. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The location and project to list resources on. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and if the Job does not exist, it will create a new one. Caller must have both create and update permissions for this call if this is set to true.
     */
    allowMissing?: boolean;
    /**
     * The fully qualified name of this Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}
     */
    name?: string;
    /**
     * Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Run
    extends StandardParameters {
    /**
     * Required. The full name of the Job. Format: projects/{project\}/locations/{location\}/jobs/{job\}, where {project\} can be project id or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2RunJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Jobs$Executions {
    context: APIRequestContext;
    tasks: Resource$Projects$Locations$Jobs$Executions$Tasks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tasks = new Resource$Projects$Locations$Jobs$Executions$Tasks(
        this.context
      );
    }

    /**
     * Cancels an Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.cancel({
     *     // Required. The name of the Execution to cancel. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "validateOnly": false
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
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Cancel,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Cancel
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Executions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes an Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.delete({
     *     // A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The name of the Execution to delete. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution',
     *     // Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Jobs$Executions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Executions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Read the status of an image export operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.exportStatus({
     *     // Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution',
     *     // Required. The operation id returned from ExportImage.
     *     operationId: '[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imageExportStatuses": [],
     *   //   "operationId": "my_operationId",
     *   //   "operationState": "my_operationState"
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
    exportStatus(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportStatus(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportStatusResponse>
    >;
    exportStatus(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportStatus(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportStatusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/{+operationId}:exportStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name', 'operationId'],
        pathParams: ['name', 'operationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRunV2ExportStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ExportStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Gets information about an Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.get({
     *     // Required. The full name of the Execution. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cancelledCount": 0,
     *   //   "completionTime": "my_completionTime",
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "etag": "my_etag",
     *   //   "expireTime": "my_expireTime",
     *   //   "failedCount": 0,
     *   //   "generation": "my_generation",
     *   //   "job": "my_job",
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "logUri": "my_logUri",
     *   //   "name": "my_name",
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "parallelism": 0,
     *   //   "reconciling": false,
     *   //   "retriedCount": 0,
     *   //   "runningCount": 0,
     *   //   "satisfiesPzs": false,
     *   //   "startTime": "my_startTime",
     *   //   "succeededCount": 0,
     *   //   "taskCount": 0,
     *   //   "template": {},
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Jobs$Executions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Execution>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Execution>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Execution>(parameters);
      }
    }

    /**
     * Lists Executions from a Job. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.list({
     *     // Maximum number of Executions to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListExecutions. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project\}/locations/{location\}/jobs/{job\}`, where `{project\}` can be project id or number.
     *     parent: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
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
      params: Params$Resource$Projects$Locations$Jobs$Executions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListExecutionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListExecutionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/executions').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListExecutionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Executions$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the Execution to cancel. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2CancelExecutionRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Executions$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The name of the Execution to delete. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     */
    name?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Executions$Exportstatus
    extends StandardParameters {
    /**
     * Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     */
    name?: string;
    /**
     * Required. The operation id returned from ExportImage.
     */
    operationId?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Executions$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Execution. Format: `projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}`, where `{project\}` can be project id or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Executions$List
    extends StandardParameters {
    /**
     * Maximum number of Executions to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListExecutions. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project\}/locations/{location\}/jobs/{job\}`, where `{project\}` can be project id or number.
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }

  export class Resource$Projects$Locations$Jobs$Executions$Tasks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets information about a Task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.tasks.get({
     *     // Required. The full name of the Task. Format: projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}/tasks/{task\}
     *     name: 'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution/tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "completionTime": "my_completionTime",
     *   //   "conditions": [],
     *   //   "containers": [],
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "encryptionKey": "my_encryptionKey",
     *   //   "etag": "my_etag",
     *   //   "execution": "my_execution",
     *   //   "executionEnvironment": "my_executionEnvironment",
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "gpuZonalRedundancyDisabled": false,
     *   //   "index": 0,
     *   //   "job": "my_job",
     *   //   "labels": {},
     *   //   "lastAttemptResult": {},
     *   //   "logUri": "my_logUri",
     *   //   "maxRetries": 0,
     *   //   "name": "my_name",
     *   //   "nodeSelector": {},
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "retried": 0,
     *   //   "satisfiesPzs": false,
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "startTime": "my_startTime",
     *   //   "timeout": "my_timeout",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "volumes": [],
     *   //   "vpcAccess": {}
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
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Task>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Task>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Task>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Task>(parameters);
      }
    }

    /**
     * Lists Tasks from an Execution of a Job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.jobs.executions.tasks.list({
     *     // Maximum number of Tasks to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListTasks. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}
     *     parent:
     *       'projects/my-project/locations/my-location/jobs/my-job/executions/my-execution',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tasks": []
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
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListTasksResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListTasksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListTasksResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/tasks').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListTasksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListTasksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Executions$Tasks$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Task. Format: projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}/tasks/{task\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Executions$Tasks$List
    extends StandardParameters {
    /**
     * Maximum number of Tasks to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListTasks. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project\}/locations/{location\}/jobs/{job\}/executions/{execution\}
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.operations.delete({
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
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

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.operations.get({
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
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

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.operations.list({
     *     // Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
     *     filter: 'placeholder-value',
     *     // Required. To query for all of the operations for a project.
     *     name: 'projects/my-project/locations/my-location',
     *     // The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
     *     pageSize: 'placeholder-value',
     *     // Token identifying which result to start with, which is returned by a previous list call.
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
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
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

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.operations.wait({
     *     // The name of the operation resource to wait on.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "timeout": "my_timeout"
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
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    wait(
      params?: Params$Resource$Projects$Locations$Operations$Wait,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    wait(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    wait(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Wait
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Wait;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Wait;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:wait').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
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
     * Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
     */
    filter?: string;
    /**
     * Required. To query for all of the operations for a project.
     */
    name?: string;
    /**
     * The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
     */
    pageSize?: number;
    /**
     * Token identifying which result to start with, which is returned by a previous list call.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Wait
    extends StandardParameters {
    /**
     * The name of the operation resource to wait on.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningWaitOperationRequest;
  }

  export class Resource$Projects$Locations$Services {
    context: APIRequestContext;
    revisions: Resource$Projects$Locations$Services$Revisions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.revisions = new Resource$Projects$Locations$Services$Revisions(
        this.context
      );
    }

    /**
     * Creates a new Service in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.create({
     *     // Required. The location and project in which this service should be created. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number. Only lowercase characters, digits, and hyphens.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent\}/services/{service_id\}.
     *     serviceId: 'placeholder-value',
     *     // Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "buildConfig": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "customAudiences": [],
     *       //   "defaultUriDisabled": false,
     *       //   "deleteTime": "my_deleteTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "iapEnabled": false,
     *       //   "ingress": "my_ingress",
     *       //   "invokerIamDisabled": false,
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedRevision": "my_latestCreatedRevision",
     *       //   "latestReadyRevision": "my_latestReadyRevision",
     *       //   "launchStage": "my_launchStage",
     *       //   "multiRegionSettings": {},
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "satisfiesPzs": false,
     *       //   "scaling": {},
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "threatDetectionEnabled": false,
     *       //   "traffic": [],
     *       //   "trafficStatuses": [],
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri",
     *       //   "urls": []
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
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Services$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/services').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.delete({
     *     // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The full name of the Service. Format: projects/{project\}/locations/{location\}/services/{service\}, where {project\} can be project id or number.
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *     // Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Services$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets information about a Service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.get({
     *     // Required. The full name of the Service. Format: projects/{project\}/locations/{location\}/services/{service\}, where {project\} can be project id or number.
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "binaryAuthorization": {},
     *   //   "buildConfig": {},
     *   //   "client": "my_client",
     *   //   "clientVersion": "my_clientVersion",
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "customAudiences": [],
     *   //   "defaultUriDisabled": false,
     *   //   "deleteTime": "my_deleteTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "iapEnabled": false,
     *   //   "ingress": "my_ingress",
     *   //   "invokerIamDisabled": false,
     *   //   "labels": {},
     *   //   "lastModifier": "my_lastModifier",
     *   //   "latestCreatedRevision": "my_latestCreatedRevision",
     *   //   "latestReadyRevision": "my_latestReadyRevision",
     *   //   "launchStage": "my_launchStage",
     *   //   "multiRegionSettings": {},
     *   //   "name": "my_name",
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "satisfiesPzs": false,
     *   //   "scaling": {},
     *   //   "template": {},
     *   //   "terminalCondition": {},
     *   //   "threatDetectionEnabled": false,
     *   //   "traffic": [],
     *   //   "trafficStatuses": [],
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri",
     *   //   "urls": []
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
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Services$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Service>>;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Service>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Service>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Service>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Service>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Service>(parameters);
      }
    }

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists Services. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.list({
     *     // Maximum number of Services to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListServices. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "services": []
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
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Services$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListServicesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListServicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/services').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListServicesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.patch({
     *     // Optional. If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist.
     *     allowMissing: 'placeholder-value',
     *     // The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project\}/locations/{location\}/services/{service_id\}
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *     // Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "buildConfig": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "customAudiences": [],
     *       //   "defaultUriDisabled": false,
     *       //   "deleteTime": "my_deleteTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "iapEnabled": false,
     *       //   "ingress": "my_ingress",
     *       //   "invokerIamDisabled": false,
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedRevision": "my_latestCreatedRevision",
     *       //   "latestReadyRevision": "my_latestReadyRevision",
     *       //   "launchStage": "my_launchStage",
     *       //   "multiRegionSettings": {},
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "satisfiesPzs": false,
     *       //   "scaling": {},
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "threatDetectionEnabled": false,
     *       //   "traffic": [],
     *       //   "trafficStatuses": [],
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri",
     *       //   "urls": []
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
      params: Params$Resource$Projects$Locations$Services$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Services$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    patch(
      params: Params$Resource$Projects$Locations$Services$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Services$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Services$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
    >;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Create
    extends StandardParameters {
    /**
     * Required. The location and project in which this service should be created. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number. Only lowercase characters, digits, and hyphens.
     */
    parent?: string;
    /**
     * Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent\}/services/{service_id\}.
     */
    serviceId?: string;
    /**
     * Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The full name of the Service. Format: projects/{project\}/locations/{location\}/services/{service\}, where {project\} can be project id or number.
     */
    name?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Service. Format: projects/{project\}/locations/{location\}/services/{service\}, where {project\} can be project id or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$List
    extends StandardParameters {
    /**
     * Maximum number of Services to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListServices. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project\}/locations/{location\}, where {project\} can be project id or number.
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist.
     */
    allowMissing?: boolean;
    /**
     * The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project\}/locations/{location\}/services/{service_id\}
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Services$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Services$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a Revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.revisions.delete({
     *     // A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The name of the Revision to delete. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     *     name: 'projects/my-project/locations/my-location/services/my-service/revisions/my-revision',
     *     // Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Services$Revisions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Services$Revisions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Services$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Revisions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Revisions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Revisions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Read the status of an image export operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.revisions.exportStatus({
     *     // Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     *     name: 'projects/my-project/locations/my-location/services/my-service/revisions/my-revision',
     *     // Required. The operation id returned from ExportImage.
     *     operationId: '[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imageExportStatuses": [],
     *   //   "operationId": "my_operationId",
     *   //   "operationState": "my_operationState"
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
    exportStatus(
      params: Params$Resource$Projects$Locations$Services$Revisions$Exportstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportStatus(
      params?: Params$Resource$Projects$Locations$Services$Revisions$Exportstatus,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportStatusResponse>
    >;
    exportStatus(
      params: Params$Resource$Projects$Locations$Services$Revisions$Exportstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportStatus(
      params: Params$Resource$Projects$Locations$Services$Revisions$Exportstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      params: Params$Resource$Projects$Locations$Services$Revisions$Exportstatus,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
    ): void;
    exportStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Revisions$Exportstatus
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ExportStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ExportStatusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Revisions$Exportstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Revisions$Exportstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/{+operationId}:exportStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name', 'operationId'],
        pathParams: ['name', 'operationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRunV2ExportStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ExportStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Gets information about a Revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.revisions.get({
     *     // Required. The full name of the Revision. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     *     name: 'projects/my-project/locations/my-location/services/my-service/revisions/my-revision',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "containers": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "encryptionKey": "my_encryptionKey",
     *   //   "encryptionKeyRevocationAction": "my_encryptionKeyRevocationAction",
     *   //   "encryptionKeyShutdownDuration": "my_encryptionKeyShutdownDuration",
     *   //   "etag": "my_etag",
     *   //   "executionEnvironment": "my_executionEnvironment",
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "gpuZonalRedundancyDisabled": false,
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "logUri": "my_logUri",
     *   //   "maxInstanceRequestConcurrency": 0,
     *   //   "name": "my_name",
     *   //   "nodeSelector": {},
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "satisfiesPzs": false,
     *   //   "scaling": {},
     *   //   "scalingStatus": {},
     *   //   "service": "my_service",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceMesh": {},
     *   //   "sessionAffinity": false,
     *   //   "timeout": "my_timeout",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "volumes": [],
     *   //   "vpcAccess": {}
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
      params: Params$Resource$Projects$Locations$Services$Revisions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Services$Revisions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Revision>>;
    get(
      params: Params$Resource$Projects$Locations$Services$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Revisions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Revisions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Revisions$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Revision>(parameters);
      }
    }

    /**
     * Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.services.revisions.list({
     *     // Maximum number of revisions to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListRevisions. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project\}/locations/{location\}/services/{service\}
     *     parent: 'projects/my-project/locations/my-location/services/my-service',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "revisions": []
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
      params: Params$Resource$Projects$Locations$Services$Revisions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Services$Revisions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListRevisionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Services$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$Revisions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Revisions$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListRevisionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/revisions').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListRevisionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Revisions$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The name of the Revision to delete. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     */
    name?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Revisions$Exportstatus
    extends StandardParameters {
    /**
     * Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number\}/locations/{location\}/services/{service\}/revisions/{revision\}` for Revision `projects/{project_id_or_number\}/locations/{location\}/jobs/{job\}/executions/{execution\}` for Execution
     */
    name?: string;
    /**
     * Required. The operation id returned from ExportImage.
     */
    operationId?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Revisions$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Revision. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Revisions$List
    extends StandardParameters {
    /**
     * Maximum number of revisions to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListRevisions. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project\}/locations/{location\}/services/{service\}
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }

  export class Resource$Projects$Locations$Workerpools {
    context: APIRequestContext;
    revisions: Resource$Projects$Locations$Workerpools$Revisions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.revisions = new Resource$Projects$Locations$Workerpools$Revisions(
        this.context
      );
    }

    /**
     * Creates a new WorkerPool in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.create({
     *     // Required. The location and project in which this worker pool should be created. Format: `projects/{project\}/locations/{location\}`, where `{project\}` can be project id or number. Only lowercase characters, digits, and hyphens.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *     validateOnly: 'placeholder-value',
     *     // Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent\}/workerPools/{worker_pool_id\}`.
     *     workerPoolId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "customAudiences": [],
     *       //   "deleteTime": "my_deleteTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "instanceSplitStatuses": [],
     *       //   "instanceSplits": [],
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedRevision": "my_latestCreatedRevision",
     *       //   "latestReadyRevision": "my_latestReadyRevision",
     *       //   "launchStage": "my_launchStage",
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "satisfiesPzs": false,
     *       //   "scaling": {},
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Workerpools$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workerpools$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/workerPools').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a WorkerPool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.delete({
     *     // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The full name of the WorkerPool. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`, where `{project\}` can be project id or number.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // Optional. Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Workerpools$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets information about a WorkerPool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.get({
     *     // Required. The full name of the WorkerPool. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`, where `{project\}` can be project id or number.
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "binaryAuthorization": {},
     *   //   "client": "my_client",
     *   //   "clientVersion": "my_clientVersion",
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "customAudiences": [],
     *   //   "deleteTime": "my_deleteTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "instanceSplitStatuses": [],
     *   //   "instanceSplits": [],
     *   //   "labels": {},
     *   //   "lastModifier": "my_lastModifier",
     *   //   "latestCreatedRevision": "my_latestCreatedRevision",
     *   //   "latestReadyRevision": "my_latestReadyRevision",
     *   //   "launchStage": "my_launchStage",
     *   //   "name": "my_name",
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "satisfiesPzs": false,
     *   //   "scaling": {},
     *   //   "template": {},
     *   //   "terminalCondition": {},
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Workerpools$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2WorkerPool>>;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2WorkerPool>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2WorkerPool>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2WorkerPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2WorkerPool>(parameters);
      }
    }

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Workerpools$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists WorkerPools. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.list({
     *     // Maximum number of WorkerPools to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListWorkerPools. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project\}/locations/{location\}`, where `{project\}` can be project id or number.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workerPools": []
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
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Workerpools$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/workerPools').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListWorkerPoolsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a WorkerPool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.patch({
     *     // Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist.
     *     allowMissing: 'placeholder-value',
     *     // Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again.
     *     forceNewRevision: 'placeholder-value',
     *     // The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_id\}`
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // Optional. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *     // Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "binaryAuthorization": {},
     *       //   "client": "my_client",
     *       //   "clientVersion": "my_clientVersion",
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "creator": "my_creator",
     *       //   "customAudiences": [],
     *       //   "deleteTime": "my_deleteTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "generation": "my_generation",
     *       //   "instanceSplitStatuses": [],
     *       //   "instanceSplits": [],
     *       //   "labels": {},
     *       //   "lastModifier": "my_lastModifier",
     *       //   "latestCreatedRevision": "my_latestCreatedRevision",
     *       //   "latestReadyRevision": "my_latestReadyRevision",
     *       //   "launchStage": "my_launchStage",
     *       //   "name": "my_name",
     *       //   "observedGeneration": "my_observedGeneration",
     *       //   "reconciling": false,
     *       //   "satisfiesPzs": false,
     *       //   "scaling": {},
     *       //   "template": {},
     *       //   "terminalCondition": {},
     *       //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Workerpools$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Workerpools$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workerpools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Workerpools$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Workerpools$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleIamV1Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workerpools$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Workerpools$Testiampermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
    >;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workerpools$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workerpools$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Workerpools$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleIamV1TestIamPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workerpools$Create
    extends StandardParameters {
    /**
     * Required. The location and project in which this worker pool should be created. Format: `projects/{project\}/locations/{location\}`, where `{project\}` can be project id or number. Only lowercase characters, digits, and hyphens.
     */
    parent?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;
    /**
     * Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent\}/workerPools/{worker_pool_id\}`.
     */
    workerPoolId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2WorkerPool;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The full name of the WorkerPool. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`, where `{project\}` can be project id or number.
     */
    name?: string;
    /**
     * Optional. Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Get
    extends StandardParameters {
    /**
     * Required. The full name of the WorkerPool. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`, where `{project\}` can be project id or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$List
    extends StandardParameters {
    /**
     * Maximum number of WorkerPools to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListWorkerPools. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project\}/locations/{location\}`, where `{project\}` can be project id or number.
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist.
     */
    allowMissing?: boolean;
    /**
     * Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again.
     */
    forceNewRevision?: boolean;
    /**
     * The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project\}/locations/{location\}/workerPools/{worker_id\}`
     */
    name?: string;
    /**
     * Optional. The list of fields to be updated.
     */
    updateMask?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRunV2WorkerPool;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Workerpools$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a Revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.revisions.delete({
     *     // A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     *     etag: 'placeholder-value',
     *     // Required. The name of the Revision to delete. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool/revisions/my-revision',
     *     // Indicates that the request should be validated without actually deleting any resources.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Workerpools$Revisions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Revisions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets information about a Revision.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.revisions.get({
     *     // Required. The full name of the Revision. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     *     name: 'projects/my-project/locations/my-location/workerPools/my-workerPool/revisions/my-revision',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "containers": [],
     *   //   "createTime": "my_createTime",
     *   //   "creator": "my_creator",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "encryptionKey": "my_encryptionKey",
     *   //   "encryptionKeyRevocationAction": "my_encryptionKeyRevocationAction",
     *   //   "encryptionKeyShutdownDuration": "my_encryptionKeyShutdownDuration",
     *   //   "etag": "my_etag",
     *   //   "executionEnvironment": "my_executionEnvironment",
     *   //   "expireTime": "my_expireTime",
     *   //   "generation": "my_generation",
     *   //   "gpuZonalRedundancyDisabled": false,
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "logUri": "my_logUri",
     *   //   "maxInstanceRequestConcurrency": 0,
     *   //   "name": "my_name",
     *   //   "nodeSelector": {},
     *   //   "observedGeneration": "my_observedGeneration",
     *   //   "reconciling": false,
     *   //   "satisfiesPzs": false,
     *   //   "scaling": {},
     *   //   "scalingStatus": {},
     *   //   "service": "my_service",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceMesh": {},
     *   //   "sessionAffinity": false,
     *   //   "timeout": "my_timeout",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "volumes": [],
     *   //   "vpcAccess": {}
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
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Workerpools$Revisions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Revision>>;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudRunV2Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Revisions$Get
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRunV2Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2Revision>(parameters);
      }
    }

    /**
     * Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/run.googleapis.com
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
     * const run = google.run('v2');
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
     *   const res = await run.projects.locations.workerPools.revisions.list({
     *     // Maximum number of revisions to return in this call.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous call to ListRevisions. All other parameters must match.
     *     pageToken: 'placeholder-value',
     *     // Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project\}/locations/{location\}/services/{service\}
     *     parent:
     *       'projects/my-project/locations/my-location/workerPools/my-workerPool',
     *     // If true, returns deleted (but unexpired) resources along with active ones.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "revisions": []
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
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Workerpools$Revisions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListRevisionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workerpools$Revisions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workerpools$Revisions$List
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRunV2ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRunV2ListRevisionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workerpools$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workerpools$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/revisions').replace(
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
        createAPIRequest<Schema$GoogleCloudRunV2ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRunV2ListRevisionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workerpools$Revisions$Delete
    extends StandardParameters {
    /**
     * A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Required. The name of the Revision to delete. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     */
    name?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Revisions$Get
    extends StandardParameters {
    /**
     * Required. The full name of the Revision. Format: projects/{project\}/locations/{location\}/services/{service\}/revisions/{revision\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workerpools$Revisions$List
    extends StandardParameters {
    /**
     * Maximum number of revisions to return in this call.
     */
    pageSize?: number;
    /**
     * A page token received from a previous call to ListRevisions. All other parameters must match.
     */
    pageToken?: string;
    /**
     * Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project\}/locations/{location\}/services/{service\}
     */
    parent?: string;
    /**
     * If true, returns deleted (but unexpired) resources along with active ones.
     */
    showDeleted?: boolean;
  }
}
