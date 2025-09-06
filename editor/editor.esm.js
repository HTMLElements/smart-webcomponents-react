
"use client";

import '../source/modules/smart.editor'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.editor');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
*/
class Editor extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Editor' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** An object that defines configuration settings for integrating AI capabilities within the grid, including options for enabling AI features, specifying AI service endpoints, adjusting model parameters, and customizing AI-driven functionality in the grid interface.
    *	Property type: EditorAi
    */
    get ai() {
        return this.nativeElement ? this.nativeElement.ai : undefined;
    }
    set ai(value) {
        if (this.nativeElement) {
            this.nativeElement.ai = value;
        }
    }
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. For other values, animations are enabled according to the selected mode.
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
    /** Automatically formats your text in real-time as you type, converting your input into structured elements such as bullet points, checkboxes, headings, and code blocks. This feature streamlines note-taking and writing by instantly applying consistent formatting without requiring manual markup or additional steps.
    *	Property type: boolean
    */
    get autoFormatting() {
        return this.nativeElement ? this.nativeElement.autoFormatting : undefined;
    }
    set autoFormatting(value) {
        if (this.nativeElement) {
            this.nativeElement.autoFormatting = value;
        }
    }
    /** Automatically restores the editor's most recently saved state from the browser's local storage when the element is initialized. To retrieve the correct saved state, you must specify a unique id that matches the one used during the saving process. Without this id, the editor cannot identify or load the previously stored state.
    *	Property type: boolean
    */
    get autoLoad() {
        return this.nativeElement ? this.nativeElement.autoLoad : undefined;
    }
    set autoLoad(value) {
        if (this.nativeElement) {
            this.nativeElement.autoLoad = value;
        }
    }
    /** Automatically saves the editor's current content at regular intervals specified by the autoSaveInterval property, but only while the editor element is focused. To enable automatic saving, you must assign a unique id to the editor element; this id is used to store and retrieve the editor's saved state.
    *	Property type: boolean
    */
    get autoSave() {
        return this.nativeElement ? this.nativeElement.autoSave : undefined;
    }
    set autoSave(value) {
        if (this.nativeElement) {
            this.nativeElement.autoSave = value;
        }
    }
    /** Specifies the time interval, in milliseconds, at which the Editor automatically saves its state when the autoSave property is enabled. This property controls how frequently the Editor performs auto-save operations.
    *	Property type: number
    */
    get autoSaveInterval() {
        return this.nativeElement ? this.nativeElement.autoSaveInterval : undefined;
    }
    set autoSaveInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.autoSaveInterval = value;
        }
    }
    /** A customizable formatting function for the character counter display in the Editor. This function receives two parameters:- chars: The current number of characters entered by the user in the Editor.- maxCharCount: The maximum allowed number of characters for the Editor input.The function should return a formatted string that represents the character count status, which will be shown in the Editor’s UI (for example, "25 / 100 characters"). This allows developers to define custom formats for how the character count is displayed to users.
    *	Property type: any
    */
    get charCountFormatFunction() {
        return this.nativeElement ? this.nativeElement.charCountFormatFunction : undefined;
    }
    set charCountFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.charCountFormatFunction = value;
        }
    }
    /** Controls whether files are automatically uploaded immediately after the user selects them. When enabled, the upload process begins as soon as files are chosen. When disabled, file upload must be triggered manually. This property can be used to either retrieve the current auto-upload setting or update it.
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
    /** Specifies the configuration for content filtering, allowing you to define which types of content are allowed or blocked according to the selected criteria or rules.
    *	Property type: EditorContentFiltering
    */
    get contentFiltering() {
        return this.nativeElement ? this.nativeElement.contentFiltering : undefined;
    }
    set contentFiltering(value) {
        if (this.nativeElement) {
            this.nativeElement.contentFiltering = value;
        }
    }
    /** Defines the CSS file(s) or styles to be applied to the content area within the Editor, allowing you to customize the appearance and formatting of the editor’s content.
    *	Property type: string
    */
    get content_css() {
        return this.nativeElement ? this.nativeElement.content_css : undefined;
    }
    set content_css(value) {
        if (this.nativeElement) {
            this.nativeElement.content_css = value;
        }
    }
    /** Specifies the items and structure of the context menu that appears when a user right-clicks within the Editor's content area. This setting allows you to customize which menu options are available based on the user's actions, providing tailored functionality and quick access to relevant commands.
    *	Property type: EditorContextMenu | string
    */
    get contextMenu() {
        return this.nativeElement ? this.nativeElement.contextMenu : undefined;
    }
    set contextMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenu = value;
        }
    }
    /** Enhances the Editor’s context menu by allowing you to customize its default items. This property accepts several formats:- 'Array of Items:'    You can provide an array where each item is either:    - A 'string' representing the value/action for the menu item.    - An 'object' in the format '{ label: string, value: string }', where:    - 'label' is the text displayed in the menu.    - 'value' is the action or identifier associated with that menu item.- 'Function:'    You can also pass a function that dynamically generates the array of menu items. The function receives the following parameters:    - 'target' ('HTMLElement'): The DOM element where the context menu is triggered.    - 'type' ('string'): The type or context of the menu (e.g., "table", "image", "link", or other relevant context types).    - 'defaultItems' ('string[]'): The default set of menu item identifiers for that context.    The function should return an array of menu items (as described above), which will be rendered in place of the default menu.'Example function signature:''''javascriptfunction (target: HTMLElement, type: string, defaultItems: string[]) {  return defaultItems;}'''This flexible property enables you to tailor the context menu based on the user's selection, the specific element targeted, or the context of the interaction, helping create a more intuitive and relevant editing experience.
    *	Property type: string[] | { label: string, value: 'string' }[] | Function | null
    */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenuDataSource = value;
        }
    }
    /** Configures the available options for exporting data from the Editor, such as file formats (CSV, JSON, XML), export settings, and customization preferences. These settings determine how users can save or export content from the Editor.
    *	Property type: EditorDataExport
    */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.dataExport = value;
        }
    }
    /** Controls whether the Editor component is active or inactive. When enabled, users can interact with and make changes within the Editor; when disabled, all editing functionalities are restricted or unavailable.
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
    /** Prevents users from modifying or editing content within the Editor, making all content read-only.
    *	Property type: boolean
    */
    get disableEditing() {
        return this.nativeElement ? this.nativeElement.disableEditing : undefined;
    }
    set disableEditing(value) {
        if (this.nativeElement) {
            this.nativeElement.disableEditing = value;
        }
    }
    /** Prevents the Quick Search Bar from appearing or being accessible to users, effectively disabling its functionality across the application.
    *	Property type: boolean
    */
    get disableSearchBar() {
        return this.nativeElement ? this.nativeElement.disableSearchBar : undefined;
    }
    set disableSearchBar(value) {
        if (this.nativeElement) {
            this.nativeElement.disableSearchBar = value;
        }
    }
    /** Specifies the editing mode for the Editor component. By default, the Editor operates in standard HTML mode, allowing users to input and edit HTML content directly. In this mode, pressing Enter inserts line breaks or new paragraphs according to standard HTML behavior. When set to 'blockHtml', the Editor creates new DIV elements each time the user presses Enter, promoting a block-based editing experience. This mode also provides built-in commands tailored for structured data entry and manipulation.If set to 'markdown', the Editor functions as a dedicated Markdown editor. User input is interpreted as Markdown syntax, and the Editor automatically parses and converts the Markdown content into HTML for real-time preview. This enables a seamless writing and formatting workflow for users who prefer Markdown.Possible values:- 'html' (default): Accepts and parses HTML input.- 'blockHtml': Uses DIV tags for new blocks and offers additional commands for data input.- 'markdown': Enables Markdown syntax input with live HTML preview.
    *	Property type: EditMode | string
    */
    get editMode() {
        return this.nativeElement ? this.nativeElement.editMode : undefined;
    }
    set editMode(value) {
        if (this.nativeElement) {
            this.nativeElement.editMode = value;
        }
    }
    /** Specifies whether the output from the getHTML method and the Source Code view should be HTML-encoded. When enabled, special characters in the code (such as , and &) are converted to their HTML entity equivalents, ensuring correct display and preventing unintended HTML rendering. When disabled, the values are returned as raw HTML without encoding.
    *	Property type: boolean
    */
    get enableHtmlEncode() {
        return this.nativeElement ? this.nativeElement.enableHtmlEncode : undefined;
    }
    set enableHtmlEncode(value) {
        if (this.nativeElement) {
            this.nativeElement.enableHtmlEncode = value;
        }
    }
    /** Specifies whether pressing the Tab key inside the Editor will insert a tab character at the cursor position, or instead move focus to the next focusable element (default behavior). When enabled, Tab inserts a tab character; when disabled, Tab shifts focus as usual.
    *	Property type: boolean
    */
    get enableTabKey() {
        return this.nativeElement ? this.nativeElement.enableTabKey : undefined;
    }
    set enableTabKey(value) {
        if (this.nativeElement) {
            this.nativeElement.enableTabKey = value;
        }
    }
    /** Specifies the duration (in milliseconds) between consecutive result updates when using the "Find and Replace" and "Search Bar" features. Adjusting this interval can affect how quickly search results are refreshed and displayed to the user during searches.
    *	Property type: number
    */
    get findAndReplaceTimeout() {
        return this.nativeElement ? this.nativeElement.findAndReplaceTimeout : undefined;
    }
    set findAndReplaceTimeout(value) {
        if (this.nativeElement) {
            this.nativeElement.findAndReplaceTimeout = value;
        }
    }
    /** Specifies whether the Toolbar is visible or hidden. When set to true, the Toolbar will be hidden; when set to false, the Toolbar will be displayed.
    *	Property type: boolean
    */
    get hideToolbar() {
        return this.nativeElement ? this.nativeElement.hideToolbar : undefined;
    }
    set hideToolbar(value) {
        if (this.nativeElement) {
            this.nativeElement.hideToolbar = value;
        }
    }
    /** Specifies whether the Inline Toolbar is visible. If set to true, the toolbar will be hidden; if false, the toolbar will be displayed.
    *	Property type: boolean
    */
    get hideInlineToolbar() {
        return this.nativeElement ? this.nativeElement.hideInlineToolbar : undefined;
    }
    set hideInlineToolbar(value) {
        if (this.nativeElement) {
            this.nativeElement.hideInlineToolbar = value;
        }
    }
    /** Specifies the file format for images or videos uploaded from local storage. By default, uploaded files are encoded and stored as base64 strings. This setting allows you to define or change the storage format as needed.
    *	Property type: EditorImageFormat | string
    */
    get imageFormat() {
        return this.nativeElement ? this.nativeElement.imageFormat : undefined;
    }
    set imageFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.imageFormat = value;
        }
    }
    /** Automatically detects and sets the appropriate width for images pasted from the clipboard, ensuring consistent image display and optimal fit within the layout.
    *	Property type: number
    */
    get imagePasteWidth() {
        return this.nativeElement ? this.nativeElement.imagePasteWidth : undefined;
    }
    set imagePasteWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.imagePasteWidth = value;
        }
    }
    /** Automatically detects and sets the appropriate height for an image when it is pasted from the clipboard, ensuring correct aspect ratio and consistent display within the application.
    *	Property type: number
    */
    get imagePasteHeight() {
        return this.nativeElement ? this.nativeElement.imagePasteHeight : undefined;
    }
    set imagePasteHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.imagePasteHeight = value;
        }
    }
    /** Sets the content of the Editor using an HTML string. This method enables you to programmatically insert both plain text and HTML elements, including tags, formatting, and embedded media, directly into the Editor. Existing content will be replaced by the provided HTML. Use this to dynamically update the Editor's contents with custom HTML markup.
    *	Property type: string
    */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        if (this.nativeElement) {
            this.nativeElement.innerHTML = value;
        }
    }
    /** Specifies the horizontal (x) and vertical (y) offset values used to adjust the position of the Inline Toolbar relative to its default placement on the page. This allows for precise positioning by shifting the toolbar along the x and y axes.
    *	Property type: number[]
    */
    get inlineToolbarOffset() {
        return this.nativeElement ? this.nativeElement.inlineToolbarOffset : undefined;
    }
    set inlineToolbarOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.inlineToolbarOffset = value;
        }
    }
    /** Specifies the iframe configuration for the Editor. When enabled, the Editor's content is rendered within an isolated iframe, ensuring separation from the main DOM and preventing style or script conflicts. This option enhances content security and encapsulation. Additionally, it provides a mechanism to inject external resources (such as stylesheets or scripts) directly into the iframe environment if required.
    *	Property type: EditorIframeSettings
    */
    get iframeSettings() {
        return this.nativeElement ? this.nativeElement.iframeSettings : undefined;
    }
    set iframeSettings(value) {
        if (this.nativeElement) {
            this.nativeElement.iframeSettings = value;
        }
    }
    /** Gets or sets the unlockKey, a unique value required to activate or unlock the product’s features. Use this property to provide the unlock key when authorizing access, or retrieve the current unlock key associated with the product.
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
    /** Specifies the current language code used for localization, such as "en" for English or "fr" for French. This property works together with the messages property to display the appropriate localized messages based on the selected language. Use it to get or set the active language for your application's interface.
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
    /** Specifies the maximum number of characters that can be entered within the Editor. Once this limit is reached, users will be unable to input additional characters.
    *	Property type: number
    */
    get maxCharCount() {
        return this.nativeElement ? this.nativeElement.maxCharCount : undefined;
    }
    set maxCharCount(value) {
        if (this.nativeElement) {
            this.nativeElement.maxCharCount = value;
        }
    }
    /** Defines or retrieves an object containing all user-visible strings (such as labels, tooltips, and messages) used by the widget for display purposes and localization. This property works together with the language setting to enable customization and translation of the widget’s interface into different languages. The object allows developers to provide localized string values, ensuring the widget content is appropriately translated for end users.
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
    /** Assigns the specified element to the property †a†, designating it as the form control responsible for submitting the Editor's value. This allows the Editor’s content to be included in form submissions, ensuring its data is sent when the form is submitted.
    *	Property type: string | null
    */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        if (this.nativeElement) {
            this.nativeElement.name = value;
        }
    }
    /** Specifies the format (such as plain text, HTML, or Markdown) in which content will be inserted into the Editor when a user pastes data, ensuring consistent formatting and correct rendering within the editing environment.
    *	Property type: PasteFormat | string
    */
    get pasteFormat() {
        return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
    }
    set pasteFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.pasteFormat = value;
        }
    }
    /** Specifies the placeholder text or element displayed within the Editor when it is empty, guiding users on what to enter or indicating the expected content.
    *	Property type: string
    */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        if (this.nativeElement) {
            this.nativeElement.placeholder = value;
        }
    }
    /** Specifies whether activating the clearFormat toolbar action should also remove any inline CSS styles (such as style attributes) applied to the currently selected node. When enabled, this option ensures that in addition to removing formatting tags (like &lt;b&gt;, &lt;i&gt;, etc.), all custom inline styles will be cleared from the selected content.
    *	Property type: boolean
    */
    get removeStylesOnClearFormat() {
        return this.nativeElement ? this.nativeElement.removeStylesOnClearFormat : undefined;
    }
    set removeStylesOnClearFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.removeStylesOnClearFormat = value;
        }
    }
    /** Specifies whether the Editor's content is required. If this option is enabled and the Editor is left empty, a notification will be displayed indicating that the content cannot be empty and must be provided before proceeding.
    *	Property type: boolean
    */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        if (this.nativeElement) {
            this.nativeElement.required = value;
        }
    }
    /** Sets or retrieves a value that specifies whether the element's text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. This property ensures that the element displays its content in a manner appropriate for RTL locale support.
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
    /** Indicates whether the value is sanitized to protect against Cross-Site Scripting (XSS) attacks. When enabled, any potentially malicious scripts, inline event handlers, or other XSS vulnerabilities are automatically removed from the HTML content entered in the Editor, ensuring only safe and clean HTML is allowed.
    *	Property type: boolean
    */
    get sanitized() {
        return this.nativeElement ? this.nativeElement.sanitized : undefined;
    }
    set sanitized(value) {
        if (this.nativeElement) {
            this.nativeElement.sanitized = value;
        }
    }
    /** Controls the visibility of the character counter. When enabled, the counter appears in the bottom right corner of the input field. If a maxCharCount value is set, the counter changes color to visually warn the user as they approach the character limit:- When the content length reaches 70% or more of the maximum, the counter displays a warning color.- At 90% or more of the maximum, the counter switches to a more prominent warning color, indicating that the limit is nearly reached.- Once the character count reaches the maximum limit, further text input is prevented.
    *	Property type: boolean
    */
    get showCharCount() {
        return this.nativeElement ? this.nativeElement.showCharCount : undefined;
    }
    set showCharCount(value) {
        if (this.nativeElement) {
            this.nativeElement.showCharCount = value;
        }
    }
    /** Specifies if the editor enables spell checking, allowing the identification and highlighting of spelling errors within the text. If set to true, the editor will actively check and mark misspelled words as the user types. If set to false, spell checking functionality will be disabled.
    *	Property type: boolean
    */
    get spellCheck() {
        return this.nativeElement ? this.nativeElement.spellCheck : undefined;
    }
    set spellCheck(value) {
        if (this.nativeElement) {
            this.nativeElement.spellCheck = value;
        }
    }
    /** Specifies the time interval, in milliseconds, at which the Source Code and Preview panels are automatically refreshed when Split Mode is active. Adjusting this value controls how frequently the panels update to reflect changes in real-time while Split Mode is enabled.
    *	Property type: number
    */
    get splitModeRefreshTimeout() {
        return this.nativeElement ? this.nativeElement.splitModeRefreshTimeout : undefined;
    }
    set splitModeRefreshTimeout(value) {
        if (this.nativeElement) {
            this.nativeElement.splitModeRefreshTimeout = value;
        }
    }
    /** Defines the list of editor users for the application. Expects an array of user objects, each requiring the following properties:  - ''id'': A unique identifier for the user (string or number).  - ''name'': The display name of the user (string).  Each user object may also include the following optional properties:  - ''color'': A string specifying the user's color (e.g., HEX or CSS color value) for UI highlighting.  - ''image'': A string containing the URL of the user's avatar or profile image.
    *	Property type: any[]
    */
    get users() {
        return this.nativeElement ? this.nativeElement.users : undefined;
    }
    set users(value) {
        if (this.nativeElement) {
            this.nativeElement.users = value;
        }
    }
    /** Activates the editor pages functionality, allowing users to create, edit, and manage custom pages directly within the editor interface.
    *	Property type: boolean
    */
    get enablePages() {
        return this.nativeElement ? this.nativeElement.enablePages : undefined;
    }
    set enablePages(value) {
        if (this.nativeElement) {
            this.nativeElement.enablePages = value;
        }
    }
    /** Defines the editor pages by accepting an array of objects, where each object must include a 'label' property (a string representing the title or name of the page) and an 'innerHTML' property (a string containing the HTML content to be displayed on that page).
    *	Property type: any[]
    */
    get pages() {
        return this.nativeElement ? this.nativeElement.pages : undefined;
    }
    set pages(value) {
        if (this.nativeElement) {
            this.nativeElement.pages = value;
        }
    }
    /** Specifies the URL endpoint used for file uploads. This property directly maps to the 'action' attribute of the upload form, determining where the uploaded data is sent on the server. For example, you can set the 'uploadUrl' property to the path of a server-side script such as a PHP file (e.g., "upload.php") that processes and handles incoming file uploads. Setting this property ensures that files selected by the user are transmitted to the specified server location when the upload form is submitted.
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
    /** Defines or retrieves the URL used for the remove operation. This property corresponds to the form's action attribute and specifies the server endpoint that will handle item removal requests. For example, setting the removeUrl property to the path of a PHP file enables the server-side script to process and execute the removal action when triggered.
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
    /** Specifies the theme to be applied to the element. The selected theme controls the overall visual appearance, including colors, fonts, and styles, ensuring a consistent look and feel throughout the element.
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
    /** 'Provides the configuration for the Toolbar items in the editor.'  The value can be either an array of strings—where each string specifies the name of a default toolbar item—or an array of objects for more advanced configuration and customization.  - 'String Values:'    Each string refers to a toolbar item by its name. Names are case-insensitive.- 'Object Values:'    An object can define a custom toolbar item, or modify/add settings to an existing one.      - The object must include a 'name' property (case-insensitive) to refer to a default toolbar item’s functionality.    - If 'name' is set to "custom", you can define a fully custom toolbar item.    - If the 'name' attribute is missing or invalid, the entry is treated as a separator rather than a toolbar item.'Supported Default Toolbar Items'  Below is a list of default toolbar items supported by the editor, along with their descriptions and types:  - 'SourceCode': Toggles between the HTML source/preview panel and the input panel. *Type: Toggle button*- 'SplitMode': Splits the editor view to show both input and preview panels. *Type: Toggle button*- 'FullScreen': Expands the editor to fill the viewport, overlaying the page content. *Type: Toggle button*- 'Alignment': Controls the alignment (left, center, right, justify) of the selected content. *Type: Dropdown*- 'FontName': Sets the font family of the selected content. *Type: Dropdown*- 'FontSize': Sets the font size of the selected content. *Type: Dropdown*- 'Formats': Changes the format/style of the current selection (e.g., paragraph, heading). *Type: Dropdown*- 'TableRows': Insert or remove table rows in the selected table. *Type: Dropdown*- 'TableColumns': Insert or remove table columns in the selected table. *Type: Dropdown*- 'TableVAlign': Sets vertical alignment of a selected table cell. *Type: Dropdown*- 'TableStyle': Applies additional styling to the selected table. *Type: Dropdown*- 'BackgroundColor': Changes the background color of the current selection. *Type: Color input*- 'FontColor': Changes the font color of the current selection. *Type: Color input*- 'Bold': Toggles bold for the selected text. *Type: Button*- 'Italic': Toggles italic for the selected text. *Type: Button*- 'Underline': Toggles underline for the selected text. *Type: Button*- 'Strikethrough': Toggles strikethrough for the selected text. *Type: Button*- 'Delete': Deletes the current selection. *Type: Button*- 'Undo': Reverts the last operation. *Type: Button*- 'Redo': Redoes the previously undone operation. *Type: Button*- 'Indent': Increases the indentation of the current selection. *Type: Button*- 'Outdent': Decreases the indentation of the current selection. *Type: Button*- 'OpenLink': Opens the hyperlink of the current selection. *Type: Button*- 'EditLink', 'CreateLink', 'Hyperlink': Creates, edits, or triggers a dialog for hyperlink management. *Type: Button*- 'RemoveLink': Removes a hyperlink from the selected text. *Type: Button*- 'Cut': Cuts the selected content. *Type: Button*- 'Copy': Copies the selected content. *Type: Button*- 'Paste': Pastes from the clipboard.      - *Type: Button*      - *Type: Dropdown* (when the "advanced" property is set to true)- 'Image': Opens a dialog to insert or edit an image. *Type: Button*- 'Video': Opens a dialog to insert or edit a video. *Type: Button*- 'LowerCase': Converts current selection to lowercase letters. *Type: Button*- 'UpperCase': Converts current selection to uppercase letters. *Type: Button*- 'Print': Opens the browser's print preview window. *Type: Button*- 'Caption': Inserts or removes a caption in the selected table. *Type: Button*- 'ClearFormat': Removes all formatting from the current selection. *Type: Button*- 'Table': Opens a dialog to insert a new table. *Type: Button*- 'TableHeader': Adds or removes a header row in the selected table. *Type: Button*- 'OrderedList': Inserts or removes an ordered (numbered) list. *Type: Button*- 'UnorderedList': Inserts or removes a bulleted list. *Type: Button*- 'Subscript': Formats the selected text as subscript. *Type: Button*- 'Superscript': Formats the selected text as superscript. *Type: Button*- 'FindAndReplace': Opens a dialog to find and replace text in the editor. *Type: Button*'Note:' Separators between toolbar items can be added by using an object without a valid 'name' property.---'inlineToolbarItems'  - This property is applicable only for the following toolbar items: 'table', 'image', and 'hyperlink'.- Accepts the same value types and structure as 'toolbarItems'.- The specified items will be displayed in an inline floating toolbar when any of these elements is selected in the editor.---'Summary of Usage Examples:''''json[  "Bold",  "Italic",  { "name": "FontSize", "options": ["Small", "Medium", "Large"] },  {},  { "name": "custom", "label": "Custom Action", "icon": "..." }]'''- The above would provide bold and italic buttons, a dropdown with custom font size options, a separator, and a custom toolbar item.---This configuration enables full customization of the editor’s toolbar to suit different user requirements, offering both default and extendable options.
    *	Property type: ToolbarItem[]
    */
    get toolbarItems() {
        return this.nativeElement ? this.nativeElement.toolbarItems : undefined;
    }
    set toolbarItems(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbarItems = value;
        }
    }
    /** Specifies the display style of the Editor’s main toolbar. You can choose between "Ribbon" mode, which presents the toolbar as a horizontal panel with grouped command icons similar to modern office applications, or "Menu" mode, which organizes commands in drop-down menus for a more compact, traditional interface. This setting controls how users interact with the Editor’s primary tools and functions.
    *	Property type: ToolbarMode | string
    */
    get toolbarMode() {
        return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
    }
    set toolbarMode(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbarMode = value;
        }
    }
    /** Enables customization of the SingleLineRibbon's appearance by allowing you to modify the arrangement and selection of group items, as well as reorder the groups themselves. This provides flexibility in tailoring the ribbon layout to better suit your application's specific needs.
    *	Property type: { name: string, groups: { name: string, items: string[] }[] }[]
    */
    get toolbarRibbonConfig() {
        return this.nativeElement ? this.nativeElement.toolbarRibbonConfig : undefined;
    }
    set toolbarRibbonConfig(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbarRibbonConfig = value;
        }
    }
    /** Specifies the format (such as plain text, HTML, or Markdown) that will be applied to content when it is pasted into the Editor. This setting controls how the pasted data is interpreted and ensures that it is correctly displayed within the Editor environment.
    *	Property type: ToolbarViewMode | string
    */
    get toolbarViewMode() {
        return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
    }
    set toolbarViewMode(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbarViewMode = value;
        }
    }
    /** Fixes the Toolbar to the top of the browser window, ensuring it remains visible at all times, even as the user scrolls through the page content.
    *	Property type: boolean
    */
    get toolbarSticky() {
        return this.nativeElement ? this.nativeElement.toolbarSticky : undefined;
    }
    set toolbarSticky(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbarSticky = value;
        }
    }
    /** If set to true, this property prevents the element from receiving keyboard or programmatic focus, making it impossible for users to interact with it using the keyboard or assistive technologies.
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
    /** Provides methods to retrieve or update the current content within the Editor. Use this property to access the existing value or assign a new value to the Editor programmatically.
    *	Property type: string
    */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        if (this.nativeElement) {
            this.nativeElement.value = value;
        }
    }
    /** A customizable function that allows you to fully modify the appearance and behavior of the Editor dialog used for inserting or editing tables, images, videos, and hyperlinks. The function receives two arguments:- 'target': The dialog element instance that is about to be displayed, representing the specific editor dialog (e.g., Table, Image, Video, or Hyperlink dialog) being opened.- 'item': The toolbar item object that triggered the opening of the dialog, allowing you to access information about the source of the dialog request or customize its settings based on the initiating toolbar action.Use this function to tailor the dialog's UI elements, default values, event handlers, or any other properties, providing a flexible way to match the dialog experience to your application's needs.
    *	Property type: any
    */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.windowCustomizationFunction = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["ai", "animation", "autoFormatting", "autoLoad", "autoSave", "autoSaveInterval", "charCountFormatFunction", "autoUpload", "contentFiltering", "content_css", "contextMenu", "contextMenuDataSource", "dataExport", "disabled", "disableEditing", "disableSearchBar", "editMode", "enableHtmlEncode", "enableTabKey", "findAndReplaceTimeout", "hideToolbar", "hideInlineToolbar", "imageFormat", "imagePasteWidth", "imagePasteHeight", "innerHTML", "inlineToolbarOffset", "iframeSettings", "unlockKey", "locale", "maxCharCount", "messages", "name", "pasteFormat", "placeholder", "removeStylesOnClearFormat", "required", "rightToLeft", "sanitized", "showCharCount", "spellCheck", "splitModeRefreshTimeout", "users", "enablePages", "pages", "uploadUrl", "removeUrl", "theme", "toolbarItems", "toolbarMode", "toolbarRibbonConfig", "toolbarViewMode", "toolbarSticky", "unfocusable", "value", "windowCustomizationFunction"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onChanging", "onActionStart", "onActionEnd", "onContextMenuItemClick", "onContextMenuOpen", "onContextMenuOpening", "onContextMenuClose", "onContextMenuClosing", "onResizeStart", "onResizeEnd", "onInlineToolbarOpen", "onInlineToolbarOpening", "onInlineToolbarClose", "onInlineToolbarClosing", "onDropDownToolbarOpen", "onDropDownToolbarOpening", "onDropDownToolbarClose", "onDropDownToolbarClosing", "onDialogOpen", "onDialogOpening", "onDialogClose", "onDialogClosing", "onImageUploadSuccess", "onImageUploadFailed", "onToobarItemClick", "onMessageClose", "onMessageOpen", "onCreate", "onReady"];
    }
    /** Integrates a custom item into the editor’s toolbar. **Example Usage:**```jseditor.addToolbarItem({    name: 'customButton2',         // Unique identifier for the toolbar item    width: 100,                    // Width of the toolbar item in pixels    template: 'Button2' // Custom HTML template defining the toolbar item's appearance and content});```**Description:**  This method allows you to add a new, customizable button or element to the editor’s toolbar. You specify a unique name, the width, and provide an HTML template for the item’s content. This enables the creation of tailored toolbar controls to enhance your editor’s functionality according to your application’s needs.
    * @param {any} itemName. The toolbar item to be added
    */
    addToolbarItem(itemName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addToolbarItem(itemName);
            });
        }
    }
    /** Applies a blur effect to the content area of the Editor, visually obscuring text and elements to reduce readability while maintaining overall layout and structure. This feature is useful for masking sensitive information or creating a focus effect within the Editor interface.
    */
    blur() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
            });
        }
    }
    /** Removes all text and formatting from the Editor, resetting its content to an empty state.
    */
    clearContent() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearContent();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearContent();
            });
        }
    }
    /** Collapse the toolbar when the toolbarViewMode property is set to 'toggle'. This ensures that the toolbar is hidden or shown based on the toggle state, allowing for a dynamic and responsive user interface.
    */
    collapseToolbar() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseToolbar();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseToolbar();
            });
        }
    }
    /** Prevents user interaction with the specified Toolbar item, making it inactive and visually indicating that it is disabled. The item remains visible but cannot be clicked or selected until re-enabled.
    * @param {string} itemName. The name of the toolbar item to disable.
    */
    disableToolbarItem(itemName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.disableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.disableToolbarItem(itemName);
            });
        }
    }
    /** Expands the Toolbar only when the toolbarViewMode property is set to 'toggle'. When this mode is active, the Toolbar will automatically display its full set of options and controls as specified. If toolbarViewMode is set to another value, this expansion behavior will not occur.
    */
    expandToolbar() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandToolbar();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandToolbar();
            });
        }
    }
    /** Restores the functionality of a Toolbar item that was previously disabled, allowing users to click or interact with it again. This action visually updates the item to indicate it is active and accessible within the Toolbar interface.
    * @param {string} itemName. The name of the toolbar item to enable.
    */
    enableToolbarItem(itemName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.enableToolbarItem(itemName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.enableToolbarItem(itemName);
            });
        }
    }
    /** Enhances the clarity, consistency, and completeness of the description:---Executes a command using the native execCommand method to modify the contents or formatting of the editor. This method returns true if the command executes successfully or false otherwise. You can use this function to apply a wide range of editing and formatting commands to the currently selected content, or at the current cursor position.Supported commands include:      bold: Toggles bold formatting on the selected text.    Example: editor.executeCommand('bold');        italic: Toggles italic formatting on the selected text.    Example: editor.executeCommand('italic');        underline: Toggles underline formatting on the selected text.    Example: editor.executeCommand('underline');        strikeThrough: Toggles strikethrough formatting on the selected text.    Example: editor.executeCommand('strikeThrough');        superscript: Sets the selected text as superscript.    Example: editor.executeCommand('superscript');        subscript: Sets the selected text as subscript.    Example: editor.executeCommand('subscript');        uppercase: Converts the selected text to uppercase.    Example: editor.executeCommand('uppercase');        lowercase: Converts the selected text to lowercase.    Example: editor.executeCommand('lowercase');        foreColor: Changes the font color of the selected text.    Example: editor.executeCommand('foreColor', '#000000');        fontName: Changes the font family of the selected text.    Example: editor.executeCommand('fontName', 'Arial');        fontSize: Changes the font size of the selected text.    Example: editor.executeCommand('fontSize', '15px');        hiliteColor: Changes the background color (highlight) of the selected text.    Example: editor.executeCommand('hiliteColor', '#FFFF00');        justifyCenter: Aligns the selected content to the center.    Example: editor.executeCommand('justifyCenter');        justifyFull: Justifies the selected content.    Example: editor.executeCommand('justifyFull');        justifyLeft: Aligns the selected content to the left.    Example: editor.executeCommand('justifyLeft');        justifyRight: Aligns the selected content to the right.    Example: editor.executeCommand('justifyRight');        undo: Undoes the last editing operation.    Example: editor.executeCommand('undo');        redo: Redoes the previously undone operation.    Example: editor.executeCommand('redo');        createLink: Inserts a hyperlink at the current selection. Accepts an object with text, url, and title properties.    Example: editor.executeCommand('createLink', { text: 'Link', url: 'https://example.com', title: 'Example Link' });        indent: Increases the indent level of the selected content.    Example: editor.executeCommand('indent');        outdent: Decreases the indent level of the selected content.    Example: editor.executeCommand('outdent');        insertHTML: Inserts an HTML string at the current cursor position.    Example: editor.executeCommand('insertHTML', '&lt;p&gt;Text&lt;/p&gt;');        insertOrderedList: Inserts an ordered (numbered) list.    Example: editor.executeCommand('insertOrderedList');        insertUnorderedList: Inserts an unordered (bulleted) list.    Example: editor.executeCommand('insertUnorderedList');        removeFormat: Removes all formatting from the selected text.    Example: editor.executeCommand('removeFormat');        insertText: Inserts plain text at the current cursor position.    Example: editor.executeCommand('insertText', 'Some text to insert');        insertImage: Inserts an image at the current cursor position. Accepts an object with a url property.    Example: editor.executeCommand('insertImage', { url: 'https://www.example.com/image.jpg' });  Note: Some commands may not be fully supported in all browsers due to the deprecated status of execCommand. Always test your implementation for compatibility with your target browsers.
    * @param {string} commandName. The name of the command to execute.
    * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
    * @returns {boolean}
  */
    executeCommand(commandName, value) {
        const result = this.nativeElement.executeCommand(commandName, value);
        return result;
    }
    /** Sets the input focus to the Editor component, enabling users to interact with and edit its content directly (e.g., by typing or using keyboard shortcuts). This action ensures that keyboard events and commands are directed to the Editor.
    */
    focus() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }
    /** Returns the total number of characters currently present within the Editor's content, including spaces and special characters.
    * @returns {number}
  */
    getCharCount() {
        const result = this.nativeElement.getCharCount();
        return result;
    }
    /** Returns the current selection range within the editor. By default, this method returns an object of type Range, which represents the start and end positions of the selection as DOM nodes and offsets. However, if the editMode property is set to 'markdown', the method instead returns a plain object containing the numerical start and end indexes of the selection within the raw text content. This allows for consistent selection handling in both WYSIWYG and markdown editing modes.
    * @returns {any}
  */
    getSelectionRange() {
        const result = this.nativeElement.getSelectionRange();
        return result;
    }
    /** Returns the current content of the Editor as an HTML string. If editMode is set to 'markdown', the raw Markdown input is automatically parsed and converted to HTML before being returned. In all modes, the result is a well-formed HTML representation of the Editor's content, suitable for rendering in web pages or for further processing.
    * @returns {string}
  */
    getHTML() {
        const result = this.nativeElement.getHTML();
        return result;
    }
    /** Returns the current contents of the Editor component as a plain text string, excluding any formatting or markup. This allows you to retrieve only the raw textual data entered by the user.
    * @returns {string}
  */
    getText() {
        const result = this.nativeElement.getText();
        return result;
    }
    /** Conceals a specified message when an identifier is provided; if no identifier is given, all messages will be hidden.
    * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
    */
    hideMessage(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideMessage(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideMessage(item);
            });
        }
    }
    /** Conceals or removes the most recently displayed message from view on the user interface, ensuring it is no longer visible to the user.
    */
    hideLastMessage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideLastMessage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideLastMessage();
            });
        }
    }
    /** Inserts a new custom Toolbar item into the editor.  For example, you can add a button with the following code:```javascripteditor.insertToolbarItem({  name: 'customButton2',                    // Unique identifier for the toolbar item  width: 100,                               // Specifies the width of the toolbar item in pixels  template: 'Button2' // The HTML template that defines the toolbar item's appearance and functionality});```This method allows you to extend the editor’s toolbar by specifying a unique name for the item, its display width, and a custom HTML template, such as a button or other UI component. This makes it easy to add interactive or specialized controls directly to your editor's toolbar.
    * @param {any} itemName. The toolbar item to be added
    * @param {number} index. The toolbar item's index
    */
    insertToolbarItem(itemName, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertToolbarItem(itemName, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertToolbarItem(itemName, index);
            });
        }
    }
    /** Displays a customizable message within the Editor interface, allowing users to present important information, instructions, or notifications directly inside the editing environment.
    * @param {string} message. The text message to be displayed.
    * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
    * @returns {HTMLElement | undefined}
  */
    showMessage(message, settings) {
        const result = this.nativeElement.showMessage(message, settings);
        return result;
    }
    /** Highlights and selects all text currently displayed within the Editor's content area, allowing users to easily copy, cut, or replace the selected text.
    */
    selectAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAll();
            });
        }
    }
    /** Enhancement:"Selects a specified range of text within the Editor based on provided start and end indexes. This method locates the DOM nodes containing the targeted text and creates selection ranges accordingly. Note that only Firefox currently supports selecting multiple, non-contiguous ranges; in other browsers, only the first corresponding node or range will be selected. If the editor is operating in 'html' editMode, the entire content is treated as a single node. As a result, the desired text range will be reliably selected across all browsers in this mode."
    * @param {number} startIndex. The start index to select from.
    * @param {number} endIndex. The end index to select to.
    */
    selectRange(startIndex, endIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(startIndex, endIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(startIndex, endIndex);
            });
        }
    }
    /** Removes all previously saved states associated with the current Editor's ID from the local storage. This ensures that any stored data related to this specific Editor instance is deleted, allowing for a fresh start or preventing data conflicts.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** Persists the Editor’s current state to the browser’s local storage, allowing users to restore their work in future sessions. Note: An id property must be assigned to the Editor instance to uniquely identify and manage its saved data.
    */
    saveState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }
    /** Restores the most recently saved state of the Editor from the browser’s local storage. To identify and retrieve the correct data, an id property must be assigned to the Editor instance. If no saved state exists for the specified id, the Editor will load with its default settings.
    */
    loadState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState();
            });
        }
    }
    /** Enables Split Mode in the Editor. When Split Mode is active, both the HTML/Markdown editing panel and the Source Code/Preview panel are displayed side by side, allowing users to simultaneously view and edit the content along with its rendered output or source code. This mode enhances workflow by providing real-time feedback and easier navigation between editing and previewing.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    splitMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.splitMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.splitMode(value);
            });
        }
    }
    /** Switches the Editor between Source Code and Preview modes. When activated, this mode displays the HTML view panel, allowing users to directly edit or review the underlying HTML code.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    previewMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.previewMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.previewMode(value);
            });
        }
    }
    /** Removes a specified item from the Toolbar by its index.  For example, editor.removeToolbarItem(0) will remove the first item in the Toolbar.  Use this method to dynamically update the Toolbar based on user interaction or application state.
    * @param {number} index. The toolbar item's index
    */
    removeToolbarItem(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeToolbarItem(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeToolbarItem(index);
            });
        }
    }
    /** Enables Full Screen Mode for the Editor. When activated, the Editor expands to cover the entire viewport, overlaying all other page content and providing a distraction-free editing environment.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    fullScreenMode(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.fullScreenMode(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.fullScreenMode(value);
            });
        }
    }
    /** Exports the content of the Editor in your chosen format. Currently supported export formats include HTML, Markdown, and PDF. This allows you to save or share your work in the format that best suits your needs.
    * @param {string} dataFormat. The expected file format.
    * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
    */
    exportData(dataFormat, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }
    /** Allows users to import the contents of a file directly into the Editor. Currently, only plain text (.txt) and HTML (.html) file formats are supported. Upon import, the file’s contents will be automatically loaded and displayed within the Editor for further editing or review.
    * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
    * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
    */
    importData(source, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.importData(source, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.importData(source, settings);
            });
        }
    }
    /** Opens the browser’s Print Preview dialog, allowing users to view and print the current content displayed within the Editor. This feature provides a formatted preview of the Editor's contents as they will appear on the printed page before finalizing the print command.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** Enables the modification of settings for a specified toolbar item. This method returns true if the update is applied successfully, indicating the toolbar item's settings were changed as requested. If the update fails, the method returns false.
    * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
    * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
    * @returns {boolean | undefined}
  */
    updateToolbarItem(name, settings) {
        const result = this.nativeElement.updateToolbarItem(name, settings);
        return result;
    }
    /** Sets the locale of a component.
    * @param {string} locale. The locale abbreviation. For example: 'de'.
    * @param {any} messages?. Object containing the locale messages.
    */
    setLocale(locale, messages) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setLocale(locale, messages);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setLocale(locale, messages);
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
            Smart.Render();
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
        return (React.createElement("smart-editor", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Editor, Smart, Editor as default };
