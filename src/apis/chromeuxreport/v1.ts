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

export namespace chromeuxreport_v1 {
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
   * Chrome UX Report API
   *
   * The Chrome UX Report API lets you view real user experience data for millions of websites.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromeuxreport = google.chromeuxreport('v1');
   * ```
   */
  export class Chromeuxreport {
    context: APIRequestContext;
    records: Resource$Records;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.records = new Resource$Records(this.context);
    }
  }

  /**
   * A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
   */
  export interface Schema$Bin {
    /**
     * The proportion of users that experienced this bin's value for the given metric.
     */
    density?: any | null;
    /**
     * End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.
     */
    end?: any | null;
    /**
     * Start is the beginning of the data bin.
     */
    start?: any | null;
  }
  /**
   * The collection period is a date range which includes the `first` and `last` day.
   */
  export interface Schema$CollectionPeriod {
    /**
     * The first day in the collection period, inclusive.
     */
    firstDate?: Schema$Date;
    /**
     * The last day in the collection period, inclusive.
     */
    lastDate?: Schema$Date;
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
   * For enum metrics, provides fraction timeseries which add up to approximately 1.0 per entry (k-th element into the repeated fractions field for any k <= len) across fraction_timeseries.
   */
  export interface Schema$FractionTimeseries {
    /**
     * Values between 0.0 and 1.0 (inclusive) and NaN.
     */
    fractions?: number[] | null;
  }
  /**
   * Key defines all the dimensions that identify this record as unique.
   */
  export interface Schema$HistoryKey {
    /**
     * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
     */
    formFactor?: string | null;
    /**
     * Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.
     */
    origin?: string | null;
    /**
     * Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated.
     */
    url?: string | null;
  }
  /**
   * HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.
   */
  export interface Schema$HistoryRecord {
    /**
     * The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points.
     */
    collectionPeriods?: Schema$CollectionPeriod[];
    /**
     * Key defines all of the unique querying parameters needed to look up a user experience history record.
     */
    key?: Schema$HistoryKey;
    /**
     * Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: {[key: string]: Schema$MetricTimeseries} | null;
  }
  /**
   * Key defines all the dimensions that identify this record as unique.
   */
  export interface Schema$Key {
    /**
     * The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned.
     */
    effectiveConnectionType?: string | null;
    /**
     * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.
     */
    formFactor?: string | null;
    /**
     * Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.
     */
    origin?: string | null;
    /**
     * Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated.
     */
    url?: string | null;
  }
  /**
   * A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
   */
  export interface Schema$Metric {
    /**
     * For enum metrics, provides fractions which add up to approximately 1.0.
     */
    fractions?: {[key: string]: number} | null;
    /**
     * The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1.
     */
    histogram?: Schema$Bin[];
    /**
     * Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.
     */
    percentiles?: Schema$Percentiles;
  }
  /**
   * A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period.
   */
  export interface Schema$MetricTimeseries {
    /**
     * Mapping from labels to timeseries of fractions attributed to this label.
     */
    fractionTimeseries?: {[key: string]: Schema$FractionTimeseries} | null;
    /**
     * The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry.
     */
    histogramTimeseries?: Schema$TimeseriesBin[];
    /**
     * Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.
     */
    percentilesTimeseries?: Schema$TimeseriesPercentiles;
  }
  /**
   * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
   */
  export interface Schema$Percentiles {
    /**
     * 75% of users experienced the given metric at or below this value.
     */
    p75?: any | null;
  }
  /**
   * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record.
   */
  export interface Schema$QueryHistoryRequest {
    /**
     * The number of collection periods to return. If not specified, the default is 25. If present, must be in the range [1, 40].
     */
    collectionPeriodCount?: number | null;
    /**
     * The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.
     */
    formFactor?: string | null;
    /**
     * The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: string[] | null;
    /**
     * The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"
     */
    origin?: string | null;
    /**
     * The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"
     */
    url?: string | null;
  }
  /**
   * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
   */
  export interface Schema$QueryHistoryResponse {
    /**
     * The record that was found.
     */
    record?: Schema$HistoryRecord;
    /**
     * These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.
     */
    urlNormalizationDetails?: Schema$UrlNormalization;
  }
  /**
   * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
   */
  export interface Schema$QueryRequest {
    /**
     * The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned.
     */
    effectiveConnectionType?: string | null;
    /**
     * The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.
     */
    formFactor?: string | null;
    /**
     * The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: string[] | null;
    /**
     * The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"
     */
    origin?: string | null;
    /**
     * The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"
     */
    url?: string | null;
  }
  /**
   * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
   */
  export interface Schema$QueryResponse {
    /**
     * The record that was found.
     */
    record?: Schema$Record;
    /**
     * These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.
     */
    urlNormalizationDetails?: Schema$UrlNormalization;
  }
  /**
   * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
   */
  export interface Schema$Record {
    /**
     * The collection period indicates when the data reflected in this record was collected.
     */
    collectionPeriod?: Schema$CollectionPeriod;
    /**
     * Key defines all of the unique querying parameters needed to look up a user experience record.
     */
    key?: Schema$Key;
    /**
     * Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: {[key: string]: Schema$Metric} | null;
  }
  /**
   * A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
   */
  export interface Schema$TimeseriesBin {
    /**
     * The proportion of users that experienced this bin's value for the given metric in a given collection period; the index for each of these entries corresponds to an entry in the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. Thus, the length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message.
     */
    densities?: number[] | null;
    /**
     * End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.
     */
    end?: any | null;
    /**
     * Start is the beginning of the data bin.
     */
    start?: any | null;
  }
  /**
   * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
   */
  export interface Schema$TimeseriesPercentiles {
    /**
     * 75% of users experienced the given metric at or below this value. The length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field.
     */
    p75s?: any[] | null;
  }
  /**
   * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
   */
  export interface Schema$UrlNormalization {
    /**
     * The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up.
     */
    normalizedUrl?: string | null;
    /**
     * The original requested URL prior to any normalization actions.
     */
    originalUrl?: string | null;
  }

  export class Resource$Records {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromeuxreport.googleapis.com
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
     * const chromeuxreport = google.chromeuxreport('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromeuxreport.records.queryHistoryRecord({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "collectionPeriodCount": 0,
     *       //   "formFactor": "my_formFactor",
     *       //   "metrics": [],
     *       //   "origin": "my_origin",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "record": {},
     *   //   "urlNormalizationDetails": {}
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
    queryHistoryRecord(
      params: Params$Resource$Records$Queryhistoryrecord,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryHistoryRecord(
      params?: Params$Resource$Records$Queryhistoryrecord,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryHistoryResponse>>;
    queryHistoryRecord(
      params: Params$Resource$Records$Queryhistoryrecord,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryHistoryRecord(
      params: Params$Resource$Records$Queryhistoryrecord,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryHistoryResponse>,
      callback: BodyResponseCallback<Schema$QueryHistoryResponse>
    ): void;
    queryHistoryRecord(
      params: Params$Resource$Records$Queryhistoryrecord,
      callback: BodyResponseCallback<Schema$QueryHistoryResponse>
    ): void;
    queryHistoryRecord(
      callback: BodyResponseCallback<Schema$QueryHistoryResponse>
    ): void;
    queryHistoryRecord(
      paramsOrCallback?:
        | Params$Resource$Records$Queryhistoryrecord
        | BodyResponseCallback<Schema$QueryHistoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryHistoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryHistoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryHistoryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Records$Queryhistoryrecord;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Records$Queryhistoryrecord;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromeuxreport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/records:queryHistoryRecord').replace(
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
        createAPIRequest<Schema$QueryHistoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryHistoryResponse>(parameters);
      }
    }

    /**
     * Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromeuxreport.googleapis.com
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
     * const chromeuxreport = google.chromeuxreport('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromeuxreport.records.queryRecord({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "effectiveConnectionType": "my_effectiveConnectionType",
     *       //   "formFactor": "my_formFactor",
     *       //   "metrics": [],
     *       //   "origin": "my_origin",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "record": {},
     *   //   "urlNormalizationDetails": {}
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
    queryRecord(
      params: Params$Resource$Records$Queryrecord,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryRecord(
      params?: Params$Resource$Records$Queryrecord,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryResponse>>;
    queryRecord(
      params: Params$Resource$Records$Queryrecord,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryRecord(
      params: Params$Resource$Records$Queryrecord,
      options: MethodOptions | BodyResponseCallback<Schema$QueryResponse>,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    queryRecord(
      params: Params$Resource$Records$Queryrecord,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    queryRecord(callback: BodyResponseCallback<Schema$QueryResponse>): void;
    queryRecord(
      paramsOrCallback?:
        | Params$Resource$Records$Queryrecord
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Records$Queryrecord;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Records$Queryrecord;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromeuxreport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/records:queryRecord').replace(
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
        createAPIRequest<Schema$QueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Records$Queryhistoryrecord
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryHistoryRequest;
  }
  export interface Params$Resource$Records$Queryrecord
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryRequest;
  }
}
