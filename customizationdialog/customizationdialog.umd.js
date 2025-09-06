
require('../source/modules/smart.customizationdialog');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.customizationdialog = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Defines a dialog for customization of filtering, sorting.
	*/
	class CustomizationDialog extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'CustomizationDialog' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled. If set to other supported values, the corresponding animation effects will be enabled for transitions or interactions.
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
	    /** An array containing the filtered fields, each with its associated configuration settings. Each element in the array represents a specific field and includes detailed settings such as field type, validation rules, display options, and other relevant properties.
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
	    /** Enhances or retrieves the value of the 'displayMember' property. The 'displayMember' determines which property of each object—within the collection referenced by the 'dataSource' property—will be displayed in the UI component. Set this property to the name of the object field you want to show as the display text for each item in the collection.
	    *	Property type: string
	    */
	    get displayMember() {
	        return this.nativeElement ? this.nativeElement.displayMember : undefined;
	    }
	    set displayMember(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMember = value;
	        }
	    }
	    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled).
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
	    /** Determines whether the filtering tab is enabled or disabled, allowing you to control its availability to users. When set to true, the filtering tab will be accessible; when false, it will be hidden or inactive.
	    *	Property type: boolean
	    */
	    get filtering() {
	        return this.nativeElement ? this.nativeElement.filtering : undefined;
	    }
	    set filtering(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filtering = value;
	        }
	    }
	    /** Controls whether the tab grouping feature is enabled or disabled. When enabled, users can organize multiple tabs into groups for improved navigation and management. When disabled, tab grouping functionality will not be available.
	    *	Property type: boolean
	    */
	    get grouping() {
	        return this.nativeElement ? this.nativeElement.grouping : undefined;
	    }
	    set grouping(value) {
	        if (this.nativeElement) {
	            this.nativeElement.grouping = value;
	        }
	    }
	    /** Specifies which buttons will be displayed in the header section. Provide an array of button identifiers to control the visibility and order of header buttons.
	    *	Property type: string[]
	    */
	    get headerButtons() {
	        return this.nativeElement ? this.nativeElement.headerButtons : undefined;
	    }
	    set headerButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerButtons = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey, a unique code used to authorize and grant access to the product’s features or content.
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
	    /** Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to provide language-specific content or translations. When the language is set, the corresponding localized messages from the messages property are used throughout the application.
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
	    /** Callback function associated with the localization module, typically used to handle language changes, translations, or localization-related events within the application.
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
	    /** Defines an object containing customizable strings used in the widget's user interface that support localization. This property allows you to set or retrieve these strings to provide translations or alternative text in different languages. Typically used together with the locale property to enable multi-language support within the widget.
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
	    /** Specifies whether column reordering is enabled or retrieves the current state. When active, users can change the order of columns by dragging and dropping them.
	    *	Property type: boolean
	    */
	    get reorder() {
	        return this.nativeElement ? this.nativeElement.reorder : undefined;
	    }
	    set reorder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.reorder = value;
	        }
	    }
	    /** Sets or retrieves the tab that is selected by default when the component is first initialized. This determines which tab is active and visible to the user upon loading.
	    *	Property type: number
	    */
	    get selectedTab() {
	        return this.nativeElement ? this.nativeElement.selectedTab : undefined;
	    }
	    set selectedTab(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedTab = value;
	        }
	    }
	    /** Determines whether the sorting tab is enabled or disabled. When set to true, the sorting tab will be available for user interaction; when set to false, the sorting tab will be hidden or inactive.
	    *	Property type: boolean
	    */
	    get sorting() {
	        return this.nativeElement ? this.nativeElement.sorting : undefined;
	    }
	    set sorting(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sorting = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent visual presentation across the user interface.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via the tab key or programmatic focus methods.
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
	    /** "Sets or retrieves the value of the element. The value is represented as an object, which may contain various properties relevant to the element's data or state."
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
	    /** Specifies which property of the item object should be used as the item's value. The designated property will be accessed and stored as the value for each item in the list or collection. For example, if set to "id," the value from item.id will be used as the item's value.
	    *	Property type: string
	    */
	    get valueMember() {
	        return this.nativeElement ? this.nativeElement.valueMember : undefined;
	    }
	    set valueMember(value) {
	        if (this.nativeElement) {
	            this.nativeElement.valueMember = value;
	        }
	    }
	    /** Determines whether the columns within the element can be toggled between visible and hidden states. When set, it controls the ability to programmatically or interactively hide or show individual columns. When retrieved, it returns the current configuration indicating if column visibility can be altered.
	    *	Property type: boolean
	    */
	    get visibility() {
	        return this.nativeElement ? this.nativeElement.visibility : undefined;
	    }
	    set visibility(value) {
	        if (this.nativeElement) {
	            this.nativeElement.visibility = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "dataSource", "displayMember", "disabled", "filtering", "grouping", "headerButtons", "unlockKey", "locale", "localizeFormatFunction", "messages", "reorder", "selectedTab", "sorting", "theme", "unfocusable", "value", "valueMember", "visibility"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onOpen", "onClose", "onChange", "onApply", "onCreate", "onReady"];
	    }
	    /** Opens a modal dialog window, allowing users to interact with additional content or options without navigating away from the current page.
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
	    /** Closes the dialog window, dismissing its content and returning focus to the underlying page or application. This action may also trigger any associated cleanup or callback functions.
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
	        return (React.createElement("smart-customization-dialog", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.CustomizationDialog = CustomizationDialog;
	exports.default = CustomizationDialog;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
