import React from "react";
import { MaskedTextBoxProperties } from "./../index";
import { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat } from './../index';
export { MaskedTextBoxProperties } from "./../index";
export { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat } from './../index';
export declare const Smart: any;
export interface MaskedTextBoxProps extends MaskedTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onValidation?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 MaskedTextBox uses a mask to control the input of the user.
*/
export declare class MaskedTextBox extends React.Component<React.HTMLAttributes<Element> & MaskedTextBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines whether promptChar can be entered as valid input by the user.
    *	Property type: boolean
    */
    get allowPromptAsInput(): boolean;
    set allowPromptAsInput(value: boolean);
    /** Determines whether the input accepts characters only from the ASCII character set.
    *	Property type: boolean
    */
    get asciiOnly(): boolean;
    set asciiOnly(value: boolean);
    /** Specifies whether the input should be focused when the page is loaded.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
    *	Property type: boolean
    */
    get autoShowMask(): boolean;
    set autoShowMask(value: boolean);
    /** Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
    *	Property type: MaskedTextBoxCutCopyMaskFormat
    */
    get cutCopyMaskFormat(): MaskedTextBoxCutCopyMaskFormat;
    set cutCopyMaskFormat(value: MaskedTextBoxCutCopyMaskFormat);
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
    /** Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
    *	Property type: boolean
    */
    get hidePromptOnLeave(): boolean;
    set hidePromptOnLeave(value: boolean);
    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Determines whether new user input overwrites the existing input value or not.
    *	Property type: boolean
    */
    get isOverwriteMode(): boolean;
    set isOverwriteMode(value: boolean);
    /** Sets label above the element. The label is always visible.
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
    /** Defines the mask for the input.
    *	Property type: string
    */
    get mask(): string;
    set mask(value: string);
    /** Indicates whether all required fields of the mask have been populated or not.
    *	Property type: boolean
    */
    get maskCompleted(): boolean;
    set maskCompleted(value: boolean);
    /** Indicates whether all required and optional fields of the mask have been populated or not.
    *	Property type: boolean
    */
    get maskFull(): boolean;
    set maskFull(value: boolean);
    /** Determines the maximum number of characters that the user can enter.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** A string that appears inside the input when there's no value and mask.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines the prompt char that is used for the mask of the element.
    *	Property type: string
    */
    get promptChar(): string;
    set promptChar(value: string);
    /** If the element is readonly, the users cannot iteract with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines whether the parsing of user input should stop after the first invalid character or not.
    *	Property type: boolean
    */
    get rejectInputOnFirstFailure(): boolean;
    set rejectInputOnFirstFailure(value: boolean);
    /** Specifies that the input must be filled in before submitting a form
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
    *	Property type: boolean
    */
    get resetOnPrompt(): boolean;
    set resetOnPrompt(value: boolean);
    /** Determines whether hitting space character resets the currently selected value from the input or not.
    *	Property type: boolean
    */
    get resetOnSpace(): boolean;
    set resetOnSpace(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether the value of the input will be selected on focus or not.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Determines whether the value of the input should contain or not the prompt/literals of the mask.
    *	Property type: MaskedTextBoxTextMaskFormat
    */
    get textMaskFormat(): MaskedTextBoxTextMaskFormat;
    set textMaskFormat(value: MaskedTextBoxTextMaskFormat);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value of the element.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
    *	Property type: any
    */
    get validation(): any;
    set validation(value: any);
    get properties(): string[];
    /**  This event is triggered when the value of the Text Box is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on each key up event of the MaskedTextBox, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	success)
    *   success - A flag inidicating whether the validation was successfull or not.
    */
    onValidation?: ((event?: Event) => void) | undefined;
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
    /** Blurs the element.
    */
    blur(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default MaskedTextBox;
