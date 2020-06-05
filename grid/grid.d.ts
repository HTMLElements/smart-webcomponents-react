import React from "react";
import { GridProperties } from "./../index";
import { Scrolling, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnGroup, GridCharting, GridCheckBoxes, GridDataExport, GridEditing, GridFiltering, GridGrouping, GridPaging, GridPager, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSorting } from './../index';
import { DataAdapter } from './../index';
export { GridProperties } from "./../index";
export { GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnSortOrder, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridFilteringFilterRowApplyMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting } from './../index';
export { DataAdapter, Chart } from './../index';
export declare const Smart: any;
export interface GridProps extends GridProperties {
    className?: string;
    style?: React.CSSProperties;
    onBeginEdit?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    onColumnResize?: ((event?: Event) => void) | undefined;
    onColumnDragStart?: ((event?: Event) => void) | undefined;
    onColumnDragging?: ((event?: Event) => void) | undefined;
    onColumnDragEnd?: ((event?: Event) => void) | undefined;
    onRowDragStart?: ((event?: Event) => void) | undefined;
    onRowDragging?: ((event?: Event) => void) | undefined;
    onRowDragEnd?: ((event?: Event) => void) | undefined;
    onRowExpand?: ((event?: Event) => void) | undefined;
    onRowCollapse?: ((event?: Event) => void) | undefined;
    onRowClick?: ((event?: Event) => void) | undefined;
    onRowDoubleClick?: ((event?: Event) => void) | undefined;
    onRowResize?: ((event?: Event) => void) | undefined;
    onCellClick?: ((event?: Event) => void) | undefined;
    onCellDoubleClick?: ((event?: Event) => void) | undefined;
    onEndEdit?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onResize?: ((event?: Event) => void) | undefined;
    onRowTap?: ((event?: Event) => void) | undefined;
    onCellTap?: ((event?: Event) => void) | undefined;
    onPage?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export declare class Grid extends React.Component<React.HTMLProps<Element> & GridProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** An object containing settings related to the grid's appearance.
    *	Property type: GridAppearance
    */
    get appearance(): GridAppearance;
    set appearance(value: GridAppearance);
    /** An object containing settings related to the grid's behavior.
    *	Property type: GridBehavior
    */
    get behavior(): GridBehavior;
    set behavior(value: GridBehavior);
    /** An object containing settings related to the grid's layout.
    *	Property type: GridLayout
    */
    get layout(): GridLayout;
    set layout(value: GridLayout);
    /** The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
    *	Property type: GridClipboard
    */
    get clipboard(): GridClipboard;
    set clipboard(value: GridClipboard);
    /** The columns property is used to describe all columns displayed in the grid.
    *	Property type: {label: string, dataField: string}[] | string[] | number | GridColumn[]
    */
    get columns(): {
        label: string;
        dataField: string;
    }[] | string[] | number | GridColumn[];
    set columns(value: {
        label: string;
        dataField: string;
    }[] | string[] | number | GridColumn[]);
    /** Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
    *	Property type: GridColumnMenu
    */
    get columnMenu(): GridColumnMenu;
    set columnMenu(value: GridColumnMenu);
    /** Describes the settings of the column groups.
    *	Property type: GridColumnGroup[]
    */
    get columnGroups(): GridColumnGroup[];
    set columnGroups(value: GridColumnGroup[]);
    /** Sets the Grid Charting Data Visualization.
    *	Property type: GridCharting
    */
    get charting(): GridCharting;
    set charting(value: GridCharting);
    /** Sets the TreeGrid checkboxes.
    *	Property type: GridCheckBoxes
    */
    get checkBoxes(): GridCheckBoxes;
    set checkBoxes(value: GridCheckBoxes);
    /** Sets the Grid Data Export options.
    *	Property type: GridDataExport
    */
    get dataExport(): GridDataExport;
    set dataExport(value: GridDataExport);
    /** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter.
    *	Property type: DataAdapter
    */
    get dataSource(): DataAdapter;
    set dataSource(value: DataAdapter);
    /** Describes the grid's editing settings.
    *	Property type: GridEditing
    */
    get editing(): GridEditing;
    set editing(value: GridEditing);
    /** Describes the grid's filtering settings.
    *	Property type: GridFiltering
    */
    get filtering(): GridFiltering;
    set filtering(value: GridFiltering);
    /** Describes the grid's grouping settings.
    *	Property type: GridGrouping
    */
    get grouping(): GridGrouping;
    set grouping(value: GridGrouping);
    /** Sets the messages values.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
    *	Property type: {(cell: GridCell): void}
    */
    get onCellValue(): {
        (cell: GridCell): void;
    };
    set onCellValue(value: {
        (cell: GridCell): void;
    });
    /** Callback function() called when the grid has been rendered.
    *	Property type: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}
    */
    get onCellUpdate(): {
        (cell: GridCell, oldValue: any, value: any, confirm: {
            (commit: boolean): void;
        }): void;
    };
    set onCellUpdate(value: {
        (cell: GridCell, oldValue: any, value: any, confirm: {
            (commit: boolean): void;
        }): void;
    });
    /** Describes the paging settings.
    *	Property type: {(cell: GridCell): void}
    */
    get onCellRender(): {
        (cell: GridCell): void;
    };
    set onCellRender(value: {
        (cell: GridCell): void;
    });
    /** Describes the pager settings.
    *	Property type: {(): void}
    */
    get onBeforeInit(): {
        (): void;
    };
    set onBeforeInit(value: {
        (): void;
    });
    /** Sets the row details.
    *	Property type: {(): void}
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Sets the scroll mode settings.
    *	Property type: {(): void}
    */
    get onAfterInit(): {
        (): void;
    };
    set onAfterInit(value: {
        (): void;
    });
    /** Describes the column header settings.
    *	Property type: any
    */
    get onChartInit(): any;
    set onChartInit(value: any);
    /** Describes the summary row settings.
    *	Property type: any
    */
    get onRender(): any;
    set onRender(value: any);
    /** Describes the settings for the group header.
    *	Property type: {(event: KeyboardEvent): void}
    */
    get onKey(): {
        (event: KeyboardEvent): void;
    };
    set onKey(value: {
        (event: KeyboardEvent): void;
    });
    /** Describes the header settings of the grid.
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowInit(): {
        (index: number, row: GridRow): void;
    };
    set onRowInit(value: {
        (index: number, row: GridRow): void;
    });
    /** Describes the footer settings of the grid.
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailInit(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailInit(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** The rows property is used to describe all rows displayed in the grid.
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailUpdated(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailUpdated(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** Describes the selection settings.
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowInserted(): {
        (index: number, row: GridRow): void;
    };
    set onRowInserted(value: {
        (index: number, row: GridRow): void;
    });
    /** Describes sorting settings.
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowRemoved(): {
        (index: number, row: GridRow): void;
    };
    set onRowRemoved(value: {
        (index: number, row: GridRow): void;
    });
    /** undefined
    *	Property type: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
    */
    get onRowUpdate(): {
        (index: number, row: GridRow, oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    set onRowUpdate(value: {
        (index: number, row: GridRow, oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    });
    /** undefined
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowUpdated(): {
        (index: number, row: GridRow): void;
    };
    set onRowUpdated(value: {
        (index: number, row: GridRow): void;
    });
    /** undefined
    *	Property type: {(index: number, column: GridColumn): void}
    */
    get onColumnInit(): {
        (index: number, column: GridColumn): void;
    };
    set onColumnInit(value: {
        (index: number, column: GridColumn): void;
    });
    /** undefined
    *	Property type: {(index: number, column: GridColumn): void}
    */
    get onColumnInserted(): {
        (index: number, column: GridColumn): void;
    };
    set onColumnInserted(value: {
        (index: number, column: GridColumn): void;
    });
    /** undefined
    *	Property type: {(index: number, column: GridColumn): void}
    */
    get onColumnRemoved(): {
        (index: number, column: GridColumn): void;
    };
    set onColumnRemoved(value: {
        (index: number, column: GridColumn): void;
    });
    /** undefined
    *	Property type: {(index: number, column: GridColumn): void}
    */
    get onColumnUpdated(): {
        (index: number, column: GridColumn): void;
    };
    set onColumnUpdated(value: {
        (index: number, column: GridColumn): void;
    });
    /** undefined
    *	Property type: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}
    */
    get onCommand(): {
        (name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void;
    };
    set onCommand(value: {
        (name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void;
    });
    /** undefined
    *	Property type: GridPaging
    */
    get paging(): GridPaging;
    set paging(value: GridPaging);
    /** undefined
    *	Property type: GridPager
    */
    get pager(): GridPager;
    set pager(value: GridPager);
    /** undefined
    *	Property type: GridRowDetail
    */
    get rowDetail(): GridRowDetail;
    set rowDetail(value: GridRowDetail);
    /** undefined
    *	Property type: Scrolling
    */
    get scrolling(): Scrolling;
    set scrolling(value: Scrolling);
    /** undefined
    *	Property type: GridColumnHeader
    */
    get columnHeader(): GridColumnHeader;
    set columnHeader(value: GridColumnHeader);
    /** undefined
    *	Property type: GridSummaryRow
    */
    get summaryRow(): GridSummaryRow;
    set summaryRow(value: GridSummaryRow);
    /** undefined
    *	Property type: GridGroupHeader
    */
    get groupHeader(): GridGroupHeader;
    set groupHeader(value: GridGroupHeader);
    /** undefined
    *	Property type: GridHeader
    */
    get header(): GridHeader;
    set header(value: GridHeader);
    /** undefined
    *	Property type: GridFooter
    */
    get footer(): GridFooter;
    set footer(value: GridFooter);
    /** undefined
    *	Property type: GridRow[]
    */
    get rows(): GridRow[];
    set rows(value: GridRow[]);
    /** undefined
    *	Property type: GridSelection
    */
    get selection(): GridSelection;
    set selection(value: GridSelection);
    /** undefined
    *	Property type: GridSorting
    */
    get sorting(): GridSorting;
    set sorting(value: GridSorting);
    get properties(): string[];
    /**  This event is triggered, when the edit begins.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    */
    onBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
    *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
    *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
    *   column - The clicked column.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
    *   column - The double-clicked column.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user resized a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	oldWidth, 	width)
    *   column - The resized column.
    *   oldWidth - The old width of the column.
    *   width - The new width of the column.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user starts a column drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	originalEvent)
    *   column - The column.
    *   index - The column's index
    *   originalEvent - The origianl Event object.
    */
    onColumnDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	data, 	originalEvent)
    *   column - The column.
    *   index - The column's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column.
    *   index - The column's index
    *   newIndex - The column's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user starts a row drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	originalEvent)
    *   row - The row.
    *   index - The row's index
    *   originalEvent - The origianl Event object.
    */
    onRowDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	data, 	originalEvent)
    *   row - The row.
    *   index - The row's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The row.
    *   index - The row's index
    *   newIndex - The row's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The expanded row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The collapsed row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The double-clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user resized a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	oldHeight, 	height)
    *   row - The resized row.
    *   oldHeight - The old height of the row.
    *   height - The new height of the row.
    */
    onRowResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
    *   cell - The clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
    *   cell - The double-clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onCellDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the edit ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    */
    onEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when a filter is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the grid is resized.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user touches and holds on the row for at least 300ms.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The tapped row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowTap?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user touches and holds on the cell for at least 300ms.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
    *   cell - The tapped row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onCellTap?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user changes the pages.
    *  @param event. The custom event. 	*/
    onPage?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when a sorting column is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user reaches the bottom of the grid.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user reaches the top of the grid.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    /** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addNewRow(position?: string): Promise<any>;
    /** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addUnboundRow(count: number, position?: string): Promise<any>;
    /** Adds a filter to a column. This method will apply a filter to the Grid data.
    * @param {string} dataField. column bound data field
    * @param {string} filter. Filter expression like: 'startsWith B'
    * @param {boolean} refreshFilters?.
    */
    addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
    /** Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    autoSizeRows(): void;
    /** Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    autoSizeColumns(): void;
    /** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    * @returns {boolean}
  */
    beginEdit(rowId: string | number, dataField?: string): Promise<any>;
    /** Clears all filters. Refreshes the view and updates all filter input components.
    */
    clearFilter(): void;
    /** Clears the selection that user have made. All row, cell and column selection highlights will be removed.
    */
    clearSelection(): void;
    /** Cancels the editing. This method closes the cell editor and cancels the changes.
    */
    cancelEdit(): void;
    /** Checks a TreeGrid row. This method updates the row's check-box.
    * @param {string | number} rowId. row bound id
    */
    checkRow(rowId: string | number): void;
    /** Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows.
    */
    checkAllRows(): void;
    /** Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view.
    */
    clearRows(): void;
    /** Closes the column drop-down menu.
    */
    closeMenu(): void;
    /** Collapses a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    collapseRow(rowId: string | number): void;
    /** Collapses all TreeGrid or Grouping rows.
    */
    collapseAllRows(): void;
    /** Creates a Chart, when charting is enabled.
    * @param {string} type. Chart's type
    * @param {any[]} dataSource?. Chart's data source
    */
    createChart(type: string, dataSource?: any[]): void;
    /** Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    */
    deleteRow(rowId: string | number): void;
    /** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    * @returns {boolean}
  */
    ensureVisible(rowId: string | number, dataField?: string): Promise<any>;
    /** Ends the editing. This method confirms all changes and closes the opened cell editor(s).
    */
    endEdit(): void;
    /** Ends the update operation. This method will resume the rendering and will refresh the Grid.
    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
    */
    endUpdate(refresh?: boolean): void;
    /** Expands a TreeGrid or Grouping row.
    * @param {string | number} rowId. row bound id
    */
    expandRow(rowId: string | number): void;
    /** Expands all TreeGrid or Grouping rows.
    */
    expandAllRows(): void;
    /** Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    exportData(Dataformat: string): void;
    /** Gets an array of columns with applied sorting.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns(): Promise<any>;
    /** Gets the selection.
    * @returns {any}
  */
    getSelection(): Promise<any>;
    /** Gets an array of columns with applied filters.
    * @returns {any}
  */
    getFilteredColumns(): Promise<any>;
    /** Gets an array of rows, which are visible and match the applied filter.
    * @returns {any}
  */
    getVisibleRows(): Promise<any>;
    /** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
    * @returns {any}
  */
    getViewRows(): Promise<any>;
    /** Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges(): Promise<any>;
    /** Gets whether a column's drop-down menu is opened.
    * @returns {boolean}
  */
    hasMenu(): Promise<any>;
    /** Hides the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    */
    hideDetail(rowId: string | number): void;
    /** Opens a column drop-down menu.
    * @param {string} dataField. column bound data field
    */
    openMenu(dataField: string): void;
    /** Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property.
    */
    print(): void;
    /** Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout.
    */
    refresh(): void;
    /** Refreshes the grid with the current property values. This method will refresh the Grid layout.
    */
    refreshView(): void;
    /** Refreshes the grid cells in view. The method is useful for live-updates of cell values.
    * @param {string} dataField. column bound data field
    * @param {boolean} refreshFilters?.
    */
    removeFilter(dataField: string, refreshFilters?: boolean): void;
    /** Removes a column filter.
    */
    revertBatchEdit(): void;
    /** Reverts the batch edit changes. This method cancels all changes made by the end-user.
    */
    saveBatchEdit(): void;
    /** Saves the batch edit changes. This method confirms the editing changes made by the end-user.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    select(rowId: string | number, dataField?: string): void;
    /** Selects a row, cell or column.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field
    * @param {string | number} endRowId. row bound id
    * @param {string} endDataField. column bound data field
    */
    selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
    /** Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid.
    * @param {string | number} rowId. row bound id
    */
    showDetail(rowId: string | number): void;
    /** Shows the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    unselect(rowId: string | number, dataField?: string): void;
    /** Unselects a row, cell or column.
    * @param {string | number} rowId. row bound id
    */
    uncheckRow(rowId: string | number): void;
    /** Unchecks a TreeGrid row. Sets its check-box to false.
    */
    uncheckAllRows(): void;
    /** Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false.
    * @param {string | number} rowId. row bound id
    */
    toggleRow(rowId: string | number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Grid;
