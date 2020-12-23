import React from "react";
import { LayoutProperties } from "./../index";
import { Animation, Orientation } from './../index';
export { LayoutProperties } from "./../index";
export { Animation, Orientation } from './../index';
export { LayoutItem } from './layoutitem';
export { LayoutItemProperties } from "./../index";
export { LayoutGroup } from './layoutgroup';
export { LayoutGroupProperties } from "./../index";
export { TabLayoutItem } from './tablayoutitem';
export { TabLayoutItemProperties } from "./../index";
export { TabLayoutGroup } from './tablayoutgroup';
export { TabLayoutGroupProperties } from "./../index";
export declare const Smart: any;
export interface LayoutProps extends LayoutProperties {
    className?: string;
    style?: React.CSSProperties;
    onResize?: ((event?: Event) => void) | undefined;
    onStateChange?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onMenuItemClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Layout splits your content into resizable sections.
*/
export declare class Layout extends React.Component<React.HTMLAttributes<Element> & LayoutProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
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
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
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
    /** Determines whether splitting is live or not.
    *	Property type: boolean
    */
    get allowLiveSplit(): boolean;
    set allowLiveSplit(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the selected item.
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
    /**  This event is triggered after resizing is completed.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
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
    get eventListeners(): string[];
    /** Returns a Layout item according to the index that is passed.
    * @param {number | string} index. The index of an item.
    */
    getItem(index: number | string): void;
    /** Refreshes the Layout
    */
    refresh(): void;
    /** Inserts a new item inside the Layout.
    * @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {string | undefined} position?. A string that represents the position where the new item will be created.
    */
    createLayoutItem(type: any, position?: string | undefined): void;
    /** Moves all children from one item to another.
    * @param {any} oldItem. The source item that will have it's content removed.
    * @param {any} newItem. The host item that will have it's content replaced.
    */
    moveChildren(oldItem: any, newItem: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Layout;
