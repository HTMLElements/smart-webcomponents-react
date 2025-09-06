import React from "react";
import { RibbonProperties } from "./../index";
import { RibbonFileMenu } from './../index';
export { RibbonProperties } from "./../index";
export { RibbonFileMenuPosition, RibbonFileMenuType, RibbonFileMenu } from './../index';
export { RibbonTab } from './ribbontab';
export { RibbonTabProperties } from "./../index";
export { RibbonGroup } from './ribbongroup';
export { RibbonGroupProperties } from "./../index";
export { RibbonItem } from './ribbonitem';
export { RibbonItemProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface RibbonProps extends RibbonProperties {
    className?: string;
    style?: React.CSSProperties;
    onCollapse?: ((event?: Event) => void) | undefined;
    onCollapsing?: ((event?: Event) => void) | undefined;
    onDialogLauncherClick?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onExpanding?: ((event?: Event) => void) | undefined;
    onFileButtonClick?: ((event?: Event) => void) | undefined;
    onFileMenuOpen?: ((event?: Event) => void) | undefined;
    onFileMenuClose?: ((event?: Event) => void) | undefined;
    onFileMenuItemClick?: ((event?: Event) => void) | undefined;
    onSelect?: ((event?: Event) => void) | undefined;
    onSelecting?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Ribbon is a navigation control that allows you to organize your application's commands in a tabbed interface.
*/
export declare class Ribbon extends React.Component<React.HTMLAttributes<Element> & RibbonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies whether the ribbon interface can be collapsed or expanded by the user, allowing for a more compact or fully visible display as needed.
    *	Property type: any
    */
    get collapsible(): any;
    set collapsible(value: any);
    /** Specifies the individual tab items to be displayed within the ribbon interface. Each tab item typically represents a distinct category or section, allowing users to easily navigate and access grouped commands or features within the ribbon.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Specifies or retrieves whether the element is disabled, preventing user interaction and making it unresponsive to mouse and keyboard events. When set to true, the element cannot be activated or receive input focus.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the available file menu options displayed within the ribbon interface, defining which actions (such as New, Open, Save, Print, etc.) users can access from the file menu.
    *	Property type: RibbonFileMenu
    */
    get fileMenu(): RibbonFileMenu;
    set fileMenu(value: RibbonFileMenu);
    /** Sets or retrieves the value of the unlockKey property, which is used to authenticate and authorize access to unlock the product. The unlockKey typically functions as a secure code or token required to enable full product functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies the localization settings for the ribbon, determining the language and regional formatting (such as date, time, and number formats) used for displaying text and other interface elements.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Specifies the text and content displayed in the ribbon's message area, allowing customization of informational or notification messages shown to users within the ribbon interface.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies or retrieves a value that determines whether the element’s alignment is optimized for right-to-left (RTL) languages, such as Arabic or Hebrew. This affects the element’s text direction, layout flow, and alignment to accommodate locales that use right-to-left scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies which tab is currently selected and active in the tab navigation component, typically by its index or identifier. This property controls which tab's content is visible to the user.
    *	Property type: any
    */
    get selectedTab(): any;
    set selectedTab(value: any);
    get properties(): string[];
    /**  This event is triggered whenever the ribbon component transitions from its expanded state to a collapsed state. It allows developers to execute custom logic or UI updates in response to the ribbon becoming minimized or hidden from view.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is fired when the ribbon begins the process of collapsing, allowing you to execute custom logic before the collapse completes. If you wish to prevent the ribbon from collapsing, you can call event.preventDefault() within your event handler. This will cancel the default collapsing action, keeping the ribbon expanded.
    *  @param event. The custom event. 	*/
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user clicks the dialog launcher button, typically represented by a small icon (such as an arrow or ellipsis) in a component's toolbar or header. The event indicates the user's intention to open an extended options dialog or advanced settings panel related to the component.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	groupLabel, 	groupId)
    *   groupLabel - The label of the dialog launcher's ribbon group.
    *   groupId - The id of the dialog launcher's ribbon group.
    */
    onDialogLauncherClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the ribbon interface transitions from its collapsed state to an expanded state, indicating that additional options or tools have become visible to the user. Use this event to execute custom logic or UI updates whenever the ribbon expands.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is fired when the ribbon component begins to expand. You can intercept and cancel the expansion by calling event.preventDefault() within your event handler function. This allows you to programmatically control whether or not the ribbon expands based on custom logic.
    *  @param event. The custom event. 	*/
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the file menu button is clicked by the user. It is typically used to open, display, or perform actions related to the file menu, such as showing file options or initializing file-related functions. The event provides an opportunity for developers to execute custom logic in response to user interaction with the file menu button.
    *  @param event. The custom event. 	*/
    onFileButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user opens the file menu, such as by clicking on the "File" option in the application's main menu bar. It allows developers to execute custom logic immediately when the file menu becomes visible to the user.
    *  @param event. The custom event. 	*/
    onFileMenuOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the file menu is closed, either by user interaction or programmatically. It occurs after all menu actions have completed, signaling that the file menu is no longer visible or active. Developers can use this event to execute cleanup operations, update the user interface, or manage application state in response to the menu being closed.
    *  @param event. The custom event. 	*/
    onFileMenuClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on an item within the file menu. It allows you to execute custom actions in response to specific file menu selections, such as opening, saving, or closing a file. The event provides details about the selected menu item, enabling context-aware handling within your application.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The file menu item.
    */
    onFileMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user selects a different tab, indicating that the active tab within the interface has changed. It allows you to respond to changes in tab selection, such as updating displayed content, fetching new data, or tracking user navigation within tabbed components.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index)
    *   oldIndex - The previous tab index.
    *   index - The new index of the selected tab.
    */
    onSelect?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before the active tab changes, allowing you to intercept and potentially prevent the tab switch. To cancel the tab selection change, call event.preventDefault() within your event handler. This provides an opportunity to perform validations or prompt the user before the change is finalized.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index)
    *   oldIndex - The previous tab index.
    *   index - The new index of the selected tab.
    */
    onSelecting?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new tab to the application's ribbon interface. The tab can be specified in one of three ways: as a configuration object defining the tab's properties, as an existing HTMLElement to be used as the tab, or as a string representing the id of an existing HTMLElement to be added as the tab. This provides flexibility in how ribbon tabs are created and integrated.
    * @param {any} tab. The ribbon tab to be added.
    */
    addTab(tab: any): void;
    /** Enhances a ribbon tab by adding a new group. The group can be specified in one of the following ways: as an object defining its properties, as a direct reference to an HTMLElement, or as a string representing the id of an existing HTMLElement. This flexibility allows you to create the group dynamically, use an already created DOM element, or reference an element by its id.
    * @param {any} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {any} group. The ribbon group to be added.
    */
    addGroup(tab: any, group: any): void;
    /** Adds a new item to a specified ribbon group in the ribbon interface. The new item can be provided in one of the following forms: as a configuration object, as an actual HTMLElement, or by specifying the id of an existing HTMLElement. This offers flexibility in how ribbon items are defined and incorporated into the ribbon group.
    * @param {string | number | HTMLElement} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {string | HTMLElement} group. The id or HTMLElement of the parent ribbon group.
    * @param {any} item. The ribbon item to be added.
    */
    addItem(tab: string | number | HTMLElement, group: string | HTMLElement, item: any): void;
    /** Minimizes the ribbon interface, hiding its commands and options, to provide more workspace on the screen.
    */
    collapse(): void;
    /** Expands the ribbon interface to reveal additional tools, features, and options that are otherwise hidden from view. This action increases the available workspace by displaying the full set of ribbon commands and controls.
    */
    expand(): void;
    /** Removes a specified tab from the ribbon interface, effectively hiding it and its associated commands from the user’s view. This action ensures that the tab and its contents are no longer accessible within the ribbon navigation.
    * @param {string | number} ribbonTab. The id or index of the ribbon tab to be removed.
    */
    removeTab(ribbonTab: string | number): void;
    /** Removes a specified ribbon group from the selected ribbon tab, effectively deleting that group's controls and functionalities from the tab's interface.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the ribbon group to be removed.
    */
    removeGroup(ribbonTabIndex?: string | number, ribbonGroup?: string | number): void;
    /** Removes a specified ribbon item from its parent ribbon group, effectively deleting the item from the group and updating the user interface accordingly. This operation ensures that the ribbon group no longer displays or interacts with the removed item.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the parent ribbon group.
    * @param {string | number} ribbonItem?. The id or index of the ribbon item to be removed.
    */
    removeItem(ribbonTabIndex?: string | number, ribbonGroup?: string | number, ribbonItem?: string | number): void;
    /** Activates the specified ribbon tab, bringing its contents into focus and making its associated controls and options accessible to the user.
    * @param {string | number} ribbonTabIndex. The index of the ribbon tab to be selected.
    */
    selectTab(ribbonTabIndex: string | number): void;
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
export default Ribbon;
