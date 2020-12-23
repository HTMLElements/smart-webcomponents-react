import React from "react";
import { MultiColumnFilterPanelProperties } from "./../index";
import { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator } from './../index';
export { MultiColumnFilterPanelProperties } from "./../index";
export { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator } from './../index';
export declare const Smart: any;
export interface MultiColumnFilterPanelProps extends MultiColumnFilterPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCollapseAll?: ((event?: Event) => void) | undefined;
    onExpandAll?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export declare class MultiColumnFilterPanel extends React.Component<React.HTMLAttributes<Element> & MultiColumnFilterPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the position of the close button of multi column filter panel items.
    *	Property type: MultiColumnFilterPanelCloseButtonPosition
    */
    get closeButtonPosition(): MultiColumnFilterPanelCloseButtonPosition;
    set closeButtonPosition(value: MultiColumnFilterPanelCloseButtonPosition);
    /** Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
    */
    get dataSource(): {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        groupIndex: number;
    }[];
    set dataSource(value: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        groupIndex: number;
    }[]);
    /** Enables or disables the multi column filter panel.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** A callback function that can be used to modify the settings of value editors.
    *	Property type: any
    */
    get editorCallback(): any;
    set editorCallback(value: any);
    /** Sets or gets the placeholder for the filter value editors.
    *	Property type: string
    */
    get editorPlaceholder(): string;
    set editorPlaceholder(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
    *	Property type: number
    */
    get maxLevel(): number;
    set maxLevel(value: number);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the logical operator between the items.
    *	Property type: MultiColumnFilterPanelOperator
    */
    get operator(): MultiColumnFilterPanelOperator;
    set operator(value: MultiColumnFilterPanelOperator);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets of gets the initial value of the element.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "Cancel" button is clicked.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "Collapse all" button is clicked.
    *  @param event. The custom event. 	*/
    onCollapseAll?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "Expand all" button is clicked.
    *  @param event. The custom event. 	*/
    onExpandAll?: ((event?: Event) => void) | undefined;
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
export default MultiColumnFilterPanel;
