
require('../source/modules/smart.listmenu');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.listmenu = {}),global.React));
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
     Defines a menu item.
    */
    class MenuItem extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'MenuItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /**
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
        /** Enables or disables element.
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
        /**
        *	Property type: any
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
        *	Property type: number
        */
        get level() {
            return this.nativeElement ? this.nativeElement.level : undefined;
        }
        set level(value) {
            if (this.nativeElement) {
                this.nativeElement.level = value;
            }
        }
        /**
        *	Property type: boolean
        */
        get separator() {
            return this.nativeElement ? this.nativeElement.separator : undefined;
        }
        set separator(value) {
            if (this.nativeElement) {
                this.nativeElement.separator = value;
            }
        }
        /**
        *	Property type: string
        */
        get shortcut() {
            return this.nativeElement ? this.nativeElement.shortcut : undefined;
        }
        set shortcut(value) {
            if (this.nativeElement) {
                this.nativeElement.shortcut = value;
            }
        }
        /**
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
            return ["checked", "disabled", "label", "level", "separator", "shortcut", "value"];
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
            return (React.createElement("smart-menu-item", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$1 = window.Smart;
    /**
     Defines a group of menu items.
    */
    class MenuItemsGroup extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'MenuItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /**
        *	Property type: boolean
        */
        get checkable() {
            return this.nativeElement ? this.nativeElement.checkable : undefined;
        }
        set checkable(value) {
            if (this.nativeElement) {
                this.nativeElement.checkable = value;
            }
        }
        /**
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
        /**
        *	Property type: MenuCheckMode
        */
        get checkMode() {
            return this.nativeElement ? this.nativeElement.checkMode : undefined;
        }
        set checkMode(value) {
            if (this.nativeElement) {
                this.nativeElement.checkMode = value;
            }
        }
        /** Enables or disables element.
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
        /**
        *	Property type: number
        */
        get dropDownHeight() {
            return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
        }
        set dropDownHeight(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownHeight = value;
            }
        }
        /**
        *	Property type: boolean
        */
        get expanded() {
            return this.nativeElement ? this.nativeElement.expanded : undefined;
        }
        set expanded(value) {
            if (this.nativeElement) {
                this.nativeElement.expanded = value;
            }
        }
        /**
        *	Property type: any
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
        *	Property type: number
        */
        get level() {
            return this.nativeElement ? this.nativeElement.level : undefined;
        }
        set level(value) {
            if (this.nativeElement) {
                this.nativeElement.level = value;
            }
        }
        /**
        *	Property type: boolean
        */
        get separator() {
            return this.nativeElement ? this.nativeElement.separator : undefined;
        }
        set separator(value) {
            if (this.nativeElement) {
                this.nativeElement.separator = value;
            }
        }
        /**
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
            return ["checkable", "checked", "checkMode", "disabled", "dropDownHeight", "expanded", "label", "level", "separator", "value"];
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
            return (React.createElement("smart-menu-items-group", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$2 = window.Smart;
    /**
     ListMenu allows you to present users a listing of options and sub options.
    */
    class ListMenu extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'ListMenu' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
        /** Determines whether the element becomes focused on hover or not.
        *	Property type: boolean
        */
        get autoFocusOnMouseenter() {
            return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
        }
        set autoFocusOnMouseenter(value) {
            if (this.nativeElement) {
                this.nativeElement.autoFocusOnMouseenter = value;
            }
        }
        /** Allows top-level ListMenu items to be checkable.
        *	Property type: boolean
        */
        get checkable() {
            return this.nativeElement ? this.nativeElement.checkable : undefined;
        }
        set checkable(value) {
            if (this.nativeElement) {
                this.nativeElement.checkable = value;
            }
        }
        /** Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
        *	Property type: boolean
        */
        get checkboxes() {
            return this.nativeElement ? this.nativeElement.checkboxes : undefined;
        }
        set checkboxes(value) {
            if (this.nativeElement) {
                this.nativeElement.checkboxes = value;
            }
        }
        /** Sets the check mode of top-level ListMenu items(groups).
        *	Property type: MenuCheckMode
        */
        get checkMode() {
            return this.nativeElement ? this.nativeElement.checkMode : undefined;
        }
        set checkMode(value) {
            if (this.nativeElement) {
                this.nativeElement.checkMode = value;
            }
        }
        /** Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
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
        /** Displays or hides the loading indicator. Loading indicator is hidden by default.
        *	Property type: boolean
        */
        get displayLoadingIndicator() {
            return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
        }
        set displayLoadingIndicator(value) {
            if (this.nativeElement) {
                this.nativeElement.displayLoadingIndicator = value;
            }
        }
        /** Determines the field in the data source that corresponds to an item's label.
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
        /** Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element.
        *	Property type: string | HTMLElement
        */
        get dropDownAppendTo() {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        }
        set dropDownAppendTo(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownAppendTo = value;
            }
        }
        /** If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
        *	Property type: boolean
        */
        get dropDownOverlay() {
            return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
        }
        set dropDownOverlay(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownOverlay = value;
            }
        }
        /** Sets or gets the opening direction of the ListMenu minimized dropdown.
        *	Property type: MenuDropDownPosition
        */
        get dropDownPosition() {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        }
        set dropDownPosition(value) {
            if (this.nativeElement) {
                this.nativeElement.dropDownPosition = value;
            }
        }
        /** Enables or disables scrolling using the mouse wheel through overflowing menu items.
        *	Property type: boolean
        */
        get enableMouseWheelAction() {
            return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
        }
        set enableMouseWheelAction(value) {
            if (this.nativeElement) {
                this.nativeElement.enableMouseWheelAction = value;
            }
        }
        /** Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered.
        *	Property type: boolean
        */
        get filterable() {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        }
        set filterable(value) {
            if (this.nativeElement) {
                this.nativeElement.filterable = value;
            }
        }
        /** Determines the placeholder for the filter input.
        *	Property type: string
        */
        get filterInputPlaceholder() {
            return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
        }
        set filterInputPlaceholder(value) {
            if (this.nativeElement) {
                this.nativeElement.filterInputPlaceholder = value;
            }
        }
        /** Determines the MenuItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the 'value' property or 'textContent' if the user wants to filter by text inside the MenuItem's content or any other property.
        *	Property type: string
        */
        get filterMember() {
            return this.nativeElement ? this.nativeElement.filterMember : undefined;
        }
        set filterMember(value) {
            if (this.nativeElement) {
                this.nativeElement.filterMember = value;
            }
        }
        /** Determines the filtering mode.
        *	Property type: FilterMode
        */
        get filterMode() {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        }
        set filterMode(value) {
            if (this.nativeElement) {
                this.nativeElement.filterMode = value;
            }
        }
        /** If enabled, the items will be grouped by their first letter and sorted.
        *	Property type: boolean
        */
        get grouped() {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        }
        set grouped(value) {
            if (this.nativeElement) {
                this.nativeElement.grouped = value;
            }
        }
        /** Determines the field in the data source that corresponds to an item group's subitems collection.
        *	Property type: string
        */
        get itemsMember() {
            return this.nativeElement ? this.nativeElement.itemsMember : undefined;
        }
        set itemsMember(value) {
            if (this.nativeElement) {
                this.nativeElement.itemsMember = value;
            }
        }
        /** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
        *	Property type: string
        */
        get loadingIndicatorPlaceholder() {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
        }
        set loadingIndicatorPlaceholder(value) {
            if (this.nativeElement) {
                this.nativeElement.loadingIndicatorPlaceholder = value;
            }
        }
        /** Determines the position of the loading indicator inside the element.
        *	Property type: VerticalAlignment
        */
        get loadingIndicatorPosition() {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
        }
        set loadingIndicatorPosition(value) {
            if (this.nativeElement) {
                this.nativeElement.loadingIndicatorPosition = value;
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
        /** Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance.
        *	Property type: string
        */
        get minimizeIconTemplate() {
            return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
        }
        set minimizeIconTemplate(value) {
            if (this.nativeElement) {
                this.nativeElement.minimizeIconTemplate = value;
            }
        }
        /** Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically.
        *	Property type: number | null
        */
        get minimizeWidth() {
            return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
        }
        set minimizeWidth(value) {
            if (this.nativeElement) {
                this.nativeElement.minimizeWidth = value;
            }
        }
        /** Sets or gets the ListMenu's scroll buttons behavior.
        *	Property type: Overflow
        */
        get overflow() {
            return this.nativeElement ? this.nativeElement.overflow : undefined;
        }
        set overflow(value) {
            if (this.nativeElement) {
                this.nativeElement.overflow = value;
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
        /** Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
        *	Property type: ListMenuScrollMode
        */
        get scrollMode() {
            return this.nativeElement ? this.nativeElement.scrollMode : undefined;
        }
        set scrollMode(value) {
            if (this.nativeElement) {
                this.nativeElement.scrollMode = value;
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
        /** Determines the field in the data source that corresponds to an item's value.
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
        // Gets the properties of the React component.
        get properties() {
            return ["animation", "autoFocusOnMouseenter", "checkable", "checkboxes", "checkMode", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dropDownAppendTo", "dropDownOverlay", "dropDownPosition", "enableMouseWheelAction", "filterable", "filterInputPlaceholder", "filterMember", "filterMode", "grouped", "itemsMember", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "locale", "localizeFormatFunction", "messages", "minimizeIconTemplate", "minimizeWidth", "overflow", "readonly", "rightToLeft", "scrollMode", "theme", "unfocusable", "valueMember"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onExpand", "onItemCheckChange", "onItemClick", "onScrollBottomReached", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
        }
        /** Adds an item to the list.
        * @param {HTMLElement} Item. A jqx-menu-item to add to the List Menu.
        * @param {HTMLElement | string} Parent?. The jqx-menu-items-group (or its id or numeric path) to add the item to.
        */
        addItem(Item, Parent) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.addItem(Item, Parent);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.addItem(Item, Parent);
                });
            }
        }
        /** Navigates to the previous page (smart-menu-items-group).
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
        */
        back(animation) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.back(animation);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.back(animation);
                });
            }
        }
        /** Navigates to a particular page (smart-menu-items-group).
        * @param {string} id. The id or numeric path of a page (jqx-menu-items-group).
        */
        changePage(id) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.changePage(id);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.changePage(id);
                });
            }
        }
        /** Checks an item.
        * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
        */
        checkItem(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.checkItem(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.checkItem(item);
                });
            }
        }
        /** Gets an item by its id or numeric path.
        * @param {string} id. The id or numeric path of an item
        * @returns {HTMLElement}
      */
        getItem(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getItem(id);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Maximizes the List Menu.
        */
        maximize() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.maximize();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.maximize();
                });
            }
        }
        /** Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized.
        */
        minimize() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.minimize();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.minimize();
                });
            }
        }
        /** Removes an item.
        * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group (or its id or numeric path) to remove.
        */
        removeItem(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeItem(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.removeItem(item);
                });
            }
        }
        /** Unchecks an item.
        * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
        */
        uncheckItem(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.uncheckItem(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.uncheckItem(item);
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
            return (React.createElement("smart-list-menu", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart$2;
    exports.ListMenu = ListMenu;
    exports.default = ListMenu;
    exports.MenuItem = MenuItem;
    exports.MenuItemsGroup = MenuItemsGroup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
