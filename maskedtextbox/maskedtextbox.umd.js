
require('../source/modules/smart.textbox');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maskedtextbox = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 MaskedTextBox uses a mask to control the input of the user.
	*/
	class MaskedTextBox extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'MaskedTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode for the element. When set to 'none', all animations are disabled for the element, resulting in immediate changes without any animated transitions. If another value is assigned, the corresponding animation mode will be applied, controlling how transitions or visual effects are rendered.
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
	    /** Checks if the specified promptChar character is recognized as a valid input, allowing the user to enter it into the field. If promptChar is considered valid, it will be accepted and processed as part of the user’s input; otherwise, it will be rejected.
	    *	Property type: boolean
	    */
	    get allowPromptAsInput() {
	        return this.nativeElement ? this.nativeElement.allowPromptAsInput : undefined;
	    }
	    set allowPromptAsInput(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowPromptAsInput = value;
	        }
	    }
	    /** Specifies whether the input field restricts user entries to characters within the standard ASCII character set (codes 0–127), excluding all non-ASCII symbols, accented letters, and characters from other languages.
	    *	Property type: boolean
	    */
	    get asciiOnly() {
	        return this.nativeElement ? this.nativeElement.asciiOnly : undefined;
	    }
	    set asciiOnly(value) {
	        if (this.nativeElement) {
	            this.nativeElement.asciiOnly = value;
	        }
	    }
	    /** Determines if the input element automatically receives focus when the page loads, allowing users to begin typing immediately without manually selecting the field.
	    *	Property type: boolean
	    */
	    get autoFocus() {
	        return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	    }
	    set autoFocus(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoFocus = value;
	        }
	    }
	    /** Controls whether the input mask is displayed or hidden when the input field receives or loses focus, regardless of whether a placeholder is specified. This setting applies even if no placeholder attribute is present on the input element.
	    *	Property type: boolean
	    */
	    get autoShowMask() {
	        return this.nativeElement ? this.nativeElement.autoShowMask : undefined;
	    }
	    set autoShowMask(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoShowMask = value;
	        }
	    }
	    /** Specifies whether formatting characters (such as literals and prompt symbols) included in an input mask are also copied to the clipboard when performing cut or copy operations. If enabled, both the user's input and the input mask characters will be included in the clipboard data; if disabled, only the user's input is copied.
	    *	Property type: MaskedTextBoxCutCopyMaskFormat | string
	    */
	    get cutCopyMaskFormat() {
	        return this.nativeElement ? this.nativeElement.cutCopyMaskFormat : undefined;
	    }
	    set cutCopyMaskFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.cutCopyMaskFormat = value;
	        }
	    }
	    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element appears dimmed and does not respond to user input.
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
	    /** Defines the action performed when the "Enter" key is pressed. Possible values include "submit" (submits the form), "newline" (inserts a new line), or "none" (no action). The default value is "submit".
	    *	Property type: EnterKeyBehavior | string
	    */
	    get enterKeyBehavior() {
	        return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	    }
	    set enterKeyBehavior(value) {
	        if (this.nativeElement) {
	            this.nativeElement.enterKeyBehavior = value;
	        }
	    }
	    /** Controls whether the prompt character in the input mask is hidden when the masked text box loses focus. When set to true, the prompt character will not be visible in the textbox after it loses focus; when set to false, the prompt character remains visible even when the textbox is not focused. This helps manage what users see when interacting with the masked input field.
	    *	Property type: boolean
	    */
	    get hidePromptOnLeave() {
	        return this.nativeElement ? this.nativeElement.hidePromptOnLeave : undefined;
	    }
	    set hidePromptOnLeave(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hidePromptOnLeave = value;
	        }
	    }
	    /** Displays supplementary helper text beneath the element. This hint appears exclusively when the element is focused, providing contextual guidance to the user during input or interaction. The helper text is hidden when the element is not focused, ensuring a clean interface when not needed.
	    *	Property type: string
	    */
	    get hint() {
	        return this.nativeElement ? this.nativeElement.hint : undefined;
	    }
	    set hint(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hint = value;
	        }
	    }
	    /** Specifies whether new user input will replace the current input value entirely, or if it will be appended to or combined with the existing value. When enabled, any new input overwrites the existing content; when disabled, new input is added to the existing value without removing it.
	    *	Property type: boolean
	    */
	    get isOverwriteMode() {
	        return this.nativeElement ? this.nativeElement.isOverwriteMode : undefined;
	    }
	    set isOverwriteMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.isOverwriteMode = value;
	        }
	    }
	    /** Displays a label positioned above the element. The label remains constantly visible, providing clear identification for the associated element at all times.
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
	    /** Defines or retrieves the unlockKey, a unique identifier or code required to activate and access the product's full features.
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
	    /** Specifies or retrieves the current language setting for the application or component. This property determines which set of localized messages from the messages object will be used for display, enabling support for multiple languages. When you set the language, the corresponding message translations from the messages property are applied automatically.
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
	    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify translated strings—such as injecting dynamic values, changing case, or applying additional formatting—before they are displayed to users.
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
	    /** Specifies the input mask pattern that determines the allowed format and structure of user input. This ensures that the entered data matches the required criteria, such as a phone number, date, or custom format.
	    *	Property type: string
	    */
	    get mask() {
	        return this.nativeElement ? this.nativeElement.mask : undefined;
	    }
	    set mask(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mask = value;
	        }
	    }
	    /** Specifies whether every required field defined by the mask has been filled in with valid data. Returns true if all required fields are populated; otherwise, returns false.
	    *	Property type: boolean
	    */
	    get maskCompleted() {
	        return this.nativeElement ? this.nativeElement.maskCompleted : undefined;
	    }
	    set maskCompleted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maskCompleted = value;
	        }
	    }
	    /** Specifies whether every required and optional field defined by the mask has been filled with a value. If true, all fields that the mask references are populated; if false, at least one referenced field remains unset.
	    *	Property type: boolean
	    */
	    get maskFull() {
	        return this.nativeElement ? this.nativeElement.maskFull : undefined;
	    }
	    set maskFull(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maskFull = value;
	        }
	    }
	    /** Specifies the upper limit on the number of characters that a user is allowed to input. If the user attempts to enter more characters than this limit, additional input will be prevented or ignored. This property is commonly used in form fields to enforce data length constraints and ensure consistent data entry.
	    *	Property type: number
	    */
	    get maxLength() {
	        return this.nativeElement ? this.nativeElement.maxLength : undefined;
	    }
	    set maxLength(value) {
	        if (this.nativeElement) {
	            this.nativeElement.maxLength = value;
	        }
	    }
	    /** Defines or retrieves an object containing customizable text strings used within the widget, allowing for localization of user interface elements. This property works in conjunction with the locale property to provide translations and adapt the widget's display language to different regions or languages. Use this to specify or override default labels, messages, or prompts shown in the widget.
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
	    /** Sets or retrieves the value of the element's name attribute. The name attribute identifies the element within an HTML form, ensuring its value is included in the form data sent to the server upon submission. This is essential for correctly processing user input on the backend.
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
	    /** Specifies the placeholder text displayed in the input field when both the value and mask properties are unset or empty. This text provides users with a hint or example of the expected input format until they enter a value.
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
	    /** Specifies the character used as the placeholder in the input mask for the element. This character indicates where user input is expected within the input field.
	    *	Property type: string
	    */
	    get promptChar() {
	        return this.nativeElement ? this.nativeElement.promptChar : undefined;
	    }
	    set promptChar(value) {
	        if (this.nativeElement) {
	            this.nativeElement.promptChar = value;
	        }
	    }
	    /** When the element is set to readonly, users can view its content but cannot modify or interact with it in any way. This ensures that the element’s value remains unchanged by user input, while still being visible on the page.
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
	    /** Specifies whether the parsing process should immediately halt upon encountering the first invalid character in the user input, or continue attempting to parse the remaining input.
	    *	Property type: boolean
	    */
	    get rejectInputOnFirstFailure() {
	        return this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure : undefined;
	    }
	    set rejectInputOnFirstFailure(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rejectInputOnFirstFailure = value;
	        }
	    }
	    /** Indicates that this input field is required and cannot be left empty; users must provide a value before the form can be successfully submitted.
	    *	Property type: boolean
	    */
	    get required() {
	        return this.nativeElement ? this.nativeElement.required : undefined;
	    }
	    set required(value) {
	        if (this.nativeElement) {
	            this.nativeElement.required = value;
	        }
	    }
	    /** Controls whether entering a character in the input field that matches the prompt character will reset the currently selected value. This setting is relevant only when allowPromptAsInput is enabled, meaning the prompt character can be used as user input. When enabled, if the user types the prompt character, the input’s selected value will be cleared; otherwise, the value remains unchanged.
	    *	Property type: boolean
	    */
	    get resetOnPrompt() {
	        return this.nativeElement ? this.nativeElement.resetOnPrompt : undefined;
	    }
	    set resetOnPrompt(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resetOnPrompt = value;
	        }
	    }
	    /** Specifies whether pressing the spacebar will clear the currently selected value in the input field. When set to true, pressing the space key will reset (clear) the selection; when set to false, the value remains unchanged.
	    *	Property type: boolean
	    */
	    get resetOnSpace() {
	        return this.nativeElement ? this.nativeElement.resetOnSpace : undefined;
	    }
	    set resetOnSpace(value) {
	        if (this.nativeElement) {
	            this.nativeElement.resetOnSpace = value;
	        }
	    }
	    /** Specifies or retrieves a Boolean value that determines whether the element’s content is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew. When set to true, the element’s text direction and alignment are adjusted to display content appropriately for RTL locales.
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
	    /** Determines if the entire value of the input field will be automatically highlighted (selected) when the input receives focus, allowing users to easily replace or copy the existing content.
	    *	Property type: boolean
	    */
	    get selectAllOnFocus() {
	        return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	    }
	    set selectAllOnFocus(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectAllOnFocus = value;
	        }
	    }
	    /** Specifies whether the value entered in the input field should include or exclude the static characters (prompts and literals) defined by the input mask. When enabled, the resulting value will contain these mask characters; otherwise, only the user input (without mask characters) will be stored.
	    *	Property type: MaskedTextBoxTextMaskFormat | string
	    */
	    get textMaskFormat() {
	        return this.nativeElement ? this.nativeElement.textMaskFormat : undefined;
	    }
	    set textMaskFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.textMaskFormat = value;
	        }
	    }
	    /** Specifies the visual theme to be applied. The theme controls the overall appearance—including colors, fonts, and style—of the element, ensuring a consistent and customizable look and feel.
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
	    /** If this property is set to true, the element will be excluded from keyboard navigation and cannot receive focus, either by tabbing or programmatically.
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
	    /** Gets the current value of the element or sets a new value for the element, depending on how the method is used. When called without arguments, it returns the element's current value. When provided with a value as an argument, it updates the element with the specified value. Commonly used with form input elements.
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
	    /** A callback function that enables you to define custom validation logic for the input value. This function receives the input value as an argument and should return a boolean value: return true if the value is considered valid, or false if it is invalid. If the function returns false, the input will be treated as invalid and may trigger corresponding validation error messages or prevent form submission. Use this to implement validations that go beyond the default rules.
	    *	Property type: any
	    */
	    get validation() {
	        return this.nativeElement ? this.nativeElement.validation : undefined;
	    }
	    set validation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validation = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "allowPromptAsInput", "asciiOnly", "autoFocus", "autoShowMask", "cutCopyMaskFormat", "disabled", "enterKeyBehavior", "hidePromptOnLeave", "hint", "isOverwriteMode", "label", "unlockKey", "locale", "localizeFormatFunction", "mask", "maskCompleted", "maskFull", "maxLength", "messages", "name", "placeholder", "promptChar", "readonly", "rejectInputOnFirstFailure", "required", "resetOnPrompt", "resetOnSpace", "rightToLeft", "selectAllOnFocus", "textMaskFormat", "theme", "unfocusable", "value", "validation"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onChanging", "onValidation", "onCreate", "onReady"];
	    }
	    /** Sets keyboard and screen reader focus to the specified element, making it the active element for user interactions such as typing or accessibility navigation.
	    */
	    focus() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.focus();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.focus();
	            });
	        }
	    }
	    /** Applies a blur effect to the element, causing its content and any child elements to appear out of focus by softening edges and details. The degree of blur can typically be adjusted to achieve the desired level of visual obscurity.
	    */
	    blur() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.blur();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.blur();
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
	        return (React.createElement("smart-masked-text-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.MaskedTextBox = MaskedTextBox;
	exports.default = MaskedTextBox;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
