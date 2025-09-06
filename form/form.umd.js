
require('../source/modules/smart.form');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.form = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
	}
	/**
	 Form Control
	*/
	class FormControl extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'FormControl' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Retrieves or assigns the action associated with the FormControl component. This property specifically applies when the 'controlType' is set to either 'button' or 'submit', determining the function or operation that will be executed when the control is activated (e.g., when the button is clicked or the form is submitted).
	    *	Property type: FormControlAction | string
	    */
	    get action() {
	        return this.nativeElement ? this.nativeElement.action : undefined;
	    }
	    set action(value) {
	        if (this.nativeElement) {
	            this.nativeElement.action = value;
	        }
	    }
	    /** Specifies or retrieves the alignment setting of the FormControl element, determining how the control is positioned within its parent container (e.g., left, right, center, or justified).
	    *	Property type: FormControlAlign | string
	    */
	    get align() {
	        return this.nativeElement ? this.nativeElement.align : undefined;
	    }
	    set align(value) {
	        if (this.nativeElement) {
	            this.nativeElement.align = value;
	        }
	    }
	    /**   "Specifies the HTML content that will appear immediately after the form control element. This allows you to display supplementary information, messages, or custom markup directly following the input field."
	    *	Property type: any
	    */
	    get appendHTML() {
	        return this.nativeElement ? this.nativeElement.appendHTML : undefined;
	    }
	    set appendHTML(value) {
	        if (this.nativeElement) {
	            this.nativeElement.appendHTML = value;
	        }
	    }
	    /** A JSON object containing configuration options for initializing the UI component. For example, providing { dataSource: ['item 1', 'item 2', 'item 3'] } assigns the specified array to the dataSource property of the Form control, defining the data items that will be displayed or used within the component. Use this object to specify properties such as data sources, default values, appearance settings, or behavior options for the UI element during its creation.
	    *	Property type: any
	    */
	    get controlOptions() {
	        return this.nativeElement ? this.nativeElement.controlOptions : undefined;
	    }
	    set controlOptions(value) {
	        if (this.nativeElement) {
	            this.nativeElement.controlOptions = value;
	        }
	    }
	    /** Specifies the type of user interface control (such as button, textbox, dropdown, etc.) represented by this component. This property determines the control's behavior and visual appearance.
	    *	Property type: FormControlControlType | string
	    */
	    get controlType() {
	        return this.nativeElement ? this.nativeElement.controlType : undefined;
	    }
	    set controlType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.controlType = value;
	        }
	    }
	    /** Specifies the number of columns used to arrange the fields within the Form Group, determining how the form elements are organized and displayed in a grid layout.
	    *	Property type: number
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Specifies the number of columns that the form control should span within a grid layout, allowing you to control the width of the form element across multiple columns.
	    *	Property type: number
	    */
	    get columnSpan() {
	        return this.nativeElement ? this.nativeElement.columnSpan : undefined;
	    }
	    set columnSpan(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnSpan = value;
	        }
	    }
	    /** Specifies the data field associated with the form control. The value of dataField is assigned as the name attribute of the control's internal input element. Additionally, within the parent FormGroup, this form control can be accessed by referencing the same dataField value. This ensures seamless integration between the form control and the FormGroup’s data model.
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
	    /** Enables or disables the form control, determining whether users can interact with it. When set to disabled, the control will be grayed out and unresponsive to user input.
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
	    /** Returns a boolean indicating whether the Form control is 'dirty'—that is, whether the user has modified the control's value from its original (initial) value. This property helps determine if the input has been changed since the form was loaded or last reset.
	    *	Property type: boolean
	    */
	    get dirty() {
	        return this.nativeElement ? this.nativeElement.dirty : undefined;
	    }
	    set dirty(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dirty = value;
	        }
	    }
	    /** Retrieves or defines the tooltip text that appears when a user hovers over the info icon associated with the Form control. This tooltip provides additional information or guidance about the form field for improved user experience.
	    *	Property type: string
	    */
	    get info() {
	        return this.nativeElement ? this.nativeElement.info : undefined;
	    }
	    set info(value) {
	        if (this.nativeElement) {
	            this.nativeElement.info = value;
	        }
	    }
	    /** Determines if the Form control currently has validation errors, indicating that its input data does not meet the specified validation rules. Returns 'true' if the control is invalid; otherwise, returns 'false'.
	    *	Property type: boolean
	    */
	    get invalid() {
	        return this.nativeElement ? this.nativeElement.invalid : undefined;
	    }
	    set invalid(value) {
	        if (this.nativeElement) {
	            this.nativeElement.invalid = value;
	        }
	    }
	    /** Retrieves or assigns the label text displayed for the Form control, allowing you to specify or update the descriptive text shown to users.
	    *	Property type: string
	    */
	    get label() {
	        return this.nativeElement ? this.nativeElement.label : undefined;
	    }
	    set label(value) {
	        if (this.nativeElement) {
	            this.nativeElement.label = value;
	        }
	    }
	    /** Retrieves or specifies the position of the label associated with the form control. This property determines where the label will be displayed relative to the form element (e.g., above, below, to the left, or to the right).
	    *	Property type: FormControlLabelPosition | string
	    */
	    get labelPosition() {
	        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	    }
	    set labelPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelPosition = value;
	        }
	    }
	    /** Gets or sets the distance (in pixels) between the label and its associated control, allowing you to adjust the spacing for layout and visual alignment purposes.
	    *	Property type: number
	    */
	    get labelOffset() {
	        return this.nativeElement ? this.nativeElement.labelOffset : undefined;
	    }
	    set labelOffset(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelOffset = value;
	        }
	    }
	    /** ''  *This property is applicable only when the controlType is set to 'group'. It determines whether the navigation buttons are shown within the FormGroup. The property takes effect only when the viewMode property is also configured. Use this setting to control the visibility of navigation controls for multi-step or grouped form layouts.*
	    *	Property type: FormControlAlign | string
	    */
	    get labelAlign() {
	        return this.nativeElement ? this.nativeElement.labelAlign : undefined;
	    }
	    set labelAlign(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelAlign = value;
	        }
	    }
	    /** Applies only when the controlType property is set to 'group'. Specifies the label text displayed on the "Next" button within a FormGroup, allowing you to get or set a custom label for navigation purposes.
	    *	Property type: string
	    */
	    get nextButtonLabel() {
	        return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
	    }
	    set nextButtonLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.nextButtonLabel = value;
	        }
	    }
	    /** ''  Available only when the controlType property is set to 'group' (i.e., for FormGroup controls). This property allows you to get or set the label displayed on the back button within the form group.
	    *	Property type: string
	    */
	    get backButtonLabel() {
	        return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
	    }
	    set backButtonLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.backButtonLabel = value;
	        }
	    }
	    /** Allows you to retrieve or specify the placeholder text displayed in the FormControl when the input field is empty. This placeholder provides a hint to users about the expected input.
	    *	Property type: string
	    */
	    get placeholder() {
	        return this.nativeElement ? this.nativeElement.placeholder : undefined;
	    }
	    set placeholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.placeholder = value;
	        }
	    }
	    /** HTML content that appears visually above or before the form control element, typically used for introductory text, instructions, or contextual information. This content is rendered prior to the input field or interactive control in the layout.
	    *	Property type: any
	    */
	    get prependHTML() {
	        return this.nativeElement ? this.nativeElement.prependHTML : undefined;
	    }
	    set prependHTML(value) {
	        if (this.nativeElement) {
	            this.nativeElement.prependHTML = value;
	        }
	    }
	    /** Enables you to retrieve or assign the readonly state of the form control. When set to true, the form control becomes non-editable, preventing users from modifying its value while still allowing its content to be viewed.
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
	    /** Determines whether this field must be filled in by the user. When set to true, the field is required and validation will fail if it is left empty. When set to false, the field is optional. This property can be both retrieved (get) and updated (set).
	    *	Property type: boolean
	    */
	    get required() {
	        return this.nativeElement ? this.nativeElement.required : undefined;
	    }
	    set required(value) {
	        if (this.nativeElement) {
	            this.nativeElement.required = value;
	        }
	    }
	    /** Returns whether the Form control is in a "pristine" state, meaning it has not been interacted with or "touched" by the user. This property remains true until the user focuses on and then blurs (moves away from) the Form control, at which point it is set to false. It is commonly used to determine if the user has interacted with a form field since the component was initialized.
	    *	Property type: boolean
	    */
	    get untouched() {
	        return this.nativeElement ? this.nativeElement.untouched : undefined;
	    }
	    set untouched(value) {
	        if (this.nativeElement) {
	            this.nativeElement.untouched = value;
	        }
	    }
	    /** Gets or sets whether a colon character (:) is automatically displayed after the label text. When enabled, a colon will appear immediately following the label, typically to visually separate the label from the corresponding input field.
	    *	Property type: boolean
	    */
	    get showColonAfterLabel() {
	        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	    }
	    set showColonAfterLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showColonAfterLabel = value;
	        }
	    }
	    /** Applies only when controlType is set to 'group'. This property determines whether navigation buttons are shown within the FormGroup. It is effective only if the viewMode property is enabled. Use this property to control the visibility of navigation controls for grouped form elements in the specified view mode.
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
	    /** Provides the ability to retrieve (get) or update (set) the current value of a FormControl or FormGroup. This allows you to read the form’s data or programmatically change its values as needed.
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
	    /** Determines whether the Form control currently satisfies all validation rules and is considered valid. Returns true if the control’s value passes all validation checks; otherwise, returns false.
	    *	Property type: boolean
	    */
	    get valid() {
	        return this.nativeElement ? this.nativeElement.valid : undefined;
	    }
	    set valid(value) {
	        if (this.nativeElement) {
	            this.nativeElement.valid = value;
	        }
	    }
	    /** Sets or retrieves the column's validation rules. The value should be an array of objects, where each object defines a specific validation rule for the column. Each validation rule object must include:- A 'type' property, which specifies the type of validation. Valid values for 'type' include: ''required'', ''min'', ''max'', ''minLength'', ''maxLength'', ''email'', ''null'', ''requiredTrue'', ''minDate'', ''maxDate'', and ''pattern''.- A 'value' property, which provides the value used for the validation. For example, for 'minLength', 'value' might be '3', or for 'pattern', it could be a regular expression. Note: For validation types ''required'', ''requiredTrue'', and ''null'', the 'value' property can be omitted.Optionally, you can include a 'message' property to specify a custom error message that is shown when the validation fails.'Example:''''json[  { "type": "required", "message": "This field is mandatory." },  { "type": "minLength", "value": 3, "message": "Minimum 3 characters required." },  { "type": "pattern", "value": "^[A-Za-z]+$", "message": "Only letters are allowed." }]'''This structure allows you to define multiple validation rules for a column, each with its own type, constraints, and error message.
	    *	Property type: [] | null
	    */
	    get validationRules() {
	        return this.nativeElement ? this.nativeElement.validationRules : undefined;
	    }
	    set validationRules(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validationRules = value;
	        }
	    }
	    /** 'Applies only when controlType is set to 'group'. This property gets or sets the view mode of the form group, determining how the group of form controls is displayed and interacted with in the UI.'
	    *	Property type: FormControlViewMode | string
	    */
	    get viewMode() {
	        return this.nativeElement ? this.nativeElement.viewMode : undefined;
	    }
	    set viewMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.viewMode = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["action", "align", "appendHTML", "controlOptions", "controlType", "columns", "columnSpan", "dataField", "disabled", "dirty", "info", "invalid", "label", "labelPosition", "labelOffset", "labelAlign", "nextButtonLabel", "backButtonLabel", "placeholder", "prependHTML", "readonly", "required", "untouched", "showColonAfterLabel", "showButtons", "value", "valid", "validationRules", "viewMode"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCreate", "onReady"];
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
	        return (React.createElement("smart-form-control", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Form Group
	*/
	class FormGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'FormGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Gets or sets the number of columns used to layout the form fields, allowing for multi-column form arrangements.
	    *	Property type: number
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Defines the data field associated with the form control. The inner input element’s name attribute will be set to the specified dataField value, ensuring correct binding and form data serialization. Additionally, this value determines how the control is referenced within the FormGroup, making the form control’s value accessible via the dataField key in the form’s data model.
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
	    /** Retrieves or updates the text displayed as the label for the form control, allowing you to specify or modify the descriptive text shown to users alongside the input element.
	    *	Property type: string
	    */
	    get label() {
	        return this.nativeElement ? this.nativeElement.label : undefined;
	    }
	    set label(value) {
	        if (this.nativeElement) {
	            this.nativeElement.label = value;
	        }
	    }
	    /**
	    *	Property type: Control[]
	    */
	    get controls() {
	        return this.nativeElement ? this.nativeElement.controls : undefined;
	    }
	    set controls(value) {
	        if (this.nativeElement) {
	            this.nativeElement.controls = value;
	        }
	    }
	    /** Specifies or retrieves the position of the labels relative to their associated element. This property can be used to define where labels are displayed, such as above, below, to the left, or to the right of the element.
	    *	Property type: {(value: string): void}
	    */
	    get onStatusChanges() {
	        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
	    }
	    set onStatusChanges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onStatusChanges = value;
	        }
	    }
	    /** Sets the form to read-only mode, preventing users from editing or modifying any of the input fields while still allowing them to view the current values.
	    *	Property type: {(value: any): void}
	    */
	    get onValueChanges() {
	        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
	    }
	    set onValueChanges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onValueChanges = value;
	        }
	    }
	    /** Toggles the visibility of the colon character that appears immediately after label text, allowing you to choose whether or not a colon is displayed following each label.
	    *	Property type: FormGroupLabelPosition | string
	    */
	    get labelPosition() {
	        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	    }
	    set labelPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelPosition = value;
	        }
	    }
	    /** Controls the visibility of the validation summary, allowing you to display or hide a summary of form validation errors to users.
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
	    /** Retrieves the current value of the form or updates it with a new value. This property can be used to access the form's data or set it programmatically.
	    *	Property type: boolean
	    */
	    get showColonAfterLabel() {
	        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	    }
	    set showColonAfterLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showColonAfterLabel = value;
	        }
	    }
	    /** undefined
	    *	Property type: boolean
	    */
	    get showSummary() {
	        return this.nativeElement ? this.nativeElement.showSummary : undefined;
	    }
	    set showSummary(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showSummary = value;
	        }
	    }
	    /** undefined
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
	        return ["columns", "dataField", "label", "controls", "onStatusChanges", "onValueChanges", "labelPosition", "readonly", "showColonAfterLabel", "showSummary", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCreate", "onReady"];
	    }
	    /** Inserts a new input control (such as a text box, dropdown, or checkbox) into the Form, allowing users to provide or select additional information as part of their submission.
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    addControl(controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addControl(controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addControl(controlOptions);
	            });
	        }
	    }
	    /** Retrieves a specific control from the collection using its name, as specified by the dataField parameter. This function searches for a control whose name matches the provided dataField value and returns the corresponding control object, allowing you to access or manipulate its properties and methods.
	    * @param {string} dataField. dataField of a FormControl or FormGroup
	    * @returns {Control}
	  */
	    getControl(dataField) {
	        const result = this.nativeElement.getControl(dataField);
	        return result;
	    }
	    /** Adds a user interface control (such as a text box, dropdown, or button) to the specified Form, enabling users to input or interact with form data. This operation dynamically updates the Form’s layout and may include assigning default properties, event handlers, and positioning options for the new control.
	    * @param {number} index. Control insert index
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    insertControl(index, controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insertControl(index, controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insertControl(index, controlOptions);
	            });
	        }
	    }
	    /** Removes a specified control element from the Form, effectively deleting it from the Form’s structure and user interface. This operation detaches the control, ensuring it is no longer available for user interaction or data capture. Use this action to dynamically update the Form’s contents based on user actions or application logic.
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    removeControl(controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeControl(controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeControl(controlOptions);
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
	        return (React.createElement("smart-form-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Reactive Form Component with Advanced Validation
	*/
	class Form extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Form' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Defines or retrieves the number of columns used to arrange form fields, determining how fields are organized and displayed within the form layout.
	    *	Property type: number
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Gets or sets the collection of form controls associated with the form. This allows you to retrieve the current controls or update them with a new set of controls.
	    *	Property type: Control[]
	    */
	    get controls() {
	        return this.nativeElement ? this.nativeElement.controls : undefined;
	    }
	    set controls(value) {
	        if (this.nativeElement) {
	            this.nativeElement.controls = value;
	        }
	    }
	    /** Defines or retrieves the position of the labels relative to their associated elements. Specify this property to control where labels are displayed (e.g., above, below, left, or right of the element).
	    *	Property type: {(value: string): void}
	    */
	    get onStatusChanges() {
	        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
	    }
	    set onStatusChanges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onStatusChanges = value;
	        }
	    }
	    /** Sets all form fields to read-only mode, preventing users from modifying their input while still allowing them to view the existing data.
	    *	Property type: {(value: any): void}
	    */
	    get onValueChanges() {
	        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
	    }
	    set onValueChanges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onValueChanges = value;
	        }
	    }
	    /** Controls the visibility of the colon character that appears after label text. When enabled, a colon is displayed after each label; when disabled, the colon is omitted.
	    *	Property type: FormLabelPosition | string
	    */
	    get labelPosition() {
	        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	    }
	    set labelPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelPosition = value;
	        }
	    }
	    /** Toggles the visibility of the validation summary, allowing users to display or hide a list of validation errors based on form input.
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
	    /** Retrieves the current status of the Form. Each entry within the status object contains the following boolean properties: dirty (indicates if the form field has been modified), untouched (indicates if the field has not been focused by the user), and disabled (indicates if the field is currently disabled).
	    *	Property type: boolean
	    */
	    get showColonAfterLabel() {
	        return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	    }
	    set showColonAfterLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showColonAfterLabel = value;
	        }
	    }
	    /** Retrieves or assigns the current value of the form. Use this property to access the form's data for processing or to update the form with new values programmatically.
	    *	Property type: boolean
	    */
	    get showSummary() {
	        return this.nativeElement ? this.nativeElement.showSummary : undefined;
	    }
	    set showSummary(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showSummary = value;
	        }
	    }
	    /** Automatically triggers form validation immediately upon form initialization, ensuring that all form fields are checked for correctness as soon as the form is rendered or instantiated.
	    *	Property type: any
	    */
	    get status() {
	        return this.nativeElement ? this.nativeElement.status : undefined;
	    }
	    set status(value) {
	        if (this.nativeElement) {
	            this.nativeElement.status = value;
	        }
	    }
	    /** undefined
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
	    /** undefined
	    *	Property type: boolean
	    */
	    get validateOnLoad() {
	        return this.nativeElement ? this.nativeElement.validateOnLoad : undefined;
	    }
	    set validateOnLoad(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validateOnLoad = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["columns", "controls", "onStatusChanges", "onValueChanges", "labelPosition", "readonly", "showColonAfterLabel", "showSummary", "status", "value", "validateOnLoad"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCreate", "onReady"];
	    }
	    /** Inserts a new control element, such as an input field, button, or checkbox, into the Form, allowing users to interact with and submit data.
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    addControl(controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addControl(controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addControl(controlOptions);
	            });
	        }
	    }
	    /** Retrieves a specific control element from the form using its name attribute, as defined by the dataField parameter. This method enables direct access to the control's properties and methods for further manipulation or data retrieval.
	    * @param {string} dataField. dataField of a FormControl or FormGroup
	    * @returns {Control}
	  */
	    getControl(dataField) {
	        const result = this.nativeElement.getControl(dataField);
	        return result;
	    }
	    /** Adds a new control element to the Form, allowing users to dynamically extend the form’s functionality. This method enables the inclusion of input fields, buttons, dropdowns, or other interactive components within the Form, ensuring seamless integration and consistent behavior with existing controls.
	    * @param {number} index. Control insert index
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    insertControl(index, controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insertControl(index, controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insertControl(index, controlOptions);
	            });
	        }
	    }
	    /** Removes a specified control element from the Form, ensuring it is no longer rendered or managed as part of the Form's structure and behavior.
	    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	    */
	    removeControl(controlOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeControl(controlOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeControl(controlOptions);
	            });
	        }
	    }
	    /** Triggers the submission of the form, sending the user-entered data to the specified server endpoint for processing. This action may also initiate form validation and execute any associated event handlers before transmitting the data.
	    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
	    */
	    submit(submitOptions) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.submit(submitOptions);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.submit(submitOptions);
	            });
	        }
	    }
	    /** Resets all fields in the form to their initial, default values, effectively clearing any user input or changes made.
	    */
	    reset() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.reset();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.reset();
	            });
	        }
	    }
	    /** Performs comprehensive validation of the form fields, ensuring that all required inputs are provided, data types and formats are correct, and any specified constraints or validation rules are met before allowing form submission.
	    */
	    validate() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.validate();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.validate();
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
	        return (React.createElement("smart-form", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Form = Form;
	exports.FormControl = FormControl;
	exports.FormGroup = FormGroup;
	exports.default = Form;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
