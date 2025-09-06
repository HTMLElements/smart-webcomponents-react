
"use client";

import '../source/modules/smart.colorpanel'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.colorpanel');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
class ColorPanel extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ColorPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use this property to enable, disable, or specify the type of animation applied to the element.
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
    /** Clarifies the method or rule by which the value is implemented or utilized within the system, detailing how the value influences functionality or behavior.
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
    /** Specifies how many columns of colors are displayed when using the 'grid', 'hexagonal', or 'spectrumGrid' displayModes. This parameter controls the horizontal arrangement of color swatches, determining how many colors appear in each row of the color picker interface for these modes.
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
    /** Determines whether the element is interactive or not. When set to 'disabled', the element becomes unresponsive to user interactions such as clicks, typing, or selection, and may also appear visually distinct (e.g., grayed out) to indicate its inactive state. When enabled, the element behaves normally and accepts user input.
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
    /** Specifies the color palette to be used and defines how these colors are arranged or distributed within the user interface or visual component.
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
    /** By default, clicking on the color panel's preview container will revert the selected color to its previous value, effectively undoing any recent changes. Setting the 'disableUndo' option disables this undo functionality, so clicking the preview container will no longer restore the previous color value.
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
    /** Enables users to adjust the alpha (transparency) level of colors using an editor or slider. This functionality is available in the following display modes: 'palette', 'radial', and 'hexagonal', allowing for precise transparency control while selecting colors in these layouts.
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
    /** Enables users to choose a custom color through an editor popup interface. This functionality extends custom color selection to modes where it is not included by default, such as 'grid', 'default', or 'spectrum grid', providing flexibility and a consistent color selection experience across different modes.
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
    /** Specifies an array of color values to be used as the theme colors for the relevant section when displayMode is set to 'default'. These colors will determine the visual appearance and styling of the section under the default display mode.
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
    /** Defines an array of color values to be used as shade colors in the section that appears when displayMode is set to 'default'. These colors determine the visual shading or accent colors applied within that display mode, allowing for customization of the section’s appearance.
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
    /** Specifies an array of standard colors that will be applied in the corresponding section when the displayMode is set to 'default'. These colors determine the default color palette for that section's visual elements.
    *	Property type: [] | null
    */
    get gridStandardColors() {
        return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
    }
    set gridStandardColors(value) {
        if (this.nativeElement) {
            this.nativeElement.gridStandardColors = value;
        }
    }
    /** Controls the visibility of the alpha editor, which is a UI input for adjusting the opacity (alpha value) of the selected color. The alpha editor is available in the 'radial', 'palette', and 'hexagonal' modes, and is displayed by default as long as there is enough space in the interface. Enabling this option will hide the alpha editor from view, preventing users from modifying color opacity directly.
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
    /** Specifies the priority for hiding color editors when there is insufficient space to display all of them. By default, color editors are shown only in 'palette', 'radial', and 'hexagonal' display modes. Use this property to control the order in which editors are hidden, ensuring that the most important editors remain visible for as long as possible as space becomes limited. This allows for a customized and responsive user interface that adapts to varying display sizes.
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
    /** The HEX editor is an input field that allows users to enter or view a color's value in hexadecimal format (e.g., #FF5733). By default, the HEX editor is displayed in the UI. If the 'hideHEXeditor' property is set to true, this input will be hidden from view. Note: The 'hideRGBeditor' property controls the visibility of the separate RGB editor, not the HEX editor.
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
    /** Conceals the preview container, which displays the currently selected value in the 'palette', 'radial', and 'hexagonal' display modes. When this option is enabled, users will not see the visual representation of their selection within the interface.
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
    /** Hides the RGB editor interface. This editor consists of three individual input fields, each allowing users to directly adjust the Red, Green, and Blue components of a color independently. Disabling this option will prevent users from modifying these color channels through the RGB editor.
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
    /** Inverts the color scheme of the interface when operating in the 'spectrumGrid', 'hexagonal', or 'radial' display modes, producing a visually reversed version of the original colors for enhanced contrast or alternative visual effects.
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
    /** Sets or retrieves the 'unlockKey' property, a unique key required to activate or grant access to the product. Assign a valid key string to unlock the product, or get the current key in use.
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
    /** Defines or retrieves the current language setting for the application. This property works together with the messages property, allowing you to display localized content based on the selected language. Setting this value determines which language-specific message set from messages will be used throughout the interface.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, translate, or personalize message strings before they are displayed in your application.
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
    /** Specifies or retrieves an object that defines the text strings used within the widget, allowing for easy localization of the widget's interface. This property works together with the locale property to support multiple languages by providing translated strings as needed. Use this to customize the widget's displayed text based on the selected locale.
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
    /** Sets or retrieves the value of the element's name attribute. This attribute assigns a unique identifier to the element within an HTML form, allowing its value to be included as a key when the form is submitted to a server. The name attribute is essential for processing form data, as the server uses these names to identify and handle the values submitted by users.
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
    /** Specifies the color palette used for rendering the color options within the 'spectrumGrid', 'grid', and 'hexagonal' display modes. This setting controls which color values are shown to users when these modes are active, directly affecting the available color choices in the UI.
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
    /** Specifies an array of colors to create a custom color palette. When the palette property is set to custom, this palette is available for selection in the 'grid' and 'spectrum grid' display modes. The array can contain either color strings (such as HEX, RGB, or RGBA formats) or objects that define valid color values. This allows for flexible customization of the color selection options shown to users.
    *	Property type: any
    */
    get paletteColors() {
        return this.nativeElement ? this.nativeElement.paletteColors : undefined;
    }
    set paletteColors(value) {
        if (this.nativeElement) {
            this.nativeElement.paletteColors = value;
        }
    }
    /** Specifies an array of colors that make up a predefined custom color palette. This palette is available for display modes 'grid', 'default', and 'spectrum grid'. When enabled via the enableCustomColors property, these custom colors appear at the bottom of the color grid, positioned below the button that allows users to select a custom color. If enableCustomColors is set to false, the custom color palette will not be visible to users.
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
    /** When the element has the "readonly" attribute, users can view its value but cannot modify, edit, or interact with its content in any way. The element remains visible and selectable, but user input and changes are disabled.
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
    /** Determines or retrieves whether the element’s text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
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
    /** Specifies the theme to be applied to the element, which controls its overall appearance—including colors, fonts, and style variations—ensuring visual consistency with the rest of the user interface.
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
    /** Specifies the format and content used to display the color’s value in the tooltip when a user hovers over it. This setting controls how the color information (such as hexadecimal, RGB, or color name) appears in the tooltip for better clarity and user experience.
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
    /** Represents the currently selected color value, typically formatted as a hexadecimal code (e.g., "#FF5733"), RGB value, or other standard color representation. This value is updated whenever the user selects a new color and can be used to apply the chosen color to UI elements or store user preferences.
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
    /** Specifies the format in which the color value will be represented—either HEX, RGB, or RGBA. By default, the color format adapts automatically based on the selected displayMode.
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
    /** Specifies which object property should be used as the color value when paletteColors is an array of objects. This option is useful when your color data is structured as objects and the property representing the color value does not use the default key name 'value'. Set this attribute to the name of the property that contains the color value within each object.
    *	Property type: string
    */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        if (this.nativeElement) {
            this.nativeElement.valueMember = value;
        }
    }
    /** When set to true, this property prevents the element from receiving focus, meaning it cannot be selected or activated using keyboard navigation or other focus-related interactions.
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
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "applyValueMode", "columnCount", "disabled", "displayMode", "disableUndo", "editAlphaChannel", "enableCustomColors", "gridThemeColors", "gridShadeColors", "gridStandardColors", "hideAlphaEditor", "hideContentToFit", "hideHEXEditor", "hidePreviewContainer", "hideRGBEditor", "inverted", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "palette", "paletteColors", "paletteCustomColors", "readonly", "rightToLeft", "theme", "tooltipDisplayMode", "value", "valueFormat", "valueMember", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCancelButtonClick", "onCustomColorSelection", "onOkButtonClick", "onCreate", "onReady"];
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
        return (React.createElement("smart-color-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ColorPanel, Smart, ColorPanel as default };
