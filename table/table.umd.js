
require('../source/modules/smart.table');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.table = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Table is an alternative of the HTMLTableElement.
	*/
	class Table extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Table' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls whether the application automatically restores its previous state from the browser's localStorage. When enabled, it retrieves saved settings such as column configurations, expanded or selected rows, active filters, groupings, and the sort order of columns. The specific state information that is loaded depends on the options defined in the stateSettings property.
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
	    /** Controls whether the component automatically saves its current state to the browser’s localStorage. When enabled, data such as column configurations, expanded row states, selected rows, applied filters, grouping options, and sorted columns are persistently stored. The specific state information saved depends on the options set in the stateSettings property. This allows users’ table settings to be retained and restored across browser sessions.
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
	    /** Defines or retrieves an array of column groups that establish the hierarchical structure of the column headers. Note: When a column header hierarchy is configured using these column groups, features such as column resizing and auto-sizing are disabled and will not be available for those columns.
	    *	Property type: TableColumnGroup[]
	    */
	    get columnGroups() {
	        return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	    }
	    set columnGroups(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnGroups = value;
	        }
	    }
	    /** Specifies or retrieves the minimum width for columns when columnSizeMode is set to 'auto' or when columns are being resized by the user. This property determines the smallest allowable width for columns during these operations. Note: This setting is ignored for columns that have their width explicitly defined through code.
	    *	Property type: string | number
	    */
	    get columnMinWidth() {
	        return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
	    }
	    set columnMinWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnMinWidth = value;
	        }
	    }
	    /** Determines whether users are allowed to reorder columns by dragging them. When enabled, columns can be rearranged by the user; when disabled, the column order is fixed. This property can be set to enable or disable column reordering, or queried to check the current state.
	    *	Property type: boolean
	    */
	    get columnReorder() {
	        return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	    }
	    set columnReorder(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnReorder = value;
	        }
	    }
	    /** Enables or disables the ability for users to resize table columns. When this option is enabled, users can manually adjust the width of each column. Note: The actual column sizing is still governed by the standard HTML table behavior for table-layout: fixed, as smart-table is built upon this layout model. This means columns have a fixed width and resizing may affect the overall table width proportionally, consistent with native HTML tables using table-layout: fixed.
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
	    /** This property controls how the table adjusts its column widths when columnSizeMode is set to 'default'. - When columnResizeNormalize is 'false', and every table column has a defined width, the Table will insert an extra '' element. This additional header cell ensures that the customized column widths are preserved, preventing the browser from automatically resizing your columns and thereby maintaining the exact width configuration you specified.- When columnResizeNormalize is 'true', the Table will not add an extra ''. Instead, it distributes the available space among the columns, causing them to expand or contract as needed—similar to the default behavior of standard HTML tables. This results in a more fluid, responsive layout, where any unallocated space is automatically filled.This property is useful for toggling between a strictly controlled column layout and one that behaves like a regular HTML table when sizing columns.
	    *	Property type: boolean
	    */
	    get columnResizeNormalize() {
	        return this.nativeElement ? this.nativeElement.columnResizeNormalize : undefined;
	    }
	    set columnResizeNormalize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnResizeNormalize = value;
	        }
	    }
	    /** Determines whether a visual feedback indicator is shown during column resizing, displaying the new column width in pixels as the user adjusts the column. This property can be set to enable or disable the display of the width feedback overlay, or queried to check its current state.
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
	    /** Provides detailed definitions and configuration options for the properties of each column, including attributes such as data type, header label, visibility, sorting, filtering, and formatting. This section outlines how individual columns should be displayed and behave within the table or data grid.
	    *	Property type: TableColumn[]
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Defines or retrieves the rules and settings for conditional formatting applied to the table's cells, allowing specific formatting (such as colors, styles, or icons) to be applied dynamically based on the cell values or conditions.
	    *	Property type: TableConditionalFormatting[]
	    */
	    get conditionalFormatting() {
	        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	    }
	    set conditionalFormatting(value) {
	        if (this.nativeElement) {
	            this.nativeElement.conditionalFormatting = value;
	        }
	    }
	    /** Defines the column menu functionality for the grid. When this property is set to true, a menu icon appears in the header of each column. Clicking this icon opens a column menu, providing users with options to sort the data, apply filters, and toggle the visibility of columns. You can set this property to enable or disable the column menu, or retrieve its current state.
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
	    /** ---Determines how the table columns are sized, supporting two distinct modes:- ''auto' Mode:'    Columns are automatically sized based on their content and the specified columnMinWidth value. If the table does not have enough horizontal space to display all content, excess text is truncated with ellipses. Manually specified static column widths (set by the user) will still be honored in this mode.- ''default' Mode:'    Columns follow the standard HTML table's table-layout: fixed behavior. In this mode, column widths do not adapt to content; instead, each column's width is determined either by a fixed value (set via the column’s width property) or distributed evenly if no width is specified.Use this property to control whether column widths are calculated automatically based on content or determined by fixed sizing rules.
	    *	Property type: TableColumnSizeMode | string
	    */
	    get columnSizeMode() {
	        return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
	    }
	    set columnSizeMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columnSizeMode = value;
	        }
	    }
	    /** Controls the visibility of the "Conditional Formatting" button in the Table component’s header toolbar. When enabled, this button appears in the toolbar and allows users to open a dialog where they can configure and apply conditional formatting rules to the table's data. This property can be used to programmatically show or hide the button, or to check if it is currently displayed.
	    *	Property type: boolean
	    */
	    get conditionalFormattingButton() {
	        return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
	    }
	    set conditionalFormattingButton(value) {
	        if (this.nativeElement) {
	            this.nativeElement.conditionalFormattingButton = value;
	        }
	    }
	    /** This property specifies the interval, in milliseconds, that must elapse during vertical scrolling before the table data is refreshed or updated. Adjusting this setting can help control the responsiveness and performance of data loading while scrolling through the table.
	    *	Property type: number
	    */
	    get deferredScrollDelay() {
	        return this.nativeElement ? this.nativeElement.deferredScrollDelay : undefined;
	    }
	    set deferredScrollDelay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.deferredScrollDelay = value;
	        }
	    }
	    /** When the dataSource property is bound directly to a plain array—rather than to an instance of JQX.DataAdapter—this property specifies the name of the field within each array element that should be used as the unique row identifier. You can use it to set or retrieve the key that maps each item's row id, allowing the component to correctly reference, update, and manage rows by their unique ids.
	    *	Property type: string
	    */
	    get dataRowId() {
	        return this.nativeElement ? this.nativeElement.dataRowId : undefined;
	    }
	    set dataRowId(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataRowId = value;
	        }
	    }
	    /** Specifies the data source for the Table component. This property accepts either a standard JavaScript Array or a DataAdapter instance. Using an Array allows you to provide the table data directly, while a DataAdapter offers advanced data management features such as data binding, sorting, filtering, and integration with remote data sources. For detailed information about the DataAdapter and its capabilities, visit: https://www.htmlelements.com/docs/data-adapter/
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
	    /** Configures the grid's data source settings when the dataSource property is assigned either a local data array or a remote URL. This allows the grid to properly retrieve, bind, and display data from the specified source, whether it is provided directly as an array or fetched asynchronously from a web endpoint.
	    *	Property type: TableDataSourceSettings
	    */
	    get dataSourceSettings() {
	        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	    }
	    set dataSourceSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSourceSettings = value;
	        }
	    }
	    /** Prevents users from interacting with the element, such as clicking, selecting, typing, or triggering any events. The element will appear disabled and will not respond to any user input.
	    *	Property type: { (record: any): void }
	    */
	    get dataTransform() {
	        return this.nativeElement ? this.nativeElement.dataTransform : undefined;
	    }
	    set dataTransform(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataTransform = value;
	        }
	    }
	    /** Determines whether the Table is editable. When set to true, users can modify the contents of the Table; when false, the Table is read-only and cannot be edited. This property can be used to both retrieve the current editable state and update it as needed.
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
	    /** Enables or retrieves the current state of edit mode, determining whether the component is in an editable state. When set to true, users can modify the content; when set to false, the component is read-only.
	    *	Property type: boolean
	    */
	    get editing() {
	        return this.nativeElement ? this.nativeElement.editing : undefined;
	    }
	    set editing(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editing = value;
	        }
	    }
	    /** Determines whether row hierarchies are automatically expanded when they are initially created. When this property is enabled, grouped rows or tree-structured rows in the Table will be expanded by default, allowing users to see all subgrouped data without requiring manual expansion. Use this property if you want hierarchical groups in the Table to appear open automatically when the Table is grouped or when using tree mode.
	    *	Property type: TableEditMode | string
	    */
	    get editMode() {
	        return this.nativeElement ? this.nativeElement.editMode : undefined;
	    }
	    set editMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editMode = value;
	        }
	    }
	    /** Controls whether filtering is enabled for the Table. When filtering is enabled (the default), each string and numeric column displays a filter input in the header, allowing users to filter table rows based on column values. Setting this property to false disables all filter inputs and prevents users from filtering the table data.
	    *	Property type: boolean
	    */
	    get expandHierarchy() {
	        return this.nativeElement ? this.nativeElement.expandHierarchy : undefined;
	    }
	    set expandHierarchy(value) {
	        if (this.nativeElement) {
	            this.nativeElement.expandHierarchy = value;
	        }
	    }
	    /** Determines whether the Table supports data filtering through a dedicated filter row. When enabled, users can input criteria directly into this row to dynamically filter and display matching rows in the Table. This property can be set to enable or disable the filter row feature, and can also be queried to check its current state.
	    *	Property type: boolean
	    */
	    get filtering() {
	        return this.nativeElement ? this.nativeElement.filtering : undefined;
	    }
	    set filtering(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filtering = value;
	        }
	    }
	    /** Gets or sets the filter operator for the table, determining how multiple column filters are combined. If set to 'and', all filter conditions must be met for a row to be displayed (e.g., cellValue1 && cellValue2). If set to 'or', a row is shown if it meets any one of the filter conditions (e.g., cellValue1 || cellValue2). This property controls whether filters are applied using logical 'AND' or 'OR' operations.
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
	    /** Gets or sets the ID of an HTML  element to be used as a custom filter template. This allows you to define and apply your own filter UI by referencing the specified template’s ID.
	    *	Property type: boolean
	    */
	    get filterOperator() {
	        return this.nativeElement ? this.nativeElement.filterOperator : undefined;
	    }
	    set filterOperator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterOperator = value;
	        }
	    }
	    /** Specifies or retrieves the ID of an HTML '' element whose content will be used to render the footer row(s) of the component. This allows you to define custom footer layouts using template markup and apply them dynamically by referencing the template's ID.
	    *	Property type: string
	    */
	    get filterTemplate() {
	        return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
	    }
	    set filterTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.filterTemplate = value;
	        }
	    }
	    /** Enables or disables support for Excel-style formulas as cell values. When enabled, users can enter formulas starting with the '=' sign (e.g., "=SUM(A1:A3)") directly into cells. These formulas are automatically recalculated whenever referenced cell values change. Note: This functionality requires the third-party, free 'formula-parser' plugin; be sure to include the 'formula-parser.min.js' file as a dependency in your project.
	    *	Property type: string
	    */
	    get footerRow() {
	        return this.nativeElement ? this.nativeElement.footerRow : undefined;
	    }
	    set footerRow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.footerRow = value;
	        }
	    }
	    /** Defines or retrieves whether the Table's footer remains fixed (sticky/frozen) at the bottom of the Table when scrolling vertically, ensuring it stays visible regardless of the Table's scroll position.
	    *	Property type: boolean
	    */
	    get formulas() {
	        return this.nativeElement ? this.nativeElement.formulas : undefined;
	    }
	    set formulas(value) {
	        if (this.nativeElement) {
	            this.nativeElement.formulas = value;
	        }
	    }
	    /** Sets or retrieves whether the table’s column header remains fixed (sticky) at the top of the viewport while scrolling through the table content. When enabled, the column header stays visible, improving readability for tables with many rows.
	    *	Property type: boolean
	    */
	    get freezeFooter() {
	        return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
	    }
	    set freezeFooter(value) {
	        if (this.nativeElement) {
	            this.nativeElement.freezeFooter = value;
	        }
	    }
	    /** Configures or retrieves the current state of table grouping functionality. When enabled, rows in the table can be organized into groups based on specified criteria, allowing for better data categorization and easier analysis.
	    *	Property type: boolean
	    */
	    get freezeHeader() {
	        return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	    }
	    set freezeHeader(value) {
	        if (this.nativeElement) {
	            this.nativeElement.freezeHeader = value;
	        }
	    }
	    /** Enhances customization of the element's header. This property accepts several types of values:- The 'id' of an 'HTMLElement' or 'HTMLTemplateElement', which will be used to render the header.- A function, which receives the header element of the table as its sole argument. Use this function to dynamically generate or modify the header content.- A string containing HTML markup, which will be parsed and inserted as the header.This flexibility allows you to define static, template-based, or fully dynamic headers for the element according to your application's needs.
	    *	Property type: boolean
	    */
	    get grouping() {
	        return this.nativeElement ? this.nativeElement.grouping : undefined;
	    }
	    set grouping(value) {
	        if (this.nativeElement) {
	            this.nativeElement.grouping = value;
	        }
	    }
	    /** Controls whether users can navigate through the table using keyboard inputs. When enabled, users can move between table cells, rows, or columns using keys such as Tab, Arrow keys, or other navigation shortcuts. This setting can be accessed to check the current state (enabled or disabled) or modified to turn keyboard navigation on or off for the table.
	    *	Property type: { (settings: { value: any, row: string | number, column: string, template?: any }): void }
	    */
	    get groupFormatFunction() {
	        return this.nativeElement ? this.nativeElement.groupFormatFunction : undefined;
	    }
	    set groupFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.groupFormatFunction = value;
	        }
	    }
	    /** Controls whether checkboxes are visible in the selection column. When set to true, checkboxes will be displayed, allowing users to select multiple items. When set to false, the selection column will not display checkboxes. This property can be used to programmatically toggle the visibility of checkboxes and can also be read to determine the current display state.
	    *	Property type: string | HTMLElement | Function
	    */
	    get headerRow() {
	        return this.nativeElement ? this.nativeElement.headerRow : undefined;
	    }
	    set headerRow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerRow = value;
	        }
	    }
	    /** Defines how the column settings are handled during loading, whether automatically with autoLoadState or manually with loadState. This option is relevant only if the stateSettings array includes 'columns', ensuring that column-specific state (such as order, visibility, or width) is properly managed during the state load process.
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
	    /** Defines or retrieves the unlockKey property, a unique value required to activate or authorize access to the product's features. This key is used to verify that the user is permitted to unlock and use the product.
	    *	Property type: boolean
	    */
	    get hideSelectionColumn() {
	        return this.nativeElement ? this.nativeElement.hideSelectionColumn : undefined;
	    }
	    set hideSelectionColumn(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideSelectionColumn = value;
	        }
	    }
	    /** Specifies or retrieves the currently selected language code (e.g., "en", "fr", "es") for localization purposes. This property works together with the messages property to determine which set of localized messages should be displayed or used by the application. Adjusting this property changes which language mappings from messages are active.
	    *	Property type: TableLoadColumnStateBehavior | string
	    */
	    get loadColumnStateBehavior() {
	        return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
	    }
	    set loadColumnStateBehavior(value) {
	        if (this.nativeElement) {
	            this.nativeElement.loadColumnStateBehavior = value;
	        }
	    }
	    /** Defines or retrieves an object containing key-value pairs of strings used within the element, allowing for customization and localization of displayed text. This property works together with the locale property to present the appropriate language and regional terms based on the user's locale preferences.
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
	    /** Specifies or retrieves the number of records displayed per page when paging is enabled. This property determines the size of each data page, allowing you to control how many items are shown to the user at a time.
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
	    /** Gets or sets the current page index (zero-based) when paging is enabled. This property allows you to specify or retrieve which page of data is currently being displayed, with the first page having an index of 0.
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
	    /** Determines whether paging functionality is enabled. When set to true, data is divided into discrete pages for easier navigation and viewing; when false, all data is displayed in a single, continuous view. You can use this property to enable or disable paging, or retrieve its current state.
	    *	Property type: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }
	    */
	    get onCellRender() {
	        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	    }
	    set onCellRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onCellRender = value;
	        }
	    }
	    /** Specifies or retrieves a value that determines whether the element's alignment is configured for right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew that require right-to-left font support.
	    *	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
	    */
	    get onColumnRender() {
	        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	    }
	    set onColumnRender(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onColumnRender = value;
	        }
	    }
	    /** Defines or retrieves a string template used for rendering the detail section of a row. This template enables you to display additional information beneath a master row when it is expanded. To populate the detail row with values from the master row, insert the relevant data field names within double curly brackets (e.g., {{price}}). When a user clicks on a row to expand it, the template is applied, and the placeholders are replaced with the corresponding data from that row.
	    *	Property type: { (): void }
	    */
	    get onInit() {
	        return this.nativeElement ? this.nativeElement.onInit : undefined;
	    }
	    set onInit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onInit = value;
	        }
	    }
	    /** Defines or retrieves a callback function that takes three arguments: column, filterConditions, and filterInputTemplateString. This function is responsible for generating and returning a new filter input element or template based on the specific column and the current filter conditions. Use this callback to customize how the filter input is rendered for each column in the table.
	    *	Property type: { (): void }
	    */
	    get onLoad() {
	        return this.nativeElement ? this.nativeElement.onLoad : undefined;
	    }
	    set onLoad(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onLoad = value;
	        }
	    }
	    /** Gets or sets an array containing the IDs of the currently selected rows in the Table. This property allows you to retrieve which rows are selected by their unique identifiers, or programmatically update the selection by supplying an array of row IDs.
	    *	Property type: { (): void }
	    */
	    get onUpdateComplete() {
	        return this.nativeElement ? this.nativeElement.onUpdateComplete : undefined;
	    }
	    set onUpdateComplete(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onUpdateComplete = value;
	        }
	    }
	    /** Controls whether users can select table rows using checkboxes. When enabled, checkboxes appear next to each row, allowing users to select or deselect rows. The value can be set to enable or disable this feature, or retrieved to check the current selection mode.
	    *	Property type: number
	    */
	    get pageSize() {
	        return this.nativeElement ? this.nativeElement.pageSize : undefined;
	    }
	    set pageSize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageSize = value;
	        }
	    }
	    /** Defines or retrieves the current selection mode for the component. This property is only applicable when selection functionality is enabled. Use it to specify how users can select items (e.g., single, multiple, or none).
	    *	Property type: number
	    */
	    get pageIndex() {
	        return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	    }
	    set pageIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageIndex = value;
	        }
	    }
	    /** Controls the hierarchical row selection behavior using checkboxes. When enabled, selecting a parent row automatically selects all of its child (sub) rows. Likewise, deselecting a parent row will deselect all of its sub rows. You can use this property to get the current hierarchical selection state or to enable/disable this feature.
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
	    /** Specifies the sorting behavior applied to the table, such as ascending, descending, or custom order. This setting controls how table data is organized and displayed to the user.
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
	    /** Specifies which aspects of the Table's current state can be saved (using autoSaveState or saveState) and restored (using autoLoadState or loadState). This determines which settings—such as column visibility, sorting, filters, and pagination—are included when persisting or retrieving the Table’s configuration.
	    *	Property type: string
	    */
	    get rowDetailTemplate() {
	        return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
	    }
	    set rowDetailTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rowDetailTemplate = value;
	        }
	    }
	    /** Specifies the theme used to style the element. The theme controls the overall appearance, including colors, fonts, and visual effects, ensuring a consistent look and feel across the user interface.
	    *	Property type: any
	    */
	    get onFilterRowInput() {
	        return this.nativeElement ? this.nativeElement.onFilterRowInput : undefined;
	    }
	    set onFilterRowInput(value) {
	        if (this.nativeElement) {
	            this.nativeElement.onFilterRowInput = value;
	        }
	    }
	    /** Determines whether a tooltip displaying the full, untruncated content appears when a user hovers over a table cell that contains truncated text. When enabled, hovering the mouse pointer over a cell with clipped or overflowed text will show a tooltip with the complete content; when disabled, no tooltip is displayed on hover. This setting can be used to specify or retrieve the current tooltip behavior for truncated cell content.
	    *	Property type: any[]
	    */
	    get selected() {
	        return this.nativeElement ? this.nativeElement.selected : undefined;
	    }
	    set selected(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selected = value;
	        }
	    }
	    /** Controls whether HTML virtualization is enabled. When activated, only the rows currently visible within the viewport are rendered in the DOM, rather than all rows at once. This optimization significantly improves table performance, especially when displaying large datasets, by reducing memory usage and speeding up rendering times.
	    *	Property type: boolean
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
	    *	Property type: TableSelectionMode | string
	    */
	    get selectionMode() {
	        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	    }
	    set selectionMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionMode = value;
	        }
	    }
	    /** undefined
	    *	Property type: boolean
	    */
	    get selectionByHierarchy() {
	        return this.nativeElement ? this.nativeElement.selectionByHierarchy : undefined;
	    }
	    set selectionByHierarchy(value) {
	        if (this.nativeElement) {
	            this.nativeElement.selectionByHierarchy = value;
	        }
	    }
	    /** undefined
	    *	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
	    */
	    get sort() {
	        return this.nativeElement ? this.nativeElement.sort : undefined;
	    }
	    set sort(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sort = value;
	        }
	    }
	    /** undefined
	    *	Property type: TableSortMode | string
	    */
	    get sortMode() {
	        return this.nativeElement ? this.nativeElement.sortMode : undefined;
	    }
	    set sortMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sortMode = value;
	        }
	    }
	    /** undefined
	    *	Property type: string[]
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
	    get tooltip() {
	        return this.nativeElement ? this.nativeElement.tooltip : undefined;
	    }
	    set tooltip(value) {
	        if (this.nativeElement) {
	            this.nativeElement.tooltip = value;
	        }
	    }
	    /** undefined
	    *	Property type: boolean
	    */
	    get virtualization() {
	        return this.nativeElement ? this.nativeElement.virtualization : undefined;
	    }
	    set virtualization(value) {
	        if (this.nativeElement) {
	            this.nativeElement.virtualization = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["autoLoadState", "autoSaveState", "columnGroups", "columnMinWidth", "columnReorder", "columnResize", "columnResizeNormalize", "columnResizeFeedback", "columns", "conditionalFormatting", "columnMenu", "columnSizeMode", "conditionalFormattingButton", "deferredScrollDelay", "dataRowId", "dataSource", "dataSourceSettings", "dataTransform", "disabled", "editing", "editMode", "expandHierarchy", "filtering", "filterRow", "filterOperator", "filterTemplate", "footerRow", "formulas", "freezeFooter", "freezeHeader", "grouping", "groupFormatFunction", "headerRow", "keyboardNavigation", "hideSelectionColumn", "loadColumnStateBehavior", "unlockKey", "locale", "messages", "onCellRender", "onColumnRender", "onInit", "onLoad", "onUpdateComplete", "pageSize", "pageIndex", "paging", "rightToLeft", "rowDetailTemplate", "onFilterRowInput", "selected", "selection", "selectionMode", "selectionByHierarchy", "sort", "sortMode", "stateSettings", "theme", "tooltip", "virtualization"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCellBeginEdit", "onCellClick", "onCellEndEdit", "onChange", "onCollapse", "onExpand", "onColumnClick", "onCloseColumnMenu", "onColumnResize", "onFilter", "onGroup", "onOpenColumnMenu", "onPage", "onRowBeginEdit", "onRowEndEdit", "onSort", "onCreate", "onReady"];
	    }
	    /** Inserts a new row into the data set. To use this method, provide a JSON object containing key-value pairs that represent the data for each column in the new row. Each key should correspond to a column name, and its value should specify the cell's content for that column.
	    * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
	    */
	    addRow(data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addRow(data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addRow(data);
	            });
	        }
	    }
	    /** Adds a custom filter to a specified column in the dataset, allowing you to display only the rows that meet defined criteria for that column. This function enables more precise data querying and improved data visualization by narrowing down results based on column-specific conditions.
	    * @param {string} dataField. The column's data field.
	    * @param {any} filter. FilterGroup object or a Filter expression. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
	    */
	    addFilter(dataField, filter) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addFilter(dataField, filter);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addFilter(dataField, filter);
	            });
	        }
	    }
	    /** Groups the dataset based on the unique values in a specified column, organizing the data into subsets where each group contains records sharing the same value for that column.
	    * @param {string} dataField. The column's data field.
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
	    /** Initiates an edit operation, marking the start of a sequence where changes can be made to the data or document. This typically enables features such as undo or redo by tracking all modifications performed during the editing session.
	    * @param {string | number} row. The id of the row to edit.
	    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
	    */
	    beginEdit(row, dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.beginEdit(row, dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.beginEdit(row, dataField);
	            });
	        }
	    }
	    /** Initiates an update operation by temporarily suspending all table data refreshes and rendering processes. This ensures that no visual or data changes occur until the update is completed, preventing partial renders and improving performance during batch modifications.
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
	    /** Terminates the current editing session and reverts any unsaved changes, restoring the content to its previous state before the edit began. No modifications made during this edit operation will be saved.
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
	    /** Removes all currently applied filters from the data set or view, restoring the original unfiltered state.
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
	    /** Removes any currently applied grouping from the data set, restoring the original ungrouped view.
	    */
	    clearGrouping() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearGrouping();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearGrouping();
	            });
	        }
	    }
	    /** Removes any currently selected items, resetting the selection state to none.
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
	    /** Removes any active sorting applied to the table, restoring the original order of the data. This action resets all column sort indicators and displays the table rows as they were initially loaded.
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
	    /** Collapses all expanded rows in the tree view, minimizing each parent node so that only the top-level rows remain visible. This action helps organize and simplify the display by hiding any nested child rows.
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
	    /** Collapses all expanded groups in the tree view, minimizing each group so that only their parent nodes are visible. This action hides all nested child elements within the groups, providing a cleaner and more condensed overview of the tree structure.
	    */
	    collapseAllGroups() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapseAllGroups();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapseAllGroups();
	            });
	        }
	    }
	    /** Collapses all expanded row details in the data table. Any rows that currently display additional content through a defined rowDetailTemplate will be collapsed, hiding their extra details from view. Only the main row data will remain visible after this action.
	    */
	    collapseAllRowDetails() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapseAllRowDetails();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapseAllRowDetails();
	            });
	        }
	    }
	    /** Collapses a specified group of elements, hiding its contents from view while retaining the group's header or main container visible. This action makes the group's items inaccessible until it is expanded again, improving interface organization and reducing visual clutter.
	    * @param {string} index. The group's hierarchical index.
	    */
	    collapseGroup(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.collapseGroup(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.collapseGroup(index);
	            });
	        }
	    }
	    /** Collapses the specified row in tree mode, hiding its child rows and displaying only the parent row.
	    * @param {string | number} rowId. The id of the row to collapse.
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
	    /** Prevents the selection of a specific row in the table. By default, when the 'selection' property is set to 'true', all rows are selectable. Use this option to disable row selection for individual rows as needed, overriding the global selection setting.
	    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	    */
	    disableSelect(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.disableSelect(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.disableSelect(rowId);
	            });
	        }
	    }
	    /** Restores row selection capability for a previously disabled row, typically after using the 'disableSelect' method. If the 'selection' property is set to 'true', selection is enabled for all rows by default, allowing users to select any row unless explicitly disabled.
	    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	    */
	    enableSelect(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.enableSelect(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.enableSelect(rowId);
	            });
	        }
	    }
	    /** Finalizes the current edit operation by applying and saving all changes made to the content, ensuring that modifications are committed and any unsaved edits are preserved.
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
	    /** Ends the current update operation, allowing the table to resume normal refresh and render processes. This function restores automatic table updates that may have been paused during the update, and explicitly triggers a full re-render of the table to ensure all changes are reflected in the UI.
	    * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
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
	    /** Expands all rows in the tree view, revealing every nested child element and displaying the entire hierarchical structure.
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
	    /** Expands and displays all group nodes in the tree view, revealing their child items and nested structures.
	    */
	    expandAllGroups() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandAllGroups();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandAllGroups();
	            });
	        }
	    }
	    /** Displays the detailed content for all table rows that have a rowDetailTemplate defined by expanding them simultaneously. Only rows associated with a rowDetailTemplate will show their additional details when this action is triggered; rows without a detail template remain unchanged.
	    */
	    expandAllRowDetails() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandAllRowDetails();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandAllRowDetails();
	            });
	        }
	    }
	    /** Expands a collapsible group to reveal its hidden content or child elements. This action typically changes the group's state from collapsed to expanded, making its associated items visible within the user interface.
	    * @param {string} index. The group's hierarchical index.
	    */
	    expandGroup(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.expandGroup(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.expandGroup(index);
	            });
	        }
	    }
	    /** Expands a row to reveal its child elements or sub-rows when operating in tree view mode, allowing users to browse hierarchical data structures within the table.
	    * @param {string | number} rowId. The id of the row to expand.
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
	    /** Exports the data contained within the Table component to a downloadable file format (such as CSV, Excel, or JSON), enabling users to save or process the table data outside of the application.
	    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	    * @param {string} fileName?. The name of the file to export to
	    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
	    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	    * @returns {any}
	  */
	    exportData(dataFormat, fileName, exportFiltered, callback) {
	        const result = this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
	        return result;
	    }
	    /** Returns an array containing the unique identifiers (IDs) of all currently selected rows. Each element in the array represents the ID of a row that has been selected by the user or programmatically. If no rows are selected, the array will be empty.
	    * @returns {(string | number)[]}
	  */
	    getSelection() {
	        const result = this.nativeElement.getSelection();
	        return result;
	    }
	    /** Returns the current state of the Table component as an object, including comprehensive details about the following: visible and hidden columns, expanded row keys, selected row keys, applied filters, active groupings, and the order and direction of sorted columns. This state object can be serialized, stored (e.g., in local storage or a database), and later restored by passing it to the loadState method, enabling consistent table configurations across sessions or users.
	    * @returns {any}
	  */
	    getState() {
	        const result = this.nativeElement.getState();
	        return result;
	    }
	    /** Retrieves the current value stored in a specific cell, identified by its row and column coordinates. This function returns the cell's content, which may be a number, text, or other data type, depending on the cell's contents.
	    * @param {string | number} row. The id of the cell's row.
	    * @param {string} dataField. The dataField of the cell's column.
	    * @returns {any}
	  */
	    getValue(row, dataField) {
	        const result = this.nativeElement.getValue(row, dataField);
	        return result;
	    }
	    /** Retrieves the value of a specific property from a column object. This function allows you to access detailed information or settings associated with a particular column, such as its name, data type, default value, or any custom attributes.
	    * @param {string} columnDataField. Column field name.
	    * @param {string} propertyName. Column property name.
	    * @returns {any}
	  */
	    getColumnProperty(columnDataField, propertyName) {
	        const result = this.nativeElement.getColumnProperty(columnDataField, propertyName);
	        return result;
	    }
	    /** Determines if a specified group is currently expanded and returns true if it is, or false otherwise. If the provided group index is undefined or does not correspond to a valid group, the function will also return false.
	    * @param {string} index. The group's hierarchical index.
	    * @returns {boolean}
	  */
	    isGroupExpanded(index) {
	        const result = this.nativeElement.isGroupExpanded(index);
	        return result;
	    }
	    /** Loads the current state of the Table component, restoring settings such as visible columns, expanded rows, selected rows, applied filters, grouping configurations, and column sorting order. The specific aspects of the state that are loaded depend on the options specified in the stateSettings property. This allows for a customized and persistent table experience based on user preferences or previously saved configurations.
	    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
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
	    /** Navigates the user to a specified web page or route within the application. This action typically updates the browser’s address bar and loads the corresponding content, enabling seamless transitions between different views or sections of the site. Optional parameters may include the target URL, query parameters, or navigation options such as replacing the current history entry.
	    * @param {number} pageIndex. The zero-based page index to navigate to.
	    */
	    navigateTo(pageIndex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.navigateTo(pageIndex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.navigateTo(pageIndex);
	            });
	        }
	    }
	    /** Updates the table by reloading its data and refreshing the displayed content to reflect the latest changes.
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
	    /** Clears all filters currently applied to the specified column, restoring its original, unfiltered data view.
	    * @param {string} dataField. The column's data field.
	    */
	    removeFilter(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeFilter(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeFilter(dataField);
	            });
	        }
	    }
	    /** Removes the existing grouping applied to the dataset based on the specified column, resulting in an ungrouped or flat structure with respect to that column. This operation effectively eliminates any aggregation or segmentation previously created through grouping by that column.
	    * @param {string} dataField. The column's data field.
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
	    /** Deletes a row from the data set based on the specified unique identifier (id). This operation locates the row with the matching id and removes it from the collection, ensuring the data remains consistent.
	    * @param {string | number} row. The id of the cell's row.
	    */
	    removeRow(row) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeRow(row);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeRow(row);
	            });
	        }
	    }
	    /** Resets the Table's state according to the configuration specified by the stateSettings property. This action clears stored information such as column configurations, expanded or collapsed rows, selected rows, applied filters, groupings, and sorting order. Only the aspects of state indicated by stateSettings will be reset, ensuring fine-grained control over which parts of the Table's state are cleared.
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
	    /** Persists the current state of the Table. This includes details such as column configurations, which rows are expanded or selected, any active filters, applied grouping, and the current column sort order. The specific aspects of the Table’s state that are saved depend on the options specified in the stateSettings property.
	    * @returns {any}
	  */
	    saveState() {
	        const result = this.nativeElement.saveState();
	        return result;
	    }
	    /** Allows the selection of one or more rows from a dataset or table, enabling users to perform actions on multiple rows simultaneously.
	    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	    */
	    select(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.select(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.select(rowId);
	            });
	        }
	    }
	    /** Assigns a specified value to a particular cell within a data structure, such as a table or spreadsheet. This operation updates the cell’s current content with the new value provided.
	    * @param {string | number} row. The id of the cell's row.
	    * @param {string} dataField. The dataField of the cell's column.
	    * @param {any} value. The new value of the cell.
	    */
	    setValue(row, dataField, value) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setValue(row, dataField, value);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setValue(row, dataField, value);
	            });
	        }
	    }
	    /** Sorts the Table by a column.
	    * @param {string} columnDataField. Column field name.
	    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
	    */
	    sortBy(columnDataField, sortOrder) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.sortBy(columnDataField, sortOrder);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.sortBy(columnDataField, sortOrder);
	            });
	        }
	    }
	    /** Sets a property for a database or data grid column, allowing customization of its behavior or appearance—such as its data type, visibility, default value, sorting behavior, or formatting options.
	    * @param {string} columnDataField. Column field name.
	    * @param {string} propertyName. Column property name.
	    * @param {any} propertyValue. Property value.
	    */
	    setColumnProperty(columnDataField, propertyName, propertyValue) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setColumnProperty(columnDataField, propertyName, propertyValue);
	            });
	        }
	    }
	    /** Updates an existing table row with new data. This method requires two parameters: the unique identifier (row id) of the row to be updated, and a JSON object containing the updated key-value pairs for the row's data. Only the specified fields in the JSON object will be modified; all other fields will remain unchanged.
	    * @param {string | number} rowId. The id of the row.
	    * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
	    */
	    updateRow(rowId, data) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.updateRow(rowId, data);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.updateRow(rowId, data);
	            });
	        }
	    }
	    /** Deselects one or more previously selected rows in the dataset or table, removing their active or highlighted state.
	    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
	    */
	    unselect(rowId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.unselect(rowId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.unselect(rowId);
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
	        return (React.createElement("smart-table", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Table = Table;
	exports.default = Table;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
