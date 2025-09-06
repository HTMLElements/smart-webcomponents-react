import React from "react";
import { TabLayoutItemProperties } from "./../index";
import { TabLayoutItemOrientation } from './../index';
export { TabLayoutItemProperties } from "./../index";
export { TabLayoutItemOrientation } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes inactive and unresponsive to user actions.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets or sets the modifier properties (such as alignment, padding, spacing, or styling options) applied to the Layout item, allowing you to customize its appearance and behavior.
    *	Property type: any
    */
    get modifiers(): any;
    set modifiers(value: any);
    /** Specifies the minimum allowable size for the item, ensuring that it cannot be resized or rendered smaller than this value.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies the text or name displayed as the label for the item. This value is shown to users as the item's identifier or title in user interfaces.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the alignment and direction in which the group’s elements are arranged, such as horizontal or vertical orientation.
    *	Property type: TabLayoutItemOrientation | string
    */
    get orientation(): TabLayoutItemOrientation | string;
    set orientation(value: TabLayoutItemOrientation | string);
    /** Specifies the overall dimensions of the item, such as its width, height, or length, to define how much space the item occupies.
    *	Property type: any
    */
    get size(): any;
    set size(value: any);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users will not be able to access the element using the Tab key or other keyboard navigation methods.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default TabLayoutItem;
