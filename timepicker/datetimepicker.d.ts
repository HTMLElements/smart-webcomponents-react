import React from "react";
import { DateTimePickerProperties } from "./../index";
import { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation } from './../index';
export { DateTimePickerProperties } from "./../index";
export { Animation, DropDownButtonPosition, CalendarMode, DayFormat, DateTimePickerDisplayKind, CalendarDisplayModeView, DateTimePickerDropDownDisplayMode, DropDownPosition, DateTimePickerEditMode, DateTimePickerSpinButtonsPosition, TooltipPosition, Validation } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Defines or retrieves the current animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Enhances the animation behavior of the calendar pop-up when it is enabled by applying customizable animation settings.'Properties:'- 'startSpeed': Specifies the initial velocity of the animation when the calendar pop-up appears, controlling how quickly the animation begins.- 'easeThreshold': Defines the point within the animation at which the "ease effect" takes place, causing the animation to gradually slow down for a smoother transition.- 'step': Sets the interval at which the animation progresses (e.g., the number of pixels or frames per update), determining the smoothness and speed of the animation.- 'stepEaseSize': A multiplier used to calculate the new step size after the ease threshold has been crossed; this value fine-tunes how much the animation slows down.- 'resetThreshold': Establishes the limit at which the animation resets. Once this value is reached, the animation sequence restarts from the beginning.These settings allow for precise control over the appearance and feel of the calendar pop-up’s animation, providing an improved and customizable user experience.
    *	Property type: any
    */
    get animationSettings(): any;
    set animationSettings(value: any);
    /** Specifies whether the calendar button pop-up should automatically close after a user selects a date or time. If enabled, the pop-up will be dismissed immediately upon selection, providing a streamlined user experience. If disabled, the pop-up will remain open, allowing for multiple selections or further interaction.
    *	Property type: boolean
    */
    get autoClose(): boolean;
    set autoClose(value: boolean);
    /** Specifies the duration, in milliseconds, to wait before automatically closing the calendar pop-up after it is triggered. This setting is effective only when autoClose is set to true.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Controls the visibility of the calendar button. When visible, this button allows users to open the calendar popup and select a date. If hidden, users will not have access to the calendar popup from the interface.
    *	Property type: boolean
    */
    get calendarButton(): boolean;
    set calendarButton(value: boolean);
    /** Specifies the placement of the calendar button relative to the input field. For example, this setting can position the calendar button to the left, right, above, or below the input, allowing for flexible UI customization.
    *	Property type: DropDownButtonPosition | string
    */
    get calendarButtonPosition(): DropDownButtonPosition | string;
    set calendarButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the display style of the calendar pop-up header, such as showing only the month, only the year, or both, to control how navigation and information are presented to the user.
    *	Property type: CalendarMode | string
    */
    get calendarMode(): CalendarMode | string;
    set calendarMode(value: CalendarMode | string);
    /** Specifies or retrieves the display format used for the day names (such as "Mon", "Monday", or "M") shown in the calendar popup. This determines how the days of the week are presented to users within the calendar interface.
    *	Property type: DayFormat | string
    */
    get dayNameFormat(): DayFormat | string;
    set dayNameFormat(value: DayFormat | string);
    /** Determines whether the element is interactive or not. When enabled, the element can receive user input and respond to actions; when disabled, the element becomes inactive and cannot be interacted with by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Prevents the calendar pop-up from automatically navigating to a different month when the user clicks on a date that belongs to another month (outside of the currently displayed month). This ensures that clicking on dates not in the current month view will not change the visible month.
    *	Property type: boolean
    */
    get disableAutoNavigation(): boolean;
    set disableAutoNavigation(value: boolean);
    /** Specifies the time zone in which the value should be displayed, ensuring that all date and time information is presented according to the selected region's local time settings. This affects how timestamps are interpreted and shown to the user.
    *	Property type: DateTimePickerDisplayKind | string
    */
    get displayKind(): DateTimePickerDisplayKind | string;
    set displayKind(value: DateTimePickerDisplayKind | string);
    /** Specifies the display format (month or year view) shown in the calendar pop-up when the calendarMode property is set to "Default". This setting controls whether users initially see a grid of months or a list of years, allowing for quicker navigation and selection within the calendar component.
    *	Property type: CalendarDisplayModeView | string
    */
    get displayModeView(): CalendarDisplayModeView | string;
    set displayModeView(value: CalendarDisplayModeView | string);
    /** Defines a custom container element where the pop-up will be appended. By default, the pop-up is appended within the DateTimePicker component itself. You can specify this property by providing either an HTML element (such as a DOM node) or the string ID of an existing HTML element on the page. This allows you to control the positioning and containment of the pop-up within your application's layout.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Defines or retrieves the pop-up display mode, specifying which components are shown within the pop-up and controlling how it behaves (such as its appearance, interaction options, and dismissal rules).
    *	Property type: DateTimePickerDropDownDisplayMode | string
    */
    get dropDownDisplayMode(): DateTimePickerDropDownDisplayMode | string;
    set dropDownDisplayMode(value: DateTimePickerDropDownDisplayMode | string);
    /** When this property is enabled, opening the element's dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the document. This overlay helps to visually separate the dropdown from other page content and can be used to intercept interactions with elements outside the dropdown while it is open.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the location on the screen where the pop-up will appear when it is activated, allowing you to control its alignment relative to a reference element or the viewport.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the permitted methods for modifying the input's value, such as whether users can manually enter or edit text, select from predefined options, or if the input is read-only and cannot be changed.
    *	Property type: DateTimePickerEditMode | string
    */
    get editMode(): DateTimePickerEditMode | string;
    set editMode(value: DateTimePickerEditMode | string);
    /** Specifies whether the input value can be increased or decreased using the mouse wheel when the cursor is hovering over the input field. When enabled, scrolling the mouse wheel up increments the value, while scrolling down decrements it.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Specifies which day of the week should be displayed as the first column in the calendar pop-up. Accepts values from 0 (Sunday) to 6 (Saturday), where each number corresponds to a day of the week. For example, setting this value to 1 will make Monday the first day of the week in the calendar view.
    *	Property type: number
    */
    get firstDayOfWeek(): number;
    set firstDayOfWeek(value: number);
    /** Defines or retrieves the footer template used in the calendar pop-up. This property accepts either the ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. Assigning null reverts the calendar's footer to the default template. If a valid template is provided, it will be rendered in the footer area of the calendar pop-up, allowing for customized content or functionality.
    *	Property type: any
    */
    get footerTemplate(): any;
    set footerTemplate(value: any);
    /** Specifies whether the footer section should be visible on the interface. Set this option to 'true' to display the footer, or 'false' to hide it.
    *	Property type: boolean
    */
    get footer(): boolean;
    set footer(value: boolean);
    /** Specifies the format pattern used to display date and time values. You can use standard built-in format specifiers or custom format strings to control the appearance of the output.'Built-in Date and Time Format Specifiers:'| Specifier | Description                              | Example Output                     ||-----------|------------------------------------------|------------------------------------|| 'd'       | Short date pattern                       | 'M/d/yyyy' (e.g., 4/9/2024)        || 'D'       | Long date pattern                        | 'dddd, MMMM dd, yyyy' (e.g., Tuesday, April 9, 2024) || 't'       | Short time pattern                       | 'h:mm tt' (e.g., 3:45 PM)          || 'T'       | Long time pattern                        | 'h:mm:ss tt' (e.g., 3:45:30 PM)    || 'f'       | Long date, short time                    | 'dddd, MMMM dd, yyyy h:mm tt' (e.g., Tuesday, April 9, 2024 3:45 PM) || 'F'       | Long date, long time                     | 'dddd, MMMM dd, yyyy h:mm:ss tt' (e.g., Tuesday, April 9, 2024 3:45:30 PM) || 'M'       | Month/day pattern                        | 'MMMM dd' (e.g., April 09)         || 'Y'       | Year/month pattern                       | 'yyyy MMMM' (e.g., 2024 April)     || 'S'       | Sortable, culture-invariant date/time    | 'yyyy-MM-ddTHH:mm:ss' (e.g., 2024-04-09T15:45:30) |'Custom Date and Time Format Strings:'- 'Day'  - ''d''   : Day of the month (1–31)  - ''dd''  : Day of the month, two digits (01–31)  - ''ddd'' : Abbreviated weekday name (e.g., Tue)  - ''dddd'': Full weekday name (e.g., Tuesday)- 'Hour'  - ''h''   : 12-hour clock hour (1–12)  - ''hh''  : 12-hour clock hour, two digits (01–12)  - ''H''   : 24-hour clock hour (0–23)  - ''HH''  : 24-hour clock hour, two digits (00–23)- 'Minute'  - ''m''   : Minutes (0–59)  - ''mm''  : Minutes, two digits (00–59)- 'Month'  - ''M''   : Month (1–12)  - ''MM''  : Month, two digits (01–12)  - ''MMM'' : Abbreviated month name (e.g., Apr)  - ''MMMM'': Full month name (e.g., April)- 'Second'  - ''s''   : Seconds (0–59)  - ''ss''  : Seconds, two digits (00–59)- 'AM/PM Designator'  - ''t''   : First character of AM/PM (e.g., A or P)  - ''tt''  : AM/PM designator (e.g., AM or PM)- 'Year'  - ''y''     : Year, one or two digits (e.g., 0–99)  - ''yy''    : Year, two digits (e.g., 00–99)  - ''yyy''   : Year, minimum three digits (e.g., 2024)  - ''yyyy''  : Year, four digits (e.g., 2024)  - ''yyyyy'' : Year, at least five digits (pads with leading zeros if needed)For detailed formatting, custom format strings can be combined as needed, for example: ''yyyy-MM-dd HH:mm:ss'' would display as '2024-04-09 15:45:30'.'Note:' The output may vary according to localization and culture settings unless otherwise specified (e.g., the 'S' format is culture-invariant).
    *	Property type: string
    */
    get formatString(): string;
    set formatString(value: string);
    /** Defines a custom header template for the calendar pop-up. You can provide either the string ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. The specified template will be used to render the header section of the calendar's pop-up interface.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** This option removes or conceals the display of weekday names (such as "Monday," "Tuesday," etc.) from the calendar pop-up, leaving only the days of the month visible to the user.
    *	Property type: boolean
    */
    get hideDayNames(): boolean;
    set hideDayNames(value: boolean);
    /** Specifies whether days from adjacent months (previous or next) are displayed in the calendar pop-up. When enabled, dates that fall outside the currently selected month are shown in the calendar view, typically in a muted or lighter style. Disabling this option will hide these out-of-month days, so only the dates belonging to the current month are visible.
    *	Property type: boolean
    */
    get hideOtherMonthDays(): boolean;
    set hideOtherMonthDays(value: boolean);
    /** Prevents the arrow indicator from being displayed in the calendar tooltip pop-up, resulting in a cleaner appearance without the arrow pointing to the trigger element.
    *	Property type: boolean
    */
    get hideTooltipArrow(): boolean;
    set hideTooltipArrow(value: boolean);
    /** Displays supplementary helper text beneath the element, which becomes visible exclusively when the element is focused. This text is intended to provide contextual guidance or instructions to users as they interact with the element.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Highlights specific dates in the calendar pop-up, marking them as important to make them stand out visually to users. These dates can be used to indicate special events, deadlines, or other significant occurrences.
    *	Property type: string[] | Date[]
    */
    get importantDates(): string[] | Date[];
    set importantDates(value: string[] | Date[]);
    /** Defines the template used to display important dates within the calendar pop-up. This property accepts either the ID of an existing '' element or a direct reference to an 'HTMLTemplateElement' in the DOM. The specified template determines how important dates are rendered inside the calendar interface, allowing for custom formatting and content.
    *	Property type: string | HTMLTemplateElement
    */
    get importantDatesTemplate(): string | HTMLTemplateElement;
    set importantDatesTemplate(value: string | HTMLTemplateElement);
    /** Defines or retrieves the time interval used to increment or decrement the value of the date/time input when no specific segment (such as hours, minutes, or seconds) is actively highlighted or selected by the user. By default, this interval is set to 1 second. If you provide a numeric value, it should be specified in milliseconds. For example, passing 500 will set the interval to half a second. This setting determines how quickly the value changes when the user uses controls to adjust the input without a segment highlighted.
    *	Property type: any
    */
    get interval(): any;
    set interval(value: any);
    /** Displays a descriptive label above the element to provide context or identify its purpose for users.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Sets or retrieves the unlockKey, a unique key required to activate or access the product's features. When provided, the unlockKey enables the user to unlock and use the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the locale setting that determines the language and regional formatting used to display labels and other text elements within the DateTimePicker. This affects how dates, times, and UI labels are presented to the user, ensuring localization according to the selected language and region.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to define a custom formatting for messages returned by the Localization Module. Use this to control how localized messages are structured or displayed before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the maximum permitted value for this property. When set, values greater than this limit are not accepted. When retrieved, returns the current maximum value constraint.
    *	Property type: any
    */
    get max(): any;
    set max(value: any);
    /** Defines or retrieves an object containing the text strings displayed in the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale setting to enable localization, ensuring that the widget’s UI elements can be translated and adapted to the user’s language preferences.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the lowest permissible value that can be assigned. When setting, it defines the minimum value that is valid; when getting, it returns the current minimum constraint applied.
    *	Property type: any
    */
    get min(): any;
    set min(value: any);
    /** Specifies or retrieves the value of the element's name attribute. This name is used as the key when the form data is submitted, allowing the server to identify and process the corresponding value for this element.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Controls whether the value property can be set to null or an empty string. When this option is enabled and the user deletes the value in the input field, the value property is set to null, causing the placeholder text to be shown. If this option is disabled, deleting the input will automatically set the value property to the current date and time instead of null or an empty string.
    *	Property type: boolean
    */
    get nullable(): boolean;
    set nullable(value: boolean);
    /** Determines whether the calendar pop-up is currently open. You can use this property to programmatically open or close the calendar, or to check if it is visible to the user.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Defines the placeholder text displayed in the input field when the value property is null. This text provides a visual hint or example to users, indicating the expected input until a value is entered.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Prevents users from interacting with the element by disabling all input events, such as clicks, taps, keyboard input, and form submissions. The element will not respond to any user actions while this setting is enabled.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves an array of dates—either as DateTime strings or JavaScript Date objects—that are disabled and cannot be selected by the user. This prevents selection of any date included in the array within the date picker or calendar component.
    *	Property type: Date[]
    */
    get restrictedDates(): Date[];
    set restrictedDates(value: Date[]);
    /** Sets or retrieves a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and display for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether the spin buttons are visible. Spin buttons allow users to increment or decrement the date or time value by clicking up or down arrows. When enabled, these controls provide a convenient way to adjust the input without manual typing.
    *	Property type: boolean
    */
    get spinButtons(): boolean;
    set spinButtons(value: boolean);
    /** Specifies the time interval, in milliseconds, between consecutive activations of the spin buttons when they are held down. This determines how quickly the value will change while the button is continuously pressed.
    *	Property type: number
    */
    get spinButtonsDelay(): number;
    set spinButtonsDelay(value: number);
    /** Specifies the delay, in milliseconds, before the spin button begins repeating its action after being pressed and held for the first time. This determines how long the user needs to hold down the spin button before subsequent value changes occur automatically.
    *	Property type: number
    */
    get spinButtonsInitialDelay(): number;
    set spinButtonsInitialDelay(value: number);
    /** Configures or retrieves the position of the spin buttons relative to the input field, such as placing them on the left, right, or another specified location. This property allows developers to control the layout and visual alignment of the spin buttons within the component.
    *	Property type: DateTimePickerSpinButtonsPosition | string
    */
    get spinButtonsPosition(): DateTimePickerSpinButtonsPosition | string;
    set spinButtonsPosition(value: DateTimePickerSpinButtonsPosition | string);
    /** Defines or retrieves the element's visual theme, such as its color scheme, style, or appearance, to ensure consistency with the application's overall design.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Controls whether tooltips are displayed for important dates in the calendar pop-up. When enabled, hovering over an important date shows additional information in a tooltip; when disabled, no tooltip appears.
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    /** Specifies the amount of time (in milliseconds) to wait before displaying the tooltip for the calendar pop-up after the user hovers over or focuses on the relevant element.
    *	Property type: number
    */
    get tooltipDelay(): number;
    set tooltipDelay(value: number);
    /** Specifies the location where the tooltip will appear relative to the calendar pop-up, such as above, below, to the left, or to the right of the calendar. This setting determines the tooltip’s alignment and positioning when users interact with the calendar interface.
    *	Property type: TooltipPosition | string
    */
    get tooltipPosition(): TooltipPosition | string;
    set tooltipPosition(value: TooltipPosition | string);
    /** Defines a custom template for the tooltip content displayed in the calendar pop-up. This property accepts either the ID of an HTML  element or a direct reference to an HTMLTemplateElement. The specified template will be used to render the tooltip, allowing for customized layout and content in the calendar interface.
    *	Property type: string | HTMLTemplateElement
    */
    get tooltipTemplate(): string | HTMLTemplateElement;
    set tooltipTemplate(value: string | HTMLTemplateElement);
    /** Determines whether the element can receive keyboard focus, allowing users to interact with it using the Tab key or other navigation methods. This property can be used to enable or disable focusability programmatically. When set, it also allows you to check if the element is currently focusable.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies the validation method that enforces minimum and maximum value constraints. This determines how the input value is checked to ensure it falls within the defined minimum and maximum range.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Sets or retrieves the value of the element. This value represents the current date and time associated with the element, stored as a DateTime object. When setting the value, you provide a DateTime object to update the element’s date and time. When getting the value, it returns the currently assigned DateTime object reflecting the element’s date and time.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Controls whether week numbers are displayed in the calendar pop-up. When enabled, a numerical label appears next to each week, making it easier for users to reference specific weeks. When disabled, these week numbers will not be shown.
    *	Property type: boolean
    */
    get weekNumbers(): boolean;
    set weekNumbers(value: boolean);
    /** Specifies how many weeks are displayed at once in the calendar pop-up view, allowing you to control the visible portion of the calendar grid when it is opened. Adjusting this value changes the number of week rows shown to the user.
    *	Property type: number
    */
    get weeks(): number;
    set weeks(value: number);
    /** Specifies the starting year of a 100-year range used to interpret 2-digit year values. By default, this is set to 1926, meaning that 2-digit years from 26 to 99 will be mapped to the years 1926 to 1999, and 2-digit years from 00 to 25 will be interpreted as 2000 to 2025. This setting ensures that legacy 2-digit year inputs are correctly converted to their corresponding 4-digit year representations within the defined century span.
    *	Property type: number
    */
    get yearCutoff(): number;
    set yearCutoff(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the value associated with the component or input field is modified by the user or programmatically. It activates each time a change is detected, allowing you to respond to updates in real-time, such as validating input, updating UI elements, or saving new data.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before it was changed presented as a DateTime object.
    *   value - The new value presented as a DateTime object.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the calendar pop-up is closed by the user, either by selecting a date or dismissing the pop-up through other means (such as clicking outside the calendar or pressing the Escape key).
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before the calendar pop-up is closed. At this stage, event handlers have the opportunity to intercept the closing action. If you want to prevent the calendar from closing—for example, to validate user input or display a confirmation message—you can call event.preventDefault() within your event handler. Doing so will cancel the close operation, keeping the calendar pop-up open until the condition is resolved.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the calendar pop-up component becomes visible to the user, such as when a user clicks on the input field or calendar icon to display the calendar interface.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event fires immediately before the calendar pop-up is displayed to the user. Developers can intercept this event and prevent the calendar from opening by invoking event.preventDefault() within the event handler. This allows for custom validation or logic to be executed prior to showing the calendar interface.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Triggers the closure of the calendar pop-up window, removing it from view and returning focus to the primary interface.
    */
    close(): void;
    /** Sets the keyboard focus to the input field, allowing users to immediately begin typing without needing to click on the input. This improves usability by enabling faster and more intuitive data entry.
    */
    focus(): void;
    /** Displays the calendar pop-up, allowing users to select a date from an interactive calendar interface.
    */
    open(): void;
    /** Automatically highlights all the text contained within the input field, allowing users to easily copy, cut, or overwrite the current content.
    */
    select(): void;
    /** Retrieves and returns a JavaScript Date object representing a specific point in time.
    * @returns {Date}
  */
    getDate(): any;
    /** Specifies the selected date to be displayed and managed by the DateTimePicker component. Setting this value determines the currently chosen date shown in the picker interface.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default DateTimePicker;
