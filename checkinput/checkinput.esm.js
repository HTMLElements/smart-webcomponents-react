
"use client";

import '../source/modules/smart.checkinput'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.checkinput');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 CheckInput specifies an input field where the user can enter data. Auto-complete options with checkboxes are displayed for easier input. Checkboxes allow to select/unselect one or multiple items.
*/
class CheckInput extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'CheckInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animation effects are disabled, resulting in instant transitions without visual motion. For other values, the property enables different types of animations, which govern how elements transition or change states on the interface.
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
    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu with autocomplete suggestions after the user begins typing. This delay helps control how quickly the matches appear, improving performance and user experience by preventing the dropdown from opening immediately with every keystroke.
    *	Property type: number
    */
    get autoCompleteDelay() {
        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
    }
    set autoCompleteDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCompleteDelay = value;
        }
    }
    /** Specifies the source of data that populates the Input component. The dataSource property accepts one of the following:- 'Array of primitive values': An array consisting of strings or numbers, where each element represents a list item.- 'Array of objects': An array of objects, where each object defines the properties of a list item—typically using keys such as label for display text and value for the underlying value.- 'Callback function': A function that, when called, returns either of the above array formats (strings, numbers, or objects).This flexibility allows you to provide static data inline, transform or fetch data dynamically, and customize which properties represent the list items.
    *	Property type: any
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Specifies whether the element is interactive and can accept user input. When enabled, the element is fully functional; when disabled, the element is rendered inactive and does not respond to user actions such as clicks, typing, or focus.
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
    /** Specifies the placement of the dropdown button relative to its parent element (e.g., top, bottom, left, or right). This setting controls where the dropdown button will appear in the user interface.
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
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height is determined by a corresponding CSS variable. You can override the default behavior by explicitly setting a height value, otherwise the component will use the CSS variable to control its height.
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
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by a corresponding CSS variable. If a value is provided, it will override the CSS variable and explicitly set the width of the dropdown. This allows for flexible customization of the dropdown's appearance through either direct property assignment or external styling.
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
    /** Specifies the intended purpose of the input field and determines whether the user’s browser (user agent) is permitted to offer automated autofill suggestions when the input appears within a form. This attribute provides guidance to the browser about the type of information that should be entered, enhancing both user experience and data accuracy by suggesting relevant values. It corresponds to the standard HTML autocomplete attribute, which can accept a variety of predefined values such as 'on' (to enable autofill), 'off' (to disable autofill), 'name' (for personal names), 'organization' (for company names), 'street-address' (for addresses), and many others. By setting this attribute appropriately, developers can improve form usability and help browsers provide more accurate suggestions based on the expected input type.
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
    /** Specifies the maximum number of matching items to display in the dropdown list when a new autoComplete query is performed. By default, up to 8 items will be shown in the dropdown. If the total number of matched items exceeds this limit, only the first 8 results will be visible to the user. Adjust this value to control how many suggestions are presented at once in the dropdown interface.
    *	Property type: number
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** Defines the unlockKey property, which stores the unique key required to unlock and access the product. Use this property to set a new unlock key or retrieve the current unlock key associated with the product.
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
    /** Specifies or retrieves the current language setting. This property determines which language-specific messages from the messages property are displayed. Changing the language will update the content shown to the user based on the corresponding localized messages defined in messages.
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
    /** A callback function that allows you to customize the formatting of messages generated by the Localization Module before they are returned to the application. This enables you to modify, translate, or format localization messages according to specific requirements or user preferences.
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
    /** Defines or retrieves an object containing localized string values used within the widget’s user interface, allowing for text elements to be easily translated into different languages. This property works in conjunction with the locale property to enable internationalization by customizing display text based on the selected language or regional setting.
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
    /** Specifies the minimum number of characters a user must type into the input field before the autocomplete feature becomes active. Once this character threshold is reached, the dropdown will appear, displaying a list of items that match the entered text.
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
    /** Sets or retrieves the value of the "name" attribute for the element. The "name" attribute identifies the element within an HTML form, and its value is used as the key when the form data is submitted to the server. This allows data associated with the element to be correctly grouped and processed on the server side.
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
    /** Specifies whether the dropdown menu is currently expanded and visible (open) or collapsed and hidden (closed).
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
    /** Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about what to enter.
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
    /** Specifies or retrieves the query string used to filter items in the data source. This query is utilized by the autoComplete functionality to determine which items should be displayed based on user input. If the query is an empty string, no filtering is applied and all items from the data source are shown.
    *	Property type: string | number
    */
    get query() {
        return this.nativeElement ? this.nativeElement.query : undefined;
    }
    set query(value) {
        if (this.nativeElement) {
            this.nativeElement.query = value;
        }
    }
    /** Specifies the autocomplete query mode, which controls how search suggestions are generated and determines the matching algorithm used for the autocomplete operation. This property influences whether autocomplete suggestions are based on prefix matching, fuzzy matching, or other supported algorithms.
    *	Property type: CheckInputQueryMode | string
    */
    get queryMode() {
        return this.nativeElement ? this.nativeElement.queryMode : undefined;
    }
    set queryMode(value) {
        if (this.nativeElement) {
            this.nativeElement.queryMode = value;
        }
    }
    /** Specifies whether the user is allowed to enter text directly into the input field. When the dropDownButtonPosition property is set to either 'left' or 'right', the readonly property controls the behavior of the component if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing text input and selection from the data source.  - If readonly is true, it behaves as a DropDownList, restricting input to selection from the provided options only, and preventing manual text entry.
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
    /** Sets or returns a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, enabling proper display for languages and locales that use RTL scripts, such as Arabic or Hebrew.
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
    /** Specifies the character or string used to separate multiple selected items within the input field. This delimiter defines how individual selections are visually and programmatically distinguished from one another in the input’s value.
    *	Property type: string
    */
    get separator() {
        return this.nativeElement ? this.nativeElement.separator : undefined;
    }
    set separator(value) {
        if (this.nativeElement) {
            this.nativeElement.separator = value;
        }
    }
    /** Specifies whether an extra option—typically "Select All" or "Deselect All"—is shown at the top of the options list. This option enables users to quickly select or unselect all available items in the list with a single action.
    *	Property type: boolean
    */
    get selectAll() {
        return this.nativeElement ? this.nativeElement.selectAll : undefined;
    }
    set selectAll(value) {
        if (this.nativeElement) {
            this.nativeElement.selectAll = value;
        }
    }
    /** Retrieves or assigns an array containing the currently selected values. This property allows you to access the full list of items that have been selected, or update the selection by providing a new array of values.
    *	Property type: any
    */
    get selectedValues() {
        return this.nativeElement ? this.nativeElement.selectedValues : undefined;
    }
    set selectedValues(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedValues = value;
        }
    }
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the list will be sorted from A to Z based on item names; if false, the original order will be preserved.
    *	Property type: boolean
    */
    get sorted() {
        return this.nativeElement ? this.nativeElement.sorted : undefined;
    }
    set sorted(value) {
        if (this.nativeElement) {
            this.nativeElement.sorted = value;
        }
    }
    /** Specifies the sorting order to be used when sort is enabled. Set to asc for ascending order or desc for descending order.
    *	Property type: string
    */
    get sortDirection() {
        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
    }
    set sortDirection(value) {
        if (this.nativeElement) {
            this.nativeElement.sortDirection = value;
        }
    }
    /** Specifies the visual theme applied to the element, controlling its overall appearance such as colors, fonts, and styles. Themes allow for consistent and customizable styling across elements within the application.
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
    /** Specifies the type of data that the input field accepts (e.g., text, number, email, password). Setting the input type controls the kind of input users can enter and may also influence the on-screen keyboard and validation behavior in web browsers.
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
    /** When set to true, this property prevents the element from being focused, either by keyboard navigation (such as using the Tab key) or by mouse interaction. As a result, the element is removed from the page's tab order and cannot receive input focus.
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
    /** Retrieves the current value of the element or assigns a new value to it. This property allows you to programmatically access or update the element's value, depending on whether it is used as a getter or a setter. Commonly used with form elements such as input, textarea, and select to read or change user input.
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
        return ["animation", "autoCompleteDelay", "dataSource", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "rightToLeft", "separator", "selectAll", "selectedValues", "sorted", "sortDirection", "theme", "type", "unfocusable", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its default collapsed state.
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
    /** Ensures that the currently active (selected) item within the list is always scrolled into view, so users can see and interact with their selection even when navigating through long or overflowing content.
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
    /** Displays the dropdown menu, making its list of selectable options visible to the user.
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
    /** Selects the text inside the input field. If the input field is set to readonly, the function does not select the text but instead sets focus to the element. This ensures interactive behavior depending on whether the input can be edited.
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
        return (React.createElement("smart-check-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { CheckInput, Smart, CheckInput as default };
