import React from "react";
import { MultiInputProperties } from "./../index";
import { Animation, DropDownButtonPosition, MultiInputQueryMode } from './../index';
export { MultiInputProperties } from "./../index";
export { Animation, DropDownButtonPosition, MultiInputQueryMode } from './../index';
declare let Smart: any;
export { Smart };
export interface MultiInputProps extends MultiInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 MultiInput specifies an input field where the user can enter data. Auto-complete options are displayed for easier input. Allows multiple selection. Selected items are added to the input's value.
*/
export declare class MultiInput extends React.Component<React.HTMLAttributes<Element> & MultiInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Gets or sets the animation mode. When this property is set to 'none', all animations are disabled. Setting it to other supported values enables the corresponding animation effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching results after the user starts typing in the autocomplete field. This delay helps control how quickly suggestions appear, allowing for smoother user experience and reducing unnecessary search operations as the user types.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Specifies the source of data used to populate the MultiInput component. The 'dataSource' property accepts one of the following:- 'Array of Strings or Numbers:' Each element is rendered as a selectable item in the MultiInput list.- 'Array of Objects:' Each object should contain properties, typically such as 'label' (the display text) and 'value' (the underlying value), to define the characteristics of each list item.- 'Callback Function:' A function that returns an array of items in either of the above formats.This flexible configuration allows you to define static lists, complex data structures, or dynamically load items as needed.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Specifies whether the element is active and interactive (enabled), or inactive and unresponsive to user interactions (disabled). When set to disabled, the element cannot be clicked, selected, or modified by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the location where the dropdown button will appear relative to its parent element. Possible values typically include options such as 'left', 'right', 'top', or 'bottom', allowing you to control the visual placement of the button within the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by the associated CSS variable. If you provide a specific value (e.g., '200px', '20rem'), it will override the default CSS-controlled height and explicitly set the dropdown's height to the specified value.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this property is an empty string ('""'), meaning the dropdown's width is determined by a corresponding CSS variable. You can override this behavior by explicitly setting a value (e.g., '"200px"', '"50%"') to directly control the dropdown's width via inline styles, rather than relying on the CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies the intended purpose of the input field and indicates to the browser what type of information is expected from the user. This setting guides the browser in offering automated assistance, such as autocomplete suggestions, when the input is used within a form. The value corresponds directly to the standard HTML autocomplete attribute, which helps user agents (such as browsers) determine whether and how to autofill the field. You can assign values such as 'on' (enable autocomplete), 'off' (disable autocomplete), or more specific values like 'name', 'organization', 'street-address', 'email', and others, to optimize the autofill behavior and improve the user experience.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Specifies the maximum number of matched items to display in the dropdown list in response to a new autoComplete query. By default, up to 8 items will be shown in the dropdown. If more items match the query, only the first 8 will be visible, ensuring the dropdown remains concise and user-friendly. Adjust this value to control how many results are presented to users at once.
    *	Property type: number
    */
    get items(): number;
    set items(value: number);
    /** Sets or retrieves the 'unlockKey' property, a unique key or code required to unlock access to the product’s features or full functionality. Use this property to provide the necessary unlock key when granting access, or to obtain the currently set unlock key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for the component. This property determines which set of localized messages, defined in the messages property, will be displayed. When you update the language, the component automatically uses the corresponding message set from messages to reflect the selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows developers to customize the formatting of messages returned by the Localization Module. This function receives the original message and relevant context, enabling dynamic modification—such as value interpolation, date and number formatting, or applying custom transformations—before the finalized message is delivered to the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the set of text strings used within the widget, allowing these strings to be customized for different languages or regions. This property works together with the locale property to provide localization support, ensuring that UI labels, messages, and other user-facing text can be displayed appropriately based on the selected language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will appear, displaying a list of items that match the user's input.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or retrieves the value of the element's "name" attribute. This attribute is used to identify form elements when submitting data through an HTML form. The value assigned to the "name" attribute is sent as the key in the key-value pair for the form data, allowing the server to process the input accordingly.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates whether the dropdown menu is currently open (true) or closed (false).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text displayed inside the input field before the user enters a value. This text typically provides a hint or example of the expected input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Sets or retrieves the query string used to filter the list of items. This query is applied during the autoComplete operation to determine which items are shown based on the user's input. If the query is an empty string, all items from the data source are displayed without any filtering.
    *	Property type: string | number
    */
    get query(): string | number;
    set query(value: string | number);
    /** Specifies the query mode used for the autocomplete feature. This property defines how user input is matched against available options, determining the matching algorithm (e.g., prefix, infix, or token matching) applied during autocomplete operations. Adjust this setting to control how search suggestions are generated and filtered based on the user's query.
    *	Property type: MultiInputQueryMode | string
    */
    get queryMode(): MultiInputQueryMode | string;
    set queryMode(value: MultiInputQueryMode | string);
    /** Controls whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property specifies how the element behaves if a dataSource is provided:  - If readonly is false, the element functions as a ComboBox, allowing users to either type custom text or select from the list.  - If readonly is true, the element acts as a DropDownList, restricting input to selection only from the available list items; custom text entry is not allowed.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in languages such as Arabic or Hebrew. When enabled, the content within the element will align and flow appropriately to support RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the character or string used to separate multiple selected items within the input field. This delimiter controls how selected values are displayed and parsed, ensuring each item is clearly distinguished in the input.
    *	Property type: string
    */
    get separator(): string;
    set separator(value: string);
    /** Retrieves or assigns an array containing the currently selected values. Each item in the array represents a selected option, allowing for multiple selection handling.
    *	Property type: any
    */
    get selectedValues(): any;
    set selectedValues(value: any);
    /** Specifies whether an additional item should be displayed at the top of the options list. This item functions as a "Select All / Deselect All" control, allowing users to quickly select or unselect all available options in the list.
    *	Property type: boolean
    */
    get selectAll(): boolean;
    set selectAll(value: boolean);
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted from A to Z; if set to false, the items will retain their original, unsorted order.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the sorting order used when sort is enabled. Accepts either asc for ascending order or desc for descending order.
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the type of input allowed in the field. The input type controls the kind of data the user can enter (such as text, email, number, password, etc.), which helps ensure data is entered in the correct format and may trigger specialized keyboards or validation behaviors on supported devices.
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via keyboard navigation (such as the Tab key).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element, or retrieves its current value. Use this property or method to programmatically access or update the element’s value in the DOM. Commonly applied to input fields, textareas, or form elements to manage user input or display dynamic content.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the user changes the current selection within the component. It occurs whenever an item's selection state is updated—such as when a user selects, deselects, or switches between options—allowing you to respond to changes in the selected value or items.
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
    /** Closes the dropdown menu, hiding all available options from view and returning the component to its default inactive state.
    */
    close(): void;
    /** Ensures that the currently selected item remains visible within its container, automatically scrolling the view if necessary to prevent the active item from being hidden or obscured.
    */
    ensureVisible(): void;
    /** Displays the dropdown menu, allowing users to view and select available options.
    */
    open(): void;
    /** Selects all text within the input field. If the input field has the readonly attribute, the method instead focuses the element without selecting its text.
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
export default MultiInput;
