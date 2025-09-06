
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
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
class NumericTextBox extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'NumericTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Otherwise, the selected mode determines how animations are displayed or executed within the component.
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
    /** Specifies or retrieves the character used as the decimal separator when formatting or parsing numeric values. This determines how fractional numbers are represented, for example, using a period ('.') or a comma (',') between the integer and fractional parts.
    *	Property type: string
    */
    get decimalSeparator() {
        return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
    }
    set decimalSeparator(value) {
        if (this.nativeElement) {
            this.nativeElement.decimalSeparator = value;
        }
    }
    /** Controls whether the jqxNumericTextBox component is active or inactive. When enabled, users can interact with and enter values in the numeric text box. When disabled, the component becomes read-only and user interaction is prevented.
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
    /** Specifies the parent HTML element or container to which the Radix dropdown will be rendered or appended. This determines the dropdown's positioning context within the DOM and can affect its stacking, placement, and overflow behavior.
    *	Property type: any
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** Controls whether a dropdown menu appears when the radix display button is clicked. If enabled, the dropdown presents selectable options for switching between different numeral systems: binary, octal, decimal, and hexadecimal. This allows users to easily change the numeral system used for number display or input.
    *	Property type: boolean
    */
    get dropDownEnabled() {
        return this.nativeElement ? this.nativeElement.dropDownEnabled : undefined;
    }
    set dropDownEnabled(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownEnabled = value;
        }
    }
    /** Controls whether users can increase or decrease the value in the jqxNumericTextBox component by scrolling the mouse wheel. When enabled, scrolling the wheel while the input is focused will increment or decrement the numeric value accordingly. When disabled, mouse wheel actions will have no effect on the value.
    *	Property type: boolean
    */
    get enableMouseWheelAction() {
        return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
    }
    set enableMouseWheelAction(value) {
        if (this.nativeElement) {
            this.nativeElement.enableMouseWheelAction = value;
        }
    }
    /** Displays supplementary helper text below the element to provide users with additional information, guidance, or context related to the element's purpose or required input.
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
    /** Specifies or retrieves the input format used by the widget. Modifying this property at runtime may result in a loss of precision, as existing data could be reformatted or truncated to fit the new format. It is recommended to set the input format during initialization to preserve data accuracy.
    *	Property type: NumericTextBoxInputFormat | string
    */
    get inputFormat() {
        return this.nativeElement ? this.nativeElement.inputFormat : undefined;
    }
    set inputFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.inputFormat = value;
        }
    }
    /** Displays a descriptive text label above the element to provide context or identify its purpose for users.
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
    /** When this property is enabled, the binary and hexadecimal representations of a number are automatically padded with leading zeros as needed to ensure their length matches the specified wordLength. This guarantees consistent output width, even for numbers whose standard representations would be shorter than wordLength.
    *	Property type: boolean
    */
    get leadingZeros() {
        return this.nativeElement ? this.nativeElement.leadingZeros : undefined;
    }
    set leadingZeros(value) {
        if (this.nativeElement) {
            this.nativeElement.leadingZeros = value;
        }
    }
    /** Sets or retrieves the unlockKey used to activate and access the product’s full features. When provided, the unlockKey grants authorization to unlock the product; when requested, it returns the current unlock key in use.
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
    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which language is used for displaying localized content. It works together with the messages property, which should contain translations for each supported language. When the language is changed, the corresponding messages from the messages object are used for all localized text.
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
    /** Callback function associated with the localization module. This function is typically invoked when localization events occur, such as language changes or updates to localized content, enabling the application to respond dynamically to these changes.
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
    /** Sets or retrieves the maximum allowable value for the widget. This defines the highest value that the widget can accept or display.
    *	Property type: number | string
    */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        if (this.nativeElement) {
            this.nativeElement.max = value;
        }
    }
    /** Defines or retrieves an object containing customizable text strings used within the widget, enabling localization of UI elements such as labels, messages, and tooltips. This property works together with the locale setting to display the widget's interface in different languages according to the user's preferences.
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
    /** Defines or retrieves the lowest allowable value that the widget can accept. This property determines the minimum limit for user input or programmatically set values.
    *	Property type: number | string
    */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        if (this.nativeElement) {
            this.nativeElement.min = value;
        }
    }
    /** Specifies the unique name assigned to the control element, which can be used to identify and reference the control within forms, scripts, or styles. This name is often utilized when processing form data or targeting the control with JavaScript or CSS.
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
    /** Determines whether the value property can be set to null or an empty string. When enabled, assigning null or "" to the value property is allowed; otherwise, such assignments are prevented or ignored. Use this setting to control how empty or unset values are handled.
    *	Property type: boolean
    */
    get nullable() {
        return this.nativeElement ? this.nativeElement.nullable : undefined;
    }
    set nullable(value) {
        if (this.nativeElement) {
            this.nativeElement.nullable = value;
        }
    }
    /** Controls whether the radix dropdown menu is open or closed. This property can be set to open or close the dropdown programmatically, or read to determine its current state. It is effective only when dropDownEnabled is set to true; otherwise, the dropdown cannot be opened regardless of this property's value.
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
    /** Defines or retrieves the display format pattern used to present the input value when the element is not in focus. The specified pattern determines how the value appears to the user (for example, adding commas, decimal places, or currency symbols) while not editing. You can apply any formatting string supported by the NumberRenderer class as the outputFormatString, allowing for customized number formats such as '0,0.00' for thousands separators and two decimal places.
    *	Property type: string
    */
    get outputFormatString() {
        return this.nativeElement ? this.nativeElement.outputFormatString : undefined;
    }
    set outputFormatString(value) {
        if (this.nativeElement) {
            this.nativeElement.outputFormatString = value;
        }
    }
    /** Specifies the placeholder text that appears within the widget's input field when no value has been entered. This text provides a hint or example to guide the user on what kind of input is expected.
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
    /** Specifies the number of digits to display after the decimal point in numeric values. This setting is only applicable when inputFormat is set to either 'floatingPoint' or 'complex', ensuring precise control over decimal precision for these input types.
    *	Property type: number
    */
    get precisionDigits() {
        return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
    }
    set precisionDigits(value) {
        if (this.nativeElement) {
            this.nativeElement.precisionDigits = value;
        }
    }
    /** Sets or retrieves the radix (base) used by the jqxNumericTextBox for displaying its value. The radix determines the numeral system (such as decimal, binary, octal, or hexadecimal) in which the numeric value is shown. This property is only applicable when the inputFormat is set to 'integer', allowing the widget to represent integers in different numeral systems based on the specified radix value.
    *	Property type: NumericTextBoxRadix | string
    */
    get radix() {
        return this.nativeElement ? this.nativeElement.radix : undefined;
    }
    set radix(value) {
        if (this.nativeElement) {
            this.nativeElement.radix = value;
        }
    }
    /** Controls the visibility of the radix (base) selection button in the jqxNumericTextBox component. This option is relevant only when the inputFormat property is set to 'integer'. When enabled, users can toggle between different numeric bases (e.g., decimal, hexadecimal). When disabled, the radix selection button is hidden.
    *	Property type: boolean
    */
    get radixDisplay() {
        return this.nativeElement ? this.nativeElement.radixDisplay : undefined;
    }
    set radixDisplay(value) {
        if (this.nativeElement) {
            this.nativeElement.radixDisplay = value;
        }
    }
    /** Gets or sets the position of the radix (decimal separator) display button in the jqxNumericTextBox component. This property determines where the button for selecting a radix is shown within the numeric input field (e.g., to the left or right of the input box).
    *	Property type: NumericTextBoxDisplayPosition | string
    */
    get radixDisplayPosition() {
        return this.nativeElement ? this.nativeElement.radixDisplayPosition : undefined;
    }
    set radixDisplayPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.radixDisplayPosition = value;
        }
    }
    /** Controls whether the jqxNumericTextBox is in a read-only state. When set to true, the user cannot modify the value; when set to false, the input can be edited. This property can be used to retrieve the current read-only status or to update it programmatically.
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
    /** Sets or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, such as for languages like Arabic or Hebrew. When enabled, the element will display its content aligned appropriately for RTL locales.
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
    /** Controls whether the output value is displayed using scientific notation (e.g., 1e+6 instead of 1000000). This option is only relevant when the inputFormat property is set to 'integer'. If enabled, large or small integer values will be formatted in scientific notation; if disabled, values will be displayed in standard numeric form.
    *	Property type: boolean
    */
    get scientificNotation() {
        return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
    }
    set scientificNotation(value) {
        if (this.nativeElement) {
            this.nativeElement.scientificNotation = value;
        }
    }
    /** Controls whether the dropdown displays the current value simultaneously in all four numeral systems (binary, octal, decimal, and hexadecimal). If enabled, users will see the value represented in each numeral system option within the dropdown list.
    *	Property type: boolean
    */
    get showDropDownValues() {
        return this.nativeElement ? this.nativeElement.showDropDownValues : undefined;
    }
    set showDropDownValues(value) {
        if (this.nativeElement) {
            this.nativeElement.showDropDownValues = value;
        }
    }
    /** Controls whether units are displayed or hidden in the user interface. When enabled, units will be visible; when disabled, units will be concealed from view.
    *	Property type: boolean
    */
    get showUnit() {
        return this.nativeElement ? this.nativeElement.showUnit : undefined;
    }
    set showUnit(value) {
        if (this.nativeElement) {
            this.nativeElement.showUnit = value;
        }
    }
    /** Calculates the number of significant digits present in a given number. This operation is only valid when the inputFormat is set to either 'floatingPoint' or 'complex', ensuring that the input is a numerical value represented as a floating-point or complex number. Use this functionality to assess numerical precision and significance within these specific formats.
    *	Property type: number
    */
    get significantDigits() {
        return this.nativeElement ? this.nativeElement.significantDigits : undefined;
    }
    set significantDigits(value) {
        if (this.nativeElement) {
            this.nativeElement.significantDigits = value;
        }
    }
    /** Controls whether the spin buttons (increment and decrement controls) are displayed or hidden in the input field. When enabled, users can adjust the value using these buttons; when disabled, the spin buttons are not visible.
    *	Property type: boolean
    */
    get spinButtons() {
        return this.nativeElement ? this.nativeElement.spinButtons : undefined;
    }
    set spinButtons(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtons = value;
        }
    }
    /** Specifies the amount of time, in milliseconds, to wait between consecutive activations of the spin buttons when a user holds down the control. This determines how quickly the value will increment or decrement while the button is continuously pressed.
    *	Property type: number
    */
    get spinButtonsDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
    }
    set spinButtonsDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsDelay = value;
        }
    }
    /** Specifies the amount of time, in milliseconds, to wait before starting the first repeated action when a spin button is held down. This initial delay determines how long the user must press and hold the button before automatic repeating begins.
    *	Property type: number
    */
    get spinButtonsInitialDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
    }
    set spinButtonsInitialDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsInitialDelay = value;
        }
    }
    /** Specifies or retrieves the location of the spin buttons (increment and decrement controls) on the jqxNumericTextBox component. This property allows you to control whether the spin buttons appear on the left, right, or another designated position within the input field.
    *	Property type: NumericTextBoxDisplayPosition | string
    */
    get spinButtonsPosition() {
        return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
    }
    set spinButtonsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsPosition = value;
        }
    }
    /** Specifies or retrieves the increment or decrement value used when adjusting the control. This value determines by how much the value increases or decreases with each step (such as when using up/down arrows or stepper buttons).
    *	Property type: number | string
    */
    get spinButtonsStep() {
        return this.nativeElement ? this.nativeElement.spinButtonsStep : undefined;
    }
    set spinButtonsStep(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsStep = value;
        }
    }
    /** Specifies the theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent visual design across the interface.
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
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users cannot navigate to the element using the Tab key or other focus methods.
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
    /** Gets or sets the name of the unit (such as "kg", "cm", "$", etc.) displayed in the jqxNumericTextBox widget. This property allows you to specify the unit label that appears alongside the numeric input, providing context for the entered value.
    *	Property type: string
    */
    get unit() {
        return this.nativeElement ? this.nativeElement.unit : undefined;
    }
    set unit(value) {
        if (this.nativeElement) {
            this.nativeElement.unit = value;
        }
    }
    /** Enhances value validation using the specified minimum and maximum constraints.  - When set to 'strict', the value is continuously validated: any value outside the defined min or max boundaries is automatically corrected to the nearest valid value, regardless of how the value is updated (user interaction or programmatically).  - When set to 'interaction', validation only occurs through user interactions such as typing or dragging. Programmatic changes to the value are not coerced within the min or max range. Additionally, if the min or max limits are updated, and the current value falls outside the new range, it remains unchanged and no change event is triggered.
    *	Property type: Validation | string
    */
    get validation() {
        return this.nativeElement ? this.nativeElement.validation : undefined;
    }
    set validation(value) {
        if (this.nativeElement) {
            this.nativeElement.validation = value;
        }
    }
    /** Sets or retrieves the current numeric value of the jqxNumericTextBox widget. When used as a setter, it updates the widget's displayed value to the specified number. When used as a getter, it returns the widget’s current numeric value. This function supports both setting and getting the value, depending on whether a parameter is provided.
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
    /** Specifies or retrieves the word length when the inputFormat is set to 'integer'. This property is only relevant for integer inputs. If the min and/or max values are not explicitly defined, they will be automatically calculated based on the given word length—ensuring that the valid input range matches the specified number of bits.
    *	Property type: WordLength | string
    */
    get wordLength() {
        return this.nativeElement ? this.nativeElement.wordLength : undefined;
    }
    set wordLength(value) {
        if (this.nativeElement) {
            this.nativeElement.wordLength = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "decimalSeparator", "disabled", "dropDownAppendTo", "dropDownEnabled", "enableMouseWheelAction", "hint", "inputFormat", "label", "leadingZeros", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "name", "nullable", "opened", "outputFormatString", "placeholder", "precisionDigits", "radix", "radixDisplay", "radixDisplayPosition", "readonly", "rightToLeft", "scientificNotation", "showDropDownValues", "showUnit", "significantDigits", "spinButtons", "spinButtonsDelay", "spinButtonsInitialDelay", "spinButtonsPosition", "spinButtonsStep", "theme", "unfocusable", "unit", "validation", "value", "wordLength"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onChanging", "onClose", "onClosing", "onOpen", "onOpening", "onRadixChange", "onCreate", "onReady"];
    }
    /** Sets the input focus to the NumericTextBox component, allowing users to immediately start entering numeric values. This method brings the NumericTextBox into active view, enabling keyboard interactions and improving accessibility.
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
    /** Retrieves or updates the current numeric value displayed in the NumericTextBox component. Use this method to programmatically obtain the user-entered value or to set a new value within the control.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    val(value, suppressValidation) {
        const result = this.nativeElement.val(value, suppressValidation);
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
        return (React.createElement("smart-numeric-text-box", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { NumericTextBox, Smart, NumericTextBox as default };
