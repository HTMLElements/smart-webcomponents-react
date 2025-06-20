
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
    /** Determines whether the tab item is disabled.
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
    /** Determines the label of the tab item.
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
    /** Determines whether the tab item is selected.
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
    /** Determines the ribbon group of the tab item
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
    /** Determines the label of the ribbon group.
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
    /** Determines the icon of the ribbon group.
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
    /** Determines the class of the ribbon group.
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
    /** Determines the ribbon items of the ribbon group.
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
    /** Determines the direction of the ribbon group.
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
    /** Determines the settings of the dialog launcher of the ribbon group.
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
    /** Determines the size, below which the ribbon group will be wrapped.
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
    /** Determines whether the ribbon item is disabled.
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
    /** Determines the label of the ribbon item.
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
    /** Determines the type of the ribbon item.
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
    /** Determines the template of the ribbon item. Accepts HTMLTemplateElement, an id of an HTMLTemplateElement or a Function.
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
    /** Determines the size of the ribbon item.
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
    /** Determines the allowed sizes of the ribbon item.
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
    /** Determines the icon of the ribbon item.
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
    /** Determines the settings of the ribbon item. The settings will be applied as properties if the ribbon item is set to a Smart Element.
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
    /** Determines the class of the ribbon item.
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
    /** Sets a click event handler for the ribbon item.
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
    /** Sets a change event handler for the ribbon item.
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
    /** Determines the tooltip of the ribbon item.
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
    /** Determines whether the ribbon is collapsible.
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
    /** Determines the tab items of the ribbon.
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
    /** Sets or gets the value indicating whether the element is disabled.
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
    /** Determines the file menu options of the ribbon.
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
    /** Sets or gets the unlockKey which unlocks the product.
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
    /** Determines the locale of the ribbon.
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
    /** Determines the messages of the ribbon
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
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
    /** Determines the selected tab.
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
    /** Adds a new ribbon tab to the ribbon. The tab can be added as an object, HTMLElement or id to an HTMLElement.
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
    /** Adds a new group to a ribbon tab. The group can be added as an object, HTMLElement or id to an HTMLElement.
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
    /** Adds a new ribbon item to a ribbon group. The item can be added as an object, HTMLElement or id to an HTMLElement.
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
    /** Collapses the ribbon.
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
    /** Expands the ribbon.
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
    /** Removes a ribbon tab from the ribbon.
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
    /** Removes a ribbon group from a ribbon tab.
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
    /** Removes a ribbon item from a ribbon group.
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
    /** Selects a ribbon tab.
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
