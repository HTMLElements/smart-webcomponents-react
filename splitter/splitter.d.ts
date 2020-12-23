import React from "react";
import { SplitterProperties } from "./../index";
import { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode } from './../index';
export { SplitterProperties } from "./../index";
export { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode } from './../index';
export { SplitterItem } from './splitteritem';
export { SplitterItemProperties } from "./../index";
export { SplitterBar } from './splitterbar';
export { SplitterBarProperties } from "./../index";
export declare const Smart: any;
export interface SplitterProps extends SplitterProperties {
    className?: string;
    style?: React.CSSProperties;
    onCollapse?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export declare class Splitter extends React.Component<React.HTMLAttributes<Element> & SplitterProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
    *	Property type: SplitterAutoFitMode
    */
    get autoFitMode(): SplitterAutoFitMode;
    set autoFitMode(value: SplitterAutoFitMode);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets splitter's data source.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** A getter that returns an array of all Splitter items.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
    *	Property type: boolean
    */
    get keepProportionsOnResize(): boolean;
    set keepProportionsOnResize(value: boolean);
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
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets splitter's orientation.
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
    *	Property type: SplitterResizeMode
    */
    get resizeMode(): SplitterResizeMode;
    set resizeMode(value: SplitterResizeMode);
    /** Determines the resize step during reisizing
    *	Property type: number
    */
    get resizeStep(): number;
    set resizeStep(value: number);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
    *	Property type: boolean
    */
    get liveResize(): boolean;
    set liveResize(value: boolean);
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
    /**  This event is triggered when splitter item is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when splitter item is expanded.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when splitter resizing begins.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when splitter resizing finishes.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new node.
    * @param {Node} node. The node to append
    */
    appendChild(node: Node): void;
    /** Collapses splitter item.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    collapse(item: any, far?: boolean): void;
    /** Expands the splitter item if possible (if there's enough space available).
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    expand(item: any): void;
    /** Hides a splitter bar
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    hideBar(splitterBar: number): Promise<any>;
    /** Insert a new Splitter item at a given position.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
    */
    insert(index: number, details: any): void;
    /** Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: Node, referenceNode?: Node | null): Promise<any>;
    /** Locks a splitter item so it's size can't change.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockItem(index: number): void;
    /** Locks a splitter bar so it can't be dragged.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockBar(index: number): void;
    /** Removes a Splitter item.
    * @param {number} index. An item to be removed.
    */
    removeAt(index: number): void;
    /** Removes all items from the Splitter
    */
    removeAll(): void;
    /** Removes a child "smart-splitter-item" node.
    * @param {Node} node. The "jqx-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Refreshes the Splitter
    */
    refresh(): void;
    /** Unhides a Splitter Bar
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    showBar(splitterBar: number): void;
    /** Unlocks a previously locked splitter item.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    unlockItem(item: number): void;
    /** Unlocks a previously locked splitter bar.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    unlockBar(item: number): void;
    /** Updates the properties of a Splitter item inside the Splitter.
    * @param {any} item. The index of a JQX.SplitterItem or it's instance.
    * @param {any} settings. An object containing the properties of a JQX.SplitterItem.
    */
    update(item: any, settings: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Splitter;
