import React from "react";
import { CircularProgressBarProperties } from "./../index";
import { Animation } from './../index';
export { CircularProgressBarProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
export interface CircularProgressBarProps extends CircularProgressBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Progress Bar displayed as a circle.
*/
export declare class CircularProgressBar extends React.Component<React.HTMLAttributes<Element> & CircularProgressBarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. For other values, animations are enabled according to the specified mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element is active and can receive user input; when disabled, the element is inactive and user interaction is prevented.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the value of the Circular Progress bar to an indeterminate state (null), indicating that progress is ongoing without a specific completion percentage. This action also initiates the progress bar’s continuous animation, signaling that a task is in progress but the duration or endpoint is unknown.
    *	Property type: {(value: number): string}
    */
    get formatFunction(): {
        (value: number): string;
    };
    set formatFunction(value: {
        (value: number): string;
    });
    /** Specifies the direction in which the Circular Progress Bar fills as progress increases, such as clockwise or counterclockwise.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Retrieves or assigns the unlockKey, a unique value required to unlock access to the product features or content.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Specifies or retrieves the current language in use. This property is typically used together with the messages property to determine which set of localized messages should be displayed based on the selected language. Setting this property changes the language context for retrieving appropriate translated content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Callback function associated with the localization module, typically used to handle events or processes such as language changes, translation updates, or formatting adjustments based on user locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines the maximum value that the progress bar can represent, determining the upper limit for the progress indicator. Values above this threshold will be capped at this maximum.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing customizable strings used throughout the widget’s user interface, enabling support for multiple languages. This property works together with the locale property to provide localized text displayed in the widget, such as labels, tooltips, and messages. Use this object to supply translations and override the default UI text for different languages or regions.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Defines the lowest value that the progress bar can represent, establishing the starting point of the progress range. This value determines the minimum limit for the progress indicator.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Controls whether the label is displayed on the Progress Bar. When enabled, the label will be shown; when disabled, the label will be hidden.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Sets or retrieves a value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. This property ensures the element displays content appropriately for RTL locales.
    *	Property type: boolean
    */
    get showProgressValue(): boolean;
    set showProgressValue(value: boolean);
    /** Specifies the theme to be applied to the element, controlling its overall visual appearance—including colors, fonts, and styling. The selected theme determines how the element is displayed, ensuring consistency with the application's design guidelines.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or programmatic focus calls.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or retrieves the current numerical value of the progress bar, representing the completion level of the task as a number within the defined minimum and maximum range.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** undefined
    *	Property type: number
    */
    get value(): number;
    set value(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the value associated with this element changes, either through user input or programmatic updates. It allows you to respond dynamically whenever the value is modified.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
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
export default CircularProgressBar;
