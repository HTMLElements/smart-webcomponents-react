import React from "react";
import { MenuProperties } from "./../index";
import { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode } from './../index';
export { MenuProperties } from "./../index";
export { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode } from './../index';
export { MenuItem } from './menuitem';
export { MenuItemProperties } from "./../index";
export { MenuItemsGroup } from './menuitemsgroup';
export { MenuItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface MenuProps extends MenuProperties {
    className?: string;
    style?: React.CSSProperties;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onCollapsing?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onExpanding?: ((event?: Event) => void) | undefined;
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export declare class Menu extends React.Component<React.HTMLAttributes<Element> & MenuProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** If set to true, on mouseenter, the element receives focus automatically.
    *	Property type: boolean
    */
    get autoFocusOnMouseenter(): boolean;
    set autoFocusOnMouseenter(value: boolean);
    /** Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group.
    *	Property type: boolean
    */
    get checkable(): boolean;
    set checkable(value: boolean);
    /** Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
    *	Property type: boolean
    */
    get checkboxes(): boolean;
    set checkboxes(value: boolean);
    /** Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group.
    *	Property type: MenuCheckMode
    */
    get checkMode(): MenuCheckMode;
    set checkMode(value: MenuCheckMode);
    /** Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown').
    *	Property type: MenuCloseAction
    */
    get closeAction(): MenuCloseAction;
    set closeAction(value: MenuCloseAction);
    /** Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the field in the data source that corresponds to an item's label.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM.
    *	Property type: string | HTMLElement
    */
    get dropDownAppendTo(): string | HTMLElement;
    set dropDownAppendTo(value: string | HTMLElement);
    /** If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the opening direction of Menu dropdowns.
    *	Property type: MenuDropDownPosition
    */
    get dropDownPosition(): MenuDropDownPosition;
    set dropDownPosition(value: MenuDropDownPosition);
    /** A getter that returns an array of all Menu items.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** Determines the field in the data source that corresponds to an item group's subitems collection.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
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
    /** Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id.
    *	Property type: string
    */
    get minimizeIconTemplate(): string;
    set minimizeIconTemplate(value: string);
    /** Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically.
    *	Property type: number
    */
    get minimizeWidth(): number;
    set minimizeWidth(value: number);
    /** Determines the menu's display mode.
    *	Property type: MenuMode
    */
    get mode(): MenuMode;
    set mode(value: MenuMode);
    /** Opens or closes thte menu when it's in 'dropDown' mode.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null.
    *	Property type: Overflow
    */
    get overflow(): Overflow;
    set overflow(value: Overflow);
    /** If set to true, prevents the closing of the Menu or its dropdowns when Menu items are checked/unchecked.
    *	Property type: boolean
    */
    get preventCloseOnCheck(): boolean;
    set preventCloseOnCheck(value: boolean);
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
    /** Determines the menu's selection mode.
    *	Property type: MenuSelectionMode
    */
    get selectionMode(): MenuSelectionMode;
    set selectionMode(value: MenuSelectionMode);
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
    /** Determines the field in the data source that corresponds to an item's value.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    get properties(): string[];
    /**  This event is triggered when the menu is closed. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
    *   trigger - Indicates whether the event was called from inside the element or programatically.
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-menu-items-group is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was collapsed.
    *   label - The label of the toggled item that was collapsed.
    *   value - The value of the toggled item that was collapsed.
    *   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was collapsed.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-menu-items-group is collapsing.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be collapsed.
    *   label - The label of the toggled item that is going to be collapsed.
    *   value - The value of the toggled item that is going to be collapsed.
    *   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be collapsed.
    */
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the toggled item that was expanded.
    *   value - The value of the toggled item that was expanded.
    *   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was expanded.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before a jqx-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be expanded.
    *   label - The label of the toggled item that is going to be expanded.
    *   value - The value of the toggled item that is going to be expanded.
    *   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be expanded.
    */
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a menu item check state is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that is toggled.
    *   label - The label of the toggled item.
    *   value - The value of the toggled item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the menu is opened. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds an item to the menu.
    * @param {HTMLElement} Item. A jqx-menu-item to add to the Menu.
    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group or its id or numeric path to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** Checks an item.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    */
    checkItem(item: HTMLElement | string): void;
    /** Clears all Menu items.
    */
    clear(): void;
    /** Closes the Menu when mode is 'dropDown'.
    */
    close(): void;
    /** Collapses an item.
    * @param {HTMLElement | string} item?. jqx-menu-item/jqx-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item?: HTMLElement | string, animation?: boolean): void;
    /** Expands an item.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: string): Promise<any>;
    /** Maximizes the Menu.
    */
    maximize(): void;
    /** Minimizes the Menu.
    */
    minimize(): void;
    /** Opens the Menu when mode is 'dropDown'.
    * @param {number} left. Horizontal position
    * @param {number} top. Vertical position
    */
    open(left: number, top: number): void;
    /** Removes an item from the menu.
    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group or its id or numeric path to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Unchecks an item.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path)
    */
    uncheckItem(item: HTMLElement | string): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Menu;
