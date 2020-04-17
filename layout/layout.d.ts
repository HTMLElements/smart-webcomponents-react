import React from "react";
import { LayoutProperties } from "./../index";
import { Animation, Orientation } from './../index';
export { LayoutProperties } from "./../index";
export { Animation, Orientation } from './../index';
export declare const Smart: any;
export interface LayoutProps extends LayoutProperties {
    className?: string;
    style?: React.CSSProperties;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onStateChange?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onMenuItemClick?: ((event?: Event) => void) | undefined;
}
/**
 Layout splits your content into resizable sections.
*/
export declare class Layout extends React.Component<React.HTMLProps<Element> & LayoutProps, any> {
    private _id;
    private nativeElement;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the options that will be available for selection inside the context menu.
    *	Property type: any
    */
    get contextMenuDataSource(): any;
    set contextMenuDataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets Layout's data source.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
    *	Property type: string
    */
    get itemLabel(): string;
    set itemLabel(value: string);
    /** Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
    *	Property type: string
    */
    get itemGroupLabel(): string;
    set itemGroupLabel(value: string);
    /** A getter that returns an array of all Splitter items inside the Layout.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
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
    /** Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines the resize step during reisizing
    *	Property type: number
    */
    get resizeStep(): number;
    set resizeStep(value: number);
    /** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
    *	Property type: boolean
    */
    get liveResize(): boolean;
    set liveResize(value: boolean);
    /** Determines the placeholder text of the empty items.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it.
    *	Property type: any
    */
    get selectedIndex(): any;
    set selectedIndex(value: any);
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
    /**  This event is triggered when resizing begins.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when resizing finishes.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
    *   item - The Splitter item that was the target of a change.
    *   type - A description of the operation that has cause the change.
    */
    onStateChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
    *   oldSelectedIndex - The Splitter item that was previously selected.
    *   selectedIndex - The Splitter item that is currently selected.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a the context menu is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a the context menu is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an option from the context menu has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
    *   target - The Splitter item that was the target of the context menu opening.
    *   item - The Context menu item that was clicked.
    *   label - The label of the context menu that was clicked.
    *   value - The value of the context menu that was clicked.
    */
    onMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    /** Appends a new node.
    * @param {Node} node. The node to append
    * @returns {Node}
  */
    appendChild(node: Node): Promise<any>;
    /** Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node.
    * @param {Node} newNode. The  "smart-splitter-item" node to insert.
    * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: Node, referenceNode?: Node | null): Promise<any>;
    /** Removes a child "smart-splitter-item" node from the Layout.
    * @param {Node} node. The "smart-splitter-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Returns a Splitter Item according to the index that is passed as an argument.
    * @param {any} index. The index of an item.
    */
    getItem(index: any): void;
    /** Returns the index of a Splitter Item that is passed as an argument.
    * @param {any} item. The index of the Splitter item that is passed as an argument.
    */
    getItemIndex(item: any): void;
    /** Insert a new Splitter item at a given position.
    * @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
    * @param {number | string} index. The index at which a new item will be inserted.
    * @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
    */
    insert(item: any, index: number | string, position?: string): void;
    /** Removes a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    */
    removeItem(index: any): void;
    /** Removes all items from the Layout
    */
    removeAll(): void;
    /** Selects a Splitter item from the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    */
    select(index: any): void;
    /** Unselects the selected item inside the element.
    */
    unselect(): void;
    /** Updates a Splitter item that is inside the Layout.
    * @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
    */
    updateItem(index: any, settings: any): void;
    /** Clears the localStorage of any previous cached states of the element according to it's id.
    */
    clearState(): void;
    /** Saves the current state of the element to LocalStorage. Requires an id to be set to the element.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element.
    * @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
    */
    loadState(state?: any[]): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<React.DOMAttributes<Element>, Element>;
}
export default Layout;
