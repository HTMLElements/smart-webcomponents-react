
require('../source/modules/smart.gridpanel');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.grouppanel = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Defines a group of grouped items in a panel.
	*/
	class GroupPanel extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'GroupPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls the animation mode for the element. You can use this property to retrieve the current animation mode or set a new one. When set to 'none', all animations are disabled for the element, resulting in immediate transitions without any visual effects.
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
	    /** Defines or retrieves the position of the close button displayed on items within the group panel. This property allows you to specify where the close button appears (e.g., left, right, or another designated location) for each group panel item, or to access its current position programmatically.
	    *	Property type: GroupPanelCloseButtonPosition | string
	    */
	    get closeButtonPosition() {
	        return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	    }
	    set closeButtonPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeButtonPosition = value;
	        }
	    }
	    /** Specifies the data source configuration for the group panel.  Each entry in the dataSource array is an object that defines the properties of a column available for grouping. The object includes the following fields:  dataField: The unique field name of the column that can be used for grouping.  dataType: The data type of the column, such as 'string', 'number', 'date', etc.  groupIndex: The initial position of the column in the group order. A value of -1 means the column will not be grouped by default.  label: The display name of the column shown in the column selection dropdown of the group panel.  icon: The CSS class for the icon representing this column in the selection dropdown, allowing for custom visual identification.  sortDirection: The default sort direction when the column is used for grouping. Accepted values are 'ascending' or 'descending'.Use this configuration to control which columns users can group by, their display order, labels, icons, and default sorting in your group panel interface.
	    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Controls the visibility of the group panel, allowing you to show or hide the panel where grouped items or filters are managed. Set to true to display the group panel, or false to hide it from the user interface.
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
	    /** Sets or retrieves the unlockKey, a unique code or token required to activate and access the full features of the product. This property is used to manage product unlocking and user authorization.
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
	    /** Specifies or retrieves the current language setting. This property determines which set of localized messages—defined in the messages property—will be used for displaying content. When setting this value, the corresponding language-specific messages are selected for the user interface.
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
	    /** A callback function that allows you to define or modify the format of messages returned by the Localization Module. Use this to tailor localized message strings—such as formatting variables, changing wording, or supporting custom message structures—before they are delivered to your application.
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
	    /** Specifies or retrieves the maximum number of columns that can be used for grouping results. If the value is set to null, there is no restriction on the number of columns allowed in the grouping operation.
	    *	Property type: number
	    */
	    get maxLevel() {
	        return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	    }
	    set maxLevel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxLevel = value;
	        }
	    }
	    /** Defines or retrieves an object containing localized string values used throughout the widget's user interface. By customizing this object, you can provide translations for UI text, labels, tooltips, and messages. This property works together with the locale property, allowing the widget to display content in different languages based on the specified locale setting.
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
	    /** If the element is set to readonly, users will be able to view its value but will not be able to modify, edit, or otherwise interact with its content. This means the element’s value cannot be changed through direct user input, although the content may still be selectable or copied.
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
	    /** Gets or sets a value that specifies whether the element’s layout direction is set to right-to-left (RTL), enabling proper alignment and support for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, meaning the element cannot be selected or activated using the Tab key or other focus navigation methods.
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
	        return ["animation", "closeButtonPosition", "dataSource", "disabled", "unlockKey", "locale", "localizeFormatFunction", "maxLevel", "messages", "readonly", "rightToLeft", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onApply", "onCancel", "onCollapseAll", "onExpandAll", "onCreate", "onReady"];
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
	        return (React.createElement("smart-group-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.GroupPanel = GroupPanel;
	exports.default = GroupPanel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
