import React from "react";
import { PivotTableProperties } from "./../index";
import { Animation, PivotTableColumnTotalsPosition, PivotTableDesignerPosition, PivotTableGroupLayout, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting } from './../index';
export { PivotTableProperties } from "./../index";
export { Animation, PivotTableColumnAlign, PivotTableColumnDataType, PivotTableColumnSummary, PivotTableColumnTotalsPosition, PivotTableConditionalFormattingCondition, PivotTableConditionalFormattingFontFamily, PivotTableConditionalFormattingFontSize, PivotTableDesignerPosition, PivotTableGroupLayout, PivotTableRowTotalsPosition, PivotTableSelectionMode, PivotTableSortMode, PivotTableColumn, PivotTableConditionalFormatting } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets whether the reordering of columns is enabled.
    *	Property type: boolean
    */
    get columnReorder(): boolean;
    set columnReorder(value: boolean);
    /** Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated.
    *	Property type: PivotTableColumn[]
    */
    get columns(): PivotTableColumn[];
    set columns(value: PivotTableColumn[]);
    /** Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated.
    *	Property type: boolean
    */
    get columnTotals(): boolean;
    set columnTotals(value: boolean);
    /** Sets or gets the position of total columns (shown when columnTotals is enabled).
    *	Property type: PivotTableColumnTotalsPosition
    */
    get columnTotalsPosition(): PivotTableColumnTotalsPosition;
    set columnTotalsPosition(value: PivotTableColumnTotalsPosition);
    /** Sets or gets details about conditional formatting to be applied to the PivotTable's cells.
    *	Property type: PivotTableConditionalFormatting[]
    */
    get conditionalFormatting(): PivotTableConditionalFormatting[];
    set conditionalFormatting(value: PivotTableConditionalFormatting[]);
    /** Determines the original tabular data source of the PivotTable.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order).
    *	Property type: boolean
    */
    get defaultSortByRowGroups(): boolean;
    set defaultSortByRowGroups(value: boolean);
    /** Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering.
    *	Property type: boolean
    */
    get designer(): boolean;
    set designer(value: boolean);
    /** Sets or gets the position of the PivotTable's designer (shown when designer is enabled).
    *	Property type: PivotTableDesignerPosition
    */
    get designerPosition(): PivotTableDesignerPosition;
    set designerPosition(value: PivotTableDesignerPosition);
    /** Disables the interaction with the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed.
    *	Property type: boolean
    */
    get drillDown(): boolean;
    set drillDown(value: boolean);
    /** Sets or gets whether the PivotTable's column header is sticky/frozen.
    *	Property type: boolean
    */
    get freezeHeader(): boolean;
    set freezeHeader(value: boolean);
    /** A callback function that returns the default summary function of a summary column when it is dynamically assigned as such (e.g. by drag-drop in the designer).
    *	Property type: { (column: PivotTableColumn): string }
    */
    get getDefaultSummaryFunction(): {
        (column: PivotTableColumn): string;
    };
    set getDefaultSummaryFunction(value: {
        (column: PivotTableColumn): string;
    });
    /** Sets or gets whether to show a Grand total row aggregating the data of all rows.
    *	Property type: boolean
    */
    get grandTotal(): boolean;
    set grandTotal(value: boolean);
    /** Sets or gets the way row nesting (based on rowGroup columns) is displayed.
    *	Property type: PivotTableGroupLayout
    */
    get groupLayout(): PivotTableGroupLayout;
    set groupLayout(value: PivotTableGroupLayout);
    /** Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected.
    *	Property type: boolean
    */
    get hideCellSelectionTooltip(): boolean;
    set hideCellSelectionTooltip(value: boolean);
    /** Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns.
    *	Property type: boolean
    */
    get hideEmptyRows(): boolean;
    set hideEmptyRows(value: boolean);
    /** Sets or gets whether navigation with the keyboard is enabled in the PivotTable.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty.
    *	Property type: number
    */
    get nullDefaultValue(): number;
    set nullDefaultValue(value: number);
    /** A callback function executed each time a PivotTable cell is rendered.
    *	Property type: any
    */
    get onCellRender(): any;
    set onCellRender(value: any);
    /** A callback function executed each time a PivotTable column header cell is rendered.
    *	Property type: any
    */
    get onColumnRender(): any;
    set onColumnRender(value: any);
    /** A callback function executed when the PivotTable is being initialized.
    *	Property type: { (): void }
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns.
    *	Property type: boolean
    */
    get rowSort(): boolean;
    set rowSort(value: boolean);
    /** Sets or gets whether to show row total columns for each summary column.
    *	Property type: boolean
    */
    get rowTotals(): boolean;
    set rowTotals(value: boolean);
    /** Sets or gets the position of row total columns (shown when rowTotals is enabled).
    *	Property type: PivotTableRowTotalsPosition
    */
    get rowTotalsPosition(): PivotTableRowTotalsPosition;
    set rowTotalsPosition(value: PivotTableRowTotalsPosition);
    /** Sets or gets whether row selection (via checkboxes) is enabled.
    *	Property type: boolean
    */
    get selection(): boolean;
    set selection(value: boolean);
    /** Sets or gets the selection mode. Only applicable when selection is enabled.
    *	Property type: PivotTableSelectionMode
    */
    get selectionMode(): PivotTableSelectionMode;
    set selectionMode(value: PivotTableSelectionMode);
    /** Determines the sorting mode of the PivotTable.
    *	Property type: PivotTableSortMode
    */
    get sortMode(): PivotTableSortMode;
    set sortMode(value: PivotTableSortMode);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings.
    *	Property type: boolean
    */
    get toolbar(): boolean;
    set toolbar(value: boolean);
    /** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's dynamic column.
    *   row - The data of the cell's row.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a summary column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
    *   columnDefinition - An object detailing the clicked dynamic column.
    *   dataField - The data field of the cell's original column.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the collapsed row.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a total column has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the collapsed total column.
    */
    onCollapseTotalColumn?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	record)
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a total column has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition)
    *   columnDefinition - The definition of the expanded total column.
    */
    onExpandTotalColumn?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column header cell has been clicked.
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
    /** Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** Clears applied filters.
    */
    clearFilters(): void;
    /** Clears selection.
    */
    clearSelection(): void;
    /** Clears the PivotTable sorting.
    */
    clearSort(): void;
    /** Collapses all rows (when multiple row groups are applied).
    */
    collapseAllRows(): void;
    /** Collapses a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
    */
    collapseRow(rowId: string | number): void;
    /** Expands all rows (when multiple row groups are applied).
    */
    expandAllRows(): void;
    /** Expands a row (when multiple row groups are applied).
    * @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
    */
    expandRow(rowId: string | number): void;
    /** Exports the PivotTable's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName?: string, callback?: Function): Promise<any>;
    /** Returns the current dynamic pivot columns.
    * @returns {any}
  */
    getDynamicColumns(): Promise<any>;
    /** Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell').
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection(): Promise<any>;
    /** Refreshes the PivotTable.
    */
    refresh(): void;
    /** Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    select(rowId: string | number | (string | number)[], dataField?: string): void;
    /** Sorts by a summary or group column.
    * @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDefinition: any, sortOrder?: string): void;
    /** Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select (or of the cell's parent row when <strong>selectionMode</strong> is <em>'cell'</em>). Can be retrieved from the <strong>rows</strong> collection.
    * @param {string} dataField?. The dataField of the dynamic column (can be retrieved by calling <strong>getDynamicColumns</strong>) of the cell to select (only applicable when <strong>selectionMode</strong> is <em>'cell'</em>).
    */
    unselect(rowId: string | number | (string | number)[], dataField?: string): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default PivotTable;
