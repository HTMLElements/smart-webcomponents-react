import React from "react";
import { LedProperties } from "./../index";
import { Animation, ClickMode, LedShape } from './../index';
export { LedProperties } from "./../index";
export { Animation, ClickMode, LedShape } from './../index';
declare let Smart: any;
export { Smart };
export interface LedProps extends LedProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 LET Toggle button with Checked boolean value.
*/
export declare class Led extends React.Component<React.HTMLAttributes<Element> & LedProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled, and elements will display or update instantly without any transition effects. For other values, the specified animation mode will determine how visual changes are animated.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Gets the current check state or sets it to a specified value, typically used for checkbox, radio button, or similar UI elements. The check state indicates whether the element is checked, unchecked, or (if supported) in an indeterminate state.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Specifies the conditions under which the element will trigger a click event, allowing you to control when and how user interactions or programmatic actions cause the click event to be fired.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Controls the LED's power state by enabling (turning on) or disabling (turning off) the LED.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the content to be displayed when the state is set to 'false'.
    *	Property type: string
    */
    get falseContent(): string;
    set falseContent(value: string);
    /** Defines a custom template that determines the LED's appearance or behavior when it is in the "off" or false state.
    *	Property type: any
    */
    get falseTemplate(): any;
    set falseTemplate(value: any);
    /** Configures the LED to display an indeterminate state, typically represented by a blinking or animated pattern to indicate ongoing activity or a process with an unknown completion time. This is useful for scenarios where the system cannot determine or communicate a specific status or progress value.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Defines the content to be displayed when the component is in a 'null' or empty state, such as when no data is available or the value is undefined.
    *	Property type: string
    */
    get indeterminateContent(): string;
    set indeterminateContent(value: string);
    /** Defines a custom template to visually represent the LED component when it is in an indeterminate state, allowing you to specify the appearance or behavior of the LED during this undefined or transitional state.
    *	Property type: any
    */
    get indeterminateTemplate(): any;
    set indeterminateTemplate(value: any);
    /** Sets or retrieves the unlockKey, a unique identifier or code required to unlock access to the product. This property allows you to manage product access by specifying or obtaining the key needed for unlocking restricted features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for localization purposes. This property works together with the messages property to display interface text and messages in the selected language. When you set this property, the corresponding localized messages from messages are used throughout the application.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify or enhance localized messages—such as applying custom templates, injecting dynamic content, or adjusting formatting—before they are delivered to the user interface.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized strings used by the widget's user interface, such as labels, messages, and tooltips. This property works in tandem with the locale property to enable support for multiple languages, allowing developers to customize text displayed to users based on their selected language or region.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form elements when submitting HTML forms, allowing their values to be sent to the server as key-value pairs. This attribute is essential for collecting user input in form processing.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the widget is set to read-only, users will be unable to interact with the element or modify its contents. All input and editing functionalities will be disabled, ensuring that the information displayed remains unchanged by the user.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves the value that determines whether the element’s content is aligned to support languages that use right-to-left (RTL) scripts, such as Arabic or Hebrew. This property ensures proper text direction and alignment for locales requiring RTL formatting.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the geometric shape or appearance of the LED component, such as circle, square, rectangle, or custom shapes. This setting determines how the LED will be visually rendered in the user interface.
    *	Property type: LedShape | string
    */
    get shape(): LedShape | string;
    set shape(value: LedShape | string);
    /** Specifies the theme to be applied, which controls the visual appearance—such as colors, fonts, and styles—of the element. The selected theme ensures a consistent and cohesive look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the content that will be displayed or rendered when the associated state is evaluated as 'true'.
    *	Property type: string
    */
    get trueContent(): string;
    set trueContent(value: string);
    /** Specifies a custom template that defines the behavior or appearance of the LED when its state is set to "true" (on). Use this template to customize how the LED should be displayed or controlled when activated.
    *	Property type: any
    */
    get trueTemplate(): any;
    set trueTemplate(value: any);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via tab navigation or scripting methods such as element.focus().
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. This is commonly used for form elements such as input, select, or textarea to programmatically update or access their contents.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the widget’s checked state changes, that is, when the user selects (checks) or deselects (unchecks) the widget. It allows you to execute custom logic in response to the widget being either checked or unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    */
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
export default Led;
