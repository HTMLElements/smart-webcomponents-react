import React from "react";
import { CardViewProperties } from "./../index";
import { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn, DataSourceSettings } from './../index';
export { CardViewProperties } from "./../index";
export { Animation, Orientation, CardViewColumnDataType, CardViewCoverMode, DataSourceSettingsSanitizeHTML, DataSourceSettingsDataFieldDataType, DataSourceSettingsDataSourceType, CardViewHeaderPosition, Scrolling, CardViewColumn, DataSourceSettings, DataSourceSettingsDataField } from './../index';
export { DataAdapter } from './../index';
export declare const Smart: any;
export interface CardViewProps extends CardViewProperties {
    className?: string;
    style?: React.CSSProperties;
    onFilter?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
*/
export declare class CardView extends React.Component<React.HTMLAttributes<Element> & CardViewProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Toggles the button for adding new cards.
    *	Property type: boolean
    */
    get addNewButton(): boolean;
    set addNewButton(value: boolean);
    /** Allows reordering by dragging cards.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Describes the height for each card.
    *	Property type: number | null
    */
    get cardHeight(): number | null;
    set cardHeight(value: number | null);
    /** Describes the orientation of the card cells.
    *	Property type: Orientation
    */
    get cellOrientation(): Orientation;
    set cellOrientation(value: Orientation);
    /** Allows collapsing the card content.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value
    *	Property type: CardViewColumn[]
    */
    get columns(): CardViewColumn[];
    set columns(value: CardViewColumn[]);
    /** Describes which data field to be set as cover.
    *	Property type: string
    */
    get coverField(): string;
    set coverField(value: string);
    /** Describes the cover image fit property.
    *	Property type: CardViewCoverMode
    */
    get coverMode(): CardViewCoverMode;
    set coverMode(value: CardViewCoverMode);
    /** Determines the data source for the item that will be displayed inside the card.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
    *	Property type: DataSourceSettings
    */
    get dataSourceSettings(): DataSourceSettings;
    set dataSourceSettings(value: DataSourceSettings);
    /** Allows the edit option for the cards.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
    *	Property type: CardViewHeaderPosition
    */
    get headerPosition(): CardViewHeaderPosition;
    set headerPosition(value: CardViewHeaderPosition);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Describes the scrolling behavior of the element.
    *	Property type: Scrolling
    */
    get scrolling(): Scrolling;
    set scrolling(value: Scrolling);
    /** Describes which data field to be set as title.
    *	Property type: string
    */
    get titleField(): string;
    set titleField(value: string);
    get properties(): string[];
    /**  This event is triggered when a filter has been applied.
    *  @param event. The custom event. 	*/
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when sorting has been applied.
    *  @param event. The custom event. 	*/
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user starts dragging the card.
    *  @param event. The custom event. 	*/
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user is dragging the card.
    *  @param event. The custom event. 	*/
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user dragged the card.
    *  @param event. The custom event. 	*/
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds filtering
    * @param {string[]} filters. Filter information
    * @param {string} operator?. Logical operator between the filters of different fields
    */
    addFilter(filters: string[], operator?: string): void;
    /** Adds a new record
    * @param {number | string} recordId?. The id of the record to add
    * @param {any} data?. The data of the record to add
    * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
    */
    addRecord(recordId?: number | string, data?: any, position?: string): void;
    /** Adds sorting
    * @param {[] | string} dataFields. The data field(s) to sort by
    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
    */
    addSort(dataFields: [] | string, orderBy: [] | string): void;
    /** Begins an edit operation
    * @param {number | string} recordId. The id of the record to edit
    */
    beginEdit(recordId: number | string): void;
    /** Ends the current edit operation and discards changes
    */
    cancelEdit(): void;
    /** Closes any open header panel (drop down)
    */
    closePanel(): void;
    /** Ends the current edit operation and saves changes
    */
    endEdit(): void;
    /** Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
    * @param {number | string} recordId. The id of the record to scroll to
    * @returns {HTMLElement}
  */
    ensureVisible(recordId: number | string): Promise<any>;
    /** Opens the "Customize cards" header panel (drop down)
    */
    openCustomizePanel(): void;
    /** Opens the "Filter" header panel (drop down)
    */
    openFilterPanel(): void;
    /** Opens the "Sort" header panel (drop down)
    */
    openSortPanel(): void;
    /** Removes filtering
    */
    removeFilter(): void;
    /** Removes a record
    * @param {number | string} recordId. The id of the record to remove
    */
    removeRecord(recordId: number | string): void;
    /** Removes sorting
    */
    removeSort(): void;
    /** Shows a column
    * @param {string} dataField. The data field of the column
    */
    showColumn(dataField: string): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default CardView;
