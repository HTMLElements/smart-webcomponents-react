import React from "react";
import { ListMenuProperties } from "./../index";
import { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode } from './../index';
export { ListMenuProperties } from "./../index";
export { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode } from './../index';
export { MenuItem } from './menuitem';
export { MenuItemProperties } from "./../index";
export { MenuItemsGroup } from './menuitemsgroup';
export { MenuItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface ListMenuProps extends ListMenuProperties {
    className?: string;
    style?: React.CSSProperties;
    onExpand?: ((event?: Event) => void) | undefined;
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ListMenu allows you to present users a listing of options and sub options.
*/
export declare class ListMenu extends React.Component<React.HTMLAttributes<Element> & ListMenuProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines whether the element becomes focused on hover or not.
    *	Property type: boolean
    */
    get autoFocusOnMouseenter(): boolean;
    set autoFocusOnMouseenter(value: boolean);
    /** Allows top-level ListMenu items to be checkable.
    *	Property type: boolean
    */
    get checkable(): boolean;
    set checkable(value: boolean);
    /** Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
    *	Property type: boolean
    */
    get checkboxes(): boolean;
    set checkboxes(value: boolean);
    /** Sets the check mode of top-level ListMenu items(groups).
    *	Property type: MenuCheckMode
    */
    get checkMode(): MenuCheckMode;
    set checkMode(value: MenuCheckMode);
    /** Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Displays or hides the loading indicator. Loading indicator is hidden by default.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Determines the field in the data source that corresponds to an item's label.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element.
    *	Property type: string | HTMLElement
    */
    get dropDownAppendTo(): string | HTMLElement;
    set dropDownAppendTo(value: string | HTMLElement);
    /** If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Sets or gets the opening direction of the ListMenu minimized dropdown.
    *	Property type: MenuDropDownPosition
    */
    get dropDownPosition(): MenuDropDownPosition;
    set dropDownPosition(value: MenuDropDownPosition);
    /** Enables or disables scrolling using the mouse wheel through overflowing menu items.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Determines the placeholder for the filter input.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Determines the MenuItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the 'value' property or 'textContent' if the user wants to filter by text inside the MenuItem's content or any other property.
    *	Property type: string
    */
    get filterMember(): string;
    set filterMember(value: string);
    /** Determines the filtering mode.
    *	Property type: FilterMode
    */
    get filterMode(): FilterMode;
    set filterMode(value: FilterMode);
    /** If enabled, the items will be grouped by their first letter and sorted.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Determines the field in the data source that corresponds to an item group's subitems collection.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
    /** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Determines the position of the loading indicator inside the element.
    *	Property type: VerticalAlignment
    */
    get loadingIndicatorPosition(): VerticalAlignment;
    set loadingIndicatorPosition(value: VerticalAlignment);
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
    /** Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance.
    *	Property type: string
    */
    get minimizeIconTemplate(): string;
    set minimizeIconTemplate(value: string);
    /** Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically.
    *	Property type: number | null
    */
    get minimizeWidth(): number | null;
    set minimizeWidth(value: number | null);
    /** Sets or gets the ListMenu's scroll buttons behavior.
    *	Property type: Overflow
    */
    get overflow(): Overflow;
    set overflow(value: Overflow);
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
    /** Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
    *	Property type: ListMenuScrollMode
    */
    get scrollMode(): ListMenuScrollMode;
    set scrollMode(value: ListMenuScrollMode);
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
    /**  This event is triggered when a jqx-menu-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the item that was expanded.
    *   value - The value of the item that was expanded.
    *   path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children of the item that was expanded.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a menu item check state is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a list menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that was clicked.
    *   label - The label of the clicked item.
    *   value - The value of the clicked item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the bottom of the ListMenu.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the left inside the ListMenu.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the right inside the ListMenu.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds an item to the list.
    * @param {HTMLElement} Item. A jqx-menu-item to add to the List Menu.
    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group (or its id or numeric path) to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** Navigates to the previous page (smart-menu-items-group).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
    */
    back(animation?: boolean): void;
    /** Navigates to a particular page (smart-menu-items-group).
    * @param {string} id. The id or numeric path of a page (jqx-menu-items-group).
    */
    changePage(id: string): void;
    /** Checks an item.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
    */
    checkItem(item: HTMLElement | string): void;
    /** Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: string): Promise<any>;
    /** Maximizes the List Menu.
    */
    maximize(): void;
    /** Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized.
    */
    minimize(): void;
    /** Removes an item.
    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Unchecks an item.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
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
export default ListMenu;
