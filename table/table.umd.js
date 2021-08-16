
require('../source/modules/smart.table');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.table = {}),global.React));
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
     Table is an alternative of the HTMLTableElement.
    */
    class Table extends React.Component {
        constructor(props) {
            super(props);
            this.componentRef = React.createRef();
        }
        // Gets the id of the React component.
        get id() {
            if (!this._id) {
                this._id = 'Table' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
        /** Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
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
        /** Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
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
        /** Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported.
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
        /** Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width.
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
        /** Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
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
        /** Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed.
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
        /** Describes the columns properties.
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
        /** Sets or gets details about conditional formatting to be applied to the Table's cells.
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
        /** Sets or gets the column sizing behavior. In 'auto' mode Columns are automatically sized based on their content and the value of the columnMinWidth property, unless there is not enough space in the Table, in which case ellipses are shown. User-set static column width is still respected. In 'default' mode Columns are sized according to the rules of the standard HTML table element's table-layout: fixed. Custom width can also be applied to columns in this case by setting the column width property.
        *	Property type: TableColumnSizeMode
        */
        get columnSizeMode() {
            return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
        }
        set columnSizeMode(value) {
            if (this.nativeElement) {
                this.nativeElement.columnSizeMode = value;
            }
        }
        /** Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
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
        /** This property determines the time in milliseconds after which the Table data is updated, when you vertically scroll.
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
        /** When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to.
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
        /** Determines the data source of the table component. The data source of the Table can be a regular Array or a DataAdapter instance. You can read more about the dataAdapter here - https://www.htmlelements.com/docs/data-adapter/.
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
        /** Disables the interaction with the element.
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
        /** Sets or gets whether the Table can be edited.
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
        /** Sets or gets the edit mode.
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
        /** Sets or gets whether Row hierarchies are expanded by default, when created. Use this property when you want your groups to be expanded by default, when the Table is grouped or when you use the Table in tree mode.
        *	Property type: TableEditMode
        */
        get editMode() {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        }
        set editMode(value) {
            if (this.nativeElement) {
                this.nativeElement.editMode = value;
            }
        }
        /** Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
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
        /** Sets or gets whether the Table can be filtered via a filter row.
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
        /** Sets or gets the id of an HTML template element to be applied as a custom filter template.
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
        /** Sets or gets the id of an HTML template element to be applied as footer row(s).
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
        /** Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced).
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
        /** Sets or gets whether the Table's footer is sticky/frozen.
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
        /** Sets or gets whether the Table's column header is sticky/frozen.
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
        /** Sets or gets whether grouping the Table is enabled.
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
        /** Sets or gets the id of an HTML template element to be applied as additional column header(s).
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
        /** Sets or gets whether navigation with the keyboard is enabled in the Table.
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
        /** Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'.
        *	Property type: string
        */
        get headerRow() {
            return this.nativeElement ? this.nativeElement.headerRow : undefined;
        }
        set headerRow(value) {
            if (this.nativeElement) {
                this.nativeElement.headerRow = value;
            }
        }
        /** Sets or gets the language. Used in conjunction with the property messages.
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
        /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
        *	Property type: TableLoadColumnStateBehavior
        */
        get loadColumnStateBehavior() {
            return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
        }
        set loadColumnStateBehavior(value) {
            if (this.nativeElement) {
                this.nativeElement.loadColumnStateBehavior = value;
            }
        }
        /** Sets or gets the page size (when paging is enabled).
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
        /** Sets or gets the current (zero-based) page index (when paging is enabled).
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
        /** Sets or gets whether paging is enabled.
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
        /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
        /** Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it.
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
        /** Sets or gets an array of the Table's selected row's ids.
        *	Property type: TablePageSize
        */
        get pageSize() {
            return this.nativeElement ? this.nativeElement.pageSize : undefined;
        }
        set pageSize(value) {
            if (this.nativeElement) {
                this.nativeElement.pageSize = value;
            }
        }
        /** Sets or gets whether row selection (via checkboxes) is enabled.
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
        /** Sets or gets the selection mode. Only applicable when selection is enabled.
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
        /** Sets or gets whether row selection (via checkboxes) is hierarchical. When a parent row is selected, all sub rows are selected, too.
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
        /** Determines the sorting mode of the Table.
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
        /** Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
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
        /** Determines the theme. Theme defines the look of the element
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
        /** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
        *	Property type: TableSelectionMode
        */
        get selectionMode() {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        }
        set selectionMode(value) {
            if (this.nativeElement) {
                this.nativeElement.selectionMode = value;
            }
        }
        /** Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance.
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
        *	Property type: TableSortMode
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
            return ["animation", "autoLoadState", "autoSaveState", "columnGroups", "columnMinWidth", "columnReorder", "columnResize", "columnResizeFeedback", "columns", "conditionalFormatting", "columnSizeMode", "conditionalFormattingButton", "deferredScrollDelay", "dataRowId", "dataSource", "dataSourceSettings", "dataTransform", "disabled", "editing", "editMode", "expandHierarchy", "filtering", "filterRow", "filterTemplate", "footerRow", "formulas", "freezeFooter", "freezeHeader", "grouping", "groupFormatFunction", "headerRow", "keyboardNavigation", "loadColumnStateBehavior", "locale", "messages", "onCellRender", "onColumnRender", "onInit", "pageSize", "pageIndex", "paging", "rightToLeft", "rowDetailTemplate", "selected", "selection", "selectionMode", "selectionByHierarchy", "sort", "sortMode", "stateSettings", "theme", "tooltip", "virtualization"];
        }
        // Gets the events of the React component.
        get eventListeners() {
            return ["onCellBeginEdit", "onCellClick", "onCellEndEdit", "onChange", "onCollapse", "onExpand", "onColumnClick", "onColumnResize", "onFilter", "onGroup", "onPage", "onRowBeginEdit", "onRowEndEdit", "onSort", "onCreate", "onReady"];
        }
        /** Adds a new row. When you invoke the method, pass a JSON object with the row's data.
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
        /** Groups by a column.
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
        /** Begins an edit operation.
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
        /** Begins an update operation. Suspends all table refreshes and renders.
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
        /** Ends the current edit operation and discards changes.
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
        /** Clears grouping.
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
        /** Clears the Table sorting.
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
        /** Collapses all rows (in tree mode).
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
        /** Collapses all groups (in tree mode).
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
        /** Collapses all row details. Rows that have details defined via the rowDetailTemplate will be collapsed.
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
        /** Collapses a group.
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
        /** Collapses a row (in tree mode).
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
        /** Disables a selection of a row. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
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
        /** Enables a selection of a row, if it was previously disabled through a 'disableSelect' method call. When the 'selection' property is set to 'true', selection is enabled for all rows by default.
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
        /** Ends the current edit operation and saves changes.
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
        /** Ends an update operation. Resumes all table refreshes and renders. Re-renders the Table.
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
        /** Expands all rows (in tree mode).
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
        /** Expands all groups (in tree mode).
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
        /** Expands all row details. Rows that have details defined via rowDetailTemplate will be expanded.
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
        /** Expands a group.
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
        /** Expands a row (in tree mode).
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
        /** Exports the Table's data.
        * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
        * @param {string} fileName?. The name of the file to export to
        * @param {boolean} exportFiltered?. If set to true, exports only filtered records
        * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
        * @returns {any}
      */
        exportData(dataFormat, fileName, exportFiltered, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Returns an array of selected row ids.
        * @returns {(string | number)[]}
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
        /** Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
        * @returns {any}
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
        /** Returns the value of a cell.
        * @param {string | number} row. The id of the cell's row.
        * @param {string} dataField. The dataField of the cell's column.
        * @returns {any}
      */
        getValue(row, dataField) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getValue(row, dataField);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Gets a column property.
        * @param {string} columnDataField. Column field name.
        * @param {string} propertyName. Column property name.
        * @returns {any}
      */
        getColumnProperty(columnDataField, propertyName) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.getColumnProperty(columnDataField, propertyName);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Checks whether a group is expanded and returns true or false. false is returned when the group index is undefined, too.
        * @param {string} index. The group's hierarchical index.
        * @returns {boolean}
      */
        isGroupExpanded(index) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.isGroupExpanded(index);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
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
        /** Navigates to a page.
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
        /** Refreshes the table.
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
        /** Removes grouping by a column.
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
        /** Removes a row by its id.
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
        /** Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
        * @returns {any}
      */
        saveState() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.saveState();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Selects one or more rows.
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
        /** Sets the value of a cell.
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
        /** Sets a column property.
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
        /** Updates a table row. The method expects two parameters - row id and JSON object with the new row data.
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
        /** Unselects one or more rows.
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
            return (React.createElement("smart-table", { ref: this.componentRef }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.Table = Table;
    exports.default = Table;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
