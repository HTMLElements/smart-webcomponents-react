import React from "react";
import { QueryBuilderProperties } from "./../index";
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField } from './../index';
export { QueryBuilderProperties } from "./../index";
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField } from './../index';
declare let Smart: any;
export { Smart };
export interface QueryBuilderProps extends QueryBuilderProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onPropertySelected?: ((event?: Event) => void) | undefined;
    onValidationChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 QueryBuilder allows you to build dynamically queries for filtering.
*/
export declare class QueryBuilder extends React.Component<React.HTMLAttributes<Element> & QueryBuilderProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Allows users to drag and reorder conditions within a single group or move conditions between different groups, facilitating flexible arrangement and organization of conditions through a user-friendly drag-and-drop interface.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Otherwise, the selected mode determines how animations are displayed within the component.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Controls the timing of when the element’s value is updated in response to changes, such as user input or interactions. This setting specifies whether the value updates immediately as the user types, when the input loses focus, or upon a specific event.
    *	Property type: QueryBuilderApplyMode | string
    */
    get applyMode(): QueryBuilderApplyMode | string;
    set applyMode(value: QueryBuilderApplyMode | string);
    /** When 'applyMode' is set to 'immediately', the default value is instantly assigned to the editor's value, and the QueryBuilder's value is updated in real-time without requiring any additional user action. This ensures that changes are automatically reflected as soon as the default value is set.
    *	Property type: boolean
    */
    get autoApplyValue(): boolean;
    set autoApplyValue(value: boolean);
    /** Controls whether the QueryBuilder component will automatically display a prompt asking the user to enter a value when a new condition is added. If 'applyMode' is set to 'immediately', and the operation field of a newly created condition is empty, QueryBuilder will automatically populate the operation field when the user selects or changes the condition operator. Additionally, whenever the operation or operator of an existing condition is changed, the input field will prompt the user to enter a new value relevant to the updated condition. This ensures that condition values are collected promptly and accurately as users modify or add filtering criteria.
    *	Property type: boolean
    */
    get autoPrompt(): boolean;
    set autoPrompt(value: boolean);
    /** Enhances the query builder’s condition structure by allowing additional custom operations. Each custom operation can be defined with the following fields:
    *	Property type: QueryBuilderCustomOperation[]
    */
    get customOperations(): QueryBuilderCustomOperation[];
    set customOperations(value: QueryBuilderCustomOperation[]);
    /** Specifies whether the element is interactive and can receive user input. When enabled, the element functions normally. When disabled, the element becomes non-interactive and typically appears visually distinct (e.g., grayed out), preventing user actions such as clicks or text entry.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Configures or retrieves the width (in pixels) of the dropdown menus used in both the property and operator editors, allowing for precise control over their display size in the user interface.
    *	Property type: string
    */
    get dropDownWidth(): string;
    set dropDownWidth(value: string);
    /** ''An array defining the filterable fields and their corresponding configuration options to control their behavior and appearance. Each field in the array is represented as an object and can be customized using the following properties:- 'label':    The human-readable name for the field. This label will be displayed in the filter field selection dropdown.- 'dataField':    The key or property name in your data source that corresponds to this field.- 'dataType':    Specifies the type of data contained in the field, such as ''string'', ''number'', ''date'', etc. This setting can affect which filter operations are available.- 'filterOperations':    An array specifying which filter operations (such as ''contains'', ''equals'', ''greaterThan'', etc.) can be applied to this field. If this property is omitted, a default set of operations appropriate to the data type will be used.- 'lookup':    An object for configuring the value selection input when filtering this field. The 'lookup' object supports the following options:    - 'autoCompleteDelay':      The delay, in milliseconds, between when the user types in the value selection input and when the dropdown with available options appears.  - 'dataSource':      An array containing the set of predefined options that the user can choose from in the dropdown.  - 'minLength':      The minimum number of characters the user must enter in the input before the options dropdown is shown.  - 'readonly':      Set to 'true' to make the value selection input act as a standard dropdown (the user can only select from the list); set to 'false' for a combo box (the user can type custom values in addition to choosing from the list).This structure provides developers with fine-grained control over how each filter field appears and operates, including the available filter types and the way users select or enter filter values.
    *	Property type: QueryBuilderField[]
    */
    get fields(): QueryBuilderField[];
    set fields(value: QueryBuilderField[]);
    /** Controls whether users are allowed to create and add new fields by typing directly into the field (property) input box, enabling dynamic extension of available fields beyond the predefined options.
    *	Property type: QueryBuilderFieldsMode | string
    */
    get fieldsMode(): QueryBuilderFieldsMode | string;
    set fieldsMode(value: QueryBuilderFieldsMode | string);
    /** Specifies or retrieves the format string used by the editor for fields of type 'date'. This determines how date values are displayed and parsed within the editor. Adjusting this string allows customization of the date format according to localization or application requirements.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Gets or sets the format string used by the editor for fields of type 'dateTime'. This format string determines how date and time values are displayed and parsed within the editor.
    *	Property type: string
    */
    get formatStringDateTime(): string;
    set formatStringDateTime(value: string);
    /** A callback function that is invoked whenever a new field is dynamically added. This function allows you to configure or modify the settings of the newly added field before it is rendered. This callback is only applicable when fieldsMode is set to 'dynamic'.
    *	Property type: any
    */
    get getDynamicField(): any;
    set getDynamicField(value: any);
    /** Specifies the CSS classes assigned to each built-in operation, which determine the corresponding icons displayed for those operations. The icon styles are defined in the smart-query-builder stylesheet. This property takes effect only when showIcons is set to true, enabling visual representation of operations with their respective icons.
    *	Property type: any
    */
    get icons(): any;
    set icons(value: any);
    /** Provides methods to set or retrieve the 'unlockKey', a unique key required to unlock access to the product. Use this property to assign an unlock key for product activation or to obtain the currently assigned unlock key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es"). This property determines which set of messages from the messages object will be used for display or processing. Setting this property updates the active language, while getting it returns the currently selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define or modify the formatting of messages generated by the Localization Module before they are returned. Use this to customize message structure, apply additional processing, or support advanced localization needs.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the names of the fields to be included in the filtered element, allowing you to control which data properties are retained or displayed after filtering.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the placeholder text that appears within the operator selection box when no operator has been chosen for the condition. This text guides users by indicating that they need to select an operator.
    *	Property type: string
    */
    get operatorPlaceholder(): string;
    set operatorPlaceholder(value: string);
    /** Specifies the placeholder text displayed within the condition's property field when no field is currently selected by the user. This text provides guidance or prompts users to select a field.
    *	Property type: string
    */
    get propertyPlaceholder(): string;
    set propertyPlaceholder(value: string);
    /** Configures or retrieves the value that determines whether the element’s alignment supports right-to-left (RTL) text direction, which is typically used for languages such as Arabic or Hebrew. This property controls whether the element’s layout and text flow are adjusted to accommodate RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls the visibility of operator icons within the operator selection dropdown menu. When enabled, icons representing each operator are displayed alongside their names in the dropdown list; when disabled, only the operator names are shown without icons.
    *	Property type: boolean
    */
    get showIcons(): boolean;
    set showIcons(value: boolean);
    /** Controls the visibility of the dropdown icon associated with the operator field in the conditions section. When enabled, the dropdown icon appears next to the operator field name, allowing users to select an operator from the available options. When disabled, the dropdown icon is hidden, preventing users from opening the operator selection menu.
    *	Property type: boolean
    */
    get showFieldNameArrow(): boolean;
    set showFieldNameArrow(value: boolean);
    /** Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styling, to ensure a consistent visual presentation throughout the interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, this property prevents the element from receiving keyboard or programmatic focus, making it unable to become the active element within the user interface.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies whether the condition's value should be validated in real-time as the user types (on every key up event) or only when the input field loses focus (on blur), which is the default behavior. If enabled, value validation occurs after the user stops typing, following a delay defined by the validationTimeout property, which sets the time interval (in milliseconds) before triggering validation after typing ceases.
    *	Property type: boolean
    */
    get validateOnInput(): boolean;
    set validateOnInput(value: boolean);
    /** Specifies the delay (in milliseconds) that begins once the user has stopped typing in the value field, after which the condition value is validated. This property works in conjunction with validationOnInput, controlling how soon validation is triggered after user input is complete.
    *	Property type: number
    */
    get validationTimeout(): number;
    set validationTimeout(value: number);
    /** The value is structured as a multidimensional array, where each top-level element represents a group operator (such as AND or OR) that organizes multiple conditions. Within each group, an array of condition objects specifies the individual filtering criteria. This structure allows for the representation of complex, nested logical expressions by combining multiple groups and conditions.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** A callback function that formats the display or value of the condition input fields before they are rendered or processed. Use this to customize how condition values appear to users or are handled within the application.
    *	Property type: any
    */
    get valueFormatFunction(): any;
    set valueFormatFunction(value: any);
    /** Specifies the placeholder text displayed within the condition's value input field when no value has been entered. This text provides guidance or hints to the user about the expected input.
    *	Property type: string
    */
    get valuePlaceholder(): string;
    set valuePlaceholder(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the value within the query builder is modified by the user, such as adding, editing, or removing rules or conditions. It provides an opportunity to respond to changes in the query configuration, such as validating input, updating results, or synchronizing state with other components.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a condition that is being dragged is dropped onto a valid target area within the interface. You can prevent the drop action from completing by calling event.preventDefault() within the event handler function. This allows you to implement custom validation or restrict drops based on specific criteria before the condition is accepted.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   target - The target item.
    *   targetData - the data of the target item.
    *   targetSide - The side of the target item where the dragged item will be dropped.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a condition element is actively being dragged within the user interface. It fires continuously throughout the dragging process, allowing developers to track the position and state of the condition as it moves, and to implement custom behaviors—such as visual feedback or dynamic updates—while the drag action is in progress.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event fires when a drag operation begins within the jqx-query-builder component. You can intercept and prevent the drag action from proceeding by calling event.preventDefault() within your event handler. This allows you to implement custom logic or restrictions before the drag operation officially starts.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item is going to be dragged.
    *   data - The data of the item that is going to be dragged.
    *   originalEvent - The original event.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user interacts with any component of the query builder—such as selecting an operator, clicking on a field name, entering a value, or pressing the close button. It allows you to respond to user actions on any of the query builder’s building blocks.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
    *   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
    *   type - The type of the clicked item ( condition or a group ).
    *   data - The data of the item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user selects a specific field, indicating that the field has become active or has received focus. It can be used to initiate actions such as loading related data, displaying contextual hints, or tracking user interactions with the form element.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
    *   label - The label of the selected property.
    *   value - The value of the selected property.
    */
    onPropertySelected?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the component performs input validation. Validation occurs each time a user enters a new value and then shifts focus away from the component (for example, by clicking or tabbing to another UI element). The event provides an opportunity to respond to changes in the input’s validity, such as displaying error messages or updating related state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	newValue)
    *   oldValue - Old validation status.
    *   newValue - New validation status.
    */
    onValidationChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Transforms the element's current value into a valid Dynamic LINQ expression, enabling advanced querying and runtime evaluation based on the element's data.
    * @returns {string}
  */
    getLinq(): any;
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
export default QueryBuilder;
