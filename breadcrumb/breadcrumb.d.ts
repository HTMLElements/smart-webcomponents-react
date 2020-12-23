import React from "react";
import { BreadcrumbProperties } from "./../index";
import { Animation } from './../index';
export { BreadcrumbProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
export interface BreadcrumbProps extends BreadcrumbProperties {
    className?: string;
    style?: React.CSSProperties;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onAddNewItem?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export declare class Breadcrumb extends React.Component<React.HTMLAttributes<Element> & BreadcrumbProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Enables or disables the "Add new item" (+) button.
    *	Property type: boolean
    */
    get addNewItem(): boolean;
    set addNewItem(value: boolean);
    /** Enables or disables the dragging of breadcrumb items.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Enables or disables the dropping of dragged breadcrumb items.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Show/Hide the close button of breadcrumb items.
    *	Property type: boolean
    */
    get closeButtons(): boolean;
    set closeButtons(value: boolean);
    /** Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item.
    *	Property type: {label: string, value: string}[]
    */
    get dataSource(): {
        label: string;
        value: string;
    }[];
    set dataSource(value: {
        label: string;
        value: string;
    }[]);
    /** Enables or disables the Breadcrumb.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically.
    *	Property type: number
    */
    get minimizeWidth(): number;
    set minimizeWidth(value: number);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a Breadcrumb item is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that has been closed.
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that is going to be closed.
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Breadcrumb item is dropped.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Breadcrumb item is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
    *   item - The item that is being dragged.
    *   originalEvent - The original event that initiates the dragging operation.
    *   target - The original target.
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "Add new item" (+) button is clicked.
    *  @param event. The custom event. 	*/
    onAddNewItem?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds an item.
    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
    */
    addItem(itemDetails: any): void;
    /** Restores the Breadcrumb from minimized state back to normal.
    */
    maximize(): void;
    /** Minimizes the Breadcrumb.
    */
    minimize(): void;
    /** Removes an item.
    * @param {HTMLElement} item. The item to remove.
    */
    removeItem(item: HTMLElement): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Breadcrumb;
