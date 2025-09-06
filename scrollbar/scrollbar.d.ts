import React from "react";
import { ScrollBarProperties } from "./../index";
import { Animation, DragMechanicalAction, Orientation } from './../index';
export { ScrollBarProperties } from "./../index";
export { Animation, DragMechanicalAction, Orientation } from './../index';
declare let Smart: any;
export { Smart };
export interface ScrollBarProps extends ScrollBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export declare class ScrollBar extends React.Component<React.HTMLAttributes<Element> & ScrollBarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the current animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' disables all animations; other values will enable and determine the type of animation applied.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element as intended. When disabled, the element becomes unresponsive to user input and typically appears visually distinct to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines or retrieves the value of the scrollbar's large step increment. This large step value determines how much the scrollbar's position changes when the user clicks in the track area between the scrollbar's thumb (slider) and one of its arrow buttons. When the left mouse button is pressed in this area, the scrollbar advances or retreats by the specified large step amount, enabling quicker navigation through the content compared to single-step arrow button clicks.
    *	Property type: number
    */
    get largeStep(): number;
    set largeStep(value: number);
    /** Gets or sets the 'unlockKey' property, which is a unique key used to activate or unlock access to the product’s features or functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which language is used for displaying messages, working in conjunction with the messages property to select the appropriate set of localized text based on the specified language code (e.g., "en", "fr", "es").
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Invokes a callback function associated with the localization module, typically used to handle events or actions such as language changes, text translations, or updates to localized content within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum scrollable value of the scrollbar, determining the highest position to which the scrollbar thumb can be moved. This value defines the upper limit of the scrollable content range.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Specifies or retrieves the type of mechanical action applied to the element. Mechanical action determines the exact moment when the element's value is updated—such as immediately upon interaction, after a confirmation (like releasing a button), or according to specific user actions. This property allows you to control how and when changes to the element’s value are registered and processed within the application.
    *	Property type: DragMechanicalAction | string
    */
    get mechanicalAction(): DragMechanicalAction | string;
    set mechanicalAction(value: DragMechanicalAction | string);
    /** Defines an object containing string values that represent the various states of password strength (e.g., weak, medium, strong). Each key in the object corresponds to a specific strength level, allowing for customized messages or labels based on the user's password strength status.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves the lowest possible value that the scrollbar can represent, determining the starting point of the scrollbar's range.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies or retrieves the orientation of the scrollbar, determining whether it is displayed horizontally or vertically.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** If the element has the readonly attribute, users will be able to see its value but will not be able to modify, edit, or otherwise interact with its contents through input actions. However, the element may still be focusable and its value can be changed programmatically using scripts.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that specifies whether the element's content alignment is optimized for languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. When enabled, the element's layout, text direction, and associated styles are adjusted to properly support RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls the visibility of scrollbar buttons. When set, this property determines whether the scrollbar's increment and decrement buttons (commonly arrow buttons at the ends of the scrollbar) are shown or hidden. It can be used to either display or hide these buttons programmatically, and can also be queried to retrieve the current visibility state.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Defines or retrieves the increment by which the scrollbar's value changes when a user clicks on the scrollbar's arrow (stepper) buttons. This value determines how much the scroll position increases or decreases with each button press, allowing for precise control over scrolling granularity.
    *	Property type: number
    */
    get step(): number;
    set step(value: number);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance, including colors, typography, and overall styling, ensuring a consistent and cohesive look for the element within the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via tab navigation or programmatically using focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the widget or retrieves its current value, depending on how the method is invoked. This allows you to programmatically update the widget's data or access its existing data as needed.
    *	Property type: number
    */
    get value(): number;
    set value(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the value of the associated element is modified by the user or programmatically. It occurs immediately after the value has changed, allowing you to perform custom actions in response to the update.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	min, 	max)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    *   min - A numeric value indicating the min scroll position.
    *   max - A numeric value indicating the max scroll position.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Re-renders the element by updating its visual presentation on the screen, ensuring that any recent changes to its properties, styles, or content are accurately reflected in the user interface.
    */
    refresh(): void;
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
export default ScrollBar;
