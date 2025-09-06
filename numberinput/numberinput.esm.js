
"use client";

import '../source/modules/smart.numberinput'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.numberinput');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 NumberInput specifies an input field where the user can enter a numbers.
*/
class NumberInput extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'NumberInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Setting this property to other supported values enables specific animation behaviors as defined by the available modes.
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
    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive (disabled). When set to disabled, the element cannot be interacted with by users, and its associated actions or events will not trigger.
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
    /** Specifies the intended purpose of the input field and indicates the level of permission granted to the user agent (such as a browser or password manager) to automatically assist in completing the input when used within a form. This attribute provides guidance to browsers about the type of data expected in the field, enabling features like autofill and enhanced accessibility. It corresponds to the standard HTML autocomplete attribute and accepts values such as 'on' (to enable autocomplete), 'off' (to disable autocomplete), or more specific tokens like 'name', 'email', 'organization', 'street-address', and others, enabling browsers to supply relevant information where appropriate. For a full list of valid values and their meanings, refer to the official HTML documentation for the autocomplete attribute.
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
    /** Gets or sets the unlockKey, a unique string required to authenticate and unlock access to the product's features. Use this property to retrieve the current unlockKey or assign a new one to enable product usage.
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
    /** Specifies or retrieves the current language code (e.g., "en", "fr") used for localization. This property should be used together with the messages property, which contains the corresponding translated text for each supported language. Setting this value determines which set of messages will be displayed to the user.
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
    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify the structure, content, or appearance of localized messages before they are delivered to the application.
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
    /** Specifies the maximum numeric value that the input field can accept or display. Any value entered that exceeds this limit will be considered invalid.
    *	Property type: number
    */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        if (this.nativeElement) {
            this.nativeElement.max = value;
        }
    }
    /** Defines or retrieves an object containing all the text strings used within the widget that can be localized. This enables the widget's user interface to display text in different languages, depending on the selected locale property. Use this object to provide translations for various widget messages, labels, and prompts to support internationalization.
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
    /** Specifies the minimum numerical value that users are allowed to enter or select within the input field. This value sets the lower limit for acceptable input, ensuring that any input below this threshold will be considered invalid.
    *	Property type: number
    */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        if (this.nativeElement) {
            this.nativeElement.min = value;
        }
    }
    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements and is used as the key when submitting form data to a server. This allows the form data associated with this element to be sent and processed correctly when the form is submitted.
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
    /** Specifies or retrieves the format in which the element's value is represented. This determines how the value is displayed to the user and how it is processed or stored in the underlying data model.
    *	Property type: any
    */
    get numberFormat() {
        return this.nativeElement ? this.nativeElement.numberFormat : undefined;
    }
    set numberFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.numberFormat = value;
        }
    }
    /** Specifies the placeholder text that appears inside the input field before the user enters a value. This text provides a hint or example of the expected input format or content.
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
    /** Specifies whether the user is allowed to type or modify text within the input field. If set to false, the input becomes read-only and the user cannot enter or change its contents.
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
    /** Sets or retrieves a value that determines whether the element’s text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element adjusts its layout and text flow to properly support RTL locales.
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
    /** Specifies or retrieves the amount by which the element’s value increases or decreases when the user interacts with controls such as up/down arrows, sliders, or keyboard inputs. This determines the step interval for adjusting the element’s value.
    *	Property type: number
    */
    get step() {
        return this.nativeElement ? this.nativeElement.step : undefined;
    }
    set step(value) {
        if (this.nativeElement) {
            this.nativeElement.step = value;
        }
    }
    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel across the element. Selecting a theme customizes the design and user experience of the component.
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
    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to select the element using the Tab key or other keyboard navigation methods.
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
    /** Provides a way to retrieve (get) or assign (set) the current value of the element, typically used for form fields such as input, textarea, or select elements. When used as a getter, it returns the element's current value as a string. When used as a setter, it updates the element's value to the specified string.
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
        return ["animation", "disabled", "inputPurpose", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "name", "numberFormat", "placeholder", "readonly", "rightToLeft", "step", "theme", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Returns the value converted to the specified format, ensuring that the output matches the required data type or structure (e.g., string, number, JSON object, date format) as requested by the caller.
    * @param {string | number} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
    * @returns {string}
  */
    getFormattedValue(value, format) {
        const result = this.nativeElement.getFormattedValue(value, format);
        return result;
    }
    /** Returns the numeric value corresponding to the given input. If the input is a number, it is returned as-is; if the input is a string or another type that can be converted to a number, its numeric equivalent is returned. If the input cannot be converted to a number, the function may return NaN or throw an error, depending on implementation.
    * @returns {number}
  */
    getValue() {
        const result = this.nativeElement.getValue();
        return result;
    }
    /** Selects the entire text within the input field. If the input is set to readonly, the function will focus the element instead of selecting its text."
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
    /** Assigns a specified value to the input field, updating its displayed and underlying data. This ensures that the input reflects the current state or user-provided data within the form or component.
    * @param {string | number} value. The value to be set.
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
        return (React.createElement("smart-number-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { NumberInput, Smart, NumberInput as default };
