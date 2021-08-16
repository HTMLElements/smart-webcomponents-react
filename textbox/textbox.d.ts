import React from "react";
import { TextBoxProperties } from "./../index";
import { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility } from './../index';
export { TextBoxProperties } from "./../index";
export { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface TextBoxProps extends TextBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 TextBox is an input field with auto-suggest options.
*/
export declare class TextBox extends React.Component<React.HTMLAttributes<Element> & TextBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines whether the text box will be focused on page load or not.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
    *	Property type: AutoComplete
    */
    get autoComplete(): AutoComplete;
    set autoComplete(value: AutoComplete);
    /** Determines the delay before the drop down opens to show the matches from the auto complete operation.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether an indicator will appear during filtering and remote item loading.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Determines how the characters are displayed inside the input.
    *	Property type: TextBoxDisplayMode
    */
    get displayMode(): TextBoxDisplayMode;
    set displayMode(value: TextBoxDisplayMode);
    /** Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Determines how the drop down is going to open.
    *	Property type: DropDownOpenMode
    */
    get dropDownOpenMode(): DropDownOpenMode;
    set dropDownOpenMode(value: DropDownOpenMode);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the placeholder for the drop down, displayed when there are no items in it.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Determines the position of the drop down when opened.
    *	Property type: DropDownPosition
    */
    get dropDownPosition(): DropDownPosition;
    set dropDownPosition(value: DropDownPosition);
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Determines the behavior of the element when Escape key is pressed.
    *	Property type: EscKeyMode
    */
    get escKeyMode(): EscKeyMode;
    set escKeyMode(value: EscKeyMode);
    /** Specifies the behavior of "Enter" key.
    *	Property type: EnterKeyBehavior
    */
    get enterKeyBehavior(): EnterKeyBehavior;
    set enterKeyBehavior(value: EnterKeyBehavior);
    /** The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Determines the visibility of the horizontal Scroll bar thats inside the drop down.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
    *	Property type: string
    */
    get inputMember(): string;
    set inputMember(value: string);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Sets the height for all list items. Used only when virtualization is enabled.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** Determines the item width measuring algorithm.
    *	Property type: ListItemMeasureMode
    */
    get itemMeasureMode(): ListItemMeasureMode;
    set itemMeasureMode(value: ListItemMeasureMode);
    /** A getter that returns an array of all List items inside the drop down.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Sets a little text label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Determines the position of the loading indicator.
    *	Property type: VerticalAlignment
    */
    get loadingIndicatorPosition(): VerticalAlignment;
    set loadingIndicatorPosition(value: VerticalAlignment);
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
    /** Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the drop down is opened or closed
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the input's placeholder.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies that the user must fill the input before submitting a form with the element.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Specifies the message that will appear if required is set and no value is provided in the input.
    *	Property type: string
    */
    get requiredMessage(): string;
    set requiredMessage(value: string);
    /** Determines whether the content of the input will be selected on focus or not.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
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
    /** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Determines the visibility of the vertical scroll bar that's inside the drop down.
    *	Property type: VerticalScrollBarVisibility
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility);
    get properties(): string[];
    /**  This event is triggered when the value of the Text Box is changed. This happens on blur and if 'Enter' is pressed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    *   type - The type of the event.
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
    /** Closes the drop down. The drop down is used only when auto complete is enabled.
    */
    close(): void;
    /** Opens the drop down. The drop down is used only when auto complete is enabled.
    */
    open(): void;
    /** The method is used to reset the input back to it's initial value.
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
export default TextBox;
