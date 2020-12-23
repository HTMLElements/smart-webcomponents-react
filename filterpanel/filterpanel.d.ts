import React from "react";
import { FilterPanelProperties } from "./../index";
import { Animation, FilterPanelFilterType, FilterPanelMode } from './../index';
export { FilterPanelProperties } from "./../index";
export { Animation, FilterPanelFilterType, FilterPanelMode } from './../index';
export declare const Smart: any;
export interface FilterPanelProps extends FilterPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onCancel?: ((event?: Event) => void) | undefined;
    onClear?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export declare class FilterPanel extends React.Component<React.HTMLAttributes<Element> & FilterPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Defines which operation buttons will be shown in the filter panel
    *	Property type: string[]
    */
    get buttons(): string[];
    set buttons(value: string[]);
    /** Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
    *	Property type: number[]
    */
    get data(): number[];
    set data(value: number[]);
    /** Describes filtered data field.
    *	Property type: string
    */
    get dataField(): string;
    set dataField(value: string);
    /** If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables filter panel.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Callback function, used for custom evaluations in filter panel.
    *	Property type: any
    */
    get evaluateFilterExpression(): any;
    set evaluateFilterExpression(value: any);
    /** Defines which filter type is used.
    *	Property type: FilterPanelFilterType
    */
    get filterType(): FilterPanelFilterType;
    set filterType(value: FilterPanelFilterType);
    /** Format string used in filterType 'Date'.
    *	Property type: string
    */
    get formatString(): string;
    set formatString(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines field names of the filtered element.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Desfines filter panel's  mode
    *	Property type: FilterPanelMode
    */
    get mode(): FilterPanelMode;
    set mode(value: FilterPanelMode);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the current filtering is discarted.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the current filtering is cleared.
    *  @param event. The custom event. 	*/
    onClear?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when filter panel settings are applied.
    *  @param event. The custom event. 	*/
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Discards current filtering.
    */
    cancel(): void;
    /** Clears current filtering.
    */
    clear(): void;
    /** Evaluates a filter.
    * @param {any} value. The evalueated element in filter panel.
    */
    evaluate(value: any): void;
    /** Applies current filtering.
    */
    filter(): void;
    /** Gets the current filter state.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** Loads a previously saved filter state.
    * @param {any} state. An object returned by the method getState.
    */
    loadState(state: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default FilterPanel;
