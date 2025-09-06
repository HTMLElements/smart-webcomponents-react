
require('../source/modules/smart.datetimepicker');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.datetimepicker = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Date & time selection component. It allows to select both date and time with the same control.
	*/
	class DateTimePicker extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'DateTimePicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Defines or retrieves the current animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
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
	    /** Enhances the animation behavior of the calendar pop-up when it is enabled by applying customizable animation settings.'Properties:'- 'startSpeed': Specifies the initial velocity of the animation when the calendar pop-up appears, controlling how quickly the animation begins.- 'easeThreshold': Defines the point within the animation at which the "ease effect" takes place, causing the animation to gradually slow down for a smoother transition.- 'step': Sets the interval at which the animation progresses (e.g., the number of pixels or frames per update), determining the smoothness and speed of the animation.- 'stepEaseSize': A multiplier used to calculate the new step size after the ease threshold has been crossed; this value fine-tunes how much the animation slows down.- 'resetThreshold': Establishes the limit at which the animation resets. Once this value is reached, the animation sequence restarts from the beginning.These settings allow for precise control over the appearance and feel of the calendar pop-up’s animation, providing an improved and customizable user experience.
	    *	Property type: any
	    */
	    get animationSettings() {
	        return this.nativeElement ? this.nativeElement.animationSettings : undefined;
	    }
	    set animationSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.animationSettings = value;
	        }
	    }
	    /** Specifies whether the calendar button pop-up should automatically close after a user selects a date or time. If enabled, the pop-up will be dismissed immediately upon selection, providing a streamlined user experience. If disabled, the pop-up will remain open, allowing for multiple selections or further interaction.
	    *	Property type: boolean
	    */
	    get autoClose() {
	        return this.nativeElement ? this.nativeElement.autoClose : undefined;
	    }
	    set autoClose(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoClose = value;
	        }
	    }
	    /** Specifies the duration, in milliseconds, to wait before automatically closing the calendar pop-up after it is triggered. This setting is effective only when autoClose is set to true.
	    *	Property type: number
	    */
	    get autoCloseDelay() {
	        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	    }
	    set autoCloseDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoCloseDelay = value;
	        }
	    }
	    /** Controls the visibility of the calendar button. When visible, this button allows users to open the calendar popup and select a date. If hidden, users will not have access to the calendar popup from the interface.
	    *	Property type: boolean
	    */
	    get calendarButton() {
	        return this.nativeElement ? this.nativeElement.calendarButton : undefined;
	    }
	    set calendarButton(value) {
	        if (this.nativeElement) {
	            this.nativeElement.calendarButton = value;
	        }
	    }
	    /** Specifies the placement of the calendar button relative to the input field. For example, this setting can position the calendar button to the left, right, above, or below the input, allowing for flexible UI customization.
	    *	Property type: DropDownButtonPosition | string
	    */
	    get calendarButtonPosition() {
	        return this.nativeElement ? this.nativeElement.calendarButtonPosition : undefined;
	    }
	    set calendarButtonPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.calendarButtonPosition = value;
	        }
	    }
	    /** Specifies the display style of the calendar pop-up header, such as showing only the month, only the year, or both, to control how navigation and information are presented to the user.
	    *	Property type: CalendarMode | string
	    */
	    get calendarMode() {
	        return this.nativeElement ? this.nativeElement.calendarMode : undefined;
	    }
	    set calendarMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.calendarMode = value;
	        }
	    }
	    /** Specifies or retrieves the display format used for the day names (such as "Mon", "Monday", or "M") shown in the calendar popup. This determines how the days of the week are presented to users within the calendar interface.
	    *	Property type: DayFormat | string
	    */
	    get dayNameFormat() {
	        return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
	    }
	    set dayNameFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dayNameFormat = value;
	        }
	    }
	    /** Determines whether the element is interactive or not. When enabled, the element can receive user input and respond to actions; when disabled, the element becomes inactive and cannot be interacted with by the user.
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
	    /** Prevents the calendar pop-up from automatically navigating to a different month when the user clicks on a date that belongs to another month (outside of the currently displayed month). This ensures that clicking on dates not in the current month view will not change the visible month.
	    *	Property type: boolean
	    */
	    get disableAutoNavigation() {
	        return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
	    }
	    set disableAutoNavigation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableAutoNavigation = value;
	        }
	    }
	    /** Specifies the time zone in which the value should be displayed, ensuring that all date and time information is presented according to the selected region's local time settings. This affects how timestamps are interpreted and shown to the user.
	    *	Property type: DateTimePickerDisplayKind | string
	    */
	    get displayKind() {
	        return this.nativeElement ? this.nativeElement.displayKind : undefined;
	    }
	    set displayKind(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayKind = value;
	        }
	    }
	    /** Specifies the display format (month or year view) shown in the calendar pop-up when the calendarMode property is set to "Default". This setting controls whether users initially see a grid of months or a list of years, allowing for quicker navigation and selection within the calendar component.
	    *	Property type: CalendarDisplayModeView | string
	    */
	    get displayModeView() {
	        return this.nativeElement ? this.nativeElement.displayModeView : undefined;
	    }
	    set displayModeView(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayModeView = value;
	        }
	    }
	    /** Defines a custom container element where the pop-up will be appended. By default, the pop-up is appended within the DateTimePicker component itself. You can specify this property by providing either an HTML element (such as a DOM node) or the string ID of an existing HTML element on the page. This allows you to control the positioning and containment of the pop-up within your application's layout.
	    *	Property type: string
	    */
	    get dropDownAppendTo() {
	        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	    }
	    set dropDownAppendTo(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownAppendTo = value;
	        }
	    }
	    /** Defines or retrieves the pop-up display mode, specifying which components are shown within the pop-up and controlling how it behaves (such as its appearance, interaction options, and dismissal rules).
	    *	Property type: DateTimePickerDropDownDisplayMode | string
	    */
	    get dropDownDisplayMode() {
	        return this.nativeElement ? this.nativeElement.dropDownDisplayMode : undefined;
	    }
	    set dropDownDisplayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownDisplayMode = value;
	        }
	    }
	    /** When this property is enabled, opening the element's dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the document. This overlay helps to visually separate the dropdown from other page content and can be used to intercept interactions with elements outside the dropdown while it is open.
	    *	Property type: boolean
	    */
	    get dropDownOverlay() {
	        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	    }
	    set dropDownOverlay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownOverlay = value;
	        }
	    }
	    /** Specifies the location on the screen where the pop-up will appear when it is activated, allowing you to control its alignment relative to a reference element or the viewport.
	    *	Property type: DropDownPosition | string
	    */
	    get dropDownPosition() {
	        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	    }
	    set dropDownPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownPosition = value;
	        }
	    }
	    /** Specifies the permitted methods for modifying the input's value, such as whether users can manually enter or edit text, select from predefined options, or if the input is read-only and cannot be changed.
	    *	Property type: DateTimePickerEditMode | string
	    */
	    get editMode() {
	        return this.nativeElement ? this.nativeElement.editMode : undefined;
	    }
	    set editMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editMode = value;
	        }
	    }
	    /** Specifies whether the input value can be increased or decreased using the mouse wheel when the cursor is hovering over the input field. When enabled, scrolling the mouse wheel up increments the value, while scrolling down decrements it.
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
	    /** Specifies which day of the week should be displayed as the first column in the calendar pop-up. Accepts values from 0 (Sunday) to 6 (Saturday), where each number corresponds to a day of the week. For example, setting this value to 1 will make Monday the first day of the week in the calendar view.
	    *	Property type: number
	    */
	    get firstDayOfWeek() {
	        return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
	    }
	    set firstDayOfWeek(value) {
	        if (this.nativeElement) {
	            this.nativeElement.firstDayOfWeek = value;
	        }
	    }
	    /** Defines or retrieves the footer template used in the calendar pop-up. This property accepts either the ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. Assigning null reverts the calendar's footer to the default template. If a valid template is provided, it will be rendered in the footer area of the calendar pop-up, allowing for customized content or functionality.
	    *	Property type: any
	    */
	    get footerTemplate() {
	        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
	    }
	    set footerTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footerTemplate = value;
	        }
	    }
	    /** Specifies whether the footer section should be visible on the interface. Set this option to 'true' to display the footer, or 'false' to hide it.
	    *	Property type: boolean
	    */
	    get footer() {
	        return this.nativeElement ? this.nativeElement.footer : undefined;
	    }
	    set footer(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footer = value;
	        }
	    }
	    /** Specifies the format pattern used to display date and time values. You can use standard built-in format specifiers or custom format strings to control the appearance of the output.'Built-in Date and Time Format Specifiers:'| Specifier | Description                              | Example Output                     ||-----------|------------------------------------------|------------------------------------|| 'd'       | Short date pattern                       | 'M/d/yyyy' (e.g., 4/9/2024)        || 'D'       | Long date pattern                        | 'dddd, MMMM dd, yyyy' (e.g., Tuesday, April 9, 2024) || 't'       | Short time pattern                       | 'h:mm tt' (e.g., 3:45 PM)          || 'T'       | Long time pattern                        | 'h:mm:ss tt' (e.g., 3:45:30 PM)    || 'f'       | Long date, short time                    | 'dddd, MMMM dd, yyyy h:mm tt' (e.g., Tuesday, April 9, 2024 3:45 PM) || 'F'       | Long date, long time                     | 'dddd, MMMM dd, yyyy h:mm:ss tt' (e.g., Tuesday, April 9, 2024 3:45:30 PM) || 'M'       | Month/day pattern                        | 'MMMM dd' (e.g., April 09)         || 'Y'       | Year/month pattern                       | 'yyyy MMMM' (e.g., 2024 April)     || 'S'       | Sortable, culture-invariant date/time    | 'yyyy-MM-ddTHH:mm:ss' (e.g., 2024-04-09T15:45:30) |'Custom Date and Time Format Strings:'- 'Day'  - ''d''   : Day of the month (1–31)  - ''dd''  : Day of the month, two digits (01–31)  - ''ddd'' : Abbreviated weekday name (e.g., Tue)  - ''dddd'': Full weekday name (e.g., Tuesday)- 'Hour'  - ''h''   : 12-hour clock hour (1–12)  - ''hh''  : 12-hour clock hour, two digits (01–12)  - ''H''   : 24-hour clock hour (0–23)  - ''HH''  : 24-hour clock hour, two digits (00–23)- 'Minute'  - ''m''   : Minutes (0–59)  - ''mm''  : Minutes, two digits (00–59)- 'Month'  - ''M''   : Month (1–12)  - ''MM''  : Month, two digits (01–12)  - ''MMM'' : Abbreviated month name (e.g., Apr)  - ''MMMM'': Full month name (e.g., April)- 'Second'  - ''s''   : Seconds (0–59)  - ''ss''  : Seconds, two digits (00–59)- 'AM/PM Designator'  - ''t''   : First character of AM/PM (e.g., A or P)  - ''tt''  : AM/PM designator (e.g., AM or PM)- 'Year'  - ''y''     : Year, one or two digits (e.g., 0–99)  - ''yy''    : Year, two digits (e.g., 00–99)  - ''yyy''   : Year, minimum three digits (e.g., 2024)  - ''yyyy''  : Year, four digits (e.g., 2024)  - ''yyyyy'' : Year, at least five digits (pads with leading zeros if needed)For detailed formatting, custom format strings can be combined as needed, for example: ''yyyy-MM-dd HH:mm:ss'' would display as '2024-04-09 15:45:30'.'Note:' The output may vary according to localization and culture settings unless otherwise specified (e.g., the 'S' format is culture-invariant).
	    *	Property type: string
	    */
	    get formatString() {
	        return this.nativeElement ? this.nativeElement.formatString : undefined;
	    }
	    set formatString(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formatString = value;
	        }
	    }
	    /** Defines a custom header template for the calendar pop-up. You can provide either the string ID of an HTMLTemplateElement or a direct reference to an HTMLTemplateElement. The specified template will be used to render the header section of the calendar's pop-up interface.
	    *	Property type: any
	    */
	    get headerTemplate() {
	        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
	    }
	    set headerTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerTemplate = value;
	        }
	    }
	    /** This option removes or conceals the display of weekday names (such as "Monday," "Tuesday," etc.) from the calendar pop-up, leaving only the days of the month visible to the user.
	    *	Property type: boolean
	    */
	    get hideDayNames() {
	        return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
	    }
	    set hideDayNames(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideDayNames = value;
	        }
	    }
	    /** Specifies whether days from adjacent months (previous or next) are displayed in the calendar pop-up. When enabled, dates that fall outside the currently selected month are shown in the calendar view, typically in a muted or lighter style. Disabling this option will hide these out-of-month days, so only the dates belonging to the current month are visible.
	    *	Property type: boolean
	    */
	    get hideOtherMonthDays() {
	        return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
	    }
	    set hideOtherMonthDays(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideOtherMonthDays = value;
	        }
	    }
	    /** Prevents the arrow indicator from being displayed in the calendar tooltip pop-up, resulting in a cleaner appearance without the arrow pointing to the trigger element.
	    *	Property type: boolean
	    */
	    get hideTooltipArrow() {
	        return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
	    }
	    set hideTooltipArrow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideTooltipArrow = value;
	        }
	    }
	    /** Displays supplementary helper text beneath the element, which becomes visible exclusively when the element is focused. This text is intended to provide contextual guidance or instructions to users as they interact with the element.
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
	    /** Highlights specific dates in the calendar pop-up, marking them as important to make them stand out visually to users. These dates can be used to indicate special events, deadlines, or other significant occurrences.
	    *	Property type: string[] | Date[]
	    */
	    get importantDates() {
	        return this.nativeElement ? this.nativeElement.importantDates : undefined;
	    }
	    set importantDates(value) {
	        if (this.nativeElement) {
	            this.nativeElement.importantDates = value;
	        }
	    }
	    /** Defines the template used to display important dates within the calendar pop-up. This property accepts either the ID of an existing '' element or a direct reference to an 'HTMLTemplateElement' in the DOM. The specified template determines how important dates are rendered inside the calendar interface, allowing for custom formatting and content.
	    *	Property type: string | HTMLTemplateElement
	    */
	    get importantDatesTemplate() {
	        return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	    }
	    set importantDatesTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.importantDatesTemplate = value;
	        }
	    }
	    /** Defines or retrieves the time interval used to increment or decrement the value of the date/time input when no specific segment (such as hours, minutes, or seconds) is actively highlighted or selected by the user. By default, this interval is set to 1 second. If you provide a numeric value, it should be specified in milliseconds. For example, passing 500 will set the interval to half a second. This setting determines how quickly the value changes when the user uses controls to adjust the input without a segment highlighted.
	    *	Property type: any
	    */
	    get interval() {
	        return this.nativeElement ? this.nativeElement.interval : undefined;
	    }
	    set interval(value) {
	        if (this.nativeElement) {
	            this.nativeElement.interval = value;
	        }
	    }
	    /** Displays a descriptive label above the element to provide context or identify its purpose for users.
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
	    /** Sets or retrieves the unlockKey, a unique key required to activate or access the product's features. When provided, the unlockKey enables the user to unlock and use the product.
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
	    /** Specifies or retrieves the locale setting that determines the language and regional formatting used to display labels and other text elements within the DateTimePicker. This affects how dates, times, and UI labels are presented to the user, ensuring localization according to the selected language and region.
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
	    /** Callback function that allows you to define a custom formatting for messages returned by the Localization Module. Use this to control how localized messages are structured or displayed before they are delivered to your application.
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
	    /** Specifies the maximum permitted value for this property. When set, values greater than this limit are not accepted. When retrieved, returns the current maximum value constraint.
	    *	Property type: any
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Defines or retrieves an object containing the text strings displayed in the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale setting to enable localization, ensuring that the widget’s UI elements can be translated and adapted to the user’s language preferences.
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
	    /** Specifies the lowest permissible value that can be assigned. When setting, it defines the minimum value that is valid; when getting, it returns the current minimum constraint applied.
	    *	Property type: any
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies or retrieves the value of the element's name attribute. This name is used as the key when the form data is submitted, allowing the server to identify and process the corresponding value for this element.
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
	    /** Controls whether the value property can be set to null or an empty string. When this option is enabled and the user deletes the value in the input field, the value property is set to null, causing the placeholder text to be shown. If this option is disabled, deleting the input will automatically set the value property to the current date and time instead of null or an empty string.
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
	    /** Determines whether the calendar pop-up is currently open. You can use this property to programmatically open or close the calendar, or to check if it is visible to the user.
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
	    /** Defines the placeholder text displayed in the input field when the value property is null. This text provides a visual hint or example to users, indicating the expected input until a value is entered.
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
	    /** Prevents users from interacting with the element by disabling all input events, such as clicks, taps, keyboard input, and form submissions. The element will not respond to any user actions while this setting is enabled.
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
	    /** Specifies or retrieves an array of dates—either as DateTime strings or JavaScript Date objects—that are disabled and cannot be selected by the user. This prevents selection of any date included in the array within the date picker or calendar component.
	    *	Property type: Date[]
	    */
	    get restrictedDates() {
	        return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	    }
	    set restrictedDates(value) {
	        if (this.nativeElement) {
	            this.nativeElement.restrictedDates = value;
	        }
	    }
	    /** Sets or retrieves a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and display for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
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
	    /** Specifies whether the spin buttons are visible. Spin buttons allow users to increment or decrement the date or time value by clicking up or down arrows. When enabled, these controls provide a convenient way to adjust the input without manual typing.
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
	    /** Specifies the time interval, in milliseconds, between consecutive activations of the spin buttons when they are held down. This determines how quickly the value will change while the button is continuously pressed.
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
	    /** Specifies the delay, in milliseconds, before the spin button begins repeating its action after being pressed and held for the first time. This determines how long the user needs to hold down the spin button before subsequent value changes occur automatically.
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
	    /** Configures or retrieves the position of the spin buttons relative to the input field, such as placing them on the left, right, or another specified location. This property allows developers to control the layout and visual alignment of the spin buttons within the component.
	    *	Property type: DateTimePickerSpinButtonsPosition | string
	    */
	    get spinButtonsPosition() {
	        return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	    }
	    set spinButtonsPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.spinButtonsPosition = value;
	        }
	    }
	    /** Defines or retrieves the element's visual theme, such as its color scheme, style, or appearance, to ensure consistency with the application's overall design.
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
	    /** Controls whether tooltips are displayed for important dates in the calendar pop-up. When enabled, hovering over an important date shows additional information in a tooltip; when disabled, no tooltip appears.
	    *	Property type: boolean
	    */
	    get tooltip() {
	        return this.nativeElement ? this.nativeElement.tooltip : undefined;
	    }
	    set tooltip(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltip = value;
	        }
	    }
	    /** Specifies the amount of time (in milliseconds) to wait before displaying the tooltip for the calendar pop-up after the user hovers over or focuses on the relevant element.
	    *	Property type: number
	    */
	    get tooltipDelay() {
	        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	    }
	    set tooltipDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipDelay = value;
	        }
	    }
	    /** Specifies the location where the tooltip will appear relative to the calendar pop-up, such as above, below, to the left, or to the right of the calendar. This setting determines the tooltip’s alignment and positioning when users interact with the calendar interface.
	    *	Property type: TooltipPosition | string
	    */
	    get tooltipPosition() {
	        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	    }
	    set tooltipPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipPosition = value;
	        }
	    }
	    /** Defines a custom template for the tooltip content displayed in the calendar pop-up. This property accepts either the ID of an HTML  element or a direct reference to an HTMLTemplateElement. The specified template will be used to render the tooltip, allowing for customized layout and content in the calendar interface.
	    *	Property type: string | HTMLTemplateElement
	    */
	    get tooltipTemplate() {
	        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	    }
	    set tooltipTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipTemplate = value;
	        }
	    }
	    /** Determines whether the element can receive keyboard focus, allowing users to interact with it using the Tab key or other navigation methods. This property can be used to enable or disable focusability programmatically. When set, it also allows you to check if the element is currently focusable.
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
	    /** Specifies the validation method that enforces minimum and maximum value constraints. This determines how the input value is checked to ensure it falls within the defined minimum and maximum range.
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
	    /** Sets or retrieves the value of the element. This value represents the current date and time associated with the element, stored as a DateTime object. When setting the value, you provide a DateTime object to update the element’s date and time. When getting the value, it returns the currently assigned DateTime object reflecting the element’s date and time.
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
	    /** Controls whether week numbers are displayed in the calendar pop-up. When enabled, a numerical label appears next to each week, making it easier for users to reference specific weeks. When disabled, these week numbers will not be shown.
	    *	Property type: boolean
	    */
	    get weekNumbers() {
	        return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
	    }
	    set weekNumbers(value) {
	        if (this.nativeElement) {
	            this.nativeElement.weekNumbers = value;
	        }
	    }
	    /** Specifies how many weeks are displayed at once in the calendar pop-up view, allowing you to control the visible portion of the calendar grid when it is opened. Adjusting this value changes the number of week rows shown to the user.
	    *	Property type: number
	    */
	    get weeks() {
	        return this.nativeElement ? this.nativeElement.weeks : undefined;
	    }
	    set weeks(value) {
	        if (this.nativeElement) {
	            this.nativeElement.weeks = value;
	        }
	    }
	    /** Specifies the starting year of a 100-year range used to interpret 2-digit year values. By default, this is set to 1926, meaning that 2-digit years from 26 to 99 will be mapped to the years 1926 to 1999, and 2-digit years from 00 to 25 will be interpreted as 2000 to 2025. This setting ensures that legacy 2-digit year inputs are correctly converted to their corresponding 4-digit year representations within the defined century span.
	    *	Property type: number
	    */
	    get yearCutoff() {
	        return this.nativeElement ? this.nativeElement.yearCutoff : undefined;
	    }
	    set yearCutoff(value) {
	        if (this.nativeElement) {
	            this.nativeElement.yearCutoff = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "animationSettings", "autoClose", "autoCloseDelay", "calendarButton", "calendarButtonPosition", "calendarMode", "dayNameFormat", "disabled", "disableAutoNavigation", "displayKind", "displayModeView", "dropDownAppendTo", "dropDownDisplayMode", "dropDownOverlay", "dropDownPosition", "editMode", "enableMouseWheelAction", "firstDayOfWeek", "footerTemplate", "footer", "formatString", "headerTemplate", "hideDayNames", "hideOtherMonthDays", "hideTooltipArrow", "hint", "importantDates", "importantDatesTemplate", "interval", "label", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "name", "nullable", "opened", "placeholder", "readonly", "restrictedDates", "rightToLeft", "spinButtons", "spinButtonsDelay", "spinButtonsInitialDelay", "spinButtonsPosition", "theme", "tooltip", "tooltipDelay", "tooltipPosition", "tooltipTemplate", "unfocusable", "validation", "value", "weekNumbers", "weeks", "yearCutoff"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onClose", "onClosing", "onOpen", "onOpening", "onCreate", "onReady"];
	    }
	    /** Triggers the closure of the calendar pop-up window, removing it from view and returning focus to the primary interface.
	    */
	    close() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.close();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.close();
	            });
	        }
	    }
	    /** Sets the keyboard focus to the input field, allowing users to immediately begin typing without needing to click on the input. This improves usability by enabling faster and more intuitive data entry.
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
	    /** Displays the calendar pop-up, allowing users to select a date from an interactive calendar interface.
	    */
	    open() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.open();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.open();
	            });
	        }
	    }
	    /** Automatically highlights all the text contained within the input field, allowing users to easily copy, cut, or overwrite the current content.
	    */
	    select() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select();
	            });
	        }
	    }
	    /** Retrieves and returns a JavaScript Date object representing a specific point in time.
	    * @returns {Date}
	  */
	    getDate() {
	        const result = this.nativeElement.getDate();
	        return result;
	    }
	    /** Specifies the selected date to be displayed and managed by the DateTimePicker component. Setting this value determines the currently chosen date shown in the picker interface.
	    * @param {Date} date. The date object to be set.
	    */
	    setDate(date) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setDate(date);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setDate(date);
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
	            exports.Smart.Render();
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
	        return (React.createElement("smart-date-time-picker", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.DateTimePicker = DateTimePicker;
	exports.default = DateTimePicker;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
