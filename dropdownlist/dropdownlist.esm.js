
"use client";

import '../source/modules/smart.dropdownlist'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.dropdownlist');
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
 The DropDownList is a form component that lets you choose a single predefined value from a list. It is a more advanced version of the 'select' tag.
*/
class DropDownList extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'DropDownList' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** This property applies exclusively when dropDownOpenMode is set to 'auto'. It specifies the amount of time (in milliseconds) to wait before automatically closing the open drop-down if the user's pointer (mouse or touch) is no longer hovering over the drop-down element. A higher value increases the delay before closing, while a lower value causes the drop-down to close more quickly when the pointer leaves.
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
    /** Specifies the source of data that populates the DropDownList. The 'dataSource' property accepts:- An array of strings or numbers (e.g., '['Option 1', 'Option 2']'), where each element becomes a list item.- An array of objects, where each object defines the properties of a list item. Common object attributes include:    - label: The text displayed for the list item.    - value: The underlying value associated with the list item.    - group (optional): Used to group items under a common category.- A callback function that returns an array in either of the above formats.This flexibility allows you to easily provide simple lists or complex, structured data for display in the DropDownList.
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
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and may appear visually distinct (e.g., grayed out).
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
    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) is displayed while filtering data or loading items from a remote source. This helps inform users that a background operation is in progress.
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
    /** Sets or retrieves the displayMember property. The displayMember defines which property of the objects within the collection (specified by the dataSource property) should be shown in the UI. When binding a data source containing objects, displayMember indicates the key whose corresponding value will be rendered for each item in the component's display.
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
    /** ''Specifies the parent container for the dropdown menu. The value can be a CSS selector, an element ID, the string ''body'', or a direct reference to an HTML element. By default, the dropdown is rendered within its original parent. However, if a parent element restricts overflow (e.g., 'overflow: hidden'), setting this property to ''body'' or another container allows the dropdown to be rendered elsewhere in the DOM. This ensures that the dropdown remains visible and fully functional even when its original parent would otherwise clip or hide it.The dropDownAppendTo property accepts:- A string representing a CSS selector or element ID (e.g., ''#container'' or ''.custom-dropdown-wrapper''),- The string ''body'' to append directly to the document body,- Or a direct reference to an HTML element.To revert the dropdown to its original parent container, set dropDownAppendTo to 'null'. This flexibility helps accommodate layouts where dropdown overflow is restricted by ancestor elements.'Example Usage:''''json{  "dropDownAppendTo": "body"}'''or'''json{  "dropDownAppendTo": "#customContainer"}'''or'''json{  "dropDownAppendTo": null}'''
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
    /** Specifies the alignment or placement of the dropdown button relative to its container or associated input field. This setting controls where the dropdown button appears—such as to the left, right, top, or bottom—within the user interface component.
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
    /** Specifies the height of the dropdown component. By default, this property is set to an empty string, which means the dropdown's height will be determined by a corresponding CSS variable. If a specific value is provided (e.g., "200px" or "50%"), it directly sets the dropdown's height, overriding the CSS variable.
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
    /** Defines the maximum height of the dropdown component. By default, this property is set to an empty string, meaning the dropdown’s maximum height will be determined by the associated CSS variable rather than a fixed value. Setting a specific value (such as '"200px"' or '"50vh"') will override the CSS variable and directly control the dropdown's maximum height. If left as an empty string, ensure that the relevant CSS variable is defined to maintain consistent dropdown sizing.
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
    /** Specifies the maximum width of the dropdown menu. By default, this property is set to an empty string, meaning the dropdown's maximum width will be determined by a corresponding CSS variable (typically via a style such as --dropdown-max-width). To override the CSS variable and set a specific maximum width, provide a valid CSS width value (e.g., "300px" or "50%") for this property.
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
    /** Specifies the minimum height for the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's minimum height is determined by a corresponding CSS variable, allowing you to control the minimum height through your stylesheet. If a specific value is provided (such as '200px' or '3rem'), it directly sets the minimum height of the dropdown, overriding the CSS variable.
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
    /** Specifies the minimum width of the dropdown menu. By default, this value is an empty string, which means the dropdown’s minimum width is determined by a CSS variable rather than a fixed value. If a specific width is provided, it overrides the CSS variable, setting the dropdown’s minimum width to the specified value.
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
    /** Specifies the direction or animation style in which the dropdown menu will appear when activated, such as opening upwards, downwards, to the left, to the right, or with a specific transition effect.
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
    /** If this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the document. The overlay ensures that any clicks outside of the dropdown are captured by the overlay itself, rather than interacting with other DOM elements on the page. This behavior allows the dropdown to be closed when users click outside of it, and prevents unintended interactions with background content while the dropdown is open.
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
    /** Specifies the text displayed in the dropdown list when no option is currently selected, serving as a placeholder to guide the user.
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
    /** Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, to the left, or to the right. This setting ensures the dropdown appears in the desired location on the screen when activated.
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
    /** Specifies the width of the dropdown component. By default, this property is set to an empty string (""). When left empty, the dropdown’s width is determined by a corresponding CSS variable, allowing for flexible styling through external stylesheets. You can override this by providing a specific width value (e.g., "200px" or "50%"), which will directly set the dropdown’s width in the component’s inline styles.
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
    /** Specifies whether the filtering feature is active, allowing users to narrow down or refine the displayed data based on specific criteria. Set this option to true to enable filtering, or false to disable it.
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
    /** Specifies the placeholder text displayed within the filter input field inside the dropdown. This input field is visible only when the filterable option is enabled, providing users with a prompt or hint about the expected input for filtering dropdown options.
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
    /** Specifies the filtering behavior applied to the dropdown list, such as how user input is used to match and display available options. This setting controls whether the dropdown filters items by starting characters, contains matching text, or applies a custom filtering strategy.
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
    /** A callback function that must return a filtering condition (typically a boolean or a predicate function) to determine whether each item should be included or excluded from the results. This is specifically used when filterMode is set to 'custom', allowing you to implement your own custom filtering logic for items.
    *	Property type: any
    */
    get filterCallback() {
        return this.nativeElement ? this.nativeElement.filterCallback : undefined;
    }
    set filterCallback(value) {
        if (this.nativeElement) {
            this.nativeElement.filterCallback = value;
        }
    }
    /** When enabled, this option will automatically group the items by the first letter of each item's value. Note: This setting cannot be used if the dataSource already includes predefined groups, as grouping by first letter is only applicable to flat, ungrouped data.
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
    /** Specifies which property of each object in the dataSource should be used to group items in the ListBox. By default, the ListBox looks for a property named group in each data object to determine grouping. Setting the groupMember attribute allows you to define a custom property name to use for grouping instead. This is particularly useful when your data is loaded from a JSON file and the grouping property has a name other than "group".
    *	Property type: string | null
    */
    get groupMember() {
        return this.nativeElement ? this.nativeElement.groupMember : undefined;
    }
    set groupMember(value) {
        if (this.nativeElement) {
            this.nativeElement.groupMember = value;
        }
    }
    /** Specifies supplementary helper text that appears below the element. This hint is displayed exclusively when the element is in focus, providing contextual guidance to the user as they interact with the field.
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
    /** Controls whether a horizontal scroll bar is displayed within the dropdown menu. Enabling this option allows users to scroll horizontally to view content that extends beyond the visible width of the dropdown.
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
    /** Represents the specific property name of an item within a List that should be displayed in the input field when a ListItem is selected. This allows developers to control which attribute of the List data appears in the input—such as displaying an item's value (e.g., an ID or code) instead of its label or name. This property is useful when you want to show a value other than the default label in the input element. By default, the input will display the item's label unless a different property name is specified.
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
    /** The 'IncrementalSearchDelay' property defines the time interval, in milliseconds, that must elapse after the user stops typing before the previous search query is automatically cleared. This delay timer begins counting once the user has stopped input, preventing the search from triggering immediately with each keystroke. Only after the specified delay has passed can a new search query be initiated, ensuring that searches are not executed too frequently and improving performance for incremental search operations.
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
    /** Gets or sets the incremental search mode for the dropdown. When incremental search is enabled (the default setting), typing while the dropdown is focused will automatically search and highlight matching items based on the input characters. This property allows you to enable or disable this behavior as needed.
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
    /** Specifies the height (in pixels) for each list item when rendering the component. This property takes effect only when virtualization is enabled, ensuring consistent and accurate item measurements for optimized scrolling performance.
    *	Property type: number | null
    */
    get itemHeight() {
        return this.nativeElement ? this.nativeElement.itemHeight : undefined;
    }
    set itemHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.itemHeight = value;
        }
    }
    /** Specifies the algorithm used to calculate the width of each item, affecting how items are sized and displayed within the layout. Select the desired measurement method to control item width behavior.
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
    /** A getter that retrieves and returns an array containing all list item elements ('') currently present within the dropdown menu. This allows easy access to each item for further processing or manipulation.
    *	Property type: any
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** The 'itemTemplate' property accepts either a string representing the 'id' of an 'HTMLTemplateElement' present in the DOM, or a direct reference to an 'HTMLTemplateElement' object. This template is used to define and customize the layout and content of each item rendered within the list. By specifying an 'itemTemplate', developers can control exactly how each list item appears, enabling advanced customization beyond default rendering.
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
    /** Displays a small text label positioned above the element, typically used to provide additional information or context, such as a tooltip, caption, or section heading.
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
    /** Specifies the text label that appears alongside the loading indicator when it is visible and positioned at either the top or bottom of the component. This text provides additional context or messaging to users during loading states.
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
    /** Specifies the exact location on the user interface where the loading indicator will appear (e.g., top, center, bottom, or custom coordinates), allowing you to control its placement during loading operations.
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
    /** Defines or retrieves the 'unlockKey' property. The 'unlockKey' is a unique identifier or code required to unlock access to the product’s features or content. Setting this property assigns the key needed for authentication or activation, while getting it retrieves the currently assigned unlock key.
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
    /** Sets or retrieves the current language code (e.g., 'en', 'es', 'fr') used by the application or component. This property works together with the messages property, allowing you to display localized content based on the selected language. When you change the language, the corresponding localized messages from the messages object will be used throughout the interface.
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
    /** Callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify or enhance how translated messages are structured, displayed, or processed before they are delivered to your application.
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
    /** Defines an object containing all text strings displayed by the widget, allowing for easy localization of the interface. This property can be used to get the current set of localizable strings or to provide custom translations for different languages. It works together with the locale property to determine which set of strings is shown to the user based on their selected language.
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
    /** Sets or retrieves the value of the element's name attribute. This attribute assigns an identifier to the element, which is used when submitting HTML forms to associate the element's data with a key in the form submission. The name attribute is essential for correctly processing form data on the server side.
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
    /** Specifies whether the popup is currently visible (open) or hidden (closed).
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
    /** Specifies the placeholder text that appears within the selection field of the element when no option has been chosen. This text provides guidance or an example to the user before a selection is made.
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
    /** Prevents any user interaction with the element, making it unresponsive to mouse, keyboard, touch, or other input events such as clicks, focus, or drag actions. While disabled, the element cannot be interacted with or activated by the user.
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
    /** Specifies or retrieves whether the element's text direction is set to right-to-left (RTL) alignment, which is typically used for languages such as Arabic or Hebrew. This property ensures that the element correctly displays content according to the reading direction of right-to-left locales.
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
    /** Specifies whether the resize indicator, located in the bottom-right corner of the dropdown, should be visible. This visual cue allows users to resize the dropdown if enabled. This property works in combination with the resizeMode setting, which controls the behavior of resizing.
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
    /** Specifies whether the drop-down menu can be resized by the user. If resizing is enabled, a resize handle appears at either the top or bottom edge of the drop-down, allowing users to adjust its height interactively. This enhances usability by enabling users to customize the visible area of the drop-down content.
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
    /** Specifies the content or list of options that will appear in the drop-down selection field for users to choose from.
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
    /** Sets or retrieves the selected indexes. The selected indexes property is an array containing the numeric indexes of the items that are currently selected. You can assign an array of indexes to select specific items, or read this property to determine which items are currently selected.
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
    /** Gets or sets the indexes of selected items. The 'selected' values correspond to the indices of the items that are currently selected. When setting, provide an array of item indexes to indicate which items should be marked as selected. When getting, returns an array containing the indexes of the currently selected items.
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
    /** Specifies the maximum number of items that a user is allowed to select at one time. If set to 1, only single selection is permitted; higher values allow for multiple selections up to the defined limit.
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
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted alphabetically (A–Z); if false, the original order of the items will be preserved.
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
    /** Specifies the sorting order for data:  - Use "asc" for ascending order (e.g., A-Z, 0-9).- Use "desc" for descending order (e.g., Z-A, 9-0).
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
    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styles, ensuring a consistent and customized look for the element.
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
    /** Defines a custom template for rendering each token's content when the selectionDisplayMode property is set to 'tokens'. This allows you to control the appearance and structure of individual tokens displayed in the selection area.
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
    /** If set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or other keyboard navigation methods.
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
    /** Sets or retrieves the current selection values. When called, this function returns an array of objects representing the selected items, where each object has the following structure: { label: string, value: any }. Return type: Array.
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
    /** Determines which property of each item object should be used as the item's value. The value specified by valueMember will be stored as the value of the ListBox item. This property is particularly useful when populating the ListBox from a JSON dataSource, and you want to designate a specific field from each JSON item (such as id, code, or another unique identifier) to serve as the item's value. Similar to groupMember, valueMember helps map a property in your JSON objects directly to the ListBox value, ensuring the correct data is referenced and used when working with item selections or submissions.
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
    /** Controls whether the vertical scroll bar is displayed within the container. Set this property to enable, disable, or automatically show the scroll bar based on the content's height relative to the container.
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
    /** Specifies whether virtualization is enabled for the dropdown component. When virtualization is enabled, the dropdown can efficiently handle and display a large number of items—such as one million—by rendering only the visible items rather than all items at once. This significantly improves performance and responsiveness, even when working with vast datasets.
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
        return ["autoCloseDelay", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dropDownAppendTo", "dropDownButtonPosition", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOpenMode", "dropDownOverlay", "dropDownPlaceholder", "dropDownPosition", "dropDownWidth", "filterable", "filterInputPlaceholder", "filterMode", "filterCallback", "grouped", "groupMember", "hint", "horizontalScrollBarVisibility", "inputMember", "incrementalSearchDelay", "incrementalSearchMode", "itemHeight", "itemMeasureMode", "items", "itemTemplate", "label", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "opened", "placeholder", "readonly", "rightToLeft", "resizeIndicator", "resizeMode", "selectionDisplayMode", "selectedIndexes", "selectedValues", "selectionMode", "sorted", "sortDirection", "theme", "tokenTemplate", "unfocusable", "value", "valueMember", "verticalScrollBarVisibility", "virtualized"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onActionButtonClick", "onChange", "onClose", "onClosing", "onDropDownButtonClick", "onItemClick", "onOpen", "onOpening", "onResizeStart", "onResizeEnd", "onScrollBottomReached", "onScrollTopReached", "onCreate", "onReady"];
    }
    /** Appends a new ListItem element to the end of the existing list of items within the specified parent element. This operation updates the parent element’s children by adding the new ListItem as the last item in the sequence, preserving the order of existing items.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node) {
        const result = this.nativeElement.appendChild(node);
        return result;
    }
    /** Adds one or more new items to the collection, array, or list. This action typically appends the provided item(s) to the existing data structure, increasing its size. Specify the items to be added as input parameters.
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
    /** Removes all items from the drop-down list, clearing its contents and leaving the list empty. This action ensures that no selectable options remain within the drop-down component.
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
    /** Deselects all currently selected items, ensuring that no items remain selected.
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
    /** Closes the currently open dropdown list, hiding all available options from view and returning the dropdown to its default collapsed state. This action does not select or modify any options within the list.
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
    /** Initiates the data binding process, updating the user interface with the latest values from the data source. This method can be used to refresh or re-sync the UI whenever the underlying data changes, ensuring that displayed information remains current and accurate.
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
    /** Scrolls the view to bring the specified item into the visible area of its container, ensuring that the item is fully or partially visible to the user. This enables users to locate and interact with the desired item without manual scrolling.
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
    /** Returns the selected item instance from the dropDown list. This method retrieves the full object representing the currently chosen entry, including all associated properties and values, allowing further manipulation or data access within your application.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value) {
        const result = this.nativeElement.getItem(value);
        return result;
    }
    /** Inserts a new item into the collection at the specified index, shifting existing items at and after that position one place to the right.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, value);
            });
        }
    }
    /** Inserts a new ListItem element into the list directly before a specified existing ListItem, adjusting the list order accordingly.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node, referenceNode) {
        const result = this.nativeElement.insertBefore(node, referenceNode);
        return result;
    }
    /** Displays the drop-down list, allowing users to view and select from the available options.
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
    /** Removes the item located at the specified index or position within the collection, shifting any subsequent items to fill the gap. If the specified position is out of range, no changes are made to the collection.
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
    /** Removes a specified ListItem element from the collection of child items within the parent element, effectively updating the list's contents to exclude the targeted item.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node) {
        const result = this.nativeElement.removeChild(node);
        return result;
    }
    /** Selects a specific item from the dropdown list based on the user's input or selection criteria. This action updates the dropdown's displayed value to the chosen item and may trigger any associated event handlers or callbacks.
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
    /** Removes the currently selected item from the dropdown list, restoring the dropdown to its unselected or default state. This action ensures that no item remains highlighted or chosen within the dropdown component.
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
    /** Updates the selected item in the dropDown list with new data or values. This action modifies the existing item rather than adding a new entry or removing an existing one, ensuring that the dropDown reflects the most current information.
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
        return (React.createElement("smart-drop-down-list", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { DropDownList, ListItem, ListItemsGroup, Smart, DropDownList as default };
