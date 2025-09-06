
require('../source/modules/smart.textbox');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.textbox = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
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

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
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

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 TextBox is an input field with auto-suggest options.
	*/
	class TextBox extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls the animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' will disable all animations.
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
	    /** Specifies whether the text box should automatically receive keyboard focus when the page loads, allowing users to start typing immediately without clicking inside the box.
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
	    /** Specifies the autocomplete mode used to filter and display suggestions from the dataSource. The selected autocomplete mode determines how input text is matched against the available items, showing only those entries that meet the criteria—for example, items that start with, contain, or exactly match the user's input. This setting helps control the relevance and behavior of suggestion lists shown to the user while typing.
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
	    /** Specifies the duration (in milliseconds) to wait after the user stops typing before displaying the dropdown with autocomplete suggestions. This delay helps control how quickly the matching results appear, improving performance and user experience by preventing unnecessary searches while the user is still typing.
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
	    /** Specifies the data source that populates the ComboBox options. The dataSource property accepts multiple types:- 'Array of strings or numbers:' Each item will be displayed as both the label and value of a list item.- 'Array of objects:' Each object should contain properties—such as label (displayed text) and value (item value)—that define the corresponding list item’s display and value.- 'Callback function:' You can provide a function that returns an array of items in either of the above forms. This allows for dynamic or asynchronous data loading.This flexible approach lets you easily integrate static lists, complex objects, or data fetched from external sources into the ComboBox.
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
	    /** Determines whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When set to "disabled," the element cannot be focused, clicked, or edited by the user.
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
	    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data or loading items from a remote source. This helps inform users that a background operation is in progress.
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
	    /** Sets or retrieves the displayMember property. The displayMember determines which property of each object in the data source collection (defined by the 'dataSource' property) will be used for display purposes in the user interface. By specifying the name of a property here, you control which value from each data source item is shown to users (e.g., displaying a "name" property from a list of user objects).
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
	    /** Specifies the visual presentation of characters within the input field, such as whether the characters are visible as plain text, masked (e.g., as password dots), or formatted in a particular style. This attribute controls how users see the inputted content while typing or reviewing their entries.
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
	    /** Specifies the parent container to which the dropdown menu is appended in the DOM. By default, the dropdown is rendered within its original parent element. However, if an ancestor element has restricted overflow (e.g., 'overflow: hidden' or 'overflow: auto'), the dropdown may be clipped and not display correctly. To resolve this, you can set the dropDownAppendTo property to ''body'', the ID of a specific HTML element, or a direct reference to an HTML element. When set, the dropdown will be moved to the specified container in the DOM, ensuring it displays properly regardless of overflow constraints in its ancestors. To restore the dropdown to its original parent, reset this property to null. This feature is especially useful for ensuring that dropdowns are visible and functional in complex layouts where parent elements limit visibility due to CSS overflow properties.
	    *	Property type: any
	    */
	    get dropDownAppendTo() {
	        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	    }
	    set dropDownAppendTo(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownAppendTo = value;
	        }
	    }
	    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by a CSS variable. To customize the dropdown's height directly, you can assign a specific value (e.g., "200px" or "50%") to this property. Otherwise, leaving it empty enables the component to use the height defined by the associated CSS variable.
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
	    /** Defines the maximum height for the dropdown menu. If no value is set (default is an empty string), the dropdown’s maximum height will be determined by a corresponding CSS variable instead. This allows for dynamic styling via CSS, while still providing the option to specify a fixed maximum height directly through this property.
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
	    /** Specifies the maximum width of the dropdown menu. By default, this property is set to an empty string, meaning that the dropdown's max-width is determined by a corresponding CSS variable. If a specific value (such as '300px' or '100%') is provided, it will override the CSS variable and directly set the maximum width of the dropdown.
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
	    /** Defines the minimum height of the dropdown menu. By default, this property is set to an empty string (""), which means the minimum height is not explicitly specified in the component and will instead be determined by the value of a related CSS variable. If a specific value (such as "200px" or "2rem") is provided, it will override the CSS variable and set the minimum height of the dropdown directly.
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
	    /** Specifies the minimum width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's minimum width is determined by a corresponding CSS variable. If you provide a specific value (such as '200px' or '20rem'), it will override the CSS variable and set the dropdown's minimum width accordingly.
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
	    /** Specifies the direction or animation style in which the dropdown menu appears when activated (e.g., opens upwards, downwards, or with a fade effect).
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
	    /** When this property is enabled, opening the element’s dropdown will create a transparent overlay that covers the entire area between the dropdown and the rest of the webpage. This overlay ensures that any clicks outside the dropdown are intercepted by the overlay itself, rather than interacting with underlying DOM elements. As a result, clicking outside the dropdown can be handled consistently—for example, to close the dropdown—without triggering unintended interactions elsewhere on the page.
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
	    /** Specifies the placeholder text that appears in the dropdown menu when there are no available items to display. This text provides guidance or context to users, indicating that the dropdown is currently empty.
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
	    /** Specifies the alignment and placement of the dropdown menu relative to its trigger element when the dropdown is opened, allowing you to control where the menu appears on the screen (e.g., above, below, left, or right of the trigger).
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
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing for flexible styling through external or theme-based CSS. To explicitly set a custom width, provide a valid CSS width value (e.g., "200px", "50%").
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
	    /** Specifies how the element responds when the Escape key is pressed, such as closing a dialog, dismissing a modal, or performing a custom action.
	    *	Property type: EscKeyMode | string
	    */
	    get escKeyMode() {
	        return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
	    }
	    set escKeyMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.escKeyMode = value;
	        }
	    }
	    /** Defines how the "Enter" key functions within the application, such as whether it submits a form, inserts a new line, or triggers a specific action, depending on the context.
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
	    /** Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of a  element present in the same document. This allows the element to be associated with a specific form, even if it is not nested directly within the form’s markup.
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
	    /** Provides supplemental helper text displayed beneath the element. This hint appears exclusively when the element is focused, offering contextual guidance to the user during interaction.
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
	    /** Controls whether the horizontal scroll bar within the dropdown menu is visible. This setting allows you to enable or disable horizontal scrolling for dropdown content that extends beyond the visible area.
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
	    /** Represents the property key of a List item's object that specifies which value should be displayed in the input field when a ListItem is selected. This property is useful when you want to show a value other than the default label—such as a unique identifier or another attribute—within the input. By default, the item's label is shown. Use this option to customize the displayed value based on a different property from your data objects.
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
	    /** Defines the purpose of the input field and specifies the type of data expected, providing guidance to browsers and user agents for offering autofill suggestions. This property maps directly to the standard HTML autocomplete attribute, allowing developers to control whether and how a browser can automatically fill in the field based on the user's stored information. Possible values include generic options like 'on' and 'off', as well as more specific data types such as 'name', 'organization', 'email', 'street-address', and others, enabling enhanced user experience and data accuracy in forms.
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
	    /** Specifies the height (in pixels) for each list item when rendering the list.  This property is only applicable if list virtualization is enabled, as it allows the component to accurately calculate and display only the visible items for improved performance.
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
	    /** Specifies the algorithm used to calculate the width of each item, determining how item widths are measured and displayed within the layout. This setting influences whether widths are fixed, dynamic, or adapt based on content or container size.
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
	    /** A getter that retrieves and returns an array containing all the list item elements (e.g., '' elements) currently present within the dropdown menu. This allows easy access to all items displayed in the dropdown for further manipulation or inspection.
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
	    /** The itemTemplate property is a string specifying the id of an HTMLTemplateElement present in the DOM. This template is used to define and customize the structure and content of each item rendered within the list. By referencing the id of an HTMLTemplateElement, you can control how individual list items are displayed, allowing for flexible and reusable item layouts.
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
	    /** Displays a small text label positioned above the element, typically used to provide additional context or information about the element’s purpose.
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
	    /** Specifies the text that appears alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the container. This text provides context or status information to users while the loading process is ongoing.
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
	    /** Specifies the screen location where the loading indicator will be displayed (e.g., top, bottom, center, etc.), allowing developers to control the visual placement of the loading element within the application's interface.
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
	    /** Defines or retrieves the unlockKey, a unique code or token used to grant access to the product's features or functionality.
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
	    /** Sets or retrieves the current language for localization purposes. This property is used together with the messages property, which contains language-specific content or translations. Adjusting the language will determine which set of messages is displayed or utilized within the application.
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
	    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. This enables you to modify or enhance the localized messages—such as adding prefixes, changing text structure, or injecting dynamic values—before they are displayed to the user.
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
	    /** Specifies or retrieves the maximum number of characters allowed for user input in a text field. This limits how many characters a user can type or paste into the field.
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
	    /** Specifies or retrieves the minimum number of characters a user must type before the auto-complete feature is activated and suggestions are displayed.
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
	    /** Defines or retrieves an object containing the set of strings (such as labels, tooltips, button text, and messages) used throughout the widget interface, allowing these strings to be localized for different languages. This property works together with the language property to ensure the widget’s text content is displayed in the appropriate language for users.
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
	    /** Sets or retrieves the name attribute of the element. The name attribute specifies a key associated with the element's value when submitting HTML forms, enabling server-side identification and processing of submitted data. This is essential for form controls such as inputs, selects, and textareas.
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
	    /** Indicates whether the dropdown menu is currently expanded (open) and visible to the user, or collapsed (closed) and hidden from view.
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
	    /** Specifies the placeholder text that appears inside the input field when it is empty, providing guidance or an example of the expected input to the user.
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
	    /** Prevents any user interaction with the element, disabling actions such as clicking, focusing, hovering, or keyboard input. The element will not respond to any user events while this setting is applied.
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
	    /** Sets or retrieves a value that specifies whether the element’s content is aligned for right-to-left (RTL) text direction, supporting languages and locales such as Arabic or Hebrew. When enabled, the element’s layout and text flow will be adjusted to display content appropriately for RTL reading order.
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
	    /** Indicates that the input field is required, meaning the user must provide a value in this field before the form can be submitted successfully. If the input is left empty, the form submission will be blocked and the user will be prompted to complete the required information.
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
	    /** Defines the custom error message displayed to users when the input is marked as required but no value has been entered. If the required field is left empty, this message will be shown to prompt the user to provide the necessary input.
	    *	Property type: string
	    */
	    get requiredMessage() {
	        return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
	    }
	    set requiredMessage(value) {
	        if (this.nativeElement) {
	            this.nativeElement.requiredMessage = value;
	        }
	    }
	    /** Specifies whether the entire content of the input field should automatically be highlighted (selected) when the input receives focus, allowing users to easily replace or copy the content.
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
	    /** Specifies the theme to be applied, which controls the overall appearance and visual style of the element, including colors, fonts, and other stylistic details.
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
	    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard or programmatic focus. This means users will not be able to navigate to the element using the Tab key or set focus to it via scripts.
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
	    /** Sets a new value for the element or retrieves its current value, depending on how the method is used. Useful for reading or updating the content, input, or state of form elements such as text fields, checkboxes, or select menus.
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
	    /** Specifies which property of each item object represents its value. The valueMember setting is particularly useful when binding the ListBox to data from a JSON file as its dataSource and you need to designate a specific property in the JSON objects to be used as the item's value. This is similar to how groupMember works, but instead of grouping items, valueMember tells the ListBox which property to use for the underlying value of each list item. For example, if your JSON objects have an "id" property, setting valueMember to "id" will store the value of the "id" property for each item in the ListBox.
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
	    /** Controls whether the vertical scroll bar within the dropdown menu is visible. This property allows you to specify if users can scroll vertically to view additional dropdown options when the content overflows the visible area.
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "autoFocus", "autoComplete", "autoCompleteDelay", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "displayMode", "dropDownAppendTo", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOpenMode", "dropDownOverlay", "dropDownPlaceholder", "dropDownPosition", "dropDownWidth", "escKeyMode", "enterKeyBehavior", "form", "hint", "horizontalScrollBarVisibility", "inputMember", "inputPurpose", "itemHeight", "itemMeasureMode", "items", "itemTemplate", "label", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "maxLength", "minLength", "messages", "name", "opened", "placeholder", "readonly", "rightToLeft", "required", "requiredMessage", "selectAllOnFocus", "theme", "unfocusable", "value", "valueMember", "verticalScrollBarVisibility"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onChanging", "onCreate", "onReady"];
	    }
	    /** Closes the drop-down menu associated with the input field. Note: The drop-down appears only when auto-complete functionality is enabled, allowing users to select from suggested options.
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
	    /** Expands the drop-down menu, allowing users to view and select available options. This drop-down menu is displayed exclusively when the autocomplete feature is enabled, providing relevant suggestions based on user input.
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
	    /** This method resets the input field to its original, initial value, effectively clearing any changes made by the user and restoring the input to its default state as set when the component or page first loaded.
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
	            exports.Smart.Render();
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
	        return (React.createElement("smart-text-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.ListItem = ListItem;
	exports.ListItemsGroup = ListItemsGroup;
	exports.TextBox = TextBox;
	exports.default = TextBox;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
