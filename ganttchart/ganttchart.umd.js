
require('../source/modules/smart.ganttchart');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.ganttchart = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    const Smart = window.Smart;
    /**
     Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
    */
    class GanttChart extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'GanttChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return this._id;
        }
        /** Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used.
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
        /** Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
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
        /** Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
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
        /** Determines the scroll speed when dragging when autoScroll property is set.
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
        /** Enabled/Disables the colummn header menu. When enabled and the user hovers a column header, a drop down button will appear that triggers a column menu for quick actions like sorting, filtering, etc. The actions depend on the enabled Gantt features, for example the filtering action will be available only if filtering is enabled for the element.
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
        /** Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines.
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
        /** Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled.
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
        /** Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.
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
        /** Determines the refresh interval in seconds for the currentTimeIndicator.
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
        /** Sets the GanttChart's Data Export options.
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
        /** Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).overdue - a boolean that indicates whether the task's dateEnd has surpassed it's deadline date.disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.segments - an array of objects that allows to devide a task into multiple segements. Each segment (except the first) can have a different starting date, duration and label.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
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
        /** Determines the format of the dates in the timeline header when they represent days.
        *	Property type: GanttDayFormat
        */
        get dayFormat() {
            return this.nativeElement ? this.nativeElement.dayFormat : undefined;
        }
        set dayFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.dayFormat = value;
            }
        }
        /** Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
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
        /** Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
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
        /** Determines the date markers that will be displayed inside the timeline. Date markers allow to mark and even label specific dates (including time) inside the GanttChart timeline.
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
        /** Enables or disables the element.
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
        /** Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
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
        /** Disables dragging of tasks in the Timeline.
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
        /** Disables task progress changing in the Timeline.
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
        /** Disables resizing of tasks in the Timeline.
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
        /** Disables the selection inside the GanttChart.
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
        /** Disables the task segment dragging.
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
        /** Disables the task segment resizing.
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
        /** Disables the window editor for the GanttChart.
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
        /** Determines in what unit is task duration property measured.
        *	Property type: Duration
        */
        get durationUnit() {
            return this.nativeElement ? this.nativeElement.durationUnit : undefined;
        }
        set durationUnit(value) {
            if (this.nativeElement) {
                this.nativeElement.durationUnit = value;
            }
        }
        /** Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled.
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
        /** Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'.
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
        /** Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
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
        /** Determines whether the dateMarkers are visible or not.
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
        /** By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ).
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
        /** Shows the selection column of the Task/Resource Table. When applied a checkbox column is displayed that allows to select tasks/resources.
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
        /** Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
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
        /** Determines weather or not horizontal scrollbar is shown.
        *	Property type: HorizontalScrollBarVisibility
        */
        get horizontalScrollBarVisibility() {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        }
        set horizontalScrollBarVisibility(value) {
            if (this.nativeElement) {
                this.nativeElement.horizontalScrollBarVisibility = value;
            }
        }
        /** Determines the format of the dates inside the timeline header when they represent hours.
        *	Property type: HourFormat
        */
        get hourFormat() {
            return this.nativeElement ? this.nativeElement.hourFormat : undefined;
        }
        set hourFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.hourFormat = value;
            }
        }
        /** When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep.
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
        /** Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled.
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
        /** When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
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
        /** Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task.
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
        /**  Determines the language of the GanttChart.
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
        /** Detetmines the maximum possible date of the Timeline.
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
        /** Detetmines the minimum possible date of the Timeline.
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
        /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
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
        /** Determines the format of the dates the timeline header when they represent months.
        *	Property type: MonthFormat
        */
        get monthFormat() {
            return this.nativeElement ? this.nativeElement.monthFormat : undefined;
        }
        set monthFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.monthFormat = value;
            }
        }
        /** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
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
        /** Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
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
        /** A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). item - the connection/task object that is the target of the window.
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
        /** Determines which Tab items are visible inside the popup window. Three possible values are allowed: general - the general tab with task properties determines by the taskColumns property.dependency - the dependency tab which shows the connections to the task and allows to create/delete connections.segments - the segments tab which shows the segments of the task and allows to created/delete segments..
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
        /** A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
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
        /** A getter that returns a flat structure as an array of all resources inside the element.
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
        /** Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
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
        /** Determines whether the Resource Table is filterable or not.
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
        /** A format function that allows to re-format the group row labels when groupByResources is enabled.
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
        /** Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
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
        /** Determines the min size of the Resource Panel.
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
        /** Determines the size of the Resource Panel.
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
        /** Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
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
        /** A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
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
        /** Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
        *	Property type: GanttChartResourceTimelineMode
        */
        get resourceTimelineMode() {
            return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
        }
        set resourceTimelineMode(value) {
            if (this.nativeElement) {
                this.nativeElement.resourceTimelineMode = value;
            }
        }
        /** Determines how the resources will be displayed inside the resource Timeline.
        *	Property type: GanttChartResourceTimelineView
        */
        get resourceTimelineView() {
            return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
        }
        set resourceTimelineView(value) {
            if (this.nativeElement) {
                this.nativeElement.resourceTimelineView = value;
            }
        }
        /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
        /** Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path).
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
        /** Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path).
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
        /** Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
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
        /** Determines whether the baselnes of the tasks are visible or not. Baselines are defined via the 'planned' attribute on the task objects of the dataSource property.
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
        /** Shows the progress label inside the progress bars of the Timeline tasks.
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
        /** If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
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
        /** Determines whether the GanttChart can be sorted by one, more then one or no columns.
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
        /** A getter that returns a flat structure as an array of all tasks inside the element.
        *	Property type: GanttChartSortMode
        */
        get sortMode() {
            return this.nativeElement ? this.nativeElement.sortMode : undefined;
        }
        set sortMode(value) {
            if (this.nativeElement) {
                this.nativeElement.sortMode = value;
            }
        }
        /** Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
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
        /** Determines whether the Task Table is filterable or not.
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
        /** Determines the min size of the Task Panel. Used when Resource Panel is visible.
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
        /** Determines the size of the Task Panel. Used when Resource Panel is visible.
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
        /** Determines the min width of the timeline.
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
        /** Determines the min width of the task table.
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
        /** Determines the size(width) of the task table.
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
        /** A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
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
        /** Determines whether the tooltips are enabled or not. Tooltips are available for timeline tasks, resources, connections, indicators and segments.
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
        /** Determines weather or not vertical scrollbar is shown.
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
        /** Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
        *	Property type: VerticalScrollBarVisibility
        */
        get verticalScrollBarVisibility() {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        }
        set verticalScrollBarVisibility(value) {
            if (this.nativeElement) {
                this.nativeElement.verticalScrollBarVisibility = value;
            }
        }
        /** Determines the format of the dates inside the timeline header when they represent years.
        *	Property type: GanttChartView
        */
        get view() {
            return this.nativeElement ? this.nativeElement.view : undefined;
        }
        set view(value) {
            if (this.nativeElement) {
                this.nativeElement.view = value;
            }
        }
        /** Determines the format of the dates inside the timeline header when they represent weeks.
        *	Property type: YearFormat
        */
        get yearFormat() {
            return this.nativeElement ? this.nativeElement.yearFormat : undefined;
        }
        set yearFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.yearFormat = value;
            }
        }
        /** Sets or gets the element's visual theme.
        *	Property type: WeekFormat
        */
        get weekFormat() {
            return this.nativeElement ? this.nativeElement.weekFormat : undefined;
        }
        set weekFormat(value) {
            if (this.nativeElement) {
                this.nativeElement.weekFormat = value;
            }
        }
        /** Sets or gets if the element can be focused.
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
            return ["adjustToNonworkingTime", "autoSchedule", "autoScheduleStrictMode", "autoScrollStep", "columnMenu", "columnResize", "columnResizeFeedback", "currentTimeIndicator", "currentTimeIndicatorInterval", "dataExport", "dataSource", "dayFormat", "dateEnd", "dateStart", "dateMarkers", "disabled", "disableAutoScroll", "disableTaskDrag", "disableTaskProgressChange", "disableTaskResize", "disableSelection", "disableSegmentDrag", "disableSegmentResize", "disableWindowEditor", "durationUnit", "filterRow", "groupByResources", "headerTemplate", "hideDateMarkers", "hideTimelineHeaderDetails", "showSelectionColumn", "hideResourcePanel", "horizontalScrollBarVisibility", "hourFormat", "infiniteTimeline", "infiniteTimelineStep", "inverted", "keyboardNavigation", "locale", "max", "min", "messages", "monthFormat", "nonworkingDays", "nonworkingHours", "popupWindowCustomizationFunction", "popupWindowTabs", "progressLabelFormatFunction", "resources", "resourceColumns", "resourceFiltering", "resourceGroupFormatFunction", "resourcePanelHeaderTemplate", "resourcePanelMin", "resourcePanelSize", "resourcePanelRefreshRate", "resourceTimelineFormatFunction", "resourceTimelineMode", "resourceTimelineView", "rightToLeft", "selectedTaskIds", "selectedResourceIds", "shadeUntilCurrentTime", "showBaseline", "showProgressLabel", "snapToNearest", "sortFunction", "sortMode", "tasks", "taskColumns", "taskFiltering", "taskPanelMin", "taskPanelSize", "timelineMin", "treeMin", "treeSize", "timelineHeaderFormatFunction", "tooltip", "verticalScrollBarVisibility", "view", "yearFormat", "weekFormat", "theme", "unfocusable"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onBeginUpdate", "onEndUpdate", "onConnectionStart", "onConnectionEnd", "onChange", "onColumnResize", "onClosing", "onClose", "onCollapse", "onDragStart", "onDragEnd", "onExpand", "onFilter", "onItemClick", "onItemInsert", "onItemRemove", "onItemUpdate", "onOpening", "onOpen", "onProgressChangeStart", "onProgressChangeEnd", "onResizeStart", "onResizeEnd", "onSort", "onScrollBottomReached", "onScrollTopReached", "onScrollLeftReached", "onScrollRightReached", "onCreate", "onReady"];
        }
        /** Adds a custom filter to a specific column (task or resource column).
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
        /** Clears the currently applied filters.
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
        /** Clears the currently applied column sorting.
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
        /** Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
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
        /** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
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
        /** Removes all tasks.
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
        /** Removes all resources.
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
        /** Creates a connection between two tasks.
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
        /** Collapses an expanded project.
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
        /** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
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
        /** Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
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
        /** Refereshes the GanttChart after resizing by recalculating the Scrollbars.
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
        /** Makes sure a Task is visible by scrolling to it.
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
        /** Expands a collapsed project with tasks.
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
        /** Exports the data of Tree of the GanttChart.
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
        /** Returns all existing connections. The connections are returned as objects that contain detailed information. Each object in the array has the following keys: 'id' - connection id, 'type' - connection type, 'startTaskId' - connection's start task id, 'endTaskId' - connection's end task id, 'startIndex' - connection's start task index, 'endIndex' - connection's end task index, 'lag' - lag time.
        * @returns {any}
      */
        getConnections() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getConnections();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the connection details for the target connection which includes: startTask, endTask, startTaskId, endTaskId and type of the corresponding connection. Connection types are described in detail under the `connectionEnd` event description in this document and in a dedicated topic available on the website.
        * @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
        * @returns {any}
      */
        getConnectionDetails(connectionId) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getConnectionDetails(connectionId);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns a JSON representation of all tasks inside the element along with their connections and settings.
        * @returns {any[]}
      */
        getState() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getState();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user.
        * @param {any} item. A GattChartTask/GanttChartResource item object.
        * @returns {string}
      */
        getItemPath(item) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getItemPath(item);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the task object that corresponds to the id/path.
        * @param {string | number} itemId. The id/path of a task.
        * @returns {any}
      */
        getTask(itemId) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getTask(itemId);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns an array of all GanttChart tasks.
        * @returns {any[]}
      */
        getTasks() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getTasks();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the index of a task.
        * @param {any} task. A GattChartTask object.
        * @returns {number}
      */
        getTaskIndex(task) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getTaskIndex(task);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the connections definitions of a task.
        * @param {any} taskId. A GanttChartTask object or it's id.
        * @returns {any}
      */
        getTaskConnections(taskId) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getTaskConnections(taskId);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the Project of a task or undefined if it does not have one.
        * @param {any} task. A GantChartTask object.
        * @returns {any}
      */
        getTaskProject(task) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getTaskProject(task);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the resource object that corresponds to the id/path.
        * @param {string | number} itemId. The id/path of a resource.
        * @returns {any}
      */
        getResource(itemId) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getResource(itemId);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns an array of all GanttChart resources.
        * @returns {any[]}
      */
        getResources() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getResources();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the index of a resource.
        * @param {any} resource. A GanttChartResource object.
        * @returns {number}
      */
        getResourceIndex(resource) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getResourceIndex(resource);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the tasks that are assigned to the resource.
        * @param {any} resource. A GanttChartResource object or it's id.
        * @returns {any}
      */
        getResourceTasks(resource) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getResourceTasks(resource);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null.
        * @returns {any}
      */
        getSelectedIds() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSelectedIds();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the currently selected tasks.
        * @returns {any}
      */
        getSelectedTasks() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSelectedTasks();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the currently selected resources.
        * @returns {any}
      */
        getSelectedResources() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSelectedResources();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns the working hours of the day as numbers.
        * @returns {any}
      */
        getWorkingHours() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getWorkingHours();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Hides the tooltip if it's visible.
        * @returns {any}
      */
        hideTooltip() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.hideTooltip();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not.
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
        /** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
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
        /** Removes all connections between tasks.
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
        /** Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
        * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
        * @param {number} taskEndIndex?. The index of the end task.
        * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
        * @returns {any}
      */
        removeConnection(startTaskIndex, taskEndIndex, connectionType) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Removes all connections of a task or between two tasks if the second argument is provided and valid.
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
        /** Shows the tooltip for a specific element.
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
        /** Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
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
        /** Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item.
        * @param {any} taskObject. An object describing a Gantt Chart task.
        * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
        * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
        * @returns {string | number | undefined}
      */
        insertTask(taskObject, project, index) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.insertTask(taskObject, project, index);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Updates a task/project/milestone.
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
        /** Removes a task from the timeline.
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
        /** Inserts a new resource.
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
        /** Updates an existing resource.
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
        /** Removes a resource.
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
        /** Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed.
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
        /** Closes an opened popup Window. The method will close any opened popup window inside the element.
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
        /** Prepares the GanttChart for printing by opening the browser's Print Preview.
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
        /** Allows to sets the working days and hours at once.
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
        /** Allows to select a task based on it's id.
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
        /** Allows to select a resource based on it's id.
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
        /** Allows to unselect a task based on it's id.
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
        /** Allows to unselect a resource based on it's id.
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
        /** Allows to unset previously set working time. The opposte method for setWorkingTime.
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
        /** Sorts the GanttChart tasks/resources if sortable is enabled.
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
        componentDidRender(initialize) {
            const that = this;
            const props = {};
            const events = {};
            let styles = null;
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
            }
            for (let prop in props) {
                if (prop === 'class') {
                    const classNames = props[prop].trim().split(' ');
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
                    that.nativeElement[normalizedProp] = props[prop];
                }
            }
            for (let eventName in events) {
                that[eventName] = events[eventName];
                that.nativeElement[eventName.toLowerCase()] = events[eventName];
            }
            if (initialize) {
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
            return (React.createElement("smart-gantt-chart", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.GanttChart = GanttChart;
    exports.default = GanttChart;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
