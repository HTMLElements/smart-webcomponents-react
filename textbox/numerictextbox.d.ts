import React from "react";
import { NumericTextBoxProperties } from "./../index";
import { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength } from './../index';
export { NumericTextBoxProperties } from "./../index";
export { Animation, NumericTextBoxInputFormat, NumericTextBoxRadix, NumericTextBoxDisplayPosition, Validation, WordLength } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Otherwise, the selected mode determines how animations are displayed or executed within the component.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies or retrieves the character used as the decimal separator when formatting or parsing numeric values. This determines how fractional numbers are represented, for example, using a period ('.') or a comma (',') between the integer and fractional parts.
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Controls whether the jqxNumericTextBox component is active or inactive. When enabled, users can interact with and enter values in the numeric text box. When disabled, the component becomes read-only and user interaction is prevented.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the parent HTML element or container to which the Radix dropdown will be rendered or appended. This determines the dropdown's positioning context within the DOM and can affect its stacking, placement, and overflow behavior.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Controls whether a dropdown menu appears when the radix display button is clicked. If enabled, the dropdown presents selectable options for switching between different numeral systems: binary, octal, decimal, and hexadecimal. This allows users to easily change the numeral system used for number display or input.
    *	Property type: boolean
    */
    get dropDownEnabled(): boolean;
    set dropDownEnabled(value: boolean);
    /** Controls whether users can increase or decrease the value in the jqxNumericTextBox component by scrolling the mouse wheel. When enabled, scrolling the wheel while the input is focused will increment or decrement the numeric value accordingly. When disabled, mouse wheel actions will have no effect on the value.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Displays supplementary helper text below the element to provide users with additional information, guidance, or context related to the element's purpose or required input.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Specifies or retrieves the input format used by the widget. Modifying this property at runtime may result in a loss of precision, as existing data could be reformatted or truncated to fit the new format. It is recommended to set the input format during initialization to preserve data accuracy.
    *	Property type: NumericTextBoxInputFormat | string
    */
    get inputFormat(): NumericTextBoxInputFormat | string;
    set inputFormat(value: NumericTextBoxInputFormat | string);
    /** Displays a descriptive text label above the element to provide context or identify its purpose for users.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** When this property is enabled, the binary and hexadecimal representations of a number are automatically padded with leading zeros as needed to ensure their length matches the specified wordLength. This guarantees consistent output width, even for numbers whose standard representations would be shorter than wordLength.
    *	Property type: boolean
    */
    get leadingZeros(): boolean;
    set leadingZeros(value: boolean);
    /** Sets or retrieves the unlockKey used to activate and access the product’s full features. When provided, the unlockKey grants authorization to unlock the product; when requested, it returns the current unlock key in use.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which language is used for displaying localized content. It works together with the messages property, which should contain translations for each supported language. When the language is changed, the corresponding messages from the messages object are used for all localized text.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module. This function is typically invoked when localization events occur, such as language changes or updates to localized content, enabling the application to respond dynamically to these changes.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or retrieves the maximum allowable value for the widget. This defines the highest value that the widget can accept or display.
    *	Property type: number | string
    */
    get max(): number | string;
    set max(value: number | string);
    /** Defines or retrieves an object containing customizable text strings used within the widget, enabling localization of UI elements such as labels, messages, and tooltips. This property works together with the locale setting to display the widget's interface in different languages according to the user's preferences.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves the lowest allowable value that the widget can accept. This property determines the minimum limit for user input or programmatically set values.
    *	Property type: number | string
    */
    get min(): number | string;
    set min(value: number | string);
    /** Specifies the unique name assigned to the control element, which can be used to identify and reference the control within forms, scripts, or styles. This name is often utilized when processing form data or targeting the control with JavaScript or CSS.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the value property can be set to null or an empty string. When enabled, assigning null or "" to the value property is allowed; otherwise, such assignments are prevented or ignored. Use this setting to control how empty or unset values are handled.
    *	Property type: boolean
    */
    get nullable(): boolean;
    set nullable(value: boolean);
    /** Controls whether the radix dropdown menu is open or closed. This property can be set to open or close the dropdown programmatically, or read to determine its current state. It is effective only when dropDownEnabled is set to true; otherwise, the dropdown cannot be opened regardless of this property's value.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Defines or retrieves the display format pattern used to present the input value when the element is not in focus. The specified pattern determines how the value appears to the user (for example, adding commas, decimal places, or currency symbols) while not editing. You can apply any formatting string supported by the NumberRenderer class as the outputFormatString, allowing for customized number formats such as '0,0.00' for thousands separators and two decimal places.
    *	Property type: string
    */
    get outputFormatString(): string;
    set outputFormatString(value: string);
    /** Specifies the placeholder text that appears within the widget's input field when no value has been entered. This text provides a hint or example to guide the user on what kind of input is expected.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies the number of digits to display after the decimal point in numeric values. This setting is only applicable when inputFormat is set to either 'floatingPoint' or 'complex', ensuring precise control over decimal precision for these input types.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** Sets or retrieves the radix (base) used by the jqxNumericTextBox for displaying its value. The radix determines the numeral system (such as decimal, binary, octal, or hexadecimal) in which the numeric value is shown. This property is only applicable when the inputFormat is set to 'integer', allowing the widget to represent integers in different numeral systems based on the specified radix value.
    *	Property type: NumericTextBoxRadix | string
    */
    get radix(): NumericTextBoxRadix | string;
    set radix(value: NumericTextBoxRadix | string);
    /** Controls the visibility of the radix (base) selection button in the jqxNumericTextBox component. This option is relevant only when the inputFormat property is set to 'integer'. When enabled, users can toggle between different numeric bases (e.g., decimal, hexadecimal). When disabled, the radix selection button is hidden.
    *	Property type: boolean
    */
    get radixDisplay(): boolean;
    set radixDisplay(value: boolean);
    /** Gets or sets the position of the radix (decimal separator) display button in the jqxNumericTextBox component. This property determines where the button for selecting a radix is shown within the numeric input field (e.g., to the left or right of the input box).
    *	Property type: NumericTextBoxDisplayPosition | string
    */
    get radixDisplayPosition(): NumericTextBoxDisplayPosition | string;
    set radixDisplayPosition(value: NumericTextBoxDisplayPosition | string);
    /** Controls whether the jqxNumericTextBox is in a read-only state. When set to true, the user cannot modify the value; when set to false, the input can be edited. This property can be used to retrieve the current read-only status or to update it programmatically.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, such as for languages like Arabic or Hebrew. When enabled, the element will display its content aligned appropriately for RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls whether the output value is displayed using scientific notation (e.g., 1e+6 instead of 1000000). This option is only relevant when the inputFormat property is set to 'integer'. If enabled, large or small integer values will be formatted in scientific notation; if disabled, values will be displayed in standard numeric form.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** Controls whether the dropdown displays the current value simultaneously in all four numeral systems (binary, octal, decimal, and hexadecimal). If enabled, users will see the value represented in each numeral system option within the dropdown list.
    *	Property type: boolean
    */
    get showDropDownValues(): boolean;
    set showDropDownValues(value: boolean);
    /** Controls whether units are displayed or hidden in the user interface. When enabled, units will be visible; when disabled, units will be concealed from view.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Calculates the number of significant digits present in a given number. This operation is only valid when the inputFormat is set to either 'floatingPoint' or 'complex', ensuring that the input is a numerical value represented as a floating-point or complex number. Use this functionality to assess numerical precision and significance within these specific formats.
    *	Property type: number
    */
    get significantDigits(): number;
    set significantDigits(value: number);
    /** Controls whether the spin buttons (increment and decrement controls) are displayed or hidden in the input field. When enabled, users can adjust the value using these buttons; when disabled, the spin buttons are not visible.
    *	Property type: boolean
    */
    get spinButtons(): boolean;
    set spinButtons(value: boolean);
    /** Specifies the amount of time, in milliseconds, to wait between consecutive activations of the spin buttons when a user holds down the control. This determines how quickly the value will increment or decrement while the button is continuously pressed.
    *	Property type: number
    */
    get spinButtonsDelay(): number;
    set spinButtonsDelay(value: number);
    /** Specifies the amount of time, in milliseconds, to wait before starting the first repeated action when a spin button is held down. This initial delay determines how long the user must press and hold the button before automatic repeating begins.
    *	Property type: number
    */
    get spinButtonsInitialDelay(): number;
    set spinButtonsInitialDelay(value: number);
    /** Specifies or retrieves the location of the spin buttons (increment and decrement controls) on the jqxNumericTextBox component. This property allows you to control whether the spin buttons appear on the left, right, or another designated position within the input field.
    *	Property type: NumericTextBoxDisplayPosition | string
    */
    get spinButtonsPosition(): NumericTextBoxDisplayPosition | string;
    set spinButtonsPosition(value: NumericTextBoxDisplayPosition | string);
    /** Specifies or retrieves the increment or decrement value used when adjusting the control. This value determines by how much the value increases or decreases with each step (such as when using up/down arrows or stepper buttons).
    *	Property type: number | string
    */
    get spinButtonsStep(): number | string;
    set spinButtonsStep(value: number | string);
    /** Specifies the theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent visual design across the interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users cannot navigate to the element using the Tab key or other focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets or sets the name of the unit (such as "kg", "cm", "$", etc.) displayed in the jqxNumericTextBox widget. This property allows you to specify the unit label that appears alongside the numeric input, providing context for the entered value.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Enhances value validation using the specified minimum and maximum constraints.  - When set to 'strict', the value is continuously validated: any value outside the defined min or max boundaries is automatically corrected to the nearest valid value, regardless of how the value is updated (user interaction or programmatically).  - When set to 'interaction', validation only occurs through user interactions such as typing or dragging. Programmatic changes to the value are not coerced within the min or max range. Additionally, if the min or max limits are updated, and the current value falls outside the new range, it remains unchanged and no change event is triggered.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Sets or retrieves the current numeric value of the jqxNumericTextBox widget. When used as a setter, it updates the widget's displayed value to the specified number. When used as a getter, it returns the widget’s current numeric value. This function supports both setting and getting the value, depending on whether a parameter is provided.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Specifies or retrieves the word length when the inputFormat is set to 'integer'. This property is only relevant for integer inputs. If the min and/or max values are not explicitly defined, they will be automatically calculated based on the given word length—ensuring that the valid input range matches the specified number of bits.
    *	Property type: WordLength | string
    */
    get wordLength(): WordLength | string;
    set wordLength(value: WordLength | string);
    get properties(): string[];
    /**  This event is triggered whenever the value changes, whether due to user input or programmatic updates. It allows you to respond in real time when the value is modified.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the input value is modified by the user through actions such as typing on the keyboard or pasting text into the field. It detects changes in real-time as they occur, allowing you to respond immediately to user input.
    *  @param event. The custom event. 	*/
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after the dropdown menu has been closed by the user, either through selecting an option, clicking outside the dropdown, or using a keyboard action. Use this event to execute any actions or cleanup that should occur once the dropdown is no longer visible.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the dropdown menu is closed, giving you an opportunity to execute custom logic or prevent the closure. If you wish to stop the dropdown from closing, you can call event.preventDefault() within your event handler. This allows for conditional closing behavior based on your application's requirements.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dropdown menu becomes visible to the user, such as when the user clicks on the dropdown control or focuses on it using the keyboard.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the dropdown menu begins to open. If you need to prevent the dropdown from opening—for example, based on certain conditions—you can call event.preventDefault() within your event handler function. Doing so cancels the opening operation, allowing you to control when or whether the dropdown appears.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the radix value is modified by the user. It notifies listeners that the numerical base (such as decimal, binary, or hexadecimal) used for number input or display has been changed, allowing your application to update related components or recalculate values as necessary.
    *  @param event. The custom event. 	*/
    onRadixChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Sets the input focus to the NumericTextBox component, allowing users to immediately start entering numeric values. This method brings the NumericTextBox into active view, enabling keyboard interactions and improving accessibility.
    */
    focus(): void;
    /** Retrieves or updates the current numeric value displayed in the NumericTextBox component. Use this method to programmatically obtain the user-entered value or to set a new value within the control.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox.
    * @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation.
    * @returns {string}
  */
    val(value?: string | number, suppressValidation?: boolean): any;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default NumericTextBox;
