
require('../source/modules/smart.accordion');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.accordion = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Single item in an Accordion view.
	*/
	class AccordionItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'AccordionItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the position of the arrow indicator within the header. Accepts values such as 'left', 'right', or 'none'. When set to 'none', the arrow will not be displayed in the header.
	    *	Property type: AccordionItemArrow | string
	    */
	    get arrow() {
	        return this.nativeElement ? this.nativeElement.arrow : undefined;
	    }
	    set arrow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.arrow = value;
	        }
	    }
	    /** Sets or retrieves the content of the item. Use this property to assign new content to the item or to access its current content value.
	    *	Property type: boolean
	    */
	    get expanded() {
	        return this.nativeElement ? this.nativeElement.expanded : undefined;
	    }
	    set expanded(value) {
	        if (this.nativeElement) {
	            this.nativeElement.expanded = value;
	        }
	    }
	    /** Gets or sets whether the element is in its expanded or collapsed state. When set to true, the element is expanded and its content is visible; when false, the element is collapsed and its content is hidden.
	    *	Property type: boolean
	    */
	    get focused() {
	        return this.nativeElement ? this.nativeElement.focused : undefined;
	    }
	    set focused(value) {
	        if (this.nativeElement) {
	            this.nativeElement.focused = value;
	        }
	    }
	    /** Gets or sets whether the element currently has input focus. When set to true, the element receives focus; when set to false, the element loses focus. This property reflects the element's current focus state within the user interface.
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
	        return ["arrow", "content", "expanded", "focused", "label"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCollapse", "onExpand", "onCreate", "onReady"];
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
	        return (React.createElement("smart-accordion-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Accordion organizes content within collapsable items.
	*/
	class Accordion extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Accordion' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in instant transitions without animated effects. Setting this property to other supported values enables different animation behaviors.
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
	    /** Specifies the data source to be loaded and displayed within the Accordion component. This property defines the collection of items or structured data that populates each section or panel of the Accordion, enabling dynamic rendering of its contents. The data source can typically be provided as an array of objects, JSON data, or via a remote endpoint depending on configuration.
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
	    /** Controls whether the accordion component is enabled or disabled. When set to disabled, all interactive functionality is turned off—users cannot expand, collapse, or interact with any accordion sections. Disabled accordions appear visually inactive to indicate their non-interactive state.
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
	    /** Sets or retrieves the indexes of currently expanded items. By assigning an array of item indexes to this property, you can programmatically expand those specific items. The maximum number of items that can be expanded at once depends on the value specified in the expandMode property (for example, single or multiple expansion modes). When getting this property, it returns an array of the indexes of all expanded items.
	    *	Property type: number[]
	    */
	    get expandedIndexes() {
	        return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
	    }
	    set expandedIndexes(value) {
	        if (this.nativeElement) {
	            this.nativeElement.expandedIndexes = value;
	        }
	    }
	    /** Sets or retrieves the current expand mode. The expand mode specifies how list or group items behave when expanding or collapsing—such as allowing multiple items to expand simultaneously or restricting expansion to a single item at a time.
	    *	Property type: AccordionExpandMode | string
	    */
	    get expandMode() {
	        return this.nativeElement ? this.nativeElement.expandMode : undefined;
	    }
	    set expandMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.expandMode = value;
	        }
	    }
	    /** Retrieves or assigns the 'unlockKey' property, which serves as the access credential required to unlock and activate the product's full features.
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
	    /** Sets or retrieves the current language code (e.g., "en", "fr") for the component. This property works together with the messages property to determine which language-specific messages or translations are displayed. Use this to localize your application content based on user preference or locale.
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
	    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify or enhance localized message output—such as applying dynamic content, adjusting text structure, or handling language-specific variations—before the messages are delivered to the client application.
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
	    /** Specifies or retrieves an object containing the localized strings used throughout the widget interface. This allows you to define custom translations for various UI elements in different languages. Used together with the locale property to enable localization and internationalization support within the widget.
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
	    /** Indicates whether the element is read-only. When set to true, the element cannot be modified or interacted with by users; its value is fixed and user input is disabled. If false, the element remains editable and interactive.
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
	    /** Controls whether users can reorder accordion items by dragging and dropping them. When enabled, items within the accordion component can be rearranged interactively; when disabled, the order of items remains fixed.
	    *	Property type: boolean
	    */
	    get reorder() {
	        return this.nativeElement ? this.nativeElement.reorder : undefined;
	    }
	    set reorder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.reorder = value;
	        }
	    }
	    /** Specifies or retrieves a value that determines whether the element is aligned to accommodate right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. This property ensures the element’s layout and text direction are properly adjusted to support RTL localization.
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
	    /** Specifies the theme to be applied, which controls the overall appearance and visual style of the element, including aspects such as colors, fonts, and background.
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
	    /** Specifies whether the element is capable of receiving keyboard focus, allowing users to navigate to it using the keyboard (such as the Tab key) and interact with it through assistive technologies.
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
	        return ["animation", "dataSource", "disabled", "expandedIndexes", "expandMode", "unlockKey", "locale", "localizeFormatFunction", "messages", "readonly", "reorder", "rightToLeft", "theme", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCollapse", "onCollapsing", "onDragEnd", "onDragStart", "onExpand", "onExpanding", "onCreate", "onReady"];
	    }
	    /** Collapses the item located at the specified index, hiding its associated content or details from view. This action typically updates the user interface to indicate that the item is no longer expanded.
	    * @param {number} position. Index of the item to collapse.
	    */
	    collapse(position) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapse(position);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapse(position);
	            });
	        }
	    }
	    /** Expands the item located at the specified index in the collection, making its detailed content visible or accessible to the user.
	    * @param {number} position. Index of the item to expand.
	    */
	    expand(position) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expand(position);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expand(position);
	            });
	        }
	    }
	    /** Inserts a new item into the array at the specified index, shifting existing elements to the right to accommodate the new entry. If the specified index is out of range, the operation will either append the item to the end or return an error, depending on the implementation.
	    * @param {number} index. Index where the new item will be inserted.
	    * @param {any} item. Object representing the new item's properties.
	    */
	    insert(index, item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insert(index, item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insert(index, item);
	            });
	        }
	    }
	    /** Removes the item located at the specified index from the array, shifting subsequent items one position to the left. The array's length is reduced by one, and the removed item is no longer accessible.
	    * @param {number} position. Index of the item to remove.
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
	    /** Replaces the item at the given index in the collection with an updated version, incorporating the specified new property values while preserving any unchanged properties.
	    * @param {number} index. Index of the item to update.
	    * @param {any} settings. Object containing updated property values for the item.
	    */
	    update(index, settings) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.update(index, settings);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.update(index, settings);
	            });
	        }
	    }
	    /** Sets the locale of a component.
	    * @param {string} locale. The locale abbreviation. For example: 'de'.
	    * @param {any} messages?. Object containing the locale messages.
	    */
	    setLocale(locale, messages) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setLocale(locale, messages);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setLocale(locale, messages);
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
	        return (React.createElement("smart-accordion", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Accordion = Accordion;
	exports.AccordionItem = AccordionItem;
	exports.default = Accordion;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
