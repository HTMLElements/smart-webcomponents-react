
import '../source/modules/smart.pivottable';

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
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
class PivotTable extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'PivotTable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        if (this.nativeElement) {
            this.nativeElement.animation = value;
        }
    }
    /** Sets or gets whether the reordering of columns is enabled.
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
    /** Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated.
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
    /** Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated.
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
    /** Sets or gets the position of total columns (shown when columnTotals is enabled).
    *	Property type: PivotTableColumnTotalsPosition
    */
    get columnTotalsPosition() {
        return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
    }
    set columnTotalsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.columnTotalsPosition = value;
        }
    }
    /** Sets or gets details about conditional formatting to be applied to the PivotTable's cells.
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
    /** Determines the original tabular data source of the PivotTable.
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
    /** Sets or gets whether the original tabular data sourse of the PivotTable will be pre-sorted based on columns with the rowGroup property (and their order).
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
    /** Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering.
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
    /** Sets or gets the position of the PivotTable's designer (shown when designer is enabled).
    *	Property type: PivotTableDesignerPosition
    */
    get designerPosition() {
        return this.nativeElement ? this.nativeElement.designerPosition : undefined;
    }
    set designerPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.designerPosition = value;
        }
    }
    /** Disables the interaction with the element.
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
    /** If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed.
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
    /** If set, shows an export button in the drill down dialog.
    *	Property type: PivotTableDrillDownDataExport
    */
    get drillDownDataExport() {
        return this.nativeElement ? this.nativeElement.drillDownDataExport : undefined;
    }
    set drillDownDataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.drillDownDataExport = value;
        }
    }
    /** Sets or gets the drill down table export file name.
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
    /** Sets or gets whether sorting based on columns in classic row groups layout mode is enabled.
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
    /** Sets or gets whether the PivotTable's column header is sticky/frozen.
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
    /** Sets or gets whether to show a Grand total row aggregating the data of all rows.
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
    /** Sets or gets the way row nesting (based on rowGroup columns) is displayed.
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
    /** Sets or gets whether to hide the tooltip that displays details when multiple summary cells with non-null values are selected.
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
    /** Sets or gets whether to hide rows that contain only 0 or null values. Applicable only when there are rowGroup columns.
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
    /** Sets or gets whether navigation with the keyboard is enabled in the PivotTable.
    *	Property type: PivotTableGroupLayout
    */
    get groupLayout() {
        return this.nativeElement ? this.nativeElement.groupLayout : undefined;
    }
    set groupLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.groupLayout = value;
        }
    }
    /** Sets or gets the language. Used in conjunction with the property messages.
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
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
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
    /** Sets or gets what value is shown in cells that do not have aggregated data to display. By default (null), such cells are empty.
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
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
    /** Sets or gets whether sorting by row (when a row group cell is clicked) is enabled. When columnTotals is also enabled, sorting is applied per "column group"; otherwise - for all columns.
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
    /** Sets or gets whether row summaries are displayed in the row headers. Example: Peterson(40) vs Peterson, when rowSummary is set to false.
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
    /** Sets or gets whether to show row total columns for each summary column.
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
    /** Sets or gets the position of row total columns (shown when rowTotals is enabled).
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
    /** Sets or gets whether row selection (via checkboxes) is enabled.
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
    /** Sets or gets the selection mode. Only applicable when selection is enabled.
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
    /** Determines the sorting mode of the PivotTable.
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
    /** Determines the theme. Theme defines the look of the element
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
    /** Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings.
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
    /** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
    *	Property type: PivotTableRowTotalsPosition
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
    *	Property type: PivotTableSelectionMode
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
    *	Property type: PivotTableSortMode
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
        return ["animation", "columnReorder", "columns", "columnTotals", "columnTotalsPosition", "conditionalFormatting", "dataSource", "defaultSortByRowGroups", "designer", "designerPosition", "disabled", "drillDown", "drillDownDataExport", "drillDownDataExportName", "drillDownTableInit", "drillDownCustomAction", "enableSortByRowGroups", "freezeHeader", "getDefaultSummaryFunction", "grandTotal", "groupLayout", "hideCellSelectionTooltip", "hideEmptyRows", "keyboardNavigation", "locale", "messages", "nullDefaultValue", "onCellRender", "onColumnRender", "onInit", "rightToLeft", "rowSort", "rowSummary", "rowTotals", "rowTotalsPosition", "selection", "selectionMode", "sortMode", "theme", "toolbar", "tooltip"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCellClick", "onChange", "onColumnClick", "onCollapse", "onCollapseTotalColumn", "onExpand", "onExpandTotalColumn", "onFilter", "onSort", "onCreate", "onReady"];
    }
    /** Adds a filter to a specific column.
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
    /** Clears applied filters.
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
    /** Clears selection.
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
    /** Clears the PivotTable sorting.
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
    /** Collapses all rows (when multiple row groups are applied).
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
    /** Collapses a row (when multiple row groups are applied).
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
    /** Expands all rows (when multiple row groups are applied).
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
    /** Expands a row (when multiple row groups are applied).
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
    /** Exports the PivotTable's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
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
    /** Returns the current dynamic pivot columns.
    * @returns {any}
  */
    getDynamicColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getDynamicColumns();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Returns an array of selected row ids (when selectionMode is 'many' or 'extended') or an array of selected cell details (when selectionMode is 'cell').
    * @returns {(string | number)[] | { dataField: string, rowId: string | number }[]}
  */
    getSelection() {
        return __awaiter(this, void 0, void 0, function* () {
            const getResultOnRender = () => {
                return new Promise(resolve => {
                    this.nativeElement.whenRendered(() => {
                        const result = this.nativeElement.getSelection();
                        resolve(result);
                    });
                });
            };
            const result = yield getResultOnRender();
            return result;
        });
    }
    /** Refreshes the PivotTable.
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
    /** Removes filters applied to a specific column.
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
    /** Selects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
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
    /** Sorts by a summary or group column.
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
    /** Unselects one or more rows (when selectionMode is 'many' or 'extended') or a single cell (when selectionMode is 'cell' and the second argument is passed).
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
        return (React.createElement("smart-pivot-table", { ref: this.componentRef }, this.props.children));
    }
}

export default PivotTable;
export { Smart, PivotTable };
