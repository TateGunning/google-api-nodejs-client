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

export namespace videointelligence_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * Cloud Video Intelligence API
   *
   * Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const videointelligence = google.videointelligence('v1beta2');
   * ```
   */
  export class Videointelligence {
    context: APIRequestContext;
    videos: Resource$Videos;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.videos = new Resource$Videos(this.context);
    }
  }

  /**
   * Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[];
  }
  /**
   * Video annotation request.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoRequest {
    /**
     * Required. Requested video annotation features.
     */
    features?: string[] | null;
    /**
     * The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.
     */
    inputContent?: string | null;
    /**
     * Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.
     */
    inputUri?: string | null;
    /**
     * Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.
     */
    locationId?: string | null;
    /**
     * Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
     */
    outputUri?: string | null;
    /**
     * Additional video context and/or feature-specific parameters.
     */
    videoContext?: Schema$GoogleCloudVideointelligenceV1beta2_VideoContext;
  }
  /**
   * Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[];
  }
  /**
   * A generic detected attribute represented by name in string format.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_DetectedAttribute {
    /**
     * Detected attribute confidence. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
     */
    name?: string | null;
    /**
     * Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
     */
    value?: string | null;
  }
  /**
   * A generic detected landmark represented by name in string format and a 2D location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_DetectedLandmark {
    /**
     * The confidence score of the detected landmark. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of this landmark, for example, left_hand, right_shoulder.
     */
    name?: string | null;
    /**
     * The 2D point of the detected landmark using the normalized image coordinate system. The normalized coordinates have the range from 0 to 1.
     */
    point?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedVertex;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_Entity {
    /**
     * Textual description, e.g., `Fixed-gear bicycle`.
     */
    description?: string | null;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string | null;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string | null;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for EXPLICIT_CONTENT_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentDetectionConfig {
    /**
     * Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string | null;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Status of exporting annotation response to user specified `output_uri`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExportToOutputUriStatus {
    /**
     * Output only. State of the `output_uri` export.
     */
    state?: string | null;
    /**
     * Output only. Only set if state is FAILED.
     */
    status?: Schema$GoogleRpc_Status;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_FaceAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_FaceFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_FaceSegment[];
    /**
     * Thumbnail of a representative face view (in JPEG format).
     */
    thumbnail?: string | null;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation {
    /**
     * The thumbnail of a person's face.
     */
    thumbnail?: string | null;
    /**
     * The face tracks with attributes.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1beta2_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for FACE_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_FaceDetectionConfig {
    /**
     * Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false.
     */
    includeAttributes?: boolean | null;
    /**
     * Whether bounding boxes are included in the face annotation output.
     */
    includeBoundingBoxes?: boolean | null;
    /**
     * Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string | null;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_FaceFrame {
    /**
     * Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
     */
    normalizedBoundingBoxes?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation {
    /**
     * Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1beta2_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1beta2_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for LABEL_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelDetectionConfig {
    /**
     * The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.
     */
    frameConfidenceThreshold?: number | null;
    /**
     * What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.
     */
    labelDetectionMode?: string | null;
    /**
     * Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string | null;
    /**
     * Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.
     */
    stationaryCamera?: boolean | null;
    /**
     * The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.
     */
    videoConfidenceThreshold?: number | null;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }
  /**
   * Annotation corresponding to one detected, tracked and recognized logo class.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation {
    /**
     * Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1beta2_Entity;
    /**
     * All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1beta2_Track[];
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number | null;
    /**
     * Left X coordinate.
     */
    left?: number | null;
    /**
     * Right X coordinate.
     */
    right?: number | null;
    /**
     * Top Y coordinate.
     */
    top?: number | null;
  }
  /**
   * Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trigonometric calculations for location of the box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly {
    /**
     * Normalized vertices of the bounding polygon.
     */
    vertices?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Annotations corresponding to one tracked object.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation {
    /**
     * Object category's labeling confidence of this track.
     */
    confidence?: number | null;
    /**
     * Entity to specify the object category that this track is labeled as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1beta2_Entity;
    /**
     * Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame[];
    /**
     * Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
    /**
     * Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
     */
    trackId?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for OBJECT_TRACKING.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingConfig {
    /**
     * Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string | null;
  }
  /**
   * Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame {
    /**
     * The normalized bounding box location of this object track for the frame.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox;
    /**
     * The timestamp of the frame in microseconds.
     */
    timeOffset?: string | null;
  }
  /**
   * Person detection annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation {
    /**
     * The detected tracks of a person.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1beta2_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for PERSON_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_PersonDetectionConfig {
    /**
     * Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false.
     */
    includeAttributes?: boolean | null;
    /**
     * Whether bounding boxes are included in the person detection annotation output.
     */
    includeBoundingBoxes?: boolean | null;
    /**
     * Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false.
     */
    includePoseLandmarks?: boolean | null;
  }
  /**
   * Config for SHOT_CHANGE_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ShotChangeDetectionConfig {
    /**
     * Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset), "builtin/latest", and "builtin/legacy".
     */
    model?: string | null;
  }
  /**
   * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_SpeechContext {
    /**
     * Optional. A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content).
     */
    phrases?: string[] | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string | null;
    /**
     * Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$GoogleCloudVideointelligenceV1beta2_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative[];
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
  }
  /**
   * Config for SPEECH_TRANSCRIPTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_SpeechTranscriptionConfig {
    /**
     * Optional. For file formats, such as MXF or MKV, supporting multiple audio tracks, specify up to two tracks. Default: track 0.
     */
    audioTracks?: number[] | null;
    /**
     * Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true.
     */
    diarizationSpeakerCount?: number | null;
    /**
     * Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: "This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature."
     */
    enableAutomaticPunctuation?: boolean | null;
    /**
     * Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time.
     */
    enableSpeakerDiarization?: boolean | null;
    /**
     * Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`.
     */
    enableWordConfidence?: boolean | null;
    /**
     * Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out.
     */
    filterProfanity?: boolean | null;
    /**
     * Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.
     */
    maxAlternatives?: number | null;
    /**
     * Optional. A means to provide context to assist the speech recognition.
     */
    speechContexts?: Schema$GoogleCloudVideointelligenceV1beta2_SpeechContext[];
  }
  /**
   * Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_TextAnnotation {
    /**
     * All video segments where OCR detected text appears.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_TextSegment[];
    /**
     * The detected text.
     */
    text?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Config for TEXT_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_TextDetectionConfig {
    /**
     * Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.
     */
    languageHints?: string[] | null;
    /**
     * Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string | null;
  }
  /**
   * Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_TextFrame {
    /**
     * Bounding polygon of the detected text for this frame.
     */
    rotatedBoundingBox?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly;
    /**
     * Timestamp of this frame.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for text detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_TextSegment {
    /**
     * Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
     */
    confidence?: number | null;
    /**
     * Information related to the frames where OCR detected text appears.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_TextFrame[];
    /**
     * Video segment where a text snippet was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }
  /**
   * For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_TimestampedObject {
    /**
     * Optional. The attributes of the object in the bounding box.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1beta2_DetectedAttribute[];
    /**
     * Optional. The detected landmarks.
     */
    landmarks?: Schema$GoogleCloudVideointelligenceV1beta2_DetectedLandmark[];
    /**
     * Normalized Bounding box in a frame, where the object is located.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
     */
    timeOffset?: string | null;
  }
  /**
   * A track of an object instance.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_Track {
    /**
     * Optional. Attributes in the track level.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1beta2_DetectedAttribute[];
    /**
     * Optional. The confidence score of the tracked object.
     */
    confidence?: number | null;
    /**
     * Video segment of a track.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
    /**
     * The object with timestamp and attributes per frame in the track.
     */
    timestampedObjects?: Schema$GoogleCloudVideointelligenceV1beta2_TimestampedObject[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {
    /**
     * Status of exporting annotation response to user specified `output_uri`. Only set if `output_uri` is set in the request.
     */
    exportStatus?: Schema$GoogleCloudVideointelligenceV1beta2_ExportToOutputUriStatus;
    /**
     * Specifies which feature is being tracked if the request contains more than one feature.
     */
    feature?: string | null;
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number | null;
    /**
     * Specifies which segment is being tracked if the request contains more than one segment.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Time of the most recent update.
     */
    updateTime?: string | null;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;
    /**
     * Deprecated. Please use `face_detection_annotations` instead.
     */
    faceAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_FaceAnnotation[];
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Annotations for list of logos detected, tracked and recognized in video.
     */
    logoRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation[];
    /**
     * Annotations for list of objects detected and tracked in video.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation[];
    /**
     * Person detection annotations.
     */
    personDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation[];
    /**
     * Video segment on which the annotation is run.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
    /**
     * Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    segmentPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * Topical label annotations on shot level. There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    shotPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?: Schema$GoogleCloudVideointelligenceV1beta2_SpeechTranscription[];
    /**
     * OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
     */
    textAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_TextAnnotation[];
  }
  /**
   * Video context and/or feature-specific parameters.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoContext {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentDetectionConfig;
    /**
     * Config for FACE_DETECTION.
     */
    faceDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_FaceDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_LabelDetectionConfig;
    /**
     * Config for OBJECT_TRACKING.
     */
    objectTrackingConfig?: Schema$GoogleCloudVideointelligenceV1beta2_ObjectTrackingConfig;
    /**
     * Config for PERSON_DETECTION.
     */
    personDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_PersonDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_ShotChangeDetectionConfig;
    /**
     * Config for SPEECH_TRANSCRIPTION.
     */
    speechTranscriptionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_SpeechTranscriptionConfig;
    /**
     * Config for TEXT_DETECTION.
     */
    textDetectionConfig?: Schema$GoogleCloudVideointelligenceV1beta2_TextDetectionConfig;
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string | null;
  }
  /**
   * Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_WordInfo {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults[];
  }
  /**
   * A generic detected attribute represented by name in string format.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute {
    /**
     * Detected attribute confidence. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
     */
    name?: string | null;
    /**
     * Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
     */
    value?: string | null;
  }
  /**
   * A generic detected landmark represented by name in string format and a 2D location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark {
    /**
     * The confidence score of the detected landmark. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of this landmark, for example, left_hand, right_shoulder.
     */
    name?: string | null;
    /**
     * The 2D point of the detected landmark using the normalized image coordinate system. The normalized coordinates have the range from 0 to 1.
     */
    point?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_Entity {
    /**
     * Textual description, e.g., `Fixed-gear bicycle`.
     */
    description?: string | null;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string | null;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string | null;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Status of exporting annotation response to user specified `output_uri`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExportToOutputUriStatus {
    /**
     * Output only. State of the `output_uri` export.
     */
    state?: string | null;
    /**
     * Output only. Only set if state is FAILED.
     */
    status?: Schema$GoogleRpc_Status;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceSegment[];
    /**
     * Thumbnail of a representative face view (in JPEG format).
     */
    thumbnail?: string | null;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation {
    /**
     * The thumbnail of a person's face.
     */
    thumbnail?: string | null;
    /**
     * The face tracks with attributes.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p1beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceFrame {
    /**
     * Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
     */
    normalizedBoundingBoxes?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation {
    /**
     * Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * Annotation corresponding to one detected, tracked and recognized logo class.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation {
    /**
     * Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity;
    /**
     * All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment[];
    /**
     * All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p1beta1_Track[];
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number | null;
    /**
     * Left X coordinate.
     */
    left?: number | null;
    /**
     * Right X coordinate.
     */
    right?: number | null;
    /**
     * Top Y coordinate.
     */
    top?: number | null;
  }
  /**
   * Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trigonometric calculations for location of the box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly {
    /**
     * Normalized vertices of the bounding polygon.
     */
    vertices?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Annotations corresponding to one tracked object.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation {
    /**
     * Object category's labeling confidence of this track.
     */
    confidence?: number | null;
    /**
     * Entity to specify the object category that this track is labeled as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity;
    /**
     * Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame[];
    /**
     * Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
    /**
     * Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
     */
    trackId?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame {
    /**
     * The normalized bounding box location of this object track for the frame.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox;
    /**
     * The timestamp of the frame in microseconds.
     */
    timeOffset?: string | null;
  }
  /**
   * Person detection annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation {
    /**
     * The detected tracks of a person.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p1beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string | null;
    /**
     * Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative[];
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
  }
  /**
   * Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_TextAnnotation {
    /**
     * All video segments where OCR detected text appears.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_TextSegment[];
    /**
     * The detected text.
     */
    text?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_TextFrame {
    /**
     * Bounding polygon of the detected text for this frame.
     */
    rotatedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly;
    /**
     * Timestamp of this frame.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for text detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_TextSegment {
    /**
     * Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
     */
    confidence?: number | null;
    /**
     * Information related to the frames where OCR detected text appears.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_TextFrame[];
    /**
     * Video segment where a text snippet was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_TimestampedObject {
    /**
     * Optional. The attributes of the object in the bounding box.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute[];
    /**
     * Optional. The detected landmarks.
     */
    landmarks?: Schema$GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark[];
    /**
     * Normalized Bounding box in a frame, where the object is located.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
     */
    timeOffset?: string | null;
  }
  /**
   * A track of an object instance.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_Track {
    /**
     * Optional. Attributes in the track level.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute[];
    /**
     * Optional. The confidence score of the tracked object.
     */
    confidence?: number | null;
    /**
     * Video segment of a track.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
    /**
     * The object with timestamp and attributes per frame in the track.
     */
    timestampedObjects?: Schema$GoogleCloudVideointelligenceV1p1beta1_TimestampedObject[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress {
    /**
     * Status of exporting annotation response to user specified `output_uri`. Only set if `output_uri` is set in the request.
     */
    exportStatus?: Schema$GoogleCloudVideointelligenceV1p1beta1_ExportToOutputUriStatus;
    /**
     * Specifies which feature is being tracked if the request contains more than one feature.
     */
    feature?: string | null;
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number | null;
    /**
     * Specifies which segment is being tracked if the request contains more than one segment.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Time of the most recent update.
     */
    updateTime?: string | null;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation;
    /**
     * Deprecated. Please use `face_detection_annotations` instead.
     */
    faceAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation[];
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Annotations for list of logos detected, tracked and recognized in video.
     */
    logoRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation[];
    /**
     * Annotations for list of objects detected and tracked in video.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation[];
    /**
     * Person detection annotations.
     */
    personDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation[];
    /**
     * Video segment on which the annotation is run.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
    /**
     * Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    segmentPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment[];
    /**
     * Topical label annotations on shot level. There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    shotPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?: Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription[];
    /**
     * OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
     */
    textAnnotations?: Schema$GoogleCloudVideointelligenceV1p1beta1_TextAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string | null;
  }
  /**
   * Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults[];
  }
  /**
   * A generic detected attribute represented by name in string format.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute {
    /**
     * Detected attribute confidence. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
     */
    name?: string | null;
    /**
     * Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
     */
    value?: string | null;
  }
  /**
   * A generic detected landmark represented by name in string format and a 2D location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark {
    /**
     * The confidence score of the detected landmark. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of this landmark, for example, left_hand, right_shoulder.
     */
    name?: string | null;
    /**
     * The 2D point of the detected landmark using the normalized image coordinate system. The normalized coordinates have the range from 0 to 1.
     */
    point?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_Entity {
    /**
     * Textual description, e.g., `Fixed-gear bicycle`.
     */
    description?: string | null;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string | null;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string | null;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Status of exporting annotation response to user specified `output_uri`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_ExportToOutputUriStatus {
    /**
     * Output only. State of the `output_uri` export.
     */
    state?: string | null;
    /**
     * Output only. Only set if state is FAILED.
     */
    status?: Schema$GoogleRpc_Status;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p2beta1_FaceFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p2beta1_FaceSegment[];
    /**
     * Thumbnail of a representative face view (in JPEG format).
     */
    thumbnail?: string | null;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation {
    /**
     * The thumbnail of a person's face.
     */
    thumbnail?: string | null;
    /**
     * The face tracks with attributes.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p2beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_FaceFrame {
    /**
     * Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
     */
    normalizedBoundingBoxes?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation {
    /**
     * Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1p2beta1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p2beta1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelSegment[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
  }
  /**
   * Annotation corresponding to one detected, tracked and recognized logo class.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation {
    /**
     * Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p2beta1_Entity;
    /**
     * All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment[];
    /**
     * All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p2beta1_Track[];
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number | null;
    /**
     * Left X coordinate.
     */
    left?: number | null;
    /**
     * Right X coordinate.
     */
    right?: number | null;
    /**
     * Top Y coordinate.
     */
    top?: number | null;
  }
  /**
   * Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trigonometric calculations for location of the box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly {
    /**
     * Normalized vertices of the bounding polygon.
     */
    vertices?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Annotations corresponding to one tracked object.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation {
    /**
     * Object category's labeling confidence of this track.
     */
    confidence?: number | null;
    /**
     * Entity to specify the object category that this track is labeled as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p2beta1_Entity;
    /**
     * Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame[];
    /**
     * Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
    /**
     * Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
     */
    trackId?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame {
    /**
     * The normalized bounding box location of this object track for the frame.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox;
    /**
     * The timestamp of the frame in microseconds.
     */
    timeOffset?: string | null;
  }
  /**
   * Person detection annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation {
    /**
     * The detected tracks of a person.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p2beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string | null;
    /**
     * Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$GoogleCloudVideointelligenceV1p2beta1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative[];
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
  }
  /**
   * Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_TextAnnotation {
    /**
     * All video segments where OCR detected text appears.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p2beta1_TextSegment[];
    /**
     * The detected text.
     */
    text?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_TextFrame {
    /**
     * Bounding polygon of the detected text for this frame.
     */
    rotatedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly;
    /**
     * Timestamp of this frame.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for text detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_TextSegment {
    /**
     * Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
     */
    confidence?: number | null;
    /**
     * Information related to the frames where OCR detected text appears.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p2beta1_TextFrame[];
    /**
     * Video segment where a text snippet was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
  }
  /**
   * For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_TimestampedObject {
    /**
     * Optional. The attributes of the object in the bounding box.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute[];
    /**
     * Optional. The detected landmarks.
     */
    landmarks?: Schema$GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark[];
    /**
     * Normalized Bounding box in a frame, where the object is located.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
     */
    timeOffset?: string | null;
  }
  /**
   * A track of an object instance.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_Track {
    /**
     * Optional. Attributes in the track level.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute[];
    /**
     * Optional. The confidence score of the tracked object.
     */
    confidence?: number | null;
    /**
     * Video segment of a track.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
    /**
     * The object with timestamp and attributes per frame in the track.
     */
    timestampedObjects?: Schema$GoogleCloudVideointelligenceV1p2beta1_TimestampedObject[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress {
    /**
     * Status of exporting annotation response to user specified `output_uri`. Only set if `output_uri` is set in the request.
     */
    exportStatus?: Schema$GoogleCloudVideointelligenceV1p2beta1_ExportToOutputUriStatus;
    /**
     * Specifies which feature is being tracked if the request contains more than one feature.
     */
    feature?: string | null;
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number | null;
    /**
     * Specifies which segment is being tracked if the request contains more than one segment.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Time of the most recent update.
     */
    updateTime?: string | null;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation;
    /**
     * Deprecated. Please use `face_detection_annotations` instead.
     */
    faceAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation[];
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation[];
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Annotations for list of logos detected, tracked and recognized in video.
     */
    logoRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation[];
    /**
     * Annotations for list of objects detected and tracked in video.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation[];
    /**
     * Person detection annotations.
     */
    personDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation[];
    /**
     * Video segment on which the annotation is run.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
    /**
     * Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation[];
    /**
     * Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    segmentPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment[];
    /**
     * Topical label annotations on shot level. There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation[];
    /**
     * Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    shotPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?: Schema$GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription[];
    /**
     * OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
     */
    textAnnotations?: Schema$GoogleCloudVideointelligenceV1p2beta1_TextAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string | null;
  }
  /**
   * Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p2beta1_WordInfo {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults[];
  }
  /**
   * Celebrity definition.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_Celebrity {
    /**
     * Textual description of additional information about the celebrity, if applicable.
     */
    description?: string | null;
    /**
     * The celebrity name.
     */
    displayName?: string | null;
    /**
     * The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity.
     */
    name?: string | null;
  }
  /**
   * Celebrity recognition annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation {
    /**
     * The tracks detected from the input video, including recognized celebrities and other detected faces in the video.
     */
    celebrityTracks?: Schema$GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack {
    /**
     * Top N match of the celebrities for the face in this track.
     */
    celebrities?: Schema$GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity[];
    /**
     * A track of a person's face.
     */
    faceTrack?: Schema$GoogleCloudVideointelligenceV1p3beta1_Track;
  }
  /**
   * A generic detected attribute represented by name in string format.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute {
    /**
     * Detected attribute confidence. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
     */
    name?: string | null;
    /**
     * Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
     */
    value?: string | null;
  }
  /**
   * A generic detected landmark represented by name in string format and a 2D location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark {
    /**
     * The confidence score of the detected landmark. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of this landmark, for example, left_hand, right_shoulder.
     */
    name?: string | null;
    /**
     * The 2D point of the detected landmark using the normalized image coordinate system. The normalized coordinates have the range from 0 to 1.
     */
    point?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_Entity {
    /**
     * Textual description, e.g., `Fixed-gear bicycle`.
     */
    description?: string | null;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string | null;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string | null;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Status of exporting annotation response to user specified `output_uri`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_ExportToOutputUriStatus {
    /**
     * Output only. State of the `output_uri` export.
     */
    state?: string | null;
    /**
     * Output only. Only set if state is FAILED.
     */
    status?: Schema$GoogleRpc_Status;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p3beta1_FaceFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p3beta1_FaceSegment[];
    /**
     * Thumbnail of a representative face view (in JPEG format).
     */
    thumbnail?: string | null;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation {
    /**
     * The thumbnail of a person's face.
     */
    thumbnail?: string | null;
    /**
     * The face tracks with attributes.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p3beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_FaceFrame {
    /**
     * Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
     */
    normalizedBoundingBoxes?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation {
    /**
     * Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1p3beta1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p3beta1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelSegment[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
  }
  /**
   * Annotation corresponding to one detected, tracked and recognized logo class.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation {
    /**
     * Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p3beta1_Entity;
    /**
     * All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment[];
    /**
     * All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p3beta1_Track[];
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number | null;
    /**
     * Left X coordinate.
     */
    left?: number | null;
    /**
     * Right X coordinate.
     */
    right?: number | null;
    /**
     * Top Y coordinate.
     */
    top?: number | null;
  }
  /**
   * Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trigonometric calculations for location of the box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly {
    /**
     * Normalized vertices of the bounding polygon.
     */
    vertices?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Annotations corresponding to one tracked object.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation {
    /**
     * Object category's labeling confidence of this track.
     */
    confidence?: number | null;
    /**
     * Entity to specify the object category that this track is labeled as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p3beta1_Entity;
    /**
     * Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame[];
    /**
     * Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
    /**
     * Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
     */
    trackId?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame {
    /**
     * The normalized bounding box location of this object track for the frame.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox;
    /**
     * The timestamp of the frame in microseconds.
     */
    timeOffset?: string | null;
  }
  /**
   * Person detection annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation {
    /**
     * The detected tracks of a person.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1p3beta1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * The recognized celebrity with confidence score.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity {
    /**
     * The recognized celebrity.
     */
    celebrity?: Schema$GoogleCloudVideointelligenceV1p3beta1_Celebrity;
    /**
     * Recognition confidence. Range [0, 1].
     */
    confidence?: number | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string | null;
    /**
     * Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$GoogleCloudVideointelligenceV1p3beta1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative[];
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
  }
  /**
   * `StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse {
    /**
     * Streaming annotation results.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults;
    /**
     * Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'.
     */
    annotationResultsUri?: string | null;
    /**
     * If set, returns a google.rpc.Status message that specifies the error for the operation.
     */
    error?: Schema$GoogleRpc_Status;
  }
  /**
   * Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults {
    /**
     * Explicit content annotation results.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation;
    /**
     * Timestamp of the processed frame in microseconds.
     */
    frameTimestamp?: string | null;
    /**
     * Label annotation results.
     */
    labelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Object tracking results.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation[];
    /**
     * Shot annotation results. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment[];
  }
  /**
   * Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_TextAnnotation {
    /**
     * All video segments where OCR detected text appears.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p3beta1_TextSegment[];
    /**
     * The detected text.
     */
    text?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_TextFrame {
    /**
     * Bounding polygon of the detected text for this frame.
     */
    rotatedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly;
    /**
     * Timestamp of this frame.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for text detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_TextSegment {
    /**
     * Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
     */
    confidence?: number | null;
    /**
     * Information related to the frames where OCR detected text appears.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p3beta1_TextFrame[];
    /**
     * Video segment where a text snippet was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
  }
  /**
   * For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_TimestampedObject {
    /**
     * Optional. The attributes of the object in the bounding box.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute[];
    /**
     * Optional. The detected landmarks.
     */
    landmarks?: Schema$GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark[];
    /**
     * Normalized Bounding box in a frame, where the object is located.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
     */
    timeOffset?: string | null;
  }
  /**
   * A track of an object instance.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_Track {
    /**
     * Optional. Attributes in the track level.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute[];
    /**
     * Optional. The confidence score of the tracked object.
     */
    confidence?: number | null;
    /**
     * Video segment of a track.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
    /**
     * The object with timestamp and attributes per frame in the track.
     */
    timestampedObjects?: Schema$GoogleCloudVideointelligenceV1p3beta1_TimestampedObject[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress {
    /**
     * Status of exporting annotation response to user specified `output_uri`. Only set if `output_uri` is set in the request.
     */
    exportStatus?: Schema$GoogleCloudVideointelligenceV1p3beta1_ExportToOutputUriStatus;
    /**
     * Specifies which feature is being tracked if the request contains more than one feature.
     */
    feature?: string | null;
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number | null;
    /**
     * Specifies which segment is being tracked if the request contains more than one segment.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Time of the most recent update.
     */
    updateTime?: string | null;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults {
    /**
     * Celebrity recognition annotations.
     */
    celebrityRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation;
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation;
    /**
     * Deprecated. Please use `face_detection_annotations` instead.
     */
    faceAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation[];
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Annotations for list of logos detected, tracked and recognized in video.
     */
    logoRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation[];
    /**
     * Annotations for list of objects detected and tracked in video.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation[];
    /**
     * Person detection annotations.
     */
    personDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation[];
    /**
     * Video segment on which the annotation is run.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
    /**
     * Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    segmentPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment[];
    /**
     * Topical label annotations on shot level. There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    shotPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?: Schema$GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription[];
    /**
     * OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
     */
    textAnnotations?: Schema$GoogleCloudVideointelligenceV1p3beta1_TextAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string | null;
  }
  /**
   * Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p3beta1_WordInfo {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
  }
  /**
   * A generic detected attribute represented by name in string format.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_DetectedAttribute {
    /**
     * Detected attribute confidence. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
     */
    name?: string | null;
    /**
     * Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
     */
    value?: string | null;
  }
  /**
   * A generic detected landmark represented by name in string format and a 2D location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_DetectedLandmark {
    /**
     * The confidence score of the detected landmark. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The name of this landmark, for example, left_hand, right_shoulder.
     */
    name?: string | null;
    /**
     * The 2D point of the detected landmark using the normalized image coordinate system. The normalized coordinates have the range from 0 to 1.
     */
    point?: Schema$GoogleCloudVideointelligenceV1_NormalizedVertex;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_Entity {
    /**
     * Textual description, e.g., `Fixed-gear bicycle`.
     */
    description?: string | null;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string | null;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string | null;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Status of exporting annotation response to user specified `output_uri`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExportToOutputUriStatus {
    /**
     * Output only. State of the `output_uri` export.
     */
    state?: string | null;
    /**
     * Output only. Only set if state is FAILED.
     */
    status?: Schema$GoogleRpc_Status;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_FaceAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_FaceFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_FaceSegment[];
    /**
     * Thumbnail of a representative face view (in JPEG format).
     */
    thumbnail?: string | null;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_FaceDetectionAnnotation {
    /**
     * The thumbnail of a person's face.
     */
    thumbnail?: string | null;
    /**
     * The face tracks with attributes.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Deprecated. No effect.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_FaceFrame {
    /**
     * Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
     */
    normalizedBoundingBoxes?: Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingBox[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelAnnotation {
    /**
     * Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_LabelSegment[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number | null;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
  }
  /**
   * Annotation corresponding to one detected, tracked and recognized logo class.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation {
    /**
     * Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1_Entity;
    /**
     * All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_VideoSegment[];
    /**
     * All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1_Track[];
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number | null;
    /**
     * Left X coordinate.
     */
    left?: number | null;
    /**
     * Right X coordinate.
     */
    right?: number | null;
    /**
     * Top Y coordinate.
     */
    top?: number | null;
  }
  /**
   * Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trigonometric calculations for location of the box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingPoly {
    /**
     * Normalized vertices of the bounding polygon.
     */
    vertices?: Schema$GoogleCloudVideointelligenceV1_NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Annotations corresponding to one tracked object.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation {
    /**
     * Object category's labeling confidence of this track.
     */
    confidence?: number | null;
    /**
     * Entity to specify the object category that this track is labeled as.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1_Entity;
    /**
     * Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_ObjectTrackingFrame[];
    /**
     * Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
    /**
     * Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.
     */
    trackId?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ObjectTrackingFrame {
    /**
     * The normalized bounding box location of this object track for the frame.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingBox;
    /**
     * The timestamp of the frame in microseconds.
     */
    timeOffset?: string | null;
  }
  /**
   * Person detection annotation per video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_PersonDetectionAnnotation {
    /**
     * The detected tracks of a person.
     */
    tracks?: Schema$GoogleCloudVideointelligenceV1_Track[];
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string | null;
    /**
     * Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$GoogleCloudVideointelligenceV1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative[];
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
  }
  /**
   * Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_TextAnnotation {
    /**
     * All video segments where OCR detected text appears.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_TextSegment[];
    /**
     * The detected text.
     */
    text?: string | null;
    /**
     * Feature version.
     */
    version?: string | null;
  }
  /**
   * Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_TextFrame {
    /**
     * Bounding polygon of the detected text for this frame.
     */
    rotatedBoundingBox?: Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingPoly;
    /**
     * Timestamp of this frame.
     */
    timeOffset?: string | null;
  }
  /**
   * Video segment level annotation results for text detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_TextSegment {
    /**
     * Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
     */
    confidence?: number | null;
    /**
     * Information related to the frames where OCR detected text appears.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_TextFrame[];
    /**
     * Video segment where a text snippet was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
  }
  /**
   * For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_TimestampedObject {
    /**
     * Optional. The attributes of the object in the bounding box.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1_DetectedAttribute[];
    /**
     * Optional. The detected landmarks.
     */
    landmarks?: Schema$GoogleCloudVideointelligenceV1_DetectedLandmark[];
    /**
     * Normalized Bounding box in a frame, where the object is located.
     */
    normalizedBoundingBox?: Schema$GoogleCloudVideointelligenceV1_NormalizedBoundingBox;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
     */
    timeOffset?: string | null;
  }
  /**
   * A track of an object instance.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_Track {
    /**
     * Optional. Attributes in the track level.
     */
    attributes?: Schema$GoogleCloudVideointelligenceV1_DetectedAttribute[];
    /**
     * Optional. The confidence score of the tracked object.
     */
    confidence?: number | null;
    /**
     * Video segment of a track.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
    /**
     * The object with timestamp and attributes per frame in the track.
     */
    timestampedObjects?: Schema$GoogleCloudVideointelligenceV1_TimestampedObject[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
    /**
     * Status of exporting annotation response to user specified `output_uri`. Only set if `output_uri` is set in the request.
     */
    exportStatus?: Schema$GoogleCloudVideointelligenceV1_ExportToOutputUriStatus;
    /**
     * Specifies which feature is being tracked if the request contains more than one feature.
     */
    feature?: string | null;
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number | null;
    /**
     * Specifies which segment is being tracked if the request contains more than one segment.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Time of the most recent update.
     */
    updateTime?: string | null;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation;
    /**
     * Deprecated. Please use `face_detection_annotations` instead.
     */
    faceAnnotations?: Schema$GoogleCloudVideointelligenceV1_FaceAnnotation[];
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Video file location in [Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string | null;
    /**
     * Annotations for list of logos detected, tracked and recognized in video.
     */
    logoRecognitionAnnotations?: Schema$GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation[];
    /**
     * Annotations for list of objects detected and tracked in video.
     */
    objectAnnotations?: Schema$GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation[];
    /**
     * Person detection annotations.
     */
    personDetectionAnnotations?: Schema$GoogleCloudVideointelligenceV1_PersonDetectionAnnotation[];
    /**
     * Video segment on which the annotation is run.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
    /**
     * Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    segmentPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1_VideoSegment[];
    /**
     * Topical label annotations on shot level. There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
     */
    shotPresenceLabelAnnotations?: Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?: Schema$GoogleCloudVideointelligenceV1_SpeechTranscription[];
    /**
     * OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
     */
    textAnnotations?: Schema$GoogleCloudVideointelligenceV1_TextAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string | null;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string | null;
  }
  /**
   * Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_WordInfo {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunning_Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpc_Status;
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
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpc_Status {
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

  export class Resource$Videos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/videointelligence.googleapis.com
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
     * const videointelligence = google.videointelligence('v1beta2');
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
     *   const res = await videointelligence.videos.annotate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "features": [],
     *       //   "inputContent": "my_inputContent",
     *       //   "inputUri": "my_inputUri",
     *       //   "locationId": "my_locationId",
     *       //   "outputUri": "my_outputUri",
     *       //   "videoContext": {}
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
    annotate(
      params: Params$Resource$Videos$Annotate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    annotate(
      params?: Params$Resource$Videos$Annotate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunning_Operation>>;
    annotate(
      params: Params$Resource$Videos$Annotate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    annotate(
      params: Params$Resource$Videos$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>
    ): void;
    annotate(
      params: Params$Resource$Videos$Annotate,
      callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Videos$Annotate
        | BodyResponseCallback<Schema$GoogleLongrunning_Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning_Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning_Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunning_Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/videos:annotate').replace(
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
        createAPIRequest<Schema$GoogleLongrunning_Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning_Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Annotate extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoRequest;
  }
}
