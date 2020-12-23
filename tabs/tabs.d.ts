import React from "react";
import { TabsProperties } from "./../index";
import { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation } from './../index';
export { TabsProperties } from "./../index";
export { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation } from './../index';
export { TabItem } from './tabitem';
export { TabItemProperties } from "./../index";
export { TabItemsGroup } from './tabitemsgroup';
export { TabItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface TabsProps extends TabsProperties {
    className?: string;
    style?: React.CSSProperties;
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
    /** Sets or gets whether the "Add new tab" button (+) is displayed.
    *	Property type: boolean
    */
    get addNewTab(): boolean;
    set addNewTab(value: boolean);
    /** Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
    *	Property type: boolean
    */
    get allowToggle(): boolean;
    set allowToggle(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the close button mode.
    *	Property type: TabsCloseButtonMode
    */
    get closeButtonMode(): TabsCloseButtonMode;
    set closeButtonMode(value: TabsCloseButtonMode);
    /** Sets or gets whether close buttons are displayed.
    *	Property type: boolean
    */
    get closeButtons(): boolean;
    set closeButtons(value: boolean);
    /** Sets or gets whether the Tabs content section is collapsed.
    *	Property type: boolean
    */
    get collapsed(): boolean;
    set collapsed(value: boolean);
    /** Enables or disables the collapsible feature.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Determines the data source that will be loaded to the Tabs.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the widget's name.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
    *	Property type: Overflow
    */
    get overflow(): Overflow;
    set overflow(value: Overflow);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
    *	Property type: boolean
    */
    get reorder(): boolean;
    set reorder(value: boolean);
    /** Sets or gets whether tab labels can be resized by dragging with the mouse.
    *	Property type: boolean
    */
    get resize(): boolean;
    set resize(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets the position of the scroll buttons.
    *	Property type: LayoutPosition
    */
    get scrollButtonsPosition(): LayoutPosition;
    set scrollButtonsPosition(value: LayoutPosition);
    /** Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
    *	Property type: TabsScrollMode
    */
    get scrollMode(): TabsScrollMode;
    set scrollMode(value: TabsScrollMode);
    /** Sets or gets which tab is selected.
    *	Property type: number | null
    */
    get selectedIndex(): number | null;
    set selectedIndex(value: number | null);
    /** Determines the way the user can switch between tabs.
    *	Property type: TabSelectionMode
    */
    get selectionMode(): TabSelectionMode;
    set selectionMode(value: TabSelectionMode);
    /** Applies one of four behaviors when the element is not wide enough to display all tab labels.
    *	Property type: TabsTabLayout
    */
    get tabLayout(): TabsTabLayout;
    set tabLayout(value: TabsTabLayout);
    /** Sets or gets where the tab strip is positioned.
    *	Property type: TabPosition
    */
    get tabPosition(): TabPosition;
    set tabPosition(value: TabPosition);
    /** Sets or gets the orientation of the text in the tabs.
    *	Property type: Orientation
    */
    get tabTextOrientation(): Orientation;
    set tabTextOrientation(value: Orientation);
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
    /**  This event is triggered when the tab selection is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a tab is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a drag operation has ended.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a drag operation has started.
    *  @param event. The custom event. 	*/
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when tabs have been reordered.
    *  @param event. The custom event. 	*/
    onReorder?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Collapses the content section.
    */
    collapse(): void;
    /** Makes sure a tab is visible by scrolling to it.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index: number): void;
    /** Expands the content section.
    */
    expand(): void;
    /** Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
    * @param {number} index. The index of the tab item.
    * @returns {number}
  */
    getOffsetFromEdgeOfElement(index: number): Promise<any>;
    /** Inserts a new tab and an associated content section.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index: number, details: any): void;
    /** Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
    */
    refreshTabHeader(): void;
    /** Removes a tab and its associated content section.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index: number): void;
    /** Selects a tab.
    * @param {number} index. The index of the tab to select.
    */
    select(index: number): void;
    /** Updates a tab and its associated content section.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Tabs;
