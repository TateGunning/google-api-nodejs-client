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

export namespace mybusinessbusinessinformation_v1 {
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
   * My Business Business Information API
   *
   * The My Business Business Information API provides an interface for managing business information. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1');
   * ```
   */
  export class Mybusinessbusinessinformation {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    attributes: Resource$Attributes;
    categories: Resource$Categories;
    chains: Resource$Chains;
    googleLocations: Resource$Googlelocations;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.attributes = new Resource$Attributes(this.context);
      this.categories = new Resource$Categories(this.context);
      this.chains = new Resource$Chains(this.context);
      this.googleLocations = new Resource$Googlelocations(this.context);
      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Additional information that is surfaced in AdWords.
   */
  export interface Schema$AdWordsLocationExtensions {
    /**
     * Required. An alternate phone number to display on AdWords location extensions instead of the location's primary phone number.
     */
    adPhone?: string | null;
  }
  /**
   * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
   */
  export interface Schema$Attribute {
    /**
     * Required. The resource name for this attribute.
     */
    name?: string | null;
    /**
     * When the attribute value type is REPEATED_ENUM, this contains the attribute value, and the other values fields must be empty.
     */
    repeatedEnumValue?: Schema$RepeatedEnumAttributeValue;
    /**
     * When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty.
     */
    uriValues?: Schema$UriAttributeValue[];
    /**
     * The values for this attribute. The type of the values supplied must match that expected for that attribute. This is a repeated field where multiple attribute values may be provided. Attribute types only support one value.
     */
    values?: any[] | null;
    /**
     * Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.
     */
    valueType?: string | null;
  }
  /**
   * Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
   */
  export interface Schema$AttributeMetadata {
    /**
     * If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error.
     */
    deprecated?: boolean | null;
    /**
     * The localized display name for the attribute, if available; otherwise, the English display name.
     */
    displayName?: string | null;
    /**
     * The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here.
     */
    groupDisplayName?: string | null;
    /**
     * The unique identifier for the attribute.
     */
    parent?: string | null;
    /**
     * If true, the attribute supports multiple values. If false, only a single value should be provided.
     */
    repeatable?: boolean | null;
    /**
     * For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided.
     */
    valueMetadata?: Schema$AttributeValueMetadata[];
    /**
     * The value type for the attribute. Values set and retrieved should be expected to be of this type.
     */
    valueType?: string | null;
  }
  /**
   * A container for all the attributes for a given location.
   */
  export interface Schema$Attributes {
    /**
     * A collection of attributes that need to be updated.
     */
    attributes?: Schema$Attribute[];
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     */
    name?: string | null;
  }
  /**
   * Metadata for supported attribute values.
   */
  export interface Schema$AttributeValueMetadata {
    /**
     * The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.
     */
    displayName?: string | null;
    /**
     * The attribute value.
     */
    value?: any | null;
  }
  /**
   * Response message for BusinessCategories.BatchGetBusinessCategories.
   */
  export interface Schema$BatchGetCategoriesResponse {
    /**
     * Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request.
     */
    categories?: Schema$Category[];
  }
  /**
   * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
   */
  export interface Schema$BusinessHours {
    /**
     * Required. A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week.
     */
    periods?: Schema$TimePeriod[];
  }
  /**
   * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
   */
  export interface Schema$Categories {
    /**
     * Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.
     */
    additionalCategories?: Schema$Category[];
    /**
     * Required. Category that best describes the core business this location engages in.
     */
    primaryCategory?: Schema$Category;
  }
  /**
   * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
   */
  export interface Schema$Category {
    /**
     * Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.
     */
    displayName?: string | null;
    /**
     * Output only. More hours types that are available for this business category.
     */
    moreHoursTypes?: Schema$MoreHoursType[];
    /**
     * Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location).
     */
    name?: string | null;
    /**
     * Output only. A list of all the service types that are available for this business category.
     */
    serviceTypes?: Schema$ServiceType[];
  }
  /**
   * A chain is a brand that your business's locations can be affiliated with.
   */
  export interface Schema$Chain {
    /**
     * Names of the chain.
     */
    chainNames?: Schema$ChainName[];
    /**
     * Number of locations that are part of this chain.
     */
    locationCount?: number | null;
    /**
     * Required. The chain's resource name, in the format `chains/{chain_id\}`.
     */
    name?: string | null;
    /**
     * Websites of the chain.
     */
    websites?: Schema$ChainUri[];
  }
  /**
   * Name to be used when displaying the chain.
   */
  export interface Schema$ChainName {
    /**
     * The display name for this chain.
     */
    displayName?: string | null;
    /**
     * The BCP 47 code of language of the name.
     */
    languageCode?: string | null;
  }
  /**
   * Url to be used when displaying the chain.
   */
  export interface Schema$ChainUri {
    /**
     * The uri for this chain.
     */
    uri?: string | null;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
   */
  export interface Schema$FreeFormServiceItem {
    /**
     * Required. This field represents the category name (i.e. the category's stable ID). The `category` and `service_type_id` should match the possible combinations provided in the `Category` message.
     */
    category?: string | null;
    /**
     * Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. This field should only be set if the input is a custom service item. Standardized service types should be updated via service_type_id.
     */
    label?: Schema$Label;
  }
  /**
   * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
   */
  export interface Schema$GoogleLocation {
    /**
     * The sparsely populated Location information. This field can be re-used in CreateLocation if it is not currently claimed by a user.
     */
    location?: Schema$Location;
    /**
     * Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId\}`.
     */
    name?: string | null;
    /**
     * A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.
     */
    requestAdminRightsUri?: string | null;
  }
  /**
   * Represents a location that was modified by Google.
   */
  export interface Schema$GoogleUpdatedLocation {
    /**
     * The fields that Google updated.
     */
    diffMask?: string | null;
    /**
     * The Google-updated version of this location.
     */
    location?: Schema$Location;
    /**
     * The fields that have pending edits that haven't yet been pushed to Maps and Search.
     */
    pendingMask?: string | null;
  }
  /**
   * Label to be used when displaying the price list, section, or item.
   */
  export interface Schema$Label {
    /**
     * Optional. Description of the price list, section, or item.
     */
    description?: string | null;
    /**
     * Required. Display name for the price list, section, or item.
     */
    displayName?: string | null;
    /**
     * Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language.
     */
    languageCode?: string | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Response for AttributesService.ListAttributeMetadata.
   */
  export interface Schema$ListAttributeMetadataResponse {
    /**
     * A collection of attribute metadata for the available attributes.
     */
    attributeMetadata?: Schema$AttributeMetadata[];
    /**
     * If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for BusinessCategories.ListCategories.
   */
  export interface Schema$ListCategoriesResponse {
    /**
     * The matching categories based on the requested parameters.
     */
    categories?: Schema$Category[];
    /**
     * If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListCategories`.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * The locations.
     */
    locations?: Schema$Location[];
    /**
     * If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response.
     */
    nextPageToken?: string | null;
    /**
     * The approximate number of Locations in the list irrespective of pagination. This field will only be returned if `filter` is used as a query parameter.
     */
    totalSize?: number | null;
  }
  /**
   * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
   */
  export interface Schema$Location {
    /**
     * Optional. Additional information that is surfaced in AdWords.
     */
    adWordsLocationExtensions?: Schema$AdWordsLocationExtensions;
    /**
     * Optional. The different categories that describe the business.
     */
    categories?: Schema$Categories;
    /**
     * Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label.
     */
    labels?: string[] | null;
    /**
     * Immutable. The language of the location. Set during creation and not updateable.
     */
    languageCode?: string | null;
    /**
     * Optional. User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Google Business Profile website. This field can only be updated by approved clients.
     */
    latlng?: Schema$LatLng;
    /**
     * Output only. Additional non-user-editable information.
     */
    metadata?: Schema$Metadata;
    /**
     * Optional. More hours for a business's different departments or specific customers.
     */
    moreHours?: Schema$MoreHours[];
    /**
     * Google identifier for this location in the form: `locations/{location_id\}`.
     */
    name?: string | null;
    /**
     * Optional. A flag that indicates whether the location is currently open for business.
     */
    openInfo?: Schema$OpenInfo;
    /**
     * Optional. The different phone numbers that customers can use to get in touch with the business.
     */
    phoneNumbers?: Schema$PhoneNumbers;
    /**
     * Optional. Describes your business in your own voice and shares with users the unique story of your business and offerings. This field is required for all categories except lodging categories (e.g. hotels, motels, inns).
     */
    profile?: Schema$Profile;
    /**
     * Optional. Operating hours for the business.
     */
    regularHours?: Schema$BusinessHours;
    /**
     * Optional. All locations and chain related to this one.
     */
    relationshipData?: Schema$RelationshipData;
    /**
     * Optional. Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.
     */
    serviceArea?: Schema$ServiceAreaBusiness;
    /**
     * Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically.
     */
    serviceItems?: Schema$ServiceItem[];
    /**
     * Optional. Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours. This field cannot be set without regular hours.
     */
    specialHours?: Schema$SpecialHours;
    /**
     * Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records.
     */
    storeCode?: string | null;
    /**
     * Optional. A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address. This field should only be set for businesses that have a storefront. This field should not be set for locations of type `CUSTOMER_LOCATION_ONLY` but if set, any value provided will be discarded.
     */
    storefrontAddress?: Schema$PostalAddress;
    /**
     * Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").
     */
    title?: string | null;
    /**
     * Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.
     */
    websiteUri?: string | null;
  }
  /**
   * Additional non-user-editable information about the location.
   */
  export interface Schema$Metadata {
    /**
     * Output only. Indicates whether the location can be deleted using the API.
     */
    canDelete?: boolean | null;
    /**
     * Output only. Indicates if the listing is eligible for business calls.
     */
    canHaveBusinessCalls?: boolean | null;
    /**
     * Output only. Indicates if the listing is eligible for food menu.
     */
    canHaveFoodMenus?: boolean | null;
    /**
     * Output only. Indicates if the listing can modify the service list.
     */
    canModifyServiceList?: boolean | null;
    /**
     * Output only. Indicates whether the location can operate on Health data.
     */
    canOperateHealthData?: boolean | null;
    /**
     * Output only. Indicates if the listing can manage local posts. Deprecated: This field is no longer populated and will be removed in a future version.
     */
    canOperateLocalPost?: boolean | null;
    /**
     * Output only. Indicates whether the location can operate on Lodging data.
     */
    canOperateLodgingData?: boolean | null;
    /**
     * Output only. The location resource that this location duplicates.
     */
    duplicateLocation?: string | null;
    /**
     * Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the `getGoogleUpdated` method to lookup information that's needs to be verified.
     */
    hasGoogleUpdated?: boolean | null;
    /**
     * Output only. Indicates whether any of this Location's properties are in the edit pending state.
     */
    hasPendingEdits?: boolean | null;
    /**
     * Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant.
     */
    hasVoiceOfMerchant?: boolean | null;
    /**
     * Output only.
     */
    isParticularlyPersonalPlace?: boolean | null;
    /**
     * Output only. A link to the location on Maps.
     */
    mapsUri?: string | null;
    /**
     * Output only. A link to the page on Google Search where a customer can leave a review for the location.
     */
    newReviewUri?: string | null;
    /**
     * Output only. If this locationappears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. This field can be set during Create calls, but not for Update.
     */
    placeId?: string | null;
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
   * The time periods during which a location is open for certain types of business.
   */
  export interface Schema$MoreHours {
    /**
     * Required. Type of hours. Clients should call {#link businessCategories:BatchGet\} to get supported hours types for categories of their locations.
     */
    hoursTypeId?: string | null;
    /**
     * Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week.
     */
    periods?: Schema$TimePeriod[];
  }
  /**
   * More hours types that a business can offers, in addition to its regular hours.
   */
  export interface Schema$MoreHoursType {
    /**
     * Output only. The human-readable English display name for the hours type.
     */
    displayName?: string | null;
    /**
     * Output only. A stable ID provided by Google for this hours type.
     */
    hoursTypeId?: string | null;
    /**
     * Output only. The human-readable localized display name for the hours type.
     */
    localizedDisplayName?: string | null;
  }
  /**
   * Information related to the opening state of the business.
   */
  export interface Schema$OpenInfo {
    /**
     * Output only. Indicates whether this business is eligible for re-open.
     */
    canReopen?: boolean | null;
    /**
     * Optional. The date on which the location first opened. If the exact day is not known, month and year only can be provided. The date must be in the past or be no more than one year in the future.
     */
    openingDate?: Schema$Date;
    /**
     * Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.
     */
    status?: string | null;
  }
  /**
   * A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
   */
  export interface Schema$PhoneNumbers {
    /**
     * Optional. Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.
     */
    additionalPhones?: string[] | null;
    /**
     * Required. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.
     */
    primaryPhone?: string | null;
  }
  /**
   * Defines an area that's represented by a place ID.
   */
  export interface Schema$PlaceInfo {
    /**
     * Required. The ID of the place. Must correspond to a region. (https://developers.google.com/places/web-service/supported_types#table3)
     */
    placeId?: string | null;
    /**
     * Required. The localized name of the place. For example, `Scottsdale, AZ`.
     */
    placeName?: string | null;
  }
  /**
   * Defines the union of areas represented by a set of places.
   */
  export interface Schema$Places {
    /**
     * The areas represented by place IDs. Limited to a maximum of 20 places.
     */
    placeInfos?: Schema$PlaceInfo[];
  }
  /**
   * Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
     */
    sublocality?: string | null;
  }
  /**
   * All information pertaining to the location's profile.
   */
  export interface Schema$Profile {
    /**
     * Required. Description of the location in your own voice, not editable by anyone else.
     */
    description?: string | null;
  }
  /**
   * Information of all parent and children locations related to this one.
   */
  export interface Schema$RelationshipData {
    /**
     * The list of children locations that this location has relations with.
     */
    childrenLocations?: Schema$RelevantLocation[];
    /**
     * The resource name of the Chain that this location is member of. How to find Chain ID
     */
    parentChain?: string | null;
    /**
     * The parent location that this location has relations with.
     */
    parentLocation?: Schema$RelevantLocation;
  }
  /**
   * Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
   */
  export interface Schema$RelevantLocation {
    /**
     * Required. Specify the location that is on the other side of the relation by its placeID.
     */
    placeId?: string | null;
    /**
     * Required. The type of the relationship.
     */
    relationType?: string | null;
  }
  /**
   * Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
   */
  export interface Schema$RepeatedEnumAttributeValue {
    /**
     * Enum values that are set.
     */
    setValues?: string[] | null;
    /**
     * Enum values that are unset.
     */
    unsetValues?: string[] | null;
  }
  /**
   * Response message for Locations.SearchChains.
   */
  export interface Schema$SearchChainsResponse {
    /**
     * Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance.
     */
    chains?: Schema$Chain[];
  }
  /**
   * Request message for GoogleLocations.SearchGoogleLocations.
   */
  export interface Schema$SearchGoogleLocationsRequest {
    /**
     * Location to search for. If provided, will find locations which match the provided location details, which must include a value for the title.
     */
    location?: Schema$Location;
    /**
     * The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.
     */
    pageSize?: number | null;
    /**
     * Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.
     */
    query?: string | null;
  }
  /**
   * Response message for GoogleLocations.SearchGoogleLocations.
   */
  export interface Schema$SearchGoogleLocationsResponse {
    /**
     * A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.
     */
    googleLocations?: Schema$GoogleLocation[];
  }
  /**
   * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
   */
  export interface Schema$ServiceAreaBusiness {
    /**
     * Required. Indicates the type of the service area business.
     */
    businessType?: string | null;
    /**
     * The area that this business serves defined through a set of places.
     */
    places?: Schema$Places;
    /**
     * Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address.
     */
    regionCode?: string | null;
  }
  /**
   * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
   */
  export interface Schema$ServiceItem {
    /**
     * Optional. This field will be set case of free-form services data.
     */
    freeFormServiceItem?: Schema$FreeFormServiceItem;
    /**
     * Optional. Represents the monetary price of the service item. We recommend that currency_code and units should be set when including a price. This will be treated as a fixed price for the service item.
     */
    price?: Schema$Money;
    /**
     * Optional. This field will be set case of structured services data.
     */
    structuredServiceItem?: Schema$StructuredServiceItem;
  }
  /**
   * A message describing a service type that the business offers.
   */
  export interface Schema$ServiceType {
    /**
     * Output only. The human-readable display name for the service type.
     */
    displayName?: string | null;
    /**
     * Output only. A stable ID (provided by Google) for this service type.
     */
    serviceTypeId?: string | null;
  }
  /**
   * Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00
   */
  export interface Schema$SpecialHourPeriod {
    /**
     * Optional. If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day.
     */
    closed?: boolean | null;
    /**
     * Optional. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `closed` is false.
     */
    closeTime?: Schema$TimeOfDay;
    /**
     * Optional. The calendar date this special hour period ends on. If `end_date` field is not set, default to the date specified in `start_date`. If set, this field must be equal to or at most 1 day after `start_date`.
     */
    endDate?: Schema$Date;
    /**
     * Optional. Valid values are 00:00-24:00 where 24:00 represents midnight at the end of the specified day field. Must be specified if `closed` is false.
     */
    openTime?: Schema$TimeOfDay;
    /**
     * Required. The calendar date this special hour period starts on.
     */
    startDate?: Schema$Date;
  }
  /**
   * Represents a set of time periods when a location's operational hours differ from its normal business hours.
   */
  export interface Schema$SpecialHours {
    /**
     * Required. A list of exceptions to the business's regular hours.
     */
    specialHourPeriods?: Schema$SpecialHourPeriod[];
  }
  /**
   * Represents a structured service offered by the merchant. For eg: toilet_installation.
   */
  export interface Schema$StructuredServiceItem {
    /**
     * Optional. Description of structured service item. The character limit is 300.
     */
    description?: string | null;
    /**
     * Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service.
     */
    serviceTypeId?: string | null;
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
   * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
   */
  export interface Schema$TimePeriod {
    /**
     * Required. Indicates the day of the week this period ends on.
     */
    closeDay?: string | null;
    /**
     * Required. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.
     */
    closeTime?: Schema$TimeOfDay;
    /**
     * Required. Indicates the day of the week this period starts on.
     */
    openDay?: string | null;
    /**
     * Required. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.
     */
    openTime?: Schema$TimeOfDay;
  }
  /**
   * Values for an attribute with a `value_type` of URL.
   */
  export interface Schema$UriAttributeValue {
    /**
     * Required. The proposed URI value for this attribute.
     */
    uri?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    locations: Resource$Accounts$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Accounts$Locations(this.context);
    }
  }

  export class Resource$Accounts$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Location that will be owned by the logged in user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.accounts.locations.create({
     *     // Required. The name of the account in which to create this location.
     *     parent: 'accounts/my-account',
     *     // Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
     *     requestId: 'placeholder-value',
     *     // Optional. If true, the request is validated without actually creating the location.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adWordsLocationExtensions": {},
     *       //   "categories": {},
     *       //   "labels": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "latlng": {},
     *       //   "metadata": {},
     *       //   "moreHours": [],
     *       //   "name": "my_name",
     *       //   "openInfo": {},
     *       //   "phoneNumbers": {},
     *       //   "profile": {},
     *       //   "regularHours": {},
     *       //   "relationshipData": {},
     *       //   "serviceArea": {},
     *       //   "serviceItems": [],
     *       //   "specialHours": {},
     *       //   "storeCode": "my_storeCode",
     *       //   "storefrontAddress": {},
     *       //   "title": "my_title",
     *       //   "websiteUri": "my_websiteUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsLocationExtensions": {},
     *   //   "categories": {},
     *   //   "labels": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "latlng": {},
     *   //   "metadata": {},
     *   //   "moreHours": [],
     *   //   "name": "my_name",
     *   //   "openInfo": {},
     *   //   "phoneNumbers": {},
     *   //   "profile": {},
     *   //   "regularHours": {},
     *   //   "relationshipData": {},
     *   //   "serviceArea": {},
     *   //   "serviceItems": [],
     *   //   "specialHours": {},
     *   //   "storeCode": "my_storeCode",
     *   //   "storefrontAddress": {},
     *   //   "title": "my_title",
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Accounts$Locations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Locations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    create(
      params: Params$Resource$Accounts$Locations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Locations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    create(
      params: Params$Resource$Accounts$Locations$Create,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    create(callback: BodyResponseCallback<Schema$Location>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Locations$Create
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
        {}) as Params$Resource$Accounts$Locations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Locations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/locations').replace(
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists the locations for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.accounts.locations.list({
     *     // Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
     *     filter: 'placeholder-value',
     *     // Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"
     *     orderBy: 'placeholder-value',
     *     // Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
     *     parent: 'accounts/my-account',
     *     // Required. Read mask to specify what fields will be returned in the response.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
      params: Params$Resource$Accounts$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Accounts$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Locations$List
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
        {}) as Params$Resource$Accounts$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Locations$Create
    extends StandardParameters {
    /**
     * Required. The name of the account in which to create this location.
     */
    parent?: string;
    /**
     * Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
     */
    requestId?: string;
    /**
     * Optional. If true, the request is validated without actually creating the location.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Location;
  }
  export interface Params$Resource$Accounts$Locations$List
    extends StandardParameters {
    /**
     * Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
     */
    filter?: string;
    /**
     * Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"
     */
    orderBy?: string;
    /**
     * Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
     */
    pageToken?: string;
    /**
     * Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
     */
    parent?: string;
    /**
     * Required. Read mask to specify what fields will be returned in the response.
     */
    readMask?: string;
  }

  export class Resource$Attributes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the list of attributes that would be available for a location with the given primary category and country.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.attributes.list({
     *     // The primary category stable ID to find available attributes. Must be of the format categories/{category_id\}.
     *     categoryName: 'placeholder-value',
     *     // The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
     *     languageCode: 'placeholder-value',
     *     // How many attributes to include per page. Default is 200, minimum is 1.
     *     pageSize: 'placeholder-value',
     *     // If specified, the next page of attribute metadata is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
     *     parent: 'placeholder-value',
     *     // The ISO 3166-1 alpha-2 country code to find available attributes.
     *     regionCode: 'placeholder-value',
     *     // Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
     *     showAll: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeMetadata": [],
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
      params: Params$Resource$Attributes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Attributes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAttributeMetadataResponse>>;
    list(
      params: Params$Resource$Attributes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Attributes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttributeMetadataResponse>,
      callback: BodyResponseCallback<Schema$ListAttributeMetadataResponse>
    ): void;
    list(
      params: Params$Resource$Attributes$List,
      callback: BodyResponseCallback<Schema$ListAttributeMetadataResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAttributeMetadataResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Attributes$List
        | BodyResponseCallback<Schema$ListAttributeMetadataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttributeMetadataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttributeMetadataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAttributeMetadataResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Attributes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Attributes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/attributes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$ListAttributeMetadataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttributeMetadataResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Attributes$List extends StandardParameters {
    /**
     * The primary category stable ID to find available attributes. Must be of the format categories/{category_id\}.
     */
    categoryName?: string;
    /**
     * The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
     */
    languageCode?: string;
    /**
     * How many attributes to include per page. Default is 200, minimum is 1.
     */
    pageSize?: number;
    /**
     * If specified, the next page of attribute metadata is retrieved.
     */
    pageToken?: string;
    /**
     * Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
     */
    parent?: string;
    /**
     * The ISO 3166-1 alpha-2 country code to find available attributes.
     */
    regionCode?: string;
    /**
     * Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
     */
    showAll?: boolean;
  }

  export class Resource$Categories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a list of business categories for the provided language and GConcept ids.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.categories.batchGet({
     *     // Required. The BCP 47 code of language that the category names should be returned in.
     *     languageCode: 'placeholder-value',
     *     // Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
     *     names: 'placeholder-value',
     *     // Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
     *     regionCode: 'placeholder-value',
     *     // Required. Specifies which parts to the Category resource should be returned in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categories": []
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
      params: Params$Resource$Categories$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Categories$Batchget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchGetCategoriesResponse>>;
    batchGet(
      params: Params$Resource$Categories$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Categories$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetCategoriesResponse>,
      callback: BodyResponseCallback<Schema$BatchGetCategoriesResponse>
    ): void;
    batchGet(
      params: Params$Resource$Categories$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetCategoriesResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetCategoriesResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Categories$Batchget
        | BodyResponseCallback<Schema$BatchGetCategoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetCategoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetCategoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchGetCategoriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Categories$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Categories$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/categories:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$BatchGetCategoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetCategoriesResponse>(parameters);
      }
    }

    /**
     * Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.categories.list({
     *     // Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
     *     filter: 'placeholder-value',
     *     // Required. The BCP 47 code of language.
     *     languageCode: 'placeholder-value',
     *     // Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. If specified, the next page of categories will be fetched.
     *     pageToken: 'placeholder-value',
     *     // Required. The ISO 3166-1 alpha-2 country code.
     *     regionCode: 'placeholder-value',
     *     // Required. Specifies which parts to the Category resource should be returned in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categories": [],
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
      params: Params$Resource$Categories$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Categories$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCategoriesResponse>>;
    list(
      params: Params$Resource$Categories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Categories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCategoriesResponse>,
      callback: BodyResponseCallback<Schema$ListCategoriesResponse>
    ): void;
    list(
      params: Params$Resource$Categories$List,
      callback: BodyResponseCallback<Schema$ListCategoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCategoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Categories$List
        | BodyResponseCallback<Schema$ListCategoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCategoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCategoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCategoriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Categories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Categories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/categories').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$ListCategoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCategoriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Categories$Batchget
    extends StandardParameters {
    /**
     * Required. The BCP 47 code of language that the category names should be returned in.
     */
    languageCode?: string;
    /**
     * Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
     */
    names?: string[];
    /**
     * Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
     */
    regionCode?: string;
    /**
     * Required. Specifies which parts to the Category resource should be returned in the response.
     */
    view?: string;
  }
  export interface Params$Resource$Categories$List extends StandardParameters {
    /**
     * Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
     */
    filter?: string;
    /**
     * Required. The BCP 47 code of language.
     */
    languageCode?: string;
    /**
     * Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of categories will be fetched.
     */
    pageToken?: string;
    /**
     * Required. The ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
    /**
     * Required. Specifies which parts to the Category resource should be returned in the response.
     */
    view?: string;
  }

  export class Resource$Chains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.chains.get({
     *     // Required. The chain's resource name, in the format `chains/{chain_place_id\}`.
     *     name: 'chains/my-chain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chainNames": [],
     *   //   "locationCount": 0,
     *   //   "name": "my_name",
     *   //   "websites": []
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
      params: Params$Resource$Chains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Chains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Chain>>;
    get(
      params: Params$Resource$Chains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Chains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Chain>,
      callback: BodyResponseCallback<Schema$Chain>
    ): void;
    get(
      params: Params$Resource$Chains$Get,
      callback: BodyResponseCallback<Schema$Chain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Chain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Chains$Get
        | BodyResponseCallback<Schema$Chain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Chain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Chain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Chain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Chains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
        createAPIRequest<Schema$Chain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Chain>(parameters);
      }
    }

    /**
     * Searches the chain based on chain name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.chains.search({
     *     // Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
     *     chainName: 'placeholder-value',
     *     // The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
     *     pageSize: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "chains": []
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
    search(
      params: Params$Resource$Chains$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Chains$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchChainsResponse>>;
    search(
      params: Params$Resource$Chains$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Chains$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchChainsResponse>,
      callback: BodyResponseCallback<Schema$SearchChainsResponse>
    ): void;
    search(
      params: Params$Resource$Chains$Search,
      callback: BodyResponseCallback<Schema$SearchChainsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchChainsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Chains$Search
        | BodyResponseCallback<Schema$SearchChainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchChainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchChainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchChainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Chains$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Chains$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/chains:search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$SearchChainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchChainsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Chains$Get extends StandardParameters {
    /**
     * Required. The chain's resource name, in the format `chains/{chain_place_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Chains$Search extends StandardParameters {
    /**
     * Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
     */
    chainName?: string;
    /**
     * The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
     */
    pageSize?: number;
  }

  export class Resource$Googlelocations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Search all of the possible locations that are a match to the specified request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.googleLocations.search({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "location": {},
     *       //   "pageSize": 0,
     *       //   "query": "my_query"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "googleLocations": []
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
    search(
      params: Params$Resource$Googlelocations$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Googlelocations$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchGoogleLocationsResponse>>;
    search(
      params: Params$Resource$Googlelocations$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Googlelocations$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchGoogleLocationsResponse>,
      callback: BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
    ): void;
    search(
      params: Params$Resource$Googlelocations$Search,
      callback: BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Googlelocations$Search
        | BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchGoogleLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchGoogleLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Googlelocations$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Googlelocations$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/googleLocations:search').replace(
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
        createAPIRequest<Schema$SearchGoogleLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchGoogleLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Googlelocations$Search
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchGoogleLocationsRequest;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    attributes: Resource$Locations$Attributes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attributes = new Resource$Locations$Attributes(this.context);
    }

    /**
     * Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.delete({
     *     // Required. The name of the location to delete.
     *     name: 'locations/my-location',
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
      params: Params$Resource$Locations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Locations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Locations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Locations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Locations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Locations$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
     * Returns the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.get({
     *     // Required. The name of the location to fetch.
     *     name: 'locations/my-location',
     *     // Required. Read mask to specify what fields will be returned in the response.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsLocationExtensions": {},
     *   //   "categories": {},
     *   //   "labels": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "latlng": {},
     *   //   "metadata": {},
     *   //   "moreHours": [],
     *   //   "name": "my_name",
     *   //   "openInfo": {},
     *   //   "phoneNumbers": {},
     *   //   "profile": {},
     *   //   "regularHours": {},
     *   //   "relationshipData": {},
     *   //   "serviceArea": {},
     *   //   "serviceItems": [],
     *   //   "specialHours": {},
     *   //   "storeCode": "my_storeCode",
     *   //   "storefrontAddress": {},
     *   //   "title": "my_title",
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
     * Looks up all the attributes set for a given location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.getAttributes({
     *     // Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     *     name: 'locations/my-location/attributes',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": [],
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
    getAttributes(
      params: Params$Resource$Locations$Getattributes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAttributes(
      params?: Params$Resource$Locations$Getattributes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>;
    getAttributes(
      params: Params$Resource$Locations$Getattributes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAttributes(
      params: Params$Resource$Locations$Getattributes,
      options: MethodOptions | BodyResponseCallback<Schema$Attributes>,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    getAttributes(
      params: Params$Resource$Locations$Getattributes,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    getAttributes(callback: BodyResponseCallback<Schema$Attributes>): void;
    getAttributes(
      paramsOrCallback?:
        | Params$Resource$Locations$Getattributes
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Getattributes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Getattributes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
        createAPIRequest<Schema$Attributes>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attributes>(parameters);
      }
    }

    /**
     * Gets the Google-updated version of the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.getGoogleUpdated({
     *     // Required. The name of the location to fetch.
     *     name: 'locations/my-location',
     *     // Required. Read mask to specify what fields will be returned in the response.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "diffMask": "my_diffMask",
     *   //   "location": {},
     *   //   "pendingMask": "my_pendingMask"
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
    getGoogleUpdated(
      params: Params$Resource$Locations$Getgoogleupdated,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getGoogleUpdated(
      params?: Params$Resource$Locations$Getgoogleupdated,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleUpdatedLocation>>;
    getGoogleUpdated(
      params: Params$Resource$Locations$Getgoogleupdated,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Getgoogleupdated,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleUpdatedLocation>,
      callback: BodyResponseCallback<Schema$GoogleUpdatedLocation>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Getgoogleupdated,
      callback: BodyResponseCallback<Schema$GoogleUpdatedLocation>
    ): void;
    getGoogleUpdated(
      callback: BodyResponseCallback<Schema$GoogleUpdatedLocation>
    ): void;
    getGoogleUpdated(
      paramsOrCallback?:
        | Params$Resource$Locations$Getgoogleupdated
        | BodyResponseCallback<Schema$GoogleUpdatedLocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleUpdatedLocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleUpdatedLocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleUpdatedLocation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Getgoogleupdated;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Getgoogleupdated;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getGoogleUpdated').replace(
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
        createAPIRequest<Schema$GoogleUpdatedLocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleUpdatedLocation>(parameters);
      }
    }

    /**
     * Updates the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.patch({
     *     // Google identifier for this location in the form: `locations/{location_id\}`.
     *     name: 'locations/my-location',
     *     // Required. The specific fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. If true, the request is validated without actually updating the location. When this field is set, we will only return validation errors if there were any. The response will be empty if no errors were found.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adWordsLocationExtensions": {},
     *       //   "categories": {},
     *       //   "labels": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "latlng": {},
     *       //   "metadata": {},
     *       //   "moreHours": [],
     *       //   "name": "my_name",
     *       //   "openInfo": {},
     *       //   "phoneNumbers": {},
     *       //   "profile": {},
     *       //   "regularHours": {},
     *       //   "relationshipData": {},
     *       //   "serviceArea": {},
     *       //   "serviceItems": [],
     *       //   "specialHours": {},
     *       //   "storeCode": "my_storeCode",
     *       //   "storefrontAddress": {},
     *       //   "title": "my_title",
     *       //   "websiteUri": "my_websiteUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsLocationExtensions": {},
     *   //   "categories": {},
     *   //   "labels": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "latlng": {},
     *   //   "metadata": {},
     *   //   "moreHours": [],
     *   //   "name": "my_name",
     *   //   "openInfo": {},
     *   //   "phoneNumbers": {},
     *   //   "profile": {},
     *   //   "regularHours": {},
     *   //   "relationshipData": {},
     *   //   "serviceArea": {},
     *   //   "serviceItems": [],
     *   //   "specialHours": {},
     *   //   "storeCode": "my_storeCode",
     *   //   "storefrontAddress": {},
     *   //   "title": "my_title",
     *   //   "websiteUri": "my_websiteUri"
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
      params: Params$Resource$Locations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Locations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    patch(
      params: Params$Resource$Locations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Locations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    patch(
      params: Params$Resource$Locations$Patch,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Location>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Locations$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Update attributes for a given location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res = await mybusinessbusinessinformation.locations.updateAttributes({
     *     // Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute\}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.
     *     attributeMask: 'placeholder-value',
     *     // Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     *     name: 'locations/my-location/attributes',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": [],
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": [],
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
    updateAttributes(
      params: Params$Resource$Locations$Updateattributes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateAttributes(
      params?: Params$Resource$Locations$Updateattributes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>;
    updateAttributes(
      params: Params$Resource$Locations$Updateattributes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateAttributes(
      params: Params$Resource$Locations$Updateattributes,
      options: MethodOptions | BodyResponseCallback<Schema$Attributes>,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    updateAttributes(
      params: Params$Resource$Locations$Updateattributes,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    updateAttributes(callback: BodyResponseCallback<Schema$Attributes>): void;
    updateAttributes(
      paramsOrCallback?:
        | Params$Resource$Locations$Updateattributes
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Updateattributes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Updateattributes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
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
        createAPIRequest<Schema$Attributes>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attributes>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Delete extends StandardParameters {
    /**
     * Required. The name of the location to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Get extends StandardParameters {
    /**
     * Required. The name of the location to fetch.
     */
    name?: string;
    /**
     * Required. Read mask to specify what fields will be returned in the response.
     */
    readMask?: string;
  }
  export interface Params$Resource$Locations$Getattributes
    extends StandardParameters {
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Getgoogleupdated
    extends StandardParameters {
    /**
     * Required. The name of the location to fetch.
     */
    name?: string;
    /**
     * Required. Read mask to specify what fields will be returned in the response.
     */
    readMask?: string;
  }
  export interface Params$Resource$Locations$Patch extends StandardParameters {
    /**
     * Google identifier for this location in the form: `locations/{location_id\}`.
     */
    name?: string;
    /**
     * Required. The specific fields to update.
     */
    updateMask?: string;
    /**
     * Optional. If true, the request is validated without actually updating the location. When this field is set, we will only return validation errors if there were any. The response will be empty if no errors were found.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Location;
  }
  export interface Params$Resource$Locations$Updateattributes
    extends StandardParameters {
    /**
     * Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute\}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.
     */
    attributeMask?: string;
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attributes;
  }

  export class Resource$Locations$Attributes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the Google-updated version of the specified location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/mybusinessbusinessinformation.googleapis.com
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
     * const mybusinessbusinessinformation =
     *   google.mybusinessbusinessinformation('v1');
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
     *   const res =
     *     await mybusinessbusinessinformation.locations.attributes.getGoogleUpdated({
     *       // Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     *       name: 'locations/my-location/attributes',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": [],
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
    getGoogleUpdated(
      params: Params$Resource$Locations$Attributes$Getgoogleupdated,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getGoogleUpdated(
      params?: Params$Resource$Locations$Attributes$Getgoogleupdated,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>;
    getGoogleUpdated(
      params: Params$Resource$Locations$Attributes$Getgoogleupdated,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Attributes$Getgoogleupdated,
      options: MethodOptions | BodyResponseCallback<Schema$Attributes>,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    getGoogleUpdated(
      params: Params$Resource$Locations$Attributes$Getgoogleupdated,
      callback: BodyResponseCallback<Schema$Attributes>
    ): void;
    getGoogleUpdated(callback: BodyResponseCallback<Schema$Attributes>): void;
    getGoogleUpdated(
      paramsOrCallback?:
        | Params$Resource$Locations$Attributes$Getgoogleupdated
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attributes>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Attributes>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Attributes$Getgoogleupdated;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Attributes$Getgoogleupdated;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://mybusinessbusinessinformation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getGoogleUpdated').replace(
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
        createAPIRequest<Schema$Attributes>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attributes>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Attributes$Getgoogleupdated
    extends StandardParameters {
    /**
     * Required. Google identifier for this location in the form of `locations/{location_id\}/attributes`.
     */
    name?: string;
  }
}
