
"use client";

import '../source/modules/smart.textbox'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.textbox');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
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
    /** Determines whether promptChar can be entered as valid input by the user.
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
    /** Determines whether the input accepts characters only from the ASCII character set.
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
    /** Specifies whether the input should be focused when the page is loaded.
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
    /** Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
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
    /** Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
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
    /** Specifies the behavior on "Enter" key press. Default mode is "submit".
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
    /** Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
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
    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
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
    /** Determines whether new user input overwrites the existing input value or not.
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
    /** Sets label above the element. The label is always visible.
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
    /** Defines the mask for the input.
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
    /** Indicates whether all required fields of the mask have been populated or not.
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
    /** Indicates whether all required and optional fields of the mask have been populated or not.
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
    /** Determines the maximum number of characters that the user can enter.
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
    /** A string that appears inside the input when there's no value and mask.
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
    /** Determines the prompt char that is used for the mask of the element.
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
    /** If the element is readonly, the users cannot iteract with the element.
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
    /** Determines whether the parsing of user input should stop after the first invalid character or not.
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
    /** Specifies that the input must be filled in before submitting a form
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
    /** Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
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
    /** Determines whether hitting space character resets the currently selected value from the input or not.
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
    /** Specifies whether the value of the input will be selected on focus or not.
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
    /** Determines whether the value of the input should contain or not the prompt/literals of the mask.
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
    /** Sets or gets the value of the element.
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
    /** Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
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
    /** Focuses the element.
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
    /** Blurs the element.
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
            Smart.Render();
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

export { MaskedTextBox, Smart, MaskedTextBox as default };
