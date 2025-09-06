
"use client";

import '../source/modules/smart.menu'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.menu');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart$2;
if (typeof window !== "undefined") {
    Smart$2 = window.Smart;
}
/**
 Defines a menu item.
*/
class MenuItem extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'MenuItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /**
    *	Property type: boolean
    */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        if (this.nativeElement) {
            this.nativeElement.checked = value;
        }
    }
    /** Controls whether the element is enabled or disabled. When set to true, the element is interactive and can receive user input; when set to false, the element is disabled, preventing user interaction and applying a disabled appearance as appropriate.
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
    /**
    *	Property type: any
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
    *	Property type: number
    */
    get level() {
        return this.nativeElement ? this.nativeElement.level : undefined;
    }
    set level(value) {
        if (this.nativeElement) {
            this.nativeElement.level = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get separator() {
        return this.nativeElement ? this.nativeElement.separator : undefined;
    }
    set separator(value) {
        if (this.nativeElement) {
            this.nativeElement.separator = value;
        }
    }
    /**
    *	Property type: string
    */
    get shortcut() {
        return this.nativeElement ? this.nativeElement.shortcut : undefined;
    }
    set shortcut(value) {
        if (this.nativeElement) {
            this.nativeElement.shortcut = value;
        }
    }
    /**
    *	Property type: any
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
        return ["checked", "disabled", "label", "level", "separator", "shortcut", "value"];
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
        return (React.createElement("smart-menu-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart$1;
if (typeof window !== "undefined") {
    Smart$1 = window.Smart;
}
/**
 Defines a group of menu items.
*/
class MenuItemsGroup extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'MenuItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /**
    *	Property type: boolean
    */
    get checkable() {
        return this.nativeElement ? this.nativeElement.checkable : undefined;
    }
    set checkable(value) {
        if (this.nativeElement) {
            this.nativeElement.checkable = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get checked() {
        return this.nativeElement ? this.nativeElement.checked : undefined;
    }
    set checked(value) {
        if (this.nativeElement) {
            this.nativeElement.checked = value;
        }
    }
    /**
    *	Property type: MenuCheckMode | string
    */
    get checkMode() {
        return this.nativeElement ? this.nativeElement.checkMode : undefined;
    }
    set checkMode(value) {
        if (this.nativeElement) {
            this.nativeElement.checkMode = value;
        }
    }
    /** Specifies whether the element is enabled or disabled. When set to true, the element is disabled and cannot be interacted with by the user; when set to false, the element remains enabled and fully interactive.
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
    /**
    *	Property type: number
    */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownHeight = value;
        }
    }
    /**
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
    /**
    *	Property type: any
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
    *	Property type: number
    */
    get level() {
        return this.nativeElement ? this.nativeElement.level : undefined;
    }
    set level(value) {
        if (this.nativeElement) {
            this.nativeElement.level = value;
        }
    }
    /**
    *	Property type: boolean
    */
    get separator() {
        return this.nativeElement ? this.nativeElement.separator : undefined;
    }
    set separator(value) {
        if (this.nativeElement) {
            this.nativeElement.separator = value;
        }
    }
    /**
    *	Property type: any
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
        return ["checkable", "checked", "checkMode", "disabled", "dropDownHeight", "expanded", "label", "level", "separator", "value"];
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
        return (React.createElement("smart-menu-items-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
class Menu extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Menu' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and the element remains static. Otherwise, animations will be enabled according to the specified mode.
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
    /** Specifies the delay, in milliseconds, before the Menu dropdown is closed after the mouse cursor leaves the Menu area. This setting is only effective when the selectionMode property is set to 'mouseenter'. Adjusting this value can help prevent the dropdown from closing too quickly when the mouse briefly leaves the Menu.
    *	Property type: number
    */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCloseDelay = value;
        }
    }
    /** If set to true, the element will automatically receive focus when the user's mouse pointer enters (hovers over) it, triggering a mouseenter event. This allows keyboard interactions or focus styles to activate without requiring a manual click or tab action from the user.
    *	Property type: boolean
    */
    get autoFocusOnMouseenter() {
        return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
    }
    set autoFocusOnMouseenter(value) {
        if (this.nativeElement) {
            this.nativeElement.autoFocusOnMouseenter = value;
        }
    }
    /** Enables checkboxes for top-level menu items (the direct children of the main Menu component), allowing users to select or deselect these items. To make submenu items (nested within menu groups) checkable, set the checkable property individually on the corresponding smart-menu-items-group elements. This allows for granular control over which menu levels support checkable states.
    *	Property type: boolean
    */
    get checkable() {
        return this.nativeElement ? this.nativeElement.checkable : undefined;
    }
    set checkable(value) {
        if (this.nativeElement) {
            this.nativeElement.checkable = value;
        }
    }
    /** Controls whether checkboxes and radio buttons can be shown within the Menu component. This property applies exclusively to the main Menu, not to its subitems (i.e., smart-menu-item or smart-menu-items-group). Use this property to enable or disable the display of selectable options directly in the Menu.  For further customization of individual items, refer to the checkable property.
    *	Property type: boolean
    */
    get checkboxes() {
        return this.nativeElement ? this.nativeElement.checkboxes : undefined;
    }
    set checkboxes(value) {
        if (this.nativeElement) {
            this.nativeElement.checkboxes = value;
        }
    }
    /** Sets the selection mode (check mode) for the top-level Menu items, which are the immediate children of the Menu component. The 'checkMode' property determines how these menu items can be toggled or selected:- Possible values for 'checkMode' are:    - ''checkbox'': Menu items can be checked and unchecked independently (multiple selections allowed).    - ''radioButton'': Menu items are mutually exclusive (only one can be selected at a time, like radio buttons).    - ''none'': Menu items have no checkable or selectable state.You can also assign a comma-separated list of these values (for example, ''checkbox, radioButton, none, checkbox''). If a list is provided, each value corresponds to a group of top-level menu items. These groups are separated by menu separators (special items acting as visual dividers). The first value in the list applies to the first group of menu items, the second value to the next group (after the first separator), and so on. When a separator is encountered, it signals the start of a new checkMode context, applying the next value in the list to subsequent items.Note: This 'checkMode' property only affects the top-level menu items. To control check modes for submenus or nested groups, set the 'checkMode' property individually on each smart-menu-items-group (the group component representing submenu levels).
    *	Property type: MenuCheckMode | string
    */
    get checkMode() {
        return this.nativeElement ? this.nativeElement.checkMode : undefined;
    }
    set checkMode(value) {
        if (this.nativeElement) {
            this.nativeElement.checkMode = value;
        }
    }
    /** Defines the document-level event that triggers the closure of all open menu dropdowns, or the entire menu if the mode property is set to 'dropDown'. This event ensures that any active menu or submenu is properly closed when the specified user interaction occurs (e.g., clicking outside the menu).
    *	Property type: MenuCloseAction | string
    */
    get closeAction() {
        return this.nativeElement ? this.nativeElement.closeAction : undefined;
    }
    set closeAction(value) {
        if (this.nativeElement) {
            this.nativeElement.closeAction = value;
        }
    }
    /** Specifies the data source for the Menu component. The data source should be provided as an array of objects, where each object represents a menu item with the following properties:- 'label': *(string, required)* — The text displayed for the menu item.- 'value': *(any, required)* — The unique value associated with the menu item, used for identification or selection.- 'shortcut': *(string, optional)* — A keyboard shortcut hint displayed alongside the menu item, helping users discover quick access keys.- 'items': *(array, optional)* — An array of objects representing sub-menu items, allowing for nested menus and hierarchical structures. Each sub-menu item follows the same structure as a top-level menu item.By configuring the data source in this format, you enable dynamic and flexible rendering of complex menu structures.
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
    /** Controls whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with the element.
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
    /** Specifies which field in the data source should be used as the item's label. This determines the text value displayed for each item in the UI by mapping it to the corresponding property from your data.
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
    /** Here is a revised and enhanced version of your description:Specifies a custom outer container to which all dropdown containers will be appended. By default, dropdown elements are appended inside the menu itself. You can assign this property an HTML element directly, or provide the id of an existing HTML element (as a string).When the menu is in mode 'dropDown', the dropDownAppendTo property not only determines where the dropdowns are appended, but also controls the parent container of the entire menu. Note that the open method will open the menu relative to its original position within the DOM, regardless of the value of dropDownAppendTo.Use this property to customize the DOM structure, for example, to ensure that dropdowns are rendered within a specific container for layout, styling, or layering purposes.
    *	Property type: string | HTMLElement
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** When this property is enabled, opening an element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page. This overlay prevents interaction with other page elements while the dropdown is open, helping to focus the user’s attention on the dropdown content.
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
    /** When this property is set and the Menu is in drop-down mode, the Menu's position will be anchored to the ID set by this property.
    *	Property type: string
    */
    get dropDownAnchor() {
        return this.nativeElement ? this.nativeElement.dropDownAnchor : undefined;
    }
    set dropDownAnchor(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAnchor = value;
        }
    }
    /** Specifies the direction in which the menu dropdown will appear when opened (e.g., above, below, left, or right relative to the triggering element), allowing customization of dropdown placement to enhance user interface layout and usability.
    *	Property type: MenuDropDownPosition | string
    */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPosition = value;
        }
    }
    /** A getter method that retrieves and returns an array containing all current Menu item objects, allowing access to the complete list of menu entries managed by the application.
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
    /** Specifies the field name in the data source that contains the collection of subitems associated with each item group. This property allows the component to identify and retrieve subitems for each group by referencing the appropriate data field.
    *	Property type: string
    */
    get itemsMember() {
        return this.nativeElement ? this.nativeElement.itemsMember : undefined;
    }
    set itemsMember(value) {
        if (this.nativeElement) {
            this.nativeElement.itemsMember = value;
        }
    }
    /** Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
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
    /** Specifies or retrieves the current language setting for the component. This property determines which language is used when displaying text from the messages property, allowing for dynamic localization and internationalization of the user interface. When the language is changed, the corresponding localized messages are retrieved from the messages object.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized strings are generated or displayed, such as adjusting placeholders, applying additional formatting, or handling special localization rules before the message is returned.
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
    /** Specifies or retrieves an object containing the set of strings used within the widget interface that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing developers to customize or translate UI text according to the user's language preferences.
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
    /** Loads a custom minimize icon from an HTMLTemplateElement selected by its ID. The element’s inner HTML is used as the icon’s template, allowing for flexible and reusable icon customization within the application.
    *	Property type: string
    */
    get minimizeIconTemplate() {
        return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
    }
    set minimizeIconTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.minimizeIconTemplate = value;
        }
    }
    /** Specifies the minimum width (in pixels) at which the Menu transitions from its normal (expanded) state to a minimized (collapsed) mode. When the Menu’s container width falls below this threshold, the minimized mode is automatically activated. If set to null, the Menu will remain in its normal state regardless of width and will not minimize automatically.
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
    /** Specifies how the menu is visually presented to users, such as in a horizontal, vertical, dropdown, or collapsible format. Adjusting this setting allows customization of the menu’s layout and interaction style.
    *	Property type: MenuMode | string
    */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        if (this.nativeElement) {
            this.nativeElement.mode = value;
        }
    }
    /** Toggles the menu’s visibility when it is set to 'dropDown' mode, allowing users to open or close the menu as needed.
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
    /** Defines how the menu's scroll buttons behave when navigating through its items. This property is effective only if dropDownAppendTo is set to a value other than null. If dropDownAppendTo is null, the scroll button behavior setting is ignored.
    *	Property type: Overflow | string
    */
    get overflow() {
        return this.nativeElement ? this.nativeElement.overflow : undefined;
    }
    set overflow(value) {
        if (this.nativeElement) {
            this.nativeElement.overflow = value;
        }
    }
    /** If set to true, the Menu and its dropdowns will remain open when a Menu item is checked or unchecked, rather than automatically closing upon selection. This allows users to make multiple selections without the Menu closing each time an item is toggled.
    *	Property type: boolean
    */
    get preventCloseOnCheck() {
        return this.nativeElement ? this.nativeElement.preventCloseOnCheck : undefined;
    }
    set preventCloseOnCheck(value) {
        if (this.nativeElement) {
            this.nativeElement.preventCloseOnCheck = value;
        }
    }
    /** When the element is set to "readonly," users can view its content but are unable to modify or edit the value. However, users may still interact with the element in limited ways, such as selecting and copying its content. The element remains focusable, but any attempts to change its data will be ignored.
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
    /** Specifies or retrieves whether the element’s alignment is configured to support locales that use right-to-left (RTL) text direction, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted for proper display in RTL languages.
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
    /** Specifies how users can select items within the menu, such as allowing single selection, multiple selections, or no selection.
    *	Property type: MenuSelectionMode | string
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design aspects.
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
    /** When set to true, the element is removed from the tab order and cannot be focused using keyboard navigation or script.
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
    /** Specifies which field in the data source should be used as the value for each item. This property maps a particular key or column from your data to represent the item's value in the component, enabling proper identification, selection, and data binding.
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
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "autoCloseDelay", "autoFocusOnMouseenter", "checkable", "checkboxes", "checkMode", "closeAction", "dataSource", "disabled", "displayMember", "dropDownAppendTo", "dropDownOverlay", "dropDownAnchor", "dropDownPosition", "items", "itemsMember", "unlockKey", "locale", "localizeFormatFunction", "messages", "minimizeIconTemplate", "minimizeWidth", "mode", "opened", "overflow", "preventCloseOnCheck", "readonly", "rightToLeft", "selectionMode", "theme", "unfocusable", "valueMember"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onClose", "onClosing", "onCollapse", "onCollapsing", "onExpand", "onExpanding", "onItemCheckChange", "onItemClick", "onOpen", "onOpening", "onCreate", "onReady"];
    }
    /** Adds a new item to the menu by appending the specified entry, including its label, action, and any associated properties, to the existing menu structure. This allows dynamic expansion of the menu options displayed to users.
    * @param {HTMLElement} Item. A jqx-menu-item to add to the Menu.
    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group or its id or numeric path to add the item to.
    */
    addItem(Item, Parent) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(Item, Parent);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(Item, Parent);
            });
        }
    }
    /** Marks the specified item as checked or selected, updating its status to indicate it is active, enabled, or chosen.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    */
    checkItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkItem(item);
            });
        }
    }
    /** Removes all existing items from the Menu, resulting in an empty Menu with no selectable options.
    */
    clear() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
            });
        }
    }
    /** Simulates a user click event on a specified item programmatically, triggering any associated event handlers or actions as if the item were clicked manually by the user.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    */
    clickItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clickItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clickItem(item);
            });
        }
    }
    /** Automatically closes the Menu when the mode property is set to 'dropDown', ensuring that the menu is dismissed upon selection or when clicking outside the menu area. This behavior provides a streamlined user experience consistent with standard dropdown functionality.
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
    /** Collapses a currently expanded item, hiding its content from view and displaying only the header or summary. This is typically used in expandable/collapsible components such as accordions or dropdown menus.
    * @param {HTMLElement | string} item?. jqx-menu-item/jqx-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseItem(item, animation);
            });
        }
    }
    /** Displays the detailed content or additional information of an item by expanding its view, typically used in accordions, dropdowns, or collapsible sections.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandItem(item, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandItem(item, animation);
            });
        }
    }
    /** Retrieves a specific item using either its unique identifier (ID) or a numeric path value. This allows you to access an item directly by providing its assigned ID or by specifying its position within a structured path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id) {
        const result = this.nativeElement.getItem(id);
        return result;
    }
    /** Expands the menu to display all available options, maximizing its visibility and accessibility for the user.
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
    /** Collapses the navigation menu to its minimized or compact state, reducing its visible size to save screen space while still providing access to essential menu options.
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
    /** Opens the Menu component only when the mode property is set to 'dropDown'. In this mode, the Menu will become visible in a dropdown format, allowing users to interact with its items. If mode is set to any other value, the Menu will not open.
    * @param {number} left. Horizontal position
    * @param {number} top. Vertical position
    */
    open(left, top) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open(left, top);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open(left, top);
            });
        }
    }
    /** Removes a specified item from the menu, updating the menu structure to reflect the change. This action ensures the targeted menu item is no longer displayed or accessible within the menu interface.
    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group or its id or numeric path to remove.
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
    /** Unselects or removes the checkmark from a selected item, indicating that it is no longer active, chosen, or included in the current selection.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path)
    */
    uncheckItem(item) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckItem(item);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckItem(item);
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
        return (React.createElement("smart-menu", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Menu, MenuItem, MenuItemsGroup, Smart, Menu as default };
