
require('../source/modules/smart.toast');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.toast = {}),global.React));
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
     The toast component is like an alert box that is only shown for a couple of seconds when something happens.
    */
    class Toast extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'Toast' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
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
        /** Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties.
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
        /** Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property.
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
        /** Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true).
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
        /** Sets whether the toast will open automatically immediately after widget's initialization.
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
        /** The user will not be able to interact with toast items when disabled is set to true.
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
        /** Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap).
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
        /** Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap).
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
        /** Sets custom item template.
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
        /** Callback, related to localization module.
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
        /** In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded.
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
        /** Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set.
        *	Property type: ToastPosition
        */
        get position() {
            return this.nativeElement ? this.nativeElement.position : undefined;
        }
        set position(value) {
            if (this.nativeElement) {
                this.nativeElement.position = value;
            }
        }
        /** If the element is readonly, users cannot interact with it.
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
        /** Sets or gets whether to show the toast item's close button.
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
        /** Sets speciffic CSS settings and icon to the toast items.
        *	Property type: ToastType | null
        */
        get type() {
            return this.nativeElement ? this.nativeElement.type : undefined;
        }
        set type(value) {
            if (this.nativeElement) {
                this.nativeElement.type = value;
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
        /** Sets a text value to an toast item.
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
            return ["animation", "appendTo", "autoClose", "autoCloseDelay", "autoOpen", "disabled", "iconClass", "itemClass", "itemTemplate", "locale", "localizeFormatFunction", "messages", "modal", "position", "readonly", "rightToLeft", "showCloseButton", "theme", "type", "unfocusable", "value"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onItemClick", "onClose", "onOpen", "onSwipebottom", "onSwipeleft", "onSwiperight", "onSwipetop", "onCreate", "onReady"];
        }
        /** Closes all opened toast items.
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
        /** Closes particular toast item.
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
        /** Closes the last opened toast item.
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
        /** Opens a new toast item and returns the opened smart-toast-item instance.
        * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
        * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
        * @returns {HTMLElement}
      */
        open(value, iconType) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.open(value, iconType);
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
            return (React.createElement("smart-toast", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.Toast = Toast;
    exports.default = Toast;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
