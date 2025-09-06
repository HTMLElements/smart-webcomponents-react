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
declare let Smart: any;
export { Smart };
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
    /** Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and no animation effects will be applied. Use this property to enable, disable, or specify different animation behaviors.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the list of selectable options that will appear within the context menu, allowing users to interact with or perform actions based on their selection.
    *	Property type: any
    */
    get contextMenuDataSource(): any;
    set contextMenuDataSource(value: any);
    /** Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to actions. When disabled, the element becomes non-interactive and does not respond to user input or events.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the data source associated with the Layout component. This property allows you to define the input data that the Layout will use to render its content, or to access the current data source being used.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or retrieves the unlockKey, a unique code or token required to grant access to and activate the product’s full functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property is typically used together with the messages property to display localized content based on the selected language. Setting this value changes which language messages are used, while getting it returns the currently active language code (e.g., "en", "fr", "es").
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines an object containing string values that represent messages or labels corresponding to various password strength states (e.g., "weak", "medium", "strong"). This is typically used to provide user feedback on password strength during password creation or validation processes.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the main orientation of the Layout component. This orientation determines how child Splitters within the Layout are arranged—either horizontally or vertically—by default. All Splitters inside the Layout will inherit this orientation unless a specific orientation is defined for them individually in the dataSource configuration.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** If the element is set to "readonly", users cannot modify its value, but they can still highlight and copy its contents. However, they cannot type, edit, or otherwise change the value within the field. The field remains focusable and selectable, but direct user input is disabled.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Indicates whether the splitting process occurs in real-time (live) or is performed as a pre-processed operation before use.
    *	Property type: boolean
    */
    get allowLiveSplit(): boolean;
    set allowLiveSplit(value: boolean);
    /** Sets or retrieves a value that determines whether the element's layout direction is configured for right-to-left (RTL) languages, such as Arabic or Hebrew, enabling proper alignment and rendering for locales that use RTL text.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies which item is currently selected from a list or collection. This property typically holds the identifier, index, or value of the selected item, allowing the application to reference or display the chosen option.
    *	Property type: any
    */
    get selectedIndex(): any;
    set selectedIndex(value: any);
    /** Specifies the theme to be applied. The theme controls the overall appearance and style of the element, including colors, fonts, and visual layout, ensuring a consistent look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using tab navigation or other focus-related interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered immediately after the user has finished resizing an element or window. It signals that the resizing action is complete, allowing you to perform any necessary updates or actions in response to the new size.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever there is a change in the Layout's state. Examples include actions such as adding a new item, removing an existing item, or any other modification that alters the structure or arrangement of the Layout.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
    *   item - The Splitter item that was the target of a change.
    *   type - A description of the operation that has cause the change.
    */
    onStateChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user changes the current selection, such as by highlighting different text or choosing a new item from a list. It occurs immediately after the selection has been modified, allowing you to respond to changes in user input or interface focus.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
    *   oldSelectedIndex - The Splitter item that was previously selected.
    *   selectedIndex - The Splitter item that is currently selected.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered right before the context menu is closed. Within the event handler, you can call event.preventDefault() to cancel the closing operation, allowing you to execute custom logic or prevent the menu from closing based on certain conditions.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the context menu is closed by the user, either by selecting an option or clicking outside the menu.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the context menu appears, typically when a user right-clicks on an element. By calling event.preventDefault() within the event handler, you can prevent the default context menu from opening, allowing you to implement a custom context menu or handle the action in a different way.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the context menu (typically accessed by right-clicking or a similar user action) is opened by the user.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user selects and clicks an option from the context menu. It occurs after the user has opened the context menu—typically via right-click or a long press—and chosen a specific menu item. The event provides details about the selected option, enabling you to handle custom actions or respond dynamically based on the user's selection.
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
    /** Returns the Layout item located at the specified index within the collection. The index is passed as a parameter, and the function retrieves the corresponding Layout item from the list or array. This allows you to access a particular Layout item by its position in the sequence.
    * @param {number | string} index. The index of an item.
    */
    getItem(index: number | string): void;
    /** Automatically updates and redraws the layout to reflect any recent changes, ensuring all components are properly arranged and displayed according to the latest data or configuration.
    */
    refresh(): void;
    /** Inserts a new item element into the Layout component, positioning it within the existing structure according to the component's layout configuration. This action updates the Layout to include the new item as part of its content, ensuring proper rendering and alignment with other elements.
    * @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
    * @param {string | undefined} position?. A string that represents the position where the new item will be created.
    */
    createLayoutItem(type: any, position?: string | undefined): void;
    /** Transfers all child elements or nodes from a specified source item to a designated target item, effectively moving the entire group of children so they become nested under the target item instead of the source.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Layout;
