
"use client";

import '../source/modules/smart.sortable'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.sortable');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Sortable allows you to rearrange a group of html elements.
*/
class Sortable extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Sortable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Defines or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and elements will transition instantly without any animated effects. Use this property to enable, disable, or customize the animation behavior of components.
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
    /** Controls whether items can be sorted. When enabled, users can rearrange items by sorting them; when disabled, sorting functionality is not available.
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
    /** Determines how a sortable item can be dragged within the list. When set to 'item', users can drag the entire item itself to reorder it. When set to 'handle', a specific drag handle is displayed next to each item, and only dragging this handle will reorder the item. This property can be both retrieved (get) and modified (set) to control the user’s drag interaction method.
    *	Property type: SortableDragMode | string
    */
    get dragMode() {
        return this.nativeElement ? this.nativeElement.dragMode : undefined;
    }
    set dragMode(value) {
        if (this.nativeElement) {
            this.nativeElement.dragMode = value;
        }
    }
    /** Sets or retrieves the position of the drag handle in relation to its associated sortable item. This property is only applicable when the dragMode option is set to 'handle', meaning that the user can initiate dragging only by interacting with the specified handle within the sortable item. Use this option to define where the handle appears (e.g., 'left', 'right', 'top', or 'bottom') relative to the item, allowing for precise customization of the drag-and-drop interface.
    *	Property type: SortableHandlePosition | string
    */
    get handlePosition() {
        return this.nativeElement ? this.nativeElement.handlePosition : undefined;
    }
    set handlePosition(value) {
        if (this.nativeElement) {
            this.nativeElement.handlePosition = value;
        }
    }
    /** Determines whether the drag handle of a sortable item is always visible or only appears when the item is hovered over. This property is applicable only if dragMode is set to 'handle'. Use this setting to control the visibility of the item’s drag handle for user interaction.
    *	Property type: SortableHandleVisibility | string
    */
    get handleVisibility() {
        return this.nativeElement ? this.nativeElement.handleVisibility : undefined;
    }
    set handleVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.handleVisibility = value;
        }
    }
    /** Specifies or retrieves a CSS selector used to identify which elements within the container are sortable items. By default, all direct child elements of the 'smart-sortable' custom element are considered sortable. You can customize this selector to restrict sortable functionality to specific child elements based on their class, tag, or other attributes.
    *	Property type: string | null
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** Sets or retrieves the unlockKey, a unique value required to activate or grant access to the product's features. This property enables locking and unlocking the product based on its assigned key.
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
    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of localized messages from the messages property will be used for displaying text or content. It ensures the correct language is applied throughout the application's interface.
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
    /** Callback function associated with the localization module, typically used to handle language or region-specific content updates or responses within the application.
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
    /** Defines or retrieves an object containing the localized strings that are displayed in the widget's user interface. This property allows you to customize all text elements for different languages and regions. It should be used together with the locale property to ensure the widget presents the appropriate translations based on the selected locale.
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
    /** Sets or retrieves the orientation (horizontal or vertical) in which sortable items are arranged and can be reordered by dragging. This determines whether items are stacked in a row or a column when using the sortable functionality.
    *	Property type: Orientation | string
    */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        if (this.nativeElement) {
            this.nativeElement.mode = value;
        }
    }
    /** Gets or sets a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
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
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "disabled", "dragMode", "handlePosition", "handleVisibility", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "mode", "rightToLeft"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onDragEnd", "onCreate", "onReady"];
    }
    /** Relocates a sortable item within a list from its current index to a specified target index, updating the order of items accordingly.
    * @param {number} fromIndex?. The original index of the item.
    * @param {number} toIndex?. The index to move the item to.
    */
    move(fromIndex, toIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(fromIndex, toIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.move(fromIndex, toIndex);
            });
        }
    }
    /** Recalculates the list of sortable items within the custom element. This method should be called whenever items are dynamically added or removed to ensure that all current items are properly recognized and can be sorted as expected.
    */
    updateItems() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItems();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItems();
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
        return (React.createElement("smart-sortable", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Smart, Sortable, Sortable as default };
