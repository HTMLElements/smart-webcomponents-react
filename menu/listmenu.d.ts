import React from "react";
import { ListMenuProperties } from "./../index";
import { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode } from './../index';
export { ListMenuProperties } from "./../index";
export { Animation, MenuCheckMode, MenuDropDownPosition, FilterMode, VerticalAlignment, Overflow, ListMenuScrollMode } from './../index';
export { MenuItem } from './menuitem';
export { MenuItemProperties } from "./../index";
export { MenuItemsGroup } from './menuitemsgroup';
export { MenuItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are completely disabled; otherwise, the selected animation mode is enabled. Use this property to control whether animations play or are suppressed within the component.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls whether the element automatically receives keyboard focus when a user hovers the mouse pointer over it. If enabled, the element will become the active focus target on hover, allowing for keyboard interactions without requiring a click. If disabled, hovering does not change the focus state.
    *	Property type: boolean
    */
    get autoFocusOnMouseenter(): boolean;
    set autoFocusOnMouseenter(value: boolean);
    /** Enables top-level items within the ListMenu to support checkable states, allowing users to select or deselect these menu items with a checkbox or similar indicator. This feature provides enhanced interactivity by letting users clearly mark individual ListMenu options as checked or unchecked.
    *	Property type: boolean
    */
    get checkable(): boolean;
    set checkable(value: boolean);
    /** Controls whether checkboxes and radio buttons can appear in the top-level groups of the ListMenu. This property applies exclusively to the ListMenu component itself, and does not affect subitems within smart-menu-item or smart-menu-items-group elements. For related functionality, refer to the checkable property.
    *	Property type: boolean
    */
    get checkboxes(): boolean;
    set checkboxes(value: boolean);
    /** Configures the selection behavior (check mode) for top-level ListMenu items (groups). This determines whether menu items can be selected individually, allow multiple selections, or behave like radio buttons, affecting how users interact with the menu.
    *	Property type: MenuCheckMode | string
    */
    get checkMode(): MenuCheckMode | string;
    set checkMode(value: MenuCheckMode | string);
    /** Specifies the data source to be displayed in the ListMenu component. The data source must be an array of objects, where each object represents a menu item with the following properties:      label: string – The text displayed for the menu item.        value: any – The unique value or identifier associated with the menu item.        shortcut: string (optional) – A keyboard shortcut or hint displayed alongside the menu item.        items: array (optional) – An array of submenu item objects, each following the same structure, allowing for the creation of nested or hierarchical menus.  This structure enables the ListMenu to render both simple and multi-level menus, providing flexibility in how menu options and their shortcuts are presented to users.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is interactive or not. When enabled, users can interact with the element. When disabled, the element becomes non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Controls the visibility of the loading indicator. By default, the loading indicator is hidden; setting this option to true will display the indicator, while setting it to false will hide it.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Specifies which field in the data source should be used as the label for each item. This determines the text that will be displayed to represent the item in the user interface.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Specifies a custom outer container to which the minimized dropdown will be appended. By default, the dropdown is appended to the ListMenu container. You can set this property to either an HTML element or a string representing the ID of an HTML element.
    *	Property type: string | HTMLElement
    */
    get dropDownAppendTo(): string | HTMLElement;
    set dropDownAppendTo(value: string | HTMLElement);
    /** If this property is enabled, opening the element's minimized dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page content. This overlay visually separates the dropdown from other elements on the page and can also intercept clicks to prevent interactions with content outside the dropdown until it is closed.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies or retrieves the direction in which the ListMenu's minimized dropdown expands when opened, such as upward or downward. This property determines the alignment and positioning of the dropdown relative to the ListMenu component.
    *	Property type: MenuDropDownPosition | string
    */
    get dropDownPosition(): MenuDropDownPosition | string;
    set dropDownPosition(value: MenuDropDownPosition | string);
    /** Controls whether users can scroll through menu items that overflow the visible area by using the mouse wheel. When enabled, using the mouse wheel will navigate vertically through menu items not currently visible within the menu’s viewport. When disabled, mouse wheel scrolling will have no effect on overflowing menu content.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Controls the activation of menu item filtering functionality. When enabled, a filter input field appears at the top of the menu component, allowing users to search and display only the menu items that match the entered query. Note that filtering is limited to items currently rendered or visible in the menu's current view; items not present in the view will not be affected by the filter.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Specifies the placeholder text displayed inside the filter input field, guiding users on the expected input or action.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Specifies which property of the MenuItem will be used as the filtering criterion. By default, the filtering is performed using the label property of each MenuItem. You can change this setting to use other properties instead, such as value if you want to filter based on the MenuItem's value property, or textContent if you prefer to filter using the text content within the MenuItem. Additionally, you may specify any other property name to customize the filtering behavior according to your application's requirements.
    *	Property type: string
    */
    get filterMember(): string;
    set filterMember(value: string);
    /** Specifies the method used to filter or process data, such as selecting items based on certain criteria, applying search terms, or excluding specific values. This setting controls how data is displayed or retrieved according to the selected filtering mode.
    *	Property type: FilterMode | string
    */
    get filterMode(): FilterMode | string;
    set filterMode(value: FilterMode | string);
    /** If enabled, the items will be organized into groups based on the first letter of each item's name. Within each group, the items will be sorted alphabetically.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Specifies the name of the field within the data source that contains the collection of subitems associated with each item group. This field is used to retrieve and bind the subitems for display or processing within the application.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
    /** Specifies the text to display alongside the loading indicator when the loader is visible and positioned at the top or bottom of the container. This text provides context or feedback to users during loading operations.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the exact location where the loading indicator will appear within the parent element. This controls whether the loading indicator is displayed at the top, center, bottom, or another defined position inside the element’s boundaries.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Defines or retrieves the unlockKey property, a unique identifier or code required to unlock and grant access to the product’s features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (such as "en", "fr", or "es"), which determines the set of localized messages to use from the messages property. This property ensures that the appropriate language-specific messages are displayed to users based on their language selection or system settings.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify how localized strings are generated and displayed, such as altering text templates, injecting dynamic values, or adjusting message structure before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized strings used throughout the widget’s interface. This property is intended to facilitate internationalization by allowing you to provide translations for various UI text elements. It is typically used in combination with the locale property, which determines the currently active language or regional format.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Enables the use of a custom minimize icon by specifying an HTMLTemplateElement. This property accepts either the ID of an HTMLTemplateElement (as a string) or a direct reference to the HTMLTemplateElement instance. The content of the provided template will be rendered in place of the default minimize icon.
    *	Property type: string
    */
    get minimizeIconTemplate(): string;
    set minimizeIconTemplate(value: string);
    /** Specifies the minimum width, in pixels, that the ListMenu must reach before automatically switching from its normal (expanded) mode to minimized mode. If this value is set to null, the ListMenu will remain in its normal mode regardless of its width and will not minimize automatically.
    *	Property type: number | null
    */
    get minimizeWidth(): number | null;
    set minimizeWidth(value: number | null);
    /** Defines or retrieves the behavior of the ListMenu's scroll buttons, specifying how they appear and function when the menu content exceeds the visible area. This property controls whether scroll buttons are shown, when they become visible, and how users can interact with them to navigate through the list.
    *	Property type: Overflow | string
    */
    get overflow(): Overflow | string;
    set overflow(value: Overflow | string);
    /** If the element has the "readonly" attribute, users can view its content but cannot modify or edit it. While the element remains focusable and its text can be selected or copied, any user attempts to change its value will be blocked, ensuring the data remains unchanged.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element's text and layout direction are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element and its contents will display text and align elements according to RTL conventions.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether to display a traditional scrollbar or custom scroll buttons when the content exceeds the boundaries of an element’s container. This setting controls the method users can use to navigate overflow content within the element.
    *	Property type: ListMenuScrollMode | string
    */
    get scrollMode(): ListMenuScrollMode | string;
    set scrollMode(value: ListMenuScrollMode | string);
    /** Specifies the visual theme to apply to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel throughout the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, the element becomes unfocusable, meaning it cannot receive input focus via keyboard navigation (such as the Tab key), mouse clicks, or scripting methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies the name of the field in the data source whose value will be assigned as the item's value property. This field is used to uniquely identify each item within the data collection.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    get properties(): string[];
    /**  This event is triggered whenever a jqx-menu-items-group component is expanded by the user, indicating that the associated menu group has been opened to reveal its child menu items. Developers can use this event to perform actions such as loading dynamic content, updating UI states, or triggering additional functionality when a menu group becomes visible.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the item that was expanded.
    *   value - The value of the item that was expanded.
    *   path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children of the item that was expanded.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the checked or unchecked state of a menu item is modified—such as when a user selects or deselects a checkbox or toggle option within a menu. It allows you to respond to changes in the check state of menu items, enabling dynamic UI updates or additional actions based on the user's selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user interacts with the menu by clicking on one of its list items. The event provides details about the specific item selected, allowing you to execute custom logic in response to the user's selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that was clicked.
    *   label - The label of the clicked item.
    *   value - The value of the clicked item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user reaches the bottom of the ListMenu by scrolling. It can be used to detect when additional actions are needed, such as loading more items or displaying a message, once the user has viewed all currently visible content in the ListMenu.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user performs a leftward swipe gesture within the ListMenu component, typically indicating an intent to reveal additional options, delete an item, or navigate to a different view. It is designed to respond exclusively to horizontal swipes that start inside the ListMenu area.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user performs a rightward swipe gesture within the ListMenu component. It can be used to detect and handle user interactions such as revealing additional options, navigating to a new view, or initiating specific actions in response to the right swipe inside the ListMenu area.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new item to the end of the existing list, expanding the list by one element.
    * @param {HTMLElement} Item. A jqx-menu-item to add to the List Menu.
    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group (or its id or numeric path) to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** Navigates to the previous page within the group of menu items (`smart-menu-items-group`). This function moves the user’s focus or view to the preceding set of menu options, enabling seamless backward navigation in multi-page or scrollable menu interfaces.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
    */
    back(animation?: boolean): void;
    /** Navigates the user to a specific page or section within the application identified as "smart-menu-items-group." This action typically triggers a transition or redirect, bringing the "smart-menu-items-group" content into view for the user. Suitable for menu navigation or directing users to targeted groups within a menu structure.
    * @param {string} id. The id or numeric path of a page (jqx-menu-items-group).
    */
    changePage(id: string): void;
    /** Marks an item as checked, indicating that it has been selected or completed. This action typically updates the item's status property (e.g., `checked: true`) within the JSON data.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group (or its id or numeric path).
    */
    checkItem(item: HTMLElement | string): void;
    /** Retrieves a specific item using either its unique identifier (ID) or a numeric path that locates the item within a hierarchical structure.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: string): any;
    /** Expands the List Menu to its maximum available size, displaying all menu items for full visibility and easier selection.
    */
    maximize(): void;
    /** Collapses the List Menu to save screen space. When minimized, the full menu is hidden and replaced with a single icon, allowing users to expand the menu again if needed. This improves the user interface by providing a cleaner, less cluttered appearance while maintaining quick access to menu options.
    */
    minimize(): void;
    /** Removes a specified item from the collection or list. If the item exists, it is deleted; otherwise, no changes are made. This operation typically identifies the item by its unique key, index, or value.
    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Removes the checkmark from a selected item, resetting its state to unchecked or unselected. This action is typically used to indicate that the item is not active, chosen, or included in a selection.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default ListMenu;
