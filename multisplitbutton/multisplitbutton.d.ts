import React from "react";
import { MultiSplitButtonProperties } from "./../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode } from './../index';
export { MultiSplitButtonProperties } from "./../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode } from './../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../index";
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines a data source used to generate element's permanently visible buttons.
    *	Property type: string[]
    */
    get buttonsDataSource(): string[];
    set buttonsDataSource(value: string[]);
    /** Determines the data source of the multi split button's dropdown.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables jqxMultiSplitButton.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Displays or hides the loading indicator
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Sets the parent container of the button's dropDown list (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Determines position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
    /** Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
    *	Property type: DropDownOpenMode
    */
    get dropDownOpenMode(): DropDownOpenMode;
    set dropDownOpenMode(value: DropDownOpenMode);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
    *	Property type: DropDownPosition
    */
    get dropDownPosition(): DropDownPosition;
    set dropDownPosition(value: DropDownPosition);
    /** Determines whether the Filtering is enabled.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Determines the filtering for the drop down list mode.
    *	Property type: FilterMode
    */
    get filterMode(): FilterMode;
    set filterMode(value: FilterMode);
    /** Determines the placeholder for the drop down list filter input field.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
    *	Property type: boolean
    */
    get grouped(): boolean;
    set grouped(value: boolean);
    /** Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
    *	Property type: string
    */
    get groupMember(): string;
    set groupMember(value: string);
    /** Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
    *	Property type: number
    */
    get incrementalSearchDelay(): number;
    set incrementalSearchDelay(value: number);
    /** Sets ot gets the mode of the incremental search mode.
    *	Property type: SearchMode
    */
    get incrementalSearchMode(): SearchMode;
    set incrementalSearchMode(value: SearchMode);
    /** Determines the height of the items.
    *	Property type: number | null
    */
    get itemHeight(): number | null;
    set itemHeight(value: number | null);
    /** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** The position of the loading indicator.
    *	Property type: VerticalAlignment
    */
    get loadingIndicatorPosition(): VerticalAlignment;
    set loadingIndicatorPosition(value: VerticalAlignment);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines whether the popup is opened or closed
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets selected indexes of buttons's dropDown.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** Sets or gets selected values of buttons's dropDown.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Determines how many items can be selected.
    *	Property type: MultiSplitButtonSelectionMode
    */
    get selectionMode(): MultiSplitButtonSelectionMode;
    set selectionMode(value: MultiSplitButtonSelectionMode);
    /** Determines whether the items in the dropDown are sorted alphabetically or not
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Determines the value member of an item. Stored as value in the item object.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Determines weather or not Virtualization is used for the button's dropDownList.
    *	Property type: boolean
    */
    get virtualized(): boolean;
    set virtualized(value: boolean);
    get properties(): string[];
    /**  This event is triggered when action button is clicked.
    *  @param event. The custom event. 	*/
    onButtonClick?: ((event?: Event) => void) | undefined;
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
    /**  This event is triggered when button's dropDown list is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when button's dropDown list is closing.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
    *   disabled - Indicates whether the List item that was clicked is disabled or not.
    *   index - Indicates the index of the List item that was clicked.
    *   label - The label of the List item that was clicked.
    *   selected - Indicates whether the List item that was clicked is selected or not.
    *   value - The value of the List item that was clicked.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when button's dropDown list is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when button's dropDown list is opening.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user scrolls to the end of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user scrolls to the start of the dropDown list.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes button's dropDown list.
    */
    close(): void;
    /** Returns an item instance occured in the element's drop down.
    * @param {string} value. The value of an item from the drop down list or a button.
    * @returns {HTMLElement}
  */
    getItem(value: string): Promise<any>;
    /** Returns an array with the items from the split button's dropDown list.
    * @returns {any[]}
  */
    items(): Promise<any>;
    /** Inserts a new item at a specified position in the drop down list.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    insert(position: number, value: any): void;
    /** Opens the splitButton's dropDown list.
    */
    open(): void;
    /** Removes an item at a specified position in the drop down list.
    * @param {number} position. The position of the removed item.
    */
    removeAt(position: number): void;
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
export default MultiSplitButton;
