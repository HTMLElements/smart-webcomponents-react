
require('../source/modules/smart.multiinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.multiinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 MultiInput specifies an input field where the user can enter data. Auto-complete options are displayed for easier input. Allows multiple selection. Selected items are added to the input's value.
	*/
	class MultiInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'MultiInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Gets or sets the animation mode. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
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
	    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching results after the user starts typing in the autocomplete field. This delay helps control how quickly suggestions appear, allowing for smoother user experience and reducing unnecessary search operations as the user types.
	    *	Property type: number
	    */
	    get autoCompleteDelay() {
	        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
	    }
	    set autoCompleteDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoCompleteDelay = value;
	        }
	    }
	    /** Specifies the source of data used to populate the MultiInput component. The 'dataSource' property accepts one of the following:- 'Array of Strings or Numbers:' Each element is rendered as a selectable item in the MultiInput list.- 'Array of Objects:' Each object should contain properties, typically such as 'label' (the display text) and 'value' (the underlying value), to define the characteristics of each list item.- 'Callback Function:' A function that returns an array of items in either of the above formats.This flexible configuration allows you to define static lists, complex data structures, or dynamically load items as needed.
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
	    /** Specifies whether the element is active and interactive (enabled), or inactive and unresponsive to user interactions (disabled). When set to disabled, the element cannot be clicked, selected, or modified by the user.
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
	    /** Specifies the location where the dropdown button will appear relative to its parent element. Possible values typically include options such as 'left', 'right', 'top', or 'bottom', allowing you to control the visual placement of the button within the user interface.
	    *	Property type: DropDownButtonPosition | string
	    */
	    get dropDownButtonPosition() {
	        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	    }
	    set dropDownButtonPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownButtonPosition = value;
	        }
	    }
	    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by the associated CSS variable. If you provide a specific value (e.g., '200px', '20rem'), it will override the default CSS-controlled height and explicitly set the dropdown's height to the specified value.
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
	    /** Specifies the width of the dropdown menu. By default, this property is an empty string ('""'), meaning the dropdown's width is determined by a corresponding CSS variable. You can override this behavior by explicitly setting a value (e.g., '"200px"', '"50%"') to directly control the dropdown's width via inline styles, rather than relying on the CSS variable.
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
	    /** Specifies the intended purpose of the input field and indicates to the browser what type of information is expected from the user. This setting guides the browser in offering automated assistance, such as autocomplete suggestions, when the input is used within a form. The value corresponds directly to the standard HTML autocomplete attribute, which helps user agents (such as browsers) determine whether and how to autofill the field. You can assign values such as 'on' (enable autocomplete), 'off' (disable autocomplete), or more specific values like 'name', 'organization', 'street-address', 'email', and others, to optimize the autofill behavior and improve the user experience.
	    *	Property type: string
	    */
	    get inputPurpose() {
	        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	    }
	    set inputPurpose(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inputPurpose = value;
	        }
	    }
	    /** Specifies the maximum number of matched items to display in the dropdown list in response to a new autoComplete query. By default, up to 8 items will be shown in the dropdown. If more items match the query, only the first 8 will be visible, ensuring the dropdown remains concise and user-friendly. Adjust this value to control how many results are presented to users at once.
	    *	Property type: number
	    */
	    get items() {
	        return this.nativeElement ? this.nativeElement.items : undefined;
	    }
	    set items(value) {
	        if (this.nativeElement) {
	            this.nativeElement.items = value;
	        }
	    }
	    /** Sets or retrieves the 'unlockKey' property, a unique key or code required to unlock access to the product’s features or full functionality. Use this property to provide the necessary unlock key when granting access, or to obtain the currently set unlock key.
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
	    /** Specifies or retrieves the current language setting for the component. This property determines which set of localized messages, defined in the messages property, will be displayed. When you update the language, the component automatically uses the corresponding message set from messages to reflect the selected language.
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
	    /** Callback function that allows developers to customize the formatting of messages returned by the Localization Module. This function receives the original message and relevant context, enabling dynamic modification—such as value interpolation, date and number formatting, or applying custom transformations—before the finalized message is delivered to the application.
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
	    /** Defines or retrieves an object containing the set of text strings used within the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale property to provide localization support, ensuring that UI labels, messages, and other user-facing text can be displayed appropriately based on the selected language.
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
	    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will appear, displaying a list of items that match the user's input.
	    *	Property type: number
	    */
	    get minLength() {
	        return this.nativeElement ? this.nativeElement.minLength : undefined;
	    }
	    set minLength(value) {
	        if (this.nativeElement) {
	            this.nativeElement.minLength = value;
	        }
	    }
	    /** Sets or retrieves the value of the element's "name" attribute. This attribute is used to identify form elements when submitting data through an HTML form. The value assigned to the "name" attribute is sent as the key in the key-value pair for the form data, allowing the server to process the input accordingly.
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
	    /** Indicates whether the dropdown menu is currently open (true) or closed (false).
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
	    /** Specifies the placeholder text displayed inside the input field before the user enters a value. This text typically provides a hint or example of the expected input.
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
	    /** Sets or retrieves the query string used to filter the list of items. This query is applied during the autoComplete operation to determine which items are shown based on the user's input. If the query is an empty string, all items from the data source are displayed without any filtering.
	    *	Property type: string | number
	    */
	    get query() {
	        return this.nativeElement ? this.nativeElement.query : undefined;
	    }
	    set query(value) {
	        if (this.nativeElement) {
	            this.nativeElement.query = value;
	        }
	    }
	    /** Specifies the query mode used for the autocomplete feature. This property defines how user input is matched against available options, determining the matching algorithm (e.g., prefix, infix, or token matching) applied during autocomplete operations. Adjust this setting to control how search suggestions are generated and filtered based on the user's query.
	    *	Property type: MultiInputQueryMode | string
	    */
	    get queryMode() {
	        return this.nativeElement ? this.nativeElement.queryMode : undefined;
	    }
	    set queryMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.queryMode = value;
	        }
	    }
	    /** Controls whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property specifies how the element behaves if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing users to either type custom text or select from the list.  - If readonly is true, the element acts as a DropDownList, restricting input to selection only from the available list items; custom text entry is not allowed.
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
	    /** Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. When enabled, the content within the element will align and flow appropriately to support RTL locales.
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
	    /** Specifies the character or string used to separate multiple selected items within the input field. This delimiter controls how selected values are displayed and parsed, ensuring each item is clearly distinguished in the input.
	    *	Property type: string
	    */
	    get separator() {
	        return this.nativeElement ? this.nativeElement.separator : undefined;
	    }
	    set separator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.separator = value;
	        }
	    }
	    /** Retrieves or assigns an array containing the currently selected values. Each item in the array represents a selected option, allowing for multiple selection handling.
	    *	Property type: any
	    */
	    get selectedValues() {
	        return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	    }
	    set selectedValues(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedValues = value;
	        }
	    }
	    /** Specifies whether an additional item should be displayed at the top of the options list. This item functions as a "Select All / Deselect All" control, allowing users to quickly select or unselect all available options in the list.
	    *	Property type: boolean
	    */
	    get selectAll() {
	        return this.nativeElement ? this.nativeElement.selectAll : undefined;
	    }
	    set selectAll(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectAll = value;
	        }
	    }
	    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted from A to Z; if set to false, the items will retain their original, unsorted order.
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
	    /** Specifies the sorting order used when sort is enabled. Accepts either asc for ascending order or desc for descending order.
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
	    /** Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the user interface.
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
	    /** Specifies the type of input allowed in the field. The input type controls the kind of data the user can enter (such as text, email, number, password, etc.), which helps ensure data is entered in the correct format and may trigger specialized keyboards or validation behaviors on supported devices.
	    *	Property type: string
	    */
	    get type() {
	        return this.nativeElement ? this.nativeElement.type : undefined;
	    }
	    set type(value) {
	        if (this.nativeElement) {
	            this.nativeElement.type = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via keyboard navigation (such as the Tab key).
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
	    /** Sets a new value for the element, or retrieves its current value. Use this property or method to programmatically access or update the element’s value in the DOM. Commonly applied to input fields, textareas, or form elements to manage user input or display dynamic content.
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
	        return ["animation", "autoCompleteDelay", "dataSource", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "rightToLeft", "separator", "selectedValues", "selectAll", "sorted", "sortDirection", "theme", "type", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu, hiding all available options from view and returning the component to its default inactive state.
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
	    /** Ensures that the currently selected item remains visible within its container, automatically scrolling the view if necessary to prevent the active item from being hidden or obscured.
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
	    /** Displays the dropdown menu, allowing users to view and select available options.
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
	    /** Selects all text within the input field. If the input field has the readonly attribute, the method instead focuses the element without selecting its text.
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
	        return (React.createElement("smart-multi-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.MultiInput = MultiInput;
	exports.default = MultiInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
