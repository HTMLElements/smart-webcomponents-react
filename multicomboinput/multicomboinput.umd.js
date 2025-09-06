
require('../source/modules/smart.multicomboinput');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.multicomboinput = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 MultiComboInput specifies an input field where the user can enter data. Auto-complete options with checkbxoes are displayed for easier input. Allows multiple selection. Selected items are added to the input field as tags.
	*/
	class MultiComboInput extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'MultiComboInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets or retrieves the animation mode for the element. When the property is set to 'none', all animations are disabled, and any ongoing or future animations will not be executed. For any other value, the corresponding animation behavior will be applied based on the specified mode.
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
	    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu that shows matching suggestions from the autocomplete operation. This delay begins after the user stops typing, allowing for smoother user experience and reducing unnecessary searches.
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
	    /** Controls the visibility of close buttons when multiple items are selected. If enabled, close buttons will be displayed for each selected item, allowing users to remove individual items. If disabled, close buttons will be hidden, preventing users from removing selected items individually.
	    *	Property type: boolean
	    */
	    get hideInputTagsCloseButton() {
	        return this.nativeElement ? this.nativeElement.hideInputTagsCloseButton : undefined;
	    }
	    set hideInputTagsCloseButton(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideInputTagsCloseButton = value;
	        }
	    }
	    /** Controls whether the background color of an item's tag is automatically set to match the value specified in the item's 'color' property. When enabled, if an item has a 'color' property defined, its tag background will automatically use that color. When disabled, the tag background will not be affected by the 'color' property.
	    *	Property type: boolean
	    */
	    get colorItems() {
	        return this.nativeElement ? this.nativeElement.colorItems : undefined;
	    }
	    set colorItems(value) {
	        if (this.nativeElement) {
	            this.nativeElement.colorItems = value;
	        }
	    }
	    /** Specifies the source of data to be displayed in the MultiInput component. The dataSource can accept multiple formats:- An array of strings or numbers, where each entry is used as both the display value and the selection value of a list item.- An array of objects, where each object represents a list item. The object’s attributes (such as label and value) define the display text and internal value of each item.- A callback function that returns an array in either of the formats listed above.Use this property to flexibly provide static data or implement dynamic data loading for the MultiInput component.
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
	    /** Specifies whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically rendered with a visually distinct, disabled appearance.
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
	    /** Specifies the alignment or placement of the dropdown button relative to its parent element or container, such as positioning it to the left, right, center, or at a custom location within the interface. This property controls where the dropdown button will appear within its context.
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
	    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height is determined by a corresponding CSS variable rather than a fixed value. If a specific height value is provided, it will override the CSS variable and directly set the dropdown’s height.
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
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by the corresponding CSS variable (typically a custom property defined in your stylesheet). You can override this behavior by providing a specific width value (such as "200px", "50%", etc.), which will directly set the dropdown's width instead of relying on the CSS variable.
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
	    /** Specifies the expected type of information for the input element—such as a user's name, email, or address—and guides the browser on how to provide relevant autofill suggestions when the element is used within a form. This property maps directly to the standard HTML autocomplete attribute. By setting values like 'on', 'off', 'name', 'email', 'organization', or 'street-address', you can instruct the browser on whether, and how, to assist the user with automated form filling. Proper use of this property enhances both the accuracy and security of autofill features, as well as improving the overall user experience.
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
	    /** Specifies the maximum number of matching items to display in the dropdown menu when a new autoComplete query is performed. By default, up to 8 items will be visible in the dropdown at any one time. If more matches are found, only the first 8 will be shown, while additional results can be accessed through scrolling or pagination, depending on the implementation.
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
	    /** Gets or sets the 'unlockKey' property, which is a unique code required to activate or unlock the product's full features. Use this key to enable product access or retrieve the current key assigned to the product.
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
	    /** Specifies or retrieves the current language setting. This property works together with the messages property to display content or interface text in the selected language. When the language is set, the corresponding messages from the messages object will be used for localization.
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
	    /** A callback function that allows you to define a custom formatting for messages returned by the Localization Module, enabling you to modify message content, structure, or presentation before they are displayed or processed by your application.
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
	    /** Specifies or retrieves an object containing strings used for localization within the widget. This property allows you to define custom, translatable text for various user interface elements, ensuring that the widget can display content in different languages. It is used in combination with the locale property to adapt the widget's text to the selected language or regional setting.
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
	    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete feature activates. Once this threshold is reached, the dropdown will open and display a list of items that match the entered text.
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
	    /** Sets or retrieves the value of the element's name attribute. The name attribute uniquely identifies form elements when data is submitted to the server, enabling key-value pairs to be correctly processed. This is essential in HTML forms to ensure each input's data is associated with its corresponding name.
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
	    /** Specifies whether the dropdown menu is currently open (visible) or closed (hidden).
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
	    /** Specifies the placeholder text displayed inside the input field when it is empty, providing a hint or example of the expected input value to the user.
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
	    /** Controls whether the items in the drop-down menu are visually displayed as pill-shaped elements. When enabled, each item will have a rounded, pill-like appearance. When disabled, items will use the default style.
	    *	Property type: boolean
	    */
	    get pills() {
	        return this.nativeElement ? this.nativeElement.pills : undefined;
	    }
	    set pills(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pills = value;
	        }
	    }
	    /** Defines or retrieves the search query used to filter items in the data source. This query is utilized by the autoComplete operation to determine which items are displayed based on user input. If the value is set to an empty string, all items from the data source are shown and no filtering is applied.
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
	    /** Specifies the autocomplete query mode, which defines how user input is matched against available options during the autocomplete operation. This property selects the matching algorithm used to filter and suggest results based on the entered query, such as prefix matching, exact matching, or fuzzy searching.
	    *	Property type: MultiComboInputQueryMode | string
	    */
	    get queryMode() {
	        return this.nativeElement ? this.nativeElement.queryMode : undefined;
	    }
	    set queryMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.queryMode = value;
	        }
	    }
	    /** Determines whether the user can enter or edit text within the input field. When the dropDownButtonPosition property is set to either 'left' or 'right', the readonly property controls the component's behavior when a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing users to type custom values as well as select from the list.- If readonly is true, the element behaves as a DropDownList, restricting the user to select only from the available options without the ability to enter custom text.
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
	    /** Configures or retrieves the value that determines whether the element's alignment is adjusted to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element's layout and text direction are oriented to accommodate RTL reading order for proper localization.
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
	    /** Specifies the character or string used to separate individual tags within the input field. This delimiter defines how the input is parsed into distinct tags when users enter multiple values.
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
	    /** Specifies if selection is restricted to a single item at a time, preventing users from selecting multiple items simultaneously.
	    *	Property type: boolean
	    */
	    get singleSelect() {
	        return this.nativeElement ? this.nativeElement.singleSelect : undefined;
	    }
	    set singleSelect(value) {
	        if (this.nativeElement) {
	            this.nativeElement.singleSelect = value;
	        }
	    }
	    /** Controls the display of an extra option at the top of the options list, which enables users to select or deselect all items with a single action. When enabled, this option appears as the first item, providing a convenient way to manage the entire selection at once.
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
	    /** Gets or sets an array containing the currently selected values.  This property allows you to retrieve the list of selected items or update the selection by assigning a new array of values. Each value in the array corresponds to an item that has been selected.
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
	    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted from A to Z; if false, the original order will be preserved.
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
	    /** Specifies the sorting algorithm to be used when sort is enabled. Accepts either asc for ascending order or desc for descending order, determining how the data will be organized.
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
	    /** Specifies how selected items are displayed in the input field: either as individual tags for each selected item from the popup, or as a single tag that displays the total number of items selected.
	    *	Property type: MultiComboInputInputTagsMode | string
	    */
	    get inputTagsMode() {
	        return this.nativeElement ? this.nativeElement.inputTagsMode : undefined;
	    }
	    set inputTagsMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inputTagsMode = value;
	        }
	    }
	    /** Specifies the visual theme to apply to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styles, ensuring consistency with the application's design scheme.
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
	    /** Specifies the type of input that the field accepts, such as text, email, password, number, or date. The selected input type defines both the format of data that can be entered by the user and the behavior of the input field, including related validation and the appearance of the on-screen keyboard (on supported devices).
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
	    /** When set to true, this property prevents the element from receiving keyboard focus. As a result, users will not be able to navigate to the element using the Tab key or other keyboard navigation methods.
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
	    /** Sets or retrieves the current value of the element. When used as a setter, it assigns the specified value to the element (such as updating the text in an input field or the selected option in a dropdown). When used as a getter, it returns the element’s current value.
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
	        return ["animation", "autoCompleteDelay", "hideInputTagsCloseButton", "colorItems", "dataSource", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "pills", "query", "queryMode", "readonly", "rightToLeft", "separator", "singleSelect", "selectAll", "selectedValues", "sorted", "sortDirection", "inputTagsMode", "theme", "type", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu by hiding its content and updating its state to indicate that it is no longer visible or active.
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
	    /** Guarantees that the currently selected item remains within the visible area of the container, automatically scrolling as needed to bring the active item into view whenever selection changes.
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
	    /** Selects all the text within the input field. If the input field is set to readonly, the method will focus the element instead, since text selection is not allowed for readonly inputs.
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
	        return (React.createElement("smart-multi-combo-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.MultiComboInput = MultiComboInput;
	exports.default = MultiComboInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
