
require('../source/modules/smart.colorinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.colorinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
	*/
	class ColorInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ColorInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the specified animation mode determines how animations are displayed.
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
	    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu that shows matching suggestions from the autocomplete operation. This delay begins after the user stops typing, allowing you to control how quickly the autocomplete dropdown appears in response to user input.
	    *	Property type: number
	    */
	    get autoCompleteDelay() {
	        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
	    }
	    set autoCompleteDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoCompleteDelay = value;
	        }
	    }
	    /** Specifies the source of data that provides the available color options to be loaded into the Input component. The dataSource property accepts one of the following formats:- 'Array of strings': Each string represents a valid color value.- 'Array of objects': Each object should contain attributes (such as label and value) that define the display properties and value of each color option in the list.- 'Callback function': A function that returns an array of items in either of the above formats (strings or objects with the specified attributes).This flexibility allows you to populate the Input with color choices from static lists or dynamic sources, ensuring seamless integration with various data structures.
	    *	Property type: any
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and may appear visually subdued.
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
	    /** Specifies the color palette to be used, including the individual colors and their arrangement or positioning within the user interface. This setting controls both the selection of colors and how they are visually organized or applied throughout the application.
	    *	Property type: ColorInputDisplayMode | string
	    */
	    get displayMode() {
	        return this.nativeElement ? this.nativeElement.displayMode : undefined;
	    }
	    set displayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMode = value;
	        }
	    }
	    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This setting controls where the dropdown button will appear within the interface.
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
	    /** Specifies the height of the dropdown menu. By default, this value is an empty string, which means the dropdown's height is determined by the associated CSS variable. If a specific height is provided, it will override the default CSS variable, allowing you to directly control the dropdown's height through this property.
	    *	Property type: string | number
	    */
	    get dropDownHeight() {
	        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	    }
	    set dropDownHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownHeight = value;
	        }
	    }
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string (""), which means the dropdown's width will be determined by the value of a corresponding CSS variable rather than an explicit pixel or percentage value. You can override the default behavior by providing a specific width (e.g., "200px", "50%") to directly control the dropdown’s size. If left empty, ensure the relevant CSS variable is defined to maintain consistent styling.
	    *	Property type: string | number
	    */
	    get dropDownWidth() {
	        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	    }
	    set dropDownWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownWidth = value;
	        }
	    }
	    /** Specifies the expected type of input for the form element and informs the browser about the purpose of the field. This allows the user agent (such as a web browser or password manager) to offer relevant, automated suggestions or autofill options to the user, based on previously entered or stored data. This property corresponds to the standard HTML autocomplete attribute, which accepts values like 'on' (enables autofill), 'off' (disables autofill), 'name', 'email', 'organization', 'street-address', and many others. Setting this attribute properly enhances accessibility, improves user experience, and ensures that the browser presents the correct input suggestions for each form field.
	    *	Property type: string
	    */
	    get inputPurpose() {
	        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	    }
	    set inputPurpose(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inputPurpose = value;
	        }
	    }
	    /** Specifies the maximum number of items that can be displayed in the dropdown list as results of a new autoComplete query. When a user enters a search term, only up to this number of matching items will be shown in the dropdown. By default, a maximum of 8 items are visible, ensuring that the dropdown remains manageable and user-friendly. If there are more matching items than the specified maximum, only the first set will be displayed.
	    *	Property type: number
	    */
	    get items() {
	        return this.nativeElement ? this.nativeElement.items : undefined;
	    }
	    set items(value) {
	        if (this.nativeElement) {
	            this.nativeElement.items = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey, a unique code or token required to unlock and activate access to the product’s full features.
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
	    /** Defines or retrieves the current language code (e.g., 'en', 'fr'), which determines the locale used for displaying messages. This property works together with the messages property to select the appropriate set of localized messages for the specified language.
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
	    /** Callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, localize, or adjust the appearance of messages before they are delivered to the user interface.
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
	    /** Defines or retrieves an object containing localized string values used throughout the widget’s user interface. This property allows you to customize or translate text elements, such as labels, tooltips, and messages, enabling support for multiple languages. It should be used together with the locale property to ensure that the correct set of localized strings is applied based on the selected language or region.
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
	    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown menu will open and display the list of matching items based on the user's input.
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
	    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies the element within an HTML form and is used as the key when the form data is submitted to the server. This allows the submitted data to be organized and referenced by the specified name.
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
	    /** Specifies whether the dropdown menu is currently open (visible) or closed (hidden).
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
	    /** Specifies the placeholder text that appears within the input field when it is empty, providing a hint or example to guide users on the expected input format.
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
	    /** Defines or retrieves the filter query used to narrow down the displayed items. This query is utilized by the autoComplete operation to show only items that match the specified criteria. If the query is set to an empty string, no filtering is applied, and all items from the data source are displayed.
	    *	Property type: string | number
	    */
	    get query() {
	        return this.nativeElement ? this.nativeElement.query : undefined;
	    }
	    set query(value) {
	        if (this.nativeElement) {
	            this.nativeElement.query = value;
	        }
	    }
	    /** Specifies the query mode used for autocomplete operations. This property defines how the autocomplete engine interprets and matches user input against available data, determining the matching algorithm and search behavior (such as prefix, infix, or fuzzy matching) for generating autocomplete suggestions.
	    *	Property type: ColorQueryMode | string
	    */
	    get queryMode() {
	        return this.nativeElement ? this.nativeElement.queryMode : undefined;
	    }
	    set queryMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.queryMode = value;
	        }
	    }
	    /** Specifies whether the input field is editable by the user. If set to true, the user can type text directly into the input. If set to false, the input becomes read-only, and the user can only select from the provided options. When a dataSource is supplied, this property also determines the component's behavior:  - If editable is true, the element functions as a ComboBox, allowing users to enter custom values or select from the list.  - If editable is false, the element acts as a DropDownList, restricting selection to the available options in the dataSource only.
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
	    /** Sets or retrieves a value that determines whether the element's content alignment is configured for right-to-left languages, such as Arabic or Hebrew. This ensures proper layout and text direction for locales that require right-to-left reading order.
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
	    /** Specifies the visual theme to be applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, backgrounds, and other stylistic properties, to ensure a consistent look and feel across the user interface.
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
	    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via the Tab key or programmatically.
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
	    /** Sets or retrieves the current value of the element, allowing you to either update its content programmatically or access its existing value for processing. This is commonly used with form elements such as input, textarea, and select to manage user input dynamically.
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
	    /** Specifies the content or controls that will appear within the action section of the color picker component. This determines which buttons, options, or interface elements are available to the user when interacting with the color picker’s action area.
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
	    /** Specifies the format in which the color value is represented. Supported formats include HEX, RGB, and RGBA. By default, the color format is automatically selected based on the current displayMode setting.
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "autoCompleteDelay", "dataSource", "disabled", "displayMode", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "rightToLeft", "theme", "unfocusable", "value", "valueDisplayMode", "valueFormat"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its default, collapsed state.
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
	    /** Displays the dropdown menu, allowing the user to view and select available options.
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
	    /** Selects the text inside the input element. If the input is set to readonly, the element will be focused instead, without selecting the text.
	    */
	    select() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select();
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
	        return (React.createElement("smart-color-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.ColorInput = ColorInput;
	exports.default = ColorInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
