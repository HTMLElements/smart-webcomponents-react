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
    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the specified animation mode determines how animations are displayed.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu that shows matching suggestions from the autocomplete operation. This delay begins after the user stops typing, allowing you to control how quickly the autocomplete dropdown appears in response to user input.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Specifies the source of data that provides the available color options to be loaded into the Input component. The dataSource property accepts one of the following formats:- 'Array of strings': Each string represents a valid color value.- 'Array of objects': Each object should contain attributes (such as label and value) that define the display properties and value of each color option in the list.- 'Callback function': A function that returns an array of items in either of the above formats (strings or objects with the specified attributes).This flexibility allows you to populate the Input with color choices from static lists or dynamic sources, ensuring seamless integration with various data structures.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and may appear visually subdued.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the color palette to be used, including the individual colors and their arrangement or positioning within the user interface. This setting controls both the selection of colors and how they are visually organized or applied throughout the application.
    *	Property type: ColorInputDisplayMode | string
    */
    get displayMode(): ColorInputDisplayMode | string;
    set displayMode(value: ColorInputDisplayMode | string);
    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, top, or bottom. This setting controls where the dropdown button will appear within the interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, this value is an empty string, which means the dropdown's height is determined by the associated CSS variable. If a specific height is provided, it will override the default CSS variable, allowing you to directly control the dropdown's height through this property.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string (""), which means the dropdown's width will be determined by the value of a corresponding CSS variable rather than an explicit pixel or percentage value. You can override the default behavior by providing a specific width (e.g., "200px", "50%") to directly control the dropdown’s size. If left empty, ensure the relevant CSS variable is defined to maintain consistent styling.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies the expected type of input for the form element and informs the browser about the purpose of the field. This allows the user agent (such as a web browser or password manager) to offer relevant, automated suggestions or autofill options to the user, based on previously entered or stored data. This property corresponds to the standard HTML autocomplete attribute, which accepts values like 'on' (enables autofill), 'off' (disables autofill), 'name', 'email', 'organization', 'street-address', and many others. Setting this attribute properly enhances accessibility, improves user experience, and ensures that the browser presents the correct input suggestions for each form field.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Specifies the maximum number of items that can be displayed in the dropdown list as results of a new autoComplete query. When a user enters a search term, only up to this number of matching items will be shown in the dropdown. By default, a maximum of 8 items are visible, ensuring that the dropdown remains manageable and user-friendly. If there are more matching items than the specified maximum, only the first set will be displayed.
    *	Property type: number
    */
    get items(): number;
    set items(value: number);
    /** Sets or retrieves the unlockKey, a unique code or token required to unlock and activate access to the product’s full features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Defines or retrieves the current language code (e.g., 'en', 'fr'), which determines the locale used for displaying messages. This property works together with the messages property to select the appropriate set of localized messages for the specified language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, localize, or adjust the appearance of messages before they are delivered to the user interface.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized string values used throughout the widget’s user interface. This property allows you to customize or translate text elements, such as labels, tooltips, and messages, enabling support for multiple languages. It should be used together with the locale property to ensure that the correct set of localized strings is applied based on the selected language or region.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown menu will open and display the list of matching items based on the user's input.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies the element within an HTML form and is used as the key when the form data is submitted to the server. This allows the submitted data to be organized and referenced by the specified name.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies whether the dropdown menu is currently open (visible) or closed (hidden).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears within the input field when it is empty, providing a hint or example to guide users on the expected input format.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Defines or retrieves the filter query used to narrow down the displayed items. This query is utilized by the autoComplete operation to show only items that match the specified criteria. If the query is set to an empty string, no filtering is applied, and all items from the data source are displayed.
    *	Property type: string | number
    */
    get query(): string | number;
    set query(value: string | number);
    /** Specifies the query mode used for autocomplete operations. This property defines how the autocomplete engine interprets and matches user input against available data, determining the matching algorithm and search behavior (such as prefix, infix, or fuzzy matching) for generating autocomplete suggestions.
    *	Property type: ColorQueryMode | string
    */
    get queryMode(): ColorQueryMode | string;
    set queryMode(value: ColorQueryMode | string);
    /** Specifies whether the input field is editable by the user. If set to true, the user can type text directly into the input. If set to false, the input becomes read-only, and the user can only select from the provided options. When a dataSource is supplied, this property also determines the component's behavior:  - If editable is true, the element functions as a ComboBox, allowing users to enter custom values or select from the list.  - If editable is false, the element acts as a DropDownList, restricting selection to the available options in the dataSource only.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that determines whether the element's content alignment is configured for right-to-left languages, such as Arabic or Hebrew. This ensures proper layout and text direction for locales that require right-to-left reading order.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element's overall appearance, including colors, fonts, backgrounds, and other stylistic properties, to ensure a consistent look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus via the Tab key or programmatically.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or retrieves the current value of the element, allowing you to either update its content programmatically or access its existing value for processing. This is commonly used with form elements such as input, textarea, and select to manage user input dynamically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies the content or controls that will appear within the action section of the color picker component. This determines which buttons, options, or interface elements are available to the user when interacting with the color picker’s action area.
    *	Property type: ColorValueDisplayMode | string
    */
    get valueDisplayMode(): ColorValueDisplayMode | string;
    set valueDisplayMode(value: ColorValueDisplayMode | string);
    /** Specifies the format in which the color value is represented. Supported formats include HEX, RGB, and RGBA. By default, the color format is automatically selected based on the current displayMode setting.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat(): ColorValueFormat | string;
    set valueFormat(value: ColorValueFormat | string);
    get properties(): string[];
    /**  This event is triggered whenever the user modifies the current selection, such as highlighting a different range of text, choosing another item in a list, or altering the selected elements within an interface. It fires immediately after the selection change occurs, allowing you to respond dynamically to user interactions.
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
    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its default, collapsed state.
    */
    close(): void;
    /** Displays the dropdown menu, allowing the user to view and select available options.
    */
    open(): void;
    /** Selects the text inside the input element. If the input is set to readonly, the element will be focused instead, without selecting the text.
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
