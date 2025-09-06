
require('../source/modules/smart.tabs');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tabs = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
	}
	/**
	 Defines a tab item.
	*/
	class TabItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TabItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /**   "Represents the visual and interactive state of the close button within a tab item. This can include states such as default, hovered, focused, active (pressed), or disabled, and determines how the close button appears and responds to user actions."
	    *	Property type: boolean
	    */
	    get closeButtonHidden() {
	        return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
	    }
	    set closeButtonHidden(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeButtonHidden = value;
	        }
	    }
	    /** Prevents the Tab item from being interacted with or selected by the user. When disabled, the Tab item appears visually inactive and cannot be activated through mouse, touch, or keyboard navigation.
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
	    /**   "Indicates the numerical position of an individual tab item within a tabbed navigation component, starting from zero. Used to identify, activate, or manage specific tabs based on their sequence in the tab list."
	    *	Property type: number
	    */
	    get index() {
	        return this.nativeElement ? this.nativeElement.index : undefined;
	    }
	    set index(value) {
	        if (this.nativeElement) {
	            this.nativeElement.index = value;
	        }
	    }
	    /** Indicates the visual state and styling applied to a tab item when it is currently selected or active, signaling to users which tab is in focus and displaying its associated content.
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
	    /** Label text displayed on a navigation tab within a tabbed interface. Used to identify and differentiate each tab for the user.
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
	    /** Content displayed within a tab panel, representing the information or elements associated with a specific tab item in a tabbed interface.
	    *	Property type: number
	    */
	    get labelSize() {
	        return this.nativeElement ? this.nativeElement.labelSize : undefined;
	    }
	    set labelSize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelSize = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["closeButtonHidden", "disabled", "index", "selected", "label", "content", "labelSize"];
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
	        return (React.createElement("smart-tab-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Defines a group of tab items.
	*/
	class TabItemsGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TabItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /**
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
	    /**
	    *	Property type: number
	    */
	    get labelSize() {
	        return this.nativeElement ? this.nativeElement.labelSize : undefined;
	    }
	    set labelSize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelSize = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["label", "labelSize"];
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
	        return (React.createElement("smart-tab-items-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
	*/
	class Tabs extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Tabs' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Determines whether the "Add new tab" button (typically represented by a plus sign "+") is visible in the user interface. When set to true, the button is displayed, allowing users to add new tabs; when set to false, the button is hidden. This property can be used to both retrieve the current visibility status or control the display of the button.
	    *	Property type: boolean
	    */
	    get addNewTab() {
	        return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	    }
	    set addNewTab(value) {
	        if (this.nativeElement) {
	            this.nativeElement.addNewTab = value;
	        }
	    }
	    /** Enables toggle functionality for tab selection. When set to true, the selectedIndex property can be assigned a value of null, indicating that no tab is currently selected. This allows users to deselect any active tab, leaving the tab interface with no selected tab.
	    *	Property type: boolean
	    */
	    get allowToggle() {
	        return this.nativeElement ? this.nativeElement.allowToggle : undefined;
	    }
	    set allowToggle(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowToggle = value;
	        }
	    }
	    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in immediate transitions without animation effects. Use other valid values to enable or customize animation behavior as needed.
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
	    /** Configures or retrieves the display mode of the close button. This property determines how the close button appears or behaves within the user interface, such as being always visible, visible on hover, or hidden.
	    *	Property type: TabsCloseButtonMode | string
	    */
	    get closeButtonMode() {
	        return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
	    }
	    set closeButtonMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeButtonMode = value;
	        }
	    }
	    /** Controls whether close buttons are shown in the user interface. Setting this property to true will display close buttons; setting it to false will hide them. You can also retrieve the current state to determine if close buttons are visible.
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
	    /** Determines whether the content section of the Tabs component is expanded or collapsed. When set to 'true', the content section is hidden (collapsed); when set to 'false', the content is visible (expanded). This property can be used to programmatically control or retrieve the collapsed state of the Tabs content.
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
	    /** Controls whether the collapsible functionality is active, allowing content sections to expand or collapse when enabled. When disabled, all content sections remain fully expanded and cannot be collapsed.
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
	    /** Specifies the data source from which the content for each tab will be retrieved and displayed. This property defines what data will populate the individual tabs when the Tabs component is rendered.
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
	    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and typically appears visually muted to indicate its inactive state.
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
	    /** Allows users to scroll horizontally through tab labels in the tab strip using the mouse wheel when the tabs exceed the visible area (i.e., when the tab strip overflows). Enabling this option lets users navigate through hidden tabs by scrolling, while disabling it prevents mouse wheel scrolling in the tab strip.
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
	    /** Sets or retrieves the 'unlockKey' value, a unique key or code required to unlock and gain access to the product’s features or content.
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
	    /** Specifies or retrieves the current locale setting, which determines language and regional formatting. This property works together with the messages property to display localized content or translations based on the selected locale.
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
	    /** Callback function associated with the localization module, typically invoked during processes such as language selection, text translation, or locale updates to handle localization-specific behavior.
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
	    /** Sets or retrieves an object containing key-value pairs of strings used throughout the widget’s interface. These strings can be customized for different languages, enabling localization of the widget’s text content. This property is typically used alongside the locale property to display the widget’s labels, messages, and prompts in the selected language.
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
	    /** Gets the current name of the widget, or assigns a new name to the widget when provided a value. The name uniquely identifies the widget instance within the application.
	    *	Property type: string
	    */
	    get name() {
	        return this.nativeElement ? this.nativeElement.name : undefined;
	    }
	    set name(value) {
	        if (this.nativeElement) {
	            this.nativeElement.name = value;
	        }
	    }
	    /** Specifies or retrieves the behavior of the scroll buttons for the Tabs component. This property is relevant only when the tabLayout is set to 'scroll', allowing navigation through tab items that exceed the visible area. Use this option to control how scroll buttons appear and function when there are more tabs than can be displayed at once.
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
	    /** Prevents all user interactions with the element, making it unresponsive to mouse, keyboard, and touch events such as clicking, dragging, or typing. This means the element cannot be activated, focused, or interacted with in any way by the user.
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
	    /** Controls whether the tab reordering feature is enabled or disabled. When enabled, users can rearrange the tabs by dragging a tab and dropping it onto a new position within the tab list. This allows for dynamic reordering of tabs based on the user's preference. When disabled, tabs remain in their original order and cannot be moved by the user.
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
	    /** Determines whether users can resize tab labels by clicking and dragging them with the mouse. When enabled, this allows tab labels to be adjusted interactively by the user. When disabled, tab label sizes remain fixed and cannot be changed through mouse actions. This setting can be used to either retrieve the current resizability state or update it.
	    *	Property type: boolean
	    */
	    get resize() {
	        return this.nativeElement ? this.nativeElement.resize : undefined;
	    }
	    set resize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resize = value;
	        }
	    }
	    /** Gets or sets a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, ensuring proper display and support for languages and locales that read from right to left, such as Arabic or Hebrew.
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
	    /** Configures or retrieves the position of the scroll buttons within the component, allowing you to specify where the scroll controls appear (for example, at the start, end, or both ends of the scrollable area). This property enables precise placement of navigation controls for improved user experience.
	    *	Property type: LayoutPosition | string
	    */
	    get scrollButtonsPosition() {
	        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	    }
	    set scrollButtonsPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollButtonsPosition = value;
	        }
	    }
	    /** Specifies or retrieves how the tab strip responds when users interact with the scroll buttons. Determines the scrolling behavior—such as the distance the tab strip moves or whether scrolling is smooth or immediate—when the left or right scroll buttons are clicked.
	    *	Property type: TabsScrollMode | string
	    */
	    get scrollMode() {
	        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	    }
	    set scrollMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollMode = value;
	        }
	    }
	    /** Gets the index or identifier of the currently selected tab, or allows you to specify which tab should be selected.
	    *	Property type: number | null
	    */
	    get selectedIndex() {
	        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	    }
	    set selectedIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedIndex = value;
	        }
	    }
	    /** Specifies how users can navigate or switch between different tabs, such as by clicking, keyboard shortcuts, or swipe gestures. This setting defines the interaction method for moving from one tab to another within the tabbed interface.
	    *	Property type: TabSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** Determines how the component handles situations where the element’s width is insufficient to display all tab labels. Offers four configurable behaviors for managing tab overflow, such as scrolling, collapsing, fading, or displaying an overflow menu.
	    *	Property type: TabsTabLayout | string
	    */
	    get tabLayout() {
	        return this.nativeElement ? this.nativeElement.tabLayout : undefined;
	    }
	    set tabLayout(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabLayout = value;
	        }
	    }
	    /** Specifies or retrieves the position of the tab strip within the user interface, determining where the tab strip is displayed (e.g., top, bottom, left, or right) relative to the main content area.
	    *	Property type: TabPosition | string
	    */
	    get tabPosition() {
	        return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	    }
	    set tabPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabPosition = value;
	        }
	    }
	    /** Specifies or retrieves the direction in which the text is displayed within the tabs, such as horizontal or vertical orientation. This property allows you to control whether tab labels are arranged from left to right, top to bottom, or in another supported direction.
	    *	Property type: Orientation | string
	    */
	    get tabTextOrientation() {
	        return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	    }
	    set tabTextOrientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tabTextOrientation = value;
	        }
	    }
	    /** Specifies the theme to be applied, which controls the visual style, color scheme, and overall appearance of the element. The selected theme determines how the element is displayed to users.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to interact with it using tab navigation or other focus-related actions.
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
	        return ["addNewTab", "allowToggle", "animation", "closeButtonMode", "closeButtons", "collapsed", "collapsible", "dataSource", "disabled", "enableMouseWheelAction", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "overflow", "readonly", "reorder", "resize", "rightToLeft", "scrollButtonsPosition", "scrollMode", "selectedIndex", "selectionMode", "tabLayout", "tabPosition", "tabTextOrientation", "theme", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onAddNewTabClick", "onChange", "onClose", "onClosing", "onDragEnd", "onDragStart", "onReorder", "onCreate", "onReady"];
	    }
	    /** Expands or collapses the content section, allowing users to toggle the visibility of its contents for improved usability and a cleaner interface.
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
	    /** Retrieves the label (displayed title) of the Tab located at the specified index within the Tab collection. The index parameter is zero-based, meaning 0 refers to the first Tab.
	    * @param {number} index. The index of the tab.
	    * @returns {string}
	  */
	    getTabLabel(index) {
	        const result = this.nativeElement.getTabLabel(index);
	        return result;
	    }
	    /** Retrieves and returns the content associated with the Tab located at the specified index within the Tab component. This allows access to the data or elements currently displayed in the selected Tab.
	    * @param {number} index. The index of the tab.
	    * @returns {HTMLElement}
	  */
	    getTabContent(index) {
	        const result = this.nativeElement.getTabContent(index);
	        return result;
	    }
	    /** Ensures the specified tab is brought into view within its container by automatically scrolling the container so that the entire tab is visible to the user.
	    * @param {number} index. The index of the tab to scroll to.
	    */
	    ensureVisible(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.ensureVisible(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.ensureVisible(index);
	            });
	        }
	    }
	    /** Expands the content section to reveal additional information or elements that are initially hidden, providing users with more detailed content or options within this area.
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
	    /** Returns an array containing all TabItem objects that are child elements of the specified element. Each TabItem in the array represents a tab within the tabbed interface, allowing you to programmatically access and manipulate individual tabs.
	    * @returns {any}
	  */
	    getTabs() {
	        const result = this.nativeElement.getTabs();
	        return result;
	    }
	    /** Returns the distance, in pixels, between the edge of the tab item container (the smart-tab-item element) and the corresponding edge of the parent smart-tabs element where the tab strip is located. This offset indicates how far the tab item container is positioned from the start of the tab strip within the tabs component, allowing for precise alignment and positioning calculations.
	    * @param {number} index. The index of the tab item.
	    * @returns {number}
	  */
	    getOffsetFromEdgeOfElement(index) {
	        const result = this.nativeElement.getOffsetFromEdgeOfElement(index);
	        return result;
	    }
	    /** Adds a new tab to the tab navigation interface and creates a corresponding content section. The new tab becomes selectable, allowing users to view and interact with its associated content when it is active.
	    * @param {number} index. The index to insert a new tab at.
	    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
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
	    /** Refreshes the Tabs header section to ensure it displays correctly. This is particularly useful when the header contains elements—such as images or dynamic content—that may load after the initial rendering of the Tabs. By calling this function, you can re-render or update the header layout to accommodate any late-loaded or dynamically updated elements, ensuring alignment and visual consistency.
	    */
	    refreshTabHeader() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refreshTabHeader();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refreshTabHeader();
	            });
	        }
	    }
	    /** Removes the specified tab along with its corresponding content section from the user interface, ensuring that both the tab header and its related content are deleted and no longer accessible to the user.
	    * @param {number} index. The index of the tab to remove.
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
	    /** Programmatically activates the specified tab in a tabbed interface, making its associated content visible while hiding content from other tabs.
	    * @param {number} index. The index of the tab to select.
	    */
	    select(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select(index);
	            });
	        }
	    }
	    /** Updates a specific tab along with its corresponding content section, ensuring that both the tab interface and its related content are synchronized and reflect the latest changes.
	    * @param {number} index. The index of the tab to update.
	    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
	    * @param {string | HTMLElement} content. The new content of the tab.
	    */
	    update(index, label, content) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.update(index, label, content);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.update(index, label, content);
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
	        return (React.createElement("smart-tabs", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.TabItem = TabItem;
	exports.TabItemsGroup = TabItemsGroup;
	exports.Tabs = Tabs;
	exports.default = Tabs;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
