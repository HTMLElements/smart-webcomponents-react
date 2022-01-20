
require('../source/modules/smart.editor');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.editor = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    const Smart = window.Smart;
    /**
     jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
    */
    class Editor extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'Editor' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
        *	Property type: Animation
        */
        get animation() {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        }
        set animation(value) {
            if (this.nativeElement) {
                this.nativeElement.animation = value;
            }
        }
        /** Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state.
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
        /** Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state.
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
        /** The property that determines the interval to automatically save the state of the Editor when the autoSave property is set.
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
        /** A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor.
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
        /** Determines the content filtering settings.
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
        /** Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor.
        *	Property type: EditorContextMenu
        */
        get contextMenu() {
            return this.nativeElement ? this.nativeElement.contextMenu : undefined;
        }
        set contextMenu(value) {
            if (this.nativeElement) {
                this.nativeElement.contextMenu = value;
            }
        }
        /** Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu.
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
        /** Sets the Editor's Data Export options.
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
        /** Enables or disables the Editor.
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
        /** Disables content editing inside Editor.
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
        /** Disables the Quick Search Bar.
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
        /** Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode.
        *	Property type: EditMode
        */
        get editMode() {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        }
        set editMode(value) {
            if (this.nativeElement) {
                this.nativeElement.editMode = value;
            }
        }
        /** Determines whether the value returned from getHTML method and Source Code view are encoded or not.
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
        /** Determines whether the Tab key can insert tab chars inside the Editor or change focus (default)
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
        /** Determines the time interval between results for the find and replace and search bar features.
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
        /** Determines whether the Toolbar is hidden or not.
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
        /** Determines whether the Inline Toolbar is hidden or not.
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
        /** Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64.
        *	Property type: EditorImageFormat
        */
        get imageFormat() {
            return this.nativeElement ? this.nativeElement.imageFormat : undefined;
        }
        set imageFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.imageFormat = value;
            }
        }
        /** Sets the content of the Editor as HTML. Allows to insert text and HTML.
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
        /** Defines an offset(x,y) for the Inline Toolbar positioning on the page.
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
        /** Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed.
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
        /** Sets or gets the language. Used in conjunction with the property messages.
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
        /** Sets a limit on the number of chars inside the Editor.
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
        /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
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
        /** Sets a to the element which can be used to submit the value of the Editor via a form.
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
        /** Determines the format of the content that will be pasted inside the Editor.
        *	Property type: PasteFormat
        */
        get pasteFormat() {
            return this.nativeElement ? this.nativeElement.pasteFormat : undefined;
        }
        set pasteFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.pasteFormat = value;
            }
        }
        /** Determines the placeholder that will be shown when there's no content inside the Editor.
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
        /** Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node.
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
        /** Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty.
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
        /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
        /** Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content.
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
        /** Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed.
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
        /** Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled.
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
        /** Determines the theme. Theme defines the look of the element
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
        /** Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead.
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
        /** Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu.
        *	Property type: ToolbarMode
        */
        get toolbarMode() {
            return this.nativeElement ? this.nativeElement.toolbarMode : undefined;
        }
        set toolbarMode(value) {
            if (this.nativeElement) {
                this.nativeElement.toolbarMode = value;
            }
        }
        /** Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups.
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
        /** Determines the format of the content that will be pasted inside the Editor.
        *	Property type: ToolbarViewMode
        */
        get toolbarViewMode() {
            return this.nativeElement ? this.nativeElement.toolbarViewMode : undefined;
        }
        set toolbarViewMode(value) {
            if (this.nativeElement) {
                this.nativeElement.toolbarViewMode = value;
            }
        }
        /** Sticks the Toolbar to the top of the window and stays there while scrolling.
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
        /** If is set to true, the element cannot be focused.
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
        /** Sets or gets the value of the Editor.
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
        /** A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog.
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
            return ["animation", "autoLoad", "autoSave", "autoSaveInterval", "charCountFormatFunction", "contentFiltering", "contextMenu", "contextMenuDataSource", "dataExport", "disabled", "disableEditing", "disableSearchBar", "editMode", "enableHtmlEncode", "enableTabKey", "findAndReplaceTimeout", "hideToolbar", "hideInlineToolbar", "imageFormat", "innerHTML", "inlineToolbarOffset", "iframeSettings", "locale", "maxCharCount", "messages", "name", "pasteFormat", "placeholder", "removeStylesOnClearFormat", "required", "rightToLeft", "sanitized", "showCharCount", "splitModeRefreshTimeout", "theme", "toolbarItems", "toolbarMode", "toolbarRibbonConfig", "toolbarViewMode", "toolbarSticky", "unfocusable", "value", "windowCustomizationFunction"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onChange", "onChanging", "onActionStart", "onActionEnd", "onContextMenuItemClick", "onContextMenuOpen", "onContextMenuOpening", "onContextMenuClose", "onContextMenuClosing", "onResizeStart", "onResizeEnd", "onInlineToolbarOpen", "onInlineToolbarOpening", "onInlineToolbarClose", "onInlineToolbarClosing", "onDropDownToolbarOpen", "onDropDownToolbarOpening", "onDropDownToolbarClose", "onDropDownToolbarClosing", "onDialogOpen", "onDialogOpening", "onDialogClose", "onDialogClosing", "onImageUploadSuccess", "onImageUploadFailed", "onToobarItemClick", "onMessageClose", "onMessageOpen", "onCreate", "onReady"];
        }
        /** Blurs the content of the Editor.
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
        /** Clears the content of the Editor.
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
        /** Collapse the Toolbar if the toolbarViewMode is set to 'toggle'.
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
        /** Disables a Toolbar item.
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
        /** Expand the Toolbar if the toolbarViewMode is set to 'toggle'.
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
        /** Enables a previously disabled Toolbar item.
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
        /** Executes a command via the native execCommand method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: bold - makes the currently selected content bold. Example: editor.executeCommand('bold');italic - makes the currently selected content italic. Example: editor.executeCommand('italic');undelined - makes the currently selected content underlined. Example: editor.executeCommand('underline');strikeThrough - applies a single line strike through formatting to the currently selected content. Example: editor.executeCommand('strikeThrough');superscript - sets the selected content as superscript. Example: editor.executeCommand('superscript');subscript - sets the selected content as superscript. Example: editor.executeCommand('subscript');uppercase - changes the case of the current selection to upper. Example: editor.executeCommand('uppercase');lowercase - changes the case of the current selection to lower. Example: editor.executeCommand('lowercase');foreColor - changes the font color of the current content selection. Example: editor.executeCommand('foreColor', '#000000');fontName - changes the font name for the selected content. Example: editor.executeCommand('fontName', 'Arial');fontSize - changes the font size of the currently selected content. Example: editor.executeCommand('fontSize', '15px');hiliteColor - changes the background color of current selection. Example: editor.executeCommand('hiliteColor', '#000000');justifyCenter - aligns the content to the center. Example: editor.executeCommand('justifyCenter');justifyFull - aligns the content to be fully justified. Example: editor.executeCommand('justifyFull');justifyLeft - aligns the content to the left. Example: editor.executeCommand('justifyLeft');justifyRight - aligns the content to the right. Example: editor.executeCommand('justifyRight');undo - allows to undo the previous action. Example: editor.executeCommand('undo');redo - allows to redo the previous actions. Example: editor.executeCommand('redo');createLink - creates a hyperlink in the content section of the Editor. Example: editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });indent - indents the content with one level. Example: editor.executeCommand('indent');outdent - outdents the content with one level. Example: editor.executeCommand('outdent');insertHTML - insert an HTML content as string at the current cursor location. Example: editor.executeCommand('insertHTML', 'Text');insertOrderedList - inserts a new numbered list item. Example: editor.executeCommand('insertOrderedList');insertUnorderedList - inserts a new bulleted list item. Example: editor.executeCommand('insertUnorderedList');removeFormat - removes the formatting styles from currently selected text. Example: editor.executeCommand('removeFormat');insertText - inserts a text at the current cursor location. Example: editor.executeCommand('insertText', 'Some text to insert');insertImage - inserts an image at the current cursor location. Example: editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});
        * @param {string} commandName. The name of the command to execute.
        * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
        * @returns {boolean}
      */
        executeCommand(commandName, value) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.executeCommand(commandName, value);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Focuses the content of the Editor.
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
        /** Returns the number of characters inside the Editor's content.
        * @returns {number}
      */
        getCharCount() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getCharCount();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the current selection range. By default the result is an object of type Range, but if the editMode property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection.
        * @returns {any}
      */
        getSelectionRange() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSelectionRange();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the content of the Editor as HTML. When editMode is set to 'markdown' the markdown is parsed and returned as HTML.
        * @returns {string}
      */
        getHTML() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getHTML();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the content of the Editor as text.
        * @returns {string}
      */
        getText() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getText();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Hides a specific message or all messages if no argument is provided.
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
        /** Hides the last shown message.
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
        /** Shows a custom message inside the Editor.
        * @param {string} message. The text message to be displayed.
        * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
        * @returns {HTMLElement | undefined}
      */
        showMessage(message, settings) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.showMessage(message, settings);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Selects the text inside Editor's content.
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
        /** Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' editMode then the expected text will be selected regardless of the browser because there's only one node inside the editor.
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
        /** Clears the local storage from previously stored states of the Editor with the current id.
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
        /** Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
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
        /** Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
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
        /** Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
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
        /** Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
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
        /** Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
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
        /** Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
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
        /** Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
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
        /** Opens the Print Preview Panel of the Browser to print Editor's content.
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
        /** Allows to update the settings of a single toolbar item. The method returns true if successful.
        * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
        * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
        * @returns {boolean | undefined}
      */
        updateToolbarItem(name, settings) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.updateToolbarItem(name, settings);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        componentDidRender(initialize) {
            const that = this;
            const props = {};
            const events = {};
            let styles = null;
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
            }
            for (let prop in props) {
                if (prop === 'class') {
                    const classNames = props[prop].trim().split(' ');
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
                    that.nativeElement[normalizedProp] = props[prop];
                }
            }
            for (let eventName in events) {
                that[eventName] = events[eventName];
                that.nativeElement[eventName.toLowerCase()] = events[eventName];
            }
            if (initialize) {
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
            return (React.createElement("smart-editor", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.Editor = Editor;
    exports.default = Editor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
