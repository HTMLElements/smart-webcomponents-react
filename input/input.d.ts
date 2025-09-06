import React from "react";
import { InputProperties } from "./../index";
import { DropDownButtonPosition, DropDownOpenPosition, InputQueryMode } from './../index';
export { InputProperties } from "./../index";
export { DropDownButtonPosition, DropDownOpenPosition, InputQueryMode } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies the amount of time, in milliseconds, to wait before displaying the dropdown list of matching suggestions after the user interacts with the autocomplete input. This delay helps control how quickly the dropdown appears, improving user experience by preventing it from opening too rapidly as users type.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Specifies the data source that will be used to populate the Input component. The dataSource property accepts multiple formats:- 'Array of Primitives:' An array of strings or numbers, where each element represents a single list item.- 'Array of Objects:' An array of objects, where each object defines the properties of a list item. The recognized fields for each item object include:  - label (string): The display text for the item.  - value (string | number): The underlying value associated with the item.  - selected (boolean): Indicates whether the item is initially selected.  - prefix (string): HTML content to display before the label.  - suffix (string): HTML content to display after the label.  - title (string): Additional descriptive text, typically used for tooltips.- 'Callback Function:' A function that returns an array of items in either of the formats described above, allowing for dynamic or asynchronous data loading.The prefix and suffix fields can contain HTML, which is rendered respectively before and after the item's label. This allows for additional icons, badges, or formatting as needed to enhance the list item's visual presentation.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When disabled, the element cannot be interacted with or triggered by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Allows you to specify extra CSS class names that will be applied to the Input dropdown element, enabling custom styling or theming beyond the default classes.
    *	Property type: any
    */
    get dropDownClassList(): any;
    set dropDownClassList(value: any);
    /** Specifies the placement of the dropdown button relative to its container or trigger element, such as positioning it above, below, to the left, or to the right. This affects where the dropdown appears on the user interface when activated.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, left, or right.
    *	Property type: DropDownOpenPosition | string
    */
    get dropDownOpenPosition(): DropDownOpenPosition | string;
    set dropDownOpenPosition(value: DropDownOpenPosition | string);
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. To override the default behavior and set a custom height, assign a specific value (such as "200px" or "50%") to this property. If left unset, the component relies on the CSS variable to control its height.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Defines the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing you to control its sizing through your stylesheet. To specify a fixed width, provide a valid CSS width value (e.g., "200px", "100%"). If not specified, the component will fallback to the CSS variable for its width.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies the purpose of the input field and instructs the browser on both the type of data expected and the level of permission granted to automatically assist the user in filling out the form element. This property directly maps to the standard HTML autocomplete attribute, which helps improve user experience by enabling browsers to suggest or autofill relevant data, such as a user’s name, organization, street address, and more. Common values include 'on' (enables autocomplete), 'off' (disables autocomplete), as well as context-specific tokens like 'name', 'email', 'organization', and 'street-address', among others. Using the appropriate value enhances form usability, accuracy, and accessibility.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Specifies the maximum number of matching items that will be displayed in the dropdown menu after a new auto-complete query is performed. By default, the dropdown will show up to 8 items. If the number of matched items exceeds this limit, only the first 8 results will be visible, and additional matches will not be shown unless this value is increased.
    *	Property type: number
    */
    get items(): number;
    set items(value: number);
    /** Retrieves or assigns the unlockKey value used to grant access to the product. The unlockKey serves as a security credential required to unlock and enable product functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting, which determines the localization to be used for displaying content. This property works together with the messages property to select and present language-specific messages or text strings. Setting this property updates the language used throughout the interface, while getting the property returns the currently active language code (e.g., "en", "fr", "es").
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify or structure localized messages before they are delivered to the application, such as adding context, adjusting placeholders, or applying additional formatting logic.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing customizable text strings displayed by the widget, enabling localization for different languages and regions. This property works together with the locale property to allow the widget’s user interface labels, messages, and prompts to be easily translated and adapted for international audiences.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum number of characters a user must enter into the input field before the autocomplete functionality is activated. Once this threshold is reached, the dropdown will open and display a list of matching items based on the user's input.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Sets or retrieves the value of the element’s name attribute. The name attribute uniquely identifies form elements when submitting data through an HTML form. It is used as the key for the form data sent to the server, allowing server-side scripts to access the corresponding value.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates whether the dropdown menu is currently open (true) or closed (false).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text displayed inside the input field when it is empty, providing guidance or an example to the user about the expected input format or content.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Defines or retrieves the filter query used to determine which items are displayed. This query is utilized by the autoComplete operation to match and return relevant items from the data source. If the query is set to an empty string, no filtering is applied, and all available items from the data source are shown.
    *	Property type: string | number
    */
    get query(): string | number;
    set query(value: string | number);
    /** Specifies the autocomplete query mode, which defines how search suggestions are generated. This property controls the matching algorithm used during autocomplete operations, such as whether suggestions are based on prefix, infix, or exact matches within the input text. Adjusting this property allows you to tailor the autocomplete behavior to best suit your application's search experience.
    *	Property type: InputQueryMode | string
    */
    get queryMode(): InputQueryMode | string;
    set queryMode(value: InputQueryMode | string);
    /** Specifies whether the user can enter text directly into the input field. When dropDownButtonPosition is set to 'left' or 'right', the readonly property controls the behavior of the input when a dataSource is provided:    If readonly is false, the element functions as a ComboBox, allowing users to either select an option from the dropdown or type their own input.  If readonly is true, the element acts as a DropDownList, restricting user input to only the items available in the dataSource.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves whether the element's text alignment and layout are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content will display in a direction suitable for RTL locales, ensuring proper reading order and alignment for users of these languages.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether the items should be arranged in alphabetical order. If enabled, the items will be sorted from A to Z based on their names; if disabled, the original order will be preserved.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the sorting order to use when sort is enabled. Accepts either asc for ascending order or desc for descending order.
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Specifies the index of the currently selected item within a list or array. This value indicates which item is active or highlighted, typically starting from zero for the first item.
    *	Property type: number
    */
    get selectedIndex(): number;
    set selectedIndex(value: number);
    /** Specifies the currently selected value from the available options. This property indicates which option is active or chosen by the user within the component.
    *	Property type: string | number
    */
    get selectedValue(): string | number;
    set selectedValue(value: string | number);
    /** Specifies the visual theme applied to the element. The selected theme controls the element’s overall appearance, including colors, fonts, and styling, to ensure consistency with the application's design guidelines.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the type of input expected by the field. Setting the input type controls the kind of data users can enter (e.g., text, number, email, password), impacts the on-screen keyboard on mobile devices, and enables input validation based on the chosen type.
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
    /** When set to true, this property ensures that the element is not focusable and cannot receive keyboard or programmatic focus.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves its current value, depending on how the function is used.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the user changes the current selection, such as selecting different text, items, or options within the interface. It provides an opportunity to respond dynamically to user interactions involving selection changes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user releases a key (keyup) while typing in the Input field, but only if the input’s value has actually changed since the last event.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately when the popup component becomes visible to the user, signaling that the popup has been successfully opened and rendered in the DOM. It can be used to execute custom logic or initialize content whenever the popup appears.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately when the popup window is closed, either by user action (such as clicking the close button) or programmatically via code. It provides an opportunity to execute cleanup tasks, update application state, or respond to the closure of the popup.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user selects (clicks on) an item within the popup list. It allows you to respond to user interactions by executing specific logic or actions when a particular popup list item is chosen.
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
    /** Closes the currently open dropdown menu, hiding its options from view and reverting the interface to its default state.
    */
    close(): void;
    /** Ensures that the currently selected item remains visible within the viewport by automatically scrolling the container as needed. This guarantees that users can always see the active item, even when navigating through a list with limited onscreen space.
    */
    ensureVisible(): void;
    /** Expands the dropdown menu to display all available options for user selection.
    */
    open(): void;
    /** Enhances user interaction by automatically focusing the input element and selecting its text. If the input is set to readonly, the element receives focus but its text is not selected, ensuring consistent behavior based on the input's state.
    */
    select(): void;
    /** Selects an item from a data source based on its value. If your data source is a simple array of strings (e.g., `['Item 1', 'Item 2', 'Item 3']`), you can select an item by passing the exact string value, such as `'Item 1'`. If your data source is an array of objects with `label` and `value` properties (e.g., `[{ label: 'First', value: 1 }, { label: 'Second', value: 2 }]`), you should pass the corresponding `value` property (e.g., `1` for the first item) when calling `selectItem`. This method automatically locates and selects the item whose value matches the argument you provide, whether the values are strings or object properties.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    */
    selectItem(value: string | number): void;
    /** Retrieves an item from the data source by matching its value. For example, if your data source is an array of strings like ['Item 1', 'Item 2', 'Item 3'], you can retrieve an item by passing its exact string value, such as 'Item 1'. If your data source is an array of objects with properties such as { label: 'Item 1', value: 'item1' }, you should pass the specific value (e.g., 'item1') when calling selectItem. The method will return the corresponding item whose value matches the argument you provide.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getItem(value: string | number): any;
    /** Retrieves the currently selected item from the data source.  - If your data source is a simple array of strings—such as `['Item 1', 'Item 2', 'Item 3']`—and the user selects the second item, this method will return `'Item 2'`.- If your data source is an array of objects with properties like `{ label, value }`, the method returns the `value` property of the selected object. For example, with a data source of `[ { label: 'First', value: 1 }, { label: 'Second', value: 2 } ]` and the user selects "Second", the method returns `2`.This ensures the method always returns the relevant value associated with the selected option, based on the structure of the data source.
    * @param {string | number} value. The item's value when the item is an object or string when the item is a string item.
    * @returns {any}
  */
    getSelectedItem(value: string | number): any;
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
export default Input;
