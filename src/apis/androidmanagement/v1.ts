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

export namespace androidmanagement_v1 {
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
   * Android Management API
   *
   * The Android Management API provides remote enterprise management of Android devices and apps.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androidmanagement = google.androidmanagement('v1');
   * ```
   */
  export class Androidmanagement {
    context: APIRequestContext;
    enterprises: Resource$Enterprises;
    provisioningInfo: Resource$Provisioninginfo;
    signupUrls: Resource$Signupurls;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.enterprises = new Resource$Enterprises(this.context);
      this.provisioningInfo = new Resource$Provisioninginfo(this.context);
      this.signupUrls = new Resource$Signupurls(this.context);
    }
  }

  /**
   * A shell command was issued over ADB via “adb shell command”.
   */
  export interface Schema$AdbShellCommandEvent {
    /**
     * Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices.
     */
    shellCmd?: string | null;
  }
  /**
   * An ADB interactive shell was opened via “adb shell”. Intentionally empty.
   */
  export interface Schema$AdbShellInteractiveEvent {}
  /**
   * Parameters associated with the ADD_ESIM command to add an eSIM profile to the device.
   */
  export interface Schema$AddEsimParams {
    /**
     * Required. The activation code for the eSIM profile.
     */
    activationCode?: string | null;
    /**
     * Required. The activation state of the eSIM profile once it is downloaded.
     */
    activationState?: string | null;
  }
  /**
   * Advanced security settings. In most cases, setting these is not needed.
   */
  export interface Schema$AdvancedSecurityOverrides {
    /**
     * Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, see CommonCriteriaMode for details.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required. If Common Criteria Mode is turned off after being enabled previously, all user-configured Wi-Fi networks may be lost and any enterprise-configured Wi-Fi networks that require user input may need to be reconfigured.
     */
    commonCriteriaMode?: string | null;
    /**
     * Optional. Controls whether content protection, which scans for deceptive apps, is enabled. This is supported on Android 15 and above.
     */
    contentProtectionPolicy?: string | null;
    /**
     * Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated).
     */
    developerSettings?: string | null;
    /**
     * Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated).
     */
    googlePlayProtectVerifyApps?: string | null;
    /**
     * Optional. Controls Memory Tagging Extension (MTE) (https://source.android.com/docs/security/test/memory-safety/arm-mte) on the device. The device needs to be rebooted to apply changes to the MTE policy.
     */
    mtePolicy?: string | null;
    /**
     * Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name.
     */
    personalAppsThatCanReadWorkNotifications?: string[] | null;
    /**
     * The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated).
     */
    untrustedAppsPolicy?: string | null;
  }
  /**
   * Configuration for an always-on VPN connection.
   */
  export interface Schema$AlwaysOnVpnPackage {
    /**
     * Disallows networking when the VPN is not connected.
     */
    lockdownEnabled?: boolean | null;
    /**
     * The package name of the VPN app.
     */
    packageName?: string | null;
  }
  /**
   * A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
   */
  export interface Schema$ApiLevelCondition {
    /**
     * The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.
     */
    minApiLevel?: number | null;
  }
  /**
   * Access Point Name (APN) policy. Configuration for Access Point Names (APNs) which may override any other APNs on the device. See OVERRIDE_APNS_ENABLED and overrideApns for details.
   */
  export interface Schema$ApnPolicy {
    /**
     * Optional. APN settings for override APNs. There must not be any conflict between any of APN settings provided, otherwise the policy will be rejected. Two ApnSettings are considered to conflict when all of the following fields match on both: numericOperatorId, apn, proxyAddress, proxyPort, mmsProxyAddress, mmsProxyPort, mmsc, mvnoType, protocol, roamingProtocol. If some of the APN settings result in non-compliance of INVALID_VALUE , they will be ignored. This can be set on fully managed devices on Android 10 and above. This can also be set on work profiles on Android 13 and above and only with ApnSetting's with ENTERPRISE APN type. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 10. A NonComplianceDetail with MANAGEMENT_MODE is reported for work profiles on Android versions less than 13.
     */
    apnSettings?: Schema$ApnSetting[];
    /**
     * Optional. Whether override APNs are disabled or enabled. See DevicePolicyManager.setOverrideApnsEnabled (https://developer.android.com/reference/android/app/admin/DevicePolicyManager#setOverrideApnsEnabled) for more details.
     */
    overrideApns?: string | null;
  }
  /**
   * An Access Point Name (APN) configuration for a carrier data connection. The APN provides configuration to connect a cellular network device to an IP data network. A carrier uses this setting to decide which IP address to assign, any security methods to apply, and how the device might be connected to private networks.
   */
  export interface Schema$ApnSetting {
    /**
     * Optional. Whether User Plane resources have to be activated during every transition from CM-IDLE mode to CM-CONNECTED state for this APN. See 3GPP TS 23.501 section 5.6.13.
     */
    alwaysOnSetting?: string | null;
    /**
     * Required. Name of the APN. Policy will be rejected if this field is empty.
     */
    apn?: string | null;
    /**
     * Required. Usage categories for the APN. Policy will be rejected if this field is empty or contains APN_TYPE_UNSPECIFIED or duplicates. Multiple APN types can be set on fully managed devices. ENTERPRISE is the only allowed APN type on work profiles. A NonComplianceDetail with MANAGEMENT_MODE is reported for any other value on work profiles. APN types that are not supported on the device or management mode will be ignored. If this results in the empty list, the APN setting will be ignored, because apnTypes is a required field. A NonComplianceDetail with INVALID_VALUE is reported if none of the APN types are supported on the device or management mode.
     */
    apnTypes?: string[] | null;
    /**
     * Optional. Authentication type of the APN.
     */
    authType?: string | null;
    /**
     * Optional. Carrier ID for the APN. A value of 0 (default) means not set and negative values are rejected.
     */
    carrierId?: number | null;
    /**
     * Required. Human-readable name that describes the APN. Policy will be rejected if this field is empty.
     */
    displayName?: string | null;
    /**
     * Optional. MMSC (Multimedia Messaging Service Center) URI of the APN.
     */
    mmsc?: string | null;
    /**
     * Optional. MMS (Multimedia Messaging Service) proxy address of the APN which can be an IP address or hostname (not a URL).
     */
    mmsProxyAddress?: string | null;
    /**
     * Optional. MMS (Multimedia Messaging Service) proxy port of the APN. A value of 0 (default) means not set and negative values are rejected.
     */
    mmsProxyPort?: number | null;
    /**
     * Optional. The default MTU (Maximum Transmission Unit) size in bytes of the IPv4 routes brought up by this APN setting. A value of 0 (default) means not set and negative values are rejected. Supported on Android 13 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 13.
     */
    mtuV4?: number | null;
    /**
     * Optional. The MTU (Maximum Transmission Unit) size of the IPv6 mobile interface to which the APN connected. A value of 0 (default) means not set and negative values are rejected. Supported on Android 13 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 13.
     */
    mtuV6?: number | null;
    /**
     * Optional. MVNO match type for the APN.
     */
    mvnoType?: string | null;
    /**
     * Optional. Radio technologies (network types) the APN may use. Policy will be rejected if this field contains NETWORK_TYPE_UNSPECIFIED or duplicates.
     */
    networkTypes?: string[] | null;
    /**
     * Optional. The numeric operator ID of the APN. Numeric operator ID is defined as MCC (Mobile Country Code) + MNC (Mobile Network Code).
     */
    numericOperatorId?: string | null;
    /**
     * Optional. APN password of the APN.
     */
    password?: string | null;
    /**
     * Optional. The protocol to use to connect to this APN.
     */
    protocol?: string | null;
    /**
     * Optional. The proxy address of the APN.
     */
    proxyAddress?: string | null;
    /**
     * Optional. The proxy port of the APN. A value of 0 (default) means not set and negative values are rejected.
     */
    proxyPort?: number | null;
    /**
     * Optional. The protocol to use to connect to this APN while the device is roaming.
     */
    roamingProtocol?: string | null;
    /**
     * Optional. APN username of the APN.
     */
    username?: string | null;
  }
  /**
   * Information about an app.
   */
  export interface Schema$Application {
    /**
     * Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it).
     */
    appPricing?: string | null;
    /**
     * Application tracks visible to the enterprise.
     */
    appTracks?: Schema$AppTrackInfo[];
    /**
     * Versions currently available for this app.
     */
    appVersions?: Schema$AppVersion[];
    /**
     * The name of the author of the apps (for example, the app developer).
     */
    author?: string | null;
    /**
     * The countries which this app is available in as per ISO 3166-1 alpha-2.
     */
    availableCountries?: string[] | null;
    /**
     * The app category (e.g. RACING, SOCIAL, etc.)
     */
    category?: string | null;
    /**
     * The content rating for this app.
     */
    contentRating?: string | null;
    /**
     * The localized promotional description, if available.
     */
    description?: string | null;
    /**
     * How and to whom the package is made available.
     */
    distributionChannel?: string | null;
    /**
     * Noteworthy features (if any) of this app.
     */
    features?: string[] | null;
    /**
     * Full app description, if available.
     */
    fullDescription?: string | null;
    /**
     * A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512.
     */
    iconUrl?: string | null;
    /**
     * The set of managed properties available to be pre-configured for the app.
     */
    managedProperties?: Schema$ManagedProperty[];
    /**
     * The minimum Android SDK necessary to run the app.
     */
    minAndroidSdkVersion?: number | null;
    /**
     * The name of the app in the form enterprises/{enterprise\}/applications/{package_name\}.
     */
    name?: string | null;
    /**
     * The permissions required by the app.
     */
    permissions?: Schema$ApplicationPermission[];
    /**
     * A link to the (consumer) Google Play details page for the app.
     */
    playStoreUrl?: string | null;
    /**
     * A localised description of the recent changes made to the app.
     */
    recentChanges?: string | null;
    /**
     * A list of screenshot links representing the app.
     */
    screenshotUrls?: string[] | null;
    /**
     * A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128.
     */
    smallIconUrl?: string | null;
    /**
     * The title of the app. Localized.
     */
    title?: string | null;
    /**
     * Output only. The approximate time (within 7 days) the app was last published.
     */
    updateTime?: string | null;
  }
  /**
   * An app-related event.
   */
  export interface Schema$ApplicationEvent {
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * App event type.
     */
    eventType?: string | null;
  }
  /**
   * A permission required by the app.
   */
  export interface Schema$ApplicationPermission {
    /**
     * A longer description of the permission, providing more detail on what it affects. Localized.
     */
    description?: string | null;
    /**
     * The name of the permission. Localized.
     */
    name?: string | null;
    /**
     * An opaque string uniquely identifying the permission. Not localized.
     */
    permissionId?: string | null;
  }
  /**
   * Policy for an individual app. Note: Application availability on a given device cannot be changed using this policy if installAppsDisabled is enabled. The maximum number of applications that you can specify per policy is 3,000.
   */
  export interface Schema$ApplicationPolicy {
    /**
     * List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo.
     */
    accessibleTrackIds?: string[] | null;
    /**
     * Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy.
     */
    alwaysOnVpnLockdownExemption?: string | null;
    /**
     * Controls the auto-update mode for the app.
     */
    autoUpdateMode?: string | null;
    /**
     * Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent.
     */
    connectedWorkAndPersonalApp?: string | null;
    /**
     * Optional. Whether the app is allowed to act as a credential provider on Android 14 and above.
     */
    credentialProviderPolicy?: string | null;
    /**
     * The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps.
     */
    defaultPermissionPolicy?: string | null;
    /**
     * The scopes delegated to the app from Android Device Policy. These provide additional privileges for the applications they are applied to.
     */
    delegatedScopes?: string[] | null;
    /**
     * Whether the app is disabled. When disabled, the app data is still preserved.
     */
    disabled?: boolean | null;
    /**
     * Configuration to enable this app as an extension app, with the capability of interacting with Android Device Policy offline.This field can be set for at most one app.The signing key certificate fingerprint of the app on the device must match one of the entries in signingKeyFingerprintsSha256 or the signing key certificate fingerprints obtained from Play Store for the app to be able to communicate with Android Device Policy. If the app is not on Play Store and signingKeyFingerprintsSha256 is not set, a NonComplianceDetail with INVALID_VALUE is reported.
     */
    extensionConfig?: Schema$ExtensionConfig;
    /**
     * Optional. The constraints for installing the app. You can specify a maximum of one InstallConstraint. Multiple constraints are rejected.
     */
    installConstraint?: Schema$InstallConstraint[];
    /**
     * Optional. Amongst apps with installType set to: FORCE_INSTALLED PREINSTALLEDthis controls the relative priority of installation. A value of 0 (default) means this app has no priority over other apps. For values between 1 and 10,000, a lower value means a higher priority. Values outside of the range 0 to 10,000 inclusive are rejected.
     */
    installPriority?: number | null;
    /**
     * The type of installation to perform.
     */
    installType?: string | null;
    /**
     * Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device.
     */
    lockTaskAllowed?: boolean | null;
    /**
     * Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects
     */
    managedConfiguration?: {[key: string]: any} | null;
    /**
     * The managed configurations template for the app, saved from the managed configurations iframe. This field is ignored if managed_configuration is set.
     */
    managedConfigurationTemplate?: Schema$ManagedConfigurationTemplate;
    /**
     * The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.
     */
    minimumVersionCode?: number | null;
    /**
     * The package name of the app. For example, com.google.android.youtube for the YouTube app.
     */
    packageName?: string | null;
    /**
     * Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps.
     */
    permissionGrants?: Schema$PermissionGrant[];
    /**
     * Optional. ID of the preferential network the application uses. There must be a configuration for the specified network ID in preferentialNetworkServiceConfigs. If set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED, the application will use the default network ID specified in defaultPreferentialNetworkId. See the documentation of defaultPreferentialNetworkId for the list of apps excluded from this defaulting. This applies on both work profiles and fully managed devices on Android 13 and above.
     */
    preferentialNetworkId?: string | null;
    /**
     * Optional. Specifies whether user control is permitted for the app. User control includes user actions like force-stopping and clearing app data. Certain types of apps have special treatment, see USER_CONTROL_SETTINGS_UNSPECIFIED and USER_CONTROL_ALLOWED for more details.
     */
    userControlSettings?: string | null;
    /**
     * Specifies whether the app installed in the work profile is allowed to add widgets to the home screen.
     */
    workProfileWidgets?: string | null;
  }
  /**
   * A change to be made to a single ApplicationPolicy object.
   */
  export interface Schema$ApplicationPolicyChange {
    /**
     * If ApplicationPolicy.packageName matches an existing ApplicationPolicy object within the Policy being modified, then that object will be updated. Otherwise, it will be added to the end of the Policy.applications.
     */
    application?: Schema$ApplicationPolicy;
    /**
     * The field mask indicating the fields to update. If omitted, all modifiable fields are updated.
     */
    updateMask?: string | null;
  }
  /**
   * Information reported about an installed app.
   */
  export interface Schema$ApplicationReport {
    /**
     * The source of the package.
     */
    applicationSource?: string | null;
    /**
     * The display name of the app.
     */
    displayName?: string | null;
    /**
     * The list of app events which have occurred in the last 30 hours.
     */
    events?: Schema$ApplicationEvent[];
    /**
     * The package name of the app that installed this app.
     */
    installerPackageName?: string | null;
    /**
     * List of keyed app states reported by the app.
     */
    keyedAppStates?: Schema$KeyedAppState[];
    /**
     * Package name of the app.
     */
    packageName?: string | null;
    /**
     * The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.
     */
    packageSha256Hash?: string | null;
    /**
     * The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.
     */
    signingKeyCertFingerprints?: string[] | null;
    /**
     * Application state.
     */
    state?: string | null;
    /**
     * Whether the app is user facing.
     */
    userFacingType?: string | null;
    /**
     * The app version code, which can be used to determine whether one version is more recent than another.
     */
    versionCode?: number | null;
    /**
     * The app version as displayed to the user.
     */
    versionName?: string | null;
  }
  /**
   * Settings controlling the behavior of application reports.
   */
  export interface Schema$ApplicationReportingSettings {
    /**
     * Whether removed apps are included in application reports.
     */
    includeRemovedApps?: boolean | null;
  }
  /**
   * Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK.
   */
  export interface Schema$AppProcessInfo {
    /**
     * SHA-256 hash of the base APK, in hexadecimal format.
     */
    apkSha256Hash?: string | null;
    /**
     * Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included.
     */
    packageNames?: string[] | null;
    /**
     * Process ID.
     */
    pid?: number | null;
    /**
     * Process name.
     */
    processName?: string | null;
    /**
     * SELinux policy info.
     */
    seinfo?: string | null;
    /**
     * Process start time.
     */
    startTime?: string | null;
    /**
     * UID of the package.
     */
    uid?: number | null;
  }
  /**
   * An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$AppProcessStartEvent {
    /**
     * Information about a process.
     */
    processInfo?: Schema$AppProcessInfo;
  }
  /**
   * Id to name association of a app track.
   */
  export interface Schema$AppTrackInfo {
    /**
     * The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console.
     */
    trackAlias?: string | null;
    /**
     * The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information.
     */
    trackId?: string | null;
  }
  /**
   * This represents a single version of the app.
   */
  export interface Schema$AppVersion {
    /**
     * If the value is True, it indicates that this version is a production track.
     */
    production?: boolean | null;
    /**
     * Track identifiers that the app version is published in. This does not include the production track (see production instead).
     */
    trackIds?: string[] | null;
    /**
     * Unique increasing identifier for the app version.
     */
    versionCode?: number | null;
    /**
     * The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").
     */
    versionString?: string | null;
  }
  /**
   * An admin has enabled or disabled backup service.
   */
  export interface Schema$BackupServiceToggledEvent {
    /**
     * Package name of the admin app requesting the change.
     */
    adminPackageName?: string | null;
    /**
     * User ID of the admin app from the which the change was requested.
     */
    adminUserId?: number | null;
    /**
     * Whether the backup service is enabled
     */
    backupServiceState?: string | null;
  }
  /**
   * Batched event logs of events from the device.
   */
  export interface Schema$BatchUsageLogEvents {
    /**
     * If present, the name of the device in the form ‘enterprises/{enterpriseId\}/devices/{deviceId\}’
     */
    device?: string | null;
    /**
     * The device timestamp when the batch of events were collected from the device.
     */
    retrievalTime?: string | null;
    /**
     * The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time.
     */
    usageLogEvents?: Schema$UsageLogEvent[];
    /**
     * If present, the resource name of the user that owns this device in the form ‘enterprises/{enterpriseId\}/users/{userId\}’.
     */
    user?: string | null;
  }
  /**
   * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
   */
  export interface Schema$BlockAction {
    /**
     * Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.
     */
    blockAfterDays?: number | null;
    /**
     * Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.
     */
    blockScope?: string | null;
  }
  /**
   * A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$CertAuthorityInstalledEvent {
    /**
     * Subject of the certificate.
     */
    certificate?: string | null;
    /**
     * Whether the installation event succeeded.
     */
    success?: boolean | null;
    /**
     * The user in which the certificate install event happened. Only available for devices running Android 11 and above.
     */
    userId?: number | null;
  }
  /**
   * A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$CertAuthorityRemovedEvent {
    /**
     * Subject of the certificate.
     */
    certificate?: string | null;
    /**
     * Whether the removal succeeded.
     */
    success?: boolean | null;
    /**
     * The user in which the certificate removal event occurred. Only available for devices running Android 11 and above.
     */
    userId?: number | null;
  }
  /**
   * An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate.
   */
  export interface Schema$CertValidationFailureEvent {
    /**
     * The reason why certification validation failed.
     */
    failureReason?: string | null;
  }
  /**
   * Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return.
   */
  export interface Schema$ChoosePrivateKeyRule {
    /**
     * The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias.
     */
    packageNames?: string[] | null;
    /**
     * The alias of the private key to be used.
     */
    privateKeyAlias?: string | null;
    /**
     * The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern.
     */
    urlPattern?: string | null;
  }
  /**
   * Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
   */
  export interface Schema$ClearAppsDataParams {
    /**
     * The package names of the apps whose data will be cleared when the command is executed.
     */
    packageNames?: string[] | null;
  }
  /**
   * Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
   */
  export interface Schema$ClearAppsDataStatus {
    /**
     * The per-app results, a mapping from package names to the respective clearing result.
     */
    results?: {[key: string]: Schema$PerAppResult} | null;
  }
  /**
   * A command.
   */
  export interface Schema$Command {
    /**
     * Optional. Parameters for the ADD_ESIM command to add an eSIM profile to the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to ADD_ESIM. It is also acceptable to explicitly set type to ADD_ESIM.
     */
    addEsimParams?: Schema$AddEsimParams;
    /**
     * Parameters for the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to CLEAR_APP_DATA. It is also acceptable to explicitly set type to CLEAR_APP_DATA.
     */
    clearAppsDataParams?: Schema$ClearAppsDataParams;
    /**
     * Output only. Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataStatus.
     */
    clearAppsDataStatus?: Schema$ClearAppsDataStatus;
    /**
     * The timestamp at which the command was created. The timestamp is automatically generated by the server.
     */
    createTime?: string | null;
    /**
     * The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.
     */
    duration?: string | null;
    /**
     * If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. For reasoning about command errors, prefer fields in the following order (most preferred first): 1. Command-specific fields like clearAppsDataStatus, startLostModeStatus, or similar, if they exist. 2. This field, if set. 3. The generic error field in the Operation that wraps the command.
     */
    errorCode?: string | null;
    /**
     * Output only. Status of an ADD_ESIM or REMOVE_ESIM command.
     */
    esimStatus?: Schema$EsimCommandStatus;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies the new password. Note: The new password must be at least 6 characters long if it is numeric in case of Android 14 devices. Else the command will fail with INVALID_VALUE.
     */
    newPassword?: string | null;
    /**
     * Optional. Parameters for the REMOVE_ESIM command to remove an eSIM profile from the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to REMOVE_ESIM. It is also acceptable to explicitly set type to REMOVE_ESIM.
     */
    removeEsimParams?: Schema$RemoveEsimParams;
    /**
     * Optional. Parameters for the REQUEST_DEVICE_INFO command to get device related information. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to REQUEST_DEVICE_INFO . It is also acceptable to explicitly set type to REQUEST_DEVICE_INFO.
     */
    requestDeviceInfoParams?: Schema$RequestDeviceInfoParams;
    /**
     * Output only. Status of the REQUEST_DEVICE_INFO command.
     */
    requestDeviceInfoStatus?: Schema$RequestDeviceInfoStatus;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies flags.
     */
    resetPasswordFlags?: string[] | null;
    /**
     * Parameters for the START_LOST_MODE command to put the device into lost mode. See StartLostModeParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to START_LOST_MODE. It is also acceptable to explicitly set type to START_LOST_MODE.
     */
    startLostModeParams?: Schema$StartLostModeParams;
    /**
     * Output only. Status of the START_LOST_MODE command to put the device into lost mode. See StartLostModeStatus.
     */
    startLostModeStatus?: Schema$StartLostModeStatus;
    /**
     * Parameters for the STOP_LOST_MODE command to take the device out of lost mode. See StopLostModeParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to STOP_LOST_MODE. It is also acceptable to explicitly set type to STOP_LOST_MODE.
     */
    stopLostModeParams?: Schema$StopLostModeParams;
    /**
     * Output only. Status of the STOP_LOST_MODE command to take the device out of lost mode. See StopLostModeStatus.
     */
    stopLostModeStatus?: Schema$StopLostModeStatus;
    /**
     * The type of the command.
     */
    type?: string | null;
    /**
     * The resource name of the user that owns the device in the form enterprises/{enterpriseId\}/users/{userId\}. This is automatically generated by the server based on the device the command is sent to.
     */
    userName?: string | null;
    /**
     * Optional. Parameters for the WIPE command to wipe the device. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to WIPE. It is also acceptable to explicitly set type to WIPE.
     */
    wipeParams?: Schema$WipeParams;
  }
  /**
   * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
   */
  export interface Schema$CommonCriteriaModeInfo {
    /**
     * Whether Common Criteria Mode is enabled.
     */
    commonCriteriaModeStatus?: string | null;
    /**
     * Output only. The status of policy signature verification.
     */
    policySignatureVerificationStatus?: string | null;
  }
  /**
   * A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.
   */
  export interface Schema$ComplianceRule {
    /**
     * A condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement.
     */
    apiLevelCondition?: Schema$ApiLevelCondition;
    /**
     * If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.
     */
    disableApps?: boolean | null;
    /**
     * A condition which is satisfied if there exists any matching NonComplianceDetail for the device.
     */
    nonComplianceDetailCondition?: Schema$NonComplianceDetailCondition;
    /**
     * If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved.
     */
    packageNamesToDisable?: string[] | null;
  }
  /**
   * A TCP connect event was initiated through the standard network stack.
   */
  export interface Schema$ConnectEvent {
    /**
     * The destination IP address of the connect call.
     */
    destinationIpAddress?: string | null;
    /**
     * The destination port of the connect call.
     */
    destinationPort?: number | null;
    /**
     * The package name of the UID that performed the connect call.
     */
    packageName?: string | null;
  }
  /**
   * Contact details for managed Google Play enterprises.
   */
  export interface Schema$ContactInfo {
    /**
     * Email address for a point of contact, which will be used to send important announcements related to managed Google Play.
     */
    contactEmail?: string | null;
    /**
     * The email of the data protection officer. The email is validated but not verified.
     */
    dataProtectionOfficerEmail?: string | null;
    /**
     * The name of the data protection officer.
     */
    dataProtectionOfficerName?: string | null;
    /**
     * The phone number of the data protection officer The phone number is validated but not verified.
     */
    dataProtectionOfficerPhone?: string | null;
    /**
     * The email of the EU representative. The email is validated but not verified.
     */
    euRepresentativeEmail?: string | null;
    /**
     * The name of the EU representative.
     */
    euRepresentativeName?: string | null;
    /**
     * The phone number of the EU representative. The phone number is validated but not verified.
     */
    euRepresentativePhone?: string | null;
  }
  /**
   * This feature is not generally available.
   */
  export interface Schema$ContentProviderEndpoint {
    /**
     * This feature is not generally available.
     */
    packageName?: string | null;
    /**
     * Required. This feature is not generally available.
     */
    signingCertsSha256?: string[] | null;
    /**
     * This feature is not generally available.
     */
    uri?: string | null;
  }
  /**
   * Controls the data from the work profile that can be accessed from the personal profile and vice versa. A NonComplianceDetail with MANAGEMENT_MODE is reported if the device does not have a work profile.
   */
  export interface Schema$CrossProfilePolicies {
    /**
     * Optional. Controls whether personal profile apps can invoke app functions exposed by apps in the work profile.
     */
    crossProfileAppFunctions?: string | null;
    /**
     * Whether text copied from one profile (personal or work) can be pasted in the other profile.
     */
    crossProfileCopyPaste?: string | null;
    /**
     * Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately.
     */
    crossProfileDataSharing?: string | null;
    /**
     * List of apps which are excluded from the ShowWorkContactsInPersonalProfile setting. For this to be set, ShowWorkContactsInPersonalProfile must be set to one of the following values: SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED. In this case, these exemptions act as a blocklist. SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED. In this case, these exemptions act as an allowlist. SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED_EXCEPT_SYSTEM. In this case, these exemptions act as an allowlist, in addition to the already allowlisted system apps.Supported on Android 14 and above. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 14.
     */
    exemptionsToShowWorkContactsInPersonalProfile?: Schema$PackageNameList;
    /**
     * Whether personal apps can access contacts stored in the work profile.See also exemptions_to_show_work_contacts_in_personal_profile.
     */
    showWorkContactsInPersonalProfile?: string | null;
    /**
     * Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here.
     */
    workProfileWidgetsDefault?: string | null;
  }
  /**
   * Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted.
   */
  export interface Schema$CryptoSelfTestCompletedEvent {
    /**
     * Whether the test succeeded.
     */
    success?: boolean | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp
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
   * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
   */
  export interface Schema$Device {
    /**
     * The API level of the Android platform version running on the device.
     */
    apiLevel?: number | null;
    /**
     * Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.
     */
    applicationReports?: Schema$ApplicationReport[];
    /**
     * The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies.
     */
    appliedPasswordPolicies?: Schema$PasswordRequirements[];
    /**
     * The name of the policy currently applied to the device.
     */
    appliedPolicyName?: string | null;
    /**
     * The version of the policy currently applied to the device.
     */
    appliedPolicyVersion?: string | null;
    /**
     * The state currently applied to the device.
     */
    appliedState?: string | null;
    /**
     * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy the device is company-owned.
     */
    commonCriteriaModeInfo?: Schema$CommonCriteriaModeInfo;
    /**
     * Device settings information. This information is only available if deviceSettingsEnabled is true in the device's policy.
     */
    deviceSettings?: Schema$DeviceSettings;
    /**
     * If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field can be modified by a patch request.
     */
    disabledReason?: Schema$UserFacingMessage;
    /**
     * Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.
     */
    displays?: Schema$Display[];
    /**
     * Output only. Information related to whether this device was migrated from being managed by another Device Policy Controller (DPC).
     */
    dpcMigrationInfo?: Schema$DpcMigrationInfo;
    /**
     * The time of device enrollment.
     */
    enrollmentTime?: string | null;
    /**
     * If the device was enrolled with an enrollment token with additional data provided, this field contains that data.
     */
    enrollmentTokenData?: string | null;
    /**
     * If the device was enrolled with an enrollment token, this field contains the name of the token.
     */
    enrollmentTokenName?: string | null;
    /**
     * Detailed information about the device hardware.
     */
    hardwareInfo?: Schema$HardwareInfo;
    /**
     * Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.
     */
    hardwareStatusSamples?: Schema$HardwareStatus[];
    /**
     * Deprecated.
     */
    lastPolicyComplianceReportTime?: string | null;
    /**
     * The last time the device fetched its policy.
     */
    lastPolicySyncTime?: string | null;
    /**
     * The last time the device sent a status report.
     */
    lastStatusReportTime?: string | null;
    /**
     * The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.
     */
    managementMode?: string | null;
    /**
     * Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.Events are retained for a certain period of time and old events are deleted.
     */
    memoryEvents?: Schema$MemoryEvent[];
    /**
     * Memory information: contains information about device memory and storage.
     */
    memoryInfo?: Schema$MemoryInfo;
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string | null;
    /**
     * Device network information. This information is only available if networkInfoEnabled is true in the device's policy.
     */
    networkInfo?: Schema$NetworkInfo;
    /**
     * Details about policy settings that the device is not compliant with.
     */
    nonComplianceDetails?: Schema$NonComplianceDetail[];
    /**
     * Ownership of the managed device.
     */
    ownership?: string | null;
    /**
     * Whether the device is compliant with its policy.
     */
    policyCompliant?: boolean | null;
    /**
     * The name of the policy applied to the device, in the form enterprises/{enterpriseId\}/policies/{policyId\}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.
     */
    policyName?: string | null;
    /**
     * Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.
     */
    powerManagementEvents?: Schema$PowerManagementEvent[];
    /**
     * If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.
     */
    previousDeviceNames?: string[] | null;
    /**
     * Device's security posture value that reflects how secure the device is.
     */
    securityPosture?: Schema$SecurityPosture;
    /**
     * Detailed information about the device software. This information is only available if softwareInfoEnabled is true in the device's policy.
     */
    softwareInfo?: Schema$SoftwareInfo;
    /**
     * The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.
     */
    state?: string | null;
    /**
     * Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy.
     */
    systemProperties?: {[key: string]: string} | null;
    /**
     * The user who owns the device.
     */
    user?: Schema$User;
    /**
     * The resource name of the user that owns this device in the form enterprises/{enterpriseId\}/users/{userId\}.
     */
    userName?: string | null;
  }
  /**
   * Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more.
   */
  export interface Schema$DeviceConnectivityManagement {
    /**
     * Optional. Access Point Name (APN) policy. Configuration for Access Point Names (APNs) which may override any other APNs on the device. See OVERRIDE_APNS_ENABLED and overrideApns for details.
     */
    apnPolicy?: Schema$ApnPolicy;
    /**
     * Optional. Controls whether Bluetooth sharing is allowed.
     */
    bluetoothSharing?: string | null;
    /**
     * Controls Wi-Fi configuring privileges. Based on the option set, user will have either full or limited or no control in configuring Wi-Fi networks.
     */
    configureWifi?: string | null;
    /**
     * Optional. Preferential network service configuration. Setting this field will override preferentialNetworkService. This can be set on both work profiles and fully managed devices on Android 13 and above. See 5G network slicing (https://developers.google.com/android/management/5g-network-slicing) guide for more details.
     */
    preferentialNetworkServiceSettings?: Schema$PreferentialNetworkServiceSettings;
    /**
     * Controls tethering settings. Based on the value set, the user is partially or fully disallowed from using different forms of tethering.
     */
    tetheringSettings?: string | null;
    /**
     * Controls what files and/or data can be transferred via USB. Supported only on company-owned devices.
     */
    usbDataAccess?: string | null;
    /**
     * Controls configuring and using Wi-Fi direct settings. Supported on company-owned devices running Android 13 and above.
     */
    wifiDirectSettings?: string | null;
    /**
     * Optional. Wi-Fi roaming policy.
     */
    wifiRoamingPolicy?: Schema$WifiRoamingPolicy;
    /**
     * Restrictions on which Wi-Fi SSIDs the device can connect to. Note that this does not affect which networks can be configured on the device. Supported on company-owned devices running Android 13 and above.
     */
    wifiSsidPolicy?: Schema$WifiSsidPolicy;
  }
  /**
   * Controls for device radio settings.
   */
  export interface Schema$DeviceRadioState {
    /**
     * Controls whether airplane mode can be toggled by the user or not.
     */
    airplaneModeState?: string | null;
    /**
     * Controls whether cellular 2G setting can be toggled by the user or not.
     */
    cellularTwoGState?: string | null;
    /**
     * The minimum required security level of Wi-Fi networks that the device can connect to.
     */
    minimumWifiSecurityLevel?: string | null;
    /**
     * Controls the state of the ultra wideband setting and whether the user can toggle it on or off.
     */
    ultraWidebandState?: string | null;
    /**
     * Controls current state of Wi-Fi and if user can change its state.
     */
    wifiState?: string | null;
  }
  /**
   * Information about security related device settings on device.
   */
  export interface Schema$DeviceSettings {
    /**
     * Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.
     */
    adbEnabled?: boolean | null;
    /**
     * Whether developer mode is enabled on the device.
     */
    developmentSettingsEnabled?: boolean | null;
    /**
     * Encryption status from DevicePolicyManager.
     */
    encryptionStatus?: string | null;
    /**
     * Whether the device is secured with PIN/password.
     */
    isDeviceSecure?: boolean | null;
    /**
     * Whether the storage encryption is enabled.
     */
    isEncrypted?: boolean | null;
    /**
     * Whether installing apps from unknown sources is enabled.
     */
    unknownSourcesEnabled?: boolean | null;
    /**
     * Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device.
     */
    verifyAppsEnabled?: boolean | null;
  }
  /**
   * Device display information.
   */
  export interface Schema$Display {
    /**
     * Display density expressed as dots-per-inch.
     */
    density?: number | null;
    /**
     * Unique display id.
     */
    displayId?: number | null;
    /**
     * Display height in pixels.
     */
    height?: number | null;
    /**
     * Name of the display.
     */
    name?: string | null;
    /**
     * Refresh rate of the display in frames per second.
     */
    refreshRate?: number | null;
    /**
     * State of the display.
     */
    state?: string | null;
    /**
     * Display width in pixels.
     */
    width?: number | null;
  }
  /**
   * Controls for the display settings.
   */
  export interface Schema$DisplaySettings {
    /**
     * Optional. Controls the screen brightness settings.
     */
    screenBrightnessSettings?: Schema$ScreenBrightnessSettings;
    /**
     * Optional. Controls the screen timeout settings.
     */
    screenTimeoutSettings?: Schema$ScreenTimeoutSettings;
  }
  /**
   * A DNS lookup event was initiated through the standard network stack.
   */
  export interface Schema$DnsEvent {
    /**
     * The hostname that was looked up.
     */
    hostname?: string | null;
    /**
     * The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses).
     */
    ipAddresses?: string[] | null;
    /**
     * The package name of the UID that performed the DNS lookup.
     */
    packageName?: string | null;
    /**
     * The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log.
     */
    totalIpAddressesReturned?: string | null;
  }
  /**
   * Information related to whether this device was migrated from being managed by another Device Policy Controller (DPC).
   */
  export interface Schema$DpcMigrationInfo {
    /**
     * Output only. If this device was migrated from another DPC, the additionalData field of the migration token is populated here.
     */
    additionalData?: string | null;
    /**
     * Output only. If this device was migrated from another DPC, this is its package name. Not populated otherwise.
     */
    previousDpc?: string | null;
  }
  /**
   * EID information for each eUICC chip.
   */
  export interface Schema$Eid {
    /**
     * Output only. The EID
     */
    eid?: string | null;
  }
  /**
   * Information related to the EIDs of the device.
   */
  export interface Schema$EidInfo {
    /**
     * Output only. EID information for each eUICC chip.
     */
    eids?: Schema$Eid[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents that the device has completed enrollment. User should be in the launcher at this point, device at this point will be compliant and all setup steps have been completed. Intentionally empty.
   */
  export interface Schema$EnrollmentCompleteEvent {}
  /**
   * An enrollment token.
   */
  export interface Schema$EnrollmentToken {
    /**
     * Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.
     */
    additionalData?: string | null;
    /**
     * Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.
     */
    allowPersonalUsage?: string | null;
    /**
     * The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE.
     */
    duration?: string | null;
    /**
     * The expiration time of the token. This is a read-only field generated by the server.
     */
    expirationTimestamp?: string | null;
    /**
     * The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     */
    name?: string | null;
    /**
     * Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration.
     */
    oneTimeOnly?: boolean | null;
    /**
     * The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId\}/policies/{policyId\}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId\}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.
     */
    policyName?: string | null;
    /**
     * A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.
     */
    qrCode?: string | null;
    /**
     * This field is deprecated and the value is ignored.
     */
    user?: Schema$User;
    /**
     * The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.
     */
    value?: string | null;
  }
  /**
   * The configuration applied to an enterprise.
   */
  export interface Schema$Enterprise {
    /**
     * Deprecated and unused.
     */
    appAutoApprovalEnabled?: boolean | null;
    /**
     * The enterprise contact info of an EMM-managed enterprise.
     */
    contactInfo?: Schema$ContactInfo;
    /**
     * The types of Google Pub/Sub notifications enabled for the enterprise.
     */
    enabledNotificationTypes?: string[] | null;
    /**
     * The name of the enterprise displayed to users. This field has a maximum length of 100 characters.
     */
    enterpriseDisplayName?: string | null;
    /**
     * Output only. The type of the enterprise.
     */
    enterpriseType?: string | null;
    /**
     * Settings for Google-provided user authentication.
     */
    googleAuthenticationSettings?: Schema$GoogleAuthenticationSettings;
    /**
     * An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.
     */
    logo?: Schema$ExternalData;
    /**
     * Output only. The type of managed Google domain.
     */
    managedGoogleDomainType?: string | null;
    /**
     * Output only. The type of a managed Google Play Accounts enterprise.
     */
    managedGooglePlayAccountsEnterpriseType?: string | null;
    /**
     * The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId\}.
     */
    name?: string | null;
    /**
     * A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.
     */
    primaryColor?: number | null;
    /**
     * The topic which Pub/Sub notifications are published to, in the form projects/{project\}/topics/{topic\}. This field is only required if Pub/Sub notifications are enabled.
     */
    pubsubTopic?: string | null;
    /**
     * Sign-in details of the enterprise.
     */
    signinDetails?: Schema$SigninDetail[];
    /**
     * Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.
     */
    termsAndConditions?: Schema$TermsAndConditions[];
  }
  /**
   * An event sent for an enterprise upgrade. An enterprise upgrade is a process that upgrades a managed Google Play Accounts enterprise to a managed Google domain.
   */
  export interface Schema$EnterpriseUpgradeEvent {
    /**
     * The name of upgraded enterprise in the format "enterprises/{enterprise\}"
     */
    enterprise?: string | null;
    /**
     * Output only. The upgrade state of the enterprise.
     */
    upgradeState?: string | null;
  }
  /**
   * Status and error details (if present) of an ADD_ESIM or REMOVE_ESIM command.
   */
  export interface Schema$EsimCommandStatus {
    /**
     * Output only. Information about the eSIM added or removed. This is populated only when the eSIM operation status is SUCCESS.
     */
    esimInfo?: Schema$EsimInfo;
    /**
     * Output only. Details of the error if the status is set to INTERNAL_ERROR.
     */
    internalErrorDetails?: Schema$InternalErrorDetails;
    /**
     * Output only. Status of an ADD_ESIM or REMOVE_ESIM command.
     */
    status?: string | null;
  }
  /**
   * Details of the eSIM added or removed.
   */
  export interface Schema$EsimInfo {
    /**
     * Output only. ICC ID of the eSIM.
     */
    iccId?: string | null;
  }
  /**
   * Information related to the eUICC chip.
   */
  export interface Schema$EuiccChipInfo {
    /**
     * Output only. The Embedded Identity Document (EID) that identifies the eUICC chip for each eUICC chip on the device. This is available on company owned devices running Android 13 and above.
     */
    eid?: string | null;
  }
  /**
   * Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 11 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command on extension apps if needed for Android 11 and above.
   */
  export interface Schema$ExtensionConfig {
    /**
     * Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates. The service must be exported in the extension app's AndroidManifest.xml and extend NotificationReceiverService (https://developers.google.com/android/management/reference/amapi/com/google/android/managementapi/notification/NotificationReceiverService) (see Integrate with the AMAPI SDK (https://developers.google.com/android/management/sdk-integration) guide for more details).
     */
    notificationReceiver?: string | null;
    /**
     * Hex-encoded SHA-256 hashes of the signing key certificates of the extension app. Only hexadecimal string representations of 64 characters are valid.The signing key certificate fingerprints are always obtained from the Play Store and this field is used to provide additional signing key certificate fingerprints. However, if the application is not available on the Play Store, this field needs to be set. A NonComplianceDetail with INVALID_VALUE is reported if this field is not set when the application is not available on the Play Store.The signing key certificate fingerprint of the extension app on the device must match one of the signing key certificate fingerprints obtained from the Play Store or the ones provided in this field for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty.
     */
    signingKeyFingerprintsSha256?: string[] | null;
  }
  /**
   * Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
   */
  export interface Schema$ExternalData {
    /**
     * The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data.
     */
    sha256Hash?: string | null;
    /**
     * The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.
     */
    url?: string | null;
  }
  /**
   * A file was downloaded from the device.
   */
  export interface Schema$FilePulledEvent {
    /**
     * The path of the file being pulled.
     */
    filePath?: string | null;
  }
  /**
   * A file was uploaded onto the device.
   */
  export interface Schema$FilePushedEvent {
    /**
     * The path of the file being pushed.
     */
    filePath?: string | null;
  }
  /**
   * A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed.When the device is outside any set freeze periods, the normal policy behavior (automatic, windowed, or postponed) applies.Leap years are ignored in freeze period calculations, in particular: If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified.
   */
  export interface Schema$FreezePeriod {
    /**
     * The end date (inclusive) of the freeze period. Must be no later than 90 days from the start date. If the end date is earlier than the start date, the freeze period is considered wrapping year-end. Note: day and month must be set. year should not be set as it is not used. For example, {"month": 1,"date": 30\}.
     */
    endDate?: Schema$Date;
    /**
     * The start date (inclusive) of the freeze period. Note: day and month must be set. year should not be set as it is not used. For example, {"month": 1,"date": 30\}.
     */
    startDate?: Schema$Date;
  }
  /**
   * Request message for generating a URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain.Note: This feature is not generally available.
   */
  export interface Schema$GenerateEnterpriseUpgradeUrlRequest {
    /**
     * Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If allowedDomains is non-empty then this must belong to one of the allowedDomains.
     */
    adminEmail?: string | null;
    /**
     * Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed.
     */
    allowedDomains?: string[] | null;
  }
  /**
   * Response message for generating a URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain.Note: This feature is not generally available.
   */
  export interface Schema$GenerateEnterpriseUpgradeUrlResponse {
    /**
     * A URL for an enterprise admin to upgrade their enterprise. The page can't be rendered in an iframe.
     */
    url?: string | null;
  }
  /**
   * Contains settings for Google-provided user authentication.
   */
  export interface Schema$GoogleAuthenticationSettings {
    /**
     * Output only. Whether users need to be authenticated by Google during the enrollment process. IT admin can specify if Google authentication is enabled for the enterprise for knowledge worker devices. This value can be set only via the Google Admin Console. Google authentication can be used with signin_url In the case where Google authentication is required and a signin_url is specified, Google authentication will be launched before signin_url.
     */
    googleAuthenticationRequired?: string | null;
  }
  /**
   * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
   */
  export interface Schema$HardwareInfo {
    /**
     * Battery shutdown temperature thresholds in Celsius for each battery on the device.
     */
    batteryShutdownTemperatures?: number[] | null;
    /**
     * Battery throttling temperature thresholds in Celsius for each battery on the device.
     */
    batteryThrottlingTemperatures?: number[] | null;
    /**
     * Brand of the device. For example, Google.
     */
    brand?: string | null;
    /**
     * CPU shutdown temperature thresholds in Celsius for each CPU on the device.
     */
    cpuShutdownTemperatures?: number[] | null;
    /**
     * CPU throttling temperature thresholds in Celsius for each CPU on the device.
     */
    cpuThrottlingTemperatures?: number[] | null;
    /**
     * Baseband version. For example, MDM9625_104662.22.05.34p.
     */
    deviceBasebandVersion?: string | null;
    /**
     * Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above.
     */
    enterpriseSpecificId?: string | null;
    /**
     * Output only. Information related to the eUICC chip.
     */
    euiccChipInfo?: Schema$EuiccChipInfo[];
    /**
     * GPU shutdown temperature thresholds in Celsius for each GPU on the device.
     */
    gpuShutdownTemperatures?: number[] | null;
    /**
     * GPU throttling temperature thresholds in Celsius for each GPU on the device.
     */
    gpuThrottlingTemperatures?: number[] | null;
    /**
     * Name of the hardware. For example, Angler.
     */
    hardware?: string | null;
    /**
     * Manufacturer. For example, Motorola.
     */
    manufacturer?: string | null;
    /**
     * The model of the device. For example, Asus Nexus 7.
     */
    model?: string | null;
    /**
     * The device serial number.
     */
    serialNumber?: string | null;
    /**
     * Device skin shutdown temperature thresholds in Celsius.
     */
    skinShutdownTemperatures?: number[] | null;
    /**
     * Device skin throttling temperature thresholds in Celsius.
     */
    skinThrottlingTemperatures?: number[] | null;
  }
  /**
   * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
   */
  export interface Schema$HardwareStatus {
    /**
     * Current battery temperatures in Celsius for each battery on the device.
     */
    batteryTemperatures?: number[] | null;
    /**
     * Current CPU temperatures in Celsius for each CPU on the device.
     */
    cpuTemperatures?: number[] | null;
    /**
     * CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.
     */
    cpuUsages?: number[] | null;
    /**
     * The time the measurements were taken.
     */
    createTime?: string | null;
    /**
     * Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.
     */
    fanSpeeds?: number[] | null;
    /**
     * Current GPU temperatures in Celsius for each GPU on the device.
     */
    gpuTemperatures?: number[] | null;
    /**
     * Current device skin temperatures in Celsius.
     */
    skinTemperatures?: number[] | null;
  }
  /**
   * Amongst apps with InstallType set to: FORCE_INSTALLED PREINSTALLEDthis defines a set of restrictions for the app installation. At least one of the fields must be set. When multiple fields are set, then all the constraints need to be satisfied for the app to be installed.
   */
  export interface Schema$InstallConstraint {
    /**
     * Optional. Charging constraint.
     */
    chargingConstraint?: string | null;
    /**
     * Optional. Device idle constraint.
     */
    deviceIdleConstraint?: string | null;
    /**
     * Optional. Network type constraint.
     */
    networkTypeConstraint?: string | null;
  }
  /**
   * Internal error details if present for the ADD_ESIM or REMOVE_ESIM command.
   */
  export interface Schema$InternalErrorDetails {
    /**
     * Output only. Integer representation of the error code as specified here (https://developer.android.com/reference/android/telephony/euicc/EuiccManager#EXTRA_EMBEDDED_SUBSCRIPTION_DETAILED_CODE). See also, OPERATION_SMDX_SUBJECT_REASON_CODE. See error_code_detail for more details.
     */
    errorCode?: string | null;
    /**
     * Output only. The error code detail corresponding to the error_code.
     */
    errorCodeDetail?: string | null;
    /**
     * Output only. Integer representation of the operation code as specified here (https://developer.android.com/reference/android/telephony/euicc/EuiccManager#EXTRA_EMBEDDED_SUBSCRIPTION_DETAILED_CODE). See operation_code_detail for more details.
     */
    operationCode?: string | null;
    /**
     * Output only. The operation code detail corresponding to the operation_code.
     */
    operationCodeDetail?: string | null;
  }
  /**
   * Response on issuing a command. This is currently empty as a placeholder.
   */
  export interface Schema$IssueCommandResponse {}
  /**
   * A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$KeyDestructionEvent {
    /**
     * UID of the application which owns the key.
     */
    applicationUid?: number | null;
    /**
     * Alias of the key.
     */
    keyAlias?: string | null;
    /**
     * Whether the operation was successful.
     */
    success?: boolean | null;
  }
  /**
   * Keyed app state reported by the app.
   */
  export interface Schema$KeyedAppState {
    /**
     * The creation time of the app state on the device.
     */
    createTime?: string | null;
    /**
     * Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”).
     */
    data?: string | null;
    /**
     * The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key.
     */
    key?: string | null;
    /**
     * The time the app state was most recently updated.
     */
    lastUpdateTime?: string | null;
    /**
     * Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message.
     */
    message?: string | null;
    /**
     * The severity of the app state.
     */
    severity?: string | null;
  }
  /**
   * A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$KeyGeneratedEvent {
    /**
     * UID of the application which generated the key.
     */
    applicationUid?: number | null;
    /**
     * Alias of the key.
     */
    keyAlias?: string | null;
    /**
     * Whether the operation was successful.
     */
    success?: boolean | null;
  }
  /**
   * An attempt was made to unlock the device.
   */
  export interface Schema$KeyguardDismissAuthAttemptEvent {
    /**
     * Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device.
     */
    strongAuthMethodUsed?: boolean | null;
    /**
     * Whether the unlock attempt was successful.
     */
    success?: boolean | null;
  }
  /**
   * The keyguard was dismissed. Intentionally empty.
   */
  export interface Schema$KeyguardDismissedEvent {}
  /**
   * The device was locked either by user or timeout. Intentionally empty.
   */
  export interface Schema$KeyguardSecuredEvent {}
  /**
   * A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$KeyImportEvent {
    /**
     * UID of the application which imported the key
     */
    applicationUid?: number | null;
    /**
     * Alias of the key.
     */
    keyAlias?: string | null;
    /**
     * Whether the operation was successful.
     */
    success?: boolean | null;
  }
  /**
   * A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.
   */
  export interface Schema$KeyIntegrityViolationEvent {
    /**
     * UID of the application which owns the key
     */
    applicationUid?: number | null;
    /**
     * Alias of the key.
     */
    keyAlias?: string | null;
  }
  /**
   * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
   */
  export interface Schema$KioskCustomization {
    /**
     * Specifies whether the Settings app is allowed in kiosk mode.
     */
    deviceSettings?: string | null;
    /**
     * Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.
     */
    powerButtonActions?: string | null;
    /**
     * Specifies whether system info and notifications are disabled in kiosk mode.
     */
    statusBar?: string | null;
    /**
     * Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.
     */
    systemErrorWarnings?: string | null;
    /**
     * Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.
     */
    systemNavigation?: string | null;
  }
  /**
   * An action to launch an app.
   */
  export interface Schema$LaunchAppAction {
    /**
     * Package name of app to be launched
     */
    packageName?: string | null;
  }
  /**
   * Response to a request to list devices for a given enterprise.
   */
  export interface Schema$ListDevicesResponse {
    /**
     * The list of devices.
     */
    devices?: Schema$Device[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to a request to list enrollment tokens for a given enterprise.
   */
  export interface Schema$ListEnrollmentTokensResponse {
    /**
     * The list of enrollment tokens.
     */
    enrollmentTokens?: Schema$EnrollmentToken[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to a request to list enterprises.
   */
  export interface Schema$ListEnterprisesResponse {
    /**
     * The list of enterprises.
     */
    enterprises?: Schema$Enterprise[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to a request to list migration tokens for a given enterprise.
   */
  export interface Schema$ListMigrationTokensResponse {
    /**
     * The migration tokens from the specified enterprise.
     */
    migrationTokens?: Schema$MigrationToken[];
    /**
     * A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response to a request to list policies for a given enterprise.
   */
  export interface Schema$ListPoliciesResponse {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of policies.
     */
    policies?: Schema$Policy[];
  }
  /**
   * Response to a request to list web apps for a given enterprise.
   */
  export interface Schema$ListWebAppsResponse {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of web apps.
     */
    webApps?: Schema$WebApp[];
  }
  /**
   * The device location containing the latitude and longitude.
   */
  export interface Schema$Location {
    /**
     * The latitude position of the location
     */
    latitude?: number | null;
    /**
     * The longitude position of the location
     */
    longitude?: number | null;
  }
  /**
   * The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty.
   */
  export interface Schema$LogBufferSizeCriticalEvent {}
  /**
   * usageLog policy has been enabled. Intentionally empty.
   */
  export interface Schema$LoggingStartedEvent {}
  /**
   * usageLog policy has been disabled. Intentionally empty.
   */
  export interface Schema$LoggingStoppedEvent {}
  /**
   * A lost mode event containing the device location and battery level as a percentage.
   */
  export interface Schema$LostModeLocationEvent {
    /**
     * The battery level as a number between 0 and 100 inclusive
     */
    batteryLevel?: number | null;
    /**
     * The device location
     */
    location?: Schema$Location;
  }
  /**
   * An event indicating an outgoing phone call has been made when a device is in lost mode. Intentionally empty.
   */
  export interface Schema$LostModeOutgoingPhoneCallEvent {}
  /**
   * The managed configurations template for the app, saved from the managed configurations iframe.
   */
  export interface Schema$ManagedConfigurationTemplate {
    /**
     * Optional, a map containing configuration variables defined for the configuration.
     */
    configurationVariables?: {[key: string]: string} | null;
    /**
     * The ID of the managed configurations template.
     */
    templateId?: string | null;
  }
  /**
   * Managed property.
   */
  export interface Schema$ManagedProperty {
    /**
     * The default value of the property. BUNDLE_ARRAY properties don't have a default value.
     */
    defaultValue?: any | null;
    /**
     * A longer description of the property, providing more detail of what it affects. Localized.
     */
    description?: string | null;
    /**
     * For CHOICE or MULTISELECT properties, the list of possible entries.
     */
    entries?: Schema$ManagedPropertyEntry[];
    /**
     * The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname".
     */
    key?: string | null;
    /**
     * For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.
     */
    nestedProperties?: Schema$ManagedProperty[];
    /**
     * The name of the property. Localized.
     */
    title?: string | null;
    /**
     * The type of the property.
     */
    type?: string | null;
  }
  /**
   * An entry of a managed property.
   */
  export interface Schema$ManagedPropertyEntry {
    /**
     * The human-readable name of the value. Localized.
     */
    name?: string | null;
    /**
     * The machine-readable value of the entry, which should be used in the configuration. Not localized.
     */
    value?: string | null;
  }
  /**
   * Removable media was mounted.
   */
  export interface Schema$MediaMountEvent {
    /**
     * Mount point.
     */
    mountPoint?: string | null;
    /**
     * Volume label. Redacted to empty string on organization-owned managed profile devices.
     */
    volumeLabel?: string | null;
  }
  /**
   * Removable media was unmounted.
   */
  export interface Schema$MediaUnmountEvent {
    /**
     * Mount point.
     */
    mountPoint?: string | null;
    /**
     * Volume label. Redacted to empty string on organization-owned managed profile devices.
     */
    volumeLabel?: string | null;
  }
  /**
   * An event related to memory and storage measurements.To distinguish between new and old events, we recommend using the createTime field.
   */
  export interface Schema$MemoryEvent {
    /**
     * The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.
     */
    byteCount?: string | null;
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * Event type.
     */
    eventType?: string | null;
  }
  /**
   * Information about device memory and storage.
   */
  export interface Schema$MemoryInfo {
    /**
     * Total internal storage on device in bytes.
     */
    totalInternalStorage?: string | null;
    /**
     * Total RAM on device in bytes.
     */
    totalRam?: string | null;
  }
  /**
   * A token to initiate the migration of a device from being managed by a third-party DPC to being managed by Android Management API. A migration token is valid only for a single device. See the guide (https://developers.google.com/android/management/dpc-migration) for more details.
   */
  export interface Schema$MigrationToken {
    /**
     * Immutable. Optional EMM-specified additional data. Once the device is migrated this will be populated in the migrationAdditionalData field of the Device resource. This must be at most 1024 characters.
     */
    additionalData?: string | null;
    /**
     * Output only. Time when this migration token was created.
     */
    createTime?: string | null;
    /**
     * Output only. Once this migration token is used to migrate a device, the name of the resulting Device resource will be populated here, in the form enterprises/{enterprise\}/devices/{device\}.
     */
    device?: string | null;
    /**
     * Required. Immutable. The id of the device, as in the Play EMM API. This corresponds to the deviceId parameter in Play EMM API's Devices.get (https://developers.google.com/android/work/play/emm-api/v1/devices/get#parameters) call.
     */
    deviceId?: string | null;
    /**
     * Immutable. The time when this migration token expires. This can be at most seven days from the time of creation. The migration token is deleted seven days after it expires.
     */
    expireTime?: string | null;
    /**
     * Required. Immutable. The management mode of the device or profile being migrated.
     */
    managementMode?: string | null;
    /**
     * Output only. The name of the migration token, which is generated by the server during creation, in the form enterprises/{enterprise\}/migrationTokens/{migration_token\}.
     */
    name?: string | null;
    /**
     * Required. Immutable. The name of the policy initially applied to the enrolled device, in the form enterprises/{enterprise\}/policies/{policy\}.
     */
    policy?: string | null;
    /**
     * Input only. The time that this migration token is valid for. This is input-only, and for returning a migration token the server will populate the expireTime field. This can be at most seven days. The default is seven days.
     */
    ttl?: string | null;
    /**
     * Required. Immutable. The user id of the Managed Google Play account on the device, as in the Play EMM API. This corresponds to the userId parameter in Play EMM API's Devices.get (https://developers.google.com/android/work/play/emm-api/v1/devices/get#parameters) call.
     */
    userId?: string | null;
    /**
     * Output only. The value of the migration token.
     */
    value?: string | null;
  }
  /**
   * Request to update or create ApplicationPolicy objects in the given Policy.
   */
  export interface Schema$ModifyPolicyApplicationsRequest {
    /**
     * Required. The changes to be made to the ApplicationPolicy objects. There must be at least one ApplicationPolicyChange.
     */
    changes?: Schema$ApplicationPolicyChange[];
  }
  /**
   * Response to a request to update or create ApplicationPolicy objects in the given policy.
   */
  export interface Schema$ModifyPolicyApplicationsResponse {
    /**
     * The updated policy.
     */
    policy?: Schema$Policy;
  }
  /**
   * Device network info.
   */
  export interface Schema$NetworkInfo {
    /**
     * IMEI number of the GSM device. For example, A1000031212.
     */
    imei?: string | null;
    /**
     * MEID number of the CDMA device. For example, A00000292788E1.
     */
    meid?: string | null;
    /**
     * Alphabetic name of current registered operator. For example, Vodafone.
     */
    networkOperatorName?: string | null;
    /**
     * Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
     */
    telephonyInfos?: Schema$TelephonyInfo[];
    /**
     * Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.
     */
    wifiMacAddress?: string | null;
  }
  /**
   * Provides detail about non-compliance with a policy setting.
   */
  export interface Schema$NonComplianceDetail {
    /**
     * If the policy setting could not be applied, the current value of the setting on the device.
     */
    currentValue?: any | null;
    /**
     * For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url
     */
    fieldPath?: string | null;
    /**
     * If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.
     */
    installationFailureReason?: string | null;
    /**
     * The reason the device is not in compliance with the setting.
     */
    nonComplianceReason?: string | null;
    /**
     * The package name indicating which app is out of compliance, if applicable.
     */
    packageName?: string | null;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field.
     */
    settingName?: string | null;
    /**
     * Additional context for specific_non_compliance_reason.
     */
    specificNonComplianceContext?: Schema$SpecificNonComplianceContext;
    /**
     * The policy-specific reason the device is not in compliance with the setting.
     */
    specificNonComplianceReason?: string | null;
  }
  /**
   * A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
   */
  export interface Schema$NonComplianceDetailCondition {
    /**
     * The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
     */
    nonComplianceReason?: string | null;
    /**
     * The package name of the app that's out of compliance. If not set, then this condition matches any package name.
     */
    packageName?: string | null;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.
     */
    settingName?: string | null;
  }
  /**
   * This feature is not generally available.
   */
  export interface Schema$OncCertificateProvider {
    /**
     * This feature is not generally available.
     */
    certificateReferences?: string[] | null;
    /**
     * This feature is not generally available.
     */
    contentProviderEndpoint?: Schema$ContentProviderEndpoint;
  }
  /**
   * Additional context for non-compliance related to Wi-Fi configuration.
   */
  export interface Schema$OncWifiContext {
    /**
     * The GUID of non-compliant Wi-Fi configuration.
     */
    wifiGuid?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
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
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id\}.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Device was shutdown. Intentionally empty.
   */
  export interface Schema$OsShutdownEvent {}
  /**
   * Device was started.
   */
  export interface Schema$OsStartupEvent {
    /**
     * Verified Boot state.
     */
    verifiedBootState?: string | null;
    /**
     * dm-verity mode.
     */
    verityMode?: string | null;
  }
  /**
   * A list of package names.
   */
  export interface Schema$PackageNameList {
    /**
     * A list of package names.
     */
    packageNames?: string[] | null;
  }
  /**
   * Additional context for non-compliance related to password policies.
   */
  export interface Schema$PasswordPoliciesContext {
    /**
     * The scope of non-compliant password.
     */
    passwordPolicyScope?: string | null;
  }
  /**
   * Requirements for the password used to unlock a device.
   */
  export interface Schema$PasswordRequirements {
    /**
     * Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
     */
    maximumFailedPasswordsForWipe?: number | null;
    /**
     * Password expiration timeout.
     */
    passwordExpirationTimeout?: string | null;
    /**
     * The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
     */
    passwordHistoryLength?: number | null;
    /**
     * The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
     */
    passwordMinimumLength?: number | null;
    /**
     * Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLetters?: number | null;
    /**
     * Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLowerCase?: number | null;
    /**
     * Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNonLetter?: number | null;
    /**
     * Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNumeric?: number | null;
    /**
     * Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumSymbols?: number | null;
    /**
     * Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumUpperCase?: number | null;
    /**
     * The required password quality.
     */
    passwordQuality?: string | null;
    /**
     * The scope that the password requirement applies to.
     */
    passwordScope?: string | null;
    /**
     * The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.
     */
    requirePasswordUnlock?: string | null;
    /**
     * Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION.
     */
    unifiedLockSettings?: string | null;
  }
  /**
   * The result of an attempt to clear the data of a single app.
   */
  export interface Schema$PerAppResult {
    /**
     * The result of an attempt to clear the data of a single app.
     */
    clearingResult?: string | null;
  }
  /**
   * Configuration for an Android permission and its grant state.
   */
  export interface Schema$PermissionGrant {
    /**
     * The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR.
     */
    permission?: string | null;
    /**
     * The policy for granting the permission.
     */
    policy?: string | null;
  }
  /**
   * A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
   */
  export interface Schema$PersistentPreferredActivity {
    /**
     * The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.
     */
    actions?: string[] | null;
    /**
     * The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.
     */
    categories?: string[] | null;
    /**
     * The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.
     */
    receiverActivity?: string | null;
  }
  /**
   * Policies for apps in the personal profile of a company-owned device with a work profile.
   */
  export interface Schema$PersonalApplicationPolicy {
    /**
     * The type of installation to perform.
     */
    installType?: string | null;
    /**
     * The package name of the application.
     */
    packageName?: string | null;
  }
  /**
   * Policies controlling personal usage on a company-owned device with a work profile.
   */
  export interface Schema$PersonalUsagePolicies {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[] | null;
    /**
     * Optional. Whether bluetooth sharing is allowed.
     */
    bluetoothSharing?: string | null;
    /**
     * If true, the camera is disabled on the personal profile.
     */
    cameraDisabled?: boolean | null;
    /**
     * Controls how long the work profile can stay off. The minimum duration must be at least 3 days. Other details are as follows: - If the duration is set to 0, the feature is turned off. - If the duration is set to a value smaller than the minimum duration, the feature returns an error. *Note:* If you want to avoid personal profiles being suspended during long periods of off-time, you can temporarily set a large value for this parameter.
     */
    maxDaysWithWorkOff?: number | null;
    /**
     * Policy applied to applications in the personal profile.
     */
    personalApplications?: Schema$PersonalApplicationPolicy[];
    /**
     * Used together with personalApplications to control how apps in the personal profile are allowed or blocked.
     */
    personalPlayStoreMode?: string | null;
    /**
     * Optional. Controls whether a private space is allowed on the device.
     */
    privateSpacePolicy?: string | null;
    /**
     * If true, screen capture is disabled for all users.
     */
    screenCaptureDisabled?: boolean | null;
  }
  /**
   * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
   */
  export interface Schema$Policy {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[] | null;
    /**
     * Whether adding new users and profiles is disabled. For devices where managementMode is DEVICE_OWNER this field is ignored and the user is never allowed to add or remove users.
     */
    addUserDisabled?: boolean | null;
    /**
     * Whether adjusting the master volume is disabled. Also mutes the device. The setting has effect only on fully managed devices.
     */
    adjustVolumeDisabled?: boolean | null;
    /**
     * Advanced security settings. In most cases, setting these is not needed.
     */
    advancedSecurityOverrides?: Schema$AdvancedSecurityOverrides;
    /**
     * Configuration for an always-on VPN connection. Use with vpn_config_disabled to prevent modification of this setting.
     */
    alwaysOnVpnPackage?: Schema$AlwaysOnVpnPackage;
    /**
     * This setting is not supported. Any value is ignored.
     */
    androidDevicePolicyTracks?: string[] | null;
    /**
     * Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.
     */
    appAutoUpdatePolicy?: string | null;
    /**
     * Optional. Controls whether apps on the device for fully managed devices or in the work profile for devices with work profiles are allowed to expose app functions.
     */
    appFunctions?: string | null;
    /**
     * Policy applied to apps. This can have at most 3,000 elements.
     */
    applications?: Schema$ApplicationPolicy[];
    /**
     * Optional. Controls whether AssistContent (https://developer.android.com/reference/android/app/assist/AssistContent) is allowed to be sent to a privileged app such as an assistant app. AssistContent includes screenshots and information about an app, such as package name. This is supported on Android 15 and above.
     */
    assistContentPolicy?: string | null;
    /**
     * Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.
     */
    autoDateAndTimeZone?: string | null;
    /**
     * Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored.
     */
    autoTimeRequired?: boolean | null;
    /**
     * Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.
     */
    blockApplicationsEnabled?: boolean | null;
    /**
     * Whether configuring bluetooth is disabled.
     */
    bluetoothConfigDisabled?: boolean | null;
    /**
     * Whether bluetooth contact sharing is disabled.
     */
    bluetoothContactSharingDisabled?: boolean | null;
    /**
     * Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.
     */
    bluetoothDisabled?: boolean | null;
    /**
     * Controls the use of the camera and whether the user has access to the camera access toggle.
     */
    cameraAccess?: string | null;
    /**
     * If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected.
     */
    cameraDisabled?: boolean | null;
    /**
     * Whether configuring cell broadcast is disabled.
     */
    cellBroadcastsConfigDisabled?: boolean | null;
    /**
     * Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details. This must be empty if any application has CERT_SELECTION delegation scope.
     */
    choosePrivateKeyRules?: Schema$ChoosePrivateKeyRule[];
    /**
     * Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead.
     */
    complianceRules?: Schema$ComplianceRule[];
    /**
     * Whether creating windows besides app windows is disabled.
     */
    createWindowsDisabled?: boolean | null;
    /**
     * Controls which apps are allowed to act as credential providers on Android 14 and above. These apps store credentials, see this (https://developer.android.com/training/sign-in/passkeys) and this (https://developer.android.com/reference/androidx/credentials/CredentialManager) for details. See also credentialProviderPolicy.
     */
    credentialProviderPolicyDefault?: string | null;
    /**
     * Whether configuring user credentials is disabled.
     */
    credentialsConfigDisabled?: boolean | null;
    /**
     * Cross-profile policies applied on the device.
     */
    crossProfilePolicies?: Schema$CrossProfilePolicies;
    /**
     * Whether roaming data services are disabled.
     */
    dataRoamingDisabled?: boolean | null;
    /**
     * Whether the user is allowed to enable debugging features.
     */
    debuggingFeaturesAllowed?: boolean | null;
    /**
     * The default permission policy for runtime permission requests.
     */
    defaultPermissionPolicy?: string | null;
    /**
     * Covers controls for device connectivity such as Wi-Fi, USB data access, keyboard/mouse connections, and more.
     */
    deviceConnectivityManagement?: Schema$DeviceConnectivityManagement;
    /**
     * The device owner information to be shown on the lock screen.
     */
    deviceOwnerLockScreenInfo?: Schema$UserFacingMessage;
    /**
     * Covers controls for radio state such as Wi-Fi, bluetooth, and more.
     */
    deviceRadioState?: Schema$DeviceRadioState;
    /**
     * Optional. Controls for the display settings.
     */
    displaySettings?: Schema$DisplaySettings;
    /**
     * Whether encryption is enabled
     */
    encryptionPolicy?: string | null;
    /**
     * Whether app verification is force-enabled.
     */
    ensureVerifyAppsEnabled?: boolean | null;
    /**
     * Optional. Controls whether the enterpriseDisplayName is visible on the device (e.g. lock screen message on company-owned devices).
     */
    enterpriseDisplayNameVisibility?: string | null;
    /**
     * Whether factory resetting from settings is disabled.
     */
    factoryResetDisabled?: boolean | null;
    /**
     * Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.
     */
    frpAdminEmails?: string[] | null;
    /**
     * Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.
     */
    funDisabled?: boolean | null;
    /**
     * Whether user installation of apps is disabled.
     */
    installAppsDisabled?: boolean | null;
    /**
     * This field has no effect.
     */
    installUnknownSourcesAllowed?: boolean | null;
    /**
     * If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays. This policy is supported only in dedicated device management mode.
     */
    keyguardDisabled?: boolean | null;
    /**
     * Disabled keyguard customizations, such as widgets.
     */
    keyguardDisabledFeatures?: string[] | null;
    /**
     * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
     */
    kioskCustomization?: Schema$KioskCustomization;
    /**
     * Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior.
     */
    kioskCustomLauncherEnabled?: boolean | null;
    /**
     * The degree of location detection enabled.
     */
    locationMode?: string | null;
    /**
     * A message displayed to the user in the device administators settings screen.
     */
    longSupportMessage?: Schema$UserFacingMessage;
    /**
     * Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.
     */
    maximumTimeToLock?: string | null;
    /**
     * Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices.
     */
    microphoneAccess?: string | null;
    /**
     * The minimum allowed Android API level.
     */
    minimumApiLevel?: number | null;
    /**
     * Whether configuring mobile networks is disabled.
     */
    mobileNetworksConfigDisabled?: boolean | null;
    /**
     * Whether adding or removing accounts is disabled.
     */
    modifyAccountsDisabled?: boolean | null;
    /**
     * Whether the user mounting physical external media is disabled.
     */
    mountPhysicalMediaDisabled?: boolean | null;
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string | null;
    /**
     * Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details. Setting configureWifi to DISALLOW_CONFIGURING_WIFI will override this setting under specific circumstances. Please see DISALLOW_CONFIGURING_WIFI for further details.
     */
    networkEscapeHatchEnabled?: boolean | null;
    /**
     * Whether resetting network settings is disabled.
     */
    networkResetDisabled?: boolean | null;
    /**
     * This feature is not generally available.
     */
    oncCertificateProviders?: Schema$OncCertificateProvider[];
    /**
     * Network configuration for the device. See configure networks for more information.
     */
    openNetworkConfiguration?: {[key: string]: any} | null;
    /**
     * Whether using NFC to beam data from apps is disabled.
     */
    outgoingBeamDisabled?: boolean | null;
    /**
     * Whether outgoing calls are disabled.
     */
    outgoingCallsDisabled?: boolean | null;
    /**
     * Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy.
     */
    passwordPolicies?: Schema$PasswordRequirements[];
    /**
     * Password requirements. The field password_requirements.require_password_unlock must not be set. DEPRECATED - Use passwordPolicies.Note:Complexity-based values of PasswordQuality, that is, COMPLEXITY_LOW, COMPLEXITY_MEDIUM, and COMPLEXITY_HIGH, cannot be used here. unified_lock_settings cannot be used here.
     */
    passwordRequirements?: Schema$PasswordRequirements;
    /**
     * Explicit permission or group grants or denials for all apps. These values override the default_permission_policy.
     */
    permissionGrants?: Schema$PermissionGrant[];
    /**
     * Specifies permitted accessibility services. If the field is not set, any accessibility service can be used. If the field is set, only the accessibility services in this list and the system's built-in accessibility service can be used. In particular, if the field is set to empty, only the system's built-in accessibility servicess can be used. This can be set on fully managed devices and on work profiles. When applied to a work profile, this affects both the personal profile and the work profile.
     */
    permittedAccessibilityServices?: Schema$PackageNameList;
    /**
     * If present, only the input methods provided by packages in this list are permitted. If this field is present, but the list is empty, then only system input methods are permitted.
     */
    permittedInputMethods?: Schema$PackageNameList;
    /**
     * Default intent handler activities.
     */
    persistentPreferredActivities?: Schema$PersistentPreferredActivity[];
    /**
     * Policies managing personal usage on a company-owned device.
     */
    personalUsagePolicies?: Schema$PersonalUsagePolicies;
    /**
     * This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.
     */
    playStoreMode?: string | null;
    /**
     * Rules that define the behavior when a particular policy can not be applied on device
     */
    policyEnforcementRules?: Schema$PolicyEnforcementRule[];
    /**
     * Controls whether preferential network service is enabled on the work profile or on fully managed devices. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This policy has no effect if preferentialNetworkServiceSettings or ApplicationPolicy.preferentialNetworkId is set on devices running Android 13 or above.
     */
    preferentialNetworkService?: string | null;
    /**
     * Optional. Controls whether printing is allowed. This is supported on devices running Android 9 and above. .
     */
    printingPolicy?: string | null;
    /**
     * Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. This value will have no effect if any application has CERT_SELECTION delegation scope.
     */
    privateKeySelectionEnabled?: boolean | null;
    /**
     * The network-independent global HTTP proxy. Typically proxies should be configured per-network in open_network_configuration. However for unusual configurations like general internal filtering a global HTTP proxy may be useful. If the proxy is not accessible, network access may break. The global proxy is only a recommendation and some apps may ignore it.
     */
    recommendedGlobalProxy?: Schema$ProxyInfo;
    /**
     * Whether removing other users is disabled.
     */
    removeUserDisabled?: boolean | null;
    /**
     * Whether rebooting the device into safe boot is disabled.
     */
    safeBootDisabled?: boolean | null;
    /**
     * Whether screen capture is disabled.
     */
    screenCaptureDisabled?: boolean | null;
    /**
     * Action to take during the setup process. At most one action may be specified.
     */
    setupActions?: Schema$SetupAction[];
    /**
     * Whether changing the user icon is disabled. The setting has effect only on fully managed devices.
     */
    setUserIconDisabled?: boolean | null;
    /**
     * Whether changing the wallpaper is disabled.
     */
    setWallpaperDisabled?: boolean | null;
    /**
     * Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles.
     */
    shareLocationDisabled?: boolean | null;
    /**
     * A message displayed to the user in the settings screen wherever functionality has been disabled by the admin. If the message is longer than 200 characters it may be truncated.
     */
    shortSupportMessage?: Schema$UserFacingMessage;
    /**
     * Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.
     */
    skipFirstUseHintsEnabled?: boolean | null;
    /**
     * Whether sending and receiving SMS messages is disabled.
     */
    smsDisabled?: boolean | null;
    /**
     * Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled.
     */
    statusBarDisabled?: boolean | null;
    /**
     * Status reporting settings
     */
    statusReportingSettings?: Schema$StatusReportingSettings;
    /**
     * The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.
     */
    stayOnPluggedModes?: string[] | null;
    /**
     * The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.Note: Google Play system updates (https://source.android.com/docs/core/ota/modular-system) (also called Mainline updates) are automatically downloaded and require a device reboot to be installed. Refer to the mainline section in Manage system updates (https://developer.android.com/work/dpc/system-updates#mainline) for further details.
     */
    systemUpdate?: Schema$SystemUpdate;
    /**
     * Whether configuring tethering and portable hotspots is disabled. If tetheringSettings is set to anything other than TETHERING_SETTINGS_UNSPECIFIED, this setting is ignored.
     */
    tetheringConfigDisabled?: boolean | null;
    /**
     * Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications
     */
    uninstallAppsDisabled?: boolean | null;
    /**
     * If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices.
     */
    unmuteMicrophoneDisabled?: boolean | null;
    /**
     * Configuration of device activity logging.
     */
    usageLog?: Schema$UsageLog;
    /**
     * Whether transferring files over USB is disabled. This is supported only on company-owned devices.
     */
    usbFileTransferDisabled?: boolean | null;
    /**
     * Whether USB storage is enabled. Deprecated.
     */
    usbMassStorageEnabled?: boolean | null;
    /**
     * The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.
     */
    version?: string | null;
    /**
     * Whether configuring VPN is disabled.
     */
    vpnConfigDisabled?: boolean | null;
    /**
     * Whether configuring Wi-Fi networks is disabled. Supported on fully managed devices and work profiles on company-owned devices. For fully managed devices, setting this to true removes all configured networks and retains only the networks configured using openNetworkConfiguration. For work profiles on company-owned devices, existing configured networks are not affected and the user is not allowed to add, remove, or modify Wi-Fi networks. If configureWifi is set to anything other than CONFIGURE_WIFI_UNSPECIFIED, this setting is ignored. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled).
     */
    wifiConfigDisabled?: boolean | null;
    /**
     * This is deprecated.
     */
    wifiConfigsLockdownEnabled?: boolean | null;
    /**
     * Optional. Wipe flags to indicate what data is wiped when a device or profile wipe is triggered due to any reason (for example, non-compliance). This does not apply to the enterprises.devices.delete method. . This list must not have duplicates.
     */
    wipeDataFlags?: string[] | null;
    /**
     * Optional. Controls the work account setup configuration, such as details of whether a Google authenticated account is required.
     */
    workAccountSetupConfig?: Schema$WorkAccountSetupConfig;
  }
  /**
   * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. In the case of multiple matching or multiple triggered enforcement rules, a merge will occur with the most severe action being taken. However, all triggered rules are still kept track of: this includes initial trigger time and all associated non-compliance details. In the situation where the most severe enforcement rule is satisfied, the next most appropriate action is applied.
   */
  export interface Schema$PolicyEnforcementRule {
    /**
     * An action to block access to apps and data on a company owned device or in a work profile. This action also triggers a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
     */
    blockAction?: Schema$BlockAction;
    /**
     * The top-level policy to enforce. For example, applications or passwordPolicies.
     */
    settingName?: string | null;
    /**
     * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
     */
    wipeAction?: Schema$WipeAction;
  }
  /**
   * Additional details regarding the security posture of the device.
   */
  export interface Schema$PostureDetail {
    /**
     * Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device.
     */
    advice?: Schema$UserFacingMessage[];
    /**
     * A specific security risk that negatively affects the security posture of the device.
     */
    securityRisk?: string | null;
  }
  /**
   * A power management event.
   */
  export interface Schema$PowerManagementEvent {
    /**
     * For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
     */
    batteryLevel?: number | null;
    /**
     * The creation time of the event.
     */
    createTime?: string | null;
    /**
     * Event type.
     */
    eventType?: string | null;
  }
  /**
   * Individual preferential network service configuration.
   */
  export interface Schema$PreferentialNetworkServiceConfig {
    /**
     * Optional. Whether fallback to the device-wide default network is allowed. If this is set to FALLBACK_TO_DEFAULT_CONNECTION_ALLOWED, then nonMatchingNetworks must not be set to NON_MATCHING_NETWORKS_DISALLOWED, the policy will be rejected otherwise. Note: If this is set to FALLBACK_TO_DEFAULT_CONNECTION_DISALLOWED, applications are not able to access the internet if the 5G slice is not available.
     */
    fallbackToDefaultConnection?: string | null;
    /**
     * Optional. Whether apps this configuration applies to are blocked from using networks other than the preferential service. If this is set to NON_MATCHING_NETWORKS_DISALLOWED, then fallbackToDefaultConnection must be set to FALLBACK_TO_DEFAULT_CONNECTION_DISALLOWED.
     */
    nonMatchingNetworks?: string | null;
    /**
     * Required. Preferential network identifier. This must not be set to NO_PREFERENTIAL_NETWORK or PREFERENTIAL_NETWORK_ID_UNSPECIFIED, the policy will be rejected otherwise.
     */
    preferentialNetworkId?: string | null;
  }
  /**
   * Preferential network service settings.
   */
  export interface Schema$PreferentialNetworkServiceSettings {
    /**
     * Required. Default preferential network ID for the applications that are not in applications or if ApplicationPolicy.preferentialNetworkId is set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED. There must be a configuration for the specified network ID in preferentialNetworkServiceConfigs, unless this is set to NO_PREFERENTIAL_NETWORK. If set to PREFERENTIAL_NETWORK_ID_UNSPECIFIED or unset, this defaults to NO_PREFERENTIAL_NETWORK. Note: If the default preferential network is misconfigured, applications with no ApplicationPolicy.preferentialNetworkId set are not able to access the internet. This setting does not apply to the following critical apps: com.google.android.apps.work.clouddpc com.google.android.gmsApplicationPolicy.preferentialNetworkId can still be used to configure the preferential network for them.
     */
    defaultPreferentialNetworkId?: string | null;
    /**
     * Required. Preferential network service configurations which enables having multiple enterprise slices. There must not be multiple configurations with the same preferentialNetworkId. If a configuration is not referenced by any application by setting ApplicationPolicy.preferentialNetworkId or by setting defaultPreferentialNetworkId, it will be ignored. For devices on 4G networks, enterprise APN needs to be configured additionally to set up data call for preferential network service. These APNs can be added using apnPolicy.
     */
    preferentialNetworkServiceConfigs?: Schema$PreferentialNetworkServiceConfig[];
  }
  /**
   * Information about a device that is available during setup.
   */
  export interface Schema$ProvisioningInfo {
    /**
     * The API level of the Android platform version running on the device.
     */
    apiLevel?: number | null;
    /**
     * The email address of the authenticated user (only present for Google Account provisioning method).
     */
    authenticatedUserEmail?: string | null;
    /**
     * The brand of the device. For example, Google.
     */
    brand?: string | null;
    /**
     * The name of the enterprise in the form enterprises/{enterprise\}.
     */
    enterprise?: string | null;
    /**
     * For corporate-owned devices, IMEI number of the GSM device. For example, A1000031212.
     */
    imei?: string | null;
    /**
     * The management mode of the device or profile.
     */
    managementMode?: string | null;
    /**
     * For corporate-owned devices, MEID number of the CDMA device. For example, A00000292788E1.
     */
    meid?: string | null;
    /**
     * The model of the device. For example, Asus Nexus 7.
     */
    model?: string | null;
    /**
     * The name of this resource in the form provisioningInfo/{provisioning_info\}.
     */
    name?: string | null;
    /**
     * Ownership of the managed device.
     */
    ownership?: string | null;
    /**
     * For corporate-owned devices, The device serial number.
     */
    serialNumber?: string | null;
  }
  /**
   * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
   */
  export interface Schema$ProxyInfo {
    /**
     * For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.
     */
    excludedHosts?: string[] | null;
    /**
     * The host of the direct proxy.
     */
    host?: string | null;
    /**
     * The URI of the PAC script used to configure the proxy.
     */
    pacUri?: string | null;
    /**
     * The port of the direct proxy.
     */
    port?: number | null;
  }
  /**
   * The device or profile has been remotely locked via the LOCK command.
   */
  export interface Schema$RemoteLockEvent {
    /**
     * Package name of the admin app requesting the change.
     */
    adminPackageName?: string | null;
    /**
     * User ID of the admin app from the which the change was requested.
     */
    adminUserId?: number | null;
    /**
     * User ID in which the change was requested in.
     */
    targetUserId?: number | null;
  }
  /**
   * Parameters associated with the REMOVE_ESIM command to remove an eSIM profile from the device.
   */
  export interface Schema$RemoveEsimParams {
    /**
     * Required. ICC ID of the eSIM profile to be deleted.
     */
    iccId?: string | null;
  }
  /**
   * Request to remove ApplicationPolicy objects in the given policy.
   */
  export interface Schema$RemovePolicyApplicationsRequest {
    /**
     * Required. Package names to be removed. Entries that are not found are ignored. There must be at least one entry in package_names.
     */
    packageNames?: string[] | null;
  }
  /**
   * Response to a request to remove ApplicationPolicy objects in the given policy.
   */
  export interface Schema$RemovePolicyApplicationsResponse {
    /**
     * The updated policy after ApplicationPolicy objects have been removed.
     */
    policy?: Schema$Policy;
  }
  /**
   * Parameters associated with the REQUEST_DEVICE_INFO command to get device related information.
   */
  export interface Schema$RequestDeviceInfoParams {
    /**
     * Required. Type of device information to be requested.
     */
    deviceInfo?: string | null;
  }
  /**
   * Status of the REQUEST_DEVICE_INFO command.
   */
  export interface Schema$RequestDeviceInfoStatus {
    /**
     * Information related to the EIDs of the device.
     */
    eidInfo?: Schema$EidInfo;
    /**
     * Output only. Status of a REQUEST_DEVICE_INFO command.
     */
    status?: string | null;
  }
  /**
   * Controls for the screen brightness settings.
   */
  export interface Schema$ScreenBrightnessSettings {
    /**
     * Optional. The screen brightness between 1 and 255 where 1 is the lowest and 255 is the highest brightness. A value of 0 (default) means no screen brightness set. Any other value is rejected. screenBrightnessMode must be either BRIGHTNESS_AUTOMATIC or BRIGHTNESS_FIXED to set this. Supported on Android 9 and above on fully managed devices. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 9. Supported on work profiles on company-owned devices on Android 15 and above.
     */
    screenBrightness?: number | null;
    /**
     * Optional. Controls the screen brightness mode.
     */
    screenBrightnessMode?: string | null;
  }
  /**
   * Controls the screen timeout settings.
   */
  export interface Schema$ScreenTimeoutSettings {
    /**
     * Optional. Controls the screen timeout duration. The screen timeout duration must be greater than 0, otherwise it is rejected. Additionally, it should not be greater than maximumTimeToLock, otherwise the screen timeout is set to maximumTimeToLock and a NonComplianceDetail with INVALID_VALUE reason and SCREEN_TIMEOUT_GREATER_THAN_MAXIMUM_TIME_TO_LOCK specific reason is reported. If the screen timeout is less than a certain lower bound, it is set to the lower bound. The lower bound may vary across devices. If this is set, screenTimeoutMode must be SCREEN_TIMEOUT_ENFORCED. Supported on Android 9 and above on fully managed devices. A NonComplianceDetail with API_LEVEL is reported if the Android version is less than 9. Supported on work profiles on company-owned devices on Android 15 and above.
     */
    screenTimeout?: string | null;
    /**
     * Optional. Controls whether the user is allowed to configure the screen timeout.
     */
    screenTimeoutMode?: string | null;
  }
  /**
   * The security posture of the device, as determined by the current device state and the policies applied.
   */
  export interface Schema$SecurityPosture {
    /**
     * Device's security posture value.
     */
    devicePosture?: string | null;
    /**
     * Additional details regarding the security posture of the device.
     */
    postureDetails?: Schema$PostureDetail[];
  }
  /**
   * An action executed during setup.
   */
  export interface Schema$SetupAction {
    /**
     * Description of this action.
     */
    description?: Schema$UserFacingMessage;
    /**
     * An action to launch an app. The app will be launched with an intent containing an extra with key com.google.android.apps.work.clouddpc.EXTRA_LAUNCHED_AS_SETUP_ACTION set to the boolean value true to indicate that this is a setup action flow. If SetupAction references an app, the corresponding installType in the application policy must be set as REQUIRED_FOR_SETUP or said setup will fail.
     */
    launchApp?: Schema$LaunchAppAction;
    /**
     * Title of this action.
     */
    title?: Schema$UserFacingMessage;
  }
  /**
   * A resource containing sign in details for an enterprise. Use enterprises to manage SigninDetails for a given enterprise.For an enterprise, we can have any number of SigninDetails that is uniquely identified by combination of the following three fields (signin_url, allow_personal_usage, token_tag). One cannot create two SigninDetails with the same (signin_url, allow_personal_usage, token_tag). (token_tag is an optional field).Patch: The operation updates the current list of SigninDetails with the new list of SigninDetails. If the stored SigninDetail configuration is passed, it returns the same signin_enrollment_token and qr_code. If we pass multiple identical SigninDetail configurations that are not stored, it will store the first one amongst those SigninDetail configurations. if the configuration already exists we cannot request it more than once in a particular patch API call, otherwise it will give a duplicate key error and the whole operation will fail. If we remove certain SigninDetail configuration from the request then it will get removed from the storage. We can then request another signin_enrollment_token and qr_code for the same SigninDetail configuration.
   */
  export interface Schema$SigninDetail {
    /**
     * Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.
     */
    allowPersonalUsage?: string | null;
    /**
     * Optional. Whether the sign-in URL should be used by default for the enterprise. The SigninDetail with defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT is used for Google account enrollment method. Only one of an enterprise's signinDetails can have defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT. If an Enterprise has at least one signinDetails and none of them have defaultStatus set to SIGNIN_DETAIL_IS_DEFAULT then the first one from the list is selected and has set defaultStatus to SIGNIN_DETAIL_IS_DEFAULT. If no signinDetails specified for the Enterprise then the Google Account device enrollment will fail.
     */
    defaultStatus?: string | null;
    /**
     * A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server.
     */
    qrCode?: string | null;
    /**
     * An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server.
     */
    signinEnrollmentToken?: string | null;
    /**
     * Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login.
     */
    signinUrl?: string | null;
    /**
     * An EMM-specified metadata to distinguish between instances of SigninDetail.
     */
    tokenTag?: string | null;
  }
  /**
   * An enterprise signup URL.
   */
  export interface Schema$SignupUrl {
    /**
     * The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.
     */
    name?: string | null;
    /**
     * A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.
     */
    url?: string | null;
  }
  /**
   * Information about device software.
   */
  export interface Schema$SoftwareInfo {
    /**
     * Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
     */
    androidBuildNumber?: string | null;
    /**
     * Build time.
     */
    androidBuildTime?: string | null;
    /**
     * The Android Device Policy app version code.
     */
    androidDevicePolicyVersionCode?: number | null;
    /**
     * The Android Device Policy app version as displayed to the user.
     */
    androidDevicePolicyVersionName?: string | null;
    /**
     * The user-visible Android version string. For example, 6.0.1.
     */
    androidVersion?: string | null;
    /**
     * The system bootloader version number, e.g. 0.6.7.
     */
    bootloaderVersion?: string | null;
    /**
     * SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.
     */
    deviceBuildSignature?: string | null;
    /**
     * Kernel version, for example, 2.6.32.9-g103d848.
     */
    deviceKernelVersion?: string | null;
    /**
     * An IETF BCP 47 language code for the primary locale on the device.
     */
    primaryLanguageCode?: string | null;
    /**
     * Security patch level, e.g. 2016-05-01.
     */
    securityPatchLevel?: string | null;
    /**
     * Information about a potential pending system update.
     */
    systemUpdateInfo?: Schema$SystemUpdateInfo;
  }
  /**
   * Additional context for SpecificNonComplianceReason.
   */
  export interface Schema$SpecificNonComplianceContext {
    /**
     * Additional context for non-compliance related to Wi-Fi configuration. See ONC_WIFI_INVALID_VALUE and ONC_WIFI_API_LEVEL
     */
    oncWifiContext?: Schema$OncWifiContext;
    /**
     * Additional context for non-compliance related to password policies. See PASSWORD_POLICIES_PASSWORD_EXPIRED and PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT.
     */
    passwordPoliciesContext?: Schema$PasswordPoliciesContext;
  }
  /**
   * Parameters associated with the START_LOST_MODE command to put the device into lost mode. At least one of the parameters, not including the organization name, must be provided in order for the device to be put into lost mode.
   */
  export interface Schema$StartLostModeParams {
    /**
     * The email address displayed to the user when the device is in lost mode.
     */
    lostEmailAddress?: string | null;
    /**
     * The message displayed to the user when the device is in lost mode.
     */
    lostMessage?: Schema$UserFacingMessage;
    /**
     * The organization name displayed to the user when the device is in lost mode.
     */
    lostOrganization?: Schema$UserFacingMessage;
    /**
     * The phone number that will be called when the device is in lost mode and the call owner button is tapped.
     */
    lostPhoneNumber?: Schema$UserFacingMessage;
    /**
     * The street address displayed to the user when the device is in lost mode.
     */
    lostStreetAddress?: Schema$UserFacingMessage;
  }
  /**
   * Status of the START_LOST_MODE command to put the device into lost mode.
   */
  export interface Schema$StartLostModeStatus {
    /**
     * The status. See StartLostModeStatus.
     */
    status?: string | null;
  }
  /**
   * The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).
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
   * Settings controlling the behavior of status reports.
   */
  export interface Schema$StatusReportingSettings {
    /**
     * Application reporting settings. Only applicable if application_reports_enabled is true.
     */
    applicationReportingSettings?: Schema$ApplicationReportingSettings;
    /**
     * Whether app reports are enabled.
     */
    applicationReportsEnabled?: boolean | null;
    /**
     * Whether Common Criteria Mode reporting is enabled. This is supported only on company-owned devices.
     */
    commonCriteriaModeEnabled?: boolean | null;
    /**
     * Whether device settings reporting is enabled.
     */
    deviceSettingsEnabled?: boolean | null;
    /**
     * Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    displayInfoEnabled?: boolean | null;
    /**
     * Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    hardwareStatusEnabled?: boolean | null;
    /**
     * Whether memory event reporting is enabled.
     */
    memoryInfoEnabled?: boolean | null;
    /**
     * Whether network info reporting is enabled.
     */
    networkInfoEnabled?: boolean | null;
    /**
     * Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    powerManagementEventsEnabled?: boolean | null;
    /**
     * Whether software info reporting is enabled.
     */
    softwareInfoEnabled?: boolean | null;
    /**
     * Whether system properties reporting is enabled.
     */
    systemPropertiesEnabled?: boolean | null;
  }
  /**
   * Parameters associated with the STOP_LOST_MODE command to take the device out of lost mode.
   */
  export interface Schema$StopLostModeParams {}
  /**
   * Status of the STOP_LOST_MODE command to take the device out of lost mode.
   */
  export interface Schema$StopLostModeStatus {
    /**
     * The status. See StopLostModeStatus.
     */
    status?: string | null;
  }
  /**
   * A lost mode event indicating the user has attempted to stop lost mode.
   */
  export interface Schema$StopLostModeUserAttemptEvent {
    /**
     * The status of the attempt to stop lost mode.
     */
    status?: string | null;
  }
  /**
   * Configuration for managing system updatesNote: Google Play system updates (https://source.android.com/docs/core/ota/modular-system) (also called Mainline updates) are automatically downloaded but require a device reboot to be installed. Refer to the mainline section in Manage system updates (https://developer.android.com/work/dpc/system-updates#mainline) for further details.
   */
  export interface Schema$SystemUpdate {
    /**
     * If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
     */
    endMinutes?: number | null;
    /**
     * An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days.
     */
    freezePeriods?: Schema$FreezePeriod[];
    /**
     * If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
     */
    startMinutes?: number | null;
    /**
     * The type of system update to configure.
     */
    type?: string | null;
  }
  /**
   * Information about a potential pending system update.
   */
  export interface Schema$SystemUpdateInfo {
    /**
     * The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE).
     */
    updateReceivedTime?: string | null;
    /**
     * The status of an update: whether an update exists and what type it is.
     */
    updateStatus?: string | null;
  }
  /**
   * Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
   */
  export interface Schema$TelephonyInfo {
    /**
     * Output only. Activation state of the SIM card on the device. This is applicable for eSIMs only. This is supported on all devices for API level 35 and above. This is always ACTIVATION_STATE_UNSPECIFIED for physical SIMs and for devices below API level 35.
     */
    activationState?: string | null;
    /**
     * The carrier name associated with this SIM card.
     */
    carrierName?: string | null;
    /**
     * Output only. The configuration mode of the SIM card on the device. This is applicable for eSIMs only. This is supported on all devices for API level 35 and above. This is always CONFIG_MODE_UNSPECIFIED for physical SIMs and for devices below API level 35.
     */
    configMode?: string | null;
    /**
     * Output only. The ICCID associated with this SIM card.
     */
    iccId?: string | null;
    /**
     * The phone number associated with this SIM card.
     */
    phoneNumber?: string | null;
  }
  /**
   * A terms and conditions page to be accepted during provisioning.
   */
  export interface Schema$TermsAndConditions {
    /**
     * A well-formatted HTML string. It will be parsed on the client with android.text.Html#fromHtml.
     */
    content?: Schema$UserFacingMessage;
    /**
     * A short header which appears above the HTML content.
     */
    header?: Schema$UserFacingMessage;
  }
  /**
   * Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
   */
  export interface Schema$UsageLog {
    /**
     * Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled.
     */
    enabledLogTypes?: string[] | null;
    /**
     * Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi.
     */
    uploadOnCellularAllowed?: string[] | null;
  }
  /**
   * An event logged on the device.
   */
  export interface Schema$UsageLogEvent {
    /**
     * A shell command was issued over ADB via “adb shell command”. Part of SECURITY_LOGS.
     */
    adbShellCommandEvent?: Schema$AdbShellCommandEvent;
    /**
     * An ADB interactive shell was opened via “adb shell”. Part of SECURITY_LOGS.
     */
    adbShellInteractiveEvent?: Schema$AdbShellInteractiveEvent;
    /**
     * An app process was started. Part of SECURITY_LOGS.
     */
    appProcessStartEvent?: Schema$AppProcessStartEvent;
    /**
     * An admin has enabled or disabled backup service. Part of SECURITY_LOGS.
     */
    backupServiceToggledEvent?: Schema$BackupServiceToggledEvent;
    /**
     * A new root certificate was installed into the system's trusted credential storage. Part of SECURITY_LOGS.
     */
    certAuthorityInstalledEvent?: Schema$CertAuthorityInstalledEvent;
    /**
     * A root certificate was removed from the system's trusted credential storage. Part of SECURITY_LOGS.
     */
    certAuthorityRemovedEvent?: Schema$CertAuthorityRemovedEvent;
    /**
     * An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. Part of SECURITY_LOGS.
     */
    certValidationFailureEvent?: Schema$CertValidationFailureEvent;
    /**
     * A TCP connect event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.
     */
    connectEvent?: Schema$ConnectEvent;
    /**
     * Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. Part of SECURITY_LOGS.
     */
    cryptoSelfTestCompletedEvent?: Schema$CryptoSelfTestCompletedEvent;
    /**
     * A DNS lookup event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.
     */
    dnsEvent?: Schema$DnsEvent;
    /**
     * Device has completed enrollment. Part of AMAPI_LOGS.
     */
    enrollmentCompleteEvent?: Schema$EnrollmentCompleteEvent;
    /**
     * Unique id of the event.
     */
    eventId?: string | null;
    /**
     * Device timestamp when the event was logged.
     */
    eventTime?: string | null;
    /**
     * The particular usage log event type that was reported on the device. Use this to determine which event field to access.
     */
    eventType?: string | null;
    /**
     * A file was downloaded from the device. Part of SECURITY_LOGS.
     */
    filePulledEvent?: Schema$FilePulledEvent;
    /**
     * A file was uploaded onto the device. Part of SECURITY_LOGS.
     */
    filePushedEvent?: Schema$FilePushedEvent;
    /**
     * A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. Part of SECURITY_LOGS.
     */
    keyDestructionEvent?: Schema$KeyDestructionEvent;
    /**
     * A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management. Part of SECURITY_LOGS.
     */
    keyGeneratedEvent?: Schema$KeyGeneratedEvent;
    /**
     * An attempt was made to unlock the device. Part of SECURITY_LOGS.
     */
    keyguardDismissAuthAttemptEvent?: Schema$KeyguardDismissAuthAttemptEvent;
    /**
     * The keyguard was dismissed. Part of SECURITY_LOGS.
     */
    keyguardDismissedEvent?: Schema$KeyguardDismissedEvent;
    /**
     * The device was locked either by user or timeout. Part of SECURITY_LOGS.
     */
    keyguardSecuredEvent?: Schema$KeyguardSecuredEvent;
    /**
     * A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. Part of SECURITY_LOGS.
     */
    keyImportEvent?: Schema$KeyImportEvent;
    /**
     * A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. Part of SECURITY_LOGS.
     */
    keyIntegrityViolationEvent?: Schema$KeyIntegrityViolationEvent;
    /**
     * The audit log buffer has reached 90% of its capacity, therefore older events may be dropped. Part of SECURITY_LOGS.
     */
    logBufferSizeCriticalEvent?: Schema$LogBufferSizeCriticalEvent;
    /**
     * usageLog policy has been enabled. Part of SECURITY_LOGS.
     */
    loggingStartedEvent?: Schema$LoggingStartedEvent;
    /**
     * usageLog policy has been disabled. Part of SECURITY_LOGS.
     */
    loggingStoppedEvent?: Schema$LoggingStoppedEvent;
    /**
     * A lost mode location update when a device in lost mode.
     */
    lostModeLocationEvent?: Schema$LostModeLocationEvent;
    /**
     * An outgoing phone call has been made when a device in lost mode.
     */
    lostModeOutgoingPhoneCallEvent?: Schema$LostModeOutgoingPhoneCallEvent;
    /**
     * Removable media was mounted. Part of SECURITY_LOGS.
     */
    mediaMountEvent?: Schema$MediaMountEvent;
    /**
     * Removable media was unmounted. Part of SECURITY_LOGS.
     */
    mediaUnmountEvent?: Schema$MediaUnmountEvent;
    /**
     * Device was shutdown. Part of SECURITY_LOGS.
     */
    osShutdownEvent?: Schema$OsShutdownEvent;
    /**
     * Device was started. Part of SECURITY_LOGS.
     */
    osStartupEvent?: Schema$OsStartupEvent;
    /**
     * The device or profile has been remotely locked via the LOCK command. Part of SECURITY_LOGS.
     */
    remoteLockEvent?: Schema$RemoteLockEvent;
    /**
     * An attempt to take a device out of lost mode.
     */
    stopLostModeUserAttemptEvent?: Schema$StopLostModeUserAttemptEvent;
    /**
     * The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Part of SECURITY_LOGS.
     */
    wipeFailureEvent?: Schema$WipeFailureEvent;
  }
  /**
   * A user belonging to an enterprise.
   */
  export interface Schema$User {
    /**
     * A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail.
     */
    accountIdentifier?: string | null;
  }
  /**
   * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
   */
  export interface Schema$UserFacingMessage {
    /**
     * The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.
     */
    defaultMessage?: string | null;
    /**
     * A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.
     */
    localizedMessages?: {[key: string]: string} | null;
  }
  /**
   * A web app.
   */
  export interface Schema$WebApp {
    /**
     * The display mode of the web app.
     */
    displayMode?: string | null;
    /**
     * A list of icons for the web app. Must have at least one element.
     */
    icons?: Schema$WebAppIcon[];
    /**
     * The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string | null;
    /**
     * The start URL, i.e. the URL that should load when the user opens the application.
     */
    startUrl?: string | null;
    /**
     * The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).
     */
    title?: string | null;
    /**
     * The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
     */
    versionCode?: string | null;
  }
  /**
   * An icon for a web app. Supported formats are: png, jpg and webp.
   */
  export interface Schema$WebAppIcon {
    /**
     * The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512.
     */
    imageData?: string | null;
  }
  /**
   * A web token used to access the managed Google Play iframe.
   */
  export interface Schema$WebToken {
    /**
     * The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored
     */
    enabledFeatures?: string[] | null;
    /**
     * The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId\}/webTokens/{webTokenId\}.
     */
    name?: string | null;
    /**
     * The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.
     */
    parentFrameUrl?: string | null;
    /**
     * Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated.
     */
    permissions?: string[] | null;
    /**
     * The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.
     */
    value?: string | null;
  }
  /**
   * Wi-Fi roaming policy.
   */
  export interface Schema$WifiRoamingPolicy {
    /**
     * Optional. Wi-Fi roaming settings. SSIDs provided in this list must be unique, the policy will be rejected otherwise.
     */
    wifiRoamingSettings?: Schema$WifiRoamingSetting[];
  }
  /**
   * Wi-Fi roaming setting.
   */
  export interface Schema$WifiRoamingSetting {
    /**
     * Required. Wi-Fi roaming mode for the specified SSID.
     */
    wifiRoamingMode?: string | null;
    /**
     * Required. SSID of the Wi-Fi network.
     */
    wifiSsid?: string | null;
  }
  /**
   * Represents a Wi-Fi SSID.
   */
  export interface Schema$WifiSsid {
    /**
     * Required. Wi-Fi SSID represented as a string.
     */
    wifiSsid?: string | null;
  }
  /**
   * Restrictions on which Wi-Fi SSIDs the device can connect to. Note that this does not affect which networks can be configured on the device. Supported on company-owned devices running Android 13 and above.
   */
  export interface Schema$WifiSsidPolicy {
    /**
     * Type of the Wi-Fi SSID policy to be applied.
     */
    wifiSsidPolicyType?: string | null;
    /**
     * Optional. List of Wi-Fi SSIDs that should be applied in the policy. This field must be non-empty when WifiSsidPolicyType is set to WIFI_SSID_ALLOWLIST. If this is set to a non-empty list, then a NonComplianceDetail detail with API_LEVEL is reported if the Android version is less than 13 and a NonComplianceDetail with MANAGEMENT_MODE is reported for non-company-owned devices.
     */
    wifiSsids?: Schema$WifiSsid[];
  }
  /**
   * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
   */
  export interface Schema$WipeAction {
    /**
     * Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles.
     */
    preserveFrp?: boolean | null;
    /**
     * Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.
     */
    wipeAfterDays?: number | null;
  }
  /**
   * The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty.
   */
  export interface Schema$WipeFailureEvent {}
  /**
   * Parameters associated with the WIPE command to wipe the device.
   */
  export interface Schema$WipeParams {
    /**
     * Optional. Flags to determine what data to wipe.
     */
    wipeDataFlags?: string[] | null;
    /**
     * Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     */
    wipeReason?: Schema$UserFacingMessage;
  }
  /**
   * Controls the work account setup configuration, such as details of whether a Google authenticated account is required.
   */
  export interface Schema$WorkAccountSetupConfig {
    /**
     * Optional. The authentication type of the user on the device.
     */
    authenticationType?: string | null;
    /**
     * Optional. The specific google work account email address to be added. This field is only relevant if authenticationType is GOOGLE_AUTHENTICATED. This must be an enterprise account and not a consumer account. Once set and a Google authenticated account is added to the device, changing this field will have no effect, and thus recommended to be set only once.
     */
    requiredAccountEmail?: string | null;
  }

  export class Resource$Enterprises {
    context: APIRequestContext;
    applications: Resource$Enterprises$Applications;
    devices: Resource$Enterprises$Devices;
    enrollmentTokens: Resource$Enterprises$Enrollmenttokens;
    migrationTokens: Resource$Enterprises$Migrationtokens;
    policies: Resource$Enterprises$Policies;
    webApps: Resource$Enterprises$Webapps;
    webTokens: Resource$Enterprises$Webtokens;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.applications = new Resource$Enterprises$Applications(this.context);
      this.devices = new Resource$Enterprises$Devices(this.context);
      this.enrollmentTokens = new Resource$Enterprises$Enrollmenttokens(
        this.context
      );
      this.migrationTokens = new Resource$Enterprises$Migrationtokens(
        this.context
      );
      this.policies = new Resource$Enterprises$Policies(this.context);
      this.webApps = new Resource$Enterprises$Webapps(this.context);
      this.webTokens = new Resource$Enterprises$Webtokens(this.context);
    }

    /**
     * Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.create({
     *     // Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     *     agreementAccepted: 'placeholder-value',
     *     // The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     *     enterpriseToken: 'placeholder-value',
     *     // The ID of the Google Cloud Platform project which will own the enterprise.
     *     projectId: 'placeholder-value',
     *     // The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     *     signupUrlName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appAutoApprovalEnabled": false,
     *       //   "contactInfo": {},
     *       //   "enabledNotificationTypes": [],
     *       //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *       //   "enterpriseType": "my_enterpriseType",
     *       //   "googleAuthenticationSettings": {},
     *       //   "logo": {},
     *       //   "managedGoogleDomainType": "my_managedGoogleDomainType",
     *       //   "managedGooglePlayAccountsEnterpriseType": "my_managedGooglePlayAccountsEnterpriseType",
     *       //   "name": "my_name",
     *       //   "primaryColor": 0,
     *       //   "pubsubTopic": "my_pubsubTopic",
     *       //   "signinDetails": [],
     *       //   "termsAndConditions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "enterpriseType": "my_enterpriseType",
     *   //   "googleAuthenticationSettings": {},
     *   //   "logo": {},
     *   //   "managedGoogleDomainType": "my_managedGoogleDomainType",
     *   //   "managedGooglePlayAccountsEnterpriseType": "my_managedGooglePlayAccountsEnterpriseType",
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
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
      params: Params$Resource$Enterprises$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Enterprises$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>;
    create(
      params: Params$Resource$Enterprises$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    create(
      params: Params$Resource$Enterprises$Create,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    create(callback: BodyResponseCallback<Schema$Enterprise>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Create
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }

    /**
     * Permanently deletes an enterprise and all accounts and data associated with it. Warning: this will result in a cascaded deletion of all AM API devices associated with the deleted enterprise. Only available for EMM-managed enterprises.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.delete({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
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
      params: Params$Resource$Enterprises$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Enterprises$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Enterprises$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Delete
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
        {}) as Params$Resource$Enterprises$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide (https://developers.google.com/android/management/upgrade-an-enterprise) for more details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.generateEnterpriseUpgradeUrl({
     *     // Required. The name of the enterprise to be upgraded in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adminEmail": "my_adminEmail",
     *       //   "allowedDomains": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "url": "my_url"
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
    generateEnterpriseUpgradeUrl(
      params: Params$Resource$Enterprises$Generateenterpriseupgradeurl,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateEnterpriseUpgradeUrl(
      params?: Params$Resource$Enterprises$Generateenterpriseupgradeurl,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GenerateEnterpriseUpgradeUrlResponse>
    >;
    generateEnterpriseUpgradeUrl(
      params: Params$Resource$Enterprises$Generateenterpriseupgradeurl,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateEnterpriseUpgradeUrl(
      params: Params$Resource$Enterprises$Generateenterpriseupgradeurl,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>,
      callback: BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
    ): void;
    generateEnterpriseUpgradeUrl(
      params: Params$Resource$Enterprises$Generateenterpriseupgradeurl,
      callback: BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
    ): void;
    generateEnterpriseUpgradeUrl(
      callback: BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
    ): void;
    generateEnterpriseUpgradeUrl(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Generateenterpriseupgradeurl
        | BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateEnterpriseUpgradeUrlResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GenerateEnterpriseUpgradeUrlResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Generateenterpriseupgradeurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Generateenterpriseupgradeurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateEnterpriseUpgradeUrl').replace(
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
        createAPIRequest<Schema$GenerateEnterpriseUpgradeUrlResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateEnterpriseUpgradeUrlResponse>(
          parameters
        );
      }
    }

    /**
     * Gets an enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.get({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "enterpriseType": "my_enterpriseType",
     *   //   "googleAuthenticationSettings": {},
     *   //   "logo": {},
     *   //   "managedGoogleDomainType": "my_managedGoogleDomainType",
     *   //   "managedGooglePlayAccountsEnterpriseType": "my_managedGooglePlayAccountsEnterpriseType",
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
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
      params: Params$Resource$Enterprises$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>;
    get(
      params: Params$Resource$Enterprises$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    get(
      params: Params$Resource$Enterprises$Get,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    get(callback: BodyResponseCallback<Schema$Enterprise>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Get
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Enterprises$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }

    /**
     * Lists EMM-managed enterprises. Only BASIC fields are returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The Cloud project ID of the EMM managing the enterprises.
     *     projectId: 'placeholder-value',
     *     // Specifies which Enterprise fields to return. This method only supports BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enterprises": [],
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
      params: Params$Resource$Enterprises$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEnterprisesResponse>>;
    list(
      params: Params$Resource$Enterprises$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnterprisesResponse>,
      callback: BodyResponseCallback<Schema$ListEnterprisesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$List,
      callback: BodyResponseCallback<Schema$ListEnterprisesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnterprisesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$List
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnterprisesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEnterprisesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Enterprises$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListEnterprisesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnterprisesResponse>(parameters);
      }
    }

    /**
     * Updates an enterprise. See also: SigninDetail
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.patch({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     name: 'enterprises/my-enterprise',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appAutoApprovalEnabled": false,
     *       //   "contactInfo": {},
     *       //   "enabledNotificationTypes": [],
     *       //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *       //   "enterpriseType": "my_enterpriseType",
     *       //   "googleAuthenticationSettings": {},
     *       //   "logo": {},
     *       //   "managedGoogleDomainType": "my_managedGoogleDomainType",
     *       //   "managedGooglePlayAccountsEnterpriseType": "my_managedGooglePlayAccountsEnterpriseType",
     *       //   "name": "my_name",
     *       //   "primaryColor": 0,
     *       //   "pubsubTopic": "my_pubsubTopic",
     *       //   "signinDetails": [],
     *       //   "termsAndConditions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appAutoApprovalEnabled": false,
     *   //   "contactInfo": {},
     *   //   "enabledNotificationTypes": [],
     *   //   "enterpriseDisplayName": "my_enterpriseDisplayName",
     *   //   "enterpriseType": "my_enterpriseType",
     *   //   "googleAuthenticationSettings": {},
     *   //   "logo": {},
     *   //   "managedGoogleDomainType": "my_managedGoogleDomainType",
     *   //   "managedGooglePlayAccountsEnterpriseType": "my_managedGooglePlayAccountsEnterpriseType",
     *   //   "name": "my_name",
     *   //   "primaryColor": 0,
     *   //   "pubsubTopic": "my_pubsubTopic",
     *   //   "signinDetails": [],
     *   //   "termsAndConditions": []
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
      params: Params$Resource$Enterprises$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Enterprises$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>;
    patch(
      params: Params$Resource$Enterprises$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Enterprise>,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Patch,
      callback: BodyResponseCallback<Schema$Enterprise>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Enterprise>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Patch
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Enterprise>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Enterprise>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Create
    extends StandardParameters {
    /**
     * Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     */
    agreementAccepted?: boolean;
    /**
     * The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     */
    enterpriseToken?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the enterprise.
     */
    projectId?: string;
    /**
     * The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     */
    signupUrlName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }
  export interface Params$Resource$Enterprises$Delete
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Generateenterpriseupgradeurl
    extends StandardParameters {
    /**
     * Required. The name of the enterprise to be upgraded in the form enterprises/{enterpriseId\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateEnterpriseUpgradeUrlRequest;
  }
  export interface Params$Resource$Enterprises$Get extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$List extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The Cloud project ID of the EMM managing the enterprises.
     */
    projectId?: string;
    /**
     * Specifies which Enterprise fields to return. This method only supports BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Enterprises$Patch
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }

  export class Resource$Enterprises$Applications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets info about an application.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.applications.get({
     *     // The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     *     languageCode: 'placeholder-value',
     *     // The name of the application in the form enterprises/{enterpriseId\}/applications/{package_name\}.
     *     name: 'enterprises/my-enterprise/applications/my-application',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appPricing": "my_appPricing",
     *   //   "appTracks": [],
     *   //   "appVersions": [],
     *   //   "author": "my_author",
     *   //   "availableCountries": [],
     *   //   "category": "my_category",
     *   //   "contentRating": "my_contentRating",
     *   //   "description": "my_description",
     *   //   "distributionChannel": "my_distributionChannel",
     *   //   "features": [],
     *   //   "fullDescription": "my_fullDescription",
     *   //   "iconUrl": "my_iconUrl",
     *   //   "managedProperties": [],
     *   //   "minAndroidSdkVersion": 0,
     *   //   "name": "my_name",
     *   //   "permissions": [],
     *   //   "playStoreUrl": "my_playStoreUrl",
     *   //   "recentChanges": "my_recentChanges",
     *   //   "screenshotUrls": [],
     *   //   "smallIconUrl": "my_smallIconUrl",
     *   //   "title": "my_title",
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
      params: Params$Resource$Enterprises$Applications$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Applications$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Application>>;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Application>,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(
      params: Params$Resource$Enterprises$Applications$Get,
      callback: BodyResponseCallback<Schema$Application>
    ): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Applications$Get
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Application>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Application>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Applications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Applications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Application>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Applications$Get
    extends StandardParameters {
    /**
     * The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     */
    languageCode?: string;
    /**
     * The name of the application in the form enterprises/{enterpriseId\}/applications/{package_name\}.
     */
    name?: string;
  }

  export class Resource$Enterprises$Devices {
    context: APIRequestContext;
    operations: Resource$Enterprises$Devices$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Enterprises$Devices$Operations(
        this.context
      );
    }

    /**
     * Deletes a device. This operation attempts to wipe the device but this is not guaranteed to succeed if the device is offline for an extended period. Deleted devices do not show up in enterprises.devices.list calls and a 404 is returned from enterprises.devices.get.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.delete({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *     // Optional flags that control the device wiping behavior.
     *     wipeDataFlags: 'placeholder-value',
     *     // Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     *     wipeReasonMessage: 'placeholder-value',
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
      params: Params$Resource$Enterprises$Devices$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Enterprises$Devices$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Devices$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Delete
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
        {}) as Params$Resource$Enterprises$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a device. Deleted devices will respond with a 404 error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.get({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiLevel": 0,
     *   //   "applicationReports": [],
     *   //   "appliedPasswordPolicies": [],
     *   //   "appliedPolicyName": "my_appliedPolicyName",
     *   //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *   //   "appliedState": "my_appliedState",
     *   //   "commonCriteriaModeInfo": {},
     *   //   "deviceSettings": {},
     *   //   "disabledReason": {},
     *   //   "displays": [],
     *   //   "dpcMigrationInfo": {},
     *   //   "enrollmentTime": "my_enrollmentTime",
     *   //   "enrollmentTokenData": "my_enrollmentTokenData",
     *   //   "enrollmentTokenName": "my_enrollmentTokenName",
     *   //   "hardwareInfo": {},
     *   //   "hardwareStatusSamples": [],
     *   //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *   //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *   //   "lastStatusReportTime": "my_lastStatusReportTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "memoryEvents": [],
     *   //   "memoryInfo": {},
     *   //   "name": "my_name",
     *   //   "networkInfo": {},
     *   //   "nonComplianceDetails": [],
     *   //   "ownership": "my_ownership",
     *   //   "policyCompliant": false,
     *   //   "policyName": "my_policyName",
     *   //   "powerManagementEvents": [],
     *   //   "previousDeviceNames": [],
     *   //   "securityPosture": {},
     *   //   "softwareInfo": {},
     *   //   "state": "my_state",
     *   //   "systemProperties": {},
     *   //   "user": {},
     *   //   "userName": "my_userName"
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
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Devices$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Device>>;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Get,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(callback: BodyResponseCallback<Schema$Device>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Get
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Device>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }

    /**
     * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.issueCommand({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addEsimParams": {},
     *       //   "clearAppsDataParams": {},
     *       //   "clearAppsDataStatus": {},
     *       //   "createTime": "my_createTime",
     *       //   "duration": "my_duration",
     *       //   "errorCode": "my_errorCode",
     *       //   "esimStatus": {},
     *       //   "newPassword": "my_newPassword",
     *       //   "removeEsimParams": {},
     *       //   "requestDeviceInfoParams": {},
     *       //   "requestDeviceInfoStatus": {},
     *       //   "resetPasswordFlags": [],
     *       //   "startLostModeParams": {},
     *       //   "startLostModeStatus": {},
     *       //   "stopLostModeParams": {},
     *       //   "stopLostModeStatus": {},
     *       //   "type": "my_type",
     *       //   "userName": "my_userName",
     *       //   "wipeParams": {}
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
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    issueCommand(
      params?: Params$Resource$Enterprises$Devices$Issuecommand,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    issueCommand(
      params: Params$Resource$Enterprises$Devices$Issuecommand,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    issueCommand(callback: BodyResponseCallback<Schema$Operation>): void;
    issueCommand(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Issuecommand
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
        {}) as Params$Resource$Enterprises$Devices$Issuecommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Issuecommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:issueCommand').replace(
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
     * Lists devices for a given enterprise. Deleted devices are not returned in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Devices$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDevicesResponse>>;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDevicesResponse>,
      callback: BodyResponseCallback<Schema$ListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$List,
      callback: BodyResponseCallback<Schema$ListDevicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$List
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDevicesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$ListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDevicesResponse>(parameters);
      }
    }

    /**
     * Updates a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.patch({
     *     // The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     *     name: 'enterprises/my-enterprise/devices/my-device',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiLevel": 0,
     *       //   "applicationReports": [],
     *       //   "appliedPasswordPolicies": [],
     *       //   "appliedPolicyName": "my_appliedPolicyName",
     *       //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *       //   "appliedState": "my_appliedState",
     *       //   "commonCriteriaModeInfo": {},
     *       //   "deviceSettings": {},
     *       //   "disabledReason": {},
     *       //   "displays": [],
     *       //   "dpcMigrationInfo": {},
     *       //   "enrollmentTime": "my_enrollmentTime",
     *       //   "enrollmentTokenData": "my_enrollmentTokenData",
     *       //   "enrollmentTokenName": "my_enrollmentTokenName",
     *       //   "hardwareInfo": {},
     *       //   "hardwareStatusSamples": [],
     *       //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *       //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *       //   "lastStatusReportTime": "my_lastStatusReportTime",
     *       //   "managementMode": "my_managementMode",
     *       //   "memoryEvents": [],
     *       //   "memoryInfo": {},
     *       //   "name": "my_name",
     *       //   "networkInfo": {},
     *       //   "nonComplianceDetails": [],
     *       //   "ownership": "my_ownership",
     *       //   "policyCompliant": false,
     *       //   "policyName": "my_policyName",
     *       //   "powerManagementEvents": [],
     *       //   "previousDeviceNames": [],
     *       //   "securityPosture": {},
     *       //   "softwareInfo": {},
     *       //   "state": "my_state",
     *       //   "systemProperties": {},
     *       //   "user": {},
     *       //   "userName": "my_userName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiLevel": 0,
     *   //   "applicationReports": [],
     *   //   "appliedPasswordPolicies": [],
     *   //   "appliedPolicyName": "my_appliedPolicyName",
     *   //   "appliedPolicyVersion": "my_appliedPolicyVersion",
     *   //   "appliedState": "my_appliedState",
     *   //   "commonCriteriaModeInfo": {},
     *   //   "deviceSettings": {},
     *   //   "disabledReason": {},
     *   //   "displays": [],
     *   //   "dpcMigrationInfo": {},
     *   //   "enrollmentTime": "my_enrollmentTime",
     *   //   "enrollmentTokenData": "my_enrollmentTokenData",
     *   //   "enrollmentTokenName": "my_enrollmentTokenName",
     *   //   "hardwareInfo": {},
     *   //   "hardwareStatusSamples": [],
     *   //   "lastPolicyComplianceReportTime": "my_lastPolicyComplianceReportTime",
     *   //   "lastPolicySyncTime": "my_lastPolicySyncTime",
     *   //   "lastStatusReportTime": "my_lastStatusReportTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "memoryEvents": [],
     *   //   "memoryInfo": {},
     *   //   "name": "my_name",
     *   //   "networkInfo": {},
     *   //   "nonComplianceDetails": [],
     *   //   "ownership": "my_ownership",
     *   //   "policyCompliant": false,
     *   //   "policyName": "my_policyName",
     *   //   "powerManagementEvents": [],
     *   //   "previousDeviceNames": [],
     *   //   "securityPosture": {},
     *   //   "softwareInfo": {},
     *   //   "state": "my_state",
     *   //   "systemProperties": {},
     *   //   "user": {},
     *   //   "userName": "my_userName"
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
      params: Params$Resource$Enterprises$Devices$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Enterprises$Devices$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Device>>;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Devices$Patch,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Device>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Patch
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Device>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Delete
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
    /**
     * Optional flags that control the device wiping behavior.
     */
    wipeDataFlags?: string[];
    /**
     * Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     */
    wipeReasonMessage?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Get
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Issuecommand
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Command;
  }
  export interface Params$Resource$Enterprises$Devices$List
    extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Patch
    extends StandardParameters {
    /**
     * The name of the device in the form enterprises/{enterpriseId\}/devices/{deviceId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Device;
  }

  export class Resource$Enterprises$Devices$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations/my-operation',
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
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Enterprises$Devices$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$Cancel
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
        {}) as Params$Resource$Enterprises$Devices$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.get({
     *     // The name of the operation resource.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations/my-operation',
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
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Devices$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Enterprises$Devices$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$Get
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
        {}) as Params$Resource$Enterprises$Devices$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.devices.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'enterprises/my-enterprise/devices/my-device/operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Devices$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Devices$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Devices$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Devices$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Enterprises$Enrollmenttokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalData": "my_additionalData",
     *       //   "allowPersonalUsage": "my_allowPersonalUsage",
     *       //   "duration": "my_duration",
     *       //   "expirationTimestamp": "my_expirationTimestamp",
     *       //   "name": "my_name",
     *       //   "oneTimeOnly": false,
     *       //   "policyName": "my_policyName",
     *       //   "qrCode": "my_qrCode",
     *       //   "user": {},
     *       //   "value": "my_value"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalData": "my_additionalData",
     *   //   "allowPersonalUsage": "my_allowPersonalUsage",
     *   //   "duration": "my_duration",
     *   //   "expirationTimestamp": "my_expirationTimestamp",
     *   //   "name": "my_name",
     *   //   "oneTimeOnly": false,
     *   //   "policyName": "my_policyName",
     *   //   "qrCode": "my_qrCode",
     *   //   "user": {},
     *   //   "value": "my_value"
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
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EnrollmentToken>>;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      options: MethodOptions | BodyResponseCallback<Schema$EnrollmentToken>,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    create(
      params: Params$Resource$Enterprises$Enrollmenttokens$Create,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    create(callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$Create
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EnrollmentToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Enrollmenttokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/enrollmentTokens').replace(
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
        createAPIRequest<Schema$EnrollmentToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EnrollmentToken>(parameters);
      }
    }

    /**
     * Deletes an enrollment token. This operation invalidates the token, preventing its future use.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.delete({
     *     // The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     *     name: 'enterprises/my-enterprise/enrollmentTokens/my-enrollmentToken',
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
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$Delete
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
        {}) as Params$Resource$Enterprises$Enrollmenttokens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets an active, unexpired enrollment token. A partial view of the enrollment token is returned. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.get({
     *     // Required. The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     *     name: 'enterprises/my-enterprise/enrollmentTokens/my-enrollmentToken',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalData": "my_additionalData",
     *   //   "allowPersonalUsage": "my_allowPersonalUsage",
     *   //   "duration": "my_duration",
     *   //   "expirationTimestamp": "my_expirationTimestamp",
     *   //   "name": "my_name",
     *   //   "oneTimeOnly": false,
     *   //   "policyName": "my_policyName",
     *   //   "qrCode": "my_qrCode",
     *   //   "user": {},
     *   //   "value": "my_value"
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
      params: Params$Resource$Enterprises$Enrollmenttokens$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Enrollmenttokens$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EnrollmentToken>>;
    get(
      params: Params$Resource$Enterprises$Enrollmenttokens$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Enrollmenttokens$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EnrollmentToken>,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    get(
      params: Params$Resource$Enterprises$Enrollmenttokens$Get,
      callback: BodyResponseCallback<Schema$EnrollmentToken>
    ): void;
    get(callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$Get
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EnrollmentToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EnrollmentToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Enrollmenttokens$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$EnrollmentToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EnrollmentToken>(parameters);
      }
    }

    /**
     * Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken object. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.enrollmentTokens.list({
     *     // The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enrollmentTokens": [],
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
      params: Params$Resource$Enterprises$Enrollmenttokens$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Enrollmenttokens$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEnrollmentTokensResponse>>;
    list(
      params: Params$Resource$Enterprises$Enrollmenttokens$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Enrollmenttokens$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnrollmentTokensResponse>,
      callback: BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Enrollmenttokens$List,
      callback: BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Enrollmenttokens$List
        | BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnrollmentTokensResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEnrollmentTokensResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Enrollmenttokens$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/enrollmentTokens').replace(
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
        createAPIRequest<Schema$ListEnrollmentTokensResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnrollmentTokensResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Enterprises$Enrollmenttokens$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollmentToken;
  }
  export interface Params$Resource$Enterprises$Enrollmenttokens$Delete
    extends StandardParameters {
    /**
     * The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Enrollmenttokens$Get
    extends StandardParameters {
    /**
     * Required. The name of the enrollment token in the form enterprises/{enterpriseId\}/enrollmentTokens/{enrollmentTokenId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Enrollmenttokens$List
    extends StandardParameters {
    /**
     * The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }

  export class Resource$Enterprises$Migrationtokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a migration token, to migrate an existing device from being managed by the EMM's Device Policy Controller (DPC) to being managed by the Android Management API. See the guide (https://developers.google.com/android/management/dpc-migration) for more details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.migrationTokens.create({
     *     // Required. The enterprise in which this migration token is created. This must be the same enterprise which already manages the device in the Play EMM API. Format: enterprises/{enterprise\}
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "additionalData": "my_additionalData",
     *       //   "createTime": "my_createTime",
     *       //   "device": "my_device",
     *       //   "deviceId": "my_deviceId",
     *       //   "expireTime": "my_expireTime",
     *       //   "managementMode": "my_managementMode",
     *       //   "name": "my_name",
     *       //   "policy": "my_policy",
     *       //   "ttl": "my_ttl",
     *       //   "userId": "my_userId",
     *       //   "value": "my_value"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalData": "my_additionalData",
     *   //   "createTime": "my_createTime",
     *   //   "device": "my_device",
     *   //   "deviceId": "my_deviceId",
     *   //   "expireTime": "my_expireTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "name": "my_name",
     *   //   "policy": "my_policy",
     *   //   "ttl": "my_ttl",
     *   //   "userId": "my_userId",
     *   //   "value": "my_value"
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
      params: Params$Resource$Enterprises$Migrationtokens$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Enterprises$Migrationtokens$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MigrationToken>>;
    create(
      params: Params$Resource$Enterprises$Migrationtokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Migrationtokens$Create,
      options: MethodOptions | BodyResponseCallback<Schema$MigrationToken>,
      callback: BodyResponseCallback<Schema$MigrationToken>
    ): void;
    create(
      params: Params$Resource$Enterprises$Migrationtokens$Create,
      callback: BodyResponseCallback<Schema$MigrationToken>
    ): void;
    create(callback: BodyResponseCallback<Schema$MigrationToken>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Migrationtokens$Create
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MigrationToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Migrationtokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Migrationtokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/migrationTokens').replace(
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
        createAPIRequest<Schema$MigrationToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MigrationToken>(parameters);
      }
    }

    /**
     * Gets a migration token.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.migrationTokens.get({
     *     // Required. The name of the migration token to retrieve. Format: enterprises/{enterprise\}/migrationTokens/{migration_token\}
     *     name: 'enterprises/my-enterprise/migrationTokens/my-migrationToken',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "additionalData": "my_additionalData",
     *   //   "createTime": "my_createTime",
     *   //   "device": "my_device",
     *   //   "deviceId": "my_deviceId",
     *   //   "expireTime": "my_expireTime",
     *   //   "managementMode": "my_managementMode",
     *   //   "name": "my_name",
     *   //   "policy": "my_policy",
     *   //   "ttl": "my_ttl",
     *   //   "userId": "my_userId",
     *   //   "value": "my_value"
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
      params: Params$Resource$Enterprises$Migrationtokens$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Migrationtokens$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MigrationToken>>;
    get(
      params: Params$Resource$Enterprises$Migrationtokens$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Migrationtokens$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MigrationToken>,
      callback: BodyResponseCallback<Schema$MigrationToken>
    ): void;
    get(
      params: Params$Resource$Enterprises$Migrationtokens$Get,
      callback: BodyResponseCallback<Schema$MigrationToken>
    ): void;
    get(callback: BodyResponseCallback<Schema$MigrationToken>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Migrationtokens$Get
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MigrationToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MigrationToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Migrationtokens$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Migrationtokens$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$MigrationToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MigrationToken>(parameters);
      }
    }

    /**
     * Lists migration tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.migrationTokens.list({
     *     // The maximum number of migration tokens to return. Fewer migration tokens may be returned. If unspecified, at most 100 migration tokens will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous ListMigrationTokens call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListMigrationTokens must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The enterprise which the migration tokens belong to. Format: enterprises/{enterprise\}
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "migrationTokens": [],
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
      params: Params$Resource$Enterprises$Migrationtokens$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Migrationtokens$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMigrationTokensResponse>>;
    list(
      params: Params$Resource$Enterprises$Migrationtokens$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Migrationtokens$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMigrationTokensResponse>,
      callback: BodyResponseCallback<Schema$ListMigrationTokensResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Migrationtokens$List,
      callback: BodyResponseCallback<Schema$ListMigrationTokensResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMigrationTokensResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Migrationtokens$List
        | BodyResponseCallback<Schema$ListMigrationTokensResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMigrationTokensResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMigrationTokensResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMigrationTokensResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Migrationtokens$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Migrationtokens$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/migrationTokens').replace(
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
        createAPIRequest<Schema$ListMigrationTokensResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMigrationTokensResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Migrationtokens$Create
    extends StandardParameters {
    /**
     * Required. The enterprise in which this migration token is created. This must be the same enterprise which already manages the device in the Play EMM API. Format: enterprises/{enterprise\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigrationToken;
  }
  export interface Params$Resource$Enterprises$Migrationtokens$Get
    extends StandardParameters {
    /**
     * Required. The name of the migration token to retrieve. Format: enterprises/{enterprise\}/migrationTokens/{migration_token\}
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Migrationtokens$List
    extends StandardParameters {
    /**
     * The maximum number of migration tokens to return. Fewer migration tokens may be returned. If unspecified, at most 100 migration tokens will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous ListMigrationTokens call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListMigrationTokens must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The enterprise which the migration tokens belong to. Format: enterprises/{enterprise\}
     */
    parent?: string;
  }

  export class Resource$Enterprises$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.delete({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
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
      params: Params$Resource$Enterprises$Policies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Enterprises$Policies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Policies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Delete
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
        {}) as Params$Resource$Enterprises$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.get({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTypesWithManagementDisabled": [],
     *   //   "addUserDisabled": false,
     *   //   "adjustVolumeDisabled": false,
     *   //   "advancedSecurityOverrides": {},
     *   //   "alwaysOnVpnPackage": {},
     *   //   "androidDevicePolicyTracks": [],
     *   //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *   //   "appFunctions": "my_appFunctions",
     *   //   "applications": [],
     *   //   "assistContentPolicy": "my_assistContentPolicy",
     *   //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *   //   "autoTimeRequired": false,
     *   //   "blockApplicationsEnabled": false,
     *   //   "bluetoothConfigDisabled": false,
     *   //   "bluetoothContactSharingDisabled": false,
     *   //   "bluetoothDisabled": false,
     *   //   "cameraAccess": "my_cameraAccess",
     *   //   "cameraDisabled": false,
     *   //   "cellBroadcastsConfigDisabled": false,
     *   //   "choosePrivateKeyRules": [],
     *   //   "complianceRules": [],
     *   //   "createWindowsDisabled": false,
     *   //   "credentialProviderPolicyDefault": "my_credentialProviderPolicyDefault",
     *   //   "credentialsConfigDisabled": false,
     *   //   "crossProfilePolicies": {},
     *   //   "dataRoamingDisabled": false,
     *   //   "debuggingFeaturesAllowed": false,
     *   //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *   //   "deviceConnectivityManagement": {},
     *   //   "deviceOwnerLockScreenInfo": {},
     *   //   "deviceRadioState": {},
     *   //   "displaySettings": {},
     *   //   "encryptionPolicy": "my_encryptionPolicy",
     *   //   "ensureVerifyAppsEnabled": false,
     *   //   "enterpriseDisplayNameVisibility": "my_enterpriseDisplayNameVisibility",
     *   //   "factoryResetDisabled": false,
     *   //   "frpAdminEmails": [],
     *   //   "funDisabled": false,
     *   //   "installAppsDisabled": false,
     *   //   "installUnknownSourcesAllowed": false,
     *   //   "keyguardDisabled": false,
     *   //   "keyguardDisabledFeatures": [],
     *   //   "kioskCustomLauncherEnabled": false,
     *   //   "kioskCustomization": {},
     *   //   "locationMode": "my_locationMode",
     *   //   "longSupportMessage": {},
     *   //   "maximumTimeToLock": "my_maximumTimeToLock",
     *   //   "microphoneAccess": "my_microphoneAccess",
     *   //   "minimumApiLevel": 0,
     *   //   "mobileNetworksConfigDisabled": false,
     *   //   "modifyAccountsDisabled": false,
     *   //   "mountPhysicalMediaDisabled": false,
     *   //   "name": "my_name",
     *   //   "networkEscapeHatchEnabled": false,
     *   //   "networkResetDisabled": false,
     *   //   "oncCertificateProviders": [],
     *   //   "openNetworkConfiguration": {},
     *   //   "outgoingBeamDisabled": false,
     *   //   "outgoingCallsDisabled": false,
     *   //   "passwordPolicies": [],
     *   //   "passwordRequirements": {},
     *   //   "permissionGrants": [],
     *   //   "permittedAccessibilityServices": {},
     *   //   "permittedInputMethods": {},
     *   //   "persistentPreferredActivities": [],
     *   //   "personalUsagePolicies": {},
     *   //   "playStoreMode": "my_playStoreMode",
     *   //   "policyEnforcementRules": [],
     *   //   "preferentialNetworkService": "my_preferentialNetworkService",
     *   //   "printingPolicy": "my_printingPolicy",
     *   //   "privateKeySelectionEnabled": false,
     *   //   "recommendedGlobalProxy": {},
     *   //   "removeUserDisabled": false,
     *   //   "safeBootDisabled": false,
     *   //   "screenCaptureDisabled": false,
     *   //   "setUserIconDisabled": false,
     *   //   "setWallpaperDisabled": false,
     *   //   "setupActions": [],
     *   //   "shareLocationDisabled": false,
     *   //   "shortSupportMessage": {},
     *   //   "skipFirstUseHintsEnabled": false,
     *   //   "smsDisabled": false,
     *   //   "statusBarDisabled": false,
     *   //   "statusReportingSettings": {},
     *   //   "stayOnPluggedModes": [],
     *   //   "systemUpdate": {},
     *   //   "tetheringConfigDisabled": false,
     *   //   "uninstallAppsDisabled": false,
     *   //   "unmuteMicrophoneDisabled": false,
     *   //   "usageLog": {},
     *   //   "usbFileTransferDisabled": false,
     *   //   "usbMassStorageEnabled": false,
     *   //   "version": "my_version",
     *   //   "vpnConfigDisabled": false,
     *   //   "wifiConfigDisabled": false,
     *   //   "wifiConfigsLockdownEnabled": false,
     *   //   "wipeDataFlags": [],
     *   //   "workAccountSetupConfig": {}
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
      params: Params$Resource$Enterprises$Policies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Policies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(
      params: Params$Resource$Enterprises$Policies$Get,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Get
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
        {}) as Params$Resource$Enterprises$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists policies for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.list({
     *     // The requested page size. The actual page size may be fixed to a min or max value.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
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
      params: Params$Resource$Enterprises$Policies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Policies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPoliciesResponse>>;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Policies$List,
      callback: BodyResponseCallback<Schema$ListPoliciesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPoliciesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$List
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPoliciesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/policies').replace(
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
        createAPIRequest<Schema$ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPoliciesResponse>(parameters);
      }
    }

    /**
     * Updates or creates applications in a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await androidmanagement.enterprises.policies.modifyPolicyApplications({
     *       // Required. The name of the Policy containing the ApplicationPolicy objects to be updated, in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *       name: 'enterprises/my-enterprise/policies/my-policie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "changes": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "policy": {}
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
    modifyPolicyApplications(
      params: Params$Resource$Enterprises$Policies$Modifypolicyapplications,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    modifyPolicyApplications(
      params?: Params$Resource$Enterprises$Policies$Modifypolicyapplications,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ModifyPolicyApplicationsResponse>
    >;
    modifyPolicyApplications(
      params: Params$Resource$Enterprises$Policies$Modifypolicyapplications,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyPolicyApplications(
      params: Params$Resource$Enterprises$Policies$Modifypolicyapplications,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>,
      callback: BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
    ): void;
    modifyPolicyApplications(
      params: Params$Resource$Enterprises$Policies$Modifypolicyapplications,
      callback: BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
    ): void;
    modifyPolicyApplications(
      callback: BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
    ): void;
    modifyPolicyApplications(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Modifypolicyapplications
        | BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModifyPolicyApplicationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ModifyPolicyApplicationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Policies$Modifypolicyapplications;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Enterprises$Policies$Modifypolicyapplications;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:modifyPolicyApplications').replace(
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
        createAPIRequest<Schema$ModifyPolicyApplicationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModifyPolicyApplicationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates or creates a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.policies.patch({
     *     // The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *     name: 'enterprises/my-enterprise/policies/my-policie',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountTypesWithManagementDisabled": [],
     *       //   "addUserDisabled": false,
     *       //   "adjustVolumeDisabled": false,
     *       //   "advancedSecurityOverrides": {},
     *       //   "alwaysOnVpnPackage": {},
     *       //   "androidDevicePolicyTracks": [],
     *       //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *       //   "appFunctions": "my_appFunctions",
     *       //   "applications": [],
     *       //   "assistContentPolicy": "my_assistContentPolicy",
     *       //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *       //   "autoTimeRequired": false,
     *       //   "blockApplicationsEnabled": false,
     *       //   "bluetoothConfigDisabled": false,
     *       //   "bluetoothContactSharingDisabled": false,
     *       //   "bluetoothDisabled": false,
     *       //   "cameraAccess": "my_cameraAccess",
     *       //   "cameraDisabled": false,
     *       //   "cellBroadcastsConfigDisabled": false,
     *       //   "choosePrivateKeyRules": [],
     *       //   "complianceRules": [],
     *       //   "createWindowsDisabled": false,
     *       //   "credentialProviderPolicyDefault": "my_credentialProviderPolicyDefault",
     *       //   "credentialsConfigDisabled": false,
     *       //   "crossProfilePolicies": {},
     *       //   "dataRoamingDisabled": false,
     *       //   "debuggingFeaturesAllowed": false,
     *       //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *       //   "deviceConnectivityManagement": {},
     *       //   "deviceOwnerLockScreenInfo": {},
     *       //   "deviceRadioState": {},
     *       //   "displaySettings": {},
     *       //   "encryptionPolicy": "my_encryptionPolicy",
     *       //   "ensureVerifyAppsEnabled": false,
     *       //   "enterpriseDisplayNameVisibility": "my_enterpriseDisplayNameVisibility",
     *       //   "factoryResetDisabled": false,
     *       //   "frpAdminEmails": [],
     *       //   "funDisabled": false,
     *       //   "installAppsDisabled": false,
     *       //   "installUnknownSourcesAllowed": false,
     *       //   "keyguardDisabled": false,
     *       //   "keyguardDisabledFeatures": [],
     *       //   "kioskCustomLauncherEnabled": false,
     *       //   "kioskCustomization": {},
     *       //   "locationMode": "my_locationMode",
     *       //   "longSupportMessage": {},
     *       //   "maximumTimeToLock": "my_maximumTimeToLock",
     *       //   "microphoneAccess": "my_microphoneAccess",
     *       //   "minimumApiLevel": 0,
     *       //   "mobileNetworksConfigDisabled": false,
     *       //   "modifyAccountsDisabled": false,
     *       //   "mountPhysicalMediaDisabled": false,
     *       //   "name": "my_name",
     *       //   "networkEscapeHatchEnabled": false,
     *       //   "networkResetDisabled": false,
     *       //   "oncCertificateProviders": [],
     *       //   "openNetworkConfiguration": {},
     *       //   "outgoingBeamDisabled": false,
     *       //   "outgoingCallsDisabled": false,
     *       //   "passwordPolicies": [],
     *       //   "passwordRequirements": {},
     *       //   "permissionGrants": [],
     *       //   "permittedAccessibilityServices": {},
     *       //   "permittedInputMethods": {},
     *       //   "persistentPreferredActivities": [],
     *       //   "personalUsagePolicies": {},
     *       //   "playStoreMode": "my_playStoreMode",
     *       //   "policyEnforcementRules": [],
     *       //   "preferentialNetworkService": "my_preferentialNetworkService",
     *       //   "printingPolicy": "my_printingPolicy",
     *       //   "privateKeySelectionEnabled": false,
     *       //   "recommendedGlobalProxy": {},
     *       //   "removeUserDisabled": false,
     *       //   "safeBootDisabled": false,
     *       //   "screenCaptureDisabled": false,
     *       //   "setUserIconDisabled": false,
     *       //   "setWallpaperDisabled": false,
     *       //   "setupActions": [],
     *       //   "shareLocationDisabled": false,
     *       //   "shortSupportMessage": {},
     *       //   "skipFirstUseHintsEnabled": false,
     *       //   "smsDisabled": false,
     *       //   "statusBarDisabled": false,
     *       //   "statusReportingSettings": {},
     *       //   "stayOnPluggedModes": [],
     *       //   "systemUpdate": {},
     *       //   "tetheringConfigDisabled": false,
     *       //   "uninstallAppsDisabled": false,
     *       //   "unmuteMicrophoneDisabled": false,
     *       //   "usageLog": {},
     *       //   "usbFileTransferDisabled": false,
     *       //   "usbMassStorageEnabled": false,
     *       //   "version": "my_version",
     *       //   "vpnConfigDisabled": false,
     *       //   "wifiConfigDisabled": false,
     *       //   "wifiConfigsLockdownEnabled": false,
     *       //   "wipeDataFlags": [],
     *       //   "workAccountSetupConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountTypesWithManagementDisabled": [],
     *   //   "addUserDisabled": false,
     *   //   "adjustVolumeDisabled": false,
     *   //   "advancedSecurityOverrides": {},
     *   //   "alwaysOnVpnPackage": {},
     *   //   "androidDevicePolicyTracks": [],
     *   //   "appAutoUpdatePolicy": "my_appAutoUpdatePolicy",
     *   //   "appFunctions": "my_appFunctions",
     *   //   "applications": [],
     *   //   "assistContentPolicy": "my_assistContentPolicy",
     *   //   "autoDateAndTimeZone": "my_autoDateAndTimeZone",
     *   //   "autoTimeRequired": false,
     *   //   "blockApplicationsEnabled": false,
     *   //   "bluetoothConfigDisabled": false,
     *   //   "bluetoothContactSharingDisabled": false,
     *   //   "bluetoothDisabled": false,
     *   //   "cameraAccess": "my_cameraAccess",
     *   //   "cameraDisabled": false,
     *   //   "cellBroadcastsConfigDisabled": false,
     *   //   "choosePrivateKeyRules": [],
     *   //   "complianceRules": [],
     *   //   "createWindowsDisabled": false,
     *   //   "credentialProviderPolicyDefault": "my_credentialProviderPolicyDefault",
     *   //   "credentialsConfigDisabled": false,
     *   //   "crossProfilePolicies": {},
     *   //   "dataRoamingDisabled": false,
     *   //   "debuggingFeaturesAllowed": false,
     *   //   "defaultPermissionPolicy": "my_defaultPermissionPolicy",
     *   //   "deviceConnectivityManagement": {},
     *   //   "deviceOwnerLockScreenInfo": {},
     *   //   "deviceRadioState": {},
     *   //   "displaySettings": {},
     *   //   "encryptionPolicy": "my_encryptionPolicy",
     *   //   "ensureVerifyAppsEnabled": false,
     *   //   "enterpriseDisplayNameVisibility": "my_enterpriseDisplayNameVisibility",
     *   //   "factoryResetDisabled": false,
     *   //   "frpAdminEmails": [],
     *   //   "funDisabled": false,
     *   //   "installAppsDisabled": false,
     *   //   "installUnknownSourcesAllowed": false,
     *   //   "keyguardDisabled": false,
     *   //   "keyguardDisabledFeatures": [],
     *   //   "kioskCustomLauncherEnabled": false,
     *   //   "kioskCustomization": {},
     *   //   "locationMode": "my_locationMode",
     *   //   "longSupportMessage": {},
     *   //   "maximumTimeToLock": "my_maximumTimeToLock",
     *   //   "microphoneAccess": "my_microphoneAccess",
     *   //   "minimumApiLevel": 0,
     *   //   "mobileNetworksConfigDisabled": false,
     *   //   "modifyAccountsDisabled": false,
     *   //   "mountPhysicalMediaDisabled": false,
     *   //   "name": "my_name",
     *   //   "networkEscapeHatchEnabled": false,
     *   //   "networkResetDisabled": false,
     *   //   "oncCertificateProviders": [],
     *   //   "openNetworkConfiguration": {},
     *   //   "outgoingBeamDisabled": false,
     *   //   "outgoingCallsDisabled": false,
     *   //   "passwordPolicies": [],
     *   //   "passwordRequirements": {},
     *   //   "permissionGrants": [],
     *   //   "permittedAccessibilityServices": {},
     *   //   "permittedInputMethods": {},
     *   //   "persistentPreferredActivities": [],
     *   //   "personalUsagePolicies": {},
     *   //   "playStoreMode": "my_playStoreMode",
     *   //   "policyEnforcementRules": [],
     *   //   "preferentialNetworkService": "my_preferentialNetworkService",
     *   //   "printingPolicy": "my_printingPolicy",
     *   //   "privateKeySelectionEnabled": false,
     *   //   "recommendedGlobalProxy": {},
     *   //   "removeUserDisabled": false,
     *   //   "safeBootDisabled": false,
     *   //   "screenCaptureDisabled": false,
     *   //   "setUserIconDisabled": false,
     *   //   "setWallpaperDisabled": false,
     *   //   "setupActions": [],
     *   //   "shareLocationDisabled": false,
     *   //   "shortSupportMessage": {},
     *   //   "skipFirstUseHintsEnabled": false,
     *   //   "smsDisabled": false,
     *   //   "statusBarDisabled": false,
     *   //   "statusReportingSettings": {},
     *   //   "stayOnPluggedModes": [],
     *   //   "systemUpdate": {},
     *   //   "tetheringConfigDisabled": false,
     *   //   "uninstallAppsDisabled": false,
     *   //   "unmuteMicrophoneDisabled": false,
     *   //   "usageLog": {},
     *   //   "usbFileTransferDisabled": false,
     *   //   "usbMassStorageEnabled": false,
     *   //   "version": "my_version",
     *   //   "vpnConfigDisabled": false,
     *   //   "wifiConfigDisabled": false,
     *   //   "wifiConfigsLockdownEnabled": false,
     *   //   "wipeDataFlags": [],
     *   //   "workAccountSetupConfig": {}
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
      params: Params$Resource$Enterprises$Policies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Enterprises$Policies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Policies$Patch,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Policy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Patch
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
        {}) as Params$Resource$Enterprises$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Removes applications in a policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await androidmanagement.enterprises.policies.removePolicyApplications({
     *       // Required. The name of the policy containing the ApplicationPolicy objects to be removed, in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     *       name: 'enterprises/my-enterprise/policies/my-policie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "packageNames": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "policy": {}
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
    removePolicyApplications(
      params: Params$Resource$Enterprises$Policies$Removepolicyapplications,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removePolicyApplications(
      params?: Params$Resource$Enterprises$Policies$Removepolicyapplications,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RemovePolicyApplicationsResponse>
    >;
    removePolicyApplications(
      params: Params$Resource$Enterprises$Policies$Removepolicyapplications,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removePolicyApplications(
      params: Params$Resource$Enterprises$Policies$Removepolicyapplications,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>,
      callback: BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
    ): void;
    removePolicyApplications(
      params: Params$Resource$Enterprises$Policies$Removepolicyapplications,
      callback: BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
    ): void;
    removePolicyApplications(
      callback: BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
    ): void;
    removePolicyApplications(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Policies$Removepolicyapplications
        | BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemovePolicyApplicationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RemovePolicyApplicationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Policies$Removepolicyapplications;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Enterprises$Policies$Removepolicyapplications;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:removePolicyApplications').replace(
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
        createAPIRequest<Schema$RemovePolicyApplicationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemovePolicyApplicationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Enterprises$Policies$Delete
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Get
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$List
    extends StandardParameters {
    /**
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Modifypolicyapplications
    extends StandardParameters {
    /**
     * Required. The name of the Policy containing the ApplicationPolicy objects to be updated, in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyPolicyApplicationsRequest;
  }
  export interface Params$Resource$Enterprises$Policies$Patch
    extends StandardParameters {
    /**
     * The name of the policy in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }
  export interface Params$Resource$Enterprises$Policies$Removepolicyapplications
    extends StandardParameters {
    /**
     * Required. The name of the policy containing the ApplicationPolicy objects to be removed, in the form enterprises/{enterpriseId\}/policies/{policyId\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemovePolicyApplicationsRequest;
  }

  export class Resource$Enterprises$Webapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayMode": "my_displayMode",
     *       //   "icons": [],
     *       //   "name": "my_name",
     *       //   "startUrl": "my_startUrl",
     *       //   "title": "my_title",
     *       //   "versionCode": "my_versionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
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
      params: Params$Resource$Enterprises$Webapps$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Enterprises$Webapps$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webapps$Create,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    create(callback: BodyResponseCallback<Schema$WebApp>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Create
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webApps').replace(
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }

    /**
     * Deletes a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.delete({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
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
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Enterprises$Webapps$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Enterprises$Webapps$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Delete
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
        {}) as Params$Resource$Enterprises$Webapps$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * Gets a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.get({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
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
      params: Params$Resource$Enterprises$Webapps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Enterprises$Webapps$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(
      params: Params$Resource$Enterprises$Webapps$Get,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$WebApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Get
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }

    /**
     * Lists web apps for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.list({
     *     // The requested page size. This is a hint and the actual page size in the response may be different.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "webApps": []
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
      params: Params$Resource$Enterprises$Webapps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Enterprises$Webapps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListWebAppsResponse>>;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListWebAppsResponse>,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(
      params: Params$Resource$Enterprises$Webapps$List,
      callback: BodyResponseCallback<Schema$ListWebAppsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$List
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWebAppsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListWebAppsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webApps').replace(
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
        createAPIRequest<Schema$ListWebAppsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWebAppsResponse>(parameters);
      }
    }

    /**
     * Updates a web app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webApps.patch({
     *     // The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     *     name: 'enterprises/my-enterprise/webApps/my-webApp',
     *     // The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayMode": "my_displayMode",
     *       //   "icons": [],
     *       //   "name": "my_name",
     *       //   "startUrl": "my_startUrl",
     *       //   "title": "my_title",
     *       //   "versionCode": "my_versionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayMode": "my_displayMode",
     *   //   "icons": [],
     *   //   "name": "my_name",
     *   //   "startUrl": "my_startUrl",
     *   //   "title": "my_title",
     *   //   "versionCode": "my_versionCode"
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
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Enterprises$Webapps$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$WebApp>,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(
      params: Params$Resource$Enterprises$Webapps$Patch,
      callback: BodyResponseCallback<Schema$WebApp>
    ): void;
    patch(callback: BodyResponseCallback<Schema$WebApp>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webapps$Patch
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebApp>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebApp>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webapps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webapps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$WebApp>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebApp>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Webapps$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }
  export interface Params$Resource$Enterprises$Webapps$Delete
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$Get
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$List
    extends StandardParameters {
    /**
     * The requested page size. This is a hint and the actual page size in the response may be different.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Webapps$Patch
    extends StandardParameters {
    /**
     * The name of the web app in the form enterprises/{enterpriseId\}/webApps/{packageName\}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebApp;
  }

  export class Resource$Enterprises$Webtokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.enterprises.webTokens.create({
     *     // The name of the enterprise in the form enterprises/{enterpriseId\}.
     *     parent: 'enterprises/my-enterprise',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enabledFeatures": [],
     *       //   "name": "my_name",
     *       //   "parentFrameUrl": "my_parentFrameUrl",
     *       //   "permissions": [],
     *       //   "value": "my_value"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enabledFeatures": [],
     *   //   "name": "my_name",
     *   //   "parentFrameUrl": "my_parentFrameUrl",
     *   //   "permissions": [],
     *   //   "value": "my_value"
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
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Enterprises$Webtokens$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebToken>>;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      options: MethodOptions | BodyResponseCallback<Schema$WebToken>,
      callback: BodyResponseCallback<Schema$WebToken>
    ): void;
    create(
      params: Params$Resource$Enterprises$Webtokens$Create,
      callback: BodyResponseCallback<Schema$WebToken>
    ): void;
    create(callback: BodyResponseCallback<Schema$WebToken>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Enterprises$Webtokens$Create
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Enterprises$Webtokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webtokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webTokens').replace(
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
        createAPIRequest<Schema$WebToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebToken>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Webtokens$Create
    extends StandardParameters {
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebToken;
  }

  export class Resource$Provisioninginfo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the device provisioning information by the identifier provided in the sign-in url.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.provisioningInfo.get({
     *     // Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info\}.
     *     name: 'provisioningInfo/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiLevel": 0,
     *   //   "authenticatedUserEmail": "my_authenticatedUserEmail",
     *   //   "brand": "my_brand",
     *   //   "enterprise": "my_enterprise",
     *   //   "imei": "my_imei",
     *   //   "managementMode": "my_managementMode",
     *   //   "meid": "my_meid",
     *   //   "model": "my_model",
     *   //   "name": "my_name",
     *   //   "ownership": "my_ownership",
     *   //   "serialNumber": "my_serialNumber"
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
      params: Params$Resource$Provisioninginfo$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Provisioninginfo$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProvisioningInfo>>;
    get(
      params: Params$Resource$Provisioninginfo$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Provisioninginfo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProvisioningInfo>,
      callback: BodyResponseCallback<Schema$ProvisioningInfo>
    ): void;
    get(
      params: Params$Resource$Provisioninginfo$Get,
      callback: BodyResponseCallback<Schema$ProvisioningInfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProvisioningInfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Provisioninginfo$Get
        | BodyResponseCallback<Schema$ProvisioningInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProvisioningInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProvisioningInfo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProvisioningInfo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Provisioninginfo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Provisioninginfo$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ProvisioningInfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProvisioningInfo>(parameters);
      }
    }
  }

  export interface Params$Resource$Provisioninginfo$Get
    extends StandardParameters {
    /**
     * Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info\}.
     */
    name?: string;
  }

  export class Resource$Signupurls {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an enterprise signup URL.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androidmanagement.googleapis.com
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
     * const androidmanagement = google.androidmanagement('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/androidmanagement'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await androidmanagement.signupUrls.create({
     *     // Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If allowedDomains is non-empty then this must belong to one of the allowedDomains.
     *     adminEmail: 'placeholder-value',
     *     // Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise.
     *     allowedDomains: 'placeholder-value',
     *     // The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     *     callbackUrl: 'placeholder-value',
     *     // The ID of the Google Cloud Platform project which will own the enterprise.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "url": "my_url"
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
      params: Params$Resource$Signupurls$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Signupurls$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SignupUrl>>;
    create(
      params: Params$Resource$Signupurls$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Signupurls$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SignupUrl>,
      callback: BodyResponseCallback<Schema$SignupUrl>
    ): void;
    create(
      params: Params$Resource$Signupurls$Create,
      callback: BodyResponseCallback<Schema$SignupUrl>
    ): void;
    create(callback: BodyResponseCallback<Schema$SignupUrl>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Signupurls$Create
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignupUrl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SignupUrl>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Signupurls$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Signupurls$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/signupUrls').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SignupUrl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignupUrl>(parameters);
      }
    }
  }

  export interface Params$Resource$Signupurls$Create
    extends StandardParameters {
    /**
     * Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If allowedDomains is non-empty then this must belong to one of the allowedDomains.
     */
    adminEmail?: string;
    /**
     * Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise.
     */
    allowedDomains?: string[];
    /**
     * The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     */
    callbackUrl?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the enterprise.
     */
    projectId?: string;
  }
}
