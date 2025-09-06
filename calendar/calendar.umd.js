
require('../source/modules/smart.calendar');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.calendar = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Calendar allows user to easily select one or more dates. This control supports multi-calendar view, special dates, holidays, weekends, decade views.
	*/
	class Calendar extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Calendar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
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
	    /** Enhances the animation behavior by applying new settings when enabled.Properties:      startSpeed – Specifies the initial speed at which the animation begins, allowing you to control how quickly the animation starts.        easeThreshold – Defines the point during the animation where the "ease effect" starts, meaning the animation begins to slow down for a smoother transition.        step – Sets the interval for each frame or update of the animation, effectively controlling how smoothly or incrementally the animation moves.        stepEaseSize – A coefficient used to calculate the updated step size once the animation passes the easeThreshold, increasing the ease-in/ease-out effect as the animation decelerates.        resetThreshold – Determines the point at which the animation will automatically reset and start from the beginning, allowing for looping or repeated motion.
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
	    /** Specifies the configuration and behavior of the date selection controls displayed within the header section of the Calendar component, such as navigation buttons, month and year dropdowns, or other tools that allow users to change the visible date range.
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
	    /** Specifies the display format for the names of the days of the week that appear as headers above the calendar grid. This setting controls whether the day names are shown in full (e.g., "Monday"), as abbreviations (e.g., "Mon"), or as single letters (e.g., "M").
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
	    /** A callback function that allows you to customize the display format of month names when the calendarMode property is set to 'default'. Use this callback to define how month names should appear (e.g., full name, abbreviation, localization) in the calendar interface.
	    *	Property type: any
	    */
	    get dateFormatFunction() {
	        return this.nativeElement ? this.nativeElement.dateFormatFunction : undefined;
	    }
	    set dateFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dateFormatFunction = value;
	        }
	    }
	    /** Controls whether the Calendar feature is active or inactive. When enabled, the Calendar is accessible to users; when disabled, the Calendar is inactive.
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
	    /** Prevents the calendar from automatically navigating to a different month when the user clicks on a date cell that belongs to a month other than the one currently displayed. This ensures that selecting dates outside the visible month will not change the current view.
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
	    /** Configures whether the mouse wheel can be used to navigate or change dates in the Calendar component. When enabled, scrolling the mouse wheel will move between calendar views or dates; when disabled, the mouse wheel will have no effect on the calendar.
	    *	Property type: boolean
	    */
	    get disableMouseWheel() {
	        return this.nativeElement ? this.nativeElement.disableMouseWheel : undefined;
	    }
	    set disableMouseWheel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableMouseWheel = value;
	        }
	    }
	    /** Specifies which date is initially displayed in the calendar when calendarMode is set to 'default'. This property controls the starting visible month or day in the calendar interface, allowing you to set the user's initial view to a specific date.
	    *	Property type: CalendarDisplayMode | string
	    */
	    get displayMode() {
	        return this.nativeElement ? this.nativeElement.displayMode : undefined;
	    }
	    set displayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMode = value;
	        }
	    }
	    /** Specifies the layout style displayed for the month or year view when calendarMode is set to "Default." This setting controls how dates are visually organized and presented to the user, such as showing days within a month grid or listing months within a year, depending on the selected calendar mode.
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
	    /** Specifies the vertical height, in pixels, of the month selection dropdown within the Calendar component. This setting controls how much space the dropdown occupies when users select a month. Adjusting this value can improve usability and visual consistency with other UI elements.
	    *	Property type: string | number
	    */
	    get dropDownHeight() {
	        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	    }
	    set dropDownHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownHeight = value;
	        }
	    }
	    /** Specifies the width of the month selection dropdown within the Calendar component. This property controls how wide the dropdown appears, allowing you to adjust its size for better alignment or readability within the Calendar interface.
	    *	Property type: string | number
	    */
	    get dropDownWidth() {
	        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	    }
	    set dropDownWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dropDownWidth = value;
	        }
	    }
	    /** Specifies which day is considered the start of the week, using a numeric value where 0 represents Sunday, 1 represents Monday, up to 6 for Saturday. For example, setting the value to 1 makes Monday the first day of the week.
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
	    /** Defines a custom footer template for the component. You can provide either the ID of an existing '' element in the DOM, or pass a direct reference to an 'HTMLTemplateElement'. The specified template will be used to render the footer section of the component.
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
	    /** Defines a custom header template for the component. You can provide either the string ID of an existing HTMLTemplateElement in the DOM or a direct reference to an HTMLTemplateElement. The specified template will be used to render the header section.
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
	    /** Conceals the display of weekday names in the user interface, ensuring that the days of the week (e.g., Monday, Tuesday, etc.) are not visible to users.
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
	    /** Prevents dates that belong to adjacent months from being displayed, ensuring that only the days within the current month are visible in the calendar view.
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
	    /** Determines whether the tooltip’s arrow indicator is visible. When enabled, the arrow will be hidden and only the tooltip’s content will be displayed.
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
	    /** Defines the specific dates that will be visually highlighted or marked as important within the interface. These dates can be used to indicate events, deadlines, holidays, or other noteworthy occasions that should stand out to users when viewing the calendar or date selector component.
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
	    /** Defines a template for displaying important dates. This property accepts either the ID of an HTML '' element present in the DOM, or a direct reference to that template element. The specified template will be used to render each important date in the component.
	    *	Property type: any
	    */
	    get importantDatesTemplate() {
	        return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
	    }
	    set importantDatesTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.importantDatesTemplate = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey, a unique identifier or code used to grant access to the product's locked features or content.
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
	    /** Specifies the language used for displaying all calendar elements, such as month names, day labels, and interface text, ensuring the calendar is localized for the selected language.
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
	    /** Callback function that allows you to define a custom format for messages returned by the Localization Module, enabling you to modify, wrap, or translate message content before it is delivered to the application.
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
	    /** Specifies the latest selectable date for the Calendar component. Accepts JavaScript Date objects or valid date string formats (e.g., 'YYYY-MM-DD', ISO 8601). Dates beyond this value will be disabled and cannot be selected by the user.
	    *	Property type: string | Date
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Sets or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized for different languages and regions. This property is intended for localization and works together with the locale property to support multiple languages in the widget’s user interface.
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
	    /** Specifies the earliest selectable date for the Calendar component. Accepts either JavaScript Date objects or strings in valid date formats (e.g., 'YYYY-MM-DD'). Dates earlier than this value will be disabled and cannot be selected.
	    *	Property type: string | Date
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Specifies how many months are displayed simultaneously within the calendar interface. You can select any value between 1 and 12, with 12 being the maximum number of months shown at once. If this property is not set, the calendar will display only a single month by default.
	    *	Property type: number
	    */
	    get months() {
	        return this.nativeElement ? this.nativeElement.months : undefined;
	    }
	    set months(value) {
	        if (this.nativeElement) {
	            this.nativeElement.months = value;
	        }
	    }
	    /** Specifies how month names are displayed in the header when DisplayMode is set to "Default" or when the Months property has a value greater than 1. This setting controls whether month names appear in their full, abbreviated, or custom format within the header section, improving readability and user interface customization.
	    *	Property type: MonthFormat | string
	    */
	    get monthNameFormat() {
	        return this.nativeElement ? this.nativeElement.monthNameFormat : undefined;
	    }
	    set monthNameFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.monthNameFormat = value;
	        }
	    }
	    /** Sets or retrieves the value of the element’s name attribute. This attribute identifies the element when submitting HTML forms, allowing its data to be included with the specified name as part of the form data sent to the server.
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
	    /** When the element is set to "readonly," users can see its content but cannot modify or edit its value. While the element remains focusable, all user input and changes are disabled, preventing any interaction that would alter its contents.
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
	    /** Defines a list of restricted dates that the user cannot select, hover over, or focus on within the date picker. These dates will be visually indicated as unavailable or disabled in the interface. Each restricted date can be provided as either a JavaScript Date object or a string in a recognized date format (such as 'YYYY-MM-DD'). Any date included in this list will be unselectable and visually styled to indicate its restricted status.
	    *	Property type: string[] | Date[]
	    */
	    get restrictedDates() {
	        return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
	    }
	    set restrictedDates(value) {
	        if (this.nativeElement) {
	            this.nativeElement.restrictedDates = value;
	        }
	    }
	    /** Specifies or retrieves a value that determines whether the element's content alignment supports right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. Enabling this property ensures that text and layout are properly adjusted for locales that require RTL formatting.
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
	    /** Specifies the orientation (horizontal or vertical) of the navigation buttons displayed in the header, and sets the direction in which the accompanying animation plays.
	    *	Property type: ViewLayout | string
	    */
	    get scrollButtonsNavigationMode() {
	        return this.nativeElement ? this.nativeElement.scrollButtonsNavigationMode : undefined;
	    }
	    set scrollButtonsNavigationMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollButtonsNavigationMode = value;
	        }
	    }
	    /** Specifies the alignment and placement of navigation buttons within the header section, controlling whether they appear on the left, center, or right side of the header.
	    *	Property type: LayoutPosition | string
	    */
	    get scrollButtonsPosition() {
	        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	    }
	    set scrollButtonsPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrollButtonsPosition = value;
	        }
	    }
	    /** Specifies the dates that should appear as selected within the component. These selected dates are visually distinguished from unselected dates using a different style or highlight. You can provide the selected dates either as JavaScript Date objects or as strings formatted in any valid date representation (e.g., 'YYYY-MM-DD').
	    *	Property type: string[] | Date[]
	    */
	    get selectedDates() {
	        return this.nativeElement ? this.nativeElement.selectedDates : undefined;
	    }
	    set selectedDates(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectedDates = value;
	        }
	    }
	    /** Specifies how users can select dates in the component, such as choosing a single date, a range of dates, or multiple individual dates.
	    *	Property type: CalendarSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** Specifies the amount of time (in milliseconds) that must pass between consecutive clicks of the calendar's date navigation buttons in the header. This delay helps prevent users from triggering rapid, repeated navigation actions and can be used to control the responsiveness of date changes in the calendar interface.
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
	    /** Specifies the initial delay, in milliseconds, before the date navigation buttons in the Calendar header begin to respond when pressed. This delay applies to the first action after a button is engaged, allowing users control over how quickly navigation starts.
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
	    /** Specifies the visual theme applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel throughout the user interface.
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
	    /** Specifies the template to be used for the calendar's title section. This property accepts either the ID of an HTMLTemplate element present in the DOM or a direct reference to an HTMLTemplate element. The provided template will be rendered in place of the default title section, allowing for custom formatting and content.
	    *	Property type: any
	    */
	    get titleTemplate() {
	        return this.nativeElement ? this.nativeElement.titleTemplate : undefined;
	    }
	    set titleTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.titleTemplate = value;
	        }
	    }
	    /** Controls whether tooltips are shown for important dates. When enabled, hovering over an important date will display a tooltip with additional information. When disabled, no tooltip will appear on hover.
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
	    /** Controls the visibility of the tooltip arrow for important dates. When enabled (default), an arrow is displayed on the tooltip to indicate its reference point. Disabling this option will hide the arrow, resulting in a plain tooltip without a directional indicator.
	    *	Property type: boolean
	    */
	    get tooltipArrow() {
	        return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
	    }
	    set tooltipArrow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipArrow = value;
	        }
	    }
	    /** Specifies the amount of time (in milliseconds) to wait before displaying the tooltip after a user hovers over or focuses on the target element. This controls how quickly the tooltip appears, allowing you to adjust the responsiveness of the tooltip based on user interaction.
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
	    /** Specifies a custom offset for the tooltip's position. Accepts an array containing two numbers: the first value represents the horizontal (left) offset, and the second value represents the vertical (top) offset. These values determine how many pixels the tooltip is shifted from its default position along the X (left) and Y (top) axes, respectively.
	    *	Property type: number[][]
	    */
	    get tooltipOffset() {
	        return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
	    }
	    set tooltipOffset(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipOffset = value;
	        }
	    }
	    /** Specifies the placement of the tooltip relative to its target element (e.g., top, right, bottom, or left).
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
	    /** Defines the template used for the tooltip's content. You can provide either the ID of an existing '' element in the DOM or a direct reference to an HTMLTemplateElement. The tooltip will render its content based on the markup and structure defined within the specified template.
	    *	Property type: any
	    */
	    get tooltipTemplate() {
	        return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	    }
	    set tooltipTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltipTemplate = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving focus, meaning it cannot be selected or activated using keyboard navigation or programmatic focus methods.
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
	    /** Specifies the display orientation of the Calendar component (horizontal or vertical), affecting how dates and months are arranged within the calendar view.
	    *	Property type: ViewLayout | string
	    */
	    get view() {
	        return this.nativeElement ? this.nativeElement.view : undefined;
	    }
	    set view(value) {
	        if (this.nativeElement) {
	            this.nativeElement.view = value;
	        }
	    }
	    /** Specifies which sections of the Calendar component are displayed to the user. Available sections include: 'title', 'header', and 'footer'. You may enable any combination of these sections simultaneously by listing them together. If this setting is not specified, only the 'header' section will be shown by default.
	    *	Property type: string[]
	    */
	    get viewSections() {
	        return this.nativeElement ? this.nativeElement.viewSections : undefined;
	    }
	    set viewSections(value) {
	        if (this.nativeElement) {
	            this.nativeElement.viewSections = value;
	        }
	    }
	    /** Controls the display of week numbers within the calendar. When enabled, a week number is shown at the start of each week row, allowing users to easily reference and distinguish weeks. If disabled, week numbers are hidden, and only the standard calendar dates are displayed.
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
	    /** Specifies how many weeks are displayed in the calendar view. This property accepts integer values from 1 to 6, where 1 displays a single week and 6 displays six weeks, representing a full month view.
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
	    /** Specifies the format in which the year is displayed in the header when the DisplayMode property is set to "Default" or when the Months property has a value greater than 1. This setting controls how the year appears (e.g., "2024", "24") in the header section of the component.
	    *	Property type: YearFormat | string
	    */
	    get yearFormat() {
	        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
	    }
	    set yearFormat(value) {
	        if (this.nativeElement) {
	            this.nativeElement.yearFormat = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "animationSettings", "calendarMode", "dayNameFormat", "dateFormatFunction", "disabled", "disableAutoNavigation", "disableMouseWheel", "displayMode", "displayModeView", "dropDownHeight", "dropDownWidth", "firstDayOfWeek", "footerTemplate", "headerTemplate", "hideDayNames", "hideOtherMonthDays", "hideTooltipArrow", "importantDates", "importantDatesTemplate", "unlockKey", "locale", "localizeFormatFunction", "max", "messages", "min", "months", "monthNameFormat", "name", "readonly", "restrictedDates", "rightToLeft", "scrollButtonsNavigationMode", "scrollButtonsPosition", "selectedDates", "selectionMode", "spinButtonsDelay", "spinButtonsInitialDelay", "theme", "titleTemplate", "tooltip", "tooltipArrow", "tooltipDelay", "tooltipOffset", "tooltipPosition", "tooltipTemplate", "unfocusable", "view", "viewSections", "weekNumbers", "weeks", "yearFormat"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onDisplayModeChanging", "onDisplayModeChange", "onNavigationChanging", "onNavigationChange", "onOpen", "onClose", "onCreate", "onReady"];
	    }
	    /** Clears the current selection by removing all selected dates from the calendar. This action resets the calendar to its default unselected state, ensuring that no dates remain highlighted or chosen.
	    */
	    clearSelection() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearSelection();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearSelection();
	            });
	        }
	    }
	    /** Determines the navigation direction based on the provided argument: navigates forward if the argument is positive or "next," and navigates backward if the argument is negative or "previous."
	    * @param {number | Date | string} step. The argument can be the following: <ul><li> number -  representing the number of months to scroll. Can be negavtive. If negative it will scroll backwards.</li><li> Date - a date object representing the Date to navigate to.</li><li> string - a string representing a valid Date, e.g. "2020-10-1" </li></ul>
	    * @returns {boolean}
	  */
	    navigate(step) {
	        const result = this.nativeElement.navigate(step);
	        return result;
	    }
	    /** Allows the user to select a date or deselect a previously selected date, updating the selection state accordingly.
	    * @param {Date | string} date. The date to be selected or unselected. The date can be a Date object or a string in valid date format.
	    */
	    select(date) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select(date);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select(date);
	            });
	        }
	    }
	    /** Selects the current date based on the user's system settings.
	    * @returns {Date}
	  */
	    today() {
	        const result = this.nativeElement.today();
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
	        return (React.createElement("smart-calendar", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Calendar = Calendar;
	exports.default = Calendar;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
