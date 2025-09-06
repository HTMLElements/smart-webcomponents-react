import React from "react";
import { NumberInputProperties } from "./../index";
import { Animation } from './../index';
export { NumberInputProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
export interface NumberInputProps extends NumberInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 NumberInput specifies an input field where the user can enter a numbers.
*/
export declare class NumberInput extends React.Component<React.HTMLAttributes<Element> & NumberInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Setting this property to other supported values enables specific animation behaviors as defined by the available modes.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive (disabled). When set to disabled, the element cannot be interacted with by users, and its associated actions or events will not trigger.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the intended purpose of the input field and indicates the level of permission granted to the user agent (such as a browser or password manager) to automatically assist in completing the input when used within a form. This attribute provides guidance to browsers about the type of data expected in the field, enabling features like autofill and enhanced accessibility. It corresponds to the standard HTML autocomplete attribute and accepts values such as 'on' (to enable autocomplete), 'off' (to disable autocomplete), or more specific tokens like 'name', 'email', 'organization', 'street-address', and others, enabling browsers to supply relevant information where appropriate. For a full list of valid values and their meanings, refer to the official HTML documentation for the autocomplete attribute.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Gets or sets the unlockKey, a unique string required to authenticate and unlock access to the product's features. Use this property to retrieve the current unlockKey or assign a new one to enable product usage.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., "en", "fr") used for localization. This property should be used together with the messages property, which contains the corresponding translated text for each supported language. Setting this value determines which set of messages will be displayed to the user.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify the structure, content, or appearance of localized messages before they are delivered to the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the maximum numeric value that the input field can accept or display. Any value entered that exceeds this limit will be considered invalid.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Defines or retrieves an object containing all the text strings used within the widget that can be localized. This enables the widget's user interface to display text in different languages, depending on the selected locale property. Use this object to provide translations for various widget messages, labels, and prompts to support internationalization.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum numerical value that users are allowed to enter or select within the input field. This value sets the lower limit for acceptable input, ensuring that any input below this threshold will be considered invalid.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements and is used as the key when submitting form data to a server. This allows the form data associated with this element to be sent and processed correctly when the form is submitted.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies or retrieves the format in which the element's value is represented. This determines how the value is displayed to the user and how it is processed or stored in the underlying data model.
    *	Property type: any
    */
    get numberFormat(): any;
    set numberFormat(value: any);
    /** Specifies the placeholder text that appears inside the input field before the user enters a value. This text provides a hint or example of the expected input format or content.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies whether the user is allowed to type or modify text within the input field. If set to false, the input becomes read-only and the user cannot enter or change its contents.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that determines whether the element’s text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element adjusts its layout and text flow to properly support RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies or retrieves the amount by which the element’s value increases or decreases when the user interacts with controls such as up/down arrows, sliders, or keyboard inputs. This determines the step interval for adjusting the element’s value.
    *	Property type: number
    */
    get step(): number;
    set step(value: number);
    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel across the element. Selecting a theme customizes the design and user experience of the component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to select the element using the Tab key or other keyboard navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Provides a way to retrieve (get) or assign (set) the current value of the element, typically used for form fields such as input, textarea, or select elements. When used as a getter, it returns the element's current value as a string. When used as a setter, it updates the element's value to the specified string.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered whenever the user selects a different item or modifies the current selection. It occurs each time the selection state changes, allowing you to respond dynamically to user interactions such as choosing an option from a dropdown menu, highlighting text, or switching between selectable elements.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Returns the value converted to the specified format, ensuring that the output matches the required data type or structure (e.g., string, number, JSON object, date format) as requested by the caller.
    * @param {string | number} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
    * @returns {string}
  */
    getFormattedValue(value: string | number, format?: any): any;
    /** Returns the numeric value corresponding to the given input. If the input is a number, it is returned as-is; if the input is a string or another type that can be converted to a number, its numeric equivalent is returned. If the input cannot be converted to a number, the function may return NaN or throw an error, depending on implementation.
    * @returns {number}
  */
    getValue(): any;
    /** Selects the entire text within the input field. If the input is set to readonly, the function will focus the element instead of selecting its text."
    */
    select(): void;
    /** Assigns a specified value to the input field, updating its displayed and underlying data. This ensures that the input reflects the current state or user-provided data within the form or component.
    * @param {string | number} value. The value to be set.
    */
    setValue(value: string | number): void;
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
export default NumberInput;
