import React from "react";
import { EditorProperties } from "./../index";
import { Animation, EditorContextMenu, EditMode, EditorImageFormat, PasteFormat, ToolbarMode, ToolbarViewMode, EditorContentFiltering, EditorDataExport, EditorIframeSettings, ToolbarItem } from './../index';
export { EditorProperties } from "./../index";
export { Animation, EditorContentFilteringAttributeFilterMode, EditorContentFilteringTagFilterMode, EditorContentFilteringStyleAttributeFilterMode, EditorContextMenu, EditMode, EditorImageFormat, PasteFormat, ToolbarMode, ToolbarViewMode, EditorContentFiltering, EditorDataExport, EditorIframeSettings, ToolbarItem, ToolbarItemEditor } from './../index';
export declare const Smart: any;
export interface EditorProps extends EditorProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onActionStart?: ((event?: Event) => void) | undefined;
    onActionEnd?: ((event?: Event) => void) | undefined;
    onContextMenuItemClick?: ((event?: Event) => void) | undefined;
    onContextMenuOpen?: ((event?: Event) => void) | undefined;
    onContextMenuOpening?: ((event?: Event) => void) | undefined;
    onContextMenuClose?: ((event?: Event) => void) | undefined;
    onContextMenuClosing?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onInlineToolbarOpen?: ((event?: Event) => void) | undefined;
    onInlineToolbarOpening?: ((event?: Event) => void) | undefined;
    onInlineToolbarClose?: ((event?: Event) => void) | undefined;
    onInlineToolbarClosing?: ((event?: Event) => void) | undefined;
    onDropDownToolbarOpen?: ((event?: Event) => void) | undefined;
    onDropDownToolbarOpening?: ((event?: Event) => void) | undefined;
    onDropDownToolbarClose?: ((event?: Event) => void) | undefined;
    onDropDownToolbarClosing?: ((event?: Event) => void) | undefined;
    onDialogOpen?: ((event?: Event) => void) | undefined;
    onDialogOpening?: ((event?: Event) => void) | undefined;
    onDialogClose?: ((event?: Event) => void) | undefined;
    onDialogClosing?: ((event?: Event) => void) | undefined;
    onImageUploadSuccess?: ((event?: Event) => void) | undefined;
    onImageUploadFailed?: ((event?: Event) => void) | undefined;
    onToobarItemClick?: ((event?: Event) => void) | undefined;
    onMessageClose?: ((event?: Event) => void) | undefined;
    onMessageOpen?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
*/
export declare class Editor extends React.Component<React.HTMLAttributes<Element> & EditorProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state.
    *	Property type: boolean
    */
    get autoLoad(): boolean;
    set autoLoad(value: boolean);
    /** Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state.
    *	Property type: boolean
    */
    get autoSave(): boolean;
    set autoSave(value: boolean);
    /** The property that determines the interval to automatically save the state of the Editor when the autoSave property is set.
    *	Property type: number
    */
    get autoSaveInterval(): number;
    set autoSaveInterval(value: number);
    /** A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor.
    *	Property type: any
    */
    get charCountFormatFunction(): any;
    set charCountFormatFunction(value: any);
    /** Determines the content filtering settings.
    *	Property type: EditorContentFiltering
    */
    get contentFiltering(): EditorContentFiltering;
    set contentFiltering(value: EditorContentFiltering);
    /** Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor.
    *	Property type: EditorContextMenu | string
    */
    get contextMenu(): EditorContextMenu | string;
    set contextMenu(value: EditorContextMenu | string);
    /** Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu.
    *	Property type: string[] | { label: string, value: 'string' }[] | Function | null
    */
    get contextMenuDataSource(): string[] | {
        label: string;
        value: 'string';
    }[] | Function | null;
    set contextMenuDataSource(value: string[] | {
        label: string;
        value: 'string';
    }[] | Function | null);
    /** Sets the Editor's Data Export options.
    *	Property type: EditorDataExport
    */
    get dataExport(): EditorDataExport;
    set dataExport(value: EditorDataExport);
    /** Enables or disables the Editor.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Disables content editing inside Editor.
    *	Property type: boolean
    */
    get disableEditing(): boolean;
    set disableEditing(value: boolean);
    /** Disables the Quick Search Bar.
    *	Property type: boolean
    */
    get disableSearchBar(): boolean;
    set disableSearchBar(value: boolean);
    /** Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode.
    *	Property type: EditMode | string
    */
    get editMode(): EditMode | string;
    set editMode(value: EditMode | string);
    /** Determines whether the value returned from getHTML method and Source Code view are encoded or not.
    *	Property type: boolean
    */
    get enableHtmlEncode(): boolean;
    set enableHtmlEncode(value: boolean);
    /** Determines whether the Tab key can insert tab chars inside the Editor or change focus (default)
    *	Property type: boolean
    */
    get enableTabKey(): boolean;
    set enableTabKey(value: boolean);
    /** Determines the time interval between results for the find and replace and search bar features.
    *	Property type: number
    */
    get findAndReplaceTimeout(): number;
    set findAndReplaceTimeout(value: number);
    /** Determines whether the Toolbar is hidden or not.
    *	Property type: boolean
    */
    get hideToolbar(): boolean;
    set hideToolbar(value: boolean);
    /** Determines whether the Inline Toolbar is hidden or not.
    *	Property type: boolean
    */
    get hideInlineToolbar(): boolean;
    set hideInlineToolbar(value: boolean);
    /** Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64.
    *	Property type: EditorImageFormat | string
    */
    get imageFormat(): EditorImageFormat | string;
    set imageFormat(value: EditorImageFormat | string);
    /** Sets the content of the Editor as HTML. Allows to insert text and HTML.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Defines an offset(x,y) for the Inline Toolbar positioning on the page.
    *	Property type: number[]
    */
    get inlineToolbarOffset(): number[];
    set inlineToolbarOffset(value: number[]);
    /** Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed.
    *	Property type: EditorIframeSettings
    */
    get iframeSettings(): EditorIframeSettings;
    set iframeSettings(value: EditorIframeSettings);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets a limit on the number of chars inside the Editor.
    *	Property type: number
    */
    get maxCharCount(): number;
    set maxCharCount(value: number);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets a to the element which can be used to submit the value of the Editor via a form.
    *	Property type: string | null
    */
    get name(): string | null;
    set name(value: string | null);
    /** Determines the format of the content that will be pasted inside the Editor.
    *	Property type: PasteFormat | string
    */
    get pasteFormat(): PasteFormat | string;
    set pasteFormat(value: PasteFormat | string);
    /** Determines the placeholder that will be shown when there's no content inside the Editor.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node.
    *	Property type: boolean
    */
    get removeStylesOnClearFormat(): boolean;
    set removeStylesOnClearFormat(value: boolean);
    /** Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content.
    *	Property type: boolean
    */
    get sanitized(): boolean;
    set sanitized(value: boolean);
    /** Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed.
    *	Property type: boolean
    */
    get showCharCount(): boolean;
    set showCharCount(value: boolean);
    /** Determines whether the editor may be checked for spelling errors.
    *	Property type: boolean
    */
    get spellCheck(): boolean;
    set spellCheck(value: boolean);
    /** Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled.
    *	Property type: number
    */
    get splitModeRefreshTimeout(): number;
    set splitModeRefreshTimeout(value: number);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead.
    *	Property type: ToolbarItem[]
    */
    get toolbarItems(): ToolbarItem[];
    set toolbarItems(value: ToolbarItem[]);
    /** Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu.
    *	Property type: ToolbarMode | string
    */
    get toolbarMode(): ToolbarMode | string;
    set toolbarMode(value: ToolbarMode | string);
    /** Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups.
    *	Property type: { name: string, groups: { name: string, items: string[] }[] }[]
    */
    get toolbarRibbonConfig(): {
        name: string;
        groups: {
            name: string;
            items: string[];
        }[];
    }[];
    set toolbarRibbonConfig(value: {
        name: string;
        groups: {
            name: string;
            items: string[];
        }[];
    }[]);
    /** Determines the format of the content that will be pasted inside the Editor.
    *	Property type: ToolbarViewMode | string
    */
    get toolbarViewMode(): ToolbarViewMode | string;
    set toolbarViewMode(value: ToolbarViewMode | string);
    /** Sticks the Toolbar to the top of the window and stays there while scrolling.
    *	Property type: boolean
    */
    get toolbarSticky(): boolean;
    set toolbarSticky(value: boolean);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value of the Editor.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog.
    *	Property type: any
    */
    get windowCustomizationFunction(): any;
    set windowCustomizationFunction(value: any);
    get properties(): string[];
    /**  This event is triggered on blur if the content is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before the change.
    *   value - The new value after the change.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after user input to indicate that the content is changed via user interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before the input change.
    *   value - The new value after the input change.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
    *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
    *   name - The name of the action.
    */
    onActionStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Toolbar action has ended.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	name)
    *   name - The name of the action.
    */
    onActionEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Context menu item has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
    *   originalEvent - The original click event.
    *   value - The value of the item.
    */
    onContextMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Context Menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onContextMenuOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Context Menu is opening. The opening operation can be canceled via event.preventDefault().
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation.
    */
    onContextMenuOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Context Menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onContextMenuClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Context Menu is closing. The closing operation can be canceled via event.preventDefault().
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation.
    */
    onContextMenuClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an image/table/video resizing has started.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an image/table/video resizing has ended.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The element that is resized (image/table or video).
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the inline Toolbar is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onInlineToolbarOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the inline Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation.
    */
    onInlineToolbarOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the inline Toolbar is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onInlineToolbarClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the inline Toolbar is closing.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    */
    onInlineToolbarClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Drop Down Toolbar is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onDropDownToolbarOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Drop Down Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation.
    */
    onDropDownToolbarOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Drop Down Toolbar is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	owner)
    *   target - The toolbar that is the target of the operation.
    *   owner - The tooltip target (the owner of the tooltip).
    */
    onDropDownToolbarClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Drop Down Toolbar is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target)
    *   target - The toolbar that is the target of the operation.
    */
    onDropDownToolbarClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered the Dialog Window is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
    *   target - The window that is the target of the operation.
    *   item - The toolbar item is the target of the operation.
    */
    onDialogOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
    *   target - The window that is the target of the operation.
    *   item - The toolbar item that is the target of the operation.
    */
    onDialogOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Dialog Window is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
    *   target - The window that is the target of the operation.
    *   item - The toolbar item that is the target of the operation.
    */
    onDialogClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before the Dialog Window is closing. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item)
    *   target - The window that is the target of the operation.
    *   item - The toolbar item that is the target of the operation.
    */
    onDialogClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the uploading of an image/video is successful.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
    *   target - The file upload element that is the target of the operation.
    *   item - The toolbar item that is the target of the operation.
    *   filename - The name of the uploaded file.
    *   type - The type of the uploaded file.
    *   size - The size of the uploaded file.
    *   index - The index of the uploaded file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    *   serverResponse - The response of the remote server.
    */
    onImageUploadSuccess?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the uploading of an image/video is unsuccessful.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	filename, 	type, 	size, 	index, 	status, 	serverResponse)
    *   target - The file upload element that is the target of the operation.
    *   item - The toolbar item that is the target of the operation.
    *   filename - The name of the canceled file.
    *   type - The type of the canceled file.
    *   size - The size of the canceled file.
    *   index - The index of the canceled file.
    *   status - The status of the uploaded file. Whether there was an error or success.
    *   serverResponse - The response of the remote server.
    */
    onImageUploadFailed?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Toolbar item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	originalEvent, 	value)
    *   originalEvent - The original click event.
    *   value - The name of the toolbar item that was clicked.
    */
    onToobarItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a message is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
    *   instance - The toast item that is the target of the operation.
    */
    onMessageClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a message is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	instance)
    *   instance - The toast item that is the target of the operation.
    */
    onMessageOpen?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Blurs the content of the Editor.
    */
    blur(): void;
    /** Clears the content of the Editor.
    */
    clearContent(): void;
    /** Collapse the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    collapseToolbar(): void;
    /** Disables a Toolbar item.
    * @param {string} itemName. The name of the toolbar item to disable.
    */
    disableToolbarItem(itemName: string): void;
    /** Expand the Toolbar if the toolbarViewMode is set to 'toggle'.
    */
    expandToolbar(): void;
    /** Enables a previously disabled Toolbar item.
    * @param {string} itemName. The name of the toolbar item to enable.
    */
    enableToolbarItem(itemName: string): void;
    /** Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});
    * @param {string} commandName. The name of the command to execute.
    * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
    * @returns {boolean}
  */
    executeCommand(commandName: string, value?: string | number): any;
    /** Focuses the content of the Editor.
    */
    focus(): void;
    /** Returns the number of characters inside the Editor's content.
    * @returns {number}
  */
    getCharCount(): any;
    /** Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.
    * @returns {any}
  */
    getSelectionRange(): any;
    /** Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML.
    * @returns {string}
  */
    getHTML(): any;
    /** Returns the content of the Editor as text.
    * @returns {string}
  */
    getText(): any;
    /** Hides a specific message or all messages if no argument is provided.
    * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
    */
    hideMessage(item?: HTMLElement | string | number): void;
    /** Hides the last shown message.
    */
    hideLastMessage(): void;
    /** Shows a custom message inside the Editor.
    * @param {string} message. The text message to be displayed.
    * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
    * @returns {HTMLElement | undefined}
  */
    showMessage(message: string, settings?: any): any;
    /** Selects the text inside Editor's content.
    */
    selectAll(): void;
    /** Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor.
    * @param {number} startIndex. The start index to select from.
    * @param {number} endIndex. The end index to select to.
    */
    selectRange(startIndex: number, endIndex: number): void;
    /** Clears the local storage from previously stored states of the Editor with the current id.
    */
    clearState(): void;
    /** Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
    */
    saveState(): void;
    /** Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
    */
    loadState(): void;
    /** Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    splitMode(value?: boolean): void;
    /** Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    previewMode(value?: boolean): void;
    /** Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
    * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
    */
    fullScreenMode(value?: boolean): void;
    /** Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
    * @param {string} dataFormat. The expected file format.
    * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
    */
    exportData(dataFormat: string, callback?: any): void;
    /** Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
    * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
    * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
    */
    importData(source: any, settings?: any): void;
    /** Opens the Print Preview Panel of the Browser to print Editor's content.
    */
    print(): void;
    /** Allows to update the settings of a single toolbar item. The method returns true if successful.
    * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
    * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
    * @returns {boolean | undefined}
  */
    updateToolbarItem(name: string | number, settings: any): any;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Editor;
