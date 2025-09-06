import React from "react";
import { FormControlProperties } from "./../index";
import { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
export { FormControlProperties } from "./../index";
export { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
declare let Smart: any;
export { Smart };
export interface FormControlProps extends FormControlProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Form Control
*/
export declare class FormControl extends React.Component<React.HTMLAttributes<Element> & FormControlProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Retrieves or assigns the action associated with the FormControl component. This property specifically applies when the 'controlType' is set to either 'button' or 'submit', determining the function or operation that will be executed when the control is activated (e.g., when the button is clicked or the form is submitted).
    *	Property type: FormControlAction | string
    */
    get action(): FormControlAction | string;
    set action(value: FormControlAction | string);
    /** Specifies or retrieves the alignment setting of the FormControl element, determining how the control is positioned within its parent container (e.g., left, right, center, or justified).
    *	Property type: FormControlAlign | string
    */
    get align(): FormControlAlign | string;
    set align(value: FormControlAlign | string);
    /**   "Specifies the HTML content that will appear immediately after the form control element. This allows you to display supplementary information, messages, or custom markup directly following the input field."
    *	Property type: any
    */
    get appendHTML(): any;
    set appendHTML(value: any);
    /** A JSON object containing configuration options for initializing the UI component. For example, providing { dataSource: ['item 1', 'item 2', 'item 3'] } assigns the specified array to the dataSource property of the Form control, defining the data items that will be displayed or used within the component. Use this object to specify properties such as data sources, default values, appearance settings, or behavior options for the UI element during its creation.
    *	Property type: any
    */
    get controlOptions(): any;
    set controlOptions(value: any);
    /** Specifies the type of user interface control (such as button, textbox, dropdown, etc.) represented by this component. This property determines the control's behavior and visual appearance.
    *	Property type: FormControlControlType | string
    */
    get controlType(): FormControlControlType | string;
    set controlType(value: FormControlControlType | string);
    /** Specifies the number of columns used to arrange the fields within the Form Group, determining how the form elements are organized and displayed in a grid layout.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Specifies the number of columns that the form control should span within a grid layout, allowing you to control the width of the form element across multiple columns.
    *	Property type: number
    */
    get columnSpan(): number;
    set columnSpan(value: number);
    /** Specifies the data field associated with the form control. The value of dataField is assigned as the name attribute of the control's internal input element. Additionally, within the parent FormGroup, this form control can be accessed by referencing the same dataField value. This ensures seamless integration between the form control and the FormGroup’s data model.
    *	Property type: string
    */
    get dataField(): string;
    set dataField(value: string);
    /** Enables or disables the form control, determining whether users can interact with it. When set to disabled, the control will be grayed out and unresponsive to user input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Returns a boolean indicating whether the Form control is 'dirty'—that is, whether the user has modified the control's value from its original (initial) value. This property helps determine if the input has been changed since the form was loaded or last reset.
    *	Property type: boolean
    */
    get dirty(): boolean;
    set dirty(value: boolean);
    /** Retrieves or defines the tooltip text that appears when a user hovers over the info icon associated with the Form control. This tooltip provides additional information or guidance about the form field for improved user experience.
    *	Property type: string
    */
    get info(): string;
    set info(value: string);
    /** Determines if the Form control currently has validation errors, indicating that its input data does not meet the specified validation rules. Returns 'true' if the control is invalid; otherwise, returns 'false'.
    *	Property type: boolean
    */
    get invalid(): boolean;
    set invalid(value: boolean);
    /** Retrieves or assigns the label text displayed for the Form control, allowing you to specify or update the descriptive text shown to users.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Retrieves or specifies the position of the label associated with the form control. This property determines where the label will be displayed relative to the form element (e.g., above, below, to the left, or to the right).
    *	Property type: FormControlLabelPosition | string
    */
    get labelPosition(): FormControlLabelPosition | string;
    set labelPosition(value: FormControlLabelPosition | string);
    /** Gets or sets the distance (in pixels) between the label and its associated control, allowing you to adjust the spacing for layout and visual alignment purposes.
    *	Property type: number
    */
    get labelOffset(): number;
    set labelOffset(value: number);
    /** ''  *This property is applicable only when the controlType is set to 'group'. It determines whether the navigation buttons are shown within the FormGroup. The property takes effect only when the viewMode property is also configured. Use this setting to control the visibility of navigation controls for multi-step or grouped form layouts.*
    *	Property type: FormControlAlign | string
    */
    get labelAlign(): FormControlAlign | string;
    set labelAlign(value: FormControlAlign | string);
    /** Applies only when the controlType property is set to 'group'. Specifies the label text displayed on the "Next" button within a FormGroup, allowing you to get or set a custom label for navigation purposes.
    *	Property type: string
    */
    get nextButtonLabel(): string;
    set nextButtonLabel(value: string);
    /** ''  Available only when the controlType property is set to 'group' (i.e., for FormGroup controls). This property allows you to get or set the label displayed on the back button within the form group.
    *	Property type: string
    */
    get backButtonLabel(): string;
    set backButtonLabel(value: string);
    /** Allows you to retrieve or specify the placeholder text displayed in the FormControl when the input field is empty. This placeholder provides a hint to users about the expected input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** HTML content that appears visually above or before the form control element, typically used for introductory text, instructions, or contextual information. This content is rendered prior to the input field or interactive control in the layout.
    *	Property type: any
    */
    get prependHTML(): any;
    set prependHTML(value: any);
    /** Enables you to retrieve or assign the readonly state of the form control. When set to true, the form control becomes non-editable, preventing users from modifying its value while still allowing its content to be viewed.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines whether this field must be filled in by the user. When set to true, the field is required and validation will fail if it is left empty. When set to false, the field is optional. This property can be both retrieved (get) and updated (set).
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Returns whether the Form control is in a "pristine" state, meaning it has not been interacted with or "touched" by the user. This property remains true until the user focuses on and then blurs (moves away from) the Form control, at which point it is set to false. It is commonly used to determine if the user has interacted with a form field since the component was initialized.
    *	Property type: boolean
    */
    get untouched(): boolean;
    set untouched(value: boolean);
    /** Gets or sets whether a colon character (:) is automatically displayed after the label text. When enabled, a colon will appear immediately following the label, typically to visually separate the label from the corresponding input field.
    *	Property type: boolean
    */
    get showColonAfterLabel(): boolean;
    set showColonAfterLabel(value: boolean);
    /** Applies only when controlType is set to 'group'. This property determines whether navigation buttons are shown within the FormGroup. It is effective only if the viewMode property is enabled. Use this property to control the visibility of navigation controls for grouped form elements in the specified view mode.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Provides the ability to retrieve (get) or update (set) the current value of a FormControl or FormGroup. This allows you to read the form’s data or programmatically change its values as needed.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines whether the Form control currently satisfies all validation rules and is considered valid. Returns true if the control’s value passes all validation checks; otherwise, returns false.
    *	Property type: boolean
    */
    get valid(): boolean;
    set valid(value: boolean);
    /** Sets or retrieves the column's validation rules. The value should be an array of objects, where each object defines a specific validation rule for the column. Each validation rule object must include:- A 'type' property, which specifies the type of validation. Valid values for 'type' include: ''required'', ''min'', ''max'', ''minLength'', ''maxLength'', ''email'', ''null'', ''requiredTrue'', ''minDate'', ''maxDate'', and ''pattern''.- A 'value' property, which provides the value used for the validation. For example, for 'minLength', 'value' might be '3', or for 'pattern', it could be a regular expression. Note: For validation types ''required'', ''requiredTrue'', and ''null'', the 'value' property can be omitted.Optionally, you can include a 'message' property to specify a custom error message that is shown when the validation fails.'Example:''''json[  { "type": "required", "message": "This field is mandatory." },  { "type": "minLength", "value": 3, "message": "Minimum 3 characters required." },  { "type": "pattern", "value": "^[A-Za-z]+$", "message": "Only letters are allowed." }]'''This structure allows you to define multiple validation rules for a column, each with its own type, constraints, and error message.
    *	Property type: [] | null
    */
    get validationRules(): [] | null;
    set validationRules(value: [] | null);
    /** 'Applies only when controlType is set to 'group'. This property gets or sets the view mode of the form group, determining how the group of form controls is displayed and interacted with in the UI.'
    *	Property type: FormControlViewMode | string
    */
    get viewMode(): FormControlViewMode | string;
    set viewMode(value: FormControlViewMode | string);
    get properties(): string[];
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
export default FormControl;
