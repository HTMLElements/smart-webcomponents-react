
require('../source/modules/smart.filterbuilder');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.filterbuilder = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 FilterBuilder allows you to dynamically build filters.
	*/
	class FilterBuilder extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'FilterBuilder' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animation effects are disabled. Setting it to other supported values enables the corresponding animation behavior.
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
	    /** Enhances the set of available operations that can be used within the filter builder's condition structure, allowing for more flexible and complex filtering criteria.
	    *	Property type: {name: string, caption: string, icon: string}[]
	    */
	    get customOperations() {
	        return this.nativeElement ? this.nativeElement.customOperations : undefined;
	    }
	    set customOperations(value) {
	        if (this.nativeElement) {
	            this.nativeElement.customOperations = value;
	        }
	    }
	    /** Determines whether the context menu (typically accessed via right-click) is available to users. Setting this option to true allows users to open the context menu, while setting it to false disables the menu and prevents it from appearing.
	    *	Property type: boolean
	    */
	    get disableContextMenu() {
	        return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	    }
	    set disableContextMenu(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableContextMenu = value;
	        }
	    }
	    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When enabled, users can interact with the element; when disabled, the element appears visually inactive and cannot be interacted with.
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
	    /** An array containing filtered field objects, where each object defines a specific field and its associated configuration settings. This includes details such as the field name, data type, validation rules, display properties, and any additional options relevant to how the field should be handled or presented.
	    *	Property type: any
	    */
	    get fields() {
	        return this.nativeElement ? this.nativeElement.fields : undefined;
	    }
	    set fields(value) {
	        if (this.nativeElement) {
	            this.nativeElement.fields = value;
	        }
	    }
	    /** Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor, such as the order of day, month, and year.
	    *	Property type: string
	    */
	    get formatStringDate() {
	        return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	    }
	    set formatStringDate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatStringDate = value;
	        }
	    }
	    /** Sets or retrieves the format string used by the editor for fields of type 'datetime', specifying how date and time values are displayed and edited within the field. This determines the input and display format (e.g., 'YYYY-MM-DD HH:mm:ss') for users interacting with 'datetime' fields.
	    *	Property type: string
	    */
	    get formatStringDateTime() {
	        return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
	    }
	    set formatStringDateTime(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatStringDateTime = value;
	        }
	    }
	    /** Displays a helpful popup message as a tooltip or hint to guide the user when interacting with the form element.
	    *	Property type: string
	    */
	    get hint() {
	        return this.nativeElement ? this.nativeElement.hint : undefined;
	    }
	    set hint(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hint = value;
	        }
	    }
	    /** Specifies the icon's visual representation using character symbols (such as Unicode or font glyphs), allowing the icon to be displayed as a character within text elements.
	    *	Property type: FilterBuilderIcons
	    */
	    get icons() {
	        return this.nativeElement ? this.nativeElement.icons : undefined;
	    }
	    set icons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.icons = value;
	        }
	    }
	    /** Handles the retrieval or assignment of the unlockKey property, which serves as the authorization token required to activate and access the product’s full features. Setting this property provides the necessary key to unlock the product, while getting it returns the current unlock key value in use.
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
	    /** Specifies or retrieves the current language code (e.g., 'en', 'es', 'fr') for the component. This property works together with the messages property to determine which set of localized messages to display, enabling multilingual support. When setting the language, the corresponding messages are loaded automatically based on the selected language code.
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
	    /** Callback function associated with the localization module, typically used to handle events or responses related to language translation, locale changes, or loading localized resources within the application.
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
	    /** Specifies the maximum number of conditions that can be applied to this element. If the number of conditions exceeds this limit, additional conditions will not be accepted or processed.
	    *	Property type: number | null
	    */
	    get maxConditions() {
	        return this.nativeElement ? this.nativeElement.maxConditions : undefined;
	    }
	    set maxConditions(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxConditions = value;
	        }
	    }
	    /** Specifies the maximum number of conditions that can be included within a single group. This sets an upper limit to how many conditions are allowed in each group, ensuring that no group exceeds the defined threshold.
	    *	Property type: number | null
	    */
	    get maxConditionsPerGroup() {
	        return this.nativeElement ? this.nativeElement.maxConditionsPerGroup : undefined;
	    }
	    set maxConditionsPerGroup(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxConditionsPerGroup = value;
	        }
	    }
	    /** Specifies the highest number of nested grouping levels allowed within the FilterBuilder, setting a limit on how deeply filters can be grouped and combined.
	    *	Property type: number | null
	    */
	    get maxLevel() {
	        return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	    }
	    set maxLevel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxLevel = value;
	        }
	    }
	    /** Specifies the names of the fields within the element that has been filtered, allowing you to identify which attributes are included as part of the filtered results.
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
	    /** When an element has the "readonly" attribute, its value cannot be modified by the user; however, the element can still receive focus and its content can be selected or copied. Interactivity such as editing or input is disabled, but users may still interact with the element in non-editing ways.
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
	    /** When 'restrictedMode' is set to 'true', users are prevented from adding new groups or editing existing groups through the user interface. This means all group management actions must be performed programmatically or by users with elevated permissions; standard user interactions for creating or modifying groups are disabled.
	    *	Property type: boolean
	    */
	    get restrictedMode() {
	        return this.nativeElement ? this.nativeElement.restrictedMode : undefined;
	    }
	    set restrictedMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.restrictedMode = value;
	        }
	    }
	    /** Controls whether the icons are visible or hidden in the user interface. When enabled, icons are displayed; when disabled, icons are not shown.
	    *	Property type: boolean
	    */
	    get showIcons() {
	        return this.nativeElement ? this.nativeElement.showIcons : undefined;
	    }
	    set showIcons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showIcons = value;
	        }
	    }
	    /** Specifies the theme to be applied, which controls the overall appearance and style of the element, including colors, fonts, and other visual properties.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users cannot navigate to or interact with the element using the Tab key or other focus-related methods.
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
	    /** The value is structured as a multidimensional array designed to represent complex logical conditions. Each element of the array is either a group operator (such as AND, OR, NOT) or a condition. Groups can themselves contain arrays of conditions and/or further groups, allowing for multiple levels of nesting. This hierarchical structure enables the representation of intricate, compound logic expressions through nested combinations of operators and conditions.
	    *	Property type: string[]
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    /** A callback function that is invoked to customize the formatting of value field contents before they are displayed. This allows you to control how data is presented within the value fields by modifying the output as needed.
	    *	Property type: any
	    */
	    get valueFormatFunction() {
	        return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
	    }
	    set valueFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.valueFormatFunction = value;
	        }
	    }
	    /** Specifies the placeholder text that appears in the condition’s value input field when no value has been entered. This text provides guidance or an example to users about the expected input.
	    *	Property type: string
	    */
	    get valuePlaceholder() {
	        return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
	    }
	    set valuePlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.valuePlaceholder = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "customOperations", "disableContextMenu", "disabled", "fields", "formatStringDate", "formatStringDateTime", "hint", "icons", "unlockKey", "locale", "localizeFormatFunction", "maxConditions", "maxConditionsPerGroup", "maxLevel", "messages", "readonly", "restrictedMode", "showIcons", "theme", "unfocusable", "value", "valueFormatFunction", "valuePlaceholder"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onEditorClose", "onEditorClosing", "onEditorOpen", "onEditorOpening", "onItemClick", "onOpen", "onOpening", "onClose", "onClosing", "onCreate", "onReady"];
	    }
	    /** Adds a new condition to a specified group, enabling further customization or logic within that group's configuration.
	    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
	    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	    */
	    addCondition(parentGroup, data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addCondition(parentGroup, data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addCondition(parentGroup, data);
	            });
	        }
	    }
	    /** Creates a new group within a specified parent group, establishing a hierarchical relationship between the new group and its designated parent.
	    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
	    * @param {string} data. A string, representing the group operator.
	    */
	    addGroup(parentGroup, data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addGroup(parentGroup, data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addGroup(parentGroup, data);
	            });
	        }
	    }
	    /** Removes the specified condition from the configuration or dataset, ensuring that any rules, filters, or logic associated with this condition are no longer applied. This operation helps update or simplify the criteria used within the system.
	    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
	    */
	    removeCondition(item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeCondition(item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeCondition(item);
	            });
	        }
	    }
	    /** Deletes the specified group along with all of its child elements recursively. This action is irreversible and will remove the group and all nested items associated with it from the system.
	    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	    */
	    removeGroup(item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeGroup(item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeGroup(item);
	            });
	        }
	    }
	    /** Returns a string that represents the current configuration or criteria defined in the filter builder. This output can be used for display, debugging, or serialization purposes, providing a readable summary of the filter builder’s selected fields, conditions, and values.
	    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
	    * @returns {string}
	  */
	    toString(useLabels) {
	        const result = this.nativeElement.toString(useLabels);
	        return result;
	    }
	    /** Updates the existing condition by modifying its properties based on the provided input. This typically involves validating the input data, locating the target condition, applying any changes, and saving the updated condition. Returns the modified condition upon successful completion.
	    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
	    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	    */
	    updateCondition(item, data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateCondition(item, data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateCondition(item, data);
	            });
	        }
	    }
	    /** Updates the details of an existing group, such as its name, description, or membership settings. Use this endpoint to modify group information.
	    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	    * @param {string} data. A string, representing the group operator.
	    */
	    updateGroup(item, data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateGroup(item, data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateGroup(item, data);
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
	        return (React.createElement("smart-filter-builder", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.FilterBuilder = FilterBuilder;
	exports.default = FilterBuilder;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
