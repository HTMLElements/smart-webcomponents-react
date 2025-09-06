
require('../source/modules/smart.scrollbar');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.scrollbar = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
	*/
	class ScrollBar extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ScrollBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies the current animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' disables all animations; other values will enable and determine the type of animation applied.
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
	    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element as intended. When disabled, the element becomes unresponsive to user input and typically appears visually distinct to indicate its inactive state.
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
	    /** Defines or retrieves the value of the scrollbar's large step increment. This large step value determines how much the scrollbar's position changes when the user clicks in the track area between the scrollbar's thumb (slider) and one of its arrow buttons. When the left mouse button is pressed in this area, the scrollbar advances or retreats by the specified large step amount, enabling quicker navigation through the content compared to single-step arrow button clicks.
	    *	Property type: number
	    */
	    get largeStep() {
	        return this.nativeElement ? this.nativeElement.largeStep : undefined;
	    }
	    set largeStep(value) {
	        if (this.nativeElement) {
	            this.nativeElement.largeStep = value;
	        }
	    }
	    /** Gets or sets the 'unlockKey' property, which is a unique key used to activate or unlock access to the product’s features or functionality.
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
	    /** Specifies or retrieves the current language setting. This property determines which language is used for displaying messages, working in conjunction with the messages property to select the appropriate set of localized text based on the specified language code (e.g., "en", "fr", "es").
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
	    /** Invokes a callback function associated with the localization module, typically used to handle events or actions such as language changes, text translations, or updates to localized content within the application.
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
	    /** Specifies or retrieves the maximum scrollable value of the scrollbar, determining the highest position to which the scrollbar thumb can be moved. This value defines the upper limit of the scrollable content range.
	    *	Property type: number
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Specifies or retrieves the type of mechanical action applied to the element. Mechanical action determines the exact moment when the element's value is updated—such as immediately upon interaction, after a confirmation (like releasing a button), or according to specific user actions. This property allows you to control how and when changes to the element’s value are registered and processed within the application.
	    *	Property type: DragMechanicalAction | string
	    */
	    get mechanicalAction() {
	        return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
	    }
	    set mechanicalAction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mechanicalAction = value;
	        }
	    }
	    /** Defines an object containing string values that represent the various states of password strength (e.g., weak, medium, strong). Each key in the object corresponds to a specific strength level, allowing for customized messages or labels based on the user's password strength status.
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
	    /** Defines or retrieves the lowest possible value that the scrollbar can represent, determining the starting point of the scrollbar's range.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies or retrieves the orientation of the scrollbar, determining whether it is displayed horizontally or vertically.
	    *	Property type: Orientation | string
	    */
	    get orientation() {
	        return this.nativeElement ? this.nativeElement.orientation : undefined;
	    }
	    set orientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.orientation = value;
	        }
	    }
	    /** If the element has the readonly attribute, users will be able to see its value but will not be able to modify, edit, or otherwise interact with its contents through input actions. However, the element may still be focusable and its value can be changed programmatically using scripts.
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
	    /** Sets or retrieves a value that specifies whether the element's content alignment is optimized for languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. When enabled, the element's layout, text direction, and associated styles are adjusted to properly support RTL locales.
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
	    /** Controls the visibility of scrollbar buttons. When set, this property determines whether the scrollbar's increment and decrement buttons (commonly arrow buttons at the ends of the scrollbar) are shown or hidden. It can be used to either display or hide these buttons programmatically, and can also be queried to retrieve the current visibility state.
	    *	Property type: boolean
	    */
	    get showButtons() {
	        return this.nativeElement ? this.nativeElement.showButtons : undefined;
	    }
	    set showButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showButtons = value;
	        }
	    }
	    /** Defines or retrieves the increment by which the scrollbar's value changes when a user clicks on the scrollbar's arrow (stepper) buttons. This value determines how much the scroll position increases or decreases with each button press, allowing for precise control over scrolling granularity.
	    *	Property type: number
	    */
	    get step() {
	        return this.nativeElement ? this.nativeElement.step : undefined;
	    }
	    set step(value) {
	        if (this.nativeElement) {
	            this.nativeElement.step = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance, including colors, typography, and overall styling, ensuring a consistent and cohesive look for the element within the user interface.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via tab navigation or programmatically using focus methods.
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
	    /** Sets a new value for the widget or retrieves its current value, depending on how the method is invoked. This allows you to programmatically update the widget's data or access its existing data as needed.
	    *	Property type: number
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
	        return ["animation", "disabled", "largeStep", "unlockKey", "locale", "localizeFormatFunction", "max", "mechanicalAction", "messages", "min", "orientation", "readonly", "rightToLeft", "showButtons", "step", "theme", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Re-renders the element by updating its visual presentation on the screen, ensuring that any recent changes to its properties, styles, or content are accurately reflected in the user interface.
	    */
	    refresh() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refresh();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refresh();
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
	        return (React.createElement("smart-scroll-bar", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.ScrollBar = ScrollBar;
	exports.default = ScrollBar;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
