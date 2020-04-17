import React from "react";
import { TableProperties } from "./../index";
import { Animation, TableSortMode } from './../index';
export { TableProperties } from "./../index";
export { Animation, TableSortMode } from './../index';
export declare const Smart: any;
export interface TableProps extends TableProperties {
    className?: string;
    style?: React.CSSProperties;
}
/**
 Table is an alternative of the HTMLTableElement.
*/
export declare class Table extends React.Component<React.HTMLProps<Element> & TableProps, any> {
    private _id;
    private nativeElement;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Disables the interaction with the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Table columns
    *	Property type: any
    */
    get columns(): any;
    set columns(value: any);
    /** Determines the data source of the table component.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** The name of the element. Used when submiting data inside a Form.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the sorting mode of the Table.
    *	Property type: TableSortMode
    */
    get sortMode(): TableSortMode;
    set sortMode(value: TableSortMode);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    /** Clears the Table sorting.
    */
    clearSort(): void;
    /** Binds the table to the data source or rebinds it.
    */
    dataBind(): void;
    /** Focuses the table.
    */
    focus(): void;
    /** Refreshes the table.
    */
    refresh(): void;
    /** Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order.
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<React.DOMAttributes<Element>, Element>;
}
export default Table;
