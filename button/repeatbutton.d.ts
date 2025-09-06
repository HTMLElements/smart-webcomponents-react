import React from "react";
import { RepeatButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { RepeatButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
declare let Smart: any;
export { Smart };
export interface RepeatButtonProps extends RepeatButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
export declare class RepeatButton extends React.Component<React.HTMLAttributes<Element> & RepeatButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Gets or sets the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, specifying a different value will enable and control the element’s animation behavior according to the selected mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Defines how the button responds to user click interactions, determining whether actions are triggered on mouse press, release, or other specific conditions.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Specifies the amount of time, in milliseconds, to wait between each repeated action or event. This determines how long the system pauses before triggering the repeat again.
    *	Property type: number
    */
    get delay(): number;
    set delay(value: number);
    /** Controls whether the ratio button is visible and can be interacted with. When enabled, users can use the ratio button; when disabled, the button is hidden or inactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the amount of time, in milliseconds, to wait before starting the first repeat iteration. This delay occurs only before the initial repetition and does not affect subsequent iterations.
    *	Property type: number
    */
    get initialDelay(): number;
    set initialDelay(value: number);
    /** Assigns the specified HTML markup to the element's inner content, replacing all existing child elements and text. Be cautious when inserting dynamic content to avoid potential security risks such as cross-site scripting (XSS).
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Sets or retrieves the unlockKey used to authorize and enable access to the product. This key is required to unlock product features or functionalities that are otherwise restricted.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") used for localizing content. This property works together with the messages property to determine which set of translations or text strings to display based on the selected language. Setting this value controls which messages from the messages object are shown to users.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update interface text based on the selected locale.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object containing string values that represent the various states of password strength, such as "weak," "medium," and "strong." Each property in the object corresponds to a specific password strength level, allowing for the customization of messages or labels displayed to users based on the evaluated strength of their password.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Retrieves the current name of the widget or assigns a new name to the widget. This property allows you to identify and reference the widget programmatically.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When the custom element is set to "readonly", all user interactions—such as input, edits, or selection—are disabled. The element's content is visible but cannot be modified or interacted with by the user. This ensures that the data remains unchanged while still allowing it to be displayed.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be removed from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard (e.g., by pressing the Tab key), enhancing accessibility control.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the widget or retrieves its current value, allowing for both updating and accessing the widget's data.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered each time the user clicks on the specified element. It occurs after a complete click action, which includes both the pressing and releasing of the mouse button (typically the left button) over the element. The event provides access to click-related information, such as the mouse position and any modifier keys pressed during the click.
    *  @param event. The custom event. 	*/
    onClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
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
export default RepeatButton;
