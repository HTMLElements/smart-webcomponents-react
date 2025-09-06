
require('../source/modules/smart.filterpanel');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.filterpanel = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 The filter panel allows you to customize and display the applied filter expressions.
	*/
	class FilterPanel extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'FilterPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. If assigned any other valid value, the corresponding animation mode is applied. Use this property to control whether animations are active or turned off for the element.
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
	    /** Specifies the set of operation buttons that will be displayed in the filter panel, allowing users to perform actions such as applying, resetting, or clearing filters. Adjusting this setting controls which interactive options are available to users directly within the filter interface.
	    *	Property type: string[]
	    */
	    get buttons() {
	        return this.nativeElement ? this.nativeElement.buttons : undefined;
	    }
	    set buttons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.buttons = value;
	        }
	    }
	    /** An array in 'excel' mode that specifies the dataset used to extract unique filter values. The expected format is a JSON array of objects, where each object represents a data row with key-value pairs corresponding to column names and their respective values. For example:'''json[  { "name": "Alice", "age": 30 },  { "name": "Bob", "age": 25 }]'''Unique filter values will be derived from the property values within these objects.
	    *	Property type: number[]
	    */
	    get data() {
	        return this.nativeElement ? this.nativeElement.data : undefined;
	    }
	    set data(value) {
	        if (this.nativeElement) {
	            this.nativeElement.data = value;
	        }
	    }
	    /** Provides a detailed description of a data field that contains values resulting from the application of specific filter criteria, indicating that only data meeting those criteria are included in this field.
	    *	Property type: string
	    */
	    get dataField() {
	        return this.nativeElement ? this.nativeElement.dataField : undefined;
	    }
	    set dataField(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataField = value;
	        }
	    }
	    /** When the property is assigned an array, it specifies a custom set of filter values that will be displayed to the user, overriding the default filter list. If the property is assigned a callback function, it enables users to dynamically add their own filter values in addition to the default ones. In this latter case, you must also implement the evaluateFilterExpression function to handle evaluation of custom filters. Please note that the .dataSource property is only supported when mode is set to 'excel'.
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
	    /** Controls the visibility of the filter panel, allowing you to show or hide the panel as needed.
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
	    /** Callback function invoked during the filter panel operation, allowing developers to implement custom evaluation logic for filtering data. This function receives relevant data parameters and should return a boolean indicating whether an item meets the filter criteria.
	    *	Property type: any
	    */
	    get evaluateFilterExpression() {
	        return this.nativeElement ? this.nativeElement.evaluateFilterExpression : undefined;
	    }
	    set evaluateFilterExpression(value) {
	        if (this.nativeElement) {
	            this.nativeElement.evaluateFilterExpression = value;
	        }
	    }
	    /** Specifies the type of filter to be applied, determining how data will be sorted, displayed, or restricted based on the selected filter criteria.
	    *	Property type: FilterPanelFilterType | string
	    */
	    get filterType() {
	        return this.nativeElement ? this.nativeElement.filterType : undefined;
	    }
	    set filterType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterType = value;
	        }
	    }
	    /** Specifies the date format pattern applied when the filterType is set to 'Date'. This string determines how date values are parsed and displayed within the filter, following standard date formatting conventions (e.g., 'YYYY-MM-DD').
	    *	Property type: string
	    */
	    get formatString() {
	        return this.nativeElement ? this.nativeElement.formatString : undefined;
	    }
	    set formatString(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatString = value;
	        }
	    }
	    /** Gets or sets the unlockKey value used to activate and unlock access to the product’s features. The unlockKey is typically provided after purchase or authorization and is required to enable full product functionality.
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
	    /** Specifies or retrieves the current language setting. This property determines which language is used for displaying content and should be used together with the messages property to provide the appropriate localized messages for users.
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
	    /** Specifies the names of the fields included in the filtered element. This determines which properties or attributes of the element are returned after applying the filter criteria.
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
	    /** Defines the operational mode of the filter panel, specifying how the panel behaves or displays filters within the user interface.
	    *	Property type: FilterPanelMode | string
	    */
	    get mode() {
	        return this.nativeElement ? this.nativeElement.mode : undefined;
	    }
	    set mode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mode = value;
	        }
	    }
	    /** If the element is set to readonly, users can view its content but cannot modify, edit, or interact with the element’s value. However, the element can still receive focus and its content can be selected or copied.
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
	    /** Specifies the visual theme applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, to ensure a consistent look and feel across the interface.
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
	    /** When set to true, the element becomes unfocusable, meaning it cannot receive keyboard or mouse focus during user interaction or through JavaScript.
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
	        return ["animation", "buttons", "data", "dataField", "dataSource", "disabled", "evaluateFilterExpression", "filterType", "formatString", "unlockKey", "locale", "messages", "mode", "readonly", "theme", "unfocusable"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCancel", "onClear", "onFilter", "onCreate", "onReady"];
	    }
	    /** Removes all active filters currently applied, returning the view to its unfiltered state and displaying the complete set of data.
	    */
	    cancel() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.cancel();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.cancel();
	            });
	        }
	    }
	    /** Removes all active filters and displays the complete, unfiltered data set.
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
	    /** Assesses the given filter condition by applying it to a specified dataset or input, and determines whether the data meets the criteria defined by the filter. Returns a boolean value indicating if the filter evaluates to true or false for the provided input.
	    * @param {any} value. The evalueated element in filter panel.
	    */
	    evaluate(value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.evaluate(value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.evaluate(value);
	            });
	        }
	    }
	    /** Applies the currently selected filter criteria to update and display the relevant data set.
	    */
	    filter() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.filter();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.filter();
	            });
	        }
	    }
	    /** Retrieves the current state of all active filters, including their selected values and configuration settings. This provides an overview of how data is being filtered at the present moment.
	    * @returns {any}
	  */
	    getState() {
	        const result = this.nativeElement.getState();
	        return result;
	    }
	    /** Restores a previously saved filter configuration, applying all selected filter options and criteria to return the interface to its earlier state.
	    * @param {any} state. An object returned by the method getState.
	    */
	    loadState(state) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.loadState(state);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.loadState(state);
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
	        return (React.createElement("smart-filter-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.FilterPanel = FilterPanel;
	exports.default = FilterPanel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
