import React from "react";
import { ToastProperties } from "./../index";
import { Animation, ToastPosition, ToastType } from './../index';
export { ToastProperties } from "./../index";
export { Animation, ToastPosition, ToastType } from './../index';
declare let Smart: any;
export { Smart };
export interface ToastProps extends ToastProperties {
    className?: string;
    style?: React.CSSProperties;
    onItemClick?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onSwipebottom?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onSwipetop?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
*/
export declare class Toast extends React.Component<React.HTMLAttributes<Element> & ToastProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled. Otherwise, specifying a valid animation mode enables corresponding transition effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Defines the container element in which new toast notifications will appear. The value can be either an HTMLElement directly, or a string representing the id of a DOM element. This property determines where toast items are rendered in the DOM.Note: When used together with the modal and position properties, container takes precedence over position but has lower priority than modal. This means that if modal is enabled, it overrides container; if not, the specified container is used instead of the position property.
    *	Property type: string
    */
    get appendTo(): string;
    set appendTo(value: string);
    /** Determines whether the toast notification will automatically close after the duration specified by the autoCloseDelay property. If enabled, the toast will dismiss itself once the set time has elapsed; otherwise, it will remain visible until manually closed by the user.
    *	Property type: boolean
    */
    get autoClose(): boolean;
    set autoClose(value: boolean);
    /** Specifies or retrieves the time interval (in milliseconds) after which the toast notification will automatically dismiss itself. This property is effective only when the autoClose property is set to true; otherwise, the toast will remain visible until manually closed.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Determines whether the toast notification should automatically appear as soon as the widget is initialized, without requiring any user interaction or additional trigger.
    *	Property type: boolean
    */
    get autoOpen(): boolean;
    set autoOpen(value: boolean);
    /** When the disabled property is set to true, all user interactions with toast items—such as clicking, hovering, or dismissing—will be prevented. The toast items will appear inactive and will not respond to any user actions until disabled is set to false.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies a custom CSS class name or multiple class names to override the default icon styling. To apply multiple classes, separate each class name with a space (e.g., "fa fa-user"). This property is particularly useful when integrating icons from third-party icon libraries like Bootstrap Icons, Font Awesome, or Material Icons, allowing you to fully control the icon's appearance by leveraging external style definitions.
    *	Property type: string
    */
    get iconClass(): string;
    set iconClass(value: string);
    /** Allows you to add one or more custom CSS classes to Toast items by specifying class names separated with spaces. This enables you to style individual Toasts using predefined classes from third-party CSS frameworks (such as Bootstrap), or your own custom styles, for greater flexibility and consistency in appearance.
    *	Property type: string
    */
    get itemClass(): string;
    set itemClass(value: string);
    /** Defines a custom template for rendering each item, allowing you to control the appearance and structure of items displayed in the list or component. This enables the use of personalized HTML, styling, and dynamic content for each item, rather than relying on the default rendering format.
    *	Property type: string
    */
    get itemTemplate(): string;
    set itemTemplate(value: string);
    /** Defines or retrieves the unlockKey, a unique value required to activate or gain access to the product’s features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for localization purposes. This property determines which set of translations from the messages object is used, ensuring that the appropriate language-specific content is displayed or accessed.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function used by the localization module to handle language-specific operations, such as loading translation files, switching languages, or updating localized content dynamically within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing customizable text strings used throughout the widget’s user interface, enabling localization and internationalization of displayed messages, labels, and prompts. Typically used alongside the locale property to support multiple languages and regional formats. This property allows developers to override default strings with translations or custom wording suitable for different locales.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** When modal mode is enabled, the toast notification is displayed at the center of the screen, overlaying all other page content. The modal property takes precedence over both the position and appendTo properties. If modal is set to true, any values specified for position and appendTo will be ignored, and the toast will always appear centered in a modal overlay.
    *	Property type: boolean
    */
    get modal(): boolean;
    set modal(value: boolean);
    /** Specifies the area of the browser window where the toast notification will be displayed (for example, "top-right" or "bottom-center"). Note: This position setting is ignored if the appendTo property is defined or if modal mode is enabled, as these options control the toast’s placement instead.
    *	Property type: ToastPosition | string
    */
    get position(): ToastPosition | string;
    set position(value: ToastPosition | string);
    /** If the element has the "readonly" attribute, users cannot modify its value; the content is visible but cannot be changed or edited through user input. However, users may still be able to interact with the element in limited ways, such as copying its text, but any form of altering the value is disabled.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Defines or retrieves a value that specifies whether the element's alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's layout and text direction are modified to accommodate locales that use RTL scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines whether the close button is displayed on the toast notification. When set to true, the close button appears, allowing users to manually dismiss the toast. When set to false, the close button is hidden, and the toast can only be dismissed programmatically or by other means. This property can be used to retrieve the current visibility state or update it as needed.
    *	Property type: boolean
    */
    get showCloseButton(): boolean;
    set showCloseButton(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance of the element, including colors, fonts, and overall styling, ensuring a consistent look and feel throughout the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Applies custom CSS styles and assigns a designated icon to each toast notification item for improved appearance and user experience.
    *	Property type: ToastType | null | string
    */
    get type(): ToastType | null | string;
    set type(value: ToastType | null | string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation or programmatic focus methods (such as calling element.focus()).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Assigns a specific text value to the toast notification, determining the message displayed to users within the toast item.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when a user clicks on a toast notification. It allows you to execute custom logic in response to the user's interaction with the toast item, such as redirecting to a specific page, dismissing the notification, or performing other actions.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a toast notification is closed, either by user interaction (such as clicking the close button) or programmatically through code. It allows developers to execute custom logic or cleanup actions after the toast has been dismissed from the user interface.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time a toast notification becomes visible to the user, indicating that the toast item has been fully opened and is now displayed on the screen.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user performs a swipe-down gesture (swipe bottom) on a toast notification item. It can be used to detect and handle user interactions that involve dismissing or interacting with toast messages via a downward swipe.
    *  @param event. The custom event. 	*/
    onSwipebottom?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user performs a swipe left gesture on a toast notification item. It allows you to execute custom actions in response to the swipe left interaction with the toast component.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user performs a swipe-right gesture on a toast notification item. It allows you to handle interactions that occur specifically when the user swipes right on a toast component.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user performs an upward swipe gesture (swipe top) on a toast notification item.
    *  @param event. The custom event. 	*/
    onSwipetop?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes all currently displayed toast notifications, ensuring that any active toast messages are dismissed from the user interface.
    */
    closeAll(): void;
    /** Closes a specific toast notification. This action targets and dismisses the designated toast message from the user interface, ensuring that only the selected toast item is removed without affecting others.
    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
    */
    closeItem(item: HTMLElement | string): void;
    /** Closes the most recently displayed toast notification, removing it from the user's view.
    */
    closeLast(): void;
    /** Displays a new toast notification and returns the corresponding smart-toast-item instance representing the newly created toast. This allows further manipulation or customization of the toast after it appears.
    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
    * @returns {HTMLElement}
  */
    open(value?: HTMLElement | string, iconType?: string): any;
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
export default Toast;
