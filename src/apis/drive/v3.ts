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

export namespace drive_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * Google Drive API
   *
   * The Google Drive API allows clients to access resources from Google Drive.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const drive = google.drive('v3');
   * ```
   */
  export class Drive {
    context: APIRequestContext;
    about: Resource$About;
    accessproposals: Resource$Accessproposals;
    apps: Resource$Apps;
    changes: Resource$Changes;
    channels: Resource$Channels;
    comments: Resource$Comments;
    drives: Resource$Drives;
    files: Resource$Files;
    operations: Resource$Operations;
    permissions: Resource$Permissions;
    replies: Resource$Replies;
    revisions: Resource$Revisions;
    teamdrives: Resource$Teamdrives;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.about = new Resource$About(this.context);
      this.accessproposals = new Resource$Accessproposals(this.context);
      this.apps = new Resource$Apps(this.context);
      this.changes = new Resource$Changes(this.context);
      this.channels = new Resource$Channels(this.context);
      this.comments = new Resource$Comments(this.context);
      this.drives = new Resource$Drives(this.context);
      this.files = new Resource$Files(this.context);
      this.operations = new Resource$Operations(this.context);
      this.permissions = new Resource$Permissions(this.context);
      this.replies = new Resource$Replies(this.context);
      this.revisions = new Resource$Revisions(this.context);
      this.teamdrives = new Resource$Teamdrives(this.context);
    }
  }

  /**
   * Information about the user, the user's Drive, and system capabilities.
   */
  export interface Schema$About {
    /**
     * Whether the user has installed the requesting app.
     */
    appInstalled?: boolean | null;
    /**
     * Whether the user can create shared drives.
     */
    canCreateDrives?: boolean | null;
    /**
     * Deprecated: Use `canCreateDrives` instead.
     */
    canCreateTeamDrives?: boolean | null;
    /**
     * A list of themes that are supported for shared drives.
     */
    driveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    exportFormats?: {[key: string]: string[]} | null;
    /**
     * The currently supported folder colors as RGB hex strings.
     */
    folderColorPalette?: string[] | null;
    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    importFormats?: {[key: string]: string[]} | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#about"`.
     */
    kind?: string | null;
    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    maxImportSizes?: {[key: string]: string} | null;
    /**
     * The maximum upload size in bytes.
     */
    maxUploadSize?: string | null;
    /**
     * The user's storage quota limits and usage. For users that are part of an organization with pooled storage, information about the limit and usage across all services is for the organization, rather than the individual user. All fields are measured in bytes.
     */
    storageQuota?: {
      limit?: string;
      usage?: string;
      usageInDrive?: string;
      usageInDriveTrash?: string;
    } | null;
    /**
     * Deprecated: Use `driveThemes` instead.
     */
    teamDriveThemes?: Array<{
      backgroundImageLink?: string;
      colorRgb?: string;
      id?: string;
    }> | null;
    /**
     * The authenticated user.
     */
    user?: Schema$User;
  }
  /**
   * The Access Proposal resource for outstanding access proposals on a file
   */
  export interface Schema$AccessProposal {
    /**
     * The creation time
     */
    createTime?: string | null;
    /**
     * The file id that the proposal for access is on
     */
    fileId?: string | null;
    /**
     * The id of the access proposal
     */
    proposalId?: string | null;
    /**
     * The email address of the user that will receive permissions if accepted
     */
    recipientEmailAddress?: string | null;
    /**
     * The email address of the requesting user
     */
    requesterEmailAddress?: string | null;
    /**
     * The message that the requester added to the proposal
     */
    requestMessage?: string | null;
    /**
     * A wrapper for the role and view of an access proposal.
     */
    rolesAndViews?: Schema$AccessProposalRoleAndView[];
  }
  /**
   * A wrapper for the role and view of an access proposal.
   */
  export interface Schema$AccessProposalRoleAndView {
    /**
     * The role that was proposed by the requester New values may be added in the future, but the following are currently possible: * `writer` * `commenter` * `reader`
     */
    role?: string | null;
    /**
     * Indicates the view for this access proposal. Only populated for proposals that belong to a view. `published` is the only supported value.
     */
    view?: string | null;
  }
  /**
   * The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.
   */
  export interface Schema$App {
    /**
     * Whether the app is authorized to access data on the user's Drive.
     */
    authorized?: boolean | null;
    /**
     * The template URL to create a file with this app in a given folder. The template contains the {folderId\} to be replaced by the folder ID house the new file.
     */
    createInFolderTemplate?: string | null;
    /**
     * The URL to create a file with this app.
     */
    createUrl?: string | null;
    /**
     * Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive.
     */
    hasDriveWideScope?: boolean | null;
    /**
     * The various icons for the app.
     */
    icons?: Schema$AppIcons[];
    /**
     * The ID of the app.
     */
    id?: string | null;
    /**
     * Whether the app is installed.
     */
    installed?: boolean | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app".
     */
    kind?: string | null;
    /**
     * A long description of the app.
     */
    longDescription?: string | null;
    /**
     * The name of the app.
     */
    name?: string | null;
    /**
     * The type of object this app creates such as a Chart. If empty, the app name should be used instead.
     */
    objectType?: string | null;
    /**
     * The template URL for opening files with this app. The template contains {ids\} or {exportIds\} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation.
     */
    openUrlTemplate?: string | null;
    /**
     * The list of primary file extensions.
     */
    primaryFileExtensions?: string[] | null;
    /**
     * The list of primary MIME types.
     */
    primaryMimeTypes?: string[] | null;
    /**
     * The ID of the product listing for this app.
     */
    productId?: string | null;
    /**
     * A link to the product listing for this app.
     */
    productUrl?: string | null;
    /**
     * The list of secondary file extensions.
     */
    secondaryFileExtensions?: string[] | null;
    /**
     * The list of secondary MIME types.
     */
    secondaryMimeTypes?: string[] | null;
    /**
     * A short description of the app.
     */
    shortDescription?: string | null;
    /**
     * Whether this app supports creating objects.
     */
    supportsCreate?: boolean | null;
    /**
     * Whether this app supports importing from Google Docs.
     */
    supportsImport?: boolean | null;
    /**
     * Whether this app supports opening more than one file.
     */
    supportsMultiOpen?: boolean | null;
    /**
     * Whether this app supports creating files when offline.
     */
    supportsOfflineCreate?: boolean | null;
    /**
     * Whether the app is selected as the default handler for the types it supports.
     */
    useByDefault?: boolean | null;
  }
  export interface Schema$AppIcons {
    /**
     * Category of the icon. Allowed values are: * `application` - The icon for the application. * `document` - The icon for a file associated with the app. * `documentShared` - The icon for a shared file associated with the app.
     */
    category?: string | null;
    /**
     * URL for the icon.
     */
    iconUrl?: string | null;
    /**
     * Size of the icon. Represented as the maximum of the width and height.
     */
    size?: number | null;
  }
  /**
   * A list of third-party applications which the user has installed or given access to Google Drive.
   */
  export interface Schema$AppList {
    /**
     * The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
     */
    defaultAppIds?: string[] | null;
    /**
     * The list of apps.
     */
    items?: Schema$App[];
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList".
     */
    kind?: string | null;
    /**
     * A link back to this list.
     */
    selfLink?: string | null;
  }
  /**
   * A change to a file or shared drive.
   */
  export interface Schema$Change {
    /**
     * The type of the change. Possible values are `file` and `drive`.
     */
    changeType?: string | null;
    /**
     * The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.
     */
    drive?: Schema$Drive;
    /**
     * The ID of the shared drive associated with this change.
     */
    driveId?: string | null;
    /**
     * The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
     */
    file?: Schema$File;
    /**
     * The ID of the file which has changed.
     */
    fileId?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#change"`.
     */
    kind?: string | null;
    /**
     * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    removed?: boolean | null;
    /**
     * Deprecated: Use `drive` instead.
     */
    teamDrive?: Schema$TeamDrive;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string | null;
    /**
     * The time of this change (RFC 3339 date-time).
     */
    time?: string | null;
    /**
     * Deprecated: Use `changeType` instead.
     */
    type?: string | null;
  }
  /**
   * A list of changes for a user.
   */
  export interface Schema$ChangeList {
    /**
     * The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    changes?: Schema$Change[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#changeList"`.
     */
    kind?: string | null;
    /**
     * The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.
     */
    newStartPageToken?: string | null;
    /**
     * The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.
     */
    nextPageToken?: string | null;
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
     * Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.
     */
    kind?: string | null;
    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: {[key: string]: string} | null;
    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
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
     * The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".
     */
    type?: string | null;
  }
  /**
   * A comment on a file. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.
   */
  export interface Schema$Comment {
    /**
     * A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments).
     */
    anchor?: string | null;
    /**
     * Output only. The author of the comment. The author's email address and permission ID will not be populated.
     */
    author?: Schema$User;
    /**
     * The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.
     */
    content?: string | null;
    /**
     * The time at which the comment was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Output only. Whether the comment has been deleted. A deleted comment has no content.
     */
    deleted?: boolean | null;
    /**
     * Output only. The content of the comment with HTML formatting.
     */
    htmlContent?: string | null;
    /**
     * Output only. The ID of the comment.
     */
    id?: string | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.
     */
    kind?: string | null;
    /**
     * The last time the comment or any of its replies was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
    /**
     * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
     */
    quotedFileContent?: {mimeType?: string; value?: string} | null;
    /**
     * Output only. The full list of replies to the comment in chronological order.
     */
    replies?: Schema$Reply[];
    /**
     * Output only. Whether the comment has been resolved by one of its replies.
     */
    resolved?: boolean | null;
  }
  /**
   * A list of comments on a file.
   */
  export interface Schema$CommentList {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    comments?: Schema$Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#commentList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
  }
  /**
   * A restriction for accessing the content of the file.
   */
  export interface Schema$ContentRestriction {
    /**
     * Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction.
     */
    ownerRestricted?: boolean | null;
    /**
     * Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.
     */
    readOnly?: boolean | null;
    /**
     * Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`.
     */
    reason?: string | null;
    /**
     * Output only. The user who set the content restriction. Only populated if `readOnly` is true.
     */
    restrictingUser?: Schema$User;
    /**
     * The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.
     */
    restrictionTime?: string | null;
    /**
     * Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.
     */
    systemRestricted?: boolean | null;
    /**
     * Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`.
     */
    type?: string | null;
  }
  /**
   * A restriction for copy and download of the file.
   */
  export interface Schema$DownloadRestriction {
    /**
     * Whether download and copy is restricted for readers.
     */
    restrictedForReaders?: boolean | null;
    /**
     * Whether download and copy is restricted for writers. If true, download is also restricted for readers.
     */
    restrictedForWriters?: boolean | null;
  }
  /**
   * Download restrictions applied to the file.
   */
  export interface Schema$DownloadRestrictionsMetadata {
    /**
     * Output only. The effective download restriction applied to this file. This considers all restriction settings and DLP rules.
     */
    effectiveDownloadRestrictionWithContext?: Schema$DownloadRestriction;
    /**
     * The download restriction of the file applied directly by the owner or organizer. This does not take into account shared drive settings or DLP rules.
     */
    itemDownloadRestriction?: Schema$DownloadRestriction;
  }
  /**
   * Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.
   */
  export interface Schema$Drive {
    /**
     * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * Output only. A short-lived link to this shared drive's background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Output only. Capabilities the current user has on this shared drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeDownloadRestriction?: boolean;
      canChangeDriveBackground?: boolean;
      canChangeDriveMembersOnlyRestriction?: boolean;
      canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRename?: boolean;
      canRenameDrive?: boolean;
      canResetDriveRestrictions?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.
     */
    colorRgb?: string | null;
    /**
     * The time at which the shared drive was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Whether the shared drive is hidden from default view.
     */
    hidden?: boolean | null;
    /**
     * Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.
     */
    id?: string | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`.
     */
    kind?: string | null;
    /**
     * The name of this shared drive.
     */
    name?: string | null;
    /**
     * Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.
     */
    orgUnitId?: string | null;
    /**
     * A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      downloadRestriction?: Schema$DownloadRestriction;
      driveMembersOnly?: boolean;
      sharingFoldersRequiresOrganizerPermission?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.
     */
    themeId?: string | null;
  }
  /**
   * A list of shared drives.
   */
  export interface Schema$DriveList {
    /**
     * The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    drives?: Schema$Drive[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#driveList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
  }
  /**
   * The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.
   */
  export interface Schema$File {
    /**
     * A collection of arbitrary key-value pairs which are private to the requesting app.
     * Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
     */
    appProperties?: {[key: string]: string} | null;
    /**
     * Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: {
      canAcceptOwnership?: boolean;
      canAddChildren?: boolean;
      canAddFolderFromAnotherDrive?: boolean;
      canAddMyDriveParent?: boolean;
      canChangeCopyRequiresWriterPermission?: boolean;
      canChangeItemDownloadRestriction?: boolean;
      canChangeSecurityUpdateEnabled?: boolean;
      canChangeViewersCanCopyContent?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDelete?: boolean;
      canDeleteChildren?: boolean;
      canDisableInheritedPermissions?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canEnableInheritedPermissions?: boolean;
      canListChildren?: boolean;
      canModifyContent?: boolean;
      canModifyContentRestriction?: boolean;
      canModifyEditorContentRestriction?: boolean;
      canModifyLabels?: boolean;
      canModifyOwnerContentRestriction?: boolean;
      canMoveChildrenOutOfDrive?: boolean;
      canMoveChildrenOutOfTeamDrive?: boolean;
      canMoveChildrenWithinDrive?: boolean;
      canMoveChildrenWithinTeamDrive?: boolean;
      canMoveItemIntoTeamDrive?: boolean;
      canMoveItemOutOfDrive?: boolean;
      canMoveItemOutOfTeamDrive?: boolean;
      canMoveItemWithinDrive?: boolean;
      canMoveItemWithinTeamDrive?: boolean;
      canMoveTeamDriveItem?: boolean;
      canReadDrive?: boolean;
      canReadLabels?: boolean;
      canReadRevisions?: boolean;
      canReadTeamDrive?: boolean;
      canRemoveChildren?: boolean;
      canRemoveContentRestriction?: boolean;
      canRemoveMyDriveParent?: boolean;
      canRename?: boolean;
      canShare?: boolean;
      canTrash?: boolean;
      canTrashChildren?: boolean;
      canUntrash?: boolean;
    } | null;
    /**
     * Additional information about the content of the file. These fields are never populated in responses.
     */
    contentHints?: {
      indexableText?: string;
      thumbnail?: {image?: string; mimeType?: string};
    } | null;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: Schema$ContentRestriction[];
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean | null;
    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * A short description of the file.
     */
    description?: string | null;
    /**
     * Download restrictions applied on the file.
     */
    downloadRestrictions?: Schema$DownloadRestrictionsMetadata;
    /**
     * Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string | null;
    /**
     * Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
     */
    explicitlyTrashed?: boolean | null;
    /**
     * Output only. Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.
     */
    fileExtension?: string | null;
    /**
     * The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.
     */
    folderColorRgb?: string | null;
    /**
     * Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.
     */
    fullFileExtension?: string | null;
    /**
     * Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.
     */
    hasAugmentedPermissions?: boolean | null;
    /**
     * Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean | null;
    /**
     * Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
     */
    headRevisionId?: string | null;
    /**
     * Output only. A static, unauthenticated link to the file's icon.
     */
    iconLink?: string | null;
    /**
     * The ID of the file.
     */
    id?: string | null;
    /**
     * Output only. Additional metadata about image media, if available.
     */
    imageMediaMetadata?: {
      aperture?: number;
      cameraMake?: string;
      cameraModel?: string;
      colorSpace?: string;
      exposureBias?: number;
      exposureMode?: string;
      exposureTime?: number;
      flashUsed?: boolean;
      focalLength?: number;
      height?: number;
      isoSpeed?: number;
      lens?: string;
      location?: {altitude?: number; latitude?: number; longitude?: number};
      maxApertureValue?: number;
      meteringMode?: string;
      rotation?: number;
      sensor?: string;
      subjectDistance?: number;
      time?: string;
      whiteBalance?: string;
      width?: number;
    } | null;
    /**
     * Whether this file has inherited permissions disabled. Inherited permissions are enabled by default.
     */
    inheritedPermissionsDisabled?: boolean | null;
    /**
     * Output only. Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.
     */
    kind?: string | null;
    /**
     * Output only. An overview of the labels on the file.
     */
    labelInfo?: {labels?: Schema$Label[]} | null;
    /**
     * Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user.
     */
    lastModifyingUser?: Schema$User;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: {
      securityUpdateEligible?: boolean;
      securityUpdateEnabled?: boolean;
    } | null;
    /**
     * Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
     */
    md5Checksum?: string | null;
    /**
     * The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.
     */
    mimeType?: string | null;
    /**
     * Output only. Whether the file has been modified by this user.
     */
    modifiedByMe?: boolean | null;
    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime?: string | null;
    /**
     * he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime?: string | null;
    /**
     * The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
     */
    name?: string | null;
    /**
     * The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string | null;
    /**
     * Output only. Whether the user owns the file. Not populated for items in shared drives.
     */
    ownedByMe?: boolean | null;
    /**
     * Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: Schema$User[];
    /**
     * The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parent of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.
     */
    parents?: string[] | null;
    /**
     * Output only. List of permission IDs for users with access to this file.
     */
    permissionIds?: string[] | null;
    /**
     * Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
     */
    permissions?: Schema$Permission[];
    /**
     * A collection of arbitrary key-value pairs which are visible to all apps.
     * Entries with null values are cleared in update and copy requests.
     */
    properties?: {[key: string]: string} | null;
    /**
     * Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.
     */
    quotaBytesUsed?: string | null;
    /**
     * Output only. A key needed to access the item via a shared link.
     */
    resourceKey?: string | null;
    /**
     * Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string | null;
    /**
     * Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string | null;
    /**
     * Output only. Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean | null;
    /**
     * The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
     */
    sharedWithMeTime?: string | null;
    /**
     * Output only. The user who shared the file with the requesting user, if applicable.
     */
    sharingUser?: Schema$User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. Can only be set on `files.create` requests.
     */
    shortcutDetails?: {
      targetId?: string;
      targetMimeType?: string;
      targetResourceKey?: string;
    } | null;
    /**
     * Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.
     */
    size?: string | null;
    /**
     * Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[] | null;
    /**
     * Whether the user has starred the file.
     */
    starred?: boolean | null;
    /**
     * Deprecated: Output only. Use `driveId` instead.
     */
    teamDriveId?: string | null;
    /**
     * Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies, consider using a proxy server. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.
     */
    thumbnailLink?: string | null;
    /**
     * Output only. The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string | null;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.
     */
    trashed?: boolean | null;
    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
     */
    trashedTime?: string | null;
    /**
     * Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.
     */
    trashingUser?: Schema$User;
    /**
     * Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
     */
    version?: string | null;
    /**
     * Output only. Additional metadata about video media. This may not be available immediately upon upload.
     */
    videoMediaMetadata?: {
      durationMillis?: string;
      height?: number;
      width?: number;
    } | null;
    /**
     * Output only. Whether the file has been viewed by this user.
     */
    viewedByMe?: boolean | null;
    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime?: string | null;
    /**
     * Deprecated: Use `copyRequiresWriterPermission` instead.
     */
    viewersCanCopyContent?: boolean | null;
    /**
     * Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
     */
    webContentLink?: string | null;
    /**
     * Output only. A link for opening the file in a relevant Google editor or viewer in a browser.
     */
    webViewLink?: string | null;
    /**
     * Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.
     */
    writersCanShare?: boolean | null;
  }
  /**
   * A list of files.
   */
  export interface Schema$FileList {
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    files?: Schema$File[];
    /**
     * Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the 'allDrives' corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'.
     */
    incompleteSearch?: boolean | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#fileList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
  }
  /**
   * A list of generated file IDs which can be provided in create requests.
   */
  export interface Schema$GeneratedIds {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[] | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#generatedIds"`.
     */
    kind?: string | null;
    /**
     * The type of file that can be created with these IDs.
     */
    space?: string | null;
  }
  /**
   * Representation of label and label fields.
   */
  export interface Schema$Label {
    /**
     * A map of the fields on the label, keyed by the field's ID.
     */
    fields?: {[key: string]: Schema$LabelField} | null;
    /**
     * The ID of the label.
     */
    id?: string | null;
    /**
     * This is always drive#label
     */
    kind?: string | null;
    /**
     * The revision ID of the label.
     */
    revisionId?: string | null;
  }
  /**
   * Representation of field, which is a typed key-value pair.
   */
  export interface Schema$LabelField {
    /**
     * Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.
     */
    dateString?: string[] | null;
    /**
     * The identifier of this label field.
     */
    id?: string | null;
    /**
     * Only present if `valueType` is `integer`.
     */
    integer?: string[] | null;
    /**
     * This is always drive#labelField.
     */
    kind?: string | null;
    /**
     * Only present if `valueType` is `selection`
     */
    selection?: string[] | null;
    /**
     * Only present if `valueType` is `text`.
     */
    text?: string[] | null;
    /**
     * Only present if `valueType` is `user`.
     */
    user?: Schema$User[];
    /**
     * The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user`
     */
    valueType?: string | null;
  }
  /**
   * A modification to a label's field.
   */
  export interface Schema$LabelFieldModification {
    /**
     * The ID of the field to be modified.
     */
    fieldId?: string | null;
    /**
     * This is always drive#labelFieldModification.
     */
    kind?: string | null;
    /**
     * Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.
     */
    setDateValues?: string[] | null;
    /**
     * Replaces the value of an `integer` field with these new values.
     */
    setIntegerValues?: string[] | null;
    /**
     * Replaces a `selection` field with these new values.
     */
    setSelectionValues?: string[] | null;
    /**
     * Sets the value of a `text` field.
     */
    setTextValues?: string[] | null;
    /**
     * Replaces a `user` field with these new values. The values must be valid email addresses.
     */
    setUserValues?: string[] | null;
    /**
     * Unsets the values for this field.
     */
    unsetValues?: boolean | null;
  }
  /**
   * A list of labels applied to a file.
   */
  export interface Schema$LabelList {
    /**
     * This is always drive#labelList
     */
    kind?: string | null;
    /**
     * The list of labels.
     */
    labels?: Schema$Label[];
    /**
     * The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
  }
  /**
   * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
   */
  export interface Schema$LabelModification {
    /**
     * The list of modifications to this label's fields.
     */
    fieldModifications?: Schema$LabelFieldModification[];
    /**
     * This is always drive#labelModification.
     */
    kind?: string | null;
    /**
     * The ID of the label to modify.
     */
    labelId?: string | null;
    /**
     * If true, the label will be removed from the file.
     */
    removeLabel?: boolean | null;
  }
  /**
   * The response to an Access Proposal list request.
   */
  export interface Schema$ListAccessProposalsResponse {
    /**
     * The list of Access Proposals. This field is only populated in v3 and v3beta.
     */
    accessProposals?: Schema$AccessProposal[];
    /**
     * The continuation token for the next page of results. This will be absent if the end of the results list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.
   */
  export interface Schema$ModifyLabelsRequest {
    /**
     * This is always drive#modifyLabelsRequest.
     */
    kind?: string | null;
    /**
     * The list of modifications to apply to the labels on the file.
     */
    labelModifications?: Schema$LabelModification[];
  }
  /**
   * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
   */
  export interface Schema$ModifyLabelsResponse {
    /**
     * This is always drive#modifyLabelsResponse
     */
    kind?: string | null;
    /**
     * The list of labels which were added or updated by the request.
     */
    modifiedLabels?: Schema$Label[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
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
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. By default, permissions requests only return a subset of fields. Permission kind, ID, type, and role are always returned. To retrieve specific fields, see https://developers.google.com/workspace/drive/api/guides/fields-parameter. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.
   */
  export interface Schema$Permission {
    /**
     * Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.
     */
    allowFileDiscovery?: boolean | null;
    /**
     * Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean | null;
    /**
     * Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google account, such as "Joe Smith." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "thecompany.com." * `anyone` - No `displayName` is present.
     */
    displayName?: string | null;
    /**
     * The domain to which this permission refers.
     */
    domain?: string | null;
    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress?: string | null;
    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future
     */
    expirationTime?: string | null;
    /**
     * Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values.
     */
    id?: string | null;
    /**
     * When true, only organizers, owners, and users with permissions added directly on the item can access it.
     */
    inheritedPermissionsDisabled?: boolean | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`.
     */
    kind?: string | null;
    /**
     * Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.
     */
    pendingOwner?: boolean | null;
    /**
     * Output only. Details of whether the permissions on this item are inherited or directly on this item.
     */
    permissionDetails?: Array<{
      inherited?: boolean;
      inheritedFrom?: string;
      permissionType?: string;
      role?: string;
    }> | null;
    /**
     * Output only. A link to the user's profile photo, if available.
     */
    photoLink?: string | null;
    /**
     * The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`
     */
    role?: string | null;
    /**
     * Output only. Deprecated: Output only. Use `permissionDetails` instead.
     */
    teamDrivePermissionDetails?: Array<{
      inherited?: boolean;
      inheritedFrom?: string;
      role?: string;
      teamDrivePermissionType?: string;
    }> | null;
    /**
     * The type of the grantee. Valid values are: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.
     */
    type?: string | null;
    /**
     * Indicates the view for this permission. Only populated for permissions that belong to a view. published and metadata are the only supported values. - published: The permission's role is published_reader. - metadata: The item is only visible to the metadata view because the item has limited access and the scope has at least read access to the parent. Note: The metadata view is currently only supported on folders.
     */
    view?: string | null;
  }
  /**
   * A list of permissions for a file.
   */
  export interface Schema$PermissionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#permissionList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
    /**
     * The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    permissions?: Schema$Permission[];
  }
  /**
   * A reply to a comment on a file. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.
   */
  export interface Schema$Reply {
    /**
     * The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`
     */
    action?: string | null;
    /**
     * Output only. The author of the reply. The author's email address and permission ID will not be populated.
     */
    author?: Schema$User;
    /**
     * The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.
     */
    content?: string | null;
    /**
     * The time at which the reply was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * Output only. Whether the reply has been deleted. A deleted reply has no content.
     */
    deleted?: boolean | null;
    /**
     * Output only. The content of the reply with HTML formatting.
     */
    htmlContent?: string | null;
    /**
     * Output only. The ID of the reply.
     */
    id?: string | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.
     */
    kind?: string | null;
    /**
     * The last time the reply was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
  }
  /**
   * A list of replies to a comment on a file.
   */
  export interface Schema$ReplyList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#replyList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    replies?: Schema$Reply[];
  }
  /**
   * Request message for resolving an AccessProposal on a file.
   */
  export interface Schema$ResolveAccessProposalRequest {
    /**
     * Required. The action to take on the AccessProposal.
     */
    action?: string | null;
    /**
     * Optional. The roles the approver has allowed, if any. Note: This field is required for the `ACCEPT` action.
     */
    role?: string[] | null;
    /**
     * Optional. Whether to send an email to the requester when the AccessProposal is denied or accepted.
     */
    sendNotification?: boolean | null;
    /**
     * Optional. Indicates the view for this access proposal. This should only be set when the proposal belongs to a view. `published` is the only supported value.
     */
    view?: string | null;
  }
  /**
   * The metadata for a revision to a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.
   */
  export interface Schema$Revision {
    /**
     * Output only. Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: {[key: string]: string} | null;
    /**
     * Output only. The ID of the revision.
     */
    id?: string | null;
    /**
     * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.
     */
    keepForever?: boolean | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`.
     */
    kind?: string | null;
    /**
     * Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user.
     */
    lastModifyingUser?: Schema$User;
    /**
     * Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.
     */
    md5Checksum?: string | null;
    /**
     * Output only. The MIME type of the revision.
     */
    mimeType?: string | null;
    /**
     * The last time the revision was modified (RFC 3339 date-time).
     */
    modifiedTime?: string | null;
    /**
     * Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.
     */
    originalFilename?: string | null;
    /**
     * Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.
     */
    publishAuto?: boolean | null;
    /**
     * Whether this revision is published. This is only applicable to Docs Editors files.
     */
    published?: boolean | null;
    /**
     * Output only. A link to the published revision. This is only populated for Docs Editors files.
     */
    publishedLink?: string | null;
    /**
     * Whether this revision is published outside the domain. This is only applicable to Docs Editors files.
     */
    publishedOutsideDomain?: boolean | null;
    /**
     * Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.
     */
    size?: string | null;
  }
  /**
   * A list of revisions of a file.
   */
  export interface Schema$RevisionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#revisionList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
    /**
     * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    revisions?: Schema$Revision[];
  }
  export interface Schema$StartPageToken {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`.
     */
    kind?: string | null;
    /**
     * The starting page token for listing future changes. The page token doesn't expire.
     */
    startPageToken?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
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
   * Deprecated: use the drive collection instead.
   */
  export interface Schema$TeamDrive {
    /**
     * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.
     */
    backgroundImageFile?: {
      id?: string;
      width?: number;
      xCoordinate?: number;
      yCoordinate?: number;
    } | null;
    /**
     * A short-lived link to this Team Drive's background image.
     */
    backgroundImageLink?: string | null;
    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities?: {
      canAddChildren?: boolean;
      canChangeCopyRequiresWriterPermissionRestriction?: boolean;
      canChangeDomainUsersOnlyRestriction?: boolean;
      canChangeDownloadRestriction?: boolean;
      canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean;
      canChangeTeamDriveBackground?: boolean;
      canChangeTeamMembersOnlyRestriction?: boolean;
      canComment?: boolean;
      canCopy?: boolean;
      canDeleteChildren?: boolean;
      canDeleteTeamDrive?: boolean;
      canDownload?: boolean;
      canEdit?: boolean;
      canListChildren?: boolean;
      canManageMembers?: boolean;
      canReadRevisions?: boolean;
      canRemoveChildren?: boolean;
      canRename?: boolean;
      canRenameTeamDrive?: boolean;
      canResetTeamDriveRestrictions?: boolean;
      canShare?: boolean;
      canTrashChildren?: boolean;
    } | null;
    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.
     */
    colorRgb?: string | null;
    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdTime?: string | null;
    /**
     * The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`.
     */
    kind?: string | null;
    /**
     * The name of this Team Drive.
     */
    name?: string | null;
    /**
     * The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.
     */
    orgUnitId?: string | null;
    /**
     * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
     */
    restrictions?: {
      adminManagedRestrictions?: boolean;
      copyRequiresWriterPermission?: boolean;
      domainUsersOnly?: boolean;
      downloadRestriction?: Schema$DownloadRestriction;
      sharingFoldersRequiresOrganizerPermission?: boolean;
      teamMembersOnly?: boolean;
    } | null;
    /**
     * The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.
     */
    themeId?: string | null;
  }
  /**
   * A list of Team Drives.
   */
  export interface Schema$TeamDriveList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"drive#teamDriveList"`.
     */
    kind?: string | null;
    /**
     * The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.
     */
    nextPageToken?: string | null;
    /**
     * The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    teamDrives?: Schema$TeamDrive[];
  }
  /**
   * Information about a Drive user.
   */
  export interface Schema$User {
    /**
     * Output only. A plain text displayable name for this user.
     */
    displayName?: string | null;
    /**
     * Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
     */
    emailAddress?: string | null;
    /**
     * Output only. Identifies what kind of resource this is. Value: the fixed string `drive#user`.
     */
    kind?: string | null;
    /**
     * Output only. Whether this user is the requesting user.
     */
    me?: boolean | null;
    /**
     * Output only. The user's ID as visible in Permission resources.
     */
    permissionId?: string | null;
    /**
     * Output only. A link to the user's profile photo, if available.
     */
    photoLink?: string | null;
  }

  export class Resource$About {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.about.get({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appInstalled": false,
     *   //   "canCreateDrives": false,
     *   //   "canCreateTeamDrives": false,
     *   //   "driveThemes": [],
     *   //   "exportFormats": {},
     *   //   "folderColorPalette": [],
     *   //   "importFormats": {},
     *   //   "kind": "my_kind",
     *   //   "maxImportSizes": {},
     *   //   "maxUploadSize": "my_maxUploadSize",
     *   //   "storageQuota": {},
     *   //   "teamDriveThemes": [],
     *   //   "user": {}
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
      params: Params$Resource$About$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$About$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$About>>;
    get(
      params: Params$Resource$About$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$About$Get,
      options: MethodOptions | BodyResponseCallback<Schema$About>,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(
      params: Params$Resource$About$Get,
      callback: BodyResponseCallback<Schema$About>
    ): void;
    get(callback: BodyResponseCallback<Schema$About>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$About$Get
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$About>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$About>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$About$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$About$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/about').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$About>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$About>(parameters);
      }
    }
  }

  export interface Params$Resource$About$Get extends StandardParameters {}

  export class Resource$Accessproposals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves an AccessProposal by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.accessproposals.get({
     *     // Required. The id of the item the request is on.
     *     fileId: 'placeholder-value',
     *     // Required. The id of the access proposal to resolve.
     *     proposalId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "fileId": "my_fileId",
     *   //   "proposalId": "my_proposalId",
     *   //   "recipientEmailAddress": "my_recipientEmailAddress",
     *   //   "requestMessage": "my_requestMessage",
     *   //   "requesterEmailAddress": "my_requesterEmailAddress",
     *   //   "rolesAndViews": []
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
      params: Params$Resource$Accessproposals$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accessproposals$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccessProposal>>;
    get(
      params: Params$Resource$Accessproposals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accessproposals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccessProposal>,
      callback: BodyResponseCallback<Schema$AccessProposal>
    ): void;
    get(
      params: Params$Resource$Accessproposals$Get,
      callback: BodyResponseCallback<Schema$AccessProposal>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccessProposal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accessproposals$Get
        | BodyResponseCallback<Schema$AccessProposal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessProposal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessProposal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccessProposal>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accessproposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accessproposals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/accessproposals/{proposalId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'proposalId'],
        pathParams: ['fileId', 'proposalId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccessProposal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessProposal>(parameters);
      }
    }

    /**
     * List the AccessProposals on a file. Note: Only approvers are able to list AccessProposals on a file. If the user is not an approver, returns a 403.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.accessproposals.list({
     *     // Required. The id of the item the request is on.
     *     fileId: 'placeholder-value',
     *     // Optional. The number of results per page
     *     pageSize: 'placeholder-value',
     *     // Optional. The continuation token on the list of access requests.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessProposals": [],
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
      params: Params$Resource$Accessproposals$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accessproposals$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccessProposalsResponse>>;
    list(
      params: Params$Resource$Accessproposals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accessproposals$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccessProposalsResponse>,
      callback: BodyResponseCallback<Schema$ListAccessProposalsResponse>
    ): void;
    list(
      params: Params$Resource$Accessproposals$List,
      callback: BodyResponseCallback<Schema$ListAccessProposalsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccessProposalsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accessproposals$List
        | BodyResponseCallback<Schema$ListAccessProposalsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccessProposalsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccessProposalsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccessProposalsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accessproposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accessproposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/accessproposals').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAccessProposalsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccessProposalsResponse>(parameters);
      }
    }

    /**
     * Used to approve or deny an Access Proposal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.accessproposals.resolve({
     *     // Required. The id of the item the request is on.
     *     fileId: 'placeholder-value',
     *     // Required. The id of the access proposal to resolve.
     *     proposalId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "role": [],
     *       //   "sendNotification": false,
     *       //   "view": "my_view"
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
    resolve(
      params: Params$Resource$Accessproposals$Resolve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resolve(
      params?: Params$Resource$Accessproposals$Resolve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    resolve(
      params: Params$Resource$Accessproposals$Resolve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolve(
      params: Params$Resource$Accessproposals$Resolve,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    resolve(
      params: Params$Resource$Accessproposals$Resolve,
      callback: BodyResponseCallback<void>
    ): void;
    resolve(callback: BodyResponseCallback<void>): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Accessproposals$Resolve
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accessproposals$Resolve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accessproposals$Resolve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v3/files/{fileId}/accessproposals/{proposalId}:resolve'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'proposalId'],
        pathParams: ['fileId', 'proposalId'],
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

  export interface Params$Resource$Accessproposals$Get
    extends StandardParameters {
    /**
     * Required. The id of the item the request is on.
     */
    fileId?: string;
    /**
     * Required. The id of the access proposal to resolve.
     */
    proposalId?: string;
  }
  export interface Params$Resource$Accessproposals$List
    extends StandardParameters {
    /**
     * Required. The id of the item the request is on.
     */
    fileId?: string;
    /**
     * Optional. The number of results per page
     */
    pageSize?: number;
    /**
     * Optional. The continuation token on the list of access requests.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accessproposals$Resolve
    extends StandardParameters {
    /**
     * Required. The id of the item the request is on.
     */
    fileId?: string;
    /**
     * Required. The id of the access proposal to resolve.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResolveAccessProposalRequest;
  }

  export class Resource$Apps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.apps.readonly',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.apps.get({
     *     // The ID of the app.
     *     appId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorized": false,
     *   //   "createInFolderTemplate": "my_createInFolderTemplate",
     *   //   "createUrl": "my_createUrl",
     *   //   "hasDriveWideScope": false,
     *   //   "icons": [],
     *   //   "id": "my_id",
     *   //   "installed": false,
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "objectType": "my_objectType",
     *   //   "openUrlTemplate": "my_openUrlTemplate",
     *   //   "primaryFileExtensions": [],
     *   //   "primaryMimeTypes": [],
     *   //   "productId": "my_productId",
     *   //   "productUrl": "my_productUrl",
     *   //   "secondaryFileExtensions": [],
     *   //   "secondaryMimeTypes": [],
     *   //   "shortDescription": "my_shortDescription",
     *   //   "supportsCreate": false,
     *   //   "supportsImport": false,
     *   //   "supportsMultiOpen": false,
     *   //   "supportsOfflineCreate": false,
     *   //   "useByDefault": false
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
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Apps$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$App>>;
    get(
      params: Params$Resource$Apps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$App>,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(
      params: Params$Resource$Apps$Get,
      callback: BodyResponseCallback<Schema$App>
    ): void;
    get(callback: BodyResponseCallback<Schema$App>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Apps$Get
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$App>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$App>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/apps/{appId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['appId'],
        pathParams: ['appId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$App>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$App>(parameters);
      }
    }

    /**
     * Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive.apps.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.apps.list({
     *     // A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     *     appFilterExtensions: 'placeholder-value',
     *     // A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     *     appFilterMimeTypes: 'placeholder-value',
     *     // A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     *     languageCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultAppIds": [],
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Apps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Apps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AppList>>;
    list(
      params: Params$Resource$Apps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Apps$List,
      options: MethodOptions | BodyResponseCallback<Schema$AppList>,
      callback: BodyResponseCallback<Schema$AppList>
    ): void;
    list(
      params: Params$Resource$Apps$List,
      callback: BodyResponseCallback<Schema$AppList>
    ): void;
    list(callback: BodyResponseCallback<Schema$AppList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Apps$List
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AppList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/apps').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AppList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppList>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Get extends StandardParameters {
    /**
     * The ID of the app.
     */
    appId?: string;
  }
  export interface Params$Resource$Apps$List extends StandardParameters {
    /**
     * A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     */
    appFilterExtensions?: string;
    /**
     * A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     */
    appFilterMimeTypes?: string;
    /**
     * A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     */
    languageCode?: string;
  }

  export class Resource$Changes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.getStartPageToken({
     *     // The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     *     driveId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "startPageToken": "my_startPageToken"
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
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getStartPageToken(
      params?: Params$Resource$Changes$Getstartpagetoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StartPageToken>>;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      options: MethodOptions | BodyResponseCallback<Schema$StartPageToken>,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      params: Params$Resource$Changes$Getstartpagetoken,
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      callback: BodyResponseCallback<Schema$StartPageToken>
    ): void;
    getStartPageToken(
      paramsOrCallback?:
        | Params$Resource$Changes$Getstartpagetoken
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StartPageToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StartPageToken>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Changes$Getstartpagetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Getstartpagetoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/changes/startPageToken').replace(
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
        createAPIRequest<Schema$StartPageToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StartPageToken>(parameters);
      }
    }

    /**
     * Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.list({
     *     // The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     *     driveId: 'placeholder-value',
     *     // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     *     includeCorpusRemovals: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     *     includeRemoved: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // The maximum number of changes to return per page.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     *     pageToken: 'placeholder-value',
     *     // Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     *     restrictToMyDrive: 'placeholder-value',
     *     // A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     *     spaces: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "changes": [],
     *   //   "kind": "my_kind",
     *   //   "newStartPageToken": "my_newStartPageToken",
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
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Changes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChangeList>>;
    list(
      params: Params$Resource$Changes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChangeList>,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(
      params: Params$Resource$Changes$List,
      callback: BodyResponseCallback<Schema$ChangeList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangeList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changes$List
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChangeList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChangeList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/changes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChangeList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChangeList>(parameters);
      }
    }

    /**
     * Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.changes.watch({
     *     // The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     *     driveId: 'placeholder-value',
     *     // Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     *     includeCorpusRemovals: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     *     includeRemoved: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // The maximum number of changes to return per page.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     *     pageToken: 'placeholder-value',
     *     // Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     *     restrictToMyDrive: 'placeholder-value',
     *     // A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     *     spaces: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
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
      params: Params$Resource$Changes$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Changes$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    watch(
      params: Params$Resource$Changes$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Changes$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Changes$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Changes$Watch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Changes$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changes$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/changes/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['pageToken'],
        pathParams: [],
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

  export interface Params$Resource$Changes$Getstartpagetoken
    extends StandardParameters {
    /**
     * The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     */
    driveId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$List extends StandardParameters {
    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeRemoved?: boolean;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * The maximum number of changes to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     */
    restrictToMyDrive?: boolean;
    /**
     * A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     */
    spaces?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Changes$Watch extends StandardParameters {
    /**
     * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     */
    driveId?: string;
    /**
     * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     */
    includeCorpusRemovals?: boolean;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     */
    includeRemoved?: boolean;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * The maximum number of changes to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     */
    pageToken?: string;
    /**
     * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     */
    restrictToMyDrive?: boolean;
    /**
     * A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     */
    spaces?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;

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
     * Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.channels.stop({
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/channels/stop').replace(
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

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.create({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anchor": "my_anchor",
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdTime": "my_createdTime",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "quotedFileContent": {},
     *       //   "replies": [],
     *       //   "resolved": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "quotedFileContent": {},
     *   //   "replies": [],
     *   //   "resolved": false
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
      params: Params$Resource$Comments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Comments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    create(
      params: Params$Resource$Comments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Comments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(
      params: Params$Resource$Comments$Create,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Comment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Comments$Create
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Comment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.delete({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Comments$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
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

    /**
     * Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.get({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether to return deleted comments. Deleted comments will not include their original content.
     *     includeDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "quotedFileContent": {},
     *   //   "replies": [],
     *   //   "resolved": false
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
      params: Params$Resource$Comments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Comments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    get(
      params: Params$Resource$Comments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Comments$Get
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Comment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether to include deleted comments. Deleted comments will not include their original content.
     *     includeDeleted: 'placeholder-value',
     *     // The maximum number of comments to return per page.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *     // The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     *     startModifiedTime: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "comments": [],
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
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentList>>;
    list(
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentList>,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentList>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentList>(parameters);
      }
    }

    /**
     * Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.comments.update({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "anchor": "my_anchor",
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdTime": "my_createdTime",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "quotedFileContent": {},
     *       //   "replies": [],
     *       //   "resolved": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "anchor": "my_anchor",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "quotedFileContent": {},
     *   //   "replies": [],
     *   //   "resolved": false
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
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Comments$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Comment>>;
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Comment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Comments$Update
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Comment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Create extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
  }
  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to return deleted comments. Deleted comments will not include their original content.
     */
    includeDeleted?: boolean;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to include deleted comments. Deleted comments will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of comments to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     */
    startModifiedTime?: string;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }

  export class Resource$Drives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a shared drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.create({
     *     // Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdTime": "my_createdTime",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Drives$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Drives$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    create(
      params: Params$Resource$Drives$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Drives$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    create(
      params: Params$Resource$Drives$Create,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    create(callback: BodyResponseCallback<Schema$Drive>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Drives$Create
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.delete({
     *     // Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     *     allowItemDeletion: 'placeholder-value',
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
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
    delete(
      params: Params$Resource$Drives$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Drives$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Drives$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Drives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Drives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Drives$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
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

    /**
     * Gets a shared drive's metadata by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.get({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Drives$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Drives$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    get(
      params: Params$Resource$Drives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Drives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(
      params: Params$Resource$Drives$Get,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    get(callback: BodyResponseCallback<Schema$Drive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Drives$Get
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Hides a shared drive from the default view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.hide({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    hide(
      params: Params$Resource$Drives$Hide,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    hide(
      params?: Params$Resource$Drives$Hide,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    hide(
      params: Params$Resource$Drives$Hide,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    hide(
      params: Params$Resource$Drives$Hide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(
      params: Params$Resource$Drives$Hide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    hide(callback: BodyResponseCallback<Schema$Drive>): void;
    hide(
      paramsOrCallback?:
        | Params$Resource$Drives$Hide
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Hide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Hide;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives/{driveId}/hide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     *  Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.list({
     *     // Maximum number of shared drives to return per page.
     *     pageSize: 'placeholder-value',
     *     // Page token for shared drives.
     *     pageToken: 'placeholder-value',
     *     // Query string for searching shared drives.
     *     q: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "drives": [],
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
      params: Params$Resource$Drives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Drives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DriveList>>;
    list(
      params: Params$Resource$Drives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Drives$List,
      options: MethodOptions | BodyResponseCallback<Schema$DriveList>,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(
      params: Params$Resource$Drives$List,
      callback: BodyResponseCallback<Schema$DriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Drives$List
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DriveList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DriveList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DriveList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DriveList>(parameters);
      }
    }

    /**
     * Restores a shared drive to the default view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.unhide({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unhide(
      params?: Params$Resource$Drives$Unhide,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unhide(
      params: Params$Resource$Drives$Unhide,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(
      params: Params$Resource$Drives$Unhide,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    unhide(callback: BodyResponseCallback<Schema$Drive>): void;
    unhide(
      paramsOrCallback?:
        | Params$Resource$Drives$Unhide
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Unhide;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Unhide;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives/{driveId}/unhide').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }

    /**
     * Updates the metadata for a shared drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.drives.update({
     *     // The ID of the shared drive.
     *     driveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdTime": "my_createdTime",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    update(
      params: Params$Resource$Drives$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Drives$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Drive>>;
    update(
      params: Params$Resource$Drives$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Drives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Drive>,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(
      params: Params$Resource$Drives$Update,
      callback: BodyResponseCallback<Schema$Drive>
    ): void;
    update(callback: BodyResponseCallback<Schema$Drive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Drives$Update
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Drive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Drive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Drives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Drives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/drives/{driveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['driveId'],
        pathParams: ['driveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Drive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Drive>(parameters);
      }
    }
  }

  export interface Params$Resource$Drives$Create extends StandardParameters {
    /**
     * Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }
  export interface Params$Resource$Drives$Delete extends StandardParameters {
    /**
     * Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     */
    allowItemDeletion?: boolean;
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Get extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Hide extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$List extends StandardParameters {
    /**
     * Maximum number of shared drives to return per page.
     */
    pageSize?: number;
    /**
     * Page token for shared drives.
     */
    pageToken?: string;
    /**
     * Query string for searching shared drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Drives$Unhide extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
  }
  export interface Params$Resource$Drives$Update extends StandardParameters {
    /**
     * The ID of the shared drive.
     */
    driveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Drive;
  }

  export class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a copy of a file and applies any requested updates with patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.copy({
     *     // Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     *     ignoreDefaultVisibility: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     *     keepRevisionForever: 'placeholder-value',
     *     // A language hint for OCR processing during image import (ISO 639-1 code).
     *     ocrLanguage: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appProperties": {},
     *       //   "capabilities": {},
     *       //   "contentHints": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "createdTime": "my_createdTime",
     *       //   "description": "my_description",
     *       //   "downloadRestrictions": {},
     *       //   "driveId": "my_driveId",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "lastModifyingUser": {},
     *       //   "linkShareMetadata": {},
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMe": false,
     *       //   "modifiedByMeTime": "my_modifiedByMeTime",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "name": "my_name",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": {},
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shared": false,
     *       //   "sharedWithMeTime": "my_sharedWithMeTime",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "size": "my_size",
     *       //   "spaces": [],
     *       //   "starred": false,
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "trashed": false,
     *       //   "trashedTime": "my_trashedTime",
     *       //   "trashingUser": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "viewedByMe": false,
     *       //   "viewedByMeTime": "my_viewedByMeTime",
     *       //   "viewersCanCopyContent": false,
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appProperties": {},
     *   //   "capabilities": {},
     *   //   "contentHints": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "createdTime": "my_createdTime",
     *   //   "description": "my_description",
     *   //   "downloadRestrictions": {},
     *   //   "driveId": "my_driveId",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "lastModifyingUser": {},
     *   //   "linkShareMetadata": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMe": false,
     *   //   "modifiedByMeTime": "my_modifiedByMeTime",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "name": "my_name",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": {},
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shared": false,
     *   //   "sharedWithMeTime": "my_sharedWithMeTime",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "size": "my_size",
     *   //   "spaces": [],
     *   //   "starred": false,
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "trashed": false,
     *   //   "trashedTime": "my_trashedTime",
     *   //   "trashingUser": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "viewedByMe": false,
     *   //   "viewedByMeTime": "my_viewedByMeTime",
     *   //   "viewersCanCopyContent": false,
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    copy(
      params: Params$Resource$Files$Copy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    copy(
      params?: Params$Resource$Files$Copy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    copy(
      params: Params$Resource$Files$Copy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    copy(
      params: Params$Resource$Files$Copy,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(
      params: Params$Resource$Files$Copy,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    copy(callback: BodyResponseCallback<Schema$File>): void;
    copy(
      paramsOrCallback?:
        | Params$Resource$Files$Copy
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Copy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Copy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/copy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     *  Creates a new file. This method supports an x/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`x/x` Note: Specify a valid MIME type, rather than the literal `x/x` value. The literal `x/x` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.create({
     *     // Deprecated. Creating files in multiple folders is no longer supported.
     *     enforceSingleParent: 'placeholder-value',
     *     // Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     *     ignoreDefaultVisibility: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     *     keepRevisionForever: 'placeholder-value',
     *     // A language hint for OCR processing during image import (ISO 639-1 code).
     *     ocrLanguage: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether to use the uploaded content as indexable text.
     *     useContentAsIndexableText: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appProperties": {},
     *       //   "capabilities": {},
     *       //   "contentHints": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "createdTime": "my_createdTime",
     *       //   "description": "my_description",
     *       //   "downloadRestrictions": {},
     *       //   "driveId": "my_driveId",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "lastModifyingUser": {},
     *       //   "linkShareMetadata": {},
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMe": false,
     *       //   "modifiedByMeTime": "my_modifiedByMeTime",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "name": "my_name",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": {},
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shared": false,
     *       //   "sharedWithMeTime": "my_sharedWithMeTime",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "size": "my_size",
     *       //   "spaces": [],
     *       //   "starred": false,
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "trashed": false,
     *       //   "trashedTime": "my_trashedTime",
     *       //   "trashingUser": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "viewedByMe": false,
     *       //   "viewedByMeTime": "my_viewedByMeTime",
     *       //   "viewersCanCopyContent": false,
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appProperties": {},
     *   //   "capabilities": {},
     *   //   "contentHints": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "createdTime": "my_createdTime",
     *   //   "description": "my_description",
     *   //   "downloadRestrictions": {},
     *   //   "driveId": "my_driveId",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "lastModifyingUser": {},
     *   //   "linkShareMetadata": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMe": false,
     *   //   "modifiedByMeTime": "my_modifiedByMeTime",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "name": "my_name",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": {},
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shared": false,
     *   //   "sharedWithMeTime": "my_sharedWithMeTime",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "size": "my_size",
     *   //   "spaces": [],
     *   //   "starred": false,
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "trashed": false,
     *   //   "trashedTime": "my_trashedTime",
     *   //   "trashingUser": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "viewedByMe": false,
     *   //   "viewedByMeTime": "my_viewedByMeTime",
     *   //   "viewersCanCopyContent": false,
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Files$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    create(
      params: Params$Resource$Files$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Files$Create,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    create(
      params: Params$Resource$Files$Create,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    create(callback: BodyResponseCallback<Schema$File>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Files$Create
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v3/files').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.delete({
     *     // Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
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
    delete(
      params: Params$Resource$Files$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Files$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Files$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Files$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Files$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Files$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
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

    /**
     * Downloads content of a file. Operations are valid for 24 hours from the time of creation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.download({
     *     // Required. The ID of the file to download.
     *     fileId: 'placeholder-value',
     *     // Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. See [Export MIME types for Google Workspace documents](/drive/api/guides/ref-export-formats) for the list of supported MIME types. If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future.
     *     mimeType: 'placeholder-value',
     *     // Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported.
     *     revisionId: 'placeholder-value',
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
    download(
      params: Params$Resource$Files$Download,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    download(
      params?: Params$Resource$Files$Download,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    download(
      params: Params$Resource$Files$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Files$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    download(
      params: Params$Resource$Files$Download,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    download(callback: BodyResponseCallback<Schema$Operation>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Files$Download
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
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/download').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
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
     * Permanently deletes all of the user's trashed files.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.emptyTrash({
     *     // If set, empties the trash of the provided shared drive.
     *     driveId: 'placeholder-value',
     *     // Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     *     enforceSingleParent: 'placeholder-value',
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
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    emptyTrash(
      params?: Params$Resource$Files$Emptytrash,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(
      params: Params$Resource$Files$Emptytrash,
      callback: BodyResponseCallback<void>
    ): void;
    emptyTrash(callback: BodyResponseCallback<void>): void;
    emptyTrash(
      paramsOrCallback?:
        | Params$Resource$Files$Emptytrash
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
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Emptytrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Emptytrash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/trash').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
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

    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.export({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Required. The MIME type of the format requested for this export.
     *     mimeType: 'placeholder-value',
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
    export(
      params: Params$Resource$Files$Export,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    export(
      params?: Params$Resource$Files$Export,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<unknown>>;
    export(
      params: Params$Resource$Files$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Files$Export,
      options: MethodOptions | BodyResponseCallback<unknown>,
      callback: BodyResponseCallback<unknown>
    ): void;
    export(
      params: Params$Resource$Files$Export,
      callback: BodyResponseCallback<unknown>
    ): void;
    export(callback: BodyResponseCallback<unknown>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Files$Export
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<unknown>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<unknown> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<unknown>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'mimeType'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<unknown>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<unknown>(parameters);
      }
    }

    /**
     * Generates a set of file IDs which can be provided in create or copy requests.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.generateIds({
     *     // The number of IDs to return.
     *     count: 'placeholder-value',
     *     // The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')
     *     space: 'placeholder-value',
     *     // The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files')
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ids": [],
     *   //   "kind": "my_kind",
     *   //   "space": "my_space"
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
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIds(
      params?: Params$Resource$Files$Generateids,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GeneratedIds>>;
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIds(
      params: Params$Resource$Files$Generateids,
      options: MethodOptions | BodyResponseCallback<Schema$GeneratedIds>,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(
      params: Params$Resource$Files$Generateids,
      callback: BodyResponseCallback<Schema$GeneratedIds>
    ): void;
    generateIds(callback: BodyResponseCallback<Schema$GeneratedIds>): void;
    generateIds(
      paramsOrCallback?:
        | Params$Resource$Files$Generateids
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GeneratedIds>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GeneratedIds>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Generateids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Generateids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/generateIds').replace(
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
        createAPIRequest<Schema$GeneratedIds>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GeneratedIds>(parameters);
      }
    }

    /**
     *  Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.get({
     *     // Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     *     acknowledgeAbuse: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appProperties": {},
     *   //   "capabilities": {},
     *   //   "contentHints": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "createdTime": "my_createdTime",
     *   //   "description": "my_description",
     *   //   "downloadRestrictions": {},
     *   //   "driveId": "my_driveId",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "lastModifyingUser": {},
     *   //   "linkShareMetadata": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMe": false,
     *   //   "modifiedByMeTime": "my_modifiedByMeTime",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "name": "my_name",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": {},
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shared": false,
     *   //   "sharedWithMeTime": "my_sharedWithMeTime",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "size": "my_size",
     *   //   "spaces": [],
     *   //   "starred": false,
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "trashed": false,
     *   //   "trashedTime": "my_trashedTime",
     *   //   "trashingUser": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "viewedByMe": false,
     *   //   "viewedByMeTime": "my_viewedByMeTime",
     *   //   "viewersCanCopyContent": false,
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
      params: Params$Resource$Files$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Files$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    get(
      params: Params$Resource$Files$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(callback: BodyResponseCallback<Schema$File>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Files$Get
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     *  Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.list({
     *     // Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.
     *     corpora: 'placeholder-value',
     *     // Deprecated: The source of files to list. Use 'corpora' instead.
     *     corpus: 'placeholder-value',
     *     // ID of the shared drive to search.
     *     driveId: 'placeholder-value',
     *     // Whether both My Drive and shared drive items should be included in results.
     *     includeItemsFromAllDrives: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Deprecated: Use `includeItemsFromAllDrives` instead.
     *     includeTeamDriveItems: 'placeholder-value',
     *     // A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *     // A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.
     *     q: 'placeholder-value',
     *     // A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     *     spaces: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Deprecated: Use `driveId` instead.
     *     teamDriveId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "files": [],
     *   //   "incompleteSearch": false,
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
      params: Params$Resource$Files$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Files$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FileList>>;
    list(
      params: Params$Resource$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(
      params: Params$Resource$Files$List,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$FileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Files$List
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FileList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FileList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FileList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FileList>(parameters);
      }
    }

    /**
     * Lists the labels on a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.listLabels({
     *     // The ID for the file.
     *     fileId: 'placeholder-value',
     *     // The maximum number of labels to return per page. When not set, defaults to 100.
     *     maxResults: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "labels": [],
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
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listLabels(
      params?: Params$Resource$Files$Listlabels,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LabelList>>;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      options: MethodOptions | BodyResponseCallback<Schema$LabelList>,
      callback: BodyResponseCallback<Schema$LabelList>
    ): void;
    listLabels(
      params: Params$Resource$Files$Listlabels,
      callback: BodyResponseCallback<Schema$LabelList>
    ): void;
    listLabels(callback: BodyResponseCallback<Schema$LabelList>): void;
    listLabels(
      paramsOrCallback?:
        | Params$Resource$Files$Listlabels
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LabelList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LabelList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Listlabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Listlabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/listLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LabelList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LabelList>(parameters);
      }
    }

    /**
     * Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.modifyLabels({
     *     // The ID of the file to which the labels belong.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "labelModifications": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "modifiedLabels": []
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
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    modifyLabels(
      params?: Params$Resource$Files$Modifylabels,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ModifyLabelsResponse>>;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModifyLabelsResponse>,
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      params: Params$Resource$Files$Modifylabels,
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      callback: BodyResponseCallback<Schema$ModifyLabelsResponse>
    ): void;
    modifyLabels(
      paramsOrCallback?:
        | Params$Resource$Files$Modifylabels
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModifyLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ModifyLabelsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Modifylabels;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Modifylabels;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/modifyLabels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ModifyLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModifyLabelsResponse>(parameters);
      }
    }

    /**
     *  Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an x/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`x/x` Note: Specify a valid MIME type, rather than the literal `x/x` value. The literal `x/x` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.scripts',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.update({
     *     // A comma-separated list of parent IDs to add.
     *     addParents: 'placeholder-value',
     *     // Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     *     keepRevisionForever: 'placeholder-value',
     *     // A language hint for OCR processing during image import (ISO 639-1 code).
     *     ocrLanguage: 'placeholder-value',
     *     // A comma-separated list of parent IDs to remove.
     *     removeParents: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether to use the uploaded content as indexable text.
     *     useContentAsIndexableText: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appProperties": {},
     *       //   "capabilities": {},
     *       //   "contentHints": {},
     *       //   "contentRestrictions": [],
     *       //   "copyRequiresWriterPermission": false,
     *       //   "createdTime": "my_createdTime",
     *       //   "description": "my_description",
     *       //   "downloadRestrictions": {},
     *       //   "driveId": "my_driveId",
     *       //   "explicitlyTrashed": false,
     *       //   "exportLinks": {},
     *       //   "fileExtension": "my_fileExtension",
     *       //   "folderColorRgb": "my_folderColorRgb",
     *       //   "fullFileExtension": "my_fullFileExtension",
     *       //   "hasAugmentedPermissions": false,
     *       //   "hasThumbnail": false,
     *       //   "headRevisionId": "my_headRevisionId",
     *       //   "iconLink": "my_iconLink",
     *       //   "id": "my_id",
     *       //   "imageMediaMetadata": {},
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "isAppAuthorized": false,
     *       //   "kind": "my_kind",
     *       //   "labelInfo": {},
     *       //   "lastModifyingUser": {},
     *       //   "linkShareMetadata": {},
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedByMe": false,
     *       //   "modifiedByMeTime": "my_modifiedByMeTime",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "name": "my_name",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "ownedByMe": false,
     *       //   "owners": [],
     *       //   "parents": [],
     *       //   "permissionIds": [],
     *       //   "permissions": [],
     *       //   "properties": {},
     *       //   "quotaBytesUsed": "my_quotaBytesUsed",
     *       //   "resourceKey": "my_resourceKey",
     *       //   "sha1Checksum": "my_sha1Checksum",
     *       //   "sha256Checksum": "my_sha256Checksum",
     *       //   "shared": false,
     *       //   "sharedWithMeTime": "my_sharedWithMeTime",
     *       //   "sharingUser": {},
     *       //   "shortcutDetails": {},
     *       //   "size": "my_size",
     *       //   "spaces": [],
     *       //   "starred": false,
     *       //   "teamDriveId": "my_teamDriveId",
     *       //   "thumbnailLink": "my_thumbnailLink",
     *       //   "thumbnailVersion": "my_thumbnailVersion",
     *       //   "trashed": false,
     *       //   "trashedTime": "my_trashedTime",
     *       //   "trashingUser": {},
     *       //   "version": "my_version",
     *       //   "videoMediaMetadata": {},
     *       //   "viewedByMe": false,
     *       //   "viewedByMeTime": "my_viewedByMeTime",
     *       //   "viewersCanCopyContent": false,
     *       //   "webContentLink": "my_webContentLink",
     *       //   "webViewLink": "my_webViewLink",
     *       //   "writersCanShare": false
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appProperties": {},
     *   //   "capabilities": {},
     *   //   "contentHints": {},
     *   //   "contentRestrictions": [],
     *   //   "copyRequiresWriterPermission": false,
     *   //   "createdTime": "my_createdTime",
     *   //   "description": "my_description",
     *   //   "downloadRestrictions": {},
     *   //   "driveId": "my_driveId",
     *   //   "explicitlyTrashed": false,
     *   //   "exportLinks": {},
     *   //   "fileExtension": "my_fileExtension",
     *   //   "folderColorRgb": "my_folderColorRgb",
     *   //   "fullFileExtension": "my_fullFileExtension",
     *   //   "hasAugmentedPermissions": false,
     *   //   "hasThumbnail": false,
     *   //   "headRevisionId": "my_headRevisionId",
     *   //   "iconLink": "my_iconLink",
     *   //   "id": "my_id",
     *   //   "imageMediaMetadata": {},
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "isAppAuthorized": false,
     *   //   "kind": "my_kind",
     *   //   "labelInfo": {},
     *   //   "lastModifyingUser": {},
     *   //   "linkShareMetadata": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedByMe": false,
     *   //   "modifiedByMeTime": "my_modifiedByMeTime",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "name": "my_name",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "ownedByMe": false,
     *   //   "owners": [],
     *   //   "parents": [],
     *   //   "permissionIds": [],
     *   //   "permissions": [],
     *   //   "properties": {},
     *   //   "quotaBytesUsed": "my_quotaBytesUsed",
     *   //   "resourceKey": "my_resourceKey",
     *   //   "sha1Checksum": "my_sha1Checksum",
     *   //   "sha256Checksum": "my_sha256Checksum",
     *   //   "shared": false,
     *   //   "sharedWithMeTime": "my_sharedWithMeTime",
     *   //   "sharingUser": {},
     *   //   "shortcutDetails": {},
     *   //   "size": "my_size",
     *   //   "spaces": [],
     *   //   "starred": false,
     *   //   "teamDriveId": "my_teamDriveId",
     *   //   "thumbnailLink": "my_thumbnailLink",
     *   //   "thumbnailVersion": "my_thumbnailVersion",
     *   //   "trashed": false,
     *   //   "trashedTime": "my_trashedTime",
     *   //   "trashingUser": {},
     *   //   "version": "my_version",
     *   //   "videoMediaMetadata": {},
     *   //   "viewedByMe": false,
     *   //   "viewedByMeTime": "my_viewedByMeTime",
     *   //   "viewersCanCopyContent": false,
     *   //   "webContentLink": "my_webContentLink",
     *   //   "webViewLink": "my_webViewLink",
     *   //   "writersCanShare": false
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
    update(
      params: Params$Resource$Files$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Files$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$File>>;
    update(
      params: Params$Resource$Files$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Files$Update,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(
      params: Params$Resource$Files$Update,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    update(callback: BodyResponseCallback<Schema$File>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Files$Update
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$File>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$File>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/drive/v3/files/{fileId}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * Subscribes to changes to a file.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.files.watch({
     *     // Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     *     acknowledgeAbuse: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     *     includeLabels: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
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
      params: Params$Resource$Files$Watch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    watch(
      params?: Params$Resource$Files$Watch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    watch(
      params: Params$Resource$Files$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Files$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(
      params: Params$Resource$Files$Watch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    watch(callback: BodyResponseCallback<Schema$Channel>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Files$Watch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
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

  export interface Params$Resource$Files$Copy extends StandardParameters {
    /**
     * Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     */
    ignoreDefaultVisibility?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;
  }
  export interface Params$Resource$Files$Create extends StandardParameters {
    /**
     * Deprecated. Creating files in multiple folders is no longer supported.
     */
    enforceSingleParent?: boolean;
    /**
     * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     */
    ignoreDefaultVisibility?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to use the uploaded content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Files$Delete extends StandardParameters {
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$Download extends StandardParameters {
    /**
     * Required. The ID of the file to download.
     */
    fileId?: string;
    /**
     * Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. See [Export MIME types for Google Workspace documents](/drive/api/guides/ref-export-formats) for the list of supported MIME types. If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future.
     */
    mimeType?: string;
    /**
     * Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Files$Emptytrash extends StandardParameters {
    /**
     * If set, empties the trash of the provided shared drive.
     */
    driveId?: string;
    /**
     * Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     */
    enforceSingleParent?: boolean;
  }
  export interface Params$Resource$Files$Export extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Required. The MIME type of the format requested for this export.
     */
    mimeType?: string;
  }
  export interface Params$Resource$Files$Generateids
    extends StandardParameters {
    /**
     * The number of IDs to return.
     */
    count?: number;
    /**
     * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')
     */
    space?: string;
    /**
     * The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files')
     */
    type?: string;
  }
  export interface Params$Resource$Files$Get extends StandardParameters {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
  }
  export interface Params$Resource$Files$List extends StandardParameters {
    /**
     * Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.
     */
    corpora?: string;
    /**
     * Deprecated: The source of files to list. Use 'corpora' instead.
     */
    corpus?: string;
    /**
     * ID of the shared drive to search.
     */
    driveId?: string;
    /**
     * Whether both My Drive and shared drive items should be included in results.
     */
    includeItemsFromAllDrives?: boolean;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Deprecated: Use `includeItemsFromAllDrives` instead.
     */
    includeTeamDriveItems?: boolean;
    /**
     * A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`.
     */
    orderBy?: string;
    /**
     * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.
     */
    q?: string;
    /**
     * A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     */
    spaces?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Deprecated: Use `driveId` instead.
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Files$Listlabels extends StandardParameters {
    /**
     * The ID for the file.
     */
    fileId?: string;
    /**
     * The maximum number of labels to return per page. When not set, defaults to 100.
     */
    maxResults?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Files$Modifylabels
    extends StandardParameters {
    /**
     * The ID of the file to which the labels belong.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyLabelsRequest;
  }
  export interface Params$Resource$Files$Update extends StandardParameters {
    /**
     * A comma-separated list of parent IDs to add.
     */
    addParents?: string;
    /**
     * Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     */
    keepRevisionForever?: boolean;
    /**
     * A language hint for OCR processing during image import (ISO 639-1 code).
     */
    ocrLanguage?: string;
    /**
     * A comma-separated list of parent IDs to remove.
     */
    removeParents?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to use the uploaded content as indexable text.
     */
    useContentAsIndexableText?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$File;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Files$Watch extends StandardParameters {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     */
    includeLabels?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.operations.get({
     *     // The name of the operation resource.
     *     name: 'placeholder-value',
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/operations/{name}').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.create({
     *     // A plain text custom message to include in the notification email.
     *     emailMessage: 'placeholder-value',
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // Deprecated: See `moveToNewOwnersRoot` for details.
     *     enforceSingleParent: 'placeholder-value',
     *     // The ID of the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     *     moveToNewOwnersRoot: 'placeholder-value',
     *     // Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     *     sendNotificationEmail: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     *     transferOwnership: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowFileDiscovery": false,
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "domain": "my_domain",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "expirationTime": "my_expirationTime",
     *       //   "id": "my_id",
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "kind": "my_kind",
     *       //   "pendingOwner": false,
     *       //   "permissionDetails": [],
     *       //   "photoLink": "my_photoLink",
     *       //   "role": "my_role",
     *       //   "teamDrivePermissionDetails": [],
     *       //   "type": "my_type",
     *       //   "view": "my_view"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowFileDiscovery": false,
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "view": "my_view"
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
      params: Params$Resource$Permissions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Permissions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    create(
      params: Params$Resource$Permissions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Permissions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    create(
      params: Params$Resource$Permissions$Create,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    create(callback: BodyResponseCallback<Schema$Permission>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Permissions$Create
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.delete({
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // The ID of the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID of the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
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
    delete(
      params: Params$Resource$Permissions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Permissions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Permissions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Permissions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Permissions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Permissions$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
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

    /**
     * Gets a permission by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.get({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowFileDiscovery": false,
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "view": "my_view"
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
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Permissions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    get(
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    get(callback: BodyResponseCallback<Schema$Permission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Permissions$Get
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }

    /**
     * Lists a file's or shared drive's permissions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.list({
     *     // The ID of the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     *     includePermissionsForView: 'placeholder-value',
     *     // The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "permissions": []
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
      params: Params$Resource$Permissions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Permissions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PermissionList>>;
    list(
      params: Params$Resource$Permissions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Permissions$List,
      options: MethodOptions | BodyResponseCallback<Schema$PermissionList>,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(
      params: Params$Resource$Permissions$List,
      callback: BodyResponseCallback<Schema$PermissionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$PermissionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Permissions$List
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PermissionList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PermissionList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PermissionList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PermissionList>(parameters);
      }
    }

    /**
     * Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.permissions.update({
     *     // Whether the request should enforce expansive access rules.
     *     enforceExpansiveAccess: 'placeholder-value',
     *     // The ID of the file or shared drive.
     *     fileId: 'placeholder-value',
     *     // The ID of the permission.
     *     permissionId: 'placeholder-value',
     *     // Whether to remove the expiration date.
     *     removeExpiration: 'placeholder-value',
     *     // Whether the requesting application supports both My Drives and shared drives.
     *     supportsAllDrives: 'placeholder-value',
     *     // Deprecated: Use `supportsAllDrives` instead.
     *     supportsTeamDrives: 'placeholder-value',
     *     // Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     *     transferOwnership: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowFileDiscovery": false,
     *       //   "deleted": false,
     *       //   "displayName": "my_displayName",
     *       //   "domain": "my_domain",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "expirationTime": "my_expirationTime",
     *       //   "id": "my_id",
     *       //   "inheritedPermissionsDisabled": false,
     *       //   "kind": "my_kind",
     *       //   "pendingOwner": false,
     *       //   "permissionDetails": [],
     *       //   "photoLink": "my_photoLink",
     *       //   "role": "my_role",
     *       //   "teamDrivePermissionDetails": [],
     *       //   "type": "my_type",
     *       //   "view": "my_view"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowFileDiscovery": false,
     *   //   "deleted": false,
     *   //   "displayName": "my_displayName",
     *   //   "domain": "my_domain",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "expirationTime": "my_expirationTime",
     *   //   "id": "my_id",
     *   //   "inheritedPermissionsDisabled": false,
     *   //   "kind": "my_kind",
     *   //   "pendingOwner": false,
     *   //   "permissionDetails": [],
     *   //   "photoLink": "my_photoLink",
     *   //   "role": "my_role",
     *   //   "teamDrivePermissionDetails": [],
     *   //   "type": "my_type",
     *   //   "view": "my_view"
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
    update(
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Permissions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Permission>>;
    update(
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Permission>,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      callback: BodyResponseCallback<Schema$Permission>
    ): void;
    update(callback: BodyResponseCallback<Schema$Permission>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Permissions$Update
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Permission>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/permissions/{permissionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'permissionId'],
        pathParams: ['fileId', 'permissionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permission>(parameters);
      }
    }
  }

  export interface Params$Resource$Permissions$Create
    extends StandardParameters {
    /**
     * A plain text custom message to include in the notification email.
     */
    emailMessage?: string;
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * Deprecated: See `moveToNewOwnersRoot` for details.
     */
    enforceSingleParent?: boolean;
    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     */
    moveToNewOwnersRoot?: boolean;
    /**
     * Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     */
    sendNotificationEmail?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }
  export interface Params$Resource$Permissions$Delete
    extends StandardParameters {
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Get extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$List extends StandardParameters {
    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     */
    includePermissionsForView?: string;
    /**
     * The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Permissions$Update
    extends StandardParameters {
    /**
     * Whether the request should enforce expansive access rules.
     */
    enforceExpansiveAccess?: boolean;
    /**
     * The ID of the file or shared drive.
     */
    fileId?: string;
    /**
     * The ID of the permission.
     */
    permissionId?: string;
    /**
     * Whether to remove the expiration date.
     */
    removeExpiration?: boolean;
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     */
    supportsAllDrives?: boolean;
    /**
     * Deprecated: Use `supportsAllDrives` instead.
     */
    supportsTeamDrives?: boolean;
    /**
     * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     */
    transferOwnership?: boolean;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permission;
  }

  export class Resource$Replies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a reply to a comment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.create({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdTime": "my_createdTime",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "modifiedTime": "my_modifiedTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime"
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
      params: Params$Resource$Replies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Replies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reply>>;
    create(
      params: Params$Resource$Replies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Replies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    create(
      params: Params$Resource$Replies$Create,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    create(callback: BodyResponseCallback<Schema$Reply>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Replies$Create
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }

    /**
     * Deletes a reply.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.delete({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Replies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Replies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Replies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Replies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Replies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Replies$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
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

    /**
     * Gets a reply by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.get({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether to return deleted replies. Deleted replies will not include their original content.
     *     includeDeleted: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime"
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
      params: Params$Resource$Replies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Replies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reply>>;
    get(
      params: Params$Resource$Replies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Replies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    get(
      params: Params$Resource$Replies$Get,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reply>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Replies$Get
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }

    /**
     * Lists a comment's replies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.list({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // Whether to include deleted replies. Deleted replies will not include their original content.
     *     includeDeleted: 'placeholder-value',
     *     // The maximum number of replies to return per page.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "replies": []
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
      params: Params$Resource$Replies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Replies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReplyList>>;
    list(
      params: Params$Resource$Replies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Replies$List,
      options: MethodOptions | BodyResponseCallback<Schema$ReplyList>,
      callback: BodyResponseCallback<Schema$ReplyList>
    ): void;
    list(
      params: Params$Resource$Replies$List,
      callback: BodyResponseCallback<Schema$ReplyList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReplyList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Replies$List
        | BodyResponseCallback<Schema$ReplyList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReplyList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReplyList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReplyList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/comments/{commentId}/replies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId'],
        pathParams: ['commentId', 'fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReplyList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReplyList>(parameters);
      }
    }

    /**
     * Updates a reply with patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.replies.update({
     *     // The ID of the comment.
     *     commentId: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the reply.
     *     replyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "author": {},
     *       //   "content": "my_content",
     *       //   "createdTime": "my_createdTime",
     *       //   "deleted": false,
     *       //   "htmlContent": "my_htmlContent",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "modifiedTime": "my_modifiedTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "author": {},
     *   //   "content": "my_content",
     *   //   "createdTime": "my_createdTime",
     *   //   "deleted": false,
     *   //   "htmlContent": "my_htmlContent",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "modifiedTime": "my_modifiedTime"
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
    update(
      params: Params$Resource$Replies$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Replies$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Reply>>;
    update(
      params: Params$Resource$Replies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Replies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Reply>,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    update(
      params: Params$Resource$Replies$Update,
      callback: BodyResponseCallback<Schema$Reply>
    ): void;
    update(callback: BodyResponseCallback<Schema$Reply>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Replies$Update
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reply>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Reply>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'commentId', 'replyId'],
        pathParams: ['commentId', 'fileId', 'replyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reply>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reply>(parameters);
      }
    }
  }

  export interface Params$Resource$Replies$Create extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reply;
  }
  export interface Params$Resource$Replies$Delete extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$Get extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to return deleted replies. Deleted replies will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The ID of the reply.
     */
    replyId?: string;
  }
  export interface Params$Resource$Replies$List extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * Whether to include deleted replies. Deleted replies will not include their original content.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of replies to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Replies$Update extends StandardParameters {
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the reply.
     */
    replyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reply;
  }

  export class Resource$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.delete({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the revision.
     *     revisionId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Revisions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Revisions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Revisions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Revisions$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
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

    /**
     * Gets a revision's metadata or content by ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.get({
     *     // Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     *     acknowledgeAbuse: 'placeholder-value',
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the revision.
     *     revisionId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exportLinks": {},
     *   //   "id": "my_id",
     *   //   "keepForever": false,
     *   //   "kind": "my_kind",
     *   //   "lastModifyingUser": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "publishAuto": false,
     *   //   "published": false,
     *   //   "publishedLink": "my_publishedLink",
     *   //   "publishedOutsideDomain": false,
     *   //   "size": "my_size"
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
      params: Params$Resource$Revisions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Revisions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Revision>>;
    get(
      params: Params$Resource$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * Lists a file's revisions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.meet.readonly',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.photos.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.list({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The maximum number of revisions to return per page.
     *     pageSize: 'placeholder-value',
     *     // The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "revisions": []
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
      params: Params$Resource$Revisions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Revisions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RevisionList>>;
    list(
      params: Params$Resource$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Revisions$List,
      options: MethodOptions | BodyResponseCallback<Schema$RevisionList>,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(
      params: Params$Resource$Revisions$List,
      callback: BodyResponseCallback<Schema$RevisionList>
    ): void;
    list(callback: BodyResponseCallback<Schema$RevisionList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Revisions$List
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RevisionList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RevisionList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/files/{fileId}/revisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId'],
        pathParams: ['fileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RevisionList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RevisionList>(parameters);
      }
    }

    /**
     * Updates a revision with patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.appdata',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.revisions.update({
     *     // The ID of the file.
     *     fileId: 'placeholder-value',
     *     // The ID of the revision.
     *     revisionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "exportLinks": {},
     *       //   "id": "my_id",
     *       //   "keepForever": false,
     *       //   "kind": "my_kind",
     *       //   "lastModifyingUser": {},
     *       //   "md5Checksum": "my_md5Checksum",
     *       //   "mimeType": "my_mimeType",
     *       //   "modifiedTime": "my_modifiedTime",
     *       //   "originalFilename": "my_originalFilename",
     *       //   "publishAuto": false,
     *       //   "published": false,
     *       //   "publishedLink": "my_publishedLink",
     *       //   "publishedOutsideDomain": false,
     *       //   "size": "my_size"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exportLinks": {},
     *   //   "id": "my_id",
     *   //   "keepForever": false,
     *   //   "kind": "my_kind",
     *   //   "lastModifyingUser": {},
     *   //   "md5Checksum": "my_md5Checksum",
     *   //   "mimeType": "my_mimeType",
     *   //   "modifiedTime": "my_modifiedTime",
     *   //   "originalFilename": "my_originalFilename",
     *   //   "publishAuto": false,
     *   //   "published": false,
     *   //   "publishedLink": "my_publishedLink",
     *   //   "publishedOutsideDomain": false,
     *   //   "size": "my_size"
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
    update(
      params: Params$Resource$Revisions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Revisions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Revision>>;
    update(
      params: Params$Resource$Revisions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Revisions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(
      params: Params$Resource$Revisions$Update,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    update(callback: BodyResponseCallback<Schema$Revision>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Revisions$Update
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Revision>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Revisions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Revisions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/drive/v3/files/{fileId}/revisions/{revisionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['fileId', 'revisionId'],
        pathParams: ['fileId', 'revisionId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }
  }

  export interface Params$Resource$Revisions$Delete extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$Get extends StandardParameters {
    /**
     * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     */
    acknowledgeAbuse?: boolean;
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;
  }
  export interface Params$Resource$Revisions$List extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The maximum number of revisions to return per page.
     */
    pageSize?: number;
    /**
     * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Revisions$Update extends StandardParameters {
    /**
     * The ID of the file.
     */
    fileId?: string;
    /**
     * The ID of the revision.
     */
    revisionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Revision;
  }

  export class Resource$Teamdrives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deprecated: Use `drives.create` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.create({
     *     // Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdTime": "my_createdTime",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Teamdrives$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Teamdrives$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    create(
      params: Params$Resource$Teamdrives$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Teamdrives$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    create(
      params: Params$Resource$Teamdrives$Create,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    create(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Create
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/teamdrives').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['requestId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.delete` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.delete({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Teamdrives$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Teamdrives$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
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

    /**
     * Deprecated: Use `drives.get` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.get({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
      params: Params$Resource$Teamdrives$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Teamdrives$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    get(
      params: Params$Resource$Teamdrives$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Teamdrives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(
      params: Params$Resource$Teamdrives$Get,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    get(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Get
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.list` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.list({
     *     // Maximum number of Team Drives to return.
     *     pageSize: 'placeholder-value',
     *     // Page token for Team Drives.
     *     pageToken: 'placeholder-value',
     *     // Query string for searching Team Drives.
     *     q: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     *     useDomainAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "teamDrives": []
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
      params: Params$Resource$Teamdrives$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Teamdrives$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDriveList>>;
    list(
      params: Params$Resource$Teamdrives$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Teamdrives$List,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDriveList>,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(
      params: Params$Resource$Teamdrives$List,
      callback: BodyResponseCallback<Schema$TeamDriveList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TeamDriveList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$List
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDriveList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDriveList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Teamdrives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/teamdrives').replace(
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
        createAPIRequest<Schema$TeamDriveList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDriveList>(parameters);
      }
    }

    /**
     * Deprecated: Use `drives.update` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drive.googleapis.com
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
     * const drive = google.drive('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/drive'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drive.teamdrives.update({
     *     // The ID of the Team Drive
     *     teamDriveId: 'placeholder-value',
     *     // Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     *     useDomainAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backgroundImageFile": {},
     *       //   "backgroundImageLink": "my_backgroundImageLink",
     *       //   "capabilities": {},
     *       //   "colorRgb": "my_colorRgb",
     *       //   "createdTime": "my_createdTime",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "orgUnitId": "my_orgUnitId",
     *       //   "restrictions": {},
     *       //   "themeId": "my_themeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backgroundImageFile": {},
     *   //   "backgroundImageLink": "my_backgroundImageLink",
     *   //   "capabilities": {},
     *   //   "colorRgb": "my_colorRgb",
     *   //   "createdTime": "my_createdTime",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "orgUnitId": "my_orgUnitId",
     *   //   "restrictions": {},
     *   //   "themeId": "my_themeId"
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
    update(
      params: Params$Resource$Teamdrives$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Teamdrives$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>;
    update(
      params: Params$Resource$Teamdrives$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Teamdrives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(
      params: Params$Resource$Teamdrives$Update,
      callback: BodyResponseCallback<Schema$TeamDrive>
    ): void;
    update(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Teamdrives$Update
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TeamDrive>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TeamDrive>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Teamdrives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Teamdrives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/drive/v3/teamdrives/{teamDriveId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['teamDriveId'],
        pathParams: ['teamDriveId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TeamDrive>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TeamDrive>(parameters);
      }
    }
  }

  export interface Params$Resource$Teamdrives$Create
    extends StandardParameters {
    /**
     * Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
  export interface Params$Resource$Teamdrives$Delete
    extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
  }
  export interface Params$Resource$Teamdrives$Get extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$List extends StandardParameters {
    /**
     * Maximum number of Team Drives to return.
     */
    pageSize?: number;
    /**
     * Page token for Team Drives.
     */
    pageToken?: string;
    /**
     * Query string for searching Team Drives.
     */
    q?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     */
    useDomainAdminAccess?: boolean;
  }
  export interface Params$Resource$Teamdrives$Update
    extends StandardParameters {
    /**
     * The ID of the Team Drive
     */
    teamDriveId?: string;
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     */
    useDomainAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TeamDrive;
  }
}
