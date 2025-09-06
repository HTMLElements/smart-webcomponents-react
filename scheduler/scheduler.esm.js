
"use client";

import '../source/modules/smart.scheduler'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.scheduler');
}
import * as pkg from '../common/rrule.min.js';
window.rrule = { RRule:  pkg.default };
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Scheduler displays a set ot Events in Day, Week, Month, Agenda, Timeline Day, Timeline Week, Timeline Month views.
*/
class Scheduler extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Scheduler' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies how quickly the calendar view scrolls vertically or horizontally when a user drags an event near the edge of the view. Adjusting this value controls the speed at which the calendar auto-scrolls during drag-and-drop event operations, enhancing user navigation for long or densely populated calendars.
    *	Property type: number
    */
    get autoScrollStep() {
        return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
    }
    set autoScrollStep(value) {
        if (this.nativeElement) {
            this.nativeElement.autoScrollStep = value;
        }
    }
    /** Controls whether the height of all-day cells in the Day and Week calendar views automatically adjusts based on the number of events scheduled in each cell. When enabled, all-day cells will dynamically expand or contract in height to fit all contained events; when disabled, the cell height remains fixed regardless of the number of events.
    *	Property type: boolean
    */
    get autoHeightAllDayCells() {
        return this.nativeElement ? this.nativeElement.autoHeightAllDayCells : undefined;
    }
    set autoHeightAllDayCells(value) {
        if (this.nativeElement) {
            this.nativeElement.autoHeightAllDayCells = value;
        }
    }
    /** Specifies an array of objects, each representing a time interval with start and end properties. Both the start and end fields are ISO 8601 formatted date-time strings (e.g., "2022-10-25T12:00:00.000Z") that indicate the beginning and end of the interval, respectively. Example:'''json[  {    "start": "2022-10-25T12:00:00.000Z",    "end": "2022-10-25T13:00:00.000Z"  }]'''This format is typically used to represent a list of time ranges, where each object defines one range with a precise start and end timestamp in UTC.
    *	Property type: any
    */
    get available() {
        return this.nativeElement ? this.nativeElement.available : undefined;
    }
    set available(value) {
        if (this.nativeElement) {
            this.nativeElement.available = value;
        }
    }
    /** Specifies the color scheme used for the event background selector within the event window editor, defining the appearance and color options available for users when customizing the background of event windows.
    *	Property type: string[]
    */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        if (this.nativeElement) {
            this.nativeElement.colorScheme = value;
        }
    }
    /** Specifies the reference time that the Scheduler uses to display the current time indicator. By default, this is set to the current date and time (today). You can customize this value to display the indicator at a specific time, which is useful for testing or demonstrating features independent of the actual system clock.
    *	Property type: string | Date
    */
    get currentTime() {
        return this.nativeElement ? this.nativeElement.currentTime : undefined;
    }
    set currentTime(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTime = value;
        }
    }
    /** Enables or disables the display of the current time indicator within the view. When enabled, a visual marker or line is shown on the relevant view cells to highlight the present time, helping users easily identify the current point in the schedule or calendar interface.
    *	Property type: boolean
    */
    get currentTimeIndicator() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
    }
    set currentTimeIndicator(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTimeIndicator = value;
        }
    }
    /** Specifies the frequency, in seconds, at which the currentTimeIndicator is updated or refreshed. This setting controls how often the indicator reflects the current time, allowing you to adjust the real-time accuracy of the display.
    *	Property type: number
    */
    get currentTimeIndicatorInterval() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
    }
    set currentTimeIndicatorInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTimeIndicatorInterval = value;
        }
    }
    /** Specifies which items will be displayed in the context menu when it is activated by the user, allowing you to control the visibility of specific context menu options based on the current application state or user actions.
    *	Property type: any[]
    */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenuDataSource = value;
        }
    }
    /** Specifies whether clipboard shortcuts (copy, paste, and cut actions) are displayed in the Scheduler's context menu. When enabled, users can access and perform clipboard operations directly from the context menu for scheduled events. Disabling this option hides clipboard shortcut commands from the menu.
    *	Property type: boolean
    */
    get contextMenuClipboardActions() {
        return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
    }
    set contextMenuClipboardActions(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenuClipboardActions = value;
        }
    }
    /** Enables customization of the content displayed within event elements. This option accepts one of the following:- An 'HTMLTemplateElement' to define the layout and content for all event elements. Property bindings within the template can be used, and they will automatically map to the relevant properties of each event object.- The 'id' (as a string) of an 'HTMLTemplateElement', which will be used for rendering all events.- A custom function to generate event content dynamically. This function is called for each event and receives the following parameters:  - 'eventContent' – The content container element for the specific event.  - 'eventObj' – The JavaScript object representing the event’s data.Using an 'HTMLTemplateElement' allows you to leverage property bindings (e.g., '{{propertyName}}') within the template, enabling dynamic insertion of event-specific values when rendering each event element.
    *	Property type: any
    */
    get eventTemplate() {
        return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
    }
    set eventTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventTemplate = value;
        }
    }
    /** Allows you to customize the content displayed by event collector elements. The customization can be provided in one of the following forms:- 'HTMLTemplateElement': Directly supply an 'HTMLTemplateElement'. This template will be cloned and applied to all event collector entries. You can define property bindings within the template, and these will be mapped to the corresponding properties of the event object for each entry.- 'String (Template ID)': Provide the string ID of an 'HTMLTemplateElement' present in the DOM. The element with this ID will be used as the template as described above.- 'Function': Provide a function that will be invoked for each event. This function receives the following parameters:  - 'eventContent': The container element for the event's content, which you can modify or populate.  - 'eventObj': The event data object itself, allowing you to access event-specific information.When using a template, dynamic property bindings are supported—you can reference fields from the 'eventObj' directly within your template markup.This flexibility allows you to fully control the structure, layout, and dynamic content of each event as it is rendered by the event collector.
    *	Property type: any
    */
    get eventCollectorTemplate() {
        return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
    }
    set eventCollectorTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventCollectorTemplate = value;
        }
    }
    /** Determines the rendering style for events displayed within the Scheduler component.      classic &ndash; Events are visually arranged side-by-side within each cell, with their sizes adjusted to ensure they fit entirely within the cell boundaries. If multiple events overlap in the same time slot, they are compressed horizontally to avoid overflow and remain fully visible within the cell.        modern &ndash; Events adhere to their specified CSS size properties, such as height and width, rather than automatically resizing to fit the cell. If there are more events than can visibly fit within a cell, an "event collector" (typically a counter or indicator) is displayed that, when clicked, reveals the hidden events in a popup or modal. On mobile devices, due to limited screen space, only event collectors are shown within each cell, requiring the user to tap to view the full list of events.
    *	Property type: SchedulerEventRenderMode | string
    */
    get eventRenderMode() {
        return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
    }
    set eventRenderMode(value) {
        if (this.nativeElement) {
            this.nativeElement.eventRenderMode = value;
        }
    }
    /** Enables the customization of the content displayed within the event menu tooltip. When a user clicks on an event element, a menu opens showing detailed information about that event. You can define this content in one of three ways:- 'HTMLTemplateElement': Provide a template element that will be applied to all events. Inside the template, you can use property bindings referencing the event object’s properties for dynamic content generation.- 'String (Template ID)': Pass the ID of an 'HTMLTemplateElement' as a string to use that template for all event tooltips.- 'Function': Supply a callback function that is invoked for each event. This function receives the following parameters:  - 'eventContent': The container element or node where the event’s menu content should be rendered or modified.  - 'eventObj': The event data object with all event properties.  Using an HTMLTemplateElement allows you to seamlessly bind event properties within the template’s markup, making it easy to display custom information for each event.This option gives you full flexibility to design and control the appearance and content of the event details menu, ensuring it matches your application's needs and styling.
    *	Property type: any
    */
    get eventTooltipTemplate() {
        return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
    }
    set eventTooltipTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventTooltipTemplate = value;
        }
    }
    /** Enables customization of the timeline cell content. This option accepts one of the following:- 'HTMLTemplateElement': A template element whose content will be used for all timeline cells. When using a template, you can define property bindings within the template, which will be replaced with the corresponding values for each cell at render time.- 'String (template ID)': The ID of an HTMLTemplateElement defined elsewhere in the DOM. The referenced template's content will be applied to all cells.- 'Function': A callback function that will be invoked for each cell. The function receives the following parameters:  - 'cellContent': The container element for the cell’s content.  - 'cellDate': A date object representing the specific date of the cell.This flexibility allows you to either use a standard HTML template for all cells or provide a custom rendering function to dynamically generate cell content based on cell data. When using an HTMLTemplateElement, you can include dynamic bindings within the template, which will be populated with the appropriate cell values during rendering.
    *	Property type: any
    */
    get cellTemplate() {
        return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
    }
    set cellTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.cellTemplate = value;
        }
    }
    /** Specifies the date that is currently displayed in the Scheduler view, allowing you to control which day, week, or month is shown to users. This property can be set programmatically to change the visible date or used to track which date the user is viewing in the Scheduler interface.
    *	Property type: string | Date
    */
    get dateCurrent() {
        return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
    }
    set dateCurrent(value) {
        if (this.nativeElement) {
            this.nativeElement.dateCurrent = value;
        }
    }
    /** Configures the data export settings for the Scheduler, including file format, export range, and additional export-related options.
    *	Property type: SchedulerDataExport
    */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.dataExport = value;
        }
    }
    /** Specifies the list of events that will be displayed within the Timeline component. Each event must be represented as an object with the following required properties:
    *	Property type: SchedulerEvent[]
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** A callback function that allows you to customize the text displayed within the date selector in the header section. This function receives a single parameter—the currently selected date—enabling you to return a custom string based on the date value. Use this callback to modify how the date appears in the header, such as formatting the date, adding prefixes or suffixes, or localizing the displayed value.
    *	Property type: any
    */
    get dateSelectorFormatFunction() {
        return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
    }
    set dateSelectorFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.dateSelectorFormatFunction = value;
        }
    }
    /** Specifies the display format for the day component of dates shown in the timeline. This setting controls how days are rendered, such as numeric (e.g., "12"), abbreviated (e.g., "Mon"), or full weekday names (e.g., "Monday"), to match the desired presentation style in the timeline.
    *	Property type: SchedulerDayFormat | string
    */
    get dayFormat() {
        return this.nativeElement ? this.nativeElement.dayFormat : undefined;
    }
    set dayFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.dayFormat = value;
        }
    }
    /** Determines whether the element is interactive or non-interactive. When enabled, the element can receive user input and respond to events. When disabled, the element becomes inactive, preventing user interaction and applying any default disabled styling.
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
    /** Prevents the timeline from automatically scrolling when you drag or resize an event, ensuring that the visible timeline remains stationary during these interactions.
    *	Property type: boolean
    */
    get disableAutoScroll() {
        return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
    }
    set disableAutoScroll(value) {
        if (this.nativeElement) {
            this.nativeElement.disableAutoScroll = value;
        }
    }
    /** Prevents users from dragging and repositioning events within the calendar interface. Events will remain fixed in their original positions, and any attempt to move them via drag-and-drop functionality will be disabled.
    *	Property type: boolean
    */
    get disableDrag() {
        return this.nativeElement ? this.nativeElement.disableDrag : undefined;
    }
    set disableDrag(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDrag = value;
        }
    }
    /** Prevents events from being removed or discarded when system resources are limited or when buffer overflows occur. All incoming events will be retained and processed, ensuring no loss of event data.
    *	Property type: boolean
    */
    get disableDrop() {
        return this.nativeElement ? this.nativeElement.disableDrop : undefined;
    }
    set disableDrop(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDrop = value;
        }
    }
    /** Prevents users from resizing events within the calendar interface, ensuring event durations remain fixed and cannot be adjusted through drag-and-drop or other resizing actions.
    *	Property type: boolean
    */
    get disableResize() {
        return this.nativeElement ? this.nativeElement.disableResize : undefined;
    }
    set disableResize(value) {
        if (this.nativeElement) {
            this.nativeElement.disableResize = value;
        }
    }
    /** Prevents users from selecting or highlighting the contents of the cell, disabling any cell selection functionality.
    *	Property type: boolean
    */
    get disableSelection() {
        return this.nativeElement ? this.nativeElement.disableSelection : undefined;
    }
    set disableSelection(value) {
        if (this.nativeElement) {
            this.nativeElement.disableSelection = value;
        }
    }
    /** Prevents the event window editor from opening, effectively disabling the ability for users to view or modify event details through the window interface.
    *	Property type: boolean
    */
    get disableWindowEditor() {
        return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
    }
    set disableWindowEditor(value) {
        if (this.nativeElement) {
            this.nativeElement.disableWindowEditor = value;
        }
    }
    /** Prevents the default context menu from appearing when users right-click on events or cells. This disables the standard browser context menu and any custom right-click actions for these elements.
    *	Property type: boolean
    */
    get disableContextMenu() {
        return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
    }
    set disableContextMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableContextMenu = value;
        }
    }
    /** Prevents the event menu from appearing when a user clicks on an event or collector. This setting effectively disables the popup menu that typically provides event-related options or actions upon selection, ensuring that no event menu is shown during user interaction.
    *	Property type: boolean
    */
    get disableEventMenu() {
        return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
    }
    set disableEventMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableEventMenu = value;
        }
    }
    /** Prevents users from accessing the view selection menu in the Scheduler, thereby disabling the ability to switch between different Scheduler views (such as day, week, or month).
    *	Property type: boolean
    */
    get disableViewMenu() {
        return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
    }
    set disableViewMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableViewMenu = value;
        }
    }
    /** Prevents the date selection menu from appearing, disabling the user's ability to change the current Scheduler date through the interface.
    *	Property type: boolean
    */
    get disableDateMenu() {
        return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
    }
    set disableDateMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDateMenu = value;
        }
    }
    /** A callback function that allows you to define and customize the visual feedback displayed to users while an event is being dragged. This enables you to modify the appearance or content of the drag preview element according to your application's requirements.
    *	Property type: any
    */
    get dragFeedbackFormatFunction() {
        return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
    }
    set dragFeedbackFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.dragFeedbackFormatFunction = value;
        }
    }
    /** Specifies the distance and direction that the drag feedback widget is shifted relative to the user’s pointer during a drag operation. This offset customizes where the feedback appears in relation to the pointer, allowing for better visual alignment or to avoid obscuring elements beneath the pointer.
    *	Property type: any
    */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.dragOffset = value;
        }
    }
    /** Specifies the filtering criteria for events in the Scheduler. The filter property supports two formats: an 'array of filter objects' or a 'custom filtering function'.'Array of Filter Objects'  Each object in the array represents a distinct filtering rule, and must include the following attributes:- 'name': The name of the Scheduler event property to filter by (for example, '"price"' or '"roomId"').- 'value': The condition against which the event property will be evaluated. This can be:  - A static value—used as the comparison target based on the current 'filterMode'. For example:    '''json    [{ "name": "price", "value": 25 }]    '''    This filters events to only those where the 'price' property matches '25'.  - A function—enables advanced, custom filtering logic for that property. The function receives the value of the specified event property and should return 'true' (to keep the event) or 'false' (to exclude the event).      Example:    '''js    [      { name: 'roomId', value: (id) => ['2', '3'].includes(String(id)) }    ]    '''    This example filters in only the events whose 'roomId' property is ''2'' or ''3''. All other events are filtered out.'Function as Filter'  Alternatively, you may assign a function directly to the 'filter' property for full control over filtering logic. This callback function receives each Scheduler event as its single argument and should return 'true' to include or 'false' to exclude the event.  Example:'''jsfilter: (event) => event.status === 'confirmed' && event.attendees.length > 2'''This custom function ensures only confirmed events with more than two attendees are shown in the Scheduler.'Summary:'  - Use an 'array of filter objects' for property-based filtering, supporting simple values or custom functions for each attribute.- Use a 'function' for comprehensive, event-level filtering based on any combination of criteria.This flexibility allows you to implement straightforward or highly customized filtering logic to match your application's requirements.
    *	Property type: any
    */
    get filter() {
        return this.nativeElement ? this.nativeElement.filter : undefined;
    }
    set filter(value) {
        if (this.nativeElement) {
            this.nativeElement.filter = value;
        }
    }
    /** Specifies whether filtering functionality is enabled for the Scheduler component. When set to true, users can filter scheduled items based on defined criteria; when false, filtering options are disabled and all items are displayed without filtering.
    *	Property type: any
    */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        if (this.nativeElement) {
            this.nativeElement.filterable = value;
        }
    }
    /** Specifies the method used to filter or process data, such as applying different algorithms or rules to control how information is displayed, sorted, or selected. The chosen filter mode affects how results are generated and presented.
    *	Property type: FilterMode | string
    */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        if (this.nativeElement) {
            this.nativeElement.filterMode = value;
        }
    }
    /** A getter method that retrieves and returns an array containing all event objects currently managed by the Scheduler. Each event object in the array represents a scheduled event with its associated properties and details.
    *	Property type: SchedulerEvent[]
    */
    get events() {
        return this.nativeElement ? this.nativeElement.events : undefined;
    }
    set events(value) {
        if (this.nativeElement) {
            this.nativeElement.events = value;
        }
    }
    /** Specifies which day will be considered the first day of the week in the Scheduler component. By default, this is set to Sunday. You can configure this setting to start the week on any preferred day (e.g., Monday, Tuesday) to better match regional and user preferences. This affects how weeks are displayed and navigated within the Scheduler.
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
    /** Enables customization of the Scheduler's footer area. The footer content can be provided in one of the following ways:- As an HTMLTemplateElement.- By specifying the id of an existing HTML template as a string.- By passing a function with the following parameter:  - footerContainer – The container element for the footer, which you can use to programmatically modify or populate the footer’s content.This flexibility allows you to define the Scheduler's footer using markup, template references, or custom logic as needed.
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
    /** Indicates whether events should be organized and displayed based on their associated dates, grouping all events that occur on the same date together.
    *	Property type: boolean
    */
    get groupByDate() {
        return this.nativeElement ? this.nativeElement.groupByDate : undefined;
    }
    set groupByDate(value) {
        if (this.nativeElement) {
            this.nativeElement.groupByDate = value;
        }
    }
    /** Specifies the direction or axis along which items are grouped, such as horizontal or vertical, affecting how elements are arranged and displayed within the interface.
    *	Property type: SchedulerGroupOrientation | string
    */
    get groupOrientation() {
        return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
    }
    set groupOrientation(value) {
        if (this.nativeElement) {
            this.nativeElement.groupOrientation = value;
        }
    }
    /** Enhances customization for group cell headers by allowing you to define how each group cell is rendered within the header section. You can specify one of the following as the template:- 'HTMLTemplateElement': Supply an HTML '' element that will be applied to all group header cells. Within your template, you can use property bindings that correspond to properties of the group cell object. These bindings will be automatically populated with the respective values for each cell.- 'Template ID (String)': Provide the 'id' attribute of an existing HTML '' element. The identified template will be used for rendering all group header cells.- 'Custom Function': Specify a function that will be called for each group cell. The function will receive two parameters:  - 'cellContent': A DOM element that acts as a container for the group cell’s content.  - 'cellObj': The data object associated with the current group cell.This approach gives you full flexibility to display custom content, styles, and data for group header cells according to your requirements. If you use an HTMLTemplateElement, you can leverage dynamic property bindings that map directly to the properties of each group cell’s data object.
    *	Property type: any
    */
    get groupTemplate() {
        return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
    }
    set groupTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.groupTemplate = value;
        }
    }
    /** Specifies the resource type or category by which events are organized or grouped, enabling the display and management of events according to associated resources (such as users, rooms, equipment, or custom entities). This setting determines how events are visually separated and filtered within the application based on their linked resources.
    *	Property type: any
    */
    get groups() {
        return this.nativeElement ? this.nativeElement.groups : undefined;
    }
    set groups(value) {
        if (this.nativeElement) {
            this.nativeElement.groups = value;
        }
    }
    /** Specifies the latest hour that will be visible on the calendar in both 'day' and 'week' views. Events scheduled after this hour will not be displayed in these views.
    *	Property type: number
    */
    get hourEnd() {
        return this.nativeElement ? this.nativeElement.hourEnd : undefined;
    }
    set hourEnd(value) {
        if (this.nativeElement) {
            this.nativeElement.hourEnd = value;
        }
    }
    /** Specifies the starting hour of the visible time range in the 'day' and 'week' calendar views. Events or time slots before this hour will not be shown in these views.
    *	Property type: number
    */
    get hourStart() {
        return this.nativeElement ? this.nativeElement.hourStart : undefined;
    }
    set hourStart(value) {
        if (this.nativeElement) {
            this.nativeElement.hourStart = value;
        }
    }
    /** Specifies how hours are displayed within the element, including aspects such as 12-hour or 24-hour format, inclusion of leading zeros, and any relevant separators or annotations (e.g., AM/PM).
    *	Property type: SchedulerHourFormat | string
    */
    get hourFormat() {
        return this.nativeElement ? this.nativeElement.hourFormat : undefined;
    }
    set hourFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.hourFormat = value;
        }
    }
    /** Enables customization of the Scheduler's header. The header can be specified in one of the following ways:- As an HTMLTemplateElement, allowing you to define a reusable template for the header's content.- As a string representing the id of an existing HTML template element in the DOM.- As a function that provides advanced customization. The function receives the following parameter:  - headerContent: The container element for the header, which you can modify or populate as needed.This flexibility lets you tailor the Scheduler's header to fit your specific design or functional requirements.
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
    /** Specifies the placement of the Date selector within the Header section of the component, allowing you to control where the Date selector appears relative to other header elements.
    *	Property type: SchedulerHeaderDatePosition | string
    */
    get headerDatePosition() {
        return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
    }
    set headerDatePosition(value) {
        if (this.nativeElement) {
            this.nativeElement.headerDatePosition = value;
        }
    }
    /** Defines and customizes the appearance and layout of the header navigation controls, including their colors, fonts, spacing, and interactive states. This setting allows you to adjust how navigation elements are presented in the header section of the application or website.
    *	Property type: SchedulerHeaderNavigationStyle | string
    */
    get headerNavigationStyle() {
        return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
    }
    set headerNavigationStyle(value) {
        if (this.nativeElement) {
            this.nativeElement.headerNavigationStyle = value;
        }
    }
    /** Specifies the exact location of the view selector control within the header section of the element, allowing you to control where the selector appears in relation to other header components.
    *	Property type: SchedulerHeaderViewPosition | string
    */
    get headerViewPosition() {
        return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
    }
    set headerViewPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.headerViewPosition = value;
        }
    }
    /** Specifies whether the 'All Day' container—which displays events scheduled to last the entire day—is visible or hidden. When set to true, the container and its all-day events will not be displayed; when false, they will be shown.
    *	Property type: boolean
    */
    get hideAllDay() {
        return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
    }
    set hideAllDay(value) {
        if (this.nativeElement) {
            this.nativeElement.hideAllDay = value;
        }
    }
    /** Specifies whether the days defined in the 'nonworkingDays' property should be visually hidden from view (e.g., not displayed in the calendar or schedule UI), rather than simply marked as non-working. When set to true, all days listed in 'nonworkingDays' will be completely omitted from the display. When set to false, these days remain visible but may be styled differently to indicate their non-working status.
    *	Property type: boolean
    */
    get hideNonworkingWeekdays() {
        return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
    }
    set hideNonworkingWeekdays(value) {
        if (this.nativeElement) {
            this.nativeElement.hideNonworkingWeekdays = value;
        }
    }
    /** Enhances the calendar's month view by controlling the visibility and interactivity of "other month" days—those that do not belong to the currently displayed month. When this option is enabled:- Days from previous or next months are displayed as inactive background cells.- Events 'cannot' be created, dragged, or dropped onto these "other month" days.- Events that 'start' on "other month" days are hidden; only events that 'end' on these days may be partially shown.- Resizing of events cannot begin or end on "other month" days.- Overall, "other month" days serve purely as visual placeholders, preventing user interaction or event association.
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
    /** Specifies whether the 'Today' button is visible in the user interface. When set to true, the 'Today' button will be hidden; when set to false, the button will be displayed.
    *	Property type: boolean
    */
    get hideTodayButton() {
        return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
    }
    set hideTodayButton(value) {
        if (this.nativeElement) {
            this.nativeElement.hideTodayButton = value;
        }
    }
    /** Controls the visibility of checkable items within the view selection menu. When enabled, checkable items are hidden from the menu; when disabled, checkable items are displayed, allowing users to select or deselect individual views.
    *	Property type: boolean
    */
    get hideViewMenuCheckableItems() {
        return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
    }
    set hideViewMenuCheckableItems(value) {
        if (this.nativeElement) {
            this.nativeElement.hideViewMenuCheckableItems = value;
        }
    }
    /** Specifies whether weekend days (typically Saturday and Sunday) should be displayed or hidden in the calendar view. If set to true, weekend days will be hidden; if set to false, weekend days will be visible.
    *	Property type: boolean
    */
    get hideWeekend() {
        return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
    }
    set hideWeekend(value) {
        if (this.nativeElement) {
            this.nativeElement.hideWeekend = value;
        }
    }
    /** Specifies where the legend is displayed within the Scheduler component. By default, the legend appears in the footer section, but it can be configured to display in the header instead. This setting allows you to customize the placement of the legend to better fit your application's layout and user experience requirements.
    *	Property type: SchedulerLegendLocation | string
    */
    get legendLocation() {
        return this.nativeElement ? this.nativeElement.legendLocation : undefined;
    }
    set legendLocation(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLocation = value;
        }
    }
    /** Specifies the placement of the legend within the chart area. By default, the legend appears on the 'near' side (typically aligned to the left or top, depending on chart orientation). Setting this property to 'far' positions the legend on the opposite side (right or bottom), allowing customization of the legend's location to better suit your layout needs.
    *	Property type: SchedulerLegendPosition | string
    */
    get legendPosition() {
        return this.nativeElement ? this.nativeElement.legendPosition : undefined;
    }
    set legendPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.legendPosition = value;
        }
    }
    /** Specifies how the legend items are arranged within the chart, such as organizing them in a horizontal row, vertical column, or a customized layout. This property controls the visual structure and ordering of items displayed in the legend.
    *	Property type: SchedulerLegendLayout | string
    */
    get legendLayout() {
        return this.nativeElement ? this.nativeElement.legendLayout : undefined;
    }
    set legendLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLayout = value;
        }
    }
    /** Specifies the maximum number of items that can be displayed in the legend as a horizontal list. If the number of legend items exceeds this value, the legend will automatically switch to a dropdown menu format for better readability and usability.
    *	Property type: number
    */
    get legendLayoutMenuBreakpoint() {
        return this.nativeElement ? this.nativeElement.legendLayoutMenuBreakpoint : undefined;
    }
    set legendLayoutMenuBreakpoint(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLayoutMenuBreakpoint = value;
        }
    }
    /** Controls the scroll increment when using the mouse wheel or trackpad. Setting this property to a positive number specifies the distance (in pixels, lines, or a defined unit) that the content will scroll with each wheel or trackpad movement. A higher value increases the scroll distance per step, while a lower value results in finer, more precise scrolling.
    *	Property type: number
    */
    get mouseWheelStep() {
        return this.nativeElement ? this.nativeElement.mouseWheelStep : undefined;
    }
    set mouseWheelStep(value) {
        if (this.nativeElement) {
            this.nativeElement.mouseWheelStep = value;
        }
    }
    /** Specifies whether the horizontal scrollbar is visible. If set to true, a horizontal scrollbar will appear when the content overflows the container’s width; if false, the scrollbar will be hidden regardless of overflow.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.horizontalScrollBarVisibility = value;
        }
    }
    /** Sets or retrieves the 'unlockKey', a unique value required to unlock and access the product’s full features or functionality.
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
    /** Specifies the language and regional settings used to display all interface elements, dates, and messages within the Scheduler component. This setting ensures that the Scheduler is localized according to the selected language.
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
    /** Determines the latest date that can be displayed or selected in the Scheduler, effectively setting an upper limit for the Scheduler's visible or selectable date range.
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
    /** Specifies the maximum number of events that can be displayed in each Scheduler cell. If this property is set to null (the default value), the Scheduler automatically calculates how many events can fit in a cell based on the available space and the size of each event. Setting a specific value overrides this behavior and limits the number of visible events per cell to the specified maximum. Events exceeding this limit may be hidden or grouped into an overflow indicator, depending on the Scheduler’s configuration.
    *	Property type: number | null
    */
    get maxEventsPerCell() {
        return this.nativeElement ? this.nativeElement.maxEventsPerCell : undefined;
    }
    set maxEventsPerCell(value) {
        if (this.nativeElement) {
            this.nativeElement.maxEventsPerCell = value;
        }
    }
    /** Specifies the earliest date that can be displayed or selected in the Scheduler. This property restricts navigation and date selection to dates on or after the defined minimum view date.
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
    /** Defines or retrieves an object containing all the text strings displayed by the element, allowing for easy localization of the user interface. This property should be used together with the locale property to dynamically present content in the user's preferred language or region. Each key in the object represents a specific string that can be customized or translated as needed."
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
    /** Specifies how minutes are displayed and formatted within the Scheduler component. This setting controls the appearance of minute values in time slots, event times, and related areas, ensuring consistency in how minutes are presented to users (e.g., "5", "05", or "5 min").
    *	Property type: MinuteFormat | string
    */
    get minuteFormat() {
        return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
    }
    set minuteFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.minuteFormat = value;
        }
    }
    /** Specifies the format in which month names are displayed within the Scheduler component. This setting controls whether full month names (e.g., "January"), abbreviated names (e.g., "Jan"), or custom formats appear in the Scheduler's interface wherever month names are shown.
    *	Property type: MonthFormat | string
    */
    get monthFormat() {
        return this.nativeElement ? this.nativeElement.monthFormat : undefined;
    }
    set monthFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.monthFormat = value;
        }
    }
    /** Specifies which days of the week are considered nonworking, using an array of numbers from 0 to 6, where 0 represents the first day of the week (e.g., Sunday or Monday, depending on your locale), and 6 represents the last day. These designated nonworking days will be visually distinguished within the Timeline component by applying a different background color. The specific color used for nonworking days is controlled by a configurable CSS variable, allowing for easy theming and customization.
    *	Property type: any
    */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingDays = value;
        }
    }
    /** Specifies the nonworking hours within a day. The nonworking hours are defined using an array, where each element represents either a single hour (as a number) or a range of hours (as an array containing the start and end hours, separated by a comma). For example, '[0, [13, 15], 23]' marks hour 0, hours 13 through 15 (inclusive), and hour 23 as nonworking. On the timeline, cells corresponding to these nonworking hours are visually distinguished by a different color from the working hours.
    *	Property type: any
    */
    get nonworkingHours() {
        return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
    }
    set nonworkingHours(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingHours = value;
        }
    }
    /** Specifies the time interval, in seconds, at which the element will automatically check for new notifications. This value controls how frequently the element polls for updates, with shorter intervals resulting in more frequent checks.
    *	Property type: number
    */
    get notificationInterval() {
        return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
    }
    set notificationInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.notificationInterval = value;
        }
    }
    /** Controls whether the resize handles are visible to the user, allowing them to resize the element. When enabled, resize handles will appear on the edges or corners of the element; when disabled, resize handles will be hidden and resizing will not be possible via the user interface.
    *	Property type: ResizeHandlesVisibility | string
    */
    get resizeHandlesVisibility() {
        return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
    }
    set resizeHandlesVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeHandlesVisibility = value;
        }
    }
    /** ''  Specifies how frequently the element's content should update (refresh) when the element is resized. By default, the content refreshes immediately on every resize event. Adjusting this property enables throttling, which limits the rate of refreshes and can improve performance by reducing unnecessary updates during rapid or continuous resizing. You can set it to a time interval (in milliseconds) to control the minimum delay between refresh operations.
    *	Property type: number
    */
    get resizeInterval() {
        return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
    }
    set resizeInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeInterval = value;
        }
    }
    /** An array containing resource objects that can be allocated or linked to specific events. Each resource represents an entity—such as a person, room, or asset—that can be associated with one or more events for scheduling or organizational purposes.
    *	Property type: SchedulerResource[]
    */
    get resources() {
        return this.nativeElement ? this.nativeElement.resources : undefined;
    }
    set resources(value) {
        if (this.nativeElement) {
            this.nativeElement.resources = value;
        }
    }
    /** Specifies an array of restricted dates on which events are not permitted. Any events that overlap with these restricted dates, or that start or end on these dates, will be excluded from display and unavailable for scheduling.
    *	Property type: any
    */
    get restrictedDates() {
        return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
    }
    set restrictedDates(value) {
        if (this.nativeElement) {
            this.nativeElement.restrictedDates = value;
        }
    }
    /** Specifies an array of restricted hours during which events are not permitted to be scheduled. Any event that overlaps with, starts, or ends within these restricted hours will be excluded from display. This ensures that no events are shown during the designated unavailable time periods.
    *	Property type: any
    */
    get restrictedHours() {
        return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
    }
    set restrictedHours(value) {
        if (this.nativeElement) {
            this.nativeElement.restrictedHours = value;
        }
    }
    /** Defines an array of time restrictions specifying when events are not permitted. Each element in the array is an object that must include two fields: date and hours.- The 'date' field indicates the specific day on which the restriction applies (e.g., 'new Date(2023, 10, 1)').- The 'hours' field specifies one or more restricted hours within that day. This is an array where each item represents a restricted period, defined either as:  - a single hour (e.g., '12', which restricts only the hour 12:00–13:00), or  - an array of two numbers specifying a start and end hour in 24-hour format (e.g., '[0, 6]' restricts from 00:00 up to, but not including, 06:00; '[20, 23]' restricts from 20:00 up to, but not including, 23:00).Events that have any portion overlapping these restricted hours—either beginning, ending, or entirely contained within them—will be excluded and not displayed.'Example:'  '''js{  date: new Date(2023, 10, 1),  hours: [[0, 6], 12, [20, 23]]}'''This restricts events from being scheduled on November 1, 2023, between midnight and 6 AM, exactly at 12 PM–1 PM, and from 8 PM to 11 PM.Use this array to block out specific times when events should not be allowed, similar to the 'restrictedHours' property, but with restrictions tied to specific calendar dates.
    *	Property type: any
    */
    get restricted() {
        return this.nativeElement ? this.nativeElement.restricted : undefined;
    }
    set restricted(value) {
        if (this.nativeElement) {
            this.nativeElement.restricted = value;
        }
    }
    /** Sets or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in locales with RTL languages such as Arabic or Hebrew. This property ensures proper text and layout orientation to support languages that are read from right to left.
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
    /** Specifies the placement of the date navigation buttons within the element’s header, determining where buttons such as “Previous”, “Next”, or “Today” appear in relation to other header content.
    *	Property type: SchedulerScrollButtonsPosition | string
    */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.scrollButtonsPosition = value;
        }
    }
    /** Controls the activation of the current time shader. When enabled, all cells representing times that have already passed will be visually shaded to distinguish them from upcoming times. Disabling this option will remove the shading, displaying all time cells with the default appearance.
    *	Property type: boolean
    */
    get shadeUntilCurrentTime() {
        return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
    }
    set shadeUntilCurrentTime(value) {
        if (this.nativeElement) {
            this.nativeElement.shadeUntilCurrentTime = value;
        }
    }
    /** Controls the visibility of the resource legend in the Scheduler component. When enabled, the resource legend appears in the footer section and displays a list of resources along with their respective items. If the filterable option is set to true, users can click on any resource item within the legend to filter the Scheduler view by that specific resource, making it easier to focus on relevant events or data.
    *	Property type: boolean
    */
    get showLegend() {
        return this.nativeElement ? this.nativeElement.showLegend : undefined;
    }
    set showLegend(value) {
        if (this.nativeElement) {
            this.nativeElement.showLegend = value;
        }
    }
    /** Specifies the property name within each resource data item (defined by resource.dataSource) that will be used to sort the resources. This determines the field by which the resource data is ordered when displayed or processed.
    *	Property type: string
    */
    get sortBy() {
        return this.nativeElement ? this.nativeElement.sortBy : undefined;
    }
    set sortBy(value) {
        if (this.nativeElement) {
            this.nativeElement.sortBy = value;
        }
    }
    /** Enables you to specify a custom sorting function that determines the order in which resource data is sorted. The provided sortFunction will be invoked whenever the sortOrder property is set to custom. This allows for full control over the sorting logic, accommodating complex or specialized sorting requirements beyond the default sort options.
    *	Property type: any
    */
    get sortFunction() {
        return this.nativeElement ? this.nativeElement.sortFunction : undefined;
    }
    set sortFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.sortFunction = value;
        }
    }
    /** Specifies how the resource data items should be sorted. Acceptable values are asc for ascending order and desc for descending order. If set to custom, you must also provide a custom sorting function using the sortFunction property. The chosen sorting order determines how the data items are organized and displayed.
    *	Property type: SchedulerSortOrder | string
    */
    get sortOrder() {
        return this.nativeElement ? this.nativeElement.sortOrder : undefined;
    }
    set sortOrder(value) {
        if (this.nativeElement) {
            this.nativeElement.sortOrder = value;
        }
    }
    /** Specifies the interval, in milliseconds, between repeated activation events when a repeat button within the element's header is held down. This applies to buttons such as the date navigation controls and the view scrolling buttons, allowing users to quickly navigate by holding the button instead of clicking multiple times.
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
    /** Specifies the initial delay (in milliseconds) before the repeat buttons located in the header of the element begin to trigger repeated actions when held down. These repeat buttons include the date navigation buttons (e.g., previous/next date) and the view scroll buttons. Setting this value controls how long a user must hold down the button before the action starts repeating automatically.
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
    /** Specifies the list of status options that users can select from when managing events through the window editor interface. These statuses help categorize or track the current state of each event.
    *	Property type: SchedulerStatuse[]
    */
    get statuses() {
        return this.nativeElement ? this.nativeElement.statuses : undefined;
    }
    set statuses(value) {
        if (this.nativeElement) {
            this.nativeElement.statuses = value;
        }
    }
    /** Gets or sets the visual theme of the element, allowing you to customize its appearance (such as color scheme, style, or look) according to the specified theme value.
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
    /** A formatting function specifically for the Timeline Header. This function enables customization of the text displayed as date labels within the header cells, allowing you to modify the appearance or format of dates (e.g., changing date formats, adding prefixes/suffixes, or translating labels) according to your requirements.
    *	Property type: any
    */
    get timelineHeaderFormatFunction() {
        return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
    }
    set timelineHeaderFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.timelineHeaderFormatFunction = value;
        }
    }
    /** Specifies the time interval (such as days, weeks, or months) used to label and organize each cell within the timeline, controlling how dates are displayed and grouped.
    *	Property type: SchedulerTimelineDayScale | string
    */
    get timelineDayScale() {
        return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
    }
    set timelineDayScale(value) {
        if (this.nativeElement) {
            this.nativeElement.timelineDayScale = value;
        }
    }
    /** Controls the visibility of tick marks displayed next to the time labels in the vertical header of the element. These tick marks appear in the time header section, which is shown only in 'day' and 'week' views. Enabling this option will show tick marks for each time cell; disabling it will hide them.
    *	Property type: boolean
    */
    get timeRulerTicks() {
        return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
    }
    set timeRulerTicks(value) {
        if (this.nativeElement) {
            this.nativeElement.timeRulerTicks = value;
        }
    }
    /** Specifies the time zone to be applied to the element. If this property is not set, the element defaults to using the user's local time zone.
    *	Property type: SchedulerTimeZone | string
    */
    get timeZone() {
        return this.nativeElement ? this.nativeElement.timeZone : undefined;
    }
    set timeZone(value) {
        if (this.nativeElement) {
            this.nativeElement.timeZone = value;
        }
    }
    /** Enables the display of multiple time zones simultaneously, in addition to the default time zone specified by the timeZone property. This property accepts an array of string values, where each value corresponds to a valid time zone identifier. The complete list of supported time zone identifiers can be found in the timeZone property documentation. By default, only the user's local time zone is shown if no additional time zones are provided.
    *	Property type: any
    */
    get timeZones() {
        return this.nativeElement ? this.nativeElement.timeZones : undefined;
    }
    set timeZones(value) {
        if (this.nativeElement) {
            this.nativeElement.timeZones = value;
        }
    }
    /** Specifies the delay, in milliseconds, before the tooltip or menu is displayed after a triggering event (such as hover or click). This allows you to control how quickly the tooltip or menu appears, enhancing user experience and preventing accidental activations.
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
    /** Specifies the distance (in pixels or other units) by which the tooltip or menu is shifted from its default position relative to its target element. Adjusting this value changes how far the tooltip or menu appears from the target, allowing for precise placement and improved visual alignment.
    *	Property type: number[]
    */
    get tooltipOffset() {
        return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
    }
    set tooltipOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipOffset = value;
        }
    }
    /** Specifies whether the vertical scrollbar is visible, allowing users to scroll content vertically when necessary. Set to true to display the vertical scrollbar, or false to hide it.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.verticalScrollBarVisibility = value;
        }
    }
    /** Specifies the currently active view. This property accepts one of the view values defined in the views property. When using custom views, ensure each custom view includes a unique value property; this value will be assigned to the current view and used to control which view is displayed.
    *	Property type: string
    */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        if (this.nativeElement) {
            this.nativeElement.view = value;
        }
    }
    /** Specifies the current view type of the Scheduler component (e.g., 'day', 'week', 'month'). When defining custom views, ensure that each view includes a valid type property matching one of the supported view types. Note: This property is managed internally by the Scheduler and should not be set manually in your configuration.
    *	Property type: SchedulerViewType | string
    */
    get viewType() {
        return this.nativeElement ? this.nativeElement.viewType : undefined;
    }
    set viewType(value) {
        if (this.nativeElement) {
            this.nativeElement.viewType = value;
        }
    }
    /** Specifies the range of dates displayed in the timeline view. This property accepts an array containing either predefined view strings or custom view objects.'Usage:'- If you set an element to a string, use one of the following built-in view identifiers:   ''day'', ''week'', ''month'', ''agenda'', ''timelineDay'', ''timelineWeek'', ''timelineMonth''.- To define a custom view, provide an object with the properties detailed below.'Custom View Object Properties:'- 'label' _(string, required)_: The display name shown for the view in the UI.- 'value' _(string, required)_: A unique identifier for the view.- 'type' _(string, required)_: The underlying view type. Must match one of the default view types listed above.- 'hideWeekend' _(boolean, optional)_: If set to 'true', weekends will be hidden for this specific view.- 'hideNonworkingWeekdays' _(boolean, optional)_: If set to 'true', non-working weekdays (e.g., Monday–Friday) will be hidden for this view.- 'shortcutKey' _(string, optional)_: Assigns a custom keyboard shortcut for switching to this view.- 'hideHours' _(boolean, optional; timelineWeek only)_: If set to 'true', the timelineWeek view will display only day cells, hiding hour cells.By configuring this property, you have full control over which timeline views are available to users and how each view behaves. Use strings for standard views and objects when you need to define custom labels, behaviors, or shortcuts.
    *	Property type: SchedulerViews | string
    */
    get views() {
        return this.nativeElement ? this.nativeElement.views : undefined;
    }
    set views(value) {
        if (this.nativeElement) {
            this.nativeElement.views = value;
        }
    }
    /** Specifies the type of view selector that appears in the element's header, which controls how content is displayed (e.g., as a list, grid, or table view). This setting determines the layout options available to the user within the header section of the component.
    *	Property type: SchedulerViewSelectorType | string
    */
    get viewSelectorType() {
        return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
    }
    set viewSelectorType(value) {
        if (this.nativeElement) {
            this.nativeElement.viewSelectorType = value;
        }
    }
    /** Configures the rule used to determine the start date in Week and TimelineWeek views. By default, these views start from the current date, factoring in the value specified by the 'firstDayOfWeek' property. If the 'startDateRule' property is set to 'dateCurrent', the Week and TimelineWeek views will instead start from the date provided in the 'dateCurrent' property, overriding the default behavior.
    *	Property type: SchedulerViewStartDay | string
    */
    get viewStartDay() {
        return this.nativeElement ? this.nativeElement.viewStartDay : undefined;
    }
    set viewStartDay(value) {
        if (this.nativeElement) {
            this.nativeElement.viewStartDay = value;
        }
    }
    /** Specifies how the names of the weekdays are displayed within the element (e.g., full names, short names, or initials).
    *	Property type: WeekDayFormat | string
    */
    get weekdayFormat() {
        return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
    }
    set weekdayFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.weekdayFormat = value;
        }
    }
    /** Specifies the date format used to display years within the timeline header. This setting controls how year values are rendered (e.g., "YYYY", "YY", or "yyyy") when the header represents years, ensuring consistent and readable date presentation.
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
    /** Determines whether the element can receive keyboard focus. When set, the element becomes focusable and can be targeted using keyboard navigation (e.g., with the Tab key). When retrieved, it returns the current focusable state of the element.
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
    /** Specifies the maximum number of redo and undo actions that the Scheduler will retain in its history. Once this limit is reached, the oldest actions are automatically discarded to make room for new ones, ensuring that only the most recent actions up to the defined maximum are available for undo or redo operations.
    *	Property type: number
    */
    get undoRedoSteps() {
        return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
    }
    set undoRedoSteps(value) {
        if (this.nativeElement) {
            this.nativeElement.undoRedoSteps = value;
        }
    }
    /** This function allows you to fully customize the popup window that appears when editing events. It gives you complete control over the appearance, content, and behavior of the popup based on the event context. The function is called with the following arguments:      target – The popup window element that is about to be displayed. You can modify or replace this element to change how the popup looks and functions.        type – A string indicating the purpose of the popup window. The default value is an empty string (''), which signifies the standard event editing window. If the value is 'confirm', the popup serves as a confirmation dialog, typically shown when interacting with repeating events (e.g., asking whether to edit a single occurrence or the series).        eventObj – The event data object associated with the event being edited or confirmed. This object contains all relevant details about the event, allowing you to display or edit its properties within the popup.  Use this function to precisely tailor the event editing or confirmation experience in your application’s UI.
    *	Property type: any
    */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.windowCustomizationFunction = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["autoScrollStep", "autoHeightAllDayCells", "available", "colorScheme", "currentTime", "currentTimeIndicator", "currentTimeIndicatorInterval", "contextMenuDataSource", "contextMenuClipboardActions", "eventTemplate", "eventCollectorTemplate", "eventRenderMode", "eventTooltipTemplate", "cellTemplate", "dateCurrent", "dataExport", "dataSource", "dateSelectorFormatFunction", "dayFormat", "disabled", "disableAutoScroll", "disableDrag", "disableDrop", "disableResize", "disableSelection", "disableWindowEditor", "disableContextMenu", "disableEventMenu", "disableViewMenu", "disableDateMenu", "dragFeedbackFormatFunction", "dragOffset", "filter", "filterable", "filterMode", "events", "firstDayOfWeek", "footerTemplate", "groupByDate", "groupOrientation", "groupTemplate", "groups", "hourEnd", "hourStart", "hourFormat", "headerTemplate", "headerDatePosition", "headerNavigationStyle", "headerViewPosition", "hideAllDay", "hideNonworkingWeekdays", "hideOtherMonthDays", "hideTodayButton", "hideViewMenuCheckableItems", "hideWeekend", "legendLocation", "legendPosition", "legendLayout", "legendLayoutMenuBreakpoint", "mouseWheelStep", "horizontalScrollBarVisibility", "unlockKey", "locale", "max", "maxEventsPerCell", "min", "messages", "minuteFormat", "monthFormat", "nonworkingDays", "nonworkingHours", "notificationInterval", "resizeHandlesVisibility", "resizeInterval", "resources", "restrictedDates", "restrictedHours", "restricted", "rightToLeft", "scrollButtonsPosition", "shadeUntilCurrentTime", "showLegend", "sortBy", "sortFunction", "sortOrder", "spinButtonsDelay", "spinButtonsInitialDelay", "statuses", "theme", "timelineHeaderFormatFunction", "timelineDayScale", "timeRulerTicks", "timeZone", "timeZones", "tooltipDelay", "tooltipOffset", "verticalScrollBarVisibility", "view", "viewType", "views", "viewSelectorType", "viewStartDay", "weekdayFormat", "yearFormat", "unfocusable", "undoRedoSteps", "windowCustomizationFunction"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onBeginUpdate", "onEndUpdate", "onChange", "onItemChange", "onItemChanging", "onItemClick", "onItemInsert", "onItemRemove", "onItemUpdate", "onViewChange", "onViewChanging", "onEventShortcutKey", "onDateChange", "onDragStart", "onDragEnd", "onDropoverCell", "onResizeStart", "onResizeEnd", "onEditDialogOpening", "onEditDialogOpen", "onEditDialogClose", "onEditDialogClosing", "onContextMenuOpening", "onContextMenuOpen", "onContextMenuClose", "onContextMenuClosing", "onEventMenuOpening", "onEventMenuOpen", "onEventMenuClose", "onEventMenuClosing", "onDateMenuOpen", "onDateMenuClose", "onViewMenuOpen", "onViewMenuClose", "onNotificationOpen", "onNotificationClose", "onCreate", "onReady"];
    }
    /** Adds a new event to the Scheduler component. This method accepts a single event object, structured according to the Scheduler’s dataSource format. The event object supports a comprehensive set of properties, allowing for detailed configuration of event details, appearance, recurrence, and behavior:{  label?: string,                       // The event title/label (optional)  dateStart: date,                      // Start date and time (required)  dateEnd: date,                        // End date and time (required)  description?: string,                 // Additional event details (optional)  id?: string | number,                 // Unique event identifier (optional)  class?: string,                       // CSS class for custom styling (optional)  backgroundColor?: string,             // Background color (any CSS color value)  color?: string,                       // Text color (any CSS color value)  notifications?: [                     // Array of notification objects for reminders (optional)    {      interval: number,                 // Reminder interval in minutes/hours/days      type?: string,                    // Type of notification (email, popup, etc.)      time: number[]                    // Specific times (in minutes, relative to event start)    }  ],  allDay?: boolean,                     // Marks the event as an all-day event (optional)  disableDrag?: boolean,                // Prevents dragging/moving this event (optional)  disableResize?: boolean,              // Prevents resizing this event (optional)  repeat?: {                            // Recurrence rules (optional)    repeatFreq: string,                 // Frequency type: 'daily', 'weekly', 'monthly', etc.    repeatInterval: number,             // Interval for the repeat frequency (e.g., every 2 days)    repeatOn?: number | number[] | date,// Specific days or dates for recurrence pattern    repeatEnd?: number | date,          // Number of recurrences or end date    exceptions?: [                      // Dates or instances to exclude or modify (optional)      {        date: date,                     // Exception date (required)        dateStart?: date,               // Optional exception start time        dateEnd?: date,                 // Optional exception end time        hidden?: boolean,               // Whether this instance is hidden        backgroundColor?: string,       // Custom color for the exception        status?: string,                // Custom status        label?: string,                 // Custom label        description?: string,           // Custom description        notifications?: [               // Custom notifications for this exception          {            interval: number,            type?: string,            time: number[]          }        ],        disableDrag?: boolean,          // Disable dragging for this occurrence        disableResize?: boolean         // Disable resizing for this occurrence      }    ]  },  status?: string                       // Custom status for the event (optional)}**Summary:**  This flexible structure allows you to configure simple or complex events with custom colors, notifications, recurrences (including exceptions), interaction restrictions, and more. All properties are optional unless otherwise marked as required. The event object you provide will be added to the Scheduler and rendered according to the specified options.
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    */
    addEvent(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEvent(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEvent(eventObj);
            });
        }
    }
    /** Enhances the scheduler by allowing you to define and register a custom view.  For example: `scheduler.addView('week', 'My View', 'myView', false, false, 10);`  Here, the parameters specify the base view type ('week'), display name ('My View'), unique view ID ('myView'), two boolean options (such as visibility or default state), and a numeric parameter (such as duration or step).  You can then activate the new view with `scheduler.setView('myView');`.  This enables developers to quickly add personalized calendar views that suit specific application needs.
    * @param {string} type. The view type.
    * @param {string} label. The view's label displayed in the header.
    * @param {string} value. The view's value used to identify the view.
    * @param {boolean} hideWeekend. Determines whether to hide the weekend.
    * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
    * @param {number} additionalDays. Determines whether to add additional days to the view.
    */
    addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
            });
        }
    }
    /** Initiates an update operation, allowing you to group multiple method calls or set multiple properties simultaneously. This ensures that all changes are applied together, which can improve performance and prevent intermediate states from being visible during the update process. Use this when you need to batch updates for efficiency or consistency.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** Creates a new event with specified details (such as title, date, time, and description) and adds it to the Scheduler’s event list, making it available for viewing, editing, and management within the scheduling interface.
    * @param {string} label. Event label.
    * @param {string} value. Event value.
    * @param {string} dateStart. Event date start.
    * @param {string} dateEnd. Event date end.
    * @param {boolean} allDay. Event all day. Set it to true to create all day event.
    */
    createEvent(label, value, dateStart, dateEnd, allDay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
            });
        }
    }
    /** Finalizes the update operation, allowing the component to resume its normal rendering process. This method triggers a re-render of the element, ensuring that all recent changes are reflected in the UI.
    */
    endUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }
    /** Returns an array containing the start and end dates that define the current visible date range in the view. The first element is the start date, and the second element is the end date.
    * @returns {Date[]}
  */
    getViewDates() {
        const result = this.nativeElement.getViewDates();
        return result;
    }
    /** Refreshes the Scheduler by recalculating and updating the scrollbars to ensure proper alignment and visibility based on the current content and layout changes.
    * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
    */
    refresh(fullRefresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }
    /** Exports all scheduled events from the Scheduler component, allowing you to download or transfer event data in a supported format (e.g., JSON, CSV, or iCal) for external use, backup, or integration with other applications.
    * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer to the Smart Export Documentation.
    * @param {any} dataCallback?. A callback that allows to change the exported data.
    */
    exportData(dataFormat, callback, dataCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback, dataCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback, dataCallback);
            });
        }
    }
    /** Returns a detailed JSON object containing all the events currently managed by the Scheduler, including properties such as event IDs, titles, start and end times, locations, descriptions, and any custom metadata associated with each event. This allows for programmatic access to the full list of scheduled events for use in external applications or integrations.
    * @returns {any}
  */
    getDataSource() {
        const result = this.nativeElement.getDataSource();
        return result;
    }
    /** Returns a JSON-encoded object containing the detailed data for all resources managed by the Scheduler, including their unique identifiers, properties, and current state. This allows client applications to programmatically access and manipulate the full list of Scheduler resources in a structured format.
    * @returns {any}
  */
    getResources() {
        const result = this.nativeElement.getResources();
        return result;
    }
    /** Retrieves a date value based on the provided coordinate data, typically by mapping spatial or grid coordinates to a corresponding date in a dataset or timeline.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {string}
  */
    getDateFromCoordinates(x, y) {
        const result = this.nativeElement.getDateFromCoordinates(x, y);
        return result;
    }
    /** Determines if the cell at the specified coordinates represents an "all-day" cell, typically used for events that span the entire day in a calendar view.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {boolean}
  */
    getIsAllDayCellFromCoordinates(x, y) {
        const result = this.nativeElement.getIsAllDayCellFromCoordinates(x, y);
        return result;
    }
    /** Returns an object representing the current state of the Scheduler. This includes the following properties:  - dateCurrent: The Scheduler’s currently selected or displayed date.  - dataSource: The data source currently used to populate the Scheduler events or appointments.  - timeZone: The time zone setting currently applied to the Scheduler.  Use this method to retrieve a snapshot of the Scheduler’s core settings at any given moment.
    * @returns {any}
  */
    getState() {
        const result = this.nativeElement.getState();
        return result;
    }
    /** Removes a previously stored state of the element from LocalStorage using its assigned id as the key. An id attribute must be set on the element for this function to work correctly.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** Retrieves a previously saved state of the element. If a specific state is provided as an argument, it loads that state. If no argument is passed, the method checks LocalStorage for any existing saved states and loads the most recent one if available.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
    */
    loadState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }
    /** Stores the current event data associated with the element in LocalStorage. Note: The element must have a unique id attribute set for this functionality to work correctly.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
    */
    saveState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }
    /** Specifies and activates a custom view for the Scheduler component. For example, the code scheduler.addView('week', 'My View', 'myView', false, false, 10); creates a new view named "My View" of type "week" with the identifier "myView". The parameters control the view's properties, such as its type, display name, unique id, and other options. The following method, scheduler.setView('myView');, then switches the Scheduler to display the newly defined custom view.
    * @param {string} view?. The view's value. For example: 'day'.
    */
    setView(view) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setView(view);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setView(view);
            });
        }
    }
    /** Determines if a specific event is present within the Scheduler's collection of scheduled events. Returns true if the event exists; otherwise, returns false.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    containsEvent(eventObj) {
        const result = this.nativeElement.containsEvent(eventObj);
        return result;
    }
    /** Inserts an event object following the dataSource format. The event object supports a comprehensive set of properties for defining event details, appearance, recurrence, and behavior. The structure is as follows:{  label?: string,                   // (Optional) Title or name of the event  dateStart: date,                  // Start date and time of the event (Date object or ISO string)  dateEnd: date,                    // End date and time of the event (Date object or ISO string)  description?: string,             // (Optional) Detailed description of the event  id?: string | number,             // (Optional) Unique identifier for the event  class?: string,                   // (Optional) CSS class for custom styling  backgroundColor?: string,         // (Optional) Event background color (CSS color value)  color?: string,                   // (Optional) Text color for the event (CSS color value)  notifications?: [                 // (Optional) Array of notification settings for reminders    {      interval: number,             // Time interval before the event to trigger the notification (in minutes)      type?: string,                // (Optional) Type of notification (e.g., 'email', 'alert')      time: number[]                // Array of specific times (in minutes) for notifications    }  ],  allDay?: boolean,                 // (Optional) If true, the event lasts all day  disableDrag?: boolean,            // (Optional) If true, dragging/rescheduling is disabled for this event  disableResize?: boolean,          // (Optional) If true, resizing is disabled for this event  repeat?: {                        // (Optional) Recurrence configuration for repeating events    repeatFreq: string,             // Frequency of repetition ('daily', 'weekly', 'monthly', etc.)    repeatInterval: number,         // Number of intervals between repeats (e.g., every 2 days)    repeatOn?: number | number[] | date,   // (Optional) Specific days/dates the event repeats on    repeatEnd?: number | date,      // (Optional) End condition: number of occurrences or end date    exceptions?: [                  // (Optional) List of exceptions to recurrence rules      {        date: date,                 // Date of exception        dateStart?: date,           // (Optional) Start time for the exception        dateEnd?: date,             // (Optional) End time for the exception        hidden?: boolean,           // (Optional) If true, this occurrence is not displayed        backgroundColor?: string,   // (Optional) Custom background color for this occurrence        status?: string,            // (Optional) Status for this occurrence (e.g., 'cancelled')        label?: string,             // (Optional) Custom label for this occurrence        description?: string,       // (Optional) Custom description for this occurrence        notifications?: [{ interval: number, type?: string, time: number[] }], // (Optional) Notifications for this occurrence        disableDrag?: boolean,      // (Optional) Disable drag for this single occurrence        disableResize?: boolean     // (Optional) Disable resize for this single occurrence      }    ]  },  status?: string                   // (Optional) Current status of the event (e.g., 'pending', 'confirmed')}**Notes:**- Properties marked as optional (`?`) can be omitted.- The structure is fully compatible with dataSource arrays commonly used in calendar or scheduling components.- The object supports advanced event recurrence and exception handling for maximum flexibility in scheduling applications.
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    insertEvent(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertEvent(eventObj, index);
            });
        }
    }
    /** Updates an event object that follows the structure below. The event object format matches the dataSource format used by the application. Each property is described for clarity:{  label?: string,                  // (optional) The title or name of the event.  dateStart: date,                 // The start date and time of the event (Date object or valid date string).  dateEnd: date,                   // The end date and time of the event (Date object or valid date string).  description?: string,            // (optional) Detailed information or notes about the event.  id?: string | number,            // (optional) A unique identifier for the event (string or number).  class?: string,                  // (optional) CSS class(es) to style the event in the UI.  backgroundColor?: string,        // (optional) Background color for the event, specified as a CSS color value.  color?: string,                  // (optional) Text color for the event, specified as a CSS color value.  notifications?: [                // (optional) Array of notification settings for the event.    {      interval: number,            // Time interval before an event for sending a notification (in minutes/hours).      type?: string,               // (optional) Notification type (e.g., "email", "popup").      time: number[]               // Array of times (in minutes/hours) to trigger the notification.    }  ],  allDay?: boolean,                // (optional) Indicates if the event spans the entire day.  disableDrag?: boolean,           // (optional) Prevents the event from being moved via drag-and-drop in the UI.  disableResize?: boolean,         // (optional) Prevents the event from being resized in the UI.  repeat?: {                       // (optional) Recurrence settings for repeating events.    repeatFreq: string,            // Frequency of repetition (e.g., "daily", "weekly", "monthly").    repeatInterval: number,        // The interval between repetitions (e.g., every 2 days).    repeatOn?: number | number[] | date,  // (optional) Specific days or dates when the event repeats (e.g., day of week).    repeatEnd?: number | date,     // (optional) End of the recurrence - number of occurrences or a specific date.    exceptions?: [                 // (optional) List of exceptions/dates when the event does not occur or details of modified occurrences.      {        date: date,                // The exception date (date when event does not occur or is modified).        dateStart?: date,          // (optional) Modified start date/time for the exception occurrence.        dateEnd?: date,            // (optional) Modified end date/time for the exception occurrence.        hidden?: boolean,          // (optional) If true, hides this occurrence.        backgroundColor?: string,  // (optional) Background color override for this occurrence.        status?: string,           // (optional) Custom status for this occurrence.        label?: string,            // (optional) Custom label/title for this occurrence.        description?: string,      // (optional) Custom description for this occurrence.        notifications?: [          // (optional) Notification settings specifically for this occurrence.          {            interval: number,            type?: string,            time: number[]          }        ],        disableDrag?: boolean,     // (optional) Prevents this occurrence from being dragged in the UI.        disableResize?: boolean    // (optional) Prevents this occurrence from being resized in the UI.      }    ]  },  status?: string                  // (optional) The current status of the event (e.g., "confirmed", "tentative", "cancelled").}When updating the event object, all or some of these properties can be included based on which attributes need to be modified. This flexible structure allows for basic one-time events, as well as complex recurring events with customized properties and exceptions.
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    updateEvent(index, eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEvent(index, eventObj);
            });
        }
    }
    /** Deletes a specified event from the system, permanently removing its associated data and making it no longer accessible or visible to users.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    removeEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEvent(index);
            });
        }
    }
    /** Returns an array containing all exception instances associated with the specified recurring event. Each exception represents a single occurrence within the event series that differs from the original recurrence pattern, such as modified dates, details, or cancellations.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @returns {any}
  */
    getEventExceptions(eventObj) {
        const result = this.nativeElement.getEventExceptions(eventObj);
        return result;
    }
    /** Adds an exception to a recurring event, allowing you to modify or override specific occurrences in a repeating event series. Event exceptions are useful for handling changes such as rescheduling a single meeting in a weekly series, skipping a date, or altering event details for one instance without affecting the entire series.You can retrieve the individual occurrences of a recurring event using the following methods:  occurrences: Returns an array of all occurrences for a recurring event.  occurrencesBetween(startDate, endDate): Returns all occurrences that fall within the specified date range.  occurrenceAfter(date): Returns the first occurrence after the given date.  occurrenceBefore(date): Returns the last occurrence before the given date.To add an exception, call addEventException with the event object and a configuration object specifying the desired changes for a particular occurrence (such as a new date or label):Example usage:scheduler.addEventException(eventObj, {  date: occurrenceDate,              // Date of the occurrence to override  dateStart: newDateStart,           // New start date/time for this exception  dateEnd: newDateEnd,               // New end date/time for this exception  label: 'Exception'                 // (Optional) Label or description for this exception});This will create a customized exception for the specified recurrence, ensuring only the selected occurrence is modified while all other instances remain unaffected.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
    */
    addEventException(eventObj, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEventException(eventObj, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEventException(eventObj, exceptionObj);
            });
        }
    }
    /** Updates a single exception occurrence within a recurring event series.To retrieve the specific exception occurrences of a repeating event, you can use these methods:  occurrences: Returns all instances of the recurring event, including exceptions.  occurrencesBetween: Retrieves event occurrences that fall within a specified date range.  occurrenceAfter: Finds the next occurrence after a given date.  occurrenceBefore: Finds the previous occurrence before a given date.Use the updateEventException method to modify the details of a particular occurrence (exception) in a recurring event series. Supply:  eventObj - The original recurring event object.  dateOfOccurrence - The date/time identifying the specific occurrence to update.  changes - An object specifying the updates for this exception (such as new start/end times, label, etc.).Example usage:scheduler.updateEventException(  eventObj,   dateOfOccurrence,   { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });This call will update only the specified exception occurrence, leaving the rest of the recurring series unchanged.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
    * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
    */
    updateEventException(eventObj, exceptionRef, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
            });
        }
    }
    /** Removes a specified exception instance from a recurring event series, thereby restoring the affected occurrence to match the original recurring pattern.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
    */
    removeEventException(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEventException(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEventException(eventObj, index);
            });
        }
    }
    /** Opens a popup window that allows users to view and edit the details of a selected event. This enables modification of event information such as title, date, time, location, and other relevant attributes.
    * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
    */
    openWindow(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
            });
        }
    }
    /** Closes the currently open popup window, removing it from view and returning focus to the main application interface.
    */
    closeWindow() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }
    /** Prepares the Scheduler component for printing by formatting its layout and content for optimal print output, then triggers the browser’s Print Preview dialog for the user to review and print the schedule.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** Scrolls the Scheduler component to display the specified date. This method ensures that the view is brought to the appropriate date slot, making it visible to the user. If the date is not currently in view, the Scheduler will automatically scroll horizontally or vertically as needed to reveal the target date.
    * @param {Date} date. The date to scroll to.
    * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
    * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
    */
    scrollToDate(date, strictScroll, autoScroll) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
            });
        }
    }
    /** Transitions the Scheduler interface to display and focus on a specific date selected by the user.
    * @param {Date} date. The date to navigate to.
    */
    navigateToDate(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateToDate(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateToDate(date);
            });
        }
    }
    /** Smoothly scrolls the Scheduler component to bring the specified event into view, ensuring it is visible to the user in the current viewport.
    * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
    */
    scrollToEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToEvent(index);
            });
        }
    }
    /** Displays a custom notification to the user, allowing you to specify the message content, style, and behavior. This function enables dynamic alerts or updates within the application’s user interface.
    * @param {string} message. The notification message.
    * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
    */
    openNotification(message, toastSettings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openNotification(message, toastSettings);
            });
        }
    }
    /** Dismisses and removes all currently active notifications from view, ensuring that no notification messages remain visible to the user.
    */
    closeNotifications() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeNotifications();
            });
        }
    }
    /** Returns a list of all instances where the specified event occurs within the data set. Each occurrence is represented as an individual object or record, providing detailed information about that specific event instance. This enables comprehensive tracking and analysis of every time the event takes place.
    * @param {any} eventObj. A Scheduler evnet object.
    * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
    */
    occurrences(eventObj, count) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrences(eventObj, count);
            });
        }
    }
    /** Returns a list of all occurrences of a specified event that take place within the given start and end date range, inclusive. Each occurrence includes detailed event information and falls between the provided dates.
    * @param {any} eventObj. A Scheduler event object.
    * @param {Date} dateFrom. The start date.
    * @param {Date} dateTo. The end date.
    */
    occurrencesBetween(eventObj, dateFrom, dateTo) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    }
    /** Returns the first occurrence of an event that takes place after the specified date. This function searches through the list of events and retrieves the earliest event whose date is strictly later than the provided reference date. If no such event exists, it returns null or an appropriate default value.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date after which the first occurance of the event will be returned.
    */
    occurrenceAfter(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    }
    /** Returns the most recent occurrence of the specified event that occurred before the given date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date before which the first occurance of the event will be returned.
    */
    occurrenceBefore(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    }
    /** Returns the start and end dates (dateStart/dateEnd) for a specific timeline cell, representing the time interval covered by that cell on the timeline.
    * @param {HTMLElement} cell. A Scheduler timeline cell element.
    * @returns {any}
  */
    getCellDateRange(cell) {
        const result = this.nativeElement.getCellDateRange(cell);
        return result;
    }
    /** Displays the tooltip (event menu) associated with a specific event, providing additional information and context about the selected event when triggered.
    * @param {any} eventObj. A Scheduler event object or it's index.
    */
    openEventTooltip(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openEventTooltip(eventObj);
            });
        }
    }
    /** Closes and hides the event tooltip (also known as the event menu), removing it from view and preventing further interactions until it is reopened.
    */
    closeEventTooltip() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeEventTooltip();
            });
        }
    }
    /** Determines if the specified date is restricted. Returns true if the date falls within the set of restricted dates; otherwise, returns false.
    * @param {Date} date. A Date object.
    * @returns {boolean}
  */
    isDateRestricted(date) {
        const result = this.nativeElement.isDateRestricted(date);
        return result;
    }
    /** Determines whether the specified hour is restricted. Returns true if the hour falls within a restricted period; otherwise, returns false.
    * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
    * @returns {boolean}
  */
    isHourRestricted(hour) {
        const result = this.nativeElement.isHourRestricted(hour);
        return result;
    }
    /** Determines if the event is restricted by returning a boolean value: true if the event has access restrictions, or false if it is open to all users.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    isEventRestricted(eventObj) {
        const result = this.nativeElement.isEventRestricted(eventObj);
        return result;
    }
    /** Removes all existing entries from the undo and redo history, clearing any previous actions and preventing the user from undoing or redoing changes made prior to this operation.
    * @returns {boolean}
  */
    deleteUndoRedoHistory() {
        const result = this.nativeElement.deleteUndoRedoHistory();
        return result;
    }
    /** Specifies whether the action can be redone, indicating if there is a subsequent step available in the redo history that allows the user to reverse a previous undo operation.
    * @returns {boolean}
  */
    canRedo() {
        const result = this.nativeElement.canRedo();
        return result;
    }
    /** Specifies whether the most recent action can be undone by the user. If set to true, the user has the option to revert or reverse the previous action; if false, the action cannot be undone.
    * @returns {boolean}
  */
    canUndo() {
        const result = this.nativeElement.canUndo();
        return result;
    }
    /** Revert the changes made to the upcoming event modification, restoring the event to its previous state.
    * @param {number} step?. A step to redo to.
    * @returns {boolean}
  */
    redo(step) {
        const result = this.nativeElement.redo(step);
        return result;
    }
    /** Revert the most recent changes made to the event, restoring it to its previous state.
    * @param {number} step?. A step to undo to.
    * @returns {boolean}
  */
    undo(step) {
        const result = this.nativeElement.undo(step);
        return result;
    }
    /** Sets the locale of a component.
    * @param {string} locale. The locale abbreviation. For example: 'de'.
    * @param {any} messages?. Object containing the locale messages.
    */
    setLocale(locale, messages) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setLocale(locale, messages);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setLocale(locale, messages);
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
            Smart.Render();
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
        return (React.createElement("smart-scheduler", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Scheduler, Smart, Scheduler as default };
