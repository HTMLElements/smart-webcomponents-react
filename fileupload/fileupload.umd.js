
require('../source/modules/smart.fileupload');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fileupload = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 FileUpload provides an easy and integrated way for users to upload multiple files.
	*/
	class FileUpload extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'FileUpload' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Defines the file types that are allowed for upload by specifying accepted MIME types or file extensions. This property maps directly to the HTML accept attribute on the hidden file input element, which determines which files users can select in the file dialog. These files are then uploaded to the server endpoint specified in the uploadUrl property. Setting this property ensures that only files matching the specified types can be chosen and submitted.
	    *	Property type: string | null
	    */
	    get accept() {
	        return this.nativeElement ? this.nativeElement.accept : undefined;
	    }
	    set accept(value) {
	        if (this.nativeElement) {
	            this.nativeElement.accept = value;
	        }
	    }
	    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled and transitions will not be applied. Use this property to control whether animations are enabled or disabled within the component or element.
	    *	Property type: Animation | string
	    */
	    get animation() {
	        return this.nativeElement ? this.nativeElement.animation : undefined;
	    }
	    set animation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.animation = value;
	        }
	    }
	    /** Appends the selected files list to a custom container specified by the user. If the property value is a string, it must correspond to the ID of an existing HTML element in the DOM. This element will serve as the new container where the uploaded files list will be rendered. If the provided ID does not match any element in the DOM, the operation will not proceed. This allows developers to control exactly where the files list appears in the application's interface.
	    *	Property type: string
	    */
	    get appendTo() {
	        return this.nativeElement ? this.nativeElement.appendTo : undefined;
	    }
	    set appendTo(value) {
	        if (this.nativeElement) {
	            this.nativeElement.appendTo = value;
	        }
	    }
	    /** Determines whether files are automatically uploaded immediately after they are selected by the user. When set to true, the upload process begins as soon as files are chosen; when false, uploading must be triggered manually.
	    *	Property type: boolean
	    */
	    get autoUpload() {
	        return this.nativeElement ? this.nativeElement.autoUpload : undefined;
	    }
	    set autoUpload(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoUpload = value;
	        }
	    }
	    /** Enables users to upload an entire directory at once, including all files contained within any nested subfolders. When this option is selected, the upload process will automatically include every file from the selected directory and its subdirectories. Note: This feature is currently supported only in Firefox and Chrome browsers.
	    *	Property type: boolean
	    */
	    get directory() {
	        return this.nativeElement ? this.nativeElement.directory : undefined;
	    }
	    set directory(value) {
	        if (this.nativeElement) {
	            this.nativeElement.directory = value;
	        }
	    }
	    /** Controls whether the element is interactive or not. When enabled, the element can be interacted with by the user; when disabled, the element appears inactive and does not respond to user input.
	    *	Property type: boolean
	    */
	    get disabled() {
	        return this.nativeElement ? this.nativeElement.disabled : undefined;
	    }
	    set disabled(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disabled = value;
	        }
	    }
	    /** Specifies a custom container element to serve as the drop zone for file uploads. When files are dropped onto this container, they will be added to the fileUpload component’s file list. If the 'dropZone' property is set to true, the component will use its internal default drop zone. If 'dropZone' is assigned the ID of an existing HTML element in the DOM, that particular element will be used as the drop zone area for file uploads instead. This allows for flexible placement and styling of the drop zone within your application.
	    *	Property type: any
	    */
	    get dropZone() {
	        return this.nativeElement ? this.nativeElement.dropZone : undefined;
	    }
	    set dropZone(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropZone = value;
	        }
	    }
	    /** Conceals the entire footer section, including all of its contents—specifically the "Upload All," "Pause All," and "Close All" buttons—preventing users from accessing these actions.
	    *	Property type: boolean
	    */
	    get hideFooter() {
	        return this.nativeElement ? this.nativeElement.hideFooter : undefined;
	    }
	    set hideFooter(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideFooter = value;
	        }
	    }
	    /** Enhances the file item display by applying a custom template to each item in the uploaded files list. This allows you to define the appearance and layout of uploaded file entries, enabling features such as displaying file names, sizes, icons, previews, or custom actions within each file item.
	    *	Property type: any
	    */
	    get itemTemplate() {
	        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	    }
	    set itemTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemTemplate = value;
	        }
	    }
	    /** Defines the unlockKey property, which is used to retrieve or assign the unique key required to unlock access to the product. Setting this key grants authorization for product usage, while getting it returns the current unlock key in use.
	    *	Property type: string
	    */
	    get unlockKey() {
	        return this.nativeElement ? this.nativeElement.unlockKey : undefined;
	    }
	    set unlockKey(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unlockKey = value;
	        }
	    }
	    /** Specifies or retrieves the current language setting for displaying messages. This property works together with the messages property to select the appropriate set of localized text based on the chosen language code (e.g., "en", "fr", "es"). Use this property to dynamically change or access the language used in your application's user interface.
	    *	Property type: string
	    */
	    get locale() {
	        return this.nativeElement ? this.nativeElement.locale : undefined;
	    }
	    set locale(value) {
	        if (this.nativeElement) {
	            this.nativeElement.locale = value;
	        }
	    }
	    /** A callback function that allows you to customize the format of messages returned by the Localization Module. Use this to modify how localized messages are structured or displayed before they are delivered to your application.
	    *	Property type: any
	    */
	    get localizeFormatFunction() {
	        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	    }
	    set localizeFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.localizeFormatFunction = value;
	        }
	    }
	    /** Configures the text labels displayed in the widget interface, enabling support for localization and customization of user-facing messages. The localization object should contain the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, and uploadAll—each representing the corresponding action's text label. For optimal results and proper display, set these localization messages before the widget element is initialized.
	    *	Property type: any
	    */
	    get messages() {
	        return this.nativeElement ? this.nativeElement.messages : undefined;
	    }
	    set messages(value) {
	        if (this.nativeElement) {
	            this.nativeElement.messages = value;
	        }
	    }
	    /** Specifies or retrieves whether users are permitted to select and upload multiple items simultaneously. When enabled, users can choose more than one file or item within the upload interface.
	    *	Property type: boolean
	    */
	    get multiple() {
	        return this.nativeElement ? this.nativeElement.multiple : undefined;
	    }
	    set multiple(value) {
	        if (this.nativeElement) {
	            this.nativeElement.multiple = value;
	        }
	    }
	    /** Gets or sets the name attribute of the hidden file input element. This name is used as the key in the form data when files are uploaded to the server via the URL specified in the uploadUrl property.
	    *	Property type: string
	    */
	    get name() {
	        return this.nativeElement ? this.nativeElement.name : undefined;
	    }
	    set name(value) {
	        if (this.nativeElement) {
	            this.nativeElement.name = value;
	        }
	    }
	    /** When an element is set to readonly, users can view its content but cannot modify or edit it. However, unlike disabled elements, readonly elements remain focusable and their content can typically still be selected and copied. This property is commonly applied to input fields and textareas to prevent changes while allowing visibility and text selection.
	    *	Property type: boolean
	    */
	    get readonly() {
	        return this.nativeElement ? this.nativeElement.readonly : undefined;
	    }
	    set readonly(value) {
	        if (this.nativeElement) {
	            this.nativeElement.readonly = value;
	        }
	    }
	    /** A callback function designed to process server responses, allowing you to handle successful results as well as different error codes and statuses returned from the server. This enables customized handling of success, failure, and edge-case scenarios based on the server’s response.
	    *	Property type: any
	    */
	    get responseHandler() {
	        return this.nativeElement ? this.nativeElement.responseHandler : undefined;
	    }
	    set responseHandler(value) {
	        if (this.nativeElement) {
	            this.nativeElement.responseHandler = value;
	        }
	    }
	    /** Sets or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is commonly used for languages such as Arabic or Hebrew. When enabled, the element and its content are visually aligned to accommodate RTL locales, ensuring proper display and user interface behavior for RTL language users.
	    *	Property type: boolean
	    */
	    get rightToLeft() {
	        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	    }
	    set rightToLeft(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rightToLeft = value;
	        }
	    }
	    /** A callback function that allows you to modify or set custom headers for the XMLHttpRequest (XHR) used during the file upload process. This function receives the XHR object as a parameter, enabling you to add, update, or remove HTTP headers before the request is sent.
	    *	Property type: any
	    */
	    get setHeaders() {
	        return this.nativeElement ? this.nativeElement.setHeaders : undefined;
	    }
	    set setHeaders(value) {
	        if (this.nativeElement) {
	            this.nativeElement.setHeaders = value;
	        }
	    }
	    /** Displays a visual progress bar at the bottom of each item being uploaded, providing real-time feedback on the upload status. The progress bar dynamically updates to reflect the current percentage of the upload completed for each individual item, allowing users to easily track the progress of their uploads.
	    *	Property type: boolean
	    */
	    get showProgress() {
	        return this.nativeElement ? this.nativeElement.showProgress : undefined;
	    }
	    set showProgress(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showProgress = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance—including colors, fonts, and overall style—ensuring that the element’s look is consistent with the desired design scheme.
	    *	Property type: string
	    */
	    get theme() {
	        return this.nativeElement ? this.nativeElement.theme : undefined;
	    }
	    set theme(value) {
	        if (this.nativeElement) {
	            this.nativeElement.theme = value;
	        }
	    }
	    /** Specifies or retrieves the URL endpoint to which files will be uploaded. This property directly maps to the action attribute of the upload form. For instance, the uploadUrl property can be set to the path of a server-side script, such as a PHP, Node.js, or ASP.NET file, responsible for processing and handling the file upload operation on the server. Use this property to define where uploaded files should be sent for server-side handling.
	    *	Property type: string
	    */
	    get uploadUrl() {
	        return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
	    }
	    set uploadUrl(value) {
	        if (this.nativeElement) {
	            this.nativeElement.uploadUrl = value;
	        }
	    }
	    /** If set to true, the element is not focusable and cannot receive keyboard or programmatic focus.
	    *	Property type: boolean
	    */
	    get unfocusable() {
	        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	    }
	    set unfocusable(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unfocusable = value;
	        }
	    }
	    /** Sets or retrieves the URL endpoint used for the remove operation. This property corresponds to the form's action attribute and determines where the form data is submitted when a remove action is triggered. For example, the removeUrl property can be set to the path of a server-side script, such as a PHP file, which processes and handles the remove request on the backend.
	    *	Property type: string
	    */
	    get removeUrl() {
	        return this.nativeElement ? this.nativeElement.removeUrl : undefined;
	    }
	    set removeUrl(value) {
	        if (this.nativeElement) {
	            this.nativeElement.removeUrl = value;
	        }
	    }
	    /** Retrieves the value of the uploaded file, such as the file’s name, path, size, or content, depending on the context and configuration of the file upload input. This function allows access to the selected file’s details for further processing, validation, or storage.
	    *	Property type: any
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    /** Callback invoked immediately after files are selected to perform validation. Should return a boolean value: if true, the file is accepted; if false, the file is removed from the selection list and a 'validationError' event is triggered.
	    *	Property type: any
	    */
	    get validateFile() {
	        return this.nativeElement ? this.nativeElement.validateFile : undefined;
	    }
	    set validateFile(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validateFile = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["accept", "animation", "appendTo", "autoUpload", "directory", "disabled", "dropZone", "hideFooter", "itemTemplate", "unlockKey", "locale", "localizeFormatFunction", "messages", "multiple", "name", "readonly", "responseHandler", "rightToLeft", "setHeaders", "showProgress", "theme", "uploadUrl", "unfocusable", "removeUrl", "value", "validateFile"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onFileSelected", "onUploadCanceled", "onUploadCompleted", "onUploadError", "onUploadPaused", "onUploadStarted", "onValidationError", "onCreate", "onReady"];
	    }
	    /** Displays a popup dialog that allows the user to browse their local device and select a file to upload or process.
	    */
	    browse() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.browse();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.browse();
	            });
	        }
	    }
	    /** Cancels all currently selected files. This action removes the files from the selection list and ensures that they are not uploaded. Any ongoing or pending uploads for these files are also stopped, preventing them from being transferred to the server.
	    */
	    cancelAll() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.cancelAll();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.cancelAll();
	            });
	        }
	    }
	    /** Cancels the specified file's upload process. This action immediately removes the file from the file list and prevents it from being uploaded or processed any further.
	    * @param {number} index. Index of the file which will be canceled.
	    */
	    cancelFile(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.cancelFile(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.cancelFile(index);
	            });
	        }
	    }
	    /** Pauses the upload process for all files, temporarily halting any active uploads. While uploads are paused and new uploads cannot be started, the files themselves remain visible and accessible in the file list. No files are removed or lost during this pause; uploading can be resumed at a later time.
	    */
	    pauseAll() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.pauseAll();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.pauseAll();
	            });
	        }
	    }
	    /** Pauses the upload process for the file at the specified index. The upload for this file is temporarily suspended, preventing any data transfer, but the file itself remains listed in the upload queue. This allows for the upload to be resumed or managed at a later time without removing the file from the list.
	    * @param {number} id. Index of the file which will be paused.
	    */
	    pauseFile(id) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.pauseFile(id);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.pauseFile(id);
	            });
	        }
	    }
	    /** Uploads every file selected by the user to the server. Handles multiple files simultaneously and ensures each file is processed for upload.
	    */
	    uploadAll() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.uploadAll();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.uploadAll();
	            });
	        }
	    }
	    /** Allows the user to select a file from their local device and upload it to the server for processing or storage.
	    * @param {number} id. Index of the file which will be uploaded.
	    */
	    uploadFile(id) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.uploadFile(id);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.uploadFile(id);
	            });
	        }
	    }
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    componentDidRender(initialize) {
	        const that = this;
	        const props = {};
	        const events = {};
	        let styles = null;
	        const stringifyCircularJSON = (obj) => {
	            const seen = new WeakSet();
	            return JSON.stringify(obj, (k, v) => {
	                if (v !== null && typeof v === 'object') {
	                    if (seen.has(v))
	                        return;
	                    seen.add(v);
	                }
	                if (k === 'Smart') {
	                    return v;
	                }
	                return v;
	            });
	        };
	        for (let prop in that.props) {
	            if (prop === 'children') {
	                continue;
	            }
	            if (prop === 'style') {
	                styles = that.props[prop];
	                continue;
	            }
	            if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
	                events[prop] = that.props[prop];
	                continue;
	            }
	            props[prop] = that.props[prop];
	        }
	        if (initialize) {
	            that.nativeElement = this.componentRef.current;
	            that.nativeElement.React = React;
	            that.nativeElement.ReactDOM = ReactDOM;
	            if (that.nativeElement && !that.nativeElement.isCompleted) {
	                that.nativeElement.reactStateProps = JSON.parse(stringifyCircularJSON(props));
	            }
	        }
	        if (initialize && that.nativeElement && that.nativeElement.isCompleted) {
	            //	return;
	        }
	        for (let prop in props) {
	            if (prop === 'class' || prop === 'className') {
	                const classNames = props[prop].trim().split(' ');
	                if (that.nativeElement._classNames) {
	                    const oldClassNames = that.nativeElement._classNames;
	                    for (let className in oldClassNames) {
	                        if (that.nativeElement.classList.contains(oldClassNames[className]) && oldClassNames[className] !== "") {
	                            that.nativeElement.classList.remove(oldClassNames[className]);
	                        }
	                    }
	                }
	                that.nativeElement._classNames = classNames;
	                for (let className in classNames) {
	                    if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
	                        that.nativeElement.classList.add(classNames[className]);
	                    }
	                }
	                continue;
	            }
	            if (props[prop] !== that.nativeElement[prop]) {
	                const normalizeProp = (str) => {
	                    return str.replace(/-([a-z])/g, function (g) {
	                        return g[1].toUpperCase();
	                    });
	                };
	                if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
	                    that.nativeElement.setAttribute(prop, '');
	                }
	                const normalizedProp = normalizeProp(prop);
	                if (that.nativeElement[normalizedProp] === undefined) {
	                    that.nativeElement.setAttribute(prop, props[prop]);
	                }
	                if (props[prop] !== undefined) {
	                    if (typeof props[prop] === 'object' && that.nativeElement.reactStateProps && !initialize) {
	                        if (stringifyCircularJSON(props[prop]) === stringifyCircularJSON(that.nativeElement.reactStateProps[normalizedProp])) {
	                            continue;
	                        }
	                    }
	                    that.nativeElement[normalizedProp] = props[prop];
	                }
	            }
	        }
	        for (let eventName in events) {
	            that[eventName] = events[eventName];
	            that.nativeElement[eventName.toLowerCase()] = events[eventName];
	        }
	        if (initialize) {
	            exports.Smart.Render();
	            if (that.onCreate) {
	                that.onCreate();
	            }
	            that.nativeElement.whenRendered(() => {
	                if (that.onReady) {
	                    that.onReady();
	                }
	            });
	        }
	        // setup styles.
	        if (styles) {
	            for (let styleName in styles) {
	                that.nativeElement.style[styleName] = styles[styleName];
	            }
	        }
	    }
	    componentDidMount() {
	        this.componentDidRender(true);
	    }
	    componentDidUpdate() {
	        this.componentDidRender(false);
	    }
	    componentWillUnmount() {
	        const that = this;
	        if (!that.nativeElement) {
	            return;
	        }
	        that.nativeElement.whenRenderedCallbacks = [];
	        for (let i = 0; i < that.eventListeners.length; i++) {
	            const eventName = that.eventListeners[i];
	            that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
	        }
	    }
	    render() {
	        return (React.createElement("smart-file-upload", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.FileUpload = FileUpload;
	exports.default = FileUpload;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
