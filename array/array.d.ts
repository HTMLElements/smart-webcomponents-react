import React from "react";
import { ArrayProperties } from "./../index";
import { Animation, ArrayArrayIndexingMode, ArrayType } from './../index';
export { ArrayProperties } from "./../index";
export { Animation, ArrayArrayIndexingMode, ArrayType } from './../index';
declare let Smart: any;
export { Smart };
export interface ArrayProps extends ArrayProperties {
    className?: string;
    style?: React.CSSProperties;
    onArraySizeChange?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onDimensionChange?: ((event?: Event) => void) | undefined;
    onElementClick?: ((event?: Event) => void) | undefined;
    onScroll?: ((event?: Event) => void) | undefined;
    onSizeChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Array is broadly used in Engineering applications and displays a Grid of values.
*/
export declare class Array extends React.Component<React.HTMLAttributes<Element> & ArrayProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animation effects are disabled; no transitions or animated elements will occur. Use this property to enable, disable, or customize animation behaviors within the application.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Sets or retrieves the indexing mode used by the Array, determining how elements are accessed and referenced (e.g., zero-based, one-based, or custom indexing). This property controls whether the Array's indices start at zero, one, or another defined value, affecting how elements are read and assigned.
    *	Property type: ArrayArrayIndexingMode | string
    */
    get arrayIndexingMode(): ArrayArrayIndexingMode | string;
    set arrayIndexingMode(value: ArrayArrayIndexingMode | string);
    /** A callback function that is triggered whenever the width, height, or disabled properties of the inner element require an update. This function is only used when the type property is set to 'custom'. The callback receives the updated values, allowing you to perform custom handling or side effects based on these property changes.
    *	Property type: any
    */
    get changeProperty(): any;
    set changeProperty(value: any);
    /** Specifies or retrieves the total number of columns currently visible in the Array. When set, this determines how many columns are displayed to the user; when accessed, it returns the current count of visible columns.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Defines or retrieves the default value assigned to inner elements when the type property is set to 'custom'. This property allows you to specify or access the initial value that inner elements will use or display when working with custom components.
    *	Property type: any
    */
    get customWidgetDefaultValue(): any;
    set customWidgetDefaultValue(value: any);
    /** Specifies or retrieves the number of dimensions (also known as the rank) of the Array, indicating how many levels of indices are required to access its elements.
    *	Property type: number
    */
    get dimensions(): number;
    set dimensions(value: number);
    /** Sets or retrieves the disabled state of the Array, indicating whether the Array is interactive or inactive. When set to true, all user interactions with the Array are prevented. When false, normal operations are enabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines or retrieves the height, in pixels, assigned to each element (row) within the Array. This property allows you to specify or access the vertical size of individual rows.
    *	Property type: number
    */
    get elementHeight(): number;
    set elementHeight(value: number);
    /** A callback function designed for configuring settings on element widgets. When the type property is set to 'custom', this callback must also handle the initialization of the widgets, as they will not be initialized automatically. Use this function to apply custom logic or settings during the creation and setup of your widgets.
    *	Property type: any
    */
    get elementTemplate(): any;
    set elementTemplate(value: any);
    /** Specifies or retrieves the width, in pixels, assigned to each element (or column) within the Array. This determines the horizontal space allocated for displaying each column's contents.
    *	Property type: number
    */
    get elementWidth(): number;
    set elementWidth(value: number);
    /** A callback function invoked to retrieve the current value of an element widget. This function is typically used to access or extract the widget’s state or input data, and can be customized to handle different types of widgets as needed.
    *	Property type: any
    */
    get getElementValue(): any;
    set getElementValue(value: any);
    /** Sets or retrieves the height value for indexer elements. When a value is specified, it updates the height property of the indexers; when accessed without a value, it returns the current height setting for those indexers.
    *	Property type: number
    */
    get indexerHeight(): number;
    set indexerHeight(value: number);
    /** Defines or retrieves the width (in pixels or other CSS units) of indexer elements, allowing you to control or access the display width of these components programmatically.
    *	Property type: number
    */
    get indexerWidth(): number;
    set indexerWidth(value: number);
    /** Gets or sets the unlockKey property, which serves as the authentication key required to access or activate the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") to be used for translations. This setting works together with the messages property, which contains localized message data for each supported language. Changing the language will determine which set of messages is displayed or accessed.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle localization events or to process localization-related data (such as language changes, translations, or region-specific settings) within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing key-value pairs of user interface text strings that can be localized for different languages. This property works with the locale property to dynamically display the widget's labels, messages, buttons, and other text elements in the selected language. Use this property to provide custom translations and ensure a consistent multilingual experience for users.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** If the element has the "readonly" attribute applied, users are unable to modify its value. However, they can still focus on the element and select its content. Unlike the "disabled" attribute, a readonly element remains functional for copying or submitting data, but it does not allow direct editing by the user.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves the number of rows displayed at one time within the Array, determining how many items are visible to the user without scrolling.
    *	Property type: number
    */
    get rows(): number;
    set rows(value: number);
    /** A callback function that allows you to programmatically set or update the value of element widgets. This function is typically invoked when the widget's value needs to be changed in response to user interactions or other application logic, enabling dynamic and flexible control over the widget's displayed content.
    *	Property type: any
    */
    get setElementValue(): any;
    set setElementValue(value: any);
    /** Determines whether the horizontal scrollbar is visible. When set to true, the horizontal scrollbar will be displayed if the content overflows horizontally; when set to false, the scrollbar will be hidden, regardless of content overflow. This property can be used to programmatically enable or disable horizontal scrolling.
    *	Property type: boolean
    */
    get showHorizontalScrollbar(): boolean;
    set showHorizontalScrollbar(value: boolean);
    /** Sets or retrieves a value that determines whether array indexers (e.g., [0], [1], [2]) are displayed alongside array elements. When enabled, the array index for each item will be shown in the user interface or output, providing clearer identification of array positions.
    *	Property type: boolean
    */
    get showIndexDisplay(): boolean;
    set showIndexDisplay(value: boolean);
    /** Controls whether selected elements are visually highlighted. When set, selected elements will display a highlight to indicate their selection status. Can be used to enable or disable this visual feedback.
    *	Property type: boolean
    */
    get showSelection(): boolean;
    set showSelection(value: boolean);
    /** Determines whether the vertical scrollbar is visible. When set, this property controls the display of the vertical scrollbar within the element. When retrieved, it returns the current visibility state of the vertical scrollbar.
    *	Property type: boolean
    */
    get showVerticalScrollbar(): boolean;
    set showVerticalScrollbar(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Configures or retrieves the data type and the specific widget components assigned to each element within the Array. This determines how the array’s values are stored and how individual items are rendered and interacted with in the user interface.
    *	Property type: ArrayType | string
    */
    get type(): ArrayType | string;
    set type(value: ArrayType | string);
    /** If set to true, the element will be excluded from the page’s tab order and cannot receive focus via keyboard navigation or mouse interaction.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Allows you to retrieve the current value of the array or assign a new value to it. When setting the value, the existing contents of the array will be replaced with the new array provided. When getting the value, it returns the current array contents.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered whenever a visible row or column is either added to or removed from the data grid. It fires after the row or column becomes visible to the user, enabling developers to perform actions such as updating UI elements, recalculating layout, or synchronizing data in response to changes in the grid’s visible structure."
    *  @param event. The custom event. 	*/
    onArraySizeChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the contents of the Array are modified. Changes can include adding or removing elements, updating existing values, or replacing the entire Array. The event allows you to respond dynamically to any updates made to the Array's data.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a dimension is either added to or removed from the system. It provides a notification that the set of dimensions has changed, allowing you to respond accordingly, such as updating the user interface or reprocessing related data.
    *  @param event. The custom event. 	*/
    onDimensionChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a specific element within the Array. It allows you to execute custom logic in response to the user's selection of an individual Array item. The event provides context about which element was clicked, enabling dynamic interactions based on the selected item.
    *  @param event. The custom event. 	*/
    onElementClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user scrolls the Array component using either the horizontal or vertical scrollbar. It activates in response to any scrollbar movement, allowing you to track or respond to changes in the visible portion of the Array.
    *  @param event. The custom event. 	*/
    onScroll?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever there is a change to either a column’s width or a row’s height within the grid. It fires immediately after the user or an automated process resizes a column or row, allowing you to respond to layout adjustments or update related UI elements accordingly.
    *  @param event. The custom event. 	*/
    onSizeChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Enhances the array by adding a new dimension. Note: If you need to add multiple dimensions at once, it is best to dynamically configure the dimensions property to specify all desired dimensions in a single operation. This approach ensures consistency and optimizes performance when modifying the array's structure.
    */
    addDimension(): void;
    /** Removes any currently selected items or text, resulting in no active selection. This action resets the selection state to empty.
    */
    clearSelection(): void;
    /** Copies the value of a specified array element to the user's clipboard, enabling easy sharing or pasting of the selected data elsewhere.
    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
    */
    copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void;
    /** Removes a specified column from the value array, eliminating all data contained in that column across every row.
    * @param {number} Columnindex. Index of the column to be deleted.
    */
    deleteColumn(Columnindex: number): void;
    /** Removes a specific row from the value array, effectively deleting that element and shifting subsequent elements to maintain array order.
    * @param {number} Rowindex. Index of the row to be deleted.
    */
    deleteRow(Rowindex: number): void;
    /** Clears all elements from the value array, resulting in an empty array. This operation removes all existing items, leaving the array with a length of zero.
    */
    emptyArray(): void;
    /** Marks the endpoint of a selection range that was initiated using the startSelection method. This designation indicates where the selected content ends, completing the area or text chosen by the user.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
    */
    endSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** Returns the HTML element located at the specified visible row and column coordinates within the Array's rendered grid. The coordinates refer to the zero-based indexes of the currently visible rows and columns, taking into account any scrolling or filtering applied to the Array's display.
    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
    * @returns {HTMLElement}
  */
    getElement(RowVisibleIndex: number, ColumnVisibleIndex: number): any;
    /** Returns an object containing the width and height properties extracted from each element of the array. Each property in the resulting object corresponds to the respective width and height values of the array elements.
    * @returns {any}
  */
    getElementSize(): any;
    /** Retrieves an array containing the values associated with all defined indexers in the collection. Each element in the array corresponds to a value stored at a specific indexer, allowing you to access the complete set of indexed values managed by the collection.
    * @returns {any[]}
  */
    getIndexerValue(): any;
    /** Returns the HTML element from the array located at the specified page coordinates, along with additional details about the element, such as its index in the array, bounding rectangle, and any relevant data attributes. This allows for precise identification and interaction with elements based on their position on the page.
    * @param {number} Pagexcoordinate.
    * @param {number} Pageycoordinate.
    * @returns {any}
  */
    hitTest(Pagexcoordinate: number, Pageycoordinate: number): any;
    /** Inserts a new column into the value array at the specified position, placing it immediately before the given column index. The inserted column will be automatically populated with default values for each corresponding row, ensuring array structure consistency.
    * @param {number} Columnindex. Index of the column to add a new column before.
    */
    insertColumnBefore(Columnindex: number): void;
    /** Inserts a new row with default values into the value array at the specified index, placing it immediately before the targeted row. All columns in the new row are initialized with their default values.
    * @param {number} Rowindex. Index of the row to add a new row before.
    */
    insertRowBefore(Rowindex: number): void;
    /** Sets every element in the value array to its specified default value. This operation replaces the current contents of the array with the default, ensuring consistency across all elements.
    */
    reinitializeArray(): void;
    /** Removes a specified dimension from the array.Note: If you need to remove multiple dimensions at once, it is recommended to dynamically update the dimensions property with the desired set of dimensions to ensure proper handling and improved performance.
    */
    removeDimension(): void;
    /** Sets the array's type property to 'none', indicating that the array does not enforce a specific data type for its elements. This allows elements of any type to be stored within the array.
    */
    reset(): void;
    /** Adjusts the dimensions of array elements by modifying both the width of each column and the height of each row, allowing for dynamic resizing of the entire array layout.
    * @param {number} Elementwidth. The new element (column) width.
    * @param {number} Elementheight. The new element (row) height.
    */
    resizeElement(Elementwidth: number, Elementheight: number): void;
    /** Selects every element within the array, including all items from the first to the last, without omission.
    */
    selectAll(): void;
    /** Selects an element located at the specified row and column indices within a grid or table structure. The indices provided are used as bounds to identify the exact element to retrieve or manipulate.
    * @param {number} Rowboundindex.
    * @param {number} Columnboundindex.
    */
    selectElement(Rowboundindex: number, Columnboundindex: number): void;
    /** Specifies the width of a column or element, determining how much horizontal space it occupies. Accepts values in units such as pixels (px), percentages (%), or other valid CSS measurements. Use this property to control the layout and appearance of table columns or block-level elements.
    * @param {number} Columnwidth. The new column width.
    */
    setColumnWidth(Columnwidth: number): void;
    /** Specifies the initial value assigned to each element in the array when it is first created. If no value is provided during array initialization, this default value will be used for all members.
    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
    */
    setDefaultValue(Defaultvalue: any): void;
    /** Sets the value(s) at one or more specified indices within an array. This operation assigns new data to the given positions, updating the contents of the array at the corresponding indexes. Use this method to modify existing elements or insert new values at particular locations in the array by specifying the target index or indices.
    * @param {any[]} Settings. An array of objects with the fields index and value.
    */
    setIndexerValue(Settings: any[]): void;
    /** Specifies the height of each row (element), determining the vertical space allocated to individual rows within the component or layout. This property controls how tall each row appears, impacting the overall layout and visibility of row content. Accepts values in pixels, percentages, or other valid CSS units.
    * @param {number} Rowheight. The new row height.
    */
    setRowHeight(Rowheight: number): void;
    /** Reveals the last element in the array by changing its visibility property, ensuring it is displayed to the user.
    */
    showLastElement(): void;
    /** Indicates the starting point of a selection range. To complete the selection, invoke the endSelection method, which marks the end point of the selection. This process allows you to define a specific range within the content for further manipulation or processing.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
    */
    startSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** Adjusts the amount of visible spacing between each element in the array, either increasing or decreasing the gap to improve layout and readability on the user interface.
    */
    toggleElementGap(): void;
    /** Transposes the given array by swapping its rows and columns. This operation is only applicable when the dimensions property is set to 2, indicating a two-dimensional (2D) array. For example, a 2D array of size m x n will become an n x m array after transposition.
    */
    transposeArray(): void;
    /** Allows you to retrieve the entire array's contents, assign a new value to the whole array, or update the value of a specific array element (member) by its index.
    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
    * @returns {any[]}
  */
    val(Newvalue?: any, Elementindexes?: number | number[]): any;
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
export default Array;
