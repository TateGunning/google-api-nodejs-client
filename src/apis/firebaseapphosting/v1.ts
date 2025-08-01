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

export namespace firebaseapphosting_v1 {
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
   * Firebase App Hosting API
   *
   * Firebase App Hosting streamlines the development and deployment of dynamic Next.js and Angular applications, offering built-in framework support, GitHub integration, and integration with other Firebase products. You can use this API to intervene in the Firebase App Hosting build process and add custom functionality not supported in our default Console &amp; CLI flows, including triggering builds from external CI/CD workflows or deploying from pre-built container images.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebaseapphosting = google.firebaseapphosting('v1');
   * ```
   */
  export class Firebaseapphosting {
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
   * A backend is the primary resource of App Hosting.
   */
  export interface Schema$Backend {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend.
     */
    appId?: string | null;
    /**
     * Optional. If specified, the connection to an external source repository to watch for event-driven updates to the backend.
     */
    codebase?: Schema$Codebase;
    /**
     * Output only. Time at which the backend was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the backend was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Human-readable name. 63 character limit.
     */
    displayName?: string | null;
    /**
     * Optional. The environment name of the backend, used to load environment variables from environment specific configuration.
     */
    environment?: string | null;
    /**
     * Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.
     */
    etag?: string | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. A list of the resources managed by this backend.
     */
    managedResources?: Schema$ManagedResource[];
    /**
     * Optional. Deprecated: Use `environment` instead.
     */
    mode?: string | null;
    /**
     * Identifier. The resource name of the backend. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    name?: string | null;
    /**
     * Output only. A field that, if true, indicates that the system is working to make adjustments to the backend during a LRO.
     */
    reconciling?: boolean | null;
    /**
     * Required. The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions.
     */
    serviceAccount?: string | null;
    /**
     * Required. Immutable. Specifies how App Hosting will serve the content for this backend. It will either be contained to a single region (REGIONAL_STRICT) or allowed to use App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS).
     */
    servingLocality?: string | null;
    /**
     * Output only. System-assigned, unique identifier.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the backend was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. The primary URI to communicate with the backend.
     */
    uri?: string | null;
  }
  /**
   * A single build for a backend, at a specific point codebase reference tag and point in time. Encapsulates several resources, including an Artifact Registry container image, a Cloud Build invocation that built the image, and the Cloud Run revision that uses that image.
   */
  export interface Schema$Build {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The location of the [Cloud Build logs](https://cloud.google.com/build/docs/view-build-results) for the build process.
     */
    buildLogsUri?: string | null;
    /**
     * Optional. Additional configuration of the service.
     */
    config?: Schema$Config;
    /**
     * Output only. Time at which the build was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the build was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Human-readable name. 63 character limit.
     */
    displayName?: string | null;
    /**
     * Output only. The environment name of the backend when this build was created.
     */
    environment?: string | null;
    /**
     * Output only. A list of all errors that occurred during an App Hosting build.
     */
    errors?: Schema$Error[];
    /**
     * Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.
     */
    etag?: string | null;
    /**
     * Output only. The Artifact Registry [container image](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages) URI, used by the Cloud Run [`revision`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services.revisions) for this build.
     */
    image?: string | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the build. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/builds/{buildId\}`.
     */
    name?: string | null;
    /**
     * Output only. A field that, if true, indicates that the build has an ongoing LRO.
     */
    reconciling?: boolean | null;
    /**
     * Required. Immutable. The source for the build.
     */
    source?: Schema$BuildSource;
    /**
     * Output only. The state of the build.
     */
    state?: string | null;
    /**
     * Output only. System-assigned, unique identifier.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the build was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The source for the build.
   */
  export interface Schema$BuildSource {
    /**
     * A codebase source.
     */
    codebase?: Schema$CodebaseSource;
    /**
     * An Artifact Registry container image source.
     */
    container?: Schema$ContainerSource;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The connection to an external source repository to watch for event-driven updates to the backend.
   */
  export interface Schema$Codebase {
    /**
     * Required. The resource name for the Developer Connect [`gitRepositoryLink`](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format: `projects/{project\}/locations/{location\}/connections/{connection\}/gitRepositoryLinks/{repositoryLink\}` The connection for the `gitRepositoryLink` must made be using the Firebase App Hosting GitHub App via the Firebase Console.
     */
    repository?: string | null;
    /**
     * Optional. If `repository` is provided, the directory relative to the root of the repository to use as the root for the deployed web app.
     */
    rootDirectory?: string | null;
  }
  /**
   * A codebase source, representing the state of the codebase that the build will be created at.
   */
  export interface Schema$CodebaseSource {
    /**
     * Output only. The author contained in the metadata of a version control change.
     */
    author?: Schema$UserMetadata;
    /**
     * The branch in the codebase to build from, using the latest commit.
     */
    branch?: string | null;
    /**
     * The commit in the codebase to build from.
     */
    commit?: string | null;
    /**
     * Output only. The message of a codebase change.
     */
    commitMessage?: string | null;
    /**
     * Output only. The time the change was made.
     */
    commitTime?: string | null;
    /**
     * Output only. The human-friendly name to use for this Codebase when displaying a build. We use the first eight characters of the SHA-1 hash for GitHub.com.
     */
    displayName?: string | null;
    /**
     * Output only. The full SHA-1 hash of a Git commit, if available.
     */
    hash?: string | null;
    /**
     * Output only. A URI linking to the codebase on an hosting provider's website. May not be valid if the commit has been rebased or force-pushed out of existence in the linked repository.
     */
    uri?: string | null;
  }
  /**
   * Additional configuration of the backend for this build.
   */
  export interface Schema$Config {
    /**
     * Optional. Environment variables for this build.
     */
    env?: Schema$EnvironmentVariable[];
    /**
     * Optional. Additional configuration of the Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service).
     */
    runConfig?: Schema$RunConfig;
  }
  /**
   * The URI of an Artifact Registry [container image](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages) to use as the build source.
   */
  export interface Schema$ContainerSource {
    /**
     * Required. A URI representing a container for the backend to use.
     */
    image?: string | null;
  }
  /**
   * Additional metadata for operations on custom domains.
   */
  export interface Schema$CustomDomainOperationMetadata {
    /**
     * Output only. The custom domain's `CertState`, which must be `CERT_ACTIVE` for the create operations to complete.
     */
    certState?: string | null;
    /**
     * Output only. The custom domain's `HostState`, which must be `HOST_ACTIVE` for Create operations of the domain name this `CustomDomain` refers toto complete.
     */
    hostState?: string | null;
    /**
     * Output only. A list of issues that are currently preventing the operation from completing. These are generally DNS-related issues encountered when querying a domain's records or attempting to mint an SSL certificate.
     */
    issues?: Schema$Status[];
    /**
     * Output only. A list of steps that the user must complete to migrate their domain to App Hosting without downtime.
     */
    liveMigrationSteps?: Schema$LiveMigrationStep[];
    /**
     * Output only. The custom domain's `OwnershipState`, which must be `OWNERSHIP_ACTIVE` for the create operations to complete.
     */
    ownershipState?: string | null;
    /**
     * Output only. A set of DNS record updates to perform, to allow App Hosting to serve secure content on the domain.
     */
    quickSetupUpdates?: Schema$DnsUpdates[];
  }
  /**
   * The status of a custom domain's linkage to a backend.
   */
  export interface Schema$CustomDomainStatus {
    /**
     * Output only. Tracks SSL certificate status for the domain.
     */
    certState?: string | null;
    /**
     * Output only. Tracks whether a custom domain is detected as appropriately directing traffic to App Hosting.
     */
    hostState?: string | null;
    /**
     * Output only. A list of issues with domain configuration. Allows users to self-correct problems with DNS records.
     */
    issues?: Schema$Status[];
    /**
     * Output only. Tracks whether the backend is permitted to serve content on the domain, based off the domain's DNS records.
     */
    ownershipState?: string | null;
    /**
     * Output only. Lists the records that must added or removed to a custom domain's DNS in order to finish setup and start serving content. Field is present during onboarding. Also present after onboarding if one or more of the above states is not *_ACTIVE, indicating the domain's DNS records are in a bad state.
     */
    requiredDnsUpdates?: Schema$DnsUpdates[];
  }
  /**
   * A representation of a DNS records for a domain. DNS records are resource records that define how systems and services should behave when handling requests for a domain. For example, when you add `A` records to your domain's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain (such as your App Hosting files).
   */
  export interface Schema$DnsRecord {
    /**
     * Output only. The domain the record pertains to, e.g. `foo.bar.com.`.
     */
    domainName?: string | null;
    /**
     * Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain. App Hosting uses TXT records to determine which Firebase projects have permission to act on the domain's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`.
     */
    rdata?: string | null;
    /**
     * Output only. An enum that indicates which state(s) this DNS record applies to. Populated for all records with an `ADD` or `REMOVE` required action.
     */
    relevantState?: string[] | null;
    /**
     * Output only. An enum that indicates the a required action for this record. Populated when the record is part of a required change in a `DnsUpdates` `discovered` or `desired` record set.
     */
    requiredAction?: string | null;
    /**
     * Output only. The record's type, which determines what data the record contains.
     */
    type?: string | null;
  }
  /**
   * A set of DNS records relevant to the setup and maintenance of a custom domain in App Hosting.
   */
  export interface Schema$DnsRecordSet {
    /**
     * Output only. An error App Hosting services encountered when querying your domain's DNS records. Note: App Hosting ignores `NXDOMAIN` errors, as those generally just mean that a domain name hasn't been set up yet.
     */
    checkError?: Schema$Status;
    /**
     * Output only. The domain name the record set pertains to.
     */
    domainName?: string | null;
    /**
     * Output only. Records on the domain.
     */
    records?: Schema$DnsRecord[];
  }
  /**
   * A set of DNS record updates that you should make to allow App Hosting to serve secure content in response to requests against your domain. These updates present the current state of your domain's and related subdomains' DNS records when App Hosting last queried them, and the desired set of records that App Hosting needs to see before your custom domain can be fully active.
   */
  export interface Schema$DnsUpdates {
    /**
     * Output only. The last time App Hosting checked your custom domain's DNS records.
     */
    checkTime?: string | null;
    /**
     * Output only. The set of DNS records App Hosting needs in order to be able to serve secure content on the domain.
     */
    desired?: Schema$DnsRecordSet[];
    /**
     * Output only. The set of DNS records App Hosting discovered when inspecting a domain.
     */
    discovered?: Schema$DnsRecordSet[];
    /**
     * Output only. The domain name the DNS updates pertain to.
     */
    domainName?: string | null;
  }
  /**
   * A domain name that is associated with a backend.
   */
  export interface Schema$Domain {
    /**
     * Optional. Annotations as key value pairs.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the domain was created.
     */
    createTime?: string | null;
    /**
     * Output only. Represents the state and configuration of a `CUSTOM` type domain. It is only present on Domains of that type.
     */
    customDomainStatus?: Schema$CustomDomainStatus;
    /**
     * Output only. Time at which the domain was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Whether the domain is disabled. Defaults to false.
     */
    disabled?: boolean | null;
    /**
     * Optional. Mutable human-readable name for the domain. 63 character limit. e.g. `prod domain`.
     */
    displayName?: string | null;
    /**
     * Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.
     */
    etag?: string | null;
    /**
     * Optional. Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com`
     */
    name?: string | null;
    /**
     * Output only. A field that, if true, indicates that the build has an ongoing LRO.
     */
    reconciling?: boolean | null;
    /**
     * Optional. The serving behavior of the domain. If specified, the domain will serve content other than its backend's live content.
     */
    serve?: Schema$ServingBehavior;
    /**
     * Output only. The type of the domain.
     */
    type?: string | null;
    /**
     * Output only. System-assigned, unique identifier.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the domain was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents the metadata of a long-running operation on domains.
   */
  export interface Schema$DomainOperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. Additional metadata for operations on custom domains.
     */
    customDomainOperationMetadata?: Schema$CustomDomainOperationMetadata;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Environment variables for this build.
   */
  export interface Schema$EnvironmentVariable {
    /**
     * Optional. Where this variable should be made available. If left unspecified, will be available in both BUILD and BACKEND.
     */
    availability?: string[] | null;
    /**
     * A fully qualified secret version. The value of the secret will be accessed once while building the application and once per cold start of the container at runtime. The service account used by Cloud Build and by Cloud Run must each have the `secretmanager.versions.access` permission on the secret.
     */
    secret?: string | null;
    /**
     * A plaintext value. This value is encrypted at rest, but all project readers can view the value when reading your backend configuration.
     */
    value?: string | null;
    /**
     * Required. The name of the environment variable. - Must be a valid environment variable name (e.g. A-Z or underscores). - May not start with "FIREBASE" or "GOOGLE". - May not be a reserved environment variable for KNative/Cloud Run
     */
    variable?: string | null;
  }
  /**
   * The container for the rpc status and source for any errors found during the build process.
   */
  export interface Schema$Error {
    /**
     * Output only. Resource link
     */
    cloudResource?: string | null;
    /**
     * Output only. A status and (human readable) error message for the build, if in a `FAILED` state.
     */
    error?: Schema$Status;
    /**
     * Output only. The source of the error for the build, if in a `FAILED` state.
     */
    errorSource?: string | null;
  }
  /**
   * Message for response to list backends
   */
  export interface Schema$ListBackendsResponse {
    /**
     * The list of backends
     */
    backends?: Schema$Backend[];
    /**
     * A token identifying the next page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to list builds.
   */
  export interface Schema$ListBuildsResponse {
    /**
     * The list of builds.
     */
    builds?: Schema$Build[];
    /**
     * A token identifying the next page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to list domains.
   */
  export interface Schema$ListDomainsResponse {
    /**
     * Output only. The list of domains.
     */
    domains?: Schema$Domain[];
    /**
     * Output only. A token identifying the next page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Output only. Locations that could not be reached.
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
   * Message for response to list rollouts.
   */
  export interface Schema$ListRolloutsResponse {
    /**
     * A token identifying the next page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of rollouts.
     */
    rollouts?: Schema$Rollout[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A set of updates including ACME challenges and DNS records that allow App Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to App Hosting servers. Use these updates to facilitate zero downtime migrations to App Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records.
   */
  export interface Schema$LiveMigrationStep {
    /**
     * Output only. DNS updates to facilitate your domain's zero-downtime migration to App Hosting.
     */
    dnsUpdates?: Schema$DnsUpdates[];
    /**
     * Output only. Issues that prevent the current step from completing.
     */
    issues?: Schema$Status[];
    /**
     * Output only. One or more states from the `CustomDomainStatus` of the migrating domain that this step is attempting to make ACTIVE. For example, if the step is attempting to mint an SSL certificate, this field will include `CERT_STATE`.
     */
    relevantDomainStates?: string[] | null;
    /**
     * Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it.
     */
    stepState?: string | null;
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
   * An external resource managed by App Hosting on the project.
   */
  export interface Schema$ManagedResource {
    /**
     * A Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service), managed by App Hosting.
     */
    runService?: Schema$RunService;
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
   * Represents the metadata of a long-running operation.
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
   * Specifies redirect behavior for a domain.
   */
  export interface Schema$Redirect {
    /**
     * Optional. The status code to use in a redirect response. Must be a valid HTTP 3XX status code. Defaults to 302 if not present.
     */
    status?: string | null;
    /**
     * Required. The URI of the redirect's intended destination. This URI will be prepended to the original request path. URI without a scheme are assumed to be HTTPS.
     */
    uri?: string | null;
  }
  /**
   * A single rollout of a build for a backend.
   */
  export interface Schema$Rollout {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Immutable. The name of a build that already exists. It doesn't have to be built; a rollout will wait for a build to be ready before updating traffic.
     */
    build?: string | null;
    /**
     * Output only. Time at which the rollout was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the rollout was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Human-readable name. 63 character limit.
     */
    displayName?: string | null;
    /**
     * Output only. A status and (human readable) error message for the rollout, if in a `FAILED` state.
     */
    error?: Schema$Status;
    /**
     * Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.
     */
    etag?: string | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the rollout. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/rollouts/{rolloutId\}`.
     */
    name?: string | null;
    /**
     * Output only. A field that, if true, indicates that the Rollout currently has an LRO.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The state of the rollout.
     */
    state?: string | null;
    /**
     * Output only. System-assigned, unique identifier.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the rollout was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The policy for how automatic builds and rollouts are triggered and rolled out.
   */
  export interface Schema$RolloutPolicy {
    /**
     * If set, specifies a branch that triggers a new build to be started with this policy. Otherwise, no automatic rollouts will happen.
     */
    codebaseBranch?: string | null;
    /**
     * Optional. A flag that, if true, prevents automatic rollouts from being created via this RolloutPolicy.
     */
    disabled?: boolean | null;
    /**
     * Output only. If `disabled` is set, the time at which the automatic rollouts were disabled.
     */
    disabledTime?: string | null;
  }
  /**
   * Additional configuration to apply to the Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service).
   */
  export interface Schema$RunConfig {
    /**
     * Optional. Maximum number of requests that each Cloud Run instance can receive. By default, each instance can receive Cloud Run's default of up to 80 requests at the same time. Concurrency can be set to any integer value up to 1000.
     */
    concurrency?: number | null;
    /**
     * Optional. Number of CPUs used for each serving instance. By default, cpu defaults to the Cloud Run's default of 1.0. CPU can be set to value 1, 2, 4, 6, or 8 CPUs, and for less than 1 CPU, a value from 0.08 to less than 1.00, in increments of 0.01. If you set a value of less than 1 CPU, you must set concurrency to 1, and CPU will only be allocated during request processing. Increasing CPUs limit may require increase in memory limits: - 4 CPUs: at least 2 GiB - 6 CPUs: at least 4 GiB - 8 CPUs: at least 4 GiB
     */
    cpu?: number | null;
    /**
     * Optional. Number of Cloud Run instances to maintain at maximum for each revision. By default, each Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service) scales out to Cloud Run's default of a maximum of 100 instances. The maximum max_instances limit is based on your quota. See https://cloud.google.com/run/docs/configuring/max-instances#limits.
     */
    maxInstances?: number | null;
    /**
     * Optional. Amount of memory allocated for each serving instance in MiB. By default, memory defaults to the Cloud Run's default where each instance is allocated 512 MiB of memory. Memory can be set to any integer value between 128 to 32768. Increasing memory limit may require increase in CPUs limits: - Over 4 GiB: at least 2 CPUs - Over 8 GiB: at least 4 CPUs - Over 16 GiB: at least 6 CPUs - Over 24 GiB: at least 8 CPUs
     */
    memoryMib?: number | null;
    /**
     * Optional. Number of Cloud Run instances to maintain at minimum for each Cloud Run Service. By default, there are no minimum. Even if the service splits traffic across multiple revisions, the total number of instances for a service will be capped at this value.
     */
    minInstances?: number | null;
  }
  /**
   * A managed Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service).
   */
  export interface Schema$RunService {
    /**
     * Optional. The name of the Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service), in the format: `projects/{project\}/locations/{location\}/services/{serviceId\}`
     */
    service?: string | null;
  }
  /**
   * Indicates whether App Hosting will serve content on the domain.
   */
  export interface Schema$ServingBehavior {
    /**
     * Optional. Redirect behavior for a domain, if provided.
     */
    redirect?: Schema$Redirect;
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
   * Controls traffic configuration for the backend.
   */
  export interface Schema$Traffic {
    /**
     * Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the backend was created.
     */
    createTime?: string | null;
    /**
     * Output only. Current state of traffic allocation for the backend. When setting `target`, this field may differ for some time until the desired state is reached.
     */
    current?: Schema$TrafficSet;
    /**
     * Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource.
     */
    etag?: string | null;
    /**
     * Optional. Unstructured key value map that can be used to organize and categorize objects.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the backend's traffic. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/traffic`.
     */
    name?: string | null;
    /**
     * Output only. A field that, if true, indicates that the system is working to make the backend's `current` match the requested `target` list.
     */
    reconciling?: boolean | null;
    /**
     * A rollout policy specifies how new builds and automatic deployments are created.
     */
    rolloutPolicy?: Schema$RolloutPolicy;
    /**
     * Set to manually control the desired traffic for the backend. This will cause `current` to eventually match this value. The percentages must add up to 100%.
     */
    target?: Schema$TrafficSet;
    /**
     * Output only. System-assigned, unique identifier.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the backend was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A list of traffic splits that together represent where traffic is being routed.
   */
  export interface Schema$TrafficSet {
    /**
     * Required. The list of traffic splits.
     */
    splits?: Schema$TrafficSplit[];
  }
  /**
   * The traffic allocation for the backend.
   */
  export interface Schema$TrafficSplit {
    /**
     * Required. The build that traffic is being routed to.
     */
    build?: string | null;
    /**
     * Required. The percentage of traffic to send to the build. Currently must be 100% or 0%.
     */
    percent?: number | null;
  }
  /**
   * Version control metadata for a user associated with a resolved codebase. Currently assumes a Git user.
   */
  export interface Schema$UserMetadata {
    /**
     * Output only. The 'name' field in a Git user's git.config. Required by Git.
     */
    displayName?: string | null;
    /**
     * Output only. The 'email' field in a Git user's git.config, if available.
     */
    email?: string | null;
    /**
     * Output only. The URI of an image file associated with the user's account in an external source control provider, if available.
     */
    imageUri?: string | null;
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
    backends: Resource$Projects$Locations$Backends;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.backends = new Resource$Projects$Locations$Backends(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.get({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.list({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
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

  export class Resource$Projects$Locations$Backends {
    context: APIRequestContext;
    builds: Resource$Projects$Locations$Backends$Builds;
    domains: Resource$Projects$Locations$Backends$Domains;
    rollouts: Resource$Projects$Locations$Backends$Rollouts;
    traffic: Resource$Projects$Locations$Backends$Traffic;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.builds = new Resource$Projects$Locations$Backends$Builds(
        this.context
      );
      this.domains = new Resource$Projects$Locations$Backends$Domains(
        this.context
      );
      this.rollouts = new Resource$Projects$Locations$Backends$Rollouts(
        this.context
      );
      this.traffic = new Resource$Projects$Locations$Backends$Traffic(
        this.context
      );
    }

    /**
     * Creates a new backend in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.create({
     *     // Required. Id of the backend. Also used as the service ID for Cloud Run, and as part of the default domain name.
     *     backendId: 'placeholder-value',
     *     // Required. A parent name of the form `projects/{project\}/locations/{locationId\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "appId": "my_appId",
     *       //   "codebase": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "environment": "my_environment",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "managedResources": [],
     *       //   "mode": "my_mode",
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "servingLocality": "my_servingLocality",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Backends$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Backends$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Backends$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Create
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
        {}) as Params$Resource$Projects$Locations$Backends$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/backends').replace(
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
     * Deletes a single backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.delete({
     *     // Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     *     etag: 'placeholder-value',
     *     // Optional. If set to true, any resources for this backend will also be deleted. Otherwise, any children resources will block deletion.
     *     force: 'placeholder-value',
     *     // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
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
      params: Params$Resource$Projects$Locations$Backends$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Backends$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Delete
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
        {}) as Params$Resource$Projects$Locations$Backends$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets information about a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.get({
     *     // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "appId": "my_appId",
     *   //   "codebase": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "environment": "my_environment",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "managedResources": [],
     *   //   "mode": "my_mode",
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "servingLocality": "my_servingLocality",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Backends$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Backends$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Backend>>;
    get(
      params: Params$Resource$Projects$Locations$Backends$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Backend>,
      callback: BodyResponseCallback<Schema$Backend>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Get,
      callback: BodyResponseCallback<Schema$Backend>
    ): void;
    get(callback: BodyResponseCallback<Schema$Backend>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Get
        | BodyResponseCallback<Schema$Backend>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Backend>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Backend>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Backend>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Backend>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Backend>(parameters);
      }
    }

    /**
     * Lists backends in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.list({
     *     // Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. A parent name of the form `projects/{project\}/locations/{locationId\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backends": [],
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
      params: Params$Resource$Projects$Locations$Backends$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Backends$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListBackendsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Backends$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBackendsResponse>,
      callback: BodyResponseCallback<Schema$ListBackendsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$List,
      callback: BodyResponseCallback<Schema$ListBackendsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBackendsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$List
        | BodyResponseCallback<Schema$ListBackendsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBackendsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBackendsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListBackendsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/backends').replace(
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
        createAPIRequest<Schema$ListBackendsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBackendsResponse>(parameters);
      }
    }

    /**
     * Updates the information for a single backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.patch({
     *     // Optional. If set to true, and the backend is not found, a new backend will be created.
     *     allowMissing: 'placeholder-value',
     *     // Identifier. The resource name of the backend. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the backend resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "appId": "my_appId",
     *       //   "codebase": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "displayName": "my_displayName",
     *       //   "environment": "my_environment",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "managedResources": [],
     *       //   "mode": "my_mode",
     *       //   "name": "my_name",
     *       //   "reconciling": false,
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "servingLocality": "my_servingLocality",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime",
     *       //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Backends$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Backends$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Patch
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
        {}) as Params$Resource$Projects$Locations$Backends$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Backends$Create
    extends StandardParameters {
    /**
     * Required. Id of the backend. Also used as the service ID for Cloud Run, and as part of the default domain name.
     */
    backendId?: string;
    /**
     * Required. A parent name of the form `projects/{project\}/locations/{locationId\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Backend;
  }
  export interface Params$Resource$Projects$Locations$Backends$Delete
    extends StandardParameters {
    /**
     * Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     */
    etag?: string;
    /**
     * Optional. If set to true, any resources for this backend will also be deleted. Otherwise, any children resources will block deletion.
     */
    force?: boolean;
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Backends$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backends$List
    extends StandardParameters {
    /**
     * Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. A parent name of the form `projects/{project\}/locations/{locationId\}`.
     */
    parent?: string;
    /**
     * Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Backends$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and the backend is not found, a new backend will be created.
     */
    allowMissing?: boolean;
    /**
     * Identifier. The resource name of the backend. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the backend resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Backend;
  }

  export class Resource$Projects$Locations$Backends$Builds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new build for a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.builds.create({
     *       // Required. Desired ID of the build being created.
     *       buildId: 'placeholder-value',
     *       // Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *       parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "buildLogsUri": "my_buildLogsUri",
     *         //   "config": {},
     *         //   "createTime": "my_createTime",
     *         //   "deleteTime": "my_deleteTime",
     *         //   "displayName": "my_displayName",
     *         //   "environment": "my_environment",
     *         //   "errors": [],
     *         //   "etag": "my_etag",
     *         //   "image": "my_image",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "reconciling": false,
     *         //   "source": {},
     *         //   "state": "my_state",
     *         //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Backends$Builds$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Backends$Builds$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Backends$Builds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Builds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Builds$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Builds$Create
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
        {}) as Params$Resource$Projects$Locations$Backends$Builds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Builds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
     * Deletes a single build.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.builds.delete({
     *       // Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     *       etag: 'placeholder-value',
     *       // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/builds/{buildId\}`.
     *       name: 'projects/my-project/locations/my-location/backends/my-backend/builds/my-build',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     *       validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Backends$Builds$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Backends$Builds$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Builds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Builds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Builds$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Builds$Delete
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
        {}) as Params$Resource$Projects$Locations$Backends$Builds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Builds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets information about a build.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.builds.get({
     *     // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/builds/{buildId\}`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend/builds/my-build',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "buildLogsUri": "my_buildLogsUri",
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "environment": "my_environment",
     *   //   "errors": [],
     *   //   "etag": "my_etag",
     *   //   "image": "my_image",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "source": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Backends$Builds$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Backends$Builds$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Build>>;
    get(
      params: Params$Resource$Projects$Locations$Backends$Builds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Builds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Build>,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Builds$Get,
      callback: BodyResponseCallback<Schema$Build>
    ): void;
    get(callback: BodyResponseCallback<Schema$Build>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Builds$Get
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Build>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Build>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Builds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Builds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Build>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Build>(parameters);
      }
    }

    /**
     * Lists builds in a given project, location, and backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.builds.list({
     *     // Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent backend in the form `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *     parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *     // Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "builds": [],
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
      params: Params$Resource$Projects$Locations$Backends$Builds$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Backends$Builds$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListBuildsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Backends$Builds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Builds$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListBuildsResponse>,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Builds$List,
      callback: BodyResponseCallback<Schema$ListBuildsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListBuildsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Builds$List
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBuildsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListBuildsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Builds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Builds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/builds').replace(
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
        createAPIRequest<Schema$ListBuildsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBuildsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Backends$Builds$Create
    extends StandardParameters {
    /**
     * Required. Desired ID of the build being created.
     */
    buildId?: string;
    /**
     * Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Build;
  }
  export interface Params$Resource$Projects$Locations$Backends$Builds$Delete
    extends StandardParameters {
    /**
     * Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     */
    etag?: string;
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/builds/{buildId\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Backends$Builds$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/builds/{buildId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backends$Builds$List
    extends StandardParameters {
    /**
     * Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent backend in the form `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     */
    showDeleted?: boolean;
  }

  export class Resource$Projects$Locations$Backends$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Links a new domain to a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.domains.create({
     *       // Required. Id of the domain to create. Must be a valid domain name.
     *       domainId: 'placeholder-value',
     *       // Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *       parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "customDomainStatus": {},
     *         //   "deleteTime": "my_deleteTime",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "reconciling": false,
     *         //   "serve": {},
     *         //   "type": "my_type",
     *         //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Backends$Domains$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Backends$Domains$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Backends$Domains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Domains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Domains$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Domains$Create
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
        {}) as Params$Resource$Projects$Locations$Backends$Domains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Domains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/domains').replace(
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
     * Deletes a single domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.domains.delete({
     *       // Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     *       etag: 'placeholder-value',
     *       // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/domains/{domainId\}`.
     *       name: 'projects/my-project/locations/my-location/backends/my-backend/domains/my-domain',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     *       validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Backends$Domains$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Backends$Domains$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backends$Domains$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Domains$Delete
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
        {}) as Params$Resource$Projects$Locations$Backends$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets information about a domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.domains.get({
     *     // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/domains/{domainId\}`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend/domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "customDomainStatus": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "serve": {},
     *   //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Backends$Domains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Backends$Domains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    get(
      params: Params$Resource$Projects$Locations$Backends$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Lists domains of a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.domains.list(
     *     {
     *       // Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *       filter: 'placeholder-value',
     *       // Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of results to return. If not set, the service selects a default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *       parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *       // Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     *       showDeleted: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Projects$Locations$Backends$Domains$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Backends$Domains$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Backends$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * Updates the information for a single domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.domains.patch({
     *       // Optional. If set to true, and the domain is not found, a new domain will be created.
     *       allowMissing: 'placeholder-value',
     *       // Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com`
     *       name: 'projects/my-project/locations/my-location/backends/my-backend/domains/my-domain',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Field mask is used to specify the fields to be overwritten in the Domain resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *       updateMask: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or modifying any resources.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "customDomainStatus": {},
     *         //   "deleteTime": "my_deleteTime",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "reconciling": false,
     *         //   "serve": {},
     *         //   "type": "my_type",
     *         //   "uid": "my_uid",
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
    patch(
      params: Params$Resource$Projects$Locations$Backends$Domains$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Backends$Domains$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Domains$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Domains$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Domains$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Domains$Patch
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
        {}) as Params$Resource$Projects$Locations$Backends$Domains$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Domains$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Backends$Domains$Create
    extends StandardParameters {
    /**
     * Required. Id of the domain to create. Must be a valid domain name.
     */
    domainId?: string;
    /**
     * Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }
  export interface Params$Resource$Projects$Locations$Backends$Domains$Delete
    extends StandardParameters {
    /**
     * Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     */
    etag?: string;
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/domains/{domainId\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Backends$Domains$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/domains/{domainId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backends$Domains$List
    extends StandardParameters {
    /**
     * Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Backends$Domains$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and the domain is not found, a new domain will be created.
     */
    allowMissing?: boolean;
    /**
     * Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com`
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Domain resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or modifying any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }

  export class Resource$Projects$Locations$Backends$Rollouts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new rollout for a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.rollouts.create({
     *       // Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *       parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Desired ID of the rollout being created.
     *       rolloutId: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "build": "my_build",
     *         //   "createTime": "my_createTime",
     *         //   "deleteTime": "my_deleteTime",
     *         //   "displayName": "my_displayName",
     *         //   "error": {},
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "reconciling": false,
     *         //   "state": "my_state",
     *         //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Backends$Rollouts$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Rollouts$Create
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
        {}) as Params$Resource$Projects$Locations$Backends$Rollouts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Rollouts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rollouts').replace(
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
     * Gets information about a rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.rollouts.get(
     *     {
     *       // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/rollouts/{rolloutId\}`.
     *       name: 'projects/my-project/locations/my-location/backends/my-backend/rollouts/my-rollout',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "build": "my_build",
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Backends$Rollouts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>;
    get(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Rollout>,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$Get,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(callback: BodyResponseCallback<Schema$Rollout>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Rollouts$Get
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Rollouts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Rollouts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Rollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Rollout>(parameters);
      }
    }

    /**
     * Lists rollouts for a backend.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.rollouts.list({
     *       // Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *       filter: 'placeholder-value',
     *       // Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of results to return. If not set, the service selects a default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     *       parent: 'projects/my-project/locations/my-location/backends/my-backend',
     *       // Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     *       showDeleted: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rollouts": [],
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
      params: Params$Resource$Projects$Locations$Backends$Rollouts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Backends$Rollouts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backends$Rollouts$List,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolloutsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Rollouts$List
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Rollouts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Rollouts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rollouts').replace(
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
        createAPIRequest<Schema$ListRolloutsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolloutsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Backends$Rollouts$Create
    extends StandardParameters {
    /**
     * Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Desired ID of the rollout being created.
     */
    rolloutId?: string;
    /**
     * Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Rollout;
  }
  export interface Params$Resource$Projects$Locations$Backends$Rollouts$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/rollouts/{rolloutId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backends$Rollouts$List
    extends StandardParameters {
    /**
     * Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent backend in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}`.
     */
    parent?: string;
    /**
     * Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     */
    showDeleted?: boolean;
  }

  export class Resource$Projects$Locations$Backends$Traffic {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets information about a backend's traffic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.backends.traffic.get({
     *     // Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/traffic`.
     *     name: 'projects/my-project/locations/my-location/backends/my-backend/traffic',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "current": {},
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
     *   //   "rolloutPolicy": {},
     *   //   "target": {},
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
      params: Params$Resource$Projects$Locations$Backends$Traffic$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Backends$Traffic$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Traffic>>;
    get(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Traffic>,
      callback: BodyResponseCallback<Schema$Traffic>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Get,
      callback: BodyResponseCallback<Schema$Traffic>
    ): void;
    get(callback: BodyResponseCallback<Schema$Traffic>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Traffic$Get
        | BodyResponseCallback<Schema$Traffic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Traffic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Traffic>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Traffic>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backends$Traffic$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backends$Traffic$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Traffic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Traffic>(parameters);
      }
    }

    /**
     * Updates a backend's traffic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *     await firebaseapphosting.projects.locations.backends.traffic.patch({
     *       // Identifier. The resource name of the backend's traffic. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/traffic`.
     *       name: 'projects/my-project/locations/my-location/backends/my-backend/traffic',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Field mask is used to specify the fields to be overwritten in the traffic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *       updateMask: 'placeholder-value',
     *       // Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "current": {},
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "reconciling": false,
     *         //   "rolloutPolicy": {},
     *         //   "target": {},
     *         //   "uid": "my_uid",
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
    patch(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Backends$Traffic$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Backends$Traffic$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backends$Traffic$Patch
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
        {}) as Params$Resource$Projects$Locations$Backends$Traffic$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Backends$Traffic$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Backends$Traffic$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource in the format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/traffic`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backends$Traffic$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the backend's traffic. Format: `projects/{project\}/locations/{locationId\}/backends/{backendId\}/traffic`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the traffic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Traffic;
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
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.operations.cancel({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.operations.delete({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.operations.get({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/firebaseapphosting.googleapis.com
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
     * const firebaseapphosting = google.firebaseapphosting('v1');
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
     *   const res = await firebaseapphosting.projects.locations.operations.list({
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
        options.rootUrl || 'https://firebaseapphosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
}
