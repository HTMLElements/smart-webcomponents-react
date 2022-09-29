import React from "react";
import { GridProperties } from "./../index";
import { Scrolling, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridColumnMenu, GridColumnGroup, GridConditionalFormatting, GridCharting, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridEditing, GridFiltering, GridGrouping, GridUploadSettings, GridPaging, GridPager, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSorting } from './../index';
export { GridProperties } from "./../index";
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridUploadSettings, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting } from './../index';
export { DataAdapter, Chart } from './../index';
export declare const Smart: any;
export interface GridProps extends GridProperties {
    className?: string;
    style?: React.CSSProperties;
    onBeginEdit?: ((event?: Event) => void) | undefined;
    onBatchChange?: ((event?: Event) => void) | undefined;
    onBatchCancel?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    onColumnResize?: ((event?: Event) => void) | undefined;
    onColumnDragStart?: ((event?: Event) => void) | undefined;
    onColumnDragging?: ((event?: Event) => void) | undefined;
    onColumnDragEnd?: ((event?: Event) => void) | undefined;
    onColumnReorder?: ((event?: Event) => void) | undefined;
    onCommentAdd?: ((event?: Event) => void) | undefined;
    onCommentRemove?: ((event?: Event) => void) | undefined;
    onContextMenuItemClick?: ((event?: Event) => void) | undefined;
    onRowDragStart?: ((event?: Event) => void) | undefined;
    onRowDragging?: ((event?: Event) => void) | undefined;
    onRowDragEnd?: ((event?: Event) => void) | undefined;
    onRowReorder?: ((event?: Event) => void) | undefined;
    onRowExpand?: ((event?: Event) => void) | undefined;
    onRowCollapse?: ((event?: Event) => void) | undefined;
    onRowClick?: ((event?: Event) => void) | undefined;
    onRowDoubleClick?: ((event?: Event) => void) | undefined;
    onRowResize?: ((event?: Event) => void) | undefined;
    onRowStarred?: ((event?: Event) => void) | undefined;
    onCellClick?: ((event?: Event) => void) | undefined;
    onCellDoubleClick?: ((event?: Event) => void) | undefined;
    onEndEdit?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onGroup?: ((event?: Event) => void) | undefined;
    onOpenColumnDialog?: ((event?: Event) => void) | undefined;
    onCloseColumnDialog?: ((event?: Event) => void) | undefined;
    onResize?: ((event?: Event) => void) | undefined;
    onRowTap?: ((event?: Event) => void) | undefined;
    onCellTap?: ((event?: Event) => void) | undefined;
    onPage?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export declare class Grid extends React.Component<React.HTMLAttributes<Element> & GridProps, any> {
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
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
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
    /** Context Menu is the drop-down menu displayed after right-clicking a Grid row. It allows you to delete row, edit cell or row depending on the edit mode. The 'contextMenuItemCustom' dataSource option allows you to add custom menu item to the context menu. You can replace the context menu by using the 'selector' property and setting it to ID of a Smart.Menu component.
    *	Property type: GridContextMenu
    */
    get contextMenu(): GridContextMenu;
    set contextMenu(value: GridContextMenu);
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
    /** Sets or gets details about conditional formatting to be applied to the Grid's cells.
    *	Property type: GridConditionalFormatting[]
    */
    get conditionalFormatting(): GridConditionalFormatting[];
    set conditionalFormatting(value: GridConditionalFormatting[]);
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
    /** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter or an Array.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
    *	Property type: GridDataSourceSettings
    */
    get dataSourceSettings(): GridDataSourceSettings;
    set dataSourceSettings(value: GridDataSourceSettings);
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
    *	Property type: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
    */
    get onCellUpdate(): {
        (cells: GridCell[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    set onCellUpdate(value: {
        (cells: GridCell[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    });
    /** Callback function() called when the grid has been rendered for first time and bindings are completed. The component is ready.
    *	Property type: {(cell: GridCell): void}
    */
    get onCellRender(): {
        (cell: GridCell): void;
    };
    set onCellRender(value: {
        (cell: GridCell): void;
    });
    /** Sets or gets the rows  CSS class rules. Different CSS class names are conditionally applied. Example: rowCSSRules: { 'cell-class-1': settings =&gt; settings.data.quantity === 5, 'cell-class-2': settings =&gt; settings.data.quantity &lt; 5, 'cell-class-3': settings =&gt; settings.data.quantity &gt; 5 }.  The settings object contains the following properties: index, data, row, api.
    *	Property type: {(): void}
    */
    get onBeforeInit(): {
        (): void;
    };
    set onBeforeInit(value: {
        (): void;
    });
    /** Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties.
    *	Property type: {(): void}
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Sets the grid users. Expects an array with 'id', 'name' and optionally 'color' and 'image' properties.
    *	Property type: {(): void}
    */
    get onAfterInit(): {
        (): void;
    };
    set onAfterInit(value: {
        (): void;
    });
    /** Sets the grid's image upload settings for the image columns.
    *	Property type: any
    */
    get onChartInit(): any;
    set onChartInit(value: any);
    /** Describes the paging settings.
    *	Property type: any
    */
    get onRender(): any;
    set onRender(value: any);
    /** Describes the pager settings.
    *	Property type: any
    */
    get onLoad(): any;
    set onLoad(value: any);
    /** Sets the row details.
    *	Property type: {(event: KeyboardEvent): void}
    */
    get onKey(): {
        (event: KeyboardEvent): void;
    };
    set onKey(value: {
        (event: KeyboardEvent): void;
    });
    /** Sets the scroll mode settings.
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowInit(): {
        (index: number, row: GridRow): void;
    };
    set onRowInit(value: {
        (index: number, row: GridRow): void;
    });
    /** Describes the column header settings.
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailInit(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailInit(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** Describes the summary row settings.
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailUpdated(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailUpdated(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** Describes the settings for the group header.
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowHistory(): {
        (index: number, row: GridRow, history: any[]): void;
    };
    set onRowHistory(value: {
        (index: number, row: GridRow, history: any[]): void;
    });
    /** Describes the header settings of the grid.
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowStyle(): {
        (index: number, row: GridRow, history: any[]): void;
    };
    set onRowStyle(value: {
        (index: number, row: GridRow, history: any[]): void;
    });
    /** Describes the footer settings of the grid.
    *	Property type: {(index: number[], row: GridRow[]): void}
    */
    get onRowInserted(): {
        (index: number[], row: GridRow[]): void;
    };
    set onRowInserted(value: {
        (index: number[], row: GridRow[]): void;
    });
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: {(indexes: number[], rows: GridRow[]): void}
    */
    get onRowRemoved(): {
        (indexes: number[], rows: GridRow[]): void;
    };
    set onRowRemoved(value: {
        (indexes: number[], rows: GridRow[]): void;
    });
    /** The rows property is used to describe all rows displayed in the grid.
    *	Property type: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
    */
    get onRowUpdate(): {
        (index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    };
    set onRowUpdate(value: {
        (index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {
            (commit: boolean): void;
        }): void;
    });
    /** Describes the selection settings.
    *	Property type: {(index: number[], row: GridRow[]): void}
    */
    get onRowUpdated(): {
        (index: number[], row: GridRow[]): void;
    };
    set onRowUpdated(value: {
        (index: number[], row: GridRow[]): void;
    });
    /** Describes sorting settings.
    *	Property type: {(index: number, data: any, row: GridRow[]): void}
    */
    get onRowClass(): {
        (index: number, data: any, row: GridRow[]): void;
    };
    set onRowClass(value: {
        (index: number, data: any, row: GridRow[]): void;
    });
    /** undefined
    *	Property type: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}
    */
    get onCellClass(): {
        (index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void;
    };
    set onCellClass(value: {
        (index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void;
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
    *	Property type: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}
    */
    get onColumnClone(): {
        (dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void;
    };
    set onColumnClone(value: {
        (dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void;
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
    *	Property type: any
    */
    get rowCSSRules(): any;
    set rowCSSRules(value: any);
    /** undefined
    *	Property type: string | number
    */
    get currentUser(): string | number;
    set currentUser(value: string | number);
    /** undefined
    *	Property type: any[]
    */
    get users(): any[];
    set users(value: any[]);
    /** undefined
    *	Property type: GridUploadSettings
    */
    get uploadSettings(): GridUploadSettings;
    set uploadSettings(value: GridUploadSettings);
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
    *	Property type: Scrolling | string
    */
    get scrolling(): Scrolling | string;
    set scrolling(value: Scrolling | string);
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
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
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
    /**  This event is triggered, when the edit begins. After the event occurs, editing starts. If you need to prevent the editing for specific cells, rows or columns, you can call event.preventDefault();.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The edited row id.
    *   dataField - The edited column data field.
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    *   data - The edited row's data.
    *   value - The edited cell's value.
    */
    onBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the Grid's header toolbar is displayed and the 'OK' button of a header dropdown is clicked. For example, when you open the columns customize panel, reorder columns and click the 'OK' button.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
    */
    onBatchChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the Grid's header toolbar is displayed and the 'Cancel' button of a header dropdown is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'
    */
    onBatchCancel?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
    *   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
    *   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The clicked column.
    *   dataField - The column's data field.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on the header of a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The double-clicked column.
    *   dataField - The column's data field.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user resized a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
    *   column - The resized column.
    *   dataField - The column's data field.
    *   oldWidth - The old width of the column.
    *   width - The new width of the column.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user starts a column drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   originalEvent - The origianl Event object.
    */
    onColumnDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drops a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   newIndex - The column's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user reorders a column.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column.
    *   dataField - The column's data field.
    *   index - The column's index
    *   newIndex - The column's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onColumnReorder?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user enters a comment in the row edit dialog.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The row's id.
    *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
    */
    onCommentAdd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user removes a comment in the row edit dialog.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The row's id.
    *   comment - The comment object. The comment object has 'text: string', 'id: string', 'userId: string | number', and 'time: date' fields. The 'text' is the comment's text. 'id' is the comment's unique id, 'userId' is the user's id who entered the comment and 'time' is a javascript date object.
    */
    onCommentRemove?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on a context menu item.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
    *   id - The row's id.
    *   dataField - The column's data field.
    *   command - Command function.
    */
    onContextMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user starts a row drag.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   originalEvent - The origianl Event object.
    */
    onRowDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user drags a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   newIndex - The row's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user reorders a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The row.
    *   id - The row's id
    *   index - The row's index
    *   newIndex - The row's new index
    *   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
    *   originalEvent - The origianl Event object.
    */
    onRowReorder?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The expanded row.
    *   id - The row's id
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The collapsed row.
    *   id - The row's id
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    */
    onRowCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
    *   row - The clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onRowClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on a row of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	isRightClick, 	pageX, 	pageY)
    *   row - The double-clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onRowDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user resized a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
    *   row - The resized row.
    *   id - Gets the row id.
    *   oldHeight - The old height of the row.
    *   height - The new height of the row.
    */
    onRowResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on the row header's star.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
    *   row - The clicked row.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   value - Gets whether the row is starred or not.
    */
    onRowStarred?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
    *   cell - The clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   dataField - Gets the column dataField.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the user double clicks on a cell of the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	isRightClick, 	pageX, 	pageY)
    *   cell - The double-clicked cell.
    *   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
    *   id - Gets the row id.
    *   dataField - Gets the column dataField.
    *   isRightClick - Gets whether the pointing device's right button is clicked.
    *   pageX - Gets the click's X position.
    *   pageY - Gets the click's Y position.
    */
    onCellDoubleClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the edit ends.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The edited row id.
    *   dataField - The edited column data field.
    *   row - The edited row.
    *   column - The edited column.
    *   cell - The edited cell.
    *   data - The edited row's data.
    *   value - The edited cell's value.
    */
    onEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when a filter is added or removed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, filter: object}. <em>dataField</em> is the column's data field. <em>filter</em> is a FilterGroup object.
    *   expressions - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'. In each array item, you will have an object with column's name and filter string. Example: [['firstName', 'contains Andrew or contains Nancy'], ['quantity', '&lt;= 3 and &gt;= 8']], [['firstName', 'EQUAL' 'Andrew' or 'EQUAL' 'Antoni' or 'EQUAL' 'Beate']], [['lastName','CONTAINS' 'burke' or 'CONTAINS' 'peterson']]. Filter conditions used in the filter expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the rows grouping is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
    *   groups - Array of column data fields.
    */
    onGroup?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the add new column dialog is opened.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The column data field.
    */
    onOpenColumnDialog?: ((event?: Event) => void) | undefined;
    /**  This event is triggered, when the add new column dialog is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The column data field.
    */
    onCloseColumnDialog?: ((event?: Event) => void) | undefined;
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
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
    *   columns - Array of columns.
    *   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
    *   sortDataFields - Array of column data fields.
    *   sortDataTypes - Array of column data types. The values in the array would be 'string', 'date', 'boolean' or 'number'.
    *   sortOrders - Array of column orders. The values in the array would be 'asc' or 'desc'.
    *   sortIndexes - Array of column sort indexes. When multiple sorting is applied the sort index is an important parameter as it specifies the priority of sorting.
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
    get eventListeners(): string[];
    /** Adds a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {boolean} insertAtBottom?. Determines whether to add the new row to the bottom or top of the collection. The default value is 'true'
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    addRow(data: any, insertAtBottom?: boolean, callback?: {
        (row: GridRow): void;
    }): void;
    /** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addNewRow(position?: string): any;
    /** Adds a new column.
    * @param {any} column. A Grid column object. See 'columns' property.
    * @returns {boolean}
  */
    addNewColumn(column: any): any;
    /** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited.
    * @param {number} count. The count of unbound rows.
    * @param {string} position?. 'near' or 'far'
    * @returns {boolean}
  */
    addUnboundRow(count: number, position?: string): any;
    /** Adds a filter to a column. This method will apply a filter to the Grid data. Example for adding multiple filters to a column: grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"']). Example for adding single filter to a column: grid.addFilter('lastName', 'CONTAINS "burke"'). Example for adding numeric filter:  grid.addFilter('quantity', '&lt;= 5')
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} filter. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @param {boolean} refreshFilters?. Set this to false, if you will use multiple 'addFilter' calls. By doing this, you will avoid unnecessary renders.
    */
    addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
    /** Groups the Grid by a data field. This method will add a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    addGroup(dataField: string): void;
    /** Sorts the Grid by a data field. This method will add a sorting to the Grid when sorting is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} sortOrder. column's sort order. Use 'asc' or 'desc'.
    */
    addSort(dataField: string, sortOrder: string): void;
    /** Auto-sizes grid rows. This method will update the height of all Grid rows.
    */
    autoSizeRows(): void;
    /** Auto-sizes grid columns. This method will update the width of all Grid columns.
    */
    autoSizeColumns(): void;
    /** Auto-sizes grid column. This method will update the width of a Grid column by measuring the cells and column header label width.
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    autoSizeColumn(dataField?: string): void;
    /** This method returns true, if all rows in the Grid are selected.
    * @returns {boolean}
  */
    areAllRowsSelected(): any;
    /** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
    */
    beginUpdate(): void;
    /** Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    beginEdit(rowId: string | number, dataField?: string): void;
    /** Clears all filters. Refreshes the view and updates all filter input components.
    */
    clearFilter(): void;
    /** Clears all data groups. Refreshes the view and updates the DataGrid component.
    */
    clearGroups(): void;
    /** Clears all sorting. Refreshes the view and updates the DataGrid component.
    */
    clearSort(): void;
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
    * @param {any} dataSource?. Chart's data source
    */
    createChart(type: string, dataSource?: any): void;
    /** Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is deleted. The callback's argument is the deleted row.
    */
    deleteRow(rowId: string | number, callback?: {
        (row: GridRow): void;
    }): void;
    /** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {boolean}
  */
    ensureVisible(rowId: string | number, dataField?: string): any;
    /** Ends the editing. This method confirms all changes and closes the opened cell editor(s).
    */
    endEdit(): void;
    /** Ends the update operation. This method will resume the rendering and will refresh the Grid.
    * @param {boolean} refresh?. The flag that control the calls of the refresh method.
    */
    endUpdate(refresh?: boolean): void;
    /** Expands a TreeGrid or Grouping row. For example, if you want to expand the first group, then its second sub grup, then the first sub sub group, you can use: grid.expandRow('0.1.0');
    * @param {string | number} rowId. row bound id
    */
    expandRow(rowId: string | number): void;
    /** Expands rows to a given group level. For example 'grid.expandRowsToGroupLevel(1);' means that all groups at the root level will be expanded.
    * @param {number} level. row group level
    */
    expandRowsToGroupLevel(level: number): void;
    /** Expands all TreeGrid or Grouping rows.
    */
    expandAllRows(): void;
    /** Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property.
    * @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    */
    exportData(Dataformat: string): void;
    /** Finds entries by using a query and returns an array of row ids. Example: const rows = grid.find('nancy'); returns all rows that have 'nancy' value. Example 2: const rows = grid.find('nancy, davolio'); returns all rows that have 'nancy' and 'davolio' values in the same row. Example 3: const rows = grid.find(5, 'quantity', '>'); returns all rows where the value of the 'quantity' field is > 5.
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    * @returns {any[]}
  */
    find(query: string, dataField?: string, condition?: string): any;
    /** Finds entries by using a query and returns an array of cells. Each cell in the array is also an array in this format: [id, dataField, value]. Example: const cells = grid.findCells('nancy'); returns all cells that have 'nancy' value. Example 2: const cells = grid.findCells('nancy, davolio'); returns all cells that have 'nancy' and 'davolio' values.
    * @param {string} query. Search query. You can enter multiple search strings, by using ','. Example: 'nancy, davolio'
    * @returns {any[]}
  */
    findCells(query: string): any;
    /** Navigates to a page, when paging is enabled.
    * @param {number} index. page index
    */
    goToPage(index: number): void;
    /** Navigates to the next page, when grid paging is enabled.
    */
    nextPage(): void;
    /** Navigates to the prev page, when grid paging is enabled.
    */
    prevPage(): void;
    /** Navigates to the first page, when grid paging is enabled.
    */
    firstPage(): void;
    /** Navigates to the last page, when grid paging is enabled.
    */
    lastPage(): void;
    /** Focuses and selects a cell or row. The keyboard navigation starts from the focused cell or row. Any previously applied selection will be cleared after calling this method.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field
    */
    focusAndSelect(rowId: string | number, dataField?: string): void;
    /** Iterates through each row in the grid and calls the callback for each row. This is similar to the forEach method on a JavaScript array. This is called for each row, ignoring grouping, filtering or sorting applied in the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRow(rowCallback: any): void;
    /** Similar to forEachRow. Iterates through each row in the grid and calls the callback for each row. This method takes into account filtering and sorting applied to the Grid.
    * @param {any} rowCallback. Callback function with a row object as parameter. Example: grid.forEachRow((row) => { console.log(row.id) });
    */
    forEachRowAfterFilterAndSort(rowCallback: any): void;
    /** Gets the maximum position of the vertical scrollbar. You can use this method in combination with the setVerticalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getVerticalScrollMax(): any;
    /** Gets the position of the vertical scrollbar.
    * @returns {number}
  */
    getVerticalScrollValue(): any;
    /** Gets the maximum position of the horizontal scrollbar. You can use this method in combination with the setHorizontalScrollValue to apply a new scroll position.
    * @returns {number}
  */
    getHorizontalScrollMax(): any;
    /** Gets the position of the horizontal scrollbar.
    * @returns {number}
  */
    getHorizontalScrollValue(): any;
    /** Gets the columns array. Each item in the array contains the column properties which are dynamically set by the user interaction and the columns initialization data properties such as: 'label', 'dataField', 'dataType', 'visible'.
    * @returns {any}
  */
    getColumns(): any;
    /** Gets the editing cell(s), when the grid is editing.
    * @returns {any[]}
  */
    getEditCells(): any;
    /** Gets the groups array.
    * @returns {any[]}
  */
    getGroups(): any;
    /** Gets an array of columns with applied sorting. Each member in the array is with column's data field used as a key and 'sortOrder' and 'sortIndex' as a value.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns(): any;
    /** Gets the selection.
    * @returns {any}
  */
    getSelection(): any;
    /** Gets an Array where each item is an Array of row id and row data. If the Grid is used in virtual mode, the row data parameter is empty object, because the data is loaded on demand.
    * @returns {any[]}
  */
    getSelectedRows(): any;
    /** Gets the selected row ids.
    * @returns {any[]}
  */
    getSelectedRowIds(): any;
    /** Gets the selected row indexes.
    * @returns {any[]}
  */
    getSelectedRowIndexes(): any;
    /** Gets the selected cells. The method returns an array of cell. Each cell is an array with row id, column data field and cell value.
    * @returns {any[]}
  */
    getSelectedCells(): any;
    /** Gets an array of columns with applied filters.
    * @returns {any}
  */
    getFilteredColumns(): any;
    /** Gets an array of rows, which are visible and match the applied filter.
    * @returns {any}
  */
    getVisibleRows(): any;
    /** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode.
    * @returns {any}
  */
    getViewRows(): any;
    /** Gets a JSON object with the following fields: 'sort', 'filter', 'groups', 'paging', 'selectedCells', 'selectedrows'.
    * @returns {any}
  */
    getState(): any;
    /** Gets the changes from the batch edit.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges(): any;
    /** Gets a value of a cell.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {any}
  */
    getCellValue(rowId: string | number, dataField: string): any;
    /** Gets a column. Returns a Grid column object.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @returns {GridColumn}
  */
    getColumn(dataField: string): any;
    /** Gets a value of a column.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getColumnProperty(dataField: string, propertyName: string): any;
    /** Gets a value of a row.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The property name.
    * @returns {any}
  */
    getRowProperty(rowId: string | number, propertyName: string): any;
    /** Gets a row. Returns a Grid row object.
    * @param {string | number} rowId. row bound id
    * @returns {GridRow}
  */
    getRow(rowId: string | number): any;
    /** Gets a row by its index. Returns a Grid row object.
    * @param {number} rowIndex. row bound index
    * @returns {GridRow}
  */
    getRowByIndex(rowIndex: number): any;
    /** Gets the Data source data associated to the row.
    * @param {string | number} rowId. row bound id
    * @returns {any}
  */
    getRowData(rowId: string | number): any;
    /** Gets the Row's id by a row index.
    * @param {number} rowIndex. row index
    * @returns {string | number}
  */
    getRowId(rowIndex: number): any;
    /** Gets whether a column's drop-down menu is opened.
    * @returns {boolean}
  */
    hasMenu(): any;
    /** This method returns true, if any rows in the Grid are selected.
    * @returns {boolean}
  */
    hasSelectedRows(): any;
    /** Hides the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    */
    hideDetail(rowId: string | number): void;
    /** Highlights a column. Highlights a Grid column.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    highlightColumn(dataField: string): void;
    /** Highlights a cell. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} className?. CSS Class Name
    */
    highlightCell(rowId: string | number, dataField: string, className?: string): void;
    /** Highlights a row. Calling the method a second time toggle the highlight state.
    * @param {string | number} rowId. row bound id
    * @param {string} className?. CSS Class Name
    */
    highlightRow(rowId: string | number, className?: string): void;
    /** Inserts a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {any} data. row data matching the data source
    * @param {number} index?. Determines the insert index. The default value is the last index.
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the new row is added. The callback's argument is the new row.
    */
    insertRow(data: any, index?: number, callback?: {
        (row: GridRow): void;
    }): void;
    /** Opens a column drop-down menu.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    openMenu(dataField: string): void;
    /** Opens a context menu. Note that context menu should be enabled.
    * @param {number} left. Left Position.
    * @param {number} top. Top Position.
    */
    openContextMenu(left: number, top: number): void;
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
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {boolean} refreshFilters?. Set this to false, if you need to make multiple removeFilter calls.
    */
    removeFilter(dataField: string, refreshFilters?: boolean): void;
    /** Removes a column filter.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeGroup(dataField: string): void;
    /** Removes a group by data field. This method will remove a group to the Grid when grouping is enabled.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    removeSort(dataField: string): void;
    /** Removes a sorting by data field. This method will remove a sorting from a Grid column.
    */
    refreshSort(): void;
    /** Re-sorts the Grid by using the already applied column sortings and re-renders the Grid.
    */
    revertBatchEdit(): void;
    /** Reverts the batch edit changes. This method cancels all changes made by the end-user.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    * @param {boolean} insertAfter?. Determines whether to insert the first column after the reference column.
    */
    reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
    /** Reorders two DataGrid columns.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | null} sortOrder. column's sort order. Use 'asc', 'desc' or null.
    */
    sortBy(dataField: string, sortOrder: string | null): void;
    /** Sorts the Grid by a data field. This method will add or remove sorting, when sorting is enabled. To remove the sorting, use 'null' for the sortOrder parameter.
    * @param {string | number} dataField. The data field or column index of the first grid column.
    * @param {string | number} referenceDataField. The data field or column index of the second grid column.
    */
    swapColumns(dataField: string | number, referenceDataField: string | number): void;
    /** Swaps two DataGrid columns.
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
    * @param {string | number} endRowId. row bound id
    */
    selectRowsRange(rowId: string | number, endRowId: string | number): void;
    /** Selects a range of rows.
    * @param {(string | number)[]} rowId. Array of row ids
    */
    selectRows(rowId: (string | number)[]): void;
    /** Selects multiple rows by their ids.
    */
    selectAllRows(): void;
    /** Selects all rows.
    * @param {number[]} rowIndex. Array of row indexes
    */
    selectRowsByIndex(rowIndex: number[]): void;
    /** Selects multiple rows by their index.
    * @param {string} query. Search query
    * @param {string} dataField?. Column data field.
    * @param {string} condition?. Conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    selectRowsByQuery(query: string, dataField?: string, condition?: string): void;
    /** Selects rows by using a query. Example: grid.selectRowsByQuery('nancy'); selects all rows that have 'nancy' value. Example 2: grid.selectRowsByQuery('nancy, davolio'); selects all rows that have 'nancy' and 'davolio' values in the same row. Example 3: grid.selectRowsByQuery(5, 'quantity', '>'); selects all rows where the value of the 'quantity' field is > 5.
    * @param {(string | number)[]} rowIds. Array of row ids
    * @param {string[]} dataFields. Array of data fields.
    */
    selectCells(rowIds: (string | number)[], dataFields: string[]): void;
    /** Selects multiple cells by their ids and dataFields. Example: grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']); - selects the 'firstName', 'quantity' and 'date' cells from the first, second and third rows.
    * @param {string} query. Search query
    */
    selectCellsByQuery(query: string): void;
    /** Selects cells by using a query. Example: grid.selectCellsByQuery('nancy'); selects all cells that have 'nancy' value. Example 2: grid.selectCellsByQuery('nancy, davolio'); selects all cells that have 'nancy' and 'davolio' values in the same row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string | number | Date | boolean} value. New Cell value.
    */
    setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
    /** Sets a new value to a cell.
    * @param {GridColumn[]} columns. Columns array.
    */
    setColumns(columns: GridColumn[]): void;
    /** Sets new columns to the Grid. The grid will redraw all the column headers, and then redraw all of the rows. By using 'setColumns', the grid will compare the new columns passed as argument to the method with existing columns. The Grid will automatically create new columns, keep old columns if they already exist and remove columns which are not in the 'setColumns' method argument. The benefit of that is that the state of the column like(sort, filter, width or other) will be kept, if the column exsits after the new columns are applied.
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} propertyName. The column property's name.
    * @param {any} value. The new property value.
    */
    setColumnProperty(dataField: string, propertyName: string, value: any): void;
    /** Sets a property to a column.
    * @param {string | number} rowId. row bound id
    * @param {string} propertyName. The row property's name.
    * @param {any} value. The new property value.
    */
    setRowProperty(rowId: string | number, propertyName: string, value: any): void;
    /** Sets a property to a row.
    * @param {string | number} rowId. row bound id
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The row style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setRowStyle(rowId: string | number, rowStyle: {
        background?: string;
        color?: string;
        fontSize?: string;
        fontFamily?: string;
        textDecoration?: string;
        fontStyle?: string;
        fontWeight?: string;
    }): void;
    /** Sets a style to a row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. Column bound field name.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. The cell style object. The object may have one or all of the following properties: 'background', 'color', 'fontSize', 'fontFamily', 'textDecoration', 'fontStyle', 'fontWeight'.
    */
    setCellStyle(rowId: string | number, dataField: string, rowStyle: {
        background?: string;
        color?: string;
        fontSize?: string;
        fontFamily?: string;
        textDecoration?: string;
        fontStyle?: string;
        fontWeight?: string;
    }): void;
    /** Sets a style to a row.
    * @param {number} value. The new scroll position
    */
    setVerticalScrollValue(value: number): void;
    /** Sets the position of the vertical scrollbar. You can use this method in combination with the getVerticalScrollValue and getVerticalScrollMax.
    * @param {number} value. The new scroll position
    */
    setHorizontalScrollValue(value: number): void;
    /** Sets the position of the horizontal scrollbar. You can use this method in combination with the getHorizontalScrollValue and getHorizontalScrollMax.
    * @param {string | number} rowId. row bound id
    */
    showDetail(rowId: string | number): void;
    /** Shows the Details of a Row, when row details are enabled.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId: string | number, data: any, callback?: {
        (row: GridRow): void;
    }): void;
    /** Updates a row. When batch editing is enabled, the row is not saved until the batch edit is saved.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
