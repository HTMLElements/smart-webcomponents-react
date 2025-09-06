
require('../source/modules/smart.layout');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.layout = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$3;
	if (typeof window !== "undefined") {
	    Smart$3 = window.Smart;
	}
	/**
	 Layout item represents a single content section inside the Layout.
	*/
	class LayoutItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'LayoutItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with or modify the element.
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
	    /** Sets or retrieves the modifiers applied to the Layout item, allowing you to customize its appearance or behavior, such as spacing, alignment, or other layout-related properties.
	    *	Property type: any
	    */
	    get modifiers() {
	        return this.nativeElement ? this.nativeElement.modifiers : undefined;
	    }
	    set modifiers(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modifiers = value;
	        }
	    }
	    /** Specifies the minimum allowed size for the item. This value sets the smallest dimensions (such as width or height) that the item can be resized or displayed at within its container.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies the text or caption displayed as the item's label. This value is used to identify or describe the item in the user interface.
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
	    /** Specifies the dimensions of the item, such as width, height, or overall scale, to control how large or small the item appears within the interface.
	    *	Property type: any
	    */
	    get size() {
	        return this.nativeElement ? this.nativeElement.size : undefined;
	    }
	    set size(value) {
	        if (this.nativeElement) {
	            this.nativeElement.size = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
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
	        return ["disabled", "modifiers", "min", "label", "size", "unfocusable"];
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
	        return (React.createElement("smart-layout-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart$2;
	if (typeof window !== "undefined") {
	    Smart$2 = window.Smart;
	}
	/**
	 LayoutGroup represents a group of layout items inside the Layout.
	*/
	class LayoutGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'LayoutGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Determines whether the element is interactive or not. When enabled, the element can be interacted with by users (e.g., clicked, edited, or focused). When disabled, the element becomes non-interactive and typically appears visually subdued, preventing any user actions.
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
	    /** Sets or retrieves the modifier properties applied to the Layout item, allowing you to customize its appearance and behavior (such as alignment, padding, margin, or transformations). Use this property to define or access configuration options that modify how the Layout item is displayed or interacts within its container.
	    *	Property type: any
	    */
	    get modifiers() {
	        return this.nativeElement ? this.nativeElement.modifiers : undefined;
	    }
	    set modifiers(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modifiers = value;
	        }
	    }
	    /** Specifies the minimum allowable size for the item, ensuring that it cannot be resized smaller than this value. This property helps maintain layout integrity by preventing the item from shrinking below the defined threshold.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies the text or name displayed as the label for the item, which is typically used to identify or describe the item in user interfaces.
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
	    /** Specifies the alignment or direction in which the group’s elements are arranged (e.g., horizontal, vertical, or custom orientation). This property controls how child components are positioned within the group.
	    *	Property type: LayoutGroupOrientation | string
	    */
	    get orientation() {
	        return this.nativeElement ? this.nativeElement.orientation : undefined;
	    }
	    set orientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.orientation = value;
	        }
	    }
	    /** Specifies the overall dimensions of the item, such as its width, height, or volume, which can be used for layout, display, or calculation purposes.
	    *	Property type: any
	    */
	    get size() {
	        return this.nativeElement ? this.nativeElement.size : undefined;
	    }
	    set size(value) {
	        if (this.nativeElement) {
	            this.nativeElement.size = value;
	        }
	    }
	    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard or other assistive technologies.
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
	        return ["disabled", "modifiers", "min", "label", "orientation", "size", "unfocusable"];
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
	        return (React.createElement("smart-layout-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
	}
	/**
	 TabLayoutItem represents a Layout Item that has a Tab label and is applicable to a TabLayoutGroup.
	*/
	class TabLayoutItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TabLayoutItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes inactive and unresponsive to user actions.
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
	    /** Gets or sets the modifier properties (such as alignment, padding, spacing, or styling options) applied to the Layout item, allowing you to customize its appearance and behavior.
	    *	Property type: any
	    */
	    get modifiers() {
	        return this.nativeElement ? this.nativeElement.modifiers : undefined;
	    }
	    set modifiers(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modifiers = value;
	        }
	    }
	    /** Specifies the minimum allowable size for the item, ensuring that it cannot be resized or rendered smaller than this value.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies the text or name displayed as the label for the item. This value is shown to users as the item's identifier or title in user interfaces.
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
	    /** Specifies the alignment and direction in which the group’s elements are arranged, such as horizontal or vertical orientation.
	    *	Property type: TabLayoutItemOrientation | string
	    */
	    get orientation() {
	        return this.nativeElement ? this.nativeElement.orientation : undefined;
	    }
	    set orientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.orientation = value;
	        }
	    }
	    /** Specifies the overall dimensions of the item, such as its width, height, or length, to define how much space the item occupies.
	    *	Property type: any
	    */
	    get size() {
	        return this.nativeElement ? this.nativeElement.size : undefined;
	    }
	    set size(value) {
	        if (this.nativeElement) {
	            this.nativeElement.size = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users will not be able to access the element using the Tab key or other keyboard navigation methods.
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
	        return ["disabled", "modifiers", "min", "label", "orientation", "size", "unfocusable"];
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
	        return (React.createElement("smart-tab-layout-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 TabLayoutGroup represents a group of TabLayoutItems each with it's own Tab label.
	*/
	class TabLayoutGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TabLayoutGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user actions; when disabled, the element is inactive and cannot be interacted with.
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
	    /** Gets the current modifiers applied to the Layout item, or sets new modifiers to customize its appearance and behavior. Modifiers may include properties such as alignment, spacing, padding, or visibility.
	    *	Property type: any
	    */
	    get modifiers() {
	        return this.nativeElement ? this.nativeElement.modifiers : undefined;
	    }
	    set modifiers(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modifiers = value;
	        }
	    }
	    /** Specifies the minimum allowable size for the item. This value ensures that the item's dimensions do not shrink below the defined threshold, helping maintain layout consistency and usability.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies the text that will be displayed as the item's label, providing a descriptive name or title for the user interface element.
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
	    /** Specifies the orientation (horizontal or vertical) of the group, defining how its child elements are arranged within the component. This setting affects the layout and flow direction of the grouped items.
	    *	Property type: TabLayoutGroupOrientation | string
	    */
	    get orientation() {
	        return this.nativeElement ? this.nativeElement.orientation : undefined;
	    }
	    set orientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.orientation = value;
	        }
	    }
	    /** Specifies the alignment or placement of the group of tab items within the tab container. This determines whether the tabs are positioned, for example, at the start, center, end, or distributed evenly along the container.
	    *	Property type: TabLayoutGroupPosition | string
	    */
	    get position() {
	        return this.nativeElement ? this.nativeElement.position : undefined;
	    }
	    set position(value) {
	        if (this.nativeElement) {
	            this.nativeElement.position = value;
	        }
	    }
	    /** Specifies the dimensions or overall scale of the item, such as its width, height, or length. This property defines how large or small the item appears or is rendered within the user interface or layout.
	    *	Property type: any
	    */
	    get size() {
	        return this.nativeElement ? this.nativeElement.size : undefined;
	    }
	    set size(value) {
	        if (this.nativeElement) {
	            this.nativeElement.size = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, meaning it cannot be selected or navigated to using the Tab key or other keyboard navigation methods.
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
	        return ["disabled", "modifiers", "min", "label", "orientation", "position", "size", "unfocusable"];
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
	        return (React.createElement("smart-tab-layout-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Layout splits your content into resizable sections.
	*/
	class Layout extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Layout' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and no animation effects will be applied. Use this property to enable, disable, or specify different animation behaviors.
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
	    /** Specifies the list of selectable options that will appear within the context menu, allowing users to interact with or perform actions based on their selection.
	    *	Property type: any
	    */
	    get contextMenuDataSource() {
	        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	    }
	    set contextMenuDataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.contextMenuDataSource = value;
	        }
	    }
	    /** Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to actions. When disabled, the element becomes non-interactive and does not respond to user input or events.
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
	    /** Sets or retrieves the data source associated with the Layout component. This property allows you to define the input data that the Layout will use to render its content, or to access the current data source being used.
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
	    /** Sets or retrieves the unlockKey, a unique code or token required to grant access to and activate the product’s full functionality.
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
	    /** Specifies or retrieves the current language setting. This property is typically used together with the messages property to display localized content based on the selected language. Setting this value changes which language messages are used, while getting it returns the currently active language code (e.g., "en", "fr", "es").
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
	    /** Defines an object containing string values that represent messages or labels corresponding to various password strength states (e.g., "weak", "medium", "strong"). This is typically used to provide user feedback on password strength during password creation or validation processes.
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
	    /** Sets or retrieves the main orientation of the Layout component. This orientation determines how child Splitters within the Layout are arranged—either horizontally or vertically—by default. All Splitters inside the Layout will inherit this orientation unless a specific orientation is defined for them individually in the dataSource configuration.
	    *	Property type: Orientation | string
	    */
	    get orientation() {
	        return this.nativeElement ? this.nativeElement.orientation : undefined;
	    }
	    set orientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.orientation = value;
	        }
	    }
	    /** If the element is set to "readonly", users cannot modify its value, but they can still highlight and copy its contents. However, they cannot type, edit, or otherwise change the value within the field. The field remains focusable and selectable, but direct user input is disabled.
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
	    /** Indicates whether the splitting process occurs in real-time (live) or is performed as a pre-processed operation before use.
	    *	Property type: boolean
	    */
	    get allowLiveSplit() {
	        return this.nativeElement ? this.nativeElement.allowLiveSplit : undefined;
	    }
	    set allowLiveSplit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowLiveSplit = value;
	        }
	    }
	    /** Sets or retrieves a value that determines whether the element's layout direction is configured for right-to-left (RTL) languages, such as Arabic or Hebrew, enabling proper alignment and rendering for locales that use RTL text.
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
	    /** Specifies which item is currently selected from a list or collection. This property typically holds the identifier, index, or value of the selected item, allowing the application to reference or display the chosen option.
	    *	Property type: any
	    */
	    get selectedIndex() {
	        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	    }
	    set selectedIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedIndex = value;
	        }
	    }
	    /** Specifies the theme to be applied. The theme controls the overall appearance and style of the element, including colors, fonts, and visual layout, ensuring a consistent look and feel across the user interface.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using tab navigation or other focus-related interactions.
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
	        return ["animation", "contextMenuDataSource", "disabled", "dataSource", "unlockKey", "locale", "messages", "orientation", "readonly", "allowLiveSplit", "rightToLeft", "selectedIndex", "theme", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onResize", "onStateChange", "onChange", "onClosing", "onClose", "onOpening", "onOpen", "onMenuItemClick", "onCreate", "onReady"];
	    }
	    /** Returns the Layout item located at the specified index within the collection. The index is passed as a parameter, and the function retrieves the corresponding Layout item from the list or array. This allows you to access a particular Layout item by its position in the sequence.
	    * @param {number | string} index. The index of an item.
	    */
	    getItem(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.getItem(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.getItem(index);
	            });
	        }
	    }
	    /** Automatically updates and redraws the layout to reflect any recent changes, ensuring all components are properly arranged and displayed according to the latest data or configuration.
	    */
	    refresh() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refresh();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refresh();
	            });
	        }
	    }
	    /** Inserts a new item element into the Layout component, positioning it within the existing structure according to the component's layout configuration. This action updates the Layout to include the new item as part of its content, ensuring proper rendering and alignment with other elements.
	    * @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
	    * @param {string | undefined} position?. A string that represents the position where the new item will be created.
	    */
	    createLayoutItem(type, position) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.createLayoutItem(type, position);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.createLayoutItem(type, position);
	            });
	        }
	    }
	    /** Transfers all child elements or nodes from a specified source item to a designated target item, effectively moving the entire group of children so they become nested under the target item instead of the source.
	    * @param {any} oldItem. The source item that will have it's content removed.
	    * @param {any} newItem. The host item that will have it's content replaced.
	    */
	    moveChildren(oldItem, newItem) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.moveChildren(oldItem, newItem);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.moveChildren(oldItem, newItem);
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
	        return (React.createElement("smart-layout", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Layout = Layout;
	exports.LayoutGroup = LayoutGroup;
	exports.LayoutItem = LayoutItem;
	exports.TabLayoutGroup = TabLayoutGroup;
	exports.TabLayoutItem = TabLayoutItem;
	exports.default = Layout;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
