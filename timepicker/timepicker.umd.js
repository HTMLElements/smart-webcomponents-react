
require('../source/modules/smart.timepicker');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.timepicker = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Time Picker component allows the user to select time from spinners.
	*/
	class TimePicker extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TimePicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
	    /** Sets or gets whether after selecting hours, the element will automatically switch to minute selection.
	    *	Property type: boolean
	    */
	    get autoSwitchToMinutes() {
	        return this.nativeElement ? this.nativeElement.autoSwitchToMinutes : undefined;
	    }
	    set autoSwitchToMinutes(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoSwitchToMinutes = value;
	        }
	    }
	    /** Enables or disables the element.
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
	    /** Determines whether the footer section of the element is visible or not.
	    *	Property type: boolean
	    */
	    get footer() {
	        return this.nativeElement ? this.nativeElement.footer : undefined;
	    }
	    set footer(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footer = value;
	        }
	    }
	    /** Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied.
	    *	Property type: string | HTMLTemplateElement
	    */
	    get footerTemplate() {
	        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	    }
	    set footerTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footerTemplate = value;
	        }
	    }
	    /** Determines the hour selection format.
	    *	Property type: TimePickerFormat | string
	    */
	    get format() {
	        return this.nativeElement ? this.nativeElement.format : undefined;
	    }
	    set format(value) {
	        if (this.nativeElement) {
	            this.nativeElement.format = value;
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
	    /** Callback used to customize the format of the messages that are returned from the Localization Module.
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
	    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
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
	    /** Sets or gets the step when selecting minutes.
	    *	Property type: number
	    */
	    get minuteInterval() {
	        return this.nativeElement ? this.nativeElement.minuteInterval : undefined;
	    }
	    set minuteInterval(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minuteInterval = value;
	        }
	    }
	    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
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
	    /** Disables user interaction with the element.
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
	    /** Determines the view that is currently being shown. By default the hours view is visible.
	    *	Property type: TimePickerSelection | string
	    */
	    get selection() {
	        return this.nativeElement ? this.nativeElement.selection : undefined;
	    }
	    set selection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selection = value;
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
	    /** Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time.
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
	    /** Determines whether the element is in landscape or portrait mode.
	    *	Property type: ViewLayout | string
	    */
	    get view() {
	        return this.nativeElement ? this.nativeElement.view : undefined;
	    }
	    set view(value) {
	        if (this.nativeElement) {
	            this.nativeElement.view = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "autoSwitchToMinutes", "disabled", "footer", "footerTemplate", "format", "unlockKey", "locale", "localizeFormatFunction", "messages", "minuteInterval", "name", "readonly", "rightToLeft", "selection", "theme", "unfocusable", "value", "view"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Sets the hours.
	    * @param {number} hours. The hours to set.
	    */
	    setHours(hours) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setHours(hours);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setHours(hours);
	            });
	        }
	    }
	    /** Sets the minutes.
	    * @param {number} minutes. The minutes to set.
	    */
	    setMinutes(minutes) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setMinutes(minutes);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setMinutes(minutes);
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
	        return (React.createElement("smart-time-picker", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.TimePicker = TimePicker;
	exports.default = TimePicker;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
