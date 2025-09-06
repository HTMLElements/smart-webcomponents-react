import React from "react";
import { DropDownListProperties } from "./../index";
import { DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { DropDownListProperties } from "./../index";
export { DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface DropDownListProps extends DropDownListProperties {
    className?: string;
    style?: React.CSSProperties;
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The DropDownList is a form component that lets you choose a single predefined value from a list. It is a more advanced version of the 'select' tag.
*/
export declare class DropDownList extends React.Component<React.HTMLAttributes<Element> & DropDownListProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** This property applies exclusively when dropDownOpenMode is set to 'auto'. It specifies the amount of time (in milliseconds) to wait before automatically closing the open drop-down if the user's pointer (mouse or touch) is no longer hovering over the drop-down element. A higher value increases the delay before closing, while a lower value causes the drop-down to close more quickly when the pointer leaves.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Specifies the source of data that populates the DropDownList. The 'dataSource' property accepts:- An array of strings or numbers (e.g., '['Option 1', 'Option 2']'), where each element becomes a list item.- An array of objects, where each object defines the properties of a list item. Common object attributes include:    - label: The text displayed for the list item.    - value: The underlying value associated with the list item.    - group (optional): Used to group items under a common category.- A callback function that returns an array in either of the above formats.This flexibility allows you to easily provide simple lists or complex, structured data for display in the DropDownList.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and may appear visually distinct (e.g., grayed out).
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies whether a visual indicator (such as a loading spinner or progress bar) is displayed while filtering data or loading items from a remote source. This helps inform users that a background operation is in progress.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or retrieves the displayMember property. The displayMember defines which property of the objects within the collection (specified by the dataSource property) should be shown in the UI. When binding a data source containing objects, displayMember indicates the key whose corresponding value will be rendered for each item in the component's display.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** ''Specifies the parent container for the dropdown menu. The value can be a CSS selector, an element ID, the string ''body'', or a direct reference to an HTML element. By default, the dropdown is rendered within its original parent. However, if a parent element restricts overflow (e.g., 'overflow: hidden'), setting this property to ''body'' or another container allows the dropdown to be rendered elsewhere in the DOM. This ensures that the dropdown remains visible and fully functional even when its original parent would otherwise clip or hide it.The dropDownAppendTo property accepts:- A string representing a CSS selector or element ID (e.g., ''#container'' or ''.custom-dropdown-wrapper''),- The string ''body'' to append directly to the document body,- Or a direct reference to an HTML element.To revert the dropdown to its original parent container, set dropDownAppendTo to 'null'. This flexibility helps accommodate layouts where dropdown overflow is restricted by ancestor elements.'Example Usage:''''json{  "dropDownAppendTo": "body"}'''or'''json{  "dropDownAppendTo": "#customContainer"}'''or'''json{  "dropDownAppendTo": null}'''
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Specifies the alignment or placement of the dropdown button relative to its container or associated input field. This setting controls where the dropdown button appears—such as to the left, right, top, or bottom—within the user interface component.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown component. By default, this property is set to an empty string, which means the dropdown's height will be determined by a corresponding CSS variable. If a specific value is provided (e.g., "200px" or "50%"), it directly sets the dropdown's height, overriding the CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Defines the maximum height of the dropdown component. By default, this property is set to an empty string, meaning the dropdown’s maximum height will be determined by the associated CSS variable rather than a fixed value. Setting a specific value (such as '"200px"' or '"50vh"') will override the CSS variable and directly control the dropdown's maximum height. If left as an empty string, ensure that the relevant CSS variable is defined to maintain consistent dropdown sizing.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Specifies the maximum width of the dropdown menu. By default, this property is set to an empty string, meaning the dropdown's maximum width will be determined by a corresponding CSS variable (typically via a style such as --dropdown-max-width). To override the CSS variable and set a specific maximum width, provide a valid CSS width value (e.g., "300px" or "50%") for this property.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Specifies the minimum height for the dropdown menu. By default, this property is set to an empty string (""). When left empty, the dropdown's minimum height is determined by a corresponding CSS variable, allowing you to control the minimum height through your stylesheet. If a specific value is provided (such as '200px' or '3rem'), it directly sets the minimum height of the dropdown, overriding the CSS variable.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Specifies the minimum width of the dropdown menu. By default, this value is an empty string, which means the dropdown’s minimum width is determined by a CSS variable rather than a fixed value. If a specific width is provided, it overrides the CSS variable, setting the dropdown’s minimum width to the specified value.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Specifies the direction or animation style in which the dropdown menu will appear when activated, such as opening upwards, downwards, to the left, to the right, or with a specific transition effect.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** If this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the document. The overlay ensures that any clicks outside of the dropdown are captured by the overlay itself, rather than interacting with other DOM elements on the page. This behavior allows the dropdown to be closed when users click outside of it, and prevents unintended interactions with background content while the dropdown is open.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the text displayed in the dropdown list when no option is currently selected, serving as a placeholder to guide the user.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Specifies the placement of the dropdown menu relative to its trigger element when opened, such as above, below, to the left, or to the right. This setting ensures the dropdown appears in the desired location on the screen when activated.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the width of the dropdown component. By default, this property is set to an empty string (""). When left empty, the dropdown’s width is determined by a corresponding CSS variable, allowing for flexible styling through external stylesheets. You can override this by providing a specific width value (e.g., "200px" or "50%"), which will directly set the dropdown’s width in the component’s inline styles.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Specifies whether the filtering feature is active, allowing users to narrow down or refine the displayed data based on specific criteria. Set this option to true to enable filtering, or false to disable it.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Specifies the placeholder text displayed within the filter input field inside the dropdown. This input field is visible only when the filterable option is enabled, providing users with a prompt or hint about the expected input for filtering dropdown options.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Specifies the filtering behavior applied to the dropdown list, such as how user input is used to match and display available options. This setting controls whether the dropdown filters items by starting characters, contains matching text, or applies a custom filtering strategy.
    *	Property type: FilterMode | string
    */
    get filterMode(): FilterMode | string;
    set filterMode(value: FilterMode | string);
    /** A callback function that must return a filtering condition (typically a boolean or a predicate function) to determine whether each item should be included or excluded from the results. This is specifically used when filterMode is set to 'custom', allowing you to implement your own custom filtering logic for items.
    *	Property type: any
    */
    get filterCallback(): any;
    set filterCallback(value: any);
    /** When enabled, this option will automatically group the items by the first letter of each item's value. Note: This setting cannot be used if the dataSource already includes predefined groups, as grouping by first letter is only applicable to flat, ungrouped data.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Specifies which property of each object in the dataSource should be used to group items in the ListBox. By default, the ListBox looks for a property named group in each data object to determine grouping. Setting the groupMember attribute allows you to define a custom property name to use for grouping instead. This is particularly useful when your data is loaded from a JSON file and the grouping property has a name other than "group".
    *	Property type: string | null
    */
    get groupMember(): string | null;
    set groupMember(value: string | null);
    /** Specifies supplementary helper text that appears below the element. This hint is displayed exclusively when the element is in focus, providing contextual guidance to the user as they interact with the field.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Controls whether a horizontal scroll bar is displayed within the dropdown menu. Enabling this option allows users to scroll horizontally to view content that extends beyond the visible width of the dropdown.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility | string;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility | string);
    /** Represents the specific property name of an item within a List that should be displayed in the input field when a ListItem is selected. This allows developers to control which attribute of the List data appears in the input—such as displaying an item's value (e.g., an ID or code) instead of its label or name. This property is useful when you want to show a value other than the default label in the input element. By default, the input will display the item's label unless a different property name is specified.
    *	Property type: string
    */
    get inputMember(): string;
    set inputMember(value: string);
    /** The 'IncrementalSearchDelay' property defines the time interval, in milliseconds, that must elapse after the user stops typing before the previous search query is automatically cleared. This delay timer begins counting once the user has stopped input, preventing the search from triggering immediately with each keystroke. Only after the specified delay has passed can a new search query be initiated, ensuring that searches are not executed too frequently and improving performance for incremental search operations.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Gets or sets the incremental search mode for the dropdown. When incremental search is enabled (the default setting), typing while the dropdown is focused will automatically search and highlight matching items based on the input characters. This property allows you to enable or disable this behavior as needed.
    *	Property type: SearchMode | string
    */
    get incrementalSearchMode(): SearchMode | string;
    set incrementalSearchMode(value: SearchMode | string);
    /** Specifies the height (in pixels) for each list item when rendering the component. This property takes effect only when virtualization is enabled, ensuring consistent and accurate item measurements for optimized scrolling performance.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** Specifies the algorithm used to calculate the width of each item, affecting how items are sized and displayed within the layout. Select the desired measurement method to control item width behavior.
    *	Property type: ListItemMeasureMode | string
    */
    get itemMeasureMode(): ListItemMeasureMode | string;
    set itemMeasureMode(value: ListItemMeasureMode | string);
    /** A getter that retrieves and returns an array containing all list item elements ('') currently present within the dropdown menu. This allows easy access to each item for further processing or manipulation.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** The 'itemTemplate' property accepts either a string representing the 'id' of an 'HTMLTemplateElement' present in the DOM, or a direct reference to an 'HTMLTemplateElement' object. This template is used to define and customize the layout and content of each item rendered within the list. By specifying an 'itemTemplate', developers can control exactly how each list item appears, enabling advanced customization beyond default rendering.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Displays a small text label positioned above the element, typically used to provide additional information or context, such as a tooltip, caption, or section heading.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the text label that appears alongside the loading indicator when it is visible and positioned at either the top or bottom of the component. This text provides additional context or messaging to users during loading states.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the exact location on the user interface where the loading indicator will appear (e.g., top, center, bottom, or custom coordinates), allowing you to control its placement during loading operations.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Defines or retrieves the 'unlockKey' property. The 'unlockKey' is a unique identifier or code required to unlock access to the product’s features or content. Setting this property assigns the key needed for authentication or activation, while getting it retrieves the currently assigned unlock key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., 'en', 'es', 'fr') used by the application or component. This property works together with the messages property, allowing you to display localized content based on the selected language. When you change the language, the corresponding localized messages from the messages object will be used throughout the interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify or enhance how translated messages are structured, displayed, or processed before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object containing all text strings displayed by the widget, allowing for easy localization of the interface. This property can be used to get the current set of localizable strings or to provide custom translations for different languages. It works together with the locale property to determine which set of strings is shown to the user based on their selected language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. This attribute assigns an identifier to the element, which is used when submitting HTML forms to associate the element's data with a key in the form submission. The name attribute is essential for correctly processing form data on the server side.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies whether the popup is currently visible (open) or hidden (closed).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears within the selection field of the element when no option has been chosen. This text provides guidance or an example to the user before a selection is made.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Prevents any user interaction with the element, making it unresponsive to mouse, keyboard, touch, or other input events such as clicks, focus, or drag actions. While disabled, the element cannot be interacted with or activated by the user.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves whether the element's text direction is set to right-to-left (RTL) alignment, which is typically used for languages such as Arabic or Hebrew. This property ensures that the element correctly displays content according to the reading direction of right-to-left locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether the resize indicator, located in the bottom-right corner of the dropdown, should be visible. This visual cue allows users to resize the dropdown if enabled. This property works in combination with the resizeMode setting, which controls the behavior of resizing.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Specifies whether the drop-down menu can be resized by the user. If resizing is enabled, a resize handle appears at either the top or bottom edge of the drop-down, allowing users to adjust its height interactively. This enhances usability by enabling users to customize the visible area of the drop-down content.
    *	Property type: ResizeMode | string
    */
    get resizeMode(): ResizeMode | string;
    set resizeMode(value: ResizeMode | string);
    /** Specifies the content or list of options that will appear in the drop-down selection field for users to choose from.
    *	Property type: SelectionDisplayMode | string
    */
    get selectionDisplayMode(): SelectionDisplayMode | string;
    set selectionDisplayMode(value: SelectionDisplayMode | string);
    /** Sets or retrieves the selected indexes. The selected indexes property is an array containing the numeric indexes of the items that are currently selected. You can assign an array of indexes to select specific items, or read this property to determine which items are currently selected.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** Gets or sets the indexes of selected items. The 'selected' values correspond to the indices of the items that are currently selected. When setting, provide an array of item indexes to indicate which items should be marked as selected. When getting, returns an array containing the indexes of the currently selected items.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Specifies the maximum number of items that a user is allowed to select at one time. If set to 1, only single selection is permitted; higher values allow for multiple selections up to the defined limit.
    *	Property type: ListSelectionMode | string
    */
    get selectionMode(): ListSelectionMode | string;
    set selectionMode(value: ListSelectionMode | string);
    /** Specifies whether the items are arranged in alphabetical order. If set to true, the items will be sorted alphabetically (A–Z); if false, the original order of the items will be preserved.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the sorting order for data:  - Use "asc" for ascending order (e.g., A-Z, 0-9).- Use "desc" for descending order (e.g., Z-A, 9-0).
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styles, ensuring a consistent and customized look for the element.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Defines a custom template for rendering each token's content when the selectionDisplayMode property is set to 'tokens'. This allows you to control the appearance and structure of individual tokens displayed in the selection area.
    *	Property type: any
    */
    get tokenTemplate(): any;
    set tokenTemplate(value: any);
    /** If set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or other keyboard navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or retrieves the current selection values. When called, this function returns an array of objects representing the selected items, where each object has the following structure: { label: string, value: any }. Return type: Array.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines which property of each item object should be used as the item's value. The value specified by valueMember will be stored as the value of the ListBox item. This property is particularly useful when populating the ListBox from a JSON dataSource, and you want to designate a specific field from each JSON item (such as id, code, or another unique identifier) to serve as the item's value. Similar to groupMember, valueMember helps map a property in your JSON objects directly to the ListBox value, ensuring the correct data is referenced and used when working with item selections or submissions.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Controls whether the vertical scroll bar is displayed within the container. Set this property to enable, disable, or automatically show the scroll bar based on the content's height relative to the container.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility | string;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility | string);
    /** Specifies whether virtualization is enabled for the dropdown component. When virtualization is enabled, the dropdown can efficiently handle and display a large number of items—such as one million—by rendering only the visible items rather than all items at once. This significantly improves performance and responsiveness, even when working with vast datasets.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the user clicks the action button. Note that the action button is only visible if the dropDownOpenMode property is set to 'dropDownbutton'. If dropDownOpenMode is set to any other value, the action button will be hidden and this event will not be triggered.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user modifies their current selection, such as selecting or deselecting one or more items within a list, dropdown, or input field. It fires immediately after the selection change has occurred, allowing you to respond dynamically to user interactions.
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
    /**  This event is triggered when the dropdown list is closed, either by selecting an item, clicking outside the dropdown, or pressing the Escape key. It allows you to execute custom actions after the dropdown is no longer visible to the user.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the drop-down list is about to close. By handling this event, you have the opportunity to prevent the drop-down from closing by calling event.preventDefault() within your event handler function. This is useful if you need to perform additional validation or asynchronous operations before allowing the drop-down to close.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks on the dropdown button, allowing you to execute custom logic in response to the user's action of opening or interacting with the dropdown menu.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on an individual item within the interface. It provides contextual information about the selected item, allowing you to perform actions such as displaying details, initiating edits, or handling custom behaviors in response to the user's selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dropdown list component becomes visible to the user, such as when a user clicks on the dropdown control to display its list of selectable options.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the dropdown list is displayed. Within the event handler, you can prevent the dropdown from opening by calling event.preventDefault(). This provides an opportunity to execute custom logic or perform validation before allowing the dropdown to appear.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user initiates the action of resizing the dropdown menu. It occurs as soon as the user begins to adjust the dropdown's dimensions, such as by clicking and dragging the resize handle or border.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the user has completed resizing the dropdown component. It fires once the resize action has ended, allowing you to perform actions such as updating the layout or saving the new dimensions of the dropdown.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the bottom of the dropDown list, indicating that all available options have been displayed. It can be used to load additional items dynamically (infinite scroll) or to perform specific actions once the end of the list is reached.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the very top (beginning) of the drop-down list, indicating that there are no more items above the currently visible options.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new ListItem element to the end of the existing list of items within the specified parent element. This operation updates the parent element’s children by adding the new ListItem as the last item in the sequence, preserving the order of existing items.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: Node): any;
    /** Adds one or more new items to the collection, array, or list. This action typically appends the provided item(s) to the existing data structure, increasing its size. Specify the items to be added as input parameters.
    * @param {any} item. Describes the properties of the item that will be inserted. You can also pass an array of items.
    */
    add(item: any): void;
    /** Removes all items from the drop-down list, clearing its contents and leaving the list empty. This action ensures that no selectable options remain within the drop-down component.
    */
    clearItems(): void;
    /** Deselects all currently selected items, ensuring that no items remain selected.
    */
    clearSelection(): void;
    /** Closes the currently open dropdown list, hiding all available options from view and returning the dropdown to its default collapsed state. This action does not select or modify any options within the list.
    */
    close(): void;
    /** Initiates the data binding process, updating the user interface with the latest values from the data source. This method can be used to refresh or re-sync the UI whenever the underlying data changes, ensuring that displayed information remains current and accurate.
    */
    dataBind(): void;
    /** Scrolls the view to bring the specified item into the visible area of its container, ensuring that the item is fully or partially visible to the user. This enables users to locate and interact with the desired item without manual scrolling.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Returns the selected item instance from the dropDown list. This method retrieves the full object representing the currently chosen entry, including all associated properties and values, allowing further manipulation or data access within your application.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value: string): any;
    /** Inserts a new item into the collection at the specified index, shifting existing items at and after that position one place to the right.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** Inserts a new ListItem element into the list directly before a specified existing ListItem, adjusting the list order accordingly.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: Node, referenceNode: Node | null): any;
    /** Displays the drop-down list, allowing users to view and select from the available options.
    */
    open(): void;
    /** Removes the item located at the specified index or position within the collection, shifting any subsequent items to fill the gap. If the specified position is out of range, no changes are made to the collection.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** Removes a specified ListItem element from the collection of child items within the parent element, effectively updating the list's contents to exclude the targeted item.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: Node): any;
    /** Selects a specific item from the dropdown list based on the user's input or selection criteria. This action updates the dropdown's displayed value to the chosen item and may trigger any associated event handlers or callbacks.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item: string | HTMLElement): void;
    /** Removes the currently selected item from the dropdown list, restoring the dropdown to its unselected or default state. This action ensures that no item remains highlighted or chosen within the dropdown component.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** Updates the selected item in the dropDown list with new data or values. This action modifies the existing item rather than adding a new entry or removing an existing one, ensuring that the dropDown reflects the most current information.
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
export default DropDownList;
