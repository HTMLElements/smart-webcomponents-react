
require('../source/modules/smart.tree');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tree = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
	}
	/**
	 Defines a tree items.
	*/
	class TreeItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TreeItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls whether the element is enabled (interactive) or disabled (non-interactive). When disabled, the element cannot be interacted with by the user and may appear visually dimmed or inactive.
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
	    /** Prevents users from interacting with the item, disabling all actions such as clicking, tapping, dragging, or keyboard input. The item will not respond to any user-generated events while this setting is enabled.
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
	        return (React.createElement("smart-tree-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Defines a group of tree items.
	*/
	class TreeItemsGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TreeItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls whether the element is active and can be interacted with by the user. When enabled, the element responds to user input; when disabled, it appears inactive and does not accept interactions.
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
	    /** Prevents users from interacting with the item by disabling all mouse, keyboard, and touch events, making the item unresponsive to user actions.
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
	        return (React.createElement("smart-tree-items-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
	*/
	class Tree extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Tree' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Enables drag-and-drop functionality within the current tree structure. When this option is set to 'true', users can drag items from the current tree and drop them into another tree that has the allowDrop setting enabled. This facilitates moving or copying items between compatible trees using a drag-and-drop interface.
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
	    /** Enables drag-and-drop functionality, permitting items to be dropped into this tree. The dropped items may originate from either within the current tree or from a different tree, supporting both intra-tree and inter-tree item transfers.
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
	    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled. Use this property to control whether animations are enabled, disabled, or set to a specific animation style or behavior.
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
	    /** Automatically hides the tree's toggle arrow when the mouse pointer leaves the tree area, and displays the toggle arrow again when the mouse pointer enters the tree area. This provides a cleaner interface by only showing the toggle control when the user is actively interacting with the tree.
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
	    /** Controls whether the component automatically loads its state (including filtering, sorting, expanded, and selected items) from the browser's localStorage. When enabled, any previously saved state is retrieved and applied to the component on initialization, allowing users to resume where they left off. Disabling this option prevents the component from loading state information from localStorage.
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
	    /** Controls whether the component automatically saves its state—including filtering, sorting, expanded rows, and selected items—to the browser’s localStorage. When enabled, these settings are preserved and restored on page reload, providing a persistent user experience.
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
	    /** Controls whether the tree is automatically re-sorted after changes. When autoSort is set to false, any modifications made to an already sorted tree will not trigger an automatic re-sorting; you will need to manually sort the tree to update its order. If autoSort is true, the tree will automatically re-sort itself whenever its contents are modified.
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
	    /** Specifies the data source from which the Tree component will retrieve and display its hierarchical data. This property determines which dataset is loaded and rendered within the Tree structure.
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
	    /** Controls whether the jqxTree widget is enabled or disabled. When enabled, users can interact with the tree and perform standard operations; when disabled, all user interaction is blocked and the tree appears visually inactive.
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
	    /** Controls the visibility of the loading indicator, allowing you to display it when a process is in progress and hide it when the process completes.
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
	    /** Specifies which field in the data source should be used as the label for each item—this determines the display text shown to users for every item in lists, dropdowns, or other UI elements.
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
	    /** A callback function that allows you to customize the HTML content displayed as drag feedback during a drag-and-drop operation. This function receives a single parameter: an array containing the items currently being dragged. Use this array to generate and return your custom HTML representation for the drag feedback.
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
	    /** Specifies the pixel offset of the drag feedback element relative to the mouse cursor during a drag operation. This value is defined as an array, where the first element represents the horizontal (X-axis) offset and the second element represents the vertical (Y-axis) offset. Adjusting these values changes the position of the visual feedback element in relation to the cursor as items are being dragged.
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
	    /**
	    *	Property type: boolean
	    */
	    get dropDownMode() {
	        return this.nativeElement ? this.nativeElement.dropDownMode : undefined;
	    }
	    set dropDownMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownMode = value;
	        }
	    }
	    /** Specifies the width, in pixels, of the Tree component when it appears within a drop-down interface. Adjusting this value controls how wide the drop-down Tree is rendered, allowing for customization to fit various layouts or content requirements.
	    *	Property type: number
	    */
	    get dropDownWidth() {
	        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	    }
	    set dropDownWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownWidth = value;
	        }
	    }
	    /** Specifies the height of the Tree component when it is rendered within a drop-down menu. Adjusting this value determines how much vertical space the Tree occupies in drop-down mode, affecting the number of visible items before scrolling is required.
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
	    /** Controls whether an item can be edited. When enabled, users can initiate editing by double-clicking a tree item or by selecting an item and pressing F2. If disabled, editing operations for the item are prevented.
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
	    /** Specifies how TreeItemGroups within the Tree expand or collapse, controlling whether multiple groups can be expanded simultaneously, only one group can be expanded at a time, or all groups are collapsed by default. This setting defines the expand/collapse interaction pattern for grouped items in the Tree structure.
	    *	Property type: TreeExpandMode | string
	    */
	    get expandMode() {
	        return this.nativeElement ? this.nativeElement.expandMode : undefined;
	    }
	    set expandMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.expandMode = value;
	        }
	    }
	    /** Controls the filtering functionality within the component. When enabled, a filter input field is displayed, allowing users to refine visible data based on their input. When disabled, the filter input is hidden, and all data items are shown without filtering options.
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
	    /** Triggers the filter action exclusively when the 'Enter' key is pressed, ensuring that filtering occurs only after user confirmation rather than on every input change.
	    *	Property type: boolean
	    */
	    get filterOnEnter() {
	        return this.nativeElement ? this.nativeElement.filterOnEnter : undefined;
	    }
	    set filterOnEnter(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterOnEnter = value;
	        }
	    }
	    /** Defines a custom placeholder text to display within the filter input field, guiding users on what they can search or filter for.
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
	    /** Specifies which property of the TreeItem will be used as the filtering criterion. By default, the component filters using the label property of each TreeItem. You can change this behavior by setting the property to value to filter based on the value property, or to textContent to filter based on the textual content within the TreeItem. You may also specify any other valid property name to customize the filtering logic according to your data structure. This allows for flexible and precise filtering of TreeItems based on your application's requirements.
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
	    /** Specifies the filtering method to be applied when processing data, such as selecting between different filter types (e.g., linear, nearest, or custom). Determines how input data is modified or constrained based on the selected filter mode.
	    *	Property type: FilterMode | string
	    */
	    get filterMode() {
	        return this.nativeElement ? this.nativeElement.filterMode : undefined;
	    }
	    set filterMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterMode = value;
	        }
	    }
	    /** Configures or retrieves whether the tree checkboxes support three distinct states: checked, unchecked, and indeterminate. This property is applicable only when the selectionMode is set to 'checkBox'. When enabled, the indeterminate state allows parent checkboxes to visually reflect that only some of their child nodes are selected.
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
	    /** Specifies the field in the data source that contains the collection of subitems associated with each item group. This property maps the hierarchical structure by identifying where the subitems data for each group is stored, enabling the component to correctly render nested or grouped elements.
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
	    /** Specifies a custom placeholder text to display within the loading indicator when the loadingIndicatorPosition property is set to either 'top' or 'bottom'. This allows you to personalize the message shown to users while content is loading in these positions.
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
	    /** Specifies the location on the screen where the loading indicator will appear, such as 'top', 'bottom', 'center', or a custom position.
	    *	Property type: VerticalAlignment | string
	    */
	    get loadingIndicatorPosition() {
	        return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	    }
	    set loadingIndicatorPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.loadingIndicatorPosition = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey value used to grant access to the product. The unlockKey acts as an authorization token or password that allows users to unlock and use the product’s features.
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
	    /** Sets or retrieves the current locale (language and regional settings) used by the component. This property works together with the messages property, which provides localized text and translations based on the selected locale. Use this property to display content in different languages and formats according to user preferences.
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
	    /** Callback function associated with the localization module, typically used to handle events such as language changes, translation updates, or localization data loading. This function enables the application to respond dynamically to localization-related operations.
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
	    /** Defines or retrieves an object containing the text strings displayed by the widget, enabling customization for different languages and regions. This property is used together with the locale property to provide localization support, allowing you to easily translate or adjust interface text based on the user's language settings.
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
	    /** Defines the behavior of the scrollbar—or, when 'scrollMode' is set to ''scrollButtons'', the scroll buttons—when the content exceeds the visible area of the element. This setting determines how users can navigate overflow content, such as automatically displaying scrollbars, enabling scroll buttons, or applying custom overflow handling.
	    *	Property type: Overflow | string
	    */
	    get overflow() {
	        return this.nativeElement ? this.nativeElement.overflow : undefined;
	    }
	    set overflow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.overflow = value;
	        }
	    }
	    /** If the element is set to readonly, users will be able to see its value but will not be able to modify, edit, or interact with its content in any way. The element will appear as non-editable, ensuring that its value remains unchanged by user input.
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
	    /** Specifies whether right-to-left (RTL) layout support is activated. When enabled, the user interface elements, text direction, and content flow are adjusted to accommodate languages that are read from right to left, such as Arabic or Hebrew.
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
	    /** Specifies whether to display a traditional scrollbar or to use scroll buttons for navigating content when the element’s content exceeds its visible area. This setting controls the user’s method of scrolling in overflow situations.
	    *	Property type: TreeScrollMode | string
	    */
	    get scrollMode() {
	        return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	    }
	    set scrollMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollMode = value;
	        }
	    }
	    /** A list (array) containing the index paths of the currently selected items. Each element in the array represents the hierarchical position of a selected item within the data structure, allowing precise identification of multiple selections.
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
	    /** Specifies the visual style or method used to highlight selected items, such as changing their background color, border, or font style, to indicate their selection state to the user.
	    *	Property type: TreeSelectionDisplayMode | string
	    */
	    get selectionDisplayMode() {
	        return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	    }
	    set selectionDisplayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionDisplayMode = value;
	        }
	    }
	    /** Specifies how selections can be made within the component, such as allowing single selection, multiple selections, or no selection at all.
	    *	Property type: TreeSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** Specifies whether selection is enabled for smart-tree-items-groups, allowing users to select one or more groups within the tree component. When set to true, group items in the jqxTree can be selected by user interaction.
	    *	Property type: TreeSelectionTarget | string
	    */
	    get selectionTarget() {
	        return this.nativeElement ? this.nativeElement.selectionTarget : undefined;
	    }
	    set selectionTarget(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionTarget = value;
	        }
	    }
	    /** Displays or hides connector lines that visually represent the relationships between elements within a group, making it easier to understand how the elements are interconnected.
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
	    /** Controls the visibility of connector lines between tree nodes, starting from the root node. When the 'showLines' property is set to true, lines connecting the hierarchical levels of the tree are displayed; if set to false, these lines are hidden.
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
	    /** Defines a user-provided function to specify custom sorting logic. This function allows you to determine how items are ordered, overriding the default sort behavior. It receives two items as arguments and should return a value indicating their sort order.
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
	    /** Specifies the sort order to be applied, allowing values of either 'ascending' (arranging items from lowest to highest) or 'descending' (arranging items from highest to lowest).
	    *	Property type: TreeSortDirection | string
	    */
	    get sortDirection() {
	        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	    }
	    set sortDirection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sortDirection = value;
	        }
	    }
	    /** Controls whether sorting functionality is enabled or disabled for the data set. When enabled, users can sort items based on specified criteria or columns; when disabled, sorting is not available.
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
	    /** Sets or retrieves the visual theme applied to the element, allowing you to customize its appearance (such as color scheme, style, or overall look) by selecting from predefined theme options.
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
	    /** Specifies the position of the toggle element (such as an arrow) within the component, indicating where the toggle control will be displayed relative to the content (e.g., left, right, top, or bottom).
	    *	Property type: Position | string
	    */
	    get toggleElementPosition() {
	        return this.nativeElement ? this.nativeElement.toggleElementPosition : undefined;
	    }
	    set toggleElementPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.toggleElementPosition = value;
	        }
	    }
	    /** Controls how groups within smart-tree-items are expanded or collapsed. Specifies the toggle behavior for displaying or hiding group items in the jqxTree component.
	    *	Property type: TreeToggleMode | string
	    */
	    get toggleMode() {
	        return this.nativeElement ? this.nativeElement.toggleMode : undefined;
	    }
	    set toggleMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.toggleMode = value;
	        }
	    }
	    /** Determines whether the element can receive keyboard focus. When set, the element is focusable using keyboard navigation (such as the Tab key) or scripting. This property can also be used to check the current focusable state of the element.
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
	    /** Specifies which field in the data source provides the value for each item. This property maps item values in your component or UI element to the corresponding field in your underlying data source, ensuring the correct value is referenced and displayed.
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
	        return ["allowDrag", "allowDrop", "animation", "autoHideToggleElement", "autoLoadState", "autoSaveState", "autoSort", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dragFeedbackFormatFunction", "dragOffset", "dropDownMode", "dropDownWidth", "dropDownHeight", "editable", "expandMode", "filterable", "filterOnEnter", "filterInputPlaceholder", "filterMember", "filterMode", "hasThreeStates", "itemsMember", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "overflow", "readonly", "rightToLeft", "scrollMode", "selectedIndexes", "selectionDisplayMode", "selectionMode", "selectionTarget", "showLines", "showRootLines", "sort", "sortDirection", "sorted", "theme", "toggleElementPosition", "toggleMode", "unfocusable", "valueMember"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCollapse", "onCollapsing", "onDragEnd", "onDragging", "onDragStart", "onExpand", "onExpanding", "onFilterChange", "onOpen", "onClose", "onScrollBottomReached", "onScrollTopReached", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
	    }
	    /** Inserts a new item immediately after a specified item within the same parent, making it a sibling element in the list or hierarchy.
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
	    /** Inserts a new item directly before a specified existing item within the same parent, making both items siblings in the data structure.
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
	    /** Appends a new item to the end of the specified parent item's list of children, making it the last child within the parent structure.
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
	    /** Removes any current selections, resetting the selection state to none. This action ensures that no items remain highlighted or marked as selected.
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
	    /** Collapses all elements with the class smart-tree-items-group, ensuring that every expandable group within the tree component is minimized and any nested content is hidden from view. This action provides a streamlined overview of the tree by hiding detailed or child items under each group.
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
	    /** Collapses the specified smart-tree-items-group, hiding all of its nested child items from view within the tree component. This action changes the group's state to collapsed, providing a more compact tree display by temporarily concealing its contents.
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
	    /** Closes the dropdown menu when the Tree component is operating in dropdown mode, ensuring that the dropdown is dismissed upon selection or when appropriate user interactions occur.
	    */
	    closeDropDown() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closeDropDown();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closeDropDown();
	            });
	        }
	    }
	    /** Displays the dropdown menu when the Tree component is set to dropdown mode, allowing users to interact with the tree structure within a dropdown interface.
	    */
	    openDropDown() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openDropDown();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openDropDown();
	            });
	        }
	    }
	    /** Ensures that a specified item is brought into the visible area of the scrollable container by automatically scrolling the container as needed, so the item is fully or partially in view for the user.
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
	    /** Expands all elements within the tree component that are assigned the 'smart-tree-items-group' class, making every group and its child items visible in the tree view.
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
	    /** Expands a specific group within the SmartTree component, displaying all child items associated with the selected tree group. This action reveals the contents of a single smart-tree-items-group node, making its nested items visible to the user.
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
	    /** Applies a filter to the Tree component, displaying only the nodes that match the specified criteria while hiding all others. This helps users easily find and focus on relevant items within the tree structure.
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
	    /** Retrieves a specific item by using either its unique identifier (ID) or a numeric path value. This function supports both string-based IDs and numeric paths to locate and return the corresponding item from the collection.
	    * @param {string} id. The id or numeric path of an item.
	    * @returns {HTMLElement}
	  */
	    getItem(id) {
	        const result = this.nativeElement.getItem(id);
	        return result;
	    }
	    /** Retrieves the currently active filter, including its criteria and settings, that has been applied to the data set.
	    * @returns {string}
	  */
	    getFilter() {
	        const result = this.nativeElement.getFilter();
	        return result;
	    }
	    /** Retrieves the currently selected values from the component. If no value is explicitly set, the method returns the labels of the selected items instead.
	    * @returns {string[]}
	  */
	    getSelectedValues() {
	        const result = this.nativeElement.getSelectedValues();
	        return result;
	    }
	    /** Returns the current state of the SmartTree component, including information such as which nodes are expanded, collapsed, selected, or checked. This allows you to save or restore the tree’s structure and user interactions.
	    * @returns {any}
	  */
	    getState() {
	        const result = this.nativeElement.getState();
	        return result;
	    }
	    /** Inserts a specified item into the array or list at the designated index, shifting subsequent items to the right to accommodate the new element. If the given position is out of range, an error may be thrown or the item may be added at the nearest valid position, depending on implementation.
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
	    /** Loads and restores the current state of the Tree, including expanded or collapsed branches, selected nodes, and any custom configurations. This ensures the Tree appears as it was previously saved or last interacted with.
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
	    /** Moves the selected item one position lower in the order among its sibling elements, placing it directly after the next sibling in the list.
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
	    /** Moves the specified item one position higher in the list of its sibling items, effectively placing it before the previous sibling in the order.
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
	    /** Removes a specified item from the collection or list. This operation locates the target item based on the provided identifier or criteria and deletes it from the data structure, ensuring that the collection is updated accordingly. If the item does not exist, no action is taken.
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
	    /** Persists the current state of the Tree structure, including all nodes, their expanded or collapsed statuses, and any selection information, allowing the Tree to be accurately restored in future sessions.
	    * @returns {any}
	  */
	    saveState() {
	        const result = this.nativeElement.saveState();
	        return result;
	    }
	    /** Allows selection of an item either by specifying its numerical index in the list or by providing the item's unique HTMLElement ID. This enables precise targeting of elements for further operations.
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
	    /** Selects one or multiple items from a list based on their specified values. This allows you to programmatically choose which items are highlighted or marked as selected, using their corresponding value identifiers.
	    * @param {string | string[]} items. The jqx-tree-item/jqx-tree-items-group values or labels, if values are not defined.
	    */
	    setSelectedValues(items) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setSelectedValues(items);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setSelectedValues(items);
	            });
	        }
	    }
	    /** Deselects a specified item, either by providing its numeric index in the list or by passing the item's HTMLElement ID as a string.
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
	    /** Deselects one or more items based on their specified values, removing them from the current selection set.
	    * @param {string | string[]} items. The jqx-tree-item/jqx-tree-items-group values or labels, if values are not defined.
	    */
	    unselectValues(items) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.unselectValues(items);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.unselectValues(items);
	            });
	        }
	    }
	    /** Updates an existing item in the database with new values provided in the request. This operation locates the item by its unique identifier and applies the specified changes to its properties. Returns the updated item upon success.
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
	        return (React.createElement("smart-tree", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Tree = Tree;
	exports.TreeItem = TreeItem;
	exports.TreeItemsGroup = TreeItemsGroup;
	exports.default = Tree;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
