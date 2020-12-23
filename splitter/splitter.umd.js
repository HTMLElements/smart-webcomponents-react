
require('../source/modules/smart.splitter');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.splitter = {}),global.React));
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
     Splitter Item is a Panel in a Splitter component.
    */
    class SplitterItem extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'SplitterItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
        /** Determines of the item is collapsed or not.
        *	Property type: boolean
        */
        get collapsed() {
            return this.nativeElement ? this.nativeElement.collapsed : undefined;
        }
        set collapsed(value) {
            if (this.nativeElement) {
                this.nativeElement.collapsed = value;
            }
        }
        /** Determines of the item can be collapsed. If set to false, the item can't be collapsed
        *	Property type: boolean
        */
        get collapsible() {
            return this.nativeElement ? this.nativeElement.collapsible : undefined;
        }
        set collapsible(value) {
            if (this.nativeElement) {
                this.nativeElement.collapsible = value;
            }
        }
        /** Determines the content of the splitter items
        *	Property type: boolean
        */
        get locked() {
            return this.nativeElement ? this.nativeElement.locked : undefined;
        }
        set locked(value) {
            if (this.nativeElement) {
                this.nativeElement.locked = value;
            }
        }
        /** Determines of the item can be resized or not.
        *	Property type: string
        */
        get max() {
            return this.nativeElement ? this.nativeElement.max : undefined;
        }
        set max(value) {
            if (this.nativeElement) {
                this.nativeElement.max = value;
            }
        }
        /** Determines the max size of the item.
        *	Property type: string
        */
        get min() {
            return this.nativeElement ? this.nativeElement.min : undefined;
        }
        set min(value) {
            if (this.nativeElement) {
                this.nativeElement.min = value;
            }
        }
        /** Determines the min size of the item
        *	Property type: string
        */
        get size() {
            return this.nativeElement ? this.nativeElement.size : undefined;
        }
        set size(value) {
            if (this.nativeElement) {
                this.nativeElement.size = value;
            }
        }
        // Gets the properties of the React component.
        get properties() {
            return ["disabled", "collapsed", "collapsible", "content", "locked", "max", "min", "size"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onCreate", "onReady"];
        }
        /** Collapses the item.
        * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
        */
        collapse(far) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse(far);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.collapse(far);
                });
            }
        }
        /** Expands the item if it's collapsed.
        */
        expand() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.expand();
                });
            }
        }
        /** Locks the item so it can no longer change it's size.
        */
        lock() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.lock();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.lock();
                });
            }
        }
        /** Unlocks a previously locked item.
        */
        unlock() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.unlock();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.unlock();
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
            return (React.createElement("smart-splitter-item", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$1 = window.Smart;
    /**
     SplitterBar splits two Split panels in a Splitter.
    */
    class SplitterBar extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'SplitterBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        // Gets the properties of the React component.
        get properties() {
            return [];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onCreate", "onReady"];
        }
        /** Hides the splitter bar.
        */
        hide() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.hide();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.hide();
                });
            }
        }
        /** Unhides a splitter bar.
        */
        show() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.show();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.show();
                });
            }
        }
        /** Locks the splitter bar.
        */
        lock() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.lock();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.lock();
                });
            }
        }
        /** Unlocks the splitter bar.
        */
        unlock() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.unlock();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.unlock();
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
            return (React.createElement("smart-splitter-bar", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$2 = window.Smart;
    /**
     Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
    */
    class Splitter extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'Splitter' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
        /** Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
        *	Property type: SplitterAutoFitMode
        */
        get autoFitMode() {
            return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
        }
        set autoFitMode(value) {
            if (this.nativeElement) {
                this.nativeElement.autoFitMode = value;
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
        /** Sets or gets splitter's data source.
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
        /** A getter that returns an array of all Splitter items.
        *	Property type: any
        */
        get items() {
            return this.nativeElement ? this.nativeElement.items : undefined;
        }
        set items(value) {
            if (this.nativeElement) {
                this.nativeElement.items = value;
            }
        }
        /** If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
        *	Property type: boolean
        */
        get keepProportionsOnResize() {
            return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
        }
        set keepProportionsOnResize(value) {
            if (this.nativeElement) {
                this.nativeElement.keepProportionsOnResize = value;
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
        /** Sets an object with string values, related to the different states of passwords strength.
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
        /** Sets or gets splitter's orientation.
        *	Property type: Orientation
        */
        get orientation() {
            return this.nativeElement ? this.nativeElement.orientation : undefined;
        }
        set orientation(value) {
            if (this.nativeElement) {
                this.nativeElement.orientation = value;
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
        /** Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
        *	Property type: SplitterResizeMode
        */
        get resizeMode() {
            return this.nativeElement ? this.nativeElement.resizeMode : undefined;
        }
        set resizeMode(value) {
            if (this.nativeElement) {
                this.nativeElement.resizeMode = value;
            }
        }
        /** Determines the resize step during reisizing
        *	Property type: number
        */
        get resizeStep() {
            return this.nativeElement ? this.nativeElement.resizeStep : undefined;
        }
        set resizeStep(value) {
            if (this.nativeElement) {
                this.nativeElement.resizeStep = value;
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
        /** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
        *	Property type: boolean
        */
        get liveResize() {
            return this.nativeElement ? this.nativeElement.liveResize : undefined;
        }
        set liveResize(value) {
            if (this.nativeElement) {
                this.nativeElement.liveResize = value;
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
        // Gets the properties of the React component.
        get properties() {
            return ["animation", "autoFitMode", "disabled", "dataSource", "items", "keepProportionsOnResize", "locale", "localizeFormatFunction", "messages", "orientation", "readonly", "resizeMode", "resizeStep", "rightToLeft", "liveResize", "theme", "unfocusable"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onCollapse", "onExpand", "onResizeStart", "onResizeEnd", "onCreate", "onReady"];
        }
        /** Appends a new node.
        * @param {Node} node. The node to append
        */
        appendChild(node) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.appendChild(node);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.appendChild(node);
                });
            }
        }
        /** Collapses splitter item.
        * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
        * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
        */
        collapse(item, far) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse(item, far);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.collapse(item, far);
                });
            }
        }
        /** Expands the splitter item if possible (if there's enough space available).
        * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
        */
        expand(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.expand(item);
                });
            }
        }
        /** Hides a splitter bar
        * @param {number} splitterBar. A JQX.SplitterBar instance.
        * @returns {number}
      */
        hideBar(splitterBar) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.hideBar(splitterBar);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Insert a new Splitter item at a given position.
        * @param {number} index. The index at which a new item will be inserted.
        * @param {any} details. An Object or string used as content if the splitter item.
        */
        insert(index, details) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(index, details);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.insert(index, details);
                });
            }
        }
        /** Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
        * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
        * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
        * @returns {Node}
      */
        insertBefore(newNode, referenceNode) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.insertBefore(newNode, referenceNode);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Locks a splitter item so it's size can't change.
        * @param {number} index. The index of a Splitter Bar or it's instance.
        */
        lockItem(index) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.lockItem(index);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.lockItem(index);
                });
            }
        }
        /** Locks a splitter bar so it can't be dragged.
        * @param {number} index. The index of a Splitter Bar or it's instance.
        */
        lockBar(index) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.lockBar(index);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.lockBar(index);
                });
            }
        }
        /** Removes a Splitter item.
        * @param {number} index. An item to be removed.
        */
        removeAt(index) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAt(index);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.removeAt(index);
                });
            }
        }
        /** Removes all items from the Splitter
        */
        removeAll() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAll();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.removeAll();
                });
            }
        }
        /** Removes a child "smart-splitter-item" node.
        * @param {Node} node. The "jqx-splitter-item" node to remove.
        * @returns {Node}
      */
        removeChild(node) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.removeChild(node);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Refreshes the Splitter
        */
        refresh() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.refresh();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.refresh();
                });
            }
        }
        /** Unhides a Splitter Bar
        * @param {number} splitterBar. An instance of a splitter bar.
        */
        showBar(splitterBar) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.showBar(splitterBar);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.showBar(splitterBar);
                });
            }
        }
        /** Unlocks a previously locked splitter item.
        * @param {number} item. The index of a Splitter Item or it's instance.
        */
        unlockItem(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.unlockItem(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.unlockItem(item);
                });
            }
        }
        /** Unlocks a previously locked splitter bar.
        * @param {number} item. The index of a Splitter Bar or it's instance.
        */
        unlockBar(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.unlockBar(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.unlockBar(item);
                });
            }
        }
        /** Updates the properties of a Splitter item inside the Splitter.
        * @param {any} item. The index of a JQX.SplitterItem or it's instance.
        * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
        */
        update(item, settings) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(item, settings);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.update(item, settings);
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
            return (React.createElement("smart-splitter", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart$2;
    exports.Splitter = Splitter;
    exports.default = Splitter;
    exports.SplitterItem = SplitterItem;
    exports.SplitterBar = SplitterBar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
