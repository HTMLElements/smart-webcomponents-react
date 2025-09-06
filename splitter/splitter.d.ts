import React from "react";
import { SplitterProperties } from "./../index";
import { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode } from './../index';
export { SplitterProperties } from "./../index";
export { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode } from './../index';
export { SplitterItem } from './splitteritem';
export { SplitterItemProperties } from "./../index";
export { SplitterBar } from './splitterbar';
export { SplitterBarProperties } from "./../index";
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled, resulting in static display without transition effects. Assigning any other valid value enables the corresponding animation mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies how items are positioned and resized within the Splitter component.Possible values:      end &ndash; All items are resized to fit exactly within the available space of the Splitter. When a new item is inserted, the required space is taken from the adjacent (neighboring) item, adjusting their sizes so that the total size remains constant and nothing overflows.        proportional &ndash; All items expand or contract proportionally to occupy the full size of the Splitter. When a new item is added, the space it needs is proportionally deducted from the existing items, maintaining their relative sizes within the total available space.        overflow &ndash; Items are not resized to fit the Splitter. Instead, each item retains its natural size, even if the total size exceeds the Splitter’s dimensions. In this case, a scrollbar will appear, allowing users to scroll and view all the content that overflows beyond the visible area.
    *	Property type: SplitterAutoFitMode | string
    */
    get autoFitMode(): SplitterAutoFitMode | string;
    set autoFitMode(value: SplitterAutoFitMode | string);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Configures or retrieves the data source for the splitter component. When setting, it specifies the structure and content (such as panels or sections) that will be managed and displayed within the splitter. When getting, it returns the current data source used by the splitter.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** A getter method that retrieves and returns an array containing all the current Splitter items. This allows you to access the complete list of items managed by the Splitter component.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** When enabled, this setting ensures that all items within the element maintain their original aspect ratios relative to each other whenever the element is resized. This behavior is preserved regardless of whether the size properties of the items are defined in pixels, percentages, or other units. In other words, resizing the overall element will proportionally scale all its child items, keeping their relative dimensions consistent.
    *	Property type: boolean
    */
    get keepProportionsOnResize(): boolean;
    set keepProportionsOnResize(value: boolean);
    /** Sets or retrieves the unlockKey value used to authorize and enable access to the product's features. When setting, this key unlocks the product for use. When getting, it returns the currently assigned unlockKey.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies the language to be used for displaying messages. This property can be set to change the current language or retrieved to identify the active language. It works in conjunction with the messages property, which contains localized message strings for each supported language. Adjusting this property enables seamless switching between different language options in the application’s user interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle language changes, translate content, or process localization-related events within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object that maps password strength states to their corresponding string values. Each key in the object represents a specific password strength level (such as "weak," "medium," or "strong"), and its value provides the associated descriptive label or message to display to users. This allows for customizable text based on the current password strength state.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the orientation of the splitter, determining whether it is displayed vertically (dividing the area into left and right sections) or horizontally (dividing the area into top and bottom sections).
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** When the element has the 'readonly' attribute, users can view its value but cannot modify, edit, or otherwise change its contents. However, the element may still be focused and its content can be selected and copied by the user. No direct interaction—such as typing, pasting, or deleting—is allowed.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** 'Specifies how the splitter handles resizing when a user drags the splitter bar. The available modes are:'- 'None:' Resizing is disabled; splitter bars cannot be moved.- 'Adjacent (default):' Only the two panels immediately adjacent to the splitter bar are resized when the bar is dragged. Other panels remain unchanged.- 'End:' Dragging the splitter bar affects only the first panel (located at the left or top, depending on splitter orientation) and the last panel. All intermediate panels between these two remain unaffected.- 'Proportional:' All panels located in the direction the splitter bar is dragged (for example, all panels to the right if dragging right, or below if dragging down) are resized proportionally. The new sizes are calculated based on the current size ratios of these panels, ensuring they maintain their proportional widths or heights relative to each other after resizing.'Use this property to control which panels are resized and how space is distributed when users interact with the splitter.'
    *	Property type: SplitterResizeMode | string
    */
    get resizeMode(): SplitterResizeMode | string;
    set resizeMode(value: SplitterResizeMode | string);
    /** Specifies the increment or decrement value by which the element's size changes during a resize operation. This value controls how much the element grows or shrinks with each resizing step, allowing for precise adjustments.
    *	Property type: number
    */
    get resizeStep(): number;
    set resizeStep(value: number);
    /** Gets or sets a value that specifies whether the element's alignment should accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content and layout will adjust to support RTL text direction, ensuring proper display for locales that use right-to-left scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When this feature is enabled, the resizing operation updates the layout in real-time as the user drags the splitter, providing immediate visual feedback. By default, live resizing is disabled; instead, a highlighted guide bar appears during the drag operation, showing where the splitter will be positioned once the user releases the mouse button. The actual layout is only updated after the drag is complete.
    *	Property type: boolean
    */
    get liveResize(): boolean;
    set liveResize(value: boolean);
    /** Specifies the theme for the element. The theme determines the overall appearance, including colors, fonts, and styling, to ensure a consistent and visually appealing look.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via keyboard or mouse interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a splitter item is collapsed by the user, either through a UI interaction (such as clicking a collapse button) or programmatically. It allows you to execute custom logic or respond to the change when a particular panel within the splitter component is minimized or hidden.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a splitter item is expanded by the user, either through interaction (such as clicking or dragging) or programmatically. It allows developers to execute custom logic in response to the expansion of a specific splitter item within the UI component.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user initiates the resizing of a splitter component, such as clicking and dragging the divider to adjust the size of adjacent panels. It marks the start of the resizing interaction, allowing developers to perform actions or apply styles in response to the beginning of the splitter's adjustment process.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the user completes resizing the splitter, indicating that the resizing action has finished and the new panel sizes have been set.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new node to the end of the current list or container, adding it as the last child element. This operation updates the data structure to include the newly added node as the final element in the sequence.
    * @param {Node} node. The node to append
    */
    appendChild(node: Node): void;
    /** Collapses the specified splitter panel, minimizing its size and hiding its content within the container or layout.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
    */
    collapse(item: any, far?: boolean): void;
    /** Attempts to expand the splitter item, provided sufficient space is available. The expansion is only performed if there is enough remaining space in the container to accommodate the item's increased size.
    * @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
    */
    expand(item: any): void;
    /** Conceals the splitter bar element from view, preventing users from interacting with or resizing the associated panels.
    * @param {number} splitterBar. A JQX.SplitterBar instance.
    * @returns {number}
  */
    hideBar(splitterBar: number): any;
    /** Inserts a new Splitter component into the specified position within the layout, allowing the user to divide and resize adjacent sections of the interface.
    * @param {number} index. The index at which a new item will be inserted.
    * @param {any} details. An Object or string used as content if the splitter item.
    */
    insert(index: number, details: any): void;
    /** Inserts the specified "smart-splitter-item" node into the DOM immediately before the reference "smart-splitter-item" node, ensuring that the new element appears directly before the reference node within the splitter container. This operation preserves the order of splitter items and updates their layout accordingly.
    * @param {Node} newNode. The  "jqx-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: Node, referenceNode?: Node | null): any;
    /** Prevents a splitter item from being resized by the user, ensuring that its current size remains fixed and unchangeable during layout adjustments.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockItem(index: number): void;
    /** Prevents the splitter bar from being moved by disabling user drag interactions, effectively locking its position and ensuring that adjacent panes cannot be resized.
    * @param {number} index. The index of a Splitter Bar or it's instance.
    */
    lockBar(index: number): void;
    /** Removes a Splitter item from the layout, detaching it from its parent container and updating the interface accordingly. This action permanently deletes the specified Splitter component and any associated layout adjustments.
    * @param {number} index. An item to be removed.
    */
    removeAt(index: number): void;
    /** Clears all items currently contained within the Splitter component, effectively resetting it to an empty state. This operation removes every panel, section, or child element inside the Splitter, leaving no content displayed.
    */
    removeAll(): void;
    /** Removes a child node of type "smart-splitter-item" from its parent element in the DOM, effectively deleting the specified splitter pane and updating the layout accordingly.
    * @param {Node} node. The "jqx-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): any;
    /** Reloads and updates the Splitter component, re-rendering its layout and recalculating its size and position to reflect any recent changes to its content, configuration, or container.
    */
    refresh(): void;
    /** Reveals a previously hidden splitter bar, allowing users to resize adjacent panes or sections within the interface.
    * @param {number} splitterBar. An instance of a splitter bar.
    */
    showBar(splitterBar: number): void;
    /** Enables access to a splitter item that was previously locked, allowing users to interact with or modify the item as intended. This action removes any restrictions, making the splitter fully functional within the application.
    * @param {number} item. The index of a Splitter Item or it's instance.
    */
    unlockItem(item: number): void;
    /** Enables user interaction with a previously disabled or locked splitter bar, allowing users to adjust the size of adjacent panes or panels by dragging the splitter.
    * @param {number} item. The index of a Splitter Bar or it's instance.
    */
    unlockBar(item: number): void;
    /** Updates the configuration of a specific Splitter item within a Splitter component, allowing changes to its properties such as size, orientation, minimum and maximum limits, or other customizable options. This enables dynamic adjustment of the Splitter item's behavior and appearance within the parent Splitter layout.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Splitter;
