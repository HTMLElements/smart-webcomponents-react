import React from "react";
import { CheckInputProperties } from "./../index";
import { Animation, DropDownButtonPosition, CheckInputQueryMode } from './../index';
export { CheckInputProperties } from "./../index";
export { Animation, DropDownButtonPosition, CheckInputQueryMode } from './../index';
declare let Smart: any;
export { Smart };
export interface CheckInputProps extends CheckInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 CheckInput specifies an input field where the user can enter data. Auto-complete options with checkboxes are displayed for easier input. Checkboxes allow to select/unselect one or multiple items.
*/
export declare class CheckInput extends React.Component<React.HTMLAttributes<Element> & CheckInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animation effects are disabled, resulting in instant transitions without visual motion. For other values, the property enables different types of animations, which govern how elements transition or change states on the interface.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown menu with autocomplete suggestions after the user begins typing. This delay helps control how quickly the matches appear, improving performance and user experience by preventing the dropdown from opening immediately with every keystroke.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Specifies the source of data that populates the Input component. The dataSource property accepts one of the following:- 'Array of primitive values': An array consisting of strings or numbers, where each element represents a list item.- 'Array of objects': An array of objects, where each object defines the properties of a list item—typically using keys such as label for display text and value for the underlying value.- 'Callback function': A function that, when called, returns either of the above array formats (strings, numbers, or objects).This flexibility allows you to provide static data inline, transform or fetch data dynamically, and customize which properties represent the list items.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Specifies whether the element is interactive and can accept user input. When enabled, the element is fully functional; when disabled, the element is rendered inactive and does not respond to user actions such as clicks, typing, or focus.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the placement of the dropdown button relative to its parent element (e.g., top, bottom, left, or right). This setting controls where the dropdown button will appear in the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height is determined by a corresponding CSS variable. You can override the default behavior by explicitly setting a height value, otherwise the component will use the CSS variable to control its height.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's width will be determined by a corresponding CSS variable. If a value is provided, it will override the CSS variable and explicitly set the width of the dropdown. This allows for flexible customization of the dropdown's appearance through either direct property assignment or external styling.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies the intended purpose of the input field and determines whether the user’s browser (user agent) is permitted to offer automated autofill suggestions when the input appears within a form. This attribute provides guidance to the browser about the type of information that should be entered, enhancing both user experience and data accuracy by suggesting relevant values. It corresponds to the standard HTML autocomplete attribute, which can accept a variety of predefined values such as 'on' (to enable autofill), 'off' (to disable autofill), 'name' (for personal names), 'organization' (for company names), 'street-address' (for addresses), and many others. By setting this attribute appropriately, developers can improve form usability and help browsers provide more accurate suggestions based on the expected input type.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Specifies the maximum number of matching items to display in the dropdown list when a new autoComplete query is performed. By default, up to 8 items will be shown in the dropdown. If the total number of matched items exceeds this limit, only the first 8 results will be visible to the user. Adjust this value to control how many suggestions are presented at once in the dropdown interface.
    *	Property type: number
    */
    get items(): number;
    set items(value: number);
    /** Defines the unlockKey property, which stores the unique key required to unlock and access the product. Use this property to set a new unlock key or retrieve the current unlock key associated with the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which language-specific messages from the messages property are displayed. Changing the language will update the content shown to the user based on the corresponding localized messages defined in messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages generated by the Localization Module before they are returned to the application. This enables you to modify, translate, or format localization messages according to specific requirements or user preferences.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized string values used within the widget’s user interface, allowing for text elements to be easily translated into different languages. This property works in conjunction with the locale property to enable internationalization by customizing display text based on the selected language or regional setting.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum number of characters a user must type into the input field before the autocomplete feature becomes active. Once this character threshold is reached, the dropdown will appear, displaying a list of items that match the entered text.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or retrieves the value of the "name" attribute for the element. The "name" attribute identifies the element within an HTML form, and its value is used as the key when the form data is submitted to the server. This allows data associated with the element to be correctly grouped and processed on the server side.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies whether the dropdown menu is currently expanded and visible (open) or collapsed and hidden (closed).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about what to enter.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies or retrieves the query string used to filter items in the data source. This query is utilized by the autoComplete functionality to determine which items should be displayed based on user input. If the query is an empty string, no filtering is applied and all items from the data source are shown.
    *	Property type: string | number
    */
    get query(): string | number;
    set query(value: string | number);
    /** Specifies the autocomplete query mode, which controls how search suggestions are generated and determines the matching algorithm used for the autocomplete operation. This property influences whether autocomplete suggestions are based on prefix matching, fuzzy matching, or other supported algorithms.
    *	Property type: CheckInputQueryMode | string
    */
    get queryMode(): CheckInputQueryMode | string;
    set queryMode(value: CheckInputQueryMode | string);
    /** Specifies whether the user is allowed to enter text directly into the input field. When the dropDownButtonPosition property is set to either 'left' or 'right', the readonly property controls the behavior of the component if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing text input and selection from the data source.  - If readonly is true, it behaves as a DropDownList, restricting input to selection from the provided options only, and preventing manual text entry.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or returns a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, enabling proper display for languages and locales that use RTL scripts, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the character or string used to separate multiple selected items within the input field. This delimiter defines how individual selections are visually and programmatically distinguished from one another in the input’s value.
    *	Property type: string
    */
    get separator(): string;
    set separator(value: string);
    /** Specifies whether an extra option—typically "Select All" or "Deselect All"—is shown at the top of the options list. This option enables users to quickly select or unselect all available items in the list with a single action.
    *	Property type: boolean
    */
    get selectAll(): boolean;
    set selectAll(value: boolean);
    /** Retrieves or assigns an array containing the currently selected values. This property allows you to access the full list of items that have been selected, or update the selection by providing a new array of values.
    *	Property type: any
    */
    get selectedValues(): any;
    set selectedValues(value: any);
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the list will be sorted from A to Z based on item names; if false, the original order will be preserved.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the sorting order to be used when sort is enabled. Set to asc for ascending order or desc for descending order.
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Specifies the visual theme applied to the element, controlling its overall appearance such as colors, fonts, and styles. Themes allow for consistent and customizable styling across elements within the application.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the type of data that the input field accepts (e.g., text, number, email, password). Setting the input type controls the kind of input users can enter and may also influence the on-screen keyboard and validation behavior in web browsers.
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
    /** When set to true, this property prevents the element from being focused, either by keyboard navigation (such as using the Tab key) or by mouse interaction. As a result, the element is removed from the page's tab order and cannot receive input focus.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Retrieves the current value of the element or assigns a new value to it. This property allows you to programmatically access or update the element's value, depending on whether it is used as a getter or a setter. Commonly used with form elements such as input, textarea, and select to read or change user input.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the user modifies the current selection. It occurs whenever the selected item(s) change, allowing you to respond to user interactions such as clicking, typing, or using keyboard navigation to alter the selection state.
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
    /** Closes the dropdown menu, hiding all currently visible options and returning the component to its default collapsed state.
    */
    close(): void;
    /** Ensures that the currently active (selected) item within the list is always scrolled into view, so users can see and interact with their selection even when navigating through long or overflowing content.
    */
    ensureVisible(): void;
    /** Displays the dropdown menu, making its list of selectable options visible to the user.
    */
    open(): void;
    /** Selects the text inside the input field. If the input field is set to readonly, the function does not select the text but instead sets focus to the element. This ensures interactive behavior depending on whether the input can be edited.
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
export default CheckInput;
