import React from "react";
import { SplitterItemProperties } from "./../index";
export { SplitterItemProperties } from "./../index";
export {} from './../index';
export declare const Smart: any;
export interface SplitterItemProps extends SplitterItemProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Splitter Item is a Panel in a Splitter component.
*/
export declare class SplitterItem extends React.Component<React.HTMLAttributes<Element> & SplitterItemProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines of the item is collapsed or not.
    *	Property type: boolean
    */
    get collapsed(): boolean;
    set collapsed(value: boolean);
    /** Determines of the item can be collapsed. If set to false, the item can't be collapsed
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Determines the content of the splitter items
    *	Property type: boolean
    */
    get locked(): boolean;
    set locked(value: boolean);
    /** Determines of the item can be resized or not.
    *	Property type: string
    */
    get max(): string;
    set max(value: string);
    /** Determines the max size of the item.
    *	Property type: string
    */
    get min(): string;
    set min(value: string);
    /** Determines the min size of the item
    *	Property type: string
    */
    get size(): string;
    set size(value: string);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Collapses the item.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far: string): void;
    /** Expands the item if it's collapsed.
    */
    expand(): void;
    /** Locks the item so it can no longer change it's size.
    */
    lock(): void;
    /** Unlocks a previously locked item.
    */
    unlock(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default SplitterItem;
