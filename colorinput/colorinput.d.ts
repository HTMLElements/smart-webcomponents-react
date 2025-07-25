import React from "react";
import { ColorInputProperties } from "./../index";
import { Animation, ColorInputDisplayMode, DropDownButtonPosition, ColorQueryMode, ColorValueDisplayMode, ColorValueFormat } from './../index';
export { ColorInputProperties } from "./../index";
export { Animation, ColorInputDisplayMode, DropDownButtonPosition, ColorQueryMode, ColorValueDisplayMode, ColorValueFormat } from './../index';
declare let Smart: any;
export { Smart };
export interface ColorInputProps extends ColorInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
export declare class ColorInput extends React.Component<React.HTMLAttributes<Element> & ColorInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Determines the data source ( that represent valid colors ) that will be loaded to the Input. The dataSource can be an array of strings or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the colors that will be displayed and their layout.
    *	Property type: ColorInputDisplayMode | string
    */
    get displayMode(): ColorInputDisplayMode | string;
    set displayMode(value: ColorInputDisplayMode | string);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
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
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
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
    *	Property type: ColorQueryMode | string
    */
    get queryMode(): ColorQueryMode | string;
    set queryMode(value: ColorQueryMode | string);
    /** Determines whether the user can enter text inside the input or not. Determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme for the element. Themes define the look of the elements.
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
    /** Determines what will be displayed inside the color picker's action section.
    *	Property type: ColorValueDisplayMode | string
    */
    get valueDisplayMode(): ColorValueDisplayMode | string;
    set valueDisplayMode(value: ColorValueDisplayMode | string);
    /** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat(): ColorValueFormat | string;
    set valueFormat(value: ColorValueFormat | string);
    get properties(): string[];
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected color.
    *   oldLabel - The label of the color that was previously selected before the event was triggered.
    *   oldValue - The value of the color that was previously selected before the event was triggered.
    *   value - The value of the new selected color.
    */
    onChange?: ((event?: Event) => void) | undefined;
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
    /** Opens the drop down.
    */
    open(): void;
    /** Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
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
export default ColorInput;
