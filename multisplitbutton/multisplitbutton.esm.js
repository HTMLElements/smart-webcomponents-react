
"use client";

import '../source/modules/smart.multisplitbutton'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.multisplitbutton');
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
 Buttons group with DropDown and multiple action buttons.
*/
class MultiSplitButton extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'MultiSplitButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or retrieves the current animation mode for the component. When the property is set to 'none', all animations are disabled. For other supported values, the animation mode will determine how visual transitions are rendered.
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
    /** Specifies the data source that provides the information required to generate the element’s permanently visible buttons. This property defines where and how the button data is retrieved, ensuring the buttons remain constantly displayed on the element.
    *	Property type: string[]
    */
    get buttonsDataSource() {
        return this.nativeElement ? this.nativeElement.buttonsDataSource : undefined;
    }
    set buttonsDataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.buttonsDataSource = value;
        }
    }
    /** Specifies the data source from which the multi-split button's dropdown menu retrieves and displays its list of options. This setting defines what content appears in the dropdown and enables dynamic or static population of menu items.
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
    /** Controls whether the jqxMultiSplitButton component is active or inactive. When enabled, users can interact with the jqxMultiSplitButton; when disabled, the component becomes non-interactive and appears visually inactive.
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
    /** Controls the visibility of the loading indicator, showing it when active and hiding it when not needed. This allows users to receive visual feedback during content loading or processing operations.
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
    /** Defines or retrieves the displayMember property, which determines the name of the object property to display in the UI. When binding a data collection using the dataSource property, displayMember specifies which property of each data object should be shown to the user. For example, if dataSource is an array of user objects, setting displayMember to "name" will display the value of the "name" property for each user in the collection.
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
    /** Specifies the parent container element for the button’s dropdown list (popup). Accepts a CSS selector, an element ID, or the literal value 'body' as the target container. Use this option when a CSS property from an ancestor element is affecting the visibility or display of the dropdown list. By setting the parent container, you can control where the dropdown is rendered in the DOM, helping to resolve issues with overflow, clipping, or z-index caused by parent elements.
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
    /** Specifies the location where the dropdown button will be displayed relative to its parent element. Possible values may include options such as "left," "right," "top," or "bottom," allowing you to control the alignment and placement of the dropdown button within the user interface.
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
    /** Specifies the behavior of the element's drop-down functionality.  - In 'none' mode, the drop-down will never open, regardless of any user interaction.  - In 'dropDownButton' mode, the drop-down opens only when the dedicated drop-down button on the element is clicked; clicking other parts of the element will have no effect.  - In 'auto' mode, the drop-down opens when any area of the element's top section is clicked, not just the button—providing a more flexible and user-friendly experience.
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
    /** When this property is enabled, opening the element’s dropdown will render a transparent overlay layer between the dropdown menu and the rest of the page content. This overlay visually separates the dropdown from the background and can help intercept clicks outside the dropdown to close it or prevent interaction with other elements while the dropdown is open.
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
    /** Specifies the vertical placement of the drop-down list relative to its trigger element. When set to 'auto', the component dynamically chooses whether to display the drop-down above or below the trigger based on available space within the viewport, ensuring that the list remains fully visible without overflow.
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
    /** Specifies whether the filtering feature is currently active. When set to true, filtering is enabled and data will be filtered according to the specified criteria; when false, all data is shown without applying any filters.
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
    /** Specifies the filtering behavior applied to the dropdown list when users type or search. This property controls how the available options are filtered and displayed, such as matching items that contain, start with, or exactly match the user's input.
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
    /** Specifies the placeholder text that appears inside the dropdown list's filter input field, providing guidance or example input to help users understand what they can type to filter the list options.
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
    /** When enabled, this setting organizes items into groups based on the first letter of each item's value. Note: This option cannot be used if your dataSource is already grouped, as it only applies to flat (ungrouped) collections.
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
    /** Gets or sets the groupMember property. If groupMember is not explicitly set, it defaults to using the value of the source object's group property.
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
    /** Enhances or retrieves the value of the incrementalSearchDelay property. This property defines the time interval, in milliseconds, that must pass after the user stops typing before the previous search string is cleared. The countdown begins as soon as the user ceases typing, ensuring that only periods of inactivity longer than the specified delay will reset the search input.
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
    /** Gets or sets the current mode for incremental search, which determines how search input is processed as the user types.
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
    /** Specifies the vertical dimension (height) of each item, in pixels or another defined unit. This property controls how tall each item appears within the component, affecting layout and spacing.
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
    /** The 'itemTemplate' property is a string that specifies the 'id' attribute of an 'HTMLTemplateElement' present in the DOM. This property is used to reference the corresponding template when generating list items, allowing the application to clone and insert the template’s content for each item in the list dynamically. By using an 'HTMLTemplateElement', you can define the structure and layout of individual list items in a reusable, maintainable way.
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
    /** Specifies the text to be shown alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the component. This text provides context or feedback to users during loading states.
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
    /** Specifies the on-screen location where the loading indicator will be displayed (e.g., top, bottom, center, or custom coordinates).
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
    /** Sets or retrieves the unlockKey property, a unique key required to unlock access to the product’s features or content. Use this to programmatically provide or verify the unlock key during authentication or activation processes.
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
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") for localization. This property works together with messages, ensuring the appropriate language-specific messages are displayed or retrieved based on the selected language.
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
    /** Callback function used in the localization module, typically invoked to handle language changes, translate content, or manage locale-specific operations during application runtime.
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
    /** Defines or retrieves an object containing customizable strings and messages displayed by the widget, enabling support for localization and internationalization. This property works together with the language setting to provide appropriate translations based on the user's selected language. Use this object to specify translations for all widget text elements.
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
    /** Specifies whether the popup is currently visible (open) or hidden (closed) on the screen. This property controls the display state of the popup component.
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
    /** Prevents users from interacting with the element, disabling all input events such as clicks, typing, or form submissions. The element remains visible, but users cannot select, activate, or modify it in any way.
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
    /** Gets or sets the selected indexes of items within the button's dropdown menu. This property allows you to programmatically retrieve or update which items in the dropdown are currently selected.
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
    /** Gets or sets the selected values in the button's drop-down menu. This property allows you to retrieve the currently selected options or specify which options should be selected within the drop-down associated with the button.
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
    /** Specifies the maximum number of items a user is allowed to select. If set to 1, only single selection is permitted; higher values enable multiple selections up to the defined limit.
    *	Property type: MultiSplitButtonSelectionMode | string
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Specifies whether the items displayed in the dropdown menu are automatically sorted in alphabetical order. If enabled, all dropdown items will appear in alphabetical sequence; if disabled, items will retain their original order as provided.
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
    /** Specifies the theme to be applied, which controls the overall appearance and styling of the element, including colors, fonts, backgrounds, and other visual properties. This setting allows for consistent visual presentation across the application or component.
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
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via keyboard navigation (such as the Tab key).
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
    /** Specifies the property of the item object that holds its unique value. This property is used to retrieve or assign the item's value, which is typically leveraged for data binding, form submission, or identifying items within a collection. The value is stored in the specified key of the item object.
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
    /** Specifies whether virtualization is enabled for the button’s drop-down list. When set to true, virtualization improves performance by only rendering items visible in the viewport, which is useful for large datasets. When set to false, all items are rendered regardless of visibility.
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
        return ["animation", "buttonsDataSource", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dropDownAppendTo", "dropDownButtonPosition", "dropDownOpenMode", "dropDownOverlay", "dropDownPosition", "filterable", "filterMode", "filterInputPlaceholder", "grouped", "groupMember", "incrementalSearchDelay", "incrementalSearchMode", "itemHeight", "itemTemplate", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "opened", "readonly", "selectedIndexes", "selectedValues", "selectionMode", "sorted", "theme", "unfocusable", "valueMember", "virtualized"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onButtonClick", "onChange", "onClose", "onClosing", "onItemClick", "onOpen", "onOpening", "onScrollBottomReached", "onScrollTopReached", "onCreate", "onReady"];
    }
    /** Closes the dropdown list associated with the button, hiding its options from view.
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
    /** Returns an instance of the item that appears in the element’s dropdown menu. This instance represents the selected item from the dropdown list, allowing access to its properties and methods.
    * @param {string} value. The value of an item from the drop down list or a button.
    * @returns {HTMLElement}
  */
    getItem(value) {
        const result = this.nativeElement.getItem(value);
        return result;
    }
    /** Returns an array containing all items currently present in the dropdown list of the split button component. Each array element represents an individual dropdown item, allowing you to access or manipulate the complete set of options available in the split button's dropdown.
    * @returns {any[]}
  */
    items() {
        const result = this.nativeElement.items();
        return result;
    }
    /** Inserts a new item into the dropdown list at the specified index, shifting existing items as needed. The new item will appear at the given position within the list, and subsequent items will be moved down to accommodate it.
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
    /** Displays the drop-down list associated with the splitButton control, allowing users to view and select available options.
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
    /** Removes an item located at the specified index from the drop-down list, updating the list to exclude the removed item and adjusting the positions of subsequent items accordingly.
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
    /** Updates a specific item within the drop-down list by modifying its properties or replacing its value with new data. This operation allows you to dynamically change the content displayed for a selected option in the drop-down menu.
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
        return (React.createElement("smart-multi-split-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ListItem, ListItemsGroup, MultiSplitButton, Smart, MultiSplitButton as default };
