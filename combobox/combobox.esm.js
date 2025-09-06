
"use client";

import '../source/modules/smart.combobox'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.combobox');
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
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
class ComboBox extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ComboBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** This property is applicable only when dropDownOpenMode is set to 'auto'. It specifies the amount of time (in milliseconds) the dropdown will remain open after the pointer leaves the element, before it automatically closes. If the pointer is not hovering over the dropdown or its trigger element, the dropdown will close after this delay.
    *	Property type: number
    */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCloseDelay = value;
        }
    }
    /** Specifies the autocomplete mode for the input field. The selected mode defines how the component filters and displays items from the dataSource, showing only those entries that match the user's input according to the chosen matching strategy. This setting directly impacts the suggestions presented to the user as they type.
    *	Property type: AutoComplete | string
    */
    get autoComplete() {
        return this.nativeElement ? this.nativeElement.autoComplete : undefined;
    }
    set autoComplete(value) {
        if (this.nativeElement) {
            this.nativeElement.autoComplete = value;
        }
    }
    /** Specifies the amount of time, in milliseconds, to wait after the user input before displaying the dropdown list of autocomplete suggestions. This delay helps control how quickly the suggestions appear, allowing for smoother user experience and reducing unnecessary searches as the user types.
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
    /** Enables users to specify one or more custom key names that will trigger the opening of the popup when pressed. This allows for flexible keyboard shortcuts tailored to user preferences or application requirements.
    *	Property type: string[]
    */
    get autoOpenShortcutKey() {
        return this.nativeElement ? this.nativeElement.autoOpenShortcutKey : undefined;
    }
    set autoOpenShortcutKey(value) {
        if (this.nativeElement) {
            this.nativeElement.autoOpenShortcutKey = value;
        }
    }
    /** Specifies the source of data to populate the ComboBox. The dataSource can be provided in several formats:- An array of strings or numbers, where each item becomes a selectable option in the ComboBox.- An array of objects, where each object represents a list item and its properties define the displayed information and associated value (e.g., label for display text, value for the underlying value, and optionally group to categorize items).- A callback function that returns an array of items in either of the above formats, enabling dynamic or asynchronous data loading.This flexible dataSource configuration allows the ComboBox to support simple lists, categorized lists, or dynamically retrieved data.
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
    /** Controls whether the combo box is active or inactive. When enabled, users can interact with the combo box to select or enter a value. When disabled, the combo box is non-interactive and appears grayed out, preventing any user input or selection.
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
    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data locally or when retrieving items from a remote source. This helps inform users that a filtering operation or data fetch is in progress.
    *	Property type: boolean
    */
    get displayLoadingIndicator() {
        return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
    }
    set displayLoadingIndicator(value) {
        if (this.nativeElement) {
            this.nativeElement.displayLoadingIndicator = value;
        }
    }
    /** Sets or retrieves the displayMember property. The displayMember property defines the specific field name within each data object in the collection provided by the 'dataSource' property. This field's value is used for displaying items in the UI component, allowing you to control which attribute of your data objects is shown to the user.
    *	Property type: string
    */
    get displayMember() {
        return this.nativeElement ? this.nativeElement.displayMember : undefined;
    }
    set displayMember(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMember = value;
        }
    }
    /** Specifies the parent container for the dropdown element. The dropDownAppendTo property accepts a CSS selector string, an element's ID, the string value 'body', or a direct reference to an HTML element. By default, the dropdown is appended to its original parent in the DOM. However, if one of the containing elements has CSS properties (such as overflow: hidden) that restrict the dropdown's visibility, you can set this property—commonly to 'body'—to append the dropdown directly to the &lt;body&gt; element and ensure it displays properly.Possible values:- A CSS selector string (e.g., '.container' or '#mainDiv')- The string 'body'- A direct reference to an existing HTML element- An element's ID (as a string)- null (to reset and move the dropdown back to its original parent)This property improves compatibility in layouts with restricted overflow by allowing the dropdown to be rendered in a container of your choosing. Resetting dropDownAppendTo to null restores the dropdown to its initial placement within the DOM.
    *	Property type: string
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** Specifies the location of the dropdown button relative to its associated input field or container. Possible positions may include "left," "right," "top," or "bottom," allowing developers to control where the dropdown button appears in the user interface.
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
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. If a specific value is provided, it will override the CSS variable and set the dropdown height explicitly.
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
    /** Specifies the maximum height of the dropdown menu. By default, this value is set to an empty string, which means the dropdown's max-height will be controlled by a CSS variable instead of an explicit value. If you provide a specific value (e.g., "300px" or "50vh"), it will override the default CSS variable and directly set the maximum height of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
    }
    set dropDownMaxHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMaxHeight = value;
        }
    }
    /** Defines the maximum width of the dropdown menu. By default, this value is set to an empty string, which means the dropdown's maximum width will be determined by a corresponding CSS variable. If a specific value is provided (e.g., "300px" or "50%"), it will override the CSS variable and directly set the maximum width of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
    }
    set dropDownMaxWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMaxWidth = value;
        }
    }
    /** Defines the minimum height of the dropdown component. By default, this property is set to an empty string, which means the dropdown's minimum height is determined by a corresponding CSS variable. If a specific value is provided for this property, it will override the CSS variable and explicitly set the dropdown's minimum height.
    *	Property type: string | number
    */
    get dropDownMinHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
    }
    set dropDownMinHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMinHeight = value;
        }
    }
    /** Specifies the minimum width of the dropdown component. By default, this property is set to an empty string (""). When left unset, the dropdown’s minimum width is determined by a CSS variable, allowing for flexible styling through external stylesheets. To override the CSS value, assign a specific width value (e.g., "200px" or "10rem") to this property.
    *	Property type: string | number
    */
    get dropDownMinWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
    }
    set dropDownMinWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMinWidth = value;
        }
    }
    /** Specifies the direction or animation in which the dropdown menu will appear when activated, such as opening upwards, downwards, or with a specific transition effect.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode() {
        return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
    }
    set dropDownOpenMode(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOpenMode = value;
        }
    }
    /** If this property is enabled, opening the element's dropdown will insert a transparent overlay between the dropdown and the rest of the document. This overlay covers the entire viewport except for the dropdown itself, capturing all click events outside the dropdown. As a result, any clicks outside the popup will interact with the overlay instead of other elements on the page, allowing you to reliably detect and handle outside clicks (such as to close the dropdown) without unintentionally triggering other DOM elements.
    *	Property type: boolean
    */
    get dropDownOverlay() {
        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
    }
    set dropDownOverlay(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOverlay = value;
        }
    }
    /** Specifies the text or content to be shown in the dropdown as a placeholder when the dropdown contains no selectable items. This placeholder provides guidance or context to the user, indicating that there are currently no available options.
    *	Property type: string
    */
    get dropDownPlaceholder() {
        return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
    }
    set dropDownPlaceholder(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPlaceholder = value;
        }
    }
    /** Specifies the placement of the dropdown menu relative to its trigger element when opened (e.g., above, below, left, or right). This setting controls where the dropdown appears on the screen in relation to the element that activates it.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPosition = value;
        }
    }
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, allowing the dropdown's width to be determined by the associated CSS variable (typically via custom properties or theme settings). If a value is provided, it overrides the CSS variable and directly sets the dropdown's width.
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
    /** Specifies how the element should respond when the Escape key is pressed by the user. This property allows you to define actions such as closing a modal, dismissing a dialog, or triggering a custom event when the Escape key is detected while the element is focused or active.
    *	Property type: ComboBoxEscKeyMode | string
    */
    get escKeyMode() {
        return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
    }
    set escKeyMode(value) {
        if (this.nativeElement) {
            this.nativeElement.escKeyMode = value;
        }
    }
    /** Specifies whether the filtering feature is active. When set to true, users can apply filters to narrow down displayed data; when false, filtering options are disabled and all data is shown without restriction.
    *	Property type: boolean
    */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        if (this.nativeElement) {
            this.nativeElement.filterable = value;
        }
    }
    /** Specifies the placeholder text displayed inside the dropdown list’s filter input field, guiding users on what to enter when searching or filtering options.
    *	Property type: string
    */
    get filterInputPlaceholder() {
        return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
    }
    set filterInputPlaceholder(value) {
        if (this.nativeElement) {
            this.nativeElement.filterInputPlaceholder = value;
        }
    }
    /** Specifies the filtering behavior for the Combo Box, controlling how user input is matched against the available options (e.g., contains, starts with, or exact match). This property determines which options are displayed in the dropdown list as the user types.
    *	Property type: FilterMode | string
    */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        if (this.nativeElement) {
            this.nativeElement.filterMode = value;
        }
    }
    /** When enabled, this option automatically groups the items based on the first letter of each item's value or label. Note: This grouping feature is only available if the dataSource does not already include predefined groups. If the dataSource is already grouped, this setting will have no effect.
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
    /** Specifies which attribute of the dataSource object should be used to group items in the ListBox. By default, if this property (groupMember) is not set, the ListBox will use the 'group' property from each dataSource item to organize groups. This property is particularly useful when loading data from a JSON file, allowing you to designate a specific property from your data objects to determine the grouping of items—especially if your JSON structure uses a different property name for grouping.
    *	Property type: string
    */
    get groupMember() {
        return this.nativeElement ? this.nativeElement.groupMember : undefined;
    }
    set groupMember(value) {
        if (this.nativeElement) {
            this.nativeElement.groupMember = value;
        }
    }
    /** Displays supplementary helper text beneath the element. This hint is visible exclusively when the element is in focus, providing contextual guidance to users as they interact with the field.
    *	Property type: string
    */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        if (this.nativeElement) {
            this.nativeElement.hint = value;
        }
    }
    /** Controls whether the horizontal scroll bar is displayed within the dropdown menu when the content exceeds the available width.
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
    /** Represents the property name of a List item whose value will be displayed in the input field when a ListItem is selected. This allows developers to control which property of each item is shown in the input, such as displaying the item's value instead of its label. By default, the label property is used for display. This option is useful when you want to customize the displayed content, for example, to show a unique identifier or value rather than the descriptive label.
    *	Property type: string
    */
    get inputMember() {
        return this.nativeElement ? this.nativeElement.inputMember : undefined;
    }
    set inputMember(value) {
        if (this.nativeElement) {
            this.nativeElement.inputMember = value;
        }
    }
    /** Specifies the expected type of information for the input field and informs the browser about the nature of the data to be entered. This guidance allows user agents (such as browsers and password managers) to determine if they can provide automated assistance—like autofilling relevant values—when the element is used in a form. The value assigned to this property directly maps to the standard HTML autocomplete attribute. Common values include 'on' (enable autocomplete), 'off' (disable autocomplete), 'name' (full name), 'organization' (company or organization), 'email', 'street-address', and many others, as specified by the HTML standard. Using an appropriate value improves user experience, enhances accessibility, and helps maintain privacy and security standards within web forms.
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
    /** The 'IncrementalSearchDelay' property defines the duration, in milliseconds, to wait after the user stops typing before clearing the previous search query. This timer begins as soon as the user finishes typing. During this delay period, no new search query will be initiated. Only after the specified delay has elapsed will the current search input be cleared, allowing a new search query to be started. This helps to optimize performance and user experience by preventing unnecessary or premature queries while the user is still entering their search terms.
    *	Property type: number
    */
    get incrementalSearchDelay() {
        return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
    }
    set incrementalSearchDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.incrementalSearchDelay = value;
        }
    }
    /** Configures or retrieves the current mode of incremental search. By default, incremental search is enabled, allowing users to type while the dropdown is focused to quickly filter and highlight matching options. Modifying this setting controls how user input is processed for searching within the dropdown list.
    *	Property type: SearchMode | string
    */
    get incrementalSearchMode() {
        return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
    }
    set incrementalSearchMode(value) {
        if (this.nativeElement) {
            this.nativeElement.incrementalSearchMode = value;
        }
    }
    /** Specifies the height (in pixels) for each list item when rendering the list. This property is only applicable when list virtualization is enabled, as it helps optimize rendering performance by allowing the component to calculate and render only the visible items.
    *	Property type: number
    */
    get itemHeight() {
        return this.nativeElement ? this.nativeElement.itemHeight : undefined;
    }
    set itemHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.itemHeight = value;
        }
    }
    /** Specifies the algorithm used to calculate the width of each item. This setting determines how the width of an item is measured, such as using the item's intrinsic content size, a fixed value, or a percentage of the container. Adjust this parameter to control how item widths are determined within the layout.
    *	Property type: ListItemMeasureMode | string
    */
    get itemMeasureMode() {
        return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
    }
    set itemMeasureMode(value) {
        if (this.nativeElement) {
            this.nativeElement.itemMeasureMode = value;
        }
    }
    /** A getter method that retrieves and returns an array containing all list ('') elements currently present within the dropdown menu. This allows you to easily access and manipulate every item displayed in the dropdown.
    *	Property type: {label: string, value: string}[]
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** The itemTemplate property is a string that specifies the ID of an HTMLTemplateElement present in the DOM. This template is used to define and customize the structure and content of individual list items, allowing developers to control how each item appears when rendered in the list.
    *	Property type: any
    */
    get itemTemplate() {
        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
    }
    set itemTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.itemTemplate = value;
        }
    }
    /** Displays a small text label positioned above the element, typically used to provide context, instructions, or additional information to users.
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
    /** Specifies the text that appears alongside the loading indicator when the loader is visible and positioned at the top or bottom of the component. This text provides users with contextual information or status updates during loading.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
    }
    set loadingIndicatorPlaceholder(value) {
        if (this.nativeElement) {
            this.nativeElement.loadingIndicatorPlaceholder = value;
        }
    }
    /** Specifies the exact location on the user interface where the loading indicator will be displayed, such as at the top, center, or bottom of the screen or component.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition() {
        return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
    }
    set loadingIndicatorPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.loadingIndicatorPosition = value;
        }
    }
    /** Sets or retrieves the unlockKey, a unique value required to grant access to the product’s premium features or activate its full functionality.
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
    /** Specifies or retrieves the current language setting for the component. This property determines which language is used when displaying content from the messages property, allowing for localization and internationalization of displayed messages. Set this property to a supported language code (e.g., "en", "fr") to load the corresponding translations from the messages object.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this callback to modify message text, apply dynamic values, or implement custom formatting logic before the localized messages are delivered to your application.
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
    /** Specifies or retrieves an object containing localized string values used within the widget’s user interface. This property enables the customization and translation of UI text for different languages or regions. It is intended to be used together with the locale property, allowing you to easily provide or update localized strings according to the selected locale.
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
    /** Specifies the minimum number of characters a user must enter in the input field before the autocomplete feature is activated and suggestions are displayed.
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
    /** Specifies the maximum number of characters that can be entered into the input field. Any additional characters beyond this limit will not be accepted. This helps enforce data validation and consistency for user input.
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
    /** Sets or retrieves the value of the element's name attribute. The name attribute uniquely identifies form elements when submitting HTML forms, allowing the form data to be organized and accessed by name on the server side. This attribute is essential for grouping form controls and accurately transmitting user input during form submission.
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
    /** Specifies whether the popup is currently visible (open) or hidden (closed) in the user interface.
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
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing guidance or example content to the user.
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
    /** Prevents any user interactions with the element, including clicking, tapping, selecting, hovering, or focusing. While this is enabled, the element will not respond to mouse, keyboard, or touch events, effectively making it non-interactive for users.
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
    /** Specifies or retrieves a value that determines whether the element’s text direction is set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element and its content are aligned according to RTL formatting, ensuring proper display for locales that use right-to-left scripts.
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
    /** Controls the visibility of the resize indicator located in the bottom-right corner of the dropdown component. When this property is set to true, users will see a handle allowing them to resize the dropdown area. This property should be used together with the resizeMode property to define both the availability and behavior of the resizing feature.
    *	Property type: boolean
    */
    get resizeIndicator() {
        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
    }
    set resizeIndicator(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeIndicator = value;
        }
    }
    /** Specifies whether the drop-down menu is resizable by the user. If resizing is enabled, a resize bar will be displayed along the top or bottom edge of the drop-down, allowing users to click and drag to adjust its height. Disabling this option removes the resize bar and prevents any manual resizing of the drop-down component.
    *	Property type: ResizeMode | string
    */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeMode = value;
        }
    }
    /** Specifies the content or value that will appear within the input field, either as a default value, user-entered data, or dynamically generated content. This setting controls what the user sees and interacts with inside the input element.
    *	Property type: SelectionDisplayMode | string
    */
    get selectionDisplayMode() {
        return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
    }
    set selectionDisplayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionDisplayMode = value;
        }
    }
    /** Sets or retrieves the selected indexes. The selected indexes property is an array containing the numeric indexes of the items that are currently selected. Each value in the array corresponds to the position of a selected item within the overall list or collection. Assigning a new array to this property updates the selection state to match the specified indexes; retrieving it returns the current selection as an array of indexes.
    *	Property type: number[]
    */
    get selectedIndexes() {
        return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
    }
    set selectedIndexes(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedIndexes = value;
        }
    }
    /**   "Sets or retrieves the currently selected indexes. The 'selected' property holds an array of the indices corresponding to the items that are marked as selected. When setting this property, provide an array of indexes to specify which items should be selected. When getting this property, it returns the array of indexes for the currently selected items."
    *	Property type: string[]
    */
    get selectedValues() {
        return this.nativeElement ? this.nativeElement.selectedValues : undefined;
    }
    set selectedValues(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedValues = value;
        }
    }
    /** Specifies the maximum number of items that a user is allowed to select at one time. If this value is set to 1, only single selection is permitted; higher values allow multiple selections up to the defined limit.
    *	Property type: ListSelectionMode | string
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted alphabetically; if false, the original order will be preserved.
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
    /** Specifies the sorting order for data, allowing you to choose between ascending ("asc") for lowest-to-highest or alphabetical A–Z sorting, and descending ("desc") for highest-to-lowest or Z–A sorting.
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
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element’s appearance, including colors, fonts, and other stylistic properties, ensuring a consistent look and feel across the user interface.
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
    /** Defines the custom content to display within each token when the selectionDisplayMode is set to "tokens". Tokens visually represent selected items in a multi-select interface and are only applicable when multiple selection is enabled. Use this option to customize how each token appears, such as displaying specific text, icons, or additional data for each selected item.
    *	Property type: any
    */
    get tokenTemplate() {
        return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
    }
    set tokenTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.tokenTemplate = value;
        }
    }
    /** If set to true, the element will not be able to receive keyboard or mouse focus, making it inaccessible via tab navigation or programmatic focus methods.
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
    /** Provides functionality to retrieve (get) or assign (set) the current value of the property. When used as a getter, it returns the property's current value. When used as a setter, it updates the property with the specified value.
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
    /** Specifies which property of each item object should be used as the value for that item. The value designated by valueMember will be stored in the item's value field. This property functions similarly to groupMember, but is focused on identifying the value rather than the group. valueMember is particularly useful when populating a ListBox from a JSON data source, as it allows you to specify which property of your data objects should serve as the unique value for each item in the ListBox.
    *	Property type: string
    */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        if (this.nativeElement) {
            this.nativeElement.valueMember = value;
        }
    }
    /** Controls whether the vertical scroll bar is displayed within the content area, allowing users to scroll vertically when the content extends beyond the visible region.
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
    /** Determines whether virtualization is enabled for the ComboBox. When virtualization is enabled, the ComboBox can efficiently display a very large number of items—such as a million—by only rendering the visible items in the ListBox and dynamically loading items as needed. This significantly improves performance and reduces memory usage, especially with large data sets.
    *	Property type: boolean
    */
    get virtualized() {
        return this.nativeElement ? this.nativeElement.virtualized : undefined;
    }
    set virtualized(value) {
        if (this.nativeElement) {
            this.nativeElement.virtualized = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["autoCloseDelay", "autoComplete", "autoCompleteDelay", "autoOpenShortcutKey", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dropDownAppendTo", "dropDownButtonPosition", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOpenMode", "dropDownOverlay", "dropDownPlaceholder", "dropDownPosition", "dropDownWidth", "escKeyMode", "filterable", "filterInputPlaceholder", "filterMode", "grouped", "groupMember", "hint", "horizontalScrollBarVisibility", "inputMember", "inputPurpose", "incrementalSearchDelay", "incrementalSearchMode", "itemHeight", "itemMeasureMode", "items", "itemTemplate", "label", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "maxLength", "name", "opened", "placeholder", "readonly", "rightToLeft", "resizeIndicator", "resizeMode", "selectionDisplayMode", "selectedIndexes", "selectedValues", "selectionMode", "sorted", "sortDirection", "theme", "tokenTemplate", "unfocusable", "value", "valueMember", "verticalScrollBarVisibility", "virtualized"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onClose", "onClosing", "onItemClick", "onOpen", "onOpening", "onResizeStart", "onResizeEnd", "onScrollBottomReached", "onScrollTopReached", "onTokenClick", "onCreate", "onReady"];
    }
    /** Appends a new ListItem element to the end of the existing list of items within the specified container element, thereby updating the list to include the newly added item as its last entry.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node) {
        const result = this.nativeElement.appendChild(node);
        return result;
    }
    /** Creates and appends one or more new items to the collection or list.
    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
    */
    add(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.add(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.add(item);
            });
        }
    }
    /** Removes all existing items from the dropdown list, resulting in an empty list with no selectable options displayed to the user.
    */
    clearItems() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearItems();
            });
        }
    }
    /** Deselects all currently selected items, ensuring that no items remain selected. This action clears any existing selections and resets the selection state.
    */
    clearSelection() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }
    /** Closes the currently open drop-down list, hiding all available options from view and returning the component to its collapsed state. This action ensures that the drop-down menu is no longer visible to the user.
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
    /** Initiates a data binding process, connecting UI components to the underlying data source. This method refreshes the data source, ensuring that any changes made to the data are reflected in the user interface. It can be used to update displayed information after modifying, adding, or deleting data.
    */
    dataBind() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.dataBind();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.dataBind();
            });
        }
    }
    /** Scrolls the target item into view within its container, automatically adjusting the scroll position as needed to make sure the entire item is fully visible to the user.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }
    /** Returns a specific item instance from the dropDown list, allowing you to access the properties and methods of the selected list item. This can be used to retrieve information about the item, such as its value, label, or index within the dropDown.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value) {
        const result = this.nativeElement.getItem(value);
        return result;
    }
    /** Inserts a new item into the array at the specified index position, shifting existing elements to the right to accommodate the new item.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
    */
    insert(position, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, item);
            });
        }
    }
    /** Inserts a new ListItem element directly before a specified existing ListItem within the list, preserving the order of the remaining items.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node, referenceNode) {
        const result = this.nativeElement.insertBefore(node, referenceNode);
        return result;
    }
    /** Displays and expands the drop-down list, making all available options visible for selection.
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
    /** Removes the item located at the specified index or position within a collection (such as an array or list). After removal, the collection is updated so that subsequent items shift to fill the gap, ensuring contiguous indexing.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }
    /** Removes a specified ListItem from the collection of items contained within the given element, updating the list to reflect the deletion.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node) {
        const result = this.nativeElement.removeChild(node);
        return result;
    }
    /** Selects a specified item from the dropdown list, allowing users to choose one option from the available choices. This action updates the dropdown’s current selection and can trigger any associated event handlers or changes in the application’s state.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }
    /** Deselects a specified item from the dropdown list, removing its selected state and reverting the dropdown to reflect that the item is no longer chosen by the user.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
            });
        }
    }
    /** Updates the selected item in the dropDown list with new data or attributes. This action modifies the existing item rather than adding or removing items from the list, ensuring that any changes are reflected immediately in the user interface. Specify the target item and the updated values to complete the operation.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    update(position, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(position, value);
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
        return (React.createElement("smart-combo-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ComboBox, ListItem, ListItemsGroup, Smart, ComboBox as default };
