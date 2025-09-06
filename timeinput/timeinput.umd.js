
require('../source/modules/smart.timeinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.timeinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 TimeInput specifies an input field where the user can enter a time. It also has a popup with a Calendar that allows to pick a time.
	*/
	class TimeInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TimeInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies the current animation mode for the component. You can retrieve the current mode or assign a new one using this property. To completely disable animations, set the property to 'none'. When set to any other supported value, the corresponding animation effects will be enabled.
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
	    /** Specifies the format in which the time is displayed within the input field. This option accepts configuration objects compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing you to customize the presentation of hours, minutes, seconds, and related time components. By default, the time format uses a 'numeric' style for each unit, displaying time values as numbers (e.g., "14:05"). Adjust this property to use other available formatting options, such as '2-digit', or to include additional components as needed.
	    *	Property type: TimeFormat
	    */
	    get dateTimeFormat() {
	        return this.nativeElement ? this.nativeElement.dateTimeFormat : undefined;
	    }
	    set dateTimeFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dateTimeFormat = value;
	        }
	    }
	    /** Controls whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its disabled state.
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
	    /** Specifies the alignment and placement of the dropdown button relative to its parent element, allowing you to control whether the button appears to the left, right, center, top, or bottom of its container.
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
	    /** Specifies the height of the dropdown menu. By default, the height is set to 'auto', allowing the dropdown to adjust automatically based on its content. You can set a specific height (in pixels, ems, etc.) to control the maximum visible area of the dropdown; when the content exceeds this height, a scrollbar will appear.
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
	    /** Specifies the width of the dropdown menu. By default, this value is an empty string, which means the dropdown’s width will be determined by a CSS variable (e.g., --dropdown-width). You can override the default behavior by explicitly setting a width value (such as '200px', '50%', etc.), which will directly apply that width to the dropdown. If left unset, ensure that the related CSS variable is defined to control the dropdown’s appearance.
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
	    /** Defines the intended purpose of the input field and specifies the level of permission granted to the browser or user agent to automatically assist users in completing the input, particularly within form contexts. This attribute provides guidance to browsers about the type of data expected—for example, whether the field should contain a user's name, address, or other personal information—thus enabling features like autofill. The value of this property aligns with the standard HTML autocomplete attribute and accepts specific keywords such as 'on', 'off', 'name', 'organization', 'street-address', and others, to control the autofill behavior for each input element.
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
	    /** Defines or retrieves the unlockKey, a unique identifier required to unlock and access the product's features or content.
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
	    /** Defines or retrieves the current language setting, typically represented as a locale code (e.g., "en", "fr"). This setting determines which set of localized strings from the messages property will be used for display. Use this property to switch or detect the language context within your application.
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
	    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are delivered to the application. Use this to modify, enhance, or reformat localized messages based on your specific requirements.
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
	    /** Specifies or retrieves an object containing the widget’s display strings, allowing for easy customization and localization of text within the widget. This property is typically used together with the locale property to provide translations and adapt text content to different languages and regions.
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
	    /** Sets or retrieves the value of the element's name attribute. This attribute specifies the name used to identify the element’s data when an HTML form is submitted, allowing its value to be included in the form data sent to the server.
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
	    /** Indicates whether the dropdown menu is currently open and visible to the user. If set to true, the dropdown will be displayed; if false, it will remain closed.
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
	    /** Specifies the placeholder text that appears inside the input field when it is empty, providing users with a hint or example of the expected input format or content.
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
	    /** Specifies whether the user can manually enter text into the input field. When dropDownButtonPosition is set to 'left' or 'right' and a dataSource is provided, the readonly property controls the component's behavior:  - If readonly is false, the element functions as a ComboBox, allowing users to type and select suggestions from the data source.- If readonly is true, the element behaves as a DropDownList, restricting user input to only the options available in the data source and preventing manual text entry.
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
	    /** Controls or retrieves whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and display for languages and locales that use right-to-left scripts (such as Arabic or Hebrew).
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
	    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the component or application.
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
	    /** When set to true, the element will be excluded from the page’s tab order, making it unfocusable using keyboard navigation or script-based focus commands. This prevents users from moving focus to the element using the Tab key or programmatically via JavaScript (e.g., element.focus()).
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
	    /** Sets a new value for the element or retrieves the current value of the element, depending on how the method is used. This allows you to either update the element's state or access its existing data programmatically.
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
	        return ["animation", "dateTimeFormat", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "opened", "placeholder", "readonly", "rightToLeft", "theme", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu, hiding its list of selectable options and returning the interface to its collapsed state.
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
	    /** Displays the dropdown menu, revealing its available options to the user.
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
	    /** Returns the value converted into the specified format, ensuring the output matches the required data type or structure as defined by the input parameters.
	    */
	    getFormattedValue() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.getFormattedValue();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.getFormattedValue();
	            });
	        }
	    }
	    /** Returns the current value entered or selected in the input field by the user. This value may be typed text, a number, a selected option, or any other data depending on the input type.
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
	    /** Selects the text within the input field. If the input is set to readonly, the element will receive focus but the text will not be selected.
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
	    /** Defines the current value of the input field. Expects an array containing exactly two numbers: the first representing the hour and the second representing the minutes (e.g., `[13, 45]` for 1:45 PM).
	    * @param {any[]} value. The value to be set.
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
	        return (React.createElement("smart-time-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.TimeInput = TimeInput;
	exports.default = TimeInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
