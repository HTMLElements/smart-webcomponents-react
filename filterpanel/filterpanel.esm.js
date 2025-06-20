
"use client";

import '../source/modules/smart.filterpanel'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.filterpanel');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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
    /** Defines which operation buttons will be shown in the filter panel
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
    /** Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
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
    /** Describes filtered data field.
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
    /** If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
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
    /** Enables or disables filter panel.
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
    /** Callback function, used for custom evaluations in filter panel.
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
    /** Defines which filter type is used.
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
    /** Format string used in filterType 'Date'.
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
    /** Sets or gets the language. Used in conjunction with the property messages.
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
    /** Defines field names of the filtered element.
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
    /** Desfines filter panel's  mode
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
    /** If the element is readonly, users cannot interact with it.
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
    /** Determines the theme. Theme defines the look of the element
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
    /** If is set to true, the element cannot be focused.
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
    /** Discards current filtering.
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
    /** Clears current filtering.
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
    /** Evaluates a filter.
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
    /** Applies current filtering.
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
    /** Gets the current filter state.
    * @returns {any}
  */
    getState() {
        const result = this.nativeElement.getState();
        return result;
    }
    /** Loads a previously saved filter state.
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
        return (React.createElement("smart-filter-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { FilterPanel, Smart, FilterPanel as default };
