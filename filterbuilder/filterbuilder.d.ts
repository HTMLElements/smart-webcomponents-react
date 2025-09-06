import React from "react";
import { FilterBuilderProperties } from "./../index";
import { Animation, FilterBuilderIcons } from './../index';
export { FilterBuilderProperties } from "./../index";
export { Animation, FilterBuilderIcons } from './../index';
declare let Smart: any;
export { Smart };
export interface FilterBuilderProps extends FilterBuilderProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onEditorClose?: ((event?: Event) => void) | undefined;
    onEditorClosing?: ((event?: Event) => void) | undefined;
    onEditorOpen?: ((event?: Event) => void) | undefined;
    onEditorOpening?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 FilterBuilder allows you to dynamically build filters.
*/
export declare class FilterBuilder extends React.Component<React.HTMLAttributes<Element> & FilterBuilderProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animation effects are disabled. Setting it to other supported values enables the corresponding animation behavior.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Enhances the set of available operations that can be used within the filter builder's condition structure, allowing for more flexible and complex filtering criteria.
    *	Property type: {name: string, caption: string, icon: string}[]
    */
    get customOperations(): {
        name: string;
        caption: string;
        icon: string;
    }[];
    set customOperations(value: {
        name: string;
        caption: string;
        icon: string;
    }[]);
    /** Determines whether the context menu (typically accessed via right-click) is available to users. Setting this option to true allows users to open the context menu, while setting it to false disables the menu and prevents it from appearing.
    *	Property type: boolean
    */
    get disableContextMenu(): boolean;
    set disableContextMenu(value: boolean);
    /** Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When enabled, users can interact with the element; when disabled, the element appears visually inactive and cannot be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** An array containing filtered field objects, where each object defines a specific field and its associated configuration settings. This includes details such as the field name, data type, validation rules, display properties, and any additional options relevant to how the field should be handled or presented.
    *	Property type: any
    */
    get fields(): any;
    set fields(value: any);
    /** Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor, such as the order of day, month, and year.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Sets or retrieves the format string used by the editor for fields of type 'datetime', specifying how date and time values are displayed and edited within the field. This determines the input and display format (e.g., 'YYYY-MM-DD HH:mm:ss') for users interacting with 'datetime' fields.
    *	Property type: string
    */
    get formatStringDateTime(): string;
    set formatStringDateTime(value: string);
    /** Displays a helpful popup message as a tooltip or hint to guide the user when interacting with the form element.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Specifies the icon's visual representation using character symbols (such as Unicode or font glyphs), allowing the icon to be displayed as a character within text elements.
    *	Property type: FilterBuilderIcons
    */
    get icons(): FilterBuilderIcons;
    set icons(value: FilterBuilderIcons);
    /** Handles the retrieval or assignment of the unlockKey property, which serves as the authorization token required to activate and access the product’s full features. Setting this property provides the necessary key to unlock the product, while getting it returns the current unlock key value in use.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., 'en', 'es', 'fr') for the component. This property works together with the messages property to determine which set of localized messages to display, enabling multilingual support. When setting the language, the corresponding messages are loaded automatically based on the selected language code.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle events or responses related to language translation, locale changes, or loading localized resources within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the maximum number of conditions that can be applied to this element. If the number of conditions exceeds this limit, additional conditions will not be accepted or processed.
    *	Property type: number | null
    */
    get maxConditions(): number | null;
    set maxConditions(value: number | null);
    /** Specifies the maximum number of conditions that can be included within a single group. This sets an upper limit to how many conditions are allowed in each group, ensuring that no group exceeds the defined threshold.
    *	Property type: number | null
    */
    get maxConditionsPerGroup(): number | null;
    set maxConditionsPerGroup(value: number | null);
    /** Specifies the highest number of nested grouping levels allowed within the FilterBuilder, setting a limit on how deeply filters can be grouped and combined.
    *	Property type: number | null
    */
    get maxLevel(): number | null;
    set maxLevel(value: number | null);
    /** Specifies the names of the fields within the element that has been filtered, allowing you to identify which attributes are included as part of the filtered results.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** When an element has the "readonly" attribute, its value cannot be modified by the user; however, the element can still receive focus and its content can be selected or copied. Interactivity such as editing or input is disabled, but users may still interact with the element in non-editing ways.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** When 'restrictedMode' is set to 'true', users are prevented from adding new groups or editing existing groups through the user interface. This means all group management actions must be performed programmatically or by users with elevated permissions; standard user interactions for creating or modifying groups are disabled.
    *	Property type: boolean
    */
    get restrictedMode(): boolean;
    set restrictedMode(value: boolean);
    /** Controls whether the icons are visible or hidden in the user interface. When enabled, icons are displayed; when disabled, icons are not shown.
    *	Property type: boolean
    */
    get showIcons(): boolean;
    set showIcons(value: boolean);
    /** Specifies the theme to be applied, which controls the overall appearance and style of the element, including colors, fonts, and other visual properties.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users cannot navigate to or interact with the element using the Tab key or other focus-related methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** The value is structured as a multidimensional array designed to represent complex logical conditions. Each element of the array is either a group operator (such as AND, OR, NOT) or a condition. Groups can themselves contain arrays of conditions and/or further groups, allowing for multiple levels of nesting. This hierarchical structure enables the representation of intricate, compound logic expressions through nested combinations of operators and conditions.
    *	Property type: string[]
    */
    get value(): string[];
    set value(value: string[]);
    /** A callback function that is invoked to customize the formatting of value field contents before they are displayed. This allows you to control how data is presented within the value fields by modifying the output as needed.
    *	Property type: any
    */
    get valueFormatFunction(): any;
    set valueFormatFunction(value: any);
    /** Specifies the placeholder text that appears in the condition’s value input field when no value has been entered. This text provides guidance or an example to users about the expected input.
    *	Property type: string
    */
    get valuePlaceholder(): string;
    set valuePlaceholder(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the value of the element is modified by the user and then the element loses focus or the change is committed (for example, after pressing Enter). It allows you to detect and respond to updates made to the element's value.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever an editor instance is closed, either by user action or programmatically. It allows developers to perform cleanup tasks, save state, or update the user interface in response to the editor being closed.
    *  @param event. The custom event. 	*/
    onEditorClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user initiates the process of closing the editor, such as by clicking the close button or issuing a close command. It occurs before the editor is fully closed, allowing you to perform actions like prompting the user to save changes or cancelling the close operation if necessary.
    *  @param event. The custom event. 	*/
    onEditorClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever an editor instance is initialized and opened, allowing you to perform custom actions or modifications immediately after the editor becomes available to the user.
    *  @param event. The custom event. 	*/
    onEditorOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever an editor instance begins the process of opening, allowing you to execute custom logic or initialization tasks before the editor is fully loaded and ready for user interaction.
    *  @param event. The custom event. 	*/
    onEditorOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user clicks on any of the building blocks within the filter builder component. Building blocks may include elements such as fields, operators, or value inputs that are used to construct filter conditions. Use this event to execute custom logic in response to user interactions with individual filter components.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the built-in menu is opened by the user—for example, when they right-click or perform the relevant action to invoke the context menu. Note that if the disableContextMenu property is set to true, this event will not be dispatched, effectively disabling the menu and its associated event trigger.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately when the built-in context menu begins to open. However, if the disableContextMenu property is set to true, the built-in menu is suppressed and this event will not be dispatched. Use this event to implement custom logic or UI changes in response to the opening of the default context menu, unless the menu has been explicitly disabled.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time the built-in menu is closed by the user. However, if the disableContextMenu property is set to true, the menu is never displayed, and this event will not be fired. Use this event to perform actions or cleanup tasks after the menu has been closed, unless the context menu has been disabled.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the built-in menu begins the process of closing. Note that if the disableContextMenu property is set to true, this event will not be fired. Use this event to perform actions or cleanup tasks as the menu is about to be dismissed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new condition to a specified group, enabling further customization or logic within that group's configuration.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    addCondition(parentGroup: string | HTMLElement, data: any[]): void;
    /** Creates a new group within a specified parent group, establishing a hierarchical relationship between the new group and its designated parent.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    addGroup(parentGroup: string | HTMLElement, data: string): void;
    /** Removes the specified condition from the configuration or dataset, ensuring that any rules, filters, or logic associated with this condition are no longer applied. This operation helps update or simplify the criteria used within the system.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
    */
    removeCondition(item: string | HTMLElement): void;
    /** Deletes the specified group along with all of its child elements recursively. This action is irreversible and will remove the group and all nested items associated with it from the system.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    */
    removeGroup(item: string | HTMLElement): void;
    /** Returns a string that represents the current configuration or criteria defined in the filter builder. This output can be used for display, debugging, or serialization purposes, providing a readable summary of the filter builder’s selected fields, conditions, and values.
    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
    * @returns {string}
  */
    toString(useLabels?: boolean): any;
    /** Updates the existing condition by modifying its properties based on the provided input. This typically involves validating the input data, locating the target condition, applying any changes, and saving the updated condition. Returns the modified condition upon successful completion.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    updateCondition(item: string | HTMLElement, data: any[]): void;
    /** Updates the details of an existing group, such as its name, description, or membership settings. Use this endpoint to modify group information.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    updateGroup(item: string | HTMLElement, data: string): void;
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
export default FilterBuilder;
