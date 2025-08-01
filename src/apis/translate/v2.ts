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

export namespace translate_v2 {
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
     * OAuth bearer token.
     */
    bearer_token?: string;
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
     * Pretty-print response.
     */
    pp?: boolean;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
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
   * Google Cloud Translation API
   *
   * The Google Cloud Translation API lets websites and programs integrate with
   *     Google Translate programmatically.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const translate = google.translate('v2');
   * ```
   */
  export class Translate {
    context: APIRequestContext;
    detections: Resource$Detections;
    languages: Resource$Languages;
    translations: Resource$Translations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.detections = new Resource$Detections(this.context);
      this.languages = new Resource$Languages(this.context);
      this.translations = new Resource$Translations(this.context);
    }
  }

  export interface Schema$DetectionsListResponse {
    /**
     * A detections contains detection results of several text
     */
    detections?: Schema$DetectionsResource[];
  }
  /**
   * An array of languages which we detect for the given text The most likely language list first.
   */
  export interface Schema$DetectionsResource {}
  /**
   * The request message for language detection.
   */
  export interface Schema$DetectLanguageRequest {
    /**
     * The input text upon which to perform language detection. Repeat this
     * parameter to perform language detection on multiple text inputs.
     */
    q?: string[] | null;
  }
  /**
   * The request message for discovering supported languages.
   */
  export interface Schema$GetSupportedLanguagesRequest {
    /**
     * The language to use to return localized, human readable names of supported
     * languages.
     */
    target?: string | null;
  }
  export interface Schema$LanguagesListResponse {
    /**
     * List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
     */
    languages?: Schema$LanguagesResource[];
  }
  export interface Schema$LanguagesResource {
    /**
     * Supported language code, generally consisting of its ISO 639-1
     * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
     * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
     */
    language?: string | null;
    /**
     * Human readable name of the language localized to the target language.
     */
    name?: string | null;
  }
  /**
   * The main translation request message for the Cloud Translation API.
   */
  export interface Schema$TranslateTextRequest {
    /**
     * The format of the source text, in either HTML (default) or plain-text. A
     * value of "html" indicates HTML and a value of "text" indicates plain-text.
     */
    format?: string | null;
    /**
     * The `model` type requested for this translation. Valid values are
     * listed in public documentation.
     */
    model?: string | null;
    /**
     * The input text to translate. Repeat this parameter to perform translation
     * operations on multiple text inputs.
     */
    q?: string[] | null;
    /**
     * The language of the source text, set to one of the language codes listed in
     * Language Support. If the source language is not specified, the API will
     * attempt to identify the source language automatically and return it within
     * the response.
     */
    source?: string | null;
    /**
     * The language to use for translation of the input text, set to one of the
     * language codes listed in Language Support.
     */
    target?: string | null;
  }
  /**
   * The main language translation response message.
   */
  export interface Schema$TranslationsListResponse {
    /**
     * Translations contains list of translation results of given text
     */
    translations?: Schema$TranslationsResource[];
  }
  export interface Schema$TranslationsResource {
    /**
     * The source language of the initial request, detected automatically, if
     * no source language was passed within the initial request. If the
     * source language was passed, auto-detection of the language will not
     * occur and this field will be empty.
     */
    detectedSourceLanguage?: string | null;
    /**
     * The `model` type used for this translation. Valid values are
     * listed in public documentation. Can be different from requested `model`.
     * Present only if specific model type was explicitly requested.
     */
    model?: string | null;
    /**
     * Text translated into the target language.
     */
    translatedText?: string | null;
  }

  export class Resource$Detections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Detects the language of text within a request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/translate.googleapis.com
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
     * const translate = google.translate('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-translation',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.detections.detect({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "q": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "detections": []
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
    detect(
      params: Params$Resource$Detections$Detect,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    detect(
      params?: Params$Resource$Detections$Detect,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DetectionsListResponse>>;
    detect(
      params: Params$Resource$Detections$Detect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    detect(
      params: Params$Resource$Detections$Detect,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectionsListResponse>,
      callback: BodyResponseCallback<Schema$DetectionsListResponse>
    ): void;
    detect(
      params: Params$Resource$Detections$Detect,
      callback: BodyResponseCallback<Schema$DetectionsListResponse>
    ): void;
    detect(callback: BodyResponseCallback<Schema$DetectionsListResponse>): void;
    detect(
      paramsOrCallback?:
        | Params$Resource$Detections$Detect
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DetectionsListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Detections$Detect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Detections$Detect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/language/translate/v2/detect').replace(
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
        createAPIRequest<Schema$DetectionsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DetectionsListResponse>(parameters);
      }
    }

    /**
     * Detects the language of text within a request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/translate.googleapis.com
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
     * const translate = google.translate('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-translation',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.detections.list({
     *     // The input text upon which to perform language detection. Repeat this
     *     // parameter to perform language detection on multiple text inputs.
     *     q: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "detections": []
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
      params: Params$Resource$Detections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Detections$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DetectionsListResponse>>;
    list(
      params: Params$Resource$Detections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Detections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectionsListResponse>,
      callback: BodyResponseCallback<Schema$DetectionsListResponse>
    ): void;
    list(
      params: Params$Resource$Detections$List,
      callback: BodyResponseCallback<Schema$DetectionsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DetectionsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Detections$List
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DetectionsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DetectionsListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Detections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Detections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/language/translate/v2/detect').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['q'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DetectionsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DetectionsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Detections$Detect
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$DetectLanguageRequest;
  }
  export interface Params$Resource$Detections$List extends StandardParameters {
    /**
     * The input text upon which to perform language detection. Repeat this
     * parameter to perform language detection on multiple text inputs.
     */
    q?: string[];
  }

  export class Resource$Languages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a list of supported languages for translation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/translate.googleapis.com
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
     * const translate = google.translate('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-translation',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.languages.list({
     *     // The model type for which supported languages should be returned.
     *     model: 'placeholder-value',
     *     // The language to use to return localized, human readable names of supported
     *     // languages.
     *     target: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "languages": []
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
      params: Params$Resource$Languages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Languages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LanguagesListResponse>>;
    list(
      params: Params$Resource$Languages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Languages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LanguagesListResponse>,
      callback: BodyResponseCallback<Schema$LanguagesListResponse>
    ): void;
    list(
      params: Params$Resource$Languages$List,
      callback: BodyResponseCallback<Schema$LanguagesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LanguagesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Languages$List
        | BodyResponseCallback<Schema$LanguagesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LanguagesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LanguagesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LanguagesListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Languages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Languages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/language/translate/v2/languages').replace(
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
        createAPIRequest<Schema$LanguagesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LanguagesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Languages$List extends StandardParameters {
    /**
     * The model type for which supported languages should be returned.
     */
    model?: string;
    /**
     * The language to use to return localized, human readable names of supported
     * languages.
     */
    target?: string;
  }

  export class Resource$Translations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Translates input text, returning translated text.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/translate.googleapis.com
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
     * const translate = google.translate('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-translation',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.translations.list({
     *     // The customization id for translate
     *     cid: 'placeholder-value',
     *     // The format of the source text, in either HTML (default) or plain-text. A
     *     // value of "html" indicates HTML and a value of "text" indicates plain-text.
     *     format: 'placeholder-value',
     *     // The `model` type requested for this translation. Valid values are
     *     // listed in public documentation.
     *     model: 'placeholder-value',
     *     // The input text to translate. Repeat this parameter to perform translation
     *     // operations on multiple text inputs.
     *     q: 'placeholder-value',
     *     // The language of the source text, set to one of the language codes listed in
     *     // Language Support. If the source language is not specified, the API will
     *     // attempt to identify the source language automatically and return it within
     *     // the response.
     *     source: 'placeholder-value',
     *     // The language to use for translation of the input text, set to one of the
     *     // language codes listed in Language Support.
     *     target: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "translations": []
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
      params: Params$Resource$Translations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Translations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TranslationsListResponse>>;
    list(
      params: Params$Resource$Translations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Translations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslationsListResponse>,
      callback: BodyResponseCallback<Schema$TranslationsListResponse>
    ): void;
    list(
      params: Params$Resource$Translations$List,
      callback: BodyResponseCallback<Schema$TranslationsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TranslationsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Translations$List
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TranslationsListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Translations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Translations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/language/translate/v2').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['q', 'target'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TranslationsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TranslationsListResponse>(parameters);
      }
    }

    /**
     * Translates input text, returning translated text.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/translate.googleapis.com
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
     * const translate = google.translate('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-translation',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.translations.translate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "format": "my_format",
     *       //   "model": "my_model",
     *       //   "q": [],
     *       //   "source": "my_source",
     *       //   "target": "my_target"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "translations": []
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
    translate(
      params: Params$Resource$Translations$Translate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    translate(
      params?: Params$Resource$Translations$Translate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TranslationsListResponse>>;
    translate(
      params: Params$Resource$Translations$Translate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    translate(
      params: Params$Resource$Translations$Translate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslationsListResponse>,
      callback: BodyResponseCallback<Schema$TranslationsListResponse>
    ): void;
    translate(
      params: Params$Resource$Translations$Translate,
      callback: BodyResponseCallback<Schema$TranslationsListResponse>
    ): void;
    translate(
      callback: BodyResponseCallback<Schema$TranslationsListResponse>
    ): void;
    translate(
      paramsOrCallback?:
        | Params$Resource$Translations$Translate
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TranslationsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TranslationsListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Translations$Translate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Translations$Translate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/language/translate/v2').replace(
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
        createAPIRequest<Schema$TranslationsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TranslationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Translations$List
    extends StandardParameters {
    /**
     * The customization id for translate
     */
    cid?: string[];
    /**
     * The format of the source text, in either HTML (default) or plain-text. A
     * value of "html" indicates HTML and a value of "text" indicates plain-text.
     */
    format?: string;
    /**
     * The `model` type requested for this translation. Valid values are
     * listed in public documentation.
     */
    model?: string;
    /**
     * The input text to translate. Repeat this parameter to perform translation
     * operations on multiple text inputs.
     */
    q?: string[];
    /**
     * The language of the source text, set to one of the language codes listed in
     * Language Support. If the source language is not specified, the API will
     * attempt to identify the source language automatically and return it within
     * the response.
     */
    source?: string;
    /**
     * The language to use for translation of the input text, set to one of the
     * language codes listed in Language Support.
     */
    target?: string;
  }
  export interface Params$Resource$Translations$Translate
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$TranslateTextRequest;
  }
}
