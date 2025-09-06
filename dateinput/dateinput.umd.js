
require('../source/modules/smart.dateinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dateinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 DateInput specifies an input field where the user can enter a date. It also has a popup with a Calendar that allows to pick a date.
	*/
	class DateInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'DateInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies whether the calendar button pop-up should automatically close after a user selects a date or time. If set to true, the pop-up will close immediately upon selection; if false, the pop-up will remain open, allowing multiple selections or further interaction.
	    *	Property type: boolean
	    */
	    get autoClose() {
	        return this.nativeElement ? this.nativeElement.autoClose : undefined;
	    }
	    set autoClose(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoClose = value;
	        }
	    }
	    /** Specifies the duration (in milliseconds) to wait before automatically closing the calendar pop-up after it is opened. This setting is effective only when autoClose is set to true; if autoClose is false, this option is ignored.
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
	    /** Specifies the configuration options and properties that will be applied to the popup calendar, such as date format, selectable date range, default view, and localization settings.
	    *	Property type: any
	    */
	    get calendarProperties() {
	        return this.nativeElement ? this.nativeElement.calendarProperties : undefined;
	    }
	    set calendarProperties(value) {
	        if (this.nativeElement) {
	            this.nativeElement.calendarProperties = value;
	        }
	    }
	    /** Specifies the format in which dates are displayed within the input field. This property accepts a configuration object compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). You can customize the date format by providing options such as day, month, and year with values like 'numeric', '2-digit', 'long', etc. For example, { day: 'numeric', month: 'long', year: '2-digit' }. Internally, JavaScript’s Intl.DateTimeFormat is used to format the date strings according to these options. If not specified, the default format is { day: 'numeric', month: 'numeric', year: 'numeric' }, which displays dates using numeric day, month, and year values (e.g., 06/11/2024).
	    *	Property type: any
	    */
	    get dateTimeFormat() {
	        return this.nativeElement ? this.nativeElement.dateTimeFormat : undefined;
	    }
	    set dateTimeFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dateTimeFormat = value;
	        }
	    }
	    /** Determines whether the element is enabled and interactive, or disabled and non-interactive. When set to true, the element is disabled and cannot be interacted with by the user; when set to false, the element remains enabled and fully functional.
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
	    /** Specifies the placement of the dropdown button within its container, such as aligning it to the left, right, center, or another designated position. This setting affects where the button appears in relation to surrounding elements.
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
	    /** Specifies the height of the drop-down menu. By default, the height is set to 'auto', allowing the drop-down to automatically adjust its size based on its content. You can set a specific value (e.g., '200px', '50%', etc.) to limit or customize the height as needed.
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
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by the corresponding CSS variable. If a specific value is provided (such as "200px" or "50%"), it will override the CSS variable and explicitly set the dropdown's width to that value. Use this property to customize the dropdown’s width as needed.
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
	    /** Sets the custom date and time formatting pattern. When the 'formatString' property is set, it takes precedence over the 'dateTimeFormat' property, which will be disabled. The formatted output will strictly follow the pattern defined in 'formatString'.'Built-in Format Strings:'- ''d'': Short date pattern (e.g., 'M/d/yyyy')- ''D'': Long date pattern (e.g., 'dddd, MMMM dd, yyyy')- ''t'': Short time pattern (e.g., 'h:mm tt')- ''T'': Long time pattern (e.g., 'h:mm:ss tt')- ''f'': Long date, short time pattern (e.g., 'dddd, MMMM dd, yyyy h:mm tt')- ''F'': Long date, long time pattern (e.g., 'dddd, MMMM dd, yyyy h:mm:ss tt')- ''M'': Month/day pattern (e.g., 'MMMM dd')- ''Y'': Year/month pattern (e.g., 'yyyy MMMM')- ''S'': Sortable date/time pattern, culture-invariant (e.g., 'yyyy-MM-ddTHH:mm:ss')'Custom Format String Components:'- ''d'': Day of month (1–31)- ''dd'': Day of month, two digits (01–31)- ''ddd'': Abbreviated day name (e.g., Mon, Tue)- ''dddd'': Full day name (e.g., Monday, Tuesday)- ''h'': Hour (12-hour clock, 1–12)- ''hh'': Hour (12-hour clock, two digits, 01–12)- ''H'': Hour (24-hour clock, 0–23)- ''HH'': Hour (24-hour clock, two digits, 00–23)- ''m'': Minute (0–59)- ''mm'': Minute, two digits (00–59)- ''M'': Month (1–12)- ''MM'': Month, two digits (01–12)- ''MMM'': Abbreviated month name (e.g., Jan, Feb)- ''MMMM'': Full month name (e.g., January, February)- ''s'': Second (0–59)- ''ss'': Second, two digits (00–59)- ''t'': First character of the AM/PM designator (A or P)- ''tt'': AM/PM designator- ''y'': Year, last one or two digits (e.g., 0–99)- ''yy'': Year, last two digits (00–99)- ''yyy'': Year, minimum three digits- ''yyyy'': Year, four digits (e.g., 2024)- ''yyyyy'': Year, minimum five digits (pads with leading zeros if necessary)'Note:'  Use these format specifiers to customize how dates and times are displayed in your application. If you assign a value to 'formatString', make sure to use the correct pattern for your intended output. When this property is active, 'dateTimeFormat' settings are ignored.
	    *	Property type: string
	    */
	    get formatString() {
	        return this.nativeElement ? this.nativeElement.formatString : undefined;
	    }
	    set formatString(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatString = value;
	        }
	    }
	    /** Defines the expected type of input data for the form element and specifies whether, and to what extent, the browser or user agent is allowed to provide automated autofill assistance. This value directly corresponds to the standard HTML autocomplete attribute and guides browsers in offering suggestions to the user, improving form completion speed and accuracy. Possible values include generic options such as 'on' or 'off', as well as more specific values describing the kind of information expected—such as 'name', 'email', 'organization', 'street-address', and others. Setting this attribute helps enhance both user experience and data accuracy by allowing browsers to match the input field with saved user data.
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
	    /** Retrieves or assigns the unlockKey value used to authenticate and grant access to the product. The unlockKey serves as a security credential required to unlock the product’s features or content.
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
	    /** Specifies or retrieves the current language setting. This property determines which language is used when displaying messages, in coordination with the messages property that holds localized message strings for different languages. Adjusting this property updates the displayed messages to match the selected language.
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
	    /** A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify or enhance the appearance, structure, or content of localization messages before they are rendered to the user.
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
	    /** Specifies the latest selectable date that can be displayed in the popup's Calendar. Dates beyond this value will be disabled and cannot be selected by the user.
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
	    /** Defines or retrieves an object containing the set of user-facing strings displayed by the widget, allowing them to be customized for different languages. This property works in conjunction with the locale property to support localization and internationalization of the widget interface. By providing translated strings in this object, you can ensure that all text elements within the widget match the selected locale.
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
	    /** Specifies the earliest selectable date that can be shown in the Calendar component within the popup. Dates prior to this value will be disabled and cannot be selected by the user.
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
	    /** Enhances or retrieves the value of the 'name' attribute for the element. The 'name' attribute assigns a unique identifier to the element, which is essential when submitting form data. During form submission, the value of the element is sent to the server associated with this 'name', allowing the server to correctly process and recognize each field of the form.
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
	    /** Specifies whether the dropdown menu is currently open (visible to the user) or closed (hidden from view).
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
	    /** Specifies the placeholder text that appears inside the input field before the user enters a value. This text provides guidance or an example of the expected input format.
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
	    /** Determines whether the user can enter or edit text in the input field. When the dropDownButtonPosition property is set to 'left' or 'right' and a dataSource is provided, the readonly property controls the input's behavior:  - If readonly is false, the element functions as a ComboBox, allowing users to type custom values in addition to selecting from the drop-down list.  - If readonly is true, the element functions as a DropDownList, restricting user input to selections from the provided list only; manual text entry is disabled.
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
	    /** Sets or retrieves a value that specifies whether the element’s text and layout are aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, ensuring proper display and reading order for locales that use RTL scripts.
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
	    /** Specifies the visual theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel across the element.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or script-based focus methods.
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
	    /** Gets or sets the value of the element. The value should be either a date string (e.g., "2024-06-01"), a JavaScript Date object, or null to indicate no value.
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["autoClose", "autoCloseDelay", "calendarProperties", "dateTimeFormat", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "formatString", "inputPurpose", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "name", "opened", "placeholder", "readonly", "rightToLeft", "theme", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu, hiding its options from view and returning the dropdown component to its inactive state.
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
	    /** Displays and expands the dropdown menu, allowing the user to view and select available options.
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
	    /** Enhancement:"Selects the text within the input element. If the input is marked as readonly, the element will be focused without selecting its content."
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
	    /** Returns the value converted to the specified format, ensuring that the output matches the required data type or structure as requested.
	    * @param {string | Date} value. The value to be formatted by the method.
	    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.DateTimeFormat valid properties.
	    */
	    getFormattedValue(value, format) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.getFormattedValue(value, format);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.getFormattedValue(value, format);
	            });
	        }
	    }
	    /** Returns the date portion extracted from the provided input, which can be a date, datetime string, or timestamp. The output is formatted as a standard date (e.g., "YYYY-MM-DD"), omitting any time or timezone information present in the input.
	    */
	    getValue() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.getValue();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.getValue();
	            });
	        }
	    }
	    /** Specifies the date value for the input field. This determines the preselected date that appears in the date picker when the input is rendered, or programmatically sets the input's current date. The value should follow the format 'YYYY-MM-DD' to ensure compatibility across browsers.
	    * @param {string | Date} value. The value to be set.
	    */
	    setValue(value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setValue(value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setValue(value);
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
	        return (React.createElement("smart-date-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.DateInput = DateInput;
	exports.default = DateInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
