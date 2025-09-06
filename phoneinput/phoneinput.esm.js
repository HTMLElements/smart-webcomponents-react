
"use client";

import '../source/modules/smart.phoneinput'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.phoneinput');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 The Phone Input specifies an input field where the user can enter and validate a phone number.
*/
class PhoneInput extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'PhoneInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Determines whether the element is interactive or inactive. When enabled, the element can be interacted with by the user; when disabled, the element becomes unresponsive to user actions, often appearing visually distinct (e.g., grayed out).
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
    /** Specifies extra CSS class names to be applied to the Input dropdown element, allowing for customized styling and theming beyond the default classes.
    *	Property type: any
    */
    get dropDownClassList() {
        return this.nativeElement ? this.nativeElement.dropDownClassList : undefined;
    }
    set dropDownClassList(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownClassList = value;
        }
    }
    /** Specifies the placement of the dropdown button relative to its associated element, such as positioning it to the left, right, above, or below the target UI component.
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
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown's height.
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
    /** Specifies the width of the dropdown menu. By default, this value is an empty string (""). When left empty, the dropdown's width is determined by a CSS variable, allowing the width to be managed through external stylesheets rather than being hardcoded. This provides flexibility for responsive design and consistent styling across your application. If a specific width is provided (e.g., "200px" or "50%"), it will override the CSS variable and explicitly set the dropdown's width.
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
    /** Defines or retrieves an object containing string values used throughout the widget’s user interface, allowing for easy localization of text. This property works together with the locale setting to display the widget’s content in different languages, based on the specified translations. Use this object to provide or customize all user-facing strings for multilingual support.
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
    /** Sets or retrieves the unlockKey property, which serves as a unique key required to unlock access to the product. When assigning a value, the unlockKey enables authorized usage; when retrieving, it provides the current key associated with the product’s access permissions.
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
    /** Defines or retrieves the value of the name attribute for the element. The name attribute uniquely identifies the element within an HTML form, allowing its data to be included and referenced when the form is submitted to a server. This is essential for processing form data on the server side.
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
    /** Specifies whether the input should be in international or national format. In international mode, the input should begin with a '+' followed by the country code (e.g., +1 555-1234). In national mode, the input should omit the '+' and country code, using only the local number format.
    *	Property type: boolean
    */
    get nationalMode() {
        return this.nativeElement ? this.nativeElement.nationalMode : undefined;
    }
    set nationalMode(value) {
        if (this.nativeElement) {
            this.nativeElement.nationalMode = value;
        }
    }
    /** Specifies whether the dropdown menu is currently visible (open) or hidden (closed).
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
    /** Specifies or retrieves an array of country codes to customize the set of countries used, replacing the default list that includes all countries. Each country code must be a valid ISO 3166-1 alpha-2 code (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of two uppercase letters (e.g., 'US' for the United States, 'FR' for France). Use this property to limit available options to a specific set of countries as needed.
    *	Property type: any
    */
    get onlyCountries() {
        return this.nativeElement ? this.nativeElement.onlyCountries : undefined;
    }
    set onlyCountries(value) {
        if (this.nativeElement) {
            this.nativeElement.onlyCountries = value;
        }
    }
    /** Specifies the placeholder text that appears inside the input field before the user enters any value, providing a hint or example of the expected input format.
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
    /** Gets or sets the selected country for the element using a country code. The country code must conform to the ISO 3166-1 alpha-2 standard (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of a two-letter, uppercase code representing each country (e.g., "US" for United States, "FR" for France).
    *	Property type: string
    */
    get selectedCountry() {
        return this.nativeElement ? this.nativeElement.selectedCountry : undefined;
    }
    set selectedCountry(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedCountry = value;
        }
    }
    /** Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages (such as Arabic or Hebrew), enabling proper display and layout of text and content for those locales.
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
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, spacing, and other stylistic properties, ensuring a consistent look and feel across the user interface.
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
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation and standard focus events.
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
    /** Retrieves the current value of the element or assigns a new value to it. This property can be used to access the data contained within form elements (such as input, textarea, or select) or to update their content programmatically.
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
    // Gets the properties of the React component.
    get properties() {
        return ["disabled", "dropDownClassList", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "messages", "unlockKey", "name", "nationalMode", "opened", "onlyCountries", "placeholder", "selectedCountry", "rightToLeft", "theme", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onChanging", "onItemClick", "onCreate", "onReady"];
    }
    /** Closes the dropdown menu, hiding its visible options from the user and collapsing the interface element.
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
    /** Guarantees that the currently active (selected) item remains visible within the viewport by automatically scrolling the container as needed. This ensures users can always see and interact with their selection, even as the list or content changes.
    */
    ensureVisible() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible();
            });
        }
    }
    /** Returns the provided phone number as a formatted string, applying standard formatting conventions (such as adding parentheses, spaces, or dashes) based on the specified locale or default format. Ensures consistency and improves readability for display or storage purposes.
    * @param {boolean} isInternational?. When you use 'false', the national phone number will be returned and the international phone number, when you use 'true' as parameter.
    * @returns {string}
  */
    getNumber(isInternational) {
        const result = this.nativeElement.getNumber(isInternational);
        return result;
    }
    /** Retrieves an object representing a country based on its dial code. The returned object contains the following properties:- **label**: The local or English name of the country (e.g., "United States").- **value**: A unique identifier for the country (commonly the country name or abbreviation).- **iso2**: The two-letter ISO 3166-1 alpha-2 country code (e.g., "US").- **dialCode**: The international telephone dialing code associated with the country (e.g., "+1").
    * @param {string} dialCode?. Returns the national or international phone number
    * @returns {any}
  */
    getItemByDialCode(dialCode) {
        const result = this.nativeElement.getItemByDialCode(dialCode);
        return result;
    }
    /** Returns the currently selected item as an object.  This object contains the following properties:  - `label`: A string representing the display name of the item (e.g., country name).  - `value`: A string or identifier associated with the item (e.g., country code).  - `iso2`: A two-letter ISO 3166-1 alpha-2 country code string (e.g., 'US' for United States).  - `dialCode`: A string representing the country’s international dialing code (e.g., '+1').
    * @returns {any}
  */
    getSelectedItem() {
        const result = this.nativeElement.getSelectedItem();
        return result;
    }
    /** Determines if the provided phone number meets the required format and validation rules, returning true for a valid phone number and false if the input is invalid.
    * @returns {boolean}
  */
    isValidNumber() {
        const result = this.nativeElement.isValidNumber();
        return result;
    }
    /** Validates whether the entered phone number is in the correct format and meets specified criteria, such as required length, allowed characters, and country or area code compliance.
    */
    validate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.validate();
            });
        }
    }
    /** Displays the drop-down menu, making its list of selectable options visible to the user.
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
    /** Enhances the behavior of an input field by selecting its text content when it is editable. If the input field is marked as readonly, it will instead focus the element without selecting the text. This ensures that users can easily interact with editable inputs, while still providing focus to readonly fields for accessibility or further actions.
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
        return (React.createElement("smart-phone-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { PhoneInput, Smart, PhoneInput as default };
