
import '../source/modules/smart.form';

import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const Smart = window.Smart;
/**
 Form Control
*/
class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'FormControl' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit'
    *	Property type: FormControlAction
    */
    get action() {
        return this.nativeElement ? this.nativeElement.action : undefined;
    }
    set action(value) {
        if (this.nativeElement) {
            this.nativeElement.action = value;
        }
    }
    /** Sets or Gets the alignment of the FormControl
    *	Property type: FormControlAlign
    */
    get align() {
        return this.nativeElement ? this.nativeElement.align : undefined;
    }
    set align(value) {
        if (this.nativeElement) {
            this.nativeElement.align = value;
        }
    }
    /** HTML Content displayed after the Form Control
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
    /** JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control.
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
    /** The type of the control.
    *	Property type: FormControlControlType
    */
    get controlType() {
        return this.nativeElement ? this.nativeElement.controlType : undefined;
    }
    set controlType(value) {
        if (this.nativeElement) {
            this.nativeElement.controlType = value;
        }
    }
    /** Sets the Form Group columns.
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
    /** Sets the Form control column span.
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
    /** Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
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
    /** Sets the Form control disabled mode.
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
    /** Gets whether the Form control is 'dirty' i.e its value is changed by the user.
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
    /** Gets or Sets the Form control's info icon's tooltip.
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
    /** Gets whether the Form control is invalid.
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
    /** Gets or Sets the Form control's label.
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
    /** Gets or Sets the Form control's label position.
    *	Property type: FormControlLabelPosition
    */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.labelPosition = value;
        }
    }
    /** Gets or Sets the offset between the label and the control.
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
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
    *	Property type: FormControlAlign
    */
    get labelAlign() {
        return this.nativeElement ? this.nativeElement.labelAlign : undefined;
    }
    set labelAlign(value) {
        if (this.nativeElement) {
            this.nativeElement.labelAlign = value;
        }
    }
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label.
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
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label.
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
    /** Gets or Sets the FormControl placeholder.
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
    /** HTML Content displayed before the Form Control
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
    /** Gets or Sets the Form control readonly mode.
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
    /** Gets or Sets whether this field is required.
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
    /** Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control
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
    /** Gets or Sets whether colon is displayed after the label.
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
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
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
    /** Sets or Gets the Form control or Form group value.
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
    /** Gets whether the Form control is valid.
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
    /** Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
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
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode.
    *	Property type: FormControlViewMode
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
    componentDidRender(initialize) {
        const that = this;
        const props = {};
        const events = {};
        let styles = null;
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
        }
        for (let prop in props) {
            if (prop === 'class') {
                const classNames = props[prop].trim().split(' ');
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
                that.nativeElement[normalizedProp] = props[prop];
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
        return (React.createElement("smart-form-control", { ref: this.componentRef }, this.props.children));
    }
}

const Smart$1 = window.Smart;
/**
 Form Group
*/
class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'FormGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or gets the form columns.
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
    /** Callback function for handling status changes
    *	Property type: any
    */
    get onStatusChanges() {
        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
    }
    set onStatusChanges(value) {
        if (this.nativeElement) {
            this.nativeElement.onStatusChanges = value;
        }
    }
    /** Callback function for handling value changes
    *	Property type: any
    */
    get onValueChanges() {
        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
    }
    set onValueChanges(value) {
        if (this.nativeElement) {
            this.nativeElement.onValueChanges = value;
        }
    }
    /** Sets or Gets the labels position.
    *	Property type: FormGroupLabelPosition
    */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.labelPosition = value;
        }
    }
    /** Makes the form readonly.
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
    /** Shows / hides the colon after the labels.
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
    /** Shows / hides validation summary.
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
    /** Gets or Sets the Form value.
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
        return ["columns", "controls", "onStatusChanges", "onValueChanges", "labelPosition", "readonly", "showColonAfterLabel", "showSummary", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
    }
    /** Adds a control to the Form.
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
    /** Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getControl(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Inserts a control to the Form.
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
    /** Remove a control from the Form.
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
    componentDidRender(initialize) {
        const that = this;
        const props = {};
        const events = {};
        let styles = null;
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
        }
        for (let prop in props) {
            if (prop === 'class') {
                const classNames = props[prop].trim().split(' ');
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
                that.nativeElement[normalizedProp] = props[prop];
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
        return (React.createElement("smart-form-group", { ref: this.componentRef }, this.props.children));
    }
}

const Smart$2 = window.Smart;
/**
 Reactive Form Component with Advanced Validation
*/
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Form' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or gets the form columns.
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
    /** Sets or gets the form controls.
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
    /** Callback function for handling status changes
    *	Property type: any
    */
    get onStatusChanges() {
        return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
    }
    set onStatusChanges(value) {
        if (this.nativeElement) {
            this.nativeElement.onStatusChanges = value;
        }
    }
    /** Callback function for handling value changes
    *	Property type: any
    */
    get onValueChanges() {
        return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
    }
    set onValueChanges(value) {
        if (this.nativeElement) {
            this.nativeElement.onValueChanges = value;
        }
    }
    /** Sets or Gets the labels position.
    *	Property type: FormLabelPosition
    */
    get labelPosition() {
        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
    }
    set labelPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.labelPosition = value;
        }
    }
    /** Makes the form readonly.
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
    /** Shows / hides the colon after the labels.
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
    /** Shows / hides validation summary.
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
    /** Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties.
    *	Property type: any
    */
    get state() {
        return this.nativeElement ? this.nativeElement.state : undefined;
    }
    set state(value) {
        if (this.nativeElement) {
            this.nativeElement.state = value;
        }
    }
    /** Gets or Sets the Form value.
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
        return ["columns", "controls", "onStatusChanges", "onValueChanges", "labelPosition", "readonly", "showColonAfterLabel", "showSummary", "state", "value"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
    }
    /** Adds a control to the Form.
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
    /** Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getControl(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Inserts a control to the Form.
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
    /** Remove a control from the Form.
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
    /** Submits the form.
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
    /** Clears the form.
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
    /** Validates the form.
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
    componentDidRender(initialize) {
        const that = this;
        const props = {};
        const events = {};
        let styles = null;
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
        }
        for (let prop in props) {
            if (prop === 'class') {
                const classNames = props[prop].trim().split(' ');
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
                that.nativeElement[normalizedProp] = props[prop];
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
        return (React.createElement("smart-form", { ref: this.componentRef }, this.props.children));
    }
}

export default Form;
export { Smart$2 as Smart, Form, FormControl, FormGroup };
