
require('../source/modules/smart.querybuilder');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.querybuilder = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 QueryBuilder allows you to build dynamically queries for filtering.
	*/
	class QueryBuilder extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'QueryBuilder' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Allows users to drag and reorder conditions within a single group or move conditions between different groups, facilitating flexible arrangement and organization of conditions through a user-friendly drag-and-drop interface.
	    *	Property type: boolean
	    */
	    get allowDrag() {
	        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	    }
	    set allowDrag(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowDrag = value;
	        }
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the selected mode determines how animations are displayed within the component.
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
	    /** Controls the timing of when the element’s value is updated in response to changes, such as user input or interactions. This setting specifies whether the value updates immediately as the user types, when the input loses focus, or upon a specific event.
	    *	Property type: QueryBuilderApplyMode | string
	    */
	    get applyMode() {
	        return this.nativeElement ? this.nativeElement.applyMode : undefined;
	    }
	    set applyMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.applyMode = value;
	        }
	    }
	    /** When 'applyMode' is set to 'immediately', the default value is instantly assigned to the editor's value, and the QueryBuilder's value is updated in real-time without requiring any additional user action. This ensures that changes are automatically reflected as soon as the default value is set.
	    *	Property type: boolean
	    */
	    get autoApplyValue() {
	        return this.nativeElement ? this.nativeElement.autoApplyValue : undefined;
	    }
	    set autoApplyValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoApplyValue = value;
	        }
	    }
	    /** Controls whether the QueryBuilder component will automatically display a prompt asking the user to enter a value when a new condition is added. If 'applyMode' is set to 'immediately', and the operation field of a newly created condition is empty, QueryBuilder will automatically populate the operation field when the user selects or changes the condition operator. Additionally, whenever the operation or operator of an existing condition is changed, the input field will prompt the user to enter a new value relevant to the updated condition. This ensures that condition values are collected promptly and accurately as users modify or add filtering criteria.
	    *	Property type: boolean
	    */
	    get autoPrompt() {
	        return this.nativeElement ? this.nativeElement.autoPrompt : undefined;
	    }
	    set autoPrompt(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoPrompt = value;
	        }
	    }
	    /** Enhances the query builder’s condition structure by allowing additional custom operations. Each custom operation can be defined with the following fields:
	    *	Property type: QueryBuilderCustomOperation[]
	    */
	    get customOperations() {
	        return this.nativeElement ? this.nativeElement.customOperations : undefined;
	    }
	    set customOperations(value) {
	        if (this.nativeElement) {
	            this.nativeElement.customOperations = value;
	        }
	    }
	    /** Specifies whether the element is interactive and can receive user input. When enabled, the element functions normally. When disabled, the element becomes non-interactive and typically appears visually distinct (e.g., grayed out), preventing user actions such as clicks or text entry.
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
	    /** Configures or retrieves the width (in pixels) of the dropdown menus used in both the property and operator editors, allowing for precise control over their display size in the user interface.
	    *	Property type: string
	    */
	    get dropDownWidth() {
	        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	    }
	    set dropDownWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownWidth = value;
	        }
	    }
	    /** ''An array defining the filterable fields and their corresponding configuration options to control their behavior and appearance. Each field in the array is represented as an object and can be customized using the following properties:- 'label':    The human-readable name for the field. This label will be displayed in the filter field selection dropdown.- 'dataField':    The key or property name in your data source that corresponds to this field.- 'dataType':    Specifies the type of data contained in the field, such as ''string'', ''number'', ''date'', etc. This setting can affect which filter operations are available.- 'filterOperations':    An array specifying which filter operations (such as ''contains'', ''equals'', ''greaterThan'', etc.) can be applied to this field. If this property is omitted, a default set of operations appropriate to the data type will be used.- 'lookup':    An object for configuring the value selection input when filtering this field. The 'lookup' object supports the following options:    - 'autoCompleteDelay':      The delay, in milliseconds, between when the user types in the value selection input and when the dropdown with available options appears.  - 'dataSource':      An array containing the set of predefined options that the user can choose from in the dropdown.  - 'minLength':      The minimum number of characters the user must enter in the input before the options dropdown is shown.  - 'readonly':      Set to 'true' to make the value selection input act as a standard dropdown (the user can only select from the list); set to 'false' for a combo box (the user can type custom values in addition to choosing from the list).This structure provides developers with fine-grained control over how each filter field appears and operates, including the available filter types and the way users select or enter filter values.
	    *	Property type: QueryBuilderField[]
	    */
	    get fields() {
	        return this.nativeElement ? this.nativeElement.fields : undefined;
	    }
	    set fields(value) {
	        if (this.nativeElement) {
	            this.nativeElement.fields = value;
	        }
	    }
	    /** Controls whether users are allowed to create and add new fields by typing directly into the field (property) input box, enabling dynamic extension of available fields beyond the predefined options.
	    *	Property type: QueryBuilderFieldsMode | string
	    */
	    get fieldsMode() {
	        return this.nativeElement ? this.nativeElement.fieldsMode : undefined;
	    }
	    set fieldsMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.fieldsMode = value;
	        }
	    }
	    /** Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor. Adjusting this string allows customization of the date format according to localization or application requirements.
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
	    /** Gets or sets the format string used by the editor for fields of type 'dateTime'. This format string determines how date and time values are displayed and parsed within the editor.
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
	    /** A callback function that is invoked whenever a new field is dynamically added. This function allows you to configure or modify the settings of the newly added field before it is rendered. This callback is only applicable when fieldsMode is set to 'dynamic'.
	    *	Property type: any
	    */
	    get getDynamicField() {
	        return this.nativeElement ? this.nativeElement.getDynamicField : undefined;
	    }
	    set getDynamicField(value) {
	        if (this.nativeElement) {
	            this.nativeElement.getDynamicField = value;
	        }
	    }
	    /** Specifies the CSS classes assigned to each built-in operation, which determine the corresponding icons displayed for those operations. The icon styles are defined in the smart-query-builder stylesheet. This property takes effect only when showIcons is set to true, enabling visual representation of operations with their respective icons.
	    *	Property type: any
	    */
	    get icons() {
	        return this.nativeElement ? this.nativeElement.icons : undefined;
	    }
	    set icons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.icons = value;
	        }
	    }
	    /** Provides methods to set or retrieve the 'unlockKey', a unique key required to unlock access to the product. Use this property to assign an unlock key for product activation or to obtain the currently assigned unlock key.
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
	    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es"). This property determines which set of messages from the messages object will be used for display or processing. Setting this property updates the active language, while getting it returns the currently selected language.
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
	    /** A callback function that allows you to define or modify the formatting of messages generated by the Localization Module before they are returned. Use this to customize message structure, apply additional processing, or support advanced localization needs.
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
	    /** Specifies the names of the fields to be included in the filtered element, allowing you to control which data properties are retained or displayed after filtering.
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
	    /** Specifies the placeholder text that appears within the operator selection box when no operator has been chosen for the condition. This text guides users by indicating that they need to select an operator.
	    *	Property type: string
	    */
	    get operatorPlaceholder() {
	        return this.nativeElement ? this.nativeElement.operatorPlaceholder : undefined;
	    }
	    set operatorPlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.operatorPlaceholder = value;
	        }
	    }
	    /** Specifies the placeholder text displayed within the condition's property field when no field is currently selected by the user. This text provides guidance or prompts users to select a field.
	    *	Property type: string
	    */
	    get propertyPlaceholder() {
	        return this.nativeElement ? this.nativeElement.propertyPlaceholder : undefined;
	    }
	    set propertyPlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.propertyPlaceholder = value;
	        }
	    }
	    /** Configures or retrieves the value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is typically used for languages such as Arabic or Hebrew. This property controls whether the element’s layout and text flow are adjusted to accommodate RTL locales.
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
	    /** Controls the visibility of operator icons within the operator selection dropdown menu. When enabled, icons representing each operator are displayed alongside their names in the dropdown list; when disabled, only the operator names are shown without icons.
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
	    /** Controls the visibility of the dropdown icon associated with the operator field in the conditions section. When enabled, the dropdown icon appears next to the operator field name, allowing users to select an operator from the available options. When disabled, the dropdown icon is hidden, preventing users from opening the operator selection menu.
	    *	Property type: boolean
	    */
	    get showFieldNameArrow() {
	        return this.nativeElement ? this.nativeElement.showFieldNameArrow : undefined;
	    }
	    set showFieldNameArrow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showFieldNameArrow = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, to ensure a consistent visual presentation throughout the interface.
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
	    /** If set to true, this property prevents the element from receiving keyboard or programmatic focus, making it unable to become the active element within the user interface.
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
	    /** Specifies whether the condition's value should be validated in real-time as the user types (on every key up event) or only when the input field loses focus (on blur), which is the default behavior. If enabled, value validation occurs after the user stops typing, following a delay defined by the validationTimeout property, which sets the time interval (in milliseconds) before triggering validation after typing ceases.
	    *	Property type: boolean
	    */
	    get validateOnInput() {
	        return this.nativeElement ? this.nativeElement.validateOnInput : undefined;
	    }
	    set validateOnInput(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validateOnInput = value;
	        }
	    }
	    /** Specifies the delay (in milliseconds) that begins once the user has stopped typing in the value field, after which the condition value is validated. This property works in conjunction with validationOnInput, controlling how soon validation is triggered after user input is complete.
	    *	Property type: number
	    */
	    get validationTimeout() {
	        return this.nativeElement ? this.nativeElement.validationTimeout : undefined;
	    }
	    set validationTimeout(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validationTimeout = value;
	        }
	    }
	    /** The value is structured as a multidimensional array, where each top-level element represents a group operator (such as AND or OR) that organizes multiple conditions. Within each group, an array of condition objects specifies the individual filtering criteria. This structure allows for the representation of complex, nested logical expressions by combining multiple groups and conditions.
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
	    /** A callback function that formats the display or value of the condition input fields before they are rendered or processed. Use this to customize how condition values appear to users or are handled within the application.
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
	    /** Specifies the placeholder text displayed within the condition's value input field when no value has been entered. This text provides guidance or hints to the user about the expected input.
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
	        return ["allowDrag", "animation", "applyMode", "autoApplyValue", "autoPrompt", "customOperations", "disabled", "dropDownWidth", "fields", "fieldsMode", "formatStringDate", "formatStringDateTime", "getDynamicField", "icons", "unlockKey", "locale", "localizeFormatFunction", "messages", "operatorPlaceholder", "propertyPlaceholder", "rightToLeft", "showIcons", "showFieldNameArrow", "theme", "unfocusable", "validateOnInput", "validationTimeout", "value", "valueFormatFunction", "valuePlaceholder"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onDragEnd", "onDragging", "onDragStart", "onItemClick", "onPropertySelected", "onValidationChange", "onCreate", "onReady"];
	    }
	    /** Transforms the element's current value into a valid Dynamic LINQ expression, enabling advanced querying and runtime evaluation based on the element's data.
	    * @returns {string}
	  */
	    getLinq() {
	        const result = this.nativeElement.getLinq();
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
	        return (React.createElement("smart-query-builder", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.QueryBuilder = QueryBuilder;
	exports.default = QueryBuilder;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
