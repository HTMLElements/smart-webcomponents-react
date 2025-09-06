import React from "react";
import { GridProperties } from "./../index";
import { Scrolling, GridAppearance, GridAi, GridBehavior, GridColumnHeader, GridClipboard, GridColumn, GridContextMenu, GridColumnMenu, GridColumnGroup, GridConditionalFormatting, GridCharting, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridEditing, GridFiltering, GridFooter, GridGrouping, GridGroupHeader, GridHeader, GridLayout, GridPaging, GridPager, GridRowDetail, GridRow, GridCell, GridSummaryRow, GridStateSettings, GridSelection, GridSorting, GridUploadSettings } from './../index';
export { GridProperties } from "./../index";
export { GridAppearanceAutoGenerateRowLabelMode, GridAppearanceAutoGenerateColumnLabelMode, GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnFilterMenuMode, GridColumnSortOrder, GridConditionalFormattingCondition, GridDataExportPageOrientation, GridDataSourceSettingsSanitizeHTML, GridDataSourceSettingsDataFieldDataType, GridDataSourceSettingsDataSourceType, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridEditingAddNewRowDisplayMode, GridFilteringFilterRowApplyMode, GridFilteringFilterMenuMode, GridGroupingExpandMode, GridGroupingRenderMode, GridHeaderSearchCommand, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridSortingCommandKey, GridAppearance, GridAi, GridBehavior, GridColumnHeader, GridClipboard, GridColumn, GridContextMenu, GridContextMenuDataSource, GridCommand, GridColumnMenu, GridColumnMenuDataSource, GridColumnGroup, GridConditionalFormatting, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridDataSourceSettings, GridDataSourceSettingsDataField, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridEditingAddNewColumn, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridFooter, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridGroupHeader, GridHeader, GridLayout, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridRow, GridCell, GridSummaryRow, GridStateSettings, GridSelection, GridSelectionCheckBoxes, GridSorting, GridUploadSettings } from './../index';
export { DataAdapter, Chart } from './../index';
declare let Smart: any;
export { Smart };
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
    onColumnChange?: ((event?: Event) => void) | undefined;
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
    /** An object that defines configurable options for customizing the visual appearance of the grid, including properties such as line color, spacing, background style, and border visibility.
    *	Property type: GridAppearance
    */
    get appearance(): GridAppearance;
    set appearance(value: GridAppearance);
    /** An object that defines configuration options for integrating AI capabilities within the grid component. This includes settings for enabling AI features, specifying AI service endpoints, setting authentication credentials, and customizing how the grid interacts with AI-powered functionalities.
    *	Property type: GridAi
    */
    get ai(): GridAi;
    set ai(value: GridAi);
    /** An object that defines configuration options controlling the grid’s behavior, such as layout properties, sorting and filtering capabilities, selection modes, and responsiveness settings.
    *	Property type: GridBehavior
    */
    get behavior(): GridBehavior;
    set behavior(value: GridBehavior);
    /** Sets or retrieves the id of the currently active user. This value must match the id of one of the entries in the users property or array. The active user's privileges and access rights are determined based on their corresponding user object. If no current user is specified (i.e., the id is unset or invalid), the default privileges for the element will apply according to its properties, potentially restricting or allowing access based on default settings.
    *	Property type: string | number
    */
    get currentUser(): string | number;
    set currentUser(value: string | number);
    /** Provides configuration options for customizing the appearance, labels, alignment, and behavior of column headers in a data table or grid.
    *	Property type: GridColumnHeader
    */
    get columnHeader(): GridColumnHeader;
    set columnHeader(value: GridColumnHeader);
    /** The clipboard property controls whether users can perform clipboard operations—such as copying (Ctrl+C), cutting (Ctrl+X), and pasting (Ctrl+V)—using keyboard shortcuts within the application. Setting this property to true enables these keyboard shortcuts for clipboard actions; setting it to false disables them, preventing users from using keyboard navigation for copying, cutting, or pasting content.
    *	Property type: GridClipboard
    */
    get clipboard(): GridClipboard;
    set clipboard(value: GridClipboard);
    /** The columns property defines the collection of columns displayed within the Smart.Grid component. Each column configuration specifies how data is presented and interacted with. Through this property, you can control essential aspects such as column headers, data field bindings, sorting, filtering, formatting, alignment, visibility, and more. The columns property gives you full control over the structure, appearance, and behavior of the grid's columns, enabling advanced customization of both data presentation and user experience.
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
    /** The Context Menu is the drop-down menu that appears when a user right-clicks on a row within the Grid. This menu provides quick access to actions such as deleting a row or editing a cell or entire row, depending on the current editing mode configured for the Grid. You can customize the Context Menu by using the 'contextMenuItemCustom' option in the Grid's dataSource. This option lets you add your own custom menu items to enhance or extend the menu's functionality.Additionally, if you want to completely replace the default context menu with your own, you can use the 'selector' property. Set this property to the ID of a Smart.Menu component to display your custom menu when the user right-clicks on a row in the Grid.
    *	Property type: GridContextMenu
    */
    get contextMenu(): GridContextMenu;
    set contextMenu(value: GridContextMenu);
    /** The Column Menu is a contextual drop-down menu that appears when you click the drop-down button in a column header, which becomes visible upon hovering over the header. This menu provides various options for customizing the behavior and appearance of the selected column. Common actions include sorting the grid by the column, applying filters to show or hide specific data, and grouping the grid rows based on the column’s values. The Column Menu offers an intuitive way for users to interact with and tailor the data grid to meet their specific needs.
    *	Property type: GridColumnMenu
    */
    get columnMenu(): GridColumnMenu;
    set columnMenu(value: GridColumnMenu);
    /** Provides a detailed configuration of column group settings, including group names, ordering, visibility, and any hierarchical relationships between columns within the group.
    *	Property type: GridColumnGroup[]
    */
    get columnGroups(): GridColumnGroup[];
    set columnGroups(value: GridColumnGroup[]);
    /**
    *	Property type: boolean
    */
    get dropDownMode(): boolean;
    set dropDownMode(value: boolean);
    /** Defines or retrieves the rules and settings for conditional formatting applied to the Grid's cells, allowing you to customize cell appearance (such as background color, font style, or icons) based on specific conditions or cell values.
    *	Property type: GridConditionalFormatting[]
    */
    get conditionalFormatting(): GridConditionalFormatting[];
    set conditionalFormatting(value: GridConditionalFormatting[]);
    /** Configures the data and display settings for the Grid Chart, enabling data visualization in a tabular grid format. This includes specifying the structure, appearance, and interactive features of the chart to present complex data clearly and intuitively.
    *	Property type: GridCharting
    */
    get charting(): GridCharting;
    set charting(value: GridCharting);
    /** Configures the checkbox options for the TreeGrid component, allowing you to enable or customize checkbox display, selection behavior, and interaction within the hierarchical grid structure.
    *	Property type: GridCheckBoxes
    */
    get checkBoxes(): GridCheckBoxes;
    set checkBoxes(value: GridCheckBoxes);
    /** Configures the export settings for grid data, including file format, selected columns, data range, export style, and additional export preferences.
    *	Property type: GridDataExport
    */
    get dataExport(): GridDataExport;
    set dataExport(value: GridDataExport);
    /** Specifies the source from which the grid retrieves its data. The dataSource property accepts either an instance of JQX.DataAdapter for advanced data management and operations, or a standard Array containing the data records to be displayed in the grid. This flexibility allows developers to connect the grid to various data formats and structures, making data binding straightforward and versatile.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Configures the grid’s data source when the dataSource property is assigned either a JavaScript array (for local data) or a URL (for remote data). This setting determines how the grid retrieves and displays its data, supporting both direct array binding and remote data fetching via HTTP requests.
    *	Property type: GridDataSourceSettings
    */
    get dataSourceSettings(): GridDataSourceSettings;
    set dataSourceSettings(value: GridDataSourceSettings);
    /** Provides comprehensive configuration options for controlling the grid's editing behavior, including enabling or disabling editing features, specifying editing modes (such as inline, popup, or batch), setting validation rules, and customizing editors for specific columns.
    *	Property type: GridEditing
    */
    get editing(): GridEditing;
    set editing(value: GridEditing);
    /** Provides detailed configuration options for the grid's filtering functionality, including filter types, default filter values, filter operators, and custom filter logic for columns. This determines how data within the grid can be searched, narrowed, or displayed based on user-defined criteria.
    *	Property type: GridFiltering
    */
    get filtering(): GridFiltering;
    set filtering(value: GridFiltering);
    /** Provides configuration options for customizing the appearance and behavior of the grid's footer, including visibility, content, styling, and layout settings.
    *	Property type: GridFooter
    */
    get footer(): GridFooter;
    set footer(value: GridFooter);
    /** Enables or retrieves the ability to use Excel-style formulas as cell values within the table. Formulas must begin with an equal sign (=) and will be automatically recalculated whenever the referenced cell values are updated. This functionality relies on the third-party, free formula-parser plugin, so you must include the file 'formula-parser.min.js' in your project for this feature to work properly.
    *	Property type: boolean
    */
    get formulas(): boolean;
    set formulas(value: boolean);
    /** Provides detailed configuration options for the grid's data grouping functionality, specifying how rows are grouped, the grouping criteria, and related display settings within the grid.
    *	Property type: GridGrouping
    */
    get grouping(): GridGrouping;
    set grouping(value: GridGrouping);
    /** Provides configuration options that define the appearance and behavior of the group header, including properties such as text, style, alignment, and visibility settings.
    *	Property type: GridGroupHeader
    */
    get groupHeader(): GridGroupHeader;
    set groupHeader(value: GridGroupHeader);
    /** Provides detailed configuration options for the grid's header, including display settings, styling, visibility, and customization of header rows and columns.
    *	Property type: GridHeader
    */
    get header(): GridHeader;
    set header(value: GridHeader);
    /** An object that defines configuration options for the layout of the grid, including properties such as the number of columns, row and column spacing, alignment, and overall grid arrangement. This object allows you to customize the appearance and structure of the grid according to your requirements.
    *	Property type: GridLayout
    */
    get layout(): GridLayout;
    set layout(value: GridLayout);
    /** Sets or retrieves the unlockKey used to authorize and access the full functionality of the product. The unlockKey serves as a security credential to enable locked or premium features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies the language code to be used for displaying messages. When set, it determines which localized messages from the messages property are shown to the user. This property can be used to retrieve the current language or update it dynamically at runtime.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** 'Key Handling:'  You can customize how key presses are handled by defining key mappings within the configuration. For each key (e.g., '"Enter"'), you can assign:- 'Another key as the value' (e.g., '"Enter": "Tab"'): When the specified key is pressed, it will be treated as if the mapped key was pressed instead.- 'A predefined action' (e.g., ''copy'', ''copyPrev'', ''copyNext'', ''delete''): When the key is pressed, the associated action will be executed.- 'A custom function': Assign a function as the value to execute custom logic whenever the key is pressed.This allows you to remap keys, trigger built-in actions, or define entirely custom behaviors based on key events in your application.
    *	Property type: any
    */
    get keys(): any;
    set keys(value: any);
    /** Assigns values to the messages property, which typically contains an array or object representing individual messages or notifications. This function or setting updates the content, ensuring that the correct message data is stored or displayed.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Callback function (chart: JQX.Chart) invoked after the chart has been fully initialized. Use this function to perform additional configuration or customization of the chart instance, such as modifying chart options, adding event listeners, or updating data before the chart is rendered to the user. This allows you to tailor the chart's appearance and behavior to meet specific application requirements.
    *	Property type: {(cell: GridCell): void}
    */
    get onCellValue(): {
        (cell: GridCell): void;
    };
    set onCellValue(value: {
        (cell: GridCell): void;
    });
    /** A callback function that is executed immediately after the grid has finished rendering, allowing you to perform additional actions or updates once the grid display is complete.
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
    /** Callback function invoked after the grid has been rendered for the first time and all data bindings have been completed. At this point, the component is fully initialized and ready for interaction or further manipulation.
    *	Property type: {(cell: GridCell): void}
    */
    get onCellRender(): {
        (cell: GridCell): void;
    };
    set onCellRender(value: {
        (cell: GridCell): void;
    });
    /** Provides detailed configuration options for managing pagination, including parameters such as the number of items per page, current page index, and total number of pages. This section ensures efficient data retrieval and navigation across multiple pages of results.
    *	Property type: {(id: string, dataField: string, value: any): boolean}
    */
    get onCellBeginEdit(): {
        (id: string, dataField: string, value: any): boolean;
    };
    set onCellBeginEdit(value: {
        (id: string, dataField: string, value: any): boolean;
    });
    /** Provides detailed configuration options for pager controls, including settings for page size, navigation buttons, and display style. These options determine how pagination is displayed and how users interact with paged content in the interface.
    *	Property type: {(id: string, dataField: string, value: any, oldValue: any, data: any): void}
    */
    get onCellEditRequest(): {
        (id: string, dataField: string, value: any, oldValue: any, data: any): void;
    };
    set onCellEditRequest(value: {
        (id: string, dataField: string, value: any, oldValue: any, data: any): void;
    });
    /** Configures or updates the detailed information or content associated with a specific row, often used to display additional data or expanded views for that row.
    *	Property type: {(id: string, dataField: string, value: any): boolean}
    */
    get onCellValueChanged(): {
        (id: string, dataField: string, value: any): boolean;
    };
    set onCellValueChanged(value: {
        (id: string, dataField: string, value: any): boolean;
    });
    /** Sets or gets the CSS class rules for table rows. This property allows you to conditionally apply different CSS class names to rows based on custom logic. You provide an object where the keys are CSS class names and the values are functions that determine whether the class should be applied to a particular row.Each function receives a settings object with the following properties:- 'index': The numerical index of the current row.- 'data': The data object for the current row.- 'row': The raw row element or reference (depending on the implementation).- 'api': A reference to the table's API for advanced operations.'Example usage:''''jsrowCSSRules: {  'cell-class-1': settings => settings.data.quantity === 5,  'cell-class-2': settings => settings.data.quantity   'cell-class-3': settings => settings.data.quantity > 5}'''In this example, based on the 'quantity' property of the row's data, a different CSS class will be applied to that row. Multiple rules can be defined, and each will be evaluated for every row. If the function returns 'true', the corresponding class will be added to the row.
    *	Property type: {(): void}
    */
    get onBeforeInit(): {
        (): void;
    };
    set onBeforeInit(value: {
        (): void;
    });
    /** Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages, ensuring proper layout and text direction for locales such as Arabic or Hebrew.
    *	Property type: {(): void}
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** The rows property contains an array of objects, with each object representing a single row in the grid. This property defines all the data entries that are rendered and displayed as rows within the grid component. Each element in the rows array should align with the column definitions, ensuring that the grid displays structured and consistent data across all rows.
    *	Property type: {(): void}
    */
    get onAfterInit(): {
        (): void;
    };
    set onAfterInit(value: {
        (): void;
    });
    /** Configures the scroll mode behavior, allowing you to define how scrolling is handled within the component or page. This setting determines options such as smooth or instant scrolling, vertical or horizontal direction, and any custom scroll-related parameters.
    *	Property type: any
    */
    get onChartInit(): any;
    set onChartInit(value: any);
    /** Provides detailed configuration options for displaying and customizing the summary row, including its appearance, position, aggregation methods, and which columns are summarized.
    *	Property type: any
    */
    get onRender(): any;
    set onRender(value: any);
    /** Configures the grid's state-related settings, including properties such as selection, sorting, filtering, pagination, and layout. This determines how the grid maintains and restores its current state during user interactions or when the page is reloaded.
    *	Property type: any
    */
    get onLoad(): any;
    set onLoad(value: any);
    /** Provides detailed configuration options for user selection behavior, including parameters such as selection mode (single or multiple), default selections, selection limits, and customizable callbacks for selection events.
    *	Property type: {(event: KeyboardEvent): void}
    */
    get onKey(): {
        (event: KeyboardEvent): void;
    };
    set onKey(value: {
        (event: KeyboardEvent): void;
    });
    /** Provides detailed configuration options for controlling how data is sorted, including criteria such as sorting field, order (ascending or descending), and support for multiple sort keys.
    *	Property type: {(index: number, row: GridRow): void}
    */
    get onRowInit(): {
        (index: number, row: GridRow): void;
    };
    set onRowInit(value: {
        (index: number, row: GridRow): void;
    });
    /** Defines the users displayed on the grid. Expects an array of user objects, where each object must include an 'id' (unique identifier) and a 'name' (display name). Optionally, each user object can also include a 'color' (for customizing the user's appearance) and an 'image' (URL or path to the user's avatar image).
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailInit(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailInit(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** Configures the upload settings for images and attachments in the grid's image and attachment columns, including options for file type restrictions, size limits, and image filters to be applied during the upload process.
    *	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
    */
    get onRowDetailUpdated(): {
        (index: number, row: GridRow, details: HTMLElement): void;
    };
    set onRowDetailUpdated(value: {
        (index: number, row: GridRow, details: HTMLElement): void;
    });
    /** Specifies the layout mode for displaying data within the interface. Acceptable values are:- ''grid'': Presents items in a tabular, spreadsheet-like format with rows and columns.- ''kanban'': Arranges items into columns representing workflow stages, similar to task boards.- ''card'': Displays each item as an individual card, typically used for concise summaries or visual grouping.Choose one of these values to determine how data is visually organized and presented to the user.
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowHistory(): {
        (index: number, row: GridRow, history: any[]): void;
    };
    set onRowHistory(value: {
        (index: number, row: GridRow, history: any[]): void;
    });
    /** undefined
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowStyle(): {
        (index: number, row: GridRow, history: any[]): void;
    };
    set onRowStyle(value: {
        (index: number, row: GridRow, history: any[]): void;
    });
    /** undefined
    *	Property type: {(index: number[], row: GridRow[]): void}
    */
    get onRowInserted(): {
        (index: number[], row: GridRow[]): void;
    };
    set onRowInserted(value: {
        (index: number[], row: GridRow[]): void;
    });
    /** undefined
    *	Property type: {(indexes: number[], rows: GridRow[]): void}
    */
    get onRowRemoved(): {
        (indexes: number[], rows: GridRow[]): void;
    };
    set onRowRemoved(value: {
        (indexes: number[], rows: GridRow[]): void;
    });
    /** undefined
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
    /** undefined
    *	Property type: {(index: number[], row: GridRow[]): void}
    */
    get onRowUpdated(): {
        (index: number[], row: GridRow[]): void;
    };
    set onRowUpdated(value: {
        (index: number[], row: GridRow[]): void;
    });
    /** undefined
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
    *	Property type: any
    */
    get rowCSSRules(): any;
    set rowCSSRules(value: any);
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
    *	Property type: Scrolling | string
    */
    get scrolling(): Scrolling | string;
    set scrolling(value: Scrolling | string);
    /** undefined
    *	Property type: GridSummaryRow
    */
    get summaryRow(): GridSummaryRow;
    set summaryRow(value: GridSummaryRow);
    /** undefined
    *	Property type: GridStateSettings
    */
    get stateSettings(): GridStateSettings;
    set stateSettings(value: GridStateSettings);
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
    *	Property type: string
    */
    get view(): string;
    set view(value: string);
    get properties(): string[];
    /**  This event is fired when a cell transitions into edit mode. Within the event handler, you can prevent the editing action for specific cells, rows, or columns by invoking event.preventDefault(). This allows you to control which cells are editable based on custom logic or application requirements.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The unique identifier of the edited row.
    *   dataField - The data field (column) associated with the edited cell.
    *   row - The edited row's full configuration object.
    *   column - The column configuration of the edited cell.
    *   cell - The edited cell object.
    *   data - The complete data record of the edited row.
    *   value - The current value of the edited cell.
    */
    onBeginEdit?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user confirms a batch action by clicking the 'OK' button in a Grid header dropdown. Typical actions include column customization, applying sorting, or setting filters. This event signifies that the changes selected in the dropdown have been finalized and applied to the Grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown where the batch change occurred. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'.
    */
    onBatchChange?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user clicks the 'Cancel' button in the header dropdown of a Grid, thereby aborting an ongoing batch operation. This event allows you to handle cleanup or UI updates when a batch process is intentionally stopped before completion.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of dropdown where the cancellation occurred. Possible values: 'filter', 'sort', 'search', 'group', 'format', 'customize'.
    */
    onBatchCancel?: ((event?: Event) => void) | undefined;
    /**  Fires whenever the selection within the Grid changes. During drag selection, this event is emitted both at the beginning of the drag operation and again when the selection is completed, allowing you to respond to both initiation and completion of drag-based selection changes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
    *   started - Set to <em>true</em> when selection begins; <em>false</em> otherwise.
    *   finished - Set to <em>true</em> when selection ends; <em>false</em> otherwise.
    *   originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the selection change.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user clicks on a column header in a table or grid, typically to initiate actions such as sorting, filtering, or displaying additional options related to that column. This event provides context about which column was interacted with, allowing developers to implement responsive behaviors based on user actions.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The column configuration object of the clicked header.
    *   dataField - The data field associated with the clicked column.
    *   originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the click.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  Fires when a user double-clicks on a column header, typically to initiate actions such as resizing, sorting, or customizing the corresponding column. The event provides information about the specific column that was interacted with, allowing you to implement custom logic in response to the double-click.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	originalEvent)
    *   column - The column configuration object of the double-clicked header.
    *   dataField - The data field associated with the double-clicked column.
    *   originalEvent - The native DOM event (pointer, touch, or mouse) that triggered the double-click.
    */
    onColumnDoubleClick?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user adjusts the width of a column by dragging the boundary line in the column header. This event fires continuously as the header boundary is moved, allowing real-time updates to the column size.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	oldWidth, 	width)
    *   column - The resized column's configuration object.
    *   dataField - The data field associated with the resized column.
    *   oldWidth - The previous width of the column.
    *   width - The new width of the column after resizing.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  Fires when the user begins dragging a column to change its position within the column order. This event marks the start of a column reordering operation and can be used to implement visual feedback, custom logic, or to track changes in the column arrangement during a drag-and-drop interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	originalEvent)
    *   column - The configuration object of the column being dragged.
    *   dataField - The data field associated with the column being dragged.
    *   index - The index of the column within the grid.
    *   originalEvent - The native DOM event that initiated the column drag.
    */
    onColumnDragStart?: ((event?: Event) => void) | undefined;
    /**  Triggered whenever a property of a column is modified, either through user interaction (such as editing in the UI) or by programmatic changes made via code. This event allows you to respond to any updates in column properties, regardless of how the change was initiated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	propertyName, 	oldValue, 	value)
    *   column - The column whose property was changed.
    *   propertyName - The name of the property that was changed.
    *   oldValue - The previous value(s) of the changed property.
    *   value - The new value(s) of the changed property.
    */
    onColumnChange?: ((event?: Event) => void) | undefined;
    /**  This event is fired repeatedly for as long as the user is actively dragging a column. It provides real-time updates during the entire drag operation, allowing you to implement responsive behaviors or visual feedback as the column is being repositioned.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	data, 	originalEvent)
    *   column - The column being dragged.
    *   dataField - The data field of the dragged column.
    *   index - The current index of the dragged column.
    *   data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
    *   originalEvent - The original browser event that triggered the dragging.
    */
    onColumnDragging?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user releases the mouse button to drop a column after dragging it, indicating the end of a column drag-and-drop operation. This event can be used to update the column order or perform actions based on the new column arrangement.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The column that was dragged.
    *   dataField - The data field of the dragged column.
    *   index - The original index of the column before dragging.
    *   newIndex - The new index of the column after dragging.
    *   data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
    *   originalEvent - The original browser event that finalized the dragging.
    */
    onColumnDragEnd?: ((event?: Event) => void) | undefined;
    /**  Fires when the user changes the order of columns by dragging and repositioning a column within the interface. This event occurs after the column has been successfully moved to its new position.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	dataField, 	index, 	newIndex, 	data, 	originalEvent)
    *   column - The reordered column.
    *   dataField - The data field of the reordered column.
    *   index - The column's previous index before reorder.
    *   newIndex - The column's new index after reorder.
    *   data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
    *   originalEvent - The original browser event associated with the reorder.
    */
    onColumnReorder?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user submits a new comment within the row edit dialog, typically as part of editing or updating a row's information. This event provides the context of the edited row and the content of the newly added comment, allowing for real-time updates or further processing.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The unique ID of the row where the comment was added.
    *   comment - The comment object containing: 'text' (string) - the comment text, 'id' (string) - unique comment ID, 'userId' (string | number) - ID of the user who added the comment, and 'time' (Date) - timestamp of the comment.
    */
    onCommentAdd?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user deletes or removes a comment while editing a row using the row edit dialog. This event occurs after the comment has been removed from the input field within the dialog, allowing you to handle any additional logic, such as updating the UI, saving changes, or notifying other components.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	comment)
    *   id - The unique ID of the row from which the comment was removed.
    *   comment - The comment object containing: 'text' (string) - the comment text, 'id' (string) - unique comment ID, 'userId' (string | number) - ID of the user who added the comment, and 'time' (Date) - timestamp of the comment.
    */
    onCommentRemove?: ((event?: Event) => void) | undefined;
    /**  Occurs when a user selects (clicks) an item from the context menu, typically accessed via right-click or long-press. This event enables developers to handle specific actions in response to the user's menu item selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	command)
    *   id - The unique ID of the row associated with the context menu item.
    *   dataField - The data field of the clicked context menu item.
    *   command - The command object representing the action associated with the clicked menu item.
    */
    onContextMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user begins dragging a table row, typically by clicking and holding on the row before moving it. This event signals the start of a drag-and-drop operation for reordering or repositioning rows within the table.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	originalEvent)
    *   row - The row being dragged.
    *   id - The unique ID of the row being dragged.
    *   index - The index of the row within the grid.
    *   originalEvent - The original browser event that initiated the row drag.
    */
    onRowDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered repeatedly in real-time as the user drags a row, firing continuously throughout the entire duration of the dragging action.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	data, 	originalEvent)
    *   row - The row currently being dragged.
    *   id - The unique ID of the dragged row.
    *   index - The index of the row being dragged.
    *   data - An object providing drag feedback. Contains HTML elements 'feedback' and 'feedbackLine' shown during dragging, and methods 'error()', 'success()', and 'data()' for managing feedback state.
    *   originalEvent - The original browser event that triggered the dragging.
    */
    onRowDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered upon completion of a row drag operation, regardless of whether the row’s position within the list was changed. It indicates the end of the drag interaction, and can be used to perform additional actions or cleanup tasks after users have finished dragging a row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The dragged row object.
    *   id - The unique identifier of the dragged row.
    *   index - The original index of the row before dragging.
    *   newIndex - The new index of the row after dragging.
    *   data - The dragging feedback object containing HTML elements displayed during the drag operation. Includes `feedback` and `feedbackLine` elements, and methods `error()`, `success()`, and `data()` to set or retrieve the drag state and data.
    *   originalEvent - The original pointer, touch, or mouse event that triggered the drag.
    */
    onRowDragEnd?: ((event?: Event) => void) | undefined;
    /**  Triggered when a row has been successfully moved to a new position within the grid, indicating that the row reordering operation is complete and the grid's data order has been updated accordingly.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	index, 	newIndex, 	data, 	originalEvent)
    *   row - The reordered row object.
    *   id - The unique identifier of the reordered row.
    *   index - The original index of the row before reordering.
    *   newIndex - The new index of the row after reordering.
    *   data - The dragging feedback object containing HTML elements displayed during the reorder operation. Includes `feedback` and `feedbackLine` elements, and methods `error()`, `success()`, and `data()` to set or retrieve the drag state and data.
    *   originalEvent - The original pointer, touch, or mouse event that triggered the reorder.
    */
    onRowReorder?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user expands a row in either TreeGrid or Grouping mode, causing the hidden child rows or grouped data associated with that row to be displayed. It allows you to respond when hierarchical data or grouped content is revealed within the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The expanded row object.
    *   id - The unique identifier of the expanded row.
    *   originalEvent - The original pointer, touch, or mouse event that caused the expansion.
    */
    onRowExpand?: ((event?: Event) => void) | undefined;
    /**  Triggered when a row is collapsed in TreeGrid or Grouping mode, causing any nested child rows or grouped content under that row to be hidden from view. This event allows you to respond when users collapse a parent row, such as updating UI elements or loading data dynamically.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	originalEvent)
    *   row - The collapsed row object.
    *   id - The unique identifier of the collapsed row.
    *   originalEvent - The original pointer, touch, or mouse event that caused the collapse.
    */
    onRowCollapse?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user clicks anywhere within a table row, allowing you to respond to row selection events, such as highlighting the row, displaying detailed information, or performing related actions.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	data, 	isRightClick, 	pageX, 	pageY)
    *   row - The clicked row object.
    *   originalEvent - The original pointer, touch, or mouse event for the click.
    *   id - The unique identifier of the clicked row.
    *   data - The data object associated with the clicked row.
    *   isRightClick - Indicates whether the right mouse button was used for the click.
    *   pageX - The X-coordinate of the click relative to the page.
    *   pageY - The Y-coordinate of the click relative to the page.
    */
    onRowClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user rapidly double-clicks on any row within the data grid or table. It can be used to initiate actions such as opening a detailed view, activating edit mode, or performing custom operations related to the selected row. The event handler receives contextual information about the clicked row, allowing for targeted interactions.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	data, 	isRightClick, 	pageX, 	pageY)
    *   row - The double-clicked row object.
    *   originalEvent - The original pointer, touch, or mouse event for the double-click.
    *   id - The unique identifier of the double-clicked row.
    *   data - The data object associated with the double-clicked row.
    *   isRightClick - Indicates whether the right mouse button was used for the double-click.
    *   pageX - The X-coordinate of the double-click relative to the page.
    *   pageY - The Y-coordinate of the double-click relative to the page.
    */
    onRowDoubleClick?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user manually adjusts the height of a table row, such as by dragging the row's resize handle. This event allows you to respond to row height changes, for example, by updating layout or saving the new row height.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	id, 	oldHeight, 	height)
    *   row - The resized row object.
    *   id - The unique identifier of the resized row.
    *   oldHeight - The height of the row before resizing.
    *   height - The new height of the row after resizing.
    */
    onRowResize?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user clicks the star icon located in a row header, toggling the starred (favorite) status of the corresponding row. This event allows you to handle actions such as marking or unmarking the row as a favorite in response to user interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent, 	id, 	value)
    *   row - The row associated with the star toggle.
    *   originalEvent - The original pointer, touch, or mouse event for the star click.
    *   id - The unique identifier of the starred row.
    *   value - Boolean indicating whether the row is now starred (`true`) or unstarred (`false`).
    */
    onRowStarred?: ((event?: Event) => void) | undefined;
    /**  Fires when a user clicks on any individual cell within the grid, providing information about the selected cell’s row, column, and associated data. This event enables you to implement custom actions in response to cell clicks, such as editing cell content, displaying detailed information, or triggering other interactive features.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	value, 	isRightClick, 	pageX, 	pageY)
    *   cell - The clicked cell object.
    *   originalEvent - The original pointer, touch, or mouse event for the click.
    *   id - The unique identifier of the row containing the clicked cell.
    *   dataField - The data field (column identifier) of the clicked cell.
    *   value - The value of the clicked cell.
    *   isRightClick - Indicates whether the right mouse button was used for the click.
    *   pageX - The X-coordinate of the click relative to the page.
    *   pageY - The Y-coordinate of the click relative to the page.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  Fires when a user rapidly double-clicks on any cell within the grid, allowing you to handle actions such as entering edit mode, displaying detailed information, or executing custom logic specific to the selected cell.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent, 	id, 	dataField, 	value, 	isRightClick, 	pageX, 	pageY)
    *   cell - The double-clicked cell object.
    *   originalEvent - The original pointer, touch, or mouse event for the double-click.
    *   id - The unique identifier of the row containing the double-clicked cell.
    *   dataField - The data field (column identifier) of the double-clicked cell.
    *   value - The value of the double-clicked cell.
    *   isRightClick - Indicates whether the right mouse button was used for the double-click.
    *   pageX - The X-coordinate of the double-click relative to the page.
    *   pageY - The Y-coordinate of the double-click relative to the page.
    */
    onCellDoubleClick?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user completes editing a cell or an entire row. This event supplies comprehensive information about the edit operation, including the updated values, the specific cells or rows affected, and any changes made by the user. It enables developers to capture and respond to user edits with detailed context.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	column, 	cell, 	data, 	value)
    *   id - The unique identifier of the row that was edited. This helps to locate the specific row within the grid.
    *   dataField - The data field key (column identifier) of the cell that was edited.
    *   row - The full row object that contains the edited cell, representing the row's current state after editing.
    *   column - The column object corresponding to the edited cell, including its metadata and configuration.
    *   cell - The specific cell object that was edited, providing granular access to the edited cell's properties.
    *   data - An object representing the entire data record of the edited row, reflecting all current values post-edit.
    *   value - The new value entered by the user in the edited cell.
    */
    onEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever filters within the grid are added, updated, or removed. It allows developers to monitor and respond to any changes in the grid’s filtering criteria. By handling this event, you can implement custom logic—such as updating UI elements, fetching new data, or logging filter modifications—whenever the user changes how data is filtered in the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	expressions)
    *   columns - An array of column objects currently involved in filtering, providing access to each filtered column’s properties.
    *   data - An array of objects each containing a column’s data field and its associated FilterGroup object. The FilterGroup describes the filter conditions applied to that column. Example: { dataField: string, filter: object }.
    *   expressions - An array of filter expression objects, each with a column’s data field and a human-readable filter expression string. These expressions define the applied filters, e.g., 'startsWith B' or complex logical expressions like 'contains Andrew or contains Nancy'. Supported operators include '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', and 'NOT_NULL'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  Triggered whenever the grid's grouping configuration is modified—for example, when columns are added to or removed from the grouped columns. This event allows you to respond to user actions that change how data is grouped in the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	groups)
    *   groups - An array of data fields that represent the columns currently used for grouping the grid’s rows. The order of fields reflects the grouping hierarchy.
    */
    onGroup?: ((event?: Event) => void) | undefined;
    /**  Emitted whenever the dialog interface for adding a new column or editing an existing column is displayed to the user. This event is ideal for implementing custom logic, such as pre-filling form fields, dynamically modifying dialog content, or applying additional UI enhancements when the column dialog becomes visible.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column currently being added or edited via the dialog.
    */
    onOpenColumnDialog?: ((event?: Event) => void) | undefined;
    /**  Fires when the column addition or editing dialog is closed, regardless of whether the user saves their changes or cancels the operation. This event allows developers to perform actions after the dialog is dismissed, such as updating the UI or resetting form states.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column involved in the dialog that was just closed.
    */
    onCloseColumnDialog?: ((event?: Event) => void) | undefined;
    /**  Triggered whenever the grid’s dimensions are altered, either through user-initiated resizing or programmatic changes to the layout. This event enables developers to implement responsive UI updates, such as repositioning elements or recalculating layout parameters to ensure optimal display across different screen sizes and interactions.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user performs a press-and-hold gesture on a grid row, maintaining contact for at least 300 milliseconds. This event is commonly used to open context menus or initiate specialized touch-based interactions, enhancing the user experience on touch-enabled devices.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
    *   row - The row object that was tapped and held.
    *   originalEvent - The original input event object ('pointer', 'touch', or 'mouse'), which provides device-specific details.
    */
    onRowTap?: ((event?: Event) => void) | undefined;
    /**  Triggered when a user performs a press-and-hold gesture—touching and continuously holding a specific cell in the grid for at least 300 milliseconds. This event enables advanced touch interactions, such as displaying context menus, initiating drag-and-drop, or activating additional cell options. It is designed to distinguish intentional long presses from casual taps, ensuring a responsive and intuitive touch interface.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
    *   cell - The cell object that was tapped and held.
    *   originalEvent - The original input event object ('pointer', 'touch', or 'mouse') providing context about the interaction.
    */
    onCellTap?: ((event?: Event) => void) | undefined;
    /**  Triggered whenever the user switches pages using the grid’s pagination controls. This event allows you to detect and respond to page changes, such as updating data, fetching new records, or performing additional actions whenever a different page is selected.
    *  @param event. The custom event. 	*/
    onPage?: ((event?: Event) => void) | undefined;
    /**  Triggered whenever columns are added to, removed from, or reordered within the grid’s sorting configuration. This event enables developers to monitor changes in the sorting criteria, update the sorting state, and track the current sort order and priority of columns in the grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data, 	sortDataFields, 	sortDataTypes, 	sortOrders, 	sortIndexes)
    *   columns - An array of column objects currently sorted, including their configurations and properties.
    *   data - An array of objects describing each sorted column with its data field, sorting order ('asc' or 'desc'), and priority index indicating sorting precedence in multi-column sorts.
    *   sortDataFields - An array of the data fields of all currently sorted columns.
    *   sortDataTypes - An array of data types ('string', 'date', 'boolean', or 'number') corresponding to the sorted columns.
    *   sortOrders - An array of sorting directions ('asc' or 'desc') applied to the sorted columns.
    *   sortIndexes - An array of integers representing the sorting priority for each column in cases of multi-column sorting, where lower index means higher priority.
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user scrolls to the absolute bottom of the grid component. This event is typically used to implement infinite scrolling or lazy loading by allowing you to detect when additional data needs to be loaded as the user reaches the end of the currently displayed content.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  Triggered when the user scrolls to the very top edge of the grid. This event allows you to perform actions such as refreshing the grid's contents, loading previous or additional data, or updating UI elements in response to the scroll position. Use this event to enhance data loading and user experience when users reach the beginning of the grid.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Inserts a new row into the grid interface. When batch editing mode is enabled, the new row exists only temporarily within the current batch session and will not be permanently stored until the user explicitly saves all changes made during the session. If the batch edit session is discarded, the newly added row will not be saved.
    * @param {any} data. An object representing the row data, matching the structure of the grid's data source.
    * @param {boolean} insertAtBottom?. Determines whether the new row is added at the bottom (true) or top (false) of the grid. Defaults to true.
    * @param {{(row: GridRow): void}} callback?. A callback function invoked after the row is successfully added. Receives the newly added row as an argument.
    */
    addRow(data: any, insertAtBottom?: boolean, callback?: {
        (row: GridRow): void;
    }): void;
    /** Inserts a new row into the grid and automatically activates edit mode for that row, allowing users to begin entering data right away. If batch editing is enabled, any changes made will be temporarily stored and will not be saved to the data source until the batch edit session is explicitly committed. This helps prevent partial or unsaved changes from being applied before the user finalizes all edits in the session.
    * @param {string} position?. Specifies the position where the new row will be added. Acceptable values are 'near' (top) or 'far' (bottom).
    * @returns {boolean}
  */
    addNewRow(position?: string): any;
    /** Dynamically adds a new column to the grid at runtime, allowing users to modify the grid’s structure without requiring a page reload. This enables real-time updates to the grid layout based on user actions or application logic.
    * @param {any} column. A column definition or array of columns to add. Refer to the grid's 'columns' property for the expected structure.
    * @returns {boolean}
  */
    addNewColumn(column: any): any;
    /** Adds one or more unbound rows to the grid, positioned at either the top or the bottom, as specified. Unbound rows are not initially included in the grid’s data source; instead, they serve as editable placeholders. Once a user enters or modifies data in these rows, the new values are incorporated into the grid’s data source, making the unbound rows part of the main dataset. This feature is useful for allowing users to quickly add new entries or perform custom calculations directly within the grid interface.
    * @param {number} count. The number of unbound rows to add.
    * @param {string} position?. The position to insert the unbound rows. Accepts 'near' for top or 'far' for bottom.
    * @returns {boolean}
  */
    addUnboundRow(count: number, position?: string): any;
    /** Enhances and applies custom filter criteria to a specific column within the data grid. Accepts both single and multiple filter expressions, allowing for complex filtering logic using logical operators such as "and" and "or". For example, to filter the "lastName" column for values that contain either "burke" or "peterson", use: `grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"'])`. The method also supports numeric filters (e.g., `GREATER_THAN 100`), a variety of comparison operators (such as `EQUALS`, `LESS_THAN`, `STARTS_WITH`, etc.), and can be used to combine different conditions for precise data selection.
    * @param {string} dataField. The data field name of the column to filter, e.g., 'firstName'.
    * @param {string} filter. The filter expression(s) to apply. Examples include 'startsWith B', ['contains Andrew or contains Nancy'], or ['quantity', '<= 3 and >= 8']. Supported operators: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    * @param {boolean} refreshFilters?. If set to false, allows multiple filters to be added without triggering unnecessary renders. Useful when applying multiple filters sequentially.
    */
    addFilter(dataField: string, filter: string, refreshFilters?: boolean): void;
    /** Organizes the grid rows into groups based on the values in the specified column's data field. This functionality requires that grouping is enabled on the grid component. When activated, rows sharing the same value in the chosen column will be visually grouped together, allowing for easier data analysis and navigation.
    * @param {string} dataField. The data field of the column to group by, e.g., 'firstName'.
    */
    addGroup(dataField: string): void;
    /** Enhances the grid's data display by applying a sorting order based on the specified column's data field. This function requires sorting to be enabled on the grid and sorts the rows according to the selected column's values, either in ascending or descending order as specified. If sorting is not enabled, this operation will have no effect.
    * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
    * @param {string} sortOrder. The sort direction to apply. Use 'asc' for ascending or 'desc' for descending.
    */
    addSort(dataField: string, sortOrder: string): void;
    /** Dynamically resizes each grid row to fit its content, ensuring that text and elements are fully visible without being cut off or overlapping. This enhances readability and provides a more user-friendly and visually consistent grid layout.
    */
    autoSizeRows(): void;
    /** Dynamically resizes the width of each grid column based on its content and header label, so that all cell values and headers are fully visible without clipping or excessive whitespace. This ensures an optimal and polished display by automatically fitting columns to their widest required size.
    */
    autoSizeColumns(): void;
    /** Automatically resizes an individual grid column to precisely fit its content by dynamically measuring the widest content among its cells and header label, and adjusting the column width accordingly for optimal display without unnecessary extra space or truncation.
    * @param {string} dataField?. The data field name of the column to auto-size, e.g., 'firstName'. Optional; if omitted, no action is taken.
    */
    autoSizeColumn(dataField?: string): void;
    /** Returns a boolean value that indicates whether every row in the grid is currently selected. This means the method will return true only if all rows within the grid have been selected; otherwise, it returns false.
    * @returns {boolean}
  */
    areAllRowsSelected(): any;
    /** Pauses Grid rendering and UI refresh operations, allowing you to make multiple property changes or method calls without triggering repeated re-renders. This is particularly useful for optimizing performance during batch updates. After you finish making all necessary changes, call 'endUpdate()' to resume rendering and apply all updates to the UI.
    */
    beginUpdate(): void;
    /** Initiates edit mode on a specified row, cell, or column within the grid programmatically. Triggers the appropriate editor component to appear in the Grid UI, allowing users to modify the data directly within the selected grid area.
    * @param {string | number} rowId. The unique identifier of the row to edit.
    * @param {string} dataField?. The column's data field to edit. Optional for full row editing.
    */
    beginEdit(rowId: string | number, dataField?: string): void;
    /** Removes all active filters from the Grid, restoring the original unfiltered data view. After clearing the filters, the Grid data is automatically refreshed to display all records, and any filter input fields are reset to their default, empty state.
    */
    clearFilter(): void;
    /** Restores the grid to its original, ungrouped state by removing all active row groupings. All grouped rows are expanded and displayed as individual rows, and the Grid view automatically refreshes to reflect these changes.
    */
    clearGroups(): void;
    /** Removes all active sorting from the Grid columns, resetting them to their unsorted state and restoring the data to its original order as initially loaded or received.
    */
    clearSort(): void;
    /** Clears all current selections within the grid, including rows, cells, and columns. This action removes any visual highlights or selection indicators, ensuring that no items remain selected in the interface.
    */
    clearSelection(): void;
    /** Cancels the ongoing edit operation by closing any active editor interface and reverting all unsaved changes made during the current session. This action ensures that no modifications are saved and the data returns to its original state prior to editing.
    */
    cancelEdit(): void;
    /** Selects and checks the checkbox for a specified TreeGrid row, visually indicating that the row is active or selected. This action updates the row's state to reflect user selection and may trigger related event handlers or selection-dependent functionality within the TreeGrid.
    * @param {string | number} rowId. The unique identifier of the row to check.
    */
    checkRow(rowId: string | number): void;
    /** Selects and checks all checkboxes associated with rows in a TreeGrid or grouped data structure, ensuring that every row, including nested and grouped items, is marked as selected. This process guarantees comprehensive selection across all hierarchical levels and groupings within the dataset.
    */
    checkAllRows(): void;
    /** Removes all rows and associated data from the Grid, and clears any current user selections. After performing this action, the Grid will display a 'No Rows' message to indicate that it is empty.
    */
    clearRows(): void;
    /** Closes the currently open column menu in a data grid or table interface. This action is typically triggered by user interactions such as right-clicking on a column header or clicking a column menu button, allowing users to dismiss the column-specific options or actions menu.
    */
    closeMenu(): void;
    /** Collapses a designated TreeGrid or grouping row, effectively hiding all of its nested child rows from view. This action allows users to condense hierarchical data structures, making it easier to navigate and focus on higher-level information within the grid.
    * @param {string | number} rowId. The unique identifier of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** Collapses all currently expanded rows within the TreeGrid or Grouping components, reducing the dataset display to only show parent rows or top-level groups. This action hides all child rows and nested data, providing a simplified, minimized overview of the dataset structure.
    */
    collapseAllRows(): void;
    /** Generates a visual chart representation based on the current data within the Grid. Chart generation requires that the charting feature is enabled in the system configuration. This function allows users to visualize the Grid's dataset in supported chart formats.
    * @param {string} type. Type of chart to create (e.g., 'pie', 'bar', 'line').
    * @param {any} dataSource?. The data source for the chart. If omitted, the Grid's current dataset is used.
    */
    createChart(type: string, dataSource?: any): void;
    /** Removes a specific row from the Grid component. If batch editing is enabled, the row will be marked for deletion but the change will not be permanently applied until the batch is saved. This means the deletion is pending and can be reverted before saving.
    * @param {string | number} rowId. The unique identifier of the row to delete.
    * @param {{(row: GridRow): void}} callback?. Function executed after row deletion. Receives the deleted row as a parameter.
    */
    deleteRow(rowId: string | number, callback?: {
        (row: GridRow): void;
    }): void;
    /** Scrolls the Grid to ensure that a specific row or cell is visible to the user. If the target row or cell is located on a different page, the Grid will automatically navigate to the appropriate page and then scroll to the desired position. This ensures that the requested row or cell is brought into view, regardless of its current visibility or page location.
    * @param {string | number} rowId. The unique identifier of the row.
    * @param {string} dataField?. The column's data field to focus on. If omitted, scrolls to the row only.
    * @returns {boolean}
  */
    ensureVisible(rowId: string | number, dataField?: string): any;
    /** Completes the editing process by applying all pending changes, saving the updated content, and closing any open editor instances. This action ensures that all modifications are confirmed and no unsaved edits remain.
    */
    endEdit(): void;
    /** Restores the Grid's normal rendering process and updates the user interface following a call to beginUpdate(). Use endUpdate() to apply any changes made during the update suspension and ensure the Grid displays the latest data and layout.
    * @param {boolean} refresh?. If true, forces a full Grid refresh after updates.
    */
    endUpdate(refresh?: boolean): void;
    /** Expands a specific row in a TreeGrid or grouped table to reveal its associated child rows. You can expand nested groups or hierarchical levels by specifying the row key using dot notation (e.g., "0.2.1" for the child of a nested group). This allows for precise targeting and interactive exploration of hierarchical data structures within the grid.
    * @param {string | number} rowId. The unique identifier of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** Expands all grouped rows in the grid up to the specified group level. For instance, executing `grid.expandRowsToGroupLevel(1);` will expand all groups at the root (level 1), making their immediate child rows visible. Groups nested within these child rows remain collapsed unless the group level parameter is increased. This function is useful for programmatically controlling the grid's row expansion state based on grouping hierarchy.
    * @param {number} level. The group level up to which the rows should be expanded. Level 0 is the root, level 1 is the first nested group, and so forth.
    */
    expandRowsToGroupLevel(level: number): void;
    /** Expands all rows within the grid that utilize TreeGrid or grouping functionality, automatically revealing every nested child row at all levels of hierarchy and making the complete data structure fully visible. This ensures that all parent and descendant rows are displayed, allowing users to view the entire nested dataset without manual expansion.
    */
    expandAllRows(): void;
    /** This function allows you to export the grid's data into various supported file formats, including .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG, and .PNG. The way the data is exported—such as file formatting, included columns or rows, applied filters, and export settings—is determined by the options set in the grid’s dataExport property. This ensures that the exported file matches your specified requirements and preferences.
    * @param {string} Dataformat. Specifies the export format. Supported formats: 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    * @param {any} callback?. Optional. A function that formats the exported values conditionally. See Smart Export Documentation for details.
    * @param {any} dataCallback?. Optional. A function to modify the entire exported data object prior to export.
    */
    exportData(Dataformat: string, callback?: any, dataCallback?: any): void;
    /** Searches the grid for rows that match the specified query criteria and returns an array containing the IDs of all matching rows. Supports multiple search modes, including:- Searching for values in any column (global search)- Searching specific columns by name- Applying comparison operators (e.g., equals, contains, less than, greater than) for advanced filteringThis functionality allows for flexible and precise row selection based on user-defined search parameters.
    * @param {string} query. The search string or value to find within the grid rows.
    * @param {string} dataField?. Optional. Specifies the column data field to restrict the search to.
    * @param {string} condition?. Optional. Condition to apply for the search. Supported conditions: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    * @returns {any[]}
  */
    find(query: string, dataField?: string, condition?: string): any;
    /** Scans the grid to identify all cells that match the specified query. Returns an array of arrays, where each inner array represents a matching cell and contains the following information: the row ID, the data field (column name), and the cell's value. The query supports searching for multiple values by separating them with commas; each value will be matched independently against the cells.
    * @param {string} query. The search string or multiple comma-separated strings to find in grid cells.
    * @returns {any[]}
  */
    findCells(query: string): any;
    /** Applies a global filter that searches for the provided query across all columns in the grid, returning rows that contain a match in any column. Optionally, you can limit the filtering to specific data types—such as 'string', 'boolean', 'date', or 'number'—so that only columns of the selected type(s) are considered when matching the query. This allows for more precise and targeted filtering behavior.
    * @param {string} query. The filter expression to apply to all columns.
    * @param {string} dataType?. Optional. Filter rows only by columns matching this data type: 'string', 'boolean', 'date', 'number'.
    */
    filterBy(query: string, dataType?: string): void;
    /** Programmatically navigates the grid to a specified page index, provided that paging is enabled. Use this method to set the current page of the grid, allowing you to jump to a particular page in response to user actions or custom logic. The page index is zero-based, where 0 refers to the first page."
    * @param {number} index. The zero-based index of the page to navigate to.
    */
    goToPage(index: number): void;
    /** Advances to the next page of data in the grid when paging functionality is enabled. If the grid is currently displaying the last available page, this action will have no effect and the page will remain unchanged.
    */
    nextPage(): void;
    /** Triggers navigation to the previous page in the grid when paging functionality is enabled. If the grid is currently displaying the first page, the operation is ignored and the page remains unchanged. This ensures that navigation does not attempt to move before the first available page.
    */
    prevPage(): void;
    /** Navigates to the first page of the data grid when paging functionality is enabled. This action resets the current page index to the first page, displaying the initial set of records in the grid.
    */
    firstPage(): void;
    /** Navigates directly to the final page of the data grid when paging functionality is enabled, allowing users to quickly access the last set of records displayed in the grid.
    */
    lastPage(): void;
    /** Sets focus on and selects a specified cell or an entire row within the grid, clearing any previous selections. This action also updates the keyboard navigation's starting point to the newly focused cell or row, ensuring that subsequent navigation actions will originate from this location.
    * @param {string | number} rowId. The unique identifier of the row to focus and select.
    * @param {string} dataField?. Optional. The data field (column key) of the cell to focus within the specified row. If omitted, the entire row is selected.
    */
    focusAndSelect(rowId: string | number, dataField?: string): void;
    /** Executes a callback function for each individual row in the grid's underlying dataset, regardless of any grouping, filtering, or sorting currently applied to the grid view. This method iterates over all raw data rows, ensuring that the callback is called on every entry as it exists in the original data source, not just the rows that are visible or active in the grid's current state.
    * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRow(row => console.log(row.id));
    */
    forEachRow(rowCallback: any): void;
    /** Executes a callback function for each row that is currently visible in the grid after all active filters and sorting have been applied. This method operates strictly on the rows as they appear in the current grid view, ensuring that hidden, filtered out, or unsorted rows are excluded. The iteration respects the latest grid state, guaranteeing that only rows displayed to the user are processed by the callback function.
    * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRowAfterFilterAndSort(row => console.log(row.id));
    */
    forEachRowAfterFilterAndSort(rowCallback: any): void;
    /** Returns the maximum allowable scroll position for the grid's vertical scrollbar. This value represents the greatest vertical offset to which users can scroll within the grid's content area. It can be used to determine the scrollable range or to programmatically set the vertical scrollbar to its lowest (bottom-most) position.
    * @returns {number}
  */
    getVerticalScrollMax(): any;
    /** Returns the current vertical scroll position of the grid, representing the number of pixels the grid’s content has been scrolled vertically from the top. This value corresponds to the position of the grid's vertical scrollbar and can be used to determine how far users have scrolled down within the grid.
    * @returns {number}
  */
    getVerticalScrollValue(): any;
    /** Returns the maximum horizontal scroll offset for the grid’s horizontal scrollbar. This value represents the furthest distance (in pixels) that the grid content can be scrolled horizontally. It is useful for programmatically setting, adjusting, or resetting the grid’s horizontal scroll position to ensure full content visibility or to align with specific scroll actions.
    * @returns {number}
  */
    getHorizontalScrollMax(): any;
    /** Retrieves the current horizontal scroll offset of the grid's horizontal scrollbar, indicating how far the grid content has been scrolled from the left edge in pixels. This value can be used to determine the current scroll position or to programmatically control grid scrolling behavior.
    * @returns {number}
  */
    getHorizontalScrollValue(): any;
    /** Retrieves an array of column objects representing every column currently configured in the grid. Each column object contains key properties, including:- `label`: The display name of the column as shown in the grid header.- `dataField`: The underlying data field or key this column is bound to in the dataset.- `dataType`: The type of data displayed in the column (e.g., string, number, date).- `visible`: A boolean indicating whether the column is currently visible in the grid.- Additional dynamic state properties, such as the current sort order, filter status, or column width, reflecting any user customizations or interactions.This comprehensive array allows developers to access both the static configuration and real-time state of each column in the grid.
    * @returns {any}
  */
    getColumns(): any;
    /** Returns an array containing information about all cells that are currently in edit mode within the grid. Each entry in the array typically includes details such as the row and column identifiers for each editable cell, allowing developers to precisely identify and interact with cells that are being edited.
    * @returns {any[]}
  */
    getEditCells(): any;
    /** Fetches an array of group objects that define the current grouping configuration of the grid. Each group object contains information about the field being grouped by, the group criteria, and any sub-grouping details, providing a comprehensive representation of how the grid's data is organized into groups.
    * @returns {any[]}
  */
    getGroups(): any;
    /** Returns an object that details the columns currently sorted within a data table. Each key in the object corresponds to a column’s data field name. The value for each key is an object containing:- `sortOrder`: Specifies the sorting direction for the column, either `'asc'` for ascending or `'desc'` for descending.- `sortIndex`: Indicates the column’s priority in multi-column sorting, with lower numbers representing higher priority.This structure allows you to easily determine which columns are sorted, their order of precedence, and the sorting direction applied to each.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns(): any;
    /** Returns an object representing the current selection state of the grid. This includes arrays listing the IDs of selected rows, the identifiers of selected columns, and the coordinates (row ID and data field) of selected cells. Additionally, it specifies the cell that is currently focused by providing its row ID and data field.
    * @returns {any}
  */
    getSelection(): any;
    /** Returns an array in which each element is a two-element array: the first element is the unique row ID, and the second element is the data object associated with that row. When operating in virtual mode, the data object may be empty if the row’s data has not yet been loaded, as data is retrieved on demand.
    * @returns {any[]}
  */
    getSelectedRows(): any;
    /** Returns an array containing the data objects corresponding to each row currently selected in the grid. Each object in the array represents the underlying data for one selected row, allowing you to access and manipulate the specific records the user has chosen.
    * @returns {any[]}
  */
    getSelectedRowsData(): any;
    /** Returns an array containing the unique identifiers (IDs) of all rows currently selected by the user within the grid component. Each element in the array corresponds to the ID of a selected row, allowing you to easily reference or manipulate the selected grid items programmatically.
    * @returns {any[]}
  */
    getSelectedRowIds(): any;
    /** Returns an array containing the indices of the rows that are currently selected in the grid. Each element in the array represents the zero-based position of a selected row, allowing you to identify which rows the user has chosen. If no rows are selected, the array will be empty.
    * @returns {any[]}
  */
    getSelectedRowIndexes(): any;
    /** Returns an array of selected cells, where each cell is represented as an array structured as [row ID, column field, cell value].  - **Row ID**: The unique identifier for the row containing the cell.  - **Column field**: The data field name (or key) corresponding to the column of the cell.  - **Cell value**: The actual value contained within the cell.  This structure allows you to easily identify and access the position and value of each selected cell within the data set.
    * @returns {any[]}
  */
    getSelectedCells(): any;
    /** Returns an array of objects representing the columns that currently have active filters applied. Each object contains details about the filter and is associated with its corresponding column by the column's data field as the key. This allows you to identify which columns are being filtered and access the filter configurations for each.
    * @returns {any}
  */
    getFilteredColumns(): any;
    /** Returns an array containing the data for all rows currently visible in the grid, after applying any active filters. Only rows that meet the filter criteria and are not hidden by filtering will be included in the array. This allows developers to access the up-to-date, filtered data as presented to the user in the grid interface.
    * @returns {any}
  */
    getVisibleRows(): any;
    /** Returns an array of row objects. By default, this represents the currently visible rows after any filters have been applied. When used in TreeGrid or Grouping mode, the array instead reflects the hierarchical structure of rows, including parent-child relationships, according to the current expand/collapse state of groups or tree nodes.
    * @returns {any}
  */
    getViewRows(): any;
    /** Retrieves a detailed JSON object that encapsulates the entire current state of the grid. This includes the active sorting and filtering criteria, column visibility and order, which rows are expanded, any grouping configurations, current pagination settings, and the selection state of rows or cells. The resulting state object is suitable for persisting the grid configuration (such as saving to local storage or a database) and can be used to completely restore the grid to the same state at a later time.
    * @returns {any}
  */
    getState(): any;
    /** Retrieves a comprehensive summary of all changes performed during a batch edit operation. Returns an object with separate arrays for added, updated, and deleted rows. Each array contains detailed objects that include the row ID and pertinent data fields, such as the previous and new values for updates, full data for additions, and identifying information for deletions. This structure allows you to easily track and process all modifications made in the batch.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges(): any;
    /** Retrieves the value stored in a specific cell of a data grid or table by specifying the unique row ID and the corresponding column data field. This function allows precise access to individual cell data, enabling targeted data retrieval based on both row and column identifiers.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field name of the column (e.g., 'firstName').
    * @returns {any}
  */
    getCellValue(rowId: string | number, dataField: string): any;
    /** Retrieves the column object corresponding to the specified data field. This returned object includes all relevant properties and configuration settings for that column, such as its header label, data type, formatting options, sorting behavior, visibility, and any custom properties defined in the column schema.
    * @param {string} dataField. The data field name of the column to retrieve.
    * @returns {GridColumn}
  */
    getColumn(dataField: string): any;
    /** Fetches the value of a specified property from a particular column, where the column is identified by its data field name. This function allows you to access detailed configuration or metadata associated with a column in a data structure, such as a table or grid, by referencing the column’s data field.
    * @param {string} dataField. The data field name of the column.
    * @param {string} propertyName. The name of the column property to retrieve (e.g., 'freeze', 'visible', 'width').
    * @returns {any}
  */
    getColumnProperty(dataField: string, propertyName: string): any;
    /** Retrieves the value of a specified property from a database row identified by its unique row ID. This function locates the row using the provided row ID and returns the value associated with the given property key within that row. If the property does not exist, it returns null or an appropriate default value.
    * @param {string | number} rowId. The unique identifier of the row.
    * @param {string} propertyName. The name of the row property to retrieve.
    * @returns {any}
  */
    getRowProperty(rowId: string | number, propertyName: string): any;
    /** Returns the complete row object from the Grid for the row corresponding to the given row ID, including all its associated data and properties.
    * @param {string | number} rowId. The unique identifier of the row.
    * @returns {GridRow}
  */
    getRow(rowId: string | number): any;
    /** Returns the Grid row object at the given zero-based row index, allowing access to all data and properties associated with that specific row. The index parameter should be an integer starting from 0, where 0 corresponds to the first row in the Grid.
    * @param {number} rowIndex. The zero-based index of the row in the grid.
    * @returns {GridRow}
  */
    getRowByIndex(rowIndex: number): any;
    /** Fetches the original data source object directly linked to the given row ID, allowing access to all underlying data fields for that specific row as stored in the source dataset.
    * @param {string | number} rowId. The unique identifier of the row.
    * @returns {any}
  */
    getRowData(rowId: string | number): any;
    /** Returns the unique identifier (row ID) associated with the row at the specified zero-based index. This allows you to access or reference a particular row in the data set by its position within the collection, where the first row has an index of 0.
    * @param {number} rowIndex. The zero-based index of the row.
    * @returns {string | number}
  */
    getRowId(rowIndex: number): any;
    /** Determines whether any column’s drop-down menu is currently open and visible within the grid component. This can be used to control grid interactions or UI behaviors that depend on the state of column drop-down menus.
    * @returns {boolean}
  */
    hasMenu(): any;
    /** Checks whether any rows in the grid are currently selected by the user. This property or method returns a boolean value: `true` if at least one row is selected, and `false` if no rows are selected. It is typically used to enable or disable actions that depend on row selection, such as editing or deleting entries.
    * @returns {boolean}
  */
    hasSelectedRows(): any;
    /** Conceals the details section for the specified row in the grid when the row details feature is enabled, effectively collapsing or hiding any expanded information or custom content associated with that row. This function ensures that only the main data for the row is visible, while any additional details remain hidden until explicitly shown again.
    * @param {string | number} rowId. The unique identifier of the row whose details should be hidden.
    */
    hideDetail(rowId: string | number): void;
    /** Highlights all cells within the column corresponding to the specified data field. If this method is called again with the same data field, it toggles the highlight by removing it if already applied, or reapplying it if previously removed.
    * @param {string} dataField. The data field name of the column to highlight.
    */
    highlightColumn(dataField: string): void;
    /** Emphasizes a specific cell within the grid, identified by its row ID and column data field. Invoking this method again on the same cell will toggle the highlight on or off. You can optionally specify a CSS class to apply custom styling to the highlighted cell, allowing for personalized visual differentiation.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field name of the column.
    * @param {string} className?. Optional CSS class name for custom highlight styling.
    */
    highlightCell(rowId: string | number, dataField: string, className?: string): void;
    /** Enhances visibility of the table row corresponding to the provided row ID by applying a highlight effect. Invoking this method a second time on the same row will remove the highlight, effectively toggling its state. Optionally, you can supply a custom CSS class to override the default highlight styling for tailored appearance.
    * @param {string | number} rowId. The unique identifier of the row to highlight.
    * @param {string} className?. Optional CSS class name for custom highlight styling.
    */
    highlightRow(rowId: string | number, className?: string): void;
    /** Adds a new row to the grid using the provided data object. If batch editing mode is active, the row will be added only as a pending change and will not be permanently committed to the data source until the batch is saved. You may optionally specify the index at which the new row should be inserted; if omitted, the row will be added at the default position (usually at the end). Additionally, you can provide a callback function that will be executed after the row has been successfully added to the grid.
    * @param {any} data. The data object for the new row, matching the grid's data source schema.
    * @param {number} index?. The zero-based index at which to insert the new row. Defaults to the last position if omitted.
    * @param {{(row: GridRow): void}} callback?. Optional callback function executed after the row is inserted, receiving the newly added row object.
    */
    insertRow(data: any, index?: number, callback?: {
        (row: GridRow): void;
    }): void;
    /** Restored a previously saved grid state by accepting either the name of the saved state or a state object. The state object can include detailed settings such as current sorting and filtering criteria, column visibility and order, expanded or collapsed row status, grouping configurations, paging information (such as current page and page size), and selected rows. This allows the grid to be reconfigured exactly as it was when the state was saved, providing a consistent user experience across sessions.
    * @param {any} state. A state name (string) previously saved or a state object representing the grid configuration to load.
    * @returns {any}
  */
    loadState(state: any): any;
    /** Displays the drop-down menu associated with the column specified by the provided data field identifier, allowing users to access additional actions or settings related to that column.
    * @param {string} dataField. The data field name of the column whose menu to open.
    */
    openMenu(dataField: string): void;
    /** Displays the context menu at the given (left, top) screen coordinates. Ensure that context menu functionality is enabled in the grid settings for this method to work.
    * @param {number} left. The left position (in pixels) where the context menu should appear.
    * @param {number} top. The top position (in pixels) where the context menu should appear.
    */
    openContextMenu(left: number, top: number): void;
    /** Displays the grid’s drop-down user interface when the 'dropDownMode' property is set to true, allowing users to interact with additional grid options or filters presented within the drop-down.
    */
    openDropDown(): void;
    /** Closes the grid's drop-down user interface when the 'dropDownMode' property is set to true, ensuring that any open drop-down menus within the grid are dismissed automatically. This helps maintain a streamlined user experience by hiding drop-down elements when they are no longer needed or when specific actions are triggered.
    */
    closeDropDown(): void;
    /** Generates a printed version of the Grid’s data using the configuration specified in the dataExport property. During printing, the Grid automatically hides scrollbars and adjusts its width and height to ensure that all rows and columns are fully visible on the page, regardless of their original size. This ensures that the entire content of the Grid is included in the printout without any truncation or the need for scrolling. To customize aspects such as page layout, formatting, or which data is included in the print output, adjust the parameters within the dataExport property.
    */
    print(): void;
    /** Triggers a full re-render of the Grid, similar to when it is first initialized. This method reconstructs all underlying HTML elements for rows, columns, and cells from scratch, ensuring a fresh and accurate representation of the data. After rebuilding these elements, it also updates and refreshes the Grid layout to reflect any structural changes. This is useful when foundational data or configuration has changed and a partial update is not sufficient.
    */
    refresh(): void;
    /** Enhances the Grid display by refreshing its layout to reflect the latest property values, dynamically updating only the necessary elements. This approach optimizes performance by avoiding a complete teardown and reconstruction of all Grid elements, ensuring a smoother and more efficient user experience.
    */
    refreshView(): void;
    /** Refreshes only the cells that are currently visible within the Grid’s viewport, rather than updating the entire Grid. This is especially useful for implementing real-time updates or live data feeds, as it enables efficient, seamless rendering of new cell values without triggering a full Grid refresh or losing the user's scroll position.
    */
    resetState(): void;
    /** Restores the Grid to its original default configuration by removing all user-applied settings, including sorting, filtering, grouping, and selected rows or cells. This action clears any user interactions, ensuring the Grid displays data with no custom modifications.
    * @param {string} dataField. The data field of the column from which to remove the filter, e.g., 'firstName'.
    * @param {boolean} refreshFilters?. If set to false, delays the filter refresh to allow multiple filters to be removed before updating the Grid.
    */
    removeFilter(dataField: string, refreshFilters?: boolean): void;
    /** Removes the filter currently applied to the specified column. Optionally, you can delay the filter refresh process, allowing you to remove filters from multiple columns before triggering an update. This helps optimize performance when batch-processing multiple filter removals.
    * @param {string} dataField. The data field of the group to remove, e.g., 'firstName'.
    */
    removeGroup(dataField: string): void;
    /** Removes grouping from the Grid for the specified data field. This method is only applicable when grouping functionality is enabled in the Grid. When called, it will ungroup the records currently grouped by the given field, and the Grid will update to display the data without that grouping criterion.
    * @param {string} dataField. The data field of the column whose sorting you want to remove, e.g., 'firstName'.
    */
    removeSort(dataField: string): void;
    /** Removes any active sorting from the specified column. Use this method to clear the sort order applied to a particular data field, returning the column to its default, unsorted state. This is useful when you want to reset or update the sorting configuration for individual columns within a data table.
    */
    refreshSort(): void;
    /** Applies the current sorting settings again to the data and updates the Grid display to reflect any changes, ensuring the data is presented according to the latest sorting configuration.
    */
    revertBatchEdit(): void;
    /** Reverts the Grid to its previous state by discarding all unsaved batch editing changes made by the user. Any modifications entered during the current batch editing session will be canceled, restoring the Grid’s data to its last committed state.
    * @param {string | number} dataField. The data field or index of the column to move.
    * @param {string | number} referenceDataField. The data field or index of the target column used as reference for repositioning.
    * @param {boolean} insertAfter?. If true, inserts the first column after the reference column; otherwise, inserts it before.
    */
    reorderColumns(dataField: string | number, referenceDataField: string | number, insertAfter?: boolean): void;
    /** Reorders two columns in the Grid by moving the specified source column to a new position either before or after the target reference column. This allows for customizable column arrangements by programmatically shifting the position of columns within the Grid.
    * @param {string} name?. Optional name to associate with the saved state.
    * @returns {any}
  */
    saveState(name?: string): any;
    /** Captures and returns the current state of the Grid as a comprehensive JSON object. The state includes details such as applied sorting and filtering criteria, columns configuration (order, visibility, and sizing), currently expanded rows, grouping settings, paging information (current page, page size), and user selections. Optionally, you can provide a name parameter to uniquely identify and reference the saved state for future retrieval or restoration.
    * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
    * @param {string | null} sortOrder. Sort order to apply: 'asc' for ascending, 'desc' for descending, or null to remove sorting.
    */
    sortBy(dataField: string, sortOrder: string | null): void;
    /** Applies sorting to the Grid based on the specified data field. You can either add sorting by providing a valid sortOrder (such as 'asc' or 'desc'), or remove sorting from a column by setting the sortOrder parameter to null. This allows dynamic adjustment of Grid sorting criteria, enabling users to sort data as needed or clear sorting on individual columns.
    * @param {string | number} dataField. The data field or index of the first column.
    * @param {string | number} referenceDataField. The data field or index of the second column.
    */
    swapColumns(dataField: string | number, referenceDataField: string | number): void;
    /** Swaps the positions of two specified columns within the Grid layout, effectively changing their order of appearance. This operation updates the Grid so that the selected columns exchange places, while the data and structure of other columns remain unchanged.
    */
    saveBatchEdit(): void;
    /** Saves and applies all batch editing changes made by the end-user, persisting the updates permanently to the Grid's underlying data source. This operation commits all modifications (such as additions, deletions, and edits) performed during the batch editing session, ensuring that the Grid data source accurately reflects the latest user input.
    * @param {string | number} rowId. The identifier of the row to select.
    * @param {string} dataField?. Optional data field of the column to select a specific cell.
    */
    select(rowId: string | number, dataField?: string): void;
    /** Specifies the selection of a particular row, column, or cell within a data table. If a data field (representing a column) is provided along with a row identifier, the selection targets a specific cell at the intersection of the given row and column. If only a row identifier is supplied without a data field, the entire row is selected. Similarly, providing only a data field without a row identifier selects the entire column.
    * @param {string | number} rowId. The starting row ID of the selection range.
    * @param {string} dataField. The starting column data field of the selection range.
    * @param {string | number} endRowId. The ending row ID of the selection range.
    * @param {string} endDataField. The ending column data field of the selection range.
    */
    selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void;
    /** Selects a rectangular range of cells within the grid, defined by specifying both the starting and ending row IDs as well as the data field keys (columns). The selection includes all cells that fall within the rectangle formed by these start and end points. The behavior and outcome of this selection may vary based on the current selection mode of the Grid component (for example, whether it supports cell, row, or column selection)."
    * @param {string | number} rowId. The starting row ID of the selection range.
    * @param {string | number} endRowId. The ending row ID of the selection range.
    */
    selectRowsRange(rowId: string | number, endRowId: string | number): void;
    /** Selects all consecutive rows, inclusive, between the specified start and end row IDs. Both the start and end IDs are included in the selection, and only rows with IDs that fall within this continuous range will be selected.
    * @param {(string | number)[]} rowId. Array of row IDs to select.
    */
    selectRows(rowId: (string | number)[]): void;
    /** Selects multiple rows by accepting an array of row IDs, allowing you to specify and manipulate several rows simultaneously based on their unique identifiers.
    */
    selectAllRows(): void;
    /** Selects every row that is currently visible in the Grid, including only those rows that meet the active filters, sorting, and pagination settings. Hidden or filtered-out rows are not selected.
    * @param {number[]} rowIndex. An array of zero-based row indexes to select.
    */
    selectRowsByIndex(rowIndex: number[]): void;
    /** Enhances selection functionality by allowing users to select multiple rows within the Grid component, using their zero-based index positions. This means you can specify one or more row indices (starting from 0 for the first row) to programmatically select the corresponding rows in the Grid.
    * @param {string} query. The search query or value to filter by.
    * @param {string} dataField?. Optional column data field to apply the query against.
    * @param {string} condition?. Optional condition operator. Supported values include '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    */
    selectRowsByQuery(query: string, dataField?: string, condition?: string): void;
    /** Selects rows from a dataset based on a specified query expression. This allows you to filter rows by applying conditions to the values in one or more columns. Supported conditions include equality (equals), partial matches (contains), comparison operators (greater than, less than), prefix matching (starts with), and more. The query expression enables flexible filtering, so only rows that meet the defined criteria are returned.
    * @param {(string | number)[]} rowIds. Array of row ids
    * @param {string[]} dataFields. Array of data fields.
    */
    selectCells(rowIds: (string | number)[], dataFields: string[]): void;
    /** Allows you to select multiple cells within a grid by specifying arrays of row indices (cell ids) and corresponding column data fields.  For example: `grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']);`  This will select the cells located at the intersection of:- Row 0 and the 'firstName' column,- Row 1 and the 'quantity' column,- Row 2 and the 'date' column.Each element in the id array matches with the element in the dataFields array by position, ensuring precise cell selection across different rows and columns. This method is useful for batch selection or applying simultaneous actions to multiple, non-contiguous cells.
    * @param {string} query. Search query
    */
    selectCellsByQuery(query: string): void;
    /** Selects grid cells based on a query string.  - Example 1: `grid.selectCellsByQuery('nancy');` selects all cells in the grid whose value is exactly 'nancy'.- Example 2: `grid.selectCellsByQuery('nancy, davolio');` selects all cells within rows where both 'nancy' and 'davolio' values appear in any columns of the same row.The query can be a single value or a comma-separated list of values. When multiple values are specified, only rows containing all the specified values (regardless of column order) will have their cells selected.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field of the column where the cell is located (e.g., 'firstName').
    * @param {string | number | Date | boolean} value. The new value to assign to the cell.
    */
    setCellValue(rowId: string | number, dataField: string, value: string | number | Date | boolean): void;
    /** Assigns a new value to a specific cell within a data table, targeting the cell by its unique row ID and the corresponding column's data field name. This allows precise updating of individual cell contents based on row and column identifiers.
    * @param {GridColumn[]} columns. Columns array.
    */
    setColumns(columns: GridColumn[]): void;
    /** Sets the columns displayed in the Grid to a new set defined by the provided argument. When 'setColumns' is called, the Grid compares the new columns array with the currently displayed columns. It will add any new columns, retain existing columns that are still present, and remove columns that are not included in the new array. After updating the columns, the Grid automatically redraws all column headers and refreshes all rows to reflect the changes. Importantly, any state associated with existing columns—such as sort order, filters, column width, and other configurable options—will be preserved for columns that remain after the update. This ensures that users do not lose their settings when columns are changed dynamically.
    * @param {string} dataField. The dataField identifier of the column (e.g., 'firstName').
    * @param {string} propertyName. The name of the column property to set (e.g., 'freeze', 'visible', 'width').
    * @param {any} value. The new value to assign to the specified column property.
    */
    setColumnProperty(dataField: string, propertyName: string, value: any): void;
    /** Sets or updates a specific property of a column identified by its dataField. This function allows you to dynamically modify column settings, such as freezing the column, toggling its visibility, adjusting its width, and altering other configurable attributes at runtime. Use this method to programmatically change how individual columns are displayed or behave within your data grid or table component.
    * @param {string | number} rowId. The unique identifier of the row to modify.
    * @param {string} propertyName. The name of the row property to set (e.g., 'freeze', 'expanded', 'customProperty').
    * @param {any} value. The new value to assign to the specified row property.
    */
    setRowProperty(rowId: string | number, propertyName: string, value: any): void;
    /** Updates or sets a specific property of a table row identified by its unique rowId. This function allows you to dynamically modify row attributes—for example, toggling the frozen state, applying custom styling, or adding arbitrary metadata—enabling flexible and responsive UI changes at the row level.
    * @param {string | number} rowId. The unique identifier of the row to style.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. An object specifying CSS style properties and values to apply to the entire row.
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
    /** Allows you to apply custom CSS styles to a specific table row, identified by its unique rowId. Supported style properties include background color, text color, font size, font family, text decoration, font style, and font weight. This enables granular control over the appearance of individual rows in your table, ensuring consistency with your application's design requirements.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The dataField (column) name of the cell to style.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. An object specifying CSS style properties and values to apply to the specific cell.
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
    /** Enhances a specific table cell's appearance by applying custom CSS styles, targeting the cell using both its unique rowId and the dataField (column identifier). You can specify a range of style properties, including background color, text color, font size, font family, text decoration, font style, and font weight, allowing precise control over the cell’s visual presentation.
    * @param {string} label. The label to be displayed in the dropdown button.
    */
    setDropDownLabel(label: string): void;
    /** Specifies the label text displayed for the Grid component when the 'dropDownMode' property is enabled. This label helps users identify the purpose or content of the Grid when it appears in drop-down mode.
    * @param {number} value. The new scroll position
    */
    setVerticalScrollValue(value: number): void;
    /** Sets the current position of the vertical scrollbar within a scrollable container or component. This method allows you to programmatically control the vertical scroll offset, typically specified in pixels or logical units from the top of the content. It can be used in conjunction with the getVerticalScrollValue method to retrieve the current scroll position, and with getVerticalScrollMax to determine the maximum scrollable value. This is useful for synchronizing scrolling behavior, implementing custom scroll controls, or restoring a previous scroll position.
    * @param {number} value. The new scroll position
    */
    setHorizontalScrollValue(value: number): void;
    /** Sets the current position of the horizontal scrollbar within a scrollable container. This method allows you to programmatically adjust the horizontal scroll offset, enabling smooth navigation or custom scroll behavior. It can be used in combination with getHorizontalScrollValue to retrieve the current scroll position, and with getHorizontalScrollMax to determine the maximum scrollable distance. This is useful for implementing features such as custom scrolling controls, restoring previous scroll positions, or synchronizing scrolling across multiple elements.
    */
    closeSidePanel(): void;
    /** Closes the side panel component of the Grid interface, hiding any currently displayed content or options and returning the Grid to its default view.
    * @param {any} content. This is the content which will be displayed in the side panel. It can be String, HTML Element, HTML Template Element or Component
    * @param {number} width?. This is the width of the side panel
    * @param {any} callback?. Function called when the panel is opened. It can be used for dynamically showing content and initializing it.
    */
    showSidePanel(content: any, width?: number, callback?: any): void;
    /** Displays the Grid's side panel, providing access to additional settings, filters, and customization options related to the Grid's content and layout.
    * @param {string | number} rowId. row bound id
    */
    showDetail(rowId: string | number): void;
    /** Renders an in-depth view of a selected row when the row details feature is activated in the grid configuration. This allows users to access and interact with additional information or actions related to the chosen row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} value. The message to be shown below the cell
    */
    showCellMessage(rowId: string | number, dataField: string, value: string): void;
    /** Displays a visually distinct overlay message positioned directly beneath a specific cell. This method is ideal for providing contextual onboarding tips, user guidance, or delivering custom messages tailored to the user's current interaction. It enhances user experience by presenting timely and relevant information without interrupting workflow.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId: string | number, data: any, callback?: {
        (row: GridRow): void;
    }): void;
    /** Updates the data of a specific row identified by its unique row ID. When batch editing mode is enabled, the changes to the row are temporarily staged and will not be permanently saved to the data source until the user explicitly commits or saves the batch of edits. This ensures that multiple changes can be reviewed and either all applied or discarded together, rather than being immediately written to the underlying data.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    */
    unselect(rowId: string | number, dataField?: string): void;
    /** Deselects a previously selected row, cell, or column within the data grid, removing any associated highlight or selection state.
    * @param {string | number} rowId. row bound id
    */
    uncheckRow(rowId: string | number): void;
    /** Unchecks a specific row in the TreeGrid by setting its associated checkbox to an unchecked (false) state. This visually updates the checkbox in the UI and updates the row’s checked status in the underlying data model.
    */
    uncheckAllRows(): void;
    /** Resets the checked state of all rows in a TreeGrid or GroupingGrid by setting every checkbox to unchecked (`false`). This action ensures that no rows remain selected or checked, effectively deselecting all items in the grid.
    * @param {string | number} rowId. The ID of the row to toggle expand/collapse state.
    */
    toggleRow(rowId: string | number): void;
    /** Toggles the expanded or collapsed state of a TreeGrid row specified by the provided row ID. If the target row is currently collapsed, this action will expand it to reveal its child rows. Conversely, if the row is expanded, it will collapse and hide any child rows. Use this function to dynamically show or hide hierarchical data within the TreeGrid based on user interaction or programmatic control.
    * @param {string} dataField. The dataField of the Column.
    * @param {number} columnWidth?. The width of the Column.
    * @param {any} initColumn?. callback for set up of the column.
    */
    transpose(dataField: string, columnWidth?: number, initColumn?: any): void;
    /** Transposes the Grid.
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
export default Grid;
