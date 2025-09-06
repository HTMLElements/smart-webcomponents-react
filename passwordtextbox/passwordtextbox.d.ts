import React from "react";
import { PasswordTextBoxProperties } from "./../index";
import { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition } from './../index';
export { PasswordTextBoxProperties } from "./../index";
export { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface PasswordTextBoxProps extends PasswordTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
export declare class PasswordTextBox extends React.Component<React.HTMLAttributes<Element> & PasswordTextBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. If set to any other supported value, animations will be enabled according to the specified mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Indicates that the element will automatically receive keyboard focus as soon as the page is loaded, allowing users to interact with it immediately without clicking or tabbing to it. This is often used to improve accessibility and streamline user interaction with form fields or interactive elements.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element becomes unresponsive to user actions such as clicks or input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines the action that occurs when the "Enter" key is pressed within the input field. By default, the mode is set to "submit", meaning pressing "Enter" will attempt to submit the associated form. You can customize this behavior by specifying alternative modes, such as preventing form submission or triggering a custom handler.
    *	Property type: EnterKeyBehavior | string
    */
    get enterKeyBehavior(): EnterKeyBehavior | string;
    set enterKeyBehavior(value: EnterKeyBehavior | string);
    /** Specifies the form element with which this element is associated (referred to as its "form owner"). The value of this attribute should be the id of a  element within the same HTML document. This allows the element to be associated with a form even if it is not nested inside the  tags.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Displays supplemental helper text beneath the element, visible only while the element is focused. This text provides additional guidance or context to users during interaction.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Displays a label positioned above the input element. This label remains persistently visible, providing a clear and accessible description of the input’s purpose at all times.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Gets or sets the unlockKey, a unique key required to activate and access the product. Use this property to retrieve the current unlock key or assign a new one to enable product unlocking functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which set of localized text strings from the messages property is used for display. When you set the language, the corresponding messages are shown to users in that language. When you get the language, it returns the currently active language code.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to customize the formatting of messages returned by the Localization Module. This enables you to modify or enhance localized message strings—such as adding dynamic data, adjusting placeholders, or changing text structure—before they are displayed to users.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum number of characters allowed in the input field. If set, the user cannot enter more characters than this limit. This constraint helps enforce data validation and control the input length.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Defines an object where each property corresponds to a specific password strength state, with associated string values that describe or label each state (e.g., "weak," "moderate," "strong"). This object is typically used to display feedback messages or labels reflecting the current strength of a user's password during input.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies or retrieves the minimum number of characters required for user input. When set, the user must enter at least this many characters for the input to be considered valid.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form fields when submitting HTML forms, allowing the data entered in the element to be included in the form's submission with the specified name as the key. This is essential for server-side processing of form data.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** With this property, you can specify a custom callback function that evaluates the strength of a password. The function should accept the current password as input and return a string representing the assessed strength level. The returned string must be one of the following predefined values: 'short', 'weak', 'far', 'good', or 'strong'. This value will be used by the component to indicate how secure the entered password is according to your custom logic.
    *	Property type: any
    */
    get passwordStrength(): any;
    set passwordStrength(value: any);
    /** This is the text that appears within the element when it is empty, serving as a prompt or hint to the user about the expected input. Once the user enters a value, this placeholder text disappears.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Enhances the requirement that the user must provide a value for this element before the form can be submitted. If this field is left empty, the form submission will be blocked and the user will be prompted to enter a value. This ensures that the input is mandatory, helping maintain data completeness and integrity.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Sets or retrieves a value specifying whether the element’s alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content and layout are adapted for proper display in locales that use right-to-left text direction.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines if the entire content of the input field should be automatically highlighted (selected) when the input receives focus, making it easier for users to quickly replace or copy the content.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Specifies whether the password icon (such as an eye symbol to show or hide password text) is displayed in the input field.
    *	Property type: boolean
    */
    get showPasswordIcon(): boolean;
    set showPasswordIcon(value: boolean);
    /** Specifies whether a tooltip displaying the password strength indicator will be visible to the user during password entry. When enabled, this tooltip provides real-time feedback on the strength of the entered password.
    *	Property type: boolean
    */
    get showPasswordStrength(): boolean;
    set showPasswordStrength(value: boolean);
    /** Specifies the visual theme to be applied. The theme controls the overall appearance and style—including colors, fonts, and backgrounds—of the element for a consistent look and feel.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies whether the Tooltip component should display an arrow pointing to the target element. Setting this option to true will show the arrow, while false will hide it.
    *	Property type: boolean
    */
    get tooltipArrow(): boolean;
    set tooltipArrow(value: boolean);
    /** Specifies the amount of time, in milliseconds, to wait before displaying the tooltip after a user interaction (such as hovering or focusing on an element).
    *	Property type: number
    */
    get tooltipDelay(): number;
    set tooltipDelay(value: number);
    /** Specifies the placement of the tooltip relative to the target element, such as "top", "bottom", "left", or "right". This controls where the tooltip will appear when it is displayed.
    *	Property type: PasswordTextBoxTooltipPosition | string
    */
    get tooltipPosition(): PasswordTextBoxTooltipPosition | string;
    set tooltipPosition(value: PasswordTextBoxTooltipPosition | string);
    /** Specifies a custom template for rendering the tooltip’s content, allowing you to define the layout, formatting, and dynamic data within the tooltip. This enables greater control over the appearance and behavior of the tooltip beyond the default content.
    *	Property type: string
    */
    get tooltipTemplate(): string;
    set tooltipTemplate(value: string);
    /** Indicates whether the element should be excluded from keyboard navigation and cannot receive focus. If set to true, users will not be able to focus on the element using the keyboard or mouse interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. Useful for updating or accessing the element’s data within a form or component.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the value of the element is modified by the user or through programmatic changes. It occurs after the change has been committed, allowing you to respond to updates in the element’s value.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a key is released (key up) within the TextBox, but only if the TextBox's value has changed as a result of the key press. This ensures that the event fires solely when user input modifies the content, preventing unnecessary triggers when the value remains unchanged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Sets keyboard focus to the specified element, making it the active element on the page and enabling user input or interaction through the keyboard. This is commonly used to improve accessibility, guide user workflow, or trigger specific UI behaviors.
    */
    focus(): void;
    /** This method resets the input field to its initial value, discarding any changes made by the user and restoring the input's original state as specified when the component or element was first rendered.
    */
    reset(): void;
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
export default PasswordTextBox;
