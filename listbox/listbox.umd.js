
require('../source/modules/smart.listbox');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.listbox = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	let Smart$1;
	if (typeof window !== "undefined") {
	    Smart$1 = window.Smart;
	}
	/**
	 Defines a list item for ListBox, ComboBox, DropDownList.
	*/
	class ListItem extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ListItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /**
	    *	Property type: number
	    */
	    get alternationIndex() {
	        return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
	    }
	    set alternationIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.alternationIndex = value;
	        }
	    }
	    /**
	    *	Property type: string
	    */
	    get color() {
	        return this.nativeElement ? this.nativeElement.color : undefined;
	    }
	    set color(value) {
	        if (this.nativeElement) {
	            this.nativeElement.color = value;
	        }
	    }
	    /**
	    *	Property type: ListItemDisplayMode | string
	    */
	    get displayMode() {
	        return this.nativeElement ? this.nativeElement.displayMode : undefined;
	    }
	    set displayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMode = value;
	        }
	    }
	    /**
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
	    *	Property type: string
	    */
	    get details() {
	        return this.nativeElement ? this.nativeElement.details : undefined;
	    }
	    set details(value) {
	        if (this.nativeElement) {
	            this.nativeElement.details = value;
	        }
	    }
	    /**
	    *	Property type: string
	    */
	    get group() {
	        return this.nativeElement ? this.nativeElement.group : undefined;
	    }
	    set group(value) {
	        if (this.nativeElement) {
	            this.nativeElement.group = value;
	        }
	    }
	    /**
	    *	Property type: boolean
	    */
	    get hidden() {
	        return this.nativeElement ? this.nativeElement.hidden : undefined;
	    }
	    set hidden(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hidden = value;
	        }
	    }
	    /**
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
	        return ["alternationIndex", "color", "displayMode", "grouped", "selected", "value", "label", "details", "group", "hidden", "readonly"];
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
	        return (React.createElement("smart-list-item", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	let Smart;
	if (typeof window !== "undefined") {
	    Smart = window.Smart;
	}
	/**
	 Defines a group of list items.
	*/
	class ListItemsGroup extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ListItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
	    // Gets the properties of the React component.
	    get properties() {
	        return ["label"];
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
	        return (React.createElement("smart-list-items-group", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 ListBox allows the user to select one or more items from a list.
	*/
	class ListBox extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'ListBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
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
	    /** Enables or disables the ability to drop list items inside the target List box.
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
	    /** Determines the number of color alternations in rows.
	    *	Property type: number
	    */
	    get alternationCount() {
	        return this.nativeElement ? this.nativeElement.alternationCount : undefined;
	    }
	    set alternationCount(value) {
	        if (this.nativeElement) {
	            this.nativeElement.alternationCount = value;
	        }
	    }
	    /** Determines the ending index of color alternations in rows.
	    *	Property type: number
	    */
	    get alternationEnd() {
	        return this.nativeElement ? this.nativeElement.alternationEnd : undefined;
	    }
	    set alternationEnd(value) {
	        if (this.nativeElement) {
	            this.nativeElement.alternationEnd = value;
	        }
	    }
	    /** Determines the starting index of color alternations in rows
	    *	Property type: number
	    */
	    get alternationStart() {
	        return this.nativeElement ? this.nativeElement.alternationStart : undefined;
	    }
	    set alternationStart(value) {
	        if (this.nativeElement) {
	            this.nativeElement.alternationStart = value;
	        }
	    }
	    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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
	    /** Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
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
	    /** Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
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
	    /** Enables or disables the list box.
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
	    /** Determines whether an indicator will appear during filtering and remote item loading.
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
	    /** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
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
	    /** A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
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
	    /** Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
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
	    /** Determines what happens when an item is dropped.
	    *	Property type: ListBoxDropAction | string
	    */
	    get dropAction() {
	        return this.nativeElement ? this.nativeElement.dropAction : undefined;
	    }
	    set dropAction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropAction = value;
	        }
	    }
	    /** Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
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
	    /** Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
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
	    /** A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
	    *	Property type: any
	    */
	    get filterCallback() {
	        return this.nativeElement ? this.nativeElement.filterCallback : undefined;
	    }
	    set filterCallback(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterCallback = value;
	        }
	    }
	    /** Determines the filtering mode.
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
	    /** Determines the placeholder for the filter input field.
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
	    /** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
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
	    /** Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
	    *	Property type: string | null
	    */
	    get groupMember() {
	        return this.nativeElement ? this.nativeElement.groupMember : undefined;
	    }
	    set groupMember(value) {
	        if (this.nativeElement) {
	            this.nativeElement.groupMember = value;
	        }
	    }
	    /** Determines the visibility of the horizontal Scroll bar.
	    *	Property type: HorizontalScrollBarVisibility | string
	    */
	    get horizontalScrollBarVisibility() {
	        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	    }
	    set horizontalScrollBarVisibility(value) {
	        if (this.nativeElement) {
	            this.nativeElement.horizontalScrollBarVisibility = value;
	        }
	    }
	    /** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
	    *	Property type: number
	    */
	    get incrementalSearchDelay() {
	        return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	    }
	    set incrementalSearchDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.incrementalSearchDelay = value;
	        }
	    }
	    /** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
	    *	Property type: SearchMode | string
	    */
	    get incrementalSearchMode() {
	        return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	    }
	    set incrementalSearchMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.incrementalSearchMode = value;
	        }
	    }
	    /** Sets the height for all list box items. Used only when virtualization is enabled.
	    *	Property type: number
	    */
	    get itemHeight() {
	        return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	    }
	    set itemHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemHeight = value;
	        }
	    }
	    /** Determines the item width measuring algorithm.
	    *	Property type: ListItemMeasureMode | string
	    */
	    get itemMeasureMode() {
	        return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	    }
	    set itemMeasureMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemMeasureMode = value;
	        }
	    }
	    /** A getter that returns an array of all ListBox items.
	    *	Property type: ListBoxItem[]
	    */
	    get items() {
	        return this.nativeElement ? this.nativeElement.items : undefined;
	    }
	    set items(value) {
	        if (this.nativeElement) {
	            this.nativeElement.items = value;
	        }
	    }
	    /** A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
	    *	Property type: any
	    */
	    get itemTemplate() {
	        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	    }
	    set itemTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemTemplate = value;
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
	    /** Determines the position of the loading indicator.
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
	    /** Sets or gets the unlockKey which unlocks the product.
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
	    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
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
	    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
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
	    /** Determines the placeholder that will be shown when the List box is empty.
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
	    /** Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
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
	    /** Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
	    *	Property type: number[]
	    */
	    get selectedIndexes() {
	        return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	    }
	    set selectedIndexes(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedIndexes = value;
	        }
	    }
	    /** Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
	    *	Property type: string[]
	    */
	    get selectedValues() {
	        return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	    }
	    set selectedValues(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedValues = value;
	        }
	    }
	    /** Determines how many items can be selected depending on the selection mode.
	    *	Property type: ListSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** Determines when listbox selection is achieved - on 'press' or 'release'.
	    *	Property type: ListBoxSelectionChangeAction | string
	    */
	    get selectionChangeAction() {
	        return this.nativeElement ? this.nativeElement.selectionChangeAction : undefined;
	    }
	    set selectionChangeAction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionChangeAction = value;
	        }
	    }
	    /** Determines whether the items are sorted alphabetically or not
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
	    /** Determines sorting direction - ascending(asc) or descending(desc)
	    *	Property type: string
	    */
	    get sortDirection() {
	        return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	    }
	    set sortDirection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sortDirection = value;
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
	    /** Ensures the item with the target index is in view as the first (top) item in the list box.
	    *	Property type: number
	    */
	    get topVisibleIndex() {
	        return this.nativeElement ? this.nativeElement.topVisibleIndex : undefined;
	    }
	    set topVisibleIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.topVisibleIndex = value;
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
	    /** Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
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
	    /** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
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
	    /** Determines the visibility of the vertical scroll bar.
	    *	Property type: VerticalScrollBarVisibility | string
	    */
	    get verticalScrollBarVisibility() {
	        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	    }
	    set verticalScrollBarVisibility(value) {
	        if (this.nativeElement) {
	            this.nativeElement.verticalScrollBarVisibility = value;
	        }
	    }
	    /** Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
	    *	Property type: boolean
	    */
	    get virtualized() {
	        return this.nativeElement ? this.nativeElement.virtualized : undefined;
	    }
	    set virtualized(value) {
	        if (this.nativeElement) {
	            this.nativeElement.virtualized = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["allowDrag", "allowDrop", "alternationCount", "alternationEnd", "alternationStart", "animation", "autoSort", "dataSource", "disabled", "displayLoadingIndicator", "displayMember", "dragFeedbackFormatFunction", "dragOffset", "dropAction", "editable", "filterable", "filterCallback", "filterMode", "filterInputPlaceholder", "grouped", "groupMember", "horizontalScrollBarVisibility", "incrementalSearchDelay", "incrementalSearchMode", "itemHeight", "itemMeasureMode", "items", "itemTemplate", "loadingIndicatorPlaceholder", "loadingIndicatorPosition", "unlockKey", "locale", "localizeFormatFunction", "messages", "name", "placeholder", "readonly", "rightToLeft", "selectedIndexes", "selectedValues", "selectionMode", "selectionChangeAction", "sorted", "sortDirection", "theme", "topVisibleIndex", "unfocusable", "value", "valueMember", "verticalScrollBarVisibility", "virtualized"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onBindingComplete", "onChange", "onDragEnd", "onDragging", "onDragStart", "onItemClick", "onItemLabelChange", "onScrollBottomReached", "onScrollTopReached", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
	    }
	    /** Appends a ListItem to the end of the list of items inside element.
	    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	    * @returns {Node}
	  */
	    appendChild(node) {
	        const result = this.nativeElement.appendChild(node);
	        return result;
	    }
	    /** Adds a new item(s).
	    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
	    */
	    add(item) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.add(item);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.add(item);
	            });
	        }
	    }
	    /** Removes all items from the listBox.
	    */
	    clearItems() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearItems();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearItems();
	            });
	        }
	    }
	    /** Unselects all items.
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
	    /** Performs a data bind. This can be used to refresh the data source.
	    */
	    dataBind() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.dataBind();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.dataBind();
	            });
	        }
	    }
	    /** Ensures the target item is visible by scrolling to it.
	    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
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
	    /** Returns an item instance from the listBox.
	    * @param {string} value. The value of an item from the listBox.
	    * @returns {HTMLElement}
	  */
	    getItem(value) {
	        const result = this.nativeElement.getItem(value);
	        return result;
	    }
	    /** Returns an array of ListBox items.
	    * @returns {{label: string, value: string}[]}
	  */
	    getItems() {
	        const result = this.nativeElement.getItems();
	        return result;
	    }
	    /** Inserts a new item at a specified index.
	    * @param {number} index. The index where the item must be inserted.
	    * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
	    */
	    insert(index, items) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insert(index, items);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insert(index, items);
	            });
	        }
	    }
	    /** Inserts a new ListItem before another in the list.
	    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	    * @returns {Node}
	  */
	    insertBefore(node, referenceNode) {
	        const result = this.nativeElement.insertBefore(node, referenceNode);
	        return result;
	    }
	    /** Removes an item at a specified index.
	    * @param {number} index. The index of the removed item.
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
	    /** Removes a ListItem from the list of items inside element.
	    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
	    * @returns {Node}
	  */
	    removeChild(node) {
	        const result = this.nativeElement.removeChild(node);
	        return result;
	    }
	    /** Selects an item from the listBox.
	    * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
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
	    /** Unselects an item from the listBox.
	    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
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
	    /** Updates an item from the listBox.
	    * @param {number} index. The index of the item that is going to be updated.
	    * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
	    */
	    update(index, details) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.update(index, details);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.update(index, details);
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
	        return (React.createElement("smart-list-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.ListBox = ListBox;
	exports.ListItem = ListItem;
	exports.ListItemsGroup = ListItemsGroup;
	exports.default = ListBox;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
