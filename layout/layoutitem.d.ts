import React from "react";
import { LayoutItemProperties } from "./../index";
export { LayoutItemProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
export interface LayoutItemProps extends LayoutItemProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Layout item represents a single content section inside the Layout.
*/
export declare class LayoutItem extends React.Component<React.HTMLAttributes<Element> & LayoutItemProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with or modify the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the modifiers applied to the Layout item, allowing you to customize its appearance or behavior, such as spacing, alignment, or other layout-related properties.
    *	Property type: any
    */
    get modifiers(): any;
    set modifiers(value: any);
    /** Specifies the minimum allowed size for the item. This value sets the smallest dimensions (such as width or height) that the item can be resized or displayed at within its container.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies the text or caption displayed as the item's label. This value is used to identify or describe the item in the user interface.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the dimensions of the item, such as width, height, or overall scale, to control how large or small the item appears within the interface.
    *	Property type: any
    */
    get size(): any;
    set size(value: any);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
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
export default LayoutItem;
