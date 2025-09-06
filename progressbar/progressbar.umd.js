
require('../source/modules/smart.progressbar');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.progressbar = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Progress Bar displayed as a circle.
	*/
	class CircularProgressBar extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'CircularProgressBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. For other values, animations are enabled according to the specified mode.
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
	    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element is active and can receive user input; when disabled, the element is inactive and user interaction is prevented.
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
	    /** Sets the value of the Circular Progress bar to an indeterminate state (null), indicating that progress is ongoing without a specific completion percentage. This action also initiates the progress bar’s continuous animation, signaling that a task is in progress but the duration or endpoint is unknown.
	    *	Property type: {(value: number): string}
	    */
	    get formatFunction() {
	        return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	    }
	    set formatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatFunction = value;
	        }
	    }
	    /** Specifies the direction in which the Circular Progress Bar fills as progress increases, such as clockwise or counterclockwise.
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
	    /** Retrieves or assigns the unlockKey, a unique value required to unlock access to the product features or content.
	    *	Property type: boolean
	    */
	    get inverted() {
	        return this.nativeElement ? this.nativeElement.inverted : undefined;
	    }
	    set inverted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inverted = value;
	        }
	    }
	    /** Specifies or retrieves the current language in use. This property is typically used together with the messages property to determine which set of localized messages should be displayed based on the selected language. Setting this property changes the language context for retrieving appropriate translated content.
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
	    /** Callback function associated with the localization module, typically used to handle events or processes such as language changes, translation updates, or formatting adjustments based on user locale.
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
	    /** Defines the maximum value that the progress bar can represent, determining the upper limit for the progress indicator. Values above this threshold will be capped at this maximum.
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
	    /** Defines or retrieves an object containing customizable strings used throughout the widget’s user interface, enabling support for multiple languages. This property works together with the locale property to provide localized text displayed in the widget, such as labels, tooltips, and messages. Use this object to supply translations and override the default UI text for different languages or regions.
	    *	Property type: number
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Defines the lowest value that the progress bar can represent, establishing the starting point of the progress range. This value determines the minimum limit for the progress indicator.
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
	    /** Controls whether the label is displayed on the Progress Bar. When enabled, the label will be shown; when disabled, the label will be hidden.
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
	    /** Sets or retrieves a value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. This property ensures the element displays content appropriately for RTL locales.
	    *	Property type: boolean
	    */
	    get showProgressValue() {
	        return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	    }
	    set showProgressValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showProgressValue = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element, controlling its overall visual appearance—including colors, fonts, and styling. The selected theme determines how the element is displayed, ensuring consistency with the application's design guidelines.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or programmatic focus calls.
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
	    /** Sets or retrieves the current numerical value of the progress bar, representing the completion level of the task as a number within the defined minimum and maximum range.
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
	    /** undefined
	    *	Property type: number
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
	        return ["animation", "disabled", "formatFunction", "indeterminate", "inverted", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "showProgressValue", "rightToLeft", "theme", "unfocusable", "value"];
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
	        return (React.createElement("smart-circular-progress-bar", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Progress indicators. It can be used to show a user how far along he/she is in a process.
	*/
	class ProgressBar extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ProgressBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and the element will not perform any animated transitions. Otherwise, specifying a different value enables the corresponding animation behavior.
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
	    /** Specifies whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled). When set to true, the element is disabled and cannot be interacted with; when set to false, the element remains enabled and fully functional.
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
	    /** Sets the Progress bar’s value to the indeterminate state (by assigning null), which triggers and starts the loading animation. In the indeterminate state, the Progress bar does not display a fixed value but instead shows a continuous animation to indicate ongoing activity or loading without specifying progress percentage.
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
	    /** Specifies the direction in which the Progress Bar fills as its value increases, such as left to right, right to left, top to bottom, or bottom to top.
	    *	Property type: boolean
	    */
	    get inverted() {
	        return this.nativeElement ? this.nativeElement.inverted : undefined;
	    }
	    set inverted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inverted = value;
	        }
	    }
	    /** Gets or sets the unlockKey property, which serves as the authorization code required to activate and access the product’s full features.
	    *	Property type: {(value: number): string}
	    */
	    get formatFunction() {
	        return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	    }
	    set formatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatFunction = value;
	        }
	    }
	    /** Defines or retrieves the current language setting for the component. This property determines which language is used for displaying text and messages, and works together with the messages property to select the appropriate localized strings. Adjusting this property updates the displayed language dynamically based on the provided message translations.
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
	    /** Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update content based on the selected locale.
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
	    /** Defines the highest value that the progress bar can represent, establishing the upper limit for progress tracking. This value determines when the progress bar is considered 100% complete.
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
	    /** Defines an object containing string values that represent the various states of password strength (e.g., "weak", "medium", "strong"). These values can be used to display contextual feedback to users based on the evaluated strength of their password.
	    *	Property type: number
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Defines the lowest allowable value for the progress bar, representing the starting point from which progress is measured. This sets the minimum boundary for the progress indicator’s range.
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
	    /** Specifies whether the progress bar is displayed horizontally or vertically. Adjusting this property changes the direction in which the progress indicator fills.
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
	    /** Specifies or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew. When enabled, the element's content and layout will be adjusted to accommodate RTL locales.
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
	    /** Controls the visibility of the label for the Progress Bar. When enabled, the label will be displayed; when disabled, the label will be hidden.
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
	    /** Specifies the theme that controls the visual style and appearance of the element, including aspects such as colors, fonts, and overall design. Selecting a theme customizes how the element is displayed to users.
	    *	Property type: boolean
	    */
	    get showProgressValue() {
	        return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	    }
	    set showProgressValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showProgressValue = value;
	        }
	    }
	    /** If set to true, this property prevents the element from receiving keyboard focus, making it unreachable via keyboard navigation such as the Tab key.
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
	    /** Retrieves the current value of the progress bar or sets it to a specified value, updating the visual representation accordingly. This value typically indicates the progress of a task as a numeric value within a defined range (e.g., 0 to 100).
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
	    /** undefined
	    *	Property type: number
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
	        return ["animation", "disabled", "indeterminate", "inverted", "formatFunction", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "orientation", "rightToLeft", "showProgressValue", "theme", "unfocusable", "value"];
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
	        return (React.createElement("smart-progress-bar", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.CircularProgressBar = CircularProgressBar;
	exports.ProgressBar = ProgressBar;
	exports.default = ProgressBar;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
