import React from "react";
import { CustomizationDialogProperties } from "./../index";
import { Animation } from './../index';
export { CustomizationDialogProperties } from "./../index";
export { Animation } from './../index';
declare let Smart: any;
export { Smart };
export interface CustomizationDialogProps extends CustomizationDialogProperties {
    className?: string;
    style?: React.CSSProperties;
    onOpen?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onApply?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a dialog for customization of filtering, sorting.
*/
export declare class CustomizationDialog extends React.Component<React.HTMLAttributes<Element> & CustomizationDialogProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled. If set to other supported values, the corresponding animation effects will be enabled for transitions or interactions.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** An array containing the filtered fields, each with its associated configuration settings. Each element in the array represents a specific field and includes detailed settings such as field type, validation rules, display options, and other relevant properties.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enhances or retrieves the value of the 'displayMember' property. The 'displayMember' determines which property of each object—within the collection referenced by the 'dataSource' property—will be displayed in the UI component. Set this property to the name of the object field you want to show as the display text for each item in the collection.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Controls whether the element is active and interactive (enabled) or inactive and unresponsive to user input (disabled).
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether the filtering tab is enabled or disabled, allowing you to control its availability to users. When set to true, the filtering tab will be accessible; when false, it will be hidden or inactive.
    *	Property type: boolean
    */
    get filtering(): boolean;
    set filtering(value: boolean);
    /** Controls whether the tab grouping feature is enabled or disabled. When enabled, users can organize multiple tabs into groups for improved navigation and management. When disabled, tab grouping functionality will not be available.
    *	Property type: boolean
    */
    get grouping(): boolean;
    set grouping(value: boolean);
    /** Specifies which buttons will be displayed in the header section. Provide an array of button identifiers to control the visibility and order of header buttons.
    *	Property type: string[]
    */
    get headerButtons(): string[];
    set headerButtons(value: string[]);
    /** Sets or retrieves the unlockKey, a unique code used to authorize and grant access to the product’s features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property to provide language-specific content or translations. When the language is set, the corresponding localized messages from the messages property are used throughout the application.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle language changes, translations, or localization-related events within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object containing customizable strings used in the widget's user interface that support localization. This property allows you to set or retrieve these strings to provide translations or alternative text in different languages. Typically used together with the locale property to enable multi-language support within the widget.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies whether column reordering is enabled or retrieves the current state. When active, users can change the order of columns by dragging and dropping them.
    *	Property type: boolean
    */
    get reorder(): boolean;
    set reorder(value: boolean);
    /** Sets or retrieves the tab that is selected by default when the component is first initialized. This determines which tab is active and visible to the user upon loading.
    *	Property type: number
    */
    get selectedTab(): number;
    set selectedTab(value: number);
    /** Determines whether the sorting tab is enabled or disabled. When set to true, the sorting tab will be available for user interaction; when set to false, the sorting tab will be hidden or inactive.
    *	Property type: boolean
    */
    get sorting(): boolean;
    set sorting(value: boolean);
    /** Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, ensuring a consistent visual presentation across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible via the tab key or programmatic focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** "Sets or retrieves the value of the element. The value is represented as an object, which may contain various properties relevant to the element's data or state."
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Specifies which property of the item object should be used as the item's value. The designated property will be accessed and stored as the value for each item in the list or collection. For example, if set to "id," the value from item.id will be used as the item's value.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Determines whether the columns within the element can be toggled between visible and hidden states. When set, it controls the ability to programmatically or interactively hide or show individual columns. When retrieved, it returns the current configuration indicating if column visibility can be altered.
    *	Property type: boolean
    */
    get visibility(): boolean;
    set visibility(value: boolean);
    get properties(): string[];
    /**  This event is triggered each time the dialog component becomes visible to the user, such as when it is opened programmatically or through user interaction.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dialog component is closed, whether by user interaction (such as clicking a close button or pressing the Escape key) or programmatically through code. Use this event to perform cleanup actions, save state, or execute any logic that should occur after the dialog is dismissed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the value of the value property is modified, either by user interaction or programmatic updates. It allows your application to respond in real time to changes in the data, ensuring that any dependent logic or UI is kept in sync with the current value.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dialog is closed as a result of the user clicking the "Apply" button. It allows you to perform actions or process data after the user confirms their selections or changes within the dialog by applying them.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Opens a modal dialog window, allowing users to interact with additional content or options without navigating away from the current page.
    */
    open(): void;
    /** Closes the dialog window, dismissing its content and returning focus to the underlying page or application. This action may also trigger any associated cleanup or callback functions.
    */
    close(): void;
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
export default CustomizationDialog;
