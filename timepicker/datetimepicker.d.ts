import React from "react";
import { DateTimePickerProperties } from "./../index";
import { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation } from './../index';
export { DateTimePickerProperties } from "./../index";
export { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation } from './../index';
export declare const Smart: any;
export interface DateTimePickerProps extends DateTimePickerProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Date & time selection component. It allows to select both date and time with the same control.
*/
export declare class DateTimePicker extends React.Component<React.HTMLAttributes<Element> & DateTimePickerProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
    *	Property type: any
    */
    get animationSettings(): any;
    set animationSettings(value: any);
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
    /** Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date.
    *	Property type: boolean
    */
    get calendarButton(): boolean;
    set calendarButton(value: boolean);
    /** Determines the position of the calendar button.
    *	Property type: DropDownButtonPosition | string
    */
    get calendarButtonPosition(): DropDownButtonPosition | string;
    set calendarButtonPosition(value: DropDownButtonPosition | string);
    /** Determines the header mode of the calendar pop-up.
    *	Property type: CalendarMode | string
    */
    get calendarMode(): CalendarMode | string;
    set calendarMode(value: CalendarMode | string);
    /** Sets or gets the format of calendar pop-up's day names.
    *	Property type: DayFormat | string
    */
    get dayNameFormat(): DayFormat | string;
    set dayNameFormat(value: DayFormat | string);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view.
    *	Property type: boolean
    */
    get disableAutoNavigation(): boolean;
    set disableAutoNavigation(value: boolean);
    /** Determines the time zone to display the value in.
    *	Property type: DateTimePickerDisplayKind | string
    */
    get displayKind(): DateTimePickerDisplayKind | string;
    set displayKind(value: DateTimePickerDisplayKind | string);
    /** Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default.
    *	Property type: CalendarDisplayModeView | string
    */
    get displayModeView(): CalendarDisplayModeView | string;
    set displayModeView(value: CalendarDisplayModeView | string);
    /** Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Sets or gets the pop-up display mode (what components appear in it, and its behaviour).
    *	Property type: DateTimePickerDropDownDisplayMode | string
    */
    get dropDownDisplayMode(): DateTimePickerDropDownDisplayMode | string;
    set dropDownDisplayMode(value: DateTimePickerDropDownDisplayMode | string);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the pop-up position when opened.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Determines how the the value can be edited inside the input.
    *	Property type: DateTimePickerEditMode | string
    */
    get editMode(): DateTimePickerEditMode | string;
    set editMode(value: DateTimePickerEditMode | string);
    /** Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday)
    *	Property type: number
    */
    get firstDayOfWeek(): number;
    set firstDayOfWeek(value: number);
    /** Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied.
    *	Property type: any
    */
    get footerTemplate(): any;
    set footerTemplate(value: any);
    /** Determines whether to display a footer.
    *	Property type: boolean
    */
    get footer(): boolean;
    set footer(value: boolean);
    /** Determines the pattern that is used to display the value in. Built-in Date formats:// short date pattern'd' - 'M/d/yyyy',// long date pattern'D' - 'dddd, MMMM dd, yyyy',// short time pattern't' - 'h:mm tt',// long time pattern'T' - 'h:mm:ss tt',// long date, short time pattern'f' - 'dddd, MMMM dd, yyyy h:mm tt',// long date, long time pattern'F' - 'dddd, MMMM dd, yyyy h:mm:ss tt',// month/day pattern'M' - 'MMMM dd',// month/year pattern'Y' - 'yyyy MMMM',// S is a sortable format that does not vary by culture'S' - 'yyyy'-'MM'-'dd'T'HH':'mm':'ss'Date format strings:'d'-the day of the month;'dd'-the day of the month'ddd'-the abbreviated name of the day of the week'dddd'- the full name of the day of the week'h'-the hour, using a 12-hour clock from 1 to 12'hh'-the hour, using a 12-hour clock from 01 to 12'H'-the hour, using a 24-hour clock from 0 to 23'HH'- the hour, using a 24-hour clock from 00 to 23'm'-the minute, from 0 through 59'mm'-the minutes,from 00 though59'M'- the month, from 1 through 12'MM'- the month, from 01 through 12'MMM'-the abbreviated name of the month'MMMM'-the full name of the month's'-the second, from 0 through 59'ss'-the second, from 00 through 59't'- the first character of the AM/PM designator'tt'-the AM/PM designator'y'- the year, from 0 to 99'yy'- the year, from 00 to 99'yyy'-the year, with a minimum of three digits'yyyy'-the year as a four-digit number;'yyyyy'-the year as a four-digit number.
    *	Property type: string
    */
    get formatString(): string;
    set formatString(value: string);
    /** Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** Hides the names of the weekdays in the calendar pop-up.
    *	Property type: boolean
    */
    get hideDayNames(): boolean;
    set hideDayNames(value: boolean);
    /** Determines if dates from other months are visible or not in the calendar pop-up.
    *	Property type: boolean
    */
    get hideOtherMonthDays(): boolean;
    set hideOtherMonthDays(value: boolean);
    /** Hides the arrow of the tooltip in the calendar pop-up.
    *	Property type: boolean
    */
    get hideTooltipArrow(): boolean;
    set hideTooltipArrow(value: boolean);
    /** Sets additional helper text below the element that appears only when the element is focused.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Sets dates, displayed as important in the calendar pop-up.
    *	Property type: string[] | Date[]
    */
    get importantDates(): string[] | Date[];
    set importantDates(value: string[] | Date[]);
    /** Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement.
    *	Property type: string | HTMLTemplateElement
    */
    get importantDatesTemplate(): string | HTMLTemplateElement;
    set importantDatesTemplate(value: string | HTMLTemplateElement);
    /** Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds.
    *	Property type: any
    */
    get interval(): any;
    set interval(value: any);
    /** Sets a label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets the maximum allowed value.
    *	Property type: any
    */
    get max(): any;
    set max(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the minimum allowed value.
    *	Property type: any
    */
    get min(): any;
    set min(value: any);
    /** Sets or gets the element's name, which is used as a reference when the data is submitted in a form.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set.
    *	Property type: boolean
    */
    get nullable(): boolean;
    set nullable(value: boolean);
    /** Sets or gets whether the calendar pop-up is opened.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Sets or gets the placeholder text to be shown in the input when value is null.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets an array of dates (DateTime or Date objects) that cannot be selected.
    *	Property type: Date[]
    */
    get restrictedDates(): Date[];
    set restrictedDates(value: Date[]);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time.
    *	Property type: boolean
    */
    get spinButtons(): boolean;
    set spinButtons(value: boolean);
    /** Sets the delay between repeats of the spin buttons in miliseconds.
    *	Property type: number
    */
    get spinButtonsDelay(): number;
    set spinButtonsDelay(value: number);
    /** Sets a delay before the first repeat iteration of spin buttons in miliseconds.
    *	Property type: number
    */
    get spinButtonsInitialDelay(): number;
    set spinButtonsInitialDelay(value: number);
    /** Sets or gets the position of the spin buttons.
    *	Property type: DateTimePickerSpinButtonsPosition | string
    */
    get spinButtonsPosition(): DateTimePickerSpinButtonsPosition | string;
    set spinButtonsPosition(value: DateTimePickerSpinButtonsPosition | string);
    /** Sets or gets the element's visual theme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Enables/Disabled the tooltip for the important dates in the calendar pop-up.
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    /** Sets the delay of the calendar pop-up's tooltip before it appears.
    *	Property type: number
    */
    get tooltipDelay(): number;
    set tooltipDelay(value: number);
    /** Sets the position of the tooltip in the calendar pop-up.
    *	Property type: TooltipPosition | string
    */
    get tooltipPosition(): TooltipPosition | string;
    set tooltipPosition(value: TooltipPosition | string);
    /** Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement.
    *	Property type: string | HTMLTemplateElement
    */
    get tooltipTemplate(): string | HTMLTemplateElement;
    set tooltipTemplate(value: string | HTMLTemplateElement);
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Determines the validation mechanism for the value by min/max.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Enables/Disabled week numbering in the calendar pop-up.
    *	Property type: boolean
    */
    get weekNumbers(): boolean;
    set weekNumbers(value: boolean);
    /** Determines the number of visible weeks in the calendar pop-up.
    *	Property type: number
    */
    get weeks(): number;
    set weeks(value: number);
    /** Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025.
    *	Property type: number
    */
    get yearCutoff(): number;
    set yearCutoff(value: number);
    get properties(): string[];
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before it was changed presented as a DateTime object.
    *   value - The new value presented as a DateTime object.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the calendar pop-up is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the calendar pop-up is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the calendar pop-up.
    */
    close(): void;
    /** Focuses the input.
    */
    focus(): void;
    /** Opens the calendar pop-up.
    */
    open(): void;
    /** Selects the text inside the input.
    */
    select(): void;
    /** Gets a Date object.
    * @returns {Date}
  */
    getDate(): any;
    /** Sets the date of the DateTimePicker.
    * @param {Date} date. The date object to be set.
    */
    setDate(date: Date): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default DateTimePicker;
