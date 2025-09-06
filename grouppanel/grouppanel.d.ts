import React from "react";
import { GroupPanelProperties } from "./../index";
import { Animation, GroupPanelCloseButtonPosition } from './../index';
export { GroupPanelProperties } from "./../index";
export { Animation, GroupPanelCloseButtonPosition } from './../index';
declare let Smart: any;
export { Smart };
export interface GroupPanelProps extends GroupPanelProperties {
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
 Defines a group of grouped items in a panel.
*/
export declare class GroupPanel extends React.Component<React.HTMLAttributes<Element> & GroupPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Controls the animation mode for the element. You can use this property to retrieve the current animation mode or set a new one. When set to 'none', all animations are disabled for the element, resulting in immediate transitions without any visual effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Defines or retrieves the position of the close button displayed on items within the group panel. This property allows you to specify where the close button appears (e.g., left, right, or another designated location) for each group panel item, or to access its current position programmatically.
    *	Property type: GroupPanelCloseButtonPosition | string
    */
    get closeButtonPosition(): GroupPanelCloseButtonPosition | string;
    set closeButtonPosition(value: GroupPanelCloseButtonPosition | string);
    /** Specifies the data source configuration for the group panel.  Each entry in the dataSource array is an object that defines the properties of a column available for grouping. The object includes the following fields:  dataField: The unique field name of the column that can be used for grouping.  dataType: The data type of the column, such as 'string', 'number', 'date', etc.  groupIndex: The initial position of the column in the group order. A value of -1 means the column will not be grouped by default.  label: The display name of the column shown in the column selection dropdown of the group panel.  icon: The CSS class for the icon representing this column in the selection dropdown, allowing for custom visual identification.  sortDirection: The default sort direction when the column is used for grouping. Accepted values are 'ascending' or 'descending'.Use this configuration to control which columns users can group by, their display order, labels, icons, and default sorting in your group panel interface.
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
    /** Controls the visibility of the group panel, allowing you to show or hide the panel where grouped items or filters are managed. Set to true to display the group panel, or false to hide it from the user interface.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the unlockKey, a unique code or token required to activate and access the full features of the product. This property is used to manage product unlocking and user authorization.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which set of localized messages—defined in the messages property—will be used for displaying content. When setting this value, the corresponding language-specific messages are selected for the user interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define or modify the format of messages returned by the Localization Module. Use this to tailor localized message strings—such as formatting variables, changing wording, or supporting custom message structures—before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves the maximum number of columns that can be used for grouping results. If the value is set to null, there is no restriction on the number of columns allowed in the grouping operation.
    *	Property type: number
    */
    get maxLevel(): number;
    set maxLevel(value: number);
    /** Defines or retrieves an object containing localized string values used throughout the widget's user interface. By customizing this object, you can provide translations for UI text, labels, tooltips, and messages. This property works together with the locale property, allowing the widget to display content in different languages based on the specified locale setting.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** If the element is set to readonly, users will be able to view its value but will not be able to modify, edit, or otherwise interact with its content. This means the element’s value cannot be changed through direct user input, although the content may still be selectable or copied.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that specifies whether the element’s layout direction is set to right-to-left (RTL), enabling proper alignment and support for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning the element cannot be selected or activated using the Tab key or other focus navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the user clicks the "Apply" button on the interface. It can be used to initiate actions such as submitting form data, applying selected filters, updating displayed content, or executing any operation associated with the user's request to apply changes. The event will only fire in response to direct user interaction with the "Apply" button.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user clicks the "Cancel" button. It typically initiates actions such as closing the current dialog, dismissing a modal window, or aborting an ongoing operation, depending on the application's context.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the "Collapse all" button is clicked by the user. It typically initiates the process of collapsing or hiding all currently expanded sections, panels, or items within the interface, resulting in a more compact view.
    *  @param event. The custom event. 	*/
    onCollapseAll?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the "Expand all" button is clicked by the user, typically to display all collapsible content sections within the interface. It allows developers to respond to the user's action, such as expanding all hidden panels or rows programmatically.
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
export default GroupPanel;
