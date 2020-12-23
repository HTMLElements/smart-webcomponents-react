import React from "react";
import { SortPanelProperties } from "./../index";
import { Animation, SortPanelCloseButtonPosition } from './../index';
export { SortPanelProperties } from "./../index";
export { Animation, SortPanelCloseButtonPosition } from './../index';
export declare const Smart: any;
export interface SortPanelProps extends SortPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export declare class SortPanel extends React.Component<React.HTMLAttributes<Element> & SortPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the the position of the close button of sort panel items.
    *	Property type: SortPanelCloseButtonPosition
    */
    get closeButtonPosition(): SortPanelCloseButtonPosition;
    set closeButtonPosition(value: SortPanelCloseButtonPosition);
    /** Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted.
    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[]
    */
    get dataSource(): {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        sortIndex: number;
    }[];
    set dataSource(value: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        sortIndex: number;
    }[]);
    /** Enables or disables the sort panel.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
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
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "Cancel" button is clicked.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default SortPanel;
