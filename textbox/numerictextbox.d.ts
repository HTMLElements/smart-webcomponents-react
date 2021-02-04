import React from "react";
import { NumericTextBoxProperties } from "./../index";
import { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength } from './../index';
export { NumericTextBoxProperties } from "./../index";
export { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength } from './../index';
export declare const Smart: any;
export interface NumericTextBoxProps extends NumericTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onRadixChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
export declare class NumericTextBox extends React.Component<React.HTMLAttributes<Element> & NumericTextBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the char to use as the decimal separator in numeric values.
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Enables or disables the jqxNumericTextBox.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the parent container of the radix dropdown.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems.
    *	Property type: boolean
    */
    get dropDownEnabled(): boolean;
    set dropDownEnabled(value: boolean);
    /** Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Sets additional helper text below the element.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss.
    *	Property type: NumericTextBoxInputFormat
    */
    get inputFormat(): NumericTextBoxInputFormat;
    set inputFormat(value: NumericTextBoxInputFormat);
    /** Sets a label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength.
    *	Property type: boolean
    */
    get leadingZeros(): boolean;
    set leadingZeros(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets the maximum value of the widget.
    *	Property type: number | string
    */
    get max(): number | string;
    set max(value: number | string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the minimum value of the widget.
    *	Property type: number | string
    */
    get min(): number | string;
    set min(value: number | string);
    /** The name of the control.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Enables or disables the setting of the value property to null or empty string.
    *	Property type: boolean
    */
    get nullable(): boolean;
    set nullable(value: boolean);
    /** Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString.
    *	Property type: string
    */
    get outputFormatString(): string;
    set outputFormatString(value: string);
    /** Determines the widget's place holder displayed when the widget's input is empty.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'.
    *	Property type: NumericTextBoxRadix
    */
    get radix(): NumericTextBoxRadix;
    set radix(value: NumericTextBoxRadix);
    /** Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'.
    *	Property type: boolean
    */
    get radixDisplay(): boolean;
    set radixDisplay(value: boolean);
    /** Sets or gets the position of the radix display button of the jqxNumericTextBox.
    *	Property type: NumericTextBoxDisplayPosition
    */
    get radixDisplayPosition(): NumericTextBoxDisplayPosition;
    set radixDisplayPosition(value: NumericTextBoxDisplayPosition);
    /** Sets or gets the readonly state of the jqxNumericTextBox.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** Determines whether to show the current value represented in all four numeral systems in the drop down.
    *	Property type: boolean
    */
    get showDropDownValues(): boolean;
    set showDropDownValues(value: boolean);
    /** Enables or disables the visibility of the units.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'.
    *	Property type: number
    */
    get significantDigits(): number;
    set significantDigits(value: number);
    /** Enables or disables the visibility of the spin buttons.
    *	Property type: boolean
    */
    get spinButtons(): boolean;
    set spinButtons(value: boolean);
    /** Sets the delay between repeats of spin buttons in miliseconds.
    *	Property type: number
    */
    get spinButtonsDelay(): number;
    set spinButtonsDelay(value: number);
    /** Sets a delay before the first repeat iteration of spin buttons in miliseconds.
    *	Property type: number
    */
    get spinButtonsInitialDelay(): number;
    set spinButtonsInitialDelay(value: number);
    /** Sets or gets the position of the spin buttons of the jqxNumericTextBox.
    *	Property type: NumericTextBoxDisplayPosition
    */
    get spinButtonsPosition(): NumericTextBoxDisplayPosition;
    set spinButtonsPosition(value: NumericTextBoxDisplayPosition);
    /** Sets or gets the increase/decrease step.
    *	Property type: number | string
    */
    get spinButtonsStep(): number | string;
    set spinButtonsStep(value: number | string);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the name of unit used in jqxNumericTextBox widget.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
    *	Property type: Validation
    */
    get validation(): Validation;
    set validation(value: Validation);
    /** Sets or gets the value of the jqxNumericTextBox widget.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length.
    *	Property type: WordLength
    */
    get wordLength(): WordLength;
    set wordLength(value: WordLength);
    get properties(): string[];
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the value in the input is being changed via keypress or paste.
    *  @param event. The custom event. 	*/
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the radix is changed.
    *  @param event. The custom event. 	*/
    onRadixChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Focuses the NumericTextBox.
    */
    focus(): void;
    /** Get/set the value of the NumericTextBox.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    val(value?: string | number, suppressValidation?: boolean): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default NumericTextBox;
