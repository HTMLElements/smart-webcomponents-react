
require('../source/modules/smart.querybuilder');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.querybuilder = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
     QueryBuilder allows you to build dynamically queries for filtering.
    */
    class QueryBuilder extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'QueryBuilder' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /** Enables the dragging of conditions inside a group or between groups.
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
        /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
        *	Property type: Animation
        */
        get animation() {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        }
        set animation(value) {
            if (this.nativeElement) {
                this.nativeElement.animation = value;
            }
        }
        /** Determines when the value of the element is updated with the new changes.
        *	Property type: QueryBuilderApplyMode
        */
        get applyMode() {
            return this.nativeElement ? this.nativeElement.applyMode : undefined;
        }
        set applyMode(value) {
            if (this.nativeElement) {
                this.nativeElement.applyMode = value;
            }
        }
        /** Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed.
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
        /** Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closed. If the dataType is 'object' the expected result from the function should contain a 'label' and 'value' attributes. Where the label will be used for displaying purposes while 'value' will be used as the actual value. hideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value. Takes two arguments: expression - the LinQ expression defined in the expressionTemplate of the customOperator. Type stringbindings - an array of expression parameters based on the expression template of the customOperator. Type Array[string]expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. Takes three arguments: name - the name of the dataField. Type string.operation - the name of the operation. Type stringvalue - the value of the operation. Type any( depends on the dataField).
        *	Property type: any
        */
        get customOperations() {
            return this.nativeElement ? this.nativeElement.customOperations : undefined;
        }
        set customOperations(value) {
            if (this.nativeElement) {
                this.nativeElement.customOperations = value;
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
        /** Sets or gets the dropdown width of the property and operator editors.
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
        /** Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box
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
        /** Determines whether new fields can be dynamically added by typing in the field (property) box.
        *	Property type: QueryBuilderFieldsMode
        */
        get fieldsMode() {
            return this.nativeElement ? this.nativeElement.fieldsMode : undefined;
        }
        set fieldsMode(value) {
            if (this.nativeElement) {
                this.nativeElement.fieldsMode = value;
            }
        }
        /** Sets or gets the format string of the editor of fields with type 'date'.
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
        /** Sets or gets the format string of the editor of fields with type 'dateTime'.
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
        /** A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'.
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
        /** Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true.
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
        /** Defines field names of the filtered element.
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
        /** Determines the placeholder text used inside the condition's operator box in case an operator is not selected.
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
        /** Determines the placeholder text used inside the condition's field (property) box in case a field is not selected.
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
        /** Shows/Hides the operator icons shown in the operator selection drop down.
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
        /** Shows/Hides the drop down icon for the operator field name of the conditions.
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
        /** Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation.
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
        /** Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput.
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
        /** The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
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
        /** Callback used to format the content of the condition value fields.
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
        /** Determines the placeholder text used inside the condition's value box in case a value is not set.
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
            return ["allowDrag", "animation", "applyMode", "autoPrompt", "customOperations", "disabled", "dropDownWidth", "fields", "fieldsMode", "formatStringDate", "formatStringDateTime", "getDynamicField", "icons", "locale", "localizeFormatFunction", "messages", "operatorPlaceholder", "propertyPlaceholder", "rightToLeft", "showIcons", "showFieldNameArrow", "theme", "unfocusable", "validateOnInput", "validationTimeout", "value", "valueFormatFunction", "valuePlaceholder"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onChange", "onDragEnd", "onDragging", "onDragStart", "onItemClick", "onPropertySelected", "onCreate", "onReady"];
        }
        /** Converts the current value of the element to DynamicLINQ expression.
        * @returns {string}
      */
        getLinq() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getLinq();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
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
            return (React.createElement("smart-query-builder", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.QueryBuilder = QueryBuilder;
    exports.default = QueryBuilder;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
