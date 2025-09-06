
"use client";

import '../source/modules/smart.led'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.led');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 LET Toggle button with Checked boolean value.
*/
class Led extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Led' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled, and elements will display or update instantly without any transition effects. For other values, the specified animation mode will determine how visual changes are animated.
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
    /** Gets the current check state or sets it to a specified value, typically used for checkbox, radio button, or similar UI elements. The check state indicates whether the element is checked, unchecked, or (if supported) in an indeterminate state.
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
    /** Specifies the conditions under which the element will trigger a click event, allowing you to control when and how user interactions or programmatic actions cause the click event to be fired.
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
    /** Controls the LED's power state by enabling (turning on) or disabling (turning off) the LED.
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
    /** Specifies the content to be displayed when the state is set to 'false'.
    *	Property type: string
    */
    get falseContent() {
        return this.nativeElement ? this.nativeElement.falseContent : undefined;
    }
    set falseContent(value) {
        if (this.nativeElement) {
            this.nativeElement.falseContent = value;
        }
    }
    /** Defines a custom template that determines the LED's appearance or behavior when it is in the "off" or false state.
    *	Property type: any
    */
    get falseTemplate() {
        return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
    }
    set falseTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.falseTemplate = value;
        }
    }
    /** Configures the LED to display an indeterminate state, typically represented by a blinking or animated pattern to indicate ongoing activity or a process with an unknown completion time. This is useful for scenarios where the system cannot determine or communicate a specific status or progress value.
    *	Property type: boolean
    */
    get indeterminate() {
        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
    }
    set indeterminate(value) {
        if (this.nativeElement) {
            this.nativeElement.indeterminate = value;
        }
    }
    /** Defines the content to be displayed when the component is in a 'null' or empty state, such as when no data is available or the value is undefined.
    *	Property type: string
    */
    get indeterminateContent() {
        return this.nativeElement ? this.nativeElement.indeterminateContent : undefined;
    }
    set indeterminateContent(value) {
        if (this.nativeElement) {
            this.nativeElement.indeterminateContent = value;
        }
    }
    /** Defines a custom template to visually represent the LED component when it is in an indeterminate state, allowing you to specify the appearance or behavior of the LED during this undefined or transitional state.
    *	Property type: any
    */
    get indeterminateTemplate() {
        return this.nativeElement ? this.nativeElement.indeterminateTemplate : undefined;
    }
    set indeterminateTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.indeterminateTemplate = value;
        }
    }
    /** Sets or retrieves the unlockKey, a unique identifier or code required to unlock access to the product. This property allows you to manage product access by specifying or obtaining the key needed for unlocking restricted features or content.
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
    /** Specifies or retrieves the current language setting for localization purposes. This property works together with the messages property to display interface text and messages in the selected language. When you set this property, the corresponding localized messages from messages are used throughout the application.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify or enhance localized messages—such as applying custom templates, injecting dynamic content, or adjusting formatting—before they are delivered to the user interface.
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
    /** Defines or retrieves an object containing localized strings used by the widget's user interface, such as labels, messages, and tooltips. This property works in tandem with the locale property to enable support for multiple languages, allowing developers to customize text displayed to users based on their selected language or region.
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
    /** Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form elements when submitting HTML forms, allowing their values to be sent to the server as key-value pairs. This attribute is essential for collecting user input in form processing.
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
    /** If the widget is set to read-only, users will be unable to interact with the element or modify its contents. All input and editing functionalities will be disabled, ensuring that the information displayed remains unchanged by the user.
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
    /** Sets or retrieves the value that determines whether the element’s content is aligned to support languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. This property ensures proper text direction and alignment for locales requiring RTL formatting.
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
    /** Specifies the geometric shape or appearance of the LED component, such as circle, square, rectangle, or custom shapes. This setting determines how the LED will be visually rendered in the user interface.
    *	Property type: LedShape | string
    */
    get shape() {
        return this.nativeElement ? this.nativeElement.shape : undefined;
    }
    set shape(value) {
        if (this.nativeElement) {
            this.nativeElement.shape = value;
        }
    }
    /** Specifies the theme to be applied, which controls the visual appearance—such as colors, fonts, and styles—of the element. The selected theme ensures a consistent and cohesive look and feel across the user interface.
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
    /** Specifies the content that will be displayed or rendered when the associated state is evaluated as 'true'.
    *	Property type: string
    */
    get trueContent() {
        return this.nativeElement ? this.nativeElement.trueContent : undefined;
    }
    set trueContent(value) {
        if (this.nativeElement) {
            this.nativeElement.trueContent = value;
        }
    }
    /** Specifies a custom template that defines the behavior or appearance of the LED when its state is set to "true" (on). Use this template to customize how the LED should be displayed or controlled when activated.
    *	Property type: any
    */
    get trueTemplate() {
        return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
    }
    set trueTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.trueTemplate = value;
        }
    }
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or scripting methods such as element.focus().
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
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. This is commonly used for form elements such as input, select, or textarea to programmatically update or access their contents.
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
        return ["animation", "checked", "clickMode", "disabled", "falseContent", "falseTemplate", "indeterminate", "indeterminateContent", "indeterminateTemplate", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "readonly", "rightToLeft", "shape", "theme", "trueContent", "trueTemplate", "unfocusable", "value"];
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
        return (React.createElement("smart-led", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Led, Smart, Led as default };
