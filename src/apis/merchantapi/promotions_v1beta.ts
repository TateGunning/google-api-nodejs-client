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

export namespace merchantapi_promotions_v1beta {
  export interface Options extends GlobalOptions {
    version: 'promotions_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('promotions_v1beta');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Attributes.
   */
  export interface Schema$Attributes {
    /**
     * Optional. Product filter by [brand exclusion](https://support.google.com/merchants/answer/13861679?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    brandExclusion?: string[] | null;
    /**
     * Optional. Product filter by brand for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    brandInclusion?: string[] | null;
    /**
     * Required. The [coupon value type] (https://support.google.com/merchants/answer/13861986?ref_topic=13773355&sjid=17642868584668136159-NC) attribute to signal the type of promotion that you are running. Depending on type of the selected coupon value [some attributes are required](https://support.google.com/merchants/answer/6393006?ref_topic=7322920).
     */
    couponValueType?: string | null;
    /**
     * Optional. [Free gift description](https://support.google.com/merchants/answer/13847245?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    freeGiftDescription?: string | null;
    /**
     * Optional. [Free gift item ID](https://support.google.com/merchants/answer/13857152?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    freeGiftItemId?: string | null;
    /**
     * Optional. [Free gift value](https://support.google.com/merchants/answer/13844477?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    freeGiftValue?: Schema$Price;
    /**
     * Optional. Generic redemption code for the promotion. To be used with the `offerType` field and must meet the [minimum requirements](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    genericRedemptionCode?: string | null;
    /**
     * Optional. The number of items discounted in the promotion. The attribute is set when `couponValueType` is equal to `buy_m_get_n_money_off` or `buy_m_get_n_percent_off`.
     */
    getThisQuantityDiscounted?: string | null;
    /**
     * Optional. Product filter by [item group ID](https://support.google.com/merchants/answer/13837298?ref_topic=13773355&sjid=17642868584668136159-NC). The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC). exclusion for the promotion.
     */
    itemGroupIdExclusion?: string[] | null;
    /**
     * Optional. Product filter by item group ID for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability [product_applicability] attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    itemGroupIdInclusion?: string[] | null;
    /**
     * Optional. Product filter by [item ID exclusion](https://support.google.com/merchants/answer/13863524?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    itemIdExclusion?: string[] | null;
    /**
     * Optional. Product filter by [item ID](https://support.google.com/merchants/answer/13861565?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    itemIdInclusion?: string[] | null;
    /**
     * Optional. [Maximum purchase quantity](https://support.google.com/merchants/answer/13861564?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    limitQuantity?: string | null;
    /**
     * Optional. [Maximum product price](https://support.google.com/merchants/answer/2906014) for promotion.
     */
    limitValue?: Schema$Price;
    /**
     * Required. [Long title](https://support.google.com/merchants/answer/13838102?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    longTitle?: string | null;
    /**
     * Optional. [Minimum purchase amount](https://support.google.com/merchants/answer/13837705?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion.
     */
    minimumPurchaseAmount?: Schema$Price;
    minimumPurchaseQuantity?: string | null;
    /**
     * Optional. The [money off amount](https://support.google.com/merchants/answer/13838101?ref_topic=13773355&sjid=17642868584668136159-NC) offered in the promotion.
     */
    moneyOffAmount?: Schema$Price;
    /**
     * Required. [Type](https://support.google.com/merchants/answer/13837405?ref_topic=13773355&sjid=17642868584668136159-NC) of the promotion. Use this attribute to indicate whether or not customers need a coupon code to redeem your promotion.
     */
    offerType?: string | null;
    /**
     * Optional. The [percentage discount](https://support.google.com/merchants/answer/13837404?sjid=17642868584668136159-NC) offered in the promotion.
     */
    percentOff?: string | null;
    /**
     * Required. Applicability of the promotion to either all products or [only specific products](https://support.google.com/merchants/answer/6396257?ref_topic=6396150&sjid=17642868584668136159-NC).
     */
    productApplicability?: string | null;
    /**
     * Optional. Product filter by [product type exclusion](https://support.google.com/merchants/answer/13863746?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    productTypeExclusion?: string[] | null;
    /**
     * Optional. Product filter by product type for the promotion. The product filter attributes only applies when the products eligible for promotion product applicability `product_applicability` attribute is set to [specific_products](https://support.google.com/merchants/answer/13837299?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    productTypeInclusion?: string[] | null;
    /**
     * Required. The list of destinations where the promotion applies to. If you don't specify a destination by including a supported value in your data source, your promotion will display in Shopping ads and free listings by default. You may have previously submitted the following values as destinations for your products: Shopping Actions, Surfaces across Google, Local surfaces across Google. To represent these values use `FREE_LISTINGS`, `FREE_LOCAL_LISTINGS`, `LOCAL_INVENTORY_ADS`. For more details see [Promotion destination](https://support.google.com/merchants/answer/13837465?sjid=5155774230887277618-NC)
     */
    promotionDestinations?: string[] | null;
    /**
     * Optional. `TimePeriod` representation of the promotion's display dates. This attribute specifies the date and time frame when the promotion will be live on Google.com and Shopping ads. If the display time period for promotion `promotion_display_time_period` attribute is not specified, the promotion effective time period `promotion_effective_time_period` determines the date and time frame when the promotion will be live on Google.com and Shopping ads.
     */
    promotionDisplayTimePeriod?: Schema$Interval;
    /**
     * Required. `TimePeriod` representation of the promotion's effective dates. This attribute specifies that the promotion can be tested on your online store during this time period.
     */
    promotionEffectiveTimePeriod?: Schema$Interval;
    /**
     * Optional. URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no `promotion_url` is included. URL is used to confirm that the promotion is valid and can be redeemed.
     */
    promotionUrl?: string | null;
    /**
     * Optional. Whether the promotion applies to [all stores, or only specified stores](https://support.google.com/merchants/answer/13857563?sjid=17642868584668136159-NC). Local Inventory ads promotions throw an error if no store applicability is included. An `INVALID_ARGUMENT` error is thrown if `store_applicability` is set to `ALL_STORES` and `store_codes_inclusion` or `score_code_exclusion` is set to a value.
     */
    storeApplicability?: string | null;
    /**
     * Optional. [Store codes to exclude](https://support.google.com/merchants/answer/13859586?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC).
     */
    storeCodesExclusion?: string[] | null;
    /**
     * Optional. [Store codes to include](https://support.google.com/merchants/answer/13857470?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. The store filter attributes only applies when the `store_applicability` attribute is set to [specific_stores](https://support.google.com/merchants/answer/13857563?ref_topic=13773355&sjid=17642868584668136159-NC). Store code (the store ID from your Business Profile) of the physical store the product is sold in. See the [Local product inventory data specification](https://support.google.com/merchants/answer/3061342) for more information.
     */
    storeCodesInclusion?: string[] | null;
  }
  /**
   * A message that represents custom attributes. Exactly one of `value` or `group_values` must not be empty.
   */
  export interface Schema$CustomAttribute {
    /**
     * Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty.
     */
    groupValues?: Schema$CustomAttribute[];
    /**
     * The name of the attribute.
     */
    name?: string | null;
    /**
     * The value of the attribute. If `value` is not empty, `group_values` must be empty.
     */
    value?: string | null;
  }
  /**
   * The status for the specified destination.
   */
  export interface Schema$DestinationStatus {
    /**
     * Output only. The name of the promotion destination.
     */
    reportingContext?: string | null;
    /**
     * Output only. The status for the specified destination.
     */
    status?: string | null;
  }
  /**
   * Request message for the `InsertPromotion` method.
   */
  export interface Schema$InsertPromotionRequest {
    /**
     * Required. The data source of the [promotion](https://support.google.com/merchants/answer/6396268?sjid=5155774230887277618-NC) Format: `accounts/{account\}/dataSources/{datasource\}`.
     */
    dataSource?: string | null;
    /**
     * Required. The promotion to insert.
     */
    promotion?: Schema$Promotion;
  }
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * The issue associated with the promotion.
   */
  export interface Schema$ItemLevelIssue {
    /**
     * Output only. List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
     */
    applicableCountries?: string[] | null;
    /**
     * Output only. The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * Output only. The error code of the issue.
     */
    code?: string | null;
    /**
     * Output only. A short issue description in English.
     */
    description?: string | null;
    /**
     * Output only. A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * Output only. The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * Output only. The destination the issue applies to.
     */
    reportingContext?: string | null;
    /**
     * Output only. Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * Output only. How this issue affects serving of the promotion.
     */
    severity?: string | null;
  }
  /**
   * Response message for the `ListPromotions` method.
   */
  export interface Schema$ListPromotionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The processed promotions from the specified account.
     */
    promotions?: Schema$Promotion[];
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * Represents a promotion. See the following articles for more details. Required promotion input attributes to pass data validation checks are primarily defined below: * [Promotions data specification](https://support.google.com/merchants/answer/2906014) * [Local promotions data specification](https://support.google.com/merchants/answer/10146130) After inserting, updating a promotion input, it may take several minutes before the final promotion can be retrieved.
   */
  export interface Schema$Promotion {
    /**
     * Optional. A list of promotion attributes.
     */
    attributes?: Schema$Attributes;
    /**
     * Required. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the promotion. Promotions is only for [selected languages](https://support.google.com/merchants/answer/4588281?ref_topic=6396150&sjid=18314938579342094533-NC#option3&zippy=).
     */
    contentLanguage?: string | null;
    /**
     * Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The primary data source of the promotion.
     */
    dataSource?: string | null;
    /**
     * Identifier. The name of the promotion. Format: `accounts/{account\}/promotions/{promotion\}`
     */
    name?: string | null;
    /**
     * Required. The user provided promotion ID to uniquely identify the promotion. Follow [minimum requirements](https://support.google.com/merchants/answer/7050148?ref_topic=7322920&sjid=871860036916537104-NC#minimum_requirements) to prevent promotion disapprovals.
     */
    promotionId?: string | null;
    /**
     * Output only. The [status of a promotion](https://support.google.com/merchants/answer/3398326?ref_topic=7322924&sjid=5155774230887277618-NC), data validation issues, that is, information about a promotion computed asynchronously.
     */
    promotionStatus?: Schema$PromotionStatus;
    /**
     * Required. [Redemption channel](https://support.google.com/merchants/answer/13837674?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. At least one channel is required.
     */
    redemptionChannel?: string[] | null;
    /**
     * Required. The target country used as part of the unique identifier. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). Promotions are only available in selected countries, [Free Listings and Shopping ads](https://support.google.com/merchants/answer/4588460) [Local Inventory ads](https://support.google.com/merchants/answer/10146326)
     */
    targetCountry?: string | null;
    /**
     * Optional. Represents the existing version (freshness) of the promotion, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing promotion. Re-insertion (for example, promotion refresh after 30 days) can be performed with the current `version_number`. If the operation is prevented, the aborted exception will be thrown.
     */
    versionNumber?: string | null;
  }
  /**
   * The status of the promotion.
   */
  export interface Schema$PromotionStatus {
    /**
     * Output only. Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example `2020-01-02T09:00:00+01:00` or `2020-01-02T09:00:00Z`
     */
    creationDate?: string | null;
    /**
     * Output only. The intended destinations for the promotion.
     */
    destinationStatuses?: Schema$DestinationStatus[];
    /**
     * Output only. A list of issues associated with the promotion.
     */
    itemLevelIssues?: Schema$ItemLevelIssue[];
    /**
     * Output only. Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example `2020-01-02T09:00:00+01:00` or `2020-01-02T09:00:00Z`
     */
    lastUpdateDate?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    promotions: Resource$Accounts$Promotions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.promotions = new Resource$Accounts$Promotions(this.context);
    }
  }

  export class Resource$Accounts$Promotions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the promotion from your Merchant Center account. After inserting or updating a promotion input, it may take several minutes before the updated promotion can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('promotions_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.promotions.get({
     *     // Required. The name of the promotion to retrieve. Format: `accounts/{account\}/promotions/{promotions\}`
     *     name: 'accounts/my-account/promotions/my-promotion',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "name": "my_name",
     *   //   "promotionId": "my_promotionId",
     *   //   "promotionStatus": {},
     *   //   "redemptionChannel": [],
     *   //   "targetCountry": "my_targetCountry",
     *   //   "versionNumber": "my_versionNumber"
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
      params: Params$Resource$Accounts$Promotions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Promotions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Promotion>>;
    get(
      params: Params$Resource$Accounts$Promotions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Promotions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Promotion>,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    get(
      params: Params$Resource$Accounts$Promotions$Get,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    get(callback: BodyResponseCallback<Schema$Promotion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Promotions$Get
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Promotion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Promotions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Promotions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/promotions/v1beta/{+name}').replace(
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
        createAPIRequest<Schema$Promotion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Promotion>(parameters);
      }
    }

    /**
     * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('promotions_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.promotions.insert({
     *     // Required. The account where the promotion will be inserted. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSource": "my_dataSource",
     *       //   "promotion": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "contentLanguage": "my_contentLanguage",
     *   //   "customAttributes": [],
     *   //   "dataSource": "my_dataSource",
     *   //   "name": "my_name",
     *   //   "promotionId": "my_promotionId",
     *   //   "promotionStatus": {},
     *   //   "redemptionChannel": [],
     *   //   "targetCountry": "my_targetCountry",
     *   //   "versionNumber": "my_versionNumber"
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
    insert(
      params: Params$Resource$Accounts$Promotions$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Promotions$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Promotion>>;
    insert(
      params: Params$Resource$Accounts$Promotions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Promotions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Promotion>,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    insert(
      params: Params$Resource$Accounts$Promotions$Insert,
      callback: BodyResponseCallback<Schema$Promotion>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Promotion>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Promotions$Insert
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Promotion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Promotion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Promotions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Promotions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/promotions/v1beta/{+parent}/promotions:insert'
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
        createAPIRequest<Schema$Promotion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Promotion>(parameters);
      }
    }

    /**
     * Lists the promotions in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting or updating a promotion, it may take several minutes before the updated processed promotion can be retrieved.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('promotions_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.promotions.list({
     *     // Output only. The maximum number of promotions to return. The service may return fewer than this value. The maximum value is 250; values above 250 will be coerced to 250. If unspecified, the maximum number of promotions will be returned.
     *     pageSize: 'placeholder-value',
     *     // Output only. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list processed promotions for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "promotions": []
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
      params: Params$Resource$Accounts$Promotions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Promotions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPromotionsResponse>>;
    list(
      params: Params$Resource$Accounts$Promotions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Promotions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPromotionsResponse>,
      callback: BodyResponseCallback<Schema$ListPromotionsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Promotions$List,
      callback: BodyResponseCallback<Schema$ListPromotionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPromotionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Promotions$List
        | BodyResponseCallback<Schema$ListPromotionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPromotionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPromotionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPromotionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Promotions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Promotions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/promotions/v1beta/{+parent}/promotions').replace(
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
        createAPIRequest<Schema$ListPromotionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPromotionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Promotions$Get
    extends StandardParameters {
    /**
     * Required. The name of the promotion to retrieve. Format: `accounts/{account\}/promotions/{promotions\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Promotions$Insert
    extends StandardParameters {
    /**
     * Required. The account where the promotion will be inserted. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InsertPromotionRequest;
  }
  export interface Params$Resource$Accounts$Promotions$List
    extends StandardParameters {
    /**
     * Output only. The maximum number of promotions to return. The service may return fewer than this value. The maximum value is 250; values above 250 will be coerced to 250. If unspecified, the maximum number of promotions will be returned.
     */
    pageSize?: number;
    /**
     * Output only. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list processed promotions for. Format: `accounts/{account\}`
     */
    parent?: string;
  }
}
