
"use client";

import '../source/modules/smart.countryinput'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.countryinput');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 The Country Input specifies an input field where the user can select a country.
*/
class CountryInput extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'CountryInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, the element cannot be focused, clicked, or edited by the user.
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
    /** Allows you to specify extra CSS class names that will be applied to the Input dropdown element, enabling further customization of its appearance and styling.
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
    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This controls where the dropdown button appears in the user interface.
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
    /** Specifies the height of the dropdown component. By default, this value is set to an empty string, which means the dropdown’s height will be determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown’s height.
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
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by a designated CSS variable rather than a fixed value. You can set this property to a specific CSS width value (e.g., "200px" or "50%") to override the default behavior and directly control the dropdown's width. If left empty, ensure the relevant CSS variable is properly defined to maintain consistent styling.
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
    /** Specifies or retrieves the value of the element’s name attribute. This attribute uniquely identifies the element within form data, allowing its value to be included when the form is submitted. The name attribute is essential for correctly grouping and processing user input on the server side during form submission.
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
    /** Indicates whether the dropdown menu is currently open or closed. This property returns true if the dropdown is visible to the user, and false if it is hidden.
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
    /** Defines or retrieves an array of country codes to override the default list of all countries. Each country code in the array must be a valid ISO 3166-1 alpha-2 code (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of a two-letter uppercase abbreviation representing each country (e.g., 'US' for United States, 'FR' for France). Use this property to specify a custom subset of countries as needed.
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
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing a hint to the user about the expected input format or content.
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
    /** Gets or sets the currently selected country for the element. The value should be provided as an ISO 3166-1 alpha-2 country code (for example, "US" for the United States or "FR" for France). For the complete list of valid country codes, refer to the ISO 3166-1 alpha-2 standard: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
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
    /** Gets or sets a value that determines whether the element's alignment supports right-to-left (RTL) locales and text direction, typically used for languages such as Arabic or Hebrew. When enabled, the element's content aligns according to RTL layout standards.
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
    /** Specifies the theme to be applied to the element. The selected theme controls the visual style, including colors, typography, and other design attributes, ensuring consistency with the overall user interface.
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
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via the Tab key or other focus-related interactions.
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
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. Use this to programmatically update or access the content, state, or data associated with the element (such as the value of an input field or the text of a form control).
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
        return ["disabled", "dropDownClassList", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "name", "opened", "onlyCountries", "placeholder", "selectedCountry", "rightToLeft", "theme", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onChanging", "onItemClick", "onCreate", "onReady"];
    }
    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its inactive state.
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
    /** Guarantees that the currently active (selected) item remains within the visible area of its container, automatically scrolling as needed to keep the item in view.
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
    /** Displays the drop-down menu, allowing users to view and select available options from the list.
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
    /** Selects the text within the input field. If the input field is set to readonly, it will instead focus the element without selecting the text.
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
        return (React.createElement("smart-country-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { CountryInput, Smart, CountryInput as default };
