import React from "react";
import { PivotTableProperties } from "./../index";
import { Animation, PivotTableColumnTotalsPosition, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting } from './../index';
export { PivotTableProperties } from "./../index";
export { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableDrillDownDataExport, PivotTableGroupLayout, PivotTablePageSize, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting } from './../index';
declare let Smart: any;
export { Smart };
export interface PivotTableProps extends PivotTableProperties {
    className?: string;
    style?: React.CSSProperties;
    onCellClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onCollapseTotalColumn?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onExpandTotalColumn?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
export declare class PivotTable extends React.Component<React.HTMLAttributes<Element> & PivotTableProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Defines the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, setting this property to a supported value enables the corresponding animation behavior. Use this property to retrieve the current animation mode or specify the desired mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Enables or retrieves the current setting that determines whether users can reorder columns, allowing columns to be rearranged via drag-and-drop or similar interactions. If enabled, columns can be moved to a new position within the layout; if disabled, the column order remains fixed.
    *	Property type: boolean
    */
    get columnReorder(): boolean;
    set columnReorder(value: boolean);
    /** Provides detailed metadata for each column in the PivotTable’s underlying tabular data source. These settings define attributes such as column names, data types, and formatting options. Using this configuration and the connected data source, the PivotTable dynamically generates its actual columns, ensuring that the displayed data structure accurately reflects both the source data and the specified settings.
    *	Property type: PivotTableColumn[]
    */
    get columns(): PivotTableColumn[];
    set columns(value: PivotTableColumn[]);
    /** Controls the visibility of total columns for each pivot data point. When enabled, total columns are displayed, showing summary values for each data group. Note: All summary columns must use the same summary function (e.g., sum, average) to ensure consistent calculation of the total columns. This setting both determines whether total columns are shown and allows you to retrieve their current visibility status.
    *	Property type: boolean
    */
    get columnTotals(): boolean;
    set columnTotals(value: boolean);
    /** Gets or sets the position of the total columns, which are displayed only when columnTotals is enabled. This option determines where the summary columns appear in the table, such as at the end (right side) of all columns.
    *	Property type: PivotTableColumnTotalsPosition | string
    */
    get columnTotalsPosition(): PivotTableColumnTotalsPosition | string;
    set columnTotalsPosition(value: PivotTableColumnTotalsPosition | string);
    /** Gets or sets the conditional formatting rules that determine how the PivotTable's cells are visually styled based on their values or other criteria. This allows you to dynamically highlight, color, or format cells within the PivotTable according to specified conditions.
    *	Property type: PivotTableConditionalFormatting[]
    */
    get conditionalFormatting(): PivotTableConditionalFormatting[];
    set conditionalFormatting(value: PivotTableConditionalFormatting[]);
    /** Specifies the initial tabular data source—such as a worksheet range, table, or external database—from which the PivotTable retrieves and organizes its data. This property identifies where the PivotTable’s underlying data originates.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Specifies or retrieves whether the original tabular data source for the PivotTable should be pre-sorted according to the columns defined with the rowGroup property, and in the same order as those columns appear. This ensures that when the PivotTable is generated, its underlying data is already organized based on the designated row groups, potentially optimizing performance and ensuring consistent grouping behavior.
    *	Property type: boolean
    */
    get defaultSortByRowGroups(): boolean;
    set defaultSortByRowGroups(value: boolean);
    /** Specifies whether the PivotTable designer panel is shown together with the PivotTable. When enabled, the designer provides an interface for configuring column settings, such as rearranging or renaming columns, and applying data filters directly within the PivotTable view. This property can be set to show or hide the designer alongside the table, and can also be used to determine the current visibility state of the designer.
    *	Property type: boolean
    */
    get designer(): boolean;
    set designer(value: boolean);
    /** Gets or sets the position of the PivotTable’s designer interface, which appears when the designer option is enabled. This property allows you to specify or retrieve where the designer UI is displayed within the application layout.
    *	Property type: PivotTableDesignerPosition | string
    */
    get designerPosition(): PivotTableDesignerPosition | string;
    set designerPosition(value: PivotTableDesignerPosition | string);
    /** Prevents the user from interacting with the element, disabling all mouse, keyboard, and touch inputs such as clicks, typing, and focus events. The element will not respond to any user actions while this setting is applied.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** When this option is enabled, double-clicking a PivotTable summary cell or pressing F2 will display the underlying tabular data that was used to calculate the aggregated value in that cell.
    *	Property type: boolean
    */
    get drillDown(): boolean;
    set drillDown(value: boolean);
    /** Displays an export button within the drill-down dialog when this option is enabled, allowing users to export data directly from the dialog.
    *	Property type: PivotTableDrillDownDataExport | string
    */
    get drillDownDataExport(): PivotTableDrillDownDataExport | string;
    set drillDownDataExport(value: PivotTableDrillDownDataExport | string);
    /** Specifies or retrieves the file name used when exporting data from the drill-down table. This determines the default name of the exported file generated during the export operation.
    *	Property type: string
    */
    get drillDownDataExportName(): string;
    set drillDownDataExportName(value: string);
    /** Determines whether column-based sorting is enabled or disabled when using the classic row groups layout mode. When enabled, users can sort data within each column in the classic row grouping layout. This property can be used to either retrieve the current sorting status or set a new value.
    *	Property type: { (table: HTMLElement ): void }
    */
    get drillDownTableInit(): {
        (table: HTMLElement): void;
    };
    set drillDownTableInit(value: {
        (table: HTMLElement): void;
    });
    /** Determines whether the column headers in the PivotTable remain visible (sticky/frozen) at the top of the view when the user scrolls vertically. Setting this property to true keeps the column headers fixed in place, while false allows them to scroll out of view. This property can be used to set or retrieve the current sticky/frozen state of the PivotTable’s column headers.
    *	Property type: { (originalRecords: [] ): void }
    */
    get drillDownCustomAction(): {
        (originalRecords: []): void;
    };
    set drillDownCustomAction(value: {
        (originalRecords: []): void;
    });
    /** Specifies whether to display a Grand Total row that aggregates the values of all data rows. When enabled, this option will add a summary row at the bottom of the data set, showing the total or combined values for each relevant column. Can also be used to retrieve the current setting.
    *	Property type: boolean
    */
    get enableSortByRowGroups(): boolean;
    set enableSortByRowGroups(value: boolean);
    /** Defines or retrieves how nested rows—determined by the specified rowGroup columns—are visually organized and displayed within the grid. This setting controls the appearance and structure of hierarchical row groupings.
    *	Property type: boolean
    */
    get freezeHeader(): boolean;
    set freezeHeader(value: boolean);
    /** Determines whether the tooltip displaying detailed information is shown or hidden when multiple summary cells, each containing non-null values, are selected. When enabled, the tooltip with details will be suppressed; when disabled, the tooltip will appear as usual. This property can be set to control the tooltip's visibility or retrieved to check its current state.
    *	Property type: { (column: PivotTableColumn): string }
    */
    get getDefaultSummaryFunction(): {
        (column: PivotTableColumn): string;
    };
    set getDefaultSummaryFunction(value: {
        (column: PivotTableColumn): string;
    });
    /** Specifies whether rows containing only 0 or null values should be hidden or displayed. This setting is only effective when one or more rowGroup columns are defined. Use this property to control the visibility of empty or zero-value rows within grouped data.
    *	Property type: boolean
    */
    get grandTotal(): boolean;
    set grandTotal(value: boolean);
    /** Enables or retrieves the setting that determines whether users can navigate the PivotTable using keyboard shortcuts or arrow keys. When enabled, keyboard navigation allows users to move between cells, fields, and items within the PivotTable, enhancing accessibility and ease of use.
    *	Property type: PivotTableGroupLayout | string
    */
    get groupLayout(): PivotTableGroupLayout | string;
    set groupLayout(value: PivotTableGroupLayout | string);
    /** Sets or retrieves the unlockKey property, a unique code or token required to access and activate the product’s full functionality.
    *	Property type: boolean
    */
    get hideCellSelectionTooltip(): boolean;
    set hideCellSelectionTooltip(value: boolean);
    /** Specifies or retrieves the current language code for the component. This property determines which set of localized messages from the messages object will be used for display. Changing the language automatically updates all text and labels according to the selected locale.
    *	Property type: boolean
    */
    get hideEmptyRows(): boolean;
    set hideEmptyRows(value: boolean);
    /** Defines or retrieves an object containing the localized strings used within the element's user interface. This object allows you to customize text elements (such as labels, messages, or tooltips) in different languages. This property works together with the locale property to display the appropriate translations based on the selected or active locale.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Specifies the value to display in cells that lack aggregated data. When set, this value will be shown in any cell where there is no aggregation result available. By default (null), these cells will appear empty. Setting a custom value (such as "N/A" or 0) allows you to indicate explicitly that no data is present in those cells.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the number of items displayed per page when paging is enabled. This property determines the page size, allowing you to control how many records are shown on each paginated view.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or retrieves the current page index, using a zero-based numbering system (i.e., the first page is index 0). This property is applicable only when paging is enabled, allowing navigation between different pages of content.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets or sets a value indicating whether paging functionality is enabled, allowing data to be divided and displayed across multiple pages.
    *	Property type: number
    */
    get nullDefaultValue(): number;
    set nullDefaultValue(value: number);
    /** Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages—such as Arabic or Hebrew—by adapting the layout and text flow accordingly. This property ensures that the element properly displays content for users whose locale requires RTL formatting.
    *	Property type: { (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void }
    */
    get onCellRender(): {
        (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void;
    };
    set onCellRender(value: {
        (data: any, dynamicColumn: any, value: any, cell: HTMLTableCellElement): void;
    });
    /** Determines whether sorting by row is enabled when a row group cell is clicked. If columnTotals is also enabled, sorting will be applied within each "column group" individually. If columnTotals is not enabled, sorting will be applied across all columns together. This property can be used to both retrieve the current sorting behavior and to enable or disable sorting by row group interactions.
    *	Property type: { (settings: { text: string, cell: HTMLTableCellElement, column: PivotTableColumn, fullDefinition: any }): void }
    */
    get onColumnRender(): {
        (settings: {
            text: string;
            cell: HTMLTableCellElement;
            column: PivotTableColumn;
            fullDefinition: any;
        }): void;
    };
    set onColumnRender(value: {
        (settings: {
            text: string;
            cell: HTMLTableCellElement;
            column: PivotTableColumn;
            fullDefinition: any;
        }): void;
    });
    /** Controls whether row summaries appear in the row headers. When set to true, row headers display summarized information such as "Peterson(40)" (indicating a summary value). When set to false, row headers show only the row label, like "Peterson", without any summary details. Use this option to toggle the visibility of summary data in your row headers.
    *	Property type: { (): void }
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Determines whether to display row total columns alongside each summary column. When enabled, this option will show an additional column for each summary column, presenting the total value for each row. You can use this property to enable (show) or disable (hide) row total columns as needed.
    *	Property type: PivotTablePageSize | string
    */
    get pageSize(): PivotTablePageSize | string;
    set pageSize(value: PivotTablePageSize | string);
    /** Sets or retrieves the position of row total columns within the table. This option determines where the columns displaying the total values for each row will appear when the rowTotals feature is enabled. Adjusting this setting allows you to control whether the row totals are displayed at the beginning, end, or a specific location among the table columns.
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Determines whether users can select table rows using checkboxes. When enabled, a checkbox appears next to each row, allowing selection. This property can be used to enable or check the current state of row selection functionality.
    *	Property type: boolean
    */
    get paging(): boolean;
    set paging(value: boolean);
    /** Specifies or retrieves the selection mode for the component. This property is effective only when the selection feature is enabled. When disabled, changing or accessing the selection mode has no effect.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the sorting mode applied to the PivotTable, controlling how data rows or columns are ordered (e.g., ascending, descending, or custom criteria). This setting determines the sequence in which PivotTable items are displayed based on the selected sort option.
    *	Property type: boolean
    */
    get rowSort(): boolean;
    set rowSort(value: boolean);
    /** Specifies the theme applied to the element. The theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent look and feel throughout the element.
    *	Property type: boolean
    */
    get rowSummary(): boolean;
    set rowSummary(value: boolean);
    /** Controls the visibility of the PivotTable toolbar. When displayed, the toolbar includes two breadcrumb components that enable users to modify the row groups and pivot columns directly. It also features "Conditional Formatting" and "Fields" buttons, each of which opens a dialog for configuring additional PivotTable settings.
    *	Property type: boolean
    */
    get rowTotals(): boolean;
    set rowTotals(value: boolean);
    /** Determines whether a tooltip displaying the full content will appear when hovering over a table cell with truncated (overflowing) content. When enabled, users can view the entire cell content by hovering their mouse over the truncated cell. This property can be set to enable or disable this tooltip behavior and can also be used to check its current status.
    *	Property type: PivotTableRowTotalsPosition | string
    */
    get rowTotalsPosition(): PivotTableRowTotalsPosition | string;
    set rowTotalsPosition(value: PivotTableRowTotalsPosition | string);
    /** undefined
    *	Property type: boolean
    */
    get selection(): boolean;
    set selection(value: boolean);
    /** undefined
    *	Property type: PivotTableSelectionMode | string
    */
    get selectionMode(): PivotTableSelectionMode | string;
    set selectionMode(value: PivotTableSelectionMode | string);
    /** undefined
    *	Property type: PivotTableSortMode | string
    */
    get sortMode(): PivotTableSortMode | string;
    set sortMode(value: PivotTableSortMode | string);
    /** undefined
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** undefined
    *	Property type: boolean
    */
    get toolbar(): boolean;
    set toolbar(value: boolean);
    /** undefined
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever a user clicks on a cell within the component. It provides details about the clicked cell, such as its row and column indices, allowing developers to handle cell-specific actions in response to user interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's dynamic column.
    *   row - The data of the cell's row.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user modifies the current selection, such as highlighting a different portion of text or choosing a new option within a selectable element. It allows you to respond in real time to changes in selection state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user clicks on the header cell of a summary column. It allows you to handle custom actions or logic in response to the user's interaction with the summary column header.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
    *   columnDefinition - An object detailing the clicked dynamic column.
    *   dataField - The data field of the cell's original column.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row within the data table is collapsed by the user, indicating that its expanded content or details are now hidden. It allows you to execute custom logic whenever a previously expanded row is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the collapsed row.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a total column in the data grid is collapsed by the user, signaling that the column’s aggregated summary view has been hidden from display. This allows you to perform custom actions in response to the collapsing of a total column, such as updating UI elements or recalculating totals.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the collapsed total column.
    */
    onCollapseTotalColumn?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user expands a row, typically to reveal additional details or a nested view associated with that row. It signals that the row has transitioned from a collapsed to an expanded state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user expands a total column, typically to reveal underlying details or subrows associated with that column. It allows you to respond to the expansion action, such as loading additional data or updating the user interface accordingly.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the expanded total column.
    */
    onExpandTotalColumn?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user performs an action that initiates, modifies, or removes any filter within the application. It provides an opportunity to respond to changes in filter settings, such as applying, updating, or clearing filters on displayed data or content.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a column header cell within a table or grid. It typically occurs during user interactions such as sorting or selecting columns, making it useful for implementing custom behaviors in response to column header clicks. The event includes relevant details about the column that was clicked, allowing developers to identify and handle specific columns as needed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
    *   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Applies a filter to a designated column, enabling users to display only the rows that meet specified criteria within that column. This helps refine and customize the data view according to user-defined conditions.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** Removes all currently applied filters from the data set, resetting the view to display unfiltered results.
    */
    clearFilters(): void;
    /** Removes any currently selected items or text, resetting the selection state to none.
    */
    clearSelection(): void;
    /** Removes any applied sorting from the PivotTable, restoring the original item order based on the data source’s default arrangement.
    */
    clearSort(): void;
    /** Collapses all rows within the table, minimizing the display of all grouped row sections when multiple row groups are present. This action hides the contents of each group, showing only the group headers or summary rows.
    */
    collapseAllRows(): void;
    /** Collapses a row within a table that has multiple row groups, hiding its detailed content and displaying only the summary or header for that group. This action helps to organize and condense complex tables for easier navigation and viewing.
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
    */
    collapseRow(rowId: string | number): void;
    /** Expands all rows in the data grid, including those within multiple row groups, allowing users to view every row regardless of group hierarchy or nesting.
    */
    expandAllRows(): void;
    /** Expands a specific row within the table, allowing additional content or details to be displayed, when multiple row groups are present. This function helps users view more information for a selected row without collapsing the grouping structure.
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
    */
    expandRow(rowId: string | number): void;
    /** Exports all data from the PivotTable in a structured format, allowing for further analysis, reporting, or use in external applications.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName: string, callback?: Function): any;
    /** Returns an array of the currently active dynamic pivot columns, reflecting the fields that have been selected or computed for pivoting in the current view or dataset. This allows developers to access and manipulate the current pivot configuration programmatically.
    * @returns {any}
  */
    getDynamicColumns(): any;
    /** Returns an array representing the current selection within the grid, based on the specified selectionMode:- When selectionMode is set to 'many' or 'extended', the array contains the IDs of all selected rows.- When selectionMode is set to 'cell', the array contains objects with details about each selected cell (such as row and column identifiers).The structure of the returned array adapts dynamically to match the current selection mode.
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection(): any;
    /** Updates the PivotTable data and recalculates all its values, ensuring that any changes in the underlying data source are reflected in the PivotTable’s current view.
    */
    refresh(): void;
    /** Removes all active filters from a specified column, restoring the column to display its full, unfiltered dataset.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** Enables selection of rows or cells within the data grid, depending on the specified selectionMode:- When selectionMode is set to 'many' or 'extended', this function allows for the selection of one or multiple rows.- When selectionMode is set to 'cell' and a second argument is provided, it allows for the selection of a single cell instead of an entire row.Use the appropriate selectionMode and arguments to control whether users can select individual rows, multiple rows, or specific cells within the grid.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    select(rowId: string | number | (string | number)[], dataField?: string): void;
    /** Sorts the data based on the values in a summary or grouping column, allowing you to organize records according to aggregated results or group identifiers.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDefinition: any, sortOrder?: string): void;
    /** Deselects one or more rows when selectionMode is set to 'many' or 'extended'. Alternatively, if selectionMode is 'cell' and a second argument specifying the target cell is provided, this method will deselect the specified cell. This allows for flexible unselection behavior depending on the current selection mode and provided arguments.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    unselect(rowId: string | number | (string | number)[], dataField?: string): void;
    /** Sets the locale of a component.
    * @param {string} locale. The locale abbreviation. For example: 'de'.
    * @param {any} messages?. Object containing the locale messages.
    */
    setLocale(locale: string, messages?: any): void;
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
export default PivotTable;
