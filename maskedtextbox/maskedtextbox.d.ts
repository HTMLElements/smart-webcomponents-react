import React from "react";
import { MaskedTextBoxProperties } from "./../index";
import { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat } from './../index';
export { MaskedTextBoxProperties } from "./../index";
export { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode for the element. When set to 'none', all animations are disabled for the element, resulting in immediate changes without any animated transitions. If another value is assigned, the corresponding animation mode will be applied, controlling how transitions or visual effects are rendered.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Checks if the specified promptChar character is recognized as a valid input, allowing the user to enter it into the field. If promptChar is considered valid, it will be accepted and processed as part of the user’s input; otherwise, it will be rejected.
    *	Property type: boolean
    */
    get allowPromptAsInput(): boolean;
    set allowPromptAsInput(value: boolean);
    /** Specifies whether the input field restricts user entries to characters within the standard ASCII character set (codes 0–127), excluding all non-ASCII symbols, accented letters, and characters from other languages.
    *	Property type: boolean
    */
    get asciiOnly(): boolean;
    set asciiOnly(value: boolean);
    /** Determines if the input element automatically receives focus when the page loads, allowing users to begin typing immediately without manually selecting the field.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Controls whether the input mask is displayed or hidden when the input field receives or loses focus, regardless of whether a placeholder is specified. This setting applies even if no placeholder attribute is present on the input element.
    *	Property type: boolean
    */
    get autoShowMask(): boolean;
    set autoShowMask(value: boolean);
    /** Specifies whether formatting characters (such as literals and prompt symbols) included in an input mask are also copied to the clipboard when performing cut or copy operations. If enabled, both the user's input and the input mask characters will be included in the clipboard data; if disabled, only the user's input is copied.
    *	Property type: MaskedTextBoxCutCopyMaskFormat | string
    */
    get cutCopyMaskFormat(): MaskedTextBoxCutCopyMaskFormat | string;
    set cutCopyMaskFormat(value: MaskedTextBoxCutCopyMaskFormat | string);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element appears dimmed and does not respond to user input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines the action performed when the "Enter" key is pressed. Possible values include "submit" (submits the form), "newline" (inserts a new line), or "none" (no action). The default value is "submit".
    *	Property type: EnterKeyBehavior | string
    */
    get enterKeyBehavior(): EnterKeyBehavior | string;
    set enterKeyBehavior(value: EnterKeyBehavior | string);
    /** Controls whether the prompt character in the input mask is hidden when the masked text box loses focus. When set to true, the prompt character will not be visible in the textbox after it loses focus; when set to false, the prompt character remains visible even when the textbox is not focused. This helps manage what users see when interacting with the masked input field.
    *	Property type: boolean
    */
    get hidePromptOnLeave(): boolean;
    set hidePromptOnLeave(value: boolean);
    /** Displays supplementary helper text beneath the element. This hint appears exclusively when the element is focused, providing contextual guidance to the user during input or interaction. The helper text is hidden when the element is not focused, ensuring a clean interface when not needed.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Specifies whether new user input will replace the current input value entirely, or if it will be appended to or combined with the existing value. When enabled, any new input overwrites the existing content; when disabled, new input is added to the existing value without removing it.
    *	Property type: boolean
    */
    get isOverwriteMode(): boolean;
    set isOverwriteMode(value: boolean);
    /** Displays a label positioned above the element. The label remains constantly visible, providing clear identification for the associated element at all times.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Defines or retrieves the unlockKey, a unique identifier or code required to activate and access the product's full features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for the application or component. This property determines which set of localized messages from the messages object will be used for display, enabling support for multiple languages. When you set the language, the corresponding message translations from the messages property are applied automatically.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify translated strings—such as injecting dynamic values, changing case, or applying additional formatting—before they are displayed to users.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the input mask pattern that determines the allowed format and structure of user input. This ensures that the entered data matches the required criteria, such as a phone number, date, or custom format.
    *	Property type: string
    */
    get mask(): string;
    set mask(value: string);
    /** Specifies whether every required field defined by the mask has been filled in with valid data. Returns true if all required fields are populated; otherwise, returns false.
    *	Property type: boolean
    */
    get maskCompleted(): boolean;
    set maskCompleted(value: boolean);
    /** Specifies whether every required and optional field defined by the mask has been filled with a value. If true, all fields that the mask references are populated; if false, at least one referenced field remains unset.
    *	Property type: boolean
    */
    get maskFull(): boolean;
    set maskFull(value: boolean);
    /** Specifies the upper limit on the number of characters that a user is allowed to input. If the user attempts to enter more characters than this limit, additional input will be prevented or ignored. This property is commonly used in form fields to enforce data length constraints and ensure consistent data entry.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Defines or retrieves an object containing customizable text strings used within the widget, allowing for localization of user interface elements. This property works in conjunction with the locale property to provide translations and adapt the widget's display language to different regions or languages. Use this to specify or override default labels, messages, or prompts shown in the widget.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. The name attribute identifies the element within an HTML form, ensuring its value is included in the form data sent to the server upon submission. This is essential for correctly processing user input on the backend.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the placeholder text displayed in the input field when both the value and mask properties are unset or empty. This text provides users with a hint or example of the expected input format until they enter a value.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies the character used as the placeholder in the input mask for the element. This character indicates where user input is expected within the input field.
    *	Property type: string
    */
    get promptChar(): string;
    set promptChar(value: string);
    /** When the element is set to readonly, users can view its content but cannot modify or interact with it in any way. This ensures that the element’s value remains unchanged by user input, while still being visible on the page.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies whether the parsing process should immediately halt upon encountering the first invalid character in the user input, or continue attempting to parse the remaining input.
    *	Property type: boolean
    */
    get rejectInputOnFirstFailure(): boolean;
    set rejectInputOnFirstFailure(value: boolean);
    /** Indicates that this input field is required and cannot be left empty; users must provide a value before the form can be successfully submitted.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Controls whether entering a character in the input field that matches the prompt character will reset the currently selected value. This setting is relevant only when allowPromptAsInput is enabled, meaning the prompt character can be used as user input. When enabled, if the user types the prompt character, the input’s selected value will be cleared; otherwise, the value remains unchanged.
    *	Property type: boolean
    */
    get resetOnPrompt(): boolean;
    set resetOnPrompt(value: boolean);
    /** Specifies whether pressing the spacebar will clear the currently selected value in the input field. When set to true, pressing the space key will reset (clear) the selection; when set to false, the value remains unchanged.
    *	Property type: boolean
    */
    get resetOnSpace(): boolean;
    set resetOnSpace(value: boolean);
    /** Specifies or retrieves a Boolean value that determines whether the element’s content is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew. When set to true, the element’s text direction and alignment are adjusted to display content appropriately for RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines if the entire value of the input field will be automatically highlighted (selected) when the input receives focus, allowing users to easily replace or copy the existing content.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Specifies whether the value entered in the input field should include or exclude the static characters (prompts and literals) defined by the input mask. When enabled, the resulting value will contain these mask characters; otherwise, only the user input (without mask characters) will be stored.
    *	Property type: MaskedTextBoxTextMaskFormat | string
    */
    get textMaskFormat(): MaskedTextBoxTextMaskFormat | string;
    set textMaskFormat(value: MaskedTextBoxTextMaskFormat | string);
    /** Specifies the visual theme to be applied. The theme controls the overall appearance—including colors, fonts, and style—of the element, ensuring a consistent and customizable look and feel.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If this property is set to true, the element will be excluded from keyboard navigation and cannot receive focus, either by tabbing or programmatically.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets the current value of the element or sets a new value for the element, depending on how the method is used. When called without arguments, it returns the element's current value. When provided with a value as an argument, it updates the element with the specified value. Commonly used with form input elements.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** A callback function that enables you to define custom validation logic for the input value. This function receives the input value as an argument and should return a boolean value: return true if the value is considered valid, or false if it is invalid. If the function returns false, the input will be treated as invalid and may trigger corresponding validation error messages or prevent form submission. Use this to implement validations that go beyond the default rules.
    *	Property type: any
    */
    get validation(): any;
    set validation(value: any);
    get properties(): string[];
    /**  This event is triggered whenever the user modifies the content of the Text Box, such as by typing, deleting, or pasting text. It fires each time the value of the Text Box changes, allowing you to respond to user input in real-time.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a key is released (on key up) in the MaskedTextBox control and the input value has been modified as a result. It only fires if the key up event causes a change in the current value of the MaskedTextBox, allowing you to respond specifically to user edits in real-time.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the validation property is set. It indicates the result of the validation process—specifically, whether the validation completed successfully (true) or failed (false). Use this event to respond to changes in the validation state of the associated data or form.
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
    /** Sets keyboard and screen reader focus to the specified element, making it the active element for user interactions such as typing or accessibility navigation.
    */
    focus(): void;
    /** Applies a blur effect to the element, causing its content and any child elements to appear out of focus by softening edges and details. The degree of blur can typically be adjusted to achieve the desired level of visual obscurity.
    */
    blur(): void;
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
export default MaskedTextBox;
