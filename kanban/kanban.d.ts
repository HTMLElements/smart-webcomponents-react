import React from "react";
import { KanbanProperties } from "./../index";
import { Animation, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser } from './../index';
export { KanbanProperties } from "./../index";
export { Animation, KanbanColumnOrientation, KanbanDataSourcePriority, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanUser } from './../index';
export { DataAdapter } from './../index';
export declare const Smart: any;
export interface KanbanProps extends KanbanProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
}
/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export declare class Kanban extends React.Component<React.HTMLProps<Element> & KanbanProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
    *	Property type: boolean
    */
    get addNewButton(): boolean;
    set addNewButton(value: boolean);
    /** Allows the dragging of tasks.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Allows the dropping of tasks.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Allows collapsing the card content.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Describes the columns properties.
    *	Property type: KanbanColumn[]
    */
    get columns(): KanbanColumn[];
    set columns(value: KanbanColumn[]);
    /** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
    *	Property type: string | number
    */
    get currentUser(): string | number;
    set currentUser(value: string | number);
    /** Determines the data source to be visualized in the kanban board.
    *	Property type: KanbanDataSource[]
    */
    get dataSource(): KanbanDataSource[];
    set dataSource(value: KanbanDataSource[]);
    /** Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
    *	Property type: boolean
    */
    get dragOffset(): boolean;
    set dragOffset(value: boolean);
    /** Sets or gets whether tasks can be edited (including the assigning of users to tasks).
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Sets or gets the format string of comments time stamp.
    *	Property type: string
    */
    get formatStringTime(): string;
    set formatStringTime(value: string);
    /** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
    *	Property type: KanbanHeaderPosition
    */
    get headerPosition(): KanbanHeaderPosition;
    set headerPosition(value: KanbanHeaderPosition);
    /** Sets or gets the way column hierarchy is represented.
    *	Property type: KanbanHierarchy
    */
    get hierarchy(): KanbanHierarchy;
    set hierarchy(value: KanbanHierarchy);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines selection mode.
    *	Property type: KanbanSelectionMode
    */
    get selectionMode(): KanbanSelectionMode;
    set selectionMode(value: KanbanSelectionMode);
    /** Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
    *	Property type: KanbanSwimlane[]
    */
    get swimlanes(): KanbanSwimlane[];
    set swimlanes(value: KanbanSwimlane[]);
    /** Sets or gets the index of the column at which to start the swimlanes.
    *	Property type: number
    */
    get swimlanesFrom(): number;
    set swimlanesFrom(value: number);
    /** Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
    *	Property type: number
    */
    get swimlanesTo(): number;
    set swimlanesTo(value: number);
    /** Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
    *	Property type: any[]
    */
    get tags(): any[];
    set tags(value: any[]);
    /** Toggles the visibility of the task actions icon.
    *	Property type: boolean
    */
    get taskActions(): boolean;
    set taskActions(value: boolean);
    /** Toggles the visibility of the task comments icon.
    *	Property type: boolean
    */
    get taskComments(): boolean;
    set taskComments(value: boolean);
    /** Toggles the visibility of the task due icon.
    *	Property type: boolean
    */
    get taskDue(): boolean;
    set taskDue(value: boolean);
    /** Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
    *	Property type: KanbanTaskPosition
    */
    get taskPosition(): KanbanTaskPosition;
    set taskPosition(value: KanbanTaskPosition);
    /** Toggles the visibility of the task priority icon (shown when priority is low or high).
    *	Property type: boolean
    */
    get taskPriority(): boolean;
    set taskPriority(value: boolean);
    /** Toggles the visibility of task progress bar and the completed sub-tasks label.
    *	Property type: boolean
    */
    get taskProgress(): boolean;
    set taskProgress(value: boolean);
    /** Toggles the visibility of task tags.
    *	Property type: boolean
    */
    get taskTags(): boolean;
    set taskTags(value: boolean);
    /** Toggles the visibility of the task user icon.
    *	Property type: boolean
    */
    get taskUserIcon(): boolean;
    set taskUserIcon(value: boolean);
    /** Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
    *	Property type: any
    */
    get textTemplate(): any;
    set textTemplate(value: any);
    /** Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
    *	Property type: boolean
    */
    get userList(): boolean;
    set userList(value: boolean);
    /** Determines the users Kanban tasks can be assigned to and their characteristics and privileges.
    *	Property type: KanbanUser[]
    */
    get users(): KanbanUser[];
    set users(value: KanbanUser[]);
    get properties(): string[];
    /**  This event is triggered when a task has been updated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
    *   oldValue - The old data of the task
    *   task - The HTML element of the task whose data has been changed
    *   value - The new data of the task
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the edit/prompt dialog is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
    *   container - the Kanban the dragged task(s) is dropped to
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the Kanban the dragged item(s) is dragged from
    *   target - the element the dragged tasks are dropped to
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user is dragging a task.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the Kanban the dragged task(s) is dragged from
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the Kanban the dragged item(s) is dragged from
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a filter has been applied.
    *  @param event. The custom event. 	*/
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the edit/prompt dialog is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
    *   comment - The comment that is about to be removed (if applicable).
    *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
    *   task - The task that is about to be edited or removed (if applicable).
    */
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when sorting has been applied.
    *  @param event. The custom event. 	*/
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    /** Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters: string[], operator?: string): void;
    /** Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields: [] | string, orderBy: [] | string): void;
    /** Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
    * @param {any} data?. An object containing the new task's data
    */
    addTask(data?: any): void;
    /** Begins an edit operation
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    beginEdit(task: number | string | HTMLElement): void;
    /** Ends the current edit operation and discards changes
    */
    cancelEdit(): void;
    /** Closes any open header panel (drop down)
    */
    closePanel(): void;
    /** Collapses a Kanban column.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    collapse(column: number | string): void;
    /** Creates a copy of a task in the same column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    copyTask(task: number | string | HTMLElement): void;
    /** Ends the current edit operation and saves changes
    */
    endEdit(): void;
    /** Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    ensureVisible(task: number | string | HTMLElement): Promise<any>;
    /** Expands a Kanban column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    expand(column: number | string): void;
    /** Expands all Kanban columns.
    */
    expandAll(): void;
    /** Exports the Kanban's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName?: string, callback?: Function): Promise<any>;
    /** Gets the Kanban's state.
    * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
  */
    getState(): Promise<any>;
    /** Loads the Kanban's state.
    * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
    */
    loadState(state?: {
        collapsed: {};
        dataSource: [];
        filtering: {
            filters: [];
            operator: string;
        };
        selection: {
            selected: [];
            selectionStart?: number | string;
            selectionInColumn: string;
            swimlane: string;
        };
        sorting: {
            dataFields: [];
            dataTypes: [];
            orderBy: [];
        };
        tabs: [];
        visibility: {
            taskActions: boolean;
            taskComments: boolean;
            taskDue: boolean;
            taskPriority: boolean;
            taskProgress: boolean;
            taskTags: boolean;
            taskUserIcon: boolean;
        };
    }): void;
    /** Moves a task to a different column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    moveTask(task: number | string | HTMLElement, newStatus: string): void;
    /** Opens the "Customize tasks" header panel (drop down)
    */
    openCustomizePanel(): void;
    /** Opens the "Filter" header panel (drop down)
    */
    openFilterPanel(): void;
    /** Opens the "Sort" header panel (drop down)
    */
    openSortPanel(): void;
    /** Removes filtering
    */
    removeFilter(): void;
    /** Removes sorting
    */
    removeSort(): void;
    /** Removes a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    removeTask(task: number | string | HTMLElement, prompt?: boolean): void;
    /** Saves the Kanban's state to the browser's localStorage.
    */
    saveState(): void;
    /** Updates a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    updateTask(task: number | string | HTMLElement, newData: {}): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Kanban;
