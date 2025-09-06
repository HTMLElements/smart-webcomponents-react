import React from "react";
import { SplitterItemProperties } from "./../index";
export { SplitterItemProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
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
    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually dimmed or grayed out.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Indicates whether the item is currently collapsed ('true') or expanded ('false'). This property controls the visibility of the item's content in collapsible interfaces or components.
    *	Property type: boolean
    */
    get collapsed(): boolean;
    set collapsed(value: boolean);
    /** Specifies whether the item is collapsible. If set to true, the item can be expanded or collapsed by the user. If set to false, the item remains permanently expanded and cannot be collapsed.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Specifies the elements or components that are displayed within each section (item) of the splitter layout. This property defines what content will appear in each resizable panel managed by the splitter.
    *	Property type: boolean
    */
    get locked(): boolean;
    set locked(value: boolean);
    /** Specifies whether the item can be resized by the user. If set to true, resizing is enabled; if set to false, the item's size remains fixed.
    *	Property type: string
    */
    get max(): string;
    set max(value: string);
    /** Specifies the maximum allowable size for the item. Values exceeding this limit will not be accepted or processed.
    *	Property type: string
    */
    get min(): string;
    set min(value: string);
    /** Specifies the minimum allowed size (in the relevant unit) for the item, preventing it from shrinking below this value during layout or resizing.
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
    /** Collapses the item, hiding its content or child elements from view. This action reduces the item's visible footprint, typically as part of an expandable/collapsible user interface component such as an accordion or dropdown.
    * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
    */
    collapse(far: string): void;
    /** Expands the item to display its hidden content or details when it is currently in a collapsed (hidden) state.
    */
    expand(): void;
    /** Prevents the item from being resized, ensuring its dimensions remain fixed and cannot be altered by the user or through code.
    */
    lock(): void;
    /** Unlocks access to an item that was previously restricted or unavailable, allowing full interaction or use of its features.
    */
    unlock(): void;
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
export default SplitterItem;
