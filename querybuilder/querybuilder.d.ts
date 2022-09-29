import React from "react";
import { QueryBuilderProperties } from "./../index";
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField } from './../index';
export { QueryBuilderProperties } from "./../index";
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderCustomOperation, QueryBuilderField } from './../index';
export declare const Smart: any;
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
    /** Enables the dragging of conditions inside a group or between groups.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Determines when the value of the element is updated with the new changes.
    *	Property type: QueryBuilderApplyMode | string
    */
    get applyMode(): QueryBuilderApplyMode | string;
    set applyMode(value: QueryBuilderApplyMode | string);
    /** When 'applyMode' is set to 'immediately', the default value is applied to the editor's value and the QueryBuilder's value is updated automatically.
    *	Property type: boolean
    */
    get autoApplyValue(): boolean;
    set autoApplyValue(value: boolean);
    /** Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed.
    *	Property type: boolean
    */
    get autoPrompt(): boolean;
    set autoPrompt(value: boolean);
    /** Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:
    *	Property type: QueryBuilderCustomOperation[]
    */
    get customOperations(): QueryBuilderCustomOperation[];
    set customOperations(value: QueryBuilderCustomOperation[]);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the dropdown width of the property and operator editors.
    *	Property type: string
    */
    get dropDownWidth(): string;
    set dropDownWidth(value: string);
    /** Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box
    *	Property type: QueryBuilderField[]
    */
    get fields(): QueryBuilderField[];
    set fields(value: QueryBuilderField[]);
    /** Determines whether new fields can be dynamically added by typing in the field (property) box.
    *	Property type: QueryBuilderFieldsMode | string
    */
    get fieldsMode(): QueryBuilderFieldsMode | string;
    set fieldsMode(value: QueryBuilderFieldsMode | string);
    /** Sets or gets the format string of the editor of fields with type 'date'.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Sets or gets the format string of the editor of fields with type 'dateTime'.
    *	Property type: string
    */
    get formatStringDateTime(): string;
    set formatStringDateTime(value: string);
    /** A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'.
    *	Property type: any
    */
    get getDynamicField(): any;
    set getDynamicField(value: any);
    /** Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true.
    *	Property type: any
    */
    get icons(): any;
    set icons(value: any);
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
    /** Defines field names of the filtered element.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the placeholder text used inside the condition's operator box in case an operator is not selected.
    *	Property type: string
    */
    get operatorPlaceholder(): string;
    set operatorPlaceholder(value: string);
    /** Determines the placeholder text used inside the condition's field (property) box in case a field is not selected.
    *	Property type: string
    */
    get propertyPlaceholder(): string;
    set propertyPlaceholder(value: string);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Shows/Hides the operator icons shown in the operator selection drop down.
    *	Property type: boolean
    */
    get showIcons(): boolean;
    set showIcons(value: boolean);
    /** Shows/Hides the drop down icon for the operator field name of the conditions.
    *	Property type: boolean
    */
    get showFieldNameArrow(): boolean;
    set showFieldNameArrow(value: boolean);
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
    /** Determines whether the value of the condition is validated on key up or not. By default the value is validated when the user blur's the value input. The validationTimeout determines the time interval after the user has ended typing that triggers the value validation.
    *	Property type: boolean
    */
    get validateOnInput(): boolean;
    set validateOnInput(value: boolean);
    /** Determines the timeout (starting after the user has finished typing in the value field) before the validation is applied to the condition value. This property works along validationOnInput.
    *	Property type: number
    */
    get validationTimeout(): number;
    set validationTimeout(value: number);
    /** The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Callback used to format the content of the condition value fields.
    *	Property type: any
    */
    get valueFormatFunction(): any;
    set valueFormatFunction(value: any);
    /** Determines the placeholder text used inside the condition's value box in case a value is not set.
    *	Property type: string
    */
    get valuePlaceholder(): string;
    set valuePlaceholder(value: string);
    get properties(): string[];
    /**  This event is triggered when the query builder's value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   target - The target item.
    *   targetData - the data of the target item.
    *   targetSide - The side of the target item where the dragged item will be dropped.
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a condition is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item that is being dragged.
    *   data - The data of the item that is being dragged.
    *   originalEvent - The original event.
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a dragging operation is started in jqx-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
    *   item - The item is going to be dragged.
    *   data - The data of the item that is going to be dragged.
    *   originalEvent - The original event.
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
    *   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
    *   type - The type of the clicked item ( condition or a group ).
    *   data - The data of the item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a field has been selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
    *   label - The label of the selected property.
    *   value - The value of the selected property.
    */
    onPropertySelected?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the component validates the input values. This happens when you input a new value and focus another component.
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
    /** Converts the current value of the element to DynamicLINQ expression.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default QueryBuilder;
