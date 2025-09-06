
"use client";

import '../source/modules/smart.ganttchart'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.ganttchart');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
class GanttChart extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'GanttChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies whether nonworkingDays and nonworkingHours should be considered when calculating the dateEnd of tasks. When enabled, dateEnd is determined based only on actual working time, excluding periods defined as nonworking. If disabled (the default behavior), dateEnd is calculated using continuous calendar time, without regard for nonworking periods.
    *	Property type: boolean
    */
    get adjustToNonworkingTime() {
        return this.nativeElement ? this.nativeElement.adjustToNonworkingTime : undefined;
    }
    set adjustToNonworkingTime(value) {
        if (this.nativeElement) {
            this.nativeElement.adjustToNonworkingTime = value;
        }
    }
    /** Automatically recalculates and updates the scheduling of tasks based on their defined connections and dependencies. When tasks are linked (for example, via finish-to-start or start-to-start relationships), this process adjusts their start and end dates to maintain the intended order and constraints. If a task has no connections to other tasks, autoScheduling will not alter its dates until a new connection is established. The type of connection between tasks dictates how their possible start and end dates are constrained relative to each other.
    *	Property type: boolean
    */
    get autoSchedule() {
        return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
    }
    set autoSchedule(value) {
        if (this.nativeElement) {
            this.nativeElement.autoSchedule = value;
        }
    }
    /** This setting only impacts tasks when autoSchedule is enabled. When set to true, tasks are automatically and strictly scheduled based on their defined dependencies (connections), and users will not be able to manually drag tasks to reschedule them.Additionally, users can specify a lag value for individual task connections. The lag attribute represents the delay or overlap (specified in milliseconds) between the start or end times of two connected tasks. By configuring the lag property within each task connection in the dataSource, you can control the timing interval between dependent tasks.
    *	Property type: boolean
    */
    get autoScheduleStrictMode() {
        return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
    }
    set autoScheduleStrictMode(value) {
        if (this.nativeElement) {
            this.nativeElement.autoScheduleStrictMode = value;
        }
    }
    /** Specifies the speed at which the content scrolls when dragging an item and the autoScroll property is enabled. Increasing this value results in faster scrolling while dragging near the container's edge.
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
    /** Controls whether the column header menu is enabled or disabled. When enabled, hovering over a column header displays a dropdown button that opens a menu with quick actions such as sorting, filtering, and other column-specific operations. The available actions in this menu are context-sensitive and depend on which Gantt features are enabled; for example, the filtering option will be shown only if filtering is enabled for the corresponding column.
    *	Property type: boolean
    */
    get columnMenu() {
        return this.nativeElement ? this.nativeElement.columnMenu : undefined;
    }
    set columnMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.columnMenu = value;
        }
    }
    /** Specifies whether the Table columns can be resized by the user. When enabled, users can adjust the width of each column directly from the table’s header cells in both the Task and Resource timelines. This allows for greater flexibility in customizing the Table’s appearance to better fit the displayed data.
    *	Property type: boolean
    */
    get columnResize() {
        return this.nativeElement ? this.nativeElement.columnResize : undefined;
    }
    set columnResize(value) {
        if (this.nativeElement) {
            this.nativeElement.columnResize = value;
        }
    }
    /** Controls whether visual resize feedback is displayed while adjusting column width. This property is effective only when the columnResize feature is enabled. If set to true, users will see a preview of the new column size as they drag to resize; if set to false, no visual feedback will be shown during the resizing action.
    *	Property type: boolean
    */
    get columnResizeFeedback() {
        return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
    }
    set columnResizeFeedback(value) {
        if (this.nativeElement) {
            this.nativeElement.columnResizeFeedback = value;
        }
    }
    /** Enables or disables the visualization of the project’s Critical Path. When set to true, the Gantt chart highlights tasks that directly affect the project's total duration. The Critical Path represents the sequence of dependent tasks that cannot be delayed without delaying the overall project completion.
    *	Property type: boolean
    */
    get criticalPath() {
        return this.nativeElement ? this.nativeElement.criticalPath : undefined;
    }
    set criticalPath(value) {
        if (this.nativeElement) {
            this.nativeElement.criticalPath = value;
        }
    }
    /** Represents the current time indicator on the Gantt chart. By default, this value is set to today’s date, highlighting the present day on the timeline.
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
    /** Controls the visibility of the current time indicator within the scheduling view. When enabled, a highlighted marker or line is displayed across the relevant time slots or cells to indicate the current system time, helping users easily identify the present moment within the schedule or calendar interface. Disabling this option hides the indicator from view.
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
    /** Specifies how often, in seconds, the currentTimeIndicator is refreshed or updated. A lower value results in more frequent updates, while a higher value reduces the update rate, potentially improving performance.
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
    /** Configures the data export settings for the GanttChart, allowing customization of how chart data is exported (e.g., format, included fields, file name, and export behavior).
    *	Property type: GanttChartDataExport
    */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.dataExport = value;
        }
    }
    /** Determines the set of tasks to be displayed within the Timeline. The value must be an array of objects, where each object represents a single task and includes both required and optional properties that define its behavior and appearance. Required Task Properties:      label – A string value representing the name or description of the task.        dateStart – The task’s start date as a string in a valid date format (e.g., 'YYYY-MM-DD').        dateEnd – The task’s end date as a string in a valid date format.        type – Specifies the type of the task. Accepts one of: task (standard activity), project (parent grouping of subtasks), or milestone (key event). Each type may have type-specific behaviors and allowed attributes.  Optional Task Properties:      connections – An array of objects defining dependencies between tasks. Each connection object requires:                  target – An integer specifying the zero-based index of the target task in the main tasks array.                    type – An integer (0–3) indicating the type of dependency:                  0 – Start-to-Start          1 – End-to-Start          2 – End-to-End          3 – Start-to-End                            lag – A number denoting delay (positive) or overlap (negative) between auto-scheduled tasks, in applicable time units. Used in conjunction with autoSchedule.                  duration – Describes how long the task lasts (e.g., "3d", "4h", "15m"). Useful when dateEnd is unknown or not specified. Duration always represents total calendar time.        minDuration / maxDuration – Set minimum or maximum allowed duration for the task.        minDateStart / maxDateStart – Define earliest/latest allowed start dates, as strings in valid date formats.        minDateEnd / maxDateEnd – Define earliest/latest allowed end dates, as strings in valid date formats.        progress – A number from 0 to 100 indicating the percentage of work completed.        overdue – A boolean that is true if the task’s dateEnd has passed its deadline.        disableDrag – Boolean. If true, users cannot drag (move) the task on the timeline.        disableResize – Boolean. If true, users cannot resize the duration of the task on the timeline.        dragProject – Boolean. If true, allows the entire project (including all subtasks) to be dragged when the project parent task is dragged. Applicable only to project tasks.        segments – An array of objects allowing a task to be split into multiple segments with different properties (such as distinct start dates, labels, or durations).        synchronized – Boolean. If true, a project’s start and end dates are calculated automatically based on its child tasks, and cannot be moved independently. Applicable only to project tasks.        expanded – Boolean. Determines if a project’s subtasks are visible (expanded). If false, only the project summary bar is displayed. By default, projects are collapsed. Applicable only to project tasks.  The GanttChart component can also accept a DataAdapter instance as its data source for flexible data integration. For more details, see the DataAdapter documentation: https://www.htmlelements.com/docs/data-adapter/.
    *	Property type: any
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Specifies the display format for dates in the timeline header when the timeline is showing individual days. This setting controls how each day's date is presented (e.g., "MM/DD/YYYY", "Monday, Jan 1", etc.), ensuring that day labels in the header are clear and consistent with your application's requirements.
    *	Property type: GanttDayFormat | string
    */
    get dayFormat() {
        return this.nativeElement ? this.nativeElement.dayFormat : undefined;
    }
    set dayFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.dayFormat = value;
        }
    }
    /** Specifies a custom end date for the Timeline. This is useful when the user wants to define a specific end point for the Timeline, overriding the automatic calculation based on task completion dates. If no end date is provided, the Timeline will automatically use the latest end date from the existing tasks.
    *	Property type: string | Date
    */
    get dateEnd() {
        return this.nativeElement ? this.nativeElement.dateEnd : undefined;
    }
    set dateEnd(value) {
        if (this.nativeElement) {
            this.nativeElement.dateEnd = value;
        }
    }
    /** Specifies a custom starting date for the Timeline. This option is useful when you want the Timeline to begin on a specific date, rather than relying on the earliest start date of the tasks. If a starting date is not provided, the Timeline will automatically use the start date from the first scheduled task.
    *	Property type: string | Date
    */
    get dateStart() {
        return this.nativeElement ? this.nativeElement.dateStart : undefined;
    }
    set dateStart(value) {
        if (this.nativeElement) {
            this.nativeElement.dateStart = value;
        }
    }
    /** Specifies the date markers to be shown within the timeline of the GanttChart component. Date markers highlight and optionally label particular dates and times directly on the Gantt chart, providing visual cues or annotations for significant milestones, deadlines, or events within the project's schedule.
    *	Property type: GanttChartDateMarker[]
    */
    get dateMarkers() {
        return this.nativeElement ? this.nativeElement.dateMarkers : undefined;
    }
    set dateMarkers(value) {
        if (this.nativeElement) {
            this.nativeElement.dateMarkers = value;
        }
    }
    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user input; when disabled, the element appears inactive and does not accept user interactions.
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
    /** Prevents the timeline from automatically scrolling when a task bar is being dragged or resized. This means the viewport will remain stationary during these actions, requiring the user to manually scroll if they wish to view other parts of the timeline.
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
    /** Prevents users from clicking and dragging tasks to reschedule or move them within the Timeline view. Tasks remain fixed in their current positions and cannot be repositioned through drag-and-drop actions.
    *	Property type: boolean
    */
    get disableTaskDrag() {
        return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
    }
    set disableTaskDrag(value) {
        if (this.nativeElement) {
            this.nativeElement.disableTaskDrag = value;
        }
    }
    /** Prevents users from modifying or updating task progress values within the Timeline view. Task progress indicators will be displayed as read-only and cannot be adjusted through the Timeline interface.
    *	Property type: boolean
    */
    get disableTaskProgressChange() {
        return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
    }
    set disableTaskProgressChange(value) {
        if (this.nativeElement) {
            this.nativeElement.disableTaskProgressChange = value;
        }
    }
    /** Prevents users from adjusting the start or end dates of tasks directly within the Timeline by disabling the resize handles on tasks.
    *	Property type: boolean
    */
    get disableTaskResize() {
        return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
    }
    set disableTaskResize(value) {
        if (this.nativeElement) {
            this.nativeElement.disableTaskResize = value;
        }
    }
    /** Prevents users from selecting tasks, milestones, or any other elements within the GanttChart, effectively disabling all selection interactions and highlighting within the chart area.
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
    /** Prevents users from dragging and repositioning individual task segments within the interface. When this option is enabled, task segments remain fixed in place and cannot be moved through drag-and-drop actions.
    *	Property type: boolean
    */
    get disableSegmentDrag() {
        return this.nativeElement ? this.nativeElement.disableSegmentDrag : undefined;
    }
    set disableSegmentDrag(value) {
        if (this.nativeElement) {
            this.nativeElement.disableSegmentDrag = value;
        }
    }
    /** Prevents users from changing the size of the task segment. When this option is enabled, the task segment cannot be resized or adjusted, ensuring its dimensions remain fixed.
    *	Property type: boolean
    */
    get disableSegmentResize() {
        return this.nativeElement ? this.nativeElement.disableSegmentResize : undefined;
    }
    set disableSegmentResize(value) {
        if (this.nativeElement) {
            this.nativeElement.disableSegmentResize = value;
        }
    }
    /** Prevents the window editor from opening or being used within the GanttChart component, thereby disabling any ability for users to add, edit, or configure tasks through the graphical window interface. This setting ensures that all task modifications must be handled through alternative methods, such as programmatic updates or external forms.
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
    /** Specifies the unit of measurement (such as seconds, minutes, hours, or days) used for the task's duration property. This defines how the duration value should be interpreted and ensures consistent handling of time-related data across the application.
    *	Property type: Duration | string
    */
    get durationUnit() {
        return this.nativeElement ? this.nativeElement.durationUnit : undefined;
    }
    set durationUnit(value) {
        if (this.nativeElement) {
            this.nativeElement.durationUnit = value;
        }
    }
    /** Specifies whether a dedicated filter row should be displayed within the table for filtering purposes, replacing the default inline filter input. When enabled, each column in the table will provide its own filter input within a separate filter row. This property is only applicable if the filtering option is enabled; otherwise, it will have no effect.
    *	Property type: boolean
    */
    get filterRow() {
        return this.nativeElement ? this.nativeElement.filterRow : undefined;
    }
    set filterRow(value) {
        if (this.nativeElement) {
            this.nativeElement.filterRow = value;
        }
    }
    /** Specifies which day of the week the calendar view should start on. The value is a number from 0 to 6, where 0 represents Sunday, 1 represents Monday, and 6 represents Saturday. The default value is 0 (Sunday). Adjusting this setting allows you to control the first day displayed in the weekly or monthly calendar view.
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
    /** Organizes tasks within the Task timeline by grouping them based on their assigned resources. Each resource receives its own group containing all tasks allocated to it. Tasks that have not been assigned to any resource are automatically placed in a separate group labeled "Unassigned" for easy identification.
    *	Property type: boolean
    */
    get groupByResources() {
        return this.nativeElement ? this.nativeElement.groupByResources : undefined;
    }
    set groupByResources(value) {
        if (this.nativeElement) {
            this.nativeElement.groupByResources = value;
        }
    }
    /** Enables you to define custom header content for the Task Panel. The attribute accepts either an HTMLTemplate element, the id of an existing HTMLTemplate, or a function that returns the desired content. This provides flexibility to use static templates or generate dynamic header content programmatically.
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
    /** Specifies whether the dateMarkers are displayed on the interface. When set to true, the date markers will be visible; when set to false, they will be hidden.
    *	Property type: boolean
    */
    get hideDateMarkers() {
        return this.nativeElement ? this.nativeElement.hideDateMarkers : undefined;
    }
    set hideDateMarkers(value) {
        if (this.nativeElement) {
            this.nativeElement.hideDateMarkers = value;
        }
    }
    /** By default, the Timeline component displays a three-level header structure: the top section shows primary timeline details, the middle section displays secondary details, and the bottom section contains the main timeline header. This property allows you to hide the header container, which refers specifically to the bottom section of the header.
    *	Property type: boolean
    */
    get hideTimelineHeader() {
        return this.nativeElement ? this.nativeElement.hideTimelineHeader : undefined;
    }
    set hideTimelineHeader(value) {
        if (this.nativeElement) {
            this.nativeElement.hideTimelineHeader = value;
        }
    }
    /** By default, the Timeline component displays a three-level header structure: the main timeline details (topmost header), secondary timeline details (middle header), and the primary timeline header (bottom header). This property allows you to hide the topmost container, which holds the main timeline details, effectively removing the first (outermost) header section from the Timeline display.
    *	Property type: boolean
    */
    get hideTimelineHeaderDetails() {
        return this.nativeElement ? this.nativeElement.hideTimelineHeaderDetails : undefined;
    }
    set hideTimelineHeaderDetails(value) {
        if (this.nativeElement) {
            this.nativeElement.hideTimelineHeaderDetails = value;
        }
    }
    /** By default, the Timeline component displays a three-level header structure: the main timeline header, a secondary header with additional details, and a primary details section. This property specifically controls the visibility of the second (middle) header, which contains supplementary timeline details. When enabled, the secondary details container will be hidden, resulting in a simplified two-level header layout.
    *	Property type: boolean
    */
    get hideTimelineSecondHeaderDetails() {
        return this.nativeElement ? this.nativeElement.hideTimelineSecondHeaderDetails : undefined;
    }
    set hideTimelineSecondHeaderDetails(value) {
        if (this.nativeElement) {
            this.nativeElement.hideTimelineSecondHeaderDetails = value;
        }
    }
    /** Controls the visibility of the Resource panel in the GanttChart component. By default, the Resource panel is displayed automatically when resources are added to the GanttChart. Enabling this property will permanently hide the Resource panel, regardless of whether resources are present or not. This allows developers to prevent the Resource panel from appearing under any circumstances.
    *	Property type: boolean
    */
    get hideResourcePanel() {
        return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
    }
    set hideResourcePanel(value) {
        if (this.nativeElement) {
            this.nativeElement.hideResourcePanel = value;
        }
    }
    /** Specifies whether the horizontal scrollbar is visible, allowing users to scroll content horizontally when it exceeds the container’s width.
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
    /** Specifies the display format for dates shown as hours within the timeline header, controlling how hour values (e.g., "14:00", "2 PM", "14h") are presented to users. This setting ensures that the hour labels in the timeline header are formatted consistently according to your application's requirements.
    *	Property type: HourFormat | string
    */
    get hourFormat() {
        return this.nativeElement ? this.nativeElement.hourFormat : undefined;
    }
    set hourFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.hourFormat = value;
        }
    }
    /** When this option is enabled, reaching the end of the horizontal timeline through scrolling will dynamically generate additional timeline cells, effectively extending the visible time range. The exact number of new cells added each time the scrollbar reaches the end is specified by the infiniteTimelineStep setting. This allows for an "infinite scrolling" experience, where more timeline segments are loaded as the user scrolls horizontally.
    *	Property type: boolean
    */
    get infiniteTimeline() {
        return this.nativeElement ? this.nativeElement.infiniteTimeline : undefined;
    }
    set infiniteTimeline(value) {
        if (this.nativeElement) {
            this.nativeElement.infiniteTimeline = value;
        }
    }
    /** Specifies how many new cells should be dynamically loaded and added to the Timeline when the user scrolls horizontally to the end, provided that infiniteTimeline is enabled. This controls the batch size of additional timeline cells appended each time the end of the scrollable area is reached.
    *	Property type: number
    */
    get infiniteTimelineStep() {
        return this.nativeElement ? this.nativeElement.infiniteTimelineStep : undefined;
    }
    set infiniteTimelineStep(value) {
        if (this.nativeElement) {
            this.nativeElement.infiniteTimelineStep = value;
        }
    }
    /** When enabled, this setting displays the Timeline component on the left side of the interface and the Task Tree on the right side. By default, the layout is reversed: the Task Tree appears on the left and the Timeline on the right.
    *	Property type: boolean
    */
    get inverted() {
        return this.nativeElement ? this.nativeElement.inverted : undefined;
    }
    set inverted(value) {
        if (this.nativeElement) {
            this.nativeElement.inverted = value;
        }
    }
    /** Controls whether users can navigate within the Table using the keyboard. When enabled, keyboard navigation applies to both the Task and Resource Tables, allowing users to move between table items using the keyboard.For the Task Table, the following keyboard shortcuts are available when a task is focused:  Enter – Opens the Window editor, allowing you to edit the currently focused task.  Delete – Opens a confirmation dialog to confirm the deletion of the currently focused task.Enabling this option improves accessibility and streamlines user interactions for both Task and Resource management within the Table.
    *	Property type: boolean
    */
    get keyboardNavigation() {
        return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
    }
    set keyboardNavigation(value) {
        if (this.nativeElement) {
            this.nativeElement.keyboardNavigation = value;
        }
    }
    /** Sets or retrieves the unlockKey, a unique value required to unlock and access the full features of the product. Use this property to assign an unlock key for activation or to obtain the currently set unlock key.
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
    /** Specifies the language used for the GanttChart interface, including labels, tooltips, and other user-facing text elements.
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
    /** Determines the latest allowable date that can be displayed or selected on the Timeline, effectively setting the upper limit for date values within the component.
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
    /** Specifies the earliest allowable date that can be selected or displayed on the Timeline, effectively setting the lower date limit.
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
    /** Defines or retrieves an object containing customizable strings used within the widget's interface for localization purposes. This object allows developers to provide translated or adapted text for various UI elements, ensuring the widget can support multiple languages and regions. It is typically used in combination with the locale property to display content in the desired language.
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
    /** Specifies the date format used for displaying months in the timeline header. This setting defines how month values appear, such as "Jan 2024" or "01/2024", ensuring consistent and customizable presentation of months within the timeline.
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
    /** Specifies the time interval granularity displayed in the Month view, such as whether events are shown by week, day, or custom periods. This setting adjusts how dates and events are grouped and visualized within the Month view of the calendar.
    *	Property type: MonthScale | string
    */
    get monthScale() {
        return this.nativeElement ? this.nativeElement.monthScale : undefined;
    }
    set monthScale(value) {
        if (this.nativeElement) {
            this.nativeElement.monthScale = value;
        }
    }
    /** Specifies which days of the week, represented by integers from 0 to 6 (where 0 indicates the first day of the week and 6 indicates the last), are considered nonworking days. These selected nonworking days are visually highlighted with colored cells within the timeline display. By default, nonworking days do not influence the task end dates (dateEnd). However, if the adjustToNonworkingTime property is enabled, task scheduling will automatically adjust to account for nonworking days when calculating end dates.
    *	Property type: number[]
    */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingDays = value;
        }
    }
    /** Specifies which hours of the day are considered nonworking. The nonworking hours are defined using an array that can contain individual hour numbers (e.g., [1, 2, 3] represents 1 AM, 2 AM, and 3 AM as nonworking hours) and/or nested arrays to indicate continuous ranges (e.g., [[0, 6]] represents all hours from 12:00 AM to 6:00 AM inclusive as nonworking hours).In the timeline view, cells corresponding to nonworking hours are visually distinguished (typically with a different color), helping users easily identify unavailable time slots. By default, these nonworking hours do not influence the calculation of a task’s end date (dateEnd). However, if the adjustToNonworkingTime property is enabled, the scheduler will automatically adjust tasks to skip or extend around nonworking hours.
    *	Property type: number[] | number[][]
    */
    get nonworkingHours() {
        return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
    }
    set nonworkingHours(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingHours = value;
        }
    }
    /** This function enables complete customization of the task element within your interface. It accepts five arguments, providing granular control over both the task and its visual representation:1. 'task' – The full task object containing all associated data.2. 'segment' – The current segment object for the task. If the task consists of a single segment, this argument will be the same as the task object.3. 'taskElement' – The root HTML element representing the task in the DOM.4. 'segmentElement' – The HTML element representing the current segment of the task.5. 'labelElement' – The HTML element that displays the segment’s label.You can use these arguments to modify the appearance, content, and behavior of the task and its segments, allowing for advanced UI customizations tailored to different application needs.
    *	Property type: any
    */
    get onTaskRender() {
        return this.nativeElement ? this.nativeElement.onTaskRender : undefined;
    }
    set onTaskRender(value) {
        if (this.nativeElement) {
            this.nativeElement.onTaskRender = value;
        }
    }
    /** A function that allows you to fully customize the appearance and behavior of each task element. This function receives two parameters:    task: The JavaScript object representing the task's data and properties.  taskElement: The HTML element corresponding to the task, which you can manipulate or modify as needed.Use this function to add custom styles, event listeners, or additional content to each task element based on its data.
    *	Property type: any
    */
    get taskFormatFunction() {
        return this.nativeElement ? this.nativeElement.taskFormatFunction : undefined;
    }
    set taskFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.taskFormatFunction = value;
        }
    }
    /** A function that enables full customization of the tooltip's appearance and behavior. This function accepts three arguments:- tooltipObject: The tooltip instance, containing all relevant data and methods for manipulating the tooltip.- event: The event object that triggered the tooltip display, useful for accessing event-specific information (e.g., cursor position).- content: The DOM element representing the tooltip’s label, which can be modified to display custom HTML, styles, or dynamic content.
    *	Property type: any
    */
    get tooltipFormatFunction() {
        return this.nativeElement ? this.nativeElement.tooltipFormatFunction : undefined;
    }
    set tooltipFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipFormatFunction = value;
        }
    }
    /** A function that allows complete customization of the popup window used for task interactions by modifying its properties before it is displayed. The function receives three arguments:      target — The popup window instance that is about to be opened. You can use this parameter to modify visual aspects (such as size, title, buttons, and content) or add custom behavior.        type — Specifies the purpose of the popup window. Possible values are:          'task': For editing or viewing a task.      'confirm': For displaying a confirmation prompt.      'connection': For actions related to connections between tasks (e.g., deleting a link).            item — The data object associated with the popup window. This will be the current task (for 'task' and 'confirm' types) or the specific connection object (for the 'connection' type).  Use this function to dynamically personalize the popup window’s content, appearance, or logic based on the context of the action being performed.
    *	Property type: any
    */
    get popupWindowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
    }
    set popupWindowCustomizationFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.popupWindowCustomizationFunction = value;
        }
    }
    /** Specifies which tab sections are displayed within the popup window. This property accepts the following three values:      general – Displays the General tab, which shows the main properties of the task as defined by the taskColumns property.        dependency – Displays the Dependency tab, where users can view, add, or remove connections (dependencies) related to the current task.        segments – Displays the Segments tab, where users can view, create, or delete segments that make up the task.  Use these values to control which tabs are visible to users in the popup window interface. Multiple values can be specified to show more than one tab.
    *	Property type: string[]
    */
    get popupWindowTabs() {
        return this.nativeElement ? this.nativeElement.popupWindowTabs : undefined;
    }
    set popupWindowTabs(value) {
        if (this.nativeElement) {
            this.nativeElement.popupWindowTabs = value;
        }
    }
    /** This property accepts a formatting function for the progress label displayed on the Timeline task. The function should return a string representing the desired label text. By default, the progress label is hidden; it can be made visible by setting the showProgressLabel property to true.
    *	Property type: any
    */
    get progressLabelFormatFunction() {
        return this.nativeElement ? this.nativeElement.progressLabelFormatFunction : undefined;
    }
    set progressLabelFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.progressLabelFormatFunction = value;
        }
    }
    /** Specifies the date format used to display quarter representations (e.g., "Q1 2024") in the timeline header. This setting controls how quarter periods are labeled, ensuring consistency and clarity in the timeline’s visual presentation.
    *	Property type: QuarterFormat | string
    */
    get quarterFormat() {
        return this.nativeElement ? this.nativeElement.quarterFormat : undefined;
    }
    set quarterFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.quarterFormat = value;
        }
    }
    /** Returns an array containing a flat list of all resource objects found within the element, including those nested at any level. This getter traverses the element's hierarchy and aggregates all resources into a single, non-nested array for simplified access.
    *	Property type: GanttChartResource[]
    */
    get resources() {
        return this.nativeElement ? this.nativeElement.resources : undefined;
    }
    set resources(value) {
        if (this.nativeElement) {
            this.nativeElement.resources = value;
        }
    }
    /** Determines which columns are displayed in the Resource Tree.  Each entry in this property should be an Object containing the following keys:- label: Specifies the column header text as it will appear in the Task Tree.- value: Defines the property or content to be displayed in the cells of that column.By default, a single column displays all resource labels. You can configure additional columns by adding objects with custom label and value pairs.Additional configurable properties for each column object include:  formatFunction: A callback function that allows customization of the cell content for the column. This function receives two arguments: the label text (as a string) and the index of the resource. It should return a string, which will be used as the displayed cell content.  min: Sets the minimum width (in pixels or another supported unit) for the column.  max: Sets the maximum width for the column.  size: Specifies the fixed width for the column.Use this configuration to tailor which resource attributes appear as columns in the Resource Tree and how they are displayed.
    *	Property type: GanttChartResourceColumn[]
    */
    get resourceColumns() {
        return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
    }
    set resourceColumns(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceColumns = value;
        }
    }
    /** Specifies whether the Resource Table supports filtering functionality, allowing users to narrow down and display specific data based on filter criteria. If set to true, filters can be applied to the Resource Table; if false, filtering options will be disabled.
    *	Property type: boolean
    */
    get resourceFiltering() {
        return this.nativeElement ? this.nativeElement.resourceFiltering : undefined;
    }
    set resourceFiltering(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceFiltering = value;
        }
    }
    /** A format function that enables you to customize the display of group row labels when the groupByResources option is enabled. This function allows for dynamic re-formatting of group headers, so you can control how resource names or other grouping information appear in the UI.
    *	Property type: any
    */
    get resourceGroupFormatFunction() {
        return this.nativeElement ? this.nativeElement.resourceGroupFormatFunction : undefined;
    }
    set resourceGroupFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceGroupFormatFunction = value;
        }
    }
    /** Enables you to define a custom header for the Resource Panel by specifying the content through one of the following options: an HTMLTemplate element, the ID of an existing template, or a function that returns the desired HTML. This allows for flexible and dynamic header customization to fit your application's needs.
    *	Property type: any
    */
    get resourcePanelHeaderTemplate() {
        return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
    }
    set resourcePanelHeaderTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.resourcePanelHeaderTemplate = value;
        }
    }
    /** Specifies the minimum allowable size (in pixels) for the Resource Panel, ensuring that users cannot resize the panel below this value. This setting helps maintain usability and proper display of the panel's content.
    *	Property type: number | string
    */
    get resourcePanelMin() {
        return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
    }
    set resourcePanelMin(value) {
        if (this.nativeElement) {
            this.nativeElement.resourcePanelMin = value;
        }
    }
    /** Specifies the dimensions (width and/or height) of the Resource Panel, controlling how much space it occupies within the user interface. Adjusting this value directly affects the visible area available for displaying resource-related content.
    *	Property type: number | string
    */
    get resourcePanelSize() {
        return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
    }
    set resourcePanelSize(value) {
        if (this.nativeElement) {
            this.nativeElement.resourcePanelSize = value;
        }
    }
    /** Controls how frequently the Resource Panel updates when a task is dragged, resized, or its progress is changed on the Timeline. By setting this property, you can customize the interval (in milliseconds) between automatic refreshes of the resource Tree and Timeline during these interactions. By default, the Resource Panel refreshes instantly after each change, but adjusting this value can help optimize performance for complex project schedules or large datasets.
    *	Property type: number
    */
    get resourcePanelRefreshRate() {
        return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
    }
    set resourcePanelRefreshRate(value) {
        if (this.nativeElement) {
            this.nativeElement.resourcePanelRefreshRate = value;
        }
    }
    /** A callback function that allows you to fully control and customize the content displayed in the cells of the resource timeline. The callback receives three parameters:  taskIndexes – An array containing the indexes of the tasks assigned to the current resource in this cell.  resourceIndex – The index representing the current resource row.  cellDate – A Date object or date string representing the current cell’s date.This property is specifically used when the resourceTimelineView is set to custom. The expected return value depends on the value of resourceTimelineMode:  diagram – Return a string that will be rendered as the cell’s content.  histogram – Return an object with the following properties:          capacity: The current value to be visualized for the cell.      maxCapacity: The maximum value for the histogram, used to determine the cell visualization’s scale.        custom – (Optional) You may return any custom content for the timeline cell, giving you full flexibility to represent resources however you wish.Use this callback to tailor the timeline’s resource cell display—such as showing aggregated values, custom HTML, or visualizations—according to your application’s requirements.
    *	Property type: any
    */
    get resourceTimelineFormatFunction() {
        return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
    }
    set resourceTimelineFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceTimelineFormatFunction = value;
        }
    }
    /** Specifies the method used to display the resource's capacity within the resource timeline. By default, the capacity is shown in hours, but this may vary depending on the value of the element’s view property. This setting controls how capacity data is visually represented for each resource, ensuring that users see capacity information in a format appropriate to the current timeline view (such as hours, days, or custom intervals).
    *	Property type: GanttChartResourceTimelineMode | string
    */
    get resourceTimelineMode() {
        return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
    }
    set resourceTimelineMode(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceTimelineMode = value;
        }
    }
    /** Specifies the layout and presentation of resources within the resource Timeline, controlling how individual resources are visually arranged, organized, and grouped for optimal clarity and user experience.
    *	Property type: GanttChartResourceTimelineView | string
    */
    get resourceTimelineView() {
        return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
    }
    set resourceTimelineView(value) {
        if (this.nativeElement) {
            this.nativeElement.resourceTimelineView = value;
        }
    }
    /** Determines whether paging functionality is enabled. When set to true, data is divided into discrete pages for easier navigation and viewing; when false, all data is displayed in a single, continuous view. You can use this property to enable or disable paging, or retrieve its current state.
    *	Property type: boolean
    */
    get paging() {
        return this.nativeElement ? this.nativeElement.paging : undefined;
    }
    set paging(value) {
        if (this.nativeElement) {
            this.nativeElement.paging = value;
        }
    }
    /** Gets or sets a value that determines whether the element’s alignment supports right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted to display text and UI elements in a right-to-left orientation, ensuring proper localization for RTL locales.
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
    /** "Allows you to specify which tasks are selected by providing their unique task IDs, or retrieve the IDs of the currently selected tasks. If a task does not already have an ID, the system automatically generates an internal ID for it based on its position in the task hierarchy (using its index or tree path)."
    *	Property type: number[] | string[]
    */
    get selectedTaskIds() {
        return this.nativeElement ? this.nativeElement.selectedTaskIds : undefined;
    }
    set selectedTaskIds(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedTaskIds = value;
        }
    }
    /** Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path)."---'Improved Version:'Specifies which resources should be selected by providing their unique IDs, or retrieves the list of currently selected resource IDs. If a resource does not have a user-defined ID, the system automatically generates an internal ID for each resource based on its position within the resource hierarchy (tree path or index). This ensures that every resource can be uniquely identified, even if explicit IDs are not assigned.
    *	Property type: number[] | string[]
    */
    get selectedResourceIds() {
        return this.nativeElement ? this.nativeElement.selectedResourceIds : undefined;
    }
    set selectedResourceIds(value) {
        if (this.nativeElement) {
            this.nativeElement.selectedResourceIds = value;
        }
    }
    /** Defines or retrieves the selection mode for the component. This property is relevant only when the selection feature is enabled. It determines how users can select items (e.g., single, multiple), and has no effect if selection is disabled.
    *	Property type: GanttChartSelectionMode | string
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Controls whether the current time shader is active. When enabled, all cells corresponding to past time periods will be visually shaded to distinguish them from present and future time slots. Disabling this option will display all cells without any time-based shading.
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
    /** Displays the selection column in the Task or Resource Table. When enabled, a checkbox column appears, allowing users to select individual tasks or resources directly from the table. This feature facilitates bulk actions or easy identification of selected items.
    *	Property type: boolean
    */
    get showSelectionColumn() {
        return this.nativeElement ? this.nativeElement.showSelectionColumn : undefined;
    }
    set showSelectionColumn(value) {
        if (this.nativeElement) {
            this.nativeElement.showSelectionColumn = value;
        }
    }
    /** Controls the visibility of task baselines in the interface. Baselines represent the original planned schedule of tasks and are specified using the 'planned' attribute on each task object within the dataSource property. When this option is enabled, the baselines will be displayed alongside the actual task data for comparison.
    *	Property type: boolean
    */
    get showBaseline() {
        return this.nativeElement ? this.nativeElement.showBaseline : undefined;
    }
    set showBaseline(value) {
        if (this.nativeElement) {
            this.nativeElement.showBaseline = value;
        }
    }
    /** Displays a progress label within the progress bars for each Timeline task, providing a clear visual indication of the current completion percentage directly on the corresponding task's bar.
    *	Property type: boolean
    */
    get showProgressLabel() {
        return this.nativeElement ? this.nativeElement.showProgressLabel : undefined;
    }
    set showProgressLabel(value) {
        if (this.nativeElement) {
            this.nativeElement.showProgressLabel = value;
        }
    }
    /** If enabled, the dateStart and dateEnd values of tasks will be automatically adjusted (coerced) to align with the nearest timeline cell boundary, based on the current timeline view. This setting also affects task positioning during drag-and-drop operations, ensuring that tasks always snap to the closest valid timeline interval when they are moved or resized.
    *	Property type: boolean
    */
    get snapToNearest() {
        return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
    }
    set snapToNearest(value) {
        if (this.nativeElement) {
            this.nativeElement.snapToNearest = value;
        }
    }
    /** Specifies whether the GanttChart allows sorting by a single column, multiple columns, or disallows column sorting entirely. This setting controls the user's ability to organize tasks in the chart by clicking on one or more column headers.
    *	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
    */
    get sortFunction() {
        return this.nativeElement ? this.nativeElement.sortFunction : undefined;
    }
    set sortFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.sortFunction = value;
        }
    }
    /** A getter method that returns a flattened array containing all task objects nested within the element, regardless of their depth or hierarchical structure. This allows easy access to every task in the element as a single-level array.
    *	Property type: GanttChartSortMode | string
    */
    get sortMode() {
        return this.nativeElement ? this.nativeElement.sortMode : undefined;
    }
    set sortMode(value) {
        if (this.nativeElement) {
            this.nativeElement.sortMode = value;
        }
    }
    /** 'Description'Defines which columns are displayed in the Task Tree. The value of this property should be an array of objects, each describing a column. Each column object must include the following required keys:- label: Specifies the text that will appear as the column header in the Task Tree.- value: Specifies the key of the task attribute from the dataSource to display as the cell content in that column.By default, one column will be shown with all task labels. Additional columns can be configured using this property.'Optional properties for each column object:'  formatFunction: A function for customizing the display content of each cell in the column. Receives the final label value (string) and returns the desired rendering (string or element).  min: Sets the minimum width of the column (in pixels or CSS units).  max: Sets the maximum width of the column (in pixels or CSS units).  size: Sets the default (actual) width of the column (in pixels or CSS units).  customEditor: A callback for providing a custom editor for the column when editing via a dialog/window. It accepts two arguments:          label: The column label.      value: The current cell value in the column.        The function should return the editor component or element.  setCustomEditorValue: A callback used to programmatically set the value of the custom editor.  getCustomEditorValue: A callback used to programmatically retrieve the value from the custom editor.This configuration enables fine-grained customization of how task attributes are displayed and edited within each column of the Task Tree.
    *	Property type: GanttChartTask[]
    */
    get tasks() {
        return this.nativeElement ? this.nativeElement.tasks : undefined;
    }
    set tasks(value) {
        if (this.nativeElement) {
            this.nativeElement.tasks = value;
        }
    }
    /** Specifies whether users can apply filters to the Task Table, allowing them to view only tasks that meet certain criteria. If enabled, filtering options will be available; if disabled, the Task Table will display all tasks without filtering capabilities.
    *	Property type: GanttChartTaskColumn[]
    */
    get taskColumns() {
        return this.nativeElement ? this.nativeElement.taskColumns : undefined;
    }
    set taskColumns(value) {
        if (this.nativeElement) {
            this.nativeElement.taskColumns = value;
        }
    }
    /** Specifies the minimum size of the Task Panel when the Resource Panel is visible. This property ensures that the Task Panel does not shrink below the defined size, maintaining usability and layout integrity when both panels are displayed.
    *	Property type: boolean
    */
    get taskFiltering() {
        return this.nativeElement ? this.nativeElement.taskFiltering : undefined;
    }
    set taskFiltering(value) {
        if (this.nativeElement) {
            this.nativeElement.taskFiltering = value;
        }
    }
    /** Specifies the dimensions of the Task Panel when the Resource Panel is displayed. This setting controls how much space the Task Panel occupies, ensuring it remains visible and accessible alongside the Resource Panel.
    *	Property type: string | number
    */
    get taskPanelMin() {
        return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
    }
    set taskPanelMin(value) {
        if (this.nativeElement) {
            this.nativeElement.taskPanelMin = value;
        }
    }
    /** Specifies the minimum width, in pixels, that the timeline component can be resized or displayed at. This ensures that the timeline will not shrink below the defined width, maintaining usability and proper layout.
    *	Property type: string | number
    */
    get taskPanelSize() {
        return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
    }
    set taskPanelSize(value) {
        if (this.nativeElement) {
            this.nativeElement.taskPanelSize = value;
        }
    }
    /** Specifies the minimum width (in pixels) that the task table can be resized to, ensuring the table does not become narrower than this value. This helps maintain readability and layout consistency.
    *	Property type: string | number
    */
    get timelineMin() {
        return this.nativeElement ? this.nativeElement.timelineMin : undefined;
    }
    set timelineMin(value) {
        if (this.nativeElement) {
            this.nativeElement.timelineMin = value;
        }
    }
    /** Specifies the width of the task table, controlling how much horizontal space it occupies within its container. Adjust this value to set the overall size of the table and ensure proper display and alignment within your layout.
    *	Property type: string | number
    */
    get treeMin() {
        return this.nativeElement ? this.nativeElement.treeMin : undefined;
    }
    set treeMin(value) {
        if (this.nativeElement) {
            this.nativeElement.treeMin = value;
        }
    }
    /** A custom formatting function for the Timeline header, allowing you to control how each date cell in the header is displayed. The function receives the following arguments:  date (Date): The JavaScript Date object representing the date associated with the current header cell.  type (string): A string indicating the granularity of the header cell, such as 'month', 'week', 'day', etc., specifying what period the cell represents.  isHeaderDetails (boolean): A boolean value specifying whether the cell is part of the detailed header section (typically used for secondary or sub-header rows) or part of the main header row.  value (string): The default formatted label for the cell, as generated by the timeline component, which you may use or modify in your custom output.Use this function to return a custom string (or JSX/HTML element, depending on context) for each header cell, enabling advanced formatting of date headers in the timeline view.
    *	Property type: string | number
    */
    get treeSize() {
        return this.nativeElement ? this.nativeElement.treeSize : undefined;
    }
    set treeSize(value) {
        if (this.nativeElement) {
            this.nativeElement.treeSize = value;
        }
    }
    /** Controls the visibility of tooltips throughout the application. When enabled, informative tooltips will appear for timeline tasks, resources, connections, indicators, and segments, providing users with additional context and details about each element. Disabling this option will hide all tooltips in these areas.
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
    /** Specifies whether the vertical scrollbar is displayed, allowing the user to scroll content vertically when necessary.
    *	Property type: GanttChartTooltip
    */
    get tooltip() {
        return this.nativeElement ? this.nativeElement.tooltip : undefined;
    }
    set tooltip(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltip = value;
        }
    }
    /** Specifies the date range displayed on the timeline. Accepted values include:day: The timeline displays all hours within a single day, allowing for detailed, intraday scheduling and review.week: The timeline presents each day within a single week, providing a broader weekly overview.month: The timeline shows individual days across an entire month, making it easy to view and manage monthly schedules.year: The timeline displays each month of the year, providing a high-level annual perspective.resource: The timeline groups and displays current tasks by the resources assigned to them. Tasks without an assigned resource are grouped under a special "Unassigned" category for easy identification.The timeline features a header section that labels each cell according to its corresponding date or resource. This header is divided into two tiers (for example, months and days, or days and hours) to provide both summary and detailed information, enhancing clarity and context for users navigating the timeline.
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
    /** Specifies the display format for dates in the timeline header when they represent years. This setting controls how years are presented (e.g., "2024", "’24", or "Year 2024") to ensure consistency and clarity in the timeline header’s date representation.
    *	Property type: GanttChartView | string
    */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        if (this.nativeElement) {
            this.nativeElement.view = value;
        }
    }
    /** Specifies the display format for dates in the timeline header when the timeline view is set to show weeks. This setting controls how each week's date range or label appears, allowing customization of the week header’s date representation.
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
    /** Specifies or retrieves the visual theme applied to the element, controlling its overall appearance and styling (such as colors, backgrounds, and typography) according to predefined theme options.
    *	Property type: WeekFormat | string
    */
    get weekFormat() {
        return this.nativeElement ? this.nativeElement.weekFormat : undefined;
    }
    set weekFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.weekFormat = value;
        }
    }
    /** Determines whether the element can receive keyboard focus. When set to true, the element becomes focusable and can be navigated to using the Tab key or programmatically via JavaScript. When accessed, returns a boolean indicating the current focusability state of the element.
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
    /** undefined
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
    // Gets the properties of the React component.
    get properties() {
        return ["adjustToNonworkingTime", "autoSchedule", "autoScheduleStrictMode", "autoScrollStep", "columnMenu", "columnResize", "columnResizeFeedback", "criticalPath", "currentTime", "currentTimeIndicator", "currentTimeIndicatorInterval", "dataExport", "dataSource", "dayFormat", "dateEnd", "dateStart", "dateMarkers", "disabled", "disableAutoScroll", "disableTaskDrag", "disableTaskProgressChange", "disableTaskResize", "disableSelection", "disableSegmentDrag", "disableSegmentResize", "disableWindowEditor", "durationUnit", "filterRow", "firstDayOfWeek", "groupByResources", "headerTemplate", "hideDateMarkers", "hideTimelineHeader", "hideTimelineHeaderDetails", "hideTimelineSecondHeaderDetails", "hideResourcePanel", "horizontalScrollBarVisibility", "hourFormat", "infiniteTimeline", "infiniteTimelineStep", "inverted", "keyboardNavigation", "unlockKey", "locale", "max", "min", "messages", "monthFormat", "monthScale", "nonworkingDays", "nonworkingHours", "onTaskRender", "taskFormatFunction", "tooltipFormatFunction", "popupWindowCustomizationFunction", "popupWindowTabs", "progressLabelFormatFunction", "quarterFormat", "resources", "resourceColumns", "resourceFiltering", "resourceGroupFormatFunction", "resourcePanelHeaderTemplate", "resourcePanelMin", "resourcePanelSize", "resourcePanelRefreshRate", "resourceTimelineFormatFunction", "resourceTimelineMode", "resourceTimelineView", "paging", "rightToLeft", "selectedTaskIds", "selectedResourceIds", "selectionMode", "shadeUntilCurrentTime", "showSelectionColumn", "showBaseline", "showProgressLabel", "snapToNearest", "sortFunction", "sortMode", "tasks", "taskColumns", "taskFiltering", "taskPanelMin", "taskPanelSize", "timelineMin", "treeMin", "treeSize", "timelineHeaderFormatFunction", "tooltip", "verticalScrollBarVisibility", "view", "yearFormat", "weekFormat", "theme", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onBeginUpdate", "onEndUpdate", "onConnectionStart", "onConnectionEnd", "onChange", "onColumnResize", "onClosing", "onClose", "onCollapse", "onDragStart", "onDragEnd", "onExpand", "onFilter", "onItemClick", "onItemDoubleClick", "onItemInsert", "onItemRemove", "onItemUpdate", "onOpening", "onOpen", "onProgressChangeStart", "onProgressChangeEnd", "onResizeStart", "onResizeEnd", "onSort", "onScrollBottomReached", "onScrollTopReached", "onScrollLeftReached", "onScrollRightReached", "onCreate", "onReady"];
    }
    /** Enables the application of a user-defined filter to a specified column, allowing you to customize how data is displayed or managed within either a task column or a resource column. This feature supports more precise data sorting, searching, or visibility based on your chosen criteria.
    * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
    * @param {any} filterGroup. A JQX.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.JQX.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
    */
    addFilter(columns, filterGroup) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(columns, filterGroup);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(columns, filterGroup);
            });
        }
    }
    /** Removes all active filters from the current view, resetting any filter selections and displaying the complete, unfiltered dataset or content.
    */
    clearFilters() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }
    /** Removes any active sorting from the columns, restoring the original or default order of the data. This action resets the column sorting state, so no columns are sorted after this operation.
    */
    clearSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }
    /** Deselects all currently selected items within the GanttChart component, including both Tasks and Resources. Additionally, this action removes any visual highlights or indicators related to task-resource assignments, ensuring that no items remain selected or highlighted in the chart.
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
    /** Removes a previously stored state of the element from LocalStorage, based on the element's unique id attribute. Note: The element must have an id specified for this operation to work.
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
    /** Deletes all existing tasks from the list, resulting in an empty task collection. This action is irreversible and will permanently remove every task from storage.
    */
    clearTasks() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearTasks();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearTasks();
            });
        }
    }
    /** Deletes all resources from the system, ensuring that no data or assets remain. This operation is irreversible and will remove every resource currently managed by the application.
    */
    clearResources() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearResources();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearResources();
            });
        }
    }
    /** Establishes a logical link between two tasks, indicating that the completion or status of one task directly influences or triggers the other. This connection can be used to define dependencies, control workflow order, and ensure tasks are executed in the correct sequence.
    * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
    * @param {number | string} taskEndIndex?. The id of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
    * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
    */
    createConnection(startTaskIndex, taskEndIndex, connectionType, lag) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType, lag);
            });
        }
    }
    /** Collapses a currently expanded project section, minimizing its content to provide a streamlined view and reduce on-screen clutter. This action hides the project's detailed information while keeping the project accessible for future expansion.
    * @param {string | number} id. The id of a project item that should be collapsed.
    */
    collapse(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(id);
            });
        }
    }
    /** Initiates an update operation, allowing you to group and apply multiple method calls or set several properties in a single batch. This approach is ideal for making coordinated changes efficiently, minimizing redundant processing or event triggers that could occur if each update were applied individually.
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
    /** Concludes the update operation, allowing the GanttChart to resume its rendering process. Invoking this method will trigger a refresh, ensuring that all recent changes are visually reflected on the chart.
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
    /** Refreshes the GanttChart display after resizing by recalculating and updating the scrollbars to ensure proper alignment and navigation.
    * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
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
    /** Ensures that the specified task element is brought into view within the scrollable container by automatically scrolling the page or container if necessary, so the task is fully visible to the user.
    * @param {string | number} taskId. The id of the target Task.
    */
    ensureVisible(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(taskId);
            });
        }
    }
    /** Expands a collapsed project to reveal its associated tasks, allowing users to view and interact with all items within the project.
    * @param {string | number} id. The id of a project task that should be expanded.
    */
    expand(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(id);
            });
        }
    }
    /** Exports the hierarchical tree data structure associated with the GanttChart, including all tasks, sub-tasks, and their relationships, in a serialized format suitable for data exchange or storage.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the JQX Export Documentation.
    */
    exportData(dataFormat, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback);
            });
        }
    }
    /** Retrieves a complete list of all current connections. The returned value is an array of objects, where each object represents a single connection and includes comprehensive metadata about that connection. Each connection object contains the following properties:- **id**: A unique identifier for the connection.- **type**: The type or category of the connection (e.g., dependency, sequential, etc.).- **startTaskId**: The unique identifier of the task where the connection originates.- **endTaskId**: The unique identifier of the task where the connection terminates.- **startIndex**: The index position within the start task from which the connection begins (useful for tasks with multiple connection points).- **endIndex**: The index position within the end task where the connection attaches.- **lag**: The lag time, typically in milliseconds or a project-specific unit, representing any delay between the linked tasks.This structure provides all necessary details for understanding the relationship and timing between connected tasks.
    * @returns {any}
  */
    getConnections() {
        const result = this.nativeElement.getConnections();
        return result;
    }
    /** Returns the details of the specified connection, providing information such as: the starting task (`startTask`), ending task (`endTask`), unique identifiers of the starting and ending tasks (`startTaskId`, `endTaskId`), and the connection type (`type`). For a comprehensive explanation of the available connection types, please refer to the 'connectionEnd' event documentation within this document or the dedicated topic on our website.
    * @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
    * @returns {any}
  */
    getConnectionDetails(connectionId) {
        const result = this.nativeElement.getConnectionDetails(connectionId);
        return result;
    }
    /** Provides a comprehensive JSON object containing all tasks within the specified element, including detailed information about each task's attributes, their interconnections (such as dependencies or links), and the full configuration settings associated with each task. This structured representation allows for thorough inspection, processing, or manipulation of the tasks and their relationships.
    * @returns {any[]}
  */
    getState() {
        const result = this.nativeElement.getState();
        return result;
    }
    /** Returns the tree path of a specified task or resource. The tree path represents the unique location of the task or resource within a hierarchical structure. If the user does not explicitly provide an ID for the task or resource, this tree path will be used as its default unique identifier.
    * @param {any} item. A GattChartTask/GanttChartResource item object.
    * @returns {string}
  */
    getItemPath(item) {
        const result = this.nativeElement.getItemPath(item);
        return result;
    }
    /** Returns the task object that matches the specified id or path. The id/path parameter can be either a unique identifier or a hierarchical location string for the task. The returned object contains detailed information and properties related to the task, such as its status, title, description, due date, and any associated metadata.
    * @param {string | number} itemId. The id/path of a task.
    * @returns {any}
  */
    getTask(itemId) {
        const result = this.nativeElement.getTask(itemId);
        return result;
    }
    /** Returns an array containing all task objects currently present in the GanttChart. Each task object includes details such as the task ID, name, start date, end date, dependencies, and any additional task-specific properties.
    * @returns {any[]}
  */
    getTasks() {
        const result = this.nativeElement.getTasks();
        return result;
    }
    /** Returns the zero-based index position of the specified task within a task list. If the task is not found, the method returns -1.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    getTaskIndex(task) {
        const result = this.nativeElement.getTaskIndex(task);
        return result;
    }
    /** Returns the definitions of all connections associated with a specific task, including details about each connection's type, configuration, and related parameters.
    * @param {any} taskId. A GanttChartTask object or it's id.
    * @returns {any}
  */
    getTaskConnections(taskId) {
        const result = this.nativeElement.getTaskConnections(taskId);
        return result;
    }
    /** Returns the associated Project object for a given task. If the task is not linked to any Project, the function returns undefined.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    getTaskProject(task) {
        const result = this.nativeElement.getTaskProject(task);
        return result;
    }
    /** Returns the resource object that matches the specified ID or path parameter. This object contains all relevant properties and data associated with the requested resource. If no resource is found with the provided ID or path, the method returns null or an error, depending on implementation.
    * @param {string | number} itemId. The id/path of a resource.
    * @returns {any}
  */
    getResource(itemId) {
        const result = this.nativeElement.getResource(itemId);
        return result;
    }
    /** Returns an array containing all resource objects associated with the GanttChart. Each resource object includes detailed information about a specific resource, such as its unique identifier, name, and any additional properties defined for resources within the GanttChart. This allows developers to access and manipulate the full set of resources currently present in the chart.
    * @returns {any[]}
  */
    getResources() {
        const result = this.nativeElement.getResources();
        return result;
    }
    /** Returns the zero-based index position of the specified resource within a collection or array. If the resource is not found, the function typically returns -1.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    getResourceIndex(resource) {
        const result = this.nativeElement.getResourceIndex(resource);
        return result;
    }
    /** Returns a list of tasks that have been assigned to the specified resource, including all relevant details for each task. This allows you to retrieve and review all tasks currently associated with the given resource.
    * @param {any} resource. A GanttChartResource object or it's id.
    * @returns {any}
  */
    getResourceTasks(resource) {
        const result = this.nativeElement.getResourceTasks(resource);
        return result;
    }
    /** Returns the IDs of the currently selected tasks or resources as an array. If selection functionality is disabled or if no items are currently selected, the function returns null.
    * @returns {any}
  */
    getSelectedIds() {
        const result = this.nativeElement.getSelectedIds();
        return result;
    }
    /** Returns an array containing all tasks that are currently selected by the user. Each task object in the array includes relevant task details such as its identifier, name, status, and any other associated properties. If no tasks are selected, an empty array is returned.
    * @returns {any}
  */
    getSelectedTasks() {
        const result = this.nativeElement.getSelectedTasks();
        return result;
    }
    /** Returns an array containing information about all resources currently selected by the user. Each resource object may include details such as its unique identifier, name, type, and relevant metadata. This allows developers to programmatically access and process the user's current selections within the application.
    * @returns {any}
  */
    getSelectedResources() {
        const result = this.nativeElement.getSelectedResources();
        return result;
    }
    /** Returns the working hours for a given day as an array of numerical values, where each value represents an hour within the standard working period (e.g., [9, 10, 11, 12, 13, 14, 15, 16, 17] for a 9 AM to 5 PM schedule).
    * @returns {any}
  */
    getWorkingHours() {
        const result = this.nativeElement.getWorkingHours();
        return result;
    }
    /** Conceals the tooltip element when it is currently displayed, ensuring that the tooltip is no longer visible to the user.
    * @returns {any}
  */
    hideTooltip() {
        const result = this.nativeElement.hideTooltip();
        return result;
    }
    /** Determines whether the specified target date falls on a working day by evaluating it against the nonworkingDays property. Returns true if the target date is a working day (not listed in nonworkingDays), and false if it is a non-working day.
    * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
    */
    isWorkingDay(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.isWorkingDay(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.isWorkingDay(date);
            });
        }
    }
    /** Enhancement:Restores the element’s previously saved state by loading the provided state object, or, if no argument is supplied, checks the browser’s LocalStorage for any saved states associated with the element and loads them if available.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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
    /** Removes all existing links or dependencies between tasks, effectively disconnecting every task from one another. After this operation, no task will be linked, dependent on, or related to any other task in the project.
    */
    removeAllConnections() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAllConnections();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAllConnections();
            });
        }
    }
    /** Removes a connection between two tasks.  The function can be called in one of two ways:1. With three arguments: the start task's index, the end task's index, and the connection type (for example, "finish-to-start" or "start-to-end").2. With a single connection string argument that describes the connection (e.g., "1->2:FS").This allows you to specify which task relationship to remove either by providing explicit task indices and type, or via a string representation of the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    removeConnection(startTaskIndex, taskEndIndex, connectionType) {
        const result = this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
        return result;
    }
    /** Deletes all connections associated with a specified task. If a second, valid task is provided as an argument, only the connections between the two specified tasks are removed.
    * @param {any} taskStart. The start task object or it's id.
    * @param {any} taskEnd?. The end task object or it's id.
    */
    removeTaskConnection(taskStart, taskEnd) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTaskConnection(taskStart, taskEnd);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTaskConnection(taskStart, taskEnd);
            });
        }
    }
    /** Displays a tooltip for a designated element, providing additional contextual information or guidance when the user hovers over, focuses on, or interacts with that element.
    * @param {HTMLElement} target. The HTMLElement that will be the target of the tooltip.
    * @param {string} content?. Allows to set a custom content for the Tooltip.
    */
    showTooltip(target, content) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showTooltip(target, content);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showTooltip(target, content);
            });
        }
    }
    /** Scrolls the view to a specific date within a calendar or timeline component, bringing the selected date into focus for the user.
    * @param {Date} date. The date to scroll to.
    */
    scrollToDate(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date);
            });
        }
    }
    /** Stores the current configuration of the element in the browser's LocalStorage, allowing the settings to persist across page reloads or browser sessions. Note: The element must have a unique id attribute assigned for this functionality to work properly.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
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
    /** Inserts a new task into the timeline. You can specify the task’s placement by providing a project ID: if a valid project ID is supplied, the new task will be created as a subtask under that project; if no project ID is given, the task will be added as a root-level item in the timeline. This allows for flexible organization, supporting both standalone tasks and tasks nested within projects.
    * @param {any} taskObject. An object describing a Gantt Chart task.
    * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
    * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
    * @returns {string | number | undefined}
  */
    insertTask(taskObject, project, index) {
        const result = this.nativeElement.insertTask(taskObject, project, index);
        return result;
    }
    /** Updates the details of an existing task, project, or milestone, such as its title, description, status, deadline, or assigned users. This operation allows you to modify key attributes to reflect changes in progress, requirements, or scheduling.
    * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(taskId, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(taskId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(taskId, taskObject);
            });
        }
    }
    /** Removes the specified task from the timeline, effectively deleting it from the list of scheduled events. This operation updates the timeline to ensure the removed task no longer appears or affects the scheduling of other tasks.
    * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
    */
    removeTask(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(taskId);
            });
        }
    }
    /** Adds a new resource to the collection by creating and storing the provided data. Returns details of the created resource upon successful insertion.
    * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} resourceObject?. An object describing a Gantt Chart resource.
    */
    insertResource(resourceId, resourceObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertResource(resourceId, resourceObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertResource(resourceId, resourceObject);
            });
        }
    }
    /** Updates the specified resource with new data or modifications. This operation applies changes to the current state of the resource identified by its unique identifier, ensuring that only the provided fields are altered while preserving any unspecified properties.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
    */
    updateResource(resourceId, taskObject) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateResource(resourceId, taskObject);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateResource(resourceId, taskObject);
            });
        }
    }
    /** Deletes a specified resource from the system, permanently removing it and its associated data. This action cannot be undone.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    */
    removeResource(resourceId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeResource(resourceId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeResource(resourceId);
            });
        }
    }
    /** Opens a popup window that allows the user to either edit or delete a connection when a specific connection string is provided. This popup provides relevant options and fields based on the selected task (edit or delete), streamlining the process of managing connection configurations.
    * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
    */
    openWindow(taskId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(taskId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(taskId);
            });
        }
    }
    /** Closes any active popup window that was opened within the specified element. This method searches for and terminates all open popup windows that are currently displayed inside the targeted element, ensuring that no popups remain visible or interactive.
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
    /** Configures the GanttChart for optimal print layout and formatting, then automatically launches the browser's Print Preview dialog, allowing users to review and print the current chart view.
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
    /** Enables users to define the standard working days and hours for the entire schedule in a single action. This ensures consistency by applying the specified days and time ranges across the relevant calendar or system settings.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    setWorkTime(settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setWorkTime(settings);
            });
        }
    }
    /** Enables users to retrieve and select a specific task by providing its unique task ID. This functionality ensures precise identification and access to individual tasks within the system.
    * @param {string | number} id. The id of the task to select.
    */
    selectTask(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectTask(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectTask(id);
            });
        }
    }
    /** Enables the selection of a specific resource by specifying its unique identifier (ID). This functionality ensures that only the resource matching the provided ID is retrieved or manipulated.
    * @param {string | number} id. The id of the resource to select.
    */
    selectResource(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectResource(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectResource(id);
            });
        }
    }
    /** Enables the deselection of a specific task by specifying its unique task ID. This operation removes the selected state from the corresponding task if it is currently selected.
    * @param {string | number} id. The id of the task to unselect.
    */
    unselectTask(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectTask(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectTask(id);
            });
        }
    }
    /** Enables the deselection of a specific resource by providing its unique identifier (ID). This function removes the selected state from the resource corresponding to the given ID, if it is currently selected.
    * @param {string | number} id. The id of the resource to unselect.
    */
    unselectResource(id) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectResource(id);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectResource(id);
            });
        }
    }
    /** Removes any previously defined working hours for the user or resource. This method serves as the counterpart to setWorkingTime, effectively clearing or resetting the working time settings that were established earlier.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    unsetWorkTime(settings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unsetWorkTime(settings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unsetWorkTime(settings);
            });
        }
    }
    /** Automatically sorts the tasks and resources in the GanttChart when the sortable option is enabled, allowing users to organize items by specified criteria such as start date, name, or priority.
    * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    sort(columns) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sort(columns);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sort(columns);
            });
        }
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
        return (React.createElement("smart-gantt-chart", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { GanttChart, Smart, GanttChart as default };
