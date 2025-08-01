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

export namespace osconfig_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * OS Config API
   *
   * OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const osconfig = google.osconfig('v1beta');
   * ```
   */
  export class Osconfig {
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
   * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
   */
  export interface Schema$AptRepository {
    /**
     * Type of archive files in this repository. The default behavior is DEB.
     */
    archiveType?: string | null;
    /**
     * Required. List of components for this repository. Must contain at least one item.
     */
    components?: string[] | null;
    /**
     * Required. Distribution of this repository.
     */
    distribution?: string | null;
    /**
     * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy.
     */
    gpgKey?: string | null;
    /**
     * Required. URI for this repository.
     */
    uri?: string | null;
  }
  /**
   * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
   */
  export interface Schema$AptSettings {
    /**
     * List of packages to exclude from update. These packages will be excluded
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.
     */
    type?: string | null;
  }
  /**
   * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
   */
  export interface Schema$Assignment {
    /**
     * Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging".
     */
    groupLabels?: Schema$AssignmentGroupLabel[];
    /**
     * Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies.
     */
    instanceNamePrefixes?: string[] | null;
    /**
     * Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project.
     */
    instances?: string[] | null;
    /**
     * Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.
     */
    osTypes?: Schema$AssignmentOsType[];
    /**
     * Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
     */
    zones?: string[] | null;
  }
  /**
   * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
   */
  export interface Schema$AssignmentGroupLabel {
    /**
     * Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Defines the criteria for selecting VM Instances by OS type.
   */
  export interface Schema$AssignmentOsType {
    /**
     * Targets VM instances with OS Inventory enabled and having the following OS architecture.
     */
    osArchitecture?: string | null;
    /**
     * Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
     */
    osShortName?: string | null;
    /**
     * Targets VM instances with OS Inventory enabled and having the following following OS version.
     */
    osVersion?: string | null;
  }
  /**
   * Message for canceling a patch job.
   */
  export interface Schema$CancelPatchJobRequest {}
  /**
   * The effective guest policy that applies to a VM instance.
   */
  export interface Schema$EffectiveGuestPolicy {
    /**
     * List of package repository configurations assigned to the VM instance.
     */
    packageRepositories?: Schema$EffectiveGuestPolicySourcedPackageRepository[];
    /**
     * List of package configurations assigned to the VM instance.
     */
    packages?: Schema$EffectiveGuestPolicySourcedPackage[];
    /**
     * List of recipes assigned to the VM instance.
     */
    softwareRecipes?: Schema$EffectiveGuestPolicySourcedSoftwareRecipe[];
  }
  /**
   * A guest policy package including its source.
   */
  export interface Schema$EffectiveGuestPolicySourcedPackage {
    /**
     * A software package to configure on the VM instance.
     */
    package?: Schema$Package;
    /**
     * Name of the guest policy providing this config.
     */
    source?: string | null;
  }
  /**
   * A guest policy package repository including its source.
   */
  export interface Schema$EffectiveGuestPolicySourcedPackageRepository {
    /**
     * A software package repository to configure on the VM instance.
     */
    packageRepository?: Schema$PackageRepository;
    /**
     * Name of the guest policy providing this config.
     */
    source?: string | null;
  }
  /**
   * A guest policy recipe including its source.
   */
  export interface Schema$EffectiveGuestPolicySourcedSoftwareRecipe {
    /**
     * A software recipe to configure on the VM instance.
     */
    softwareRecipe?: Schema$SoftwareRecipe;
    /**
     * Name of the guest policy providing this config.
     */
    source?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A step that runs an executable for a PatchJob.
   */
  export interface Schema$ExecStep {
    /**
     * The ExecStepConfig for all Linux VMs targeted by the PatchJob.
     */
    linuxExecStepConfig?: Schema$ExecStepConfig;
    /**
     * The ExecStepConfig for all Windows VMs targeted by the PatchJob.
     */
    windowsExecStepConfig?: Schema$ExecStepConfig;
  }
  /**
   * Common configurations for an ExecStep.
   */
  export interface Schema$ExecStepConfig {
    /**
     * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
     */
    allowedSuccessCodes?: number[] | null;
    /**
     * A Google Cloud Storage object containing the executable.
     */
    gcsObject?: Schema$GcsObject;
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: string | null;
    /**
     * An absolute path to the executable on the VM.
     */
    localPath?: string | null;
  }
  /**
   * A request message to initiate patching across Compute Engine instances.
   */
  export interface Schema$ExecutePatchJobRequest {
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This does not have to be unique.
     */
    displayName?: string | null;
    /**
     * If this patch is a dry-run only, instances are contacted but will do nothing.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Patch configuration being applied. If omitted, instances are patched using the default configurations.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
  }
  /**
   * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
   */
  export interface Schema$FixedOrPercent {
    /**
     * Specifies a fixed value.
     */
    fixed?: number | null;
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    percent?: number | null;
  }
  /**
   * Google Cloud Storage object representation.
   */
  export interface Schema$GcsObject {
    /**
     * Required. Bucket of the Google Cloud Storage object.
     */
    bucket?: string | null;
    /**
     * Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
     */
    generationNumber?: string | null;
    /**
     * Required. Name of the Google Cloud Storage object.
     */
    object?: string | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudOsconfigV2beta__OperationMetadata {
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudOsconfigV2__OperationMetadata {
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
   * Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
   */
  export interface Schema$GooRepository {
    /**
     * Required. The name of the repository.
     */
    name?: string | null;
    /**
     * Required. The url of the repository.
     */
    url?: string | null;
  }
  /**
   * Googet patching is performed by running `googet update`.
   */
  export interface Schema$GooSettings {}
  /**
   * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
   */
  export interface Schema$GuestPolicy {
    /**
     * Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts).
     */
    assignment?: Schema$Assignment;
    /**
     * Output only. Time this guest policy was created.
     */
    createTime?: string | null;
    /**
     * Description of the guest policy. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * The etag for this guest policy. If this is provided on update, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     */
    name?: string | null;
    /**
     * A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.
     */
    packageRepositories?: Schema$PackageRepository[];
    /**
     * The software packages to be managed by this policy.
     */
    packages?: Schema$Package[];
    /**
     * A list of Recipes to install on the VM instance.
     */
    recipes?: Schema$SoftwareRecipe[];
    /**
     * Output only. Last time this guest policy was updated.
     */
    updateTime?: string | null;
  }
  /**
   * A response message for listing guest policies.
   */
  export interface Schema$ListGuestPoliciesResponse {
    /**
     * The list of GuestPolicies.
     */
    guestPolicies?: Schema$GuestPolicy[];
    /**
     * A pagination token that can be used to get the next page of guest policies.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response message for listing patch deployments.
   */
  export interface Schema$ListPatchDeploymentsResponse {
    /**
     * A pagination token that can be used to get the next page of patch deployments.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch deployments.
     */
    patchDeployments?: Schema$PatchDeployment[];
  }
  /**
   * A response message for listing the instances details for a patch job.
   */
  export interface Schema$ListPatchJobInstanceDetailsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of instance status.
     */
    patchJobInstanceDetails?: Schema$PatchJobInstanceDetails[];
  }
  /**
   * A response message for listing patch jobs.
   */
  export interface Schema$ListPatchJobsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch jobs.
     */
    patchJobs?: Schema$PatchJob[];
  }
  /**
   * A request message for getting the effective guest policy assigned to the instance.
   */
  export interface Schema$LookupEffectiveGuestPolicyRequest {
    /**
     * Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
     */
    osArchitecture?: string | null;
    /**
     * Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.
     */
    osShortName?: string | null;
    /**
     * Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.
     */
    osVersion?: string | null;
  }
  /**
   * This is proto2's version of MessageSet. DEPRECATED: DO NOT USE FOR NEW FIELDS. If you are using editions or proto2, please make your own extendable messages for your use case. If you are using proto3, please use `Any` instead. MessageSet was the implementation of extensions for proto1. When proto2 was introduced, extensions were implemented as a first-class feature. This schema for MessageSet was meant to be a "bridge" solution to migrate MessageSet-bearing messages from proto1 to proto2. This schema has been open-sourced only to facilitate the migration of Google products with MessageSet-bearing messages to open-source environments.
   */
  export interface Schema$MessageSet {}
  /**
   * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
   */
  export interface Schema$MonthlySchedule {
    /**
     * Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.
     */
    monthDay?: number | null;
    /**
     * Required. Week day in a month.
     */
    weekDayOfMonth?: Schema$WeekDayOfMonth;
  }
  /**
   * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  export interface Schema$OneTimeSchedule {
    /**
     * Required. The desired patch job execution time.
     */
    executeTime?: string | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
   */
  export interface Schema$Package {
    /**
     * The desired_state the agent should maintain for this package. The default is to ensure the package is installed.
     */
    desiredState?: string | null;
    /**
     * Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY.
     */
    manager?: string | null;
    /**
     * Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets.
     */
    name?: string | null;
  }
  /**
   * A package repository.
   */
  export interface Schema$PackageRepository {
    /**
     * An Apt Repository.
     */
    apt?: Schema$AptRepository;
    /**
     * A Goo Repository.
     */
    goo?: Schema$GooRepository;
    /**
     * A Yum Repository.
     */
    yum?: Schema$YumRepository;
    /**
     * A Zypper Repository.
     */
    zypper?: Schema$ZypperRepository;
  }
  /**
   * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
   */
  export interface Schema$PatchConfig {
    /**
     * Apt update settings. Use this setting to override the default `apt` patch rules.
     */
    apt?: Schema$AptSettings;
    /**
     * Goo update settings. Use this setting to override the default `goo` patch rules.
     */
    goo?: Schema$GooSettings;
    /**
     * Allows the patch job to run on Managed instance groups (MIGs).
     */
    migInstancesAllowed?: boolean | null;
    /**
     * The `ExecStep` to run after the patch update.
     */
    postStep?: Schema$ExecStep;
    /**
     * The `ExecStep` to run before the patch update.
     */
    preStep?: Schema$ExecStep;
    /**
     * Post-patch reboot settings.
     */
    rebootConfig?: string | null;
    /**
     * Windows update settings. Use this override the default windows patch rules.
     */
    windowsUpdate?: Schema$WindowsUpdateSettings;
    /**
     * Yum update settings. Use this setting to override the default `yum` patch rules.
     */
    yum?: Schema$YumSettings;
    /**
     * Zypper update settings. Use this setting to override the default `zypper` patch rules.
     */
    zypper?: Schema$ZypperSettings;
  }
  /**
   * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
   */
  export interface Schema$PatchDeployment {
    /**
     * Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Duration of the patch. After the duration ends, the patch times out.
     */
    duration?: string | null;
    /**
     * Required. VM instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    lastExecuteTime?: string | null;
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     */
    name?: string | null;
    /**
     * Required. Schedule a one-time execution.
     */
    oneTimeSchedule?: Schema$OneTimeSchedule;
    /**
     * Optional. Patch configuration that is applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Required. Schedule recurring executions.
     */
    recurringSchedule?: Schema$RecurringSchedule;
    /**
     * Optional. Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
    /**
     * Output only. Current state of the patch deployment.
     */
    state?: string | null;
    /**
     * Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    updateTime?: string | null;
  }
  /**
   * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
   */
  export interface Schema$PatchInstanceFilter {
    /**
     * Target all VM instances in the project. If true, no other criteria is permitted.
     */
    all?: boolean | null;
    /**
     * Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging".
     */
    groupLabels?: Schema$PatchInstanceFilterGroupLabel[];
    /**
     * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-".
     */
    instanceNamePrefixes?: string[] | null;
    /**
     * Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`
     */
    instances?: string[] | null;
    /**
     * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
     */
    zones?: string[] | null;
  }
  /**
   * Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
   */
  export interface Schema$PatchInstanceFilterGroupLabel {
    /**
     * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
   */
  export interface Schema$PatchJob {
    /**
     * Time this patch job was created.
     */
    createTime?: string | null;
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This is not a unique identifier.
     */
    displayName?: string | null;
    /**
     * If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * If this patch job failed, this message provides information about the failure.
     */
    errorMessage?: string | null;
    /**
     * Summary of instance details.
     */
    instanceDetailsSummary?: Schema$PatchJobInstanceDetailsSummary;
    /**
     * Instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Unique identifier for this patch job in the form `projects/x/patchJobs/x`
     */
    name?: string | null;
    /**
     * Patch configuration being applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Output only. Name of the patch deployment that created this patch job.
     */
    patchDeployment?: string | null;
    /**
     * Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.
     */
    percentComplete?: number | null;
    /**
     * Rollout strategy being applied.
     */
    rollout?: Schema$PatchRollout;
    /**
     * The current state of the PatchJob.
     */
    state?: string | null;
    /**
     * Last time this patch job was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
   */
  export interface Schema$PatchJobInstanceDetails {
    /**
     * The number of times the agent that the agent attempts to apply the patch.
     */
    attemptCount?: string | null;
    /**
     * If the patch fails, this field provides the reason.
     */
    failureReason?: string | null;
    /**
     * The unique identifier for the instance. This identifier is defined by the server.
     */
    instanceSystemId?: string | null;
    /**
     * The instance name in the form `projects/x/zones/x/instances/x`
     */
    name?: string | null;
    /**
     * Current state of instance patch.
     */
    state?: string | null;
  }
  /**
   * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
   */
  export interface Schema$PatchJobInstanceDetailsSummary {
    /**
     * Number of instances that have acked and will start shortly.
     */
    ackedInstanceCount?: string | null;
    /**
     * Number of instances that are applying patches.
     */
    applyingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that are downloading patches.
     */
    downloadingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that failed.
     */
    failedInstanceCount?: string | null;
    /**
     * Number of instances that are inactive.
     */
    inactiveInstanceCount?: string | null;
    /**
     * Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.
     */
    noAgentDetectedInstanceCount?: string | null;
    /**
     * Number of instances notified about patch job.
     */
    notifiedInstanceCount?: string | null;
    /**
     * Number of instances pending patch job.
     */
    pendingInstanceCount?: string | null;
    /**
     * Number of instances that are running the post-patch step.
     */
    postPatchStepInstanceCount?: string | null;
    /**
     * Number of instances that are running the pre-patch step.
     */
    prePatchStepInstanceCount?: string | null;
    /**
     * Number of instances rebooting.
     */
    rebootingInstanceCount?: string | null;
    /**
     * Number of instances that have started.
     */
    startedInstanceCount?: string | null;
    /**
     * Number of instances that have completed successfully.
     */
    succeededInstanceCount?: string | null;
    /**
     * Number of instances that require reboot.
     */
    succeededRebootRequiredInstanceCount?: string | null;
    /**
     * Number of instances that exceeded the time out while applying the patch.
     */
    timedOutInstanceCount?: string | null;
  }
  /**
   * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
   */
  export interface Schema$PatchRollout {
    /**
     * The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.
     */
    disruptionBudget?: Schema$FixedOrPercent;
    /**
     * Mode of the patch rollout.
     */
    mode?: string | null;
  }
  /**
   * A request message for pausing a patch deployment.
   */
  export interface Schema$PausePatchDeploymentRequest {}
  /**
   * Sets the time for recurring patch deployments.
   */
  export interface Schema$RecurringSchedule {
    /**
     * Optional. The end time at which a recurring patch deployment schedule is no longer active.
     */
    endTime?: string | null;
    /**
     * Required. The frequency unit of this recurring schedule.
     */
    frequency?: string | null;
    /**
     * Output only. The time the last patch job ran successfully.
     */
    lastExecuteTime?: string | null;
    /**
     * Required. Schedule with monthly executions.
     */
    monthly?: Schema$MonthlySchedule;
    /**
     * Output only. The time the next patch job is scheduled to run.
     */
    nextExecuteTime?: string | null;
    /**
     * Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
     */
    startTime?: string | null;
    /**
     * Required. Time of the day to run a recurring deployment.
     */
    timeOfDay?: Schema$TimeOfDay;
    /**
     * Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * Required. Schedule with weekly executions.
     */
    weekly?: Schema$WeeklySchedule;
  }
  /**
   * A request message for resuming a patch deployment.
   */
  export interface Schema$ResumePatchDeploymentRequest {}
  /**
   * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
   */
  export interface Schema$SoftwareRecipe {
    /**
     * Resources available to be used in the steps in the recipe.
     */
    artifacts?: Schema$SoftwareRecipeArtifact[];
    /**
     * Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.
     */
    desiredState?: string | null;
    /**
     * Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.
     */
    installSteps?: Schema$SoftwareRecipeStep[];
    /**
     * Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.
     */
    name?: string | null;
    /**
     * Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.
     */
    updateSteps?: Schema$SoftwareRecipeStep[];
    /**
     * The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).
     */
    version?: string | null;
  }
  /**
   * Specifies a resource to be used in the recipe.
   */
  export interface Schema$SoftwareRecipeArtifact {
    /**
     * Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified.
     */
    allowInsecure?: boolean | null;
    /**
     * A Google Cloud Storage artifact.
     */
    gcs?: Schema$SoftwareRecipeArtifactGcs;
    /**
     * Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id.
     */
    id?: string | null;
    /**
     * A generic remote artifact.
     */
    remote?: Schema$SoftwareRecipeArtifactRemote;
  }
  /**
   * Specifies an artifact available as a Google Cloud Storage object.
   */
  export interface Schema$SoftwareRecipeArtifactGcs {
    /**
     * Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.
     */
    bucket?: string | null;
    /**
     * Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.
     */
    generation?: string | null;
    /**
     * Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`.
     */
    object?: string | null;
  }
  /**
   * Specifies an artifact available via some URI.
   */
  export interface Schema$SoftwareRecipeArtifactRemote {
    /**
     * Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps.
     */
    checksum?: string | null;
    /**
     * URI from which to fetch the object. It should contain both the protocol and path following the format {protocol\}://{location\}.
     */
    uri?: string | null;
  }
  /**
   * An action that can be taken as part of installing or updating a recipe.
   */
  export interface Schema$SoftwareRecipeStep {
    /**
     * Extracts an archive into the specified directory.
     */
    archiveExtraction?: Schema$SoftwareRecipeStepExtractArchive;
    /**
     * Installs a deb file via dpkg.
     */
    dpkgInstallation?: Schema$SoftwareRecipeStepInstallDpkg;
    /**
     * Copies a file onto the instance.
     */
    fileCopy?: Schema$SoftwareRecipeStepCopyFile;
    /**
     * Executes an artifact or local file.
     */
    fileExec?: Schema$SoftwareRecipeStepExecFile;
    /**
     * Installs an MSI file.
     */
    msiInstallation?: Schema$SoftwareRecipeStepInstallMsi;
    /**
     * Installs an rpm file via the rpm utility.
     */
    rpmInstallation?: Schema$SoftwareRecipeStepInstallRpm;
    /**
     * Runs commands in a shell.
     */
    scriptRun?: Schema$SoftwareRecipeStepRunScript;
  }
  /**
   * Copies the artifact to the specified path on the instance.
   */
  export interface Schema$SoftwareRecipeStepCopyFile {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
    /**
     * Required. The absolute path on the instance to put the file.
     */
    destination?: string | null;
    /**
     * Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.
     */
    overwrite?: boolean | null;
    /**
     * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
     */
    permissions?: string | null;
  }
  /**
   * Executes an artifact or local file.
   */
  export interface Schema$SoftwareRecipeStepExecFile {
    /**
     * Defaults to [0]. A list of possible return values that the program can return to indicate a success.
     */
    allowedExitCodes?: number[] | null;
    /**
     * Arguments to be passed to the provided executable.
     */
    args?: string[] | null;
    /**
     * The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
    /**
     * The absolute path of the file on the local filesystem.
     */
    localPath?: string | null;
  }
  /**
   * Extracts an archive of the type specified in the specified directory.
   */
  export interface Schema$SoftwareRecipeStepExtractArchive {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
    /**
     * Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows.
     */
    destination?: string | null;
    /**
     * Required. The type of the archive to extract.
     */
    type?: string | null;
  }
  /**
   * Installs a deb via dpkg.
   */
  export interface Schema$SoftwareRecipeStepInstallDpkg {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
  }
  /**
   * Installs an MSI file.
   */
  export interface Schema$SoftwareRecipeStepInstallMsi {
    /**
     * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
     */
    allowedExitCodes?: number[] | null;
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
    /**
     * The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag).
     */
    flags?: string[] | null;
  }
  /**
   * Installs an rpm file via the rpm utility.
   */
  export interface Schema$SoftwareRecipeStepInstallRpm {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string | null;
  }
  /**
   * Runs a script through an interpreter.
   */
  export interface Schema$SoftwareRecipeStepRunScript {
    /**
     * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
     */
    allowedExitCodes?: number[] | null;
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: string | null;
    /**
     * Required. The shell script to be executed.
     */
    script?: string | null;
  }
  /**
   * Wire-format for a Status object
   */
  export interface Schema$StatusProto {
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
    messageSet?: Schema$MessageSet;
    /**
     * copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs
     */
    space?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
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
   * Represents one week day in a month. An example is "the 4th Sunday".
   */
  export interface Schema$WeekDayOfMonth {
    /**
     * Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30].
     */
    dayOffset?: number | null;
    /**
     * Required. A day of the week.
     */
    dayOfWeek?: string | null;
    /**
     * Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
     */
    weekOrdinal?: number | null;
  }
  /**
   * Represents a weekly schedule.
   */
  export interface Schema$WeeklySchedule {
    /**
     * Required. Day of the week.
     */
    dayOfWeek?: string | null;
  }
  /**
   * Windows patching is performed using the Windows Update Agent.
   */
  export interface Schema$WindowsUpdateSettings {
    /**
     * Only apply updates of these windows update classifications. If empty, all updates are applied.
     */
    classifications?: string[] | null;
    /**
     * List of KBs to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
     */
    exclusivePatches?: string[] | null;
  }
  /**
   * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
   */
  export interface Schema$YumRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
     */
    id?: string | null;
  }
  /**
   * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
   */
  export interface Schema$YumSettings {
    /**
     * List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * Will cause patch to run `yum update-minimal` instead.
     */
    minimal?: boolean | null;
    /**
     * Adds the `--security` flag to `yum update`. Not supported on all platforms.
     */
    security?: boolean | null;
  }
  /**
   * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
   */
  export interface Schema$ZypperRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
     */
    id?: string | null;
  }
  /**
   * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
   */
  export interface Schema$ZypperSettings {
    /**
     * Install only patches with these categories. Common categories include security, recommended, and feature.
     */
    categories?: string[] | null;
    /**
     * List of patches to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.
     */
    exclusivePatches?: string[] | null;
    /**
     * Install only patches with these severities. Common severities include critical, important, moderate, and low.
     */
    severities?: string[] | null;
    /**
     * Adds the `--with-optional` flag to `zypper patch`.
     */
    withOptional?: boolean | null;
    /**
     * Adds the `--with-update` flag, to `zypper patch`.
     */
    withUpdate?: boolean | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    guestPolicies: Resource$Projects$Guestpolicies;
    patchDeployments: Resource$Projects$Patchdeployments;
    patchJobs: Resource$Projects$Patchjobs;
    zones: Resource$Projects$Zones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.guestPolicies = new Resource$Projects$Guestpolicies(this.context);
      this.patchDeployments = new Resource$Projects$Patchdeployments(
        this.context
      );
      this.patchJobs = new Resource$Projects$Patchjobs(this.context);
      this.zones = new Resource$Projects$Zones(this.context);
    }
  }

  export class Resource$Projects$Guestpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an OS Config guest policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.guestPolicies.create({
     *     // Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     *     guestPolicyId: 'placeholder-value',
     *     // Required. The resource name of the parent using one of the following forms: `projects/{project_number\}`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignment": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "packageRepositories": [],
     *       //   "packages": [],
     *       //   "recipes": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignment": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "packageRepositories": [],
     *   //   "packages": [],
     *   //   "recipes": [],
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
    create(
      params: Params$Resource$Projects$Guestpolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Guestpolicies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>;
    create(
      params: Params$Resource$Projects$Guestpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Guestpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$GuestPolicy>,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Guestpolicies$Create,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$GuestPolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Guestpolicies$Create
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Guestpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Guestpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/guestPolicies').replace(
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
        createAPIRequest<Schema$GuestPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuestPolicy>(parameters);
      }
    }

    /**
     * Delete an OS Config guest policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.guestPolicies.delete({
     *     // Required. The resource name of the guest policy using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     *     name: 'projects/my-project/guestPolicies/my-guestPolicie',
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
      params: Params$Resource$Projects$Guestpolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Guestpolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Guestpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Guestpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Guestpolicies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Guestpolicies$Delete
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
        {}) as Params$Resource$Projects$Guestpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Guestpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get an OS Config guest policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.guestPolicies.get({
     *     // Required. The resource name of the guest policy using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     *     name: 'projects/my-project/guestPolicies/my-guestPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignment": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "packageRepositories": [],
     *   //   "packages": [],
     *   //   "recipes": [],
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
      params: Params$Resource$Projects$Guestpolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Guestpolicies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>;
    get(
      params: Params$Resource$Projects$Guestpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Guestpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GuestPolicy>,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Guestpolicies$Get,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$GuestPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Guestpolicies$Get
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Guestpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Guestpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GuestPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuestPolicy>(parameters);
      }
    }

    /**
     * Get a page of OS Config guest policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.guestPolicies.list({
     *     // The maximum number of guest policies to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent using one of the following forms: `projects/{project_number\}`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "guestPolicies": [],
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
      params: Params$Resource$Projects$Guestpolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Guestpolicies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGuestPoliciesResponse>>;
    list(
      params: Params$Resource$Projects$Guestpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Guestpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGuestPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListGuestPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Guestpolicies$List,
      callback: BodyResponseCallback<Schema$ListGuestPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGuestPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Guestpolicies$List
        | BodyResponseCallback<Schema$ListGuestPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGuestPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGuestPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGuestPoliciesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Guestpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Guestpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/guestPolicies').replace(
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
        createAPIRequest<Schema$ListGuestPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGuestPoliciesResponse>(parameters);
      }
    }

    /**
     * Update an OS Config guest policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.guestPolicies.patch({
     *     // Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     *     name: 'projects/my-project/guestPolicies/my-guestPolicie',
     *     // Field mask that controls which fields of the guest policy should be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignment": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "packageRepositories": [],
     *       //   "packages": [],
     *       //   "recipes": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignment": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "packageRepositories": [],
     *   //   "packages": [],
     *   //   "recipes": [],
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
    patch(
      params: Params$Resource$Projects$Guestpolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Guestpolicies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>;
    patch(
      params: Params$Resource$Projects$Guestpolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Guestpolicies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GuestPolicy>,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    patch(
      params: Params$Resource$Projects$Guestpolicies$Patch,
      callback: BodyResponseCallback<Schema$GuestPolicy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GuestPolicy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Guestpolicies$Patch
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuestPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GuestPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Guestpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Guestpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GuestPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuestPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Guestpolicies$Create
    extends StandardParameters {
    /**
     * Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    guestPolicyId?: string;
    /**
     * Required. The resource name of the parent using one of the following forms: `projects/{project_number\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GuestPolicy;
  }
  export interface Params$Resource$Projects$Guestpolicies$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the guest policy using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Guestpolicies$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the guest policy using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Guestpolicies$List
    extends StandardParameters {
    /**
     * The maximum number of guest policies to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent using one of the following forms: `projects/{project_number\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Guestpolicies$Patch
    extends StandardParameters {
    /**
     * Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number\}/guestPolicies/{guest_policy_id\}`.
     */
    name?: string;
    /**
     * Field mask that controls which fields of the guest policy should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GuestPolicy;
  }

  export class Resource$Projects$Patchdeployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.create({
     *     // Required. The project to apply this patch deployment to in the form `projects/x`.
     *     parent: 'projects/my-project',
     *     // Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     *     patchDeploymentId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "lastExecuteTime": "my_lastExecuteTime",
     *       //   "name": "my_name",
     *       //   "oneTimeSchedule": {},
     *       //   "patchConfig": {},
     *       //   "recurringSchedule": {},
     *       //   "rollout": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Patchdeployments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Create
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/patchDeployments').replace(
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Delete an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.delete({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Patchdeployments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Delete
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
        {}) as Params$Resource$Projects$Patchdeployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.get({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Patchdeployments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Get
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Get a page of OS Config patch deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.list({
     *     // Optional. The maximum number of patch deployments to return. Default is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent in the form `projects/x`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchDeployments": []
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
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Patchdeployments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPatchDeploymentsResponse>>;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$List
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPatchDeploymentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/patchDeployments').replace(
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
        createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.patch({
     *     // Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *     // Optional. Field mask that controls which fields of the patch deployment should be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "lastExecuteTime": "my_lastExecuteTime",
     *       //   "name": "my_name",
     *       //   "oneTimeSchedule": {},
     *       //   "patchConfig": {},
     *       //   "recurringSchedule": {},
     *       //   "rollout": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Patchdeployments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Patch
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.pause({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    pause(
      params?: Params$Resource$Projects$Patchdeployments$Pause,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    pause(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Pause
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:pause').replace(
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchDeployments.resume({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resume(
      params?: Params$Resource$Projects$Patchdeployments$Resume,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    resume(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Resume
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchDeployment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:resume').replace(
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchdeployments$Create
    extends StandardParameters {
    /**
     * Required. The project to apply this patch deployment to in the form `projects/x`.
     */
    parent?: string;
    /**
     * Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    patchDeploymentId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchDeployment;
  }
  export interface Params$Resource$Projects$Patchdeployments$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of patch deployments to return. Default is 100.
     */
    pageSize?: number;
    /**
     * Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent in the form `projects/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$Patch
    extends StandardParameters {
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     */
    name?: string;
    /**
     * Optional. Field mask that controls which fields of the patch deployment should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchDeployment;
  }
  export interface Params$Resource$Projects$Patchdeployments$Pause
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PausePatchDeploymentRequest;
  }
  export interface Params$Resource$Projects$Patchdeployments$Resume
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumePatchDeploymentRequest;
  }

  export class Resource$Projects$Patchjobs {
    context: APIRequestContext;
    instanceDetails: Resource$Projects$Patchjobs$Instancedetails;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instanceDetails = new Resource$Projects$Patchjobs$Instancedetails(
        this.context
      );
    }

    /**
     * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchJobs.cancel({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
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
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Patchjobs$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$PatchJob>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Cancel
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:cancel').replace(
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Patch VM instances by creating and running a patch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchJobs.execute({
     *     // Required. The project in which to run this patch in the form `projects/x`
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "dryRun": false,
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "patchConfig": {},
     *       //   "rollout": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    execute(
      params?: Params$Resource$Projects$Patchjobs$Execute,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(callback: BodyResponseCallback<Schema$PatchJob>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Execute
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/patchJobs:execute').replace(
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchJobs.get({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Patchjobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Get
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PatchJob>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Get a list of patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchJobs.list({
     *     // If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance status to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. In the form of `projects/x`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobs": []
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
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Patchjobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPatchJobsResponse>>;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPatchJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$List
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPatchJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/patchJobs').replace(
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
        createAPIRequest<Schema$ListPatchJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelPatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Execute
    extends StandardParameters {
    /**
     * Required. The project in which to run this patch in the form `projects/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecutePatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchjobs$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     */
    filter?: string;
    /**
     * The maximum number of instance status to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. In the form of `projects/x`
     */
    parent?: string;
  }

  export class Resource$Projects$Patchjobs$Instancedetails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a list of instance details for a given patch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *   const res = await osconfig.projects.patchJobs.instanceDetails.list({
     *     // A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance details records to return. Default is 100.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     *     parent: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobInstanceDetails": []
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
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListPatchJobInstanceDetailsResponse>
    >;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Instancedetails$List
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListPatchJobInstanceDetailsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Instancedetails$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Instancedetails$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/instanceDetails').replace(
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
        createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Instancedetails$List
    extends StandardParameters {
    /**
     * A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     */
    filter?: string;
    /**
     * The maximum number of instance details records to return. Default is 100.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Zones {
    context: APIRequestContext;
    instances: Resource$Projects$Zones$Instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Zones$Instances(this.context);
    }
  }

  export class Resource$Projects$Zones$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
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
     * const osconfig = google.osconfig('v1beta');
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
     *     await osconfig.projects.zones.instances.lookupEffectiveGuestPolicy({
     *       // Required. The VM instance whose policies are being looked up.
     *       instance: 'projects/my-project/zones/my-zone/instances/my-instance',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "osArchitecture": "my_osArchitecture",
     *         //   "osShortName": "my_osShortName",
     *         //   "osVersion": "my_osVersion"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "packageRepositories": [],
     *   //   "packages": [],
     *   //   "softwareRecipes": []
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
    lookupEffectiveGuestPolicy(
      params: Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupEffectiveGuestPolicy(
      params?: Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EffectiveGuestPolicy>>;
    lookupEffectiveGuestPolicy(
      params: Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupEffectiveGuestPolicy(
      params: Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EffectiveGuestPolicy>,
      callback: BodyResponseCallback<Schema$EffectiveGuestPolicy>
    ): void;
    lookupEffectiveGuestPolicy(
      params: Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy,
      callback: BodyResponseCallback<Schema$EffectiveGuestPolicy>
    ): void;
    lookupEffectiveGuestPolicy(
      callback: BodyResponseCallback<Schema$EffectiveGuestPolicy>
    ): void;
    lookupEffectiveGuestPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy
        | BodyResponseCallback<Schema$EffectiveGuestPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EffectiveGuestPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EffectiveGuestPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EffectiveGuestPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+instance}:lookupEffectiveGuestPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['instance'],
        pathParams: ['instance'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EffectiveGuestPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EffectiveGuestPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Zones$Instances$Lookupeffectiveguestpolicy
    extends StandardParameters {
    /**
     * Required. The VM instance whose policies are being looked up.
     */
    instance?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupEffectiveGuestPolicyRequest;
  }
}
