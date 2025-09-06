
"use client";

import '../source/modules/smart.grid'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.grid');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
class Grid extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Grid' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** An object that defines configurable options for customizing the visual appearance of the grid, including properties such as line color, spacing, background style, and border visibility.
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
    /** An object that defines configuration options for integrating AI capabilities within the grid component. This includes settings for enabling AI features, specifying AI service endpoints, setting authentication credentials, and customizing how the grid interacts with AI-powered functionalities.
    *	Property type: GridAi
    */
    get ai() {
        return this.nativeElement ? this.nativeElement.ai : undefined;
    }
    set ai(value) {
        if (this.nativeElement) {
            this.nativeElement.ai = value;
        }
    }
    /** An object that defines configuration options controlling the grid’s behavior, such as layout properties, sorting and filtering capabilities, selection modes, and responsiveness settings.
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
    /** Sets or retrieves the id of the currently active user. This value must match the id of one of the entries in the users property or array. The active user's privileges and access rights are determined based on their corresponding user object. If no current user is specified (i.e., the id is unset or invalid), the default privileges for the element will apply according to its properties, potentially restricting or allowing access based on default settings.
    *	Property type: string | number
    */
    get currentUser() {
        return this.nativeElement ? this.nativeElement.currentUser : undefined;
    }
    set currentUser(value) {
        if (this.nativeElement) {
            this.nativeElement.currentUser = value;
        }
    }
    /** Provides configuration options for customizing the appearance, labels, alignment, and behavior of column headers in a data table or grid.
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
    /** The clipboard property controls whether users can perform clipboard operations—such as copying (Ctrl+C), cutting (Ctrl+X), and pasting (Ctrl+V)—using keyboard shortcuts within the application. Setting this property to true enables these keyboard shortcuts for clipboard actions; setting it to false disables them, preventing users from using keyboard navigation for copying, cutting, or pasting content.
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
    /** The columns property defines the collection of columns displayed within the Smart.Grid component. Each column configuration specifies how data is presented and interacted with. Through this property, you can control essential aspects such as column headers, data field bindings, sorting, filtering, formatting, alignment, visibility, and more. The columns property gives you full control over the structure, appearance, and behavior of the grid's columns, enabling advanced customization of both data presentation and user experience.
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
    /** The Context Menu is the drop-down menu that appears when a user right-clicks on a row within the Grid. This menu provides quick access to actions such as deleting a row or editing a cell or entire row, depending on the current editing mode configured for the Grid. You can customize the Context Menu by using the 'contextMenuItemCustom' option in the Grid's dataSource. This option lets you add your own custom menu items to enhance or extend the menu's functionality.Additionally, if you want to completely replace the default context menu with your own, you can use the 'selector' property. Set this property to the ID of a Smart.Menu component to display your custom menu when the user right-clicks on a row in the Grid.
    *	Property type: GridContextMenu
    */
    get contextMenu() {
        return this.nativeElement ? this.nativeElement.contextMenu : undefined;
    }
    set contextMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenu = value;
        }
    }
    /** The Column Menu is a contextual drop-down menu that appears when you click the drop-down button in a column header, which becomes visible upon hovering over the header. This menu provides various options for customizing the behavior and appearance of the selected column. Common actions include sorting the grid by the column, applying filters to show or hide specific data, and grouping the grid rows based on the column’s values. The Column Menu offers an intuitive way for users to interact with and tailor the data grid to meet their specific needs.
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
    /** Provides a detailed configuration of column group settings, including group names, ordering, visibility, and any hierarchical relationships between columns within the group.
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
    /**
    *	Property type: boolean
    */
    get dropDownMode() {
        return this.nativeElement ? this.nativeElement.dropDownMode : undefined;
    }
    set dropDownMode(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMode = value;
        }
    }
    /** Defines or retrieves the rules and settings for conditional formatting applied to the Grid's cells, allowing you to customize cell appearance (such as background color, font style, or icons) based on specific conditions or cell values.
    *	Property type: GridConditionalFormatting[]
    */
    get conditionalFormatting() {
        return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
    }
    set conditionalFormatting(value) {
        if (this.nativeElement) {
            this.nativeElement.conditionalFormatting = value;
        }
    }
    /** Configures the data and display settings for the Grid Chart, enabling data visualization in a tabular grid format. This includes specifying the structure, appearance, and interactive features of the chart to present complex data clearly and intuitively.
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
    /** Configures the checkbox options for the TreeGrid component, allowing you to enable or customize checkbox display, selection behavior, and interaction within the hierarchical grid structure.
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
    /** Configures the export settings for grid data, including file format, selected columns, data range, export style, and additional export preferences.
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
    /** Specifies the source from which the grid retrieves its data. The dataSource property accepts either an instance of JQX.DataAdapter for advanced data management and operations, or a standard Array containing the data records to be displayed in the grid. This flexibility allows developers to connect the grid to various data formats and structures, making data binding straightforward and versatile.
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
    /** Configures the grid’s data source when the dataSource property is assigned either a JavaScript array (for local data) or a URL (for remote data). This setting determines how the grid retrieves and displays its data, supporting both direct array binding and remote data fetching via HTTP requests.
    *	Property type: GridDataSourceSettings
    */
    get dataSourceSettings() {
        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
    }
    set dataSourceSettings(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSourceSettings = value;
        }
    }
    /** Provides comprehensive configuration options for controlling the grid's editing behavior, including enabling or disabling editing features, specifying editing modes (such as inline, popup, or batch), setting validation rules, and customizing editors for specific columns.
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
    /** Provides detailed configuration options for the grid's filtering functionality, including filter types, default filter values, filter operators, and custom filter logic for columns. This determines how data within the grid can be searched, narrowed, or displayed based on user-defined criteria.
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
    /** Provides configuration options for customizing the appearance and behavior of the grid's footer, including visibility, content, styling, and layout settings.
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
    /** Enables or retrieves the ability to use Excel-style formulas as cell values within the table. Formulas must begin with an equal sign (=) and will be automatically recalculated whenever the referenced cell values are updated. This functionality relies on the third-party, free formula-parser plugin, so you must include the file 'formula-parser.min.js' in your project for this feature to work properly.
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
    /** Provides detailed configuration options for the grid's data grouping functionality, specifying how rows are grouped, the grouping criteria, and related display settings within the grid.
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
    /** Provides configuration options that define the appearance and behavior of the group header, including properties such as text, style, alignment, and visibility settings.
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
    /** Provides detailed configuration options for the grid's header, including display settings, styling, visibility, and customization of header rows and columns.
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
    /** An object that defines configuration options for the layout of the grid, including properties such as the number of columns, row and column spacing, alignment, and overall grid arrangement. This object allows you to customize the appearance and structure of the grid according to your requirements.
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
    /** Sets or retrieves the unlockKey used to authorize and access the full functionality of the product. The unlockKey serves as a security credential to enable locked or premium features.
    *	Property type: string
    */
    get unlockKey() {
        return this.nativeElement ? this.nativeElement.unlockKey : undefined;
    }
    set unlockKey(value) {
        if (this.nativeElement) {
            this.nativeElement.unlockKey = value;
        }
    }
    /** Specifies the language code to be used for displaying messages. When set, it determines which localized messages from the messages property are shown to the user. This property can be used to retrieve the current language or update it dynamically at runtime.
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
    /** 'Key Handling:'  You can customize how key presses are handled by defining key mappings within the configuration. For each key (e.g., '"Enter"'), you can assign:- 'Another key as the value' (e.g., '"Enter": "Tab"'): When the specified key is pressed, it will be treated as if the mapped key was pressed instead.- 'A predefined action' (e.g., ''copy'', ''copyPrev'', ''copyNext'', ''delete''): When the key is pressed, the associated action will be executed.- 'A custom function': Assign a function as the value to execute custom logic whenever the key is pressed.This allows you to remap keys, trigger built-in actions, or define entirely custom behaviors based on key events in your application.
    *	Property type: any
    */
    get keys() {
        return this.nativeElement ? this.nativeElement.keys : undefined;
    }
    set keys(value) {
        if (this.nativeElement) {
            this.nativeElement.keys = value;
        }
    }
    /** Assigns values to the messages property, which typically contains an array or object representing individual messages or notifications. This function or setting updates the content, ensuring that the correct message data is stored or displayed.
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
    /** Callback function (chart: JQX.Chart) invoked after the chart has been fully initialized. Use this function to perform additional configuration or customization of the chart instance, such as modifying chart options, adding event listeners, or updating data before the chart is rendered to the user. This allows you to tailor the chart's appearance and behavior to meet specific application requirements.
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
    /** A callback function that is executed immediately after the grid has finished rendering, allowing you to perform additional actions or updates once the grid display is complete.
    *	Property type: {(cells: GridCell[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
    */
    get onCellUpdate() {
        return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
    }
    set onCellUpdate(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellUpdate = value;
        }
    }
    /** Callback function invoked after the grid has been rendered for the first time and all data bindings have been completed. At this point, the component is fully initialized and ready for interaction or further manipulation.
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
    /** Provides detailed configuration options for managing pagination, including parameters such as the number of items per page, current page index, and total number of pages. This section ensures efficient data retrieval and navigation across multiple pages of results.
    *	Property type: {(id: string, dataField: string, value: any): boolean}
    */
    get onCellBeginEdit() {
        return this.nativeElement ? this.nativeElement.onCellBeginEdit : undefined;
    }
    set onCellBeginEdit(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellBeginEdit = value;
        }
    }
    /** Provides detailed configuration options for pager controls, including settings for page size, navigation buttons, and display style. These options determine how pagination is displayed and how users interact with paged content in the interface.
    *	Property type: {(id: string, dataField: string, value: any, oldValue: any, data: any): void}
    */
    get onCellEditRequest() {
        return this.nativeElement ? this.nativeElement.onCellEditRequest : undefined;
    }
    set onCellEditRequest(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellEditRequest = value;
        }
    }
    /** Configures or updates the detailed information or content associated with a specific row, often used to display additional data or expanded views for that row.
    *	Property type: {(id: string, dataField: string, value: any): boolean}
    */
    get onCellValueChanged() {
        return this.nativeElement ? this.nativeElement.onCellValueChanged : undefined;
    }
    set onCellValueChanged(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellValueChanged = value;
        }
    }
    /** Sets or gets the CSS class rules for table rows. This property allows you to conditionally apply different CSS class names to rows based on custom logic. You provide an object where the keys are CSS class names and the values are functions that determine whether the class should be applied to a particular row.Each function receives a settings object with the following properties:- 'index': The numerical index of the current row.- 'data': The data object for the current row.- 'row': The raw row element or reference (depending on the implementation).- 'api': A reference to the table's API for advanced operations.'Example usage:''''jsrowCSSRules: {  'cell-class-1': settings => settings.data.quantity === 5,  'cell-class-2': settings => settings.data.quantity   'cell-class-3': settings => settings.data.quantity > 5}'''In this example, based on the 'quantity' property of the row's data, a different CSS class will be applied to that row. Multiple rules can be defined, and each will be evaluated for every row. If the function returns 'true', the corresponding class will be added to the row.
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
    /** Gets or sets a value that determines whether the element's alignment is configured for right-to-left (RTL) languages, ensuring proper layout and text direction for locales such as Arabic or Hebrew.
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
    /** The rows property contains an array of objects, with each object representing a single row in the grid. This property defines all the data entries that are rendered and displayed as rows within the grid component. Each element in the rows array should align with the column definitions, ensuring that the grid displays structured and consistent data across all rows.
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
    /** Configures the scroll mode behavior, allowing you to define how scrolling is handled within the component or page. This setting determines options such as smooth or instant scrolling, vertical or horizontal direction, and any custom scroll-related parameters.
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
    /** Provides detailed configuration options for displaying and customizing the summary row, including its appearance, position, aggregation methods, and which columns are summarized.
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
    /** Configures the grid's state-related settings, including properties such as selection, sorting, filtering, pagination, and layout. This determines how the grid maintains and restores its current state during user interactions or when the page is reloaded.
    *	Property type: any
    */
    get onLoad() {
        return this.nativeElement ? this.nativeElement.onLoad : undefined;
    }
    set onLoad(value) {
        if (this.nativeElement) {
            this.nativeElement.onLoad = value;
        }
    }
    /** Provides detailed configuration options for user selection behavior, including parameters such as selection mode (single or multiple), default selections, selection limits, and customizable callbacks for selection events.
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
    /** Provides detailed configuration options for controlling how data is sorted, including criteria such as sorting field, order (ascending or descending), and support for multiple sort keys.
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
    /** Defines the users displayed on the grid. Expects an array of user objects, where each object must include an 'id' (unique identifier) and a 'name' (display name). Optionally, each user object can also include a 'color' (for customizing the user's appearance) and an 'image' (URL or path to the user's avatar image).
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
    /** Configures the upload settings for images and attachments in the grid's image and attachment columns, including options for file type restrictions, size limits, and image filters to be applied during the upload process.
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
    /** Specifies the layout mode for displaying data within the interface. Acceptable values are:- ''grid'': Presents items in a tabular, spreadsheet-like format with rows and columns.- ''kanban'': Arranges items into columns representing workflow stages, similar to task boards.- ''card'': Displays each item as an individual card, typically used for concise summaries or visual grouping.Choose one of these values to determine how data is visually organized and presented to the user.
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowHistory() {
        return this.nativeElement ? this.nativeElement.onRowHistory : undefined;
    }
    set onRowHistory(value) {
        if (this.nativeElement) {
            this.nativeElement.onRowHistory = value;
        }
    }
    /** undefined
    *	Property type: {(index: number, row: GridRow, history: any[]): void}
    */
    get onRowStyle() {
        return this.nativeElement ? this.nativeElement.onRowStyle : undefined;
    }
    set onRowStyle(value) {
        if (this.nativeElement) {
            this.nativeElement.onRowStyle = value;
        }
    }
    /** undefined
    *	Property type: {(index: number[], row: GridRow[]): void}
    */
    get onRowInserted() {
        return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
    }
    set onRowInserted(value) {
        if (this.nativeElement) {
            this.nativeElement.onRowInserted = value;
        }
    }
    /** undefined
    *	Property type: {(indexes: number[], rows: GridRow[]): void}
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
    *	Property type: {(index: number[], row: GridRow[], oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
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
    *	Property type: {(index: number[], row: GridRow[]): void}
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
    *	Property type: {(index: number, data: any, row: GridRow[]): void}
    */
    get onRowClass() {
        return this.nativeElement ? this.nativeElement.onRowClass : undefined;
    }
    set onRowClass(value) {
        if (this.nativeElement) {
            this.nativeElement.onRowClass = value;
        }
    }
    /** undefined
    *	Property type: {(index: number, dataField: string, cellValue: any, data: any, row: GridRow[]): void}
    */
    get onCellClass() {
        return this.nativeElement ? this.nativeElement.onCellClass : undefined;
    }
    set onCellClass(value) {
        if (this.nativeElement) {
            this.nativeElement.onCellClass = value;
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
    *	Property type: {(dataField: string, cloneColumnDataField: string, index: number, duplicateCells: boolean): void}
    */
    get onColumnClone() {
        return this.nativeElement ? this.nativeElement.onColumnClone : undefined;
    }
    set onColumnClone(value) {
        if (this.nativeElement) {
            this.nativeElement.onColumnClone = value;
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
    *	Property type: any
    */
    get rowCSSRules() {
        return this.nativeElement ? this.nativeElement.rowCSSRules : undefined;
    }
    set rowCSSRules(value) {
        if (this.nativeElement) {
            this.nativeElement.rowCSSRules = value;
        }
    }
    /** undefined
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
    *	Property type: Scrolling | string
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
    *	Property type: GridStateSettings
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
    /** undefined
    *	Property type: any[]
    */
    get users() {
        return this.nativeElement ? this.nativeElement.users : undefined;
    }
    set users(value) {
        if (this.nativeElement) {
            this.nativeElement.users = value;
        }
    }
    /** undefined
    *	Property type: GridUploadSettings
    */
    get uploadSettings() {
        return this.nativeElement ? this.nativeElement.uploadSettings : undefined;
    }
    set uploadSettings(value) {
        if (this.nativeElement) {
            this.nativeElement.uploadSettings = value;
        }
    }
    /** undefined
    *	Property type: string
    */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        if (this.nativeElement) {
            this.nativeElement.view = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["appearance", "ai", "behavior", "currentUser", "columnHeader", "clipboard", "columns", "contextMenu", "columnMenu", "columnGroups", "dropDownMode", "conditionalFormatting", "charting", "checkBoxes", "dataExport", "dataSource", "dataSourceSettings", "editing", "filtering", "footer", "formulas", "grouping", "groupHeader", "header", "layout", "unlockKey", "locale", "keys", "messages", "onCellValue", "onCellUpdate", "onCellRender", "onCellBeginEdit", "onCellEditRequest", "onCellValueChanged", "onBeforeInit", "onInit", "onAfterInit", "onChartInit", "onRender", "onLoad", "onKey", "onRowInit", "onRowDetailInit", "onRowDetailUpdated", "onRowHistory", "onRowStyle", "onRowInserted", "onRowRemoved", "onRowUpdate", "onRowUpdated", "onRowClass", "onCellClass", "onColumnInit", "onColumnInserted", "onColumnRemoved", "onColumnUpdated", "onColumnClone", "onCommand", "paging", "pager", "rowDetail", "rowCSSRules", "rightToLeft", "rows", "scrolling", "summaryRow", "stateSettings", "selection", "sorting", "users", "uploadSettings", "view"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onBeginEdit", "onBatchChange", "onBatchCancel", "onChange", "onColumnClick", "onColumnDoubleClick", "onColumnResize", "onColumnDragStart", "onColumnChange", "onColumnDragging", "onColumnDragEnd", "onColumnReorder", "onCommentAdd", "onCommentRemove", "onContextMenuItemClick", "onRowDragStart", "onRowDragging", "onRowDragEnd", "onRowReorder", "onRowExpand", "onRowCollapse", "onRowClick", "onRowDoubleClick", "onRowResize", "onRowStarred", "onCellClick", "onCellDoubleClick", "onEndEdit", "onFilter", "onGroup", "onOpenColumnDialog", "onCloseColumnDialog", "onResize", "onRowTap", "onCellTap", "onPage", "onSort", "onScrollBottomReached", "onScrollTopReached", "onCreate", "onReady"];
    }
    /** Inserts a new row into the grid interface. When batch editing mode is enabled, the new row exists only temporarily within the current batch session and will not be permanently stored until the user explicitly saves all changes made during the session. If the batch edit session is discarded, the newly added row will not be saved.
    * @param {any} data. An object representing the row data, matching the structure of the grid's data source.
    * @param {boolean} insertAtBottom?. Determines whether the new row is added at the bottom (true) or top (false) of the grid. Defaults to true.
    * @param {{(row: GridRow): void}} callback?. A callback function invoked after the row is successfully added. Receives the newly added row as an argument.
    */
    addRow(data, insertAtBottom, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRow(data, insertAtBottom, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRow(data, insertAtBottom, callback);
            });
        }
    }
    /** Inserts a new row into the grid and automatically activates edit mode for that row, allowing users to begin entering data right away. If batch editing is enabled, any changes made will be temporarily stored and will not be saved to the data source until the batch edit session is explicitly committed. This helps prevent partial or unsaved changes from being applied before the user finalizes all edits in the session.
    * @param {string} position?. Specifies the position where the new row will be added. Acceptable values are 'near' (top) or 'far' (bottom).
    * @returns {boolean}
  */
    addNewRow(position) {
        const result = this.nativeElement.addNewRow(position);
        return result;
    }
    /** Dynamically adds a new column to the grid at runtime, allowing users to modify the grid’s structure without requiring a page reload. This enables real-time updates to the grid layout based on user actions or application logic.
    * @param {any} column. A column definition or array of columns to add. Refer to the grid's 'columns' property for the expected structure.
    * @returns {boolean}
  */
    addNewColumn(column) {
        const result = this.nativeElement.addNewColumn(column);
        return result;
    }
    /** Adds one or more unbound rows to the grid, positioned at either the top or the bottom, as specified. Unbound rows are not initially included in the grid’s data source; instead, they serve as editable placeholders. Once a user enters or modifies data in these rows, the new values are incorporated into the grid’s data source, making the unbound rows part of the main dataset. This feature is useful for allowing users to quickly add new entries or perform custom calculations directly within the grid interface.
    * @param {number} count. The number of unbound rows to add.
    * @param {string} position?. The position to insert the unbound rows. Accepts 'near' for top or 'far' for bottom.
    * @returns {boolean}
  */
    addUnboundRow(count, position) {
        const result = this.nativeElement.addUnboundRow(count, position);
        return result;
    }
    /** Enhances and applies custom filter criteria to a specific column within the data grid. Accepts both single and multiple filter expressions, allowing for complex filtering logic using logical operators such as "and" and "or". For example, to filter the "lastName" column for values that contain either "burke" or "peterson", use: `grid.addFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"'])`. The method also supports numeric filters (e.g., `GREATER_THAN 100`), a variety of comparison operators (such as `EQUALS`, `LESS_THAN`, `STARTS_WITH`, etc.), and can be used to combine different conditions for precise data selection.
    * @param {string} dataField. The data field name of the column to filter, e.g., 'firstName'.
    * @param {string} filter. The filter expression(s) to apply. Examples include 'startsWith B', ['contains Andrew or contains Nancy'], or ['quantity', '<= 3 and >= 8']. Supported operators: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    * @param {boolean} refreshFilters?. If set to false, allows multiple filters to be added without triggering unnecessary renders. Useful when applying multiple filters sequentially.
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
    /** Organizes the grid rows into groups based on the values in the specified column's data field. This functionality requires that grouping is enabled on the grid component. When activated, rows sharing the same value in the chosen column will be visually grouped together, allowing for easier data analysis and navigation.
    * @param {string} dataField. The data field of the column to group by, e.g., 'firstName'.
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
    /** Enhances the grid's data display by applying a sorting order based on the specified column's data field. This function requires sorting to be enabled on the grid and sorts the rows according to the selected column's values, either in ascending or descending order as specified. If sorting is not enabled, this operation will have no effect.
    * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
    * @param {string} sortOrder. The sort direction to apply. Use 'asc' for ascending or 'desc' for descending.
    */
    addSort(dataField, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataField, sortOrder);
            });
        }
    }
    /** Dynamically resizes each grid row to fit its content, ensuring that text and elements are fully visible without being cut off or overlapping. This enhances readability and provides a more user-friendly and visually consistent grid layout.
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
    /** Dynamically resizes the width of each grid column based on its content and header label, so that all cell values and headers are fully visible without clipping or excessive whitespace. This ensures an optimal and polished display by automatically fitting columns to their widest required size.
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
    /** Automatically resizes an individual grid column to precisely fit its content by dynamically measuring the widest content among its cells and header label, and adjusting the column width accordingly for optimal display without unnecessary extra space or truncation.
    * @param {string} dataField?. The data field name of the column to auto-size, e.g., 'firstName'. Optional; if omitted, no action is taken.
    */
    autoSizeColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumn(dataField);
            });
        }
    }
    /** Returns a boolean value that indicates whether every row in the grid is currently selected. This means the method will return true only if all rows within the grid have been selected; otherwise, it returns false.
    * @returns {boolean}
  */
    areAllRowsSelected() {
        const result = this.nativeElement.areAllRowsSelected();
        return result;
    }
    /** Pauses Grid rendering and UI refresh operations, allowing you to make multiple property changes or method calls without triggering repeated re-renders. This is particularly useful for optimizing performance during batch updates. After you finish making all necessary changes, call 'endUpdate()' to resume rendering and apply all updates to the UI.
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
    /** Initiates edit mode on a specified row, cell, or column within the grid programmatically. Triggers the appropriate editor component to appear in the Grid UI, allowing users to modify the data directly within the selected grid area.
    * @param {string | number} rowId. The unique identifier of the row to edit.
    * @param {string} dataField?. The column's data field to edit. Optional for full row editing.
    */
    beginEdit(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(rowId, dataField);
            });
        }
    }
    /** Removes all active filters from the Grid, restoring the original unfiltered data view. After clearing the filters, the Grid data is automatically refreshed to display all records, and any filter input fields are reset to their default, empty state.
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
    /** Restores the grid to its original, ungrouped state by removing all active row groupings. All grouped rows are expanded and displayed as individual rows, and the Grid view automatically refreshes to reflect these changes.
    */
    clearGroups() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGroups();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGroups();
            });
        }
    }
    /** Removes all active sorting from the Grid columns, resetting them to their unsorted state and restoring the data to its original order as initially loaded or received.
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
    /** Clears all current selections within the grid, including rows, cells, and columns. This action removes any visual highlights or selection indicators, ensuring that no items remain selected in the interface.
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
    /** Cancels the ongoing edit operation by closing any active editor interface and reverting all unsaved changes made during the current session. This action ensures that no modifications are saved and the data returns to its original state prior to editing.
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
    /** Selects and checks the checkbox for a specified TreeGrid row, visually indicating that the row is active or selected. This action updates the row's state to reflect user selection and may trigger related event handlers or selection-dependent functionality within the TreeGrid.
    * @param {string | number} rowId. The unique identifier of the row to check.
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
    /** Selects and checks all checkboxes associated with rows in a TreeGrid or grouped data structure, ensuring that every row, including nested and grouped items, is marked as selected. This process guarantees comprehensive selection across all hierarchical levels and groupings within the dataset.
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
    /** Removes all rows and associated data from the Grid, and clears any current user selections. After performing this action, the Grid will display a 'No Rows' message to indicate that it is empty.
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
    /** Closes the currently open column menu in a data grid or table interface. This action is typically triggered by user interactions such as right-clicking on a column header or clicking a column menu button, allowing users to dismiss the column-specific options or actions menu.
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
    /** Collapses a designated TreeGrid or grouping row, effectively hiding all of its nested child rows from view. This action allows users to condense hierarchical data structures, making it easier to navigate and focus on higher-level information within the grid.
    * @param {string | number} rowId. The unique identifier of the row to collapse.
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
    /** Collapses all currently expanded rows within the TreeGrid or Grouping components, reducing the dataset display to only show parent rows or top-level groups. This action hides all child rows and nested data, providing a simplified, minimized overview of the dataset structure.
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
    /** Generates a visual chart representation based on the current data within the Grid. Chart generation requires that the charting feature is enabled in the system configuration. This function allows users to visualize the Grid's dataset in supported chart formats.
    * @param {string} type. Type of chart to create (e.g., 'pie', 'bar', 'line').
    * @param {any} dataSource?. The data source for the chart. If omitted, the Grid's current dataset is used.
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
    /** Removes a specific row from the Grid component. If batch editing is enabled, the row will be marked for deletion but the change will not be permanently applied until the batch is saved. This means the deletion is pending and can be reverted before saving.
    * @param {string | number} rowId. The unique identifier of the row to delete.
    * @param {{(row: GridRow): void}} callback?. Function executed after row deletion. Receives the deleted row as a parameter.
    */
    deleteRow(rowId, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(rowId, callback);
            });
        }
    }
    /** Scrolls the Grid to ensure that a specific row or cell is visible to the user. If the target row or cell is located on a different page, the Grid will automatically navigate to the appropriate page and then scroll to the desired position. This ensures that the requested row or cell is brought into view, regardless of its current visibility or page location.
    * @param {string | number} rowId. The unique identifier of the row.
    * @param {string} dataField?. The column's data field to focus on. If omitted, scrolls to the row only.
    * @returns {boolean}
  */
    ensureVisible(rowId, dataField) {
        const result = this.nativeElement.ensureVisible(rowId, dataField);
        return result;
    }
    /** Completes the editing process by applying all pending changes, saving the updated content, and closing any open editor instances. This action ensures that all modifications are confirmed and no unsaved edits remain.
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
    /** Restores the Grid's normal rendering process and updates the user interface following a call to beginUpdate(). Use endUpdate() to apply any changes made during the update suspension and ensure the Grid displays the latest data and layout.
    * @param {boolean} refresh?. If true, forces a full Grid refresh after updates.
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
    /** Expands a specific row in a TreeGrid or grouped table to reveal its associated child rows. You can expand nested groups or hierarchical levels by specifying the row key using dot notation (e.g., "0.2.1" for the child of a nested group). This allows for precise targeting and interactive exploration of hierarchical data structures within the grid.
    * @param {string | number} rowId. The unique identifier of the row to expand.
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
    /** Expands all grouped rows in the grid up to the specified group level. For instance, executing `grid.expandRowsToGroupLevel(1);` will expand all groups at the root (level 1), making their immediate child rows visible. Groups nested within these child rows remain collapsed unless the group level parameter is increased. This function is useful for programmatically controlling the grid's row expansion state based on grouping hierarchy.
    * @param {number} level. The group level up to which the rows should be expanded. Level 0 is the root, level 1 is the first nested group, and so forth.
    */
    expandRowsToGroupLevel(level) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRowsToGroupLevel(level);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRowsToGroupLevel(level);
            });
        }
    }
    /** Expands all rows within the grid that utilize TreeGrid or grouping functionality, automatically revealing every nested child row at all levels of hierarchy and making the complete data structure fully visible. This ensures that all parent and descendant rows are displayed, allowing users to view the entire nested dataset without manual expansion.
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
    /** This function allows you to export the grid's data into various supported file formats, including .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG, and .PNG. The way the data is exported—such as file formatting, included columns or rows, applied filters, and export settings—is determined by the options set in the grid’s dataExport property. This ensures that the exported file matches your specified requirements and preferences.
    * @param {string} Dataformat. Specifies the export format. Supported formats: 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
    * @param {any} callback?. Optional. A function that formats the exported values conditionally. See Smart Export Documentation for details.
    * @param {any} dataCallback?. Optional. A function to modify the entire exported data object prior to export.
    */
    exportData(Dataformat, callback, dataCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(Dataformat, callback, dataCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(Dataformat, callback, dataCallback);
            });
        }
    }
    /** Searches the grid for rows that match the specified query criteria and returns an array containing the IDs of all matching rows. Supports multiple search modes, including:- Searching for values in any column (global search)- Searching specific columns by name- Applying comparison operators (e.g., equals, contains, less than, greater than) for advanced filteringThis functionality allows for flexible and precise row selection based on user-defined search parameters.
    * @param {string} query. The search string or value to find within the grid rows.
    * @param {string} dataField?. Optional. Specifies the column data field to restrict the search to.
    * @param {string} condition?. Optional. Condition to apply for the search. Supported conditions: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    * @returns {any[]}
  */
    find(query, dataField, condition) {
        const result = this.nativeElement.find(query, dataField, condition);
        return result;
    }
    /** Scans the grid to identify all cells that match the specified query. Returns an array of arrays, where each inner array represents a matching cell and contains the following information: the row ID, the data field (column name), and the cell's value. The query supports searching for multiple values by separating them with commas; each value will be matched independently against the cells.
    * @param {string} query. The search string or multiple comma-separated strings to find in grid cells.
    * @returns {any[]}
  */
    findCells(query) {
        const result = this.nativeElement.findCells(query);
        return result;
    }
    /** Applies a global filter that searches for the provided query across all columns in the grid, returning rows that contain a match in any column. Optionally, you can limit the filtering to specific data types—such as 'string', 'boolean', 'date', or 'number'—so that only columns of the selected type(s) are considered when matching the query. This allows for more precise and targeted filtering behavior.
    * @param {string} query. The filter expression to apply to all columns.
    * @param {string} dataType?. Optional. Filter rows only by columns matching this data type: 'string', 'boolean', 'date', 'number'.
    */
    filterBy(query, dataType) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.filterBy(query, dataType);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.filterBy(query, dataType);
            });
        }
    }
    /** Programmatically navigates the grid to a specified page index, provided that paging is enabled. Use this method to set the current page of the grid, allowing you to jump to a particular page in response to user actions or custom logic. The page index is zero-based, where 0 refers to the first page."
    * @param {number} index. The zero-based index of the page to navigate to.
    */
    goToPage(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.goToPage(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.goToPage(index);
            });
        }
    }
    /** Advances to the next page of data in the grid when paging functionality is enabled. If the grid is currently displaying the last available page, this action will have no effect and the page will remain unchanged.
    */
    nextPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.nextPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.nextPage();
            });
        }
    }
    /** Triggers navigation to the previous page in the grid when paging functionality is enabled. If the grid is currently displaying the first page, the operation is ignored and the page remains unchanged. This ensures that navigation does not attempt to move before the first available page.
    */
    prevPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prevPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prevPage();
            });
        }
    }
    /** Navigates to the first page of the data grid when paging functionality is enabled. This action resets the current page index to the first page, displaying the initial set of records in the grid.
    */
    firstPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.firstPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.firstPage();
            });
        }
    }
    /** Navigates directly to the final page of the data grid when paging functionality is enabled, allowing users to quickly access the last set of records displayed in the grid.
    */
    lastPage() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lastPage();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lastPage();
            });
        }
    }
    /** Sets focus on and selects a specified cell or an entire row within the grid, clearing any previous selections. This action also updates the keyboard navigation's starting point to the newly focused cell or row, ensuring that subsequent navigation actions will originate from this location.
    * @param {string | number} rowId. The unique identifier of the row to focus and select.
    * @param {string} dataField?. Optional. The data field (column key) of the cell to focus within the specified row. If omitted, the entire row is selected.
    */
    focusAndSelect(rowId, dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.focusAndSelect(rowId, dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focusAndSelect(rowId, dataField);
            });
        }
    }
    /** Executes a callback function for each individual row in the grid's underlying dataset, regardless of any grouping, filtering, or sorting currently applied to the grid view. This method iterates over all raw data rows, ensuring that the callback is called on every entry as it exists in the original data source, not just the rows that are visible or active in the grid's current state.
    * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRow(row => console.log(row.id));
    */
    forEachRow(rowCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRow(rowCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRow(rowCallback);
            });
        }
    }
    /** Executes a callback function for each row that is currently visible in the grid after all active filters and sorting have been applied. This method operates strictly on the rows as they appear in the current grid view, ensuring that hidden, filtered out, or unsorted rows are excluded. The iteration respects the latest grid state, guaranteeing that only rows displayed to the user are processed by the callback function.
    * @param {any} rowCallback. A callback function that receives a row object as its parameter. Example: grid.forEachRowAfterFilterAndSort(row => console.log(row.id));
    */
    forEachRowAfterFilterAndSort(rowCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.forEachRowAfterFilterAndSort(rowCallback);
            });
        }
    }
    /** Returns the maximum allowable scroll position for the grid's vertical scrollbar. This value represents the greatest vertical offset to which users can scroll within the grid's content area. It can be used to determine the scrollable range or to programmatically set the vertical scrollbar to its lowest (bottom-most) position.
    * @returns {number}
  */
    getVerticalScrollMax() {
        const result = this.nativeElement.getVerticalScrollMax();
        return result;
    }
    /** Returns the current vertical scroll position of the grid, representing the number of pixels the grid’s content has been scrolled vertically from the top. This value corresponds to the position of the grid's vertical scrollbar and can be used to determine how far users have scrolled down within the grid.
    * @returns {number}
  */
    getVerticalScrollValue() {
        const result = this.nativeElement.getVerticalScrollValue();
        return result;
    }
    /** Returns the maximum horizontal scroll offset for the grid’s horizontal scrollbar. This value represents the furthest distance (in pixels) that the grid content can be scrolled horizontally. It is useful for programmatically setting, adjusting, or resetting the grid’s horizontal scroll position to ensure full content visibility or to align with specific scroll actions.
    * @returns {number}
  */
    getHorizontalScrollMax() {
        const result = this.nativeElement.getHorizontalScrollMax();
        return result;
    }
    /** Retrieves the current horizontal scroll offset of the grid's horizontal scrollbar, indicating how far the grid content has been scrolled from the left edge in pixels. This value can be used to determine the current scroll position or to programmatically control grid scrolling behavior.
    * @returns {number}
  */
    getHorizontalScrollValue() {
        const result = this.nativeElement.getHorizontalScrollValue();
        return result;
    }
    /** Retrieves an array of column objects representing every column currently configured in the grid. Each column object contains key properties, including:- `label`: The display name of the column as shown in the grid header.- `dataField`: The underlying data field or key this column is bound to in the dataset.- `dataType`: The type of data displayed in the column (e.g., string, number, date).- `visible`: A boolean indicating whether the column is currently visible in the grid.- Additional dynamic state properties, such as the current sort order, filter status, or column width, reflecting any user customizations or interactions.This comprehensive array allows developers to access both the static configuration and real-time state of each column in the grid.
    * @returns {any}
  */
    getColumns() {
        const result = this.nativeElement.getColumns();
        return result;
    }
    /** Returns an array containing information about all cells that are currently in edit mode within the grid. Each entry in the array typically includes details such as the row and column identifiers for each editable cell, allowing developers to precisely identify and interact with cells that are being edited.
    * @returns {any[]}
  */
    getEditCells() {
        const result = this.nativeElement.getEditCells();
        return result;
    }
    /** Fetches an array of group objects that define the current grouping configuration of the grid. Each group object contains information about the field being grouped by, the group criteria, and any sub-grouping details, providing a comprehensive representation of how the grid's data is organized into groups.
    * @returns {any[]}
  */
    getGroups() {
        const result = this.nativeElement.getGroups();
        return result;
    }
    /** Returns an object that details the columns currently sorted within a data table. Each key in the object corresponds to a column’s data field name. The value for each key is an object containing:- `sortOrder`: Specifies the sorting direction for the column, either `'asc'` for ascending or `'desc'` for descending.- `sortIndex`: Indicates the column’s priority in multi-column sorting, with lower numbers representing higher priority.This structure allows you to easily determine which columns are sorted, their order of precedence, and the sorting direction applied to each.
    * @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
    getSortedColumns() {
        const result = this.nativeElement.getSortedColumns();
        return result;
    }
    /** Returns an object representing the current selection state of the grid. This includes arrays listing the IDs of selected rows, the identifiers of selected columns, and the coordinates (row ID and data field) of selected cells. Additionally, it specifies the cell that is currently focused by providing its row ID and data field.
    * @returns {any}
  */
    getSelection() {
        const result = this.nativeElement.getSelection();
        return result;
    }
    /** Returns an array in which each element is a two-element array: the first element is the unique row ID, and the second element is the data object associated with that row. When operating in virtual mode, the data object may be empty if the row’s data has not yet been loaded, as data is retrieved on demand.
    * @returns {any[]}
  */
    getSelectedRows() {
        const result = this.nativeElement.getSelectedRows();
        return result;
    }
    /** Returns an array containing the data objects corresponding to each row currently selected in the grid. Each object in the array represents the underlying data for one selected row, allowing you to access and manipulate the specific records the user has chosen.
    * @returns {any[]}
  */
    getSelectedRowsData() {
        const result = this.nativeElement.getSelectedRowsData();
        return result;
    }
    /** Returns an array containing the unique identifiers (IDs) of all rows currently selected by the user within the grid component. Each element in the array corresponds to the ID of a selected row, allowing you to easily reference or manipulate the selected grid items programmatically.
    * @returns {any[]}
  */
    getSelectedRowIds() {
        const result = this.nativeElement.getSelectedRowIds();
        return result;
    }
    /** Returns an array containing the indices of the rows that are currently selected in the grid. Each element in the array represents the zero-based position of a selected row, allowing you to identify which rows the user has chosen. If no rows are selected, the array will be empty.
    * @returns {any[]}
  */
    getSelectedRowIndexes() {
        const result = this.nativeElement.getSelectedRowIndexes();
        return result;
    }
    /** Returns an array of selected cells, where each cell is represented as an array structured as [row ID, column field, cell value].  - **Row ID**: The unique identifier for the row containing the cell.  - **Column field**: The data field name (or key) corresponding to the column of the cell.  - **Cell value**: The actual value contained within the cell.  This structure allows you to easily identify and access the position and value of each selected cell within the data set.
    * @returns {any[]}
  */
    getSelectedCells() {
        const result = this.nativeElement.getSelectedCells();
        return result;
    }
    /** Returns an array of objects representing the columns that currently have active filters applied. Each object contains details about the filter and is associated with its corresponding column by the column's data field as the key. This allows you to identify which columns are being filtered and access the filter configurations for each.
    * @returns {any}
  */
    getFilteredColumns() {
        const result = this.nativeElement.getFilteredColumns();
        return result;
    }
    /** Returns an array containing the data for all rows currently visible in the grid, after applying any active filters. Only rows that meet the filter criteria and are not hidden by filtering will be included in the array. This allows developers to access the up-to-date, filtered data as presented to the user in the grid interface.
    * @returns {any}
  */
    getVisibleRows() {
        const result = this.nativeElement.getVisibleRows();
        return result;
    }
    /** Returns an array of row objects. By default, this represents the currently visible rows after any filters have been applied. When used in TreeGrid or Grouping mode, the array instead reflects the hierarchical structure of rows, including parent-child relationships, according to the current expand/collapse state of groups or tree nodes.
    * @returns {any}
  */
    getViewRows() {
        const result = this.nativeElement.getViewRows();
        return result;
    }
    /** Retrieves a detailed JSON object that encapsulates the entire current state of the grid. This includes the active sorting and filtering criteria, column visibility and order, which rows are expanded, any grouping configurations, current pagination settings, and the selection state of rows or cells. The resulting state object is suitable for persisting the grid configuration (such as saving to local storage or a database) and can be used to completely restore the grid to the same state at a later time.
    * @returns {any}
  */
    getState() {
        const result = this.nativeElement.getState();
        return result;
    }
    /** Retrieves a comprehensive summary of all changes performed during a batch edit operation. Returns an object with separate arrays for added, updated, and deleted rows. Each array contains detailed objects that include the row ID and pertinent data fields, such as the previous and new values for updates, full data for additions, and identifying information for deletions. This structure allows you to easily track and process all modifications made in the batch.
    * @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
    getBatchEditChanges() {
        const result = this.nativeElement.getBatchEditChanges();
        return result;
    }
    /** Retrieves the value stored in a specific cell of a data grid or table by specifying the unique row ID and the corresponding column data field. This function allows precise access to individual cell data, enabling targeted data retrieval based on both row and column identifiers.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field name of the column (e.g., 'firstName').
    * @returns {any}
  */
    getCellValue(rowId, dataField) {
        const result = this.nativeElement.getCellValue(rowId, dataField);
        return result;
    }
    /** Retrieves the column object corresponding to the specified data field. This returned object includes all relevant properties and configuration settings for that column, such as its header label, data type, formatting options, sorting behavior, visibility, and any custom properties defined in the column schema.
    * @param {string} dataField. The data field name of the column to retrieve.
    * @returns {GridColumn}
  */
    getColumn(dataField) {
        const result = this.nativeElement.getColumn(dataField);
        return result;
    }
    /** Fetches the value of a specified property from a particular column, where the column is identified by its data field name. This function allows you to access detailed configuration or metadata associated with a column in a data structure, such as a table or grid, by referencing the column’s data field.
    * @param {string} dataField. The data field name of the column.
    * @param {string} propertyName. The name of the column property to retrieve (e.g., 'freeze', 'visible', 'width').
    * @returns {any}
  */
    getColumnProperty(dataField, propertyName) {
        const result = this.nativeElement.getColumnProperty(dataField, propertyName);
        return result;
    }
    /** Retrieves the value of a specified property from a database row identified by its unique row ID. This function locates the row using the provided row ID and returns the value associated with the given property key within that row. If the property does not exist, it returns null or an appropriate default value.
    * @param {string | number} rowId. The unique identifier of the row.
    * @param {string} propertyName. The name of the row property to retrieve.
    * @returns {any}
  */
    getRowProperty(rowId, propertyName) {
        const result = this.nativeElement.getRowProperty(rowId, propertyName);
        return result;
    }
    /** Returns the complete row object from the Grid for the row corresponding to the given row ID, including all its associated data and properties.
    * @param {string | number} rowId. The unique identifier of the row.
    * @returns {GridRow}
  */
    getRow(rowId) {
        const result = this.nativeElement.getRow(rowId);
        return result;
    }
    /** Returns the Grid row object at the given zero-based row index, allowing access to all data and properties associated with that specific row. The index parameter should be an integer starting from 0, where 0 corresponds to the first row in the Grid.
    * @param {number} rowIndex. The zero-based index of the row in the grid.
    * @returns {GridRow}
  */
    getRowByIndex(rowIndex) {
        const result = this.nativeElement.getRowByIndex(rowIndex);
        return result;
    }
    /** Fetches the original data source object directly linked to the given row ID, allowing access to all underlying data fields for that specific row as stored in the source dataset.
    * @param {string | number} rowId. The unique identifier of the row.
    * @returns {any}
  */
    getRowData(rowId) {
        const result = this.nativeElement.getRowData(rowId);
        return result;
    }
    /** Returns the unique identifier (row ID) associated with the row at the specified zero-based index. This allows you to access or reference a particular row in the data set by its position within the collection, where the first row has an index of 0.
    * @param {number} rowIndex. The zero-based index of the row.
    * @returns {string | number}
  */
    getRowId(rowIndex) {
        const result = this.nativeElement.getRowId(rowIndex);
        return result;
    }
    /** Determines whether any column’s drop-down menu is currently open and visible within the grid component. This can be used to control grid interactions or UI behaviors that depend on the state of column drop-down menus.
    * @returns {boolean}
  */
    hasMenu() {
        const result = this.nativeElement.hasMenu();
        return result;
    }
    /** Checks whether any rows in the grid are currently selected by the user. This property or method returns a boolean value: `true` if at least one row is selected, and `false` if no rows are selected. It is typically used to enable or disable actions that depend on row selection, such as editing or deleting entries.
    * @returns {boolean}
  */
    hasSelectedRows() {
        const result = this.nativeElement.hasSelectedRows();
        return result;
    }
    /** Conceals the details section for the specified row in the grid when the row details feature is enabled, effectively collapsing or hiding any expanded information or custom content associated with that row. This function ensures that only the main data for the row is visible, while any additional details remain hidden until explicitly shown again.
    * @param {string | number} rowId. The unique identifier of the row whose details should be hidden.
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
    /** Highlights all cells within the column corresponding to the specified data field. If this method is called again with the same data field, it toggles the highlight by removing it if already applied, or reapplying it if previously removed.
    * @param {string} dataField. The data field name of the column to highlight.
    */
    highlightColumn(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightColumn(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightColumn(dataField);
            });
        }
    }
    /** Emphasizes a specific cell within the grid, identified by its row ID and column data field. Invoking this method again on the same cell will toggle the highlight on or off. You can optionally specify a CSS class to apply custom styling to the highlighted cell, allowing for personalized visual differentiation.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field name of the column.
    * @param {string} className?. Optional CSS class name for custom highlight styling.
    */
    highlightCell(rowId, dataField, className) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightCell(rowId, dataField, className);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightCell(rowId, dataField, className);
            });
        }
    }
    /** Enhances visibility of the table row corresponding to the provided row ID by applying a highlight effect. Invoking this method a second time on the same row will remove the highlight, effectively toggling its state. Optionally, you can supply a custom CSS class to override the default highlight styling for tailored appearance.
    * @param {string | number} rowId. The unique identifier of the row to highlight.
    * @param {string} className?. Optional CSS class name for custom highlight styling.
    */
    highlightRow(rowId, className) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.highlightRow(rowId, className);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.highlightRow(rowId, className);
            });
        }
    }
    /** Adds a new row to the grid using the provided data object. If batch editing mode is active, the row will be added only as a pending change and will not be permanently committed to the data source until the batch is saved. You may optionally specify the index at which the new row should be inserted; if omitted, the row will be added at the default position (usually at the end). Additionally, you can provide a callback function that will be executed after the row has been successfully added to the grid.
    * @param {any} data. The data object for the new row, matching the grid's data source schema.
    * @param {number} index?. The zero-based index at which to insert the new row. Defaults to the last position if omitted.
    * @param {{(row: GridRow): void}} callback?. Optional callback function executed after the row is inserted, receiving the newly added row object.
    */
    insertRow(data, index, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRow(data, index, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertRow(data, index, callback);
            });
        }
    }
    /** Restored a previously saved grid state by accepting either the name of the saved state or a state object. The state object can include detailed settings such as current sorting and filtering criteria, column visibility and order, expanded or collapsed row status, grouping configurations, paging information (such as current page and page size), and selected rows. This allows the grid to be reconfigured exactly as it was when the state was saved, providing a consistent user experience across sessions.
    * @param {any} state. A state name (string) previously saved or a state object representing the grid configuration to load.
    * @returns {any}
  */
    loadState(state) {
        const result = this.nativeElement.loadState(state);
        return result;
    }
    /** Displays the drop-down menu associated with the column specified by the provided data field identifier, allowing users to access additional actions or settings related to that column.
    * @param {string} dataField. The data field name of the column whose menu to open.
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
    /** Displays the context menu at the given (left, top) screen coordinates. Ensure that context menu functionality is enabled in the grid settings for this method to work.
    * @param {number} left. The left position (in pixels) where the context menu should appear.
    * @param {number} top. The top position (in pixels) where the context menu should appear.
    */
    openContextMenu(left, top) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openContextMenu(left, top);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openContextMenu(left, top);
            });
        }
    }
    /** Displays the grid’s drop-down user interface when the 'dropDownMode' property is set to true, allowing users to interact with additional grid options or filters presented within the drop-down.
    */
    openDropDown() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openDropDown();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openDropDown();
            });
        }
    }
    /** Closes the grid's drop-down user interface when the 'dropDownMode' property is set to true, ensuring that any open drop-down menus within the grid are dismissed automatically. This helps maintain a streamlined user experience by hiding drop-down elements when they are no longer needed or when specific actions are triggered.
    */
    closeDropDown() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeDropDown();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeDropDown();
            });
        }
    }
    /** Generates a printed version of the Grid’s data using the configuration specified in the dataExport property. During printing, the Grid automatically hides scrollbars and adjusts its width and height to ensure that all rows and columns are fully visible on the page, regardless of their original size. This ensures that the entire content of the Grid is included in the printout without any truncation or the need for scrolling. To customize aspects such as page layout, formatting, or which data is included in the print output, adjust the parameters within the dataExport property.
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
    /** Triggers a full re-render of the Grid, similar to when it is first initialized. This method reconstructs all underlying HTML elements for rows, columns, and cells from scratch, ensuring a fresh and accurate representation of the data. After rebuilding these elements, it also updates and refreshes the Grid layout to reflect any structural changes. This is useful when foundational data or configuration has changed and a partial update is not sufficient.
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
    /** Enhances the Grid display by refreshing its layout to reflect the latest property values, dynamically updating only the necessary elements. This approach optimizes performance by avoiding a complete teardown and reconstruction of all Grid elements, ensuring a smoother and more efficient user experience.
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
    /** Refreshes only the cells that are currently visible within the Grid’s viewport, rather than updating the entire Grid. This is especially useful for implementing real-time updates or live data feeds, as it enables efficient, seamless rendering of new cell values without triggering a full Grid refresh or losing the user's scroll position.
    */
    resetState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.resetState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.resetState();
            });
        }
    }
    /** Restores the Grid to its original default configuration by removing all user-applied settings, including sorting, filtering, grouping, and selected rows or cells. This action clears any user interactions, ensuring the Grid displays data with no custom modifications.
    * @param {string} dataField. The data field of the column from which to remove the filter, e.g., 'firstName'.
    * @param {boolean} refreshFilters?. If set to false, delays the filter refresh to allow multiple filters to be removed before updating the Grid.
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
    /** Removes the filter currently applied to the specified column. Optionally, you can delay the filter refresh process, allowing you to remove filters from multiple columns before triggering an update. This helps optimize performance when batch-processing multiple filter removals.
    * @param {string} dataField. The data field of the group to remove, e.g., 'firstName'.
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
    /** Removes grouping from the Grid for the specified data field. This method is only applicable when grouping functionality is enabled in the Grid. When called, it will ungroup the records currently grouped by the given field, and the Grid will update to display the data without that grouping criterion.
    * @param {string} dataField. The data field of the column whose sorting you want to remove, e.g., 'firstName'.
    */
    removeSort(dataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort(dataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort(dataField);
            });
        }
    }
    /** Removes any active sorting from the specified column. Use this method to clear the sort order applied to a particular data field, returning the column to its default, unsorted state. This is useful when you want to reset or update the sorting configuration for individual columns within a data table.
    */
    refreshSort() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshSort();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshSort();
            });
        }
    }
    /** Applies the current sorting settings again to the data and updates the Grid display to reflect any changes, ensuring the data is presented according to the latest sorting configuration.
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
    /** Reverts the Grid to its previous state by discarding all unsaved batch editing changes made by the user. Any modifications entered during the current batch editing session will be canceled, restoring the Grid’s data to its last committed state.
    * @param {string | number} dataField. The data field or index of the column to move.
    * @param {string | number} referenceDataField. The data field or index of the target column used as reference for repositioning.
    * @param {boolean} insertAfter?. If true, inserts the first column after the reference column; otherwise, inserts it before.
    */
    reorderColumns(dataField, referenceDataField, insertAfter) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reorderColumns(dataField, referenceDataField, insertAfter);
            });
        }
    }
    /** Reorders two columns in the Grid by moving the specified source column to a new position either before or after the target reference column. This allows for customizable column arrangements by programmatically shifting the position of columns within the Grid.
    * @param {string} name?. Optional name to associate with the saved state.
    * @returns {any}
  */
    saveState(name) {
        const result = this.nativeElement.saveState(name);
        return result;
    }
    /** Captures and returns the current state of the Grid as a comprehensive JSON object. The state includes details such as applied sorting and filtering criteria, columns configuration (order, visibility, and sizing), currently expanded rows, grouping settings, paging information (current page, page size), and user selections. Optionally, you can provide a name parameter to uniquely identify and reference the saved state for future retrieval or restoration.
    * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
    * @param {string | null} sortOrder. Sort order to apply: 'asc' for ascending, 'desc' for descending, or null to remove sorting.
    */
    sortBy(dataField, sortOrder) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(dataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(dataField, sortOrder);
            });
        }
    }
    /** Applies sorting to the Grid based on the specified data field. You can either add sorting by providing a valid sortOrder (such as 'asc' or 'desc'), or remove sorting from a column by setting the sortOrder parameter to null. This allows dynamic adjustment of Grid sorting criteria, enabling users to sort data as needed or clear sorting on individual columns.
    * @param {string | number} dataField. The data field or index of the first column.
    * @param {string | number} referenceDataField. The data field or index of the second column.
    */
    swapColumns(dataField, referenceDataField) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.swapColumns(dataField, referenceDataField);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.swapColumns(dataField, referenceDataField);
            });
        }
    }
    /** Swaps the positions of two specified columns within the Grid layout, effectively changing their order of appearance. This operation updates the Grid so that the selected columns exchange places, while the data and structure of other columns remain unchanged.
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
    /** Saves and applies all batch editing changes made by the end-user, persisting the updates permanently to the Grid's underlying data source. This operation commits all modifications (such as additions, deletions, and edits) performed during the batch editing session, ensuring that the Grid data source accurately reflects the latest user input.
    * @param {string | number} rowId. The identifier of the row to select.
    * @param {string} dataField?. Optional data field of the column to select a specific cell.
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
    /** Specifies the selection of a particular row, column, or cell within a data table. If a data field (representing a column) is provided along with a row identifier, the selection targets a specific cell at the intersection of the given row and column. If only a row identifier is supplied without a data field, the entire row is selected. Similarly, providing only a data field without a row identifier selects the entire column.
    * @param {string | number} rowId. The starting row ID of the selection range.
    * @param {string} dataField. The starting column data field of the selection range.
    * @param {string | number} endRowId. The ending row ID of the selection range.
    * @param {string} endDataField. The ending column data field of the selection range.
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
    /** Selects a rectangular range of cells within the grid, defined by specifying both the starting and ending row IDs as well as the data field keys (columns). The selection includes all cells that fall within the rectangle formed by these start and end points. The behavior and outcome of this selection may vary based on the current selection mode of the Grid component (for example, whether it supports cell, row, or column selection)."
    * @param {string | number} rowId. The starting row ID of the selection range.
    * @param {string | number} endRowId. The ending row ID of the selection range.
    */
    selectRowsRange(rowId, endRowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsRange(rowId, endRowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsRange(rowId, endRowId);
            });
        }
    }
    /** Selects all consecutive rows, inclusive, between the specified start and end row IDs. Both the start and end IDs are included in the selection, and only rows with IDs that fall within this continuous range will be selected.
    * @param {(string | number)[]} rowId. Array of row IDs to select.
    */
    selectRows(rowId) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRows(rowId);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRows(rowId);
            });
        }
    }
    /** Selects multiple rows by accepting an array of row IDs, allowing you to specify and manipulate several rows simultaneously based on their unique identifiers.
    */
    selectAllRows() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAllRows();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAllRows();
            });
        }
    }
    /** Selects every row that is currently visible in the Grid, including only those rows that meet the active filters, sorting, and pagination settings. Hidden or filtered-out rows are not selected.
    * @param {number[]} rowIndex. An array of zero-based row indexes to select.
    */
    selectRowsByIndex(rowIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByIndex(rowIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByIndex(rowIndex);
            });
        }
    }
    /** Enhances selection functionality by allowing users to select multiple rows within the Grid component, using their zero-based index positions. This means you can specify one or more row indices (starting from 0 for the first row) to programmatically select the corresponding rows in the Grid.
    * @param {string} query. The search query or value to filter by.
    * @param {string} dataField?. Optional column data field to apply the query against.
    * @param {string} condition?. Optional condition operator. Supported values include '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
    */
    selectRowsByQuery(query, dataField, condition) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRowsByQuery(query, dataField, condition);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRowsByQuery(query, dataField, condition);
            });
        }
    }
    /** Selects rows from a dataset based on a specified query expression. This allows you to filter rows by applying conditions to the values in one or more columns. Supported conditions include equality (equals), partial matches (contains), comparison operators (greater than, less than), prefix matching (starts with), and more. The query expression enables flexible filtering, so only rows that meet the defined criteria are returned.
    * @param {(string | number)[]} rowIds. Array of row ids
    * @param {string[]} dataFields. Array of data fields.
    */
    selectCells(rowIds, dataFields) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCells(rowIds, dataFields);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCells(rowIds, dataFields);
            });
        }
    }
    /** Allows you to select multiple cells within a grid by specifying arrays of row indices (cell ids) and corresponding column data fields.  For example: `grid.selectCells([0, 1, 2], ['firstName', 'quantity', 'date']);`  This will select the cells located at the intersection of:- Row 0 and the 'firstName' column,- Row 1 and the 'quantity' column,- Row 2 and the 'date' column.Each element in the id array matches with the element in the dataFields array by position, ensuring precise cell selection across different rows and columns. This method is useful for batch selection or applying simultaneous actions to multiple, non-contiguous cells.
    * @param {string} query. Search query
    */
    selectCellsByQuery(query) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectCellsByQuery(query);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectCellsByQuery(query);
            });
        }
    }
    /** Selects grid cells based on a query string.  - Example 1: `grid.selectCellsByQuery('nancy');` selects all cells in the grid whose value is exactly 'nancy'.- Example 2: `grid.selectCellsByQuery('nancy, davolio');` selects all cells within rows where both 'nancy' and 'davolio' values appear in any columns of the same row.The query can be a single value or a comma-separated list of values. When multiple values are specified, only rows containing all the specified values (regardless of column order) will have their cells selected.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The data field of the column where the cell is located (e.g., 'firstName').
    * @param {string | number | Date | boolean} value. The new value to assign to the cell.
    */
    setCellValue(rowId, dataField, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellValue(rowId, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellValue(rowId, dataField, value);
            });
        }
    }
    /** Assigns a new value to a specific cell within a data table, targeting the cell by its unique row ID and the corresponding column's data field name. This allows precise updating of individual cell contents based on row and column identifiers.
    * @param {GridColumn[]} columns. Columns array.
    */
    setColumns(columns) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumns(columns);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumns(columns);
            });
        }
    }
    /** Sets the columns displayed in the Grid to a new set defined by the provided argument. When 'setColumns' is called, the Grid compares the new columns array with the currently displayed columns. It will add any new columns, retain existing columns that are still present, and remove columns that are not included in the new array. After updating the columns, the Grid automatically redraws all column headers and refreshes all rows to reflect the changes. Importantly, any state associated with existing columns—such as sort order, filters, column width, and other configurable options—will be preserved for columns that remain after the update. This ensures that users do not lose their settings when columns are changed dynamically.
    * @param {string} dataField. The dataField identifier of the column (e.g., 'firstName').
    * @param {string} propertyName. The name of the column property to set (e.g., 'freeze', 'visible', 'width').
    * @param {any} value. The new value to assign to the specified column property.
    */
    setColumnProperty(dataField, propertyName, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnProperty(dataField, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnProperty(dataField, propertyName, value);
            });
        }
    }
    /** Sets or updates a specific property of a column identified by its dataField. This function allows you to dynamically modify column settings, such as freezing the column, toggling its visibility, adjusting its width, and altering other configurable attributes at runtime. Use this method to programmatically change how individual columns are displayed or behave within your data grid or table component.
    * @param {string | number} rowId. The unique identifier of the row to modify.
    * @param {string} propertyName. The name of the row property to set (e.g., 'freeze', 'expanded', 'customProperty').
    * @param {any} value. The new value to assign to the specified row property.
    */
    setRowProperty(rowId, propertyName, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowProperty(rowId, propertyName, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowProperty(rowId, propertyName, value);
            });
        }
    }
    /** Updates or sets a specific property of a table row identified by its unique rowId. This function allows you to dynamically modify row attributes—for example, toggling the frozen state, applying custom styling, or adding arbitrary metadata—enabling flexible and responsive UI changes at the row level.
    * @param {string | number} rowId. The unique identifier of the row to style.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. An object specifying CSS style properties and values to apply to the entire row.
    */
    setRowStyle(rowId, rowStyle) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowStyle(rowId, rowStyle);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowStyle(rowId, rowStyle);
            });
        }
    }
    /** Allows you to apply custom CSS styles to a specific table row, identified by its unique rowId. Supported style properties include background color, text color, font size, font family, text decoration, font style, and font weight. This enables granular control over the appearance of individual rows in your table, ensuring consistency with your application's design requirements.
    * @param {string | number} rowId. The unique identifier of the row containing the cell.
    * @param {string} dataField. The dataField (column) name of the cell to style.
    * @param {{background?: string, color?: string, fontSize?: string, fontFamily?: string, textDecoration?: string, fontStyle?: string, fontWeight?: string}} rowStyle. An object specifying CSS style properties and values to apply to the specific cell.
    */
    setCellStyle(rowId, dataField, rowStyle) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCellStyle(rowId, dataField, rowStyle);
            });
        }
    }
    /** Enhances a specific table cell's appearance by applying custom CSS styles, targeting the cell using both its unique rowId and the dataField (column identifier). You can specify a range of style properties, including background color, text color, font size, font family, text decoration, font style, and font weight, allowing precise control over the cell’s visual presentation.
    * @param {string} label. The label to be displayed in the dropdown button.
    */
    setDropDownLabel(label) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDropDownLabel(label);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDropDownLabel(label);
            });
        }
    }
    /** Specifies the label text displayed for the Grid component when the 'dropDownMode' property is enabled. This label helps users identify the purpose or content of the Grid when it appears in drop-down mode.
    * @param {number} value. The new scroll position
    */
    setVerticalScrollValue(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setVerticalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setVerticalScrollValue(value);
            });
        }
    }
    /** Sets the current position of the vertical scrollbar within a scrollable container or component. This method allows you to programmatically control the vertical scroll offset, typically specified in pixels or logical units from the top of the content. It can be used in conjunction with the getVerticalScrollValue method to retrieve the current scroll position, and with getVerticalScrollMax to determine the maximum scrollable value. This is useful for synchronizing scrolling behavior, implementing custom scroll controls, or restoring a previous scroll position.
    * @param {number} value. The new scroll position
    */
    setHorizontalScrollValue(value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setHorizontalScrollValue(value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setHorizontalScrollValue(value);
            });
        }
    }
    /** Sets the current position of the horizontal scrollbar within a scrollable container. This method allows you to programmatically adjust the horizontal scroll offset, enabling smooth navigation or custom scroll behavior. It can be used in combination with getHorizontalScrollValue to retrieve the current scroll position, and with getHorizontalScrollMax to determine the maximum scrollable distance. This is useful for implementing features such as custom scrolling controls, restoring previous scroll positions, or synchronizing scrolling across multiple elements.
    */
    closeSidePanel() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeSidePanel();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeSidePanel();
            });
        }
    }
    /** Closes the side panel component of the Grid interface, hiding any currently displayed content or options and returning the Grid to its default view.
    * @param {any} content. This is the content which will be displayed in the side panel. It can be String, HTML Element, HTML Template Element or Component
    * @param {number} width?. This is the width of the side panel
    * @param {any} callback?. Function called when the panel is opened. It can be used for dynamically showing content and initializing it.
    */
    showSidePanel(content, width, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSidePanel(content, width, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSidePanel(content, width, callback);
            });
        }
    }
    /** Displays the Grid's side panel, providing access to additional settings, filters, and customization options related to the Grid's content and layout.
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
    /** Renders an in-depth view of a selected row when the row details feature is activated in the grid configuration. This allows users to access and interact with additional information or actions related to the chosen row.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
    * @param {string} value. The message to be shown below the cell
    */
    showCellMessage(rowId, dataField, value) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showCellMessage(rowId, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showCellMessage(rowId, dataField, value);
            });
        }
    }
    /** Displays a visually distinct overlay message positioned directly beneath a specific cell. This method is ideal for providing contextual onboarding tips, user guidance, or delivering custom messages tailored to the user's current interaction. It enhances user experience by presenting timely and relevant information without interrupting workflow.
    * @param {string | number} rowId. row bound id
    * @param {any} data. row data matching the data source
    * @param {{(row: GridRow): void}} callback?. Sets a callback function, which is called after the row is updated. The callback's argument is the updated row.
    */
    updateRow(rowId, data, callback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateRow(rowId, data, callback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateRow(rowId, data, callback);
            });
        }
    }
    /** Updates the data of a specific row identified by its unique row ID. When batch editing mode is enabled, the changes to the row are temporarily staged and will not be permanently saved to the data source until the user explicitly commits or saves the batch of edits. This ensures that multiple changes can be reviewed and either all applied or discarded together, rather than being immediately written to the underlying data.
    * @param {string | number} rowId. row bound id
    * @param {string} dataField?. column bound data field. For example, if you have a column with dataField: 'firstName', set 'firstName' here.
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
    /** Deselects a previously selected row, cell, or column within the data grid, removing any associated highlight or selection state.
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
    /** Unchecks a specific row in the TreeGrid by setting its associated checkbox to an unchecked (false) state. This visually updates the checkbox in the UI and updates the row’s checked status in the underlying data model.
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
    /** Resets the checked state of all rows in a TreeGrid or GroupingGrid by setting every checkbox to unchecked (`false`). This action ensures that no rows remain selected or checked, effectively deselecting all items in the grid.
    * @param {string | number} rowId. The ID of the row to toggle expand/collapse state.
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
    /** Toggles the expanded or collapsed state of a TreeGrid row specified by the provided row ID. If the target row is currently collapsed, this action will expand it to reveal its child rows. Conversely, if the row is expanded, it will collapse and hide any child rows. Use this function to dynamically show or hide hierarchical data within the TreeGrid based on user interaction or programmatic control.
    * @param {string} dataField. The dataField of the Column.
    * @param {number} columnWidth?. The width of the Column.
    * @param {any} initColumn?. callback for set up of the column.
    */
    transpose(dataField, columnWidth, initColumn) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.transpose(dataField, columnWidth, initColumn);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.transpose(dataField, columnWidth, initColumn);
            });
        }
    }
    /** Transposes the Grid.
    * @param {string} locale. The locale abbreviation. For example: 'de'.
    * @param {any} messages?. Object containing the locale messages.
    */
    setLocale(locale, messages) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setLocale(locale, messages);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setLocale(locale, messages);
            });
        }
    }
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    componentDidRender(initialize) {
        const that = this;
        const props = {};
        const events = {};
        let styles = null;
        const stringifyCircularJSON = (obj) => {
            const seen = new WeakSet();
            return JSON.stringify(obj, (k, v) => {
                if (v !== null && typeof v === 'object') {
                    if (seen.has(v))
                        return;
                    seen.add(v);
                }
                if (k === 'Smart') {
                    return v;
                }
                return v;
            });
        };
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
            that.nativeElement.React = React;
            that.nativeElement.ReactDOM = ReactDOM;
            if (that.nativeElement && !that.nativeElement.isCompleted) {
                that.nativeElement.reactStateProps = JSON.parse(stringifyCircularJSON(props));
            }
        }
        if (initialize && that.nativeElement && that.nativeElement.isCompleted) {
            //	return;
        }
        for (let prop in props) {
            if (prop === 'class' || prop === 'className') {
                const classNames = props[prop].trim().split(' ');
                if (that.nativeElement._classNames) {
                    const oldClassNames = that.nativeElement._classNames;
                    for (let className in oldClassNames) {
                        if (that.nativeElement.classList.contains(oldClassNames[className]) && oldClassNames[className] !== "") {
                            that.nativeElement.classList.remove(oldClassNames[className]);
                        }
                    }
                }
                that.nativeElement._classNames = classNames;
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
                if (that.nativeElement[normalizedProp] === undefined) {
                    that.nativeElement.setAttribute(prop, props[prop]);
                }
                if (props[prop] !== undefined) {
                    if (typeof props[prop] === 'object' && that.nativeElement.reactStateProps && !initialize) {
                        if (stringifyCircularJSON(props[prop]) === stringifyCircularJSON(that.nativeElement.reactStateProps[normalizedProp])) {
                            continue;
                        }
                    }
                    that.nativeElement[normalizedProp] = props[prop];
                }
            }
        }
        for (let eventName in events) {
            that[eventName] = events[eventName];
            that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }
        if (initialize) {
            Smart.Render();
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
        return (React.createElement("smart-grid", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Grid, Smart, Grid as default };
