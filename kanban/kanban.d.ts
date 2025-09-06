import React from "react";
import { KanbanProperties } from "./../index";
import { KanbanAddNewButtonDisplayMode, KanbanColumnEditMode, KanbanEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser } from './../index';
export { KanbanProperties } from "./../index";
export { KanbanAddNewButtonDisplayMode, KanbanColumnOrientation, KanbanColumnEditMode, KanbanEditMode, KanbanHeaderPosition, KanbanHierarchy, KanbanSelectionMode, KanbanTaskPosition, KanbanTaskSubTasks, KanbanColumn, KanbanDataSource, KanbanSwimlane, KanbanPriority, KanbanUser } from './../index';
export { DataAdapter } from './../index';
declare let Smart: any;
export { Smart };
export interface KanbanProps extends KanbanProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onColumnAdd?: ((event?: Event) => void) | undefined;
    onColumnRemove?: ((event?: Event) => void) | undefined;
    onColumnReorder?: ((event?: Event) => void) | undefined;
    onColumnUpdate?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    onColumnShow?: ((event?: Event) => void) | undefined;
    onColumnHide?: ((event?: Event) => void) | undefined;
    onColumnCollapse?: ((event?: Event) => void) | undefined;
    onColumnExpand?: ((event?: Event) => void) | undefined;
    onCommentAdd?: ((event?: Event) => void) | undefined;
    onCommentRemove?: ((event?: Event) => void) | undefined;
    onCommentUpdate?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onTaskBeforeAdd?: ((event?: Event) => void) | undefined;
    onTaskAdd?: ((event?: Event) => void) | undefined;
    onTaskRemove?: ((event?: Event) => void) | undefined;
    onTaskUpdate?: ((event?: Event) => void) | undefined;
    onTaskClick?: ((event?: Event) => void) | undefined;
    onTaskDoubleClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
export declare class Kanban extends React.Component<React.HTMLAttributes<Element> & KanbanProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Controls whether users can reorder columns in a table or grid. When set to true and used in combination with allowDrag enabled, this property lets users rearrange columns by dragging and dropping their headers. For example, a user can click and hold the header of the first column, then drag it to a new position over another column header and drop it, changing the column order visually and functionally. This enhances the user experience by allowing customizable column layouts.
    *	Property type: boolean
    */
    get allowColumnReorder(): boolean;
    set allowColumnReorder(value: boolean);
    /** Controls whether column editing is permitted. When this property is set to true, users can dynamically edit the column's header label by double-clicking on it. This allows for in-place renaming of the column header directly within the user interface. If set to false, the column header label will remain static and cannot be modified by users.
    *	Property type: boolean
    */
    get allowColumnEdit(): boolean;
    set allowColumnEdit(value: boolean);
    /** Controls whether users can remove columns from the table. When set to true, a "Remove Column" option will appear in the column actions menu, allowing users to dynamically delete columns. Note: The 'columnActions' property must also be enabled (set to true) for this feature to be available.
    *	Property type: boolean
    */
    get allowColumnRemove(): boolean;
    set allowColumnRemove(value: boolean);
    /** Controls whether users can hide columns in the data table. When set to true, this property allows users to dynamically hide individual columns using the column actions menu. Note: To enable this feature, the 'columnActions' property must also be set to true.
    *	Property type: boolean
    */
    get allowColumnHide(): boolean;
    set allowColumnHide(value: boolean);
    /** Controls whether the "Add Task" button is displayed at the top of each column. To hide the button for an individual column, set the addNewButton property to false within that column’s configuration object. If addNewButton is false, users will not see the "Add Task" button for that specific column.
    *	Property type: boolean
    */
    get addNewButton(): boolean;
    set addNewButton(value: boolean);
    /** Specifies whether the add button appears in the column header, after the list of tasks within the column, or both. This controls the visibility and placement of the add button for creating new tasks in each column.
    *	Property type: KanbanAddNewButtonDisplayMode | string
    */
    get addNewButtonDisplayMode(): KanbanAddNewButtonDisplayMode | string;
    set addNewButtonDisplayMode(value: KanbanAddNewButtonDisplayMode | string);
    /** Specifies whether a special column containing a button for adding new status columns to the Kanban board is shown. When enabled, this feature allows users to quickly create additional status columns directly within the Kanban interface. You can use this setting to display or hide the "Add Column" button column as needed.
    *	Property type: boolean
    */
    get addNewColumn(): boolean;
    set addNewColumn(value: boolean);
    /** Specifies the width of the dynamically added "Add New" column. This property is effective only when the 'columnWidth' property is also set. It allows you to control the exact width (in pixels or other valid CSS units) of the new column that appears when adding columns dynamically to the table or grid.
    *	Property type: number | null
    */
    get addNewColumnWidth(): number | null;
    set addNewColumnWidth(value: number | null);
    /** Enables users to click and drag tasks within the interface, allowing them to easily reorder, move, or reorganize tasks by dragging and dropping them to the desired position.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Enables users to remove or discard tasks from the list or workflow, either by dragging and dropping or through a designated action, facilitating task management and organization.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Enables a visual placeholder to appear when dragging and dropping tasks. As you drag a task over another task, an empty space is dynamically created at the drop location, clearly indicating where the dragged task will be inserted. This improves usability by providing real-time visual feedback during task reordering.
    *	Property type: boolean
    */
    get allowDropPlaceholder(): boolean;
    set allowDropPlaceholder(value: boolean);
    /** This property controls the color styling of Kanban columns and their associated tasks. When set to true, and if a Kanban column has its color property defined, that color will not only visually highlight the column header but will also be applied to all tasks within that column, as well as to the background or accent color of the edit dialog for tasks in that column. This creates a consistent and visually cohesive color scheme throughout each column and its related UI elements.
    *	Property type: boolean
    */
    get applyColumnColorToTasks(): boolean;
    set applyColumnColorToTasks(value: boolean);
    /** Controls whether the application automatically loads its state from the browser’s localStorage. This includes restoring information such as:- The list of tasks and their positions- The selected task and its state- Applied filters and sorting options- The state of collapsed columns- The values of the following task-related properties:  - taskActions  - taskComments  - taskDue  - taskPriority  - taskProgress  - taskTags  - taskUserIconWhen enabled, all of these details will be reloaded from localStorage on page refresh or reopening the application, ensuring a consistent user experience. When disabled, this information will not be loaded automatically, and the state will not be restored.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Controls whether the application's current state is automatically saved to the browser's localStorage. When enabled, the following information is persistently stored and restored across sessions: - Task data, including their current positions, selected status, and any applied filters or sorting.- The collapsed or expanded state of columns.- Values for the following properties:  - taskActions (user actions related to tasks)  - taskComments (comments attached to tasks)  - taskDue (task due dates)  - taskPriority (priority level of tasks)  - taskProgress (progress tracking for tasks)  - taskTags (tags associated with each task)  - taskUserIcon (user avatars/icons linked to tasks)This ensures that user preferences and the state of the task interface are preserved, providing a seamless user experience even after closing or refreshing the browser. Disabling this feature will prevent any state information from being stored in localStorage, and all settings will be reset upon page reload.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Dynamically adjusts the height of each column based on the total height of its tasks, ensuring all content is fully visible. This property is effective only when 'columnColorEntireSurface' is set to true, allowing the background color to extend appropriately over the column’s entire surface.
    *	Property type: boolean
    */
    get autoColumnHeight(): boolean;
    set autoColumnHeight(value: boolean);
    /** Enables the card content to be expanded or collapsed, providing users with the ability to show or hide additional information within the card. This enhances the user interface by reducing visual clutter and allowing for more compact content presentation.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Displays a color indicator in the column header whenever the column's color property is defined. The header visually reflects the assigned color, making it easier to identify and distinguish columns based on their color settings.
    *	Property type: boolean
    */
    get columnColors(): boolean;
    set columnColors(value: boolean);
    /** Defines the width for each Kanban column. When this property is specified, all Kanban columns are rendered at the given width. If the total width of all columns exceeds the available space, a horizontal scrollbar will appear, allowing users to scroll and view all columns.
    *	Property type: number | null
    */
    get columnWidth(): number | null;
    set columnWidth(value: number | null);
    /** Renders a customizable background within the Kanban column, allowing for enhanced visual separation and improved column identification. Supports various background options such as color, image, or pattern to match your application's design requirements.
    *	Property type: boolean
    */
    get columnColorEntireSurface(): boolean;
    set columnColorEntireSurface(value: boolean);
    /** Renders a column footer that displays a summary value, such as totals or averages, for the data in that column. This footer helps users quickly interpret aggregate information at the bottom of the column.
    *	Property type: boolean
    */
    get columnFooter(): boolean;
    set columnFooter(value: boolean);
    /** Provides detailed definitions and configuration options for each column’s properties, including attributes such as data type, default value, visibility, header label, and formatting options.
    *	Property type: KanbanColumn[]
    */
    get columns(): KanbanColumn[];
    set columns(value: KanbanColumn[]);
    /** Controls whether the column actions icon is displayed, allowing users to access additional options or actions for each table column. When enabled, the icon becomes visible; when disabled, the icon is hidden from view.
    *	Property type: boolean
    */
    get columnActions(): boolean;
    set columnActions(value: boolean);
    /** Specifies whether the number of tasks is shown in the headers of each column, allowing users to see the count of tasks directly within the column titles.
    *	Property type: boolean
    */
    get columnSummary(): boolean;
    set columnSummary(value: boolean);
    /** Specifies whether a custom template is applied to the column header. Accepts a value of type string (containing template markup), function (returning a template or markup), or an HTMLTemplateElement. Use this property to customize the appearance and content of the column header beyond the default rendering.
    *	Property type: any
    */
    get columnHeaderTemplate(): any;
    set columnHeaderTemplate(value: any);
    /** Specifies how column editing is initiated within the interface.  - When set to ''header'', editing mode is activated by double-clicking directly on the column's header label.  - When set to ''menu'', editing can only be started through the column's context or 'columnActions' menu.  - When set to ''headerAndMenu'', both methods are available—users can begin editing either by double-clicking the header or by selecting the relevant option from the column menu.
    *	Property type: KanbanColumnEditMode | string
    */
    get columnEditMode(): KanbanColumnEditMode | string;
    set columnEditMode(value: KanbanColumnEditMode | string);
    /** Sets or retrieves the ID of the currently active user. This value must match the 'id' of a user object within the 'users' property or array. The privileges and access rights available are determined based on the current user's identity. If no current user is specified, the element's permissions default to those defined by its own properties, rather than user-specific settings.
    *	Property type: string | number
    */
    get currentUser(): string | number;
    set currentUser(value: string | number);
    /** Controls whether the default dialog for adding or removing tasks or comments is enabled or disabled. When set to true, the dialog will not appear, allowing for custom handling of these actions. When set to false, the standard dialog will be shown as usual. This property can be used to either retrieve the current setting (get) or define its behavior (set).
    *	Property type: boolean
    */
    get disableDialog(): boolean;
    set disableDialog(value: boolean);
    /** Sets or retrieves a customization function for the Kanban dialog component. This function allows you to modify the appearance and behavior of the dialog, or to replace it entirely with a custom implementation. When invoked, the Kanban component calls this function with five arguments:- 'dialog': The default dialog instance, typically a 'smart-window' object, which serves as the default modal dialog for tasks and comments.- 'taskOrComment': The data object representing either a Kanban task or a comment, depending on the context of the action.- 'editors': An object containing the input elements or editors used within the dialog for data entry or modification.- 'purpose': A string indicating the dialog’s intent, such as ''add'' for creating a new item or ''edit'' for modifying an existing one.- 'type': A string specifying the entity being processed, such as ''task'' for task-related dialogs or ''column'' for column-related dialogs.By providing a custom function, you can tailor the dialog’s UI, integrate additional logic, or substitute a completely different dialog component to meet your application's requirements.
    *	Property type: any
    */
    get dialogCustomizationFunction(): any;
    set dialogCustomizationFunction(value: any);
    /** Sets or retrieves the callback function that is executed when the dialog is rendered. This function is invoked by the Kanban component and receives six arguments: dialog, editors, labels, tabs, layout, and taskOrComment.- 'dialog': The 'smart-window' instance representing the Kanban dialog.- 'taskOrComment': An object representing either the current Kanban task or a comment, depending on the context in which the dialog is opened.- 'editors, labels, tabs, layout': Each is a JSON object where keys specify the element type (e.g., 'description', 'priority', 'notes'), and the values are their corresponding HTML elements within the dialog.This function allows developers to customize the dialog content or behavior dynamically based on the element types and the associated data when the dialog is rendered.
    *	Property type: any
    */
    get dialogRendered(): any;
    set dialogRendered(value: any);
    /** Specifies the origin or source of the data to be displayed and managed on the Kanban board, such as an API endpoint, database, or local data array. This setting dictates which dataset will populate the Kanban columns and cards.
    *	Property type: KanbanDataSource[]
    */
    get dataSource(): KanbanDataSource[];
    set dataSource(value: KanbanDataSource[]);
    /** Specifies how the Kanban board's default fields (e.g., title, status, assignee) correspond to the fields in your data source. Use this mapping only if your data source uses field names that differ from the Kanban's expected keywords. If the field names already match, this mapping is optional. Note that only certain default fields support custom mapping; not all default mappings can be overridden.
    *	Property type: { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}
    */
    get dataSourceMap(): {
        checklist: string;
        color: string;
        comments: string;
        dueDate: string;
        id: string;
        priority: string;
        progress: string;
        startDate: string;
        status: string;
        swimlane: string;
        tags: string;
        text: string;
        userId: string;
        createdUserId: string;
        upDatedUserId: string;
        createdDate: Date;
        upDatedDate: Date;
    };
    set dataSourceMap(value: {
        checklist: string;
        color: string;
        comments: string;
        dueDate: string;
        id: string;
        priority: string;
        progress: string;
        startDate: string;
        status: string;
        swimlane: string;
        tags: string;
        text: string;
        userId: string;
        createdUserId: string;
        upDatedUserId: string;
        createdDate: Date;
        upDatedDate: Date;
    });
    /** Specifies the offset, in pixels, between the drag feedback element and the mouse cursor during task dragging operations. The value should be provided as an array: the first element sets the horizontal (x-axis) offset, and the second element sets the vertical (y-axis) offset, both relative to the cursor position. Alternatively, if set to 'auto', the system automatically calculates the offset based on the cursor’s position at the moment the drag action began. This allows for precise control over the visual positioning of the feedback element during drag-and-drop interactions.
    *	Property type: boolean
    */
    get dragOffset(): boolean;
    set dragOffset(value: boolean);
    /** Controls whether tasks can be modified, including editing task details and assigning users to tasks. When enabled, users can update task information and manage task assignments; when disabled, tasks and their assigned users are read-only and cannot be changed programmatically or through the user interface.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Specifies how users can activate the task editing feature. The 'editBehavior' property accepts either '"singleClick"' or '"doubleClick"' as values:- '"singleClick"': Opens the dialog edit window when the user clicks once on a Kanban task.- '"doubleClick"' (default): Opens the dialog edit window when the user double-clicks on a Kanban task.By default, editing is triggered by a double-click. Use this setting to customize the interaction based on your application's needs.
    *	Property type: KanbanEditMode | string
    */
    get editMode(): KanbanEditMode | string;
    set editMode(value: KanbanEditMode | string);
    /** Sets or retrieves the format string used to display the "Due date" label, as well as the date format for both the "Start date" and "Due date" editor fields. This determines how dates are shown and entered in these UI components.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Specifies or retrieves the format string used to display the timestamp on comments. This determines how the date and time of each comment are presented (e.g., "YYYY-MM-DD HH:mm:ss").
    *	Property type: string
    */
    get formatStringTime(): string;
    set formatStringTime(value: string);
    /** Sets or retrieves the position of the header section within the user interface. The header typically contains interactive controls such as Customize, Filter, Sort, and Search buttons, allowing users to adjust and manipulate the displayed data according to their preferences.
    *	Property type: KanbanHeaderPosition | string
    */
    get headerPosition(): KanbanHeaderPosition | string;
    set headerPosition(value: KanbanHeaderPosition | string);
    /** Defines or retrieves how the column hierarchy is structured and displayed, specifying the method or format used to represent the relationships between columns within the component or dataset.
    *	Property type: KanbanHierarchy | string
    */
    get hierarchy(): KanbanHierarchy | string;
    set hierarchy(value: KanbanHierarchy | string);
    /** Gets or sets the unlockKey property, a unique key used to unlock or activate the product. This key is required to enable full access to product features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current locale (language and regional settings) used by the component. This property determines the language in which messages are displayed, and works together with the messages property, which provides localized message strings for each supported locale. Adjusting the locale will change the displayed text to correspond with the selected language from the messages definitions.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines or retrieves an object containing the strings displayed in the widget, allowing for easy localization of text. This property works together with the locale property to support multiple languages and adapt the user interface based on the selected locale. Use this to provide translated labels, messages, and other widget text for internationalization.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Callback function that allows you to customize how tasks are rendered within the Kanban board. This function is invoked by the Kanban component and receives two arguments: 1. The HTML element representing the task (taskHtmlElement).2. The data object associated with the task (taskData).You can use this callback to modify the appearance, add event listeners, or inject additional content into the task's HTML element based on its data.
    *	Property type: any
    */
    get onTaskRender(): any;
    set onTaskRender(value: any);
    /** Callback function that enables customization of the filter items displayed in the dropdown. It receives a single argument: an array containing all the items available for filtering. Within the function, you can modify this array—such as by updating, removing, or reordering items—to control which options appear in the filter dropdown and how they are presented to the user. The modified array will determine the final set of filter options shown in the UI.
    *	Property type: any
    */
    get onFilterPrepare(): any;
    set onFilterPrepare(value: any);
    /** A callback function that allows you to customize the items displayed in the sort dropdown menu. This function receives a single argument: an array containing all available sort options. You can modify this array—by removing, reordering, or updating items—to control which sorting options appear in the dropdown and how they are presented. The modified array will then be used to render the sort options to the user.
    *	Property type: any
    */
    get onSortPrepare(): any;
    set onSortPrepare(value: any);
    /** Callback function that allows customization of the column header rendering in the Kanban component. This function is invoked with three arguments: the column header's HTML element, the complete column data object, and the column's data field (a string representing the key associated with the column). Use this callback to modify or enhance the appearance and behavior of column headers as needed.
    *	Property type: any
    */
    get onColumnHeaderRender(): any;
    set onColumnHeaderRender(value: any);
    /** Callback function that allows you to customize how the column footer is rendered in the Kanban component. This function is invoked with three arguments:1. The HTML element representing the column header2. The data object for the current column3. The field name associated with the column dataUse this callback to modify the footer's appearance or content based on the specific column's properties and data.
    *	Property type: any
    */
    get onColumnFooterRender(): any;
    set onColumnFooterRender(value: any);
    /** Specifies how items can be selected within the component, such as allowing single selection, multiple selections, or disabling selection entirely.
    *	Property type: KanbanSelectionMode | string
    */
    get selectionMode(): KanbanSelectionMode | string;
    set selectionMode(value: KanbanSelectionMode | string);
    /** Specifies whether the history of tasks is recorded and shown within the task dialog. When enabled, completed or previous tasks will be saved and displayed, allowing users to review their task activity directly in the dialog. When disabled, task history will not be retained or visible. This setting can be used to set or retrieve the current history display behavior.
    *	Property type: boolean
    */
    get storeHistory(): boolean;
    set storeHistory(value: boolean);
    /** Specifies the collection of task history items to be retrieved or updated when the storeHistory option is enabled. When storeHistory is true, this property determines which task history records are saved and accessed.
    *	Property type: number
    */
    get storeHistoryItems(): number;
    set storeHistoryItems(value: number);
    /** Sets or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is typically used in languages such as Arabic or Hebrew. When enabled, the element layout and text flow will support RTL locales, ensuring proper display for right-to-left scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls the read-only state of the edit dialog. When enabled, the dialog displays task details but disables all editing capabilities for those fields. However, if the comments feature is active, users can still add comments within the dialog, even while other fields remain uneditable.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Provides a detailed configuration of swimlanes on the Kanban board, specifying how tasks are grouped horizontally by categories such as assignee, priority, or project. When swimlanes are enabled, sub-columns within each column are disabled to maintain a clear visual separation of items across swimlanes.
    *	Property type: KanbanSwimlane[]
    */
    get swimlanes(): KanbanSwimlane[];
    set swimlanes(value: KanbanSwimlane[]);
    /** Specifies or retrieves the zero-based index of the column where the swimlanes should begin. This determines the starting position for rendering swimlanes within a grid or table layout.
    *	Property type: number
    */
    get swimlanesFrom(): number;
    set swimlanesFrom(value: number);
    /** Specifies or retrieves the zero-based index of the column where the swimlanes should terminate. By default, swimlanes extend to the final column in the layout. Setting this property allows you to control at which column the swimlanes will stop, providing flexibility in customizing the swimlane display.
    *	Property type: number
    */
    get swimlanesTo(): number;
    set swimlanesTo(value: number);
    /** Specifies the permitted tags that can be used. When this property is set, only the listed tags will be allowed; if no tags are specified, all tags provided by the data source are accepted by default. This property can be used to restrict or expand the selection of allowed tags as needed.
    *	Property type: any[]
    */
    get tags(): any[];
    set tags(value: any[]);
    /** Controls whether the task actions icon is displayed or hidden, allowing users to show or conceal the icon based on their preferences or application state.
    *	Property type: boolean
    */
    get taskActions(): boolean;
    set taskActions(value: boolean);
    /** Defines a callback function that is invoked whenever the task actions menu is generated in the UI. This function receives the actions menu element as its parameter, enabling you to modify or extend the menu's content and behavior. For example, you can insert custom menu items, attach event listeners, or alter existing elements within the menu.'Example usage:''''js(list) => {  // Add a custom menu item  list.innerHTML = 'Custom Item';  // Attach a click handler to the menu  list.onclick = () => {     alert('Custom item clicked');  };}'''This callback provides full access to the task actions menu element, empowering you to tailor the menu to fit your specific requirements.
    *	Property type: any
    */
    get taskActionsRendered(): any;
    set taskActionsRendered(value: any);
    /** Controls whether the task comments icon is displayed or hidden, allowing you to show or conceal the icon associated with task comments.
    *	Property type: boolean
    */
    get taskComments(): boolean;
    set taskComments(value: boolean);
    /** Controls whether the task due date icon is shown or hidden in the interface. When enabled, the icon indicating a task's due date will be visible; when disabled, the icon will be hidden from view.
    *	Property type: boolean
    */
    get taskDue(): boolean;
    set taskDue(value: boolean);
    /** Determines whether tasks are displayed across all levels of the column hierarchy or are restricted to only the leaf (lowest-level) columns. When enabled, tasks can be shown in any column within the hierarchy; when disabled, tasks are displayed exclusively in the leaf columns. This setting allows you to control the visibility of tasks based on the column hierarchy structure.
    *	Property type: KanbanTaskPosition | string
    */
    get taskPosition(): KanbanTaskPosition | string;
    set taskPosition(value: KanbanTaskPosition | string);
    /** Controls whether the task priority icon is displayed. The icon appears when a task is marked as either low or high priority. Disabling this option will hide the icon regardless of the task’s priority status.
    *	Property type: boolean
    */
    get taskPriority(): boolean;
    set taskPriority(value: boolean);
    /** Controls whether the task progress bar and the label displaying the number of completed sub-tasks are shown or hidden. When enabled, both visual elements will be visible; when disabled, they will be hidden from view.
    *	Property type: boolean
    */
    get taskProgress(): boolean;
    set taskProgress(value: boolean);
    /** Defines which custom fields are shown on a task card and how they appear. This property accepts an array of objects, where each object represents a custom field configuration with the following properties:- 'dataField' (string, required): Specifies the unique key or identifier for the custom field. This determines which value will be displayed on the card.- 'label' (string, required): The display name or title of the field as it appears on the card.- 'dataType' (string, required): Indicates the field's data type (e.g., 'string', 'number', 'date'). Used to determine how the field value should be formatted or displayed.- 'visible' (boolean, optional): If set to 'true', the field is displayed on the card; if 'false', it is hidden. Defaults to 'true' if omitted.- 'image' (boolean, optional): Set to 'true' if the field value is an image URL or Base64 string. This tells the UI to render the value as an image instead of text.- 'cover' (boolean, optional): When 'image' is 'true', setting 'cover' to 'true' will display the image as the card’s cover image (typically at the top of the card).'Example usage:''''json[  {    "dataField": "title",    "label": "Task Title",    "dataType": "string",    "visible": true  },  {    "dataField": "dueDate",    "label": "Due Date",    "dataType": "date"  },  {    "dataField": "avatar",    "label": "Assignee Photo",    "dataType": "string",    "image": true,    "visible": true  },  {    "dataField": "coverImage",    "label": "Project Cover",    "dataType": "string",    "image": true,    "cover": true  }]'''This configuration determines which fields are shown, how they're labeled, their format, and whether any field displays an image or acts as a cover image on the task card.
    *	Property type: any
    */
    get taskCustomFields(): any;
    set taskCustomFields(value: any);
    /** The background color of a task is determined by its individual color property. By default, this color is visually represented as an accent along the left border of the task element, rather than filling the entire background. This design helps differentiate tasks based on their assigned colors while maintaining a consistent overall appearance.
    *	Property type: boolean
    */
    get taskColorEntireSurface(): boolean;
    set taskColorEntireSurface(value: boolean);
    /** Displays an input field within the task card, allowing users to dynamically add sub-tasks to the main task. To enable this feature, ensure that the 'taskSubTasks' property is set to a value other than 'none'. When 'taskSubTasks' is appropriately configured, users will see and be able to use the sub-task input interface.
    *	Property type: boolean
    */
    get taskSubTasksInput(): boolean;
    set taskSubTasksInput(value: boolean);
    /** Specifies how sub-tasks are rendered within a task card.  - '"none"' *(default)*: Sub-tasks are hidden on the task card and are only visible within the edit dialog.  - '"onePerRow"': All sub-tasks associated with the task are displayed directly on the task card, with each sub-task shown on its own row.  - '"onlyUnfinished"': Only sub-tasks that are not marked as completed are displayed on the task card; completed sub-tasks remain hidden.
    *	Property type: KanbanTaskSubTasks | string
    */
    get taskSubTasks(): KanbanTaskSubTasks | string;
    set taskSubTasks(value: KanbanTaskSubTasks | string);
    /** Controls whether task tags are shown or hidden in the user interface, allowing users to display or conceal tag information associated with each task.
    *	Property type: boolean
    */
    get taskTags(): boolean;
    set taskTags(value: boolean);
    /** Controls whether the task user icon is displayed or hidden, allowing you to show or hide the icon representing the user associated with a task.
    *	Property type: boolean
    */
    get taskUserIcon(): boolean;
    set taskUserIcon(value: boolean);
    /** Specifies the template to use for rendering task text. This property accepts multiple value types:- A string starting with #, which references the id of a  element on the page. The contents of this element will be used as the template.- A string containing HTML or template markup, which will be parsed and applied directly to the task text.- A function, which receives the task text (or a template) as input and returns the modified text or template to be used.This property can be both set to define the template for future tasks, or retrieved to access the currently applied template.
    *	Property type: any
    */
    get textTemplate(): any;
    set textTemplate(value: any);
    /** Specifies the theme applied to the element. The theme controls the visual appearance, including colors, fonts, and overall style, ensuring a consistent look and feel across the component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Controls the visibility of the priority list (as specified by the priority property) when the user clicks the priority icon. This option is only effective when users have editable privileges enabled, allowing them to modify the priority value. If set to true, the list will appear on icon click; if false, the list will remain hidden.
    *	Property type: boolean
    */
    get priorityList(): boolean;
    set priorityList(value: boolean);
    /** Specifies the available priority levels that can be assigned to Kanban tasks. This array defines each priority as an object containing a label (for display purposes) and a corresponding value (for internal use).  Example: [{label: 'Low', value: 'low'}, {label: 'High', value: 'high'}]  Use this property to customize or extend the set of priority options in your Kanban board.
    *	Property type: KanbanPriority[]
    */
    get priority(): KanbanPriority[];
    set priority(value: KanbanPriority[]);
    /** Controls the visibility of the user list—defined by the users property—when the user icon is clicked. This setting is only effective if editable privileges are enabled; otherwise, the user list will not be displayed regardless of this option.
    *	Property type: boolean
    */
    get userList(): boolean;
    set userList(value: boolean);
    /** Specifies the users eligible to be assigned Kanban tasks, along with their associated attributes (such as name, role, and status) and permissions (such as create, edit, or delete task capabilities).
    *	Property type: KanbanUser[]
    */
    get users(): KanbanUser[];
    set users(value: KanbanUser[]);
    get properties(): string[];
    /**  This event is triggered whenever any changes are made to the details, status, or properties of an existing task. It allows you to respond programmatically whenever a task is modified, ensuring your application can stay synchronized with the latest task information.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
    *   oldValue - The old data of the task
    *   task - The HTML element of the task whose data has been changed
    *   value - The new data of the task
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user closes the edit or prompt dialog, either by submitting changes or canceling the operation. It signals that the dialog has been dismissed and any associated actions, such as saving or discarding input, should be handled.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event fires just before the edit or prompt dialog is about to close, giving you an opportunity to intercept the closing action. By calling event.preventDefault() within the event handler, you can cancel the closing operation, allowing you to perform validation or prompt the user before the dialog is dismissed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a new column is successfully added to the data structure or interface. It allows you to respond to the addition of a column, such as updating the user interface, modifying related data, or performing custom logic. The event provides details about the added column, including its name, index, and relevant metadata.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnAdd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column is deleted or removed from the data structure, table, or grid. It provides an opportunity to handle any necessary updates or clean-up tasks related to the removal of a column, such as updating the user interface, adjusting data bindings, or modifying underlying data sources. The event typically includes information about the column that was removed, allowing developers to respond dynamically to changes in the structure.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user changes the position of a column, such as by dragging and dropping a column header to rearrange the column order in the table.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index, 	column)
    *   oldIndex - The column's old index.
    *   index - The column's new index.
    *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
    */
    onColumnReorder?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the data in a column is updated. It occurs after any changes are made to the value(s) of a column, providing an opportunity to respond to or process the updated data. Listeners can use this event to execute custom logic, such as validating input, persisting changes, or updating related UI components.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	column)
    *   oldValue - The column's old label.
    *   value - The column's new label.
    *   column - The column's data object with 'label', 'dataField' and 'collapsed' fields.
    */
    onColumnUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a column header within the data table. It can be used to initiate actions such as sorting the column, displaying a menu, or highlighting the selected column. The event typically provides information about which column was clicked, enabling you to implement custom logic based on the user's interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user double-clicks on a column header, typically in a data grid or table. It can be used to initiate actions such as resizing the column, sorting data, or displaying additional options related to the selected column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField, 	collapsed)
    *   label - The column label.
    *   dataField - The column data field.
    *   collapsed - The column's collapsed state.
    */
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column becomes visible—either when a user selects the "Show" option from the column's action menu, or when the Kanban component's `show` method is programmatically called to reveal the column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
    *   label - The column label.
    *   dataField - The column data field.
    */
    onColumnShow?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column is hidden, either through the column's action menu or programmatically via the Kanban board’s `hide` method. Use this event to execute custom logic or UI updates whenever a column becomes invisible to the user.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
    *   label - The column label.
    *   dataField - The column data field.
    */
    onColumnHide?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column is collapsed, either by selecting the "Collapse" option from the column's action menu or by programmatically invoking the Kanban board's `collapse` method.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
    *   label - The column label.
    *   dataField - The column data field.
    */
    onColumnCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column in the Kanban board is expanded, either by a user selecting the "expand" option from the column's action menu or programmatically through the Kanban component's `expand` method.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	dataField)
    *   label - The column label.
    *   dataField - The column data field.
    */
    onColumnExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user adds a comment to a task within the Kanban board. It activates immediately after the comment is successfully posted, allowing you to respond to or process new task comments in real-time.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
    *   id - The task's id.
    *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
    */
    onCommentAdd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a comment is deleted from a task card within the Kanban board. It allows you to perform actions or updates in response to the removal of a comment from any Kanban task.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
    *   id - The task's id.
    *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
    */
    onCommentRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever an existing comment on a Kanban Task is modified. It occurs after any changes are made to the comment’s content, such as edits or updates, allowing you to respond to or track comment modifications within the Kanban board.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	value)
    *   id - The task's id.
    *   value - The comment object. It has 'text: string, time: Date and userId:number' properties.
    */
    onCommentUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a task is dropped onto a target element within the DOM during a drag-and-drop operation. It allows developers to handle the completion of a drag action by responding to where the task is released. To prevent the default drop behavior—such as moving the element or initiating a browser action—you can call event.preventDefault() within the event handler. This enables you to implement custom logic for handling dropped tasks, such as updating data models, modifying the UI, or triggering other application-specific actions."
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
    /**  This event is triggered while the user is actively dragging a task, such as during a drag-and-drop operation. It fires continuously as the task is being moved, enabling real-time updates or visual feedback in response to the task's position.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is fired when the user initiates a drag action on one or more tasks. During the event, you can access information about the tasks being dragged. If you want to prevent the drag-and-drop operation from starting, you can call event.preventDefault() inside your event handler. This will cancel the dragging process and prevent any associated drag logic or UI changes from occurring.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the Kanban the dragged task(s) is dragged from
    *   data - an object with additional drag details
    *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
    *   items - an array with all dragged tasks
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the Kanban the dragged item(s) is dragged from
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after a user applies a filter to refine the displayed data. It indicates that the filter criteria have been set and the view has been updated accordingly. Developers can use this event to perform actions such as fetching new data, updating UI elements, or logging user interactions related to filtering.
    *  @param event. The custom event. 	*/
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the edit or prompt dialog window is displayed to the user. It signals that the user interface has opened a dialog for editing content or requesting input, allowing developers to execute custom logic in response to the dialog becoming visible.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before the edit or prompt dialog is displayed. You can intercept and prevent the dialog from opening by calling event.preventDefault() within your event handler. This allows you to provide your own custom dialog or take other actions instead of showing the default Kanban dialog. To stop the default Kanban dialog from appearing, simply call event.preventDefault() in the appropriate event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
    *   comment - The comment that is about to be removed (if applicable).
    *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
    *   task - The task that is about to be edited or removed (if applicable).
    */
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after a sorting operation has been applied to the data set. It signifies that the data has been reordered based on the selected sorting criteria, and any relevant updates or UI refreshes can be performed in response to this change. The event may provide details about the sort field(s), direction (ascending or descending), and the affected data.
    *  @param event. The custom event. 	*/
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before a new task is added to the Kanban board. Within the event handler, you can access and modify the task's initial data using event.detail.value (which contains the task details) and event.detail.id (which represents the task's unique identifier). This allows you to customize attributes—such as assigning a specific ID or updating field values—before the task is officially added. **Example usage:**```jskanban.onTaskBeforeAdd = (event) => {  const taskData = event.detail.value; // the task data before it is added  const currentId = event.detail.id;   // the proposed task ID  event.detail.id = 'BG12';            // assign a custom ID before adding  // Additional custom logic can be added here};```**Note:** Make any necessary changes to `event.detail.value` or `event.detail.id` within this handler to control how tasks are created and represented on your Kanban board.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
    *   value - The task data that is added to the Kanban.
    *   id - The task data id.
    */
    onTaskBeforeAdd?: ((event?: Event) => void) | undefined;
    /**  This event fires whenever a new task is added to the Kanban board. The associated event object contains detailed information about the new task, accessible via the event's detail property. **Example usage:**```javascriptkanban.onTaskAdd = (event) => {     const taskData = event.detail.value; // Contains the properties of the newly added task    const taskId = event.detail.id;      // Unique identifier of the new task}```**Description:**  Use this event to execute custom logic or update your application whenever a user creates a new task. The `event.detail.value` provides the complete task data object, while `event.detail.id` gives you the unique ID assigned to that task.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
    *   value - The task data that is added to the Kanban.
    *   id - The task data id.
    */
    onTaskAdd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a task is deleted or removed from the system. It occurs immediately after a task is successfully deleted, allowing you to perform any necessary cleanup, updates, or notifications in response to the removal action.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
    *   value - The task data that is removed from the Kanban.
    *   id - The task data id.
    */
    onTaskRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a task undergoes an update, such as changes to its status, description, assigned users, due date, or any other task-related property. It allows listeners to respond in real time to modifications made to existing tasks.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	id)
    *   value - The task data that is updated.
    *   oldValue - The update task's old data.
    *   id - The task data id.
    */
    onTaskUpdate?: ((event?: Event) => void) | undefined;
    /**  This event is fired when a user clicks on a task item, allowing you to execute custom logic in response to the interaction. It provides details about the clicked task, enabling you to access its data or update its state as needed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
    *   value - The task data.
    *   id - The task data id.
    */
    onTaskClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user double-clicks on a task element in the interface. It allows you to detect and respond to double-click actions performed specifically on individual tasks, enabling functionalities such as editing, viewing task details, or initiating other custom behaviors associated with a double-click interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	id)
    *   value - The task data.
    *   id - The task data id.
    */
    onTaskDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Enables advanced filtering functionality for the data. For example, you can create a `Smart.FilterGroup` object to build complex filters. You might define a filter that checks if a 'Country' field contains the string 'Italy':```javascriptconst filterGroup = new Smart.FilterGroup();const filterObject = filterGroup.createFilter('string', 'Italy', 'contains');filterGroup.addFilter('and', filterObject);kanban.addFilter([['Country', filterGroup]]);```In this example, a filter group is created. A filter is then defined to match records where the 'Country' column contains the text 'Italy'. This filter is combined into the group with a logical 'and' operator and finally applied to the Kanban board using the `addFilter` method. This approach supports combining multiple filters with logical operators for dynamic and flexible data querying.
    * @param {any} filters. Filter information. Example: kanban.addFilter([['Country', filterGroup]]);. Each array item is a sub array with two items - 'dataField' and 'filterGroup' object. The 'dataField' is any valid data field from the data source bound to the Kanban like 'dueDate', 'startDate' or custom fields like 'Country'. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {string} operator?. Logical operator between the filters of different fields. Possible values are: 'and', 'or'.
    */
    addFilter(filters: any, operator?: string): void;
    /** Enables customizable sorting functionality for your kanban board data.  You can specify one or more fields to sort by, along with the desired sort order (e.g., 'ascending' or 'descending').  Example usage: kanban.addSort(['Country'], 'ascending');  This will sort the kanban items in ascending order based on the 'Country' field.  You can also pass multiple fields (e.g., kanban.addSort(['Country', 'Name'], 'descending')) to create multi-level sorting.
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by. Possible values are: 'ascending' and 'descending'.
    */
    addSort(dataFields: [] | string, orderBy: [] | string): void;
    /** Adds a new task to a specified Kanban column. If no column or task data is provided, an empty task with default values will be created and placed in the first column of the Kanban board.
    * @param {any} data?. An object containing the new task's data
    */
    addTask(data?: any): void;
    /** Adds a new column to the Kanban board. If no column data is provided, a blank column with default settings will be created and added. If column data is specified, the column will be initialized with the provided properties.
    * @param {any} data?. An object containing the new column's data
    */
    addColumn(data?: any): void;
    /** Initiates an edit operation, allowing modifications to be made to the current data or document. This operation typically marks the start of a transaction, enabling changes to be tracked and either saved (committed) or discarded (rolled back) upon completion.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    beginEdit(task: number | string | HTMLElement): void;
    /** Terminates the ongoing edit operation and reverts all unsaved changes, restoring the data to its previous state before the edit began.
    */
    cancelEdit(): void;
    /** Closes any currently open header panel dropdown, ensuring that all active dropdown menus within the header section are hidden from view.
    */
    closePanel(): void;
    /** Collapses a Kanban column, minimizing its contents and reducing its width to provide a more compact view of the board. This action hides the tasks within the column while keeping the column header visible, allowing users to focus on other sections of the Kanban board.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    collapse(column: number | string): void;
    /** Removes any currently selected items or cards within the Kanban board, ensuring that no items remain selected. This action resets the selection state of the Kanban component.
    */
    clearSelection(): void;
    /** Conceals a specific column within a Kanban board, making its contents and tasks temporarily invisible to users without deleting any data. This action helps declutter the board or focus attention on other columns. The hidden column can typically be shown again through board settings or controls.
    * @param {number | string} column. The index or dataField of the column to hide
    */
    hide(column: number | string): void;
    /** Creates a duplicate of an existing task within the same column, preserving all task details such as title, description, assignees, and deadlines. The copied task will appear alongside the original in the same column, allowing for easy modification without affecting the original task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    copyTask(task: number | string | HTMLElement): void;
    /** Completes the current editing session by finalizing any modifications made and persisting all changes to the underlying data source.
    */
    endEdit(): void;
    /** Ensures that the specified task is brought into view within the scrollable container by automatically scrolling to its position. If the operation is successful, the method returns the corresponding HTML element representing the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    ensureVisible(task: number | string | HTMLElement): any;
    /** Expands a Kanban board column to display all its contents, allowing users to view every card within the column in detail. This functionality makes it easier to manage, organize, and interact with all items in the selected column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    expand(column: number | string): void;
    /** Expands every Kanban column to display all hidden or collapsed tasks, ensuring that all items within each column are fully visible.
    */
    expandAll(): void;
    /** Exports all current data from the Kanban board, including task details, statuses, columns, and any associated metadata, into a structured format (such as JSON or CSV) for backup, sharing, or integration purposes.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName: string, callback?: Function): any;
    /** Retrieves detailed information about a specific column. The returned value is a JSON object containing the following fields:- label: The display name of the column.- dataField: The key or property name associated with the column's data.- collapsed: A boolean indicating whether the column is currently collapsed.- collapsible: A boolean specifying if the column can be collapsed or expanded by the user.- allowRemove: A boolean that determines whether the column can be removed from the view.- editable: A boolean indicating if the column's cells are editable.- reorder: A boolean specifying whether the column can be reordered by the user.- orientation: Describes the orientation of the column, such as "horizontal" or "vertical".Use this object to access or modify the configuration and behavior of the column in your application interface.
    * @param {string} dataField. The column's data field
    * @returns {any}
  */
    getColumn(dataField: string): any;
    /** Retrieves detailed information about a specific task. The returned value is a JSON object containing the following fields:- checklist: An array of checklist items associated with the task   - id: The unique identifier for the task  - color: A string representing the task label or color code  - comments: An array of comment objects related to the task  - history: An array that records the chronological history of changes and activity for the task  - dueDate: The date and time when the task is due  - startDate: The date and time when the task is scheduled to start  - priority: The task's priority level (e.g., low, medium, high)  - progress: The percentage of task completion  - status: The current status of the task (e.g., open, in progress, completed)  - swimlane: The swimlane or category the task is assigned to  - tags: An array of tags or keywords associated with the task  - text: The task title or main summary  - description: Detailed information about the task  - userId: The identifier of the user currently assigned to the task  - createdUserId: The identifier of the user who created the task  - createdDate: The date and time when the task was created  - updatedUserId: The identifier of the user who last updated the task  - updatedDate: The date and time when the task was last updated  This structured JSON object enables developers to access all relevant attributes for rendering and managing tasks within an application.
    * @param {number} id. The task's id
    * @returns {any}
  */
    getTask(id: number): any;
    /** Retrieves the IDs of all selected tasks.  The returned value is an array, where each element represents the unique 'id' associated with a selected task. If no tasks are selected, the array will be empty.
    * @param {number} id. The task's id
    * @returns {any}
  */
    getSelectedTasks(id: number): any;
    /** Retrieves the current state of the Kanban board as a comprehensive object. The returned object contains detailed information about the board's configuration and user interactions, structured as follows:```typescript{  collapsed: {    // Tracks which Kanban columns or swimlanes are currently collapsed.     // Keys represent the column or swimlane identifiers, and values indicate their collapsed state.    [key: string]: boolean;  },  dataSource: [    // An array of data objects representing all Kanban tasks/cards currently on the board.    // Each item typically includes task details such as id, status, title, description, etc.  ],  filtering: {    filters: [      // Array of filter objects currently applied.      // Each filter describes criteria such as field, comparison operator, and value.    ],    operator: string;     // Logical operator ("AND"/"OR") used to combine multiple filters.  },  selection: {    selected: [      // Array of IDs or references of currently selected tasks/cards.    ],    selectionStart?: number | string;     // Optional: Identifies the first item in a selection range (useful for range selection with shift-click).    selectionInColumn: string;    // ID or name of the column where selection started or is active.    swimlane: string;     // ID or name of the currently active swimlane (if swimlanes are in use).  },  sorting: {    dataFields: [      // Array of fields currently used to sort the Kanban data (e.g., ["priority", "dueDate"]).    ],    dataTypes: [      // Corresponding data types for each sorting field (e.g., ["number", "date"]).    ],    orderBy: [      // Sort directions corresponding to each field ("asc" or "desc").    ]  },  tabs: [    // List of tab states or identifiers, reflecting open and active views within the Kanban UI.  ],  visibility: {    taskActions: boolean;     // Whether task action buttons are visible.    taskComments: boolean;    // Whether task comments are shown.    taskDue: boolean;         // Whether due date indicators are visible.    taskPriority: boolean;    // Whether task priority display is enabled.    taskProgress: boolean;    // Whether task progress bars or indicators are shown.    taskTags: boolean;        // Whether tags associated with tasks are visible.    taskUserIcon: boolean;    // Whether user or assignee icons are visible on tasks.  }}```This state object enables you to persist, inspect, or restore the Kanban board’s full interactive state, including data, UI settings, filters, sortings, selections, and visibility toggles. It is suitable for use cases such as saving the user’s workspace, synchronizing state across sessions, or debugging Kanban board behavior.
    * @returns {any}
  */
    getState(): any;
    /** Retrieves and initializes the current state of the Kanban board, including all columns, tasks, and their respective statuses, to ensure the user sees the latest project information.
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
    /** Moves a specified task from its current column to a target column within the workflow or board, updating its status and position accordingly.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    moveTask(task: number | string | HTMLElement, newStatus: string): void;
    /** Displays the "Customize Tasks" header panel as a dropdown menu, allowing users to access and modify task customization options.
    */
    openCustomizePanel(): void;
    /** Displays the "Filter" panel by opening its dropdown menu in the header section, allowing users to access and apply filtering options.
    */
    openFilterPanel(): void;
    /** Displays the "Sort" header panel as a dropdown menu, allowing users to select sorting options for the displayed data.
    */
    openSortPanel(): void;
    /** Removes all applied filters, displaying the complete, unfiltered dataset.
    */
    removeFilter(): void;
    /** Disables any previously applied sorting, returning the data to its original, unsorted order.
    */
    removeSort(): void;
    /** Deletes a specified task from the task list, permanently removing it from the data store.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    removeTask(task: number | string | HTMLElement, prompt?: boolean): void;
    /** Removes a specified column from the data set or table, effectively deleting all data contained within that column and updating the structure to reflect its absence. This operation is irreversible and affects any processes or queries that rely on the removed column.
    * @param {string} dataField. The column's data field
    */
    removeColumn(dataField: string): void;
    /** Persists the current state of the Kanban board—including all columns, cards, and their order—to the browser's localStorage. This ensures that the user's board layout and content are retained and automatically restored when the page is reloaded or the browser is reopened.
    */
    saveState(): void;
    /** Displays a single Kanban column, including the column title and a list of tasks or cards assigned to that column. Ideal for use in Kanban boards to visually organize tasks by status or category within a workflow.
    * @param {number | string} column. The index or dataField of the column to show
    */
    show(column: number | string): void;
    /** Displays a comprehensive list of all Kanban columns, including their names, order, and relevant metadata. This allows users or applications to view the complete structure of the Kanban board and manage workflow stages effectively.
    */
    showAllColumns(): void;
    /** Selects a specific task from a list or collection, allowing the application to retrieve or highlight the chosen task's details for further actions such as viewing, editing, or managing it.
    * @param {number | string} task. The task's id.
    */
    selectTask(task: number | string): void;
    /** Deselects a previously selected task, removing its active or highlighted status within the user interface.
    * @param {number | string} task. The task's id.
    */
    unselectTask(task: number | string): void;
    /** Updates the details of an existing task, such as its title, description, status, due date, or assigned user.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    updateTask(task: number | string | HTMLElement, newData: {}): void;
    /** Updates the value of a specified column in a database table. This operation allows you to modify existing data by providing the column name and the new value to be set. Optionally, you can specify conditions to ensure that only rows matching certain criteria are updated.
    * @param {string} dataField. The new column's data field
    * @param {{}} newData. The new data to visualize in the column.
    */
    updateColumn(dataField: string, newData: {}): void;
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
export default Kanban;
