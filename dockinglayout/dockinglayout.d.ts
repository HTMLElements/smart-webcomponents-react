import React from "react";
import { DockingLayoutProperties } from "./../index";
import { Animation, DockingLayoutSnapMode } from './../index';
export { DockingLayoutProperties } from "./../index";
export { Animation, DockingLayoutSnapMode } from './../index';
declare let Smart: any;
export { Smart };
export interface DockingLayoutProps extends DockingLayoutProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onStateChange?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export declare class DockingLayout extends React.Component<React.HTMLAttributes<Element> & DockingLayoutProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** A getter that returns an array of all DockingLayout items that are auto hidden inside the element.
    *	Property type: any
    */
    get autoHideItems(): any;
    set autoHideItems(value: any);
    /** Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods.
    *	Property type: boolean
    */
    get draggable(): boolean;
    set draggable(value: boolean);
    /** If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected.
    *	Property type: boolean
    */
    get floatable(): boolean;
    set floatable(value: boolean);
    /** Hides all splitter bars inside the element.
    *	Property type: boolean
    */
    get hideSplitterBars(): boolean;
    set hideSplitterBars(value: boolean);
    /** A getter that returns an array of all DockingLayout items that are docked inside the element.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** A getter that returns an array of all DockingLayout items that have been closed.
    *	Property type: any
    */
    get closedItems(): any;
    set closedItems(value: any);
    /** Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. Possible values for the array are empty array like this [] or an array with any of the following items: 'close', 'autoHide'. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. draggable - a boolean property that allows to disable the dragging of the Tab item.
    *	Property type: any
    */
    get layout(): any;
    set layout(value: any);
    /** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
    *	Property type: boolean
    */
    get liveResize(): boolean;
    set liveResize(value: boolean);
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
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
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the resize step during reisizing
    *	Property type: number
    */
    get resizeStep(): number;
    set resizeStep(value: number);
    /** Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins.
    *	Property type: DockingLayoutSnapMode | string
    */
    get snapMode(): DockingLayoutSnapMode | string;
    set snapMode(value: DockingLayoutSnapMode | string);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in.
    *	Property type: any
    */
    get undockedItems(): any;
    set undockedItems(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the tab selection is changed. Note: Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
    *  @param event. The custom event. 	*/
    onStateChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when item resizing begins.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when item resizing finishes.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
    */
    autoHideBottom(node: HTMLElement | number | string): void;
    /** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
    */
    autoHideLeft(node: HTMLElement | number | string): void;
    /** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
    */
    autoHideRight(node: HTMLElement | number | string): void;
    /** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels.
    * @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
    */
    autoHideTop(node: HTMLElement | number | string): void;
    /** Clears the localStorage of any previous cached state of the DockingLayout.
    */
    clearState(): void;
    /** The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. Note: Items inserted via this method are added as a top level items.
    * @param {string | number | Node} node. An autohidden "jqx-tabs-window" item instance or a new "jqx-tabs-window" instance.
    * @returns {Node}
  */
    dock(node: string | number | Node): any;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertBeforeItem(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertAfterItem(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoLeft(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoRight(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoTop(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically.
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertIntoBottom(index: number | HTMLElement | string, item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutTop(item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutBottom(item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutLeft(item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertLayoutRight(item: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void;
    /** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right).
    * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
    * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    */
    insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void;
    /** Inserts a new TabsWindow. The window is in floating mode and is undocked.
    * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
    * @param {number | string} left?. The left position of the new window. You can use number, px or %. For example: '10px'.
    * @param {number | string} top?. The top position of the new window. You can use number, px or %. For example: '10px'.
    */
    insertFloatingWindow(item: any, left?: number | string, top?: number | string): void;
    /** The method returns an array of all autohidden items.
    * @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
    * @returns {any[]}
  */
    getAutoHideItems(orientation?: string): any;
    /** The method returns the index of a target item.
    * @param {HTMLElement} node. Returns the index of the target item.
    * @returns {number}
  */
    getIndex(node: HTMLElement): any;
    /** Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy.
    * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
    * @returns {any[]}
  */
    getState(noInstances?: boolean): any;
    /** Returns the Splitter parent of a Layout item
    * @param {HTMLElement} item?. DockingLayout item
    * @returns {HTMLElement}
  */
    getItemGroupElement(item?: HTMLElement): any;
    /** Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage.
    * @returns {any[]}
  */
    getJSONStructure(): any;
    /** Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup.
    * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
    */
    loadState(state?: any[]): void;
    /** Removes a DockingLayout item (TabsWindow) from the element.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
    */
    removeAt(index: number | HTMLElement | string): void;
    /** Removes all items from the element.
    */
    removeAll(): void;
    /** Removes a "smart-tabs-window" node that is a DockingLayout item.
    * @param {Node} node. The "jqx-tabs-window" node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): any;
    /** Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items.
    */
    saveState(): void;
    /** The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time.
    * @param {string | number | Node} node. A "jqx-tabs-window" instance that is part of the DockingLayout.
    */
    undock(node: string | number | Node): void;
    /** Updates a TabsWindow and it's contents.
    * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
    * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
    */
    update(index: number | HTMLElement | string, settings: any): void;
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
export default DockingLayout;
