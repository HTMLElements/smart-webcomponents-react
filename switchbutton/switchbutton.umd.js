
require('../source/modules/smart.button');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.switchbutton = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
	*/
	class SwitchButton extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'SwitchButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. For other valid values, the corresponding animation effects will be enabled according to the specified mode.
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
	    /** Specifies how the switch button responds to user interaction when the switchMode is set to 'click'. This property determines the exact mouse action that triggers a change in the switch’s state:  press – The switch state changes immediately when the mouse button is pressed down (mousedown event).  release – The switch state changes only when the mouse button is released (mouseup event), after a complete click.  pressAndRelease – The switch state changes on mousedown, and automatically reverts to the original state on mouseup.Note: This property is effective only when switchMode is set to 'click'.
	    *	Property type: ClickMode | string
	    */
	    get clickMode() {
	        return this.nativeElement ? this.nativeElement.clickMode : undefined;
	    }
	    set clickMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.clickMode = value;
	        }
	    }
	    /** Sets the check state to indicate whether the item is checked, unchecked, or indeterminate; or retrieves the current check state of the item.
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
	    /** Controls whether the ratio button is displayed and can be interacted with by the user. Set to true to show and enable the button, or false to hide or disable it.
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
	    /** Defines the text label or string that will be displayed when the checked property is set to false, representing the unchecked state of the component or element.
	    *	Property type: string
	    */
	    get falseContent() {
	        return this.nativeElement ? this.nativeElement.falseContent : undefined;
	    }
	    set falseContent(value) {
	        if (this.nativeElement) {
	            this.nativeElement.falseContent = value;
	        }
	    }
	    /** Defines a custom template that is displayed when the component is in the false state. This template allows you to specify the content or layout shown when the evaluated condition is false.
	    *	Property type: any
	    */
	    get falseTemplate() {
	        return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
	    }
	    set falseTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.falseTemplate = value;
	        }
	    }
	    /** Controls whether the switch is in an indeterminate state or retrieves its current indeterminate status. When set to true, the switch appears visually distinct to indicate that its state is neither clearly on nor off. This is typically used to represent a partial or mixed selection.
	    *	Property type: boolean
	    */
	    get indeterminate() {
	        return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	    }
	    set indeterminate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.indeterminate = value;
	        }
	    }
	    /** Specifies the direction in which the switch toggles between states. If set to true, the positions of the switch states are inverted, meaning the ON and OFF positions are swapped.
	    *	Property type: boolean
	    */
	    get inverted() {
	        return this.nativeElement ? this.nativeElement.inverted : undefined;
	    }
	    set inverted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inverted = value;
	        }
	    }
	    /** Retrieves or assigns the unlockKey value, which serves as a credential to enable access to the product’s locked features or functionality.
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
	    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which language is used for message localization when working with the messages property. Setting this value ensures the corresponding localized messages are displayed or accessed appropriately.
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
	    /** Callback function associated with the localization module. This callback is invoked whenever localization-related events occur, such as changes in language, region settings, or translation updates. It enables the module to respond dynamically to localization changes in the application.
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
	    /** Defines an object that maps password strength states (e.g., weak, medium, strong) to their corresponding string values or messages. This allows for customized labels or feedback to be displayed to users based on the evaluated password strength.
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
	    /** Retrieves the current name of the widget or assigns a new name to the widget. This property can be used to identify or reference the widget programmatically.
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
	    /** Specifies the layout direction of the switch component, determining whether it is displayed horizontally or vertically. Use this property to control how the switch and its label are arranged within the user interface.
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
	    /** When the custom element is set to readonly, users will not be able to modify its content or trigger any interactive behaviors such as editing, selecting, or submitting data through the element. However, the element remains visible and its value can still be programmatically accessed or updated by scripts.
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
	    /** Specifies the text label or value that will be displayed when the checked property is set to true. This text represents the state of the component when it is selected or activated.
	    *	Property type: string
	    */
	    get trueContent() {
	        return this.nativeElement ? this.nativeElement.trueContent : undefined;
	    }
	    set trueContent(value) {
	        if (this.nativeElement) {
	            this.nativeElement.trueContent = value;
	        }
	    }
	    /** Defines a custom template to display when the state is true, allowing you to specify how content should appear in this condition.
	    *	Property type: string
	    */
	    get trueTemplate() {
	        return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
	    }
	    set trueTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.trueTemplate = value;
	        }
	    }
	    /** Configures how users can interact with the switch element to change its state. The switchMode property accepts the following options:  default – The switch state can be toggled either by dragging the thumb (the movable part of the switch) or by clicking anywhere within the track (the switch’s background area).  click – The switch state changes only when a user clicks inside the track. Dragging the thumb does not affect the state.  drag – The switch state changes solely by dragging the thumb. Clicking on the track has no effect.  none – The switch cannot be toggled by any user interaction. Its state can only be changed programmatically through the API.
	    *	Property type: SwitchButtonSwitchMode | string
	    */
	    get switchMode() {
	        return this.nativeElement ? this.nativeElement.switchMode : undefined;
	    }
	    set switchMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.switchMode = value;
	        }
	    }
	    /** Specifies the theme for the element, which controls its overall visual appearance—including colors, fonts, and style. Selecting a theme customizes how the element is presented to users, ensuring consistency with the application's design.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using the Tab key or other keyboard navigation methods.
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
	    /** Sets a new value for the widget or retrieves its current value. Use this to programmatically update what the widget displays or to access the user's input.
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "clickMode", "checked", "disabled", "falseContent", "falseTemplate", "indeterminate", "inverted", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "orientation", "readonly", "trueContent", "trueTemplate", "switchMode", "theme", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCheckValue", "onUncheckValue", "onCreate", "onReady"];
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
	        return (React.createElement("smart-switch-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.SwitchButton = SwitchButton;
	exports.default = SwitchButton;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
