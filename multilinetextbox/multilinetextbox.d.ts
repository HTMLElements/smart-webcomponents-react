import React from "react";
import { MultilineTextBoxProperties } from "./../index";
import { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap } from './../index';
export { MultilineTextBoxProperties } from "./../index";
export { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface MultilineTextBoxProps extends MultilineTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export declare class MultilineTextBox extends React.Component<React.HTMLAttributes<Element> & MultilineTextBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the component. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects. Use this property to control whether and how animations are applied.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies if and in what manner user-entered text should be automatically capitalized during input or editing. This setting controls the automatic transformation of text—for example, capitalizing the first letter of each word, each sentence, or all characters—based on the selected capitalization behavior.
    *	Property type: MultilineTextBoxAutoCapitalize | string
    */
    get autoCapitalize(): MultilineTextBoxAutoCapitalize | string;
    set autoCapitalize(value: MultilineTextBoxAutoCapitalize | string);
    /** Specifies whether the browser is allowed to automatically fill in the value of the input control based on the user's previously entered data, such as usernames, passwords, or addresses. When enabled, this facilitates autofill and streamlines user input by suggesting or completing values according to stored information.
    *	Property type: MultiLineTextBoxAutoComplete | string
    */
    get autoComplete(): MultiLineTextBoxAutoComplete | string;
    set autoComplete(value: MultiLineTextBoxAutoComplete | string);
    /** Controls whether the element automatically increases its height to accommodate input that exceeds its current vertical space. When enabled, the element will expand vertically as more content is entered, preventing scrollbars from appearing.
    *	Property type: boolean
    */
    get autoExpand(): boolean;
    set autoExpand(value: boolean);
    /** Specifies whether the input element should automatically receive focus when the page finishes loading, allowing users to start interacting with it immediately without manually clicking or tabbing into the field.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** The cols attribute sets the visible width (measured in average character columns) of a textarea input field in a form. Its value must be a positive integer, determining how many characters are visible in a single row. If the cols attribute is not provided, the textarea defaults to displaying 20 character columns in width. Note: The cols attribute is not applicable to  elements; it is specific to  elements.
    *	Property type: number
    */
    get cols(): number;
    set cols(value: number);
    /** Controls whether the element is active or inactive. When enabled, the element can interact with user input; when disabled, the element is unresponsive and typically appears visually distinct to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines the visual presentation of the characters entered within the input field, such as whether they are shown as plain text, masked (e.g., as asterisks for passwords), or styled in a particular way. This setting determines how users see their input while typing or viewing the form.
    *	Property type: TextBoxDisplayMode | string
    */
    get displayMode(): TextBoxDisplayMode | string;
    set displayMode(value: TextBoxDisplayMode | string);
    /** Specifies how the application responds when the "Enter" key is pressed, such as submitting a form, adding a new line, or triggering a specific action.
    *	Property type: MultilineTextBoxEnterKeyBehavior | string
    */
    get enterKeyBehavior(): MultilineTextBoxEnterKeyBehavior | string;
    set enterKeyBehavior(value: MultilineTextBoxEnterKeyBehavior | string);
    /** Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of an existing  element within the same HTML document. This allows input or button elements to be associated with a form, even if they are not nested inside the form tag itself.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Provides supplementary helper text displayed beneath the element. This text becomes visible only when the element is focused, offering users additional guidance or context during interaction.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Determines whether the horizontal scrollbar is visible, hidden, or displayed automatically based on the content's width.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Specifies the expected purpose of the input field and determines whether the browser (user agent) is allowed to offer automated assistance, such as autofill suggestions, when the element is used within a form. This property maps directly to the standard HTML autocomplete attribute, enabling the browser to understand what kind of information should be entered into the field. Accepted values include 'on', 'off', or context-specific keywords such as 'name', 'email', 'organization', or 'street-address'. Setting an appropriate value improves user experience by allowing the browser to assist in accurately and efficiently filling out form fields with relevant data.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Positions the label above the input element. The label will always be visible and displayed above the input field, providing clear identification for the corresponding input regardless of user interaction or input state.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Defines or retrieves the unlockKey value used to authenticate and grant access to the product's locked features. This property acts as a security credential required to unlock and utilize restricted functionality within the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Defines or retrieves the current language code (e.g., "en", "fr", "es") to be used for localization. This property works together with the messages property, allowing the application to display the appropriate translations based on the selected language. When setting this value, ensure that corresponding translations exist within the messages object for consistent multilingual support.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define custom formatting for messages returned by the Localization Module. Use this to modify message content, structure, or placeholders before they are displayed to users, enabling tailored localization outputs that meet specific application or user requirements.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum number of characters allowed in the input field. If set, users cannot enter more characters than this limit.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Specifies or retrieves the minimum number of characters that a user is required to enter in the input field. If the user enters fewer characters than the specified minimum, the input will be considered invalid.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Defines or retrieves an object containing key-value pairs for all user-facing strings within the widget, enabling text customization and localization. This property works in conjunction with the locale property to display translated content according to the selected language or locale. Use this to provide translated strings for different languages, ensuring your widget can support internationalization.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting an HTML form, enabling the form data to be correctly organized and transmitted to the server. This is essential for backend processing and data association.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the placeholder text that appears inside the element when it is empty or no value has been entered. This text serves as a hint or example to guide users on the expected input format or content.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** If enabled, users will be prevented from interacting with the element. This means that all user actions, such as clicks, typing, or other input events, will be disabled for this element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Indicates that the user is required to enter a value in this field before the form can be submitted. If the field is left empty, the form submission will be blocked and the user will be prompted to provide a valid input. This ensures that essential information is collected before processing the form.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Controls whether the user can resize the element. When enabled, a resize handle appears in the bottom-right corner of the input area, allowing the user to manually adjust its size. If disabled, the element remains a fixed size and no resize indicator is shown.
    *	Property type: boolean
    */
    get resizable(): boolean;
    set resizable(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) languages, ensuring proper display and support for locales that use RTL fonts and text direction (such as Arabic or Hebrew).
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the number of text lines that are visible within the control at one time. This determines the vertical size of the control and how much content is displayed to the user without scrolling.
    *	Property type: number
    */
    get rows(): number;
    set rows(value: number);
    /** Determines if the entire content of the input field will be automatically highlighted (selected) when the input gains focus, allowing users to easily replace or copy the existing text.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Specifies the position (zero-based index) of the last character within the currently selected text range. This value represents the character immediately after the end of the selection; if no text is selected, it is equal to the starting index of the selection.
    *	Property type: number
    */
    get selectionEnd(): number;
    set selectionEnd(value: number);
    /** Specifies the zero-based index position of the first character included in the current text selection. This value represents where the selection begins within the overall string or text content.
    *	Property type: number
    */
    get selectionStart(): number;
    set selectionStart(value: number);
    /** Indicates whether the element's text should be checked for spelling and grammar errors by the browser. When enabled, the browser will highlight possible mistakes and may provide correction suggestions to the user.
    *	Property type: boolean
    */
    get spellCheck(): boolean;
    set spellCheck(value: boolean);
    /** Specifies the theme to be applied, which controls the overall appearance and styling of the element, including colors, fonts, and other visual properties.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, the element is not focusable, meaning it cannot receive focus via keyboard navigation, mouse interaction, or scripting.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Provides functionality to retrieve (get) the current value of the element or assign (set) a new value to it. This is commonly used for form elements such as input fields, textareas, or select elements, allowing you to programmatically access or modify the user's input or the element's content.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Determines whether the vertical scrollbar is displayed, hidden, or automatically shown based on the content's overflow within the container. This property allows you to control how and when users can scroll vertically.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    /** Specifies the behavior of the control when handling long text input, determining whether the text automatically wraps onto a new line or remains on a single line, allowing for improved readability and layout management.
    *	Property type: MultilineTextBoxWrap | string
    */
    get wrap(): MultilineTextBoxWrap | string;
    set wrap(value: MultilineTextBoxWrap | string);
    get properties(): string[];
    /**  This event is triggered whenever the user modifies the content of the text box, such as by typing, deleting, or pasting text. It detects any change to the input’s value and can be used to respond in real-time as the user edits the text box.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
    *   oldValue - The previous value of the element before it was changed.
    *   value - The new value of the element.
    *   type - Indicates when the element was called, e.g. on blur or submit.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Sets keyboard and interaction focus to the element, making it the active target for user input and accessibility tools. This enables users to interact with the element (e.g., typing in a field or activating controls) and allows screen readers to announce its presence.
    */
    focus(): void;
    /** This method resets the value of the element box to its original, default state as defined upon initialization. Any user input or programmatically modified content will be cleared, returning the element box to its initial configuration.
    */
    reset(): void;
    /** Returns the text currently selected by the user within the active input field, textarea, or document. If no text is selected, the function returns an empty string.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    selection(displayMode: string): any;
    /** Extracts a specified portion of the input text based on the provided arguments, such as start and end positions or a pattern. If no arguments are given, the entire input text is selected by default. This function enables precise control over which segment of the text is retrieved or manipulated.
    * @param {any} rangeFrom?. Determines the start index of the text selection.
    * @param {any} rangeTo?. Determines the end index of the text selection.
    */
    select(rangeFrom?: any, rangeTo?: any): void;
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
export default MultilineTextBox;
