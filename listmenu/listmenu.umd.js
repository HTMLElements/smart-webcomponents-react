
require('../source/modules/smart.listmenu');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.listmenu = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
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

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
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

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 ListMenu allows you to present users a listing of options and sub options.
	*/
	class ListMenu extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ListMenu' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are completely disabled; otherwise, the selected animation mode is enabled. Use this property to control whether animations play or are suppressed within the component.
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
	    /** Controls whether the element automatically receives keyboard focus when a user hovers the mouse pointer over it. If enabled, the element will become the active focus target on hover, allowing for keyboard interactions without requiring a click. If disabled, hovering does not change the focus state.
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
	    /** Enables top-level items within the ListMenu to support checkable states, allowing users to select or deselect these menu items with a checkbox or similar indicator. This feature provides enhanced interactivity by letting users clearly mark individual ListMenu options as checked or unchecked.
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
	    /** Controls whether checkboxes and radio buttons can appear in the top-level groups of the ListMenu. This property applies exclusively to the ListMenu component itself, and does not affect subitems within smart-menu-item or smart-menu-items-group elements. For related functionality, refer to the checkable property.
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
	    /** Configures the selection behavior (check mode) for top-level ListMenu items (groups). This determines whether menu items can be selected individually, allow multiple selections, or behave like radio buttons, affecting how users interact with the menu.
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
	    /** Specifies the data source to be displayed in the ListMenu component. The data source must be an array of objects, where each object represents a menu item with the following properties:      label: string – The text displayed for the menu item.        value: any – The unique value or identifier associated with the menu item.        shortcut: string (optional) – A keyboard shortcut or hint displayed alongside the menu item.        items: array (optional) – An array of submenu item objects, each following the same structure, allowing for the creation of nested or hierarchical menus.  This structure enables the ListMenu to render both simple and multi-level menus, providing flexibility in how menu options and their shortcuts are presented to users.
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
	    /** Determines whether the element is interactive or not. When enabled, users can interact with the element. When disabled, the element becomes non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its inactive state.
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
	    /** Controls the visibility of the loading indicator. By default, the loading indicator is hidden; setting this option to true will display the indicator, while setting it to false will hide it.
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
	    /** Specifies which field in the data source should be used as the label for each item. This determines the text that will be displayed to represent the item in the user interface.
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
	    /** Specifies a custom outer container to which the minimized dropdown will be appended. By default, the dropdown is appended to the ListMenu container. You can set this property to either an HTML element or a string representing the ID of an HTML element.
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
	    /** If this property is enabled, opening the element's minimized dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page content. This overlay visually separates the dropdown from other elements on the page and can also intercept clicks to prevent interactions with content outside the dropdown until it is closed.
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
	    /** Specifies or retrieves the direction in which the ListMenu's minimized dropdown expands when opened, such as upward or downward. This property determines the alignment and positioning of the dropdown relative to the ListMenu component.
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
	    /** Controls whether users can scroll through menu items that overflow the visible area by using the mouse wheel. When enabled, using the mouse wheel will navigate vertically through menu items not currently visible within the menu’s viewport. When disabled, mouse wheel scrolling will have no effect on overflowing menu content.
	    *	Property type: boolean
	    */
	    get enableMouseWheelAction() {
	        return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	    }
	    set enableMouseWheelAction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.enableMouseWheelAction = value;
	        }
	    }
	    /** Controls the activation of menu item filtering functionality. When enabled, a filter input field appears at the top of the menu component, allowing users to search and display only the menu items that match the entered query. Note that filtering is limited to items currently rendered or visible in the menu's current view; items not present in the view will not be affected by the filter.
	    *	Property type: boolean
	    */
	    get filterable() {
	        return this.nativeElement ? this.nativeElement.filterable : undefined;
	    }
	    set filterable(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterable = value;
	        }
	    }
	    /** Specifies the placeholder text displayed inside the filter input field, guiding users on the expected input or action.
	    *	Property type: string
	    */
	    get filterInputPlaceholder() {
	        return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	    }
	    set filterInputPlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterInputPlaceholder = value;
	        }
	    }
	    /** Specifies which property of the MenuItem will be used as the filtering criterion. By default, the filtering is performed using the label property of each MenuItem. You can change this setting to use other properties instead, such as value if you want to filter based on the MenuItem's value property, or textContent if you prefer to filter using the text content within the MenuItem. Additionally, you may specify any other property name to customize the filtering behavior according to your application's requirements.
	    *	Property type: string
	    */
	    get filterMember() {
	        return this.nativeElement ? this.nativeElement.filterMember : undefined;
	    }
	    set filterMember(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterMember = value;
	        }
	    }
	    /** Specifies the method used to filter or process data, such as selecting items based on certain criteria, applying search terms, or excluding specific values. This setting controls how data is displayed or retrieved according to the selected filtering mode.
	    *	Property type: FilterMode | string
	    */
	    get filterMode() {
	        return this.nativeElement ? this.nativeElement.filterMode : undefined;
	    }
	    set filterMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterMode = value;
	        }
	    }
	    /** If enabled, the items will be organized into groups based on the first letter of each item's name. Within each group, the items will be sorted alphabetically.
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
	    /** Specifies the name of the field within the data source that contains the collection of subitems associated with each item group. This field is used to retrieve and bind the subitems for display or processing within the application.
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
	    /** Specifies the text to display alongside the loading indicator when the loader is visible and positioned at the top or bottom of the container. This text provides context or feedback to users during loading operations.
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
	    /** Specifies the exact location where the loading indicator will appear within the parent element. This controls whether the loading indicator is displayed at the top, center, bottom, or another defined position inside the element’s boundaries.
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
	    /** Defines or retrieves the unlockKey property, a unique identifier or code required to unlock and grant access to the product’s features or content.
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
	    /** Specifies or retrieves the current language code (such as "en", "fr", or "es"), which determines the set of localized messages to use from the messages property. This property ensures that the appropriate language-specific messages are displayed to users based on their language selection or system settings.
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
	    /** A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify how localized strings are generated and displayed, such as altering text templates, injecting dynamic values, or adjusting message structure before they are delivered to your application.
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
	    /** Defines or retrieves an object containing localized strings used throughout the widget’s interface. This property is intended to facilitate internationalization by allowing you to provide translations for various UI text elements. It is typically used in combination with the locale property, which determines the currently active language or regional format.
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
	    /** Enables the use of a custom minimize icon by specifying an HTMLTemplateElement. This property accepts either the ID of an HTMLTemplateElement (as a string) or a direct reference to the HTMLTemplateElement instance. The content of the provided template will be rendered in place of the default minimize icon.
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
	    /** Specifies the minimum width, in pixels, that the ListMenu must reach before automatically switching from its normal (expanded) mode to minimized mode. If this value is set to null, the ListMenu will remain in its normal mode regardless of its width and will not minimize automatically.
	    *	Property type: number | null
	    */
	    get minimizeWidth() {
	        return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	    }
	    set minimizeWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minimizeWidth = value;
	        }
	    }
	    /** Defines or retrieves the behavior of the ListMenu's scroll buttons, specifying how they appear and function when the menu content exceeds the visible area. This property controls whether scroll buttons are shown, when they become visible, and how users can interact with them to navigate through the list.
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
	    /** If the element has the "readonly" attribute, users can view its content but cannot modify or edit it. While the element remains focusable and its text can be selected or copied, any user attempts to change its value will be blocked, ensuring the data remains unchanged.
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
	    /** Specifies or retrieves a value that determines whether the element's text and layout direction are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element and its contents will display text and align elements according to RTL conventions.
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
	    /** Specifies whether to display a traditional scrollbar or custom scroll buttons when the content exceeds the boundaries of an element’s container. This setting controls the method users can use to navigate overflow content within the element.
	    *	Property type: ListMenuScrollMode | string
	    */
	    get scrollMode() {
	        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	    }
	    set scrollMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollMode = value;
	        }
	    }
	    /** Specifies the visual theme to apply to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel throughout the user interface.
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
	    /** When set to true, the element becomes unfocusable, meaning it cannot receive input focus via keyboard navigation (such as the Tab key), mouse clicks, or scripting methods.
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
	    /** Specifies the name of the field in the data source whose value will be assigned as the item's value property. This field is used to uniquely identify each item within the data collection.
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
	        return ["animation", "autoFocusOnMouseenter", "checkable", "checkboxes", "checkMode", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dropDownAppendTo", "dropDownOverlay", "dropDownPosition", "enableMouseWheelAction", "filterable", "filterInputPlaceholder", "filterMember", "filterMode", "grouped", "itemsMember", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "minimizeIconTemplate", "minimizeWidth", "overflow", "readonly", "rightToLeft", "scrollMode", "theme", "unfocusable", "valueMember"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onExpand", "onItemCheckChange", "onItemClick", "onScrollBottomReached", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
	    }
	    /** Appends a new item to the end of the existing list, expanding the list by one element.
	    * @param {HTMLElement} Item. A jqx-menu-item to add to the List Menu.
	    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group (or its id or numeric path) to add the item to.
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
	    /** Navigates to the previous page within the group of menu items (`smart-menu-items-group`). This function moves the user’s focus or view to the preceding set of menu options, enabling seamless backward navigation in multi-page or scrollable menu interfaces.
	    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
	    */
	    back(animation) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.back(animation);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.back(animation);
	            });
	        }
	    }
	    /** Navigates the user to a specific page or section within the application identified as "smart-menu-items-group." This action typically triggers a transition or redirect, bringing the "smart-menu-items-group" content into view for the user. Suitable for menu navigation or directing users to targeted groups within a menu structure.
	    * @param {string} id. The id or numeric path of a page (jqx-menu-items-group).
	    */
	    changePage(id) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.changePage(id);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.changePage(id);
	            });
	        }
	    }
	    /** Marks an item as checked, indicating that it has been selected or completed. This action typically updates the item's status property (e.g., `checked: true`) within the JSON data.
	    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
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
	    /** Retrieves a specific item using either its unique identifier (ID) or a numeric path that locates the item within a hierarchical structure.
	    * @param {string} id. The id or numeric path of an item
	    * @returns {HTMLElement}
	  */
	    getItem(id) {
	        const result = this.nativeElement.getItem(id);
	        return result;
	    }
	    /** Expands the List Menu to its maximum available size, displaying all menu items for full visibility and easier selection.
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
	    /** Collapses the List Menu to save screen space. When minimized, the full menu is hidden and replaced with a single icon, allowing users to expand the menu again if needed. This improves the user interface by providing a cleaner, less cluttered appearance while maintaining quick access to menu options.
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
	    /** Removes a specified item from the collection or list. If the item exists, it is deleted; otherwise, no changes are made. This operation typically identifies the item by its unique key, index, or value.
	    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group (or its id or numeric path) to remove.
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
	    /** Removes the checkmark from a selected item, resetting its state to unchecked or unselected. This action is typically used to indicate that the item is not active, chosen, or included in a selection.
	    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
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
	        return (React.createElement("smart-list-menu", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.ListMenu = ListMenu;
	exports.MenuItem = MenuItem;
	exports.MenuItemsGroup = MenuItemsGroup;
	exports.default = ListMenu;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
