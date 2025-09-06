import React from "react";
import { ProgressBarProperties } from "./../index";
import { Animation, Orientation } from './../index';
export { ProgressBarProperties } from "./../index";
export { Animation, Orientation } from './../index';
export { CircularProgressBar } from './circularprogressbar';
export { CircularProgressBarProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface ProgressBarProps extends ProgressBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export declare class ProgressBar extends React.Component<React.HTMLAttributes<Element> & ProgressBarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and the element will not perform any animated transitions. Otherwise, specifying a different value enables the corresponding animation behavior.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled). When set to true, the element is disabled and cannot be interacted with; when set to false, the element remains enabled and fully functional.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the Progress bar’s value to the indeterminate state (by assigning null), which triggers and starts the loading animation. In the indeterminate state, the Progress bar does not display a fixed value but instead shows a continuous animation to indicate ongoing activity or loading without specifying progress percentage.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Specifies the direction in which the Progress Bar fills as its value increases, such as left to right, right to left, top to bottom, or bottom to top.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Gets or sets the unlockKey property, which serves as the authorization code required to activate and access the product’s full features.
    *	Property type: {(value: number): string}
    */
    get formatFunction(): {
        (value: number): string;
    };
    set formatFunction(value: {
        (value: number): string;
    });
    /** Defines or retrieves the current language setting for the component. This property determines which language is used for displaying text and messages, and works together with the messages property to select the appropriate localized strings. Adjusting this property updates the displayed language dynamically based on the provided message translations.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Callback function associated with the localization module, typically invoked to handle language changes, load localized resources, or update content based on the selected locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines the highest value that the progress bar can represent, establishing the upper limit for progress tracking. This value determines when the progress bar is considered 100% complete.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object containing string values that represent the various states of password strength (e.g., "weak", "medium", "strong"). These values can be used to display contextual feedback to users based on the evaluated strength of their password.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Defines the lowest allowable value for the progress bar, representing the starting point from which progress is measured. This sets the minimum boundary for the progress indicator’s range.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies whether the progress bar is displayed horizontally or vertically. Adjusting this property changes the direction in which the progress indicator fills.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Specifies or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, typically used for languages such as Arabic or Hebrew. When enabled, the element's content and layout will be adjusted to accommodate RTL locales.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** Controls the visibility of the label for the Progress Bar. When enabled, the label will be displayed; when disabled, the label will be hidden.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme that controls the visual style and appearance of the element, including aspects such as colors, fonts, and overall design. Selecting a theme customizes how the element is displayed to users.
    *	Property type: boolean
    */
    get showProgressValue(): boolean;
    set showProgressValue(value: boolean);
    /** If set to true, this property prevents the element from receiving keyboard focus, making it unreachable via keyboard navigation such as the Tab key.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Retrieves the current value of the progress bar or sets it to a specified value, updating the visual representation accordingly. This value typically indicates the progress of a task as a numeric value within a defined range (e.g., 0 to 100).
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
    /**  This event is triggered whenever the value of the associated input or component is modified by the user or via programmatic changes. It provides an opportunity to respond in real time to updates, such as validating input, updating the UI, or synchronizing data with other components.
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
export default ProgressBar;
