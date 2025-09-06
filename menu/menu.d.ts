import React from "react";
import { MenuProperties } from "./../index";
import { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode } from './../index';
export { MenuProperties } from "./../index";
export { Animation, MenuCheckMode, MenuCloseAction, MenuDropDownPosition, MenuMode, Overflow, MenuSelectionMode } from './../index';
export { MenuItem } from './menuitem';
export { MenuItemProperties } from "./../index";
export { MenuItemsGroup } from './menuitemsgroup';
export { MenuItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
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
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and the element remains static. Otherwise, animations will be enabled according to the specified mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the delay, in milliseconds, before the Menu dropdown is closed after the mouse cursor leaves the Menu area. This setting is only effective when the selectionMode property is set to 'mouseenter'. Adjusting this value can help prevent the dropdown from closing too quickly when the mouse briefly leaves the Menu.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** If set to true, the element will automatically receive focus when the user's mouse pointer enters (hovers over) it, triggering a mouseenter event. This allows keyboard interactions or focus styles to activate without requiring a manual click or tab action from the user.
    *	Property type: boolean
    */
    get autoFocusOnMouseenter(): boolean;
    set autoFocusOnMouseenter(value: boolean);
    /** Enables checkboxes for top-level menu items (the direct children of the main Menu component), allowing users to select or deselect these items. To make submenu items (nested within menu groups) checkable, set the checkable property individually on the corresponding smart-menu-items-group elements. This allows for granular control over which menu levels support checkable states.
    *	Property type: boolean
    */
    get checkable(): boolean;
    set checkable(value: boolean);
    /** Controls whether checkboxes and radio buttons can be shown within the Menu component. This property applies exclusively to the main Menu, not to its subitems (i.e., smart-menu-item or smart-menu-items-group). Use this property to enable or disable the display of selectable options directly in the Menu.  For further customization of individual items, refer to the checkable property.
    *	Property type: boolean
    */
    get checkboxes(): boolean;
    set checkboxes(value: boolean);
    /** Sets the selection mode (check mode) for the top-level Menu items, which are the immediate children of the Menu component. The 'checkMode' property determines how these menu items can be toggled or selected:- Possible values for 'checkMode' are:    - ''checkbox'': Menu items can be checked and unchecked independently (multiple selections allowed).    - ''radioButton'': Menu items are mutually exclusive (only one can be selected at a time, like radio buttons).    - ''none'': Menu items have no checkable or selectable state.You can also assign a comma-separated list of these values (for example, ''checkbox, radioButton, none, checkbox''). If a list is provided, each value corresponds to a group of top-level menu items. These groups are separated by menu separators (special items acting as visual dividers). The first value in the list applies to the first group of menu items, the second value to the next group (after the first separator), and so on. When a separator is encountered, it signals the start of a new checkMode context, applying the next value in the list to subsequent items.Note: This 'checkMode' property only affects the top-level menu items. To control check modes for submenus or nested groups, set the 'checkMode' property individually on each smart-menu-items-group (the group component representing submenu levels).
    *	Property type: MenuCheckMode | string
    */
    get checkMode(): MenuCheckMode | string;
    set checkMode(value: MenuCheckMode | string);
    /** Defines the document-level event that triggers the closure of all open menu dropdowns, or the entire menu if the mode property is set to 'dropDown'. This event ensures that any active menu or submenu is properly closed when the specified user interaction occurs (e.g., clicking outside the menu).
    *	Property type: MenuCloseAction | string
    */
    get closeAction(): MenuCloseAction | string;
    set closeAction(value: MenuCloseAction | string);
    /** Specifies the data source for the Menu component. The data source should be provided as an array of objects, where each object represents a menu item with the following properties:- 'label': *(string, required)* — The text displayed for the menu item.- 'value': *(any, required)* — The unique value associated with the menu item, used for identification or selection.- 'shortcut': *(string, optional)* — A keyboard shortcut hint displayed alongside the menu item, helping users discover quick access keys.- 'items': *(array, optional)* — An array of objects representing sub-menu items, allowing for nested menus and hierarchical structures. Each sub-menu item follows the same structure as a top-level menu item.By configuring the data source in this format, you enable dynamic and flexible rendering of complex menu structures.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Controls whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies which field in the data source should be used as the item's label. This determines the text value displayed for each item in the UI by mapping it to the corresponding property from your data.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Here is a revised and enhanced version of your description:Specifies a custom outer container to which all dropdown containers will be appended. By default, dropdown elements are appended inside the menu itself. You can assign this property an HTML element directly, or provide the id of an existing HTML element (as a string).When the menu is in mode 'dropDown', the dropDownAppendTo property not only determines where the dropdowns are appended, but also controls the parent container of the entire menu. Note that the open method will open the menu relative to its original position within the DOM, regardless of the value of dropDownAppendTo.Use this property to customize the DOM structure, for example, to ensure that dropdowns are rendered within a specific container for layout, styling, or layering purposes.
    *	Property type: string | HTMLElement
    */
    get dropDownAppendTo(): string | HTMLElement;
    set dropDownAppendTo(value: string | HTMLElement);
    /** When this property is enabled, opening an element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page. This overlay prevents interaction with other page elements while the dropdown is open, helping to focus the user’s attention on the dropdown content.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** When this property is set and the Menu is in drop-down mode, the Menu's position will be anchored to the ID set by this property.
    *	Property type: string
    */
    get dropDownAnchor(): string;
    set dropDownAnchor(value: string);
    /** Specifies the direction in which the menu dropdown will appear when opened (e.g., above, below, left, or right relative to the triggering element), allowing customization of dropdown placement to enhance user interface layout and usability.
    *	Property type: MenuDropDownPosition | string
    */
    get dropDownPosition(): MenuDropDownPosition | string;
    set dropDownPosition(value: MenuDropDownPosition | string);
    /** A getter method that retrieves and returns an array containing all current Menu item objects, allowing access to the complete list of menu entries managed by the application.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** Specifies the field name in the data source that contains the collection of subitems associated with each item group. This property allows the component to identify and retrieve subitems for each group by referencing the appropriate data field.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
    /** Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for the component. This property determines which language is used when displaying text from the messages property, allowing for dynamic localization and internationalization of the user interface. When the language is changed, the corresponding localized messages are retrieved from the messages object.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized strings are generated or displayed, such as adjusting placeholders, applying additional formatting, or handling special localization rules before the message is returned.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves an object containing the set of strings used within the widget interface that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing developers to customize or translate UI text according to the user's language preferences.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Loads a custom minimize icon from an HTMLTemplateElement selected by its ID. The element’s inner HTML is used as the icon’s template, allowing for flexible and reusable icon customization within the application.
    *	Property type: string
    */
    get minimizeIconTemplate(): string;
    set minimizeIconTemplate(value: string);
    /** Specifies the minimum width (in pixels) at which the Menu transitions from its normal (expanded) state to a minimized (collapsed) mode. When the Menu’s container width falls below this threshold, the minimized mode is automatically activated. If set to null, the Menu will remain in its normal state regardless of width and will not minimize automatically.
    *	Property type: number
    */
    get minimizeWidth(): number;
    set minimizeWidth(value: number);
    /** Specifies how the menu is visually presented to users, such as in a horizontal, vertical, dropdown, or collapsible format. Adjusting this setting allows customization of the menu’s layout and interaction style.
    *	Property type: MenuMode | string
    */
    get mode(): MenuMode | string;
    set mode(value: MenuMode | string);
    /** Toggles the menu’s visibility when it is set to 'dropDown' mode, allowing users to open or close the menu as needed.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Defines how the menu's scroll buttons behave when navigating through its items. This property is effective only if dropDownAppendTo is set to a value other than null. If dropDownAppendTo is null, the scroll button behavior setting is ignored.
    *	Property type: Overflow | string
    */
    get overflow(): Overflow | string;
    set overflow(value: Overflow | string);
    /** If set to true, the Menu and its dropdowns will remain open when a Menu item is checked or unchecked, rather than automatically closing upon selection. This allows users to make multiple selections without the Menu closing each time an item is toggled.
    *	Property type: boolean
    */
    get preventCloseOnCheck(): boolean;
    set preventCloseOnCheck(value: boolean);
    /** When the element is set to "readonly," users can view its content but are unable to modify or edit the value. However, users may still interact with the element in limited ways, such as selecting and copying its content. The element remains focusable, but any attempts to change its data will be ignored.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves whether the element’s alignment is configured to support locales that use right-to-left (RTL) text direction, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted for proper display in RTL languages.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies how users can select items within the menu, such as allowing single selection, multiple selections, or no selection.
    *	Property type: MenuSelectionMode | string
    */
    get selectionMode(): MenuSelectionMode | string;
    set selectionMode(value: MenuSelectionMode | string);
    /** Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design aspects.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, the element is removed from the tab order and cannot be focused using keyboard navigation or script.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies which field in the data source should be used as the value for each item. This property maps a particular key or column from your data to represent the item's value in the component, enabling proper identification, selection, and data binding.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the menu is closed by the user. It is only fired when the component is operating in 'dropDown' mode; other modes do not emit this event. Use this event to perform actions or cleanup tasks when the drop-down menu is dismissed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is dispatched immediately before the menu begins to close, providing an opportunity to intercept the closing operation. By invoking event.preventDefault() within the event handler, you can cancel the menu’s closure, allowing for custom logic or validation before the menu actually closes. Note that this event is only fired when the menu is operating in 'dropDown' mode; it does not apply to other display modes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
    *   trigger - Indicates whether the event was called from inside the element or programatically.
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a jqx-menu-items-group is collapsed, indicating that a previously expanded group of menu items within the jqxMenu component has been closed by the user or through a programmatic action. Use this event to perform custom actions or UI updates in response to the group collapsing.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was collapsed.
    *   label - The label of the toggled item that was collapsed.
    *   value - The value of the toggled item that was collapsed.
    *   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was collapsed.
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before a jqx-menu-items-group begins to collapse, allowing developers to execute custom logic or prevent the group from collapsing if necessary. It provides an opportunity to handle user interactions or update the user interface in response to the group collapsing action.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be collapsed.
    *   label - The label of the toggled item that is going to be collapsed.
    *   value - The value of the toggled item that is going to be collapsed.
    *   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be collapsed.
    */
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a jqx-menu-items-group component is expanded by the user, either through a click or programmatic action. It allows you to execute custom logic in response to a menu group opening.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that was expanded.
    *   label - The label of the toggled item that was expanded.
    *   value - The value of the toggled item that was expanded.
    *   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that was expanded.
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before a jqx-menu-items-group begins to expand, allowing you to execute custom logic or cancel the expansion operation if needed. Use this event to intervene right before the menu group becomes visible to the user.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
    *   item - The menu item that is going to be expanded.
    *   label - The label of the toggled item that is going to be expanded.
    *   value - The value of the toggled item that is going to be expanded.
    *   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
    *   children - The children items of the toggled item that is going to be expanded.
    */
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the checked or unchecked state of a menu item is changed by the user or programmatically. It provides details about which menu item was affected and the new check state, allowing developers to respond to the change accordingly, such as updating the UI or processing the selected option.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
    *   item - The menu item which state was changed.
    *   label - The label of the item which state was changed.
    *   value - The value of the item which state was changed.
    *   checked - The checked state of the toggled item. If false the item is not toggled.
    */
    onItemCheckChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a menu item. It provides information about the selected menu item, allowing you to handle user interactions, perform actions based on the item selected, or update the interface accordingly.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The menu item that is toggled.
    *   label - The label of the toggled item.
    *   value - The value of the toggled item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the menu is opened by the user. It is only fired when the component is operating in 'dropDown' mode; in all other modes, this event will not be triggered. Use this event to perform actions when the drop-down menu becomes visible.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the menu is opened, giving you the opportunity to intervene before the menu becomes visible. Within your event handler, you can prevent the menu from opening by calling event.preventDefault(). Note that this event is only emitted when the menu is operating in 'dropDown' mode; it will not be fired in any other mode.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new item to the menu by appending the specified entry, including its label, action, and any associated properties, to the existing menu structure. This allows dynamic expansion of the menu options displayed to users.
    * @param {HTMLElement} Item. A jqx-menu-item to add to the Menu.
    * @param {HTMLElement | string} Parent?. The jqx-menu-items-group or its id or numeric path to add the item to.
    */
    addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
    /** Marks the specified item as checked or selected, updating its status to indicate it is active, enabled, or chosen.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    */
    checkItem(item: HTMLElement | string): void;
    /** Removes all existing items from the Menu, resulting in an empty Menu with no selectable options.
    */
    clear(): void;
    /** Simulates a user click event on a specified item programmatically, triggering any associated event handlers or actions as if the item were clicked manually by the user.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    */
    clickItem(item: HTMLElement | string): void;
    /** Automatically closes the Menu when the mode property is set to 'dropDown', ensuring that the menu is dismissed upon selection or when clicking outside the menu area. This behavior provides a streamlined user experience consistent with standard dropdown functionality.
    */
    close(): void;
    /** Collapses a currently expanded item, hiding its content from view and displaying only the header or summary. This is typically used in expandable/collapsible components such as accordions or dropdown menus.
    * @param {HTMLElement | string} item?. jqx-menu-item/jqx-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item?: HTMLElement | string, animation?: boolean): void;
    /** Displays the detailed content or additional information of an item by expanding its view, typically used in accordions, dropdowns, or collapsible sections.
    * @param {HTMLElement | string} item. jqx-menu-item/jqx-menu-items-group or its id or numeric path.
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** Retrieves a specific item using either its unique identifier (ID) or a numeric path value. This allows you to access an item directly by providing its assigned ID or by specifying its position within a structured path.
    * @param {string} id. The id or numeric path of an item
    * @returns {HTMLElement}
  */
    getItem(id: string): any;
    /** Expands the menu to display all available options, maximizing its visibility and accessibility for the user.
    */
    maximize(): void;
    /** Collapses the navigation menu to its minimized or compact state, reducing its visible size to save screen space while still providing access to essential menu options.
    */
    minimize(): void;
    /** Opens the Menu component only when the mode property is set to 'dropDown'. In this mode, the Menu will become visible in a dropdown format, allowing users to interact with its items. If mode is set to any other value, the Menu will not open.
    * @param {number} left. Horizontal position
    * @param {number} top. Vertical position
    */
    open(left: number, top: number): void;
    /** Removes a specified item from the menu, updating the menu structure to reflect the change. This action ensures the targeted menu item is no longer displayed or accessible within the menu interface.
    * @param {HTMLElement | string} item. The jqx-menu-item/jqx-menu-items-group or its id or numeric path to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Unselects or removes the checkmark from a selected item, indicating that it is no longer active, chosen, or included in the current selection.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Menu;
