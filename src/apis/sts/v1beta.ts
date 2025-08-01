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

export namespace sts_v1beta {
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
   * Security Token Service API
   *
   * The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const sts = google.sts('v1beta');
   * ```
   */
  export class Sts {
    context: APIRequestContext;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
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
   * An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources.
   */
  export interface Schema$GoogleIdentityStsV1AccessBoundary {
    /**
     * A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules.
     */
    accessBoundaryRules?: Schema$GoogleIdentityStsV1AccessBoundaryRule[];
  }
  /**
   * An access boundary rule defines an upper bound of IAM permissions on a single resource.
   */
  export interface Schema$GoogleIdentityStsV1AccessBoundaryRule {
    /**
     * The availability condition further constrains the access allowed by the access boundary rule. If the condition evaluates to `true`, then this access boundary rule will provide access to the specified resource, assuming the principal has the required permissions for the resource. If the condition does not evaluate to `true`, then access to the specified resource will not be available. Note that all access boundary rules in an access boundary are evaluated together as a union. As such, another access boundary rule may allow access to the resource, even if this access boundary rule does not allow access. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). The maximum length of the `expression` field is 2048 characters.
     */
    availabilityCondition?: Schema$GoogleTypeExpr;
    /**
     * A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID\}/roles/logging.viewer` for custom roles.
     */
    availablePermissions?: string[] | null;
    /**
     * The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    availableResource?: string | null;
  }
  /**
   * An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources.
   */
  export interface Schema$GoogleIdentityStsV1betaAccessBoundary {
    /**
     * A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules.
     */
    accessBoundaryRules?: Schema$GoogleIdentityStsV1betaAccessBoundaryRule[];
  }
  /**
   * An access boundary rule defines an upper bound of IAM permissions on a single resource.
   */
  export interface Schema$GoogleIdentityStsV1betaAccessBoundaryRule {
    /**
     * The availability condition further constrains the access allowed by the access boundary rule. If the condition evaluates to `true`, then this access boundary rule will provide access to the specified resource, assuming the principal has the required permissions for the resource. If the condition does not evaluate to `true`, then access to the specified resource will not be available. Note that all access boundary rules in an access boundary are evaluated together as a union. As such, another access boundary rule may allow access to the resource, even if this access boundary rule does not allow access. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). The maximum length of the `expression` field is 2048 characters.
     */
    availabilityCondition?: Schema$GoogleTypeExpr;
    /**
     * A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID\}/roles/logging.viewer` for custom roles.
     */
    availablePermissions?: string[] | null;
    /**
     * The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    availableResource?: string | null;
  }
  /**
   * Request message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1betaExchangeTokenRequest {
    /**
     * The full resource name of the identity provider. For example, `//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/`. Required when exchanging an external credential for a Google access token.
     */
    audience?: string | null;
    /**
     * Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.
     */
    grantType?: string | null;
    /**
     * A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options. The size of the parameter value must not exceed 4096 characters.
     */
    options?: string | null;
    /**
     * Required. The type of security token. Must be `urn:ietf:params:oauth:token-type:access_token`, which indicates an OAuth 2.0 access token.
     */
    requestedTokenType?: string | null;
    /**
     * The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings; for example, `https://www.googleapis.com/auth/cloud-platform`. Required when exchanging an external credential for a Google access token. For a list of OAuth 2.0 scopes, see [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes).
     */
    scope?: string | null;
    /**
     * Required. The input token. This token is either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be either `urn:ietf:params:oauth:token-type:jwt` or `urn:ietf:params:oauth:token-type:id_token`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256` or `ES256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: For workload identity pools, this must be a value specified in the allowed audiences for the workload identity pool provider, or one of the audiences allowed by default if no audiences were specified. See https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers#oidc Example header: ``` { "alg": "RS256", "kid": "us-east-11" \} ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "//iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/my-pool/providers/my-provider", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" \} \} ``` If `subject_token` is for AWS, it must be a serialized `GetCallerIdentity` token. This token contains the same information as a request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method, as well as the AWS [signature](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) for the request information. Use Signature Version 4. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This value is typically set to the current time and is used to help prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value set to the session token. The following example shows a `GetCallerIdentity` token: ``` { "headers": [ {"key": "x-amz-date", "value": "20200815T015049Z"\}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"\}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/"\}, {"key": "host", "value": "sts.amazonaws.com"\} . ], "method": "POST", "url": "https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" \} ``` You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes.
     */
    subjectToken?: string | null;
    /**
     * Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Supported values are `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:id_token`, `urn:ietf:params:aws:token-type:aws4_request`, and `urn:ietf:params:oauth:token-type:access_token`.
     */
    subjectTokenType?: string | null;
  }
  /**
   * Response message for ExchangeToken.
   */
  export interface Schema$GoogleIdentityStsV1betaExchangeTokenResponse {
    /**
     * An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time.
     */
    access_token?: string | null;
    /**
     * The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the access token has the same expiration time as the `subject_token`.
     */
    expires_in?: number | null;
    /**
     * The token type. Always matches the value of `requested_token_type` from the request.
     */
    issued_token_type?: string | null;
    /**
     * The type of access token. Always has the value `Bearer`.
     */
    token_type?: string | null;
  }
  /**
   * An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693.
   */
  export interface Schema$GoogleIdentityStsV1betaOptions {
    /**
     * An access boundary that defines the upper bound of permissions the credential may have. The value should be a JSON object of AccessBoundary. The access boundary can include up to 10 rules. The size of the parameter value should not exceed 2048 characters.
     */
    accessBoundary?: Schema$GoogleIdentityStsV1betaAccessBoundary;
    /**
     * A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters.
     */
    userProject?: string | null;
  }
  /**
   * An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693.
   */
  export interface Schema$GoogleIdentityStsV1Options {
    /**
     * An access boundary that defines the upper bound of permissions the credential may have. The value should be a JSON object of AccessBoundary. The access boundary can include up to 10 rules. The size of the parameter value should not exceed 2048 characters.
     */
    accessBoundary?: Schema$GoogleIdentityStsV1AccessBoundary;
    /**
     * A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters.
     */
    userProject?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
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

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sts.googleapis.com
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
     * const sts = google.sts('v1beta');
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
     *   const res = await sts.token({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "grantType": "my_grantType",
     *       //   "options": "my_options",
     *       //   "requestedTokenType": "my_requestedTokenType",
     *       //   "scope": "my_scope",
     *       //   "subjectToken": "my_subjectToken",
     *       //   "subjectTokenType": "my_subjectTokenType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "access_token": "my_access_token",
     *   //   "expires_in": 0,
     *   //   "issued_token_type": "my_issued_token_type",
     *   //   "token_type": "my_token_type"
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
    token(
      params: Params$Resource$V1beta$Token,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    token(
      params?: Params$Resource$V1beta$Token,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    >;
    token(
      params: Params$Resource$V1beta$Token,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    token(
      params: Params$Resource$V1beta$Token,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>,
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      params: Params$Resource$V1beta$Token,
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      callback: BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
    ): void;
    token(
      paramsOrCallback?:
        | Params$Resource$V1beta$Token
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1beta$Token;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Token;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sts.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/token').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIdentityStsV1betaExchangeTokenResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1beta$Token extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIdentityStsV1betaExchangeTokenRequest;
  }
}
