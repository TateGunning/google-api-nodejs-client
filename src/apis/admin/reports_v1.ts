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

export namespace admin_reports_v1 {
  export interface Options extends GlobalOptions {
    version: 'reports_v1';
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
   * Admin SDK API
   *
   * Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const admin = google.admin('reports_v1');
   * ```
   */
  export class Admin {
    context: APIRequestContext;
    activities: Resource$Activities;
    channels: Resource$Channels;
    customerUsageReports: Resource$Customerusagereports;
    entityUsageReports: Resource$Entityusagereports;
    userUsageReport: Resource$Userusagereport;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activities = new Resource$Activities(this.context);
      this.channels = new Resource$Channels(this.context);
      this.customerUsageReports = new Resource$Customerusagereports(
        this.context
      );
      this.entityUsageReports = new Resource$Entityusagereports(this.context);
      this.userUsageReport = new Resource$Userusagereport(this.context);
    }
  }

  /**
   * JSON template for a collection of activities.
   */
  export interface Schema$Activities {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Each activity record in the response.
     */
    items?: Schema$Activity[];
    /**
     * The type of API resource. For an activity report, the value is `reports#activities`.
     */
    kind?: string | null;
    /**
     * Token for retrieving the follow-on next page of the report. The `nextPageToken` value is used in the request's `pageToken` query string.
     */
    nextPageToken?: string | null;
  }
  /**
   * JSON template for the activity resource.
   */
  export interface Schema$Activity {
    /**
     * User doing the action.
     */
    actor?: {
      applicationInfo?: {
        applicationName?: string;
        impersonation?: boolean;
        oauthClientId?: string;
      };
      callerType?: string;
      email?: string;
      key?: string;
      profileId?: string;
    } | null;
    /**
     * ETag of the entry.
     */
    etag?: string | null;
    /**
     * Activity events in the report.
     */
    events?: Array<{
      name?: string;
      parameters?: Array<{
        boolValue?: boolean;
        intValue?: string;
        messageValue?: {parameter?: Schema$NestedParameter[]};
        multiIntValue?: string[];
        multiMessageValue?: Array<{parameter?: Schema$NestedParameter[]}>;
        multiValue?: string[];
        name?: string;
        value?: string;
      }>;
      resourceIds?: string[];
      type?: string;
    }> | null;
    /**
     * Unique identifier for each activity record.
     */
    id?: {
      applicationName?: string;
      customerId?: string;
      time?: string;
      uniqueQualifier?: string;
    } | null;
    /**
     * IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace, which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports IPv4 and IPv6.
     */
    ipAddress?: string | null;
    /**
     * The type of API resource. For an activity report, the value is `audit#activity`.
     */
    kind?: string | null;
    /**
     * Network information of the user doing the action.
     */
    networkInfo?: Schema$ActivityNetworkInfo;
    /**
     * This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner.
     */
    ownerDomain?: string | null;
    /**
     * Details of the resource on which the action was performed.
     */
    resourceDetails?: Schema$ResourceDetails[];
  }
  /**
   * Network information of the user doing the action.
   */
  export interface Schema$ActivityNetworkInfo {
    /**
     * IP Address of the user doing the action.
     */
    ipAsn?: number[] | null;
    /**
     * ISO 3166-1 alpha-2 region code of the user doing the action.
     */
    regionCode?: string | null;
    /**
     * ISO 3166-2 region code (states and provinces) for countries of the user doing the action.
     */
    subdivisionCode?: string | null;
  }
  /**
   * Details of the label applied on the resource.
   */
  export interface Schema$AppliedLabel {
    /**
     * List of fields which are part of the label and have been set by the user. If label has a field which was not set by the user, it would not be present in this list.
     */
    fieldValues?: Schema$FieldValue[];
    /**
     * Identifier of the label - Only the label id, not the full OnePlatform resource name.
     */
    id?: string | null;
    /**
     * The reason why the label was applied on the resource.
     */
    reason?: Schema$Reason;
    /**
     * Title of the label
     */
    title?: string | null;
  }
  /**
   * A notification channel used to watch for resource changes.
   */
  export interface Schema$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string | null;
    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string | null;
    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string | null;
    /**
     * Identifies this as a notification channel used to watch for changes to a resource, which is "`api#channel`".
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. A payload is data that is sent in the body of an HTTP POST, PUT, or PATCH message and contains important information about the request. Optional.
     */
    payload?: boolean | null;
    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string | null;
    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string | null;
    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string | null;
    /**
     * The type of delivery mechanism used for this channel. The value should be set to `"web_hook"`.
     */
    type?: string | null;
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
   * Details of the field value set by the user for the particular label.
   */
  export interface Schema$FieldValue {
    /**
     * Setting a date value.
     */
    dateValue?: Schema$Date;
    /**
     * Display name of the field
     */
    displayName?: string | null;
    /**
     * Identifier of the field
     */
    id?: string | null;
    /**
     * Setting an integer value.
     */
    integerValue?: string | null;
    /**
     * Setting a long text value.
     */
    longTextValue?: string | null;
    /**
     * The reason why the field was applied to the label.
     */
    reason?: Schema$Reason;
    /**
     * Setting a selection list value by selecting multiple values from a dropdown.
     */
    selectionListValue?: Schema$FieldValueSelectionListValue;
    /**
     * Setting a selection value by selecting a single value from a dropdown.
     */
    selectionValue?: Schema$FieldValueSelectionValue;
    /**
     * Setting a text list value.
     */
    textListValue?: Schema$FieldValueTextListValue;
    /**
     * Setting a text value.
     */
    textValue?: string | null;
    /**
     * Type of the field
     */
    type?: string | null;
    /**
     * If the field is unset, this will be true.
     */
    unsetValue?: boolean | null;
    /**
     * Setting a user list value by selecting multiple users.
     */
    userListValue?: Schema$FieldValueUserListValue;
    /**
     * Setting a user value by selecting a single user.
     */
    userValue?: Schema$FieldValueUserValue;
  }
  /**
   * Setting a selection list value by selecting multiple values from a dropdown.
   */
  export interface Schema$FieldValueSelectionListValue {
    /**
     * List of selections.
     */
    values?: Schema$FieldValueSelectionValue[];
  }
  /**
   * Setting a selection value by selecting a single value from a dropdown.
   */
  export interface Schema$FieldValueSelectionValue {
    /**
     * Whether the selection is badged.
     */
    badged?: boolean | null;
    /**
     * Display name of the selection.
     */
    displayName?: string | null;
    /**
     * Identifier of the selection.
     */
    id?: string | null;
  }
  /**
   * Setting a text list value.
   */
  export interface Schema$FieldValueTextListValue {
    /**
     * List of text values.
     */
    values?: string[] | null;
  }
  /**
   * Setting a user list value by selecting multiple users.
   */
  export interface Schema$FieldValueUserListValue {
    /**
     * List of users.
     */
    values?: Schema$FieldValueUserValue[];
  }
  /**
   * Setting a user value by selecting a single user.
   */
  export interface Schema$FieldValueUserValue {
    /**
     * Email of the user.
     */
    email?: string | null;
  }
  /**
   * JSON template for a parameter used in various reports.
   */
  export interface Schema$NestedParameter {
    /**
     * Boolean value of the parameter.
     */
    boolValue?: boolean | null;
    /**
     * Integer value of the parameter.
     */
    intValue?: string | null;
    /**
     * Multiple boolean values of the parameter.
     */
    multiBoolValue?: boolean[] | null;
    /**
     * Multiple integer values of the parameter.
     */
    multiIntValue?: string[] | null;
    /**
     * Multiple string values of the parameter.
     */
    multiValue?: string[] | null;
    /**
     * The name of the parameter.
     */
    name?: string | null;
    /**
     * String value of the parameter.
     */
    value?: string | null;
  }
  /**
   * The reason why the label/field was applied.
   */
  export interface Schema$Reason {
    /**
     * The type of the reason.
     */
    reasonType?: string | null;
  }
  /**
   * Details of the resource on which the action was performed.
   */
  export interface Schema$ResourceDetails {
    /**
     * List of labels applied on the resource
     */
    appliedLabels?: Schema$AppliedLabel[];
    /**
     * Identifier of the resource.
     */
    id?: string | null;
    /**
     * Defines relationship of the resource to the events
     */
    relation?: string | null;
    /**
     * Title of the resource. For instance, in case of a drive document, this would be the title of the document. In case of an email, this would be the subject.
     */
    title?: string | null;
    /**
     * Type of the resource - document, email, chat message
     */
    type?: string | null;
  }
  /**
   * JSON template for a usage report.
   */
  export interface Schema$UsageReport {
    /**
     * Output only. The date of the report request.
     */
    date?: string | null;
    /**
     * Output only. Information about the type of the item.
     */
    entity?: {
      customerId?: string;
      entityId?: string;
      profileId?: string;
      type?: string;
      userEmail?: string;
    } | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of API resource. For a usage report, the value is `admin#reports#usageReport`.
     */
    kind?: string | null;
    /**
     * Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the Entity Usage parameters reference](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/entities).
     */
    parameters?: Array<{
      boolValue?: boolean;
      datetimeValue?: string;
      intValue?: string;
      msgValue?: Array<{[key: string]: any}>;
      name?: string;
      stringValue?: string;
    }> | null;
  }
  export interface Schema$UsageReports {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The type of API resource. For a usage report, the value is `admin#reports#usageReports`.
     */
    kind?: string | null;
    /**
     * Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
     */
    nextPageToken?: string | null;
    /**
     * Various application parameter records.
     */
    usageReports?: Schema$UsageReport[];
    /**
     * Warnings, if any.
     */
    warnings?: Array<{
      code?: string;
      data?: Array<{key?: string; value?: string}>;
      message?: string;
    }> | null;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.audit.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await reports.activities.list({
     *     // The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     *     actorIpAddress: 'placeholder-value',
     *     // Application name for which the events are to be retrieved.
     *     applicationName:
     *       '(access_transparency)|(admin)|(calendar)|(chat)|(chrome)|(context_aware_access)|(data_studio)|(drive)|(gcp)|(gplus)|(groups)|(groups_enterprise)|(jamboard)|(keep)|(login)|(meet)|(mobile)|(rules)|(saml)|(token)|(user_accounts)|(vault)|(gemini_in_workspace_apps)',
     *     // The unique ID of the customer to retrieve data for.
     *     customerId: 'C.+|my_customer',
     *     // Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
     *     endTime:
     *       '(&#92;d&#92;d&#92;d&#92;d)-(&#92;d&#92;d)-(&#92;d&#92;d)T(&#92;d&#92;d):(&#92;d&#92;d):(&#92;d&#92;d)(?:&#92;.(&#92;d+))?(?:(Z)|([-+])(&#92;d&#92;d):(&#92;d&#92;d))',
     *     // The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
     *     eventName: 'placeholder-value',
     *     // The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name\}{relational operator\}{parameter1 value\},{parameter2 name\}{relational operator\}{parameter2 value\},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<\>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<\>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `\>`—'greater than'. Must be URL-encoded (%3E). * `\>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned.
     *     filters:
     *       '(.+[&lt;,&lt;=,==,&gt;=,&gt;,&lt;&gt;].+,)*(.+[&lt;,&lt;=,==,&gt;=,&gt;,&lt;&gt;].+)',
     *     // Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175)
     *     groupIdFilter: '(id:[a-z0-9]+(,id:[a-z0-9]+)*)',
     *     // Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
     *     maxResults: 'placeholder-value',
     *     // ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     *     orgUnitID: '(id:[a-z0-9]+)',
     *     // The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     *     pageToken: 'placeholder-value',
     *     // Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
     *     startTime:
     *       '(&#92;d&#92;d&#92;d&#92;d)-(&#92;d&#92;d)-(&#92;d&#92;d)T(&#92;d&#92;d):(&#92;d&#92;d):(&#92;d&#92;d)(?:&#92;.(&#92;d+))?(?:(Z)|([-+])(&#92;d&#92;d):(&#92;d&#92;d))',
     *     // Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
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
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Activities>>;
    list(
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      options: MethodOptions | BodyResponseCallback<Schema$Activities>,
      callback: BodyResponseCallback<Schema$Activities>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$Activities>
    ): void;
    list(callback: BodyResponseCallback<Schema$Activities>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$Activities>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Activities>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Activities>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Activities>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'applicationName'],
        pathParams: ['applicationName', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Activities>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Activities>(parameters);
      }
    }

    /**
     * Start receiving notifications for account activities. For more information, see Receiving Push Notifications.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.audit.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await reports.activities.watch({
     *     // The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     *     actorIpAddress: 'placeholder-value',
     *     // Application name for which the events are to be retrieved.
     *     applicationName:
     *       '(access_transparency)|(admin)|(calendar)|(chat)|(chrome)|(context_aware_access)|(data_studio)|(drive)|(gcp)|(gplus)|(groups)|(groups_enterprise)|(jamboard)|(keep)|(login)|(meet)|(mobile)|(rules)|(saml)|(token)|(user_accounts)',
     *     // The unique ID of the customer to retrieve data for.
     *     customerId: 'C.+|my_customer',
     *     // Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
     *     endTime:
     *       '(&#92;d&#92;d&#92;d&#92;d)-(&#92;d&#92;d)-(&#92;d&#92;d)T(&#92;d&#92;d):(&#92;d&#92;d):(&#92;d&#92;d)(?:&#92;.(&#92;d+))?(?:(Z)|([-+])(&#92;d&#92;d):(&#92;d&#92;d))',
     *     // The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
     *     eventName: 'placeholder-value',
     *     // The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name\}{relational operator\}{parameter1 value\},{parameter2 name\}{relational operator\}{parameter2 value\},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<\>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<\>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `\>`—'greater than'. Must be URL-encoded (%3E). * `\>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned.
     *     filters:
     *       '(.+[&lt;,&lt;=,==,&gt;=,&gt;,&lt;&gt;].+,)*(.+[&lt;,&lt;=,==,&gt;=,&gt;,&lt;&gt;].+)',
     *     // `Deprecated`. This field is deprecated and is no longer supported. Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175)
     *     groupIdFilter: '(id:[a-z0-9]+(,id:[a-z0-9]+)*)',
     *     // Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
     *     maxResults: 'placeholder-value',
     *     // `Deprecated`. This field is deprecated and is no longer supported. ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     *     orgUnitID: '(id:[a-z0-9]+)',
     *     // The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     *     pageToken: 'placeholder-value',
     *     // Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
     *     startTime:
     *       '(&#92;d&#92;d&#92;d&#92;d)-(&#92;d&#92;d)-(&#92;d&#92;d)T(&#92;d&#92;d):(&#92;d&#92;d):(&#92;d&#92;d)(?:&#92;.(&#92;d+))?(?:(Z)|([-+])(&#92;d&#92;d):(&#92;d&#92;d))',
     *     // Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     *     userKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": "my_address",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "params": {},
     *   //   "payload": false,
     *   //   "resourceId": "my_resourceId",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "token": "my_token",
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
    watch(
      params: Params$Resource$Activities$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Activities$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    watch(
      params: Params$Resource$Activities$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Activities$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Activities$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Activities$Watch
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Channel>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/reports/v1/activity/users/{userKey}/applications/{applicationName}/watch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'applicationName'],
        pathParams: ['applicationName', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     * The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     */
    actorIpAddress?: string;
    /**
     * Application name for which the events are to be retrieved.
     */
    applicationName?: string;
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
     */
    endTime?: string;
    /**
     * The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
     */
    eventName?: string;
    /**
     * The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name\}{relational operator\}{parameter1 value\},{parameter2 name\}{relational operator\}{parameter2 value\},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<\>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<\>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `\>`—'greater than'. Must be URL-encoded (%3E). * `\>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned.
     */
    filters?: string;
    /**
     * Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175)
     */
    groupIdFilter?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
     */
    maxResults?: number;
    /**
     * ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     */
    pageToken?: string;
    /**
     * Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
     */
    startTime?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     */
    userKey?: string;
  }
  export interface Params$Resource$Activities$Watch extends StandardParameters {
    /**
     * The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both IPv4 and IPv6 address versions.
     */
    actorIpAddress?: string;
    /**
     * Application name for which the events are to be retrieved.
     */
    applicationName?: string;
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Sets the end of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts: - *Date of the API's request for a report*: When the API created and retrieved the report. - *Report's start time*: The beginning of the timespan shown in the report. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error. - *Report's end time*: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August. If the `endTime` is not specified, the report returns all activities from the `startTime` until the current time or the most recent 180 days if the `startTime` is more than 180 days in the past.
     */
    endTime?: string;
    /**
     * The name of the event being queried by the API. Each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings `type` structure has all of the Calendar `eventName` activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings `type` and `eventName` parameters. For more information about `eventName` query strings and parameters, see the list of event names for various applications above in `applicationName`.
     */
    eventName?: string;
    /**
     * The `filters` query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form `{parameter1 name\}{relational operator\}{parameter1 value\},{parameter2 name\}{relational operator\}{parameter2 value\},...` These event parameters are associated with a specific `eventName`. An empty report is returned if the request's parameter doesn't belong to the `eventName`. For more information about the available `eventName` fields for each application and their associated parameters, go to the [ApplicationName](#applicationname) table, then click through to the Activity Events page in the Appendix for the application you want. In the following Drive activity examples, the returned list consists of all `edit` events where the `doc_id` parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a `doc_id` value equal to `12345`. In the second example, the report returns any edited documents where the `doc_id` value is not equal to `98765`. The `<\>` operator is URL-encoded in the request's query string (`%3C%3E`): ``` GET...&eventName=edit&filters=doc_id==12345 GET...&eventName=edit&filters=doc_id%3C%3E98765 ``` A `filters` query supports these relational operators: * `==`—'equal to'. * `<\>`—'not equal to'. Must be URL-encoded (%3C%3E). * `<`—'less than'. Must be URL-encoded (%3C). * `<=`—'less than or equal to'. Must be URL-encoded (%3C=). * `\>`—'greater than'. Must be URL-encoded (%3E). * `\>=`—'greater than or equal to'. Must be URL-encoded (%3E=). **Note:** The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned.
     */
    filters?: string;
    /**
     * `Deprecated`. This field is deprecated and is no longer supported. Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456" *Important:* To filter by groups, you must explicitly add the groups to your filtering groups allowlist. For more information about adding groups to filtering groups allowlist, see [Filter results by Google Group](https://support.google.com/a/answer/11482175)
     */
    groupIdFilter?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional in the request. The default value is 1000.
     */
    maxResults?: number;
    /**
     * `Deprecated`. This field is deprecated and is no longer supported. ID of the organizational unit to report on. Activity records will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * The token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     */
    pageToken?: string;
    /**
     * Sets the beginning of the range of time shown in the report. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. The report returns all activities from `startTime` until `endTime`. The `startTime` must be before the `endTime` (if specified) and the current time when the request is made, or the API returns an error.
     */
    startTime?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     */
    userKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Stop watching resources through this channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.audit.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await admin.channels.stop({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": "my_address",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "params": {},
     *       //   "payload": false,
     *       //   "resourceId": "my_resourceId",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "token": "my_token",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stop(
      params?: Params$Resource$Channels$Stop,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    stop(
      params: Params$Resource$Channels$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Channels$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Channels$Stop
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/reports_v1/channels/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$Stop extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Customerusagereports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.usage.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await reports.customerUsageReports.get({
     *     // The unique ID of the customer to retrieve data for.
     *     customerId: 'C.+|my_customer',
     *     // Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     *     date: '(&#92;d){4}-(&#92;d){2}-(&#92;d){2}',
     *     // Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
     *     pageToken: 'placeholder-value',
     *     // The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     *     parameters:
     *       '(((accounts)|(app_maker)|(apps_scripts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)|(meet)):[^,]+,)*(((accounts)|(app_maker)|(apps_scripts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)|(meet)):[^,]+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "usageReports": [],
     *   //   "warnings": []
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
      params: Params$Resource$Customerusagereports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customerusagereports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>;
    get(
      params: Params$Resource$Customerusagereports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customerusagereports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Customerusagereports$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customerusagereports$Get
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customerusagereports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customerusagereports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/admin/reports/v1/usage/dates/{date}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['date'],
        pathParams: ['date'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Customerusagereports$Get
    extends StandardParameters {
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     */
    date?: string;
    /**
     * Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
     */
    pageToken?: string;
    /**
     * The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
  }

  export class Resource$Entityusagereports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.usage.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await reports.entityUsageReports.get({
     *     // The unique ID of the customer to retrieve data for.
     *     customerId: 'C.+|my_customer',
     *     // Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     *     date: '(&#92;d){4}-(&#92;d){2}-(&#92;d){2}',
     *     // Represents the key of the object to filter the data with. It is a string which can take the value `all` to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the `entityKey` for a particular `entityType`, see the Entities Usage parameters reference guides.
     *     entityKey: 'placeholder-value',
     *     // Represents the type of entity for the report.
     *     entityType: '(gplus_communities)',
     *     // The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<\>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members%3C%3E0 The relational operators include: - `==` - 'equal to'. - `<\>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `\>` - 'greater than'. It is URL-encoded (%3E). - `\>=` - 'greater than or equal to'. It is URL-encoded (%3E=). Filters can only be applied to numeric parameters.
     *     filters:
     *       '(((gplus)):[a-z0-9_]+[&lt;,&lt;=,==,&gt;=,&gt;,!=][^,]+,)*(((gplus)):[a-z0-9_]+[&lt;,&lt;=,==,&gt;=,&gt;,!=][^,]+)',
     *     // Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page.
     *     maxResults: 'placeholder-value',
     *     // Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     *     pageToken: 'placeholder-value',
     *     // The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only `gplus`. A `parameter` query string is in the CSV form of `[app_name1:param_name1], [app_name2:param_name2]...`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     *     parameters: '(((gplus)):[^,]+,)*(((gplus)):[^,]+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "usageReports": [],
     *   //   "warnings": []
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
      params: Params$Resource$Entityusagereports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Entityusagereports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>;
    get(
      params: Params$Resource$Entityusagereports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Entityusagereports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Entityusagereports$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Entityusagereports$Get
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Entityusagereports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entityusagereports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/admin/reports/v1/usage/{entityType}/{entityKey}/dates/{date}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['entityType', 'entityKey', 'date'],
        pathParams: ['date', 'entityKey', 'entityType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Entityusagereports$Get
    extends StandardParameters {
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     */
    date?: string;
    /**
     * Represents the key of the object to filter the data with. It is a string which can take the value `all` to get activity events for all users, or any other value for an app-specific entity. For details on how to obtain the `entityKey` for a particular `entityType`, see the Entities Usage parameters reference guides.
     */
    entityKey?: string;
    /**
     * Represents the type of entity for the report.
     */
    entityType?: string;
    /**
     * The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Entities usage report include `accounts`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<\>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-01 ?parameters=gplus:community_name,gplus:num_total_members &filters=gplus:num_total_members%3C%3E0 The relational operators include: - `==` - 'equal to'. - `<\>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `\>` - 'greater than'. It is URL-encoded (%3E). - `\>=` - 'greater than or equal to'. It is URL-encoded (%3E=). Filters can only be applied to numeric parameters.
     */
    filters?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page.
     */
    maxResults?: number;
    /**
     * Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     */
    pageToken?: string;
    /**
     * The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Entities usage report are only `gplus`. A `parameter` query string is in the CSV form of `[app_name1:param_name1], [app_name2:param_name2]...`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
  }

  export class Resource$Userusagereport {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/admin.googleapis.com
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
     * const admin = google.admin('reports_v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/admin.reports.usage.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await reports.userUsageReport.get({
     *     // The unique ID of the customer to retrieve data for.
     *     customerId: 'C.+|my_customer',
     *     // Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     *     date: '(&#92;d){4}-(&#92;d){2}-(&#92;d){2}',
     *     // The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include `accounts`, `chat`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<\>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time%3C%3E2010-10-28T10:26:35.000Z The relational operators include: - `==` - 'equal to'. - `<\>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `\>` - 'greater than'. It is URL-encoded (%3E). - `\>=` - 'greater than or equal to'. It is URL-encoded (%3E=).
     *     filters:
     *       '(((accounts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)):[a-z0-9_]+[&lt;,&lt;=,==,&gt;=,&gt;,!=][^,]+,)*(((accounts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)):[a-z0-9_]+[&lt;,&lt;=,==,&gt;=,&gt;,!=][^,]+)',
     *     // Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"
     *     groupIdFilter: '(id:[a-z0-9]+(,id:[a-z0-9]+)*)',
     *     // Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional.
     *     maxResults: 'placeholder-value',
     *     // ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     *     orgUnitID: '(id:[a-z0-9]+)',
     *     // Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     *     pageToken: 'placeholder-value',
     *     // The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers Usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     *     parameters:
     *       '(((accounts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)):[^,]+,)*(((accounts)|(chat)|(classroom)|(cros)|(gmail)|(calendar)|(docs)|(gplus)|(sites)|(device_management)|(drive)):[^,]+)',
     *     // Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     *     userKey: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "usageReports": [],
     *   //   "warnings": []
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
      params: Params$Resource$Userusagereport$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Userusagereport$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>;
    get(
      params: Params$Resource$Userusagereport$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userusagereport$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UsageReports>,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(
      params: Params$Resource$Userusagereport$Get,
      callback: BodyResponseCallback<Schema$UsageReports>
    ): void;
    get(callback: BodyResponseCallback<Schema$UsageReports>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userusagereport$Get
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UsageReports>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UsageReports>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userusagereport$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userusagereport$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://admin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/admin/reports/v1/usage/users/{userKey}/dates/{date}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userKey', 'date'],
        pathParams: ['date', 'userKey'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsageReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UsageReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Userusagereport$Get
    extends StandardParameters {
    /**
     * The unique ID of the customer to retrieve data for.
     */
    customerId?: string;
    /**
     * Represents the date the usage occurred, based on UTC-8:00 (Pacific Standard Time). The timestamp is in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), `yyyy-mm-dd`.
     */
    date?: string;
    /**
     * The `filters` query string is a comma-separated list of an application's event parameters where the parameter's value is manipulated by a relational operator. The `filters` query string includes the name of the application whose usage is returned in the report. The application values for the Users Usage Report include `accounts`, `chat`, `docs`, and `gmail`. Filters are in the form `[application name]:parameter name[parameter value],...`. In this example, the `<\>` 'not equal to' operator is URL-encoded in the request's query string (%3C%3E): GET https://www.googleapis.com/admin/reports/v1/usage/users/all/dates/2013-03-03 ?parameters=accounts:last_login_time &filters=accounts:last_login_time%3C%3E2010-10-28T10:26:35.000Z The relational operators include: - `==` - 'equal to'. - `<\>` - 'not equal to'. It is URL-encoded (%3C%3E). - `<` - 'less than'. It is URL-encoded (%3C). - `<=` - 'less than or equal to'. It is URL-encoded (%3C=). - `\>` - 'greater than'. It is URL-encoded (%3E). - `\>=` - 'greater than or equal to'. It is URL-encoded (%3E=).
     */
    filters?: string;
    /**
     * Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"
     */
    groupIdFilter?: string;
    /**
     * Determines how many activity records are shown on each response page. For example, if the request sets `maxResults=1` and the report has two activities, the report has two pages. The response's `nextPageToken` property has the token to the second page. The `maxResults` query string is optional.
     */
    maxResults?: number;
    /**
     * ID of the organizational unit to report on. User activity will be shown only for users who belong to the specified organizational unit. Data before Dec 17, 2018 doesn't appear in the filtered results.
     */
    orgUnitID?: string;
    /**
     * Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. In your follow-on request getting the next page of the report, enter the `nextPageToken` value in the `pageToken` query string.
     */
    pageToken?: string;
    /**
     * The `parameters` query string is a comma-separated list of event parameters that refine a report's results. The parameter is associated with a specific application. The application values for the Customers Usage report include `accounts`, `app_maker`, `apps_scripts`, `calendar`, `chat`, `classroom`, `cros`, `docs`, `gmail`, `gplus`, `device_management`, `meet`, and `sites`. A `parameters` query string is in the CSV form of `app_name1:param_name1, app_name2:param_name2`. *Note:* The API doesn't accept multiple values of a parameter. If a particular parameter is supplied more than once in the API request, the API only accepts the last value of that request parameter. In addition, if an invalid request parameter is supplied in the API request, the API ignores that request parameter and returns the response corresponding to the remaining valid request parameters. An example of an invalid request parameter is one that does not belong to the application. If no parameters are requested, all parameters are returned.
     */
    parameters?: string;
    /**
     * Represents the profile ID or the user email for which the data should be filtered. Can be `all` for all information, or `userKey` for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call `users.list` in Directory API with `showDeleted=true`, then use the returned `ID` as the `userKey`.
     */
    userKey?: string;
  }
}
