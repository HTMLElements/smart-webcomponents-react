import React from "react";
import { PasswordTextBoxProperties } from "./../index";
import { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition } from './../index';
export { PasswordTextBoxProperties } from "./../index";
export { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Specifies that the element should be focused when the page is loaded.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the behavior on "Enter" key press. Default mode is "submit".
    *	Property type: EnterKeyBehavior
    */
    get enterKeyBehavior(): EnterKeyBehavior;
    set enterKeyBehavior(value: EnterKeyBehavior);
    /** The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Sets additional helper text below the element. Appears only when the element is focused.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Sets label above the element. The label is displayed above the input and it's always visible.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets the maximum number of characters that the user can enter.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the minimum number of characters that the user can enter.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'.
    *	Property type: any
    */
    get passwordStrength(): any;
    set passwordStrength(value: any);
    /** The placeholder text that is displayed when no value is applied to the element.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies that the user must fill in a value before submitting a form that contains the element.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether the content of the input will be selected on focus.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Determines whether the password icon is visible.
    *	Property type: boolean
    */
    get showPasswordIcon(): boolean;
    set showPasswordIcon(value: boolean);
    /** Determines whether a tooltip which shows the password's strength will be shown.
    *	Property type: boolean
    */
    get showPasswordStrength(): boolean;
    set showPasswordStrength(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines whether Tooltip's arrow will be shown or not.
    *	Property type: boolean
    */
    get tooltipArrow(): boolean;
    set tooltipArrow(value: boolean);
    /** Determines the delay before the tooltip appears in miliseconds.
    *	Property type: number
    */
    get tooltipDelay(): number;
    set tooltipDelay(value: number);
    /** Determines the position of the tooltip.
    *	Property type: PasswordTextBoxTooltipPosition
    */
    get tooltipPosition(): PasswordTextBoxTooltipPosition;
    set tooltipPosition(value: PasswordTextBoxTooltipPosition);
    /** Sets a custom template for the content of the tooltip.
    *	Property type: string
    */
    get tooltipTemplate(): string;
    set tooltipTemplate(value: string);
    /** If true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value of the element.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the value of the element is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on each key up event of the TextBox, if the value is changed.
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
    /** Focuses the element.
    */
    focus(): void;
    /** The method is used to reset input to it's initial value.
    */
    reset(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default PasswordTextBox;
