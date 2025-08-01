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

export namespace analyticshub_v1 {
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
   * Analytics Hub API
   *
   * Exchange data and analytics assets securely and efficiently.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analyticshub = google.analyticshub('v1');
   * ```
   */
  export class Analyticshub {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
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
   * Configuration for writing message data in Avro format. Message payloads and metadata will be written to files as an Avro binary.
   */
  export interface Schema$AvroConfig {
    /**
     * Optional. When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.
     */
    useTopicSchema?: boolean | null;
    /**
     * Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map.
     */
    writeMetadata?: boolean | null;
  }
  /**
   * Configuration for a BigQuery subscription.
   */
  export interface Schema$BigQueryConfig {
    /**
     * Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog.
     */
    dropUnknownFields?: boolean | null;
    /**
     * Optional. The service account to use to write to BigQuery. The subscription creator or updater that specifies this field must have `iam.serviceAccounts.actAs` permission on the service account. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number\}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
     */
    serviceAccountEmail?: string | null;
    /**
     * Optional. The name of the table to which to write data, of the form {projectId\}.{datasetId\}.{tableId\}
     */
    table?: string | null;
    /**
     * Optional. When true, use the BigQuery table's schema as the columns to write to in BigQuery. `use_table_schema` and `use_topic_schema` cannot be enabled at the same time.
     */
    useTableSchema?: boolean | null;
    /**
     * Optional. When true, use the topic's schema as the columns to write to in BigQuery, if it exists. `use_topic_schema` and `use_table_schema` cannot be enabled at the same time.
     */
    useTopicSchema?: boolean | null;
    /**
     * Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
     */
    writeMetadata?: boolean | null;
  }
  /**
   * A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.
   */
  export interface Schema$BigQueryDatasetSource {
    /**
     * Optional. Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123`
     */
    dataset?: string | null;
    /**
     * Optional. If set, restricted export policy will be propagated and enforced on the linked dataset.
     */
    restrictedExportPolicy?: Schema$RestrictedExportPolicy;
    /**
     * Optional. Resource in this dataset that is selectively shared. This field is required for data clean room exchanges.
     */
    selectedResources?: Schema$SelectedResource[];
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
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
   * Configuration for a Cloud Storage subscription.
   */
  export interface Schema$CloudStorageConfig {
    /**
     * Optional. If set, message data will be written to Cloud Storage in Avro format.
     */
    avroConfig?: Schema$AvroConfig;
    /**
     * Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://". See the [bucket naming requirements] (https://cloud.google.com/storage/docs/buckets#naming).
     */
    bucket?: string | null;
    /**
     * Optional. User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).
     */
    filenameDatetimeFormat?: string | null;
    /**
     * Optional. User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).
     */
    filenamePrefix?: string | null;
    /**
     * Optional. User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/".
     */
    filenameSuffix?: string | null;
    /**
     * Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit.
     */
    maxBytes?: string | null;
    /**
     * Optional. File batching settings. If no max_duration setting is specified, a max_duration of 5 minutes will be set by default. max_duration is required regardless of whether other file batching settings are specified. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's acknowledgement deadline.
     */
    maxDuration?: string | null;
    /**
     * Optional. The maximum number of messages that can be written to a Cloud Storage file before a new file is created. Min 1000 messages.
     */
    maxMessages?: string | null;
    /**
     * Optional. The service account to use to write to Cloud Storage. The subscription creator or updater that specifies this field must have `iam.serviceAccounts.actAs` permission on the service account. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number\}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
     */
    serviceAccountEmail?: string | null;
    /**
     * Optional. If set, message data will be written to Cloud Storage in text format.
     */
    textConfig?: Schema$TextConfig;
  }
  /**
   * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
   */
  export interface Schema$DataExchange {
    /**
     * Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
     */
    description?: string | null;
    /**
     * Optional. Type of discovery on the discovery page for all the listings under this exchange. Updating this field also updates (overwrites) the discovery_type field for all the listings under this exchange.
     */
    discoveryType?: string | null;
    /**
     * Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.
     */
    displayName?: string | null;
    /**
     * Optional. Documentation describing the data exchange.
     */
    documentation?: string | null;
    /**
     * Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
     */
    icon?: string | null;
    /**
     * Output only. Number of listings contained in the data exchange.
     */
    listingCount?: number | null;
    /**
     * Optional. By default, false. If true, the DataExchange has an email sharing mandate enabled.
     */
    logLinkedDatasetQueryUserEmail?: boolean | null;
    /**
     * Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
    /**
     * Optional. Configurable data sharing environment option for a data exchange.
     */
    sharingEnvironmentConfig?: Schema$SharingEnvironmentConfig;
  }
  /**
   * Contains details of the data provider.
   */
  export interface Schema$DataProvider {
    /**
     * Optional. Name of the data provider.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the data provider. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
  }
  /**
   * Data Clean Room (DCR), used for privacy-safe and secured data sharing.
   */
  export interface Schema$DcrExchangeConfig {
    /**
     * Output only. If True, when subscribing to this DCR, it will create only one linked dataset containing all resources shared within the cleanroom. If False, when subscribing to this DCR, it will create 1 linked dataset per listing. This is not configurable, and by default, all new DCRs will have the restriction set to True.
     */
    singleLinkedDatasetPerCleanroom?: boolean | null;
    /**
     * Output only. If True, this DCR restricts the contributors to sharing only a single resource in a Listing. And no two resources should have the same IDs. So if a contributor adds a view with a conflicting name, the CreateListing API will reject the request. if False, the data contributor can publish an entire dataset (as before). This is not configurable, and by default, all new DCRs will have the restriction set to True.
     */
    singleSelectedResourceSharingRestriction?: boolean | null;
  }
  /**
   * Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.
   */
  export interface Schema$DeadLetterPolicy {
    /**
     * Optional. The name of the topic to which dead letter messages should be published. Format is `projects/{project\}/topics/{topic\}`.The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project_number\}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic. The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost.
     */
    deadLetterTopic?: string | null;
    /**
     * Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100. The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgement deadline has been exceeded for the message). A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a default value of 5 is used.
     */
    maxDeliveryAttempts?: number | null;
  }
  /**
   * Default Analytics Hub data exchange, used for secured data sharing.
   */
  export interface Schema$DefaultExchangeConfig {}
  /**
   * Defines the destination bigquery dataset.
   */
  export interface Schema$DestinationDataset {
    /**
     * Required. A reference that identifies the destination dataset.
     */
    datasetReference?: Schema$DestinationDatasetReference;
    /**
     * Optional. A user-friendly description of the dataset.
     */
    description?: string | null;
    /**
     * Optional. A descriptive name for the dataset.
     */
    friendlyName?: string | null;
    /**
     * Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
     */
    location?: string | null;
  }
  export interface Schema$DestinationDatasetReference {
    /**
     * Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the project containing this dataset.
     */
    projectId?: string | null;
  }
  /**
   * Defines the destination Pub/Sub subscription.
   */
  export interface Schema$DestinationPubSubSubscription {
    /**
     * Required. Destination Pub/Sub subscription resource.
     */
    pubsubSubscription?: Schema$GooglePubsubV1Subscription;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).
   */
  export interface Schema$ExpirationPolicy {
    /**
     * Optional. Specifies the "time-to-live" duration for an associated resource. The resource expires if it is not active for a period of `ttl`. The definition of "activity" depends on the type of the associated resource. The minimum and maximum allowed values for `ttl` depend on the type of the associated resource, as well. If `ttl` is not set, the associated resource never expires.
     */
    ttl?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
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
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * Commercial info contains the information about the commercial data products associated with the listing.
   */
  export interface Schema$GoogleCloudBigqueryAnalyticshubV1ListingCommercialInfo {
    /**
     * Output only. Details of the Marketplace Data Product associated with the Listing.
     */
    cloudMarketplace?: Schema$GoogleCloudBigqueryAnalyticshubV1ListingCommercialInfoGoogleCloudMarketplaceInfo;
  }
  /**
   * Specifies the details of the Marketplace Data Product associated with the Listing.
   */
  export interface Schema$GoogleCloudBigqueryAnalyticshubV1ListingCommercialInfoGoogleCloudMarketplaceInfo {
    /**
     * Output only. Commercial state of the Marketplace Data Product.
     */
    commercialState?: string | null;
    /**
     * Output only. Resource name of the commercial service associated with the Marketplace Data Product. e.g. example.com
     */
    service?: string | null;
  }
  /**
   * Commercial info metadata for this subscription.
   */
  export interface Schema$GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfo {
    /**
     * Output only. This is set when the subscription is commercialised via Cloud Marketplace.
     */
    cloudMarketplace?: Schema$GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfoGoogleCloudMarketplaceInfo;
  }
  /**
   * Cloud Marketplace commercial metadata for this subscription.
   */
  export interface Schema$GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfoGoogleCloudMarketplaceInfo {
    /**
     * Resource name of the Marketplace Order.
     */
    order?: string | null;
  }
  /**
   * Defines the destination Pub/Sub subscription. If none of `push_config`, `bigquery_config`, `cloud_storage_config`, `pubsub_export_config`, or `pubsublite_export_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
   */
  export interface Schema$GooglePubsubV1Subscription {
    /**
     * Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.
     */
    ackDeadlineSeconds?: number | null;
    /**
     * Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.
     */
    bigqueryConfig?: Schema$BigQueryConfig;
    /**
     * Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.
     */
    cloudStorageConfig?: Schema$CloudStorageConfig;
    /**
     * Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead_letter_policy is not set, dead lettering is disabled. The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project_number\}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.
     */
    deadLetterPolicy?: Schema$DeadLetterPolicy;
    /**
     * Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made.
     */
    detached?: boolean | null;
    /**
     * Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: * The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. * An acknowledged message will not be resent to a subscriber. Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery` is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct `message_id` values.
     */
    enableExactlyOnceDelivery?: boolean | null;
    /**
     * Optional. If true, messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order.
     */
    enableMessageOrdering?: boolean | null;
    /**
     * Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a *default policy* with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day. If `expiration_policy` is set, but `expiration_policy.ttl` is not set, the subscription never expires.
     */
    expirationPolicy?: Schema$ExpirationPolicy;
    /**
     * Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.
     */
    filter?: string | null;
    /**
     * Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.
     */
    messageRetentionDuration?: string | null;
    /**
     * Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.
     */
    messageTransforms?: Schema$MessageTransform[];
    /**
     * Required. Name of the subscription. Format is `projects/{project\}/subscriptions/{sub\}`.
     */
    name?: string | null;
    /**
     * Optional. If push delivery is used with this subscription, this field is used to configure it.
     */
    pushConfig?: Schema$PushConfig;
    /**
     * Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to [`Seek` to a timestamp] (https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages.
     */
    retainAckedMessages?: boolean | null;
    /**
     * Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription. If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message.
     */
    retryPolicy?: Schema$RetryPolicy;
  }
  /**
   * User-defined JavaScript function that can transform or filter a Pub/Sub message.
   */
  export interface Schema$JavaScriptUDF {
    /**
     * Required. JavaScript code that contains a function `function_name` with the below signature: ``` /x* * Transforms a Pub/Sub message. * @return {(Object)\>|null)\} - To * filter a message, return `null`. To transform a message return a map * with the following keys: * - (required) 'data' : {string\} * - (optional) 'attributes' : {Object\} * Returning empty `attributes` will remove all attributes from the * message. * * @param {(Object)\>\} Pub/Sub * message. Keys: * - (required) 'data' : {string\} * - (required) 'attributes' : {Object\} * * @param {Object\} metadata - Pub/Sub message metadata. * Keys: * - (required) 'message_id' : {string\} * - (optional) 'publish_time': {string\} YYYY-MM-DDTHH:MM:SSZ format * - (optional) 'ordering_key': {string\} x/ function (message, metadata) { \} ```
     */
    code?: string | null;
    /**
     * Required. Name of the JavasScript function that should applied to Pub/Sub messages.
     */
    functionName?: string | null;
  }
  /**
   * Reference to a linked resource tracked by this Subscription.
   */
  export interface Schema$LinkedResource {
    /**
     * Output only. Name of the linked dataset, e.g. projects/subscriberproject/datasets/linked_dataset
     */
    linkedDataset?: string | null;
    /**
     * Output only. Name of the Pub/Sub subscription, e.g. projects/subscriberproject/subscriptions/subscriptions/sub_id
     */
    linkedPubsubSubscription?: string | null;
    /**
     * Output only. Listing for which linked resource is created.
     */
    listing?: string | null;
  }
  /**
   * Message for response to the list of data exchanges.
   */
  export interface Schema$ListDataExchangesResponse {
    /**
     * The list of data exchanges.
     */
    dataExchanges?: Schema$DataExchange[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
   */
  export interface Schema$Listing {
    /**
     * Optional. If true, the listing is only available to get the resource metadata. Listing is non subscribable.
     */
    allowOnlyMetadataSharing?: boolean | null;
    /**
     * Shared dataset i.e. BigQuery dataset source.
     */
    bigqueryDataset?: Schema$BigQueryDatasetSource;
    /**
     * Optional. Categories of the listing. Up to five categories are allowed.
     */
    categories?: string[] | null;
    /**
     * Output only. Commercial info contains the information about the commercial data products associated with the listing.
     */
    commercialInfo?: Schema$GoogleCloudBigqueryAnalyticshubV1ListingCommercialInfo;
    /**
     * Optional. Details of the data provider who owns the source data.
     */
    dataProvider?: Schema$DataProvider;
    /**
     * Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.
     */
    description?: string | null;
    /**
     * Optional. Type of discovery of the listing on the discovery page.
     */
    discoveryType?: string | null;
    /**
     * Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.
     */
    displayName?: string | null;
    /**
     * Optional. Documentation describing the listing.
     */
    documentation?: string | null;
    /**
     * Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.
     */
    icon?: string | null;
    /**
     * Optional. By default, false. If true, the Listing has an email sharing mandate enabled.
     */
    logLinkedDatasetQueryUserEmail?: boolean | null;
    /**
     * Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
    /**
     * Optional. Details of the publisher who owns the listing and who can share the source data.
     */
    publisher?: Schema$Publisher;
    /**
     * Pub/Sub topic source.
     */
    pubsubTopic?: Schema$PubSubTopicSource;
    /**
     * Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.
     */
    requestAccess?: string | null;
    /**
     * Output only. Listing shared asset type.
     */
    resourceType?: string | null;
    /**
     * Optional. If set, restricted export configuration will be propagated and enforced on the linked dataset.
     */
    restrictedExportConfig?: Schema$RestrictedExportConfig;
    /**
     * Output only. Current state of the listing.
     */
    state?: string | null;
  }
  /**
   * Message for response to the list of Listings.
   */
  export interface Schema$ListListingsResponse {
    /**
     * The list of Listing.
     */
    listings?: Schema$Listing[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to listing data exchanges in an organization and location.
   */
  export interface Schema$ListOrgDataExchangesResponse {
    /**
     * The list of data exchanges.
     */
    dataExchanges?: Schema$DataExchange[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to the listing of shared resource subscriptions.
   */
  export interface Schema$ListSharedResourceSubscriptionsResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * The list of subscriptions.
     */
    sharedResourceSubscriptions?: Schema$Subscription[];
  }
  /**
   * Message for response to the listing of subscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * The list of subscriptions.
     */
    subscriptions?: Schema$Subscription[];
  }
  /**
   * All supported message transforms types.
   */
  export interface Schema$MessageTransform {
    /**
     * Optional. If true, the transform is disabled and will not be applied to messages. Defaults to `false`.
     */
    disabled?: boolean | null;
    /**
     * Optional. This field is deprecated, use the `disabled` field to disable transforms.
     */
    enabled?: boolean | null;
    /**
     * Optional. JavaScript User Defined Function. If multiple JavaScriptUDF's are specified on a resource, each must have a unique `function_name`.
     */
    javascriptUdf?: Schema$JavaScriptUDF;
  }
  /**
   * Sets the `data` field as the HTTP body for delivery.
   */
  export interface Schema$NoWrapper {
    /**
     * Optional. When true, writes the Pub/Sub message metadata to `x-goog-pubsub-:` headers of the HTTP request. Writes the Pub/Sub message attributes to `:` headers of the HTTP request.
     */
    writeMetadata?: boolean | null;
  }
  /**
   * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
   */
  export interface Schema$OidcToken {
    /**
     * Optional. Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used.
     */
    audience?: string | null;
    /**
     * Optional. [Service account email](https://cloud.google.com/iam/docs/service-accounts) used for generating the OIDC token. For more information on setting up authentication, see [Push subscriptions](https://cloud.google.com/pubsub/docs/push).
     */
    serviceAccountEmail?: string | null;
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
   * Represents the metadata of a long-running operation in Analytics Hub.
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
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
   * Contains details of the listing publisher.
   */
  export interface Schema$Publisher {
    /**
     * Optional. Name of the listing publisher.
     */
    name?: string | null;
    /**
     * Optional. Email or URL of the listing publisher. Max Length: 1000 bytes.
     */
    primaryContact?: string | null;
  }
  /**
   * Pub/Sub topic source.
   */
  export interface Schema$PubSubTopicSource {
    /**
     * Optional. Region hint on where the data might be published. Data affinity regions are modifiable. See https://cloud.google.com/about/locations for full listing of possible Cloud regions.
     */
    dataAffinityRegions?: string[] | null;
    /**
     * Required. Resource name of the Pub/Sub topic source for this listing. e.g. projects/myproject/topics/topicId
     */
    topic?: string | null;
  }
  /**
   * The payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage).
   */
  export interface Schema$PubsubWrapper {}
  /**
   * Configuration for a push delivery endpoint.
   */
  export interface Schema$PushConfig {
    /**
     * Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery. The only currently supported attribute is `x-goog-version`, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata). If not present during the `CreateSubscription` call, it will default to the version of the Pub/Sub API used to make such call. If not present in a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The only supported values for the `x-goog-version` attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API. For example: `attributes { "x-goog-version": "v1" \}`
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Optional. When set, the payload to the push endpoint is not wrapped.
     */
    noWrapper?: Schema$NoWrapper;
    /**
     * Optional. If specified, Pub/Sub will generate and attach an OIDC JWT token as an `Authorization` header in the HTTP request for every pushed message.
     */
    oidcToken?: Schema$OidcToken;
    /**
     * Optional. When set, the payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage).
     */
    pubsubWrapper?: Schema$PubsubWrapper;
    /**
     * Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use `https://example.com/push`.
     */
    pushEndpoint?: string | null;
  }
  /**
   * Message for refreshing a subscription.
   */
  export interface Schema$RefreshSubscriptionRequest {}
  /**
   * Message for response when you refresh a subscription.
   */
  export interface Schema$RefreshSubscriptionResponse {
    /**
     * The refreshed subscription resource.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * Restricted export config, used to configure restricted export on linked dataset.
   */
  export interface Schema$RestrictedExportConfig {
    /**
     * Optional. If true, enable restricted export.
     */
    enabled?: boolean | null;
    /**
     * Output only. If true, restrict direct table access(read api/tabledata.list) on linked table.
     */
    restrictDirectTableAccess?: boolean | null;
    /**
     * Optional. If true, restrict export of query result derived from restricted linked dataset table.
     */
    restrictQueryResult?: boolean | null;
  }
  /**
   * Restricted export policy used to configure restricted export on linked dataset.
   */
  export interface Schema$RestrictedExportPolicy {
    /**
     * Optional. If true, enable restricted export.
     */
    enabled?: boolean | null;
    /**
     * Optional. If true, restrict direct table access (read api/tabledata.list) on linked table.
     */
    restrictDirectTableAccess?: boolean | null;
    /**
     * Optional. If true, restrict export of query result derived from restricted linked dataset table.
     */
    restrictQueryResult?: boolean | null;
  }
  /**
   * A policy that specifies how Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff.
   */
  export interface Schema$RetryPolicy {
    /**
     * Optional. The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
     */
    maximumBackoff?: string | null;
    /**
     * Optional. The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
     */
    minimumBackoff?: string | null;
  }
  /**
   * Message for revoking a subscription.
   */
  export interface Schema$RevokeSubscriptionRequest {
    /**
     * Optional. If the subscription is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid revoking commercial subscriptions accidentally.
     */
    revokeCommercial?: boolean | null;
  }
  /**
   * Message for response when you revoke a subscription. Empty for now.
   */
  export interface Schema$RevokeSubscriptionResponse {}
  /**
   * Resource in this dataset that is selectively shared.
   */
  export interface Schema$SelectedResource {
    /**
     * Optional. Format: For routine: `projects/{projectId\}/datasets/{datasetId\}/routines/{routineId\}` Example:"projects/test_project/datasets/test_dataset/routines/test_routine"
     */
    routine?: string | null;
    /**
     * Optional. Format: For table: `projects/{projectId\}/datasets/{datasetId\}/tables/{tableId\}` Example:"projects/test_project/datasets/test_dataset/tables/test_table"
     */
    table?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Sharing environment is a behavior model for sharing data within a data exchange. This option is configurable for a data exchange.
   */
  export interface Schema$SharingEnvironmentConfig {
    /**
     * Data Clean Room (DCR), used for privacy-safe and secured data sharing.
     */
    dcrExchangeConfig?: Schema$DcrExchangeConfig;
    /**
     * Default Analytics Hub data exchange, used for secured data sharing.
     */
    defaultExchangeConfig?: Schema$DefaultExchangeConfig;
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
   * Message for subscribing to a Data Exchange.
   */
  export interface Schema$SubscribeDataExchangeRequest {
    /**
     * Required. The parent resource path of the Subscription. e.g. `projects/subscriberproject/locations/us`
     */
    destination?: string | null;
    /**
     * Optional. BigQuery destination dataset to create for the subscriber.
     */
    destinationDataset?: Schema$DestinationDataset;
    /**
     * Email of the subscriber.
     */
    subscriberContact?: string | null;
    /**
     * Required. Name of the subscription to create. e.g. `subscription1`
     */
    subscription?: string | null;
  }
  /**
   * Message for response when you subscribe to a Data Exchange.
   */
  export interface Schema$SubscribeDataExchangeResponse {
    /**
     * Subscription object created from this subscribe action.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * Message for subscribing to a listing.
   */
  export interface Schema$SubscribeListingRequest {
    /**
     * Input only. BigQuery destination dataset to create for the subscriber.
     */
    destinationDataset?: Schema$DestinationDataset;
    /**
     * Input only. Destination Pub/Sub subscription to create for the subscriber.
     */
    destinationPubsubSubscription?: Schema$DestinationPubSubSubscription;
  }
  /**
   * Message for response when you subscribe to a listing.
   */
  export interface Schema$SubscribeListingResponse {
    /**
     * Subscription object created from this subscribe action.
     */
    subscription?: Schema$Subscription;
  }
  /**
   * A subscription represents a subscribers' access to a particular set of published data. It contains references to associated listings, data exchanges, and linked datasets.
   */
  export interface Schema$Subscription {
    /**
     * Output only. This is set if this is a commercial subscription i.e. if this subscription was created from subscribing to a commercial listing.
     */
    commercialInfo?: Schema$GoogleCloudBigqueryAnalyticshubV1SubscriptionCommercialInfo;
    /**
     * Output only. Timestamp when the subscription was created.
     */
    creationTime?: string | null;
    /**
     * Output only. Resource name of the source Data Exchange. e.g. projects/123/locations/us/dataExchanges/456
     */
    dataExchange?: string | null;
    /**
     * Optional. BigQuery destination dataset to create for the subscriber.
     */
    destinationDataset?: Schema$DestinationDataset;
    /**
     * Output only. Timestamp when the subscription was last modified.
     */
    lastModifyTime?: string | null;
    /**
     * Output only. Map of listing resource names to associated linked resource, e.g. projects/123/locations/us/dataExchanges/456/listings/789 -\> projects/123/datasets/my_dataset For listing-level subscriptions, this is a map of size 1. Only contains values if state == STATE_ACTIVE.
     */
    linkedDatasetMap?: {[key: string]: Schema$LinkedResource} | null;
    /**
     * Output only. Linked resources created in the subscription. Only contains values if state = STATE_ACTIVE.
     */
    linkedResources?: Schema$LinkedResource[];
    /**
     * Output only. Resource name of the source Listing. e.g. projects/123/locations/us/dataExchanges/456/listings/789
     */
    listing?: string | null;
    /**
     * Output only. By default, false. If true, the Subscriber agreed to the email sharing mandate that is enabled for DataExchange/Listing.
     */
    logLinkedDatasetQueryUserEmail?: boolean | null;
    /**
     * Output only. The resource name of the subscription. e.g. `projects/myproject/locations/us/subscriptions/123`.
     */
    name?: string | null;
    /**
     * Output only. Display name of the project of this subscription.
     */
    organizationDisplayName?: string | null;
    /**
     * Output only. Organization of the project this subscription belongs to.
     */
    organizationId?: string | null;
    /**
     * Output only. Listing shared asset type.
     */
    resourceType?: string | null;
    /**
     * Output only. Current state of the subscription.
     */
    state?: string | null;
    /**
     * Output only. Email of the subscriber.
     */
    subscriberContact?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Configuration for writing message data in text format. Message payloads will be written to files as raw text, separated by a newline.
   */
  export interface Schema$TextConfig {}

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    dataExchanges: Resource$Organizations$Locations$Dataexchanges;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataExchanges = new Resource$Organizations$Locations$Dataexchanges(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Dataexchanges {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all data exchanges from projects in a given organization and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.organizations.locations.dataExchanges.list({
     *     // Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`.
     *     organization: 'organizations/my-organization/locations/my-location',
     *     // The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     *     pageSize: 'placeholder-value',
     *     // Page token, returned by a previous call, to request the next page of results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataExchanges": [],
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
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOrgDataExchangesResponse>>;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>,
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dataexchanges$List,
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dataexchanges$List
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOrgDataExchangesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOrgDataExchangesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dataexchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dataexchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+organization}/dataExchanges').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['organization'],
        pathParams: ['organization'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOrgDataExchangesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOrgDataExchangesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dataexchanges$List
    extends StandardParameters {
    /**
     * Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`.
     */
    organization?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
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
    dataExchanges: Resource$Projects$Locations$Dataexchanges;
    subscriptions: Resource$Projects$Locations$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataExchanges = new Resource$Projects$Locations$Dataexchanges(
        this.context
      );
      this.subscriptions = new Resource$Projects$Locations$Subscriptions(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Dataexchanges {
    context: APIRequestContext;
    listings: Resource$Projects$Locations$Dataexchanges$Listings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.listings = new Resource$Projects$Locations$Dataexchanges$Listings(
        this.context
      );
    }

    /**
     * Creates a new data exchange.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.create({
     *     // Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     *     dataExchangeId: 'placeholder-value',
     *     // Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "discoveryType": "my_discoveryType",
     *       //   "displayName": "my_displayName",
     *       //   "documentation": "my_documentation",
     *       //   "icon": "my_icon",
     *       //   "listingCount": 0,
     *       //   "logLinkedDatasetQueryUserEmail": false,
     *       //   "name": "my_name",
     *       //   "primaryContact": "my_primaryContact",
     *       //   "sharingEnvironmentConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "listingCount": 0,
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "sharingEnvironmentConfig": {}
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Create,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataExchange>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Create
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataExchanges').replace(
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Deletes an existing data exchange.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.delete({
     *     // Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`.
     *     name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Delete
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a data exchange.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.get({
     *     // Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     *     name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "listingCount": 0,
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "sharingEnvironmentConfig": {}
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Get,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataExchange>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Get
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Gets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists all data exchanges in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.list({
     *     // The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     *     pageSize: 'placeholder-value',
     *     // Page token, returned by a previous call, to request the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataExchanges": [],
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
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dataexchanges$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataExchangesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataExchangesResponse>,
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$List,
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDataExchangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$List
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataExchangesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataExchangesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataExchanges').replace(
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
        createAPIRequest<Schema$ListDataExchangesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataExchangesResponse>(parameters);
      }
    }

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listSubscriptions({
     *       // If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     *       includeDeletedSubscriptions: 'placeholder-value',
     *       // The maximum number of results to return in a single response page.
     *       pageSize: 'placeholder-value',
     *       // Page token, returned by a previous call.
     *       pageToken: 'placeholder-value',
     *       // Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     *       resource:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sharedResourceSubscriptions": []
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
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listSubscriptions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListSharedResourceSubscriptionsResponse>
    >;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListSharedResourceSubscriptionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:listSubscriptions').replace(
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
        createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing data exchange.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.patch({
     *     // Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     *     name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *     // Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "discoveryType": "my_discoveryType",
     *       //   "displayName": "my_displayName",
     *       //   "documentation": "my_documentation",
     *       //   "icon": "my_icon",
     *       //   "listingCount": 0,
     *       //   "logLinkedDatasetQueryUserEmail": false,
     *       //   "name": "my_name",
     *       //   "primaryContact": "my_primaryContact",
     *       //   "sharingEnvironmentConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "listingCount": 0,
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "sharingEnvironmentConfig": {}
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$DataExchange>,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Patch,
      callback: BodyResponseCallback<Schema$DataExchange>
    ): void;
    patch(callback: BodyResponseCallback<Schema$DataExchange>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Patch
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataExchange>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataExchange>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dataexchanges$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$DataExchange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataExchange>(parameters);
      }
    }

    /**
     * Sets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.subscribe({
     *     // Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/us/dataExchanges/123`
     *     name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destination": "my_destination",
     *       //   "destinationDataset": {},
     *       //   "subscriberContact": "my_subscriberContact",
     *       //   "subscription": "my_subscription"
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
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    subscribe(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Subscribe,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    subscribe(callback: BodyResponseCallback<Schema$Operation>): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Subscribe
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
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
     * Returns the permissions that a caller has.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dataexchanges$Create
    extends StandardParameters {
    /**
     * Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     */
    dataExchangeId?: string;
    /**
     * Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataExchange;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Delete
    extends StandardParameters {
    /**
     * Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listsubscriptions
    extends StandardParameters {
    /**
     * If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     */
    includeDeletedSubscriptions?: boolean;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     */
    name?: string;
    /**
     * Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataExchange;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Subscribe
    extends StandardParameters {
    /**
     * Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/us/dataExchanges/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeDataExchangeRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Dataexchanges$Listings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.create({
     *       // Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     *       listingId: 'placeholder-value',
     *       // Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     *       parent:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "allowOnlyMetadataSharing": false,
     *         //   "bigqueryDataset": {},
     *         //   "categories": [],
     *         //   "commercialInfo": {},
     *         //   "dataProvider": {},
     *         //   "description": "my_description",
     *         //   "discoveryType": "my_discoveryType",
     *         //   "displayName": "my_displayName",
     *         //   "documentation": "my_documentation",
     *         //   "icon": "my_icon",
     *         //   "logLinkedDatasetQueryUserEmail": false,
     *         //   "name": "my_name",
     *         //   "primaryContact": "my_primaryContact",
     *         //   "publisher": {},
     *         //   "pubsubTopic": {},
     *         //   "requestAccess": "my_requestAccess",
     *         //   "resourceType": "my_resourceType",
     *         //   "restrictedExportConfig": {},
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowOnlyMetadataSharing": false,
     *   //   "bigqueryDataset": {},
     *   //   "categories": [],
     *   //   "commercialInfo": {},
     *   //   "dataProvider": {},
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "publisher": {},
     *   //   "pubsubTopic": {},
     *   //   "requestAccess": "my_requestAccess",
     *   //   "resourceType": "my_resourceType",
     *   //   "restrictedExportConfig": {},
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Listing>>;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Create,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    create(callback: BodyResponseCallback<Schema$Listing>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Create
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Listing>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/listings').replace(
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Deletes a listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.delete({
     *       // Optional. If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally.
     *       deleteCommercial: 'placeholder-value',
     *       // Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     *       name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *     });
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete
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
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.listings.get({
     *     // Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     *     name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowOnlyMetadataSharing": false,
     *   //   "bigqueryDataset": {},
     *   //   "categories": [],
     *   //   "commercialInfo": {},
     *   //   "dataProvider": {},
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "publisher": {},
     *   //   "pubsubTopic": {},
     *   //   "requestAccess": "my_requestAccess",
     *   //   "resourceType": "my_resourceType",
     *   //   "restrictedExportConfig": {},
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Listing>>;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Get,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    get(callback: BodyResponseCallback<Schema$Listing>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Get
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Listing>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Gets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.getIamPolicy({
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "options": {}
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists all listings in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.dataExchanges.listings.list(
     *     {
     *       // The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     *       pageSize: 'placeholder-value',
     *       // Page token, returned by a previous call, to request the next page of results.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     *       parent:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "listings": [],
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListListingsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListListingsResponse>,
      callback: BodyResponseCallback<Schema$ListListingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$List,
      callback: BodyResponseCallback<Schema$ListListingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListListingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$List
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListListingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListListingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/listings').replace(
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
        createAPIRequest<Schema$ListListingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListListingsResponse>(parameters);
      }
    }

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.listSubscriptions(
     *       {
     *         // If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     *         includeDeletedSubscriptions: 'placeholder-value',
     *         // The maximum number of results to return in a single response page.
     *         pageSize: 'placeholder-value',
     *         // Page token, returned by a previous call.
     *         pageToken: 'placeholder-value',
     *         // Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     *         resource:
     *           'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sharedResourceSubscriptions": []
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
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listSubscriptions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListSharedResourceSubscriptionsResponse>
    >;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions,
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      callback: BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
    ): void;
    listSubscriptions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSharedResourceSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListSharedResourceSubscriptionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:listSubscriptions').replace(
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
        createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSharedResourceSubscriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing listing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.patch({
     *       // Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`
     *       name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *       // Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "allowOnlyMetadataSharing": false,
     *         //   "bigqueryDataset": {},
     *         //   "categories": [],
     *         //   "commercialInfo": {},
     *         //   "dataProvider": {},
     *         //   "description": "my_description",
     *         //   "discoveryType": "my_discoveryType",
     *         //   "displayName": "my_displayName",
     *         //   "documentation": "my_documentation",
     *         //   "icon": "my_icon",
     *         //   "logLinkedDatasetQueryUserEmail": false,
     *         //   "name": "my_name",
     *         //   "primaryContact": "my_primaryContact",
     *         //   "publisher": {},
     *         //   "pubsubTopic": {},
     *         //   "requestAccess": "my_requestAccess",
     *         //   "resourceType": "my_resourceType",
     *         //   "restrictedExportConfig": {},
     *         //   "state": "my_state"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowOnlyMetadataSharing": false,
     *   //   "bigqueryDataset": {},
     *   //   "categories": [],
     *   //   "commercialInfo": {},
     *   //   "dataProvider": {},
     *   //   "description": "my_description",
     *   //   "discoveryType": "my_discoveryType",
     *   //   "displayName": "my_displayName",
     *   //   "documentation": "my_documentation",
     *   //   "icon": "my_icon",
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "primaryContact": "my_primaryContact",
     *   //   "publisher": {},
     *   //   "pubsubTopic": {},
     *   //   "requestAccess": "my_requestAccess",
     *   //   "resourceType": "my_resourceType",
     *   //   "restrictedExportConfig": {},
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Listing>>;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Listing>,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch,
      callback: BodyResponseCallback<Schema$Listing>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Listing>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Listing>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Listing>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Listing>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Listing>(parameters);
      }
    }

    /**
     * Sets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.subscribe({
     *       // Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     *       name: 'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "destinationDataset": {},
     *         //   "destinationPubsubSubscription": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "subscription": {}
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
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    subscribe(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SubscribeListingResponse>>;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscribeListingResponse>,
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe,
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      callback: BodyResponseCallback<Schema$SubscribeListingResponse>
    ): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscribeListingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SubscribeListingResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
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
        createAPIRequest<Schema$SubscribeListingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscribeListingResponse>(parameters);
      }
    }

    /**
     * Returns the permissions that a caller has.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await analyticshub.projects.locations.dataExchanges.listings.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/dataExchanges/my-dataExchange/listings/my-listing',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Create
    extends StandardParameters {
    /**
     * Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     */
    listingId?: string;
    /**
     * Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Delete
    extends StandardParameters {
    /**
     * Optional. If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally.
     */
    deleteCommercial?: boolean;
    /**
     * Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$List
    extends StandardParameters {
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Listsubscriptions
    extends StandardParameters {
    /**
     * If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     */
    includeDeletedSubscriptions?: boolean;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`
     */
    name?: string;
    /**
     * Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Listing;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Subscribe
    extends StandardParameters {
    /**
     * Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SubscribeListingRequest;
  }
  export interface Params$Resource$Projects$Locations$Dataexchanges$Listings$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.delete({
     *     // Required. Resource name of the subscription to delete. e.g. projects/123/locations/us/subscriptions/456
     *     name: 'projects/my-project/locations/my-location/subscriptions/my-subscription',
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
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Delete
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
        {}) as Params$Resource$Projects$Locations$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
     * Gets the details of a Subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.get({
     *     // Required. Resource name of the subscription. e.g. projects/123/locations/us/subscriptions/456
     *     name: 'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commercialInfo": {},
     *   //   "creationTime": "my_creationTime",
     *   //   "dataExchange": "my_dataExchange",
     *   //   "destinationDataset": {},
     *   //   "lastModifyTime": "my_lastModifyTime",
     *   //   "linkedDatasetMap": {},
     *   //   "linkedResources": [],
     *   //   "listing": "my_listing",
     *   //   "logLinkedDatasetQueryUserEmail": false,
     *   //   "name": "my_name",
     *   //   "organizationDisplayName": "my_organizationDisplayName",
     *   //   "organizationId": "my_organizationId",
     *   //   "resourceType": "my_resourceType",
     *   //   "state": "my_state",
     *   //   "subscriberContact": "my_subscriberContact"
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
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Subscriptions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Get
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Gets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Subscriptions$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Subscriptions$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists all subscriptions in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.list({
     *     // An expression for filtering the results of the request. Eligible fields for filtering are: + `listing` + `data_exchange` Alternatively, a literal wrapped in double quotes may be provided. This will be checked for an exact match against both fields above. In all cases, the full Data Exchange or Listing resource name must be provided. Some example of using filters: + data_exchange="projects/myproject/locations/us/dataExchanges/123" + listing="projects/123/locations/us/dataExchanges/456/listings/789" + "projects/myproject/locations/us/dataExchanges/123"
     *     filter: 'placeholder-value',
     *     // The maximum number of results to return in a single response page.
     *     pageSize: 'placeholder-value',
     *     // Page token, returned by a previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource path of the subscription. e.g. projects/myproject/locations/us
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscriptions": []
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
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Subscriptions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.refresh({
     *     // Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/us/subscriptions/123`
     *     name: 'projects/my-project/locations/my-location/subscriptions/my-subscription',
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
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    refresh(
      params?: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Subscriptions$Refresh,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(callback: BodyResponseCallback<Schema$Operation>): void;
    refresh(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Refresh
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
        {}) as Params$Resource$Projects$Locations$Subscriptions$Refresh;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Refresh;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:refresh').replace(
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
     * Revokes a given subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.revoke({
     *     // Required. Resource name of the subscription to revoke. e.g. projects/123/locations/us/subscriptions/456
     *     name: 'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "revokeCommercial": false
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
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    revoke(
      params?: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RevokeSubscriptionResponse>>;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Subscriptions$Revoke,
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      callback: BodyResponseCallback<Schema$RevokeSubscriptionResponse>
    ): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Revoke
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RevokeSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RevokeSubscriptionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Subscriptions$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:revoke').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RevokeSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RevokeSubscriptionResponse>(parameters);
      }
    }

    /**
     * Sets the IAM policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticshub.googleapis.com
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
     * const analyticshub = google.analyticshub('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticshub.projects.locations.subscriptions.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/subscriptions/my-subscription',
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
      params: Params$Resource$Projects$Locations$Subscriptions$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Subscriptions$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Subscriptions$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Subscriptions$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Subscriptions$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Subscriptions$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analyticshub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription to delete. e.g. projects/123/locations/us/subscriptions/456
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription. e.g. projects/123/locations/us/subscriptions/456
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$List
    extends StandardParameters {
    /**
     * An expression for filtering the results of the request. Eligible fields for filtering are: + `listing` + `data_exchange` Alternatively, a literal wrapped in double quotes may be provided. This will be checked for an exact match against both fields above. In all cases, the full Data Exchange or Listing resource name must be provided. Some example of using filters: + data_exchange="projects/myproject/locations/us/dataExchanges/123" + listing="projects/123/locations/us/dataExchanges/456/listings/789" + "projects/myproject/locations/us/dataExchanges/123"
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response page.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource path of the subscription. e.g. projects/myproject/locations/us
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Refresh
    extends StandardParameters {
    /**
     * Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/us/subscriptions/123`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshSubscriptionRequest;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Revoke
    extends StandardParameters {
    /**
     * Required. Resource name of the subscription to revoke. e.g. projects/123/locations/us/subscriptions/456
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RevokeSubscriptionRequest;
  }
  export interface Params$Resource$Projects$Locations$Subscriptions$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
}
