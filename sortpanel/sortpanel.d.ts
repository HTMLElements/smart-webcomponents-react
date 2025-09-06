import React from "react";
import { SortPanelProperties } from "./../index";
import { Animation, SortPanelCloseButtonPosition } from './../index';
export { SortPanelProperties } from "./../index";
export { Animation, SortPanelCloseButtonPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface SortPanelProps extends SortPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 SortPanel allows you to add and remove sort columns and update the sort order of the columns.
*/
export declare class SortPanel extends React.Component<React.HTMLAttributes<Element> & SortPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the component. You can retrieve or assign a value to this property. When set to 'none', all animations are disabled, and the component will appear or update instantly without any transition effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Sets or retrieves the position of the close button within each item of the sort panel, allowing you to specify where the close button appears (such as left, right, or a custom location) for improved user interface customization.
    *	Property type: SortPanelCloseButtonPosition | string
    */
    get closeButtonPosition(): SortPanelCloseButtonPosition | string;
    set closeButtonPosition(value: SortPanelCloseButtonPosition | string);
    /** Specifies the data source to be displayed in the sort panel.Each entry in the dataSource array represents a sortable column and is defined as an object with the following properties:      dataField: The unique identifier for the column to be sorted, typically corresponding to a key in your dataset.        dataType: The type of data contained in the column (e.g., string, number, date), which can influence sorting behavior.        label: The display name of the column, as shown in the column selection menu of the sort panel.        icon: The CSS class name applied to the column’s visual representation in the selection menu, allowing for custom icons or symbols.        sortDirection: The initial sort direction for the column. Accepted values are 'ascending' and 'descending'.        sortIndex: Determines the initial sort order among multiple columns; columns are sorted in ascending order based on this index. A value of -1 means the column is not sorted by default.
    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[]
    */
    get dataSource(): {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        sortIndex: number;
    }[];
    set dataSource(value: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        sortIndex: number;
    }[]);
    /** Controls the visibility of the sort panel, allowing users to enable (display) or disable (hide) the panel for sorting data within the interface.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets or sets the unlockKey property, which is used to authenticate and grant access to the product’s locked features. This key must be provided to unlock and use the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code. This property determines which language is used when displaying messages, working in combination with the messages property to select the appropriate localized content.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function associated with the localization module, typically used to handle language changes, update translations, or respond to localization-related events within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized or translated for different languages. This property works together with the locale property to support localization, enabling the widget to display content appropriate for the user’s selected or detected language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** If the element is set to readonly, users will be able to view its contents but will not be able to modify or edit its value. However, the element may still receive focus and allow text selection, depending on its type. No user interactions will result in changes to the element's data.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** If set to true, the element will be excluded from the page's tab order and cannot receive keyboard focus, making it inaccessible via keyboard navigation or programmatic focusing methods such as element.focus().
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the user clicks the "Apply" button, indicating their intent to submit or confirm their selected options or changes. It can be used to handle form submissions, apply filters, or process user input following the click action.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user clicks the "Cancel" button, allowing you to execute custom logic—such as resetting form fields, closing dialog boxes, or aborting an action—in response to the cancellation request.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
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
export default SortPanel;
