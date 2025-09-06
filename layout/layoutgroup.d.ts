import React from "react";
import { LayoutGroupProperties } from "./../index";
import { LayoutGroupOrientation } from './../index';
export { LayoutGroupProperties } from "./../index";
export { LayoutGroupOrientation } from './../index';
declare let Smart: any;
export { Smart };
export interface LayoutGroupProps extends LayoutGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 LayoutGroup represents a group of layout items inside the Layout.
*/
export declare class LayoutGroup extends React.Component<React.HTMLAttributes<Element> & LayoutGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines whether the element is interactive or not. When enabled, the element can be interacted with by users (e.g., clicked, edited, or focused). When disabled, the element becomes non-interactive and typically appears visually subdued, preventing any user actions.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the modifier properties applied to the Layout item, allowing you to customize its appearance and behavior (such as alignment, padding, margin, or transformations). Use this property to define or access configuration options that modify how the Layout item is displayed or interacts within its container.
    *	Property type: any
    */
    get modifiers(): any;
    set modifiers(value: any);
    /** Specifies the minimum allowable size for the item, ensuring that it cannot be resized smaller than this value. This property helps maintain layout integrity by preventing the item from shrinking below the defined threshold.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies the text or name displayed as the label for the item, which is typically used to identify or describe the item in user interfaces.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the alignment or direction in which the group’s elements are arranged (e.g., horizontal, vertical, or custom orientation). This property controls how child components are positioned within the group.
    *	Property type: LayoutGroupOrientation | string
    */
    get orientation(): LayoutGroupOrientation | string;
    set orientation(value: LayoutGroupOrientation | string);
    /** Specifies the overall dimensions of the item, such as its width, height, or volume, which can be used for layout, display, or calculation purposes.
    *	Property type: any
    */
    get size(): any;
    set size(value: any);
    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard or other assistive technologies.
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
export default LayoutGroup;
