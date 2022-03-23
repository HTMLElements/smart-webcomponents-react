import React from "react";
import { InputProperties } from "./../index";
import { DropDownButtonPosition, InputQueryMode } from './../index';
export { InputProperties } from "./../index";
export { DropDownButtonPosition, InputQueryMode } from './../index';
export declare const Smart: any;
export interface InputProps extends InputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Input specifies an input field where the user can enter data. Auto-complete options are displayed for easier input.
*/
export declare class Input extends React.Component<React.HTMLAttributes<Element> & InputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Determines the data source that will be loaded to the Input. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described. The data source item object may have the following fields: 'label' - string, 'value' - string or number, 'selected' - boolean, 'prefix' - string, 'suffix' - string, 'title' - string. The 'prefix' and 'suffix' add html before and after the label.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets additional class names to the Input drop down.
    *	Property type: any
    */
    get dropDownClassList(): any;
    set dropDownClassList(value: any);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
    /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
    *	Property type: number
    */
    get items(): number;
    set items(value: number);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the drop down is opened or not.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the placeholder of the input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
    *	Property type: string | number
    */
    get query(): string | number;
    set query(value: string | number);
    /** Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
    *	Property type: InputQueryMode
    */
    get queryMode(): InputQueryMode;
    set queryMode(value: InputQueryMode);
    /** Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines whether the items are sorted alphabetically or not
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Determines the sorting algorithm - ascending(asc) or descending(desc) if sort is enabled.
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Determines the selected index.
    *	Property type: number
    */
    get selectedIndex(): number;
    set selectedIndex(value: number);
    /** Determines the selected value.
    *	Property type: string | number
    */
    get selectedValue(): string | number;
    set selectedValue(value: string | number);
    /** Determines the theme for the element. Themes define the look of the elements.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines the input type. Input type determines what input can be entered.
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
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
    get properties(): string[];
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on each key up event of the Input, if the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the popup is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the popup is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks on an item from the popup list.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
    *   item - The item that was clicked.
    *   label - The label of the item that was clicked.
    *   value - The value of the item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the drop down.
    */
    close(): void;
    /** Ensures that the active ( selected ) item is always visible.
    */
    ensureVisible(): void;
    /** Opens the drop down.
    */
    open(): void;
    /** Focuses and selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** Selects an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    */
    selectItem(value: string | number): void;
    /** Gets an item by value. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'], you can use 'Item 1' as an argument. If your data source is an object with label and value, pass the value when you call selectItem.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getItem(value: string | number): Promise<any>;
    /** Gets the selected item. For example, if your data source is ['Item 1', 'Item 2', 'Item 3'] and the user selected the second item, the method returns 'Item 2'. If your data source is an object with label and value, the returned value would be the 'value'.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getSelectedItem(value: string | number): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Input;
