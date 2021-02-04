import React from "react";
import { AccordionProperties } from "./../index";
import { Animation, AccordionExpandMode } from './../index';
export { AccordionProperties } from "./../index";
export { Animation, AccordionExpandMode } from './../index';
export { AccordionItem } from './accordionitem';
export { AccordionItemProperties } from "./../index";
export declare const Smart: any;
export interface AccordionProps extends AccordionProperties {
    className?: string;
    style?: React.CSSProperties;
    onCollapse?: ((event?: Event) => void) | undefined;
    onCollapsing?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onExpanding?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Accordion organizes content within collapsable items.
*/
export declare class Accordion extends React.Component<React.HTMLAttributes<Element> & AccordionProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the data source that will be loaded to the Accordion.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the accordion. Disabled elements can not be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode.
    *	Property type: number[]
    */
    get expandedIndexes(): number[];
    set expandedIndexes(value: number[]);
    /** Sets or gets the expand mode. Expand mode determines how the items will expand or collapse.
    *	Property type: AccordionExpandMode
    */
    get expandMode(): AccordionExpandMode;
    set expandMode(value: AccordionExpandMode);
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
    /** Determines if the element is readonly or not. If the element true, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Enables or disables accordion reordering.
    *	Property type: boolean
    */
    get reorder(): boolean;
    set reorder(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines whether the element can be focused or not.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when an item is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is going to be collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a reordering operation is completed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item that was dragged.
    *   target - The item that was dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a reordering operation is started.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item that is about to be dragged.
    *   target - The item that is about to be dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
    *   position - The current top and left position of the item.
    *   target - The item that was dragged.
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is going to be expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
    *   content - The content of the item.
    *   index - The index of the item.
    *   label - The label of the item
    */
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Collapses an item at a specified index.
    * @param {number} position. The index of the collapsed item.
    */
    collapse(position: number): void;
    /** Expands an item at a specified index.
    * @param {number} position. The index of the expanded item.
    */
    expand(position: number): void;
    /** Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} item. An object containing the values for the properties of the new item to be inserted.
    */
    insert(index: number, item: any): void;
    /** Removes an item at a specified index.
    * @param {number} position. The index of the item to be removed.
    */
    removeAt(position: number): void;
    /** Updates an item from the element.
    * @param {number} index. The index of the item to be updated.
    * @param {any} settings. An object containing the values for the properties of the item that will be updated.
    */
    update(index: number, settings: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Accordion;
