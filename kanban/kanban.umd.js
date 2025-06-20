
require('../source/modules/smart.kanban');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kanban = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Kanban represents a kanban board that visually depicts work at various stages of a process using cards to represent tasks and columns to represent each stage of the process.
	*/
	class Kanban extends React.Component {
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
	    *	Property type: KanbanAddNewButtonDisplayMode | string
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
	    /** Sets the width of the add new column. The property is used, if the 'columnWidth' property is set, too. It specifies the width of the dynamic new column.
	    *	Property type: number | null
	    */
	    get addNewColumnWidth() {
	        return this.nativeElement ? this.nativeElement.addNewColumnWidth : undefined;
	    }
	    set addNewColumnWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.addNewColumnWidth = value;
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
	    /** Allows the dropping of tasks placeholder. When you drag a task over another task it will make an empty space for the task.
	    *	Property type: boolean
	    */
	    get allowDropPlaceholder() {
	        return this.nativeElement ? this.nativeElement.allowDropPlaceholder : undefined;
	    }
	    set allowDropPlaceholder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowDropPlaceholder = value;
	        }
	    }
	    /** This property changes the visual appeal of the Kanban columns and tasks. When set to true and the Kanban columns have their 'color' property set, the color is also applied to the tasks and edit dialog.
	    *	Property type: boolean
	    */
	    get applyColumnColorToTasks() {
	        return this.nativeElement ? this.nativeElement.applyColumnColorToTasks : undefined;
	    }
	    set applyColumnColorToTasks(value) {
	        if (this.nativeElement) {
	            this.nativeElement.applyColumnColorToTasks = value;
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
	    /** Automatically updates the columns height depending on the tasks inside the column. The effect of this property is observed when 'columnColorEntireSurface' is true.
	    *	Property type: boolean
	    */
	    get autoColumnHeight() {
	        return this.nativeElement ? this.nativeElement.autoColumnHeight : undefined;
	    }
	    set autoColumnHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoColumnHeight = value;
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
	    /** Sets the Kanban columns width. When this property is set, the kanban columns width is set and a horizontal scrollbar may appear.
	    *	Property type: number | null
	    */
	    get columnWidth() {
	        return this.nativeElement ? this.nativeElement.columnWidth : undefined;
	    }
	    set columnWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnWidth = value;
	        }
	    }
	    /** Displays background in the Kanban column.
	    *	Property type: boolean
	    */
	    get columnColorEntireSurface() {
	        return this.nativeElement ? this.nativeElement.columnColorEntireSurface : undefined;
	    }
	    set columnColorEntireSurface(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnColorEntireSurface = value;
	        }
	    }
	    /** Displays a column footer which shows the summary of the column.
	    *	Property type: boolean
	    */
	    get columnFooter() {
	        return this.nativeElement ? this.nativeElement.columnFooter : undefined;
	    }
	    set columnFooter(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnFooter = value;
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
	    *	Property type: KanbanColumnEditMode | string
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
	    /** Sets or gets whether the default dialog for adding/removing tasks or comments is disabled.
	    *	Property type: boolean
	    */
	    get disableDialog() {
	        return this.nativeElement ? this.nativeElement.disableDialog : undefined;
	    }
	    set disableDialog(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableDialog = value;
	        }
	    }
	    /** Sets or gets a customization function for the dialog. This function can be used to customize the dialog look or to replace it. The Kanban calls this function with 5 arguments - 'dialog', 'taskOrComment', 'editors', 'purpose' and 'type'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'purpose' could be 'add' or 'edit' and 'type' could be 'task' or 'column' depending on the action.
	    *	Property type: any
	    */
	    get dialogCustomizationFunction() {
	        return this.nativeElement ? this.nativeElement.dialogCustomizationFunction : undefined;
	    }
	    set dialogCustomizationFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dialogCustomizationFunction = value;
	        }
	    }
	    /** Sets or gets a function called when the dialog is rendered. The Kanban calls this function with 6 arguments - 'dialog', 'editors', 'labels', 'tabs', 'layout', 'taskOrComment'. The dialog is the 'smart-window' instance used as a default Kanban dialog. 'taskOrComment' is object which could be Kanban task or comment. 'editors', 'labels', 'tabs' and 'layout' are JSON objects with key which describes the element type and value which is HTML Element.
	    *	Property type: any
	    */
	    get dialogRendered() {
	        return this.nativeElement ? this.nativeElement.dialogRendered : undefined;
	    }
	    set dialogRendered(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dialogRendered = value;
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
	    /** Determines the edit behavior. It could be either singleClick or doubleClick. The dialog edit window is by default opened when user double clicks on a Kanban task.
	    *	Property type: KanbanEditMode | string
	    */
	    get editMode() {
	        return this.nativeElement ? this.nativeElement.editMode : undefined;
	    }
	    set editMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editMode = value;
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
	    *	Property type: KanbanHeaderPosition | string
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
	    *	Property type: KanbanHierarchy | string
	    */
	    get hierarchy() {
	        return this.nativeElement ? this.nativeElement.hierarchy : undefined;
	    }
	    set hierarchy(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hierarchy = value;
	        }
	    }
	    /** Sets or gets the unlockKey which unlocks the product.
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
	    /** Callback function which can be used for customizing the tasks rendering. The Kanban calls it with 2 arguments - task html element and task data.
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
	    /** Callback function which can be used for customizing the filter items. The function is called with 1 argument - Array of items which will be displayed in the filter drop down. You can modify that array to remove or update items to filter by.
	    *	Property type: any
	    */
	    get onFilterPrepare() {
	        return this.nativeElement ? this.nativeElement.onFilterPrepare : undefined;
	    }
	    set onFilterPrepare(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onFilterPrepare = value;
	        }
	    }
	    /** Callback function which can be used for customizing the sort items. The function is called with 1 argument - Array of items which will be displayed in the sort drop down. You can modify that array to remove or update items to sort by.
	    *	Property type: any
	    */
	    get onSortPrepare() {
	        return this.nativeElement ? this.nativeElement.onSortPrepare : undefined;
	    }
	    set onSortPrepare(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onSortPrepare = value;
	        }
	    }
	    /** Callback function which can be used for customizing the column header rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field.
	    *	Property type: any
	    */
	    get onColumnHeaderRender() {
	        return this.nativeElement ? this.nativeElement.onColumnHeaderRender : undefined;
	    }
	    set onColumnHeaderRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnHeaderRender = value;
	        }
	    }
	    /** Callback function which can be used for customizing the column footer rendering. The Kanban calls it with 3 arguments - column header html element and column data and column data field.
	    *	Property type: any
	    */
	    get onColumnFooterRender() {
	        return this.nativeElement ? this.nativeElement.onColumnFooterRender : undefined;
	    }
	    set onColumnFooterRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnFooterRender = value;
	        }
	    }
	    /** Determines selection mode.
	    *	Property type: KanbanSelectionMode | string
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
	    /** Sets or gets whether the edit dialog is displayed in readonly mode. In that mode it shows only the task details, but the editing is disabled. However, if comments are enabled, you will be able to add comments in the dialog.
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
	    /** Represents a callback function which is called when the task actions menu is created. The task actions element is passed as parameter and allows you to customize the menu. Example: (list) => { list.innerHTML = 'Custom Item'; list.onclick = () => { alert('clicked'); }}
	    *	Property type: any
	    */
	    get taskActionsRendered() {
	        return this.nativeElement ? this.nativeElement.taskActionsRendered : undefined;
	    }
	    set taskActionsRendered(value) {
	        if (this.nativeElement) {
	            this.nativeElement.taskActionsRendered = value;
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
	    *	Property type: KanbanTaskPosition | string
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
	    /** Sets the task custom fields displayed in the card. Each array item should have 'dataField', 'label' 'dataType' and optionally 'visible', 'image' and 'cover' properties. The 'dataField' determines the value, the label is displayed as title, 'dataType' is used for formatting and 'visible' determines whether the field will be displayed. If your string represents an image either URL or Base64, set image: true. If you want to display that image as a cover image, set cover:true, too.
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
	    *	Property type: KanbanTaskSubTasks | string
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
	        return ["allowColumnReorder", "allowColumnEdit", "allowColumnRemove", "allowColumnHide", "addNewButton", "addNewButtonDisplayMode", "addNewColumn", "addNewColumnWidth", "allowDrag", "allowDrop", "allowDropPlaceholder", "applyColumnColorToTasks", "autoLoadState", "autoSaveState", "autoColumnHeight", "collapsible", "columnColors", "columnWidth", "columnColorEntireSurface", "columnFooter", "columns", "columnActions", "columnSummary", "columnHeaderTemplate", "columnEditMode", "currentUser", "disableDialog", "dialogCustomizationFunction", "dialogRendered", "dataSource", "dataSourceMap", "dragOffset", "editable", "editMode", "formatStringDate", "formatStringTime", "headerPosition", "hierarchy", "unlockKey", "locale", "messages", "onTaskRender", "onFilterPrepare", "onSortPrepare", "onColumnHeaderRender", "onColumnFooterRender", "selectionMode", "storeHistory", "storeHistoryItems", "rightToLeft", "readonly", "swimlanes", "swimlanesFrom", "swimlanesTo", "tags", "taskActions", "taskActionsRendered", "taskComments", "taskDue", "taskPosition", "taskPriority", "taskProgress", "taskCustomFields", "taskColorEntireSurface", "taskSubTasksInput", "taskSubTasks", "taskTags", "taskUserIcon", "textTemplate", "theme", "priorityList", "priority", "userList", "users"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onClose", "onClosing", "onColumnAdd", "onColumnRemove", "onColumnReorder", "onColumnUpdate", "onColumnClick", "onColumnDoubleClick", "onColumnShow", "onColumnHide", "onColumnCollapse", "onColumnExpand", "onCommentAdd", "onCommentRemove", "onCommentUpdate", "onDragEnd", "onDragging", "onDragStart", "onFilter", "onOpen", "onOpening", "onSort", "onTaskBeforeAdd", "onTaskAdd", "onTaskRemove", "onTaskUpdate", "onTaskClick", "onTaskDoubleClick", "onCreate", "onReady"];
	    }
	    /** Adds filtering. Example: const filterGroup = new Smart.FilterGroup(); const filterObject = filterGroup.createFilter('string', 'Italy', 'contains'); filterGroup.addFilter('and', filterObject); kanban.addFilter([['Country', filterGroup]]);
	    * @param {any} filters. Filter information. Example: kanban.addFilter([['Country', filterGroup]]);. Each array item is a sub array with two items - 'dataField' and 'filterGroup' object. The 'dataField' is any valid data field from the data source bound to the Kanban like 'dueDate', 'startDate' or custom fields like 'Country'. Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	    * @param {string} operator?. Logical operator between the filters of different fields. Possible values are: 'and', 'or'.
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
	    /** Adds sorting. Example: kanban.addSort(['Country'], 'ascending');
	    * @param {[] | string} dataFields. The data field(s) to sort by
	    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by. Possible values are: 'ascending' and 'descending'.
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
	    /** Clears the Kanban's selection.
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
	        const result = this.nativeElement.ensureVisible(task);
	        return result;
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
	        const result = this.nativeElement.exportData(dataFormat, fileName, callback);
	        return result;
	    }
	    /** Gets the data of a column. The returned value is a JSON object with the following fields: 'label', 'dataField', 'collapsed', 'collapsible', 'allowRemove', 'editable', 'reorder', 'orientation'.
	    * @param {string} dataField. The column's data field
	    * @returns {any}
	  */
	    getColumn(dataField) {
	        const result = this.nativeElement.getColumn(dataField);
	        return result;
	    }
	    /** Gets the data of a task. The returned value is a JSON object with the following fields: 'checklist', 'id', 'color', 'comments', 'history', 'dueDate', 'startDate', 'priority', 'progress', 'status', 'swimlane', 'tags', 'text', 'description', 'userId', 'createdUserId', 'createdDate', 'updatedUserId', 'updatedDate'
	    * @param {number} id. The task's id
	    * @returns {any}
	  */
	    getTask(id) {
	        const result = this.nativeElement.getTask(id);
	        return result;
	    }
	    /** Gets the selected ids. The returned value is an array. Each item in the array is the 'id' of a selected task.
	    * @param {number} id. The task's id
	    * @returns {any}
	  */
	    getSelectedTasks(id) {
	        const result = this.nativeElement.getSelectedTasks(id);
	        return result;
	    }
	    /** Gets the Kanban's state. Returns an object with the following type: { collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }
	    * @returns {any}
	  */
	    getState() {
	        const result = this.nativeElement.getState();
	        return result;
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
	    /** Selects a task.
	    * @param {number | string} task. The task's id.
	    */
	    selectTask(task) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectTask(task);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectTask(task);
	            });
	        }
	    }
	    /** Unselects a task.
	    * @param {number | string} task. The task's id.
	    */
	    unselectTask(task) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.unselectTask(task);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.unselectTask(task);
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
	        return (React.createElement("smart-kanban", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Kanban = Kanban;
	exports.default = Kanban;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
