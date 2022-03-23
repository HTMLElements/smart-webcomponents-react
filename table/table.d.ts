import React from "react";
import { TableProperties } from "./../index";
import { TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings } from './../index';
export { TableProperties } from "./../index";
export { TableColumnDataType, TableColumnFreeze, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableDataSourceSettingsSanitizeHTML, TableDataSourceSettingsSanitizeHTMLRender, TableDataSourceSettingsDataFieldDataType, TableDataSourceSettingsDataSourceType, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings, TableDataSourceSettingsDataField } from './../index';
export declare const Smart: any;
export interface TableProps extends TableProperties {
    className?: string;
    style?: React.CSSProperties;
    onCellBeginEdit?: ((event?: Event) => void) | undefined;
    onCellClick?: ((event?: Event) => void) | undefined;
    onCellEndEdit?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onCloseColumnMenu?: ((event?: Event) => void) | undefined;
    onColumnResize?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onGroup?: ((event?: Event) => void) | undefined;
    onOpenColumnMenu?: ((event?: Event) => void) | undefined;
    onPage?: ((event?: Event) => void) | undefined;
    onRowBeginEdit?: ((event?: Event) => void) | undefined;
    onRowEndEdit?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Table is an alternative of the HTMLTableElement.
*/
export declare class Table extends React.Component<React.HTMLAttributes<Element> & TableProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported.
    *	Property type: TableColumnGroup[]
    */
    get columnGroups(): TableColumnGroup[];
    set columnGroups(value: TableColumnGroup[]);
    /** Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width.
    *	Property type: string | number
    */
    get columnMinWidth(): string | number;
    set columnMinWidth(value: string | number);
    /** Sets or gets whether the reordering of columns is enabled.
    *	Property type: boolean
    */
    get columnReorder(): boolean;
    set columnReorder(value: boolean);
    /** Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
    *	Property type: boolean
    */
    get columnResize(): boolean;
    set columnResize(value: boolean);
    /** This property affects the table sizing, when the columnSizeMode is 'default'. When 'columnResizeNormalize' is false, the Table will add an additional TH element, if all table columns have the 'width' property set. This is done in order to maintain your width settings. Otherwise, when the property is set to true, the Table will auto-fill the remaining space similar to the layout of standard HTML Tables.
    *	Property type: boolean
    */
    get columnResizeNormalize(): boolean;
    set columnResizeNormalize(value: boolean);
    /** Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed.
    *	Property type: boolean
    */
    get columnResizeFeedback(): boolean;
    set columnResizeFeedback(value: boolean);
    /** Describes the columns properties.
    *	Property type: TableColumn[]
    */
    get columns(): TableColumn[];
    set columns(value: TableColumn[]);
    /** Sets or gets details about conditional formatting to be applied to the Table's cells.
    *	Property type: TableConditionalFormatting[]
    */
    get conditionalFormatting(): TableConditionalFormatting[];
    set conditionalFormatting(value: TableConditionalFormatting[]);
    /** Sets or gets the column menu. When you set this property to true, each column will have a column menu. From the column menu, you will be able to sort, filter, show or hide columns.
    *	Property type: boolean
    */
    get columnMenu(): boolean;
    set columnMenu(value: boolean);
    /** Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property.
    *	Property type: TableColumnSizeMode
    */
    get columnSizeMode(): TableColumnSizeMode;
    set columnSizeMode(value: TableColumnSizeMode);
    /** Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
    *	Property type: boolean
    */
    get conditionalFormattingButton(): boolean;
    set conditionalFormattingButton(value: boolean);
    /** This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll.
    *	Property type: number
    */
    get deferredScrollDelay(): number;
    set deferredScrollDelay(value: number);
    /** When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to.
    *	Property type: string
    */
    get dataRowId(): string;
    set dataRowId(value: string);
    /** Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
    *	Property type: TableDataSourceSettings
    */
    get dataSourceSettings(): TableDataSourceSettings;
    set dataSourceSettings(value: TableDataSourceSettings);
    /** Disables the interaction with the element.
    *	Property type: { (record: any): void }
    */
    get dataTransform(): {
        (record: any): void;
    };
    set dataTransform(value: {
        (record: any): void;
    });
    /** Sets or gets whether the Table can be edited.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the edit mode.
    *	Property type: boolean
    */
    get editing(): boolean;
    set editing(value: boolean);
    /** Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode.
    *	Property type: TableEditMode
    */
    get editMode(): TableEditMode;
    set editMode(value: TableEditMode);
    /** Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
    *	Property type: boolean
    */
    get expandHierarchy(): boolean;
    set expandHierarchy(value: boolean);
    /** Sets or gets whether the Table can be filtered via a filter row.
    *	Property type: boolean
    */
    get filtering(): boolean;
    set filtering(value: boolean);
    /** Sets or gets the Table's filter operator. It determines whether 'and' or 'or' is used when applying column filters - cellvalue1 && cellvalue2 vs cellvalue1 || cellvalue2
    *	Property type: boolean
    */
    get filterRow(): boolean;
    set filterRow(value: boolean);
    /** Sets or gets the id of an HTML template element to be applied as a custom filter template.
    *	Property type: boolean
    */
    get filterOperator(): boolean;
    set filterOperator(value: boolean);
    /** Sets or gets the id of an HTML template element to be applied as footer row(s).
    *	Property type: string
    */
    get filterTemplate(): string;
    set filterTemplate(value: string);
    /** Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced).
    *	Property type: string
    */
    get footerRow(): string;
    set footerRow(value: string);
    /** Sets or gets whether the Table's footer is sticky/frozen.
    *	Property type: boolean
    */
    get formulas(): boolean;
    set formulas(value: boolean);
    /** Sets or gets whether the Table's column header is sticky/frozen.
    *	Property type: boolean
    */
    get freezeFooter(): boolean;
    set freezeFooter(value: boolean);
    /** Sets or gets whether grouping the Table is enabled.
    *	Property type: boolean
    */
    get freezeHeader(): boolean;
    set freezeHeader(value: boolean);
    /** Allows to customize the header of the element. The property accepts the id of an HTMLElement, HTMLTemplateElement, function or a string that will be parsed as HTML. When set to a function it contains one argument - the header element of the Table.
    *	Property type: boolean
    */
    get grouping(): boolean;
    set grouping(value: boolean);
    /** Sets or gets whether navigation with the keyboard is enabled in the Table.
    *	Property type: { (settings: { value: any, row: string | number, column: string, template?: any }): void }
    */
    get groupFormatFunction(): {
        (settings: {
            value: any;
            row: string | number;
            column: string;
            template?: any;
        }): void;
    };
    set groupFormatFunction(value: {
        (settings: {
            value: any;
            row: string | number;
            column: string;
            template?: any;
        }): void;
    });
    /** Sets or gets whether the checkboxes are displayed in the selection column.
    *	Property type: string | HTMLElement | Function
    */
    get headerRow(): string | HTMLElement | Function;
    set headerRow(value: string | HTMLElement | Function);
    /** Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: boolean
    */
    get hideSelectionColumn(): boolean;
    set hideSelectionColumn(value: boolean);
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
    *	Property type: TableLoadColumnStateBehavior
    */
    get loadColumnStateBehavior(): TableLoadColumnStateBehavior;
    set loadColumnStateBehavior(value: TableLoadColumnStateBehavior);
    /** Sets or gets the page size (when paging is enabled).
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets the current (zero-based) page index (when paging is enabled).
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets whether paging is enabled.
    *	Property type: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }
    */
    get onCellRender(): {
        (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void;
    };
    set onCellRender(value: {
        (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void;
    });
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
    */
    get onColumnRender(): {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    };
    set onColumnRender(value: {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    });
    /** Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it.
    *	Property type: { (): void }
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Sets or gets an array of the Table's selected row's ids.
    *	Property type: TablePageSize
    */
    get pageSize(): TablePageSize;
    set pageSize(value: TablePageSize);
    /** Sets or gets whether row selection (via checkboxes) is enabled.
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Sets or gets the selection mode. Only applicable when selection is enabled.
    *	Property type: boolean
    */
    get paging(): boolean;
    set paging(value: boolean);
    /** Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the sorting mode of the Table.
    *	Property type: string
    */
    get rowDetailTemplate(): string;
    set rowDetailTemplate(value: string);
    /** Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
    *	Property type: any[]
    */
    get selected(): any[];
    set selected(value: any[]);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: boolean
    */
    get selection(): boolean;
    set selection(value: boolean);
    /** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
    *	Property type: TableSelectionMode
    */
    get selectionMode(): TableSelectionMode;
    set selectionMode(value: TableSelectionMode);
    /** Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance.
    *	Property type: boolean
    */
    get selectionByHierarchy(): boolean;
    set selectionByHierarchy(value: boolean);
    /** undefined
    *	Property type: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void }
    */
    get sort(): {
        (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: {
            (firstRecord: any, secondRecord: any): number;
        }[]): void;
    };
    set sort(value: {
        (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: {
            (firstRecord: any, secondRecord: any): number;
        }[]): void;
    });
    /** undefined
    *	Property type: TableSortMode
    */
    get sortMode(): TableSortMode;
    set sortMode(value: TableSortMode);
    /** undefined
    *	Property type: string[]
    */
    get stateSettings(): string[];
    set stateSettings(value: string[]);
    /** undefined
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** undefined
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    /** undefined
    *	Property type: boolean
    */
    get virtualization(): boolean;
    set virtualization(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a cell edit operation has been initiated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
    *   id - The id of the row.
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
    *   id - The cell's row id.
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    *   originalEvent - The 'click' event object.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a cell has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
    *   id - The id of the row.
    *   dataField - The data field of the cell's column.
    *   row - The new data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the selection is changed. Within the event handler you can get the selection by using the 'getSelection' method.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row has been collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
    *   id - The id of the collapsed row.
    *   record - The data of the collapsed row.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row has been expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
    *   id - The id of the expanded row.
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the cell's column.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column menu is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column.
    */
    onCloseColumnMenu?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column has been resized via dragging or double-click.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
    *   dataField - The data field of the column.
    *   headerCellElement - The column's header cell HTML element.
    *   width - The new width of the column.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a grouping-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
    *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
    *   dataField - The data field of the column whose grouping is modified.
    *   label - The label of the group (only when collapsing/expanding).
    *   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
    */
    onGroup?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column menu is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column.
    */
    onOpenColumnMenu?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a paging-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
    *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
    */
    onPage?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
    *   id - The id of the row.
    *   row - The data of the row.
    */
    onRowBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row has been edited (only when editMode is 'row').
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
    *   id - The id of the row.
    *   row - The new data of the row.
    */
    onRowEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column header cell has been clicked or sorting is applied programmatically using the Table API.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	sortDataFields, 	sortOrders, 	sortDataTypes, 	type)
    *   columns - An array with information about the columns the Table has been sorted by.
    *   sortDataFields - An array with information about the data fields the Table has been sorted by.
    *   sortOrders - An array with information about the columns sort orders the Table has been sorted by.
    *   sortDataTypes - An array with information about the columns data types the Table has been sorted by.
    *   type - The type of action that initiated the data sort. Possible types: 'programmatic', 'interaction'
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new row. When you invoke the method, pass a JSON object with the row's data.
    * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    addRow(data: any): void;
    /** Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField: string): void;
    /** Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row: string | number, dataField?: string): void;
    /** Begins an update operation. Suspends all table refreshes and renders.
    */
    beginUpdate(): void;
    /** Ends the current edit operation and discards changes.
    */
    cancelEdit(): void;
    /** Clears applied filters.
    */
    clearFilters(): void;
    /** Clears grouping.
    */
    clearGrouping(): void;
    /** Clears selection.
    */
    clearSelection(): void;
    /** Clears the Table sorting.
    */
    clearSort(): void;
    /** Collapses all rows (in tree mode).
    */
    collapseAllRows(): void;
    /** Collapses all groups (in tree mode).
    */
    collapseAllGroups(): void;
    /** Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed.
    */
    collapseAllRowDetails(): void;
    /** Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index: string): void;
    /** Collapses a row (in tree mode).
    * @param {string | number} rowId. The id of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    disableSelect(rowId: string | number | (string | number)[]): void;
    /** Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    enableSelect(rowId: string | number | (string | number)[]): void;
    /** Ends the current edit operation and saves changes.
    */
    endEdit(): void;
    /** Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table.
    * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
    */
    endUpdate(refresh?: boolean): void;
    /** Expands all rows (in tree mode).
    */
    expandAllRows(): void;
    /** Expands all groups (in tree mode).
    */
    expandAllGroups(): void;
    /** Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded.
    */
    expandAllRowDetails(): void;
    /** Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index: string): void;
    /** Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName?: string, exportFiltered?: boolean, callback?: Function): Promise<any>;
    /** Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    getSelection(): Promise<any>;
    /** Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row: string | number, dataField: string): Promise<any>;
    /** Gets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @returns {any}
  */
    getColumnProperty(columnDataField: string, propertyName: string): Promise<any>;
    /** Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too.
    * @param {string} index. The group's hierarchical index.
    * @returns {boolean}
  */
    isGroupExpanded(index: string): Promise<any>;
    /** Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex: number): void;
    /** Refreshes the table.
    */
    refresh(): void;
    /** Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField: string): void;
    /** Removes a row by its id.
    * @param {string | number} row. The id of the cell's row.
    */
    removeRow(row: string | number): void;
    /** Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** Selects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    select(rowId: string | number | (string | number)[]): void;
    /** Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    setValue(row: string | number, dataField: string, value: any): void;
    /** Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
    /** Sets a column property.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @param {any} propertyValue. Property value.
    */
    setColumnProperty(columnDataField: string, propertyName: string, propertyValue: any): void;
    /** Updates a table row. The method expects two parameters - row id and JSON object with the new row data.
    * @param {string | number} rowId. The id of the row.
    * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    updateRow(rowId: string | number, data: any): void;
    /** Unselects one or more rows.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
    */
    unselect(rowId: string | number | (string | number)[]): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Table;
