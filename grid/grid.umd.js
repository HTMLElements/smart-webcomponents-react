
require('../source/modules/smart.grid');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.grid = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	const Smart = window.Smart;
	/**
	 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
	*/
	class Grid extends React.Component {
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Grid' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** An object containing settings related to the grid's appearance.
	    *	Property type: GridAppearance
	    */
	    get appearance() {
	        return this.nativeElement ? this.nativeElement.appearance : undefined;
	    }
	    set appearance(value) {
	        if (this.nativeElement) {
	            this.nativeElement.appearance = value;
	        }
	    }
	    /** An object containing settings related to the grid's behavior.
	    *	Property type: GridBehavior
	    */
	    get behavior() {
	        return this.nativeElement ? this.nativeElement.behavior : undefined;
	    }
	    set behavior(value) {
	        if (this.nativeElement) {
	            this.nativeElement.behavior = value;
	        }
	    }
	    /** An object containing settings related to the grid's layout.
	    *	Property type: GridLayout
	    */
	    get layout() {
	        return this.nativeElement ? this.nativeElement.layout : undefined;
	    }
	    set layout(value) {
	        if (this.nativeElement) {
	            this.nativeElement.layout = value;
	        }
	    }
	    /** Sets or gets the language. Used in conjunction with the property messages.
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
	    /** The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
	    *	Property type: GridClipboard
	    */
	    get clipboard() {
	        return this.nativeElement ? this.nativeElement.clipboard : undefined;
	    }
	    set clipboard(value) {
	        if (this.nativeElement) {
	            this.nativeElement.clipboard = value;
	        }
	    }
	    /** The columns property is used to describe all columns displayed in the grid.
	    *	Property type: {label: string, dataField: string}[] | string[] | number | GridColumn[]
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component.
	    *	Property type: GridContextMenu
	    */
	    get contextMenu() {
	        return this.nativeElement ? this.nativeElement.contextMenu : undefined;
	    }
	    set contextMenu(value) {
	        if (this.nativeElement) {
	            this.nativeElement.contextMenu = value;
	        }
	    }
	    /** Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
	    *	Property type: GridColumnMenu
	    */
	    get columnMenu() {
	        return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	    }
	    set columnMenu(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnMenu = value;
	        }
	    }
	    /** Describes the settings of the column groups.
	    *	Property type: GridColumnGroup[]
	    */
	    get columnGroups() {
	        return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	    }
	    set columnGroups(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnGroups = value;
	        }
	    }
	    /** Sets or gets details about conditional formatting to be applied to the Grid's cells.
	    *	Property type: GridConditionalFormatting[]
	    */
	    get conditionalFormatting() {
	        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	    }
	    set conditionalFormatting(value) {
	        if (this.nativeElement) {
	            this.nativeElement.conditionalFormatting = value;
	        }
	    }
	    /** Sets the Grid Charting Data Visualization.
	    *	Property type: GridCharting
	    */
	    get charting() {
	        return this.nativeElement ? this.nativeElement.charting : undefined;
	    }
	    set charting(value) {
	        if (this.nativeElement) {
	            this.nativeElement.charting = value;
	        }
	    }
	    /** Sets the TreeGrid checkboxes.
	    *	Property type: GridCheckBoxes
	    */
	    get checkBoxes() {
	        return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
	    }
	    set checkBoxes(value) {
	        if (this.nativeElement) {
	            this.nativeElement.checkBoxes = value;
	        }
	    }
	    /** Sets the Grid Data Export options.
	    *	Property type: GridDataExport
	    */
	    get dataExport() {
	        return this.nativeElement ? this.nativeElement.dataExport : undefined;
	    }
	    set dataExport(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataExport = value;
	        }
	    }
	    /** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array.
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
	    /** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
	    *	Property type: GridDataSourceSettings
	    */
	    get dataSourceSettings() {
	        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	    }
	    set dataSourceSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSourceSettings = value;
	        }
	    }
	    /** Describes the grid's editing settings.
	    *	Property type: GridEditing
	    */
	    get editing() {
	        return this.nativeElement ? this.nativeElement.editing : undefined;
	    }
	    set editing(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editing = value;
	        }
	    }
	    /** Describes the grid's filtering settings.
	    *	Property type: GridFiltering
	    */
	    get filtering() {
	        return this.nativeElement ? this.nativeElement.filtering : undefined;
	    }
	    set filtering(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filtering = value;
	        }
	    }
	    /** Describes the grid's grouping settings.
	    *	Property type: GridGrouping
	    */
	    get grouping() {
	        return this.nativeElement ? this.nativeElement.grouping : undefined;
	    }
	    set grouping(value) {
	        if (this.nativeElement) {
	            this.nativeElement.grouping = value;
	        }
	    }
	    /** Sets the messages values.
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
	    /** Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
	    *	Property type: {(cell: GridCell): void}
	    */
	    get onCellValue() {
	        return this.nativeElement ? this.nativeElement.onCellValue : undefined;
	    }
	    set onCellValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCellValue = value;
	        }
	    }
	    /** Callback function() called when the grid has been rendered.
	    *	Property type: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
	    */
	    get onCellUpdate() {
	        return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
	    }
	    set onCellUpdate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCellUpdate = value;
	        }
	    }
	    /** Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready.
	    *	Property type: {(cell: GridCell): void}
	    */
	    get onCellRender() {
	        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	    }
	    set onCellRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCellRender = value;
	        }
	    }
	    /** Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api.
	    *	Property type: {(): void}
	    */
	    get onBeforeInit() {
	        return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
	    }
	    set onBeforeInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onBeforeInit = value;
	        }
	    }
	    /** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
	    *	Property type: {(): void}
	    */
	    get onInit() {
	        return this.nativeElement ? this.nativeElement.onInit : undefined;
	    }
	    set onInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onInit = value;
	        }
	    }
	    /** Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties.
	    *	Property type: {(): void}
	    */
	    get onAfterInit() {
	        return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
	    }
	    set onAfterInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onAfterInit = value;
	        }
	    }
	    /** Sets the grid's image and filter upload settings for the image and attachment columns.
	    *	Property type: any
	    */
	    get onChartInit() {
	        return this.nativeElement ? this.nativeElement.onChartInit : undefined;
	    }
	    set onChartInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onChartInit = value;
	        }
	    }
	    /** Describes the paging settings.
	    *	Property type: any
	    */
	    get onRender() {
	        return this.nativeElement ? this.nativeElement.onRender : undefined;
	    }
	    set onRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRender = value;
	        }
	    }
	    /** Describes the pager settings.
	    *	Property type: any
	    */
	    get onLoad() {
	        return this.nativeElement ? this.nativeElement.onLoad : undefined;
	    }
	    set onLoad(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onLoad = value;
	        }
	    }
	    /** Sets the row details.
	    *	Property type: {(event: KeyboardEvent): void}
	    */
	    get onKey() {
	        return this.nativeElement ? this.nativeElement.onKey : undefined;
	    }
	    set onKey(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onKey = value;
	        }
	    }
	    /** Sets the scroll mode settings.
	    *	Property type: {(index: number, row: GridRow): void}
	    */
	    get onRowInit() {
	        return this.nativeElement ? this.nativeElement.onRowInit : undefined;
	    }
	    set onRowInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowInit = value;
	        }
	    }
	    /** Describes the column header settings.
	    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	    */
	    get onRowDetailInit() {
	        return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
	    }
	    set onRowDetailInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowDetailInit = value;
	        }
	    }
	    /** Describes the summary row settings.
	    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	    */
	    get onRowDetailUpdated() {
	        return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
	    }
	    set onRowDetailUpdated(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowDetailUpdated = value;
	        }
	    }
	    /** Sets the grid's state settings.
	    *	Property type: {(index: number, row: GridRow, history: any[]): void}
	    */
	    get onRowHistory() {
	        return this.nativeElement ? this.nativeElement.onRowHistory : undefined;
	    }
	    set onRowHistory(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowHistory = value;
	        }
	    }
	    /** Describes the settings for the group header.
	    *	Property type: {(index: number, row: GridRow, history: any[]): void}
	    */
	    get onRowStyle() {
	        return this.nativeElement ? this.nativeElement.onRowStyle : undefined;
	    }
	    set onRowStyle(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowStyle = value;
	        }
	    }
	    /** Describes the header settings of the grid.
	    *	Property type: {(index: number[], row: GridRow[]): void}
	    */
	    get onRowInserted() {
	        return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
	    }
	    set onRowInserted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowInserted = value;
	        }
	    }
	    /** Describes the footer settings of the grid.
	    *	Property type: {(indexes: number[], rows: GridRow[]): void}
	    */
	    get onRowRemoved() {
	        return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
	    }
	    set onRowRemoved(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowRemoved = value;
	        }
	    }
	    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	    *	Property type: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
	    */
	    get onRowUpdate() {
	        return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
	    }
	    set onRowUpdate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowUpdate = value;
	        }
	    }
	    /** The rows property is used to describe all rows displayed in the grid.
	    *	Property type: {(index: number[], row: GridRow[]): void}
	    */
	    get onRowUpdated() {
	        return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
	    }
	    set onRowUpdated(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowUpdated = value;
	        }
	    }
	    /** Describes the selection settings.
	    *	Property type: {(index: number, data: any, row: GridRow[]): void}
	    */
	    get onRowClass() {
	        return this.nativeElement ? this.nativeElement.onRowClass : undefined;
	    }
	    set onRowClass(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onRowClass = value;
	        }
	    }
	    /** Describes sorting settings.
	    *	Property type: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}
	    */
	    get onCellClass() {
	        return this.nativeElement ? this.nativeElement.onCellClass : undefined;
	    }
	    set onCellClass(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCellClass = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(index: number, column: GridColumn): void}
	    */
	    get onColumnInit() {
	        return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
	    }
	    set onColumnInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnInit = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(index: number, column: GridColumn): void}
	    */
	    get onColumnInserted() {
	        return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
	    }
	    set onColumnInserted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnInserted = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(index: number, column: GridColumn): void}
	    */
	    get onColumnRemoved() {
	        return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
	    }
	    set onColumnRemoved(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnRemoved = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(index: number, column: GridColumn): void}
	    */
	    get onColumnUpdated() {
	        return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
	    }
	    set onColumnUpdated(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnUpdated = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}
	    */
	    get onColumnClone() {
	        return this.nativeElement ? this.nativeElement.onColumnClone : undefined;
	    }
	    set onColumnClone(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnClone = value;
	        }
	    }
	    /** undefined
	    *	Property type: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}
	    */
	    get onCommand() {
	        return this.nativeElement ? this.nativeElement.onCommand : undefined;
	    }
	    set onCommand(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCommand = value;
	        }
	    }
	    /** undefined
	    *	Property type: any
	    */
	    get rowCSSRules() {
	        return this.nativeElement ? this.nativeElement.rowCSSRules : undefined;
	    }
	    set rowCSSRules(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rowCSSRules = value;
	        }
	    }
	    /** undefined
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
	    /** undefined
	    *	Property type: any[]
	    */
	    get users() {
	        return this.nativeElement ? this.nativeElement.users : undefined;
	    }
	    set users(value) {
	        if (this.nativeElement) {
	            this.nativeElement.users = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridUploadSettings
	    */
	    get uploadSettings() {
	        return this.nativeElement ? this.nativeElement.uploadSettings : undefined;
	    }
	    set uploadSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.uploadSettings = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridPaging
	    */
	    get paging() {
	        return this.nativeElement ? this.nativeElement.paging : undefined;
	    }
	    set paging(value) {
	        if (this.nativeElement) {
	            this.nativeElement.paging = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridPager
	    */
	    get pager() {
	        return this.nativeElement ? this.nativeElement.pager : undefined;
	    }
	    set pager(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pager = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridRowDetail
	    */
	    get rowDetail() {
	        return this.nativeElement ? this.nativeElement.rowDetail : undefined;
	    }
	    set rowDetail(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rowDetail = value;
	        }
	    }
	    /** undefined
	    *	Property type: Scrolling | string
	    */
	    get scrolling() {
	        return this.nativeElement ? this.nativeElement.scrolling : undefined;
	    }
	    set scrolling(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrolling = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridColumnHeader
	    */
	    get columnHeader() {
	        return this.nativeElement ? this.nativeElement.columnHeader : undefined;
	    }
	    set columnHeader(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnHeader = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridSummaryRow
	    */
	    get summaryRow() {
	        return this.nativeElement ? this.nativeElement.summaryRow : undefined;
	    }
	    set summaryRow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.summaryRow = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridStateSettings
	    */
	    get stateSettings() {
	        return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	    }
	    set stateSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.stateSettings = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridGroupHeader
	    */
	    get groupHeader() {
	        return this.nativeElement ? this.nativeElement.groupHeader : undefined;
	    }
	    set groupHeader(value) {
	        if (this.nativeElement) {
	            this.nativeElement.groupHeader = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridHeader
	    */
	    get header() {
	        return this.nativeElement ? this.nativeElement.header : undefined;
	    }
	    set header(value) {
	        if (this.nativeElement) {
	            this.nativeElement.header = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridFooter
	    */
	    get footer() {
	        return this.nativeElement ? this.nativeElement.footer : undefined;
	    }
	    set footer(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footer = value;
	        }
	    }
	    /** undefined
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
	    /** undefined
	    *	Property type: GridRow[]
	    */
	    get rows() {
	        return this.nativeElement ? this.nativeElement.rows : undefined;
	    }
	    set rows(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rows = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridSelection
	    */
	    get selection() {
	        return this.nativeElement ? this.nativeElement.selection : undefined;
	    }
	    set selection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selection = value;
	        }
	    }
	    /** undefined
	    *	Property type: GridSorting
	    */
	    get sorting() {
	        return this.nativeElement ? this.nativeElement.sorting : undefined;
	    }
	    set sorting(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sorting = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["appearance", "behavior", "layout", "locale", "clipboard", "columns", "contextMenu", "columnMenu", "columnGroups", "conditionalFormatting", "charting", "checkBoxes", "dataExport", "dataSource", "dataSourceSettings", "editing", "filtering", "grouping", "messages", "onCellValue", "onCellUpdate", "onCellRender", "onBeforeInit", "onInit", "onAfterInit", "onChartInit", "onRender", "onLoad", "onKey", "onRowInit", "onRowDetailInit", "onRowDetailUpdated", "onRowHistory", "onRowStyle", "onRowInserted", "onRowRemoved", "onRowUpdate", "onRowUpdated", "onRowClass", "onCellClass", "onColumnInit", "onColumnInserted", "onColumnRemoved", "onColumnUpdated", "onColumnClone", "onCommand", "rowCSSRules", "currentUser", "users", "uploadSettings", "paging", "pager", "rowDetail", "scrolling", "columnHeader", "summaryRow", "stateSettings", "groupHeader", "header", "footer", "rightToLeft", "rows", "selection", "sorting"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onBeginEdit", "onBatchChange", "onBatchCancel", "onChange", "onColumnClick", "onColumnDoubleClick", "onColumnResize", "onColumnDragStart", "onColumnDragging", "onColumnDragEnd", "onColumnReorder", "onCommentAdd", "onCommentRemove", "onContextMenuItemClick", "onRowDragStart", "onRowDragging", "onRowDragEnd", "onRowReorder", "onRowExpand", "onRowCollapse", "onRowClick", "onRowDoubleClick", "onRowResize", "onRowStarred", "onCellClick", "onCellDoubleClick", "onEndEdit", "onFilter", "onGroup", "onOpenColumnDialog", "onCloseColumnDialog", "onResize", "onRowTap", "onCellTap", "onPage", "onSort", "onScrollBottomReached", "onScrollTopReached", "onCreate", "onReady"];
	    }
	    /** Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
	    * @param {any} data. row data matching the data source
	    * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
	    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
	    */
	    addRow(data, insertAtBottom, callback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addRow(data, insertAtBottom, callback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addRow(data, insertAtBottom, callback);
	            });
	        }
	    }
	    /** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
	    * @param {string} position?. 'near' or 'far'
	    * @returns {boolean}
	  */
	    addNewRow(position) {
	        const result = this.nativeElement.addNewRow(position);
	        return result;
	    }
	    /** Adds a new column.
	    * @param {any} column. A Grid column object. See 'columns' property.
	    * @returns {boolean}
	  */
	    addNewColumn(column) {
	        const result = this.nativeElement.addNewColumn(column);
	        return result;
	    }
	    /** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
	    * @param {number} count. The count of unbound rows.
	    * @param {string} position?. 'near' or 'far'
	    * @returns {boolean}
	  */
	    addUnboundRow(count, position) {
	        const result = this.nativeElement.addUnboundRow(count, position);
	        return result;
	    }
	    /** Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5')
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string} filter. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	    * @param {boolean} refreshFilters?. Set this to false, if you will use multiple 'addFilter' calls. By doing this, you will avoid unnecessary renders.
	    */
	    addFilter(dataField, filter, refreshFilters) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addFilter(dataField, filter, refreshFilters);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addFilter(dataField, filter, refreshFilters);
	            });
	        }
	    }
	    /** Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    addGroup(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addGroup(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addGroup(dataField);
	            });
	        }
	    }
	    /** Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
	    */
	    addSort(dataField, sortOrder) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addSort(dataField, sortOrder);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addSort(dataField, sortOrder);
	            });
	        }
	    }
	    /** Auto-sizes grid rows. This method will update the height of all Grid rows.
	    */
	    autoSizeRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.autoSizeRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.autoSizeRows();
	            });
	        }
	    }
	    /** Auto-sizes grid columns. This method will update the width of all Grid columns.
	    */
	    autoSizeColumns() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.autoSizeColumns();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.autoSizeColumns();
	            });
	        }
	    }
	    /** Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width.
	    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    autoSizeColumn(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.autoSizeColumn(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.autoSizeColumn(dataField);
	            });
	        }
	    }
	    /** This method returns true, if all rows in the Grid are selected.
	    * @returns {boolean}
	  */
	    areAllRowsSelected() {
	        const result = this.nativeElement.areAllRowsSelected();
	        return result;
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
	    /** Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    beginEdit(rowId, dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.beginEdit(rowId, dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.beginEdit(rowId, dataField);
	            });
	        }
	    }
	    /** Clears all filters. Refreshes the view and updates all filter input components.
	    */
	    clearFilter() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearFilter();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearFilter();
	            });
	        }
	    }
	    /** Clears all data groups. Refreshes the view and updates the DataGrid component.
	    */
	    clearGroups() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearGroups();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearGroups();
	            });
	        }
	    }
	    /** Clears all sorting. Refreshes the view and updates the DataGrid component.
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
	    /** Clears the selection that user have made. All row, cell and column selection highlights will be removed.
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
	    /** Cancels the editing. This method closes the cell editor and cancels the changes.
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
	    /** Checks a TreeGrid row. This method updates the row's check-box.
	    * @param {string | number} rowId. row bound id
	    */
	    checkRow(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.checkRow(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.checkRow(rowId);
	            });
	        }
	    }
	    /** Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
	    */
	    checkAllRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.checkAllRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.checkAllRows();
	            });
	        }
	    }
	    /** Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
	    */
	    clearRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearRows();
	            });
	        }
	    }
	    /** Closes the column drop-down menu.
	    */
	    closeMenu() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closeMenu();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closeMenu();
	            });
	        }
	    }
	    /** Collapses a TreeGrid or Grouping row.
	    * @param {string | number} rowId. row bound id
	    */
	    collapseRow(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapseRow(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapseRow(rowId);
	            });
	        }
	    }
	    /** Collapses all TreeGrid or Grouping rows.
	    */
	    collapseAllRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapseAllRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapseAllRows();
	            });
	        }
	    }
	    /** Creates a Chart, when charting is enabled.
	    * @param {string} type. Chart's type
	    * @param {any} dataSource?. Chart's data source
	    */
	    createChart(type, dataSource) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.createChart(type, dataSource);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.createChart(type, dataSource);
	            });
	        }
	    }
	    /** Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
	    * @param {string | number} rowId. row bound id
	    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
	    */
	    deleteRow(rowId, callback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.deleteRow(rowId, callback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.deleteRow(rowId, callback);
	            });
	        }
	    }
	    /** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @returns {boolean}
	  */
	    ensureVisible(rowId, dataField) {
	        const result = this.nativeElement.ensureVisible(rowId, dataField);
	        return result;
	    }
	    /** Ends the editing. This method confirms all changes and closes the opened cell editor(s).
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
	    /** Ends the update operation. This method will resume the rendering and will refresh the Grid.
	    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
	    */
	    endUpdate(refresh) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.endUpdate(refresh);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.endUpdate(refresh);
	            });
	        }
	    }
	    /** Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0');
	    * @param {string | number} rowId. row bound id
	    */
	    expandRow(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandRow(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandRow(rowId);
	            });
	        }
	    }
	    /** Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded.
	    * @param {number} level. row group level
	    */
	    expandRowsToGroupLevel(level) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandRowsToGroupLevel(level);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandRowsToGroupLevel(level);
	            });
	        }
	    }
	    /** Expands all TreeGrid or Grouping rows.
	    */
	    expandAllRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandAllRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandAllRows();
	            });
	        }
	    }
	    /** Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
	    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
	    */
	    exportData(Dataformat) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.exportData(Dataformat);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.exportData(Dataformat);
	            });
	        }
	    }
	    /** Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.
	    * @param {string} query. Search query
	    * @param {string} dataField?. Column data field.
	    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	    * @returns {any[]}
	  */
	    find(query, dataField, condition) {
	        const result = this.nativeElement.find(query, dataField, condition);
	        return result;
	    }
	    /** Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values.
	    * @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
	    * @returns {any[]}
	  */
	    findCells(query) {
	        const result = this.nativeElement.findCells(query);
	        return result;
	    }
	    /** Navigates to a page, when paging is enabled.
	    * @param {number} index. page index
	    */
	    goToPage(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.goToPage(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.goToPage(index);
	            });
	        }
	    }
	    /** Navigates to the next page, when grid paging is enabled.
	    */
	    nextPage() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.nextPage();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.nextPage();
	            });
	        }
	    }
	    /** Navigates to the prev page, when grid paging is enabled.
	    */
	    prevPage() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.prevPage();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.prevPage();
	            });
	        }
	    }
	    /** Navigates to the first page, when grid paging is enabled.
	    */
	    firstPage() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.firstPage();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.firstPage();
	            });
	        }
	    }
	    /** Navigates to the last page, when grid paging is enabled.
	    */
	    lastPage() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.lastPage();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.lastPage();
	            });
	        }
	    }
	    /** Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField?. column bound data field
	    */
	    focusAndSelect(rowId, dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.focusAndSelect(rowId, dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.focusAndSelect(rowId, dataField);
	            });
	        }
	    }
	    /** Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid.
	    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
	    */
	    forEachRow(rowCallback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.forEachRow(rowCallback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.forEachRow(rowCallback);
	            });
	        }
	    }
	    /** Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid.
	    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
	    */
	    forEachRowAfterFilterAndSort(rowCallback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
	            });
	        }
	    }
	    /** Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
	    * @returns {number}
	  */
	    getVerticalScrollMax() {
	        const result = this.nativeElement.getVerticalScrollMax();
	        return result;
	    }
	    /** Gets the position of the vertical scrollbar.
	    * @returns {number}
	  */
	    getVerticalScrollValue() {
	        const result = this.nativeElement.getVerticalScrollValue();
	        return result;
	    }
	    /** Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
	    * @returns {number}
	  */
	    getHorizontalScrollMax() {
	        const result = this.nativeElement.getHorizontalScrollMax();
	        return result;
	    }
	    /** Gets the position of the horizontal scrollbar.
	    * @returns {number}
	  */
	    getHorizontalScrollValue() {
	        const result = this.nativeElement.getHorizontalScrollValue();
	        return result;
	    }
	    /** Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
	    * @returns {any}
	  */
	    getColumns() {
	        const result = this.nativeElement.getColumns();
	        return result;
	    }
	    /** Gets the editing cell(s), when the grid is editing.
	    * @returns {any[]}
	  */
	    getEditCells() {
	        const result = this.nativeElement.getEditCells();
	        return result;
	    }
	    /** Gets the groups array.
	    * @returns {any[]}
	  */
	    getGroups() {
	        const result = this.nativeElement.getGroups();
	        return result;
	    }
	    /** Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
	    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
	  */
	    getSortedColumns() {
	        const result = this.nativeElement.getSortedColumns();
	        return result;
	    }
	    /** Gets the selection.
	    * @returns {any}
	  */
	    getSelection() {
	        const result = this.nativeElement.getSelection();
	        return result;
	    }
	    /** Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand.
	    * @returns {any[]}
	  */
	    getSelectedRows() {
	        const result = this.nativeElement.getSelectedRows();
	        return result;
	    }
	    /** Gets the selected row ids.
	    * @returns {any[]}
	  */
	    getSelectedRowIds() {
	        const result = this.nativeElement.getSelectedRowIds();
	        return result;
	    }
	    /** Gets the selected row indexes.
	    * @returns {any[]}
	  */
	    getSelectedRowIndexes() {
	        const result = this.nativeElement.getSelectedRowIndexes();
	        return result;
	    }
	    /** Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
	    * @returns {any[]}
	  */
	    getSelectedCells() {
	        const result = this.nativeElement.getSelectedCells();
	        return result;
	    }
	    /** Gets an array of columns with applied filters.
	    * @returns {any}
	  */
	    getFilteredColumns() {
	        const result = this.nativeElement.getFilteredColumns();
	        return result;
	    }
	    /** Gets an array of rows, which are visible and match the applied filter.
	    * @returns {any}
	  */
	    getVisibleRows() {
	        const result = this.nativeElement.getVisibleRows();
	        return result;
	    }
	    /** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
	    * @returns {any}
	  */
	    getViewRows() {
	        const result = this.nativeElement.getViewRows();
	        return result;
	    }
	    /** Gets a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
	    * @returns {any}
	  */
	    getState() {
	        const result = this.nativeElement.getState();
	        return result;
	    }
	    /** Saves the Grid state and returns a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
	    * @param {string} name?. state name
	    * @returns {any}
	  */
	    saveState(name) {
	        const result = this.nativeElement.saveState(name);
	        return result;
	    }
	    /** Loads a previously saved Grid state. You can pass a state name when there is a state which was previously saved with the saveState(stateName) method call or a state object returned by the saveState or getState method calls. The state object is required to be a JSON object with the following fields: 'sort', 'columns', 'expandedRows', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'. The 'sort' represents an object which contains the sorted columns. Each key in that json object is the column's dataField item which has sortOrder: string and sortIndex: int properties. The sortOrder could be either 'asc' or 'desc'. Similarly, the filter object contains the filtered columns. Each key in that object is a column data field and each value has 'filters' array property with the applied filters to the column. The 'columns' property contains an array of columns with saved properties such as visible, width and freeze. The 'expandedRows' property contains the indexes of the expanded rows. The 'groups' property contains the grouped column data fields and the selectedCells and selectedRows include information about the cells or rows selection. These depend on the selection mode used in the Grid. The 'paging' object includes the sub-properties 'count', 'index' and 'size' which determine the count of pages, the current page's index and the page size.
	    * @param {any} state. state name or state object
	    * @returns {any}
	  */
	    loadState(state) {
	        const result = this.nativeElement.loadState(state);
	        return result;
	    }
	    /** Resets the Grid state.
	    */
	    resetState() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.resetState();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.resetState();
	            });
	        }
	    }
	    /** Gets the changes from the batch edit.
	    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
	  */
	    getBatchEditChanges() {
	        const result = this.nativeElement.getBatchEditChanges();
	        return result;
	    }
	    /** Gets a value of a cell.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @returns {any}
	  */
	    getCellValue(rowId, dataField) {
	        const result = this.nativeElement.getCellValue(rowId, dataField);
	        return result;
	    }
	    /** Gets a column. Returns a Grid column object.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @returns {GridColumn}
	  */
	    getColumn(dataField) {
	        const result = this.nativeElement.getColumn(dataField);
	        return result;
	    }
	    /** Gets a value of a column.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string} propertyName. The property name.
	    * @returns {any}
	  */
	    getColumnProperty(dataField, propertyName) {
	        const result = this.nativeElement.getColumnProperty(dataField, propertyName);
	        return result;
	    }
	    /** Gets a value of a row.
	    * @param {string | number} rowId. row bound id
	    * @param {string} propertyName. The property name.
	    * @returns {any}
	  */
	    getRowProperty(rowId, propertyName) {
	        const result = this.nativeElement.getRowProperty(rowId, propertyName);
	        return result;
	    }
	    /** Gets a row. Returns a Grid row object.
	    * @param {string | number} rowId. row bound id
	    * @returns {GridRow}
	  */
	    getRow(rowId) {
	        const result = this.nativeElement.getRow(rowId);
	        return result;
	    }
	    /** Gets a row by its index. Returns a Grid row object.
	    * @param {number} rowIndex. row bound index
	    * @returns {GridRow}
	  */
	    getRowByIndex(rowIndex) {
	        const result = this.nativeElement.getRowByIndex(rowIndex);
	        return result;
	    }
	    /** Gets the Data source data associated to the row.
	    * @param {string | number} rowId. row bound id
	    * @returns {any}
	  */
	    getRowData(rowId) {
	        const result = this.nativeElement.getRowData(rowId);
	        return result;
	    }
	    /** Gets the Row's id by a row index.
	    * @param {number} rowIndex. row index
	    * @returns {string | number}
	  */
	    getRowId(rowIndex) {
	        const result = this.nativeElement.getRowId(rowIndex);
	        return result;
	    }
	    /** Gets whether a column's drop-down menu is opened.
	    * @returns {boolean}
	  */
	    hasMenu() {
	        const result = this.nativeElement.hasMenu();
	        return result;
	    }
	    /** This method returns true, if any rows in the Grid are selected.
	    * @returns {boolean}
	  */
	    hasSelectedRows() {
	        const result = this.nativeElement.hasSelectedRows();
	        return result;
	    }
	    /** Hides the Details of a Row, when row details are enabled.
	    * @param {string | number} rowId. row bound id
	    */
	    hideDetail(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.hideDetail(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.hideDetail(rowId);
	            });
	        }
	    }
	    /** Highlights a column. Highlights a Grid column.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    highlightColumn(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.highlightColumn(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.highlightColumn(dataField);
	            });
	        }
	    }
	    /** Highlights a cell. Calling the method a second time toggle the highlight state.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string} className?. CSS Class Name
	    */
	    highlightCell(rowId, dataField, className) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.highlightCell(rowId, dataField, className);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.highlightCell(rowId, dataField, className);
	            });
	        }
	    }
	    /** Highlights a row. Calling the method a second time toggle the highlight state.
	    * @param {string | number} rowId. row bound id
	    * @param {string} className?. CSS Class Name
	    */
	    highlightRow(rowId, className) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.highlightRow(rowId, className);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.highlightRow(rowId, className);
	            });
	        }
	    }
	    /** Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
	    * @param {any} data. row data matching the data source
	    * @param {number} index?. Determines the insert index. The default value is the last index.
	    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
	    */
	    insertRow(data, index, callback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insertRow(data, index, callback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insertRow(data, index, callback);
	            });
	        }
	    }
	    /** Opens a column drop-down menu.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    openMenu(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openMenu(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openMenu(dataField);
	            });
	        }
	    }
	    /** Opens a context menu. Note that context menu should be enabled.
	    * @param {number} left. Left Position.
	    * @param {number} top. Top Position.
	    */
	    openContextMenu(left, top) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openContextMenu(left, top);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openContextMenu(left, top);
	            });
	        }
	    }
	    /** Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
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
	    /** Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
	    */
	    refresh() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refresh();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refresh();
	            });
	        }
	    }
	    /** Refreshes the grid with the current property values. This method will refresh the Grid layout.
	    */
	    refreshView() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refreshView();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refreshView();
	            });
	        }
	    }
	    /** Refreshes the grid cells in view. The method is useful for live-updates of cell values.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {boolean} refreshFilters?. Set this to false, if you need to make multiple removeFilter calls.
	    */
	    removeFilter(dataField, refreshFilters) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeFilter(dataField, refreshFilters);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeFilter(dataField, refreshFilters);
	            });
	        }
	    }
	    /** Removes a column filter.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    removeGroup(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeGroup(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeGroup(dataField);
	            });
	        }
	    }
	    /** Removes a group by data field. This method will remove a group to the Grid when grouping is enabled.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    removeSort(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeSort(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeSort(dataField);
	            });
	        }
	    }
	    /** Removes a sorting by data field. This method will remove a sorting from a Grid column.
	    */
	    refreshSort() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.refreshSort();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.refreshSort();
	            });
	        }
	    }
	    /** Re-sorts the Grid by using the already applied column sortings and re-renders the Grid.
	    */
	    revertBatchEdit() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.revertBatchEdit();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.revertBatchEdit();
	            });
	        }
	    }
	    /** Reverts the batch edit changes. This method cancels all changes made by the end-user.
	    * @param {string | number} dataField. The data field or column index of the first grid column.
	    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
	    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
	    */
	    reorderColumns(dataField, referenceDataField, insertAfter) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
	            });
	        }
	    }
	    /** Reorders two DataGrid columns.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
	    */
	    sortBy(dataField, sortOrder) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.sortBy(dataField, sortOrder);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.sortBy(dataField, sortOrder);
	            });
	        }
	    }
	    /** Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter.
	    * @param {string | number} dataField. The data field or column index of the first grid column.
	    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
	    */
	    swapColumns(dataField, referenceDataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.swapColumns(dataField, referenceDataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.swapColumns(dataField, referenceDataField);
	            });
	        }
	    }
	    /** Swaps two DataGrid columns.
	    */
	    saveBatchEdit() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.saveBatchEdit();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.saveBatchEdit();
	            });
	        }
	    }
	    /** Saves the batch edit changes. This method confirms the editing changes made by the end-user.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField?. column bound data field
	    */
	    select(rowId, dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select(rowId, dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select(rowId, dataField);
	            });
	        }
	    }
	    /** Selects a row, cell or column.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField. column bound data field
	    * @param {string | number} endRowId. row bound id
	    * @param {string} endDataField. column bound data field
	    */
	    selectRange(rowId, dataField, endRowId, endDataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
	            });
	        }
	    }
	    /** Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
	    * @param {string | number} rowId. row bound id
	    * @param {string | number} endRowId. row bound id
	    */
	    selectRowsRange(rowId, endRowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectRowsRange(rowId, endRowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectRowsRange(rowId, endRowId);
	            });
	        }
	    }
	    /** Selects a range of rows.
	    * @param {(string | number)[]} rowId. Array of row ids
	    */
	    selectRows(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectRows(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectRows(rowId);
	            });
	        }
	    }
	    /** Selects multiple rows by their ids.
	    */
	    selectAllRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectAllRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectAllRows();
	            });
	        }
	    }
	    /** Selects all rows.
	    * @param {number[]} rowIndex. Array of row indexes
	    */
	    selectRowsByIndex(rowIndex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectRowsByIndex(rowIndex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectRowsByIndex(rowIndex);
	            });
	        }
	    }
	    /** Selects multiple rows by their index.
	    * @param {string} query. Search query
	    * @param {string} dataField?. Column data field.
	    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	    */
	    selectRowsByQuery(query, dataField, condition) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectRowsByQuery(query, dataField, condition);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectRowsByQuery(query, dataField, condition);
	            });
	        }
	    }
	    /** Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.
	    * @param {(string | number)[]} rowIds. Array of row ids
	    * @param {string[]} dataFields. Array of data fields.
	    */
	    selectCells(rowIds, dataFields) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectCells(rowIds, dataFields);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectCells(rowIds, dataFields);
	            });
	        }
	    }
	    /** Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows.
	    * @param {string} query. Search query
	    */
	    selectCellsByQuery(query) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectCellsByQuery(query);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectCellsByQuery(query);
	            });
	        }
	    }
	    /** Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string | number | Date | boolean} value. New Cell value.
	    */
	    setCellValue(rowId, dataField, value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setCellValue(rowId, dataField, value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setCellValue(rowId, dataField, value);
	            });
	        }
	    }
	    /** Sets a new value to a cell.
	    * @param {GridColumn[]} columns. Columns array.
	    */
	    setColumns(columns) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setColumns(columns);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setColumns(columns);
	            });
	        }
	    }
	    /** Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied.
	    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    * @param {string} propertyName. The column property's name.
	    * @param {any} value. The new property value.
	    */
	    setColumnProperty(dataField, propertyName, value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setColumnProperty(dataField, propertyName, value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setColumnProperty(dataField, propertyName, value);
	            });
	        }
	    }
	    /** Sets a property to a column.
	    * @param {string | number} rowId. row bound id
	    * @param {string} propertyName. The row property's name.
	    * @param {any} value. The new property value.
	    */
	    setRowProperty(rowId, propertyName, value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setRowProperty(rowId, propertyName, value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setRowProperty(rowId, propertyName, value);
	            });
	        }
	    }
	    /** Sets a property to a row.
	    * @param {string | number} rowId. row bound id
	    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The row style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
	    */
	    setRowStyle(rowId, rowStyle) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setRowStyle(rowId, rowStyle);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setRowStyle(rowId, rowStyle);
	            });
	        }
	    }
	    /** Sets a style to a row.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField. Column bound field name.
	    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The cell style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
	    */
	    setCellStyle(rowId, dataField, rowStyle) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
	            });
	        }
	    }
	    /** Sets a style to a row.
	    * @param {number} value. The new scroll position
	    */
	    setVerticalScrollValue(value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setVerticalScrollValue(value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setVerticalScrollValue(value);
	            });
	        }
	    }
	    /** Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
	    * @param {number} value. The new scroll position
	    */
	    setHorizontalScrollValue(value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setHorizontalScrollValue(value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setHorizontalScrollValue(value);
	            });
	        }
	    }
	    /** Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
	    * @param {string | number} rowId. row bound id
	    */
	    showDetail(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.showDetail(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.showDetail(rowId);
	            });
	        }
	    }
	    /** Shows the Details of a Row, when row details are enabled.
	    * @param {string | number} rowId. row bound id
	    * @param {any} data. row data matching the data source
	    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
	    */
	    updateRow(rowId, data, callback) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateRow(rowId, data, callback);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateRow(rowId, data, callback);
	            });
	        }
	    }
	    /** Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
	    * @param {string | number} rowId. row bound id
	    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
	    */
	    unselect(rowId, dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.unselect(rowId, dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.unselect(rowId, dataField);
	            });
	        }
	    }
	    /** Unselects a row, cell or column.
	    * @param {string | number} rowId. row bound id
	    */
	    uncheckRow(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.uncheckRow(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.uncheckRow(rowId);
	            });
	        }
	    }
	    /** Unchecks a TreeGrid row. Sets its check-box to false.
	    */
	    uncheckAllRows() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.uncheckAllRows();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.uncheckAllRows();
	            });
	        }
	    }
	    /** Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
	    * @param {string | number} rowId. row bound id
	    */
	    toggleRow(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.toggleRow(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.toggleRow(rowId);
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
	            if (prop === 'class' || prop === 'className') {
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
	        return (React.createElement("smart-grid", { ref: this.componentRef }, this.props.children));
	    }
	}

	exports.Smart = Smart;
	exports.Grid = Grid;
	exports.default = Grid;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
