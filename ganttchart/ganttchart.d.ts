import React from "react";
import { GanttChartProperties } from "./../index";
import { GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, MonthScale, QuarterFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSelectionMode, GanttChartSortMode, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDateMarker, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskColumn, GanttChartTooltip } from './../index';
export { GanttChartProperties } from "./../index";
export { GanttChartDataExportItemType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, MonthScale, QuarterFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSelectionMode, GanttChartSortMode, GanttChartTaskType, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDateMarker, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskIndicator, GanttChartTaskPlanned, GanttChartTaskSegment, GanttChartTaskColumn, GanttChartTooltip } from './../index';
declare let Smart: any;
export { Smart };
export interface GanttChartProps extends GanttChartProperties {
    className?: string;
    style?: React.CSSProperties;
    onBeginUpdate?: ((event?: Event) => void) | undefined;
    onEndUpdate?: ((event?: Event) => void) | undefined;
    onConnectionStart?: ((event?: Event) => void) | undefined;
    onConnectionEnd?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onColumnResize?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onItemInsert?: ((event?: Event) => void) | undefined;
    onItemRemove?: ((event?: Event) => void) | undefined;
    onItemUpdate?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onProgressChangeStart?: ((event?: Event) => void) | undefined;
    onProgressChangeEnd?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onScrollLeftReached?: ((event?: Event) => void) | undefined;
    onScrollRightReached?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Gantt charts are specialized bar charts that help clearly represent how tasks and resources are allocated over time in planning, project management, and scheduling applications.
*/
export declare class GanttChart extends React.Component<React.HTMLAttributes<Element> & GanttChartProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines whether nonworkingDays/nonworkingHours are taken into considuration when determining the dateEnd of the tasks. When this property is enabled the dateEnd of the tasks is calculated to include only the actual working time. By default it's disabled and only calendar time is used.
    *	Property type: boolean
    */
    get adjustToNonworkingTime(): boolean;
    set adjustToNonworkingTime(value: boolean);
    /** Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks.
    *	Property type: boolean
    */
    get autoSchedule(): boolean;
    set autoSchedule(value: boolean);
    /** Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined.
    *	Property type: boolean
    */
    get autoScheduleStrictMode(): boolean;
    set autoScheduleStrictMode(value: boolean);
    /** Determines the scroll speed when dragging when autoScroll property is set.
    *	Property type: number
    */
    get autoScrollStep(): number;
    set autoScrollStep(value: number);
    /** Enabled/Disables the colummn header menu. When enabled and the user hovers a column header, a drop down button will appear that triggers a column menu for quick actions like sorting, filtering, etc. The actions depend on the enabled Gantt features, for example the filtering action will be available only if filtering is enabled for the element.
    *	Property type: boolean
    */
    get columnMenu(): boolean;
    set columnMenu(value: boolean);
    /** Determines whether the Table columns are resizable or not. When enabled it is possible to resize the columns from the header cells of the Table in both Task and Resource timelines.
    *	Property type: boolean
    */
    get columnResize(): boolean;
    set columnResize(value: boolean);
    /** Determines resize feedback is used during column resizing. This property is applicable only when columnResize is enabled.
    *	Property type: boolean
    */
    get columnResizeFeedback(): boolean;
    set columnResizeFeedback(value: boolean);
    /** Gantt's current time. By default it is the today's date.
    *	Property type: string | Date
    */
    get currentTime(): string | Date;
    set currentTime(value: string | Date);
    /** Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.
    *	Property type: boolean
    */
    get currentTimeIndicator(): boolean;
    set currentTimeIndicator(value: boolean);
    /** Determines the refresh interval in seconds for the currentTimeIndicator.
    *	Property type: number
    */
    get currentTimeIndicatorInterval(): number;
    set currentTimeIndicatorInterval(value: number);
    /** Sets the GanttChart's Data Export options.
    *	Property type: GanttChartDataExport
    */
    get dataExport(): GanttChartDataExport;
    set dataExport(value: GanttChartDataExport);
    /** Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown. The duration always shows the calendar time whether it is in days/hours or other.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).overdue - a boolean that indicates whether the task's dateEnd has surpassed it's deadline date.disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.segments - an array of objects that allows to devide a task into multiple segements. Each segment (except the first) can have a different starting date, duration and label.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..GanttChart also accepts a DataAdapter instance as dataSource. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines the format of the dates in the timeline header when they represent days.
    *	Property type: GanttDayFormat | string
    */
    get dayFormat(): GanttDayFormat | string;
    set dayFormat(value: GanttDayFormat | string);
    /** Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks.
    *	Property type: string | Date
    */
    get dateEnd(): string | Date;
    set dateEnd(value: string | Date);
    /** Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks.
    *	Property type: string | Date
    */
    get dateStart(): string | Date;
    set dateStart(value: string | Date);
    /** Determines the date markers that will be displayed inside the timeline. Date markers allow to mark and even label specific dates (including time) inside the GanttChart timeline.
    *	Property type: GanttChartDateMarker[]
    */
    get dateMarkers(): GanttChartDateMarker[];
    set dateMarkers(value: GanttChartDateMarker[]);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Disables auto scrolling while dragging/resizing a task bar inside the Timeline.
    *	Property type: boolean
    */
    get disableAutoScroll(): boolean;
    set disableAutoScroll(value: boolean);
    /** Disables dragging of tasks in the Timeline.
    *	Property type: boolean
    */
    get disableTaskDrag(): boolean;
    set disableTaskDrag(value: boolean);
    /** Disables task progress changing in the Timeline.
    *	Property type: boolean
    */
    get disableTaskProgressChange(): boolean;
    set disableTaskProgressChange(value: boolean);
    /** Disables resizing of tasks in the Timeline.
    *	Property type: boolean
    */
    get disableTaskResize(): boolean;
    set disableTaskResize(value: boolean);
    /** Disables the selection inside the GanttChart.
    *	Property type: boolean
    */
    get disableSelection(): boolean;
    set disableSelection(value: boolean);
    /** Disables the task segment dragging.
    *	Property type: boolean
    */
    get disableSegmentDrag(): boolean;
    set disableSegmentDrag(value: boolean);
    /** Disables the task segment resizing.
    *	Property type: boolean
    */
    get disableSegmentResize(): boolean;
    set disableSegmentResize(value: boolean);
    /** Disables the window editor for the GanttChart.
    *	Property type: boolean
    */
    get disableWindowEditor(): boolean;
    set disableWindowEditor(value: boolean);
    /** Determines in what unit is task duration property measured.
    *	Property type: Duration | string
    */
    get durationUnit(): Duration | string;
    set durationUnit(value: Duration | string);
    /** Determines whether a dedicated filter row is used for Table filtering instead of the default filter input. This property has no effect if filtering is not enabled.
    *	Property type: boolean
    */
    get filterRow(): boolean;
    set filterRow(value: boolean);
    /** Determines the view start day. Sunday is 0, Monday is 1, Saturday is 6. By default it's Sunday.
    *	Property type: number
    */
    get firstDayOfWeek(): number;
    set firstDayOfWeek(value: number);
    /** Groups the tasks inside the Task timeline according to the resources they are assigned to. Unassigned tasks are placed in a default group labeled 'Unassigned'.
    *	Property type: boolean
    */
    get groupByResources(): boolean;
    set groupByResources(value: boolean);
    /** Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** Determines whether the dateMarkers are visible or not.
    *	Property type: boolean
    */
    get hideDateMarkers(): boolean;
    set hideDateMarkers(value: boolean);
    /** By default the Timeline has a three level header - timeline details, timeline second details and timeline header. This property hides the header container( the bottom container ).
    *	Property type: boolean
    */
    get hideTimelineHeader(): boolean;
    set hideTimelineHeader(value: boolean);
    /** By default the Timeline has a three level header - timeline details, timeline second details and timeline header. This property hides the header details container( the top container ).
    *	Property type: boolean
    */
    get hideTimelineHeaderDetails(): boolean;
    set hideTimelineHeaderDetails(value: boolean);
    /** By default the Timeline has a three level header - timeline details and timeline header. This property hides the second header details container( the middle container ).
    *	Property type: boolean
    */
    get hideTimelineSecondHeaderDetails(): boolean;
    set hideTimelineSecondHeaderDetails(value: boolean);
    /** Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
    *	Property type: boolean
    */
    get hideResourcePanel(): boolean;
    set hideResourcePanel(value: boolean);
    /** Determines weather or not horizontal scrollbar is shown.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Determines the format of the dates inside the timeline header when they represent hours.
    *	Property type: HourFormat | string
    */
    get hourFormat(): HourFormat | string;
    set hourFormat(value: HourFormat | string);
    /** When enabled, scrolling to the end of the horizotal timeline, triggers the creation of additional to extend the time range. The number of cells to be added when the scrollbar reaches the end position is determined by the infiniteTimelineStep.
    *	Property type: boolean
    */
    get infiniteTimeline(): boolean;
    set infiniteTimeline(value: boolean);
    /** Determines the number of cells to be added when the horizontal scroll bar of the Timeline reaches it's end position when infiniteTimeline is enabled.
    *	Property type: number
    */
    get infiniteTimelineStep(): number;
    set infiniteTimelineStep(value: number);
    /** When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Determines whether keyboard navigation inside the Table is enabled or not. Keyboard navigation affects both Task and Resource Tables. It allows to navigate between items. the following keyboard shortcut keys are available for focused tasks inside the Task Table: Enter - opens the Window editor to edit the currently focused task.Delete - opens a confirmation window regarding the deletion of the currently focused task.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /**  Determines the language of the GanttChart.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Detetmines the maximum possible date of the Timeline.
    *	Property type: string | Date
    */
    get max(): string | Date;
    set max(value: string | Date);
    /** Detetmines the minimum possible date of the Timeline.
    *	Property type: string | Date
    */
    get min(): string | Date;
    set min(value: string | Date);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the format of the dates the timeline header when they represent months.
    *	Property type: MonthFormat | string
    */
    get monthFormat(): MonthFormat | string;
    set monthFormat(value: MonthFormat | string);
    /** Determines the scale in Month view.
    *	Property type: MonthScale | string
    */
    get monthScale(): MonthScale | string;
    set monthScale(value: MonthScale | string);
    /** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
    *	Property type: number[]
    */
    get nonworkingDays(): number[];
    set nonworkingDays(value: number[]);
    /** Determines the nonworking hours of a day. Hours are represented as numbers inside an array (e.g. [1,2,3] - means 1,2 and 3 AM) or number ranges represented as nested arrays(e.g. [[0,6]] - means from 0 to 6 AM). In the timline the cells that represent nonworking days are colored differently from the rest and will not affect the dateEnd of the tasks unless the adjustToNonworkingTime property is enabled.
    *	Property type: number[] | number[][]
    */
    get nonworkingHours(): number[] | number[][];
    set nonworkingHours(value: number[] | number[][]);
    /** A function that can be used to completly customize the task element. The function has five arguments: task - the task object.segment - the task current segment object. If the task has only one segment, the task object is passed again.taskElement - the task's html element.segmentElement - the task's segment html element.labelElement - the task's segment label html element.
    *	Property type: any
    */
    get onTaskRender(): any;
    set onTaskRender(value: any);
    /** A function that can be used to completly customize the task element. The function has two arguments: task - the task object.taskElement - the task's html element.
    *	Property type: any
    */
    get taskFormatFunction(): any;
    set taskFormatFunction(value: any);
    /** A function that can be used to completly customize the tooltip. The function has three arguments: tooltipObject - the tooltip object.event - the event that triggered the tooltip.content - the tooltip's label element.
    *	Property type: any
    */
    get tooltipFormatFunction(): any;
    set tooltipFormatFunction(value: any);
    /** A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). item - the connection/task object that is the target of the window.
    *	Property type: any
    */
    get popupWindowCustomizationFunction(): any;
    set popupWindowCustomizationFunction(value: any);
    /** Determines which Tab items are visible inside the popup window. Three possible values are allowed: general - the general tab with task properties determines by the taskColumns property.dependency - the dependency tab which shows the connections to the task and allows to create/delete connections.segments - the segments tab which shows the segments of the task and allows to created/delete segments..
    *	Property type: string[]
    */
    get popupWindowTabs(): string[];
    set popupWindowTabs(value: string[]);
    /** A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
    *	Property type: any
    */
    get progressLabelFormatFunction(): any;
    set progressLabelFormatFunction(value: any);
    /** Determines the format of the dates the timeline header when they represent quarters.
    *	Property type: QuarterFormat | string
    */
    get quarterFormat(): QuarterFormat | string;
    set quarterFormat(value: QuarterFormat | string);
    /** A getter that returns a flat structure as an array of all resources inside the element.
    *	Property type: GanttChartResource[]
    */
    get resources(): GanttChartResource[];
    set resources(value: GanttChartResource[]);
    /** Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column
    *	Property type: GanttChartResourceColumn[]
    */
    get resourceColumns(): GanttChartResourceColumn[];
    set resourceColumns(value: GanttChartResourceColumn[]);
    /** Determines whether the Resource Table is filterable or not.
    *	Property type: boolean
    */
    get resourceFiltering(): boolean;
    set resourceFiltering(value: boolean);
    /** A format function that allows to re-format the group row labels when groupByResources is enabled.
    *	Property type: any
    */
    get resourceGroupFormatFunction(): any;
    set resourceGroupFormatFunction(value: any);
    /** Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
    *	Property type: any
    */
    get resourcePanelHeaderTemplate(): any;
    set resourcePanelHeaderTemplate(value: any);
    /** Determines the min size of the Resource Panel.
    *	Property type: number | string
    */
    get resourcePanelMin(): number | string;
    set resourcePanelMin(value: number | string);
    /** Determines the size of the Resource Panel.
    *	Property type: number | string
    */
    get resourcePanelSize(): number | string;
    set resourcePanelSize(value: number | string);
    /** Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change.
    *	Property type: number
    */
    get resourcePanelRefreshRate(): number;
    set resourcePanelRefreshRate(value: number);
    /** A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom.
    *	Property type: any
    */
    get resourceTimelineFormatFunction(): any;
    set resourceTimelineFormatFunction(value: any);
    /** Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element.
    *	Property type: GanttChartResourceTimelineMode | string
    */
    get resourceTimelineMode(): GanttChartResourceTimelineMode | string;
    set resourceTimelineMode(value: GanttChartResourceTimelineMode | string);
    /** Determines how the resources will be displayed inside the resource Timeline.
    *	Property type: GanttChartResourceTimelineView | string
    */
    get resourceTimelineView(): GanttChartResourceTimelineView | string;
    set resourceTimelineView(value: GanttChartResourceTimelineView | string);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets which tasks to select by their id or gets the currently selected task ids. If no id is provided for the task, an internal id is generated for each task according to it's index(tree path).
    *	Property type: number[] | string[]
    */
    get selectedTaskIds(): number[] | string[];
    set selectedTaskIds(value: number[] | string[]);
    /** Sets which resources to select by their id or gets the currently selected resource ids. If no id is provided for the resource, an internal id is generated for each resource according to it's index(tree path).
    *	Property type: number[] | string[]
    */
    get selectedResourceIds(): number[] | string[];
    set selectedResourceIds(value: number[] | string[]);
    /** Sets or gets the selection mode. Only applicable when selection is enabled.
    *	Property type: GanttChartSelectionMode | string
    */
    get selectionMode(): GanttChartSelectionMode | string;
    set selectionMode(value: GanttChartSelectionMode | string);
    /** Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
    *	Property type: boolean
    */
    get shadeUntilCurrentTime(): boolean;
    set shadeUntilCurrentTime(value: boolean);
    /** Shows the selection column of the Task/Resource Table. When applied a checkbox column is displayed that allows to select tasks/resources.
    *	Property type: boolean
    */
    get showSelectionColumn(): boolean;
    set showSelectionColumn(value: boolean);
    /** Determines whether the baselnes of the tasks are visible or not. Baselines are defined via the 'planned' attribute on the task objects of the dataSource property.
    *	Property type: boolean
    */
    get showBaseline(): boolean;
    set showBaseline(value: boolean);
    /** Shows the progress label inside the progress bars of the Timeline tasks.
    *	Property type: boolean
    */
    get showProgressLabel(): boolean;
    set showProgressLabel(value: boolean);
    /** If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well.
    *	Property type: boolean
    */
    get snapToNearest(): boolean;
    set snapToNearest(value: boolean);
    /** Determines whether the GanttChart can be sorted by one, more then one or no columns.
    *	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
    */
    get sortFunction(): {
        (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: {
            (firstRecord: any, secondRecord: any): number;
        }[]): void;
    };
    set sortFunction(value: {
        (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: {
            (firstRecord: any, secondRecord: any): number;
        }[]): void;
    });
    /** A getter that returns a flat structure as an array of all tasks inside the element.
    *	Property type: GanttChartSortMode | string
    */
    get sortMode(): GanttChartSortMode | string;
    set sortMode(value: GanttChartSortMode | string);
    /** Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
    *	Property type: GanttChartTask[]
    */
    get tasks(): GanttChartTask[];
    set tasks(value: GanttChartTask[]);
    /** Determines whether the Task Table is filterable or not.
    *	Property type: GanttChartTaskColumn[]
    */
    get taskColumns(): GanttChartTaskColumn[];
    set taskColumns(value: GanttChartTaskColumn[]);
    /** Determines the min size of the Task Panel. Used when Resource Panel is visible.
    *	Property type: boolean
    */
    get taskFiltering(): boolean;
    set taskFiltering(value: boolean);
    /** Determines the size of the Task Panel. Used when Resource Panel is visible.
    *	Property type: string | number
    */
    get taskPanelMin(): string | number;
    set taskPanelMin(value: string | number);
    /** Determines the min width of the timeline.
    *	Property type: string | number
    */
    get taskPanelSize(): string | number;
    set taskPanelSize(value: string | number);
    /** Determines the min width of the task table.
    *	Property type: string | number
    */
    get timelineMin(): string | number;
    set timelineMin(value: string | number);
    /** Determines the size(width) of the task table.
    *	Property type: string | number
    */
    get treeMin(): string | number;
    set treeMin(value: string | number);
    /** A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
    *	Property type: string | number
    */
    get treeSize(): string | number;
    set treeSize(value: string | number);
    /** Determines whether the tooltips are enabled or not. Tooltips are available for timeline tasks, resources, connections, indicators and segments.
    *	Property type: any
    */
    get timelineHeaderFormatFunction(): any;
    set timelineHeaderFormatFunction(value: any);
    /** Determines weather or not vertical scrollbar is shown.
    *	Property type: GanttChartTooltip
    */
    get tooltip(): GanttChartTooltip;
    set tooltip(value: GanttChartTooltip);
    /** Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    /** Determines the format of the dates inside the timeline header when they represent years.
    *	Property type: GanttChartView | string
    */
    get view(): GanttChartView | string;
    set view(value: GanttChartView | string);
    /** Determines the format of the dates inside the timeline header when they represent weeks.
    *	Property type: YearFormat | string
    */
    get yearFormat(): YearFormat | string;
    set yearFormat(value: YearFormat | string);
    /** Sets or gets the element's visual theme.
    *	Property type: WeekFormat | string
    */
    get weekFormat(): WeekFormat | string;
    set weekFormat(value: WeekFormat | string);
    /** Sets or gets if the element can be focused.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** undefined
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a batch update was started after executing the beginUpdate method.
    *  @param event. The custom event. 	*/
    onBeginUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a batch update was ended from after executing the endUpdate method.
    *  @param event. The custom event. 	*/
    onEndUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
    *   startIndex - The index of the task that a connection is started from.
    */
    onConnectionStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user completes a connection between two tasks.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	startTaskId, 	startIndex, 	endIndex, 	endTaskId, 	type)
    *   id - The id of the connection that was created.
    *   startTaskId - The id of the task that a connection is started from.
    *   startIndex - The index of the task that a connection is started from.
    *   endIndex - The index of the task that a connection ended to.
    *   endTaskId - The id of the task that a connection ended to.
    *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
    */
    onConnectionEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task is selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - The index of the new selected task.
    *   oldValue - The index of the previously selected task.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Tree column is resized. Column resizing is controled by the columnResize property.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	widthInPercentages, 	width)
    *   dataField - The name of the column. Corresponds to the <b>value</b> attribute of a <b>taskColumns/resourceColumns</b> object.
    *   headerCellElement - The HTMLElement column cell element that was resized.
    *   widthInPercentages - The new width of the column in percentages.
    *   width - The new width of the column in pixels.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the window for task editing or tooltip is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
    *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip.
    *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
    *   target - The instance of the window/tooltip that is going to close.
    *   type - The type of window/tooltip that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window for task editing is closed( hidden )
    *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
    *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
    *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
    *   target - The instance of the window/tooltip that is closed.
    *   type - The type of window/tooltip that is closed. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
    *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
    *   item - The object details of the collapsed item.
    *   index - The index of the collapsed item.
    *   label - The label of the collapsed item.
    *   value - The value of the collapsed item.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
    *   id - The id of the task that is going to be dragged.
    *   item - The object of the task that is going to be dragged.
    *   dateStart - The start date of the task that is going to be dragged.
    *   dateEnd - The end date of the task that is going to be dragged.
    *   segment - The segment object that is going to be dragged. This attribute is undefined if a segment is not going to be dragged.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when dragging of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
    *   id - The id of the task that is was dragged.
    *   item - The object of the task that is was dragged.
    *   dateStart - The start date of the task that is was dragged.
    *   dateEnd - The end date of the task that is was dragged.
    *   segment - The segment object that was dragged. This attribute is undefined if a segment has not been dragged.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	isGroup, 	item, 	index, 	label, 	value)
    *   isGroup - A boolean flag indicating whether the collapsed item is a resource group. This is the case when <b>groupByResoruces</b> is enabled.
    *   item - The index of the expanded item.
    *   index - The index of the expanded item.
    *   label - The label of the expanded item.
    *   value - The value of the expanded item.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the GanttChart is filtered.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	action, 	filters)
    *   type - The type of items that have been filtered ( task or resource ).
    *   action - The name of the filtering action (whether filtering is added or removed).
    *   filters - The filters that have been applied. Filters represent JQX.Utilities.FilterGroup objects.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	type, 	originalEvent)
    *   id - The id of the task.
    *   item - The item that was clicked. It can be a task, resource or connection.
    *   type - The type of item. Possible values are: 'task', 'project', 'resource', 'connection'.
    *   originalEvent - The original DOM event.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is inserted.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemInsert?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
    *   id - The id of the task.
    *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	item)
    *   id - The id of the task.
    *   type - The type of item that has been modified. The type could be: 'connection', 'task', 'project', 'resource'.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the window for task editing or tooltip is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
    *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
    *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
    *   target - The instance of the window/tooltip that is going to open.
    *   type - The type of window/tooltip that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
    */
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window for task editing is opened( visible ) or when the tooltip is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	owner, 	item, 	target, 	type)
    *   owner - The HTMLElement that is the owner of the tooltip. This attribute is defined only when the event is related to the tooltip
    *   item - The item object that is related to the tooltip owner. It can be a task/segment/resource/indicator object. This attribute is defined only when the event is related to the tooltip.
    *   target - The instance of the window/tooltip that is opened.
    *   type - The type of window/tooltip that is opened. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>. If the event is a tooltip event, there are several tooltip types: <ul><li>indicator - when the tooltip owner is an indicator.</li><li>segment - when the tooltip owner is a task segment.</li><li>task - when the tooltip owner is a task.</li><li>resource - when the tooltip target is a resource.</li></ul>
    */
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
    *   id - The id of the task.
    *   index - The index of the task which progress is going to be changed.
    *   progress - The progress of the task before it is changed.
    */
    onProgressChangeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the progress of a task is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	index, 	progress)
    *   id - The id of the task.
    *   index - The index of the task which progress is has been changed.
    *   progress - The progress of the task after it was changed.
    */
    onProgressChangeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
    *   id - The id of the task that is going to be resized.
    *   item - The object of the task that is going to be resized.
    *   dateStart - The start date of the task that is going to be resized.
    *   dateEnd - The end date of the task that is going to be resized.
    *   segment - The segment object that is going to be resized. This attribute is undefined if a segment is not going to be resized.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the resizing of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	item, 	dateStart, 	dateEnd, 	segment)
    *   id - The id of the task that was resized.
    *   item - The object of the task that was resized.
    *   dateStart - The start date of the task that was resized.
    *   dateEnd - The end date of the task that was resized.
    *   segment - The segment object that was resized. This attribute is undefined if a segment has not been resized.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the GanttChart is sorted by some column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes)
    *   type - The type of columns that have been sorted ( task or resource column ).
    *   columns - An array of objects that contains the currently sorted column objects.
    *   sortDataFields - The dataFields of the columns that have been sorted. The dataField corresponds to the <b>value</b> property of a <b>taskColumns/resourceColumns</b> object.
    *   sortOrders - The orders of the columns that have been sorted.
    *   sortDataTypes - The data types of the columns that have been sorted.
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the bottom.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the top.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the beginning (horizontally).
    *  @param event. The custom event. 	*/
    onScrollLeftReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the end (horizontally).
    *  @param event. The custom event. 	*/
    onScrollRightReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a custom filter to a specific column (task or resource column).
    * @param {any} columns. An object or an array of objects with the following syntax: <ul><li><b>type</b> - indicates the type of column to filter. Possible values are 'task' or 'resource'.</li><li><b>value</b> - the value of the column that must match the value attribute of a taskColumns/resourceColumns object(e.g. 'label', 'dateStart', etc).</li></ul>.
    * @param {any} filterGroup. A JQX.Utilities.FilterGroup object. Here's an example for creating a FilterGroup object: <pre>const filterGroup = new window.JQX.Utilities.FilterGroup(), filterObject = filterGroup.createFilter('string', 'Task B', 'STARTS_WITH_CASE_SENSITIVE'); filterGroup.addFilter('or', filterObject); gantt.addFilter({ type: 'task', value: 'label' }, filterGroup);</pre>
    */
    addFilter(columns: any, filterGroup: any): void;
    /** Clears the currently applied filters.
    */
    clearFilters(): void;
    /** Clears the currently applied column sorting.
    */
    clearSort(): void;
    /** Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
    */
    clearSelection(): void;
    /** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState(): void;
    /** Removes all tasks.
    */
    clearTasks(): void;
    /** Removes all resources.
    */
    clearResources(): void;
    /** Creates a connection between two tasks.
    * @param {number | string} startTaskIndex. The id of the start task or the connection string like '2-3-0'. <b>If the complete connections string is provided as the first argument, the rest of the method arguments are not necessary</b>
    * @param {number | string} taskEndIndex?. The id of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3. The connection type can be: <ul><li><b>0</b> - Start-to-Start connection.</li><li><b>1</b> - End-to-Start connection.</li><li><b>2</b> - End-to-End connection.</li><li><b>3</b> - Start-to-End connection.</li></ul>
    * @param {number} lag?. The connection lag in miliseconds. Used by the Auto scheduling algorithm in order allow some slack time slack time before or after the next task begins/ends. Lag is measured in miliseconds. It can be a negative (lead) or a positive (lag) number.
    */
    createConnection(startTaskIndex: number | string, taskEndIndex?: number | string, connectionType?: number, lag?: number): void;
    /** Collapses an expanded project.
    * @param {string | number} id. The id of a project item that should be collapsed.
    */
    collapse(id: string | number): void;
    /** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
    */
    endUpdate(): void;
    /** Refereshes the GanttChart after resizing by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
    */
    refresh(fullRefresh?: boolean): void;
    /** Makes sure a Task is visible by scrolling to it.
    * @param {string | number} taskId. The id of the target Task.
    */
    ensureVisible(taskId: string | number): void;
    /** Expands a collapsed project with tasks.
    * @param {string | number} id. The id of a project task that should be expanded.
    */
    expand(id: string | number): void;
    /** Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>tsv</b></li><li><b>csv</b></li><li><b>xml</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the JQX Export Documentation.
    */
    exportData(dataFormat: string, callback?: any): void;
    /** Returns all existing connections. The connections are returned as objects that contain detailed information. Each object in the array has the following keys: 'id' - connection id, 'type' - connection type, 'startTaskId' - connection's start task id, 'endTaskId' - connection's end task id, 'startIndex' - connection's start task index, 'endIndex' - connection's end task index, 'lag' - lag time.
    * @returns {any}
  */
    getConnections(): any;
    /** Returns the connection details for the target connection which includes: startTask, endTask, startTaskId, endTaskId and type of the corresponding connection. Connection types are described in detail under the `connectionEnd` event description in this document and in a dedicated topic available on the website.
    * @param {string} connectionId. A connection id. Each connection has a unique id that is assigned when a connection is created.
    * @returns {any}
  */
    getConnectionDetails(connectionId: string): any;
    /** Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
  */
    getState(): any;
    /** Returns the Tree path of a task/resource. The tree path is used as task/resource id if no id is provided by the user.
    * @param {any} item. A GattChartTask/GanttChartResource item object.
    * @returns {string}
  */
    getItemPath(item: any): any;
    /** Returns the task object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a task.
    * @returns {any}
  */
    getTask(itemId: string | number): any;
    /** Returns an array of all GanttChart tasks.
    * @returns {any[]}
  */
    getTasks(): any;
    /** Returns the index of a task.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    getTaskIndex(task: any): any;
    /** Returns the connections definitions of a task.
    * @param {any} taskId. A GanttChartTask object or it's id.
    * @returns {any}
  */
    getTaskConnections(taskId: any): any;
    /** Returns the Project of a task or undefined if it does not have one.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    getTaskProject(task: any): any;
    /** Returns the resource object that corresponds to the id/path.
    * @param {string | number} itemId. The id/path of a resource.
    * @returns {any}
  */
    getResource(itemId: string | number): any;
    /** Returns an array of all GanttChart resources.
    * @returns {any[]}
  */
    getResources(): any;
    /** Returns the index of a resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    getResourceIndex(resource: any): any;
    /** Returns the tasks that are assigned to the resource.
    * @param {any} resource. A GanttChartResource object or it's id.
    * @returns {any}
  */
    getResourceTasks(resource: any): any;
    /** Returns the currently selected tasks/resource ids. If selection is disabled or no items are selected returns null.
    * @returns {any}
  */
    getSelectedIds(): any;
    /** Returns the currently selected tasks.
    * @returns {any}
  */
    getSelectedTasks(): any;
    /** Returns the currently selected resources.
    * @returns {any}
  */
    getSelectedResources(): any;
    /** Returns the working hours of the day as numbers.
    * @returns {any}
  */
    getWorkingHours(): any;
    /** Hides the tooltip if it's visible.
    * @returns {any}
  */
    hideTooltip(): any;
    /** Depending on the nonworkingDays property, returns true or false whether the target date is on a working day or not.
    * @param {Date} date. A javascript Date object or a string/number which represents a valid JS Date.
    */
    isWorkingDay(date: Date): void;
    /** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    loadState(state?: any[]): void;
    /** Removes all connections between tasks.
    */
    removeAllConnections(): void;
    /** Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): any;
    /** Removes all connections of a task or between two tasks if the second argument is provided and valid.
    * @param {any} taskStart. The start task object or it's id.
    * @param {any} taskEnd?. The end task object or it's id.
    */
    removeTaskConnection(taskStart: any, taskEnd?: any): void;
    /** Shows the tooltip for a specific element.
    * @param {HTMLElement} target. The HTMLElement that will be the target of the tooltip.
    * @param {string} content?. Allows to set a custom content for the Tooltip.
    */
    showTooltip(target: HTMLElement, content?: string): void;
    /** Scrolls to a date.
    * @param {Date} date. The date to scroll to.
    */
    scrollToDate(date: Date): void;
    /** Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    saveState(state?: any[]): void;
    /** Inserts a new task in the timeline. The new task can be inserted as a sub task of a project by passing the appropriate argument for the project id or as a root level item.
    * @param {any} taskObject. An object describing a Gantt Chart task.
    * @param {any} project?. A number or string that represents the id of a project (e.g. '0') or a project object definition present in the GanttChart. This parameter determines the parent project of the task that will be inserted. If <b>null</b> is passed as an arguemnt the new task will be inserted at root level without a parent project.
    * @param {number} index?. The index where the new item should be inserted(e.g. 2). This index will determine the position of the newly inserted task.
    * @returns {string | number | undefined}
  */
    insertTask(taskObject: any, project?: any, index?: number): any;
    /** Updates a task/project/milestone.
    * @param {any} taskId. A number or string that represents the id of a task/project(e.g. '0') or the object definition of the task/project.
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(taskId: any, taskObject: any): void;
    /** Removes a task from the timeline.
    * @param {any} taskId. A number or string that represents the id of a task or the actual item object.
    */
    removeTask(taskId: any): void;
    /** Inserts a new resource.
    * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} resourceObject?. An object describing a Gantt Chart resource.
    */
    insertResource(resourceId: string | number, resourceObject?: any): void;
    /** Updates an existing resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
    */
    updateResource(resourceId: any, taskObject: any): void;
    /** Removes a resource.
    * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
    */
    removeResource(resourceId: any): void;
    /** Opens the popup Window for specific task to edit or to delete a connection if a connection string is passed.
    * @param {any} taskId. A string or number that represents the id of a task or the task object that is going to be edited or a connection string(e.g. '2-0-0').
    */
    openWindow(taskId: any): void;
    /** Closes an opened popup Window. The method will close any opened popup window inside the element.
    */
    closeWindow(): void;
    /** Prepares the GanttChart for printing by opening the browser's Print Preview.
    */
    print(): void;
    /** Allows to sets the working days and hours at once.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    setWorkTime(settings: {
        days: (number | string | number[])[];
        hours: (number | string | number[])[];
    }): void;
    /** Allows to select a task based on it's id.
    * @param {string | number} id. The id of the task to select.
    */
    selectTask(id: string | number): void;
    /** Allows to select a resource based on it's id.
    * @param {string | number} id. The id of the resource to select.
    */
    selectResource(id: string | number): void;
    /** Allows to unselect a task based on it's id.
    * @param {string | number} id. The id of the task to unselect.
    */
    unselectTask(id: string | number): void;
    /** Allows to unselect a resource based on it's id.
    * @param {string | number} id. The id of the resource to unselect.
    */
    unselectResource(id: string | number): void;
    /** Allows to unset previously set working time. The opposte method for setWorkingTime.
    * @param {{ days: (number | string | number[])[], hours: (number | string | number[])[] }} settings. An object definition that contains the days and hours that should not be working. The days and hours can be defined as an array of numbers where each number is a day/hour, strings where each string represents a range of days/hours (e.g. '1-5' or '2:00-8:00') or nested array of numbers (e.g. [[1,5]] or [[2, 8]]) which means from 1 to 5 or 2 to 8.
    */
    unsetWorkTime(settings: {
        days: (number | string | number[])[];
        hours: (number | string | number[])[];
    }): void;
    /** Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    sort(columns: any): void;
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
export default GanttChart;
