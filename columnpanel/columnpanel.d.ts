import React from "react";
import { ColumnPanelProperties } from "./../index";
import { Animation, ColumnPanelDataSource } from './../index';
export { ColumnPanelProperties } from "./../index";
export { Animation, ColumnPanelDataSource } from './../index';
export declare const Smart: any;
export interface ColumnPanelProps extends ColumnPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Column Panel allows toggling the visibility and changing the order of columns.
*/
export declare class ColumnPanel extends React.Component<React.HTMLAttributes<Element> & ColumnPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the data source that will be loaded to the column panel.
    *	Property type: ColumnPanelDataSource[]
    */
    get dataSource(): ColumnPanelDataSource[];
    set dataSource(value: ColumnPanelDataSource[]);
    /** Enables or disables the column panel.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
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
    get properties(): string[];
    /**  This event is triggered when the "Apply" button is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	positionChanged)
    *   value - The current configuration of columns (data source).
    *   positionChanged - A boolean detail that shows whether the columns have been reordered.
    */
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
export default ColumnPanel;
