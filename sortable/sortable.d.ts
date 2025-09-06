import React from "react";
import { SortableProperties } from "./../index";
import { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation } from './../index';
export { SortableProperties } from "./../index";
export { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Defines or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and elements will transition instantly without any animated effects. Use this property to enable, disable, or customize the animation behavior of components.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls whether items can be sorted. When enabled, users can rearrange items by sorting them; when disabled, sorting functionality is not available.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines how a sortable item can be dragged within the list. When set to 'item', users can drag the entire item itself to reorder it. When set to 'handle', a specific drag handle is displayed next to each item, and only dragging this handle will reorder the item. This property can be both retrieved (get) and modified (set) to control the user’s drag interaction method.
    *	Property type: SortableDragMode | string
    */
    get dragMode(): SortableDragMode | string;
    set dragMode(value: SortableDragMode | string);
    /** Sets or retrieves the position of the drag handle in relation to its associated sortable item. This property is only applicable when the dragMode option is set to 'handle', meaning that the user can initiate dragging only by interacting with the specified handle within the sortable item. Use this option to define where the handle appears (e.g., 'left', 'right', 'top', or 'bottom') relative to the item, allowing for precise customization of the drag-and-drop interface.
    *	Property type: SortableHandlePosition | string
    */
    get handlePosition(): SortableHandlePosition | string;
    set handlePosition(value: SortableHandlePosition | string);
    /** Determines whether the drag handle of a sortable item is always visible or only appears when the item is hovered over. This property is applicable only if dragMode is set to 'handle'. Use this setting to control the visibility of the item’s drag handle for user interaction.
    *	Property type: SortableHandleVisibility | string
    */
    get handleVisibility(): SortableHandleVisibility | string;
    set handleVisibility(value: SortableHandleVisibility | string);
    /** Specifies or retrieves a CSS selector used to identify which elements within the container are sortable items. By default, all direct child elements of the 'smart-sortable' custom element are considered sortable. You can customize this selector to restrict sortable functionality to specific child elements based on their class, tag, or other attributes.
    *	Property type: string | null
    */
    get items(): string | null;
    set items(value: string | null);
    /** Sets or retrieves the unlockKey, a unique value required to activate or grant access to the product's features. This property enables locking and unlocking the product based on its assigned key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of localized messages from the messages property will be used for displaying text or content. It ensures the correct language is applied throughout the application's interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle language or region-specific content updates or responses within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the localized strings that are displayed in the widget's user interface. This property allows you to customize all text elements for different languages and regions. It should be used together with the locale property to ensure the widget presents the appropriate translations based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the orientation (horizontal or vertical) in which sortable items are arranged and can be reordered by dragging. This determines whether items are stacked in a row or a column when using the sortable functionality.
    *	Property type: Orientation | string
    */
    get mode(): Orientation | string;
    set mode(value: Orientation | string);
    /** Gets or sets a value that specifies whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the order of items in a sortable list changes, indicating that one or more items have been repositioned within the list by the user. The event provides details about the updated order, allowing you to respond to changes, such as saving the new arrangement or updating the user interface.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Relocates a sortable item within a list from its current index to a specified target index, updating the order of items accordingly.
    * @param {number} fromIndex?. The original index of the item.
    * @param {number} toIndex?. The index to move the item to.
    */
    move(fromIndex?: number, toIndex?: number): void;
    /** Recalculates the list of sortable items within the custom element. This method should be called whenever items are dynamically added or removed to ensure that all current items are properly recognized and can be sorted as expected.
    */
    updateItems(): void;
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
export default Sortable;
