import React from "react";
import { TooltipProperties } from "./../index";
import { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition } from './../index';
export { TooltipProperties } from "./../index";
export { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface TooltipProps extends TooltipProperties {
    className?: string;
    style?: React.CSSProperties;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export declare class Tooltip extends React.Component<React.HTMLAttributes<Element> & TooltipProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Allows you to specify or retrieve the current animation mode. Set this property to 'none' to disable all animations. When assigned other valid values, it enables the corresponding animation effects for the element or component.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the alignment of the tooltip relative to its target element, such as positioning it above, below, to the left, or to the right of the target. This setting controls where the tooltip appears in relation to the element it is associated with.
    *	Property type: string
    */
    get align(): string;
    set align(value: string);
    /** Determines whether the tooltip's arrow is displayed. Setting this property to true will show the arrow pointing to the anchor element, while setting it to false will hide the arrow. This enhances tooltip visibility and contextual association with the target element.
    *	Property type: boolean
    */
    get arrow(): boolean;
    set arrow(value: boolean);
    /** Specifies the location or alignment of the arrow relative to its parent element, determining where the arrow will appear (such as top, bottom, left, right, or center) within the component or tooltip.
    *	Property type: TooltipArrowDirection | string
    */
    get arrowDirection(): TooltipArrowDirection | string;
    set arrowDirection(value: TooltipArrowDirection | string);
    /** Determines whether the tooltip's arrow is displayed. When set to true, an arrow will appear pointing from the tooltip to its target element; when set to false, the tooltip will be shown without an arrow. This property can be used to customize the visual connection between the tooltip and its anchor element.
    *	Property type: number
    */
    get delay(): number;
    set delay(value: number);
    /** Controls whether the tooltip is displayed. When enabled, the tooltip appears when users hover over or interact with the associated element. When disabled, the tooltip is hidden and does not appear under any circumstances.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the horizontal (X) and vertical (Y) offset values, allowing you to adjust the position of an element relative to its original location. The X value shifts the element left or right, while the Y value moves it up or down.
    *	Property type: number[]
    */
    get offset(): number[];
    set offset(value: number[]);
    /** Sets or retrieves the unlockKey used to grant access to the product. The unlockKey acts as an authorization token or code required to unlock and enable the product’s features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property will be used. Changing this value updates the displayed content to match the selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically invoked to handle language changes, region-specific formatting, or to update interface text based on the selected locale.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the localized text strings used within the widget interface. This property allows you to customize the displayed text for different languages or regions, and works together with the language property to support localization and internationalization of the widget's UI elements.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies or retrieves the method by which the tooltip is activated, such as on hover, focus, or click events.
    *	Property type: TooltipOpenMode | string
    */
    get openMode(): TooltipOpenMode | string;
    set openMode(value: TooltipOpenMode | string);
    /** Specifies or retrieves the placement of the tooltip relative to its associated element. This determines where the tooltip appears, such as above, below, to the left, or to the right of the target element.
    *	Property type: TooltipPosition | string
    */
    get position(): TooltipPosition | string;
    set position(value: TooltipPosition | string);
    /** Specifies the HTML element that will act as the trigger for displaying the tooltip. When the user interacts with this element (such as by hovering, focusing, or clicking—depending on configuration), the tooltip will appear.
    *	Property type: string | HTMLElement
    */
    get selector(): string | HTMLElement;
    set selector(value: string | HTMLElement);
    /** Specifies the theme applied to the element. The theme controls the element’s overall appearance, including colors, fonts, and stylistic details, ensuring a consistent visual presentation throughout the interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies a custom template for rendering the tooltip content, allowing you to define the layout, styling, and dynamic data displayed within the tooltip.
    *	Property type: any
    */
    get tooltipTemplate(): any;
    set tooltipTemplate(value: any);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets the current value of the widget or sets a new value for the widget. This property allows you to retrieve the widget's existing value or update it programmatically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Controls whether the tooltip is visible or hidden. When set, this property determines if the tooltip is displayed to the user; when accessed, it returns the current visibility status of the tooltip.
    *	Property type: boolean
    */
    get visible(): boolean;
    set visible(value: boolean);
    get properties(): string[];
    /**  This event is triggered immediately when the tooltip becomes visible to the user, indicating that the tooltip has been successfully opened and is now displayed on the screen. This can be used to perform additional actions, such as loading content or tracking analytics, when a tooltip appears.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is dispatched immediately before the tooltip becomes visible to the user. By calling event.preventDefault() within the event handler, you can cancel the tooltip from opening, allowing you to implement custom logic or conditions before the tooltip is displayed.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately after the tooltip has been closed, either by user interaction or programmatically. It signals that the tooltip is no longer visible in the user interface and can be used to perform cleanup operations or update other components in response to the tooltip's dismissal.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired immediately before the tooltip is about to close. It provides an opportunity to perform actions or validations before the tooltip is hidden. By calling event.preventDefault(), you can cancel the closing of the tooltip, keeping it visible until the action is allowed to proceed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the smart-tooltip component, removing the tooltip from view and disabling any tooltip functionality associated with the target element.
    */
    close(): void;
    /** Displays the smart-tooltip component, providing contextual information or guidance to the user when triggered.
    */
    open(): void;
    /** Enables or disables the smart-tooltip component, controlling whether tooltips are displayed or hidden for the specified elements. This toggle function allows developers to dynamically show or hide helpful tooltip information in the user interface based on user interaction or application state.
    */
    toggle(): void;
    /** Removes all content currently displayed within the Tooltip, restoring it to an empty state and ensuring no text, HTML, or interactive elements remain visible.
    */
    clear(): void;
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
export default Tooltip;
