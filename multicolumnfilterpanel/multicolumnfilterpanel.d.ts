import React from "react";
import { MultiColumnFilterPanelProperties } from "./../index";
import { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator } from './../index';
export { MultiColumnFilterPanelProperties } from "./../index";
export { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator } from './../index';
declare let Smart: any;
export { Smart };
export interface MultiColumnFilterPanelProps extends MultiColumnFilterPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCollapseAll?: ((event?: Event) => void) | undefined;
    onExpandAll?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export declare class MultiColumnFilterPanel extends React.Component<React.HTMLAttributes<Element> & MultiColumnFilterPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Defines or retrieves the current animation mode for the element. Setting this property to 'none' disables all animations, while other values enable specific animation behaviors. Use this property to control whether animations are active or inactive.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls the placement of the close button within items in the filter panel when using a multi-column layout. You can use this property to retrieve the current position or specify a new position for the close button, determining where it appears relative to each filter panel item.
    *	Property type: MultiColumnFilterPanelCloseButtonPosition | string
    */
    get closeButtonPosition(): MultiColumnFilterPanelCloseButtonPosition | string;
    set closeButtonPosition(value: MultiColumnFilterPanelCloseButtonPosition | string);
    /** Specifies the data source to be loaded into the multi-column filter panel.The dataSource array consists of objects, each representing a column available for grouping and filtering. Each object includes the following properties:      dataField: The name of the data field that identifies the column to be grouped.        dataType: The type of data contained in the column (e.g., string, number, date), used for correct grouping and filtering operations.        groupIndex: The initial grouping order of the column, where a value of -1 means the column is not grouped by default. Columns with non-negative values are grouped in ascending order based on their groupIndex.        label: The display name for the column, shown in the column selection dropdown or panel for user-friendly identification.        icon: A CSS class or icon identifier to visually represent the column in the selection input, improving the user interface and navigation.        sortDirection: The direction in which items are sorted within the group. Acceptable values are 'ascending' or 'descending'.  This structure allows you to fully customize how columns appear and behave within the multi-column filter panel, including display options, grouping priorities, and sorting behavior.
    *	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
    */
    get dataSource(): {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        groupIndex: number;
    }[];
    set dataSource(value: {
        label: string;
        dataField: string;
        dataType: string;
        sortDirection: string;
        groupIndex: number;
    }[]);
    /** Controls whether the multi-column filter panel is displayed, allowing users to filter data across multiple columns simultaneously. When enabled, the panel appears in the UI, providing advanced filtering options; when disabled, the panel is hidden and users cannot access multi-column filtering features.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** A callback function invoked to customize or update the configuration of value editor components. This function allows developers to modify editor settings—such as input types, selectable options, validation rules, or UI behavior—before the value editor is rendered or updated.
    *	Property type: any
    */
    get editorCallback(): any;
    set editorCallback(value: any);
    /** Specifies or retrieves the placeholder text displayed in the filter value input fields. This placeholder provides guidance or an example to users about the expected input format when entering filter criteria.
    *	Property type: string
    */
    get editorPlaceholder(): string;
    set editorPlaceholder(value: string);
    /** Sets or retrieves the unlockKey, a unique identifier or code required to activate or gain access to the product's features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es') used by the application or component. This property works together with the messages property to display localized content based on the selected language. Changing this value updates which set of localized messages will be used.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that enables you to define custom formatting for messages returned by the Localization Module, allowing you to modify how localized text is displayed based on your specific requirements (e.g., language, placeholders, or dynamic values).
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum number of columns that can be used in a group by operation. If this value is set to null, there is no restriction on the number of columns that can be grouped.
    *	Property type: number
    */
    get maxLevel(): number;
    set maxLevel(value: number);
    /** Defines or retrieves an object containing the localized strings displayed by the widget’s user interface. This property enables you to provide translations for all text labels, messages, and prompts shown by the widget, making it adaptable to different languages and regions. It works in conjunction with the locale property, which determines the active language, allowing the widget to display the appropriate set of translated strings based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the logical operator (such as AND or OR) used to combine or evaluate multiple items, determining how their conditions or values are collectively processed.
    *	Property type: MultiColumnFilterPanelOperator | string
    */
    get operator(): MultiColumnFilterPanelOperator | string;
    set operator(value: MultiColumnFilterPanelOperator | string);
    /** When the element is set to 'readonly', users can view its content but are unable to modify or change its value. However, unlike 'disabled' elements, a readonly element remains focusable and its content can still be selected or copied by users.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s alignment is adjusted to support right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. When enabled, the element’s content and layout are oriented to accommodate locales that use RTL text direction.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When this property is set to true, the element will be excluded from the page’s tab order and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key, and focus-related events (such as onfocus) will not be triggered for this element.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets or sets the initial value of the element. This property allows you to retrieve the element’s starting value or assign a new initial value before user interaction or script modifications.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered whenever the user clicks the "Apply" button. It signals that the user has finished configuring their selections or input, and requests that the changes be processed or saved. The event typically carries any relevant data or form values associated with the current application state.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user clicks the "Cancel" button, indicating an intention to abort or exit the current operation. It can be used to execute cleanup tasks, close dialogs or forms, or revert unsaved changes.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user clicks the "Collapse all" button, initiating the action to collapse or minimize all currently expanded sections or items in the interface.
    *  @param event. The custom event. 	*/
    onCollapseAll?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user clicks the "Expand all" button, typically to expand and reveal all collapsible sections or items within the interface. It enables developers to execute specific actions—such as loading additional content or updating the UI—immediately after all expandable elements become visible.
    *  @param event. The custom event. 	*/
    onExpandAll?: ((event?: Event) => void) | undefined;
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
export default MultiColumnFilterPanel;
