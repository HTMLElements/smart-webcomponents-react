import React from "react";
import { NumberInputProperties } from "./../index";
import { Animation } from './../index';
export { NumberInputProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
export interface NumberInputProps extends NumberInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 NumberInput specifies an input field where the user can enter a numbers.
*/
export declare class NumberInput extends React.Component<React.HTMLAttributes<Element> & NumberInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
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
    /** Determines the max number that can be displayed inside the input.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the min number that can be displayed inside the input.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets or gets the value format of the element.
    *	Property type: any
    */
    get numberFormat(): any;
    set numberFormat(value: any);
    /** Determines the placeholder of the input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines whether ot not the user can enter text inside the input.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets the incremental/decremental step for the value of the element.
    *	Property type: number
    */
    get step(): number;
    set step(value: number);
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
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Returns the value in the desired format.
    * @param {string | number} value. The value to be formatted by the method.
    * @param {any} format?. The object that contains the formatting properties. The argument should contain Intl.NumberFormat valid properties. For example, { style: 'currency', currency: 'EUR' }
    */
    getFormattedValue(value: string | number, format?: any): void;
    /** Returns the number of the input.
    */
    getValue(): void;
    /** Selects the text inside the input or if it is readonly then the element is focused.
    */
    select(): void;
    /** Sets the value of the input.
    * @param {string | number} value. The value to be set.
    */
    setValue(value: string | number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default NumberInput;
