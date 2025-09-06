
"use client";

import '../source/modules/smart.button'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.button');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Checkbox is a component used for allowing a user to make a multiple choice. Broadly used in the forms and surveys.
*/
class CheckBox extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'CheckBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' will disable all animations; assigning other valid values will enable the corresponding animation effects.
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
    /** Sets or retrieves the checked state of the component. If set to true, the component appears checked (selected); if false, it appears unchecked. Useful for managing selection or toggle controls such as checkboxes or radio buttons.
    *	Property type: boolean
    */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        if (this.nativeElement) {
            this.nativeElement.checked = value;
        }
    }
    /** Specifies the area or region of the element that users can interact with to expand, collapse, or toggle its state. This property defines which part of the element responds to toggle actions, such as clicks or taps.
    *	Property type: CheckMode | string
    */
    get checkMode() {
        return this.nativeElement ? this.nativeElement.checkMode : undefined;
    }
    set checkMode(value) {
        if (this.nativeElement) {
            this.nativeElement.checkMode = value;
        }
    }
    /** Specifies how the checkbox responds to user click interactions, such as toggling its checked state or triggering related events.
    *	Property type: ClickMode | string
    */
    get clickMode() {
        return this.nativeElement ? this.nativeElement.clickMode : undefined;
    }
    set clickMode(value) {
        if (this.nativeElement) {
            this.nativeElement.clickMode = value;
        }
    }
    /** Determines whether the checkbox is interactive or not. When set to true, the checkbox is enabled and the user can select or deselect it. When set to false, the checkbox is disabled, preventing any user interaction.
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
    /** Sets or retrieves the HTML markup contained within the element. When set, it updates the element’s contents by parsing the specified HTML string and replacing any existing child nodes. When accessed, it returns a string representing the element’s current HTML content.
    *	Property type: string
    */
    get innerHTML() {
        return this.nativeElement ? this.nativeElement.innerHTML : undefined;
    }
    set innerHTML(value) {
        if (this.nativeElement) {
            this.nativeElement.innerHTML = value;
        }
    }
    /** Specifies or retrieves the unlockKey used to activate or grant access to the product. This key serves as a security credential required to unlock and use the product’s features.
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
    /** Sets or retrieves the current language code (e.g., 'en', 'fr') used for localization. This property works together with the messages property to select and display the appropriate set of localized messages based on the specified language.
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
    /** A callback function that allows you to define a custom formatting logic for messages returned by the Localization Module. Use this to adjust message content, structure, or variables before the final output is presented to the user.
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
    /** Defines or retrieves an object containing localized strings used throughout the widget’s interface. This property allows you to customize the text displayed by the widget for different languages or regions. It works in conjunction with the locale property, which determines the current language, ensuring that the appropriate set of strings is applied based on the selected locale.
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
    /** Sets or retrieves the value of the element’s name attribute. The name attribute identifies form elements when submitting HTML forms, allowing their values to be sent to the server as key-value pairs. This is essential for server-side processing of form data.
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
    /** When the element is set to readonly, users can view its content but are unable to modify or edit it. However, the element may still receive focus and allow text selection or copying, depending on the element's type and browser behavior. User interaction that changes the value or state of the element is disabled.
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
    /** Gets or sets a value that determines whether the element’s layout is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, ensuring proper text direction and alignment for users in those locales.
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
    /** When set to true, the element is rendered non-focusable, meaning it cannot receive keyboard or programmatic focus. This prevents users from navigating to the element using the keyboard (e.g., with the Tab key) or through scripts.
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
    /** Specifies the theme to be applied to the element. The selected theme controls the element’s visual appearance, including colors, fonts, and overall style, ensuring a consistent and cohesive look throughout the interface.
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
    /** Retrieves the current value of the element or assigns a new value to it. This property allows you to programmatically read or update the element’s value—for example, reading user input from a form field or setting a default value dynamically.
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
        return ["animation", "checked", "checkMode", "clickMode", "disabled", "innerHTML", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "rightToLeft", "unfocusable", "theme", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCheckValue", "onUncheckValue", "onCreate", "onReady"];
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
        return (React.createElement("smart-check-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { CheckBox, Smart, CheckBox as default };
