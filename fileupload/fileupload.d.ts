import React from "react";
import { FileUploadProperties } from "./../index";
import { Animation } from './../index';
export { FileUploadProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
    *	Property type: string | null
    */
    get accept(): string | null;
    set accept(value: string | null);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list.
    *	Property type: string
    */
    get appendTo(): string;
    set appendTo(value: string);
    /** Sets or gets whether files will be automatically uploaded after selection.
    *	Property type: boolean
    */
    get autoUpload(): boolean;
    set autoUpload(value: boolean);
    /** Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome.
    *	Property type: boolean
    */
    get directory(): boolean;
    set directory(value: boolean);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone.
    *	Property type: any
    */
    get dropZone(): any;
    set dropZone(value: any);
    /** Hides the footer element and it's contents (Upload All, Pause All and Close All buttons).
    *	Property type: boolean
    */
    get hideFooter(): boolean;
    set hideFooter(value: boolean);
    /** Applies a custom template to the file items that represent the uploaded files.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets whether multiple item uploads are allowed.
    *	Property type: boolean
    */
    get multiple(): boolean;
    set multiple(value: boolean);
    /** Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Callback that can used to handle various server responses and error codes.
    *	Property type: any
    */
    get responseHandler(): any;
    set responseHandler(value: any);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Callback function, used to change the headers of the file upload's XHR request.
    *	Property type: any
    */
    get setHeaders(): any;
    set setHeaders(value: any);
    /** Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process.
    *	Property type: boolean
    */
    get showProgress(): boolean;
    set showProgress(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
    *	Property type: string
    */
    get uploadUrl(): string;
    set uploadUrl(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired.
    *	Property type: any
    */
    get validateFile(): any;
    set validateFile(value: any);
    get properties(): string[];
    /**  This event is triggered when a file has been selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the selected file.
    *   type - The type of the selected file.
    *   size - The size of the selected file.
    *   index - The index of the selected file.
    */
    onFileSelected?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload operation is canceled.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    */
    onUploadCanceled?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload operation is completed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    */
    onUploadCompleted?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when during the file upload process something happens and upload fails.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    */
    onUploadError?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload operation is paused.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the paused file.
    *   type - The type of the paused file.
    *   size - The size of the paused file.
    *   index - The index of the paused file.
    */
    onUploadPaused?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file upload operation is started.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
    *   filename - The name of the file that is being uploaded.
    *   type - The type of the file that is being uploaded.
    *   size - The size of the file that is being uploaded.
    *   index - The index of the file that is being uploaded.
    */
    onUploadStarted?: ((event?: Event) => void) | undefined;
    /**  This event is triggered if the validation of a user defined 'validateFile' callback fails.
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
    /** Opens a popup to browse for a file.
    */
    browse(): void;
    /** Cancels all selected files. The files are removed from the list and their uploading is prevented.
    */
    cancelAll(): void;
    /** Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
    * @param {number} index. Index of the file which will be canceled.
    */
    cancelFile(index: number): void;
    /** Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
    */
    pauseAll(): void;
    /** Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
    * @param {number} id. Index of the file which will be paused.
    */
    pauseFile(id: number): void;
    /** Uploads all selected files.
    */
    uploadAll(): void;
    /** Uploads a selected file.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default FileUpload;
