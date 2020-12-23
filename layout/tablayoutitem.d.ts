import React from "react";
import { TabLayoutItemProperties } from "./../index";
import { TabLayoutItemOrientation } from './../index';
export { TabLayoutItemProperties } from "./../index";
export { TabLayoutItemOrientation } from './../index';
export declare const Smart: any;
export interface TabLayoutItemProps extends TabLayoutItemProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 TabLayoutItem represents a Layout Item that has a Tab label and is applicable to a TabLayoutGroup.
*/
export declare class TabLayoutItem extends React.Component<React.HTMLAttributes<Element> & TabLayoutItemProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the modifiers of the Layout item.
    *	Property type: any
    */
    get modifiers(): any;
    set modifiers(value: any);
    /** Determines the min size of the item.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Determines the label of the item.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines the group orientation.
    *	Property type: TabLayoutItemOrientation
    */
    get orientation(): TabLayoutItemOrientation;
    set orientation(value: TabLayoutItemOrientation);
    /** Determines the size of the item.
    *	Property type: any
    */
    get size(): any;
    set size(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
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
export default TabLayoutItem;
