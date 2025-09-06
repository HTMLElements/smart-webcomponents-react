import React from "react";
import { FileUploadProperties } from "./../index";
import { Animation } from './../index';
export { FileUploadProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
export interface FileUploadProps extends FileUploadProperties {
    className?: string;
    style?: React.CSSProperties;
    onFileSelected?: ((event?: Event) => void) | undefined;
    onUploadCanceled?: ((event?: Event) => void) | undefined;
    onUploadCompleted?: ((event?: Event) => void) | undefined;
    onUploadError?: ((event?: Event) => void) | undefined;
    onUploadPaused?: ((event?: Event) => void) | undefined;
    onUploadStarted?: ((event?: Event) => void) | undefined;
    onValidationError?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export declare class FileUpload extends React.Component<React.HTMLAttributes<Element> & FileUploadProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Defines the file types that are allowed for upload by specifying accepted MIME types or file extensions. This property maps directly to the HTML accept attribute on the hidden file input element, which determines which files users can select in the file dialog. These files are then uploaded to the server endpoint specified in the uploadUrl property. Setting this property ensures that only files matching the specified types can be chosen and submitted.
    *	Property type: string | null
    */
    get accept(): string | null;
    set accept(value: string | null);
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled and transitions will not be applied. Use this property to control whether animations are enabled or disabled within the component or element.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Appends the selected files list to a custom container specified by the user. If the property value is a string, it must correspond to the ID of an existing HTML element in the DOM. This element will serve as the new container where the uploaded files list will be rendered. If the provided ID does not match any element in the DOM, the operation will not proceed. This allows developers to control exactly where the files list appears in the application's interface.
    *	Property type: string
    */
    get appendTo(): string;
    set appendTo(value: string);
    /** Determines whether files are automatically uploaded immediately after they are selected by the user. When set to true, the upload process begins as soon as files are chosen; when false, uploading must be triggered manually.
    *	Property type: boolean
    */
    get autoUpload(): boolean;
    set autoUpload(value: boolean);
    /** Enables users to upload an entire directory at once, including all files contained within any nested subfolders. When this option is selected, the upload process will automatically include every file from the selected directory and its subdirectories. Note: This feature is currently supported only in Firefox and Chrome browsers.
    *	Property type: boolean
    */
    get directory(): boolean;
    set directory(value: boolean);
    /** Controls whether the element is interactive or not. When enabled, the element can be interacted with by the user; when disabled, the element appears inactive and does not respond to user input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies a custom container element to serve as the drop zone for file uploads. When files are dropped onto this container, they will be added to the fileUpload component’s file list. If the 'dropZone' property is set to true, the component will use its internal default drop zone. If 'dropZone' is assigned the ID of an existing HTML element in the DOM, that particular element will be used as the drop zone area for file uploads instead. This allows for flexible placement and styling of the drop zone within your application.
    *	Property type: any
    */
    get dropZone(): any;
    set dropZone(value: any);
    /** Conceals the entire footer section, including all of its contents—specifically the "Upload All," "Pause All," and "Close All" buttons—preventing users from accessing these actions.
    *	Property type: boolean
    */
    get hideFooter(): boolean;
    set hideFooter(value: boolean);
    /** Enhances the file item display by applying a custom template to each item in the uploaded files list. This allows you to define the appearance and layout of uploaded file entries, enabling features such as displaying file names, sizes, icons, previews, or custom actions within each file item.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Defines the unlockKey property, which is used to retrieve or assign the unique key required to unlock access to the product. Setting this key grants authorization for product usage, while getting it returns the current unlock key in use.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for displaying messages. This property works together with the messages property to select the appropriate set of localized text based on the chosen language code (e.g., "en", "fr", "es"). Use this property to dynamically change or access the language used in your application's user interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the format of messages returned by the Localization Module. Use this to modify how localized messages are structured or displayed before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Configures the text labels displayed in the widget interface, enabling support for localization and customization of user-facing messages. The localization object should contain the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, and uploadAll—each representing the corresponding action's text label. For optimal results and proper display, set these localization messages before the widget element is initialized.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies or retrieves whether users are permitted to select and upload multiple items simultaneously. When enabled, users can choose more than one file or item within the upload interface.
    *	Property type: boolean
    */
    get multiple(): boolean;
    set multiple(value: boolean);
    /** Gets or sets the name attribute of the hidden file input element. This name is used as the key in the form data when files are uploaded to the server via the URL specified in the uploadUrl property.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When an element is set to readonly, users can view its content but cannot modify or edit it. However, unlike disabled elements, readonly elements remain focusable and their content can typically still be selected and copied. This property is commonly applied to input fields and textareas to prevent changes while allowing visibility and text selection.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** A callback function designed to process server responses, allowing you to handle successful results as well as different error codes and statuses returned from the server. This enables customized handling of success, failure, and edge-case scenarios based on the server’s response.
    *	Property type: any
    */
    get responseHandler(): any;
    set responseHandler(value: any);
    /** Sets or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is commonly used for languages such as Arabic or Hebrew. When enabled, the element and its content are visually aligned to accommodate RTL locales, ensuring proper display and user interface behavior for RTL language users.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** A callback function that allows you to modify or set custom headers for the XMLHttpRequest (XHR) used during the file upload process. This function receives the XHR object as a parameter, enabling you to add, update, or remove HTTP headers before the request is sent.
    *	Property type: any
    */
    get setHeaders(): any;
    set setHeaders(value: any);
    /** Displays a visual progress bar at the bottom of each item being uploaded, providing real-time feedback on the upload status. The progress bar dynamically updates to reflect the current percentage of the upload completed for each individual item, allowing users to easily track the progress of their uploads.
    *	Property type: boolean
    */
    get showProgress(): boolean;
    set showProgress(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance—including colors, fonts, and overall style—ensuring that the element’s look is consistent with the desired design scheme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies or retrieves the URL endpoint to which files will be uploaded. This property directly maps to the action attribute of the upload form. For instance, the uploadUrl property can be set to the path of a server-side script, such as a PHP, Node.js, or ASP.NET file, responsible for processing and handling the file upload operation on the server. Use this property to define where uploaded files should be sent for server-side handling.
    *	Property type: string
    */
    get uploadUrl(): string;
    set uploadUrl(value: string);
    /** If set to true, the element is not focusable and cannot receive keyboard or programmatic focus.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or retrieves the URL endpoint used for the remove operation. This property corresponds to the form's action attribute and determines where the form data is submitted when a remove action is triggered. For example, the removeUrl property can be set to the path of a server-side script, such as a PHP file, which processes and handles the remove request on the backend.
    *	Property type: string
    */
    get removeUrl(): string;
    set removeUrl(value: string);
    /** Retrieves the value of the uploaded file, such as the file’s name, path, size, or content, depending on the context and configuration of the file upload input. This function allows access to the selected file’s details for further processing, validation, or storage.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Callback invoked immediately after files are selected to perform validation. Should return a boolean value: if true, the file is accepted; if false, the file is removed from the selection list and a 'validationError' event is triggered.
    *	Property type: any
    */
    get validateFile(): any;
    set validateFile(value: any);
    get properties(): string[];
    /**  This event is triggered whenever a user selects a file, such as through a file input element. It occurs immediately after the file selection is made and can be used to handle or validate the chosen file(s) before further processing, such as uploading or previewing them.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the selected file.
    *   type - The type of the selected file.
    *   size - The size of the selected file.
    *   index - The index of the selected file.
    */
    onFileSelected?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user actively cancels an ongoing file upload process. It indicates that the file transfer has been intentionally terminated before completion, either by user action or programmatic intervention.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    */
    onUploadCanceled?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload process has finished, indicating that the file has been successfully transmitted to the server or the upload has reached its final state (either success or failure). It can be used to execute follow-up actions, such as displaying a confirmation message, updating the user interface, or processing the uploaded file, once the upload operation is complete.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status, 	serverResponse)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    *   serverResponse - The response of the remote server.
    */
    onUploadCompleted?: ((event?: Event) => void) | undefined;
    /**  This event is triggered if an error occurs during the file upload process, causing the upload to fail. It provides information about the failure, allowing you to implement custom error handling or user notifications when a file cannot be successfully uploaded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    */
    onUploadError?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an ongoing file upload process is temporarily halted by the user or application. It indicates that the upload is not complete and may be resumed or canceled at a later time. Event listeners can use this event to update the user interface, save upload progress, or handle other logic related to the paused upload state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the paused file.
    *   type - The type of the paused file.
    *   size - The size of the paused file.
    *   index - The index of the paused file.
    */
    onUploadPaused?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload process initiates, signaling that the uploading of one or more files has begun. It can be used to perform preparatory actions such as updating the user interface, initializing progress indicators, or logging the start of the file transfer.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the file that is being uploaded.
    *   type - The type of the file that is being uploaded.
    *   size - The size of the file that is being uploaded.
    *   index - The index of the file that is being uploaded.
    */
    onUploadStarted?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user-defined 'validateFile' callback function returns a failure result, indicating that the provided file did not meet the specified validation criteria.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
    *   filename - The name of the file which validation has failed.
    *   type - The type of the file which validation has failed.
    *   size - The size of the file which validation has failed.
    */
    onValidationError?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Displays a popup dialog that allows the user to browse their local device and select a file to upload or process.
    */
    browse(): void;
    /** Cancels all currently selected files. This action removes the files from the selection list and ensures that they are not uploaded. Any ongoing or pending uploads for these files are also stopped, preventing them from being transferred to the server.
    */
    cancelAll(): void;
    /** Cancels the specified file's upload process. This action immediately removes the file from the file list and prevents it from being uploaded or processed any further.
    * @param {number} index. Index of the file which will be canceled.
    */
    cancelFile(index: number): void;
    /** Pauses the upload process for all files, temporarily halting any active uploads. While uploads are paused and new uploads cannot be started, the files themselves remain visible and accessible in the file list. No files are removed or lost during this pause; uploading can be resumed at a later time.
    */
    pauseAll(): void;
    /** Pauses the upload process for the file at the specified index. The upload for this file is temporarily suspended, preventing any data transfer, but the file itself remains listed in the upload queue. This allows for the upload to be resumed or managed at a later time without removing the file from the list.
    * @param {number} id. Index of the file which will be paused.
    */
    pauseFile(id: number): void;
    /** Uploads every file selected by the user to the server. Handles multiple files simultaneously and ensures each file is processed for upload.
    */
    uploadAll(): void;
    /** Allows the user to select a file from their local device and upload it to the server for processing or storage.
    * @param {number} id. Index of the file which will be uploaded.
    */
    uploadFile(id: number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default FileUpload;
