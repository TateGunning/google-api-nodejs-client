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

export namespace billingbudgets_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Billing Budget API
   *
   * The Cloud Billing Budget API stores Cloud Billing budgets, which define a budget plan and the rules to execute as spend is tracked against that plan.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const billingbudgets = google.billingbudgets('v1beta1');
   * ```
   */
  export class Billingbudgets {
    context: APIRequestContext;
    billingAccounts: Resource$Billingaccounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
    }
  }

  /**
   * AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1AllUpdatesRule {
    /**
     * Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.
     */
    disableDefaultIamRecipients?: boolean | null;
    /**
     * Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured. Currently, project level recipients are the users with `Owner` role on a cloud project.
     */
    enableProjectLevelRecipients?: boolean | null;
    /**
     * Optional. Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST resource name of a monitoring notification channel with the form `projects/{project_id\}/notificationChannels/{channel_id\}`. A maximum of 5 channels are allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details.
     */
    monitoringNotificationChannels?: string[] | null;
    /**
     * Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id\}/topics/{topic_id\}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions.
     */
    pubsubTopic?: string | null;
    /**
     * Optional. Required when AllUpdatesRule.pubsub_topic is set. The schema version of the notification sent to AllUpdatesRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format.
     */
    schemaVersion?: string | null;
  }
  /**
   * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1Budget {
    /**
     * Optional. Rules to apply to notifications sent based on budget spend and thresholds.
     */
    allUpdatesRule?: Schema$GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    /**
     * Required. Budgeted amount.
     */
    amount?: Schema$GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    /**
     * Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.
     */
    budgetFilter?: Schema$GoogleCloudBillingBudgetsV1beta1Filter;
    /**
     * User data for display name in UI. Validation: <= 60 chars.
     */
    displayName?: string | null;
    /**
     * Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
     */
    etag?: string | null;
    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     */
    name?: string | null;
    ownershipScope?: string | null;
    /**
     * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications.
     */
    thresholdRules?: Schema$GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
  }
  /**
   * The budgeted amount for each usage period.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1BudgetAmount {
    /**
     * Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a Filter.calendar_period. It cannot be set in combination with Filter.custom_period.
     */
    lastPeriodAmount?: Schema$GoogleCloudBillingBudgetsV1beta1LastPeriodAmount;
    /**
     * A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output.
     */
    specifiedAmount?: Schema$GoogleTypeMoney;
  }
  /**
   * Request for CreateBudget
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest {
    /**
     * Required. Budget to create.
     */
    budget?: Schema$GoogleCloudBillingBudgetsV1beta1Budget;
  }
  /**
   * All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1CustomPeriod {
    /**
     * Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date.
     */
    endDate?: Schema$GoogleTypeDate;
    /**
     * Required. The start date must be after January 1, 2017.
     */
    startDate?: Schema$GoogleTypeDate;
  }
  /**
   * A filter for a budget, limiting the scope of the cost to calculate.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1Filter {
    /**
     * Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on.
     */
    calendarPeriod?: string | null;
    /**
     * Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See [a list of acceptable credit type values](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#credits-type). If Filter.credit_types_treatment is **not** INCLUDE_SPECIFIED_CREDITS, this field must be empty.
     */
    creditTypes?: string[] | null;
    /**
     * Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
     */
    creditTypesTreatment?: string | null;
    /**
     * Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.
     */
    customPeriod?: Schema$GoogleCloudBillingBudgetsV1beta1CustomPeriod;
    /**
     * Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report will include all labeled and unlabeled usage. An object containing a single `"key": value` pair. Example: `{ "name": "wrench" \}`. _Currently, multiple entries or multiple values per entry are not allowed._
     */
    labels?: {[key: string]: any[]} | null;
    /**
     * Optional. A set of projects of the form `projects/{project\}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will include all usage for the billing account, regardless of which project the usage occurred on.
     */
    projects?: string[] | null;
    /**
     * Optional. A set of folder and organization names of the form `folders/{folderId\}` or `organizations/{organizationId\}`, specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget *doesn't* apply to those projects.
     */
    resourceAncestors?: string[] | null;
    /**
     * Optional. A set of services of the form `services/{service_id\}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
     */
    services?: string[] | null;
    /**
     * Optional. A set of subaccounts of the form `billingAccounts/{account_id\}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If omitted, the report will include usage from the parent account and all subaccounts, if they exist.
     */
    subaccounts?: string[] | null;
  }
  /**
   * Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. Future configuration options will be described here (for example, configuring a percentage of last period's spend). LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period.
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1LastPeriodAmount {}
  /**
   * Response for ListBudgets
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse {
    /**
     * List of the budgets owned by the requested billing account.
     */
    budgets?: Schema$GoogleCloudBillingBudgetsV1beta1Budget[];
    /**
     * If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`.
     */
    nextPageToken?: string | null;
  }
  /**
   * ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1ThresholdRule {
    /**
     * Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set.
     */
    spendBasis?: string | null;
    /**
     * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
     */
    thresholdPercent?: number | null;
  }
  /**
   * Request for UpdateBudget
   */
  export interface Schema$GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest {
    /**
     * Required. The updated budget object. The budget to update is specified by the budget name in the budget.
     */
    budget?: Schema$GoogleCloudBillingBudgetsV1beta1Budget;
    /**
     * Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
     */
    updateMask?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
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
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
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

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    budgets: Resource$Billingaccounts$Budgets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.budgets = new Resource$Billingaccounts$Budgets(this.context);
    }
  }

  export class Resource$Billingaccounts$Budgets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/billingbudgets.googleapis.com
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
     * const billingbudgets = google.billingbudgets('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await billingbudgets.billingAccounts.budgets.create({
     *     // Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId\}`.
     *     parent: 'billingAccounts/my-billingAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "budget": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allUpdatesRule": {},
     *   //   "amount": {},
     *   //   "budgetFilter": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "ownershipScope": "my_ownershipScope",
     *   //   "thresholdRules": []
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
      params: Params$Resource$Billingaccounts$Budgets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Billingaccounts$Budgets$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    >;
    create(
      params: Params$Resource$Billingaccounts$Budgets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Billingaccounts$Budgets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    create(
      params: Params$Resource$Billingaccounts$Budgets$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Create
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/budgets').replace(
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
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }

    /**
     * Deletes a budget. Returns successfully if already deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/billingbudgets.googleapis.com
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
     * const billingbudgets = google.billingbudgets('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await billingbudgets.billingAccounts.budgets.delete({
     *     // Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     *     name: 'billingAccounts/my-billingAccount/budgets/my-budget',
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
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Billingaccounts$Budgets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Budgets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Delete
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
        {}) as Params$Resource$Billingaccounts$Budgets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/billingbudgets.googleapis.com
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
     * const billingbudgets = google.billingbudgets('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await billingbudgets.billingAccounts.budgets.get({
     *     // Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     *     name: 'billingAccounts/my-billingAccount/budgets/my-budget',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allUpdatesRule": {},
     *   //   "amount": {},
     *   //   "budgetFilter": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "ownershipScope": "my_ownershipScope",
     *   //   "thresholdRules": []
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
      params: Params$Resource$Billingaccounts$Budgets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Budgets$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    >;
    get(
      params: Params$Resource$Billingaccounts$Budgets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Budgets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Budgets$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }

    /**
     * Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/billingbudgets.googleapis.com
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
     * const billingbudgets = google.billingbudgets('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await billingbudgets.billingAccounts.budgets.list({
     *     // Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId\}`.
     *     parent: 'billingAccounts/my-billingAccount',
     *     // Optional. Set the scope of the budgets to be returned, in the format of the resource name. The scope of a budget is the cost that it tracks, such as costs for a single project, or the costs for all projects in a folder. Only project scope (in the format of "projects/project-id" or "projects/123") is supported in this field. When this field is set to a project's resource name, the budgets returned are tracking the costs for that project.
     *     scope: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "budgets": [],
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
      params: Params$Resource$Billingaccounts$Budgets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Budgets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Budgets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Budgets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Budgets$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/budgets').replace(
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
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/billingbudgets.googleapis.com
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
     * const billingbudgets = google.billingbudgets('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await billingbudgets.billingAccounts.budgets.patch({
     *     // Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     *     name: 'billingAccounts/my-billingAccount/budgets/my-budget',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "budget": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allUpdatesRule": {},
     *   //   "amount": {},
     *   //   "budgetFilter": {},
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "ownershipScope": "my_ownershipScope",
     *   //   "thresholdRules": []
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
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Billingaccounts$Budgets$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    >;
    patch(
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    patch(
      params: Params$Resource$Billingaccounts$Budgets$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Budgets$Patch
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBudgetsV1beta1Budget>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Budgets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Budgets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://billingbudgets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBudgetsV1beta1Budget>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Budgets$Create
    extends StandardParameters {
    /**
     * Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Delete
    extends StandardParameters {
    /**
     * Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Get
    extends StandardParameters {
    /**
     * Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
     */
    pageSize?: number;
    /**
     * Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId\}`.
     */
    parent?: string;
    /**
     * Optional. Set the scope of the budgets to be returned, in the format of the resource name. The scope of a budget is the cost that it tracks, such as costs for a single project, or the costs for all projects in a folder. Only project scope (in the format of "projects/project-id" or "projects/123") is supported in this field. When this field is set to a project's resource name, the budgets returned are tracking the costs for that project.
     */
    scope?: string;
  }
  export interface Params$Resource$Billingaccounts$Budgets$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId\}/budgets/{budgetId\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest;
  }
}
