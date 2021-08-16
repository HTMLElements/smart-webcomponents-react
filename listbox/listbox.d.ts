import React from "react";
import { ListBoxProperties } from "./../index";
import { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ListBoxItem } from './../index';
export { ListBoxProperties } from "./../index";
export { Animation, ListBoxDropAction, FilterMode, HorizontalScrollBarVisibility, SearchMode, ListItemMeasureMode, VerticalAlignment, ListSelectionMode, ListBoxSelectionChangeAction, VerticalScrollBarVisibility, ListBoxItem } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface ListBoxProps extends ListBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onBindingComplete?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onItemLabelChange?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ListBox allows the user to select one or more items from a list.
*/
export declare class ListBox extends React.Component<React.HTMLAttributes<Element> & ListBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Enables or disables the ability to drop list items inside the target List box.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Determines the number of color alternations in rows.
    *	Property type: number
    */
    get alternationCount(): number;
    set alternationCount(value: number);
    /** Determines the ending index of color alternations in rows.
    *	Property type: number
    */
    get alternationEnd(): number;
    set alternationEnd(value: number);
    /** Determines the starting index of color alternations in rows
    *	Property type: number
    */
    get alternationStart(): number;
    set alternationStart(value: number);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically.
    *	Property type: boolean
    */
    get autoSort(): boolean;
    set autoSort(value: boolean);
    /** Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the list box.
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
    /** A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item.
    *	Property type: any
    */
    get dragFeedbackFormatFunction(): any;
    set dragFeedbackFormatFunction(value: any);
    /** Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset.
    *	Property type: number[]
    */
    get dragOffset(): number[];
    set dragOffset(value: number[]);
    /** Determines what happens when an item is dropped.
    *	Property type: ListBoxDropAction
    */
    get dropAction(): ListBoxDropAction;
    set dropAction(value: ListBoxDropAction);
    /** Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom'
    *	Property type: any
    */
    get filterCallback(): any;
    set filterCallback(value: any);
    /** Determines the filtering mode.
    *	Property type: FilterMode
    */
    get filterMode(): FilterMode;
    set filterMode(value: FilterMode);
    /** Determines the placeholder for the filter input field.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
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
    /** Determines the visibility of the horizontal Scroll bar.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search.
    *	Property type: SearchMode
    */
    get incrementalSearchMode(): SearchMode;
    set incrementalSearchMode(value: SearchMode);
    /** Sets the height for all list box items. Used only when virtualization is enabled.
    *	Property type: number
    */
    get itemHeight(): number;
    set itemHeight(value: number);
    /** Determines the item width measuring algorithm.
    *	Property type: ListItemMeasureMode
    */
    get itemMeasureMode(): ListItemMeasureMode;
    set itemMeasureMode(value: ListItemMeasureMode);
    /** A getter that returns an array of all ListBox items.
    *	Property type: ListBoxItem[]
    */
    get items(): ListBoxItem[];
    set items(value: ListBoxItem[]);
    /** A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines the placeholder that will be shown when the List box is empty.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Sets or gets the readonly property. If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
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
    /** Determines how many items can be selected depending on the selection mode.
    *	Property type: ListSelectionMode
    */
    get selectionMode(): ListSelectionMode;
    set selectionMode(value: ListSelectionMode);
    /** Determines when listbox selection is achieved - on 'press' or 'release'.
    *	Property type: ListBoxSelectionChangeAction
    */
    get selectionChangeAction(): ListBoxSelectionChangeAction;
    set selectionChangeAction(value: ListBoxSelectionChangeAction);
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
    /** Ensures the item with the target index is in view as the first (top) item in the list box.
    *	Property type: number
    */
    get topVisibleIndex(): number;
    set topVisibleIndex(value: number);
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
    /** Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered when listbox binding is completed.
    *  @param event. The custom event. 	*/
    onBindingComplete?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when selection is changed.
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
    /**  This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
    *   container - The List box that an item was dragged <strong>to.</strong>
    *   data - An object that contains data about the dragging operation like start position, start time, etc.
    *   item - The List item that was dragged.
    *   originalEvent - That original event that was fired.
    *   previousContainer - The List box that an item was dragged <strong>from</strong>.
    *   target - The event target.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a List item is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	originalEvent)
    *   data - An object that contains data about the dragging operation like start position, start time, etc.
    *   item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
    *   originalEvent - The original event that initiates the dragging operation.
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
    *   container - The List box that an item was dragged <strong>to.</strong>
    *   data - An object that contains data about the dragging oepration like start position, start time, etc.
    *   item - The List item that was dragged.
    *   originalEvent - That original event that was fired.
    *   previousContainer - The List box that an item was dragged <strong>from</strong>.
    *   target - The event target.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	selected, 	disabled, 	index, 	label, 	value)
    *   selected - Indicates whether the List item is selected or not.
    *   disabled - Indicates whether the List item is disabled or not.
    *   index - The index of the List item that was edited.
    *   label - The label of the edited List item.
    *   value - The value of the List item that was edited.
    */
    onItemLabelChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user scrolls to the end of the list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user scrolls to the beginning of the list.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the left, inside the listBox.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the right, inside the listBox.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
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
    /** Removes all items from the listBox.
    */
    clearItems(): void;
    /** Unselects all items.
    */
    clearSelection(): void;
    /** Ensures the target item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Returns an item instance from the listBox.
    * @param {string} value. The value of an item from the listBox.
    * @returns {HTMLElement}
  */
    getItem(value: string): Promise<any>;
    /** Returns an array of ListBox items.
    * @returns {{label: string, value: string}[]}
  */
    getItems(): Promise<any>;
    /** Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
    */
    insert(index: number, items: any): void;
    /** Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    insertBefore(node: Node, referenceNode: Node | null): Promise<any>;
    /** Removes an item at a specified index.
    * @param {number} index. The index of the removed item.
    */
    removeAt(index: number): void;
    /** Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Selects an item from the listBox.
    * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
    */
    select(item: string | number | HTMLElement): void;
    /** Unselects an item from the listBox.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    unselect(item: string | HTMLElement): void;
    /** Updates an item from the listBox.
    * @param {number} index. The index of the item that is going to be updated.
    * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
    */
    update(index: number, details: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default ListBox;
