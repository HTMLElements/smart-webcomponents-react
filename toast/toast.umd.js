
require('../source/modules/smart.toast');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.toast = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
	*/
	class Toast extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Toast' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled. Otherwise, specifying a valid animation mode enables corresponding transition effects.
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
	    /** Defines the container element in which new toast notifications will appear. The value can be either an HTMLElement directly, or a string representing the id of a DOM element. This property determines where toast items are rendered in the DOM.Note: When used together with the modal and position properties, container takes precedence over position but has lower priority than modal. This means that if modal is enabled, it overrides container; if not, the specified container is used instead of the position property.
	    *	Property type: string
	    */
	    get appendTo() {
	        return this.nativeElement ? this.nativeElement.appendTo : undefined;
	    }
	    set appendTo(value) {
	        if (this.nativeElement) {
	            this.nativeElement.appendTo = value;
	        }
	    }
	    /** Determines whether the toast notification will automatically close after the duration specified by the autoCloseDelay property. If enabled, the toast will dismiss itself once the set time has elapsed; otherwise, it will remain visible until manually closed by the user.
	    *	Property type: boolean
	    */
	    get autoClose() {
	        return this.nativeElement ? this.nativeElement.autoClose : undefined;
	    }
	    set autoClose(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoClose = value;
	        }
	    }
	    /** Specifies or retrieves the time interval (in milliseconds) after which the toast notification will automatically dismiss itself. This property is effective only when the autoClose property is set to true; otherwise, the toast will remain visible until manually closed.
	    *	Property type: number
	    */
	    get autoCloseDelay() {
	        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	    }
	    set autoCloseDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoCloseDelay = value;
	        }
	    }
	    /** Determines whether the toast notification should automatically appear as soon as the widget is initialized, without requiring any user interaction or additional trigger.
	    *	Property type: boolean
	    */
	    get autoOpen() {
	        return this.nativeElement ? this.nativeElement.autoOpen : undefined;
	    }
	    set autoOpen(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoOpen = value;
	        }
	    }
	    /** When the disabled property is set to true, all user interactions with toast items—such as clicking, hovering, or dismissing—will be prevented. The toast items will appear inactive and will not respond to any user actions until disabled is set to false.
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
	    /** Specifies a custom CSS class name or multiple class names to override the default icon styling. To apply multiple classes, separate each class name with a space (e.g., "fa fa-user"). This property is particularly useful when integrating icons from third-party icon libraries like Bootstrap Icons, Font Awesome, or Material Icons, allowing you to fully control the icon's appearance by leveraging external style definitions.
	    *	Property type: string
	    */
	    get iconClass() {
	        return this.nativeElement ? this.nativeElement.iconClass : undefined;
	    }
	    set iconClass(value) {
	        if (this.nativeElement) {
	            this.nativeElement.iconClass = value;
	        }
	    }
	    /** Allows you to add one or more custom CSS classes to Toast items by specifying class names separated with spaces. This enables you to style individual Toasts using predefined classes from third-party CSS frameworks (such as Bootstrap), or your own custom styles, for greater flexibility and consistency in appearance.
	    *	Property type: string
	    */
	    get itemClass() {
	        return this.nativeElement ? this.nativeElement.itemClass : undefined;
	    }
	    set itemClass(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemClass = value;
	        }
	    }
	    /** Defines a custom template for rendering each item, allowing you to control the appearance and structure of items displayed in the list or component. This enables the use of personalized HTML, styling, and dynamic content for each item, rather than relying on the default rendering format.
	    *	Property type: string
	    */
	    get itemTemplate() {
	        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	    }
	    set itemTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemTemplate = value;
	        }
	    }
	    /** Defines or retrieves the unlockKey, a unique value required to activate or gain access to the product’s features or content.
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
	    /** Specifies or retrieves the current language setting for localization purposes. This property determines which set of translations from the messages object is used, ensuring that the appropriate language-specific content is displayed or accessed.
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
	    /** Callback function used by the localization module to handle language-specific operations, such as loading translation files, switching languages, or updating localized content dynamically within the application.
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
	    /** Defines or retrieves an object containing customizable text strings used throughout the widget’s user interface, enabling localization and internationalization of displayed messages, labels, and prompts. Typically used alongside the locale property to support multiple languages and regional formats. This property allows developers to override default strings with translations or custom wording suitable for different locales.
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
	    /** When modal mode is enabled, the toast notification is displayed at the center of the screen, overlaying all other page content. The modal property takes precedence over both the position and appendTo properties. If modal is set to true, any values specified for position and appendTo will be ignored, and the toast will always appear centered in a modal overlay.
	    *	Property type: boolean
	    */
	    get modal() {
	        return this.nativeElement ? this.nativeElement.modal : undefined;
	    }
	    set modal(value) {
	        if (this.nativeElement) {
	            this.nativeElement.modal = value;
	        }
	    }
	    /** Specifies the area of the browser window where the toast notification will be displayed (for example, "top-right" or "bottom-center"). Note: This position setting is ignored if the appendTo property is defined or if modal mode is enabled, as these options control the toast’s placement instead.
	    *	Property type: ToastPosition | string
	    */
	    get position() {
	        return this.nativeElement ? this.nativeElement.position : undefined;
	    }
	    set position(value) {
	        if (this.nativeElement) {
	            this.nativeElement.position = value;
	        }
	    }
	    /** If the element has the "readonly" attribute, users cannot modify its value; the content is visible but cannot be changed or edited through user input. However, users may still be able to interact with the element in limited ways, such as copying its text, but any form of altering the value is disabled.
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
	    /** Defines or retrieves a value that specifies whether the element's alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's layout and text direction are modified to accommodate locales that use RTL scripts.
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
	    /** Determines whether the close button is displayed on the toast notification. When set to true, the close button appears, allowing users to manually dismiss the toast. When set to false, the close button is hidden, and the toast can only be dismissed programmatically or by other means. This property can be used to retrieve the current visibility state or update it as needed.
	    *	Property type: boolean
	    */
	    get showCloseButton() {
	        return this.nativeElement ? this.nativeElement.showCloseButton : undefined;
	    }
	    set showCloseButton(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showCloseButton = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance of the element, including colors, fonts, and overall styling, ensuring a consistent look and feel throughout the user interface.
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
	    /** Applies custom CSS styles and assigns a designated icon to each toast notification item for improved appearance and user experience.
	    *	Property type: ToastType | null | string
	    */
	    get type() {
	        return this.nativeElement ? this.nativeElement.type : undefined;
	    }
	    set type(value) {
	        if (this.nativeElement) {
	            this.nativeElement.type = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation or programmatic focus methods (such as calling element.focus()).
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
	    /** Assigns a specific text value to the toast notification, determining the message displayed to users within the toast item.
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "appendTo", "autoClose", "autoCloseDelay", "autoOpen", "disabled", "iconClass", "itemClass", "itemTemplate", "unlockKey", "locale", "localizeFormatFunction", "messages", "modal", "position", "readonly", "rightToLeft", "showCloseButton", "theme", "type", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onItemClick", "onClose", "onOpen", "onSwipebottom", "onSwipeleft", "onSwiperight", "onSwipetop", "onCreate", "onReady"];
	    }
	    /** Closes all currently displayed toast notifications, ensuring that any active toast messages are dismissed from the user interface.
	    */
	    closeAll() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closeAll();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closeAll();
	            });
	        }
	    }
	    /** Closes a specific toast notification. This action targets and dismisses the designated toast message from the user interface, ensuring that only the selected toast item is removed without affecting others.
	    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
	    */
	    closeItem(item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closeItem(item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closeItem(item);
	            });
	        }
	    }
	    /** Closes the most recently displayed toast notification, removing it from the user's view.
	    */
	    closeLast() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closeLast();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closeLast();
	            });
	        }
	    }
	    /** Displays a new toast notification and returns the corresponding smart-toast-item instance representing the newly created toast. This allows further manipulation or customization of the toast after it appears.
	    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
	    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
	    * @returns {HTMLElement}
	  */
	    open(value, iconType) {
	        const result = this.nativeElement.open(value, iconType);
	        return result;
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
	        return (React.createElement("smart-toast", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Toast = Toast;
	exports.default = Toast;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
