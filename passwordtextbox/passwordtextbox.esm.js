
"use client";

import '../source/modules/smart.textbox'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.textbox');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
class PasswordTextBox extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'PasswordTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. If set to any other supported value, animations will be enabled according to the specified mode.
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
    /** Indicates that the element will automatically receive keyboard focus as soon as the page is loaded, allowing users to interact with it immediately without clicking or tabbing to it. This is often used to improve accessibility and streamline user interaction with form fields or interactive elements.
    *	Property type: boolean
    */
    get autoFocus() {
        return this.nativeElement ? this.nativeElement.autoFocus : undefined;
    }
    set autoFocus(value) {
        if (this.nativeElement) {
            this.nativeElement.autoFocus = value;
        }
    }
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element becomes unresponsive to user actions such as clicks or input.
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
    /** Defines the action that occurs when the "Enter" key is pressed within the input field. By default, the mode is set to "submit", meaning pressing "Enter" will attempt to submit the associated form. You can customize this behavior by specifying alternative modes, such as preventing form submission or triggering a custom handler.
    *	Property type: EnterKeyBehavior | string
    */
    get enterKeyBehavior() {
        return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
    }
    set enterKeyBehavior(value) {
        if (this.nativeElement) {
            this.nativeElement.enterKeyBehavior = value;
        }
    }
    /** Specifies the form element with which this element is associated (referred to as its "form owner"). The value of this attribute should be the id of a  element within the same HTML document. This allows the element to be associated with a form even if it is not nested inside the  tags.
    *	Property type: string
    */
    get form() {
        return this.nativeElement ? this.nativeElement.form : undefined;
    }
    set form(value) {
        if (this.nativeElement) {
            this.nativeElement.form = value;
        }
    }
    /** Displays supplemental helper text beneath the element, visible only while the element is focused. This text provides additional guidance or context to users during interaction.
    *	Property type: any
    */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        if (this.nativeElement) {
            this.nativeElement.hint = value;
        }
    }
    /** Displays a label positioned above the input element. This label remains persistently visible, providing a clear and accessible description of the input’s purpose at all times.
    *	Property type: string
    */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        if (this.nativeElement) {
            this.nativeElement.label = value;
        }
    }
    /** Gets or sets the unlockKey, a unique key required to activate and access the product. Use this property to retrieve the current unlock key or assign a new one to enable product unlocking functionality.
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
    /** Specifies or retrieves the current language setting. This property determines which set of localized text strings from the messages property is used for display. When you set the language, the corresponding messages are shown to users in that language. When you get the language, it returns the currently active language code.
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
    /** Callback function that allows you to customize the formatting of messages returned by the Localization Module. This enables you to modify or enhance localized message strings—such as adding dynamic data, adjusting placeholders, or changing text structure—before they are displayed to users.
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
    /** Specifies or retrieves the maximum number of characters allowed in the input field. If set, the user cannot enter more characters than this limit. This constraint helps enforce data validation and control the input length.
    *	Property type: number
    */
    get maxLength() {
        return this.nativeElement ? this.nativeElement.maxLength : undefined;
    }
    set maxLength(value) {
        if (this.nativeElement) {
            this.nativeElement.maxLength = value;
        }
    }
    /** Defines an object where each property corresponds to a specific password strength state, with associated string values that describe or label each state (e.g., "weak," "moderate," "strong"). This object is typically used to display feedback messages or labels reflecting the current strength of a user's password during input.
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
    /** Specifies or retrieves the minimum number of characters required for user input. When set, the user must enter at least this many characters for the input to be considered valid.
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
    /** Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form fields when submitting HTML forms, allowing the data entered in the element to be included in the form's submission with the specified name as the key. This is essential for server-side processing of form data.
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
    /** With this property, you can specify a custom callback function that evaluates the strength of a password. The function should accept the current password as input and return a string representing the assessed strength level. The returned string must be one of the following predefined values: 'short', 'weak', 'far', 'good', or 'strong'. This value will be used by the component to indicate how secure the entered password is according to your custom logic.
    *	Property type: any
    */
    get passwordStrength() {
        return this.nativeElement ? this.nativeElement.passwordStrength : undefined;
    }
    set passwordStrength(value) {
        if (this.nativeElement) {
            this.nativeElement.passwordStrength = value;
        }
    }
    /** This is the text that appears within the element when it is empty, serving as a prompt or hint to the user about the expected input. Once the user enters a value, this placeholder text disappears.
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
    /** Enhances the requirement that the user must provide a value for this element before the form can be submitted. If this field is left empty, the form submission will be blocked and the user will be prompted to enter a value. This ensures that the input is mandatory, helping maintain data completeness and integrity.
    *	Property type: boolean
    */
    get required() {
        return this.nativeElement ? this.nativeElement.required : undefined;
    }
    set required(value) {
        if (this.nativeElement) {
            this.nativeElement.required = value;
        }
    }
    /** Sets or retrieves a value specifying whether the element’s alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content and layout are adapted for proper display in locales that use right-to-left text direction.
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
    /** Determines if the entire content of the input field should be automatically highlighted (selected) when the input receives focus, making it easier for users to quickly replace or copy the content.
    *	Property type: boolean
    */
    get selectAllOnFocus() {
        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
    }
    set selectAllOnFocus(value) {
        if (this.nativeElement) {
            this.nativeElement.selectAllOnFocus = value;
        }
    }
    /** Specifies whether the password icon (such as an eye symbol to show or hide password text) is displayed in the input field.
    *	Property type: boolean
    */
    get showPasswordIcon() {
        return this.nativeElement ? this.nativeElement.showPasswordIcon : undefined;
    }
    set showPasswordIcon(value) {
        if (this.nativeElement) {
            this.nativeElement.showPasswordIcon = value;
        }
    }
    /** Specifies whether a tooltip displaying the password strength indicator will be visible to the user during password entry. When enabled, this tooltip provides real-time feedback on the strength of the entered password.
    *	Property type: boolean
    */
    get showPasswordStrength() {
        return this.nativeElement ? this.nativeElement.showPasswordStrength : undefined;
    }
    set showPasswordStrength(value) {
        if (this.nativeElement) {
            this.nativeElement.showPasswordStrength = value;
        }
    }
    /** Specifies the visual theme to be applied. The theme controls the overall appearance and style—including colors, fonts, and backgrounds—of the element for a consistent look and feel.
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
    /** Specifies whether the Tooltip component should display an arrow pointing to the target element. Setting this option to true will show the arrow, while false will hide it.
    *	Property type: boolean
    */
    get tooltipArrow() {
        return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
    }
    set tooltipArrow(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipArrow = value;
        }
    }
    /** Specifies the amount of time, in milliseconds, to wait before displaying the tooltip after a user interaction (such as hovering or focusing on an element).
    *	Property type: number
    */
    get tooltipDelay() {
        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
    }
    set tooltipDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipDelay = value;
        }
    }
    /** Specifies the placement of the tooltip relative to the target element, such as "top", "bottom", "left", or "right". This controls where the tooltip will appear when it is displayed.
    *	Property type: PasswordTextBoxTooltipPosition | string
    */
    get tooltipPosition() {
        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
    }
    set tooltipPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipPosition = value;
        }
    }
    /** Specifies a custom template for rendering the tooltip’s content, allowing you to define the layout, formatting, and dynamic data within the tooltip. This enables greater control over the appearance and behavior of the tooltip beyond the default content.
    *	Property type: string
    */
    get tooltipTemplate() {
        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
    }
    set tooltipTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipTemplate = value;
        }
    }
    /** Indicates whether the element should be excluded from keyboard navigation and cannot receive focus. If set to true, users will not be able to focus on the element using the keyboard or mouse interactions.
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
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. Useful for updating or accessing the element’s data within a form or component.
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
        return ["animation", "autoFocus", "disabled", "enterKeyBehavior", "form", "hint", "label", "unlockKey", "locale", "localizeFormatFunction", "maxLength", "messages", "minLength", "name", "passwordStrength", "placeholder", "required", "rightToLeft", "selectAllOnFocus", "showPasswordIcon", "showPasswordStrength", "theme", "tooltipArrow", "tooltipDelay", "tooltipPosition", "tooltipTemplate", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onChanging", "onCreate", "onReady"];
    }
    /** Sets keyboard focus to the specified element, making it the active element on the page and enabling user input or interaction through the keyboard. This is commonly used to improve accessibility, guide user workflow, or trigger specific UI behaviors.
    */
    focus() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }
    /** This method resets the input field to its initial value, discarding any changes made by the user and restoring the input's original state as specified when the component or element was first rendered.
    */
    reset() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
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
        return (React.createElement("smart-password-text-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { PasswordTextBox, Smart, PasswordTextBox as default };
