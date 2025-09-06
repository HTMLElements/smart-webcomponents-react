import React from "react";
import { TextBoxProperties } from "./../index";
import { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility } from './../index';
export { TextBoxProperties } from "./../index";
export { Animation, AutoComplete, TextBoxDisplayMode, DropDownOpenMode, DropDownPosition, EscKeyMode, EnterKeyBehavior, HorizontalScrollBarVisibility, ListItemMeasureMode, VerticalAlignment, VerticalScrollBarVisibility } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
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
    /** Controls the animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' will disable all animations.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies whether the text box should automatically receive keyboard focus when the page loads, allowing users to start typing immediately without clicking inside the box.
    *	Property type: boolean
    */
    get autoFocus(): boolean;
    set autoFocus(value: boolean);
    /** Specifies the autocomplete mode used to filter and display suggestions from the dataSource. The selected autocomplete mode determines how input text is matched against the available items, showing only those entries that meet the criteria—for example, items that start with, contain, or exactly match the user's input. This setting helps control the relevance and behavior of suggestion lists shown to the user while typing.
    *	Property type: AutoComplete | string
    */
    get autoComplete(): AutoComplete | string;
    set autoComplete(value: AutoComplete | string);
    /** Specifies the duration (in milliseconds) to wait after the user stops typing before displaying the dropdown with autocomplete suggestions. This delay helps control how quickly the matching results appear, improving performance and user experience by preventing unnecessary searches while the user is still typing.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Specifies the data source that populates the ComboBox options. The dataSource property accepts multiple types:- 'Array of strings or numbers:' Each item will be displayed as both the label and value of a list item.- 'Array of objects:' Each object should contain properties—such as label (displayed text) and value (item value)—that define the corresponding list item’s display and value.- 'Callback function:' You can provide a function that returns an array of items in either of the above forms. This allows for dynamic or asynchronous data loading.This flexible approach lets you easily integrate static lists, complex objects, or data fetched from external sources into the ComboBox.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is active and interactive (enabled) or inactive and unresponsive to user interactions (disabled). When set to "disabled," the element cannot be focused, clicked, or edited by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data or loading items from a remote source. This helps inform users that a background operation is in progress.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or retrieves the displayMember property. The displayMember determines which property of each object in the data source collection (defined by the 'dataSource' property) will be used for display purposes in the user interface. By specifying the name of a property here, you control which value from each data source item is shown to users (e.g., displaying a "name" property from a list of user objects).
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Specifies the visual presentation of characters within the input field, such as whether the characters are visible as plain text, masked (e.g., as password dots), or formatted in a particular style. This attribute controls how users see the inputted content while typing or reviewing their entries.
    *	Property type: TextBoxDisplayMode | string
    */
    get displayMode(): TextBoxDisplayMode | string;
    set displayMode(value: TextBoxDisplayMode | string);
    /** Specifies the parent container to which the dropdown menu is appended in the DOM. By default, the dropdown is rendered within its original parent element. However, if an ancestor element has restricted overflow (e.g., 'overflow: hidden' or 'overflow: auto'), the dropdown may be clipped and not display correctly. To resolve this, you can set the dropDownAppendTo property to ''body'', the ID of a specific HTML element, or a direct reference to an HTML element. When set, the dropdown will be moved to the specified container in the DOM, ensuring it displays properly regardless of overflow constraints in its ancestors. To restore the dropdown to its original parent, reset this property to null. This feature is especially useful for ensuring that dropdowns are visible and functional in complex layouts where parent elements limit visibility due to CSS overflow properties.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's height will be determined by a CSS variable. To customize the dropdown's height directly, you can assign a specific value (e.g., "200px" or "50%") to this property. Otherwise, leaving it empty enables the component to use the height defined by the associated CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Defines the maximum height for the dropdown menu. If no value is set (default is an empty string), the dropdown’s maximum height will be determined by a corresponding CSS variable instead. This allows for dynamic styling via CSS, while still providing the option to specify a fixed maximum height directly through this property.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Specifies the maximum width of the dropdown menu. By default, this property is set to an empty string, meaning that the dropdown's max-width is determined by a corresponding CSS variable. If a specific value (such as '300px' or '100%') is provided, it will override the CSS variable and directly set the maximum width of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Defines the minimum height of the dropdown menu. By default, this property is set to an empty string (""), which means the minimum height is not explicitly specified in the component and will instead be determined by the value of a related CSS variable. If a specific value (such as "200px" or "2rem") is provided, it will override the CSS variable and set the minimum height of the dropdown directly.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Specifies the minimum width of the dropdown menu. By default, this property is set to an empty string, which means the dropdown's minimum width is determined by a corresponding CSS variable. If you provide a specific value (such as '200px' or '20rem'), it will override the CSS variable and set the dropdown's minimum width accordingly.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Specifies the direction or animation style in which the dropdown menu appears when activated (e.g., opens upwards, downwards, or with a fade effect).
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** When this property is enabled, opening the element’s dropdown will create a transparent overlay that covers the entire area between the dropdown and the rest of the webpage. This overlay ensures that any clicks outside the dropdown are intercepted by the overlay itself, rather than interacting with underlying DOM elements. As a result, clicking outside the dropdown can be handled consistently—for example, to close the dropdown—without triggering unintended interactions elsewhere on the page.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the placeholder text that appears in the dropdown menu when there are no available items to display. This text provides guidance or context to users, indicating that the dropdown is currently empty.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Specifies the alignment and placement of the dropdown menu relative to its trigger element when the dropdown is opened, allowing you to control where the menu appears on the screen (e.g., above, below, left, or right of the trigger).
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's width is determined by a corresponding CSS variable, allowing for flexible styling through external or theme-based CSS. To explicitly set a custom width, provide a valid CSS width value (e.g., "200px", "50%").
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies how the element responds when the Escape key is pressed, such as closing a dialog, dismissing a modal, or performing a custom action.
    *	Property type: EscKeyMode | string
    */
    get escKeyMode(): EscKeyMode | string;
    set escKeyMode(value: EscKeyMode | string);
    /** Defines how the "Enter" key functions within the application, such as whether it submits a form, inserts a new line, or triggers a specific action, depending on the context.
    *	Property type: EnterKeyBehavior | string
    */
    get enterKeyBehavior(): EnterKeyBehavior | string;
    set enterKeyBehavior(value: EnterKeyBehavior | string);
    /** Specifies the form element with which this element is associated, known as its "form owner." The value of this attribute must be the ID of a  element present in the same document. This allows the element to be associated with a specific form, even if it is not nested directly within the form’s markup.
    *	Property type: string
    */
    get form(): string;
    set form(value: string);
    /** Provides supplemental helper text displayed beneath the element. This hint appears exclusively when the element is focused, offering contextual guidance to the user during interaction.
    *	Property type: any
    */
    get hint(): any;
    set hint(value: any);
    /** Controls whether the horizontal scroll bar within the dropdown menu is visible. This setting allows you to enable or disable horizontal scrolling for dropdown content that extends beyond the visible area.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Represents the property key of a List item's object that specifies which value should be displayed in the input field when a ListItem is selected. This property is useful when you want to show a value other than the default label—such as a unique identifier or another attribute—within the input. By default, the item's label is shown. Use this option to customize the displayed value based on a different property from your data objects.
    *	Property type: string
    */
    get inputMember(): string;
    set inputMember(value: string);
    /** Defines the purpose of the input field and specifies the type of data expected, providing guidance to browsers and user agents for offering autofill suggestions. This property maps directly to the standard HTML autocomplete attribute, allowing developers to control whether and how a browser can automatically fill in the field based on the user's stored information. Possible values include generic options like 'on' and 'off', as well as more specific data types such as 'name', 'organization', 'email', 'street-address', and others, enabling enhanced user experience and data accuracy in forms.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Specifies the height (in pixels) for each list item when rendering the list.  This property is only applicable if list virtualization is enabled, as it allows the component to accurately calculate and display only the visible items for improved performance.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** Specifies the algorithm used to calculate the width of each item, determining how item widths are measured and displayed within the layout. This setting influences whether widths are fixed, dynamic, or adapt based on content or container size.
    *	Property type: ListItemMeasureMode | string
    */
    get itemMeasureMode(): ListItemMeasureMode | string;
    set itemMeasureMode(value: ListItemMeasureMode | string);
    /** A getter that retrieves and returns an array containing all the list item elements (e.g., '' elements) currently present within the dropdown menu. This allows easy access to all items displayed in the dropdown for further manipulation or inspection.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** The itemTemplate property is a string specifying the id of an HTMLTemplateElement present in the DOM. This template is used to define and customize the structure and content of each item rendered within the list. By referencing the id of an HTMLTemplateElement, you can control how individual list items are displayed, allowing for flexible and reusable item layouts.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Displays a small text label positioned above the element, typically used to provide additional context or information about the element’s purpose.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the text that appears alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the container. This text provides context or status information to users while the loading process is ongoing.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the screen location where the loading indicator will be displayed (e.g., top, bottom, center, etc.), allowing developers to control the visual placement of the loading element within the application's interface.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Defines or retrieves the unlockKey, a unique code or token used to grant access to the product's features or functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language for localization purposes. This property is used together with the messages property, which contains language-specific content or translations. Adjusting the language will determine which set of messages is displayed or utilized within the application.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. This enables you to modify or enhance the localized messages—such as adding prefixes, changing text structure, or injecting dynamic values—before they are displayed to the user.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum number of characters allowed for user input in a text field. This limits how many characters a user can type or paste into the field.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Specifies or retrieves the minimum number of characters a user must type before the auto-complete feature is activated and suggestions are displayed.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Defines or retrieves an object containing the set of strings (such as labels, tooltips, button text, and messages) used throughout the widget interface, allowing these strings to be localized for different languages. This property works together with the language property to ensure the widget’s text content is displayed in the appropriate language for users.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the name attribute of the element. The name attribute specifies a key associated with the element's value when submitting HTML forms, enabling server-side identification and processing of submitted data. This is essential for form controls such as inputs, selects, and textareas.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates whether the dropdown menu is currently expanded (open) and visible to the user, or collapsed (closed) and hidden from view.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing guidance or an example of the expected input to the user.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Prevents any user interaction with the element, disabling actions such as clicking, focusing, hovering, or keyboard input. The element will not respond to any user events while this setting is applied.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that specifies whether the element’s content is aligned for right-to-left (RTL) text direction, supporting languages and locales such as Arabic or Hebrew. When enabled, the element’s layout and text flow will be adjusted to display content appropriately for RTL reading order.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Indicates that the input field is required, meaning the user must provide a value in this field before the form can be submitted successfully. If the input is left empty, the form submission will be blocked and the user will be prompted to complete the required information.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Defines the custom error message displayed to users when the input is marked as required but no value has been entered. If the required field is left empty, this message will be shown to prompt the user to provide the necessary input.
    *	Property type: string
    */
    get requiredMessage(): string;
    set requiredMessage(value: string);
    /** Specifies whether the entire content of the input field should automatically be highlighted (selected) when the input receives focus, allowing users to easily replace or copy the content.
    *	Property type: boolean
    */
    get selectAllOnFocus(): boolean;
    set selectAllOnFocus(value: boolean);
    /** Specifies the theme to be applied, which controls the overall appearance and visual style of the element, including colors, fonts, and other stylistic details.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from the tab order and cannot receive keyboard or programmatic focus. This means users will not be able to navigate to the element using the Tab key or set focus to it via scripts.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves its current value, depending on how the method is used. Useful for reading or updating the content, input, or state of form elements such as text fields, checkboxes, or select menus.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies which property of each item object represents its value. The valueMember setting is particularly useful when binding the ListBox to data from a JSON file as its dataSource and you need to designate a specific property in the JSON objects to be used as the item's value. This is similar to how groupMember works, but instead of grouping items, valueMember tells the ListBox which property to use for the underlying value of each list item. For example, if your JSON objects have an "id" property, setting valueMember to "id" will store the value of the "id" property for each item in the ListBox.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Controls whether the vertical scroll bar within the dropdown menu is visible. This property allows you to specify if users can scroll vertically to view additional dropdown options when the content overflows the visible area.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    get properties(): string[];
    /**  This event is triggered whenever the value in the Text Box changes and is confirmed by the user. Specifically, it fires under two conditions:  1. When the user moves focus away from the Text Box (on blur).  2. When the user presses the 'Enter' key while the Text Box is focused.  This ensures that the event only occurs after the user has finished editing the text, rather than on every keystroke.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
    *   oldValue - The previous value before it was changed.
    *   value - The new value.
    *   type - The type of the event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time a user releases a key (on the keyup event) within the TextBox, but only if the content of the TextBox has changed since the previous event.
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
    /** Closes the drop-down menu associated with the input field. Note: The drop-down appears only when auto-complete functionality is enabled, allowing users to select from suggested options.
    */
    close(): void;
    /** Expands the drop-down menu, allowing users to view and select available options. This drop-down menu is displayed exclusively when the autocomplete feature is enabled, providing relevant suggestions based on user input.
    */
    open(): void;
    /** This method resets the input field to its original, initial value, effectively clearing any changes made by the user and restoring the input to its default state as set when the component or page first loaded.
    */
    reset(): void;
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
export default TextBox;
