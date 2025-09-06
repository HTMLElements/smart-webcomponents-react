
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

let Smart$2;
if (typeof window !== "undefined") {
    Smart$2 = window.Smart;
}
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
class ListItem extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ListItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /**
    *	Property type: number
    */
    get alternationIndex() {
        return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
    }
    set alternationIndex(value) {
        if (this.nativeElement) {
            this.nativeElement.alternationIndex = value;
        }
    }
    /**
    *	Property type: string
    */
    get color() {
        return this.nativeElement ? this.nativeElement.color : undefined;
    }
    set color(value) {
        if (this.nativeElement) {
            this.nativeElement.color = value;
        }
    }
    /**
    *	Property type: ListItemDisplayMode | string
    */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMode = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get grouped() {
        return this.nativeElement ? this.nativeElement.grouped : undefined;
    }
    set grouped(value) {
        if (this.nativeElement) {
            this.nativeElement.grouped = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        if (this.nativeElement) {
            this.nativeElement.selected = value;
        }
    }
    /**
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
    /**
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
    /**
    *	Property type: string
    */
    get details() {
        return this.nativeElement ? this.nativeElement.details : undefined;
    }
    set details(value) {
        if (this.nativeElement) {
            this.nativeElement.details = value;
        }
    }
    /**
    *	Property type: string
    */
    get group() {
        return this.nativeElement ? this.nativeElement.group : undefined;
    }
    set group(value) {
        if (this.nativeElement) {
            this.nativeElement.group = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get hidden() {
        return this.nativeElement ? this.nativeElement.hidden : undefined;
    }
    set hidden(value) {
        if (this.nativeElement) {
            this.nativeElement.hidden = value;
        }
    }
    /**
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
    // Gets the properties of the React component.
    get properties() {
        return ["alternationIndex", "color", "displayMode", "grouped", "selected", "value", "label", "details", "group", "hidden", "readonly"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
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
        return (React.createElement("smart-list-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$1;
if (typeof window !== "undefined") {
    Smart$1 = window.Smart;
}
/**
 Defines a group of list items.
*/
class ListItemsGroup extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ListItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /**
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
    // Gets the properties of the React component.
    get properties() {
        return ["label"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
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
        return (React.createElement("smart-list-items-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
class MultilineTextBox extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'MultilineTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects. Use this property to control whether and how animations are applied.
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
    /** Specifies if and in what manner user-entered text should be automatically capitalized during input or editing. This setting controls the automatic transformation of text—for example, capitalizing the first letter of each word, each sentence, or all characters—based on the selected capitalization behavior.
    *	Property type: MultilineTextBoxAutoCapitalize | string
    */
    get autoCapitalize() {
        return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
    }
    set autoCapitalize(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCapitalize = value;
        }
    }
    /** Specifies whether the browser is allowed to automatically fill in the value of the input control based on the user's previously entered data, such as usernames, passwords, or addresses. When enabled, this facilitates autofill and streamlines user input by suggesting or completing values according to stored information.
    *	Property type: MultiLineTextBoxAutoComplete | string
    */
    get autoComplete() {
        return this.nativeElement ? this.nativeElement.autoComplete : undefined;
    }
    set autoComplete(value) {
        if (this.nativeElement) {
            this.nativeElement.autoComplete = value;
        }
    }
    /** Controls whether the element automatically increases its height to accommodate input that exceeds its current vertical space. When enabled, the element will expand vertically as more content is entered, preventing scrollbars from appearing.
    *	Property type: boolean
    */
    get autoExpand() {
        return this.nativeElement ? this.nativeElement.autoExpand : undefined;
    }
    set autoExpand(value) {
        if (this.nativeElement) {
            this.nativeElement.autoExpand = value;
        }
    }
    /** Specifies whether the input element should automatically receive focus when the page finishes loading, allowing users to start interacting with it immediately without manually clicking or tabbing into the field.
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
    /** The cols attribute sets the visible width (measured in average character columns) of a textarea input field in a form. Its value must be a positive integer, determining how many characters are visible in a single row. If the cols attribute is not provided, the textarea defaults to displaying 20 character columns in width. Note: The cols attribute is not applicable to  elements; it is specific to  elements.
    *	Property type: number
    */
    get cols() {
        return this.nativeElement ? this.nativeElement.cols : undefined;
    }
    set cols(value) {
        if (this.nativeElement) {
            this.nativeElement.cols = value;
        }
    }
    /** Controls whether the element is active or inactive. When enabled, the element can interact with user input; when disabled, the element is unresponsive and typically appears visually distinct to indicate its inactive state.
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
    /** Defines the visual presentation of the characters entered within the input field, such as whether they are shown as plain text, masked (e.g., as asterisks for passwords), or styled in a particular way. This setting determines how users see their input while typing or viewing the form.
    *	Property type: TextBoxDisplayMode | string
    */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMode = value;
        }
    }
    /** Specifies how the application responds when the "Enter" key is pressed, such as submitting a form, adding a new line, or triggering a specific action.
    *	Property type: MultilineTextBoxEnterKeyBehavior | string
    */
    get enterKeyBehavior() {
        return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
    }
    set enterKeyBehavior(value) {
        if (this.nativeElement) {
            this.nativeElement.enterKeyBehavior = value;
        }
    }
    /** Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of an existing  element within the same HTML document. This allows input or button elements to be associated with a form, even if they are not nested inside the form tag itself.
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
    /** Provides supplementary helper text displayed beneath the element. This text becomes visible only when the element is focused, offering users additional guidance or context during interaction.
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
    /** Determines whether the horizontal scrollbar is visible, hidden, or displayed automatically based on the content's width.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.horizontalScrollBarVisibility = value;
        }
    }
    /** Specifies the expected purpose of the input field and determines whether the browser (user agent) is allowed to offer automated assistance, such as autofill suggestions, when the element is used within a form. This property maps directly to the standard HTML autocomplete attribute, enabling the browser to understand what kind of information should be entered into the field. Accepted values include 'on', 'off', or context-specific keywords such as 'name', 'email', 'organization', or 'street-address'. Setting an appropriate value improves user experience by allowing the browser to assist in accurately and efficiently filling out form fields with relevant data.
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
    /** Positions the label above the input element. The label will always be visible and displayed above the input field, providing clear identification for the corresponding input regardless of user interaction or input state.
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
    /** Defines or retrieves the unlockKey value used to authenticate and grant access to the product's locked features. This property acts as a security credential required to unlock and utilize restricted functionality within the product.
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
    /** Defines or retrieves the current language code (e.g., "en", "fr", "es") to be used for localization. This property works together with the messages property, allowing the application to display the appropriate translations based on the selected language. When setting this value, ensure that corresponding translations exist within the messages object for consistent multilingual support.
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
    /** A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify message content, structure, or placeholders before they are displayed to users, enabling tailored localization outputs that meet specific application or user requirements.
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
    /** Specifies or retrieves the maximum number of characters allowed in the input field. If set, users cannot enter more characters than this limit.
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
    /** Specifies or retrieves the minimum number of characters that a user is required to enter in the input field. If the user enters fewer characters than the specified minimum, the input will be considered invalid.
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
    /** Defines or retrieves an object containing key-value pairs for all user-facing strings within the widget, enabling text customization and localization. This property works in conjunction with the locale property to display translated content according to the selected language or locale. Use this to provide translated strings for different languages, ensuring your widget can support internationalization.
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
    /** Defines or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting an HTML form, enabling the form data to be correctly organized and transmitted to the server. This is essential for backend processing and data association.
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
    /** Specifies the placeholder text that appears inside the element when it is empty or no value has been entered. This text serves as a hint or example to guide users on the expected input format or content.
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
    /** If enabled, users will be prevented from interacting with the element. This means that all user actions, such as clicks, typing, or other input events, will be disabled for this element.
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
    /** Indicates that the user is required to enter a value in this field before the form can be submitted. If the field is left empty, the form submission will be blocked and the user will be prompted to provide a valid input. This ensures that essential information is collected before processing the form.
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
    /** Controls whether the user can resize the element. When enabled, a resize handle appears in the bottom-right corner of the input area, allowing the user to manually adjust its size. If disabled, the element remains a fixed size and no resize indicator is shown.
    *	Property type: boolean
    */
    get resizable() {
        return this.nativeElement ? this.nativeElement.resizable : undefined;
    }
    set resizable(value) {
        if (this.nativeElement) {
            this.nativeElement.resizable = value;
        }
    }
    /** Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) languages, ensuring proper display and support for locales that use RTL fonts and text direction (such as Arabic or Hebrew).
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
    /** Specifies the number of text lines that are visible within the control at one time. This determines the vertical size of the control and how much content is displayed to the user without scrolling.
    *	Property type: number
    */
    get rows() {
        return this.nativeElement ? this.nativeElement.rows : undefined;
    }
    set rows(value) {
        if (this.nativeElement) {
            this.nativeElement.rows = value;
        }
    }
    /** Determines if the entire content of the input field will be automatically highlighted (selected) when the input gains focus, allowing users to easily replace or copy the existing text.
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
    /** Specifies the position (zero-based index) of the last character within the currently selected text range. This value represents the character immediately after the end of the selection; if no text is selected, it is equal to the starting index of the selection.
    *	Property type: number
    */
    get selectionEnd() {
        return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
    }
    set selectionEnd(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionEnd = value;
        }
    }
    /** Specifies the zero-based index position of the first character included in the current text selection. This value represents where the selection begins within the overall string or text content.
    *	Property type: number
    */
    get selectionStart() {
        return this.nativeElement ? this.nativeElement.selectionStart : undefined;
    }
    set selectionStart(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionStart = value;
        }
    }
    /** Indicates whether the element's text should be checked for spelling and grammar errors by the browser. When enabled, the browser will highlight possible mistakes and may provide correction suggestions to the user.
    *	Property type: boolean
    */
    get spellCheck() {
        return this.nativeElement ? this.nativeElement.spellCheck : undefined;
    }
    set spellCheck(value) {
        if (this.nativeElement) {
            this.nativeElement.spellCheck = value;
        }
    }
    /** Specifies the theme to be applied, which controls the overall appearance and styling of the element, including colors, fonts, and other visual properties.
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
    /** When set to true, the element is not focusable, meaning it cannot receive focus via keyboard navigation, mouse interaction, or scripting.
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
    /** Provides functionality to retrieve (get) the current value of the element or assign (set) a new value to it. This is commonly used for form elements such as input fields, textareas, or select elements, allowing you to programmatically access or modify the user's input or the element's content.
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
    /** Determines whether the vertical scrollbar is displayed, hidden, or automatically shown based on the content's overflow within the container. This property allows you to control how and when users can scroll vertically.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.verticalScrollBarVisibility = value;
        }
    }
    /** Specifies the behavior of the control when handling long text input, determining whether the text automatically wraps onto a new line or remains on a single line, allowing for improved readability and layout management.
    *	Property type: MultilineTextBoxWrap | string
    */
    get wrap() {
        return this.nativeElement ? this.nativeElement.wrap : undefined;
    }
    set wrap(value) {
        if (this.nativeElement) {
            this.nativeElement.wrap = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "autoCapitalize", "autoComplete", "autoExpand", "autoFocus", "cols", "disabled", "displayMode", "enterKeyBehavior", "form", "hint", "horizontalScrollBarVisibility", "inputPurpose", "label", "unlockKey", "locale", "localizeFormatFunction", "maxLength", "minLength", "messages", "name", "placeholder", "readonly", "required", "resizable", "rightToLeft", "rows", "selectAllOnFocus", "selectionEnd", "selectionStart", "spellCheck", "theme", "unfocusable", "value", "verticalScrollBarVisibility", "wrap"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Sets keyboard and interaction focus to the element, making it the active target for user input and accessibility tools. This enables users to interact with the element (e.g., typing in a field or activating controls) and allows screen readers to announce its presence.
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
    /** This method resets the value of the element box to its original, default state as defined upon initialization. Any user input or programmatically modified content will be cleared, returning the element box to its initial configuration.
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
    /** Returns the text currently selected by the user within the active input field, textarea, or document. If no text is selected, the function returns an empty string.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    selection(displayMode) {
        const result = this.nativeElement.selection(displayMode);
        return result;
    }
    /** Extracts a specified portion of the input text based on the provided arguments, such as start and end positions or a pattern. If no arguments are given, the entire input text is selected by default. This function enables precise control over which segment of the text is retrieved or manipulated.
    * @param {any} rangeFrom?. Determines the start index of the text selection.
    * @param {any} rangeTo?. Determines the end index of the text selection.
    */
    select(rangeFrom, rangeTo) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rangeFrom, rangeTo);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rangeFrom, rangeTo);
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
        return (React.createElement("smart-multiline-text-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ListItem, ListItemsGroup, MultilineTextBox, Smart, MultilineTextBox as default };
