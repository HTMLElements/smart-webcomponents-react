
require('../source/modules/smart.window');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
	*/
	class Window extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Window' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Determines whether the 'Add New' tab within the Tabs element is currently visible to the user.  Note: This property is only relevant when used with the TabsWindow component; it does not apply to other components.
	    *	Property type: boolean
	    */
	    get addNewTab() {
	        return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	    }
	    set addNewTab(value) {
	        if (this.nativeElement) {
	            this.nativeElement.addNewTab = value;
	        }
	    }
	    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. If set to any other supported value, animations will be enabled and behave according to the specified mode.
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
	    /** Controls the automatic capitalization behavior for user input as it is entered or edited. This setting specifies whether characters are auto-capitalized (e.g., sentences, words, or all characters) in the input field. Note: This property is only relevant when used with the MultilinePromptWindow component.
	    *	Property type: WindowAutoCapitalize | string
	    */
	    get autoCapitalize() {
	        return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	    }
	    set autoCapitalize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoCapitalize = value;
	        }
	    }
	    /** Specifies whether the element should automatically expand its height to accommodate vertically overflowing input.  Note: This setting only applies to MultilinePromptWindow components.
	    *	Property type: boolean
	    */
	    get autoExpand() {
	        return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	    }
	    set autoExpand(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoExpand = value;
	        }
	    }
	    /** Specifies the text displayed on the 'Cancel' button within the Prompt Window. This label informs users which button will dismiss or close the prompt without taking any action.
	    *	Property type: string
	    */
	    get cancelLabel() {
	        return this.nativeElement ? this.nativeElement.cancelLabel : undefined;
	    }
	    set cancelLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.cancelLabel = value;
	        }
	    }
	    /** Specifies the text that appears on the 'Complete' button within the Progress Window, allowing customization of the button label to better suit user interface requirements.
	    *	Property type: string
	    */
	    get completeLabel() {
	        return this.nativeElement ? this.nativeElement.completeLabel : undefined;
	    }
	    set completeLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.completeLabel = value;
	        }
	    }
	    /** Specifies the text displayed on the 'Confirm' button within the Prompt Window, allowing customization of the button label to suit your application's context.
	    *	Property type: string
	    */
	    get confirmLabel() {
	        return this.nativeElement ? this.nativeElement.confirmLabel : undefined;
	    }
	    set confirmLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.confirmLabel = value;
	        }
	    }
	    /** Indicates whether the window is currently collapsed. When set to true, only the window's header is displayed while the content area is hidden. If false, both the header and the full content of the window are visible.
	    *	Property type: boolean
	    */
	    get collapsed() {
	        return this.nativeElement ? this.nativeElement.collapsed : undefined;
	    }
	    set collapsed(value) {
	        if (this.nativeElement) {
	            this.nativeElement.collapsed = value;
	        }
	    }
	    /** When a modal window is opened, this property specifies whether clicking on the overlay (mask) outside the modal will close the window. Set it to true to allow users to dismiss the modal by clicking the mask, or false to require an explicit action (such as clicking a close button) to close the modal.
	    *	Property type: boolean
	    */
	    get closeOnMaskClick() {
	        return this.nativeElement ? this.nativeElement.closeOnMaskClick : undefined;
	    }
	    set closeOnMaskClick(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeOnMaskClick = value;
	        }
	    }
	    /** Specifies the data source to be loaded into the TabsWindow component. This property is relevant exclusively for the TabsWindow and will not affect other components.
	    *	Property type: {label: string, content: string}[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Controls whether the window is active and visible to the user. When enabled, the window is operational and can be interacted with; when disabled, the window is hidden or inactive, and user interactions are ignored.
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
	    /** Controls whether the window snapping feature is active. When enabled, users can automatically align and resize windows by dragging them to the edges or corners of the screen. Disabling this feature prevents windows from snapping into place during movement.
	    *	Property type: boolean
	    */
	    get disableSnap() {
	        return this.nativeElement ? this.nativeElement.disableSnap : undefined;
	    }
	    set disableSnap(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableSnap = value;
	        }
	    }
	    /** By default, pressing the 'Escape' key will automatically close the window. To prevent the window from closing when 'Escape' is pressed, set this property to true.
	    *	Property type: boolean
	    */
	    get disableEscape() {
	        return this.nativeElement ? this.nativeElement.disableEscape : undefined;
	    }
	    set disableEscape(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableEscape = value;
	        }
	    }
	    /** By default, the window handles certain keyboard inputs such as the arrow keys ('ArrowUp', 'ArrowDown', etc.), 'Escape', and similar keys for scrolling or navigation actions. Set this property to true to disable the window’s default keyboard handling, allowing you to manage these key events manually within your application.
	    *	Property type: boolean
	    */
	    get disableKeyboard() {
	        return this.nativeElement ? this.nativeElement.disableKeyboard : undefined;
	    }
	    set disableKeyboard(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableKeyboard = value;
	        }
	    }
	    /** Specifies the visual presentation of characters entered within the input field. For example, this setting can control whether characters are shown as plain text or masked (such as for password fields). This option applies specifically to the Prompt Window component.
	    *	Property type: WindowDisplayMode | string
	    */
	    get displayMode() {
	        return this.nativeElement ? this.nativeElement.displayMode : undefined;
	    }
	    set displayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMode = value;
	        }
	    }
	    /** ''Applicable to TabsWindow components when they are docked within a DockingLayout Custom Element.This property specifies the valid drop locations for the window—and its tab items—inside the DockingLayout. The property accepts an array of positional values, allowing you to define multiple allowable drop zones.Details:  Positions prefixed with 'layout-' apply to each individual tab item (child element) of the TabsWindow being dragged. These determine where tab items can be dropped within the overall layout, outside their original container.  Other position values (without the 'layout-' prefix) indicate allowed drop positions directly within the hovered target TabsWindow, specifying where the whole window or its tabs can be placed relative to the target window.Notes:  This property is used exclusively by jqxDockingLayout custom elements.  It controls the possible drop targets—both at the window and tab levels—within the DockingLayout environment.Allowed Values:  The array values specify the permitted drop positions. Refer to the documentation for a complete list of supported position strings.
	    *	Property type: WindowDropPosition | string
	    */
	    get dropPosition() {
	        return this.nativeElement ? this.nativeElement.dropPosition : undefined;
	    }
	    set dropPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropPosition = value;
	        }
	    }
	    /** A callback function that specifies how to format the label displayed on the Progress Bar. This function allows customization of the label's content or appearance based on the current progress value.  Note: This property is only applicable to the ProgressWindow component.
	    *	Property type: any
	    */
	    get formatFunction() {
	        return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	    }
	    set formatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatFunction = value;
	        }
	    }
	    /** Specifies the exact placement or alignment of the footer section within the window element, such as positioning it at the bottom, fixed, absolute, or relative to other content. This property controls where the footer appears in relation to the window’s layout.
	    *	Property type: WindowFooterPosition | string
	    */
	    get footerPosition() {
	        return this.nativeElement ? this.nativeElement.footerPosition : undefined;
	    }
	    set footerPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footerPosition = value;
	        }
	    }
	    /** Specifies the custom template used to render the footer section of the Dialog window. If footerTemplate is set to null (the default), the Dialog will not display a footer section. You can provide a template string or a function to customize the appearance and content of the Dialog’s footer.
	    *	Property type: any
	    */
	    get footerTemplate() {
	        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	    }
	    set footerTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footerTemplate = value;
	        }
	    }
	    /** Specifies which buttons will be displayed in the header section, allowing you to control the visibility of header actions for users.
	    *	Property type: string[]
	    */
	    get headerButtons() {
	        return this.nativeElement ? this.nativeElement.headerButtons : undefined;
	    }
	    set headerButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerButtons = value;
	        }
	    }
	    /** Specifies the custom template to be used for rendering the header section of the dialog window. If headerTemplate is set to null (the default value), the dialog will display its standard header layout. By providing a template, you can fully customize the appearance and content of the dialog's header area.
	    *	Property type: any
	    */
	    get headerTemplate() {
	        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	    }
	    set headerTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerTemplate = value;
	        }
	    }
	    /** Specifies the exact placement of the header section within the window element, such as top, bottom, left, or right. This setting controls where the header appears relative to the content of the window.
	    *	Property type: TabPosition | string
	    */
	    get headerPosition() {
	        return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	    }
	    set headerPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerPosition = value;
	        }
	    }
	    /** Displays supplementary helper text beneath the text box, providing users with additional guidance or context. This hint appears only when the text box is focused (i.e., the user is actively typing or has selected the field).  Note: This property is specifically applicable to the Prompt Window component.
	    *	Property type: any
	    */
	    get hint() {
	        return this.nativeElement ? this.nativeElement.hint : undefined;
	    }
	    set hint(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hint = value;
	        }
	    }
	    /** Sets the Progress bar value to the indeterminate state ('null'), activating its loading animation to indicate ongoing progress without a defined endpoint.  Note: This property is only applicable when used within a ProgressWindow component.
	    *	Property type: boolean
	    */
	    get indeterminate() {
	        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	    }
	    set indeterminate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.indeterminate = value;
	        }
	    }
	    /** Specifies the direction in which the Progress Bar fills (e.g., left-to-right, right-to-left, top-to-bottom, or bottom-to-top).  Note: This property is only applicable when used within a ProgressWindow component.
	    *	Property type: boolean
	    */
	    get inverted() {
	        return this.nativeElement ? this.nativeElement.inverted : undefined;
	    }
	    set inverted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inverted = value;
	        }
	    }
	    /** Specifies the text displayed as the window title in the header section, typically shown at the top of the application window or dialog box.
	    *	Property type: string
	    */
	    get label() {
	        return this.nativeElement ? this.nativeElement.label : undefined;
	    }
	    set label(value) {
	        if (this.nativeElement) {
	            this.nativeElement.label = value;
	        }
	    }
	    /** When enabled, the resizing operation updates the element’s size in real time as the user drags its edges, providing immediate visual feedback. By default, this feature is disabled; instead, a highlighter appears around the edges of the window during resizing to indicate the prospective new size, while the element itself resizes only once the operation is complete.
	    *	Property type: boolean
	    */
	    get liveResize() {
	        return this.nativeElement ? this.nativeElement.liveResize : undefined;
	    }
	    set liveResize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.liveResize = value;
	        }
	    }
	    /** Note: This property is relevant only for TabsWindow elements that are utilized within a DockingLayout custom element.This property is exclusively used by jqxDockingLayout to specify ownership of a TabsWindow. It determines which jqxDockingLayout instance the window is associated with. If a TabsWindow is removed from its parent DockingLayout element, this property continues to reference the original docking layout to which it belonged.The property accepts either:  A string representing the id of a jqxDockingLayout present on the page.  An instance of a jqxDockingLayout object.This allows for flexible identification of the owning layout, either by ID or by direct reference to the layout instance.
	    *	Property type: any
	    */
	    get layout() {
	        return this.nativeElement ? this.nativeElement.layout : undefined;
	    }
	    set layout(value) {
	        if (this.nativeElement) {
	            this.nativeElement.layout = value;
	        }
	    }
	    /** Gets or sets the unlockKey, a unique code required to activate or unlock access to the product’s full features or licensed functionality.
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
	    /** Specifies the language to be used for displaying messages. This property can be set or retrieved, and works in conjunction with the messages property to determine which set of localized messages is shown to the user. Changing the language updates the displayed messages accordingly.
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
	    /** Note: This property is only applicable to a TabsWindow when it is docked within a DockingLayout custom element. When enabled, it controls whether the TabsWindow can be resized by the user. If set to true, users will be able to adjust the size of the TabsWindow within the DockingLayout; if set to false, resizing will be disabled and the TabsWindow will have a fixed size.
	    *	Property type: boolean
	    */
	    get locked() {
	        return this.nativeElement ? this.nativeElement.locked : undefined;
	    }
	    set locked(value) {
	        if (this.nativeElement) {
	            this.nativeElement.locked = value;
	        }
	    }
	    /** Callback function used within the localization module, typically invoked when a localization event occurs (e.g., language change, resource load). This callback handles tasks such as updating UI elements or retrieving localized content based on the current language settings.
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
	    /** Indicates whether the window is currently maximized. When set to true, the window expands to fill the entire available viewport, covering all other interface elements and leaving no visible borders or title bars. If false, the window retains its previous size and position. This property can be used to programmatically check or control the window’s maximized state within the application.
	    *	Property type: boolean
	    */
	    get maximized() {
	        return this.nativeElement ? this.nativeElement.maximized : undefined;
	    }
	    set maximized(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maximized = value;
	        }
	    }
	    /** Defines or retrieves an object containing localized strings used throughout the widget’s user interface. This property allows developers to customize the widget’s displayed text for different languages and regions. It is typically used together with the locale property to ensure that the widget adapts its content based on the selected language or regional settings.
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
	    /** Specifies whether the window should function as a modal dialog. When set to true, the window captures user focus and prevents interaction with any other elements on the page until it is closed. This ensures that the user must address or dismiss the modal window before returning to the rest of the content.
	    *	Property type: boolean
	    */
	    get modal() {
	        return this.nativeElement ? this.nativeElement.modal : undefined;
	    }
	    set modal(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modal = value;
	        }
	    }
	    /** For use with TabsWindow when docked within a DockingLayout custom element:  Specifies the maximum size that the TabsWindow component can occupy when it is docked.  For the ProgressWindow component:  Defines the maximum value for the progress bar, allowing users to set the upper limit of the ProgressBar's range.
	    *	Property type: string | number | null
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Applicable to TabsWindow when docked inside a DockingLayout custom element. Specifies the minimum allowed size for the item within the layout, ensuring it does not shrink below this value during resizing operations.Also applies to ProgressWindow, where it lets the user set the minimum value for the ProgressBar, defining the lowest possible progress state that can be represented.
	    *	Property type: string | number | null
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Indicates whether the window is currently minimized. When set to true, the window is reduced to an icon or compact form and positioned (docked) in the bottom left corner of the viewport. If false, the window remains in its normal, active state.
	    *	Property type: boolean
	    */
	    get minimized() {
	        return this.nativeElement ? this.nativeElement.minimized : undefined;
	    }
	    set minimized(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minimized = value;
	        }
	    }
	    /** Specifies or retrieves the maximum number of characters a user is allowed to enter into the input field. This property applies to both Prompt and MultilinePrompt windows. If set, the input will be limited to the defined character count, preventing users from entering more characters than specified.
	    *	Property type: number
	    */
	    get maxLength() {
	        return this.nativeElement ? this.nativeElement.maxLength : undefined;
	    }
	    set maxLength(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxLength = value;
	        }
	    }
	    /** Defines the minimum number of characters a user must enter before the autocomplete feature is activated. This property can be both set (to specify the desired threshold) and retrieved (to check the current threshold).  Note: This setting is only applicable to Prompt and MultilinePrompt windows.
	    *	Property type: number
	    */
	    get minLength() {
	        return this.nativeElement ? this.nativeElement.minLength : undefined;
	    }
	    set minLength(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minLength = value;
	        }
	    }
	    /** Indicates whether the window is currently visible to the user. Returns true if the window is displayed on the screen and can be interacted with, and false if it is hidden or minimized.
	    *	Property type: boolean
	    */
	    get opened() {
	        return this.nativeElement ? this.nativeElement.opened : undefined;
	    }
	    set opened(value) {
	        if (this.nativeElement) {
	            this.nativeElement.opened = value;
	        }
	    }
	    /** Indicates whether the window is pinned. A pinned window cannot be moved (dragged) by the user, but it can still be resized. When set to true, this property disables window dragging while allowing resizing operations.
	    *	Property type: boolean
	    */
	    get pinned() {
	        return this.nativeElement ? this.nativeElement.pinned : undefined;
	    }
	    set pinned(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pinned = value;
	        }
	    }
	    /** Specifies the placeholder text that appears inside the input field before the user enters a value.  Note: This option is only applicable to the Prompt Window component.
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
	    /** Specifies the text label displayed above or alongside the input field within the PromptWindow component. This label helps users understand what information is expected in the input field.
	    *	Property type: string
	    */
	    get promptLabel() {
	        return this.nativeElement ? this.nativeElement.promptLabel : undefined;
	    }
	    set promptLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.promptLabel = value;
	        }
	    }
	    /** If the element has the "readonly" attribute, users cannot modify its value; the field will display data in a non-editable state, though users can still select and copy its contents. This differs from a "disabled" element, as a "readonly" field remains focusable and included in form submissions.
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
	    /** When this option is enabled, a resize handle appears in the bottom-right corner of the window. Users can initiate the resizing operation exclusively by dragging this indicator; resizing from any other window edge or corner is disabled.
	    *	Property type: boolean
	    */
	    get resizeIndicator() {
	        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	    }
	    set resizeIndicator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resizeIndicator = value;
	        }
	    }
	    /** Specifies how the window can be resized by the user.Available resizing modes:  none – Disables all window resizing; the window size is fixed.  vertical – Allows the window to be resized only vertically (top and bottom edges).  horizontal – Allows the window to be resized only horizontally (left and right edges).  both – Enables both horizontal and vertical resizing; the window can be resized in any direction.  top – The window can only be resized by dragging the top edge.  bottom – The window can only be resized by dragging the bottom edge.  left – The window can only be resized by dragging the left edge.  right – The window can only be resized by dragging the right edge.Choose the desired mode to control which edges of the window users can drag to resize, or to prevent resizing entirely.
	    *	Property type: WindowResizeMode | string
	    */
	    get resizeMode() {
	        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	    }
	    set resizeMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resizeMode = value;
	        }
	    }
	    /** Gets or sets a value that determines whether the element’s alignment is configured to support right-to-left (RTL) languages and text direction, such as Arabic or Hebrew. Use this property to ensure proper display and alignment for locales that require RTL font and layout support.
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
	    /** Indicates that the input field is required and must be filled out by the user before the form can be submitted. If left empty, the form submission will be blocked, prompting the user to complete this field.  'Note:' This setting is applicable to the Prompt Window.
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
	    /** Defines the error message displayed when the required attribute is enabled and the user submits the input field without providing a value. This setting only applies to the Prompt Window interface.
	    *	Property type: string
	    */
	    get requiredMessage() {
	        return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
	    }
	    set requiredMessage(value) {
	        if (this.nativeElement) {
	            this.nativeElement.requiredMessage = value;
	        }
	    }
	    /** Specifies whether the input field's content should be automatically highlighted (selected) when the field gains focus.  Note: This setting applies specifically to the Prompt Window component.
	    *	Property type: boolean
	    */
	    get selectAllOnFocus() {
	        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	    }
	    set selectAllOnFocus(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectAllOnFocus = value;
	        }
	    }
	    /** Specifies or retrieves the currently selected tab within the component. This property applies exclusively to the TabsWindow component.
	    *	Property type: number | null
	    */
	    get selectedIndex() {
	        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	    }
	    set selectedIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedIndex = value;
	        }
	    }
	    /** Specifies how the user is allowed to navigate between different tabs within the interface. This property is relevant only when using the TabsWindow component.
	    *	Property type: TabSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** Specifies the zero-based index position of the last character included in the current text selection.  Note: This property is relevant only for use within MultilinePromptWindow components.
	    *	Property type: number
	    */
	    get selectionEnd() {
	        return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	    }
	    set selectionEnd(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionEnd = value;
	        }
	    }
	    /** Specifies the zero-based index of the first character in the currently selected text within the prompt window. This property is only applicable when using the MultilinePromptWindow component.
	    *	Property type: number
	    */
	    get selectionStart() {
	        return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	    }
	    set selectionStart(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionStart = value;
	        }
	    }
	    /** Controls the visibility of the label displayed on the Progress Bar.  Note: This setting is only applicable when used within the Progress Window component.
	    *	Property type: boolean
	    */
	    get showProgressValue() {
	        return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	    }
	    set showProgressValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showProgressValue = value;
	        }
	    }
	    /** A getter that retrieves all sibling LayoutPanel instances—those sharing the same immediate parent—when a LayoutPanel item is docked within a DockingLayout. The returned siblings are also DockingLayout items (specifically, other LayoutPanels).  This property is only available for TabsWindow components that are docked inside a DockingLayout.
	    *	Property type: any
	    */
	    get siblings() {
	        return this.nativeElement ? this.nativeElement.siblings : undefined;
	    }
	    set siblings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.siblings = value;
	        }
	    }
	    /** Relevant when a TabsWindow component is nested within a DockingLayout custom element. This property specifies the size (width or height, depending on layout orientation) allocated to the TabsWindow within the docking layout, allowing developers to control how much space the window occupies relative to other docked components.
	    *	Property type: string
	    */
	    get size() {
	        return this.nativeElement ? this.nativeElement.size : undefined;
	    }
	    set size(value) {
	        if (this.nativeElement) {
	            this.nativeElement.size = value;
	        }
	    }
	    /** Indicates whether spelling and grammar checking should be enabled for the element. This property determines if the content entered within the element will be reviewed for spelling and grammatical errors. Note: This option is only relevant for the MultilinePromptWindow component.
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
	    /** Determines whether close buttons are shown on each tab within the Tab Strip of the TabsWindow. You can use this property to enable or disable the visibility of close buttons on tabs, allowing users to close individual tabs directly from the Tab Strip.  Note: This property is only applicable to the TabsWindow component.
	    *	Property type: boolean
	    */
	    get tabCloseButtons() {
	        return this.nativeElement ? this.nativeElement.tabCloseButtons : undefined;
	    }
	    set tabCloseButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabCloseButtons = value;
	        }
	    }
	    /** Specifies when the close button is visible—either only when a tab is selected or always visible on all tabs.  Note: This property applies exclusively to the TabsWindow component.
	    *	Property type: WindowTabCloseButtonMode | string
	    */
	    get tabCloseButtonMode() {
	        return this.nativeElement ? this.nativeElement.tabCloseButtonMode : undefined;
	    }
	    set tabCloseButtonMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabCloseButtonMode = value;
	        }
	    }
	    /** Specifies how the scroll buttons for tabs are displayed or behave. This option is only relevant when the tabLayout property is set to 'scroll', allowing tabs to be scrolled horizontally. Note: This property applies exclusively to the TabsWindow component.
	    *	Property type: Overflow | string
	    */
	    get tabOverflow() {
	        return this.nativeElement ? this.nativeElement.tabOverflow : undefined;
	    }
	    set tabOverflow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabOverflow = value;
	        }
	    }
	    /** Determines the position of the Tab Strip within the TabsWindow.  Note: This property applies exclusively to the TabsWindow component.
	    *	Property type: TabPosition | string
	    */
	    get tabPosition() {
	        return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	    }
	    set tabPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabPosition = value;
	        }
	    }
	    /** Defines or retrieves the position of the scroll buttons located within the tab header of a TabsWindow component. This setting is exclusively applicable to TabsWindow instances and allows you to control where the scroll buttons appear (for example, at the start, end, or both ends of the tab header).
	    *	Property type: LayoutPosition | string
	    */
	    get tabScrollButtonsPosition() {
	        return this.nativeElement ? this.nativeElement.tabScrollButtonsPosition : undefined;
	    }
	    set tabScrollButtonsPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabScrollButtonsPosition = value;
	        }
	    }
	    /** Defines or retrieves the orientation of the text displayed in the tab labels within the TabsWindow component. This property determines whether the tab text is laid out horizontally or vertically. Note: This property is exclusively applicable to the TabsWindow component and has no effect on other components.
	    *	Property type: Orientation | string
	    */
	    get tabTextOrientation() {
	        return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	    }
	    set tabTextOrientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabTextOrientation = value;
	        }
	    }
	    /** Specifies the visual theme to be applied. The theme controls the appearance, including colors, fonts, and styling, of the element to ensure a consistent look and feel across the user interface.
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
	    /** If this property is set to true, the element will be excluded from keyboard navigation and cannot receive focus either programmatically or via user interaction. This ensures that users will be unable to focus on the element using methods such as the Tab key or calling focus() in JavaScript.
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
	    /** Specifies the current value displayed within the TextBox or ProgressBar component inside a Dialog, Prompt, or Progress Window. This value can represent user input (for TextBox) or progress status (for ProgressBar) and is used to dynamically update the UI element's content or state.
	    *	Property type: string | number
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    /** Specifies the actual parent element of the target element. The window's sizing and movement are restricted to the boundaries of this parent element, meaning the window can only be resized or repositioned within the visible area of the designated parent.
	    *	Property type: any
	    */
	    get windowParent() {
	        return this.nativeElement ? this.nativeElement.windowParent : undefined;
	    }
	    set windowParent(value) {
	        if (this.nativeElement) {
	            this.nativeElement.windowParent = value;
	        }
	    }
	    /** Specifies the text-wrapping behavior for the input field.  Note: This property is only relevant when used with the MultilinePromptWindow component.
	    *	Property type: WindowWrap | string
	    */
	    get wrap() {
	        return this.nativeElement ? this.nativeElement.wrap : undefined;
	    }
	    set wrap(value) {
	        if (this.nativeElement) {
	            this.nativeElement.wrap = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["addNewTab", "animation", "autoCapitalize", "autoExpand", "cancelLabel", "completeLabel", "confirmLabel", "collapsed", "closeOnMaskClick", "dataSource", "disabled", "disableSnap", "disableEscape", "disableKeyboard", "displayMode", "dropPosition", "formatFunction", "footerPosition", "footerTemplate", "headerButtons", "headerTemplate", "headerPosition", "hint", "indeterminate", "inverted", "label", "liveResize", "layout", "unlockKey", "locale", "locked", "localizeFormatFunction", "maximized", "messages", "modal", "max", "min", "minimized", "maxLength", "minLength", "opened", "pinned", "placeholder", "promptLabel", "readonly", "resizeIndicator", "resizeMode", "rightToLeft", "required", "requiredMessage", "selectAllOnFocus", "selectedIndex", "selectionMode", "selectionEnd", "selectionStart", "showProgressValue", "siblings", "size", "spellCheck", "tabCloseButtons", "tabCloseButtonMode", "tabOverflow", "tabPosition", "tabScrollButtonsPosition", "tabTextOrientation", "theme", "unfocusable", "value", "windowParent", "wrap"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onOpening", "onOpen", "onClosing", "onClose", "onCollapse", "onDragEnd", "onDragStart", "onExpand", "onMaximize", "onMinimize", "onResizeEnd", "onResizeStart", "onRestore", "onCreate", "onReady"];
	    }
	    /** Appends a new tab item to the end of the existing list of tab items within the specified parent element. This operation updates the parent element's tab item collection, ensuring the new tab appears as the last item in the tab navigation.
	    * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
	    * @returns {Node}
	  */
	    appendChild(node) {
	        const result = this.nativeElement.appendChild(node);
	        return result;
	    }
	    /** Sets the window to the highest z-order level, bringing it to the foreground and ensuring it is visible and accessible for user interaction above all other open windows.
	    */
	    bringToFront() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.bringToFront();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.bringToFront();
	            });
	        }
	    }
	    /** Removes all existing content from the window, effectively resetting the window’s display area to an empty state. This operation clears any text, images, or elements currently visible within the window.
	    */
	    clear() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clear();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clear();
	            });
	        }
	    }
	    /** Closes the currently active window in the application, terminating its user interface and releasing any associated resources. If there are unsaved changes or prompts, the user may be asked to confirm before the window is closed.
	    */
	    close() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.close();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.close();
	            });
	        }
	    }
	    /** Minimizes the window, reducing it to a smaller icon or hidden state, without closing the application.
	    * @returns {HTMLElement}
	  */
	    collapse() {
	        const result = this.nativeElement.collapse();
	        return result;
	    }
	    /** Ensures the specified tab item is brought into view by automatically scrolling the tab bar as needed. This functionality is exclusive to the TabsWindow component.
	    * @param {number} index. The index of the tab to scroll to.
	    */
	    ensureVisible(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.ensureVisible(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.ensureVisible(index);
	            });
	        }
	    }
	    /** Restores the window to its full size and visibility after it has been collapsed or minimized, allowing users to view and interact with its contents again.
	    * @returns {any[]}
	  */
	    expand() {
	        const result = this.nativeElement.expand();
	        return result;
	    }
	    /** Inserts a new tab along with its corresponding content section into the user interface. This function is specifically designed for use within the TabsWindow component and will not operate outside of this context.
	    * @param {number} index. The index to insert a new tab at.
	    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
	    */
	    insert(index, details) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insert(index, details);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insert(index, details);
	            });
	        }
	    }
	    /** Inserts the specified "smart-tab-item" node directly before the reference "smart-tab-item" node within the tab collection. This operation is only applicable when manipulating tab items inside a TabsWindow component.
	    * @param {Node} newNode. The "jqx-tab-item" node to insert.
	    * @param {Node | null} referenceNode?. The "jqx-tab-item" node before which newNode is inserted.
	    * @returns {Node}
	  */
	    insertBefore(newNode, referenceNode) {
	        const result = this.nativeElement.insertBefore(newNode, referenceNode);
	        return result;
	    }
	    /** Revised Description:"Sets the window's position on the screen by moving it to specified X and Y coordinates, effectively relocating the window to a new location."
	    * @param {string | number} left. Left position. For example: '100px'.
	    * @param {string | number} top. Top position. For example: '100px'.
	    */
	    move(left, top) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.move(left, top);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.move(left, top);
	            });
	        }
	    }
	    /** Expands the window to occupy the entire available viewing area, ensuring it fills all usable screen space without overlapping system taskbars or menus.
	    */
	    maximize() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.maximize();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.maximize();
	            });
	        }
	    }
	    /** Reduces the window to the taskbar or dock, temporarily hiding it from view without closing the application.
	    */
	    minimize() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.minimize();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.minimize();
	            });
	        }
	    }
	    /** Opens a new browser window or tab with the specified URL or content, allowing additional web pages or resources to be displayed alongside the current page.
	    */
	    open() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.open();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.open();
	            });
	        }
	    }
	    /** Prevents the window from being moved by locking its position. Disables the ability to drag or reposition the window, ensuring it remains fixed in place.
	    */
	    pin() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.pin();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.pin();
	            });
	        }
	    }
	    /** Removes a tab along with its corresponding content section from the interface. This function is designed to work exclusively within the TabsWindow component.
	    * @param {number} index. The index of the tab to remove.
	    */
	    removeAt(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeAt(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeAt(index);
	            });
	        }
	    }
	    /** Removes a child node with the "smart-tab-item" tag from the parent container.  Note: This operation is only supported within the TabsWindow component; attempting to use it elsewhere will have no effect.
	    * @param {Node} node. The "jqx-tab-item" node to remove.
	    * @returns {Node}
	  */
	    removeChild(node) {
	        const result = this.nativeElement.removeChild(node);
	        return result;
	    }
	    /** Restores the window to its previous dimensions and position before it was maximized or minimized, returning it to the exact size and location it had prior to those actions.
	    */
	    restore() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.restore();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.restore();
	            });
	        }
	    }
	    /** Selects the specified tab within the interface. This action applies exclusively to elements of type TabsWindow.
	    * @param {number} index. The index of the tab to select.
	    */
	    select(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select(index);
	            });
	        }
	    }
	    /** Removes the pinned (fixed) state from the window, allowing the user to freely move or drag the window to a different position on the screen.
	    */
	    unpin() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.unpin();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.unpin();
	            });
	        }
	    }
	    /** Updates the text displayed in the header label to reflect new information or changes, ensuring that the header accurately represents the current content or context of the section.
	    * @param {string} label. The new label of the Header.
	    */
	    updateLabel(label) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateLabel(label);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateLabel(label);
	            });
	        }
	    }
	    /** Replaces the existing content with new or modified information, ensuring that the displayed data reflects the latest updates or changes.
	    * @param {string | HTMLElement} content. The new content of the window.
	    */
	    updateContent(content) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateContent(content);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateContent(content);
	            });
	        }
	    }
	    /** Updates an individual tab within a TabsWindow component and modifies its corresponding content section. This operation exclusively applies to elements of the TabsWindow type. Use this function to change tab labels, update active states, or refresh the content associated with a specific tab within the TabsWindow interface.
	    * @param {number} index. The index of the tab to update.
	    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
	    * @param {string | HTMLElement} content. The new content of the tab.
	    */
	    update(index, label, content) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.update(index, label, content);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.update(index, label, content);
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
	        return (React.createElement("smart-window", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Window = Window;
	exports.default = Window;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
