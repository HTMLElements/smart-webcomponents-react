import React from "react";
import { DropDownListProperties } from "./../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { DropDownListProperties } from "./../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ResizeMode, SelectionDisplayMode, ListSelectionMode, VerticalScrollBarVisibility } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether an indicator will appear during filtering and remote item loading.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
    /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** Determines how the drop down is going to open.
    *	Property type: DropDownOpenMode
    */
    get dropDownOpenMode(): DropDownOpenMode;
    set dropDownOpenMode(value: DropDownOpenMode);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the placeholder for the drop down list when it's empty.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
    /** Determines the position of the drop down when opened.
    *	Property type: DropDownPosition
    */
    get dropDownPosition(): DropDownPosition;
    set dropDownPosition(value: DropDownPosition);
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Determines whether filtering is enabled.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Determines the filtering mode of the drop down list.
    *	Property type: FilterMode
    */
    get filterMode(): FilterMode;
    set filterMode(value: FilterMode);
    /** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
    *	Property type: string | null
    */
    get groupMember(): string | null;
    set groupMember(value: string | null);
    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Determines the visibility of the horizontal Scroll bar inside the drop down.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
    *	Property type: string
    */
    get inputMember(): string;
    set inputMember(value: string);
    /** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
    *	Property type: SearchMode
    */
    get incrementalSearchMode(): SearchMode;
    set incrementalSearchMode(value: SearchMode);
    /** Sets the height for all list items. Used only when virtualization is enabled.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** Determines the item width measuring algorithm.
    *	Property type: ListItemMeasureMode
    */
    get itemMeasureMode(): ListItemMeasureMode;
    set itemMeasureMode(value: ListItemMeasureMode);
    /** A getter that returns an array of all List items inside the drop down.
    *	Property type: any
    */
    get items(): any;
    set items(value: any);
    /** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Sets a little text label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Determines the position of the loading indicator.
    *	Property type: VerticalAlignment
    */
    get loadingIndicatorPosition(): VerticalAlignment;
    set loadingIndicatorPosition(value: VerticalAlignment);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the popup is opened or not.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the element's placeholder, displayed in the element's selection field.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
    *	Property type: ResizeMode
    */
    get resizeMode(): ResizeMode;
    set resizeMode(value: ResizeMode);
    /** Determines what will be displayed in the dropDown selection field.
    *	Property type: SelectionDisplayMode
    */
    get selectionDisplayMode(): SelectionDisplayMode;
    set selectionDisplayMode(value: SelectionDisplayMode);
    /** Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Determines how many items can be selected.
    *	Property type: ListSelectionMode
    */
    get selectionMode(): ListSelectionMode;
    set selectionMode(value: ListSelectionMode);
    /** Determines whether the items are sorted alphabetically or not
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Determines sorting direction - ascending(asc) or descending(desc)
    *	Property type: string
    */
    get sortDirection(): string;
    set sortDirection(value: string);
    /** Determines the theme for the element. Themes define the look of the elements.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'.
    *	Property type: any
    */
    get tokenTemplate(): any;
    set tokenTemplate(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Determines the visibility of the vertical scroll bar.
    *	Property type: VerticalScrollBarVisibility
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility);
    /** Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the selection is changed.
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
    /**  This event is triggered when the drop down list is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down list is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the resizing of the drop down is finished.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the end of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls to the start of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    appendChild(node: Node): Promise<any>;
    /** Removes all items from the drop down list.
    */
    clearItems(): void;
    /** Unselects all items.
    */
    clearSelection(): void;
    /** Closes the dropDown list.
    */
    close(): void;
    /** Ensures the desired item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Returns an item instance from the dropDown list.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    getItem(value: string): Promise<any>;
    /** Inserts a new item at a specified position.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: Node, referenceNode: Node | null): Promise<any>;
    /** Opens the dropDown list.
    */
    open(): void;
    /** Removes an item at a specified position.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
    /** Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Selects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    select(item: string | HTMLElement): void;
    /** Unselects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** Updates an item from the dropDown list.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default DropDownList;
