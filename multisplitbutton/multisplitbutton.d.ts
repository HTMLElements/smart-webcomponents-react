import React from "react";
import { MultiSplitButtonProperties } from "./../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode } from './../index';
export { MultiSplitButtonProperties } from "./../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface MultiSplitButtonProps extends MultiSplitButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onButtonClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Buttons group with DropDown and multiple action buttons.
*/
export declare class MultiSplitButton extends React.Component<React.HTMLAttributes<Element> & MultiSplitButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode for the component. When the property is set to 'none', all animations are disabled. For other supported values, the animation mode will determine how visual transitions are rendered.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the data source that provides the information required to generate the element’s permanently visible buttons. This property defines where and how the button data is retrieved, ensuring the buttons remain constantly displayed on the element.
    *	Property type: string[]
    */
    get buttonsDataSource(): string[];
    set buttonsDataSource(value: string[]);
    /** Specifies the data source from which the multi-split button's dropdown menu retrieves and displays its list of options. This setting defines what content appears in the dropdown and enables dynamic or static population of menu items.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Controls whether the jqxMultiSplitButton component is active or inactive. When enabled, users can interact with the jqxMultiSplitButton; when disabled, the component becomes non-interactive and appears visually inactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Controls the visibility of the loading indicator, showing it when active and hiding it when not needed. This allows users to receive visual feedback during content loading or processing operations.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Defines or retrieves the displayMember property, which determines the name of the object property to display in the UI. When binding a data collection using the dataSource property, displayMember specifies which property of each data object should be shown to the user. For example, if dataSource is an array of user objects, setting displayMember to "name" will display the value of the "name" property for each user in the collection.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Specifies the parent container element for the button’s dropdown list (popup). Accepts a CSS selector, an element ID, or the literal value 'body' as the target container. Use this option when a CSS property from an ancestor element is affecting the visibility or display of the dropdown list. By setting the parent container, you can control where the dropdown is rendered in the DOM, helping to resolve issues with overflow, clipping, or z-index caused by parent elements.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Specifies the location where the dropdown button will be displayed relative to its parent element. Possible values may include options such as "left," "right," "top," or "bottom," allowing you to control the alignment and placement of the dropdown button within the user interface.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the behavior of the element's drop-down functionality.  - In 'none' mode, the drop-down will never open, regardless of any user interaction.  - In 'dropDownButton' mode, the drop-down opens only when the dedicated drop-down button on the element is clicked; clicking other parts of the element will have no effect.  - In 'auto' mode, the drop-down opens when any area of the element's top section is clicked, not just the button—providing a more flexible and user-friendly experience.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** When this property is enabled, opening the element’s dropdown will render a transparent overlay layer between the dropdown menu and the rest of the page content. This overlay visually separates the dropdown from the background and can help intercept clicks outside the dropdown to close it or prevent interaction with other elements while the dropdown is open.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the vertical placement of the drop-down list relative to its trigger element. When set to 'auto', the component dynamically chooses whether to display the drop-down above or below the trigger based on available space within the viewport, ensuring that the list remains fully visible without overflow.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies whether the filtering feature is currently active. When set to true, filtering is enabled and data will be filtered according to the specified criteria; when false, all data is shown without applying any filters.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Specifies the filtering behavior applied to the dropdown list when users type or search. This property controls how the available options are filtered and displayed, such as matching items that contain, start with, or exactly match the user's input.
    *	Property type: FilterMode | string
    */
    get filterMode(): FilterMode | string;
    set filterMode(value: FilterMode | string);
    /** Specifies the placeholder text that appears inside the dropdown list's filter input field, providing guidance or example input to help users understand what they can type to filter the list options.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** When enabled, this setting organizes items into groups based on the first letter of each item's value. Note: This option cannot be used if your dataSource is already grouped, as it only applies to flat (ungrouped) collections.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Gets or sets the groupMember property. If groupMember is not explicitly set, it defaults to using the value of the source object's group property.
    *	Property type: string
    */
    get groupMember(): string;
    set groupMember(value: string);
    /** Enhances or retrieves the value of the incrementalSearchDelay property. This property defines the time interval, in milliseconds, that must pass after the user stops typing before the previous search string is cleared. The countdown begins as soon as the user ceases typing, ensuring that only periods of inactivity longer than the specified delay will reset the search input.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Gets or sets the current mode for incremental search, which determines how search input is processed as the user types.
    *	Property type: SearchMode | string
    */
    get incrementalSearchMode(): SearchMode | string;
    set incrementalSearchMode(value: SearchMode | string);
    /** Specifies the vertical dimension (height) of each item, in pixels or another defined unit. This property controls how tall each item appears within the component, affecting layout and spacing.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** The 'itemTemplate' property is a string that specifies the 'id' attribute of an 'HTMLTemplateElement' present in the DOM. This property is used to reference the corresponding template when generating list items, allowing the application to clone and insert the template’s content for each item in the list dynamically. By using an 'HTMLTemplateElement', you can define the structure and layout of individual list items in a reusable, maintainable way.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Specifies the text to be shown alongside the loading indicator when the loader is visible and positioned at either the top or bottom of the component. This text provides context or feedback to users during loading states.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the on-screen location where the loading indicator will be displayed (e.g., top, bottom, center, or custom coordinates).
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Sets or retrieves the unlockKey property, a unique key required to unlock access to the product’s features or content. Use this to programmatically provide or verify the unlock key during authentication or activation processes.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") for localization. This property works together with messages, ensuring the appropriate language-specific messages are displayed or retrieved based on the selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function used in the localization module, typically invoked to handle language changes, translate content, or manage locale-specific operations during application runtime.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing customizable strings and messages displayed by the widget, enabling support for localization and internationalization. This property works together with the language setting to provide appropriate translations based on the user's selected language. Use this object to specify translations for all widget text elements.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies whether the popup is currently visible (open) or hidden (closed) on the screen. This property controls the display state of the popup component.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Prevents users from interacting with the element, disabling all input events such as clicks, typing, or form submissions. The element remains visible, but users cannot select, activate, or modify it in any way.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets the selected indexes of items within the button's dropdown menu. This property allows you to programmatically retrieve or update which items in the dropdown are currently selected.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** Gets or sets the selected values in the button's drop-down menu. This property allows you to retrieve the currently selected options or specify which options should be selected within the drop-down associated with the button.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Specifies the maximum number of items a user is allowed to select. If set to 1, only single selection is permitted; higher values enable multiple selections up to the defined limit.
    *	Property type: MultiSplitButtonSelectionMode | string
    */
    get selectionMode(): MultiSplitButtonSelectionMode | string;
    set selectionMode(value: MultiSplitButtonSelectionMode | string);
    /** Specifies whether the items displayed in the dropdown menu are automatically sorted in alphabetical order. If enabled, all dropdown items will appear in alphabetical sequence; if disabled, items will retain their original order as provided.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Specifies the theme to be applied, which controls the overall appearance and styling of the element, including colors, fonts, backgrounds, and other visual properties. This setting allows for consistent visual presentation across the application or component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via keyboard navigation (such as the Tab key).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies the property of the item object that holds its unique value. This property is used to retrieve or assign the item's value, which is typically leveraged for data binding, form submission, or identifying items within a collection. The value is stored in the specified key of the item object.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Specifies whether virtualization is enabled for the button’s drop-down list. When set to true, virtualization improves performance by only rendering items visible in the viewport, which is useful for large datasets. When set to false, all items are rendered regardless of visibility.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the user clicks on the action button, allowing you to execute custom functionality in response to the user's interaction.
    *  @param event. The custom event. 	*/
    onButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event fires whenever the user modifies the current selection, such as when they highlight different text or select a new item from a list. It is triggered immediately after the selection change occurs, allowing developers to respond dynamically to user selection actions.
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
    /**  This event is triggered when the drop-down list associated with the button is closed, either by user interaction or programmatically. It allows you to perform actions or execute logic after the drop-down menu has been dismissed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown list associated with the button begins to close, either due to user interaction or programmatic actions. It allows you to execute custom logic just before the dropdown is fully closed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on an individual item, allowing you to execute custom logic in response to item selection. The event provides details about the clicked item, such as its identifier or associated data, which can be used for further processing or navigation.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the drop-down list of the button is opened, either by a user action such as clicking or by programmatic interaction. It allows you to perform custom actions or update the UI in response to the drop-down list becoming visible.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered just before the button's dropdown list becomes visible, allowing you to perform actions or modify the dropdown content as it is about to open.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user reaches the bottom of the drop-down list by scrolling, indicating that all available list items have been viewed. This can be used to implement features such as lazy loading or dynamic data fetching when additional items need to be loaded into the drop-down.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the very top (the first item) of the drop-down list. It can be used to detect when the user has reached the beginning of the list, for actions such as loading more items or updating the UI accordingly.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the dropdown list associated with the button, hiding its options from view.
    */
    close(): void;
    /** Returns an instance of the item that appears in the element’s dropdown menu. This instance represents the selected item from the dropdown list, allowing access to its properties and methods.
    * @param {string} value. The value of an item from the drop down list or a button.
    * @returns {HTMLElement}
  */
    getItem(value: string): any;
    /** Returns an array containing all items currently present in the dropdown list of the split button component. Each array element represents an individual dropdown item, allowing you to access or manipulate the complete set of options available in the split button's dropdown.
    * @returns {any[]}
  */
    items(): any;
    /** Inserts a new item into the dropdown list at the specified index, shifting existing items as needed. The new item will appear at the given position within the list, and subsequent items will be moved down to accommodate it.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** Displays the drop-down list associated with the splitButton control, allowing users to view and select available options.
    */
    open(): void;
    /** Removes an item located at the specified index from the drop-down list, updating the list to exclude the removed item and adjusting the positions of subsequent items accordingly.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** Updates a specific item within the drop-down list by modifying its properties or replacing its value with new data. This operation allows you to dynamically change the content displayed for a selected option in the drop-down menu.
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
export default MultiSplitButton;
