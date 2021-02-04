import React from "react";
import { GanttChartProperties } from "./../index";
import { GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskColumn } from './../index';
export { GanttChartProperties } from "./../index";
export { GanttChartDataExportItemType, GanttChartTaskType, GanttDayFormat, Duration, HorizontalScrollBarVisibility, HourFormat, MonthFormat, GanttChartResourceTimelineMode, GanttChartResourceTimelineView, GanttChartSortMode, VerticalScrollBarVisibility, GanttChartView, YearFormat, WeekFormat, GanttChartDataExport, GanttChartDataSource, GanttChartDataSourceResource, GanttChartResource, GanttChartResourceColumn, GanttChartTask, GanttChartTaskColumn } from './../index';
export declare const Smart: any;
export interface GanttChartProps extends GanttChartProperties {
    className?: string;
    style?: React.CSSProperties;
    onBeginUpdate?: ((event?: Event) => void) | undefined;
    onEndUpdate?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onItemInsert?: ((event?: Event) => void) | undefined;
    onItemRemove?: ((event?: Event) => void) | undefined;
    onItemUpdate?: ((event?: Event) => void) | undefined;
    onProgressChangeStart?: ((event?: Event) => void) | undefined;
    onProgressChangeEnd?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onConnectionStart?: ((event?: Event) => void) | undefined;
    onConnectionEnd?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
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
    /** Sets the GanttChart's Data Export options.
    *	Property type: GanttChartDataExport
    */
    get dataExport(): GanttChartDataExport;
    set dataExport(value: GanttChartDataExport);
    /** Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks..
    *	Property type: GanttChartDataSource[]
    */
    get dataSource(): GanttChartDataSource[];
    set dataSource(value: GanttChartDataSource[]);
    /** Determines the format of the dates in the timeline header when they represent days.
    *	Property type: GanttDayFormat
    */
    get dayFormat(): GanttDayFormat;
    set dayFormat(value: GanttDayFormat);
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
    /** Disables the window editor for the GanttChart.
    *	Property type: boolean
    */
    get disableWindowEditor(): boolean;
    set disableWindowEditor(value: boolean);
    /** Determines in what unit is task duration property measured.
    *	Property type: Duration
    */
    get durationUnit(): Duration;
    set durationUnit(value: Duration);
    /** Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** By default the Timeline has a two level header - timeline details and timeline header. This property hides the header details container( the top container ).
    *	Property type: boolean
    */
    get hideTimelineHeaderDetails(): boolean;
    set hideTimelineHeaderDetails(value: boolean);
    /** Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently.
    *	Property type: boolean
    */
    get hideResourcePanel(): boolean;
    set hideResourcePanel(value: boolean);
    /** Determines weather or not horizontal scrollbar is shown.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** Determines the format of the dates inside the timeline header when they represent hours.
    *	Property type: HourFormat
    */
    get hourFormat(): HourFormat;
    set hourFormat(value: HourFormat);
    /** When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
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
    *	Property type: MonthFormat
    */
    get monthFormat(): MonthFormat;
    set monthFormat(value: MonthFormat);
    /** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations.
    *	Property type: number[]
    */
    get nonworkingDays(): number[];
    set nonworkingDays(value: number[]);
    /** Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest.
    *	Property type: number[]
    */
    get nonworkingHours(): number[];
    set nonworkingHours(value: number[]);
    /** A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'.
    *	Property type: any
    */
    get popupWindowCustomizationFunction(): any;
    set popupWindowCustomizationFunction(value: any);
    /** A format function for the Timeline task progress label. The expected result from the function is a string. The label is hidden by default can be shown with the showProgressLabel property.
    *	Property type: any
    */
    get progressLabelFormatFunction(): any;
    set progressLabelFormatFunction(value: any);
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
    *	Property type: GanttChartResourceTimelineMode
    */
    get resourceTimelineMode(): GanttChartResourceTimelineMode;
    set resourceTimelineMode(value: GanttChartResourceTimelineMode);
    /** Determines how the resources will be displayed inside the resource Timeline.
    *	Property type: GanttChartResourceTimelineView
    */
    get resourceTimelineView(): GanttChartResourceTimelineView;
    set resourceTimelineView(value: GanttChartResourceTimelineView);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the selected task(s). If empty no tasks are selected.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
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
    /** Determines whether the GanttChart can be sorted or not.
    *	Property type: boolean
    */
    get sortable(): boolean;
    set sortable(value: boolean);
    /** Determines whether the GanttChart can be sorted by one or more columns.
    *	Property type: GanttChartSortMode
    */
    get sortMode(): GanttChartSortMode;
    set sortMode(value: GanttChartSortMode);
    /** A getter that returns a flat structure as an array of all tasks inside the element.
    *	Property type: GanttChartTask[]
    */
    get tasks(): GanttChartTask[];
    set tasks(value: GanttChartTask[]);
    /** Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor.
    *	Property type: GanttChartTaskColumn[]
    */
    get taskColumns(): GanttChartTaskColumn[];
    set taskColumns(value: GanttChartTaskColumn[]);
    /** Determines the min size of the Task Panel. Used when Resource Panel is visible.
    *	Property type: string | number
    */
    get taskPanelMin(): string | number;
    set taskPanelMin(value: string | number);
    /** Determines the size of the Task Panel. Used when Resource Panel is visible.
    *	Property type: string | number
    */
    get taskPanelSize(): string | number;
    set taskPanelSize(value: string | number);
    /** Determines the min width of the timeline.
    *	Property type: string | number
    */
    get timelineMin(): string | number;
    set timelineMin(value: string | number);
    /** Determines the min width of the task tree.
    *	Property type: string | number
    */
    get treeMin(): string | number;
    set treeMin(value: string | number);
    /** Determines the size(width) of the task tree.
    *	Property type: string | number
    */
    get treeSize(): string | number;
    set treeSize(value: string | number);
    /** A format function for the Header of the Timeline. The function provides the following arguments: date - a Date object that represets the date for the current cell.type - a string that represents the type of date that the cell is showing, e.g. 'month', 'week', 'day', etc.isHeaderDetails - a boolean that indicates whether the current cell is part of the Header Details Container or not.value - a string that represents the default value for the cell provided by the element.
    *	Property type: any
    */
    get timelineHeaderFormatFunction(): any;
    set timelineHeaderFormatFunction(value: any);
    /** Determines weather or not vertical scrollbar is shown.
    *	Property type: VerticalScrollBarVisibility
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility);
    /** Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates.
    *	Property type: GanttChartView
    */
    get view(): GanttChartView;
    set view(value: GanttChartView);
    /** Determines the format of the dates inside the timeline header when they represent years.
    *	Property type: YearFormat
    */
    get yearFormat(): YearFormat;
    set yearFormat(value: YearFormat);
    /** Determines the format of the dates inside the timeline header when they represent weeks.
    *	Property type: WeekFormat
    */
    get weekFormat(): WeekFormat;
    set weekFormat(value: WeekFormat);
    /** Sets or gets the element's visual theme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets if the element can be focused.
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
    /**  This event is triggered when a Task is selected/unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - The index of the new selected task.
    *   oldValue - The index of the previously selected task.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a task, resource or connection is clicked inside the Timeline or the Tree columns.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type, 	originalEvent)
    *   item - The item that was clicked. It cam be a task, resource or connection.
    *   type - The type of item. Possible values are: 'task', 'resource', 'connection'.
    *   originalEvent - The original DOM event.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is inserted.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemInsert?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Task/Resource/Connection is updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type, 	item)
    *   type - The type of item that has been modified.
    *   item - An object that represents the actual item with it's attributes.
    */
    onItemUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
    *   index - The index of the task which progress is going to be changed.
    *   progress - The progress of the task before it is changed.
    */
    onProgressChangeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the progress of a task is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
    *   index - The index of the task which progress is has been changed.
    *   progress - The progress of the task after it was changed.
    */
    onProgressChangeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is going to be dragged.
    *   dateStart - The start date of the task that is going to be dragged.
    *   dateEnd - The end date of the task that is going to be dragged.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when dragging of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is was dragged.
    *   dateStart - The start date of the task that is was dragged.
    *   dateEnd - The end date of the task that is was dragged.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that is going to be resized.
    *   dateStart - The start date of the task that is going to be resized.
    *   dateEnd - The end date of the task that is going to be resized.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the resizing of a task finishes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
    *   index - The index of the task that was resized.
    *   dateStart - The start date of the task that was resized.
    *   dateEnd - The end date of the task that was resized.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
    *   startIndex - The index of the task that a connection is started from.
    */
    onConnectionStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user completes a connection between two tasks.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
    *   startIndex - The index of the task that a connection is started from.
    *   endIndex - The index of the task that a connection is started from.
    *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
    */
    onConnectionEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the bottom.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Timeline has been scrolled to the top.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
    *   target - The instance of the window that is going to open.
    *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
    */
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window for task editing is opened( visible ).
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
    *   target - The instance of the window that is going to close.
    *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window for task editing is closed( hidden )
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Project is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
    *   index - The index of the collapsed project.
    *   label - The label of the collapsed project.
    *   value - The value of the collapsed project.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Project is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The index of the expanded project.
    *   label - The label of the expanded project.
    *   value - The value of the expanded project.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a task as the last item of a Project.
    * @param {any} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    addTaskTo(taskIndex: any, projectIndex: string | number): void;
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
    /** Removes all connections between tasks.
    */
    removeAllConnections(): void;
    /** Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    * @returns {any}
  */
    removeConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): Promise<any>;
    /** Removes all connections of a task or between two tasks if the second argument is provided and valid.
    * @param {number} taskStartIndex. The index of the start task.
    * @param {number} taskEndIndex?. The index of the end task.
    * @returns {string}
  */
    removeTaskConnection(taskStartIndex: number, taskEndIndex?: number): Promise<any>;
    /** Removes all tasks.
    */
    clearTasks(): void;
    /** Removes all resources.
    */
    clearResources(): void;
    /** Creates a connection between two tasks.
    * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
    * @param {number} taskEndIndex?. The index of the end task.
    * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
    */
    createConnection(startTaskIndex: number | string, taskEndIndex?: number, connectionType?: number): void;
    /** Collapses an expanded project with tasks.
    * @param {string | number} index. The index of a project task that should be collapsed.
    */
    collapse(index: string | number): void;
    /** Makes sure a Task is visible by scrolling to it.
    * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
    */
    ensureVisible(item: string | number): void;
    /** Expands a collapsed project with tasks.
    * @param {string | number} index. The index of a project task that should be expanded.
    */
    expand(index: string | number): void;
    /** Exports the data of Tree of the GanttChart.
    * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
    */
    exportData(dataFormat: string, callback?: any): void;
    /** Returns a JSON representation of all tasks inside the element along with their connections and settings.
    * @returns {any[]}
  */
    getState(): Promise<any>;
    /** Returns the Tree path of a task/resource.
    * @param {any} item. A GattChartTask/GanttChartResource item object or index.
    * @returns {string}
  */
    getItemPath(item: any): Promise<any>;
    /** Returns the index of a task.
    * @param {any} task. A GattChartTask object.
    * @returns {number}
  */
    getTaskIndex(task: any): Promise<any>;
    /** Returns the tree path of a task.
    * @param {any} task. A GanttChartTask object.
    * @returns {string}
  */
    getTaskPath(task: any): Promise<any>;
    /** Returns teh Project of a task if any.
    * @param {any} task. A GantChartTask object.
    * @returns {any}
  */
    getTaskProject(task: any): Promise<any>;
    /** Returns the index of a resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {number}
  */
    getResourceIndex(resource: any): Promise<any>;
    /** Returns the tasks that are assigned to the resource.
    * @param {any} resource. A GanttChartResource object.
    * @returns {any}
  */
    getResourceTasks(resource: any): Promise<any>;
    /** Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
    */
    clearSelection(): void;
    /** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState(): void;
    /** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    loadState(state?: any[]): void;
    /** Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
    */
    saveState(state?: any[]): void;
    /** Inserts a new task in the timeline.
    * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task.
    */
    insertTask(index: string | number, taskObject: any): void;
    /** Updates a task inside the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
    */
    updateTask(index: any, taskObject: any): void;
    /** Removes a task from the timeline.
    * @param {any} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
    */
    removeTask(index: any): void;
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
    /** Opens the popup Window for specific task Editing.
    * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
    */
    openWindow(index: string | number): void;
    /** Closes an opened popup Window. The method will close any opened popup window inside the element.
    */
    closeWindow(): void;
    /** Prepares the GanttChart for printing by opening the browser's Print Preview.
    */
    print(): void;
    /** Sorts the GanttChart tasks/resources if sortable is enabled.
    * @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
    */
    sort(columns?: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default GanttChart;
