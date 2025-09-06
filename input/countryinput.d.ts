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
    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, the element cannot be focused, clicked, or edited by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Allows you to specify extra CSS class names that will be applied to the Input dropdown element, enabling further customization of its appearance and styling.
    *	Property type: any
    */
    get dropDownClassList(): any;
    set dropDownClassList(value: any);
    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This controls where the dropdown button appears in the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown component. By default, this value is set to an empty string, which means the dropdown’s height will be determined by a corresponding CSS variable. If a specific value is provided, it will override the CSS variable and explicitly set the dropdown’s height.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by a designated CSS variable rather than a fixed value. You can set this property to a specific CSS width value (e.g., "200px" or "50%") to override the default behavior and directly control the dropdown's width. If left empty, ensure the relevant CSS variable is properly defined to maintain consistent styling.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies or retrieves the value of the element’s name attribute. This attribute uniquely identifies the element within form data, allowing its value to be included when the form is submitted. The name attribute is essential for correctly grouping and processing user input on the server side during form submission.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates whether the dropdown menu is currently open or closed. This property returns true if the dropdown is visible to the user, and false if it is hidden.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Defines or retrieves an array of country codes to override the default list of all countries. Each country code in the array must be a valid ISO 3166-1 alpha-2 code (see: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), which consists of a two-letter uppercase abbreviation representing each country (e.g., 'US' for United States, 'FR' for France). Use this property to specify a custom subset of countries as needed.
    *	Property type: any
    */
    get onlyCountries(): any;
    set onlyCountries(value: any);
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing a hint to the user about the expected input format or content.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Gets or sets the currently selected country for the element. The value should be provided as an ISO 3166-1 alpha-2 country code (for example, "US" for the United States or "FR" for France). For the complete list of valid country codes, refer to the ISO 3166-1 alpha-2 standard: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
    *	Property type: string
    */
    get selectedCountry(): string;
    set selectedCountry(value: string);
    /** Gets or sets a value that determines whether the element's alignment supports right-to-left (RTL) locales and text direction, typically used for languages such as Arabic or Hebrew. When enabled, the element's content aligns according to RTL layout standards.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual style, including colors, typography, and other design attributes, ensuring consistency with the overall user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via the Tab key or other focus-related interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves its current value, depending on whether an argument is provided. Use this to programmatically update or access the content, state, or data associated with the element (such as the value of an input field or the text of a form control).
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the current selection within the component changes, such as when a user selects a different item or option. It allows you to respond programmatically to selection changes, for example by updating related UI elements or processing the newly selected value.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered every time a key is released within the Input field, but only if the input’s value has changed since the last event. This allows you to respond specifically to user input modifications rather than all key releases.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user selects an item by clicking on it within the popup list. It allows you to respond to user interactions by executing custom logic—such as updating the UI or retrieving additional data—immediately after an item is chosen from the displayed list of options.
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
    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its inactive state.
    */
    close(): void;
    /** Guarantees that the currently active (selected) item remains within the visible area of its container, automatically scrolling as needed to keep the item in view.
    */
    ensureVisible(): void;
    /** Displays the drop-down menu, allowing users to view and select available options from the list.
    */
    open(): void;
    /** Selects the text within the input field. If the input field is set to readonly, it will instead focus the element without selecting the text.
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
