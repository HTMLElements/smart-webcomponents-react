import React from "react";
import { DateRangeInputProperties } from "./../index";
import { Animation, DropDownButtonPosition, DateRangeInputValueType, DateRangeFormat, TimeRangeFormat } from './../index';
export { DateRangeInputProperties } from "./../index";
export { Animation, DateRangeFormatDay, DateRangeFormatMonth, DateRangeFormatYear, DropDownButtonPosition, TimeRangeFormatHour, TimeRangeFormatMinute, DateRangeInputValueType, DateRangeFormat, TimeRangeFormat } from './../index';
export declare const Smart: any;
export interface DateRangeInputProps extends DateRangeInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
*/
export declare class DateRangeInput extends React.Component<React.HTMLAttributes<Element> & DateRangeInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is determined by the 'locale' property. Intl.DateTimeFormat is used to format date strings in JavaScript
    *	Property type: DateRangeFormat
    */
    get dateFormat(): DateRangeFormat;
    set dateFormat(value: DateRangeFormat);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
    /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Determines whether the 'Today/Clear' icons will be visible or not.
    *	Property type: boolean
    */
    get icons(): boolean;
    set icons(value: boolean);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
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
    /** Determines the number of months that will be displayed inside the popup.
    *	Property type: number
    */
    get months(): number;
    set months(value: number);
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
    /** Determines the delimiter between the selected dates in the input. This delimiter is ued to distinguish the starting date from the ending date.
    *	Property type: string
    */
    get separator(): string;
    set separator(value: string);
    /** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date foramt is determined by the 'locale' property.
    *	Property type: TimeRangeFormat
    */
    get timeFormat(): TimeRangeFormat;
    set timeFormat(value: TimeRangeFormat);
    /** Determines whether time selection is available or not.
    *	Property type: boolean
    */
    get timepicker(): boolean;
    set timepicker(value: boolean);
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
    /** Sets or gets the value of the element. The type of the value depends on the valueType property.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines the value type returned from the `value` property.
    *	Property type: DateRangeInputValueType
    */
    get valueType(): DateRangeInputValueType;
    set valueType(value: DateRangeInputValueType);
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
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default DateRangeInput;
