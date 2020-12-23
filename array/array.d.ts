import React from "react";
import { ArrayProperties } from "./../index";
import { Animation, ArrayArrayIndexingMode, ArrayType } from './../index';
export { ArrayProperties } from "./../index";
export { Animation, ArrayArrayIndexingMode, ArrayType } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the indexing mode of the Array.
    *	Property type: ArrayArrayIndexingMode
    */
    get arrayIndexingMode(): ArrayArrayIndexingMode;
    set arrayIndexingMode(value: ArrayArrayIndexingMode);
    /** A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'.
    *	Property type: any
    */
    get changeProperty(): any;
    set changeProperty(value: any);
    /** Sets or gets the number of visible columns in the Array.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Sets or gets the default value of inner elements when type is 'custom'.
    *	Property type: any
    */
    get customWidgetDefaultValue(): any;
    set customWidgetDefaultValue(value: any);
    /** Sets or gets the dimensions of the Array.
    *	Property type: number
    */
    get dimensions(): number;
    set dimensions(value: number);
    /** Sets or gets disabled state of the Array.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the height of Array elements (row height).
    *	Property type: number
    */
    get elementHeight(): number;
    set elementHeight(value: number);
    /** A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function.
    *	Property type: any
    */
    get elementTemplate(): any;
    set elementTemplate(value: any);
    /** Sets or gets the width of Array elements (column width).
    *	Property type: number
    */
    get elementWidth(): number;
    set elementWidth(value: number);
    /** A callback function that can be used for getting the value of element widgets.
    *	Property type: any
    */
    get getElementValue(): any;
    set getElementValue(value: any);
    /** Sets or gets the height of indexers.
    *	Property type: number
    */
    get indexerHeight(): number;
    set indexerHeight(value: number);
    /** Sets or gets the width of indexers.
    *	Property type: number
    */
    get indexerWidth(): number;
    set indexerWidth(value: number);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the number of visible rows in the Array.
    *	Property type: number
    */
    get rows(): number;
    set rows(value: number);
    /** A callback function that can be used for setting the value of element widgets.
    *	Property type: any
    */
    get setElementValue(): any;
    set setElementValue(value: any);
    /** Sets or gets whether to display the horizontal scrollbar.
    *	Property type: boolean
    */
    get showHorizontalScrollbar(): boolean;
    set showHorizontalScrollbar(value: boolean);
    /** Sets or gets whether to display the array indexers.
    *	Property type: boolean
    */
    get showIndexDisplay(): boolean;
    set showIndexDisplay(value: boolean);
    /** Sets or gets whether to highlight selected elements.
    *	Property type: boolean
    */
    get showSelection(): boolean;
    set showSelection(value: boolean);
    /** Sets or gets whether to display the vertical scrollbar.
    *	Property type: boolean
    */
    get showVerticalScrollbar(): boolean;
    set showVerticalScrollbar(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets the data type and element widgets to be used in the Array.
    *	Property type: ArrayType
    */
    get type(): ArrayType;
    set type(value: ArrayType);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value of the Array.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when a visible row or column has been added or removed.
    *  @param event. The custom event. 	*/
    onArraySizeChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the value of the Array is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a dimension has been added or removed.
    *  @param event. The custom event. 	*/
    onDimensionChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an Array element has been clicked.
    *  @param event. The custom event. 	*/
    onElementClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Array is scrolled with one of the scrollbars.
    *  @param event. The custom event. 	*/
    onScroll?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the column width or the row height has been changed.
    *  @param event. The custom event. 	*/
    onSizeChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    addDimension(): void;
    /** Clears the selection.
    */
    clearSelection(): void;
    /** Copies the value of an Array element to the clipboard.
    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
    */
    copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void;
    /** Deletes a column in the value array.
    * @param {number} Columnindex. Index of the column to be deleted.
    */
    deleteColumn(Columnindex: number): void;
    /** Deletes a row in the value array.
    * @param {number} Rowindex. Index of the row to be deleted.
    */
    deleteRow(Rowindex: number): void;
    /** Empties the value array.
    */
    emptyArray(): void;
    /** Designates the end of a selection started with the method startSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
    */
    endSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** Returns the HTML element at the specified visible row and column coordinates of the Array.
    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
    * @returns {HTMLElement}
  */
    getElement(RowVisibleIndex: number, ColumnVisibleIndex: number): Promise<any>;
    /** Returns an object with the values of the Array element width and height.
    * @returns {any}
  */
    getElementSize(): Promise<any>;
    /** Gets an array with the values of all indexers.
    * @returns {any[]}
  */
    getIndexerValue(): Promise<any>;
    /** Returns an HTML element from the Array at the specified page coordinates and other information about this element.
    * @param {number} Pagexcoordinate.
    * @param {number} Pageycoordinate.
    * @returns {any}
  */
    hitTest(Pagexcoordinate: number, Pageycoordinate: number): Promise<any>;
    /** Inserts a column in the value array before the specified column. The new column is filled with default values.
    * @param {number} Columnindex. Index of the column to add a new column before.
    */
    insertColumnBefore(Columnindex: number): void;
    /** Inserts a row in the value array before the specified row. The new row is filled with default values.
    * @param {number} Rowindex. Index of the row to add a new row before.
    */
    insertRowBefore(Rowindex: number): void;
    /** Sets all value array members to the default value.
    */
    reinitializeArray(): void;
    /** Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property.
    */
    removeDimension(): void;
    /** Sets the array's type to 'none'.
    */
    reset(): void;
    /** Resizes Array elements (changes both the column width and the row height).
    * @param {number} Elementwidth. The new element (column) width.
    * @param {number} Elementheight. The new element (row) height.
    */
    resizeElement(Elementwidth: number, Elementheight: number): void;
    /** Selects all members of the array.
    */
    selectAll(): void;
    /** Selects an element with the passed row and column bound indexes.
    * @param {number} Rowboundindex.
    * @param {number} Columnboundindex.
    */
    selectElement(Rowboundindex: number, Columnboundindex: number): void;
    /** Sets the column (element) width.
    * @param {number} Columnwidth. The new column width.
    */
    setColumnWidth(Columnwidth: number): void;
    /** Sets the default value of array members.
    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
    */
    setDefaultValue(Defaultvalue: any): void;
    /** Sets the value of one or more Array indexers.
    * @param {any[]} Settings. An array of objects with the fields index and value.
    */
    setIndexerValue(Settings: any[]): void;
    /** Sets the row (element) height.
    * @param {number} Rowheight. The new row height.
    */
    setRowHeight(Rowheight: number): void;
    /** Makes the last array member visible.
    */
    showLastElement(): void;
    /** Designates the start of a selection. To end a selection, call endSelection.
    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
    */
    startSelection(Rowboundindex: number, Columnboundindex: number): void;
    /** Increases or decreases the visual gap between Array elements.
    */
    toggleElementGap(): void;
    /** Transposes the array. Applicable only when dimensions is 2 (2D array).
    */
    transposeArray(): void;
    /** Sets or gets the value of the whole array or sets the value of a member of the array.
    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
    * @returns {any[]}
  */
    val(Newvalue?: any, Elementindexes?: number | number[]): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Array;
