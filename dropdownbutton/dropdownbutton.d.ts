import React from "react";
import { DropDownButtonProperties } from "./../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility } from './../index';
export { DropDownButtonProperties } from "./../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility } from './../index';
declare let Smart: any;
export { Smart };
export interface DropDownButtonProps extends DropDownButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
export declare class DropDownButton extends React.Component<React.HTMLAttributes<Element> & DropDownButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the component. When set to 'none', all animations are disabled. You can retrieve the current animation mode by getting this property, or change it by setting a new value. Use this property to control whether and how animations are applied to the component’s visual updates.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the time delay (in milliseconds) before the dropdown menu automatically closes when the dropDownOpenMode property is set to 'auto'. This allows you to control how long the dropdown remains visible after it has been opened and no further interactions are detected.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Determines whether the element is interactive or non-interactive. When enabled, users can interact with the element as intended. When disabled, the element becomes inactive, usually appearing visually distinct and not responding to user input or events.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the parent container for the dropDown popup element. This option is useful when a CSS property (such as overflow, z-index, or positioning) applied to one of the ancestor elements is affecting the display or visibility of the dropDown. By setting the parent container explicitly, you can ensure the dropDown renders correctly and is not hidden or clipped by conflicting CSS styles of its parent elements.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, center, or another defined position within the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. When set, this value overrides the default height controlled by CSS variables. By default, the property is an empty string, allowing the component to use CSS variables for height. Use this property to manually set the dropdown height in environments where CSS variables are not supported by the browser.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the maximum height of the dropdown menu. By default, the value is an empty string, which allows the component to use CSS variables for height customization. If you need to support browsers that do not support CSS variables, explicitly set this property to the desired height (e.g., '300px'). This ensures the dropdown displays with the correct maximum height even in environments without CSS variable support.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Specifies the maximum width of the dropdown menu. By default, this property is an empty string, meaning the component relies on CSS variables to define its width. You should set this property only if the browser you are targeting does not support CSS variables. In such cases, provide a valid CSS value (e.g., "300px" or "50%") to explicitly set the maximum width of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Specifies the minimum height of the dropdown component. By default, this property is set to an empty string, which allows the component to use CSS variables for height management. If the browser does not support CSS variables, you can manually assign a specific minimum height using this property to ensure proper rendering.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Specifies the minimum width of the dropdown menu. By default, this property is set to an empty string, allowing the component to use CSS variables for styling. If the browser does not support CSS variables, you should provide a specific value (e.g., '200px') for this property to ensure proper rendering and consistent appearance across all browsers.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Specifies the direction or behavior in which the dropdown menu will appear when activated (e.g., opening above, below, to the left, or to the right of the trigger element). This setting controls the initial placement and animation of the dropdown when it is opened.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** When this property is enabled, opening the element's dropdown will render a transparent overlay that appears beneath the dropdown menu but above the rest of the document. This overlay separates the dropdown from the underlying page content, typically preventing interactions with other elements outside the dropdown while it is open.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the placeholder text that is displayed within the dropdown menu when no option has been selected or when the dropdown is empty. This text provides guidance or context to the user about the expected input or selection.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Specifies the vertical placement of the dropdown menu relative to its trigger element. When set to 'auto', the dropdown automatically selects the optimal position (above or below the trigger) based on the available space in the viewport, ensuring that the menu is fully visible and not clipped by the window edges.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the width of the dropdown menu. By default, this property is an empty string, allowing the component to use CSS variables for width. If you need to support browsers that do not support CSS variables, set this property explicitly to define the dropdown’s width. Otherwise, leave it empty to leverage CSS variable-based styling.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Provides supplementary helper text displayed beneath the element. This hint appears only when the element is focused, offering contextual guidance to users during interaction.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Controls whether a horizontal scroll bar is displayed within the dropdown menu, allowing users to scroll horizontally if the dropdown’s content exceeds the available width.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Displays a label positioned above the element. The label remains constantly visible, providing context or instructions regardless of the element’s state (focused, filled, or empty).
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Defines or retrieves the unlockKey, a unique code required to access or activate the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting, determining which language is used for displaying messages. This property works in tandem with the messages property to select the appropriate set of localized messages based on the chosen language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define how messages returned by the Localization Module are formatted. Use this to customize the structure, content, or styling of localized messages before they are displayed or processed in your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object that contains the localized text strings used throughout the widget interface. This property enables customization of all user-facing text to support different languages and regions. It is typically used together with the locale property to display the widget in the selected language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies whether the popup is currently visible (open) or hidden (closed) on the screen.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears within the action button container of the element. This text provides guidance or context to the user before any action is taken or value is entered.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies the template used as the placeholder within the element's action button container. Accepts a string (displayed as plain text), a function (which returns the desired content dynamically), or an HTMLTemplateElement (allowing for custom HTML markup). This template defines what users see in the action button area when no action is selected or before an action is initiated.
    *	Property type: any
    */
    get placeholderTemplate(): any;
    set placeholderTemplate(value: any);
    /** Prevents users from interacting with the element, disabling all mouse, keyboard, and touch events such as clicking, typing, or tapping. The element remains visible but does not respond to any user input or actions.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies whether the resize indicator, located in the bottom-right corner of the element, is displayed to users. When enabled, users can see and interact with the indicator to manually resize the element; when disabled, the indicator is hidden and resizing via this handle is not available.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Specifies whether the drop-down menu is resizable by the user. If resizing is enabled, a resize bar will appear on either the top or bottom edge of the drop-down. Users can click and drag this bar to adjust the height of the drop-down menu according to their preference.
    *	Property type: ResizeMode | string
    */
    get resizeMode(): ResizeMode | string;
    set resizeMode(value: ResizeMode | string);
    /** Sets or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in languages such as Arabic and Hebrew. This property ensures proper display and alignment of content for locales that use RTL scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme for the element, which controls its overall appearance, including colors, fonts, and visual style. The selected theme determines how the element is visually presented to users.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus, either by tabbing or programmatically.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Controls whether the vertical scroll bar is displayed, allowing users to scroll vertically when content exceeds the visible area. This setting can enable, disable, or automatically show the scroll bar based on content overflow.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    get properties(): string[];
    /**  This event is triggered when the user clicks on the action button. The action button becomes visible only when the placeholder property is defined. Use this event to handle custom logic in response to user actions.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown menu is closed, either by user interaction (such as clicking outside the dropdown or selecting an option) or programmatically via code. It can be used to perform actions or cleanup tasks after the dropdown is no longer visible.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the dropdown list is closed. Within the event handler, you have the opportunity to prevent the dropdown from closing by calling event.preventDefault(). This allows you to implement custom logic—such as validating input or prompting the user—before the dropdown is dismissed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user interacts with the dropdown component by clicking the dropdown button. It signals the opening or toggling of the dropdown menu, allowing you to execute custom logic in response to user engagement with the dropdown interface.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time the drop-down menu becomes visible to the user, such as when a user clicks on the drop-down control to expand it and reveal its list of options. It does not fire if the drop-down is already open or when it is closed. Use this event to perform actions that need to occur immediately after the drop-down is displayed.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the dropdown menu is opened, providing an opportunity to intervene in the opening process. Within the event handler, you can call event.preventDefault() to cancel the dropdown from opening. This is useful for implementing custom logic, such as validating conditions before the dropdown is displayed or preventing the dropdown from opening based on user interactions or application state.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user initiates the resizing action on the dropdown component, such as clicking and dragging a resize handle. It marks the beginning of the user's interaction to adjust the dropdown's size.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user completes resizing the dropdown menu, indicating that the resizing action has ended and the final dimensions of the dropdown have been set.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new HTML element as a child to the dropdown menu, placing it at the end of the existing list of dropdown items.
    * @param {Node} node. The node to be appended
    * @returns {Node}
  */
    appendChild(node: Node): any;
    /** Closes the drop-down menu, hiding its list of options from view and resetting its open state to false.
    */
    close(): void;
    /** Displays the drop-down menu, making its options visible and accessible to the user.
    */
    open(): void;
    /** Clears all items from the dropdown menu, resulting in an empty list with no selectable options.
    */
    removeAll(): void;
    /** Removes a specified child node from the dropdown menu, effectively deleting the selected option or item from the list of available choices displayed to the user.
    * @param {Node} node. The node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): any;
    /** Scrolls the dropdown menu to a specified vertical position, ensuring that the desired item or area within the dropdown is brought into view for the user. This function is useful for highlighting or accessing items that are not currently visible due to scrolling.
    * @param {number} top. Y axis coordinate
    * @param {number} left. X axis coordinate
    */
    scrollTo(top: number, left: number): void;
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
export default DropDownButton;
