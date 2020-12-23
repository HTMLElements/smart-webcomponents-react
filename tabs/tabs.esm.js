
import '../source/modules/smart.tabs';

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
 Defines a tab item.
*/
class TabItem extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'TabItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Tab item close button state
    *	Property type: boolean
    */
    get closeButtonHidden() {
        return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
    }
    set closeButtonHidden(value) {
        if (this.nativeElement) {
            this.nativeElement.closeButtonHidden = value;
        }
    }
    /** Tab item index
    *	Property type: number
    */
    get index() {
        return this.nativeElement ? this.nativeElement.index : undefined;
    }
    set index(value) {
        if (this.nativeElement) {
            this.nativeElement.index = value;
        }
    }
    /** Tab item selected state
    *	Property type: boolean
    */
    get selected() {
        return this.nativeElement ? this.nativeElement.selected : undefined;
    }
    set selected(value) {
        if (this.nativeElement) {
            this.nativeElement.selected = value;
        }
    }
    /** Tab item label
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
    /** Tab item content
    *	Property type: number
    */
    get labelSize() {
        return this.nativeElement ? this.nativeElement.labelSize : undefined;
    }
    set labelSize(value) {
        if (this.nativeElement) {
            this.nativeElement.labelSize = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["closeButtonHidden", "index", "selected", "label", "content", "labelSize"];
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
        return (React.createElement("smart-tab-item", { ref: this.componentRef }, this.props.children));
    }
}

const Smart$1 = window.Smart;
/**
 Defines a group of tab items.
*/
class TabItemsGroup extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'TabItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /**
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
    *	Property type: number
    */
    get labelSize() {
        return this.nativeElement ? this.nativeElement.labelSize : undefined;
    }
    set labelSize(value) {
        if (this.nativeElement) {
            this.nativeElement.labelSize = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["label", "labelSize"];
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
        return (React.createElement("smart-tab-items-group", { ref: this.componentRef }, this.props.children));
    }
}

const Smart$2 = window.Smart;
/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Tabs' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or gets whether the "Add new tab" button (+) is displayed.
    *	Property type: boolean
    */
    get addNewTab() {
        return this.nativeElement ? this.nativeElement.addNewTab : undefined;
    }
    set addNewTab(value) {
        if (this.nativeElement) {
            this.nativeElement.addNewTab = value;
        }
    }
    /** Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
    *	Property type: boolean
    */
    get allowToggle() {
        return this.nativeElement ? this.nativeElement.allowToggle : undefined;
    }
    set allowToggle(value) {
        if (this.nativeElement) {
            this.nativeElement.allowToggle = value;
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
    /** Sets or gets the close button mode.
    *	Property type: TabsCloseButtonMode
    */
    get closeButtonMode() {
        return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
    }
    set closeButtonMode(value) {
        if (this.nativeElement) {
            this.nativeElement.closeButtonMode = value;
        }
    }
    /** Sets or gets whether close buttons are displayed.
    *	Property type: boolean
    */
    get closeButtons() {
        return this.nativeElement ? this.nativeElement.closeButtons : undefined;
    }
    set closeButtons(value) {
        if (this.nativeElement) {
            this.nativeElement.closeButtons = value;
        }
    }
    /** Sets or gets whether the Tabs content section is collapsed.
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
    /** Enables or disables the collapsible feature.
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
    /** Determines the data source that will be loaded to the Tabs.
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
    /** Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.
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
    /** Sets or gets the locale. Used in conjunction with the property messages.
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
    /** Sets or gets the widget's name.
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
    /** Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
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
    /** Disables user interaction with the element.
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
    /** Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
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
    /** Sets or gets whether tab labels can be resized by dragging with the mouse.
    *	Property type: boolean
    */
    get resize() {
        return this.nativeElement ? this.nativeElement.resize : undefined;
    }
    set resize(value) {
        if (this.nativeElement) {
            this.nativeElement.resize = value;
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
    /** Sets or gets the position of the scroll buttons.
    *	Property type: LayoutPosition
    */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.scrollButtonsPosition = value;
        }
    }
    /** Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
    *	Property type: TabsScrollMode
    */
    get scrollMode() {
        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
    }
    set scrollMode(value) {
        if (this.nativeElement) {
            this.nativeElement.scrollMode = value;
        }
    }
    /** Sets or gets which tab is selected.
    *	Property type: number | null
    */
    get selectedIndex() {
        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
    }
    set selectedIndex(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedIndex = value;
        }
    }
    /** Determines the way the user can switch between tabs.
    *	Property type: TabSelectionMode
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Applies one of four behaviors when the element is not wide enough to display all tab labels.
    *	Property type: TabsTabLayout
    */
    get tabLayout() {
        return this.nativeElement ? this.nativeElement.tabLayout : undefined;
    }
    set tabLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.tabLayout = value;
        }
    }
    /** Sets or gets where the tab strip is positioned.
    *	Property type: TabPosition
    */
    get tabPosition() {
        return this.nativeElement ? this.nativeElement.tabPosition : undefined;
    }
    set tabPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.tabPosition = value;
        }
    }
    /** Sets or gets the orientation of the text in the tabs.
    *	Property type: Orientation
    */
    get tabTextOrientation() {
        return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
    }
    set tabTextOrientation(value) {
        if (this.nativeElement) {
            this.nativeElement.tabTextOrientation = value;
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
        return ["addNewTab", "allowToggle", "animation", "closeButtonMode", "closeButtons", "collapsed", "collapsible", "dataSource", "disabled", "enableMouseWheelAction", "locale", "localizeFormatFunction", "messages", "name", "overflow", "readonly", "reorder", "resize", "rightToLeft", "scrollButtonsPosition", "scrollMode", "selectedIndex", "selectionMode", "tabLayout", "tabPosition", "tabTextOrientation", "theme", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onClose", "onClosing", "onDragEnd", "onDragStart", "onReorder", "onCreate", "onReady"];
    }
    /** Collapses the content section.
    */
    collapse() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse();
            });
        }
    }
    /** Makes sure a tab is visible by scrolling to it.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }
    /** Expands the content section.
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
    /** Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
    * @param {number} index. The index of the tab item.
    * @returns {number}
  */
    getOffsetFromEdgeOfElement(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getOffsetFromEdgeOfElement(index);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Inserts a new tab and an associated content section.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
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
    /** Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
    */
    refreshTabHeader() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshTabHeader();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshTabHeader();
            });
        }
    }
    /** Removes a tab and its associated content section.
    * @param {number} index. The index of the tab to remove.
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
    /** Selects a tab.
    * @param {number} index. The index of the tab to select.
    */
    select(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }
    /** Updates a tab and its associated content section.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    update(index, label, content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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
        return (React.createElement("smart-tabs", { ref: this.componentRef }, this.props.children));
    }
}

export default Tabs;
export { Smart$2 as Smart, Tabs, TabItem, TabItemsGroup };
