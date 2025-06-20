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
    /** Determines whether the ribbon is collapsible.
    *	Property type: any
    */
    get collapsible(): any;
    set collapsible(value: any);
    /** Determines the tab items of the ribbon.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or gets the value indicating whether the element is disabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the file menu options of the ribbon.
    *	Property type: RibbonFileMenu
    */
    get fileMenu(): RibbonFileMenu;
    set fileMenu(value: RibbonFileMenu);
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Determines the locale of the ribbon.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Determines the messages of the ribbon
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the selected tab.
    *	Property type: any
    */
    get selectedTab(): any;
    set selectedTab(value: any);
    get properties(): string[];
    /**  This event is triggered when the ribbon is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the ribbon is collapsing. The event can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dialog launcher is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	groupLabel, 	groupId)
    *   groupLabel - The label of the dialog launcher's ribbon group.
    *   groupId - The id of the dialog launcher's ribbon group.
    */
    onDialogLauncherClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the ribbon is expanded.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the ribbon is expanding. The event can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the file menu button is clicked.
    *  @param event. The custom event. 	*/
    onFileButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the file menu is opened.
    *  @param event. The custom event. 	*/
    onFileMenuOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the file menu is closed.
    *  @param event. The custom event. 	*/
    onFileMenuClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a file menu item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item)
    *   item - The file menu item.
    */
    onFileMenuItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the tab selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldIndex, 	index)
    *   oldIndex - The previous tab index.
    *   index - The new index of the selected tab.
    */
    onSelect?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the tab selection is changing. The event can be canceled by calling event.preventDefault() in the event handler function.
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
    /** Adds a new ribbon tab to the ribbon. The tab can be added as an object, HTMLElement or id to an HTMLElement.
    * @param {any} tab. The ribbon tab to be added.
    */
    addTab(tab: any): void;
    /** Adds a new group to a ribbon tab. The group can be added as an object, HTMLElement or id to an HTMLElement.
    * @param {any} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {any} group. The ribbon group to be added.
    */
    addGroup(tab: any, group: any): void;
    /** Adds a new ribbon item to a ribbon group. The item can be added as an object, HTMLElement or id to an HTMLElement.
    * @param {string | number | HTMLElement} tab. The id, index or HTMLElement  of the parent ribbon tab.
    * @param {string | HTMLElement} group. The id or HTMLElement of the parent ribbon group.
    * @param {any} item. The ribbon item to be added.
    */
    addItem(tab: string | number | HTMLElement, group: string | HTMLElement, item: any): void;
    /** Collapses the ribbon.
    */
    collapse(): void;
    /** Expands the ribbon.
    */
    expand(): void;
    /** Removes a ribbon tab from the ribbon.
    * @param {string | number} ribbonTab. The id or index of the ribbon tab to be removed.
    */
    removeTab(ribbonTab: string | number): void;
    /** Removes a ribbon group from a ribbon tab.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the ribbon group to be removed.
    */
    removeGroup(ribbonTabIndex?: string | number, ribbonGroup?: string | number): void;
    /** Removes a ribbon item from a ribbon group.
    * @param {string | number} ribbonTabIndex?. The id or index of the parent ribbon tab.
    * @param {string | number} ribbonGroup?. The id or index of the parent ribbon group.
    * @param {string | number} ribbonItem?. The id or index of the ribbon item to be removed.
    */
    removeItem(ribbonTabIndex?: string | number, ribbonGroup?: string | number, ribbonItem?: string | number): void;
    /** Selects a ribbon tab.
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
