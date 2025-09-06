import React from "react";
import { TabLayoutGroupProperties } from "./../index";
import { TabLayoutGroupOrientation, TabLayoutGroupPosition } from './../index';
export { TabLayoutGroupProperties } from "./../index";
export { TabLayoutGroupOrientation, TabLayoutGroupPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface TabLayoutGroupProps extends TabLayoutGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 TabLayoutGroup represents a group of TabLayoutItems each with it's own Tab label.
*/
export declare class TabLayoutGroup extends React.Component<React.HTMLAttributes<Element> & TabLayoutGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user actions; when disabled, the element is inactive and cannot be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets the current modifiers applied to the Layout item, or sets new modifiers to customize its appearance and behavior. Modifiers may include properties such as alignment, spacing, padding, or visibility.
    *	Property type: any
    */
    get modifiers(): any;
    set modifiers(value: any);
    /** Specifies the minimum allowable size for the item. This value ensures that the item's dimensions do not shrink below the defined threshold, helping maintain layout consistency and usability.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies the text that will be displayed as the item's label, providing a descriptive name or title for the user interface element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the orientation (horizontal or vertical) of the group, defining how its child elements are arranged within the component. This setting affects the layout and flow direction of the grouped items.
    *	Property type: TabLayoutGroupOrientation | string
    */
    get orientation(): TabLayoutGroupOrientation | string;
    set orientation(value: TabLayoutGroupOrientation | string);
    /** Specifies the alignment or placement of the group of tab items within the tab container. This determines whether the tabs are positioned, for example, at the start, center, end, or distributed evenly along the container.
    *	Property type: TabLayoutGroupPosition | string
    */
    get position(): TabLayoutGroupPosition | string;
    set position(value: TabLayoutGroupPosition | string);
    /** Specifies the dimensions or overall scale of the item, such as its width, height, or length. This property defines how large or small the item appears or is rendered within the user interface or layout.
    *	Property type: any
    */
    get size(): any;
    set size(value: any);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning it cannot be selected or navigated to using the Tab key or other keyboard navigation methods.
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
export default TabLayoutGroup;
