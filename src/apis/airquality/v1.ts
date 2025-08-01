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

export namespace airquality_v1 {
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
   * Air Quality API
   *
   * The Air Quality API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const airquality = google.airquality('v1');
   * ```
   */
  export class Airquality {
    context: APIRequestContext;
    currentConditions: Resource$Currentconditions;
    forecast: Resource$Forecast;
    history: Resource$History;
    mapTypes: Resource$Maptypes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.currentConditions = new Resource$Currentconditions(this.context);
      this.forecast = new Resource$Forecast(this.context);
      this.history = new Resource$History(this.context);
      this.mapTypes = new Resource$Maptypes(this.context);
    }
  }

  /**
   * The emission sources and health effects of a given pollutant.
   */
  export interface Schema$AdditionalInfo {
    /**
     * Text representing the pollutant's main health effects.
     */
    effects?: string | null;
    /**
     * Text representing the pollutant's main emission sources.
     */
    sources?: string | null;
  }
  /**
   * The basic object for representing different air quality metrics. When brought together, these metrics provide a snapshot about the current air quality conditions. There are multiple indexes in the world serving different purposes and groups interested in measuring different aspects of air quality.
   */
  export interface Schema$AirQualityIndex {
    /**
     *  The index's numeric score. Examples: 10, 100. The value is not normalized and should only be interpreted in the context of its related air-quality index. For non-numeric indexes, this field will not be returned. Note: This field should be used for calculations, graph display, etc. For displaying the index score, you should use the AQI display field.
     */
    aqi?: number | null;
    /**
     * Textual representation of the index numeric score, that may include prefix or suffix symbols, which usually represents the worst index score. Example: \>100 or 10+. Note: This field should be used when you want to display the index score. For non-numeric indexes, this field is empty.
     */
    aqiDisplay?: string | null;
    /**
     * Textual classification of the index numeric score interpretation. For example: "Excellent air quality".
     */
    category?: string | null;
    /**
     * The index's code. This field represents the index for programming purposes by using snake case instead of spaces. Examples: "uaqi", "fra_atmo".
     */
    code?: string | null;
    /**
     * The color used to represent the AQI numeric score.
     */
    color?: Schema$Color;
    /**
     * A human readable representation of the index name. Example: "AQI (US)"
     */
    displayName?: string | null;
    /**
     * The chemical symbol of the dominant pollutant. For example: "CO".
     */
    dominantPollutant?: string | null;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * The concentration of a given pollutant in the air.
   */
  export interface Schema$Concentration {
    /**
     * Units for measuring this pollutant concentration.
     */
    units?: string | null;
    /**
     * Value of the pollutant concentration.
     */
    value?: number | null;
  }
  /**
   * Expresses a 'country/region to AQI' relationship. Pairs a country/region with a desired AQI so that air quality data that is required for that country/region will be displayed according to the chosen AQI.
   */
  export interface Schema$CustomLocalAqi {
    /**
     * The AQI to associate the country/region with. Value should be a [valid index](/maps/documentation/air-quality/laqis) code.
     */
    aqi?: string | null;
    /**
     * The country/region requiring the custom AQI. Value should be provided using [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
     */
    regionCode?: string | null;
  }
  /**
   * Health recommendations for different population groups in a free text format. The recommendations are derived from their associated air quality conditions.
   */
  export interface Schema$HealthRecommendations {
    /**
     * Sports and other strenuous outdoor activities.
     */
    athletes?: string | null;
    /**
     * Younger populations including children, toddlers, and babies.
     */
    children?: string | null;
    /**
     * Retirees and people older than the general population.
     */
    elderly?: string | null;
    /**
     * No specific sensitivities.
     */
    generalPopulation?: string | null;
    /**
     * Heart and circulatory system diseases.
     */
    heartDiseasePopulation?: string | null;
    /**
     * Respiratory related problems and asthma suffers.
     */
    lungDiseasePopulation?: string | null;
    /**
     * Women at all stages of pregnancy.
     */
    pregnantWomen?: string | null;
  }
  /**
   * Contains the air quality information for each hour in the requested range. For example, if the request is for 48 hours of history there will be 48 elements of hourly info.
   */
  export interface Schema$HourInfo {
    /**
     * A rounded down timestamp indicating the time the data refers to in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. For example: "2014-10-02T15:00:00Z".
     */
    dateTime?: string | null;
    /**
     * Health advice and recommended actions related to the reported air quality conditions. Recommendations are tailored differently for populations at risk, groups with greater sensitivities to pollutants, and the general population.
     */
    healthRecommendations?: Schema$HealthRecommendations;
    /**
     * Based on the request parameters, this list will include (up to) two air quality indexes: - Universal AQI. Will be returned if the universalAqi boolean is set to true. - Local AQI. Will be returned if the LOCAL_AQI extra computation is specified.
     */
    indexes?: Schema$AirQualityIndex[];
    /**
     * A list of pollutants affecting the location specified in the request. Note: This field will be returned only for requests that specified one or more of the following extra computations: POLLUTANT_ADDITIONAL_INFO, DOMINANT_POLLUTANT_CONCENTRATION, POLLUTANT_CONCENTRATION.
     */
    pollutants?: Schema$Pollutant[];
  }
  /**
   * Contains the air quality information for each hour in the requested range. For example, if the request is for 48 hours of forecast there will be 48 elements of hourly forecasts.
   */
  export interface Schema$HourlyForecast {
    /**
     * A rounded down timestamp indicating the time (hour) the data refers to in RFC3339 UTC "Zulu" format. For example: "2014-10-02T15:00:00Z".
     */
    dateTime?: string | null;
    /**
     * Health advice and recommended actions related to the reported air quality conditions. Recommendations are tailored differently for populations at risk, groups with greater sensitivities to pollutants, and the general population.
     */
    healthRecommendations?: Schema$HealthRecommendations;
    /**
     * Based on the request parameters, this list will include (up to) two air quality indexes: - Universal AQI. Will be returned if the `universal_aqi` boolean is set to true. - Local AQI. Will be returned if the LOCAL_AQI extra computation is specified.
     */
    indexes?: Schema$AirQualityIndex[];
    /**
     * A list of pollutants affecting the location specified in the request. Note: This field will be returned only for requests that specified one or more of the following extra computations: POLLUTANT_ADDITIONAL_INFO, DOMINANT_POLLUTANT_CONCENTRATION, POLLUTANT_CONCENTRATION.
     */
    pollutants?: Schema$Pollutant[];
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
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
   * The request definition of the air quality current conditions.
   */
  export interface Schema$LookupCurrentConditionsRequest {
    /**
     * Optional. Expresses a 'country/region to AQI' relationship. Pairs a country/region with a desired AQI so that air quality data that is required for that country/region will be displayed according to the chosen AQI. This parameter can be used to specify a non-default AQI for a given country, for example, to get the US EPA index for Canada rather than the default index for Canada.
     */
    customLocalAqis?: Schema$CustomLocalAqi[];
    /**
     * Optional. Additional features that can be optionally enabled. Specifying extra computations will result in the relevant elements and fields to be returned in the response.
     */
    extraComputations?: string[] | null;
    /**
     * Optional. Allows the client to choose the language for the response. If data cannot be provided for that language the API uses the closest match. Allowed values rely on the IETF standard. Default value is en.
     */
    languageCode?: string | null;
    /**
     * Required. The longitude and latitude from which the API looks for air quality current conditions data.
     */
    location?: Schema$LatLng;
    /**
     * Optional. Determines the color palette used for data provided by the 'Universal Air Quality Index' (UAQI). This color palette is relevant just for UAQI, other AQIs have a predetermined color palette that can't be controlled.
     */
    uaqiColorPalette?: string | null;
    /**
     * Optional. If set to true, the Universal AQI will be included in the 'indexes' field of the response. Default value is true.
     */
    universalAqi?: boolean | null;
  }
  export interface Schema$LookupCurrentConditionsResponse {
    /**
     * A rounded down timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. For example: "2014-10-02T15:00:00Z".
     */
    dateTime?: string | null;
    /**
     * Health advice and recommended actions related to the reported air quality conditions. Recommendations are tailored differently for populations at risk, groups with greater sensitivities to pollutants, and the general population.
     */
    healthRecommendations?: Schema$HealthRecommendations;
    /**
     * Based on the request parameters, this list will include (up to) two air quality indexes: - Universal AQI. Will be returned if the universalAqi boolean is set to true. - Local AQI. Will be returned if the LOCAL_AQI extra computation is specified.
     */
    indexes?: Schema$AirQualityIndex[];
    /**
     * A list of pollutants affecting the location specified in the request. Note: This field will be returned only for requests that specified one or more of the following extra computations: POLLUTANT_ADDITIONAL_INFO, DOMINANT_POLLUTANT_CONCENTRATION, POLLUTANT_CONCENTRATION.
     */
    pollutants?: Schema$Pollutant[];
    /**
     * The ISO_3166-1 alpha-2 code of the country/region corresponding to the location provided in the request. This field might be omitted from the response if the location provided in the request resides in a disputed territory.
     */
    regionCode?: string | null;
  }
  /**
   * The request object of the air quality forecast API.
   */
  export interface Schema$LookupForecastRequest {
    /**
     * Optional. Expresses a 'country/region to AQI' relationship. Pairs a country/region with a desired AQI so that air quality data that is required for that country/region will be displayed according to the chosen AQI. This parameter can be used to specify a non-default AQI for a given country, for example, to get the US EPA index for Canada rather than the default index for Canada.
     */
    customLocalAqis?: Schema$CustomLocalAqi[];
    /**
     * A timestamp for which to return the data for a specific point in time. The timestamp is rounded to the previous exact hour. Note: this will return hourly data for the requested timestamp only (i.e. a single hourly info element). For example, a request sent where the date_time parameter is set to 2023-01-03T11:05:49Z will be rounded down to 2023-01-03T11:00:00Z.
     */
    dateTime?: string | null;
    /**
     * Optional. Additional features that can be optionally enabled. Specifying extra computations will result in the relevant elements and fields to be returned in the response.
     */
    extraComputations?: string[] | null;
    /**
     * Optional. Allows the client to choose the language for the response. If data cannot be provided for that language the API uses the closest match. Allowed values rely on the IETF standard (default = 'en').
     */
    languageCode?: string | null;
    /**
     * Required. The latitude and longitude for which the API looks for air quality data.
     */
    location?: Schema$LatLng;
    /**
     * Optional. The maximum number of hourly info records to return per page (default = 24).
     */
    pageSize?: number | null;
    /**
     * Optional. A page token received from a previous forecast call. It is used to retrieve the subsequent page.
     */
    pageToken?: string | null;
    /**
     * Indicates the start and end period for which to get the forecast data. The timestamp is rounded to the previous exact hour.
     */
    period?: Schema$Interval;
    /**
     * Optional. Determines the color palette used for data provided by the 'Universal Air Quality Index' (UAQI). This color palette is relevant just for UAQI, other AQIs have a predetermined color palette that can't be controlled.
     */
    uaqiColorPalette?: string | null;
    /**
     * Optional. If set to true, the Universal AQI will be included in the 'indexes' field of the response (default = true).
     */
    universalAqi?: boolean | null;
  }
  /**
   * The response object of the air quality forecast API.
   */
  export interface Schema$LookupForecastResponse {
    /**
     * Optional. Contains the air quality information for each hour in the requested range. For example, if the request is for 48 hours of forecast there will be 48 elements of hourly forecasts.
     */
    hourlyForecasts?: Schema$HourlyForecast[];
    /**
     * Optional. The token to retrieve the next page.
     */
    nextPageToken?: string | null;
    /**
     * Optional. The ISO_3166-1 alpha-2 code of the country/region corresponding to the location provided in the request. This field might be omitted from the response if the location provided in the request resides in a disputed territory.
     */
    regionCode?: string | null;
  }
  /**
   * The request object of the air quality history API.
   */
  export interface Schema$LookupHistoryRequest {
    /**
     * Optional. Expresses a 'country/region to AQI' relationship. Pairs a country/region with a desired AQI so that air quality data that is required for that country/region will be displayed according to the chosen AQI. This parameter can be used to specify a non-default AQI for a given country, for example, to get the US EPA index for Canada rather than the default index for Canada.
     */
    customLocalAqis?: Schema$CustomLocalAqi[];
    /**
     * A timestamp for which to return historical data. The timestamp is rounded to the previous exact hour. Note: this will return hourly data for the requested timestamp only (i.e. a single hourly info element). For example, a request sent where the dateTime parameter is set to 2023-01-03T11:05:49Z will be rounded down to 2023-01-03T11:00:00Z. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    dateTime?: string | null;
    /**
     * Optional. Additional features that can be optionally enabled. Specifying extra computations will result in the relevant elements and fields to be returned in the response.
     */
    extraComputations?: string[] | null;
    /**
     * Number from 1 to 720 that indicates the hours range for the request. For example: A value of 48 will yield data from the last 48 hours.
     */
    hours?: number | null;
    /**
     * Optional. Allows the client to choose the language for the response. If data cannot be provided for that language the API uses the closest match. Allowed values rely on the IETF standard. Default value is en.
     */
    languageCode?: string | null;
    /**
     * Required. The latitude and longitude for which the API looks for air quality history data.
     */
    location?: Schema$LatLng;
    /**
     * Optional. The maximum number of hourly info records to return per page. The default is 72 and the max value is 168 (7 days of data).
     */
    pageSize?: number | null;
    /**
     * Optional. A page token received from a previous history call. It is used to retrieve the subsequent page. Note that when providing a value for this parameter all other parameters provided must match the call that provided the page token (the previous call).
     */
    pageToken?: string | null;
    /**
     * Indicates the start and end period for which to get the historical data. The timestamp is rounded to the previous exact hour.
     */
    period?: Schema$Interval;
    /**
     * Optional. Determines the color palette used for data provided by the 'Universal Air Quality Index' (UAQI). This color palette is relevant just for UAQI, other AQIs have a predetermined color palette that can't be controlled.
     */
    uaqiColorPalette?: string | null;
    /**
     * Optional. If set to true, the Universal AQI will be included in the 'indexes' field of the response. Default value is true.
     */
    universalAqi?: boolean | null;
  }
  export interface Schema$LookupHistoryResponse {
    /**
     * Optional. Contains the air quality information for each hour in the requested range. For example, if the request is for 48 hours of history there will be 48 elements of hourly info.
     */
    hoursInfo?: Schema$HourInfo[];
    /**
     * Optional. The token to retrieve the next page.
     */
    nextPageToken?: string | null;
    /**
     * Optional. The ISO_3166-1 alpha-2 code of the country/region corresponding to the location provided in the request. This field might be omitted from the response if the location provided in the request resides in a disputed territory.
     */
    regionCode?: string | null;
  }
  /**
   * Data regarding an air quality pollutant.
   */
  export interface Schema$Pollutant {
    /**
     * Additional information about the pollutant.
     */
    additionalInfo?: Schema$AdditionalInfo;
    /**
     * The pollutant's code name (for example, "so2"). For a list of supported pollutant codes, see [Reported pollutants](/maps/documentation/air-quality/pollutants#reported_pollutants).
     */
    code?: string | null;
    /**
     * The pollutant's concentration level measured by one of the standard air pollutation measure units.
     */
    concentration?: Schema$Concentration;
    /**
     * The pollutant's display name. For example: "NOx".
     */
    displayName?: string | null;
    /**
     * The pollutant's full name. For chemical compounds, this is the IUPAC name. Example: "Sulfur Dioxide". For more information about the IUPAC names table, see https://iupac.org/what-we-do/periodic-table-of-elements/.
     */
    fullName?: string | null;
  }

  export class Resource$Currentconditions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 meters resolution. Includes over 70 local indexes and global air quality index and categories.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/airquality.googleapis.com
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
     * const airquality = google.airquality('v1');
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
     *   const res = await airquality.currentConditions.lookup({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customLocalAqis": [],
     *       //   "extraComputations": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "location": {},
     *       //   "uaqiColorPalette": "my_uaqiColorPalette",
     *       //   "universalAqi": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dateTime": "my_dateTime",
     *   //   "healthRecommendations": {},
     *   //   "indexes": [],
     *   //   "pollutants": [],
     *   //   "regionCode": "my_regionCode"
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
    lookup(
      params: Params$Resource$Currentconditions$Lookup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookup(
      params?: Params$Resource$Currentconditions$Lookup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupCurrentConditionsResponse>>;
    lookup(
      params: Params$Resource$Currentconditions$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Currentconditions$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupCurrentConditionsResponse>,
      callback: BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
    ): void;
    lookup(
      params: Params$Resource$Currentconditions$Lookup,
      callback: BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Currentconditions$Lookup
        | BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupCurrentConditionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupCurrentConditionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Currentconditions$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Currentconditions$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://airquality.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/currentConditions:lookup').replace(
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
        createAPIRequest<Schema$LookupCurrentConditionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupCurrentConditionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Currentconditions$Lookup
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupCurrentConditionsRequest;
  }

  export class Resource$Forecast {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns air quality forecast for a specific location for a given time range.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/airquality.googleapis.com
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
     * const airquality = google.airquality('v1');
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
     *   const res = await airquality.forecast.lookup({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customLocalAqis": [],
     *       //   "dateTime": "my_dateTime",
     *       //   "extraComputations": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "location": {},
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "period": {},
     *       //   "uaqiColorPalette": "my_uaqiColorPalette",
     *       //   "universalAqi": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hourlyForecasts": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "regionCode": "my_regionCode"
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
    lookup(
      params: Params$Resource$Forecast$Lookup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookup(
      params?: Params$Resource$Forecast$Lookup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupForecastResponse>>;
    lookup(
      params: Params$Resource$Forecast$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Forecast$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupForecastResponse>,
      callback: BodyResponseCallback<Schema$LookupForecastResponse>
    ): void;
    lookup(
      params: Params$Resource$Forecast$Lookup,
      callback: BodyResponseCallback<Schema$LookupForecastResponse>
    ): void;
    lookup(callback: BodyResponseCallback<Schema$LookupForecastResponse>): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Forecast$Lookup
        | BodyResponseCallback<Schema$LookupForecastResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupForecastResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupForecastResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupForecastResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Forecast$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forecast$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://airquality.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forecast:lookup').replace(
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
        createAPIRequest<Schema$LookupForecastResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupForecastResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Forecast$Lookup extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupForecastRequest;
  }

  export class Resource$History {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns air quality history for a specific location for a given time range.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/airquality.googleapis.com
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
     * const airquality = google.airquality('v1');
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
     *   const res = await airquality.history.lookup({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customLocalAqis": [],
     *       //   "dateTime": "my_dateTime",
     *       //   "extraComputations": [],
     *       //   "hours": 0,
     *       //   "languageCode": "my_languageCode",
     *       //   "location": {},
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "period": {},
     *       //   "uaqiColorPalette": "my_uaqiColorPalette",
     *       //   "universalAqi": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hoursInfo": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "regionCode": "my_regionCode"
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
    lookup(
      params: Params$Resource$History$Lookup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookup(
      params?: Params$Resource$History$Lookup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LookupHistoryResponse>>;
    lookup(
      params: Params$Resource$History$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$History$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LookupHistoryResponse>,
      callback: BodyResponseCallback<Schema$LookupHistoryResponse>
    ): void;
    lookup(
      params: Params$Resource$History$Lookup,
      callback: BodyResponseCallback<Schema$LookupHistoryResponse>
    ): void;
    lookup(callback: BodyResponseCallback<Schema$LookupHistoryResponse>): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$History$Lookup
        | BodyResponseCallback<Schema$LookupHistoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LookupHistoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LookupHistoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LookupHistoryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$History$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$History$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://airquality.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/history:lookup').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LookupHistoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LookupHistoryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$History$Lookup extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupHistoryRequest;
  }

  export class Resource$Maptypes {
    context: APIRequestContext;
    heatmapTiles: Resource$Maptypes$Heatmaptiles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.heatmapTiles = new Resource$Maptypes$Heatmaptiles(this.context);
    }
  }

  export class Resource$Maptypes$Heatmaptiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a bytes array containing the data of the tile PNG image.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/airquality.googleapis.com
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
     * const airquality = google.airquality('v1');
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
     *   const res = await airquality.mapTypes.heatmapTiles.lookupHeatmapTile({
     *     // Required. The type of the air quality heatmap. Defines the pollutant that the map will graphically represent. Allowed values: - UAQI_RED_GREEN (UAQI, red-green palette) - UAQI_INDIGO_PERSIAN (UAQI, indigo-persian palette) - PM25_INDIGO_PERSIAN - GBR_DEFRA - DEU_UBA - CAN_EC - FRA_ATMO - US_AQI
     *     mapType: 'placeholder-value',
     *     // Required. Defines the east-west point in the requested tile.
     *     x: 'placeholder-value',
     *     // Required. Defines the north-south point in the requested tile.
     *     y: 'placeholder-value',
     *     // Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. Zoom level 0 is the entire world in a single tile. Zoom level 1 is the entire world in 4 tiles. Zoom level 2 is the entire world in 16 tiles. Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16
     *     zoom: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    lookupHeatmapTile(
      params: Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupHeatmapTile(
      params?: Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    lookupHeatmapTile(
      params: Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupHeatmapTile(
      params: Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    lookupHeatmapTile(
      params: Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    lookupHeatmapTile(callback: BodyResponseCallback<Schema$HttpBody>): void;
    lookupHeatmapTile(
      paramsOrCallback?:
        | Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://airquality.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/mapTypes/{mapType}/heatmapTiles/{zoom}/{x}/{y}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['mapType', 'zoom', 'x', 'y'],
        pathParams: ['mapType', 'x', 'y', 'zoom'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Maptypes$Heatmaptiles$Lookupheatmaptile
    extends StandardParameters {
    /**
     * Required. The type of the air quality heatmap. Defines the pollutant that the map will graphically represent. Allowed values: - UAQI_RED_GREEN (UAQI, red-green palette) - UAQI_INDIGO_PERSIAN (UAQI, indigo-persian palette) - PM25_INDIGO_PERSIAN - GBR_DEFRA - DEU_UBA - CAN_EC - FRA_ATMO - US_AQI
     */
    mapType?: string;
    /**
     * Required. Defines the east-west point in the requested tile.
     */
    x?: number;
    /**
     * Required. Defines the north-south point in the requested tile.
     */
    y?: number;
    /**
     * Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. Zoom level 0 is the entire world in a single tile. Zoom level 1 is the entire world in 4 tiles. Zoom level 2 is the entire world in 16 tiles. Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16
     */
    zoom?: number;
  }
}
