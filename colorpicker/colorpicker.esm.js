
"use client";

import '../source/modules/smart.colorpicker'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.colorpicker');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
class ColorPicker extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ColorPicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the animation mode for the element. When set to 'none', all animations are disabled and no animation effects will be applied. Assigning other valid values enables different animation behaviors according to the selected mode.
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
    /** This property enables users to edit colors directly through the input field located within the element's action section. It accepts values in all supported color formats (such as HEX, RGB, or HSL). Please note, this property is effective only when the valueDisplayMode is set to either default or colorCode.
    *	Property type: boolean
    */
    get editable() {
        return this.nativeElement ? this.nativeElement.editable : undefined;
    }
    set editable(value) {
        if (this.nativeElement) {
            this.nativeElement.editable = value;
        }
    }
    /** Specifies the duration (in milliseconds) to wait before automatically closing the dropdown menu after it has been opened, applicable only when dropDownOpenMode is set to 'auto'. This delay allows users sufficient time to interact with the dropdown before it closes automatically.
    *	Property type: number
    */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCloseDelay = value;
        }
    }
    /** Defines the method for confirming the user's selected value in the color picker.  - In ''instantly'' mode, the new value is applied immediately whenever the user selects a color, with no further confirmation required.  - In ''useButtons'' mode, 'OK' and 'Cancel' buttons appear at the bottom of the color picker’s dropdown. The color change is only applied when the user clicks the 'OK' button. Clicking 'Cancel' will close the dropdown without applying the selected value.
    *	Property type: ColorApplyValueMode | string
    */
    get applyValueMode() {
        return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
    }
    set applyValueMode(value) {
        if (this.nativeElement) {
            this.nativeElement.applyValueMode = value;
        }
    }
    /** Specifies how many columns of colors are displayed when using the 'grid', 'hexagonal', or 'spectrumGrid' displayModes. Adjusting this value determines the width of the color palette layout for these modes.
    *	Property type: number
    */
    get columnCount() {
        return this.nativeElement ? this.nativeElement.columnCount : undefined;
    }
    set columnCount(value) {
        if (this.nativeElement) {
            this.nativeElement.columnCount = value;
        }
    }
    /** Specifies the color palette to be used, including individual colors and their arrangement within the layout. This setting controls both which colors are displayed and how they appear in the user interface.
    *	Property type: ColorDisplayMode | string
    */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMode = value;
        }
    }
    /** Controls whether the element is interactive or not. When enabled, the element can be interacted with by the user; when disabled, the element is not interactive and may appear visually distinct (e.g., grayed out) to indicate its inactive state.
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
    /** By default, clicking on the color panel's preview container reverts the selected color value to its previous state, effectively functioning as an undo action. Setting the 'disableUndo' option disables this functionality, so clicking the preview container will no longer revert the color value.
    *	Property type: boolean
    */
    get disableUndo() {
        return this.nativeElement ? this.nativeElement.disableUndo : undefined;
    }
    set disableUndo(value) {
        if (this.nativeElement) {
            this.nativeElement.disableUndo = value;
        }
    }
    /** Defines the parent container in which the dropDown (popup) will be rendered. Accepts a CSS selector string, an element ID, or the literal value 'body'. This setting is helpful when the dropDown’s visibility is affected by CSS properties (such as overflow or z-index) applied to its parent elements. Specify 'body' to attach the dropDown directly to the  element for maximum visibility. Example: 'body'.
    *	Property type: string
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** Controls the direction or orientation in which the dropdown menu appears when activated (e.g., opening upwards, downwards, to the left, or to the right). This setting dictates the dropdown's display position relative to its trigger element.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode() {
        return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
    }
    set dropDownOpenMode(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOpenMode = value;
        }
    }
    /** Specifies the placement of the dropdown button relative to its parent element. This determines where the dropdown button will appear on the user interface, such as above, below, to the left, or to the right of the related element.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition() {
        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
    }
    set dropDownButtonPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownButtonPosition = value;
        }
    }
    /** Specifies the vertical placement of the dropDown menu relative to its trigger element. When set to 'Auto', the component intelligently chooses to display the dropDown either above or below the trigger based on available space within the viewport, ensuring optimal visibility and user experience.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPosition = value;
        }
    }
    /** Specifies the height of the dropdown menu. By default, this property is set to null, which means the component will use CSS variables (custom properties) to determine its height. If the browser does not support CSS variables, set this property to a specific value (e.g., '200px' or '2.5em') to manually define the dropdown's height. Use this property only to ensure compatibility with browsers that lack support for CSS variables.
    *	Property type: string
    */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownHeight = value;
        }
    }
    /** When this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown menu and the rest of the page. This overlay visually separates the dropdown from other content and can help capture user interactions outside the dropdown, such as clicks to close the menu.
    *	Property type: boolean
    */
    get dropDownOverlay() {
        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
    }
    set dropDownOverlay(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOverlay = value;
        }
    }
    /** Defines the width of the dropdown component. By default, this property is set to null, which means the dropdown will use CSS variables (such as '--dropdown-width') to determine its width. If you need to support browsers that do not support CSS variables, explicitly set this property to a specific width value (e.g., ''200px'' or ''20em''). This ensures consistent dropdown sizing across all browsers, including those without CSS variable support.
    *	Property type: string
    */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownWidth = value;
        }
    }
    /** Enables users to adjust the alpha (transparency) level of colors through an editor or slider interface. This functionality is available in the following display modes: 'palette', 'radial', and 'hexagonal', allowing for precise control over color opacity in each mode.
    *	Property type: boolean
    */
    get editAlphaChannel() {
        return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
    }
    set editAlphaChannel(value) {
        if (this.nativeElement) {
            this.nativeElement.editAlphaChannel = value;
        }
    }
    /** Enables users to choose a custom color through an editor popup interface. This feature provides custom color selection in modes where it is not available by default—such as 'grid', 'default', and 'spectrum grid'—enhancing flexibility and user experience across different color selection modes.
    *	Property type: boolean
    */
    get enableCustomColors() {
        return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
    }
    set enableCustomColors(value) {
        if (this.nativeElement) {
            this.nativeElement.enableCustomColors = value;
        }
    }
    /** Defines an array of color values that serve as the theme colors for the component or section. These colors will be applied when the displayMode is set to either 'grid' or 'default', ensuring consistent theming across these display modes. Each color in the array should be specified in a valid CSS color format (e.g., HEX, RGB, or named color).
    *	Property type: string[] | null
    */
    get gridThemeColors() {
        return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
    }
    set gridThemeColors(value) {
        if (this.nativeElement) {
            this.nativeElement.gridThemeColors = value;
        }
    }
    /** Specifies an array of color values to be used as shade colors within the relevant section when the displayMode is set to either 'grid' or 'default'. These colors determine the visual shading or background color scheme that appears in these display modes.
    *	Property type: string[] | null
    */
    get gridShadeColors() {
        return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
    }
    set gridShadeColors(value) {
        if (this.nativeElement) {
            this.nativeElement.gridShadeColors = value;
        }
    }
    /** Specifies an array of colors to be used as the standard color palette within the relevant section when the displayMode is set to either 'grid' or 'default'. These colors will be available for selection or display in these display modes, providing a consistent and predefined set of color options for users.
    *	Property type: string[] | null
    */
    get gridStandardColors() {
        return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
    }
    set gridStandardColors(value) {
        if (this.nativeElement) {
            this.nativeElement.gridStandardColors = value;
        }
    }
    /** Hides the alpha editor. The alpha editor is an input field that allows users to adjust the opacity (alpha value) of the currently selected color. It is available in the following display modes: 'radial', 'palette', and 'hexagonal'. The alpha editor is only shown when there is sufficient space in the UI. By default, this editor is visible unless explicitly hidden using this setting.
    *	Property type: boolean
    */
    get hideAlphaEditor() {
        return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
    }
    set hideAlphaEditor(value) {
        if (this.nativeElement) {
            this.nativeElement.hideAlphaEditor = value;
        }
    }
    /** Specifies the priority order in which color editors are hidden when there is insufficient space to display them all. By default, these editors are only visible in the 'palette', 'radial', and 'hexagonal' display modes. This property enables you to control which editors remain visible by defining their visibility priority, ensuring that the most important editors are retained as the available space decreases.
    *	Property type: string[]
    */
    get hideContentToFit() {
        return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
    }
    set hideContentToFit(value) {
        if (this.nativeElement) {
            this.nativeElement.hideContentToFit = value;
        }
    }
    /** The HEX editor is a user input field that allows users to view and edit the hexadecimal (HEX) color code, representing the selected color. By default, the HEX editor is visible within the interface, enabling users to enter or modify HEX values such as #FF5733. To hide the HEX editor from the interface, set the 'hideHEXeditor' property to true. Note: Setting 'hideRGBeditor' to true only hides the RGB editor and does not affect the visibility of the HEX editor.
    *	Property type: boolean
    */
    get hideHEXEditor() {
        return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
    }
    set hideHEXEditor(value) {
        if (this.nativeElement) {
            this.nativeElement.hideHEXEditor = value;
        }
    }
    /** Hides the preview container, which displays the currently selected value when using the 'palette', 'radial', or 'hexagonal' display modes. When this option is enabled, the user will not see the visual preview of their selection within the interface. This can be useful for creating a more compact UI or when the preview is not necessary for your workflow.
    *	Property type: boolean
    */
    get hidePreviewContainer() {
        return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
    }
    set hidePreviewContainer(value) {
        if (this.nativeElement) {
            this.nativeElement.hidePreviewContainer = value;
        }
    }
    /** Hides the RGB editor interface. The RGB editor consists of three individual input fields, each allowing users to specify the Red, Green, and Blue components of a color separately. By hiding the RGB editor, users will no longer see or interact with these color value inputs.
    *	Property type: boolean
    */
    get hideRGBEditor() {
        return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
    }
    set hideRGBEditor(value) {
        if (this.nativeElement) {
            this.nativeElement.hideRGBEditor = value;
        }
    }
    /** Displays supplementary helper text beneath the element, which becomes visible only when the element is focused, providing context-specific guidance to the user during interaction.
    *	Property type: string
    */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        if (this.nativeElement) {
            this.nativeElement.hint = value;
        }
    }
    /** Inverts all colors displayed in the ‘spectrumGrid’, ‘hexagonal’, and ‘radial’ modes, producing their complementary (negative) color values for each element in these modes. This affects the entire color range shown, allowing for an alternative visual representation of the color palette.
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
    /** Displays a descriptive label above the element to provide context or identify its purpose for users.
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
    /** Sets or retrieves the unlockKey, a value required to activate or grant access to the product’s features. This key is typically used for licensing or security purposes, ensuring only authorized users can unlock the product.
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
    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es') to be used for localization purposes. This property works together with the messages property, which contains language-specific translations or text. Setting this value determines which set of messages is displayed to users based on their selected language.
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
    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify the structure, content, or presentation of localized messages before they are delivered to your application.
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
    /** Defines or retrieves an object containing the localized strings used within the widget’s user interface. This property works in conjunction with the locale property to enable the display of text in different languages, allowing developers to customize and provide translations for all UI elements and messages.
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
    /** Specifies or retrieves the value of the element’s name attribute. The name attribute is used to identify form controls when submitting an HTML form; its value is included as the key in the form-data sent to the server and allows the server to process user input correctly.
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
    /** Specifies if the popup component is currently visible (open) or hidden (closed).
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
    /** Specifies the color palette that will appear in the 'spectrumGrid', 'grid', and 'hexagonal' display modes. These colors define the available color options shown to users when any of these display modes are active.
    *	Property type: ColorPalette | string
    */
    get palette() {
        return this.nativeElement ? this.nativeElement.palette : undefined;
    }
    set palette(value) {
        if (this.nativeElement) {
            this.nativeElement.palette = value;
        }
    }
    /** Defines a custom color palette as an array, which can be utilized in the display modes 'grid' and 'spectrum grid' when the palette property is set to custom. Each item in the array can either be a string representing a valid color format (such as HEX, RGB, or RGBA), or an object containing a color value. This allows you to specify a tailored set of colors for your application's interface, ensuring precise control over the available color options in supported display modes.
    *	Property type: {name: string, value: string}[] | string[] | null
    */
    get paletteColors() {
        return this.nativeElement ? this.nativeElement.paletteColors : undefined;
    }
    set paletteColors(value) {
        if (this.nativeElement) {
            this.nativeElement.paletteColors = value;
        }
    }
    /** Specifies an array containing a predefined set of custom colors for use in the application's color picker component. This custom palette appears in the color grid when the color picker is in 'grid', 'default', or 'spectrum grid' displayModes. The custom colors are displayed below the custom color selection button, at the bottom of the color grid. These colors are only visible if the enableCustomColor property is set to true. This allows users to quickly access and select from your specified custom colors in supported display modes.
    *	Property type: string[] | null
    */
    get paletteCustomColors() {
        return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
    }
    set paletteCustomColors(value) {
        if (this.nativeElement) {
            this.nativeElement.paletteCustomColors = value;
        }
    }
    /** The placeholder appears when no value has been entered, or if the current value is null. It provides a visual cue or hint to the user about the expected input until an actual value is provided.
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
    /** Prevents any user interactions with the element, such as clicking, typing, or focusing, rendering it completely unresponsive to pointer and keyboard events.
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
    /** Controls the visibility of the resize indicator located in the bottom-right corner of the dropdown menu. When set to true, the resize handle is displayed, allowing users to adjust the size of the dropdown. This property should be used alongside the resizeMode property to specify how resizing is handled.
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
    /** Specifies whether the drop-down menu can be resized by the user. When this option is enabled, a resize handle appears on either the top or bottom edge of the drop-down, allowing users to adjust its height interactively. If disabled, the drop-down’s size remains fixed and cannot be modified by the user.
    *	Property type: ResizeMode | string
    */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeMode = value;
        }
    }
    /** Specifies or retrieves a value that determines whether the element's text direction is set to right-to-left (RTL) alignment, commonly used for languages such as Arabic or Hebrew. This property ensures the element properly supports locales that require right-to-left text display.
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
    /** Specifies the theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styles, ensuring visual consistency across the user interface.
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
    /** Specifies the format and content used by the tooltip to display the value of the color when a user hovers over it. This setting controls how the color value is presented to the user, such as showing it as a HEX code, RGB value, or color name, within the tooltip interface.
    *	Property type: ColorTooltipDisplayMode | string
    */
    get tooltipDisplayMode() {
        return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
    }
    set tooltipDisplayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipDisplayMode = value;
        }
    }
    /** When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via tab navigation or programmatic focus methods (e.g., element.focus()).
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
    /** Represents the currently selected color value assigned to the element. This value is typically formatted as a hexadecimal color code (e.g., "#FF5733"), reflecting the user's choice in a color picker input.
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
    /** Specifies the color format to be used, allowing selection between HEX, RGB, or RGBA formats. By default, the color format is automatically determined based on the current displayMode setting. This property ensures that colors are displayed in the preferred or most appropriate format for the context.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat() {
        return this.nativeElement ? this.nativeElement.valueFormat : undefined;
    }
    set valueFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.valueFormat = value;
        }
    }
    /** Specifies which controls or buttons (such as ‘Apply’, ‘Cancel’, ‘Reset’, or custom actions) will appear in the action section of the color picker component. This determines the set of interactive elements available to users for confirming, cancelling, or modifying their color selection.
    *	Property type: ColorValueDisplayMode | string
    */
    get valueDisplayMode() {
        return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
    }
    set valueDisplayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.valueDisplayMode = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "editable", "autoCloseDelay", "applyValueMode", "columnCount", "displayMode", "disabled", "disableUndo", "dropDownAppendTo", "dropDownOpenMode", "dropDownButtonPosition", "dropDownPosition", "dropDownHeight", "dropDownOverlay", "dropDownWidth", "editAlphaChannel", "enableCustomColors", "gridThemeColors", "gridShadeColors", "gridStandardColors", "hideAlphaEditor", "hideContentToFit", "hideHEXEditor", "hidePreviewContainer", "hideRGBEditor", "hint", "inverted", "label", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "opened", "palette", "paletteColors", "paletteCustomColors", "placeholder", "readonly", "resizeIndicator", "resizeMode", "rightToLeft", "theme", "tooltipDisplayMode", "unfocusable", "value", "valueFormat", "valueDisplayMode"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onActionButtonClick", "onCancelButtonClick", "onChange", "onClose", "onClosing", "onCustomColorSelection", "onDropDownButtonClick", "onOkButtonClick", "onOpen", "onOpening", "onResizeStart", "onResizeEnd", "onCreate", "onReady"];
    }
    /** Displays the color picker’s drop-down panel, allowing users to select or customize a color.
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
    /** Improved: "Closes the color picker dropdown menu, hiding the color selection options from view."
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
        return (React.createElement("smart-color-picker", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ColorPicker, Smart, ColorPicker as default };
