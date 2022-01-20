
require('../source/modules/smart.phoneinput');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.phoneinput = {}),global.React));
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
     The Phone Input specifies an input field where the user can enter and validate a phone number.
    */
    class PhoneInput extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'PhoneInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
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
        /** Sets additional class names to the Input drop down.
        *	Property type: any
        */
        get dropDownClassList() {
            return this.nativeElement ? this.nativeElement.dropDownClassList : undefined;
        }
        set dropDownClassList(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownClassList = value;
            }
        }
        /** Determines the position of the drop down button.
        *	Property type: DropDownButtonPosition
        */
        get dropDownButtonPosition() {
            return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
        }
        set dropDownButtonPosition(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownButtonPosition = value;
            }
        }
        /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
        *	Property type: string | number
        */
        get dropDownHeight() {
            return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
        }
        set dropDownHeight(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownHeight = value;
            }
        }
        /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
        *	Property type: string | number
        */
        get dropDownWidth() {
            return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
        }
        set dropDownWidth(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownWidth = value;
            }
        }
        /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
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
        /** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
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
        /** Determines whether the input will be in international or national mode i.e whether the input will start with '+'.
        *	Property type: boolean
        */
        get nationalMode() {
            return this.nativeElement ? this.nativeElement.nationalMode : undefined;
        }
        set nationalMode(value) {
            if (this.nativeElement) {
                this.nativeElement.nationalMode = value;
            }
        }
        /** Determines whether the drop down is opened or not.
        *	Property type: boolean
        */
        get opened() {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        }
        set opened(value) {
            if (this.nativeElement) {
                this.nativeElement.opened = value;
            }
        }
        /** Sets or gets an array of country codes which will be used instead of the default one with all countries. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
        *	Property type: any
        */
        get onlyCountries() {
            return this.nativeElement ? this.nativeElement.onlyCountries : undefined;
        }
        set onlyCountries(value) {
            if (this.nativeElement) {
                this.nativeElement.onlyCountries = value;
            }
        }
        /** Determines the placeholder of the input.
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
        /** Sets or gets the selected country of the element. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
        *	Property type: string
        */
        get selectedCountry() {
            return this.nativeElement ? this.nativeElement.selectedCountry : undefined;
        }
        set selectedCountry(value) {
            if (this.nativeElement) {
                this.nativeElement.selectedCountry = value;
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
        /** Determines the theme for the element. Themes define the look of the elements.
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
        /** Sets or gets the value of the element.
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
            return ["disabled", "dropDownClassList", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "messages", "name", "nationalMode", "opened", "onlyCountries", "placeholder", "selectedCountry", "rightToLeft", "theme", "unfocusable", "value"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onChange", "onChanging", "onItemClick", "onCreate", "onReady"];
        }
        /** Closes the drop down.
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
        /** Ensures that the active ( selected ) item is always visible.
        */
        ensureVisible() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.ensureVisible();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.ensureVisible();
                });
            }
        }
        /** Returns the entered phone number with formatting.
        * @param {boolean} isInternational?. When you use 'false', the national phone number will be returned and the international phone number, when you use 'true' as parameter.
        * @returns {string}
      */
        getNumber(isInternational) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getNumber(isInternational);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns an item by its country dial code. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
        * @param {string} dialCode?. Returns the national or international phone number
        * @returns {any}
      */
        getItemByDialCode(dialCode) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getItemByDialCode(dialCode);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the selected item. The item is an object with 'label', 'value', 'iso2' and 'dialCode' properties.
        * @returns {any}
      */
        getSelectedItem() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSelectedItem();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns true or false depending on whether the entered phone number is valid.
        * @returns {boolean}
      */
        isValidNumber() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.isValidNumber();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Validates the entered phone number.
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
        /** Opens the drop down.
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
        /** Selects the text inside the input or if it is readonly then the element is focused.
        */
        select() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.select();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.select();
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
            return (React.createElement("smart-phone-input", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.PhoneInput = PhoneInput;
    exports.default = PhoneInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
