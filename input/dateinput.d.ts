import React from "react";
import { DateInputProperties } from "./../index";
import { DropDownButtonPosition } from './../index';
export { DateInputProperties } from "./../index";
export { DropDownButtonPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface DateInputProps extends DateInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DateInput specifies an input field where the user can enter a date. It also has a popup with a Calendar that allows to pick a date.
*/
export declare class DateInput extends React.Component<React.HTMLAttributes<Element> & DateInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it.
    *	Property type: boolean
    */
    get autoClose(): boolean;
    set autoClose(value: boolean);
    /** Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Determines the calendar properties to be set to the popup calendar.
    *	Property type: any
    */
    get calendarProperties(): any;
    set calendarProperties(value: any);
    /** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. Intl.DateTimeFormat is used to format date strings in JavaScript. By default the date format is 'numeric'. The default value is: { day: 'numeric', month: 'numeric', year: 'numeric' }
    *	Property type: any
    */
    get dateTimeFormat(): any;
    set dateTimeFormat(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Sets the height of the drop down. By default it's set to 'auto'.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Sets the format string. When this property is set, the dateTimeFormat property will be disabled and the formatting will use the value of the formatString. Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number.
    *	Property type: string
    */
    get formatString(): string;
    set formatString(value: string);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Determines the max date for the Calendar displayed inside the popup.
    *	Property type: any
    */
    get max(): any;
    set max(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the min date for the Calendar displayed inside the popup.
    *	Property type: any
    */
    get min(): any;
    set min(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the drop down is opened or not.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the placeholder of the input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme for the element. Themes define the look of the elements.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value of the element. Expected value is: Date string, Date object or null.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when the selection is changed.
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
    /** Closes the drop down.
    */
    close(): void;
    /** Opens the drop down.
    */
    open(): void;
    /** Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** Returns the value in the desired format.
    * @param {string | Date} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.DateTimeFormat valid properties.
    */
    getFormattedValue(value: string | Date, format?: any): void;
    /** Returns the date of the input.
    */
    getValue(): void;
    /** Sets the date of the input.
    * @param {string | Date} value. The value to be set.
    */
    setValue(value: string | Date): void;
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
export default DateInput;
