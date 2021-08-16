import React from "react";
import { QueryBuilderProperties } from "./../index";
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderField } from './../index';
export { QueryBuilderProperties } from "./../index";
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, QueryBuilderField } from './../index';
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
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines when the value of the element is updated with the new changes.
    *	Property type: QueryBuilderApplyMode
    */
    get applyMode(): QueryBuilderApplyMode;
    set applyMode(value: QueryBuilderApplyMode);
    /** Determines whether QueryBuilder will automatically prompt the user to enter a condition value when a new condition is created. When 'applyMode' is set to 'immediately', the operation field is automatically populated if empty when the selected condition operator is changed. The input field prompts the user when the operation or operator of the condition is changed.
    *	Property type: boolean
    */
    get autoPrompt(): boolean;
    set autoPrompt(value: boolean);
    /** Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closed. If the dataType is 'object' the expected result from the function should contain a 'label' and 'value' attributes. Where the label will be used for displaying purposes while 'value' will be used as the actual value. hideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value. Takes two arguments: expression - the LinQ expression defined in the expressionTemplate of the customOperator. Type stringbindings - an array of expression parameters based on the expression template of the customOperator. Type Array[string]expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. Takes three arguments: name - the name of the dataField. Type string.operation - the name of the operation. Type stringvalue - the value of the operation. Type any( depends on the dataField).
    *	Property type: any
    */
    get customOperations(): any;
    set customOperations(value: any);
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
    *	Property type: QueryBuilderFieldsMode
    */
    get fieldsMode(): QueryBuilderFieldsMode;
    set fieldsMode(value: QueryBuilderFieldsMode);
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
    getLinq(): Promise<any>;
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
