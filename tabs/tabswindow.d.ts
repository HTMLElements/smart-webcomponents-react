import React from "react";
import { WindowProperties } from "./../index";
import { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap } from './../index';
export { WindowProperties } from "./../index";
export { Animation, WindowAutoCapitalize, WindowDisplayMode, WindowDropPosition, WindowFooterPosition, TabPosition, WindowResizeMode, TabSelectionMode, WindowTabCloseButtonMode, Overflow, LayoutPosition, Orientation, WindowWrap } from './../index';
export declare const Smart: any;
export interface TabsWindowProps extends WindowProperties {
    className?: string;
    style?: React.CSSProperties;
    onOpening?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onMaximize?: ((event?: Event) => void) | undefined;
    onMinimize?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onRestore?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
*/
export declare class TabsWindow extends React.Component<React.HTMLAttributes<Element> & TabsWindowProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines if 'Add New' Tab inside the Tabs element is visible. Applicable only to TabsWindow
    *	Property type: boolean
    */
    get addNewTab(): boolean;
    set addNewTab(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines whether and how the value should be automatically capitalized as it is entered/edited by the user. Applicable only to MultilinePromptWindow.
    *	Property type: WindowAutoCapitalize
    */
    get autoCapitalize(): WindowAutoCapitalize;
    set autoCapitalize(value: WindowAutoCapitalize);
    /** Determines whether element will auto expand when the input overflows vertically. Applicable only to MultilinePromptWindow.
    *	Property type: boolean
    */
    get autoExpand(): boolean;
    set autoExpand(value: boolean);
    /** Determines the label for the 'cancel' button inside the Prompt Window.
    *	Property type: string
    */
    get cancelLabel(): string;
    set cancelLabel(value: string);
    /** Determines the label for the 'Complete' button insinde the Progress Window.
    *	Property type: string
    */
    get completeLabel(): string;
    set completeLabel(value: string);
    /** Determines the label for the 'Confirm' button insinde the Prompt Window.
    *	Property type: string
    */
    get confirmLabel(): string;
    set confirmLabel(value: string);
    /** Determines if the window is collapsed or not. When collapsed the only the header of the window is visible.
    *	Property type: boolean
    */
    get collapsed(): boolean;
    set collapsed(value: boolean);
    /** When a modal window is opened, thid property determines if clicking on the mask closes the window or not.
    *	Property type: boolean
    */
    get closeOnMaskClick(): boolean;
    set closeOnMaskClick(value: boolean);
    /** Determines the data source that will be loaded to the TabsWindow. Applicable only to TabsWindow.
    *	Property type: {label: string, content: string}[]
    */
    get dataSource(): {
        label: string;
        content: string;
    }[];
    set dataSource(value: {
        label: string;
        content: string;
    }[]);
    /** Enables or disables the window.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Enables or disables the window snapping feature.
    *	Property type: boolean
    */
    get disableSnap(): boolean;
    set disableSnap(value: boolean);
    /** Determines how the characters are displayed inside the input. Applicable to Prompt Window.
    *	Property type: WindowDisplayMode
    */
    get displayMode(): WindowDisplayMode;
    set displayMode(value: WindowDisplayMode);
    /** Applicable to TabsWindow when docked inside a DockingLayout Custom Element.  Determines where the window(it's tab items as well) can be dropped inside the DockingLayout.  The property is an array that accepts multiple positions. Note: Positions with prefix 'layout-' are applied to the Tab item children of the TabsWidnow owner that is being dragged. The rest of the positions indicate the allowed drop position inside the hovered target(TabsWindow). Used only by jqxDockingLayout custom elements. Determines the possible drop position inside the DockingLayout. The following values are allowed.
    *	Property type: WindowDropPosition
    */
    get dropPosition(): WindowDropPosition;
    set dropPosition(value: WindowDropPosition);
    /** A callback function defining the new format for the label of the Progress Bar. Applicable only to ProgressWindow.
    *	Property type: any
    */
    get formatFunction(): any;
    set formatFunction(value: any);
    /** Determines the position of the footer of the window element.
    *	Property type: WindowFooterPosition
    */
    get footerPosition(): WindowFooterPosition;
    set footerPosition(value: WindowFooterPosition);
    /** Determines the template for the Dialog section of the window. By default footerTemplate is null.
    *	Property type: any
    */
    get footerTemplate(): any;
    set footerTemplate(value: any);
    /** Set's the buttons that will be visible in the header section.
    *	Property type: string[]
    */
    get headerButtons(): string[];
    set headerButtons(value: string[]);
    /** Determines the template for the Dialog section of the window. By default headerTemplate is null.
    *	Property type: any
    */
    get headerTemplate(): any;
    set headerTemplate(value: any);
    /** Determines the position of the header of the window element.
    *	Property type: TabPosition
    */
    get headerPosition(): TabPosition;
    set headerPosition(value: TabPosition);
    /** Sets additional helper text below the text box. The hint is visible only when the text box is focued. Applicable to Prompt Window.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Sets the value of the Progress bar to indeterminate state(null) and starts the animation. Applicable only to ProgressWindow.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Sets the filling direction of the Progress Bar. Applicable only to ProgressWindow.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** The label of the window that appears in the header area.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** When enabled the resizing operation happens live. By default it's not enabled and during resizing a highlighter around the edges of the window appears to outline  the current size of the element.
    *	Property type: boolean
    */
    get liveResize(): boolean;
    set liveResize(value: boolean);
    /** Applicable only to TabsWindow when used with a DockingLayout custom element.Used only by jqxDockingLayout. Determines the owner jqxDockingLayout  that the window belongs to. When the tabsWindow has been removed from a DockingLayout element, the property is used to indicate that it belongs to that particular Dockinglayout. Accepts a string, representing the ID of a jqxDockingLayout on the page, or an instance of jqxDokcingLayout.
    *	Property type: any
    */
    get layout(): any;
    set layout(value: any);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Applicable only to TabsWindow when docked inside a DockingLayout Custom Element.Determines of the item can be resized or not.
    *	Property type: boolean
    */
    get locked(): boolean;
    set locked(value: boolean);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Determines if the window is maximized or not. When maximized the window covers the whole viewport.
    *	Property type: boolean
    */
    get maximized(): boolean;
    set maximized(value: boolean);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines if the window is modal or not. If true the user can only interact with the window and nothing else on the page.
    *	Property type: boolean
    */
    get modal(): boolean;
    set modal(value: boolean);
    /** Applicable to TabsWindow when docked inside a DockingLayout Custom Element. Determines the max size of the item. Applicable to Progress Window by allowing the user to specify the maximum of the ProgressBar.
    *	Property type: string | number | null
    */
    get max(): string | number | null;
    set max(value: string | number | null);
    /** Applicable to TabsWindow when docked inside DockingLayout Custom Element. Determines the min size of the item. Applicable to Progress Window by allowing the user to specify the minimu of the ProgressBar.
    *	Property type: string | number | null
    */
    get min(): string | number | null;
    set min(value: string | number | null);
    /** Determines if the window is minimized or not. When minimized the window is docked at the bottom left corner of the viewport.
    *	Property type: boolean
    */
    get minimized(): boolean;
    set minimized(value: boolean);
    /** Sets or gets the maximum number of characters that the user can enter. Applicable to Prompt/MultilinePrompt Window.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality. Applicable to Prompt/MultilinePrompt Window.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Determines if the window is visible or not.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines if the window is pinned or not. Pinned window is a window that can't be dragged but can be resized.
    *	Property type: boolean
    */
    get pinned(): boolean;
    set pinned(value: boolean);
    /** Determines the input's placeholder. Applicable to Prompt Window.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines the label for the Input insinde the PromptWindow.
    *	Property type: string
    */
    get promptLabel(): string;
    set promptLabel(value: string);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** When applied a resize indicator is displayed in the bottom right corner of the window and resizing operation can be initiated only from its position.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Determines the resizing mode of the window.  Several modes are available:   none - resizing is disabled.  vertical - vertical resizing is allowed.  horizontal - horizontal resizing is allowed. both - horizontal and vertical resizing is allowed. top - the window can only be resized from the top side. bottom - the window is resizable only from the bottom side. left - the window can be resized only from the left side. right - the window can be resized only from the right side.
    *	Property type: WindowResizeMode
    */
    get resizeMode(): WindowResizeMode;
    set resizeMode(value: WindowResizeMode);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies that the user must fill the input before submitting a form with the text box.Applicable to Prompt Window.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Specifies the message that will appear if required is set and no value is provided in the input. Applicable to Prompt Window.
    *	Property type: string
    */
    get requiredMessage(): string;
    set requiredMessage(value: string);
    /** Determines whether the content of the input will be selected on focus or not. Applicable to Prompt Window.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Sets or gets which tab is selected. Applicable only to TabsWindow.
    *	Property type: number | null
    */
    get selectedIndex(): number | null;
    set selectedIndex(value: number | null);
    /** Determines the way the user can switch between tabs. Applicable only to TabsWindow.
    *	Property type: TabSelectionMode
    */
    get selectionMode(): TabSelectionMode;
    set selectionMode(value: TabSelectionMode);
    /** Indicates the index of the last character in the current selection. Applicable only to MultilinePromptWindow.
    *	Property type: number
    */
    get selectionEnd(): number;
    set selectionEnd(value: number);
    /** Indicates the index to the first character in the current selection. Applicable only to MultilinePromptWindow.
    *	Property type: number
    */
    get selectionStart(): number;
    set selectionStart(value: number);
    /** Enables/Disabled the label for the Progress Bar. Applicable only to Progress Window.
    *	Property type: boolean
    */
    get showProgressValue(): boolean;
    set showProgressValue(value: boolean);
    /** A getter that returns the siblings (that share the same parent) of a LayoutPanel item that is docked inside a DockingLayout. The siblings are also DockingLayout items ( LayoutPanels).Applicable only to TabsWindow when docked inside a DockingLayout.
    *	Property type: any
    */
    get siblings(): any;
    set siblings(value: any);
    /** Applicable to TabsWindow when nested inside a DockingLayout Custom Element. Determines the size of the item.
    *	Property type: string
    */
    get size(): string;
    set size(value: string);
    /** Specifies whether the element is to have its spelling and grammar checked or not. Applicable only to MultilinePromptWindow.
    *	Property type: boolean
    */
    get spellCheck(): boolean;
    set spellCheck(value: boolean);
    /** Sets or gets whether close buttons are displayed inside the Tab Strip of the TabsWindow. Applicable only to TabsWindow.
    *	Property type: boolean
    */
    get tabCloseButtons(): boolean;
    set tabCloseButtons(value: boolean);
    /** Determines if the close button is visible on select or always. Applicable only to TabsWindow.
    *	Property type: WindowTabCloseButtonMode
    */
    get tabCloseButtonMode(): WindowTabCloseButtonMode;
    set tabCloseButtonMode(value: WindowTabCloseButtonMode);
    /** Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. Applicable only to TabsWindow.
    *	Property type: Overflow
    */
    get tabOverflow(): Overflow;
    set tabOverflow(value: Overflow);
    /** Detetmines Tab Strip is positioned of the TabsWindow. Applicable only to TabsWindow.
    *	Property type: TabPosition
    */
    get tabPosition(): TabPosition;
    set tabPosition(value: TabPosition);
    /** Sets or gets the position of the scroll buttons inside the Tab header of the TabsWindow. Applicable only to TabsWindow.
    *	Property type: LayoutPosition
    */
    get tabScrollButtonsPosition(): LayoutPosition;
    set tabScrollButtonsPosition(value: LayoutPosition);
    /** Sets or gets the orientation of the text in the tabs labels of the TabsWindow. Applicable only to TabsWindow.
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
    /** Determines the value of the TextBox/ProgressBar inside the Dialog/Prompt/Progress Window
    *	Property type: string | number
    */
    get value(): string | number;
    set value(value: string | number);
    /** Determines the actual parent of the element. The window can size and move only in the area of that element.
    *	Property type: any
    */
    get windowParent(): any;
    set windowParent(value: any);
    /** Indicates how the input wraps text. Applicable only to MultilinePromptWindow.
    *	Property type: WindowWrap
    */
    get wrap(): WindowWrap;
    set wrap(value: WindowWrap);
    get properties(): string[];
    /**  This event is triggered just before the window starts opening.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is opened( visible ).
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the window starts closing.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is closed( hidden )
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when window's dragging is ended.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when window's dragging is started.
    *  @param event. The custom event. 	*/
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is expanded.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is maximized.
    *  @param event. The custom event. 	*/
    onMaximize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is minimized.
    *  @param event. The custom event. 	*/
    onMinimize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when window's resizing is ended.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when window's resizing is started.
    *  @param event. The custom event. 	*/
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is restored to it's previous state before maximization.
    *  @param event. The custom event. 	*/
    onRestore?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a tabitem to the end of the list of tab items inside element.
    * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: Node): Promise<any>;
    /** Sets the window to the top level so the user can interact with it.
    */
    bringToFront(): void;
    /** Clears the content of the Window.
    */
    clear(): void;
    /** Closes the window.
    */
    close(): void;
    /** Collapses the window.
    * @returns {HTMLElement}
  */
    collapse(): Promise<any>;
    /** Makes sure a tab item is visible by scrolling to it. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to scroll to.
    */
    ensureVisible(index: number): void;
    /** Expands the window after being collapsed.
    * @returns {any[]}
  */
    expand(): Promise<any>;
    /** Inserts a new tab and an associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index to insert a new tab at.
    * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
    */
    insert(index: number, details: any): void;
    /** Inserts the specified "smart-tab-item" node before the reference "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} newNode. The "jqx-tab-item" node to insert.
    * @param {Node | null} referenceNode?. The "jqx-tab-item" node before which newNode is inserted.
    * @returns {Node}
  */
    insertBefore(newNode: Node, referenceNode?: Node | null): Promise<any>;
    /** Removes a tab and its associated content section. Applicable only to TabsWindow.
    * @param {number} index. The index of the tab to remove.
    */
    removeAt(index: number): void;
    /** Removes a child "smart-tab-item" node. Applicable only to TabsWindow.
    * @param {Node} node. The "jqx-tab-item" node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Maximizes the window to fill the area.
    */
    maximize(): void;
    /** Minimizes the window.
    */
    minimize(): void;
    /** Opens the window
    */
    open(): void;
    /** Pins the window. Disables window dragging.
    */
    pin(): void;
    /** Restores the window to it's previous size before maximization/minimization.
    */
    restore(): void;
    /** Selects a tab.  Applicalbe only to TabsWindow elements.
    * @param {number} index. The index of the tab to select.
    */
    select(index: number): void;
    /** Unpins the window. Enables window dragging.
    */
    unpin(): void;
    /** Updates a tab and its associated content section.  Applicalbe only to TabsWindow elements.
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
export default TabsWindow;
