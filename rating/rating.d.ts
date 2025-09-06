import React from "react";
import { RatingProperties } from "./../index";
import { Animation } from './../index';
export { RatingProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
export interface RatingProps extends RatingProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Rating allows you to input a rating. It is broadly used in applications with reviews.
*/
export declare class Rating extends React.Component<React.HTMLAttributes<Element> & RatingProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Gets or sets the animation mode for the component. When this property is set to 'none', all animations are disabled, and transitions will occur instantly without any animated effects. Use this property to enable, disable, or modify the animation behavior as needed.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Prevents any user interaction with the element, making it unresponsive to mouse, keyboard, and touch events such as clicks, focus, or input. The element will appear visually inactive and will not trigger any associated event handlers.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets or sets the unlockKey property, which serves as the credential required to unlock and activate the product’s full functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which localized set of messages (defined in the messages property) will be used for display and communication. Use this property to dynamically change the language of the interface by updating it in conjunction with the messages object.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A function that allows you to customize how messages are formatted before they are returned by the Localization Module. This callback receives the original message and any associated variables, enabling you to adjust the output format, apply additional logic, or support advanced localization requirements.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the total number of stars to display in the rating component. This value controls how many individual star icons are shown, allowing users to select a rating between 1 and the specified number.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Specifies or retrieves an object containing the localized strings used by the element. This property allows you to define text labels, messages, or other UI strings that can be translated based on the user's language or region. It is typically used together with the locale property to display the appropriate translations for different locales.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the name attribute of the element, which is used as the key when the form data is submitted. This allows the value of the element to be identified and processed on the server side.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets or retrieves a value that specifies whether the element's text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. Enabling this option ensures that the element properly supports locales that use RTL scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme to be applied. The selected theme controls the visual appearance, including colors, fonts, and styling, of the element.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or similar methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies how many stars should be visually highlighted to indicate the current rating value. This number determines which stars appear filled or active in the rating component.
    *	Property type: number
    */
    get value(): number;
    set value(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the user adjusts the slider to a new value, either by dragging the handle or using keyboard controls. It fires each time the slider's value is updated, allowing you to respond dynamically to user input and capture the current value in real time.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Retrieve the current value assigned to the rating property, indicating the user's selected rating or the rating score for the item.
    * @returns {number}
  */
    getValue(): any;
    /** Assigns or updates the current rating value. This property determines the selected rating level, typically represented by a numeric value (e.g., 1 to 5), and can be used to display the user’s chosen rating or set a default rating programmatically.
    * @param {number} value. Sets the value of the rating
    */
    setValue(value: number): void;
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
export default Rating;
