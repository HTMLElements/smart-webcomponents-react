
require('../source/modules/smart.tree');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.tree = {}),global.React));
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
     Defines a tree items.
    */
    class TreeItem extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'TreeItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
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
        get selected() {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        }
        set selected(value) {
            if (this.nativeElement) {
                this.nativeElement.selected = value;
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
        /** Disables user interaction with the item.
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
        // Gets the properties of the React component.
        get properties() {
            return ["disabled", "label", "level", "selected", "separator", "shortcut", "value", "readonly"];
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
            return (React.createElement("smart-tree-item", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$1 = window.Smart;
    /**
     Defines a group of tree items.
    */
    class TreeItemsGroup extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'TreeItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
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
        get selected() {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        }
        set selected(value) {
            if (this.nativeElement) {
                this.nativeElement.selected = value;
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
        /** Disables user interaction with the item.
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
        // Gets the properties of the React component.
        get properties() {
            return ["disabled", "expanded", "label", "level", "selected", "separator", "value", "readonly"];
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
            return (React.createElement("smart-tree-items-group", { ref: this.componentRef }, this.props.children));
        }
    }

    const Smart$2 = window.Smart;
    /**
     Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
    */
    class Tree extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'Tree' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /** Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
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
        /** Allows drop operation. Dropped items could originate from the current tree or another tree.
        *	Property type: boolean
        */
        get allowDrop() {
            return this.nativeElement ? this.nativeElement.allowDrop : undefined;
        }
        set allowDrop(value) {
            if (this.nativeElement) {
                this.nativeElement.allowDrop = value;
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
        /** Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
        *	Property type: boolean
        */
        get autoHideToggleElement() {
            return this.nativeElement ? this.nativeElement.autoHideToggleElement : undefined;
        }
        set autoHideToggleElement(value) {
            if (this.nativeElement) {
                this.nativeElement.autoHideToggleElement = value;
            }
        }
        /** Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
        *	Property type: boolean
        */
        get autoLoadState() {
            return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
        }
        set autoLoadState(value) {
            if (this.nativeElement) {
                this.nativeElement.autoLoadState = value;
            }
        }
        /** Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
        *	Property type: boolean
        */
        get autoSaveState() {
            return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
        }
        set autoSaveState(value) {
            if (this.nativeElement) {
                this.nativeElement.autoSaveState = value;
            }
        }
        /** Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
        *	Property type: boolean
        */
        get autoSort() {
            return this.nativeElement ? this.nativeElement.autoSort : undefined;
        }
        set autoSort(value) {
            if (this.nativeElement) {
                this.nativeElement.autoSort = value;
            }
        }
        /** Determines the data source that will be loaded to the Tree.
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
        /** Enables or disables jqxTree.
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
        /** Shows or hides loading indicator.
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
        /** A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
        *	Property type: any
        */
        get dragFeedbackFormatFunction() {
            return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
        }
        set dragFeedbackFormatFunction(value) {
            if (this.nativeElement) {
                this.nativeElement.dragFeedbackFormatFunction = value;
            }
        }
        /** Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
        *	Property type: number[]
        */
        get dragOffset() {
            return this.nativeElement ? this.nativeElement.dragOffset : undefined;
        }
        set dragOffset(value) {
            if (this.nativeElement) {
                this.nativeElement.dragOffset = value;
            }
        }
        /** Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
        *	Property type: boolean
        */
        get editable() {
            return this.nativeElement ? this.nativeElement.editable : undefined;
        }
        set editable(value) {
            if (this.nativeElement) {
                this.nativeElement.editable = value;
            }
        }
        /** Determines the expand behavior of TreeItemsGroups in the Tree.
        *	Property type: TreeExpandMode
        */
        get expandMode() {
            return this.nativeElement ? this.nativeElement.expandMode : undefined;
        }
        set expandMode(value) {
            if (this.nativeElement) {
                this.nativeElement.expandMode = value;
            }
        }
        /** Enables or disables filtering. Shows or hides filter input.
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
        /** Sets custom text for placeholder in the filter input.
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
        /** Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property.
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
        /** Sets filter mode.
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
        /** Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
        *	Property type: boolean
        */
        get hasThreeStates() {
            return this.nativeElement ? this.nativeElement.hasThreeStates : undefined;
        }
        set hasThreeStates(value) {
            if (this.nativeElement) {
                this.nativeElement.hasThreeStates = value;
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
        /** Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
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
        /** Sets the position of the loading indicator.
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
        /** Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
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
        /** Determines whether the right-to-left support is enabled.
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
        *	Property type: TreeScrollMode
        */
        get scrollMode() {
            return this.nativeElement ? this.nativeElement.scrollMode : undefined;
        }
        set scrollMode(value) {
            if (this.nativeElement) {
                this.nativeElement.scrollMode = value;
            }
        }
        /** An array with indexes (paths) of the selected items.
        *	Property type: string[]
        */
        get selectedIndexes() {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        }
        set selectedIndexes(value) {
            if (this.nativeElement) {
                this.nativeElement.selectedIndexes = value;
            }
        }
        /** Determines the way selected items are highlighted.
        *	Property type: TreeSelectionDisplayMode
        */
        get selectionDisplayMode() {
            return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
        }
        set selectionDisplayMode(value) {
            if (this.nativeElement) {
                this.nativeElement.selectionDisplayMode = value;
            }
        }
        /** Determines selection mode.
        *	Property type: TreeSelectionMode
        */
        get selectionMode() {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        }
        set selectionMode(value) {
            if (this.nativeElement) {
                this.nativeElement.selectionMode = value;
            }
        }
        /** Determines whether smart-tree-items-groups can be selected.
        *	Property type: TreeSelectionTarget
        */
        get selectionTarget() {
            return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
        }
        set selectionTarget(value) {
            if (this.nativeElement) {
                this.nativeElement.selectionTarget = value;
            }
        }
        /** Shows or hides lines, displaying the relation between elements in group.
        *	Property type: boolean
        */
        get showLines() {
            return this.nativeElement ? this.nativeElement.showLines : undefined;
        }
        set showLines(value) {
            if (this.nativeElement) {
                this.nativeElement.showLines = value;
            }
        }
        /** Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
        *	Property type: boolean
        */
        get showRootLines() {
            return this.nativeElement ? this.nativeElement.showRootLines : undefined;
        }
        set showRootLines(value) {
            if (this.nativeElement) {
                this.nativeElement.showRootLines = value;
            }
        }
        /** Sets user-defined function about custom sorting.
        *	Property type: any
        */
        get sort() {
            return this.nativeElement ? this.nativeElement.sort : undefined;
        }
        set sort(value) {
            if (this.nativeElement) {
                this.nativeElement.sort = value;
            }
        }
        /** Determines sort direction - ascending or descending.
        *	Property type: TreeSortDirection
        */
        get sortDirection() {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        }
        set sortDirection(value) {
            if (this.nativeElement) {
                this.nativeElement.sortDirection = value;
            }
        }
        /** Enables or disables sorting.
        *	Property type: boolean
        */
        get sorted() {
            return this.nativeElement ? this.nativeElement.sorted : undefined;
        }
        set sorted(value) {
            if (this.nativeElement) {
                this.nativeElement.sorted = value;
            }
        }
        /** Sets or gets the element's visual theme.
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
        /** Determines togle element (arrow) position.
        *	Property type: Position
        */
        get toggleElementPosition() {
            return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
        }
        set toggleElementPosition(value) {
            if (this.nativeElement) {
                this.nativeElement.toggleElementPosition = value;
            }
        }
        /** Determines the way to toggle smart-tree-items-groups.
        *	Property type: TreeToggleMode
        */
        get toggleMode() {
            return this.nativeElement ? this.nativeElement.toggleMode : undefined;
        }
        set toggleMode(value) {
            if (this.nativeElement) {
                this.nativeElement.toggleMode = value;
            }
        }
        /** Sets or gets if the element can be focused.
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
            return ["allowDrag", "allowDrop", "animation", "autoHideToggleElement", "autoLoadState", "autoSaveState", "autoSort", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dragFeedbackFormatFunction", "dragOffset", "editable", "expandMode", "filterable", "filterInputPlaceholder", "filterMember", "filterMode", "hasThreeStates", "itemsMember", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "locale", "localizeFormatFunction", "messages", "overflow", "readonly", "rightToLeft", "scrollMode", "selectedIndexes", "selectionDisplayMode", "selectionMode", "selectionTarget", "showLines", "showRootLines", "sort", "sortDirection", "sorted", "theme", "toggleElementPosition", "toggleMode", "unfocusable", "valueMember"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onChange", "onCollapse", "onCollapsing", "onDragEnd", "onDragging", "onDragStart", "onExpand", "onExpanding", "onScrollBottomReached", "onScrollTopReached", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
        }
        /** Adds an item after another item as a sibling.
        * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
        * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item after.
        */
        addAfter(item, sibling) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.addAfter(item, sibling);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.addAfter(item, sibling);
                });
            }
        }
        /** Adds an item before another item as a sibling.
        * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
        * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item before.
        */
        addBefore(item, sibling) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.addBefore(item, sibling);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.addBefore(item, sibling);
                });
            }
        }
        /** Adds an item as the last child of a parent item.
        * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
        * @param {string | HTMLElement} parent?. The jqx-tree-items-group (or its id or numeric path) to add the item to.
        */
        addTo(item, parent) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.addTo(item, parent);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.addTo(item, parent);
                });
            }
        }
        /** Clears selection.
        */
        clearSelection() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearSelection();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.clearSelection();
                });
            }
        }
        /** Collapses all smart-tree-items-groups.
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
        */
        collapseAll(animation) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseAll(animation);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.collapseAll(animation);
                });
            }
        }
        /** Collapses a smart-tree-items-group.
        * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
        * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
        */
        collapseItem(item, animation) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapseItem(item, animation);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.collapseItem(item, animation);
                });
            }
        }
        /** Makes sure an item is visible by scrolling to it.
        * @param {HTMLElement | string} item. The id or numeric path of an item
        */
        ensureVisible(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.ensureVisible(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.ensureVisible(item);
                });
            }
        }
        /** Expands all smart-tree-items-groups.
        * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
        */
        expandAll(animation) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAll(animation);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.expandAll(animation);
                });
            }
        }
        /** Expands single smart-tree-items-group.
        * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
        * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
        */
        expandItem(item, animation) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandItem(item, animation);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.expandItem(item, animation);
                });
            }
        }
        /** Applies filter to the Tree.
        * @param {string} filterQuery. Filter query.
        */
        filter(filterQuery) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.filter(filterQuery);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.filter(filterQuery);
                });
            }
        }
        /** Gets an item by its id or numeric path.
        * @param {string} id. The id or numeric path of an item.
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
        /** Returns SmartTree's state
        * @returns {any}
      */
        getState() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getState();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Inserts an item at the given position.
        * @param {any} item. A jqx-tree-item/jqx-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'jqx-tree-item'</em> - default - or <em>'jqx-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
        * @param {string} path?. The path to insert the item at.
        */
        insert(item, path) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(item, path);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.insert(item, path);
                });
            }
        }
        /** Loads the Tree's state.
        * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
        */
        loadState(state) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.loadState(state);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.loadState(state);
                });
            }
        }
        /** Moves an item down relative to its siblings.
        * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
        */
        moveDown(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveDown(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.moveDown(item);
                });
            }
        }
        /** Moves an item up relative to its siblings.
        * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
        */
        moveUp(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveUp(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.moveUp(item);
                });
            }
        }
        /** Removes an item.
        * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
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
        /** Saves the Tree's state.
        * @returns {any}
      */
        saveState() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.saveState();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Selects an item.
        * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
        */
        select(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.select(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.select(item);
                });
            }
        }
        /** Unselects an item.
        * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
        */
        unselect(item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.unselect(item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.unselect(item);
                });
            }
        }
        /** Updates an item.
        * @param {HTMLElement | string} item. jqx-tree-item/jqx-tree-items-group (or its id or numeric path).
        * @param {any} newItem. An object with updated properties.
        */
        updateItem(item, newItem) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateItem(item, newItem);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.updateItem(item, newItem);
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
            return (React.createElement("smart-tree", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart$2;
    exports.Tree = Tree;
    exports.default = Tree;
    exports.TreeItem = TreeItem;
    exports.TreeItemsGroup = TreeItemsGroup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
