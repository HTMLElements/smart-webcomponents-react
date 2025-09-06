
require('../source/modules/smart.timeline');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.timeline = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Displays a timeline with events.
	*/
	class Timeline extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Timeline' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves whether the Timeline component automatically adjusts its width to fit its content when displayed in horizontal mode. When enabled, the Timeline will expand or contract its width based on its items, rather than using a fixed or predefined width.
	    *	Property type: boolean
	    */
	    get autoWidth() {
	        return this.nativeElement ? this.nativeElement.autoWidth : undefined;
	    }
	    set autoWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoWidth = value;
	        }
	    }
	    /** Specifies whether the items are collapsible. When set to true, users can expand or collapse the items to show or hide their contents. When set to false, all items remain expanded and cannot be collapsed. This property can be used to retrieve the current state or to enable or disable the collapse functionality.
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
	    /** Determines whether the Timeline component is enabled or disabled. When set to true, the Timeline is disabled and user interaction is prevented. When set to false, the Timeline is enabled and fully interactive. This property can be used to programmatically check the current state or update the disabled state of the Timeline.
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
	    /** Controls or retrieves the orientation of the Timeline, determining whether it is displayed horizontally. When set to true, the Timeline is laid out horizontally; when false, it is displayed vertically.
	    *	Property type: boolean
	    */
	    get horizontal() {
	        return this.nativeElement ? this.nativeElement.horizontal : undefined;
	    }
	    set horizontal(value) {
	        if (this.nativeElement) {
	            this.nativeElement.horizontal = value;
	        }
	    }
	    /** Specifies or retrieves the position setting. Acceptable values are:- '"near"': Aligns the element or feature near the reference point.- '"far"': Aligns the element or feature farther from the reference point.- '"both"': Applies alignment to both the near and far positions.Use this property to control the placement of the element relative to its container or another reference within the layout.
	    *	Property type: string
	    */
	    get position() {
	        return this.nativeElement ? this.nativeElement.position : undefined;
	    }
	    set position(value) {
	        if (this.nativeElement) {
	            this.nativeElement.position = value;
	        }
	    }
	    /** Manages the collection of items by setting or retrieving them. Each item must be an object containing the following properties:- 'date' ('string'): The relevant date for the item, typically in a human-readable format (e.g., ''May 15, 2024'').- 'description' ('string'): A detailed explanation or summary associated with the item.- 'subtitle' ('string'): Additional secondary text, often used to supplement the main title or date information.- 'title' ('string'): The main heading or name for the item.- 'css' ('string'): Custom CSS class or styles applied to the item for additional styling (can be an empty string if not used).- 'dotCSS' ('string'): Custom CSS class or styles specifically for the item's dot indicator, if applicable (can be an empty string if not used).- 'icon' ('string'): The icon class or identifier, such as a Material Icon class, to visually represent the item.'Example:''''json[  {    "date": "May 15, 2024",    "description": "Flight: Reserving airline tickets",    "subtitle": "May 15, 2024",    "title": "Flight Reservation",    "css": "",    "dotCSS": "",    "icon": "material-icons flight"  }]'''Use this structure to ensure consistent formatting and styling when displaying each item in your application.
	    *	Property type: any[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["autoWidth", "collapsible", "disabled", "horizontal", "position", "dataSource"];
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
	        return (React.createElement("smart-timeline", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Timeline = Timeline;
	exports.default = Timeline;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
