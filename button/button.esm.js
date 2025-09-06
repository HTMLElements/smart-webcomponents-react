
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

let Smart$3;
if (typeof window !== "undefined") {
    Smart$3 = window.Smart;
}
/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
class RepeatButton extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'RepeatButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Gets or sets the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, specifying a different value will enable and control the element’s animation behavior according to the selected mode.
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
    /** Defines how the button responds to user click interactions, determining whether actions are triggered on mouse press, release, or other specific conditions.
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
    /** Specifies the amount of time, in milliseconds, to wait between each repeated action or event. This determines how long the system pauses before triggering the repeat again.
    *	Property type: number
    */
    get delay() {
        return this.nativeElement ? this.nativeElement.delay : undefined;
    }
    set delay(value) {
        if (this.nativeElement) {
            this.nativeElement.delay = value;
        }
    }
    /** Controls whether the ratio button is visible and can be interacted with. When enabled, users can use the ratio button; when disabled, the button is hidden or inactive.
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
    /** Specifies the amount of time, in milliseconds, to wait before starting the first repeat iteration. This delay occurs only before the initial repetition and does not affect subsequent iterations.
    *	Property type: number
    */
    get initialDelay() {
        return this.nativeElement ? this.nativeElement.initialDelay : undefined;
    }
    set initialDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.initialDelay = value;
        }
    }
    /** Assigns the specified HTML markup to the element's inner content, replacing all existing child elements and text. Be cautious when inserting dynamic content to avoid potential security risks such as cross-site scripting (XSS).
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
    /** Sets or retrieves the unlockKey used to authorize and enable access to the product. This key is required to unlock product features or functionalities that are otherwise restricted.
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
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") used for localizing content. This property works together with the messages property to determine which set of translations or text strings to display based on the selected language. Setting this value controls which messages from the messages object are shown to users.
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
    /** Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update interface text based on the selected locale.
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
    /** Defines an object containing string values that represent the various states of password strength, such as "weak," "medium," and "strong." Each property in the object corresponds to a specific password strength level, allowing for the customization of messages or labels displayed to users based on the evaluated strength of their password.
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
    /** Retrieves the current name of the widget or assigns a new name to the widget. This property allows you to identify and reference the widget programmatically.
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
    /** When the custom element is set to "readonly", all user interactions—such as input, edits, or selection—are disabled. The element's content is visible but cannot be modified or interacted with by the user. This ensures that the data remains unchanged while still allowing it to be displayed.
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
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the interface.
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
    /** If set to true, the element will be removed from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard (e.g., by pressing the Tab key), enhancing accessibility control.
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
    /** Sets a new value for the widget or retrieves its current value, allowing for both updating and accessing the widget's data.
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
        return ["animation", "clickMode", "delay", "disabled", "initialDelay", "innerHTML", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "theme", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onClick", "onCreate", "onReady"];
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
            Smart$3.Render();
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
        return (React.createElement("smart-repeat-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$2;
if (typeof window !== "undefined") {
    Smart$2 = window.Smart;
}
/**
 ToggleButton allows the user to change a setting between two states.
*/
class ToggleButton extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ToggleButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, and the element will appear or update instantly without any animated transitions. If a different value is assigned, the element will use the corresponding animation effect during state changes.
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
    /** Defines or updates the current state of the element, controlling its behavior, appearance, or functionality based on the specified value. This property determines how the element responds to user interactions and can trigger associated changes in the interface or underlying logic.
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
    /** Specifies how the button responds to user click interactions, determining the trigger conditions for its click event (e.g., on mouse down, on mouse up, or after a complete click).
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
    /** Determines whether the ratio button is displayed and interactive. Set to true to show and enable the button, or false to hide and disable it.
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
    /** Assigns the specified HTML markup to the element’s content, replacing all existing child elements and text within the element. This allows dynamic insertion of HTML structure and content inside the targeted element.
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
    /** Sets or retrieves the value of the unlockKey, a unique code or token required to authorize and unlock access to the product’s features or functionality.
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
    /** Specifies or retrieves the current language setting. This property works together with the messages property to determine which localized messages are displayed. When you set this property, the component selects the appropriate set of messages corresponding to the chosen language.
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
    /** Callback function associated with the localization module, typically used to handle events or operations such as language changes, text translations, or localization updates within the application.
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
    /** Sets or retrieves an object containing the text strings displayed in the widget, allowing for easy localization and customization of interface messages. This property works together with the locale property to provide translations and adapt the widget's language to different regions. Use this object to define or override the default text for various UI elements, tooltips, messages, and labels within the widget.
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
    /** Gets or assigns the name of the widget. This property allows you to retrieve the current name of the widget or specify a new name for identification and reference purposes within the application.
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
    /** If the custom element has the 'readonly' attribute set, its content cannot be modified by the user. However, users may still be able to interact with the element in other ways, such as selecting or copying its content. No input changes or value modifications are permitted while the element is in the readonly state.
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
    /** Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design-related properties.
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
    /** When set to true, the element will be removed from the tab order and cannot receive focus via keyboard or mouse interactions.
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
    /** Gets the current value of the widget or sets a new value for the widget. Use this property to retrieve what the widget currently holds or to update it programmatically.
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
        return ["animation", "checked", "clickMode", "disabled", "innerHTML", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "theme", "unfocusable", "value"];
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
            Smart$2.Render();
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
        return (React.createElement("smart-toggle-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$1;
if (typeof window !== "undefined") {
    Smart$1 = window.Smart;
}
/**
 PowerButton is On/Off rounded button.
*/
class PowerButton extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'PowerButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode for the element. When the property is set to 'none', all animations are disabled and the element will render without any animated transitions or effects. Otherwise, animations will be applied according to the specified mode.
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
    /** Sets or retrieves the current checked state of the element, indicating whether it is selected, unselected, or in an indeterminate state.
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
    /** Specifies how the button responds to user clicks, determining the interaction behavior such as whether the action is triggered on mouse press, release, or another click event.
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
    /** Controls whether the power button is active or inactive. When enabled, the power button is functional and can be used to perform its designated action. When disabled, the power button is unresponsive and cannot be used.
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
    /** Gets or sets the unlockKey property, a unique string used to authenticate and unlock access to the product’s features or full version. This key must be valid to successfully enable restricted functionality.
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
    /** Specifies the current language to be used for message localization. This property determines which language's messages are retrieved from the messages property. You can use it to set or get the active language code (e.g., 'en', 'fr', 'es'), ensuring the appropriate localized messages are displayed to users.
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
    /** Callback function associated with the localization module, typically used to handle language changes, load translations, or update content based on the selected locale.
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
    /** Defines or retrieves an object containing the text strings used within the widget, allowing for customization and localization of user interface elements. This property works together with the locale setting to display the widget's labels, messages, and other textual content in the appropriate language. The provided object maps text keys to their localized string values.
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
    /** Gets the current name of the widget or sets a new name for the widget. This property allows you to retrieve the widget's identifier or assign a custom name to help distinguish it from other widgets in your application.
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
    /** When the custom element is set to readonly, its content cannot be modified by the user either through direct input or interaction with form controls within the element. However, users may still be able to focus, highlight, or copy its content, depending on its implementation. No actions or events that would change the element’s value or state will be permitted.
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
    /** Specifies the theme to be applied to the element. The selected theme controls the visual style, including colors, fonts, and overall appearance, ensuring a consistent look and feel across the component.
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
    /** If set to true, the element will be excluded from the tab sequence and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key or programmatically set focus to it.
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
    /** Retrieves the current value of the widget or assigns a new value to it. This property allows you to read the widget's state or update it programmatically.
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
        return ["animation", "checked", "clickMode", "disabled", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "theme", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
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
            Smart$1.Render();
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
        return (React.createElement("smart-power-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
class Button extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Button' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the animation mode for the element. When set to 'none', all animations are disabled. Use this property to enable, disable, or customize the animation behavior as needed. You can get the current animation mode or assign a new value to control how animations are applied.
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
    /** Specifies how the element responds to user click interactions, such as triggering specific actions, toggling states, or initiating custom event handling based on the selected mode.
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
    /** Specifies the inner content of the element, such as text, HTML, or child elements, determining what is displayed inside the element on the web page.
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
    /** Determines whether the button is interactive. When enabled ('true'), users can click and interact with the button. When disabled ('false'), the button appears inactive and does not respond to user actions.
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
    /** Updates the contents of the element by setting its inner HTML to the specified value. This replaces all existing child elements and text within the element with the provided HTML markup. Use caution when inserting user-generated content to avoid security risks such as cross-site scripting (XSS).
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
    /** Handles the retrieval or assignment of the 'unlockKey', a unique value required to authorize and unlock access to the product's features or content.
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
    /** Specifies the language code to use for retrieving or displaying messages. When set, it determines which localized message set from the messages property is used. Getting this property returns the current language code. Typically used for enabling multi-language support within the application.
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
    /** A callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this callback to customize how localized messages are structured or displayed before they are delivered to your application.
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
    /** Defines or retrieves an object containing localized strings for the widget's user interface. This property allows you to customize text displayed by the widget for different languages and regions, and works in conjunction with the locale property to ensure proper localization.
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
    /** Defines or retrieves the name attribute of the element. The name attribute uniquely identifies form elements when submitting data through an HTML form, allowing the server to associate input values with their corresponding fields. This attribute is essential for processing form data correctly.
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
    /** If the custom element is set to readonly, users will not be able to modify its value or content through direct interaction (such as typing, selecting, or dragging). However, the element may still be focusable and its value can be changed programmatically via scripts. User-initiated actions that would normally alter its state are disabled.
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
    /** Gets or sets a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is typically used by languages such as Arabic or Hebrew. When enabled, the element is properly aligned to display content for RTL locales.
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
    /** Specifies the visual theme applied to the element, which controls its overall appearance, including colors, fonts, and styling. This property allows you to select a predefined look and feel for the element.
    *	Property type: string
    */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        if (this.nativeElement) {
            this.nativeElement.type = value;
        }
    }
    /** Specifies or retrieves the button's type attribute, which determines the button's behavior—such as "submit" to submit a form, "reset" to reset form fields, or "button" for a general-purpose clickable button.
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
    /** Sets or retrieves the button's value attribute, which typically defines the text displayed on the button or the value submitted when the button is used in a form.
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
        return ["animation", "clickMode", "content", "disabled", "innerHTML", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "rightToLeft", "theme", "type", "value", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onClick", "onCreate", "onReady"];
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
        return (React.createElement("smart-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Button, PowerButton, RepeatButton, Smart, ToggleButton, Button as default };
