import React from "react";
import { CountryInputProperties } from "./../index";
import { DropDownButtonPosition } from './../index';
export { CountryInputProperties } from "./../index";
export { DropDownButtonPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface CountryInputProps extends CountryInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The Country Input specifies an input field where the user can select a country.
*/
export declare class CountryInput extends React.Component<React.HTMLAttributes<Element> & CountryInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
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
    /** Sets or gets an array of country codes which will be used instead of the default one with all countries. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
    *	Property type: any
    */
    get onlyCountries(): any;
    set onlyCountries(value: any);
    /** Determines the placeholder of the input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Sets or gets the selected country of the element. The country code should be ISO 3166-1 alpha-2 codes(https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
    *	Property type: string
    */
    get selectedCountry(): string;
    set selectedCountry(value: string);
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
export default CountryInput;
