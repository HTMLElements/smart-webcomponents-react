import React from "react";
import { TabsProperties } from "./../index";
import { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation } from './../index';
export { TabsProperties } from "./../index";
export { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation } from './../index';
export { TabItem } from './tabitem';
export { TabItemProperties } from "./../index";
export { TabItemsGroup } from './tabitemsgroup';
export { TabItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface TabsProps extends TabsProperties {
    className?: string;
    style?: React.CSSProperties;
    onAddNewTabClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onReorder?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export declare class Tabs extends React.Component<React.HTMLAttributes<Element> & TabsProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines whether the "Add new tab" button (typically represented by a plus sign "+") is visible in the user interface. When set to true, the button is displayed, allowing users to add new tabs; when set to false, the button is hidden. This property can be used to both retrieve the current visibility status or control the display of the button.
    *	Property type: boolean
    */
    get addNewTab(): boolean;
    set addNewTab(value: boolean);
    /** Enables toggle functionality for tab selection. When set to true, the selectedIndex property can be assigned a value of null, indicating that no tab is currently selected. This allows users to deselect any active tab, leaving the tab interface with no selected tab.
    *	Property type: boolean
    */
    get allowToggle(): boolean;
    set allowToggle(value: boolean);
    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in immediate transitions without animation effects. Use other valid values to enable or customize animation behavior as needed.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Configures or retrieves the display mode of the close button. This property determines how the close button appears or behaves within the user interface, such as being always visible, visible on hover, or hidden.
    *	Property type: TabsCloseButtonMode | string
    */
    get closeButtonMode(): TabsCloseButtonMode | string;
    set closeButtonMode(value: TabsCloseButtonMode | string);
    /** Controls whether close buttons are shown in the user interface. Setting this property to true will display close buttons; setting it to false will hide them. You can also retrieve the current state to determine if close buttons are visible.
    *	Property type: boolean
    */
    get closeButtons(): boolean;
    set closeButtons(value: boolean);
    /** Determines whether the content section of the Tabs component is expanded or collapsed. When set to 'true', the content section is hidden (collapsed); when set to 'false', the content is visible (expanded). This property can be used to programmatically control or retrieve the collapsed state of the Tabs content.
    *	Property type: boolean
    */
    get collapsed(): boolean;
    set collapsed(value: boolean);
    /** Controls whether the collapsible functionality is active, allowing content sections to expand or collapse when enabled. When disabled, all content sections remain fully expanded and cannot be collapsed.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Specifies the data source from which the content for each tab will be retrieved and displayed. This property defines what data will populate the individual tabs when the Tabs component is rendered.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and typically appears visually muted to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Allows users to scroll horizontally through tab labels in the tab strip using the mouse wheel when the tabs exceed the visible area (i.e., when the tab strip overflows). Enabling this option lets users navigate through hidden tabs by scrolling, while disabling it prevents mouse wheel scrolling in the tab strip.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Sets or retrieves the 'unlockKey' value, a unique key or code required to unlock and gain access to the product’s features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current locale setting, which determines language and regional formatting. This property works together with the messages property to display localized content or translations based on the selected locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically invoked during processes such as language selection, text translation, or locale updates to handle localization-specific behavior.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or retrieves an object containing key-value pairs of strings used throughout the widget’s interface. These strings can be customized for different languages, enabling localization of the widget’s text content. This property is typically used alongside the locale property to display the widget’s labels, messages, and prompts in the selected language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets the current name of the widget, or assigns a new name to the widget when provided a value. The name uniquely identifies the widget instance within the application.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies or retrieves the behavior of the scroll buttons for the Tabs component. This property is relevant only when the tabLayout is set to 'scroll', allowing navigation through tab items that exceed the visible area. Use this option to control how scroll buttons appear and function when there are more tabs than can be displayed at once.
    *	Property type: Overflow | string
    */
    get overflow(): Overflow | string;
    set overflow(value: Overflow | string);
    /** Prevents all user interactions with the element, making it unresponsive to mouse, keyboard, and touch events such as clicking, dragging, or typing. This means the element cannot be activated, focused, or interacted with in any way by the user.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Controls whether the tab reordering feature is enabled or disabled. When enabled, users can rearrange the tabs by dragging a tab and dropping it onto a new position within the tab list. This allows for dynamic reordering of tabs based on the user's preference. When disabled, tabs remain in their original order and cannot be moved by the user.
    *	Property type: boolean
    */
    get reorder(): boolean;
    set reorder(value: boolean);
    /** Determines whether users can resize tab labels by clicking and dragging them with the mouse. When enabled, this allows tab labels to be adjusted interactively by the user. When disabled, tab label sizes remain fixed and cannot be changed through mouse actions. This setting can be used to either retrieve the current resizability state or update it.
    *	Property type: boolean
    */
    get resize(): boolean;
    set resize(value: boolean);
    /** Gets or sets a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, ensuring proper display and support for languages and locales that read from right to left, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Configures or retrieves the position of the scroll buttons within the component, allowing you to specify where the scroll controls appear (for example, at the start, end, or both ends of the scrollable area). This property enables precise placement of navigation controls for improved user experience.
    *	Property type: LayoutPosition | string
    */
    get scrollButtonsPosition(): LayoutPosition | string;
    set scrollButtonsPosition(value: LayoutPosition | string);
    /** Specifies or retrieves how the tab strip responds when users interact with the scroll buttons. Determines the scrolling behavior—such as the distance the tab strip moves or whether scrolling is smooth or immediate—when the left or right scroll buttons are clicked.
    *	Property type: TabsScrollMode | string
    */
    get scrollMode(): TabsScrollMode | string;
    set scrollMode(value: TabsScrollMode | string);
    /** Gets the index or identifier of the currently selected tab, or allows you to specify which tab should be selected.
    *	Property type: number | null
    */
    get selectedIndex(): number | null;
    set selectedIndex(value: number | null);
    /** Specifies how users can navigate or switch between different tabs, such as by clicking, keyboard shortcuts, or swipe gestures. This setting defines the interaction method for moving from one tab to another within the tabbed interface.
    *	Property type: TabSelectionMode | string
    */
    get selectionMode(): TabSelectionMode | string;
    set selectionMode(value: TabSelectionMode | string);
    /** Determines how the component handles situations where the element’s width is insufficient to display all tab labels. Offers four configurable behaviors for managing tab overflow, such as scrolling, collapsing, fading, or displaying an overflow menu.
    *	Property type: TabsTabLayout | string
    */
    get tabLayout(): TabsTabLayout | string;
    set tabLayout(value: TabsTabLayout | string);
    /** Specifies or retrieves the position of the tab strip within the user interface, determining where the tab strip is displayed (e.g., top, bottom, left, or right) relative to the main content area.
    *	Property type: TabPosition | string
    */
    get tabPosition(): TabPosition | string;
    set tabPosition(value: TabPosition | string);
    /** Specifies or retrieves the direction in which the text is displayed within the tabs, such as horizontal or vertical orientation. This property allows you to control whether tab labels are arranged from left to right, top to bottom, or in another supported direction.
    *	Property type: Orientation | string
    */
    get tabTextOrientation(): Orientation | string;
    set tabTextOrientation(value: Orientation | string);
    /** Specifies the theme to be applied, which controls the visual style, color scheme, and overall appearance of the element. The selected theme determines how the element is displayed to users.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to interact with it using tab navigation or other focus-related actions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the addNewTab feature is enabled and the corresponding button or interface element is clicked by the user.
    *  @param event. The custom event. 	*/
    onAddNewTabClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user selects a different tab, indicating that the active tab has changed. It allows you to respond to tab selection changes, such as updating content or executing specific logic based on the newly selected tab.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
    *   index - The tab's index.
    *   oldIndex - The tab's old index.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user closes a browser tab. It allows you to execute custom actions or clean up resources associated with that tab right before it is removed from the browser. The event provides details about the closed tab, such as its identifier and any relevant data, enabling you to manage your application's state accordingly.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
    *   index - The tab's index.
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is dispatched immediately before a tab is closed, giving you an opportunity to intercept the closure. By calling event.preventDefault() within the event handler, you can cancel the default close action and prevent the tab from closing. This allows you to perform actions such as prompting the user to save changes or confirming the close operation before proceeding.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index)
    *   index - The tab's index.
    */
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user completes a drag operation, signaling that the dragged element has been released and the drag sequence has finished. It allows you to perform cleanup actions, update UI elements, or handle any final logic after dragging is concluded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
    *   left - The tab's left position.
    *   top - The tab's top position.
    *   index - The tab's index.
    *   label - The tab's label.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is fired when a user initiates a drag operation, typically by clicking and beginning to move a draggable element. It marks the beginning of the drag-and-drop sequence, allowing you to set up any necessary data or visual feedback for the dragged item.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	left, 	top, 	index, 	label)
    *   left - The tab's left position.
    *   top - The tab's top position.
    *   index - The tab's index.
    *   label - The tab's label.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the order of tabs within a tab group changes, such as when a user drags and drops a tab to a new position. It allows you to respond to tab reordering actions, enabling features like updating your application's state or saving the new tab arrangement.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	oldIndex)
    *   index - The tab's index.
    *   oldIndex - The tab's old index.
    */
    onReorder?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Expands or collapses the content section, allowing users to toggle the visibility of its contents for improved usability and a cleaner interface.
    */
    collapse(): void;
    /** Retrieves the label (displayed title) of the Tab located at the specified index within the Tab collection. The index parameter is zero-based, meaning 0 refers to the first Tab.
    * @param {number} index. The index of the tab.
    * @returns {string}
  */
    getTabLabel(index: number): any;
    /** Retrieves and returns the content associated with the Tab located at the specified index within the Tab component. This allows access to the data or elements currently displayed in the selected Tab.
    * @param {number} index. The index of the tab.
    * @returns {HTMLElement}
  */
    getTabContent(index: number): any;
    /** Ensures the specified tab is brought into view within its container by automatically scrolling the container so that the entire tab is visible to the user.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index: number): void;
    /** Expands the content section to reveal additional information or elements that are initially hidden, providing users with more detailed content or options within this area.
    */
    expand(): void;
    /** Returns an array containing all TabItem objects that are child elements of the specified element. Each TabItem in the array represents a tab within the tabbed interface, allowing you to programmatically access and manipulate individual tabs.
    * @returns {any}
  */
    getTabs(): any;
    /** Returns the distance, in pixels, between the edge of the tab item container (the smart-tab-item element) and the corresponding edge of the parent smart-tabs element where the tab strip is located. This offset indicates how far the tab item container is positioned from the start of the tab strip within the tabs component, allowing for precise alignment and positioning calculations.
    * @param {number} index. The index of the tab item.
    * @returns {number}
  */
    getOffsetFromEdgeOfElement(index: number): any;
    /** Adds a new tab to the tab navigation interface and creates a corresponding content section. The new tab becomes selectable, allowing users to view and interact with its associated content when it is active.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index: number, details: any): void;
    /** Refreshes the Tabs header section to ensure it displays correctly. This is particularly useful when the header contains elements—such as images or dynamic content—that may load after the initial rendering of the Tabs. By calling this function, you can re-render or update the header layout to accommodate any late-loaded or dynamically updated elements, ensuring alignment and visual consistency.
    */
    refreshTabHeader(): void;
    /** Removes the specified tab along with its corresponding content section from the user interface, ensuring that both the tab header and its related content are deleted and no longer accessible to the user.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index: number): void;
    /** Programmatically activates the specified tab in a tabbed interface, making its associated content visible while hiding content from other tabs.
    * @param {number} index. The index of the tab to select.
    */
    select(index: number): void;
    /** Updates a specific tab along with its corresponding content section, ensuring that both the tab interface and its related content are synchronized and reflect the latest changes.
    * @param {number} index. The index of the tab to update.
    * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
    * @param {string | HTMLElement} content. The new content of the tab.
    */
    update(index: number, label: string, content: string | HTMLElement): void;
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
export default Tabs;
