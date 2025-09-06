import React from "react";
import { ComboBoxProperties } from "./../index";
import { AutoComplete, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, ComboBoxEscKeyMode, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { ComboBoxProperties } from "./../index";
export { AutoComplete, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, ComboBoxEscKeyMode, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface ComboBoxProps extends ComboBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onTokenClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ComboBox is the alternate for the HTML select tag with editable option. It supports data binding, auto-complete, filtering, grouping, cascading and more.
*/
export declare class ComboBox extends React.Component<React.HTMLAttributes<Element> & ComboBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** This property is applicable only when dropDownOpenMode is set to 'auto'. It specifies the amount of time (in milliseconds) the dropdown will remain open after the pointer leaves the element, before it automatically closes. If the pointer is not hovering over the dropdown or its trigger element, the dropdown will close after this delay.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Specifies the autocomplete mode for the input field. The selected mode defines how the component filters and displays items from the dataSource, showing only those entries that match the user's input according to the chosen matching strategy. This setting directly impacts the suggestions presented to the user as they type.
    *	Property type: AutoComplete | string
    */
    get autoComplete(): AutoComplete | string;
    set autoComplete(value: AutoComplete | string);
    /** Specifies the amount of time, in milliseconds, to wait after the user input before displaying the dropdown list of autocomplete suggestions. This delay helps control how quickly the suggestions appear, allowing for smoother user experience and reducing unnecessary searches as the user types.
    *	Property type: number
    */
    get autoCompleteDelay(): number;
    set autoCompleteDelay(value: number);
    /** Enables users to specify one or more custom key names that will trigger the opening of the popup when pressed. This allows for flexible keyboard shortcuts tailored to user preferences or application requirements.
    *	Property type: string[]
    */
    get autoOpenShortcutKey(): string[];
    set autoOpenShortcutKey(value: string[]);
    /** Specifies the source of data to populate the ComboBox. The dataSource can be provided in several formats:- An array of strings or numbers, where each item becomes a selectable option in the ComboBox.- An array of objects, where each object represents a list item and its properties define the displayed information and associated value (e.g., label for display text, value for the underlying value, and optionally group to categorize items).- A callback function that returns an array of items in either of the above formats, enabling dynamic or asynchronous data loading.This flexible dataSource configuration allows the ComboBox to support simple lists, categorized lists, or dynamically retrieved data.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Controls whether the combo box is active or inactive. When enabled, users can interact with the combo box to select or enter a value. When disabled, the combo box is non-interactive and appears grayed out, preventing any user input or selection.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) will be displayed while filtering data locally or when retrieving items from a remote source. This helps inform users that a filtering operation or data fetch is in progress.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or retrieves the displayMember property. The displayMember property defines the specific field name within each data object in the collection provided by the 'dataSource' property. This field's value is used for displaying items in the UI component, allowing you to control which attribute of your data objects is shown to the user.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Specifies the parent container for the dropdown element. The dropDownAppendTo property accepts a CSS selector string, an element's ID, the string value 'body', or a direct reference to an HTML element. By default, the dropdown is appended to its original parent in the DOM. However, if one of the containing elements has CSS properties (such as overflow: hidden) that restrict the dropdown's visibility, you can set this property—commonly to 'body'—to append the dropdown directly to the &lt;body&gt; element and ensure it displays properly.Possible values:- A CSS selector string (e.g., '.container' or '#mainDiv')- The string 'body'- A direct reference to an existing HTML element- An element's ID (as a string)- null (to reset and move the dropdown back to its original parent)This property improves compatibility in layouts with restricted overflow by allowing the dropdown to be rendered in a container of your choosing. Resetting dropDownAppendTo to null restores the dropdown to its initial placement within the DOM.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Specifies the location of the dropdown button relative to its associated input field or container. Possible positions may include "left," "right," "top," or "bottom," allowing developers to control where the dropdown button appears in the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, this property is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. If a specific value is provided, it will override the CSS variable and set the dropdown height explicitly.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the maximum height of the dropdown menu. By default, this value is set to an empty string, which means the dropdown's max-height will be controlled by a CSS variable instead of an explicit value. If you provide a specific value (e.g., "300px" or "50vh"), it will override the default CSS variable and directly set the maximum height of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Defines the maximum width of the dropdown menu. By default, this value is set to an empty string, which means the dropdown's maximum width will be determined by a corresponding CSS variable. If a specific value is provided (e.g., "300px" or "50%"), it will override the CSS variable and directly set the maximum width of the dropdown.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Defines the minimum height of the dropdown component. By default, this property is set to an empty string, which means the dropdown's minimum height is determined by a corresponding CSS variable. If a specific value is provided for this property, it will override the CSS variable and explicitly set the dropdown's minimum height.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Specifies the minimum width of the dropdown component. By default, this property is set to an empty string (""). When left unset, the dropdown’s minimum width is determined by a CSS variable, allowing for flexible styling through external stylesheets. To override the CSS value, assign a specific width value (e.g., "200px" or "10rem") to this property.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Specifies the direction or animation in which the dropdown menu will appear when activated, such as opening upwards, downwards, or with a specific transition effect.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** If this property is enabled, opening the element's dropdown will insert a transparent overlay between the dropdown and the rest of the document. This overlay covers the entire viewport except for the dropdown itself, capturing all click events outside the dropdown. As a result, any clicks outside the popup will interact with the overlay instead of other elements on the page, allowing you to reliably detect and handle outside clicks (such as to close the dropdown) without unintentionally triggering other DOM elements.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the text or content to be shown in the dropdown as a placeholder when the dropdown contains no selectable items. This placeholder provides guidance or context to the user, indicating that there are currently no available options.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Specifies the placement of the dropdown menu relative to its trigger element when opened (e.g., above, below, left, or right). This setting controls where the dropdown appears on the screen in relation to the element that activates it.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, allowing the dropdown's width to be determined by the associated CSS variable (typically via custom properties or theme settings). If a value is provided, it overrides the CSS variable and directly sets the dropdown's width.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies how the element should respond when the Escape key is pressed by the user. This property allows you to define actions such as closing a modal, dismissing a dialog, or triggering a custom event when the Escape key is detected while the element is focused or active.
    *	Property type: ComboBoxEscKeyMode | string
    */
    get escKeyMode(): ComboBoxEscKeyMode | string;
    set escKeyMode(value: ComboBoxEscKeyMode | string);
    /** Specifies whether the filtering feature is active. When set to true, users can apply filters to narrow down displayed data; when false, filtering options are disabled and all data is shown without restriction.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Specifies the placeholder text displayed inside the dropdown list’s filter input field, guiding users on what to enter when searching or filtering options.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Specifies the filtering behavior for the Combo Box, controlling how user input is matched against the available options (e.g., contains, starts with, or exact match). This property determines which options are displayed in the dropdown list as the user types.
    *	Property type: FilterMode | string
    */
    get filterMode(): FilterMode | string;
    set filterMode(value: FilterMode | string);
    /** When enabled, this option automatically groups the items based on the first letter of each item's value or label. Note: This grouping feature is only available if the dataSource does not already include predefined groups. If the dataSource is already grouped, this setting will have no effect.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Specifies which attribute of the dataSource object should be used to group items in the ListBox. By default, if this property (groupMember) is not set, the ListBox will use the 'group' property from each dataSource item to organize groups. This property is particularly useful when loading data from a JSON file, allowing you to designate a specific property from your data objects to determine the grouping of items—especially if your JSON structure uses a different property name for grouping.
    *	Property type: string
    */
    get groupMember(): string;
    set groupMember(value: string);
    /** Displays supplementary helper text beneath the element. This hint is visible exclusively when the element is in focus, providing contextual guidance to users as they interact with the field.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Controls whether the horizontal scroll bar is displayed within the dropdown menu when the content exceeds the available width.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Represents the property name of a List item whose value will be displayed in the input field when a ListItem is selected. This allows developers to control which property of each item is shown in the input, such as displaying the item's value instead of its label. By default, the label property is used for display. This option is useful when you want to customize the displayed content, for example, to show a unique identifier or value rather than the descriptive label.
    *	Property type: string
    */
    get inputMember(): string;
    set inputMember(value: string);
    /** Specifies the expected type of information for the input field and informs the browser about the nature of the data to be entered. This guidance allows user agents (such as browsers and password managers) to determine if they can provide automated assistance—like autofilling relevant values—when the element is used in a form. The value assigned to this property directly maps to the standard HTML autocomplete attribute. Common values include 'on' (enable autocomplete), 'off' (disable autocomplete), 'name' (full name), 'organization' (company or organization), 'email', 'street-address', and many others, as specified by the HTML standard. Using an appropriate value improves user experience, enhances accessibility, and helps maintain privacy and security standards within web forms.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** The 'IncrementalSearchDelay' property defines the duration, in milliseconds, to wait after the user stops typing before clearing the previous search query. This timer begins as soon as the user finishes typing. During this delay period, no new search query will be initiated. Only after the specified delay has elapsed will the current search input be cleared, allowing a new search query to be started. This helps to optimize performance and user experience by preventing unnecessary or premature queries while the user is still entering their search terms.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Configures or retrieves the current mode of incremental search. By default, incremental search is enabled, allowing users to type while the dropdown is focused to quickly filter and highlight matching options. Modifying this setting controls how user input is processed for searching within the dropdown list.
    *	Property type: SearchMode | string
    */
    get incrementalSearchMode(): SearchMode | string;
    set incrementalSearchMode(value: SearchMode | string);
    /** Specifies the height (in pixels) for each list item when rendering the list. This property is only applicable when list virtualization is enabled, as it helps optimize rendering performance by allowing the component to calculate and render only the visible items.
    *	Property type: number
    */
    get itemHeight(): number;
    set itemHeight(value: number);
    /** Specifies the algorithm used to calculate the width of each item. This setting determines how the width of an item is measured, such as using the item's intrinsic content size, a fixed value, or a percentage of the container. Adjust this parameter to control how item widths are determined within the layout.
    *	Property type: ListItemMeasureMode | string
    */
    get itemMeasureMode(): ListItemMeasureMode | string;
    set itemMeasureMode(value: ListItemMeasureMode | string);
    /** A getter method that retrieves and returns an array containing all list ('') elements currently present within the dropdown menu. This allows you to easily access and manipulate every item displayed in the dropdown.
    *	Property type: {label: string, value: string}[]
    */
    get items(): {
        label: string;
        value: string;
    }[];
    set items(value: {
        label: string;
        value: string;
    }[]);
    /** The itemTemplate property is a string that specifies the ID of an HTMLTemplateElement present in the DOM. This template is used to define and customize the structure and content of individual list items, allowing developers to control how each item appears when rendered in the list.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Displays a small text label positioned above the element, typically used to provide context, instructions, or additional information to users.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the text that appears alongside the loading indicator when the loader is visible and positioned at the top or bottom of the component. This text provides users with contextual information or status updates during loading.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the exact location on the user interface where the loading indicator will be displayed, such as at the top, center, or bottom of the screen or component.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Sets or retrieves the unlockKey, a unique value required to grant access to the product’s premium features or activate its full functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting for the component. This property determines which language is used when displaying content from the messages property, allowing for localization and internationalization of displayed messages. Set this property to a supported language code (e.g., "en", "fr") to load the corresponding translations from the messages object.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this callback to modify message text, apply dynamic values, or implement custom formatting logic before the localized messages are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves an object containing localized string values used within the widget’s user interface. This property enables the customization and translation of UI text for different languages or regions. It is intended to be used together with the locale property, allowing you to easily provide or update localized strings according to the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the minimum number of characters a user must enter in the input field before the autocomplete feature is activated and suggestions are displayed.
    *	Property type: number
    */
    get minLength(): number;
    set minLength(value: number);
    /** Specifies the maximum number of characters that can be entered into the input field. Any additional characters beyond this limit will not be accepted. This helps enforce data validation and consistency for user input.
    *	Property type: number
    */
    get maxLength(): number;
    set maxLength(value: number);
    /** Sets or retrieves the value of the element's name attribute. The name attribute uniquely identifies form elements when submitting HTML forms, allowing the form data to be organized and accessed by name on the server side. This attribute is essential for grouping form controls and accurately transmitting user input during form submission.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies whether the popup is currently visible (open) or hidden (closed) in the user interface.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing guidance or example content to the user.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Prevents any user interactions with the element, including clicking, tapping, selecting, hovering, or focusing. While this is enabled, the element will not respond to mouse, keyboard, or touch events, effectively making it non-interactive for users.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s text direction is set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element and its content are aligned according to RTL formatting, ensuring proper display for locales that use right-to-left scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls the visibility of the resize indicator located in the bottom-right corner of the dropdown component. When this property is set to true, users will see a handle allowing them to resize the dropdown area. This property should be used together with the resizeMode property to define both the availability and behavior of the resizing feature.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Specifies whether the drop-down menu is resizable by the user. If resizing is enabled, a resize bar will be displayed along the top or bottom edge of the drop-down, allowing users to click and drag to adjust its height. Disabling this option removes the resize bar and prevents any manual resizing of the drop-down component.
    *	Property type: ResizeMode | string
    */
    get resizeMode(): ResizeMode | string;
    set resizeMode(value: ResizeMode | string);
    /** Specifies the content or value that will appear within the input field, either as a default value, user-entered data, or dynamically generated content. This setting controls what the user sees and interacts with inside the input element.
    *	Property type: SelectionDisplayMode | string
    */
    get selectionDisplayMode(): SelectionDisplayMode | string;
    set selectionDisplayMode(value: SelectionDisplayMode | string);
    /** Sets or retrieves the selected indexes. The selected indexes property is an array containing the numeric indexes of the items that are currently selected. Each value in the array corresponds to the position of a selected item within the overall list or collection. Assigning a new array to this property updates the selection state to match the specified indexes; retrieving it returns the current selection as an array of indexes.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /**   "Sets or retrieves the currently selected indexes. The 'selected' property holds an array of the indices corresponding to the items that are marked as selected. When setting this property, provide an array of indexes to specify which items should be selected. When getting this property, it returns the array of indexes for the currently selected items."
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Specifies the maximum number of items that a user is allowed to select at one time. If this value is set to 1, only single selection is permitted; higher values allow multiple selections up to the defined limit.
    *	Property type: ListSelectionMode | string
    */
    get selectionMode(): ListSelectionMode | string;
    set selectionMode(value: ListSelectionMode | string);
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted alphabetically; if false, the original order will be preserved.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the sorting order for data, allowing you to choose between ascending ("asc") for lowest-to-highest or alphabetical A–Z sorting, and descending ("desc") for highest-to-lowest or Z–A sorting.
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Specifies the visual theme to be applied to the element. The selected theme controls the element’s appearance, including colors, fonts, and other stylistic properties, ensuring a consistent look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Defines the custom content to display within each token when the selectionDisplayMode is set to "tokens". Tokens visually represent selected items in a multi-select interface and are only applicable when multiple selection is enabled. Use this option to customize how each token appears, such as displaying specific text, icons, or additional data for each selected item.
    *	Property type: any
    */
    get tokenTemplate(): any;
    set tokenTemplate(value: any);
    /** If set to true, the element will not be able to receive keyboard or mouse focus, making it inaccessible via tab navigation or programmatic focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Provides functionality to retrieve (get) or assign (set) the current value of the property. When used as a getter, it returns the property's current value. When used as a setter, it updates the property with the specified value.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies which property of each item object should be used as the value for that item. The value designated by valueMember will be stored in the item's value field. This property functions similarly to groupMember, but is focused on identifying the value rather than the group. valueMember is particularly useful when populating a ListBox from a JSON data source, as it allows you to specify which property of your data objects should serve as the unique value for each item in the ListBox.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Controls whether the vertical scroll bar is displayed within the content area, allowing users to scroll vertically when the content extends beyond the visible region.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    /** Determines whether virtualization is enabled for the ComboBox. When virtualization is enabled, the ComboBox can efficiently display a very large number of items—such as a million—by only rendering the visible items in the ListBox and dynamically loading items as needed. This significantly improves performance and reduces memory usage, especially with large data sets.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the user changes the current selection, such as highlighting different text or selecting a new item in a list. It allows you to detect and respond to updates in the selected content or options within the interface.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
    *   addedItems - An array of List items that have been selected.
    *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
    *   index - The index of the List item that triggered the event.
    *   label - The label of the List item that triggered the event.
    *   removedItems - An array of List items that have been unselected before the event was fired.
    *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
    *   value - The value of the List item that triggered the event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop-down list is closed, either by the user selecting an option or by clicking outside the menu. It occurs after the drop-down menu is no longer visible, allowing you to perform actions in response to the menu's closure.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered right before the dropdown list is about to close, providing an opportunity to intervene. By calling event.preventDefault() within the event handler, you can cancel the closing operation, allowing you to perform validation, display a confirmation dialog, or execute custom logic before the dropdown is closed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on a specific item, allowing you to execute custom actions in response to the user's selection. The event provides context about the clicked item, enabling you to access its properties or perform related updates within your application.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dropdown list becomes visible to the user, such as when the user clicks or interacts with the control to expand and display the list of available options. Use this event to execute custom logic when the dropdown menu is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the dropdown list is displayed to the user. Within the event handler, you can prevent the dropdown from opening by calling event.preventDefault(). This allows you to implement custom logic to conditionally allow or block the opening of the dropdown, such as validating conditions or managing user permissions before the list is shown.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user initiates the resizing action on the dropdown component, such as clicking and dragging a resize handle. It allows developers to detect the exact moment when a resize operation on the dropdown begins.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the user has completed resizing the dropdown menu, signaling that the resizing action has ended and the new dimensions have been set.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the bottom of the dropdown list, indicating that all available options have been displayed. It can be used to detect when additional data should be loaded or when no further options remain in the dropdown.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the very beginning (top) of the dropdown list, indicating that no more items are available above the current view.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a token item (also known as a 'pill') is clicked by the user. By handling this event, developers have the opportunity to intercept the default action that would normally occur when the token is clicked—such as opening a dropdown or performing another related operation. To prevent the default behavior from executing, call event.preventDefault() within your event handler function."
    *  @param event. The custom event. 	*/
    onTokenClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new ListItem element to the end of the existing list of items within the specified container element, thereby updating the list to include the newly added item as its last entry.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: Node): any;
    /** Creates and appends one or more new items to the collection or list.
    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
    */
    add(item: any): void;
    /** Removes all existing items from the dropdown list, resulting in an empty list with no selectable options displayed to the user.
    */
    clearItems(): void;
    /** Deselects all currently selected items, ensuring that no items remain selected. This action clears any existing selections and resets the selection state.
    */
    clearSelection(): void;
    /** Closes the currently open drop-down list, hiding all available options from view and returning the component to its collapsed state. This action ensures that the drop-down menu is no longer visible to the user.
    */
    close(): void;
    /** Initiates a data binding process, connecting UI components to the underlying data source. This method refreshes the data source, ensuring that any changes made to the data are reflected in the user interface. It can be used to update displayed information after modifying, adding, or deleting data.
    */
    dataBind(): void;
    /** Scrolls the target item into view within its container, automatically adjusting the scroll position as needed to make sure the entire item is fully visible to the user.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Returns a specific item instance from the dropDown list, allowing you to access the properties and methods of the selected list item. This can be used to retrieve information about the item, such as its value, label, or index within the dropDown.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value: string): any;
    /** Inserts a new item into the array at the specified index position, shifting existing elements to the right to accommodate the new item.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
    */
    insert(position: number, item: any): void;
    /** Inserts a new ListItem element directly before a specified existing ListItem within the list, preserving the order of the remaining items.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: Node, referenceNode: Node | null): any;
    /** Displays and expands the drop-down list, making all available options visible for selection.
    */
    open(): void;
    /** Removes the item located at the specified index or position within a collection (such as an array or list). After removal, the collection is updated so that subsequent items shift to fill the gap, ensuring contiguous indexing.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** Removes a specified ListItem from the collection of items contained within the given element, updating the list to reflect the deletion.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: Node): any;
    /** Selects a specified item from the dropdown list, allowing users to choose one option from the available choices. This action updates the dropdown’s current selection and can trigger any associated event handlers or changes in the application’s state.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item: string | HTMLElement): void;
    /** Deselects a specified item from the dropdown list, removing its selected state and reverting the dropdown to reflect that the item is no longer chosen by the user.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** Updates the selected item in the dropDown list with new data or attributes. This action modifies the existing item rather than adding or removing items from the list, ensuring that any changes are reflected immediately in the user interface. Specify the target item and the updated values to complete the operation.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    update(position: number, value: any): void;
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
export default ComboBox;
