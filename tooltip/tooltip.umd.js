
require('../source/modules/smart.tooltip');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tooltip = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Tooltip is an alternate for the html title. It displays a popup with details on hover.
	*/
	class Tooltip extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Tooltip' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Allows you to specify or retrieve the current animation mode. Set this property to 'none' to disable all animations. When assigned other valid values, it enables the corresponding animation effects for the element or component.
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
	    /** Specifies the alignment of the tooltip relative to its target element, such as positioning it above, below, to the left, or to the right of the target. This setting controls where the tooltip appears in relation to the element it is associated with.
	    *	Property type: string
	    */
	    get align() {
	        return this.nativeElement ? this.nativeElement.align : undefined;
	    }
	    set align(value) {
	        if (this.nativeElement) {
	            this.nativeElement.align = value;
	        }
	    }
	    /** Determines whether the tooltip's arrow is displayed. Setting this property to true will show the arrow pointing to the anchor element, while setting it to false will hide the arrow. This enhances tooltip visibility and contextual association with the target element.
	    *	Property type: boolean
	    */
	    get arrow() {
	        return this.nativeElement ? this.nativeElement.arrow : undefined;
	    }
	    set arrow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.arrow = value;
	        }
	    }
	    /** Specifies the location or alignment of the arrow relative to its parent element, determining where the arrow will appear (such as top, bottom, left, right, or center) within the component or tooltip.
	    *	Property type: TooltipArrowDirection | string
	    */
	    get arrowDirection() {
	        return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
	    }
	    set arrowDirection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.arrowDirection = value;
	        }
	    }
	    /** Determines whether the tooltip's arrow is displayed. When set to true, an arrow will appear pointing from the tooltip to its target element; when set to false, the tooltip will be shown without an arrow. This property can be used to customize the visual connection between the tooltip and its anchor element.
	    *	Property type: number
	    */
	    get delay() {
	        return this.nativeElement ? this.nativeElement.delay : undefined;
	    }
	    set delay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.delay = value;
	        }
	    }
	    /** Controls whether the tooltip is displayed. When enabled, the tooltip appears when users hover over or interact with the associated element. When disabled, the tooltip is hidden and does not appear under any circumstances.
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
	    /** Specifies the horizontal (X) and vertical (Y) offset values, allowing you to adjust the position of an element relative to its original location. The X value shifts the element left or right, while the Y value moves it up or down.
	    *	Property type: number[]
	    */
	    get offset() {
	        return this.nativeElement ? this.nativeElement.offset : undefined;
	    }
	    set offset(value) {
	        if (this.nativeElement) {
	            this.nativeElement.offset = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey used to grant access to the product. The unlockKey acts as an authorization token or code required to unlock and enable the product’s features.
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
	    /** Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property will be used. Changing this value updates the displayed content to match the selected language.
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
	    /** Callback function associated with the localization module, typically invoked to handle language changes, region-specific formatting, or to update interface text based on the selected locale.
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
	    /** Defines or retrieves an object containing the localized text strings used within the widget interface. This property allows you to customize the displayed text for different languages or regions, and works together with the language property to support localization and internationalization of the widget's UI elements.
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
	    /** Specifies or retrieves the method by which the tooltip is activated, such as on hover, focus, or click events.
	    *	Property type: TooltipOpenMode | string
	    */
	    get openMode() {
	        return this.nativeElement ? this.nativeElement.openMode : undefined;
	    }
	    set openMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.openMode = value;
	        }
	    }
	    /** Specifies or retrieves the placement of the tooltip relative to its associated element. This determines where the tooltip appears, such as above, below, to the left, or to the right of the target element.
	    *	Property type: TooltipPosition | string
	    */
	    get position() {
	        return this.nativeElement ? this.nativeElement.position : undefined;
	    }
	    set position(value) {
	        if (this.nativeElement) {
	            this.nativeElement.position = value;
	        }
	    }
	    /** Specifies the HTML element that will act as the trigger for displaying the tooltip. When the user interacts with this element (such as by hovering, focusing, or clicking—depending on configuration), the tooltip will appear.
	    *	Property type: string | HTMLElement
	    */
	    get selector() {
	        return this.nativeElement ? this.nativeElement.selector : undefined;
	    }
	    set selector(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selector = value;
	        }
	    }
	    /** Specifies the theme applied to the element. The theme controls the element’s overall appearance, including colors, fonts, and stylistic details, ensuring a consistent visual presentation throughout the interface.
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
	    /** Specifies a custom template for rendering the tooltip content, allowing you to define the layout, styling, and dynamic data displayed within the tooltip.
	    *	Property type: any
	    */
	    get tooltipTemplate() {
	        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	    }
	    set tooltipTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipTemplate = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
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
	    /** Gets the current value of the widget or sets a new value for the widget. This property allows you to retrieve the widget's existing value or update it programmatically.
	    *	Property type: string
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    /** Controls whether the tooltip is visible or hidden. When set, this property determines if the tooltip is displayed to the user; when accessed, it returns the current visibility status of the tooltip.
	    *	Property type: boolean
	    */
	    get visible() {
	        return this.nativeElement ? this.nativeElement.visible : undefined;
	    }
	    set visible(value) {
	        if (this.nativeElement) {
	            this.nativeElement.visible = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "align", "arrow", "arrowDirection", "delay", "disabled", "offset", "unlockKey", "locale", "localizeFormatFunction", "messages", "openMode", "position", "selector", "theme", "tooltipTemplate", "unfocusable", "value", "visible"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onOpen", "onOpening", "onClose", "onClosing", "onCreate", "onReady"];
	    }
	    /** Closes the smart-tooltip component, removing the tooltip from view and disabling any tooltip functionality associated with the target element.
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
	    /** Displays the smart-tooltip component, providing contextual information or guidance to the user when triggered.
	    */
	    open() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.open();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.open();
	            });
	        }
	    }
	    /** Enables or disables the smart-tooltip component, controlling whether tooltips are displayed or hidden for the specified elements. This toggle function allows developers to dynamically show or hide helpful tooltip information in the user interface based on user interaction or application state.
	    */
	    toggle() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.toggle();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.toggle();
	            });
	        }
	    }
	    /** Removes all content currently displayed within the Tooltip, restoring it to an empty state and ensuring no text, HTML, or interactive elements remain visible.
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
	        return (React.createElement("smart-tooltip", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Tooltip = Tooltip;
	exports.default = Tooltip;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
