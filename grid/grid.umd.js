
require('../source/modules/smart.grid');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.grid = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
        /** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter.
        *	Property type: DataAdapter
        */
        get dataSource() {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        }
        set dataSource(value) {
            if (this.nativeElement) {
                this.nativeElement.dataSource = value;
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
        *	Property type: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}
        */
        get onCellUpdate() {
            return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
        }
        set onCellUpdate(value) {
            if (this.nativeElement) {
                this.nativeElement.onCellUpdate = value;
            }
        }
        /** Describes the paging settings.
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
        /** Describes the pager settings.
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
        /** Sets the row details.
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
        /** Sets the scroll mode settings.
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
        /** Describes the column header settings.
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
        /** Describes the summary row settings.
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
        /** Describes the settings for the group header.
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
        /** Describes the header settings of the grid.
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
        /** Describes the footer settings of the grid.
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
        /** The rows property is used to describe all rows displayed in the grid.
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
        /** Describes the selection settings.
        *	Property type: {(index: number, row: GridRow): void}
        */
        get onRowInserted() {
            return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
        }
        set onRowInserted(value) {
            if (this.nativeElement) {
                this.nativeElement.onRowInserted = value;
            }
        }
        /** Describes sorting settings.
        *	Property type: {(index: number, row: GridRow): void}
        */
        get onRowRemoved() {
            return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
        }
        set onRowRemoved(value) {
            if (this.nativeElement) {
                this.nativeElement.onRowRemoved = value;
            }
        }
        /** undefined
        *	Property type: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
        */
        get onRowUpdate() {
            return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
        }
        set onRowUpdate(value) {
            if (this.nativeElement) {
                this.nativeElement.onRowUpdate = value;
            }
        }
        /** undefined
        *	Property type: {(index: number, row: GridRow): void}
        */
        get onRowUpdated() {
            return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
        }
        set onRowUpdated(value) {
            if (this.nativeElement) {
                this.nativeElement.onRowUpdated = value;
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
        *	Property type: Scrolling
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
            return ["appearance", "behavior", "layout", "clipboard", "columns", "columnMenu", "columnGroups", "charting", "checkBoxes", "dataExport", "dataSource", "editing", "filtering", "grouping", "messages", "onCellValue", "onCellUpdate", "onCellRender", "onBeforeInit", "onInit", "onAfterInit", "onChartInit", "onRender", "onKey", "onRowInit", "onRowDetailInit", "onRowDetailUpdated", "onRowInserted", "onRowRemoved", "onRowUpdate", "onRowUpdated", "onColumnInit", "onColumnInserted", "onColumnRemoved", "onColumnUpdated", "onCommand", "paging", "pager", "rowDetail", "scrolling", "columnHeader", "summaryRow", "groupHeader", "header", "footer", "rows", "selection", "sorting"];
        }
        // Gets the events of the React component.
        get events() {
            return ["onBeginEdit", "onChange", "onColumnClick", "onColumnDoubleClick", "onColumnResize", "onColumnDragStart", "onColumnDragging", "onColumnDragEnd", "onRowDragStart", "onRowDragging", "onRowDragEnd", "onRowExpand", "onRowCollapse", "onRowClick", "onRowDoubleClick", "onRowResize", "onCellClick", "onCellDoubleClick", "onEndEdit", "onFilter", "onResize", "onRowTap", "onCellTap", "onPage", "onSort", "onScrollBottomReached", "onScrollTopReached", "onCreate", "onReady"];
        }
        /** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
        * @param {string} position?. 'near' or 'far'
        * @returns {boolean}
      */
        addNewRow(position) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.addNewRow(position);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
        * @param {number} count. The count of unbound rows.
        * @param {string} position?. 'near' or 'far'
        * @returns {boolean}
      */
        addUnboundRow(count, position) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.addUnboundRow(count, position);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Adds a filter to a column. This method will apply a filter to the Grid data.
        * @param {string} dataField. column bound data field
        * @param {string} filter. Filter expression like: 'startsWith B'
        * @param {boolean} refreshFilters?.
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
        * @param {string} dataField?. column bound data field
        * @returns {boolean}
      */
        beginEdit(rowId, dataField) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.beginEdit(rowId, dataField);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
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
        * @param {any[]} dataSource?. Chart's data source
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
        */
        deleteRow(rowId) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.deleteRow(rowId);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.deleteRow(rowId);
                });
            }
        }
        /** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
        * @param {string | number} rowId. row bound id
        * @param {string} dataField?. column bound data field
        * @returns {boolean}
      */
        ensureVisible(rowId, dataField) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.ensureVisible(rowId, dataField);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
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
        /** Expands a TreeGrid or Grouping row.
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
        /** Gets an array of columns with applied sorting.
        * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
      */
        getSortedColumns() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getSortedColumns();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets the selection.
        * @returns {any}
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
        /** Gets an array of columns with applied filters.
        * @returns {any}
      */
        getFilteredColumns() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getFilteredColumns();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets an array of rows, which are visible and match the applied filter.
        * @returns {any}
      */
        getVisibleRows() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getVisibleRows();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
        * @returns {any}
      */
        getViewRows() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getViewRows();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets the changes from the batch edit.
        * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
      */
        getBatchEditChanges() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getBatchEditChanges();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets whether a column's drop-down menu is opened.
        * @returns {boolean}
      */
        hasMenu() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.hasMenu();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
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
        /** Opens a column drop-down menu.
        * @param {string} dataField. column bound data field
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
        * @param {string} dataField. column bound data field
        * @param {boolean} refreshFilters?.
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
        * @param {string} dataField?. column bound data field
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
            for (let i = 0; i < that.events.length; i++) {
                const eventName = that.events[i];
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
