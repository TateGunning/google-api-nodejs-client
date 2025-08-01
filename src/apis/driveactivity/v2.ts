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

export namespace driveactivity_v2 {
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
   * Drive Activity API
   *
   * Provides a historical view of activity in Google Drive.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const driveactivity = google.driveactivity('v2');
   * ```
   */
  export class Driveactivity {
    context: APIRequestContext;
    activity: Resource$Activity;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activity = new Resource$Activity(this.context);
    }
  }

  /**
   * Information about the action.
   */
  export interface Schema$Action {
    /**
     * The actor responsible for this action (or empty if all actors are responsible).
     */
    actor?: Schema$Actor;
    /**
     * The type and detailed information about the action.
     */
    detail?: Schema$ActionDetail;
    /**
     * The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred.
     */
    target?: Schema$Target;
    /**
     * The action occurred over this time range.
     */
    timeRange?: Schema$TimeRange;
    /**
     * The action occurred at this specific time.
     */
    timestamp?: string | null;
  }
  /**
   * Data describing the type and additional information of an action.
   */
  export interface Schema$ActionDetail {
    /**
     * Label was changed.
     */
    appliedLabelChange?: Schema$AppliedLabelChange;
    /**
     * A change about comments was made.
     */
    comment?: Schema$Comment;
    /**
     * An object was created.
     */
    create?: Schema$Create;
    /**
     * An object was deleted.
     */
    delete?: Schema$Delete;
    /**
     * A change happened in data leak prevention status.
     */
    dlpChange?: Schema$DataLeakPreventionChange;
    /**
     * An object was edited.
     */
    edit?: Schema$Edit;
    /**
     * An object was moved.
     */
    move?: Schema$Move;
    /**
     * The permission on an object was changed.
     */
    permissionChange?: Schema$PermissionChange;
    /**
     * An object was referenced in an application outside of Drive/Docs.
     */
    reference?: Schema$ApplicationReference;
    /**
     * An object was renamed.
     */
    rename?: Schema$Rename;
    /**
     * A deleted object was restored.
     */
    restore?: Schema$Restore;
    /**
     * Settings were changed.
     */
    settingsChange?: Schema$SettingsChange;
  }
  /**
   * The actor of a Drive activity.
   */
  export interface Schema$Actor {
    /**
     * An administrator.
     */
    administrator?: Schema$Administrator;
    /**
     * An anonymous user.
     */
    anonymous?: Schema$AnonymousUser;
    /**
     * An account acting on behalf of another.
     */
    impersonation?: Schema$Impersonation;
    /**
     * A non-user actor (i.e. system triggered).
     */
    system?: Schema$SystemEvent;
    /**
     * An end user.
     */
    user?: Schema$User;
  }
  /**
   * Empty message representing an administrator.
   */
  export interface Schema$Administrator {}
  /**
   * Empty message representing an anonymous user or indicating the authenticated user should be anonymized.
   */
  export interface Schema$AnonymousUser {}
  /**
   * Represents any user (including a logged out user).
   */
  export interface Schema$Anyone {}
  /**
   * Activity in applications other than Drive.
   */
  export interface Schema$ApplicationReference {
    /**
     * The reference type corresponding to this event.
     */
    type?: string | null;
  }
  /**
   * Label changes that were made on the Target.
   */
  export interface Schema$AppliedLabelChange {
    /**
     * Changes that were made to the Label on the Target.
     */
    changes?: Schema$AppliedLabelChangeDetail[];
  }
  /**
   * A change made to a Label on the Target.
   */
  export interface Schema$AppliedLabelChangeDetail {
    /**
     * Field Changes. Only present if `types` contains `LABEL_FIELD_VALUE_CHANGED`.
     */
    fieldChanges?: Schema$FieldValueChange[];
    /**
     * The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is `labels/id@revision`.
     */
    label?: string | null;
    /**
     * The human-readable title of the label that changed.
     */
    title?: string | null;
    /**
     * The types of changes made to the Label on the Target.
     */
    types?: string[] | null;
  }
  /**
   * A comment with an assignment.
   */
  export interface Schema$Assignment {
    /**
     * The user to whom the comment was assigned.
     */
    assignedUser?: Schema$User;
    /**
     * The sub-type of this event.
     */
    subtype?: string | null;
  }
  /**
   * A change about comments on an object.
   */
  export interface Schema$Comment {
    /**
     * A change on an assignment.
     */
    assignment?: Schema$Assignment;
    /**
     * Users who are mentioned in this comment.
     */
    mentionedUsers?: Schema$User[];
    /**
     * A change on a regular posted comment.
     */
    post?: Schema$Post;
    /**
     * A change on a suggestion.
     */
    suggestion?: Schema$Suggestion;
  }
  /**
   * How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
   */
  export interface Schema$ConsolidationStrategy {
    /**
     * The individual activities are consolidated using the legacy strategy.
     */
    legacy?: Schema$Legacy;
    /**
     * The individual activities are not consolidated.
     */
    none?: Schema$NoConsolidation;
  }
  /**
   * An object was created by copying an existing object.
   */
  export interface Schema$Copy {
    /**
     * The original object.
     */
    originalObject?: Schema$TargetReference;
  }
  /**
   * An object was created.
   */
  export interface Schema$Create {
    /**
     * If present, indicates the object was created by copying an existing Drive object.
     */
    copy?: Schema$Copy;
    /**
     * If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object.
     */
    new?: Schema$New;
    /**
     * If present, indicates the object originated externally and was uploaded to Drive.
     */
    upload?: Schema$Upload;
  }
  /**
   * A change in the object's data leak prevention status.
   */
  export interface Schema$DataLeakPreventionChange {
    /**
     * The type of Data Leak Prevention (DLP) change.
     */
    type?: string | null;
  }
  /**
   * Wrapper for Date Field value.
   */
  export interface Schema$Date {
    /**
     * Date value.
     */
    value?: string | null;
  }
  /**
   * An object was deleted.
   */
  export interface Schema$Delete {
    /**
     * The type of delete action taken.
     */
    type?: string | null;
  }
  /**
   * A user whose account has since been deleted.
   */
  export interface Schema$DeletedUser {}
  /**
   * Information about a domain.
   */
  export interface Schema$Domain {
    /**
     * An opaque string used to identify this domain.
     */
    legacyId?: string | null;
    /**
     * The name of the domain, e.g. `google.com`.
     */
    name?: string | null;
  }
  /**
   * Information about a shared drive.
   */
  export interface Schema$Drive {
    /**
     * The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.
     */
    name?: string | null;
    /**
     * The root of this shared drive.
     */
    root?: Schema$DriveItem;
    /**
     * The title of the shared drive.
     */
    title?: string | null;
  }
  /**
   * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
   */
  export interface Schema$DriveActivity {
    /**
     * Details on all actions in this activity.
     */
    actions?: Schema$Action[];
    /**
     * All actor(s) responsible for the activity.
     */
    actors?: Schema$Actor[];
    /**
     * Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request.
     */
    primaryActionDetail?: Schema$ActionDetail;
    /**
     * All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.
     */
    targets?: Schema$Target[];
    /**
     * The activity occurred over this time range.
     */
    timeRange?: Schema$TimeRange;
    /**
     * The activity occurred at this specific time.
     */
    timestamp?: string | null;
  }
  /**
   * A Drive item which is a file.
   */
  export interface Schema$DriveFile {}
  /**
   * A Drive item which is a folder.
   */
  export interface Schema$DriveFolder {
    /**
     * The type of Drive folder.
     */
    type?: string | null;
  }
  /**
   * A Drive item, such as a file or folder.
   */
  export interface Schema$DriveItem {
    /**
     * The Drive item is a file.
     */
    driveFile?: Schema$DriveFile;
    /**
     * The Drive item is a folder. Includes information about the type of folder.
     */
    driveFolder?: Schema$DriveFolder;
    /**
     * This field is deprecated; please use the `driveFile` field instead.
     */
    file?: Schema$File;
    /**
     * This field is deprecated; please use the `driveFolder` field instead.
     */
    folder?: Schema$Folder;
    /**
     * The MIME type of the Drive item. See https://developers.google.com/workspace/drive/v3/web/mime-types.
     */
    mimeType?: string | null;
    /**
     * The target Drive item. The format is `items/ITEM_ID`.
     */
    name?: string | null;
    /**
     * Information about the owner of this Drive item.
     */
    owner?: Schema$Owner;
    /**
     * The title of the Drive item.
     */
    title?: string | null;
  }
  /**
   * A lightweight reference to a Drive item, such as a file or folder.
   */
  export interface Schema$DriveItemReference {
    /**
     * The Drive item is a file.
     */
    driveFile?: Schema$DriveFile;
    /**
     * The Drive item is a folder. Includes information about the type of folder.
     */
    driveFolder?: Schema$DriveFolder;
    /**
     * This field is deprecated; please use the `driveFile` field instead.
     */
    file?: Schema$File;
    /**
     * This field is deprecated; please use the `driveFolder` field instead.
     */
    folder?: Schema$Folder;
    /**
     * The target Drive item. The format is `items/ITEM_ID`.
     */
    name?: string | null;
    /**
     * The title of the Drive item.
     */
    title?: string | null;
  }
  /**
   * A lightweight reference to a shared drive.
   */
  export interface Schema$DriveReference {
    /**
     * The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.
     */
    name?: string | null;
    /**
     * The title of the shared drive.
     */
    title?: string | null;
  }
  /**
   * An empty message indicating an object was edited.
   */
  export interface Schema$Edit {}
  /**
   * Contains a value of a Field.
   */
  export interface Schema$FieldValue {
    /**
     * Date Field value.
     */
    date?: Schema$Date;
    /**
     * Integer Field value.
     */
    integer?: Schema$Integer;
    /**
     * Selection Field value.
     */
    selection?: Schema$Selection;
    /**
     * Selection List Field value.
     */
    selectionList?: Schema$SelectionList;
    /**
     * Text Field value.
     */
    text?: Schema$Text;
    /**
     * Text List Field value.
     */
    textList?: Schema$TextList;
    /**
     * User Field value.
     */
    user?: Schema$SingleUser;
    /**
     * User List Field value.
     */
    userList?: Schema$UserList;
  }
  /**
   * Change to a Field value.
   */
  export interface Schema$FieldValueChange {
    /**
     * The human-readable display name for this field.
     */
    displayName?: string | null;
    /**
     * The ID of this field. Field IDs are unique within a Label.
     */
    fieldId?: string | null;
    /**
     * The value that is now set on the field. If not present, the field was cleared. At least one of {old_value|new_value\} is always set.
     */
    newValue?: Schema$FieldValue;
    /**
     * The value that was previously set on the field. If not present, the field was newly set. At least one of {old_value|new_value\} is always set.
     */
    oldValue?: Schema$FieldValue;
  }
  /**
   * This item is deprecated; please see `DriveFile` instead.
   */
  export interface Schema$File {}
  /**
   * A comment on a file.
   */
  export interface Schema$FileComment {
    /**
     * The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/workspace/drive/v3/reference/comments/get
     */
    legacyCommentId?: string | null;
    /**
     * The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/workspace/drive/v3/reference/comments/get
     */
    legacyDiscussionId?: string | null;
    /**
     * The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`.
     */
    linkToDiscussion?: string | null;
    /**
     * The Drive item containing this comment.
     */
    parent?: Schema$DriveItem;
  }
  /**
   * This item is deprecated; please see `DriveFolder` instead.
   */
  export interface Schema$Folder {
    /**
     * This field is deprecated; please see `DriveFolder.type` instead.
     */
    type?: string | null;
  }
  /**
   * Information about a group.
   */
  export interface Schema$Group {
    /**
     * The email address of the group.
     */
    email?: string | null;
    /**
     * The title of the group.
     */
    title?: string | null;
  }
  /**
   * Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
   */
  export interface Schema$Impersonation {
    /**
     * The impersonated user.
     */
    impersonatedUser?: Schema$User;
  }
  /**
   * Wrapper for Integer Field value.
   */
  export interface Schema$Integer {
    /**
     * Integer value.
     */
    value?: string | null;
  }
  /**
   * A known user.
   */
  export interface Schema$KnownUser {
    /**
     * True if this is the user making the request.
     */
    isCurrentUser?: boolean | null;
    /**
     * The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/.
     */
    personName?: string | null;
  }
  /**
   * A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.
   */
  export interface Schema$Legacy {}
  /**
   * An object was moved.
   */
  export interface Schema$Move {
    /**
     * The added parent object(s).
     */
    addedParents?: Schema$TargetReference[];
    /**
     * The removed parent object(s).
     */
    removedParents?: Schema$TargetReference[];
  }
  /**
   * An object was created from scratch.
   */
  export interface Schema$New {}
  /**
   * A strategy that does no consolidation of individual activities.
   */
  export interface Schema$NoConsolidation {}
  /**
   * Information about the owner of a Drive item.
   */
  export interface Schema$Owner {
    /**
     * The domain of the Drive item owner.
     */
    domain?: Schema$Domain;
    /**
     * The drive that owns the item.
     */
    drive?: Schema$DriveReference;
    /**
     * This field is deprecated; please use the `drive` field instead.
     */
    teamDrive?: Schema$TeamDriveReference;
    /**
     * The user that owns the Drive item.
     */
    user?: Schema$User;
  }
  /**
   * The permission setting of an object.
   */
  export interface Schema$Permission {
    /**
     * If true, the item can be discovered (e.g. in the user's "Shared with me" collection) without needing a link to the item.
     */
    allowDiscovery?: boolean | null;
    /**
     * If set, this permission applies to anyone, even logged out users.
     */
    anyone?: Schema$Anyone;
    /**
     * The domain to whom this permission applies.
     */
    domain?: Schema$Domain;
    /**
     * The group to whom this permission applies.
     */
    group?: Schema$Group;
    /**
     * Indicates the [Google Drive permissions role](https://developers.google.com/workspace/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items.
     */
    role?: string | null;
    /**
     * The user to whom this permission applies.
     */
    user?: Schema$User;
  }
  /**
   * A change of the permission setting on an item.
   */
  export interface Schema$PermissionChange {
    /**
     * The set of permissions added by this change.
     */
    addedPermissions?: Schema$Permission[];
    /**
     * The set of permissions removed by this change.
     */
    removedPermissions?: Schema$Permission[];
  }
  /**
   * A regular posted comment.
   */
  export interface Schema$Post {
    /**
     * The sub-type of this event.
     */
    subtype?: string | null;
  }
  /**
   * The request message for querying Drive activity.
   */
  export interface Schema$QueryDriveActivityRequest {
    /**
     * Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`.
     */
    ancestorName?: string | null;
    /**
     * Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated.
     */
    consolidationStrategy?: Schema$ConsolidationStrategy;
    /**
     * The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time \> 1452409200000 AND time <= 1492812924310` - `time \>= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE`
     */
    filter?: string | null;
    /**
     * Return activities for this Drive item. The format is `items/ITEM_ID`.
     */
    itemName?: string | null;
    /**
     * The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.
     */
    pageSize?: number | null;
    /**
     * The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned.
     */
    pageToken?: string | null;
  }
  /**
   * Response message for querying Drive activity.
   */
  export interface Schema$QueryDriveActivityResponse {
    /**
     * List of activity requested.
     */
    activities?: Schema$DriveActivity[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * An object was renamed.
   */
  export interface Schema$Rename {
    /**
     * The new title of the drive object.
     */
    newTitle?: string | null;
    /**
     * The previous title of the drive object.
     */
    oldTitle?: string | null;
  }
  /**
   * A deleted object was restored.
   */
  export interface Schema$Restore {
    /**
     * The type of restore action taken.
     */
    type?: string | null;
  }
  /**
   * Information about restriction policy changes to a feature.
   */
  export interface Schema$RestrictionChange {
    /**
     * The feature which had a change in restriction policy.
     */
    feature?: string | null;
    /**
     * The restriction in place after the change.
     */
    newRestriction?: string | null;
  }
  /**
   * Wrapper for Selection Field value as combined value/display_name pair for selected choice.
   */
  export interface Schema$Selection {
    /**
     * Selection value as human-readable display string.
     */
    displayName?: string | null;
    /**
     * Selection value as Field Choice ID.
     */
    value?: string | null;
  }
  /**
   * Wrapper for SelectionList Field value.
   */
  export interface Schema$SelectionList {
    /**
     * Selection values.
     */
    values?: Schema$Selection[];
  }
  /**
   * Information about settings changes.
   */
  export interface Schema$SettingsChange {
    /**
     * The set of changes made to restrictions.
     */
    restrictionChanges?: Schema$RestrictionChange[];
  }
  /**
   * Wrapper for User Field value.
   */
  export interface Schema$SingleUser {
    /**
     * User value as email.
     */
    value?: string | null;
  }
  /**
   * A suggestion.
   */
  export interface Schema$Suggestion {
    /**
     * The sub-type of this event.
     */
    subtype?: string | null;
  }
  /**
   * Event triggered by system operations instead of end users.
   */
  export interface Schema$SystemEvent {
    /**
     * The type of the system event that may triggered activity.
     */
    type?: string | null;
  }
  /**
   * Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/workspace/drive/activity/v2#activityhistory).
   */
  export interface Schema$Target {
    /**
     * The target is a shared drive.
     */
    drive?: Schema$Drive;
    /**
     * The target is a Drive item.
     */
    driveItem?: Schema$DriveItem;
    /**
     * The target is a comment on a Drive file.
     */
    fileComment?: Schema$FileComment;
    /**
     * This field is deprecated; please use the `drive` field instead.
     */
    teamDrive?: Schema$TeamDrive;
  }
  /**
   * A lightweight reference to the target of activity.
   */
  export interface Schema$TargetReference {
    /**
     * The target is a shared drive.
     */
    drive?: Schema$DriveReference;
    /**
     * The target is a Drive item.
     */
    driveItem?: Schema$DriveItemReference;
    /**
     * This field is deprecated; please use the `drive` field instead.
     */
    teamDrive?: Schema$TeamDriveReference;
  }
  /**
   * This item is deprecated; please see `Drive` instead.
   */
  export interface Schema$TeamDrive {
    /**
     * This field is deprecated; please see `Drive.name` instead.
     */
    name?: string | null;
    /**
     * This field is deprecated; please see `Drive.root` instead.
     */
    root?: Schema$DriveItem;
    /**
     * This field is deprecated; please see `Drive.title` instead.
     */
    title?: string | null;
  }
  /**
   * This item is deprecated; please see `DriveReference` instead.
   */
  export interface Schema$TeamDriveReference {
    /**
     * This field is deprecated; please see `DriveReference.name` instead.
     */
    name?: string | null;
    /**
     * This field is deprecated; please see `DriveReference.title` instead.
     */
    title?: string | null;
  }
  /**
   * Wrapper for Text Field value.
   */
  export interface Schema$Text {
    /**
     * Value of Text Field.
     */
    value?: string | null;
  }
  /**
   * Wrapper for Text List Field value.
   */
  export interface Schema$TextList {
    /**
     * Text values.
     */
    values?: Schema$Text[];
  }
  /**
   * Information about time ranges.
   */
  export interface Schema$TimeRange {
    /**
     * The end of the time range.
     */
    endTime?: string | null;
    /**
     * The start of the time range.
     */
    startTime?: string | null;
  }
  /**
   * A user about whom nothing is currently known.
   */
  export interface Schema$UnknownUser {}
  /**
   * An object was uploaded into Drive.
   */
  export interface Schema$Upload {}
  /**
   * Information about an end user.
   */
  export interface Schema$User {
    /**
     * A user whose account has since been deleted.
     */
    deletedUser?: Schema$DeletedUser;
    /**
     * A known user.
     */
    knownUser?: Schema$KnownUser;
    /**
     * A user about whom nothing is currently known.
     */
    unknownUser?: Schema$UnknownUser;
  }
  /**
   * Wrapper for UserList Field value.
   */
  export interface Schema$UserList {
    /**
     * User values.
     */
    values?: Schema$SingleUser[];
  }

  export class Resource$Activity {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Query past activity in Google Drive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/driveactivity.googleapis.com
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
     * const driveactivity = google.driveactivity('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.activity',
     *       'https://www.googleapis.com/auth/drive.activity.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await driveactivity.activity.query({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ancestorName": "my_ancestorName",
     *       //   "consolidationStrategy": {},
     *       //   "filter": "my_filter",
     *       //   "itemName": "my_itemName",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activities": [],
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
    query(
      params: Params$Resource$Activity$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Activity$Query,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryDriveActivityResponse>>;
    query(
      params: Params$Resource$Activity$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Activity$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryDriveActivityResponse>,
      callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>
    ): void;
    query(
      params: Params$Resource$Activity$Query,
      callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Activity$Query
        | BodyResponseCallback<Schema$QueryDriveActivityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryDriveActivityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryDriveActivityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryDriveActivityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activity$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activity$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://driveactivity.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/activity:query').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$QueryDriveActivityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryDriveActivityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Activity$Query extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryDriveActivityRequest;
  }
}
