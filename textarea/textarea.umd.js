
require('../source/modules/smart.textarea');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.textarea = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 TextArea specifies a textarea field where the user can enter data. Auto-complete options are displayed for easier input.
	*/
	class TextArea extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'TextArea' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in instant transitions with no visual effects. Otherwise, the property determines the type or style of animation used for transitions or dynamic effects.
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
	    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching results after the user initiates the autocomplete operation. This delay helps control how quickly the matches appear, improving user experience and performance when fetching or filtering suggestions.
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
	    /** Specifies the source of data to be loaded into the Input component. The dataSource can accept the following formats:- An array of strings or numbers, where each value will be used as a list item.- An array of objects, where each object represents a list item with specific properties such as label (display text) and value (underlying value).- A callback function that returns an array of items in one of the formats described above.This flexibility allows you to provide simple lists or more complex data structures for Input population, as well as load data asynchronously or dynamically when needed.
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
	    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element (e.g., click, type, or select). When disabled, the element is visible but does not respond to user interactions.
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
	    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This property controls where the dropdown button appears within the interface.
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
	    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height is determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown's height.
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
	    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string (""), which means the dropdown’s width will be determined by the associated CSS variable (typically via a custom property such as --dropdown-width). To override the default behavior, you can explicitly set a specific width (e.g., "200px", "100%", etc.), which will be applied directly to the dropdown. If left as an empty string, the component remains responsive to changes in the relevant CSS variable.
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
	    /** Defines the expected type of data for this input field and specifies whether, and to what extent, the browser or user agent is allowed to offer autofill assistance. This attribute aligns with the standard HTML autocomplete attribute, providing guidance to browsers for streamlining data entry and enhancing user experience. Acceptable values indicate the type of information anticipated, such as 'on' (enable autocomplete), 'off' (disable autocomplete), 'name' (full name), 'organization' (company or organization name), 'street-address' (street address), among others. Proper use of this attribute ensures accurate and secure autofill behavior in web forms.
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
	    /** Specifies the maximum number of items that can be displayed in the dropdown list when a new autoComplete query is performed. This setting controls how many matched results are visible to the user at one time within the dropdown. By default, up to 8 matching items will be shown in the dropdown menu.
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
	    /** Defines the 'unlockKey' property, which is used to retrieve or assign the unique key required to unlock access to the product. This property can be read to obtain the current unlock key or set to specify a new key for unlocking the product.
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
	    /** Specifies or retrieves the current language code, typically following ISO 639-1 standards (e.g., "en" for English, "fr" for French). This property is used alongside the messages property to determine which set of localized messages should be displayed or accessed based on the selected language.
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
	    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this function to modify or enhance the appearance, structure, or content of localized messages before they are delivered to the application.
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
	    /** Defines or retrieves an object containing text strings used within the widget that support localization. This property enables you to customize the widget’s displayed text for different languages or regions. It is typically used together with the locale property to provide translations and localize the widget’s interface.
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
	    /** Specifies the minimum number of characters a user must type into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will open and display a list of items that match the entered text.
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
	    /** Gets or sets the 'name' attribute of the element. The 'name' attribute assigns an identifier to the element, which is used when submitting form data. When a form is submitted, the value of each input element with a 'name' attribute is included in the form data, using the 'name' as the key. This allows server-side scripts to reference the data by name.
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
	    /** Specifies whether the dropdown menu is currently visible (open) or hidden (closed).
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
	    /** Specifies the placeholder text that appears inside the input field when it is empty, providing a hint or example to guide the user on what to enter.
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
	    /** Specifies or retrieves the search query used to filter items within the data source. This query determines which items are displayed during the autoComplete operation. If the query is an empty string, the filter is not applied, and all items from the data source will be shown.
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
	    /** Specifies the autocomplete query mode, which defines how user input is matched to suggestions. This property controls the underlying matching algorithm—such as prefix, infix, or fuzzy matching—used to generate autocomplete results, thereby influencing the relevance and style of suggestions presented to the user.
	    *	Property type: TextAreaQueryMode | string
	    */
	    get queryMode() {
	        return this.nativeElement ? this.nativeElement.queryMode : undefined;
	    }
	    set queryMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.queryMode = value;
	        }
	    }
	    /** Specifies whether the user can enter text into the input field. When the dropDownButtonPosition property is set to 'left' or 'right', the readonly property controls the component’s behavior—if a dataSource is provided:- When readonly is false, the input functions as a ComboBox, allowing users to both type custom values and select from the dropdown list.- When readonly is true, the input behaves as a DropDownList, restricting users to select only from the available options in the dropdown and preventing any text input.
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
	    /** Specifies whether the user is allowed to manually resize the Textarea component, enabling or disabling drag-to-resize functionality in the interface.
	    *	Property type: TextAreaResize | string
	    */
	    get resize() {
	        return this.nativeElement ? this.nativeElement.resize : undefined;
	    }
	    set resize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resize = value;
	        }
	    }
	    /** Sets or retrieves a value that determines whether the element’s alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, this property ensures that text direction and layout are suitable for locales that use right-to-left scripts.
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
	    /** Allows you to toggle rich text formatting on or off, enabling users to apply styles such as bold, italics, lists, and other text enhancements when enabled, or restricting input to plain text when disabled.
	    *	Property type: boolean
	    */
	    get richText() {
	        return this.nativeElement ? this.nativeElement.richText : undefined;
	    }
	    set richText(value) {
	        if (this.nativeElement) {
	            this.nativeElement.richText = value;
	        }
	    }
	    /** Specifies whether the items are arranged in alphabetical order. When set to true, the items will be automatically sorted from A to Z based on their names or labels; when set to false, the items will retain their original order as provided.
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
	    /** Specifies the sorting order to be applied when the sort option is enabled. Accepts either ascending (asc) to sort items from lowest to highest, or descending (desc) to sort items from highest to lowest.
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
	    /** Specifies the visual theme applied to the element. The selected theme controls the appearance, including colors, fonts, and overall styling, ensuring a consistent look and feel across the element's user interface.
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
	    /** Specifies the type of data that the input field accepts (e.g., text, number, email, password). Setting the input type helps control the kind of information users can enter, enables appropriate on-screen keyboards on mobile devices, and allows browsers to provide built-in validation for certain data formats.
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
	    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible to navigate to the element using the Tab key or programmatic focus methods (such as element.focus()).
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
	    /** Defines the list of users available for mentioning in the TextArea component. Expects an array where each element is an object containing both id and name properties (e.g., { id: string | number, name: string }). When users type the '@' character, a dropdown appears, allowing them to select a user from this array to mention within the TextArea.
	    *	Property type: any[]
	    */
	    get users() {
	        return this.nativeElement ? this.nativeElement.users : undefined;
	    }
	    set users(value) {
	        if (this.nativeElement) {
	            this.nativeElement.users = value;
	        }
	    }
	    /** Sets or retrieves the current value of the element, allowing you to programmatically update or access the element's value property. This is commonly used for form controls such as input, select, and textarea elements.
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
	        return ["animation", "autoCompleteDelay", "dataSource", "disabled", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "resize", "rightToLeft", "richText", "sorted", "sortDirection", "theme", "type", "unfocusable", "users", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onChanging", "onCreate", "onReady"];
	    }
	    /** Closes the dropdown menu, hiding its list of selectable options from view.
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
	    /** Guarantees that the currently active (selected) item remains in view within the scrollable area, automatically scrolling as needed to prevent it from being hidden or obscured.
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
	    /** Returns an array containing information about all users who are mentioned (e.g., with “@username”) within the value of the Textarea. Each user object in the array represents a unique user mention detected in the Textarea's current content.
	    * @returns {any[]}
	  */
	    getMentions() {
	        const result = this.nativeElement.getMentions();
	        return result;
	    }
	    /** Expands the drop-down menu, displaying its list of selectable options to the user.
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
	    /** Enhances user interaction with input elements by selecting all the text within the input field. If the input element has the readonly attribute, the function instead sets focus on the element without selecting the text, since selection is not allowed for readonly inputs. This ensures an appropriate response whether the input is editable or not.
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
	        return (React.createElement("smart-text-area", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.TextArea = TextArea;
	exports.default = TextArea;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
