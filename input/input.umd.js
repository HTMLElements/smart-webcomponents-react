
require('../source/modules/smart.input');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.input = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
	*/
	class Input extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Input' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching suggestions after the user interacts with the autocomplete input. This delay helps control how quickly the dropdown appears, improving user experience by preventing it from opening too rapidly as users type.
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
	    /** Specifies the data source that will be used to populate the Input component. The dataSource property accepts multiple formats:- 'Array of Primitives:' An array of strings or numbers, where each element represents a single list item.- 'Array of Objects:' An array of objects, where each object defines the properties of a list item. The recognized fields for each item object include:  - label (string): The display text for the item.  - value (string | number): The underlying value associated with the item.  - selected (boolean): Indicates whether the item is initially selected.  - prefix (string): HTML content to display before the label.  - suffix (string): HTML content to display after the label.  - title (string): Additional descriptive text, typically used for tooltips.- 'Callback Function:' A function that returns an array of items in either of the formats described above, allowing for dynamic or asynchronous data loading.The prefix and suffix fields can contain HTML, which is rendered respectively before and after the item's label. This allows for additional icons, badges, or formatting as needed to enhance the list item's visual presentation.
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
	    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When disabled, the element cannot be interacted with or triggered by the user.
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
	    /** Allows you to specify extra CSS class names that will be applied to the Input dropdown element, enabling custom styling or theming beyond the default classes.
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
	    /** Specifies the placement of the dropdown button relative to its container or trigger element, such as positioning it above, below, to the left, or to the right. This affects where the dropdown appears on the user interface when activated.
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
	    /** Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, left, or right.
	    *	Property type: DropDownOpenPosition | string
	    */
	    get dropDownOpenPosition() {
	        return this.nativeElement ? this.nativeElement.dropDownOpenPosition : undefined;
	    }
	    set dropDownOpenPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownOpenPosition = value;
	        }
	    }
	    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. To override the default behavior and set a custom height, assign a specific value (such as "200px" or "50%") to this property. If left unset, the component relies on the CSS variable to control its height.
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
	    /** Defines the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing you to control its sizing through your stylesheet. To specify a fixed width, provide a valid CSS width value (e.g., "200px", "100%"). If not specified, the component will fallback to the CSS variable for its width.
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
	    /** Specifies the purpose of the input field and instructs the browser on both the type of data expected and the level of permission granted to automatically assist the user in filling out the form element. This property directly maps to the standard HTML autocomplete attribute, which helps improve user experience by enabling browsers to suggest or autofill relevant data, such as a user’s name, organization, street address, and more. Common values include 'on' (enables autocomplete), 'off' (disables autocomplete), as well as context-specific tokens like 'name', 'email', 'organization', and 'street-address', among others. Using the appropriate value enhances form usability, accuracy, and accessibility.
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
	    /** Specifies the maximum number of matching items that will be displayed in the dropdown menu after a new auto-complete query is performed. By default, the dropdown will show up to 8 items. If the number of matched items exceeds this limit, only the first 8 results will be visible, and additional matches will not be shown unless this value is increased.
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
	    /** Retrieves or assigns the unlockKey value used to grant access to the product. The unlockKey serves as a security credential required to unlock and enable product functionality.
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
	    /** Specifies or retrieves the current language setting, which determines the localization to be used for displaying content. This property works together with the messages property to select and present language-specific messages or text strings. Setting this property updates the language used throughout the interface, while getting the property returns the currently active language code (e.g., "en", "fr", "es").
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
	    /** Callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify or structure localized messages before they are delivered to the application, such as adding context, adjusting placeholders, or applying additional formatting logic.
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
	    /** Defines or retrieves an object containing customizable text strings displayed by the widget, enabling localization for different languages and regions. This property works together with the locale property to allow the widget’s user interface labels, messages, and prompts to be easily translated and adapted for international audiences.
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
	    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will open and display a list of matching items based on the user's input.
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
	    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting data through an HTML form. It is used as the key for the form data sent to the server, allowing server-side scripts to access the corresponding value.
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
	    /** Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about the expected input format or content.
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
	    /** Defines or retrieves the filter query used to determine which items are displayed. This query is utilized by the autoComplete operation to match and return relevant items from the data source. If the query is set to an empty string, no filtering is applied, and all available items from the data source are shown.
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
	    /** Specifies the autocomplete query mode, which defines how search suggestions are generated. This property controls the matching algorithm used during autocomplete operations, such as whether suggestions are based on prefix, infix, or exact matches within the input text. Adjusting this property allows you to tailor the autocomplete behavior to best suit your application's search experience.
	    *	Property type: InputQueryMode | string
	    */
	    get queryMode() {
	        return this.nativeElement ? this.nativeElement.queryMode : undefined;
	    }
	    set queryMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.queryMode = value;
	        }
	    }
	    /** Specifies whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property controls the behavior of the input when a dataSource is provided:    If readonly is false, the element functions as a ComboBox, allowing users to either select an option from the dropdown or type their own input.  If readonly is true, the element acts as a DropDownList, restricting user input to only the items available in the dataSource.
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
	    /** Specifies or retrieves whether the element's text alignment and layout are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content will display in a direction suitable for RTL locales, ensuring proper reading order and alignment for users of these languages.
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
	    /** Specifies whether the items should be arranged in alphabetical order. If enabled, the items will be sorted from A to Z based on their names; if disabled, the original order will be preserved.
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
	    /** Specifies the sorting order to use when sort is enabled. Accepts either asc for ascending order or desc for descending order.
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
	    /** Specifies the index of the currently selected item within a list or array. This value indicates which item is active or highlighted, typically starting from zero for the first item.
	    *	Property type: number
	    */
	    get selectedIndex() {
	        return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	    }
	    set selectedIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedIndex = value;
	        }
	    }
	    /** Specifies the currently selected value from the available options. This property indicates which option is active or chosen by the user within the component.
	    *	Property type: string | number
	    */
	    get selectedValue() {
	        return this.nativeElement ? this.nativeElement.selectedValue : undefined;
	    }
	    set selectedValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedValue = value;
	        }
	    }
	    /** Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, to ensure consistency with the application's design guidelines.
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
	    /** Specifies the type of input expected by the field. Setting the input type controls the kind of data users can enter (e.g., text, number, email, password), impacts the on-screen keyboard on mobile devices, and enables input validation based on the chosen type.
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
	    /** When set to true, this property ensures that the element is not focusable and cannot receive keyboard or programmatic focus.
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
	    /** Sets a new value for the element or retrieves its current value, depending on how the function is used.
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
	        return ["autoCompleteDelay", "dataSource", "disabled", "dropDownClassList", "dropDownButtonPosition", "dropDownOpenPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "rightToLeft", "sorted", "sortDirection", "selectedIndex", "selectedValue", "theme", "type", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onChanging", "onOpen", "onClose", "onItemClick", "onCreate", "onReady"];
	    }
	    /** Closes the currently open dropdown menu, hiding its options from view and reverting the interface to its default state.
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
	    /** Ensures that the currently selected item remains visible within the viewport by automatically scrolling the container as needed. This guarantees that users can always see the active item, even when navigating through a list with limited onscreen space.
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
	    /** Expands the dropdown menu to display all available options for user selection.
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
	    /** Enhances user interaction by automatically focusing the input element and selecting its text. If the input is set to readonly, the element receives focus but its text is not selected, ensuring consistent behavior based on the input's state.
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
	    /** Selects an item from a data source based on its value. If your data source is a simple array of strings (e.g., `['Item 1', 'Item 2', 'Item 3']`), you can select an item by passing the exact string value, such as `'Item 1'`. If your data source is an array of objects with `label` and `value` properties (e.g., `[{ label: 'First', value: 1 }, { label: 'Second', value: 2 }]`), you should pass the corresponding `value` property (e.g., `1` for the first item) when calling `selectItem`. This method automatically locates and selects the item whose value matches the argument you provide, whether the values are strings or object properties.
	    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	    */
	    selectItem(value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectItem(value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectItem(value);
	            });
	        }
	    }
	    /** Retrieves an item from the data source by matching its value. For example, if your data source is an array of strings like ['Item 1', 'Item 2', 'Item 3'], you can retrieve an item by passing its exact string value, such as 'Item 1'. If your data source is an array of objects with properties such as { label: 'Item 1', value: 'item1' }, you should pass the specific value (e.g., 'item1') when calling selectItem. The method will return the corresponding item whose value matches the argument you provide.
	    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	    * @returns {any}
	  */
	    getItem(value) {
	        const result = this.nativeElement.getItem(value);
	        return result;
	    }
	    /** Retrieves the currently selected item from the data source.  - If your data source is a simple array of strings—such as `['Item 1', 'Item 2', 'Item 3']`—and the user selects the second item, this method will return `'Item 2'`.- If your data source is an array of objects with properties like `{ label, value }`, the method returns the `value` property of the selected object. For example, with a data source of `[ { label: 'First', value: 1 }, { label: 'Second', value: 2 } ]` and the user selects "Second", the method returns `2`.This ensures the method always returns the relevant value associated with the selected option, based on the structure of the data source.
	    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
	    * @returns {any}
	  */
	    getSelectedItem(value) {
	        const result = this.nativeElement.getSelectedItem(value);
	        return result;
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
	        return (React.createElement("smart-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Input = Input;
	exports.default = Input;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
