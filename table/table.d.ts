import React from "react";
import { TableProperties } from "./../index";
import { TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings } from './../index';
export { TableProperties } from "./../index";
export { TableColumnDataType, TableColumnFreeze, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableDataSourceSettingsSanitizeHTML, TableDataSourceSettingsSanitizeHTMLRender, TableDataSourceSettingsDataFieldDataType, TableDataSourceSettingsDataSourceType, TableEditMode, TableLoadColumnStateBehavior, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, TableDataSourceSettings, TableDataSourceSettingsDataField } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Controls whether the application automatically restores its previous state from the browser's localStorage. When enabled, it retrieves saved settings such as column configurations, expanded or selected rows, active filters, groupings, and the sort order of columns. The specific state information that is loaded depends on the options defined in the stateSettings property.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Controls whether the component automatically saves its current state to the browser’s localStorage. When enabled, data such as column configurations, expanded row states, selected rows, applied filters, grouping options, and sorted columns are persistently stored. The specific state information saved depends on the options set in the stateSettings property. This allows users’ table settings to be retained and restored across browser sessions.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Defines or retrieves an array of column groups that establish the hierarchical structure of the column headers. Note: When a column header hierarchy is configured using these column groups, features such as column resizing and auto-sizing are disabled and will not be available for those columns.
    *	Property type: TableColumnGroup[]
    */
    get columnGroups(): TableColumnGroup[];
    set columnGroups(value: TableColumnGroup[]);
    /** Specifies or retrieves the minimum width for columns when columnSizeMode is set to 'auto' or when columns are being resized by the user. This property determines the smallest allowable width for columns during these operations. Note: This setting is ignored for columns that have their width explicitly defined through code.
    *	Property type: string | number
    */
    get columnMinWidth(): string | number;
    set columnMinWidth(value: string | number);
    /** Determines whether users are allowed to reorder columns by dragging them. When enabled, columns can be rearranged by the user; when disabled, the column order is fixed. This property can be set to enable or disable column reordering, or queried to check the current state.
    *	Property type: boolean
    */
    get columnReorder(): boolean;
    set columnReorder(value: boolean);
    /** Enables or disables the ability for users to resize table columns. When this option is enabled, users can manually adjust the width of each column. Note: The actual column sizing is still governed by the standard HTML table behavior for table-layout: fixed, as smart-table is built upon this layout model. This means columns have a fixed width and resizing may affect the overall table width proportionally, consistent with native HTML tables using table-layout: fixed.
    *	Property type: boolean
    */
    get columnResize(): boolean;
    set columnResize(value: boolean);
    /** This property controls how the table adjusts its column widths when columnSizeMode is set to 'default'. - When columnResizeNormalize is 'false', and every table column has a defined width, the Table will insert an extra '' element. This additional header cell ensures that the customized column widths are preserved, preventing the browser from automatically resizing your columns and thereby maintaining the exact width configuration you specified.- When columnResizeNormalize is 'true', the Table will not add an extra ''. Instead, it distributes the available space among the columns, causing them to expand or contract as needed—similar to the default behavior of standard HTML tables. This results in a more fluid, responsive layout, where any unallocated space is automatically filled.This property is useful for toggling between a strictly controlled column layout and one that behaves like a regular HTML table when sizing columns.
    *	Property type: boolean
    */
    get columnResizeNormalize(): boolean;
    set columnResizeNormalize(value: boolean);
    /** Determines whether a visual feedback indicator is shown during column resizing, displaying the new column width in pixels as the user adjusts the column. This property can be set to enable or disable the display of the width feedback overlay, or queried to check its current state.
    *	Property type: boolean
    */
    get columnResizeFeedback(): boolean;
    set columnResizeFeedback(value: boolean);
    /** Provides detailed definitions and configuration options for the properties of each column, including attributes such as data type, header label, visibility, sorting, filtering, and formatting. This section outlines how individual columns should be displayed and behave within the table or data grid.
    *	Property type: TableColumn[]
    */
    get columns(): TableColumn[];
    set columns(value: TableColumn[]);
    /** Defines or retrieves the rules and settings for conditional formatting applied to the table's cells, allowing specific formatting (such as colors, styles, or icons) to be applied dynamically based on the cell values or conditions.
    *	Property type: TableConditionalFormatting[]
    */
    get conditionalFormatting(): TableConditionalFormatting[];
    set conditionalFormatting(value: TableConditionalFormatting[]);
    /** Defines the column menu functionality for the grid. When this property is set to true, a menu icon appears in the header of each column. Clicking this icon opens a column menu, providing users with options to sort the data, apply filters, and toggle the visibility of columns. You can set this property to enable or disable the column menu, or retrieve its current state.
    *	Property type: boolean
    */
    get columnMenu(): boolean;
    set columnMenu(value: boolean);
    /** ---Determines how the table columns are sized, supporting two distinct modes:- ''auto' Mode:'    Columns are automatically sized based on their content and the specified columnMinWidth value. If the table does not have enough horizontal space to display all content, excess text is truncated with ellipses. Manually specified static column widths (set by the user) will still be honored in this mode.- ''default' Mode:'    Columns follow the standard HTML table's table-layout: fixed behavior. In this mode, column widths do not adapt to content; instead, each column's width is determined either by a fixed value (set via the column’s width property) or distributed evenly if no width is specified.Use this property to control whether column widths are calculated automatically based on content or determined by fixed sizing rules.
    *	Property type: TableColumnSizeMode | string
    */
    get columnSizeMode(): TableColumnSizeMode | string;
    set columnSizeMode(value: TableColumnSizeMode | string);
    /** Controls the visibility of the "Conditional Formatting" button in the Table component’s header toolbar. When enabled, this button appears in the toolbar and allows users to open a dialog where they can configure and apply conditional formatting rules to the table's data. This property can be used to programmatically show or hide the button, or to check if it is currently displayed.
    *	Property type: boolean
    */
    get conditionalFormattingButton(): boolean;
    set conditionalFormattingButton(value: boolean);
    /** This property specifies the interval, in milliseconds, that must elapse during vertical scrolling before the table data is refreshed or updated. Adjusting this setting can help control the responsiveness and performance of data loading while scrolling through the table.
    *	Property type: number
    */
    get deferredScrollDelay(): number;
    set deferredScrollDelay(value: number);
    /** When the dataSource property is bound directly to a plain array—rather than to an instance of JQX.DataAdapter—this property specifies the name of the field within each array element that should be used as the unique row identifier. You can use it to set or retrieve the key that maps each item's row id, allowing the component to correctly reference, update, and manage rows by their unique ids.
    *	Property type: string
    */
    get dataRowId(): string;
    set dataRowId(value: string);
    /** Specifies the data source for the Table component. This property accepts either a standard JavaScript Array or a DataAdapter instance. Using an Array allows you to provide the table data directly, while a DataAdapter offers advanced data management features such as data binding, sorting, filtering, and integration with remote data sources. For detailed information about the DataAdapter and its capabilities, visit: https://www.htmlelements.com/docs/data-adapter/
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Configures the grid's data source settings when the dataSource property is assigned either a local data array or a remote URL. This allows the grid to properly retrieve, bind, and display data from the specified source, whether it is provided directly as an array or fetched asynchronously from a web endpoint.
    *	Property type: TableDataSourceSettings
    */
    get dataSourceSettings(): TableDataSourceSettings;
    set dataSourceSettings(value: TableDataSourceSettings);
    /** Prevents users from interacting with the element, such as clicking, selecting, typing, or triggering any events. The element will appear disabled and will not respond to any user input.
    *	Property type: { (record: any): void }
    */
    get dataTransform(): {
        (record: any): void;
    };
    set dataTransform(value: {
        (record: any): void;
    });
    /** Determines whether the Table is editable. When set to true, users can modify the contents of the Table; when false, the Table is read-only and cannot be edited. This property can be used to both retrieve the current editable state and update it as needed.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Enables or retrieves the current state of edit mode, determining whether the component is in an editable state. When set to true, users can modify the content; when set to false, the component is read-only.
    *	Property type: boolean
    */
    get editing(): boolean;
    set editing(value: boolean);
    /** Determines whether row hierarchies are automatically expanded when they are initially created. When this property is enabled, grouped rows or tree-structured rows in the Table will be expanded by default, allowing users to see all subgrouped data without requiring manual expansion. Use this property if you want hierarchical groups in the Table to appear open automatically when the Table is grouped or when using tree mode.
    *	Property type: TableEditMode | string
    */
    get editMode(): TableEditMode | string;
    set editMode(value: TableEditMode | string);
    /** Controls whether filtering is enabled for the Table. When filtering is enabled (the default), each string and numeric column displays a filter input in the header, allowing users to filter table rows based on column values. Setting this property to false disables all filter inputs and prevents users from filtering the table data.
    *	Property type: boolean
    */
    get expandHierarchy(): boolean;
    set expandHierarchy(value: boolean);
    /** Determines whether the Table supports data filtering through a dedicated filter row. When enabled, users can input criteria directly into this row to dynamically filter and display matching rows in the Table. This property can be set to enable or disable the filter row feature, and can also be queried to check its current state.
    *	Property type: boolean
    */
    get filtering(): boolean;
    set filtering(value: boolean);
    /** Gets or sets the filter operator for the table, determining how multiple column filters are combined. If set to 'and', all filter conditions must be met for a row to be displayed (e.g., cellValue1 && cellValue2). If set to 'or', a row is shown if it meets any one of the filter conditions (e.g., cellValue1 || cellValue2). This property controls whether filters are applied using logical 'AND' or 'OR' operations.
    *	Property type: boolean
    */
    get filterRow(): boolean;
    set filterRow(value: boolean);
    /** Gets or sets the ID of an HTML  element to be used as a custom filter template. This allows you to define and apply your own filter UI by referencing the specified template’s ID.
    *	Property type: boolean
    */
    get filterOperator(): boolean;
    set filterOperator(value: boolean);
    /** Specifies or retrieves the ID of an HTML '' element whose content will be used to render the footer row(s) of the component. This allows you to define custom footer layouts using template markup and apply them dynamically by referencing the template's ID.
    *	Property type: string
    */
    get filterTemplate(): string;
    set filterTemplate(value: string);
    /** Enables or disables support for Excel-style formulas as cell values. When enabled, users can enter formulas starting with the '=' sign (e.g., "=SUM(A1:A3)") directly into cells. These formulas are automatically recalculated whenever referenced cell values change. Note: This functionality requires the third-party, free 'formula-parser' plugin; be sure to include the 'formula-parser.min.js' file as a dependency in your project.
    *	Property type: string
    */
    get footerRow(): string;
    set footerRow(value: string);
    /** Defines or retrieves whether the Table's footer remains fixed (sticky/frozen) at the bottom of the Table when scrolling vertically, ensuring it stays visible regardless of the Table's scroll position.
    *	Property type: boolean
    */
    get formulas(): boolean;
    set formulas(value: boolean);
    /** Sets or retrieves whether the table’s column header remains fixed (sticky) at the top of the viewport while scrolling through the table content. When enabled, the column header stays visible, improving readability for tables with many rows.
    *	Property type: boolean
    */
    get freezeFooter(): boolean;
    set freezeFooter(value: boolean);
    /** Configures or retrieves the current state of table grouping functionality. When enabled, rows in the table can be organized into groups based on specified criteria, allowing for better data categorization and easier analysis.
    *	Property type: boolean
    */
    get freezeHeader(): boolean;
    set freezeHeader(value: boolean);
    /** Enhances customization of the element's header. This property accepts several types of values:- The 'id' of an 'HTMLElement' or 'HTMLTemplateElement', which will be used to render the header.- A function, which receives the header element of the table as its sole argument. Use this function to dynamically generate or modify the header content.- A string containing HTML markup, which will be parsed and inserted as the header.This flexibility allows you to define static, template-based, or fully dynamic headers for the element according to your application's needs.
    *	Property type: boolean
    */
    get grouping(): boolean;
    set grouping(value: boolean);
    /** Controls whether users can navigate through the table using keyboard inputs. When enabled, users can move between table cells, rows, or columns using keys such as Tab, Arrow keys, or other navigation shortcuts. This setting can be accessed to check the current state (enabled or disabled) or modified to turn keyboard navigation on or off for the table.
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
    /** Controls whether checkboxes are visible in the selection column. When set to true, checkboxes will be displayed, allowing users to select multiple items. When set to false, the selection column will not display checkboxes. This property can be used to programmatically toggle the visibility of checkboxes and can also be read to determine the current display state.
    *	Property type: string | HTMLElement | Function
    */
    get headerRow(): string | HTMLElement | Function;
    set headerRow(value: string | HTMLElement | Function);
    /** Defines how the column settings are handled during loading, whether automatically with autoLoadState or manually with loadState. This option is relevant only if the stateSettings array includes 'columns', ensuring that column-specific state (such as order, visibility, or width) is properly managed during the state load process.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Defines or retrieves the unlockKey property, a unique value required to activate or authorize access to the product's features. This key is used to verify that the user is permitted to unlock and use the product.
    *	Property type: boolean
    */
    get hideSelectionColumn(): boolean;
    set hideSelectionColumn(value: boolean);
    /** Specifies or retrieves the currently selected language code (e.g., "en", "fr", "es") for localization purposes. This property works together with the messages property to determine which set of localized messages should be displayed or used by the application. Adjusting this property changes which language mappings from messages are active.
    *	Property type: TableLoadColumnStateBehavior | string
    */
    get loadColumnStateBehavior(): TableLoadColumnStateBehavior | string;
    set loadColumnStateBehavior(value: TableLoadColumnStateBehavior | string);
    /** Defines or retrieves an object containing key-value pairs of strings used within the element, allowing for customization and localization of displayed text. This property works together with the locale property to present the appropriate language and regional terms based on the user's locale preferences.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the number of records displayed per page when paging is enabled. This property determines the size of each data page, allowing you to control how many items are shown to the user at a time.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Gets or sets the current page index (zero-based) when paging is enabled. This property allows you to specify or retrieve which page of data is currently being displayed, with the first page having an index of 0.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines whether paging functionality is enabled. When set to true, data is divided into discrete pages for easier navigation and viewing; when false, all data is displayed in a single, continuous view. You can use this property to enable or disable paging, or retrieve its current state.
    *	Property type: { (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void }
    */
    get onCellRender(): {
        (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void;
    };
    set onCellRender(value: {
        (data: any, dataField: string, value: any, cell: HTMLTableCellElement): void;
    });
    /** Specifies or retrieves a value that determines whether the element's alignment is configured for right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew that require right-to-left font support.
    *	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
    */
    get onColumnRender(): {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    };
    set onColumnRender(value: {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    });
    /** Defines or retrieves a string template used for rendering the detail section of a row. This template enables you to display additional information beneath a master row when it is expanded. To populate the detail row with values from the master row, insert the relevant data field names within double curly brackets (e.g., {{price}}). When a user clicks on a row to expand it, the template is applied, and the placeholders are replaced with the corresponding data from that row.
    *	Property type: { (): void }
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Defines or retrieves a callback function that takes three arguments: column, filterConditions, and filterInputTemplateString. This function is responsible for generating and returning a new filter input element or template based on the specific column and the current filter conditions. Use this callback to customize how the filter input is rendered for each column in the table.
    *	Property type: { (): void }
    */
    get onLoad(): {
        (): void;
    };
    set onLoad(value: {
        (): void;
    });
    /** Gets or sets an array containing the IDs of the currently selected rows in the Table. This property allows you to retrieve which rows are selected by their unique identifiers, or programmatically update the selection by supplying an array of row IDs.
    *	Property type: { (): void }
    */
    get onUpdateComplete(): {
        (): void;
    };
    set onUpdateComplete(value: {
        (): void;
    });
    /** Controls whether users can select table rows using checkboxes. When enabled, checkboxes appear next to each row, allowing users to select or deselect rows. The value can be set to enable or disable this feature, or retrieved to check the current selection mode.
    *	Property type: number
    */
    get pageSize(): number;
    set pageSize(value: number);
    /** Defines or retrieves the current selection mode for the component. This property is only applicable when selection functionality is enabled. Use it to specify how users can select items (e.g., single, multiple, or none).
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Controls the hierarchical row selection behavior using checkboxes. When enabled, selecting a parent row automatically selects all of its child (sub) rows. Likewise, deselecting a parent row will deselect all of its sub rows. You can use this property to get the current hierarchical selection state or to enable/disable this feature.
    *	Property type: boolean
    */
    get paging(): boolean;
    set paging(value: boolean);
    /** Specifies the sorting behavior applied to the table, such as ascending, descending, or custom order. This setting controls how table data is organized and displayed to the user.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies which aspects of the Table's current state can be saved (using autoSaveState or saveState) and restored (using autoLoadState or loadState). This determines which settings—such as column visibility, sorting, filters, and pagination—are included when persisting or retrieving the Table’s configuration.
    *	Property type: string
    */
    get rowDetailTemplate(): string;
    set rowDetailTemplate(value: string);
    /** Specifies the theme used to style the element. The theme controls the overall appearance, including colors, fonts, and visual effects, ensuring a consistent look and feel across the user interface.
    *	Property type: any
    */
    get onFilterRowInput(): any;
    set onFilterRowInput(value: any);
    /** Determines whether a tooltip displaying the full, untruncated content appears when a user hovers over a table cell that contains truncated text. When enabled, hovering the mouse pointer over a cell with clipped or overflowed text will show a tooltip with the complete content; when disabled, no tooltip is displayed on hover. This setting can be used to specify or retrieve the current tooltip behavior for truncated cell content.
    *	Property type: any[]
    */
    get selected(): any[];
    set selected(value: any[]);
    /** Controls whether HTML virtualization is enabled. When activated, only the rows currently visible within the viewport are rendered in the DOM, rather than all rows at once. This optimization significantly improves table performance, especially when displaying large datasets, by reducing memory usage and speeding up rendering times.
    *	Property type: boolean
    */
    get selection(): boolean;
    set selection(value: boolean);
    /** undefined
    *	Property type: TableSelectionMode | string
    */
    get selectionMode(): TableSelectionMode | string;
    set selectionMode(value: TableSelectionMode | string);
    /** undefined
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
    *	Property type: TableSortMode | string
    */
    get sortMode(): TableSortMode | string;
    set sortMode(value: TableSortMode | string);
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
    /**  This event is triggered when a user begins editing the contents of a cell, signaling the initiation of a cell edit operation. It provides an opportunity to perform preparatory actions, such as validating the cell, applying custom styles, or capturing the cell’s initial value before any changes are made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
    *   id - The id of the row.
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a cell within the component or data grid. It provides contextual information about the clicked cell, such as its row and column index, allowing you to perform custom actions in response to user interaction.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
    *   id - The cell's row id.
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    *   value - The data value of the cell.
    *   originalEvent - The 'click' event object.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after a cell's value has been modified by the user, allowing you to respond to changes as soon as a cell is edited. It provides relevant information about the edited cell, such as its new value, previous value, row, and column, enabling precise handling of cell updates within the table or data grid.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value)
    *   id - The id of the row.
    *   dataField - The data field of the cell's column.
    *   row - The new data of the cell's row.
    *   value - The data value of the cell.
    */
    onCellEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user changes the current selection, such as highlighting text or selecting an item. Inside the event handler, you can access the updated selection by calling the 'getSelection' method. This allows you to retrieve information about the newly selected content or item and perform any necessary actions in response to the change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	type)
    *   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a row in the data grid or table is collapsed, meaning its contents or nested rows are hidden from view. Use this event to execute custom logic after a user collapses a specific row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
    *   id - The id of the collapsed row.
    *   record - The data of the collapsed row.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a row in the table is expanded by the user, typically to reveal additional details or nested content associated with that row.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	record)
    *   id - The id of the expanded row.
    *   record - The (aggregated) data of the expanded row.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a column header cell, typically indicating that the header was selected—such as to initiate actions like sorting or displaying column options. It provides contextual information about the clicked header cell, enabling you to implement custom behaviors in response to header interactions.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the cell's column.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after the column menu has been closed by the user, either by clicking outside the menu or performing an action that causes it to close. It allows you to execute custom logic in response to the closure of a column-specific menu in the interface.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column.
    */
    onCloseColumnMenu?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column's width is changed by the user, either by dragging the column's edge or by double-clicking to auto-fit the column. It allows you to respond to column resize actions, enabling custom logic such as persisting new column widths or updating related UI elements.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
    *   dataField - The data field of the column.
    *   headerCellElement - The column's header cell HTML element.
    *   width - The new width of the column.
    */
    onColumnResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user initiates or modifies a filtering action, such as applying, updating, or removing filters. It allows the application to respond to changes in filtering criteria, ensuring that the displayed data accurately reflects the selected filters.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user performs an action related to grouping, such as creating, modifying, or deleting a group, or changing the grouping configuration. It allows your application to respond dynamically to changes in how items are grouped.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label, 	path)
    *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
    *   dataField - The data field of the column whose grouping is modified.
    *   label - The label of the group (only when collapsing/expanding).
    *   path - The group's path (only when collapsing/expanding). The path includes the path to the expanded/collapsed group starting from the root group. The indexes are joined with '.'. This parameter is available when the 'action' is 'expand' or 'collapse'.
    */
    onGroup?: ((event?: Event) => void) | undefined;
    /**  This event is fired whenever a user opens the menu associated with a column, such as by clicking a column header or menu icon. It provides an opportunity to perform custom actions or update the interface in response to the column menu becoming visible.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the column.
    */
    onOpenColumnMenu?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user performs an action that changes the current page in a paginated component, such as navigating to the next or previous page, selecting a specific page number, or adjusting the page size.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
    *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
    */
    onPage?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user begins editing a table row, but only if the editMode property is set to 'row'. This allows you to handle actions or logic specifically at the start of a row-level edit operation within your data grid or table component.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
    *   id - The id of the row.
    *   row - The data of the row.
    */
    onRowBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a table row is edited, but only if the editMode property is set to 'row'. It signifies that the user has completed changes to the entire row, as opposed to editing individual cells, and is useful for handling row-level updates or validation logic.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	row)
    *   id - The id of the row.
    *   row - The new data of the row.
    */
    onRowEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a column header cell in the table is clicked by the user, initiating a sort operation, or when sorting is applied programmatically through the Table API. It fires both on direct user interaction and when sorting state changes are made via code.
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
    /** Inserts a new row into the data set. To use this method, provide a JSON object containing key-value pairs that represent the data for each column in the new row. Each key should correspond to a column name, and its value should specify the cell's content for that column.
    * @param {any} data. JSON object with the new row's data. Sample JSON: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    addRow(data: any): void;
    /** Adds a custom filter to a specified column in the dataset, allowing you to display only the rows that meet defined criteria for that column. This function enables more precise data querying and improved data visualization by narrowing down results based on column-specific conditions.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object or a Filter expression. Filter expression like: 'startsWith B'. Example 2: ['contains Andrew or contains Nancy'], Example 3:  ['quantity', '&lt;= 3 and &gt;= 8'].  Filter conditions which you can use in the expressions: '=', 'EQUAL','&lt;&gt;', 'NOT_EQUAL', '!=', '&lt;', 'LESS_THAN','&gt;', 'GREATER_THAN', '&lt;=', 'LESS_THAN_OR_EQUAL', '&gt;=', 'GREATER_THAN_OR_EQUAL','starts with', 'STARTS_WITH','ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS','DOES_NOT_CONTAIN', 'NULL','NOT_NULL'
    */
    addFilter(dataField: string, filter: any): void;
    /** Groups the dataset based on the unique values in a specified column, organizing the data into subsets where each group contains records sharing the same value for that column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField: string): void;
    /** Initiates an edit operation, marking the start of a sequence where changes can be made to the data or document. This typically enables features such as undo or redo by tracking all modifications performed during the editing session.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row: string | number, dataField?: string): void;
    /** Initiates an update operation by temporarily suspending all table data refreshes and rendering processes. This ensures that no visual or data changes occur until the update is completed, preventing partial renders and improving performance during batch modifications.
    */
    beginUpdate(): void;
    /** Terminates the current editing session and reverts any unsaved changes, restoring the content to its previous state before the edit began. No modifications made during this edit operation will be saved.
    */
    cancelEdit(): void;
    /** Removes all currently applied filters from the data set or view, restoring the original unfiltered state.
    */
    clearFilters(): void;
    /** Removes any currently applied grouping from the data set, restoring the original ungrouped view.
    */
    clearGrouping(): void;
    /** Removes any currently selected items, resetting the selection state to none.
    */
    clearSelection(): void;
    /** Removes any active sorting applied to the table, restoring the original order of the data. This action resets all column sort indicators and displays the table rows as they were initially loaded.
    */
    clearSort(): void;
    /** Collapses all expanded rows in the tree view, minimizing each parent node so that only the top-level rows remain visible. This action helps organize and simplify the display by hiding any nested child rows.
    */
    collapseAllRows(): void;
    /** Collapses all expanded groups in the tree view, minimizing each group so that only their parent nodes are visible. This action hides all nested child elements within the groups, providing a cleaner and more condensed overview of the tree structure.
    */
    collapseAllGroups(): void;
    /** Collapses all expanded row details in the data table. Any rows that currently display additional content through a defined rowDetailTemplate will be collapsed, hiding their extra details from view. Only the main row data will remain visible after this action.
    */
    collapseAllRowDetails(): void;
    /** Collapses a specified group of elements, hiding its contents from view while retaining the group's header or main container visible. This action makes the group's items inaccessible until it is expanded again, improving interface organization and reducing visual clutter.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index: string): void;
    /** Collapses the specified row in tree mode, hiding its child rows and displaying only the parent row.
    * @param {string | number} rowId. The id of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** Prevents the selection of a specific row in the table. By default, when the 'selection' property is set to 'true', all rows are selectable. Use this option to disable row selection for individual rows as needed, overriding the global selection setting.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    disableSelect(rowId: string | number | (string | number)[]): void;
    /** Restores row selection capability for a previously disabled row, typically after using the 'disableSelect' method. If the 'selection' property is set to 'true', selection is enabled for all rows by default, allowing users to select any row unless explicitly disabled.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    enableSelect(rowId: string | number | (string | number)[]): void;
    /** Finalizes the current edit operation by applying and saving all changes made to the content, ensuring that modifications are committed and any unsaved edits are preserved.
    */
    endEdit(): void;
    /** Ends the current update operation, allowing the table to resume normal refresh and render processes. This function restores automatic table updates that may have been paused during the update, and explicitly triggers a full re-render of the table to ensure all changes are reflected in the UI.
    * @param {boolean} refresh?. Optionally you can pass 'false' in case you need to manually call the 'refresh' method. By default, the table is re-rendered.
    */
    endUpdate(refresh?: boolean): void;
    /** Expands all rows in the tree view, revealing every nested child element and displaying the entire hierarchical structure.
    */
    expandAllRows(): void;
    /** Expands and displays all group nodes in the tree view, revealing their child items and nested structures.
    */
    expandAllGroups(): void;
    /** Displays the detailed content for all table rows that have a rowDetailTemplate defined by expanding them simultaneously. Only rows associated with a rowDetailTemplate will show their additional details when this action is triggered; rows without a detail template remain unchanged.
    */
    expandAllRowDetails(): void;
    /** Expands a collapsible group to reveal its hidden content or child elements. This action typically changes the group's state from collapsed to expanded, making its associated items visible within the user interface.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index: string): void;
    /** Expands a row to reveal its child elements or sub-rows when operating in tree view mode, allowing users to browse hierarchical data structures within the table.
    * @param {string | number} rowId. The id of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** Exports the data contained within the Table component to a downloadable file format (such as CSV, Excel, or JSON), enabling users to save or process the table data outside of the application.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName?: string, exportFiltered?: boolean, callback?: Function): any;
    /** Returns an array containing the unique identifiers (IDs) of all currently selected rows. Each element in the array represents the ID of a row that has been selected by the user or programmatically. If no rows are selected, the array will be empty.
    * @returns {(string | number)[]}
  */
    getSelection(): any;
    /** Returns the current state of the Table component as an object, including comprehensive details about the following: visible and hidden columns, expanded row keys, selected row keys, applied filters, active groupings, and the order and direction of sorted columns. This state object can be serialized, stored (e.g., in local storage or a database), and later restored by passing it to the loadState method, enabling consistent table configurations across sessions or users.
    * @returns {any}
  */
    getState(): any;
    /** Retrieves the current value stored in a specific cell, identified by its row and column coordinates. This function returns the cell's content, which may be a number, text, or other data type, depending on the cell's contents.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row: string | number, dataField: string): any;
    /** Retrieves the value of a specific property from a column object. This function allows you to access detailed information or settings associated with a particular column, such as its name, data type, default value, or any custom attributes.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @returns {any}
  */
    getColumnProperty(columnDataField: string, propertyName: string): any;
    /** Determines if a specified group is currently expanded and returns true if it is, or false otherwise. If the provided group index is undefined or does not correspond to a valid group, the function will also return false.
    * @param {string} index. The group's hierarchical index.
    * @returns {boolean}
  */
    isGroupExpanded(index: string): any;
    /** Loads the current state of the Table component, restoring settings such as visible columns, expanded rows, selected rows, applied filters, grouping configurations, and column sorting order. The specific aspects of the state that are loaded depend on the options specified in the stateSettings property. This allows for a customized and persistent table experience based on user preferences or previously saved configurations.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** Navigates the user to a specified web page or route within the application. This action typically updates the browser’s address bar and loads the corresponding content, enabling seamless transitions between different views or sections of the site. Optional parameters may include the target URL, query parameters, or navigation options such as replacing the current history entry.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex: number): void;
    /** Updates the table by reloading its data and refreshing the displayed content to reflect the latest changes.
    */
    refresh(): void;
    /** Clears all filters currently applied to the specified column, restoring its original, unfiltered data view.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** Removes the existing grouping applied to the dataset based on the specified column, resulting in an ungrouped or flat structure with respect to that column. This operation effectively eliminates any aggregation or segmentation previously created through grouping by that column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField: string): void;
    /** Deletes a row from the data set based on the specified unique identifier (id). This operation locates the row with the matching id and removes it from the collection, ensuring the data remains consistent.
    * @param {string | number} row. The id of the cell's row.
    */
    removeRow(row: string | number): void;
    /** Resets the Table's state according to the configuration specified by the stateSettings property. This action clears stored information such as column configurations, expanded or collapsed rows, selected rows, applied filters, groupings, and sorting order. Only the aspects of state indicated by stateSettings will be reset, ensuring fine-grained control over which parts of the Table's state are cleared.
    */
    resetState(): void;
    /** Persists the current state of the Table. This includes details such as column configurations, which rows are expanded or selected, any active filters, applied grouping, and the current column sort order. The specific aspects of the Table’s state that are saved depend on the options specified in the stateSettings property.
    * @returns {any}
  */
    saveState(): any;
    /** Allows the selection of one or more rows from a dataset or table, enabling users to perform actions on multiple rows simultaneously.
    * @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
    */
    select(rowId: string | number | (string | number)[]): void;
    /** Assigns a specified value to a particular cell within a data structure, such as a table or spreadsheet. This operation updates the cell’s current content with the new value provided.
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
    /** Sets a property for a database or data grid column, allowing customization of its behavior or appearance—such as its data type, visibility, default value, sorting behavior, or formatting options.
    * @param {string} columnDataField. Column field name.
    * @param {string} propertyName. Column property name.
    * @param {any} propertyValue. Property value.
    */
    setColumnProperty(columnDataField: string, propertyName: string, propertyValue: any): void;
    /** Updates an existing table row with new data. This method requires two parameters: the unique identifier (row id) of the row to be updated, and a JSON object containing the updated key-value pairs for the row's data. Only the specified fields in the JSON object will be modified; all other fields will remain unchanged.
    * @param {string | number} rowId. The id of the row.
    * @param {any} data. JSON object with the new row's data. Example: {firstName: 'Peter', lastName: 'Fuller'}.
    */
    updateRow(rowId: string | number, data: any): void;
    /** Deselects one or more previously selected rows in the dataset or table, removing their active or highlighted state.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Table;
