import React from "react";
import { CalendarProperties } from "./../index";
import { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat } from './../index';
export { CalendarProperties } from "./../index";
export { Animation, CalendarMode, DayFormat, CalendarDisplayMode, CalendarDisplayModeView, MonthFormat, ViewLayout, LayoutPosition, CalendarSelectionMode, TooltipPosition, YearFormat } from './../index';
export declare const Smart: any;
export interface CalendarProps extends CalendarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onDisplayModeChanging?: ((event?: Event) => void) | undefined;
    onDisplayModeChange?: ((event?: Event) => void) | undefined;
    onNavigationChanging?: ((event?: Event) => void) | undefined;
    onNavigationChange?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
*/
export declare class Calendar extends React.Component<React.HTMLAttributes<Element> & CalendarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Applies new animation settings when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over.
    *	Property type: any
    */
    get animationSettings(): any;
    set animationSettings(value: any);
    /** Determines the date controls inside the header of the Calendar.
    *	Property type: CalendarMode
    */
    get calendarMode(): CalendarMode;
    set calendarMode(value: CalendarMode);
    /** Determines the format of the day names located above the days inside the calendar.
    *	Property type: DayFormat
    */
    get dayNameFormat(): DayFormat;
    set dayNameFormat(value: DayFormat);
    /**  A callback that can be used to customize the format of the month name when calendarMode is set to 'default'.
    *	Property type: any
    */
    get dateFormatFunction(): any;
    set dateFormatFunction(value: any);
    /** Enables or disables the Calendar.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Disables auto navigation when the user clicks on a date that's not from the current month in view.
    *	Property type: boolean
    */
    get disableAutoNavigation(): boolean;
    set disableAutoNavigation(value: boolean);
    /** Determines the date view of the calendar when calendarMode is set to 'default'
    *	Property type: CalendarDisplayMode
    */
    get displayMode(): CalendarDisplayMode;
    set displayMode(value: CalendarDisplayMode);
    /** Determines the type of the month/year view when calendarMode is set to Default.
    *	Property type: CalendarDisplayModeView
    */
    get displayModeView(): CalendarDisplayModeView;
    set displayModeView(value: CalendarDisplayModeView);
    /** Determines the height of the month's drop down inside the Calendar.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Determines the width of the month's drop down inside the Calendar.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Determines the first day of the week. From 0(Sunday) to 6(Saturday)
    *	Property type: number
    */
    get firstDayOfWeek(): number;
    set firstDayOfWeek(value: number);
    /** Sets a custom footer template. Accepts the id of an HTMLTemplateElement or a reference ot it.
    *	Property type: any
    */
    get footerTemplate(): any;
    set footerTemplate(value: any);
    /** Sets custom header template. Accepts the id of an HTMLTemplateElement or a reference ot it.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** Hides the names of the weekdays.
    *	Property type: boolean
    */
    get hideDayNames(): boolean;
    set hideDayNames(value: boolean);
    /** Hides the dates from other months.
    *	Property type: boolean
    */
    get hideOtherMonthDays(): boolean;
    set hideOtherMonthDays(value: boolean);
    /** Hides the arrow of the tooltip.
    *	Property type: boolean
    */
    get hideTooltipArrow(): boolean;
    set hideTooltipArrow(value: boolean);
    /** Sets the dates that will be displayed as important.
    *	Property type: string[] | Date[]
    */
    get importantDates(): string[] | Date[];
    set importantDates(value: string[] | Date[]);
    /** Sets a template for the important dates. Accepts the id of an HTMLTemplate element inside the DOM of or a reference to it.
    *	Property type: any
    */
    get importantDatesTemplate(): any;
    set importantDatesTemplate(value: any);
    /**  Determines the language of the Calendar.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Determines the max date for the Calendar. Accepts date objects and valid date string formats.
    *	Property type: string | Date
    */
    get max(): string | Date;
    set max(value: string | Date);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the min date for the Calendar. Accepts date objects and valid date string formats.
    *	Property type: string | Date
    */
    get min(): string | Date;
    set min(value: string | Date);
    /** Determines the number of months to be displayed inside the calendar. The maximum amount of months that can be shown is 12. By default only 1 month is shown.
    *	Property type: number
    */
    get months(): number;
    set months(value: number);
    /** Determines the format of the month names in the header when DisplayMode is set to Default or when Months property is greater than 1.
    *	Property type: MonthFormat
    */
    get monthNameFormat(): MonthFormat;
    set monthNameFormat(value: MonthFormat);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets restricted dates. Restricted dates are dates that cannot be selected/hovered/focused. They are visualy styled as restricted. The dates can be javascript date objects or strings representing a valid date.
    *	Property type: string[] | Date[]
    */
    get restrictedDates(): string[] | Date[];
    set restrictedDates(value: string[] | Date[]);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /**  Determines the direction of the navigation buttons located in the header and the animation.
    *	Property type: ViewLayout
    */
    get scrollButtonsNavigationMode(): ViewLayout;
    set scrollButtonsNavigationMode(value: ViewLayout);
    /**  Determines the position of the navigation buttons located inside the header.
    *	Property type: LayoutPosition
    */
    get scrollButtonsPosition(): LayoutPosition;
    set scrollButtonsPosition(value: LayoutPosition);
    /** Sets the dates that will be selected. Selected dates are styled differently than the rest. The dates can be Date objects or strings in a valid date format.
    *	Property type: string[] | Date[]
    */
    get selectedDates(): string[] | Date[];
    set selectedDates(value: string[] | Date[]);
    /** Determines the date selection mode.
    *	Property type: CalendarSelectionMode
    */
    get selectionMode(): CalendarSelectionMode;
    set selectionMode(value: CalendarSelectionMode);
    /** Sets the delay between clicks of the date navigation buttons located in the header of the Calendar.
    *	Property type: number
    */
    get spinButtonsDelay(): number;
    set spinButtonsDelay(value: number);
    /** Determines the initial delay before the action of the date navigation buttons located in the header of the Calendar.
    *	Property type: number
    */
    get spinButtonsInitialDelay(): number;
    set spinButtonsInitialDelay(value: number);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets a template for the title section of the Calendar. Accepts the id of an HTMLTemplate element inside the DOM of or a reference it.
    *	Property type: any
    */
    get titleTemplate(): any;
    set titleTemplate(value: any);
    /** Enables/Disabled the tooltip for the important dates. If enabled when an important date is hovered a tooltip is displayed.
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    /** Show/Hide the arrow of the the tooltip for the important dates. By default the arrow is visible.
    *	Property type: boolean
    */
    get tooltipArrow(): boolean;
    set tooltipArrow(value: boolean);
    /** Sets the delay of the tooltip before it appears.
    *	Property type: number
    */
    get tooltipDelay(): number;
    set tooltipDelay(value: number);
    /** Set's a custom offset to the tooltip's position. Accepts an array of two numbers: the left coordinate and the top coordinate.
    *	Property type: number[][]
    */
    get tooltipOffset(): number[][];
    set tooltipOffset(value: number[][]);
    /** Sets the position of the tooltip.
    *	Property type: TooltipPosition
    */
    get tooltipPosition(): TooltipPosition;
    set tooltipPosition(value: TooltipPosition);
    /** Sets a template for the tooltip's content. Accepts the id of an HTMLTEmplate element inside the DOM or it's reference.
    *	Property type: any
    */
    get tooltipTemplate(): any;
    set tooltipTemplate(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Determines the orientation of the Calendar.
    *	Property type: ViewLayout
    */
    get view(): ViewLayout;
    set view(value: ViewLayout);
    /** Determines the visible sections of the Calendar. The view sections are : title, header, footer. Multiple sections can be applied at the same time. By default only the 'header' section is visible.
    *	Property type: string[]
    */
    get viewSections(): string[];
    set viewSections(value: string[]);
    /** Enables/Disabled week numbering. If enabled week numbers are displayed infront of each week inside the Calendar.
    *	Property type: boolean
    */
    get weekNumbers(): boolean;
    set weekNumbers(value: boolean);
    /** Determines the number of visible weeks. The value of the property ranges from 1 to 6. Where 1 is one week and 6 is a full month ( 6 weeks ).
    *	Property type: number
    */
    get weeks(): number;
    set weeks(value: number);
    /** Determines the year format in the header when DisplayMode is set to Default or when Months property is greater than 1.
    *	Property type: YearFormat
    */
    get yearFormat(): YearFormat;
    set yearFormat(value: YearFormat);
    get properties(): string[];
    /**  This event is triggered when a new date has been selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - An array of all currently selected dates.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the displayMode is about to change. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldDisplayMode, 	newDisplayMode)
    *   oldDisplayMode - The previous display mode.
    *   newDisplayMode - The new display mode.
    */
    onDisplayModeChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the display mode has changed.
    *  @param event. The custom event. 	*/
    onDisplayModeChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the view is changing. This navigation can be cancelled by using the preventDefault method.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
    *   value - The view's date.
    *   type - The view type - 'month', 'decade' or 'year'.
    */
    onNavigationChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the view is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	type)
    *   value - The view's date.
    *   type - The view type - 'month', 'decade' or 'year'.
    */
    onNavigationChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the tooltip for the important date is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
    *   target - The event target - tooltip.
    *   value - The important date of the hovered cell.
    */
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the tooltip for the important date is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	value)
    *   target - The event target - tooltip.
    *   value - The important date of the hovered cell.
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Clears the selection. Removes all seleceted dates.
    */
    clearSelection(): void;
    /** Navigates forwards/backwards depending on the argument.
    * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
    * @returns {boolean}
  */
    navigate(step: number | Date | string): Promise<any>;
    /** Selects or Unselects a date.
    * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
    */
    select(date: Date | string): void;
    /** Selects today's date.
    * @returns {Date}
  */
    today(): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Calendar;
