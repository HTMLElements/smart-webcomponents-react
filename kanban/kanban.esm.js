
import '../source/modules/smart.kanban';

import React from 'react';

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
 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
*/
class Kanban extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Kanban' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Enables or disables column reordering. When this property is set to true and allowDrag is enabled, users will be able to reoder columns through drag & drop. For example: Click and drag the first column's header and drop it over another column.
    *	Property type: boolean
    */
    get allowColumnReorder() {
        return this.nativeElement ? this.nativeElement.allowColumnReorder : undefined;
    }
    set allowColumnReorder(value) {
        if (this.nativeElement) {
            this.nativeElement.allowColumnReorder = value;
        }
    }
    /** Enables or disables column editing. When this property is set to true, users will be able to dynamically change the column's header label by double clicking on it.
    *	Property type: boolean
    */
    get allowColumnEdit() {
        return this.nativeElement ? this.nativeElement.allowColumnEdit : undefined;
    }
    set allowColumnEdit(value) {
        if (this.nativeElement) {
            this.nativeElement.allowColumnEdit = value;
        }
    }
    /** Enables or disables column removing. When this property is set to true, users will be able to dynamically remove a column through the column actions menu. the 'columnActions' property should be true.
    *	Property type: boolean
    */
    get allowColumnRemove() {
        return this.nativeElement ? this.nativeElement.allowColumnRemove : undefined;
    }
    set allowColumnRemove(value) {
        if (this.nativeElement) {
            this.nativeElement.allowColumnRemove = value;
        }
    }
    /** Enables or disables column hiding. When this property is set to true, users will be able to dynamically hide a column through the column actions menu. the 'columnActions' property should be true.
    *	Property type: boolean
    */
    get allowColumnHide() {
        return this.nativeElement ? this.nativeElement.allowColumnHide : undefined;
    }
    set allowColumnHide(value) {
        if (this.nativeElement) {
            this.nativeElement.allowColumnHide = value;
        }
    }
    /** Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false.
    *	Property type: boolean
    */
    get addNewButton() {
        return this.nativeElement ? this.nativeElement.addNewButton : undefined;
    }
    set addNewButton(value) {
        if (this.nativeElement) {
            this.nativeElement.addNewButton = value;
        }
    }
    /** Determines whether the add button is visible in the column header and/or after the tasks in the column.
    *	Property type: KanbanAddNewButtonDisplayMode
    */
    get addNewButtonDisplayMode() {
        return this.nativeElement ? this.nativeElement.addNewButtonDisplayMode : undefined;
    }
    set addNewButtonDisplayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.addNewButtonDisplayMode = value;
        }
    }
    /** Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed.
    *	Property type: boolean
    */
    get addNewColumn() {
        return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
    }
    set addNewColumn(value) {
        if (this.nativeElement) {
            this.nativeElement.addNewColumn = value;
        }
    }
    /** Allows the dragging of tasks.
    *	Property type: boolean
    */
    get allowDrag() {
        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
    }
    set allowDrag(value) {
        if (this.nativeElement) {
            this.nativeElement.allowDrag = value;
        }
    }
    /** Allows the dropping of tasks.
    *	Property type: boolean
    */
    get allowDrop() {
        return this.nativeElement ? this.nativeElement.allowDrop : undefined;
    }
    set allowDrop(value) {
        if (this.nativeElement) {
            this.nativeElement.allowDrop = value;
        }
    }
    /** Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded.
    *	Property type: boolean
    */
    get autoLoadState() {
        return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
    }
    set autoLoadState(value) {
        if (this.nativeElement) {
            this.nativeElement.autoLoadState = value;
        }
    }
    /** Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved.
    *	Property type: boolean
    */
    get autoSaveState() {
        return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
    }
    set autoSaveState(value) {
        if (this.nativeElement) {
            this.nativeElement.autoSaveState = value;
        }
    }
    /** Allows collapsing the card content.
    *	Property type: boolean
    */
    get collapsible() {
        return this.nativeElement ? this.nativeElement.collapsible : undefined;
    }
    set collapsible(value) {
        if (this.nativeElement) {
            this.nativeElement.collapsible = value;
        }
    }
    /** Displays colors in the column header, when the column's color property is set.
    *	Property type: boolean
    */
    get columnColors() {
        return this.nativeElement ? this.nativeElement.columnColors : undefined;
    }
    set columnColors(value) {
        if (this.nativeElement) {
            this.nativeElement.columnColors = value;
        }
    }
    /** Describes the columns properties.
    *	Property type: KanbanColumn[]
    */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        if (this.nativeElement) {
            this.nativeElement.columns = value;
        }
    }
    /** Toggles the visibility of the column actions icon.
    *	Property type: boolean
    */
    get columnActions() {
        return this.nativeElement ? this.nativeElement.columnActions : undefined;
    }
    set columnActions(value) {
        if (this.nativeElement) {
            this.nativeElement.columnActions = value;
        }
    }
    /** Determines whether task count information is displayed in column headers.
    *	Property type: boolean
    */
    get columnSummary() {
        return this.nativeElement ? this.nativeElement.columnSummary : undefined;
    }
    set columnSummary(value) {
        if (this.nativeElement) {
            this.nativeElement.columnSummary = value;
        }
    }
    /** Determines whether a column header has a template. You can pass 'string', 'function' or HTMLTemplateElement as a value.
    *	Property type: any
    */
    get columnHeaderTemplate() {
        return this.nativeElement ? this.nativeElement.columnHeaderTemplate : undefined;
    }
    set columnHeaderTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.columnHeaderTemplate = value;
        }
    }
    /** Determines the column edit behavior. With the 'header' option, edit starts on double click on the column's label. In 'menu' mode, edit is allowed from the 'columnActions' menu. In 'headerAndMenu' option, column editing includes both options.
    *	Property type: KanbanColumnEditMode
    */
    get columnEditMode() {
        return this.nativeElement ? this.nativeElement.columnEditMode : undefined;
    }
    set columnEditMode(value) {
        if (this.nativeElement) {
            this.nativeElement.columnEditMode = value;
        }
    }
    /** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
    *	Property type: string | number
    */
    get currentUser() {
        return this.nativeElement ? this.nativeElement.currentUser : undefined;
    }
    set currentUser(value) {
        if (this.nativeElement) {
            this.nativeElement.currentUser = value;
        }
    }
    /** Determines the data source to be visualized in the kanban board.
    *	Property type: KanbanDataSource[]
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten.
    *	Property type: { checklist: string; color: string; comments: string; dueDate: string; id: string; priority: string; progress: string; startDate: string; status: string; swimlane: string; tags: string; text: string; userId: string; createdUserId: string; upDatedUserId: string; createdDate: Date; upDatedDate: Date;}
    */
    get dataSourceMap() {
        return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
    }
    set dataSourceMap(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSourceMap = value;
        }
    }
    /** Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started.
    *	Property type: boolean
    */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.dragOffset = value;
        }
    }
    /** Sets or gets whether tasks can be edited (including the assigning of users to tasks).
    *	Property type: boolean
    */
    get editable() {
        return this.nativeElement ? this.nativeElement.editable : undefined;
    }
    set editable(value) {
        if (this.nativeElement) {
            this.nativeElement.editable = value;
        }
    }
    /** Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors.
    *	Property type: string
    */
    get formatStringDate() {
        return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
    }
    set formatStringDate(value) {
        if (this.nativeElement) {
            this.nativeElement.formatStringDate = value;
        }
    }
    /** Sets or gets the format string of comments time stamp.
    *	Property type: string
    */
    get formatStringTime() {
        return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
    }
    set formatStringTime(value) {
        if (this.nativeElement) {
            this.nativeElement.formatStringTime = value;
        }
    }
    /** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
    *	Property type: KanbanHeaderPosition
    */
    get headerPosition() {
        return this.nativeElement ? this.nativeElement.headerPosition : undefined;
    }
    set headerPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.headerPosition = value;
        }
    }
    /** Sets or gets the way column hierarchy is represented.
    *	Property type: KanbanHierarchy
    */
    get hierarchy() {
        return this.nativeElement ? this.nativeElement.hierarchy : undefined;
    }
    set hierarchy(value) {
        if (this.nativeElement) {
            this.nativeElement.hierarchy = value;
        }
    }
    /** Sets or gets the locale. Used in conjunction with the property messages.
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
    /** Determines selection mode.
    *	Property type: KanbanSelectionMode
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** Sets or gets whether the tasks history will be stored and displayed in the task dialog.
    *	Property type: boolean
    */
    get storeHistory() {
        return this.nativeElement ? this.nativeElement.storeHistory : undefined;
    }
    set storeHistory(value) {
        if (this.nativeElement) {
            this.nativeElement.storeHistory = value;
        }
    }
    /** Sets or gets the task history items that will be stored when storeHistory is enabled.
    *	Property type: number
    */
    get storeHistoryItems() {
        return this.nativeElement ? this.nativeElement.storeHistoryItems : undefined;
    }
    set storeHistoryItems(value) {
        if (this.nativeElement) {
            this.nativeElement.storeHistoryItems = value;
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
    /** Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present.
    *	Property type: KanbanSwimlane[]
    */
    get swimlanes() {
        return this.nativeElement ? this.nativeElement.swimlanes : undefined;
    }
    set swimlanes(value) {
        if (this.nativeElement) {
            this.nativeElement.swimlanes = value;
        }
    }
    /** Sets or gets the index of the column at which to start the swimlanes.
    *	Property type: number
    */
    get swimlanesFrom() {
        return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
    }
    set swimlanesFrom(value) {
        if (this.nativeElement) {
            this.nativeElement.swimlanesFrom = value;
        }
    }
    /** Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column.
    *	Property type: number
    */
    get swimlanesTo() {
        return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
    }
    set swimlanesTo(value) {
        if (this.nativeElement) {
            this.nativeElement.swimlanesTo = value;
        }
    }
    /** Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed.
    *	Property type: any[]
    */
    get tags() {
        return this.nativeElement ? this.nativeElement.tags : undefined;
    }
    set tags(value) {
        if (this.nativeElement) {
            this.nativeElement.tags = value;
        }
    }
    /** Toggles the visibility of the task actions icon.
    *	Property type: boolean
    */
    get taskActions() {
        return this.nativeElement ? this.nativeElement.taskActions : undefined;
    }
    set taskActions(value) {
        if (this.nativeElement) {
            this.nativeElement.taskActions = value;
        }
    }
    /** Toggles the visibility of the task comments icon.
    *	Property type: boolean
    */
    get taskComments() {
        return this.nativeElement ? this.nativeElement.taskComments : undefined;
    }
    set taskComments(value) {
        if (this.nativeElement) {
            this.nativeElement.taskComments = value;
        }
    }
    /** Toggles the visibility of the task due icon.
    *	Property type: boolean
    */
    get taskDue() {
        return this.nativeElement ? this.nativeElement.taskDue : undefined;
    }
    set taskDue(value) {
        if (this.nativeElement) {
            this.nativeElement.taskDue = value;
        }
    }
    /** Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns.
    *	Property type: KanbanTaskPosition
    */
    get taskPosition() {
        return this.nativeElement ? this.nativeElement.taskPosition : undefined;
    }
    set taskPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.taskPosition = value;
        }
    }
    /** Toggles the visibility of the task priority icon (shown when priority is low or high).
    *	Property type: boolean
    */
    get taskPriority() {
        return this.nativeElement ? this.nativeElement.taskPriority : undefined;
    }
    set taskPriority(value) {
        if (this.nativeElement) {
            this.nativeElement.taskPriority = value;
        }
    }
    /** Toggles the visibility of task progress bar and the completed sub-tasks label.
    *	Property type: boolean
    */
    get taskProgress() {
        return this.nativeElement ? this.nativeElement.taskProgress : undefined;
    }
    set taskProgress(value) {
        if (this.nativeElement) {
            this.nativeElement.taskProgress = value;
        }
    }
    /** Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed.
    *	Property type: any
    */
    get taskCustomFields() {
        return this.nativeElement ? this.nativeElement.taskCustomFields : undefined;
    }
    set taskCustomFields(value) {
        if (this.nativeElement) {
            this.nativeElement.taskCustomFields = value;
        }
    }
    /** The task's background color depends on the task's color property. By default the color is rendered within the task's left border.
    *	Property type: boolean
    */
    get taskColorEntireSurface() {
        return this.nativeElement ? this.nativeElement.taskColorEntireSurface : undefined;
    }
    set taskColorEntireSurface(value) {
        if (this.nativeElement) {
            this.nativeElement.taskColorEntireSurface = value;
        }
    }
    /** Displays an input in the task's card for adding dynamically a sub task. The 'taskSubTasks' property should be set to a value different than 'none'.
    *	Property type: boolean
    */
    get taskSubTasksInput() {
        return this.nativeElement ? this.nativeElement.taskSubTasksInput : undefined;
    }
    set taskSubTasksInput(value) {
        if (this.nativeElement) {
            this.nativeElement.taskSubTasksInput = value;
        }
    }
    /** Sets the rendering mode of sub tasks. 'none' - default value. Sub tasks are displayed only in the edit dialog. 'onePerRow' - all sub tasks are displayed in the task's card. 'onlyUnfinished' - only tasks which are not completed are displayed in the task's card.
    *	Property type: KanbanTaskSubTasks
    */
    get taskSubTasks() {
        return this.nativeElement ? this.nativeElement.taskSubTasks : undefined;
    }
    set taskSubTasks(value) {
        if (this.nativeElement) {
            this.nativeElement.taskSubTasks = value;
        }
    }
    /** Toggles the visibility of task tags.
    *	Property type: boolean
    */
    get taskTags() {
        return this.nativeElement ? this.nativeElement.taskTags : undefined;
    }
    set taskTags(value) {
        if (this.nativeElement) {
            this.nativeElement.taskTags = value;
        }
    }
    /** Toggles the visibility of the task user icon.
    *	Property type: boolean
    */
    get taskUserIcon() {
        return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
    }
    set taskUserIcon(value) {
        if (this.nativeElement) {
            this.nativeElement.taskUserIcon = value;
        }
    }
    /** Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed.
    *	Property type: any
    */
    get textTemplate() {
        return this.nativeElement ? this.nativeElement.textTemplate : undefined;
    }
    set textTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.textTemplate = value;
        }
    }
    /** Determines the theme. Theme defines the look of the element
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
    /** Determines whether the priority list (as defined by the priority property) will be shown when clicking the priority icon. Only applicable if editable privileges are enabled.
    *	Property type: boolean
    */
    get priorityList() {
        return this.nativeElement ? this.nativeElement.priorityList : undefined;
    }
    set priorityList(value) {
        if (this.nativeElement) {
            this.nativeElement.priorityList = value;
        }
    }
    /** Determines the priority Kanban tasks can be assigned to. Example: [{label: 'low', value: 'low'}, {label: 'high', value: 'high'}]
    *	Property type: KanbanPriority[]
    */
    get priority() {
        return this.nativeElement ? this.nativeElement.priority : undefined;
    }
    set priority(value) {
        if (this.nativeElement) {
            this.nativeElement.priority = value;
        }
    }
    /** Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled.
    *	Property type: boolean
    */
    get userList() {
        return this.nativeElement ? this.nativeElement.userList : undefined;
    }
    set userList(value) {
        if (this.nativeElement) {
            this.nativeElement.userList = value;
        }
    }
    /** Determines the users Kanban tasks can be assigned to and their characteristics and privileges.
    *	Property type: KanbanUser[]
    */
    get users() {
        return this.nativeElement ? this.nativeElement.users : undefined;
    }
    set users(value) {
        if (this.nativeElement) {
            this.nativeElement.users = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["allowColumnReorder", "allowColumnEdit", "allowColumnRemove", "allowColumnHide", "addNewButton", "addNewButtonDisplayMode", "addNewColumn", "allowDrag", "allowDrop", "autoLoadState", "autoSaveState", "collapsible", "columnColors", "columns", "columnActions", "columnSummary", "columnHeaderTemplate", "columnEditMode", "currentUser", "dataSource", "dataSourceMap", "dragOffset", "editable", "formatStringDate", "formatStringTime", "headerPosition", "hierarchy", "locale", "messages", "selectionMode", "storeHistory", "storeHistoryItems", "rightToLeft", "swimlanes", "swimlanesFrom", "swimlanesTo", "tags", "taskActions", "taskComments", "taskDue", "taskPosition", "taskPriority", "taskProgress", "taskCustomFields", "taskColorEntireSurface", "taskSubTasksInput", "taskSubTasks", "taskTags", "taskUserIcon", "textTemplate", "theme", "priorityList", "priority", "userList", "users"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onClose", "onClosing", "onColumnAdd", "onColumnRemove", "onColumnReorder", "onColumnUpdate", "onColumnClick", "onColumnDoubleClick", "onDragEnd", "onDragging", "onDragStart", "onFilter", "onOpen", "onOpening", "onSort", "onTaskAdd", "onTaskRemove", "onCreate", "onReady"];
    }
    /** Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters, operator) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(filters, operator);
            });
        }
    }
    /** Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields, orderBy) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    }
    /** Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
    * @param {any} data?. An object containing the new task's data
    */
    addTask(data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addTask(data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addTask(data);
            });
        }
    }
    /** Adds a column to a Kanban. If no data is specified, an empty column is added.
    * @param {any} data?. An object containing the new column's data
    */
    addColumn(data) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColumn(data);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColumn(data);
            });
        }
    }
    /** Begins an edit operation
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    beginEdit(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(task);
            });
        }
    }
    /** Ends the current edit operation and discards changes
    */
    cancelEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }
    /** Closes any open header panel (drop down)
    */
    closePanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closePanel();
            });
        }
    }
    /** Collapses a Kanban column.
    * @param {number | string} column. The index or dataField of the column to collapse
    */
    collapse(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(column);
            });
        }
    }
    /** Hides a Kanban column.
    * @param {number | string} column. The index or dataField of the column to hide
    */
    hide(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide(column);
            });
        }
    }
    /** Creates a copy of a task in the same column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    */
    copyTask(task) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyTask(task);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyTask(task);
            });
        }
    }
    /** Ends the current edit operation and saves changes
    */
    endEdit() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }
    /** Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @returns {HTMLElement}
  */
    ensureVisible(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.ensureVisible(task);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Expands a Kanban column.
    * @param {number | string} column. The index or dataField of the column to expand
    */
    expand(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(column);
            });
        }
    }
    /** Expands all Kanban columns.
    */
    expandAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAll();
            });
        }
    }
    /** Exports the Kanban's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'.
    * @param {string} dataField. The column's data field
    * @returns {any}
  */
    getColumn(dataField) {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getColumn(dataField);
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Gets the Kanban's state.
    * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
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
    /** Loads the Kanban's state.
    * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
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
    /** Moves a task to a different column.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {string} newStatus. The new status of the task (its new column's dataField)
    */
    moveTask(task, newStatus) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveTask(task, newStatus);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveTask(task, newStatus);
            });
        }
    }
    /** Opens the "Customize tasks" header panel (drop down)
    */
    openCustomizePanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openCustomizePanel();
            });
        }
    }
    /** Opens the "Filter" header panel (drop down)
    */
    openFilterPanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openFilterPanel();
            });
        }
    }
    /** Opens the "Sort" header panel (drop down)
    */
    openSortPanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openSortPanel();
            });
        }
    }
    /** Removes filtering
    */
    removeFilter() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter();
            });
        }
    }
    /** Removes sorting
    */
    removeSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort();
            });
        }
    }
    /** Removes a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
    */
    removeTask(task, prompt) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeTask(task, prompt);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeTask(task, prompt);
            });
        }
    }
    /** Removes a column.
    * @param {string} dataField. The column's data field
    */
    removeColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColumn(dataField);
            });
        }
    }
    /** Saves the Kanban's state to the browser's localStorage.
    */
    saveState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }
    /** Shows a Kanban column.
    * @param {number | string} column. The index or dataField of the column to show
    */
    show(column) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(column);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show(column);
            });
        }
    }
    /** Shows all Kanban columns.
    */
    showAllColumns() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showAllColumns();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showAllColumns();
            });
        }
    }
    /** Updates a task.
    * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
    * @param {{}} newData. The new data to visualize in the task.
    */
    updateTask(task, newData) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateTask(task, newData);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateTask(task, newData);
            });
        }
    }
    /** Updates a column.
    * @param {string} dataField. The new column's data field
    * @param {{}} newData. The new data to visualize in the column.
    */
    updateColumn(dataField, newData) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateColumn(dataField, newData);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateColumn(dataField, newData);
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
        return (React.createElement("smart-kanban", { ref: this.componentRef }, this.props.children));
    }
}

export default Kanban;
export { Smart, Kanban };
