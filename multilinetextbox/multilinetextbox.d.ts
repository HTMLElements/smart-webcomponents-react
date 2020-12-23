import React from "react";
import { MultilineTextBoxProperties } from "./../index";
import { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap } from './../index';
export { MultilineTextBoxProperties } from "./../index";
export { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
    *	Property type: MultilineTextBoxAutoCapitalize
    */
    get autoCapitalize(): MultilineTextBoxAutoCapitalize;
    set autoCapitalize(value: MultilineTextBoxAutoCapitalize);
    /** Determines whether the value of the control can be automatically completed by the browser.
    *	Property type: MultiLineTextBoxAutoComplete
    */
    get autoComplete(): MultiLineTextBoxAutoComplete;
    set autoComplete(value: MultiLineTextBoxAutoComplete);
    /** Determines whether element will auto expand when the input overflows vertically.
    *	Property type: boolean
    */
    get autoExpand(): boolean;
    set autoExpand(value: boolean);
    /** Determines whether the input should be focused when the page is loaded.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
    *	Property type: number
    */
    get cols(): number;
    set cols(value: number);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies how the characters are displayed inside the input.
    *	Property type: TextBoxDisplayMode
    */
    get displayMode(): TextBoxDisplayMode;
    set displayMode(value: TextBoxDisplayMode);
    /** Determines the behavior on "Enter" key.
    *	Property type: MultilineTextBoxEnterKeyBehavior
    */
    get enterKeyBehavior(): MultilineTextBoxEnterKeyBehavior;
    set enterKeyBehavior(value: MultilineTextBoxEnterKeyBehavior);
    /** The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Sets additional helper text below the element. Appears only when the element is focused.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Controls horizontal scrollbar's visibility.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
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
    /** Sets or gets the minimum number of characters that the user can enter.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
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
    /** The placeholder text that is displayed when no value is applied to the element.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** If enabled the users cannot iteract with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies that the user must fill in a value before submitting a form that contains the element.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
    *	Property type: boolean
    */
    get resizable(): boolean;
    set resizable(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** The number of visible text lines for the control.
    *	Property type: number
    */
    get rows(): number;
    set rows(value: number);
    /** Specifies whether the content of the input will be selected on focus.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Indicates the index of the last character in the current selection.
    *	Property type: number
    */
    get selectionEnd(): number;
    set selectionEnd(value: number);
    /** Indicates the index to the first character in the current selection.
    *	Property type: number
    */
    get selectionStart(): number;
    set selectionStart(value: number);
    /** Specifies whether the element is to have its spelling and grammar checked or not.
    *	Property type: boolean
    */
    get spellCheck(): boolean;
    set spellCheck(value: boolean);
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
    /** Controls vertical scrollbar's visibility.
    *	Property type: VerticalScrollBarVisibility
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility);
    /** Indicates how the control wraps text.
    *	Property type: MultilineTextBoxWrap
    */
    get wrap(): MultilineTextBoxWrap;
    set wrap(value: MultilineTextBoxWrap);
    get properties(): string[];
    /**  This event is triggered when the value of the text box is changed.
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
    /** Focuses the element.
    */
    focus(): void;
    /** The method is used to reset the value of the element box to it's initial state.
    */
    reset(): void;
    /** Returns the currenctly selected text.
    * @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
    * @returns {string}
  */
    selection(displayMode: string): Promise<any>;
    /** Selects a certain part of the input text. If no arguments are specified the whole text will be selected.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default MultilineTextBox;
