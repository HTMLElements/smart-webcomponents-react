
"use client";

import '../source/modules/smart.ribbon'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.ribbon');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart$3;
if (typeof window !== "undefined") {
    Smart$3 = window.Smart;
}
/**
 Defines a ribbon tab.
*/
class RibbonTab extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'RibbonTab' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies whether the tab item is disabled and unresponsive to user interaction. When set to true, the tab cannot be selected or activated by the user.
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
    /** Specifies the text displayed as the label for the tab item, allowing users to identify and select the corresponding tab in the interface.
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
    /** Indicates whether the tab item is currently active and selected by the user. When set to true, this tab will be visually highlighted and its associated content will be displayed.
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
    /** Specifies the ribbon group to which the tab item belongs, enabling organization and grouping of related commands within the ribbon interface.
    *	Property type: any
    */
    get ribbonGroups() {
        return this.nativeElement ? this.nativeElement.ribbonGroups : undefined;
    }
    set ribbonGroups(value) {
        if (this.nativeElement) {
            this.nativeElement.ribbonGroups = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["disabled", "label", "selected", "ribbonGroups"];
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
        return (React.createElement("smart-ribbon-tab", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$2;
if (typeof window !== "undefined") {
    Smart$2 = window.Smart;
}
/**
 Defines a ribbon group.
*/
class RibbonGroup extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'RibbonGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the text or title displayed as the label for the ribbon group, helping users identify the purpose or category of the grouped controls within the ribbon interface.
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
    /** Specifies the icon displayed for the ribbon group. This property defines the visual symbol or image that represents the group within the ribbon interface, enhancing usability and quick identification for users.
    *	Property type: string
    */
    get icon() {
        return this.nativeElement ? this.nativeElement.icon : undefined;
    }
    set icon(value) {
        if (this.nativeElement) {
            this.nativeElement.icon = value;
        }
    }
    /** Specifies the CSS class applied to the ribbon group, which controls its appearance and styling. Use this property to customize the look and feel of the ribbon group by assigning one or more class names.
    *	Property type: string
    */
    get cssClass() {
        return this.nativeElement ? this.nativeElement.cssClass : undefined;
    }
    set cssClass(value) {
        if (this.nativeElement) {
            this.nativeElement.cssClass = value;
        }
    }
    /** Defines the collection of items displayed within the ribbon group, specifying the individual controls, buttons, menus, or tools that appear as part of the ribbon interface. This property allows customization of the content and arrangement of the ribbon group elements.
    *	Property type: any
    */
    get ribbonItems() {
        return this.nativeElement ? this.nativeElement.ribbonItems : undefined;
    }
    set ribbonItems(value) {
        if (this.nativeElement) {
            this.nativeElement.ribbonItems = value;
        }
    }
    /** Specifies the orientation of the ribbon group, such as horizontal or vertical, affecting how its contained items are arranged and displayed within the user interface.
    *	Property type: RibbonGroupDirection | string
    */
    get direction() {
        return this.nativeElement ? this.nativeElement.direction : undefined;
    }
    set direction(value) {
        if (this.nativeElement) {
            this.nativeElement.direction = value;
        }
    }
    /** Defines the configuration options for the dialog launcher button within the ribbon group, specifying its appearance, behavior, and associated actions when activated by the user.
    *	Property type: RibbonGroupDialogLauncher
    */
    get dialogLauncher() {
        return this.nativeElement ? this.nativeElement.dialogLauncher : undefined;
    }
    set dialogLauncher(value) {
        if (this.nativeElement) {
            this.nativeElement.dialogLauncher = value;
        }
    }
    /** Specifies the minimum width (in pixels) at which the ribbon group will be displayed on a single line. If the available space becomes smaller than this value, the ribbon group will automatically wrap to a new line to maintain a responsive layout.
    *	Property type: RibbonGroupWrapSize | string
    */
    get wrapSize() {
        return this.nativeElement ? this.nativeElement.wrapSize : undefined;
    }
    set wrapSize(value) {
        if (this.nativeElement) {
            this.nativeElement.wrapSize = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["label", "icon", "cssClass", "ribbonItems", "direction", "dialogLauncher", "wrapSize"];
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
        return (React.createElement("smart-ribbon-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$1;
if (typeof window !== "undefined") {
    Smart$1 = window.Smart;
}
/**
 Defines a ribbon item.
*/
class RibbonItem extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'RibbonItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies whether the ribbon item is disabled and unresponsive to user interactions. If set to 'true', the ribbon item will appear visually inactive and cannot be clicked or selected by the user. If 'false', the item remains enabled and fully interactive.
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
    /** Specifies the text displayed as the label on the ribbon item, providing users with a clear description or name for the ribbon element.
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
    /** Specifies the category or function of the ribbon item, such as button, dropdown, separator, or other UI element types. This property helps define how the ribbon item behaves and is displayed within the ribbon interface.
    *	Property type: RibbonItemType | string
    */
    get type() {
        return this.nativeElement ? this.nativeElement.type : undefined;
    }
    set type(value) {
        if (this.nativeElement) {
            this.nativeElement.type = value;
        }
    }
    /** Specifies the template used to render the ribbon item. This property accepts one of the following:- An HTMLTemplateElement instance.- The id (string) of an existing HTMLTemplateElement in the DOM.- A function that returns either a template string or an HTML element.This allows you to customize the appearance and content of the ribbon item by providing a static template, referencing a template by id, or generating templates dynamically through a function.
    *	Property type: string
    */
    get template() {
        return this.nativeElement ? this.nativeElement.template : undefined;
    }
    set template(value) {
        if (this.nativeElement) {
            this.nativeElement.template = value;
        }
    }
    /** Specifies the dimensions or size configuration (such as small, medium, or large) for the ribbon item, affecting its visual appearance and layout within the ribbon interface.
    *	Property type: RibbonItemSize | string
    */
    get size() {
        return this.nativeElement ? this.nativeElement.size : undefined;
    }
    set size(value) {
        if (this.nativeElement) {
            this.nativeElement.size = value;
        }
    }
    /**
    *	Property type: any
    */
    get sizeChanged() {
        return this.nativeElement ? this.nativeElement.sizeChanged : undefined;
    }
    set sizeChanged(value) {
        if (this.nativeElement) {
            this.nativeElement.sizeChanged = value;
        }
    }
    /** Specifies the permissible dimensions (such as small, medium, or large) that the ribbon item can be displayed in. This setting controls which size options are available for the ribbon item’s appearance within the user interface.
    *	Property type: any
    */
    get allowedSizes() {
        return this.nativeElement ? this.nativeElement.allowedSizes : undefined;
    }
    set allowedSizes(value) {
        if (this.nativeElement) {
            this.nativeElement.allowedSizes = value;
        }
    }
    /** Specifies the icon displayed on the ribbon item. This property sets the visual symbol or graphic that represents the ribbon item in the user interface, allowing users to quickly identify its function. The icon can typically be defined using an icon name, image URL, or SVG markup, depending on the framework or library in use.
    *	Property type: string
    */
    get icon() {
        return this.nativeElement ? this.nativeElement.icon : undefined;
    }
    set icon(value) {
        if (this.nativeElement) {
            this.nativeElement.icon = value;
        }
    }
    /** Controls the configuration options for the ribbon item. When the ribbon item is designated as a Smart Element, these settings are applied as its properties, allowing for dynamic customization of its appearance and behavior within the ribbon interface.
    *	Property type: RibbonItemSettings
    */
    get settings() {
        return this.nativeElement ? this.nativeElement.settings : undefined;
    }
    set settings(value) {
        if (this.nativeElement) {
            this.nativeElement.settings = value;
        }
    }
    /** Specifies the CSS class or classes to be applied to the ribbon item, allowing for customized styling and appearance. This property enables developers to control the visual presentation of individual ribbon items by assigning one or more class names.
    *	Property type: string
    */
    get cssClass() {
        return this.nativeElement ? this.nativeElement.cssClass : undefined;
    }
    set cssClass(value) {
        if (this.nativeElement) {
            this.nativeElement.cssClass = value;
        }
    }
    /** Assigns a custom function to be executed when the ribbon item is clicked, enabling the implementation of specific actions or behaviors in response to user interaction.
    *	Property type: any
    */
    get onItemClick() {
        return this.nativeElement ? this.nativeElement.onItemClick : undefined;
    }
    set onItemClick(value) {
        if (this.nativeElement) {
            this.nativeElement.onItemClick = value;
        }
    }
    /** Registers a handler function that will be triggered when the ribbon item's value or state changes, allowing you to respond dynamically to user interactions or programmatic updates.
    *	Property type: any
    */
    get onItemChange() {
        return this.nativeElement ? this.nativeElement.onItemChange : undefined;
    }
    set onItemChange(value) {
        if (this.nativeElement) {
            this.nativeElement.onItemChange = value;
        }
    }
    /** Specifies the text that appears as a tooltip when users hover over the ribbon item, providing additional information or guidance about its function.
    *	Property type: string
    */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltip = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["disabled", "label", "type", "template", "size", "sizeChanged", "allowedSizes", "icon", "settings", "cssClass", "onItemClick", "onItemChange", "tooltip"];
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
        return (React.createElement("smart-ribbon-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Ribbon is a navigation control that allows you to organize your application's commands in a tabbed interface.
*/
class Ribbon extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Ribbon' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies whether the ribbon interface can be collapsed or expanded by the user, allowing for a more compact or fully visible display as needed.
    *	Property type: any
    */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        if (this.nativeElement) {
            this.nativeElement.collapsible = value;
        }
    }
    /** Specifies the individual tab items to be displayed within the ribbon interface. Each tab item typically represents a distinct category or section, allowing users to easily navigate and access grouped commands or features within the ribbon.
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
    /** Specifies or retrieves whether the element is disabled, preventing user interaction and making it unresponsive to mouse and keyboard events. When set to true, the element cannot be activated or receive input focus.
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
    /** Specifies the available file menu options displayed within the ribbon interface, defining which actions (such as New, Open, Save, Print, etc.) users can access from the file menu.
    *	Property type: RibbonFileMenu
    */
    get fileMenu() {
        return this.nativeElement ? this.nativeElement.fileMenu : undefined;
    }
    set fileMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.fileMenu = value;
        }
    }
    /** Sets or retrieves the value of the unlockKey property, which is used to authenticate and authorize access to unlock the product. The unlockKey typically functions as a secure code or token required to enable full product functionality.
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
    /** Specifies the localization settings for the ribbon, determining the language and regional formatting (such as date, time, and number formats) used for displaying text and other interface elements.
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
    /** Specifies the text and content displayed in the ribbon's message area, allowing customization of informational or notification messages shown to users within the ribbon interface.
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
    /** Specifies or retrieves a value that determines whether the element’s alignment is optimized for right-to-left (RTL) languages, such as Arabic or Hebrew. This affects the element’s text direction, layout flow, and alignment to accommodate locales that use right-to-left scripts.
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
    /** Specifies which tab is currently selected and active in the tab navigation component, typically by its index or identifier. This property controls which tab's content is visible to the user.
    *	Property type: any
    */
    get selectedTab() {
        return this.nativeElement ? this.nativeElement.selectedTab : undefined;
    }
    set selectedTab(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedTab = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["collapsible", "dataSource", "disabled", "fileMenu", "unlockKey", "locale", "messages", "rightToLeft", "selectedTab"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCollapse", "onCollapsing", "onDialogLauncherClick", "onExpand", "onExpanding", "onFileButtonClick", "onFileMenuOpen", "onFileMenuClose", "onFileMenuItemClick", "onSelect", "onSelecting", "onCreate", "onReady"];
    }
    /** Adds a new tab to the application's ribbon interface. The tab can be specified in one of three ways: as a configuration object defining the tab's properties, as an existing HTMLElement to be used as the tab, or as a string representing the id of an existing HTMLElement to be added as the tab. This provides flexibility in how ribbon tabs are created and integrated.
    * @param {any} tab. The ribbon tab to be added.
    */
    addTab(tab) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTab(tab);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTab(tab);
            });
        }
    }
    /** Enhances a ribbon tab by adding a new group. The group can be specified in one of the following ways: as an object defining its properties, as a direct reference to an HTMLElement, or as a string representing the id of an existing HTMLElement. This flexibility allows you to create the group dynamically, use an already created DOM element, or reference an element by its id.
    * @param {any} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {any} group. The ribbon group to be added.
    */
    addGroup(tab, group) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(tab, group);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(tab, group);
            });
        }
    }
    /** Adds a new item to a specified ribbon group in the ribbon interface. The new item can be provided in one of the following forms: as a configuration object, as an actual HTMLElement, or by specifying the id of an existing HTMLElement. This offers flexibility in how ribbon items are defined and incorporated into the ribbon group.
    * @param {string | number | HTMLElement} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {string | HTMLElement} group. The id or HTMLElement of the parent ribbon group.
    * @param {any} item. The ribbon item to be added.
    */
    addItem(tab, group, item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(tab, group, item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(tab, group, item);
            });
        }
    }
    /** Minimizes the ribbon interface, hiding its commands and options, to provide more workspace on the screen.
    */
    collapse() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse();
            });
        }
    }
    /** Expands the ribbon interface to reveal additional tools, features, and options that are otherwise hidden from view. This action increases the available workspace by displaying the full set of ribbon commands and controls.
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
    /** Removes a specified tab from the ribbon interface, effectively hiding it and its associated commands from the user’s view. This action ensures that the tab and its contents are no longer accessible within the ribbon navigation.
    * @param {string | number} ribbonTab. The id or index of the ribbon tab to be removed.
    */
    removeTab(ribbonTab) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTab(ribbonTab);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTab(ribbonTab);
            });
        }
    }
    /** Removes a specified ribbon group from the selected ribbon tab, effectively deleting that group's controls and functionalities from the tab's interface.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the ribbon group to be removed.
    */
    removeGroup(ribbonTabIndex, ribbonGroup) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(ribbonTabIndex, ribbonGroup);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(ribbonTabIndex, ribbonGroup);
            });
        }
    }
    /** Removes a specified ribbon item from its parent ribbon group, effectively deleting the item from the group and updating the user interface accordingly. This operation ensures that the ribbon group no longer displays or interacts with the removed item.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the parent ribbon group.
    * @param {string | number} ribbonItem?. The id or index of the ribbon item to be removed.
    */
    removeItem(ribbonTabIndex, ribbonGroup, ribbonItem) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(ribbonTabIndex, ribbonGroup, ribbonItem);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(ribbonTabIndex, ribbonGroup, ribbonItem);
            });
        }
    }
    /** Activates the specified ribbon tab, bringing its contents into focus and making its associated controls and options accessible to the user.
    * @param {string | number} ribbonTabIndex. The index of the ribbon tab to be selected.
    */
    selectTab(ribbonTabIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTab(ribbonTabIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTab(ribbonTabIndex);
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
        return (React.createElement("smart-ribbon", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Ribbon, RibbonGroup, RibbonItem, RibbonTab, Smart, Ribbon as default };
