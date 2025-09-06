
require('../source/modules/smart.breadcrumb');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.breadcrumb = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Breadcrumbs allow users to make selections from a range of values.
	*/
	class Breadcrumb extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Breadcrumb' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls the visibility and functionality of the "Add new item" (+) button. When enabled, users can click the button to create and add new items. When disabled, the button is hidden or inactive, preventing the addition of new items.
	    *	Property type: boolean
	    */
	    get addNewItem() {
	        return this.nativeElement ? this.nativeElement.addNewItem : undefined;
	    }
	    set addNewItem(value) {
	        if (this.nativeElement) {
	            this.nativeElement.addNewItem = value;
	        }
	    }
	    /** Controls whether users can drag and reorder breadcrumb items. When enabled, breadcrumb items become draggable, allowing users to change their order within the breadcrumb navigation. When disabled, breadcrumb items remain static and cannot be moved.
	    *	Property type: boolean
	    */
	    get allowDrag() {
	        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	    }
	    set allowDrag(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowDrag = value;
	        }
	    }
	    /** Allows you to control whether users can drop dragged breadcrumb items onto the breadcrumb navigation. When enabled, users can rearrange breadcrumb items by dragging and dropping them; when disabled, dropping is prevented.
	    *	Property type: boolean
	    */
	    get allowDrop() {
	        return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	    }
	    set allowDrop(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowDrop = value;
	        }
	    }
	    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Otherwise, this property determines how animations are applied to the element.
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
	    /** Controls the visibility of the close (remove) button on individual breadcrumb items, allowing users to optionally display or hide the button for removing specific items from the breadcrumb navigation.
	    *	Property type: boolean
	    */
	    get closeButtons() {
	        return this.nativeElement ? this.nativeElement.closeButtons : undefined;
	    }
	    set closeButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeButtons = value;
	        }
	    }
	    /** Specifies the data source used to populate the breadcrumb items. The data should be provided as an array of objects, where each object represents an individual breadcrumb item with its corresponding properties, such as label, link, and any additional attributes required for display or navigation.
	    *	Property type: {label: string, value: string}[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Controls whether the Breadcrumb navigation component is disabled. When enabled, the Breadcrumb provides users with a navigational trail;
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
	    /** Defines the template used to render each breadcrumb item. This property accepts either the ID of an '' element (as a string) or a reference to an actual 'HTMLTemplateElement'. When specified, the template determines the structure and content of each breadcrumb item. If set to 'null', the default rendering is used and no custom template is applied.
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
	    /** Sets or retrieves the value of the unlockKey property, a unique key required to unlock and access the product's features. Use this property to specify the unlock key when enabling product access, or to obtain the current unlock key associated with the product.
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
	    /** Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to select and display the appropriate translation strings based on the specified language.
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
	    /** Defines or retrieves an object containing all user-facing text strings within the widget that can be localized. This object allows customization of the widget’s displayed text in different languages and works in conjunction with the locale property to support internationalization and localization. Use this property to provide translations for messages, labels, and other interface text in the widget.
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
	    /** Specifies the minimum width (in pixels) at which the Breadcrumb component transitions from its normal display to a minimized mode. If this value is set to null, the Breadcrumb will always remain in its normal mode and will not automatically minimize, regardless of the container's width.
	    *	Property type: number
	    */
	    get minimizeWidth() {
	        return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	    }
	    set minimizeWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minimizeWidth = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus or being selected using keyboard navigation (such as with the Tab key). As a result, users will not be able to focus on this element using standard keyboard interactions.
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
	        return ["addNewItem", "allowDrag", "allowDrop", "animation", "closeButtons", "dataSource", "disabled", "itemTemplate", "unlockKey", "locale", "messages", "minimizeWidth", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onClose", "onClosing", "onDragEnd", "onDragging", "onAddNewItem", "onCreate", "onReady"];
	    }
	    /** Adds a new item to the collection. The item is appended to the end of the array or list, increasing the total number of items by one. If additional properties (such as item details or metadata) are required, ensure they are included in the request.
	    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
	    */
	    addItem(itemDetails) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addItem(itemDetails);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addItem(itemDetails);
	            });
	        }
	    }
	    /** Restores the Breadcrumb component from its minimized or collapsed state to its full, expanded view, making all breadcrumb navigation links visible to the user.
	    */
	    maximize() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.maximize();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.maximize();
	            });
	        }
	    }
	    /** Collapses the breadcrumb navigation into a minimal or condensed state, reducing its visual footprint on the page while still maintaining navigational functionality. This is typically used to save space or enhance the user interface on smaller screens.
	    */
	    minimize() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.minimize();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.minimize();
	            });
	        }
	    }
	    /** Removes a specified item from the collection. If the item exists, it will be deleted; otherwise, no action is taken.
	    * @param {HTMLElement} item. The item to remove.
	    */
	    removeItem(item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeItem(item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeItem(item);
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
	        return (React.createElement("smart-breadcrumb", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Breadcrumb = Breadcrumb;
	exports.default = Breadcrumb;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
