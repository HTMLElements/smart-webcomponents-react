import React from "react";
import { BreadcrumbProperties } from "./../index";
import { Animation } from './../index';
export { BreadcrumbProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Controls the visibility and functionality of the "Add new item" (+) button. When enabled, users can click the button to create and add new items. When disabled, the button is hidden or inactive, preventing the addition of new items.
    *	Property type: boolean
    */
    get addNewItem(): boolean;
    set addNewItem(value: boolean);
    /** Controls whether users can drag and reorder breadcrumb items. When enabled, breadcrumb items become draggable, allowing users to change their order within the breadcrumb navigation. When disabled, breadcrumb items remain static and cannot be moved.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Allows you to control whether users can drop dragged breadcrumb items onto the breadcrumb navigation. When enabled, users can rearrange breadcrumb items by dragging and dropping them; when disabled, dropping is prevented.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. Otherwise, this property determines how animations are applied to the element.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls the visibility of the close (remove) button on individual breadcrumb items, allowing users to optionally display or hide the button for removing specific items from the breadcrumb navigation.
    *	Property type: boolean
    */
    get closeButtons(): boolean;
    set closeButtons(value: boolean);
    /** Specifies the data source used to populate the breadcrumb items. The data should be provided as an array of objects, where each object represents an individual breadcrumb item with its corresponding properties, such as label, link, and any additional attributes required for display or navigation.
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
    /** Controls whether the Breadcrumb navigation component is disabled. When enabled, the Breadcrumb provides users with a navigational trail;
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines the template used to render each breadcrumb item. This property accepts either the ID of an '' element (as a string) or a reference to an actual 'HTMLTemplateElement'. When specified, the template determines the structure and content of each breadcrumb item. If set to 'null', the default rendering is used and no custom template is applied.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Sets or retrieves the value of the unlockKey property, a unique key required to unlock and access the product's features. Use this property to specify the unlock key when enabling product access, or to obtain the current unlock key associated with the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to select and display the appropriate translation strings based on the specified language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines or retrieves an object containing all user-facing text strings within the widget that can be localized. This object allows customization of the widget’s displayed text in different languages and works in conjunction with the locale property to support internationalization and localization. Use this property to provide translations for messages, labels, and other interface text in the widget.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum width (in pixels) at which the Breadcrumb component transitions from its normal display to a minimized mode. If this value is set to null, the Breadcrumb will always remain in its normal mode and will not automatically minimize, regardless of the container's width.
    *	Property type: number
    */
    get minimizeWidth(): number;
    set minimizeWidth(value: number);
    /** When set to true, this property prevents the element from receiving keyboard focus or being selected using keyboard navigation (such as with the Tab key). As a result, users will not be able to focus on this element using standard keyboard interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever a breadcrumb item is removed or closed by the user—such as when a close icon within a breadcrumb segment is clicked. It can be used to detect and respond to changes in the breadcrumb navigation, allowing you to update application state, UI elements, or perform cleanup tasks as needed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that has been closed.
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before a Breadcrumb item begins the closing process. You can intercept and prevent the item from closing by invoking event.preventDefault() within your event handler. This allows you to add custom logic, such as displaying a confirmation dialog or validating conditions, before the Breadcrumb item is allowed to close.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The item that is going to be closed.
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user completes a drag-and-drop operation by dropping a Breadcrumb item into a new position. It signals that the item's placement has changed within the Breadcrumb navigation component and allows you to handle any necessary updates, such as reordering, data changes, or UI feedback.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user starts dragging a Breadcrumb item, allowing you to handle custom logic during the drag initiation phase. It provides access to the item being dragged and relevant drag event data.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
    *   item - The item that is being dragged.
    *   originalEvent - The original event that initiates the dragging operation.
    *   target - The original target.
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user clicks the "Add new item" (+) button. It typically indicates the user's intent to create or insert a new item into the current list, collection, or data structure. The event can be used to initialize the process for adding a new item, display a relevant input form, or handle any additional logic associated with item creation.
    *  @param event. The custom event. 	*/
    onAddNewItem?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new item to the collection. The item is appended to the end of the array or list, increasing the total number of items by one. If additional properties (such as item details or metadata) are required, ensure they are included in the request.
    * @param {any} itemDetails. An Object with the fields "index", "label", and "value".
    */
    addItem(itemDetails: any): void;
    /** Restores the Breadcrumb component from its minimized or collapsed state to its full, expanded view, making all breadcrumb navigation links visible to the user.
    */
    maximize(): void;
    /** Collapses the breadcrumb navigation into a minimal or condensed state, reducing its visual footprint on the page while still maintaining navigational functionality. This is typically used to save space or enhance the user interface on smaller screens.
    */
    minimize(): void;
    /** Removes a specified item from the collection. If the item exists, it will be deleted; otherwise, no action is taken.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Breadcrumb;
