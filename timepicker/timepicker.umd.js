
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
	    /** Controls the animation mode for the component. When set to 'none', all animations are disabled. When set to other supported values, animations will be enabled according to the specified mode. This property can be used to either retrieve the current animation mode or update it dynamically.
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
	    /** Determines whether, after selecting the hour, the component will automatically advance to the minute selection view. When enabled, users will be guided directly to choose minutes immediately after choosing an hour, streamlining the time selection process. This option can be set or retrieved programmatically.
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
	    /** Specifies whether the element is active and can be interacted with by the user. When enabled, the element responds to user actions; when disabled, the element appears visually inactive and does not accept user input or interaction.
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
	    /** Specifies whether the footer section of the element is displayed to the user. If set to true, the footer will be visible; if false, the footer will be hidden.
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
	    /** Specifies or retrieves the footer template used by the component. This property accepts either the ID of an existing HTMLTemplateElement or a direct reference to an HTMLTemplateElement object. When assigning an ID, the component will search the DOM for a template with the corresponding ID and use it as the footer template. If a direct reference is provided, that template will be used. If the value is set to null, the component will revert to its default behavior by applying an empty template to the footer area.
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
	    /** Specifies the format used for selecting hours, such as 12-hour (AM/PM) or 24-hour (military) time.
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
	    /** Sets or retrieves the unlockKey, a unique value required to activate or grant access to the product's features. This key is used to validate and unlock product functionality.
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
	    /** Specifies or retrieves the current language setting. This property is typically used together with the messages property to determine which language version of the messages should be displayed or retrieved. When setting the language, the corresponding localized messages from the messages collection will be used.
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
	    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized text is structured, such as adding dynamic values, adjusting syntax, or applying custom formatting rules before the message is displayed to the user.
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
	    /** Defines or retrieves an object containing string resources used throughout the widget interface, which can be localized to support different languages and regions. This property works in tandem with the language property to display text in the user's preferred language, enabling comprehensive internationalization of the widget's UI elements and messages.
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
	    /** Specifies or retrieves the increment value (in minutes) used when adjusting or selecting the minute portion of a time input. This determines the intervals by which minutes can be increased or decreased, such as allowing selection at every 5 minutes (e.g., 0, 5, 10, 15, etc.) instead of every 1 minute.
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
	    /** Sets or retrieves the name attribute of the element. The name attribute identifies the element when submitting HTML forms, allowing its value to be included as a key in the form data sent to the server. This is essential for server-side processing and distinguishing between multiple form fields.
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
	    /** Prevents any user interactions with the element, such as clicking, tapping, focusing, or selecting content. While disabled, the element will not respond to mouse, keyboard, or touch events, and interactive features (like links or form inputs) will not be accessible.
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
	    /** Gets or sets a value that specifies whether the element is aligned to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element's alignment and layout are adjusted to accommodate right-to-left text direction for proper localization.
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
	    /** Specifies which view is currently displayed to the user. By default, the hours view is initially shown unless a different view is set. This property controls the visible section of the interface, such as hours, minutes, or other available views.
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
	    /** Specifies the visual theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel for the element within the user interface.
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
	    /** When set to true, this property makes the element unfocusable, preventing it from receiving keyboard or mouse focus during user interaction or via scripting.
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
	    /** Sets or retrieves the value of the element. The value can be provided as a valid Date object or as a string formatted to represent a valid time (e.g., "14:30" for 2:30 PM). When setting, ensure the input matches the expected format; when getting, the returned value will reflect the current time value of the element.
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
	    /** Determines the current orientation of the element, indicating whether its width is greater than its height (landscape mode) or its height is greater than its width (portrait mode). This property allows developers to adapt layout and styles based on how the element is displayed.
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
	    /** Specifies the hour component of the time value, typically as an integer ranging from 0 (midnight) to 23 (11 PM). This property or method updates the hours portion while leaving the minutes, seconds, and milliseconds unchanged, unless otherwise specified.
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
	    /** Specifies the value for the minutes component of a time, typically as an integer between 0 and 59. This is used to set or update the minute portion of a time-related field.
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
