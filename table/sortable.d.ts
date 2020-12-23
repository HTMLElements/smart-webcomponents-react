import React from "react";
import { SortableProperties } from "./../index";
import { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation } from './../index';
export { SortableProperties } from "./../index";
export { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation } from './../index';
export declare const Smart: any;
export interface SortableProps extends SortableProperties {
    className?: string;
    style?: React.CSSProperties;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Sortable allows you to rearrange a group of html elements.
*/
export declare class Sortable extends React.Component<React.HTMLAttributes<Element> & SortableProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables sorting.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle').
    *	Property type: SortableDragMode
    */
    get dragMode(): SortableDragMode;
    set dragMode(value: SortableDragMode);
    /** Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'.
    *	Property type: SortableHandlePosition
    */
    get handlePosition(): SortableHandlePosition;
    set handlePosition(value: SortableHandlePosition);
    /** Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'.
    *	Property type: SortableHandleVisibility
    */
    get handleVisibility(): SortableHandleVisibility;
    set handleVisibility(value: SortableHandleVisibility);
    /** Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element.
    *	Property type: string | null
    */
    get items(): string | null;
    set items(value: string | null);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the direction sortable items are stacked and can be dragged.
    *	Property type: Orientation
    */
    get mode(): Orientation;
    set mode(value: Orientation);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    get properties(): string[];
    /**  This event is triggered when sortable items have been reordered.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Moves a sortable item from one index to another.
    * @param {number} fromIndex?. The original index of the item.
    * @param {number} toIndex?. The index to move the item to.
    */
    move(fromIndex?: number, toIndex?: number): void;
    /** Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element.
    */
    updateItems(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Sortable;
