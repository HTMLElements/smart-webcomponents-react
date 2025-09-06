
require('../source/modules/smart.gridpanel');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.multicolumnfilterpanel = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Defines an advanced filter panel used for Grid and CardView filtering.
	*/
	class MultiColumnFilterPanel extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'MultiColumnFilterPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Defines or retrieves the current animation mode for the element. Setting this property to 'none' disables all animations, while other values enable specific animation behaviors. Use this property to control whether animations are active or inactive.
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
	    /** Controls the placement of the close button within items in the filter panel when using a multi-column layout. You can use this property to retrieve the current position or specify a new position for the close button, determining where it appears relative to each filter panel item.
	    *	Property type: MultiColumnFilterPanelCloseButtonPosition | string
	    */
	    get closeButtonPosition() {
	        return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	    }
	    set closeButtonPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.closeButtonPosition = value;
	        }
	    }
	    /** Specifies the data source to be loaded into the multi-column filter panel.The dataSource array consists of objects, each representing a column available for grouping and filtering. Each object includes the following properties:      dataField: The name of the data field that identifies the column to be grouped.        dataType: The type of data contained in the column (e.g., string, number, date), used for correct grouping and filtering operations.        groupIndex: The initial grouping order of the column, where a value of -1 means the column is not grouped by default. Columns with non-negative values are grouped in ascending order based on their groupIndex.        label: The display name for the column, shown in the column selection dropdown or panel for user-friendly identification.        icon: A CSS class or icon identifier to visually represent the column in the selection input, improving the user interface and navigation.        sortDirection: The direction in which items are sorted within the group. Acceptable values are 'ascending' or 'descending'.  This structure allows you to fully customize how columns appear and behave within the multi-column filter panel, including display options, grouping priorities, and sorting behavior.
	    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Controls whether the multi-column filter panel is displayed, allowing users to filter data across multiple columns simultaneously. When enabled, the panel appears in the UI, providing advanced filtering options; when disabled, the panel is hidden and users cannot access multi-column filtering features.
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
	    /** A callback function invoked to customize or update the configuration of value editor components. This function allows developers to modify editor settings—such as input types, selectable options, validation rules, or UI behavior—before the value editor is rendered or updated.
	    *	Property type: any
	    */
	    get editorCallback() {
	        return this.nativeElement ? this.nativeElement.editorCallback : undefined;
	    }
	    set editorCallback(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editorCallback = value;
	        }
	    }
	    /** Specifies or retrieves the placeholder text displayed in the filter value input fields. This placeholder provides guidance or an example to users about the expected input format when entering filter criteria.
	    *	Property type: string
	    */
	    get editorPlaceholder() {
	        return this.nativeElement ? this.nativeElement.editorPlaceholder : undefined;
	    }
	    set editorPlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editorPlaceholder = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey, a unique identifier or code required to activate or gain access to the product's features.
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
	    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es') used by the application or component. This property works together with the messages property to display localized content based on the selected language. Changing this value updates which set of localized messages will be used.
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
	    /** Callback function that enables you to define custom formatting for messages returned by the Localization Module, allowing you to modify how localized text is displayed based on your specific requirements (e.g., language, placeholders, or dynamic values).
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
	    /** Specifies or retrieves the maximum number of columns that can be used in a group by operation. If this value is set to null, there is no restriction on the number of columns that can be grouped.
	    *	Property type: number
	    */
	    get maxLevel() {
	        return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	    }
	    set maxLevel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxLevel = value;
	        }
	    }
	    /** Defines or retrieves an object containing the localized strings displayed by the widget’s user interface. This property enables you to provide translations for all text labels, messages, and prompts shown by the widget, making it adaptable to different languages and regions. It works in conjunction with the locale property, which determines the active language, allowing the widget to display the appropriate set of translated strings based on the selected locale.
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
	    /** Specifies the logical operator (such as AND or OR) used to combine or evaluate multiple items, determining how their conditions or values are collectively processed.
	    *	Property type: MultiColumnFilterPanelOperator | string
	    */
	    get operator() {
	        return this.nativeElement ? this.nativeElement.operator : undefined;
	    }
	    set operator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.operator = value;
	        }
	    }
	    /** When the element is set to 'readonly', users can view its content but are unable to modify or change its value. However, unlike 'disabled' elements, a readonly element remains focusable and its content can still be selected or copied by users.
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
	    /** Specifies or retrieves a value that determines whether the element’s alignment is adjusted to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element’s content and layout are oriented to accommodate locales that use RTL text direction.
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
	    /** When this property is set to true, the element will be excluded from the page’s tab order and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key, and focus-related events (such as onfocus) will not be triggered for this element.
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
	    /** Gets or sets the initial value of the element. This property allows you to retrieve the element’s starting value or assign a new initial value before user interaction or script modifications.
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
	        return ["animation", "closeButtonPosition", "dataSource", "disabled", "editorCallback", "editorPlaceholder", "unlockKey", "locale", "localizeFormatFunction", "maxLevel", "messages", "operator", "readonly", "rightToLeft", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onApply", "onCancel", "onCollapseAll", "onExpandAll", "onCreate", "onReady"];
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
	        return (React.createElement("smart-multi-column-filter-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.MultiColumnFilterPanel = MultiColumnFilterPanel;
	exports.default = MultiColumnFilterPanel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
