
require('../source/modules/smart.daterangeinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.daterangeinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
	*/
	class DateRangeInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'DateRangeInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled, resulting in immediate visual changes without any transition effects. For other values, the corresponding animation style will be applied during state changes.
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
	    /** Specifies the format used to display dates within the input field. This property accepts any valid date formatting options supported by the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing for customized date representations based on user needs. By default, the date format adapts to the value provided in the 'locale' property, ensuring localization and regional date standards are respected. Under the hood, JavaScript's Intl.DateTimeFormat is utilized to generate the formatted date strings according to the specified format and locale settings.
	    *	Property type: DateRangeFormat
	    */
	    get dateFormat() {
	        return this.nativeElement ? this.nativeElement.dateFormat : undefined;
	    }
	    set dateFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dateFormat = value;
	        }
	    }
	    /** Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to events. When disabled, the element appears visually distinct (usually grayed out) and does not respond to user actions such as clicks or keyboard input.
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
	    /** Specifies the alignment and placement of the dropdown button relative to its parent element. This property controls whether the dropdown button appears to the left, right, above, or below its associated component.
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
	    /** Specifies the height of the dropdown menu. By default, this value is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. If a specific height is provided, it will override the CSS variable and explicitly set the dropdown’s height.
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
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, meaning the dropdown's width will be determined by the associated CSS variable rather than a fixed value. You can override this behavior by explicitly setting a width value (e.g., '200px', '50%'), which will apply directly to the dropdown element. If left unset, ensure that the relevant CSS variable is defined to control the dropdown's width as needed.
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
	    /** Controls the visibility of the 'Today' and 'Clear' icons in the user interface. Set this option to display or hide these icons, allowing users to quickly select the current date or clear their selection.
	    *	Property type: boolean
	    */
	    get icons() {
	        return this.nativeElement ? this.nativeElement.icons : undefined;
	    }
	    set icons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.icons = value;
	        }
	    }
	    /** Specifies the autocomplete attribute for the input element, which informs the browser and user agents about the expected type of data to be entered. This attribute helps determine whether and how the browser may offer autocomplete suggestions or automatically fill in the input based on previously entered information. Setting this value provides guidance on the input’s purpose—such as 'on' (enable autocomplete), 'name' (person’s full name), 'organization' (company or organization name), 'street-address' (street address), and other standardized options—improving user experience and data accuracy in forms.
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
	    /** Defines or retrieves the unlockKey, a unique identifier or code required to activate or grant access to the product’s features or content.
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
	    /** Specifies or retrieves the current language setting. This property works together with the messages property to display content in the selected language. When the language is set, the appropriate localized messages from the messages object are used.
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
	    /** A callback function that allows you to define a custom formatting logic for messages returned by the Localization Module. Use this to modify or enhance how localized messages are structured or displayed before they are delivered to the application.
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
	    /** Specifies the latest selectable date that can be displayed on the calendar within the popup. Users will not be able to select any date beyond this maximum limit.
	    *	Property type: any
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Defines or retrieves an object containing the text strings displayed by the widget, allowing for easy localization and customization of user-facing messages, labels, and prompts. This property works together with the locale property to display content in the appropriate language for end users. Use this setting to provide translations and update UI text based on the selected locale.
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
	    /** Specifies the earliest selectable date in the calendar that appears within the popup. Dates prior to this value will be disabled and cannot be selected by the user.
	    *	Property type: any
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies how many calendar months are visible within the popup interface at once. Increasing this number allows users to view and select dates across multiple months simultaneously.
	    *	Property type: number
	    */
	    get months() {
	        return this.nativeElement ? this.nativeElement.months : undefined;
	    }
	    set months(value) {
	        if (this.nativeElement) {
	            this.nativeElement.months = value;
	        }
	    }
	    /** Sets or retrieves the value of the element's name attribute. The name attribute is important when submitting data within an HTML form, as it identifies the form field's key in the submitted data, allowing the server to process the input correctly. Assigning a unique name to each form element ensures that their values are included in the form submission and can be accessed on the server side.
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
	    /** Specifies whether the dropdown menu is currently open ('true') or closed ('false'). This boolean value controls the visibility of the dropdown component on the user interface.
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
	    /** Specifies the placeholder text that appears inside the input field when it is empty, providing a hint or example of the expected input value.
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
	    /** Specifies whether the user can type text directly into the input field. When a dataSource is provided and dropDownButtonPosition is set to 'left' or 'right', setting readonly to true makes the element function as a DropDownList, allowing selection only from the provided options. Setting readonly to false enables ComboBox behavior, allowing the user to both select from the list and enter custom input.
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
	    /** Gets or sets a value that specifies whether the element's alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element will be displayed in a manner consistent with locales that require right-to-left text direction, ensuring proper layout and text alignment for RTL fonts.
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
	    /** Specifies the character or string used to separate the start date and end date within the input field when a date range is selected. This delimiter helps clearly distinguish between the beginning and ending dates entered by the user.
	    *	Property type: string
	    */
	    get separator() {
	        return this.nativeElement ? this.nativeElement.separator : undefined;
	    }
	    set separator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.separator = value;
	        }
	    }
	    /** Specifies the format in which dates are displayed within the input field. This property accepts date format options compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). If not explicitly set, the date format will automatically be determined based on the current value of the 'locale' property. Ensure the provided format object follows the valid options for Intl.DateTimeFormat to guarantee proper date rendering.
	    *	Property type: TimeRangeFormat
	    */
	    get timeFormat() {
	        return this.nativeElement ? this.nativeElement.timeFormat : undefined;
	    }
	    set timeFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.timeFormat = value;
	        }
	    }
	    /** Specifies whether users can select a time value in addition to a date. When enabled, a time picker will be displayed, allowing users to choose both date and time; when disabled, only date selection is available.
	    *	Property type: boolean
	    */
	    get timepicker() {
	        return this.nativeElement ? this.nativeElement.timepicker : undefined;
	    }
	    set timepicker(value) {
	        if (this.nativeElement) {
	            this.nativeElement.timepicker = value;
	        }
	    }
	    /** Specifies the visual theme applied to the element. Themes control the appearance and styling of elements, including colors, fonts, spacing, and other design attributes, ensuring a consistent look and feel across the user interface.
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
	    /** When set to true, this property prevents the element from receiving keyboard or programmatic focus. As a result, users will not be able to navigate to the element using the Tab key or other focus methods.
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
	    /** Gets or sets the value of the element. The data type of value is determined by the valueType property; for example, if valueType is set to "number", value will hold a numeric value, while if valueType is "string", value will contain a text string. Use this property to reliably read from or assign a new value to the element in accordance with its specified type.
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
	    /** Specifies the data type that will be returned by the 'value' property, allowing developers to know what type of value (e.g., string, number, boolean, object) to expect when accessing this property.
	    *	Property type: DateRangeInputValueType | string
	    */
	    get valueType() {
	        return this.nativeElement ? this.nativeElement.valueType : undefined;
	    }
	    set valueType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.valueType = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "dateFormat", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "icons", "inputPurpose", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "months", "name", "opened", "placeholder", "readonly", "rightToLeft", "separator", "timeFormat", "timepicker", "theme", "unfocusable", "value", "valueType"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu by hiding all its options and returning the dropdown to its inactive state. This action ensures that no items are displayed and any selection process is canceled or finalized, depending on the current workflow.
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
	    /** Displays the dropdown menu, allowing users to view and select available options.
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
	    /** Selects the text within the input field. If the input is set to readonly, the element will be focused instead, but the text will not be selected.
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
	        return (React.createElement("smart-date-range-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.DateRangeInput = DateRangeInput;
	exports.default = DateRangeInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
