
"use client";

import '../source/modules/smart.splitter'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.splitter');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart$2;
if (typeof window !== "undefined") {
    Smart$2 = window.Smart;
}
/**
 Splitter Item is a Panel in a Splitter component.
*/
class SplitterItem extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'SplitterItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually dimmed or grayed out.
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
    /** Indicates whether the item is currently collapsed ('true') or expanded ('false'). This property controls the visibility of the item's content in collapsible interfaces or components.
    *	Property type: boolean
    */
    get collapsed() {
        return this.nativeElement ? this.nativeElement.collapsed : undefined;
    }
    set collapsed(value) {
        if (this.nativeElement) {
            this.nativeElement.collapsed = value;
        }
    }
    /** Specifies whether the item is collapsible. If set to true, the item can be expanded or collapsed by the user. If set to false, the item remains permanently expanded and cannot be collapsed.
    *	Property type: boolean
    */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        if (this.nativeElement) {
            this.nativeElement.collapsible = value;
        }
    }
    /** Specifies the elements or components that are displayed within each section (item) of the splitter layout. This property defines what content will appear in each resizable panel managed by the splitter.
    *	Property type: boolean
    */
    get locked() {
        return this.nativeElement ? this.nativeElement.locked : undefined;
    }
    set locked(value) {
        if (this.nativeElement) {
            this.nativeElement.locked = value;
        }
    }
    /** Specifies whether the item can be resized by the user. If set to true, resizing is enabled; if set to false, the item's size remains fixed.
    *	Property type: string
    */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        if (this.nativeElement) {
            this.nativeElement.max = value;
        }
    }
    /** Specifies the maximum allowable size for the item. Values exceeding this limit will not be accepted or processed.
    *	Property type: string
    */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        if (this.nativeElement) {
            this.nativeElement.min = value;
        }
    }
    /** Specifies the minimum allowed size (in the relevant unit) for the item, preventing it from shrinking below this value during layout or resizing.
    *	Property type: string
    */
    get size() {
        return this.nativeElement ? this.nativeElement.size : undefined;
    }
    set size(value) {
        if (this.nativeElement) {
            this.nativeElement.size = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["disabled", "collapsed", "collapsible", "content", "locked", "max", "min", "size"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
    }
    /** Collapses the item, hiding its content or child elements from view. This action reduces the item's visible footprint, typically as part of an expandable/collapsible user interface component such as an accordion or dropdown.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }
    /** Expands the item to display its hidden content or details when it is currently in a collapsed (hidden) state.
    */
    expand() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }
    /** Prevents the item from being resized, ensuring its dimensions remain fixed and cannot be altered by the user or through code.
    */
    lock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }
    /** Unlocks access to an item that was previously restricted or unavailable, allowing full interaction or use of its features.
    */
    unlock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
        return (React.createElement("smart-splitter-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$1;
if (typeof window !== "undefined") {
    Smart$1 = window.Smart;
}
/**
 SplitterBar splits two Split panels in a Splitter.
*/
class SplitterBar extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'SplitterBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    // Gets the properties of the React component.
    get properties() {
        return [];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
    }
    /** Conceals the splitter bar element from view, preventing users from seeing or interacting with it within the user interface.
    */
    hide() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide();
            });
        }
    }
    /** Reveals a previously hidden splitter bar, allowing users to resize or adjust the layout between adjacent panels or sections within the user interface.
    */
    show() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show();
            });
        }
    }
    /** Prevents the splitter bar from being moved or adjusted by the user, ensuring it remains fixed in its current position.
    */
    lock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }
    /** Enables user interaction with the splitter bar, allowing users to drag and resize adjacent panels or sections within the interface.
    */
    unlock() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
            Smart$1.Render();
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
        return (React.createElement("smart-splitter-bar", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
class Splitter extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Splitter' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled, resulting in static display without transition effects. Assigning any other valid value enables the corresponding animation mode.
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
    /** Specifies how items are positioned and resized within the Splitter component.Possible values:      end &ndash; All items are resized to fit exactly within the available space of the Splitter. When a new item is inserted, the required space is taken from the adjacent (neighboring) item, adjusting their sizes so that the total size remains constant and nothing overflows.        proportional &ndash; All items expand or contract proportionally to occupy the full size of the Splitter. When a new item is added, the space it needs is proportionally deducted from the existing items, maintaining their relative sizes within the total available space.        overflow &ndash; Items are not resized to fit the Splitter. Instead, each item retains its natural size, even if the total size exceeds the Splitter’s dimensions. In this case, a scrollbar will appear, allowing users to scroll and view all the content that overflows beyond the visible area.
    *	Property type: SplitterAutoFitMode | string
    */
    get autoFitMode() {
        return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
    }
    set autoFitMode(value) {
        if (this.nativeElement) {
            this.nativeElement.autoFitMode = value;
        }
    }
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its inactive state.
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
    /** Configures or retrieves the data source for the splitter component. When setting, it specifies the structure and content (such as panels or sections) that will be managed and displayed within the splitter. When getting, it returns the current data source used by the splitter.
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
    /** A getter method that retrieves and returns an array containing all the current Splitter items. This allows you to access the complete list of items managed by the Splitter component.
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
    /** When enabled, this setting ensures that all items within the element maintain their original aspect ratios relative to each other whenever the element is resized. This behavior is preserved regardless of whether the size properties of the items are defined in pixels, percentages, or other units. In other words, resizing the overall element will proportionally scale all its child items, keeping their relative dimensions consistent.
    *	Property type: boolean
    */
    get keepProportionsOnResize() {
        return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
    }
    set keepProportionsOnResize(value) {
        if (this.nativeElement) {
            this.nativeElement.keepProportionsOnResize = value;
        }
    }
    /** Sets or retrieves the unlockKey value used to authorize and enable access to the product's features. When setting, this key unlocks the product for use. When getting, it returns the currently assigned unlockKey.
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
    /** Specifies the language to be used for displaying messages. This property can be set to change the current language or retrieved to identify the active language. It works in conjunction with the messages property, which contains localized message strings for each supported language. Adjusting this property enables seamless switching between different language options in the application’s user interface.
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
    /** Callback function associated with the localization module, typically used to handle language changes, translate content, or process localization-related events within the application.
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
    /** Defines an object that maps password strength states to their corresponding string values. Each key in the object represents a specific password strength level (such as "weak," "medium," or "strong"), and its value provides the associated descriptive label or message to display to users. This allows for customizable text based on the current password strength state.
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
    /** Sets or retrieves the orientation of the splitter, determining whether it is displayed vertically (dividing the area into left and right sections) or horizontally (dividing the area into top and bottom sections).
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
    /** When the element has the 'readonly' attribute, users can view its value but cannot modify, edit, or otherwise change its contents. However, the element may still be focused and its content can be selected and copied by the user. No direct interaction—such as typing, pasting, or deleting—is allowed.
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
    /** 'Specifies how the splitter handles resizing when a user drags the splitter bar. The available modes are:'- 'None:' Resizing is disabled; splitter bars cannot be moved.- 'Adjacent (default):' Only the two panels immediately adjacent to the splitter bar are resized when the bar is dragged. Other panels remain unchanged.- 'End:' Dragging the splitter bar affects only the first panel (located at the left or top, depending on splitter orientation) and the last panel. All intermediate panels between these two remain unaffected.- 'Proportional:' All panels located in the direction the splitter bar is dragged (for example, all panels to the right if dragging right, or below if dragging down) are resized proportionally. The new sizes are calculated based on the current size ratios of these panels, ensuring they maintain their proportional widths or heights relative to each other after resizing.'Use this property to control which panels are resized and how space is distributed when users interact with the splitter.'
    *	Property type: SplitterResizeMode | string
    */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeMode = value;
        }
    }
    /** Specifies the increment or decrement value by which the element's size changes during a resize operation. This value controls how much the element grows or shrinks with each resizing step, allowing for precise adjustments.
    *	Property type: number
    */
    get resizeStep() {
        return this.nativeElement ? this.nativeElement.resizeStep : undefined;
    }
    set resizeStep(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeStep = value;
        }
    }
    /** Gets or sets a value that specifies whether the element's alignment should accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content and layout will adjust to support RTL text direction, ensuring proper display for locales that use right-to-left scripts.
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
    /** When this feature is enabled, the resizing operation updates the layout in real-time as the user drags the splitter, providing immediate visual feedback. By default, live resizing is disabled; instead, a highlighted guide bar appears during the drag operation, showing where the splitter will be positioned once the user releases the mouse button. The actual layout is only updated after the drag is complete.
    *	Property type: boolean
    */
    get liveResize() {
        return this.nativeElement ? this.nativeElement.liveResize : undefined;
    }
    set liveResize(value) {
        if (this.nativeElement) {
            this.nativeElement.liveResize = value;
        }
    }
    /** Specifies the theme for the element. The theme determines the overall appearance, including colors, fonts, and styling, to ensure a consistent and visually appealing look.
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
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via keyboard or mouse interactions.
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
        return ["animation", "autoFitMode", "disabled", "dataSource", "items", "keepProportionsOnResize", "unlockKey", "locale", "localizeFormatFunction", "messages", "orientation", "readonly", "resizeMode", "resizeStep", "rightToLeft", "liveResize", "theme", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCollapse", "onExpand", "onResizeStart", "onResizeEnd", "onCreate", "onReady"];
    }
    /** Appends a new node to the end of the current list or container, adding it as the last child element. This operation updates the data structure to include the newly added node as the final element in the sequence.
    * @param {Node} node. The node to append
    */
    appendChild(node) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.appendChild(node);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.appendChild(node);
            });
        }
    }
    /** Collapses the specified splitter panel, minimizing its size and hiding its content within the container or layout.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    collapse(item, far) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(item, far);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(item, far);
            });
        }
    }
    /** Attempts to expand the splitter item, provided sufficient space is available. The expansion is only performed if there is enough remaining space in the container to accommodate the item's increased size.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    expand(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(item);
            });
        }
    }
    /** Conceals the splitter bar element from view, preventing users from interacting with or resizing the associated panels.
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    hideBar(splitterBar) {
        const result = this.nativeElement.hideBar(splitterBar);
        return result;
    }
    /** Inserts a new Splitter component into the specified position within the layout, allowing the user to divide and resize adjacent sections of the interface.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
    */
    insert(index, details) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }
    /** Inserts the specified "smart-splitter-item" node into the DOM immediately before the reference "smart-splitter-item" node, ensuring that the new element appears directly before the reference node within the splitter container. This operation preserves the order of splitter items and updates their layout accordingly.
    * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode, referenceNode) {
        const result = this.nativeElement.insertBefore(newNode, referenceNode);
        return result;
    }
    /** Prevents a splitter item from being resized by the user, ensuring that its current size remains fixed and unchangeable during layout adjustments.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockItem(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockItem(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockItem(index);
            });
        }
    }
    /** Prevents the splitter bar from being moved by disabling user drag interactions, effectively locking its position and ensuring that adjacent panes cannot be resized.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockBar(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockBar(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockBar(index);
            });
        }
    }
    /** Removes a Splitter item from the layout, detaching it from its parent container and updating the interface accordingly. This action permanently deletes the specified Splitter component and any associated layout adjustments.
    * @param {number} index. An item to be removed.
    */
    removeAt(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }
    /** Clears all items currently contained within the Splitter component, effectively resetting it to an empty state. This operation removes every panel, section, or child element inside the Splitter, leaving no content displayed.
    */
    removeAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }
    /** Removes a child node of type "smart-splitter-item" from its parent element in the DOM, effectively deleting the specified splitter pane and updating the layout accordingly.
    * @param {Node} node. The "jqx-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node) {
        const result = this.nativeElement.removeChild(node);
        return result;
    }
    /** Reloads and updates the Splitter component, re-rendering its layout and recalculating its size and position to reflect any recent changes to its content, configuration, or container.
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
    /** Reveals a previously hidden splitter bar, allowing users to resize adjacent panes or sections within the interface.
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    showBar(splitterBar) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showBar(splitterBar);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showBar(splitterBar);
            });
        }
    }
    /** Enables access to a splitter item that was previously locked, allowing users to interact with or modify the item as intended. This action removes any restrictions, making the splitter fully functional within the application.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    unlockItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockItem(item);
            });
        }
    }
    /** Enables user interaction with a previously disabled or locked splitter bar, allowing users to adjust the size of adjacent panes or panels by dragging the splitter.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    unlockBar(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockBar(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockBar(item);
            });
        }
    }
    /** Updates the configuration of a specific Splitter item within a Splitter component, allowing changes to its properties such as size, orientation, minimum and maximum limits, or other customizable options. This enables dynamic adjustment of the Splitter item's behavior and appearance within the parent Splitter layout.
    * @param {any} item. The index of a JQX.SplitterItem or it's instance.
    * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
    */
    update(item, settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(item, settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(item, settings);
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
        return (React.createElement("smart-splitter", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Smart, Splitter, SplitterBar, SplitterItem, Splitter as default };
