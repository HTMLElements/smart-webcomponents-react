
"use client";

import '../source/modules/smart.pivottable'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.pivottable');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
class PivotTable extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'PivotTable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Defines the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, setting this property to a supported value enables the corresponding animation behavior. Use this property to retrieve the current animation mode or specify the desired mode.
    *	Property type: Animation | string
    */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        if (this.nativeElement) {
            this.nativeElement.animation = value;
        }
    }
    /** Enables or retrieves the current setting that determines whether users can reorder columns, allowing columns to be rearranged via drag-and-drop or similar interactions. If enabled, columns can be moved to a new position within the layout; if disabled, the column order remains fixed.
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
    /** Provides detailed metadata for each column in the PivotTable’s underlying tabular data source. These settings define attributes such as column names, data types, and formatting options. Using this configuration and the connected data source, the PivotTable dynamically generates its actual columns, ensuring that the displayed data structure accurately reflects both the source data and the specified settings.
    *	Property type: PivotTableColumn[]
    */
    get columns() {
        return this.nativeElement ? this.nativeElement.columns : undefined;
    }
    set columns(value) {
        if (this.nativeElement) {
            this.nativeElement.columns = value;
        }
    }
    /** Controls the visibility of total columns for each pivot data point. When enabled, total columns are displayed, showing summary values for each data group. Note: All summary columns must use the same summary function (e.g., sum, average) to ensure consistent calculation of the total columns. This setting both determines whether total columns are shown and allows you to retrieve their current visibility status.
    *	Property type: boolean
    */
    get columnTotals() {
        return this.nativeElement ? this.nativeElement.columnTotals : undefined;
    }
    set columnTotals(value) {
        if (this.nativeElement) {
            this.nativeElement.columnTotals = value;
        }
    }
    /** Gets or sets the position of the total columns, which are displayed only when columnTotals is enabled. This option determines where the summary columns appear in the table, such as at the end (right side) of all columns.
    *	Property type: PivotTableColumnTotalsPosition | string
    */
    get columnTotalsPosition() {
        return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
    }
    set columnTotalsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.columnTotalsPosition = value;
        }
    }
    /** Gets or sets the conditional formatting rules that determine how the PivotTable's cells are visually styled based on their values or other criteria. This allows you to dynamically highlight, color, or format cells within the PivotTable according to specified conditions.
    *	Property type: PivotTableConditionalFormatting[]
    */
    get conditionalFormatting() {
        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
    }
    set conditionalFormatting(value) {
        if (this.nativeElement) {
            this.nativeElement.conditionalFormatting = value;
        }
    }
    /** Specifies the initial tabular data source—such as a worksheet range, table, or external database—from which the PivotTable retrieves and organizes its data. This property identifies where the PivotTable’s underlying data originates.
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
    /** Specifies or retrieves whether the original tabular data source for the PivotTable should be pre-sorted according to the columns defined with the rowGroup property, and in the same order as those columns appear. This ensures that when the PivotTable is generated, its underlying data is already organized based on the designated row groups, potentially optimizing performance and ensuring consistent grouping behavior.
    *	Property type: boolean
    */
    get defaultSortByRowGroups() {
        return this.nativeElement ? this.nativeElement.defaultSortByRowGroups : undefined;
    }
    set defaultSortByRowGroups(value) {
        if (this.nativeElement) {
            this.nativeElement.defaultSortByRowGroups = value;
        }
    }
    /** Specifies whether the PivotTable designer panel is shown together with the PivotTable. When enabled, the designer provides an interface for configuring column settings, such as rearranging or renaming columns, and applying data filters directly within the PivotTable view. This property can be set to show or hide the designer alongside the table, and can also be used to determine the current visibility state of the designer.
    *	Property type: boolean
    */
    get designer() {
        return this.nativeElement ? this.nativeElement.designer : undefined;
    }
    set designer(value) {
        if (this.nativeElement) {
            this.nativeElement.designer = value;
        }
    }
    /** Gets or sets the position of the PivotTable’s designer interface, which appears when the designer option is enabled. This property allows you to specify or retrieve where the designer UI is displayed within the application layout.
    *	Property type: PivotTableDesignerPosition | string
    */
    get designerPosition() {
        return this.nativeElement ? this.nativeElement.designerPosition : undefined;
    }
    set designerPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.designerPosition = value;
        }
    }
    /** Prevents the user from interacting with the element, disabling all mouse, keyboard, and touch inputs such as clicks, typing, and focus events. The element will not respond to any user actions while this setting is applied.
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
    /** When this option is enabled, double-clicking a PivotTable summary cell or pressing F2 will display the underlying tabular data that was used to calculate the aggregated value in that cell.
    *	Property type: boolean
    */
    get drillDown() {
        return this.nativeElement ? this.nativeElement.drillDown : undefined;
    }
    set drillDown(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDown = value;
        }
    }
    /** Displays an export button within the drill-down dialog when this option is enabled, allowing users to export data directly from the dialog.
    *	Property type: PivotTableDrillDownDataExport | string
    */
    get drillDownDataExport() {
        return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
    }
    set drillDownDataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDownDataExport = value;
        }
    }
    /** Specifies or retrieves the file name used when exporting data from the drill-down table. This determines the default name of the exported file generated during the export operation.
    *	Property type: string
    */
    get drillDownDataExportName() {
        return this.nativeElement ? this.nativeElement.drillDownDataExportName : undefined;
    }
    set drillDownDataExportName(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDownDataExportName = value;
        }
    }
    /** Determines whether column-based sorting is enabled or disabled when using the classic row groups layout mode. When enabled, users can sort data within each column in the classic row grouping layout. This property can be used to either retrieve the current sorting status or set a new value.
    *	Property type: { (table: HTMLElement ): void }
    */
    get drillDownTableInit() {
        return this.nativeElement ? this.nativeElement.drillDownTableInit : undefined;
    }
    set drillDownTableInit(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDownTableInit = value;
        }
    }
    /** Determines whether the column headers in the PivotTable remain visible (sticky/frozen) at the top of the view when the user scrolls vertically. Setting this property to true keeps the column headers fixed in place, while false allows them to scroll out of view. This property can be used to set or retrieve the current sticky/frozen state of the PivotTable’s column headers.
    *	Property type: { (originalRecords: [] ): void }
    */
    get drillDownCustomAction() {
        return this.nativeElement ? this.nativeElement.drillDownCustomAction : undefined;
    }
    set drillDownCustomAction(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDownCustomAction = value;
        }
    }
    /** Specifies whether to display a Grand Total row that aggregates the values of all data rows. When enabled, this option will add a summary row at the bottom of the data set, showing the total or combined values for each relevant column. Can also be used to retrieve the current setting.
    *	Property type: boolean
    */
    get enableSortByRowGroups() {
        return this.nativeElement ? this.nativeElement.enableSortByRowGroups : undefined;
    }
    set enableSortByRowGroups(value) {
        if (this.nativeElement) {
            this.nativeElement.enableSortByRowGroups = value;
        }
    }
    /** Defines or retrieves how nested rows—determined by the specified rowGroup columns—are visually organized and displayed within the grid. This setting controls the appearance and structure of hierarchical row groupings.
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
    /** Determines whether the tooltip displaying detailed information is shown or hidden when multiple summary cells, each containing non-null values, are selected. When enabled, the tooltip with details will be suppressed; when disabled, the tooltip will appear as usual. This property can be set to control the tooltip's visibility or retrieved to check its current state.
    *	Property type: { (column: PivotTableColumn): string }
    */
    get getDefaultSummaryFunction() {
        return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
    }
    set getDefaultSummaryFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.getDefaultSummaryFunction = value;
        }
    }
    /** Specifies whether rows containing only 0 or null values should be hidden or displayed. This setting is only effective when one or more rowGroup columns are defined. Use this property to control the visibility of empty or zero-value rows within grouped data.
    *	Property type: boolean
    */
    get grandTotal() {
        return this.nativeElement ? this.nativeElement.grandTotal : undefined;
    }
    set grandTotal(value) {
        if (this.nativeElement) {
            this.nativeElement.grandTotal = value;
        }
    }
    /** Enables or retrieves the setting that determines whether users can navigate the PivotTable using keyboard shortcuts or arrow keys. When enabled, keyboard navigation allows users to move between cells, fields, and items within the PivotTable, enhancing accessibility and ease of use.
    *	Property type: PivotTableGroupLayout | string
    */
    get groupLayout() {
        return this.nativeElement ? this.nativeElement.groupLayout : undefined;
    }
    set groupLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.groupLayout = value;
        }
    }
    /** Sets or retrieves the unlockKey property, a unique code or token required to access and activate the product’s full functionality.
    *	Property type: boolean
    */
    get hideCellSelectionTooltip() {
        return this.nativeElement ? this.nativeElement.hideCellSelectionTooltip : undefined;
    }
    set hideCellSelectionTooltip(value) {
        if (this.nativeElement) {
            this.nativeElement.hideCellSelectionTooltip = value;
        }
    }
    /** Specifies or retrieves the current language code for the component. This property determines which set of localized messages from the messages object will be used for display. Changing the language automatically updates all text and labels according to the selected locale.
    *	Property type: boolean
    */
    get hideEmptyRows() {
        return this.nativeElement ? this.nativeElement.hideEmptyRows : undefined;
    }
    set hideEmptyRows(value) {
        if (this.nativeElement) {
            this.nativeElement.hideEmptyRows = value;
        }
    }
    /** Defines or retrieves an object containing the localized strings used within the element's user interface. This object allows you to customize text elements (such as labels, messages, or tooltips) in different languages. This property works together with the locale property to display the appropriate translations based on the selected or active locale.
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
    /** Specifies the value to display in cells that lack aggregated data. When set, this value will be shown in any cell where there is no aggregation result available. By default (null), these cells will appear empty. Setting a custom value (such as "N/A" or 0) allows you to indicate explicitly that no data is present in those cells.
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
    /** Specifies or retrieves the number of items displayed per page when paging is enabled. This property determines the page size, allowing you to control how many records are shown on each paginated view.
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
    /** Sets or retrieves the current page index, using a zero-based numbering system (i.e., the first page is index 0). This property is applicable only when paging is enabled, allowing navigation between different pages of content.
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
    /** Gets or sets a value indicating whether paging functionality is enabled, allowing data to be divided and displayed across multiple pages.
    *	Property type: number
    */
    get nullDefaultValue() {
        return this.nativeElement ? this.nativeElement.nullDefaultValue : undefined;
    }
    set nullDefaultValue(value) {
        if (this.nativeElement) {
            this.nativeElement.nullDefaultValue = value;
        }
    }
    /** Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages—such as Arabic or Hebrew—by adapting the layout and text flow accordingly. This property ensures that the element properly displays content for users whose locale requires RTL formatting.
    *	Property type: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }
    */
    get onCellRender() {
        return this.nativeElement ? this.nativeElement.onCellRender : undefined;
    }
    set onCellRender(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellRender = value;
        }
    }
    /** Determines whether sorting by row is enabled when a row group cell is clicked. If columnTotals is also enabled, sorting will be applied within each "column group" individually. If columnTotals is not enabled, sorting will be applied across all columns together. This property can be used to both retrieve the current sorting behavior and to enable or disable sorting by row group interactions.
    *	Property type: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }
    */
    get onColumnRender() {
        return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
    }
    set onColumnRender(value) {
        if (this.nativeElement) {
            this.nativeElement.onColumnRender = value;
        }
    }
    /** Controls whether row summaries appear in the row headers. When set to true, row headers display summarized information such as "Peterson(40)" (indicating a summary value). When set to false, row headers show only the row label, like "Peterson", without any summary details. Use this option to toggle the visibility of summary data in your row headers.
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
    /** Determines whether to display row total columns alongside each summary column. When enabled, this option will show an additional column for each summary column, presenting the total value for each row. You can use this property to enable (show) or disable (hide) row total columns as needed.
    *	Property type: PivotTablePageSize | string
    */
    get pageSize() {
        return this.nativeElement ? this.nativeElement.pageSize : undefined;
    }
    set pageSize(value) {
        if (this.nativeElement) {
            this.nativeElement.pageSize = value;
        }
    }
    /** Sets or retrieves the position of row total columns within the table. This option determines where the columns displaying the total values for each row will appear when the rowTotals feature is enabled. Adjusting this setting allows you to control whether the row totals are displayed at the beginning, end, or a specific location among the table columns.
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
    /** Determines whether users can select table rows using checkboxes. When enabled, a checkbox appears next to each row, allowing selection. This property can be used to enable or check the current state of row selection functionality.
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
    /** Specifies or retrieves the selection mode for the component. This property is effective only when the selection feature is enabled. When disabled, changing or accessing the selection mode has no effect.
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
    /** Specifies the sorting mode applied to the PivotTable, controlling how data rows or columns are ordered (e.g., ascending, descending, or custom criteria). This setting determines the sequence in which PivotTable items are displayed based on the selected sort option.
    *	Property type: boolean
    */
    get rowSort() {
        return this.nativeElement ? this.nativeElement.rowSort : undefined;
    }
    set rowSort(value) {
        if (this.nativeElement) {
            this.nativeElement.rowSort = value;
        }
    }
    /** Specifies the theme applied to the element. The theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel throughout the element.
    *	Property type: boolean
    */
    get rowSummary() {
        return this.nativeElement ? this.nativeElement.rowSummary : undefined;
    }
    set rowSummary(value) {
        if (this.nativeElement) {
            this.nativeElement.rowSummary = value;
        }
    }
    /** Controls the visibility of the PivotTable toolbar. When displayed, the toolbar includes two breadcrumb components that enable users to modify the row groups and pivot columns directly. It also features "Conditional Formatting" and "Fields" buttons, each of which opens a dialog for configuring additional PivotTable settings.
    *	Property type: boolean
    */
    get rowTotals() {
        return this.nativeElement ? this.nativeElement.rowTotals : undefined;
    }
    set rowTotals(value) {
        if (this.nativeElement) {
            this.nativeElement.rowTotals = value;
        }
    }
    /** Determines whether a tooltip displaying the full content will appear when hovering over a table cell with truncated (overflowing) content. When enabled, users can view the entire cell content by hovering their mouse over the truncated cell. This property can be set to enable or disable this tooltip behavior and can also be used to check its current status.
    *	Property type: PivotTableRowTotalsPosition | string
    */
    get rowTotalsPosition() {
        return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
    }
    set rowTotalsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.rowTotalsPosition = value;
        }
    }
    /** undefined
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
    *	Property type: PivotTableSelectionMode | string
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
    *	Property type: PivotTableSortMode | string
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
    get toolbar() {
        return this.nativeElement ? this.nativeElement.toolbar : undefined;
    }
    set toolbar(value) {
        if (this.nativeElement) {
            this.nativeElement.toolbar = value;
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
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "columnReorder", "columns", "columnTotals", "columnTotalsPosition", "conditionalFormatting", "dataSource", "defaultSortByRowGroups", "designer", "designerPosition", "disabled", "drillDown", "drillDownDataExport", "drillDownDataExportName", "drillDownTableInit", "drillDownCustomAction", "enableSortByRowGroups", "freezeHeader", "getDefaultSummaryFunction", "grandTotal", "groupLayout", "hideCellSelectionTooltip", "hideEmptyRows", "keyboardNavigation", "unlockKey", "locale", "messages", "nullDefaultValue", "onCellRender", "onColumnRender", "onInit", "pageSize", "pageIndex", "paging", "rightToLeft", "rowSort", "rowSummary", "rowTotals", "rowTotalsPosition", "selection", "selectionMode", "sortMode", "theme", "toolbar", "tooltip"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCellClick", "onChange", "onColumnClick", "onCollapse", "onCollapseTotalColumn", "onExpand", "onExpandTotalColumn", "onFilter", "onSort", "onCreate", "onReady"];
    }
    /** Applies a filter to a designated column, enabling users to display only the rows that meet specified criteria within that column. This helps refine and customize the data view according to user-defined conditions.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
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
    /** Removes all currently applied filters from the data set, resetting the view to display unfiltered results.
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
    /** Removes any currently selected items or text, resetting the selection state to none.
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
    /** Removes any applied sorting from the PivotTable, restoring the original item order based on the data source’s default arrangement.
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
    /** Collapses all rows within the table, minimizing the display of all grouped row sections when multiple row groups are present. This action hides the contents of each group, showing only the group headers or summary rows.
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
    /** Collapses a row within a table that has multiple row groups, hiding its detailed content and displaying only the summary or header for that group. This action helps to organize and condense complex tables for easier navigation and viewing.
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
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
    /** Expands all rows in the data grid, including those within multiple row groups, allowing users to view every row regardless of group hierarchy or nesting.
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
    /** Expands a specific row within the table, allowing additional content or details to be displayed, when multiple row groups are present. This function helps users view more information for a selected row without collapsing the grouping structure.
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
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
    /** Exports all data from the PivotTable in a structured format, allowing for further analysis, reporting, or use in external applications.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat, fileName, callback) {
        const result = this.nativeElement.exportData(dataFormat, fileName, callback);
        return result;
    }
    /** Returns an array of the currently active dynamic pivot columns, reflecting the fields that have been selected or computed for pivoting in the current view or dataset. This allows developers to access and manipulate the current pivot configuration programmatically.
    * @returns {any}
  */
    getDynamicColumns() {
        const result = this.nativeElement.getDynamicColumns();
        return result;
    }
    /** Returns an array representing the current selection within the grid, based on the specified selectionMode:- When selectionMode is set to 'many' or 'extended', the array contains the IDs of all selected rows.- When selectionMode is set to 'cell', the array contains objects with details about each selected cell (such as row and column identifiers).The structure of the returned array adapts dynamically to match the current selection mode.
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection() {
        const result = this.nativeElement.getSelection();
        return result;
    }
    /** Updates the PivotTable data and recalculates all its values, ensuring that any changes in the underlying data source are reflected in the PivotTable’s current view.
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
    /** Removes all active filters from a specified column, restoring the column to display its full, unfiltered dataset.
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
    /** Enables selection of rows or cells within the data grid, depending on the specified selectionMode:- When selectionMode is set to 'many' or 'extended', this function allows for the selection of one or multiple rows.- When selectionMode is set to 'cell' and a second argument is provided, it allows for the selection of a single cell instead of an entire row.Use the appropriate selectionMode and arguments to control whether users can select individual rows, multiple rows, or specific cells within the grid.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
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
    /** Sorts the data based on the values in a summary or grouping column, allowing you to organize records according to aggregated results or group identifiers.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDefinition, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDefinition, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDefinition, sortOrder);
            });
        }
    }
    /** Deselects one or more rows when selectionMode is set to 'many' or 'extended'. Alternatively, if selectionMode is 'cell' and a second argument specifying the target cell is provided, this method will deselect the specified cell. This allows for flexible unselection behavior depending on the current selection mode and provided arguments.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
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
        return (React.createElement("smart-pivot-table", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { PivotTable, Smart, PivotTable as default };
