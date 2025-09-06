import React from "react";
import { ButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { ButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
export { RepeatButton } from './repeatbutton';
export { RepeatButtonProperties } from "./../index";
export { ToggleButton } from './togglebutton';
export { ToggleButtonProperties } from "./../index";
export { PowerButton } from './powerbutton';
export { PowerButtonProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface ButtonProps extends ButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
export declare class Button extends React.Component<React.HTMLAttributes<Element> & ButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the element. When set to 'none', all animations are disabled. Use this property to enable, disable, or customize the animation behavior as needed. You can get the current animation mode or assign a new value to control how animations are applied.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies how the element responds to user click interactions, such as triggering specific actions, toggling states, or initiating custom event handling based on the selected mode.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Specifies the inner content of the element, such as text, HTML, or child elements, determining what is displayed inside the element on the web page.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether the button is interactive. When enabled ('true'), users can click and interact with the button. When disabled ('false'), the button appears inactive and does not respond to user actions.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Updates the contents of the element by setting its inner HTML to the specified value. This replaces all existing child elements and text within the element with the provided HTML markup. Use caution when inserting user-generated content to avoid security risks such as cross-site scripting (XSS).
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Handles the retrieval or assignment of the 'unlockKey', a unique value required to authorize and unlock access to the product's features or content.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Specifies the language code to use for retrieving or displaying messages. When set, it determines which localized message set from the messages property is used. Getting this property returns the current language code. Typically used for enabling multi-language support within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** A callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this callback to customize how localized messages are structured or displayed before they are delivered to your application.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves an object containing localized strings for the widget's user interface. This property allows you to customize text displayed by the widget for different languages and regions, and works in conjunction with the locale property to ensure proper localization.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Defines or retrieves the name attribute of the element. The name attribute uniquely identifies form elements when submitting data through an HTML form, allowing the server to associate input values with their corresponding fields. This attribute is essential for processing form data correctly.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** If the custom element is set to readonly, users will not be able to modify its value or content through direct interaction (such as typing, selecting, or dragging). However, the element may still be focusable and its value can be changed programmatically via scripts. User-initiated actions that would normally alter its state are disabled.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Gets or sets a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is typically used by languages such as Arabic or Hebrew. When enabled, the element is properly aligned to display content for RTL locales.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the visual theme applied to the element, which controls its overall appearance, including colors, fonts, and styling. This property allows you to select a predefined look and feel for the element.
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
    /** Specifies or retrieves the button's type attribute, which determines the button's behavior—such as "submit" to submit a form, "reset" to reset form fields, or "button" for a general-purpose clickable button.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Sets or retrieves the button's value attribute, which typically defines the text displayed on the button or the value submitted when the button is used in a form.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  The click event is triggered based on the selected clickMode, meaning the event behavior will vary depending on the current setting of the clickMode property.
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
export default Button;
