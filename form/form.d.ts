import React from "react";
import { FormProperties } from "./../index";
import { FormLabelPosition, Control } from './../index';
export { FormProperties } from "./../index";
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control } from './../index';
export { FormControl } from './formcontrol';
export { FormControlProperties } from "./../index";
export { FormGroup } from './formgroup';
export { FormGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
export interface FormProps extends FormProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Reactive Form Component with Advanced Validation
*/
export declare class Form extends React.Component<React.HTMLAttributes<Element> & FormProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Defines or retrieves the number of columns used to arrange form fields, determining how fields are organized and displayed within the form layout.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Gets or sets the collection of form controls associated with the form. This allows you to retrieve the current controls or update them with a new set of controls.
    *	Property type: Control[]
    */
    get controls(): Control[];
    set controls(value: Control[]);
    /** Defines or retrieves the position of the labels relative to their associated elements. Specify this property to control where labels are displayed (e.g., above, below, left, or right of the element).
    *	Property type: {(value: string): void}
    */
    get onStatusChanges(): {
        (value: string): void;
    };
    set onStatusChanges(value: {
        (value: string): void;
    });
    /** Sets all form fields to read-only mode, preventing users from modifying their input while still allowing them to view the existing data.
    *	Property type: {(value: any): void}
    */
    get onValueChanges(): {
        (value: any): void;
    };
    set onValueChanges(value: {
        (value: any): void;
    });
    /** Controls the visibility of the colon character that appears after label text. When enabled, a colon is displayed after each label; when disabled, the colon is omitted.
    *	Property type: FormLabelPosition | string
    */
    get labelPosition(): FormLabelPosition | string;
    set labelPosition(value: FormLabelPosition | string);
    /** Toggles the visibility of the validation summary, allowing users to display or hide a list of validation errors based on form input.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Retrieves the current status of the Form. Each entry within the status object contains the following boolean properties: dirty (indicates if the form field has been modified), untouched (indicates if the field has not been focused by the user), and disabled (indicates if the field is currently disabled).
    *	Property type: boolean
    */
    get showColonAfterLabel(): boolean;
    set showColonAfterLabel(value: boolean);
    /** Retrieves or assigns the current value of the form. Use this property to access the form's data for processing or to update the form with new values programmatically.
    *	Property type: boolean
    */
    get showSummary(): boolean;
    set showSummary(value: boolean);
    /** Automatically triggers form validation immediately upon form initialization, ensuring that all form fields are checked for correctness as soon as the form is rendered or instantiated.
    *	Property type: any
    */
    get status(): any;
    set status(value: any);
    /** undefined
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** undefined
    *	Property type: boolean
    */
    get validateOnLoad(): boolean;
    set validateOnLoad(value: boolean);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Inserts a new control element, such as an input field, button, or checkbox, into the Form, allowing users to interact with and submit data.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions: any): void;
    /** Retrieves a specific control element from the form using its name attribute, as defined by the dataField parameter. This method enables direct access to the control's properties and methods for further manipulation or data retrieval.
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField: string): any;
    /** Adds a new control element to the Form, allowing users to dynamically extend the form’s functionality. This method enables the inclusion of input fields, buttons, dropdowns, or other interactive components within the Form, ensuring seamless integration and consistent behavior with existing controls.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index: number, controlOptions: any): void;
    /** Removes a specified control element from the Form, ensuring it is no longer rendered or managed as part of the Form's structure and behavior.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions: any): void;
    /** Triggers the submission of the form, sending the user-entered data to the specified server endpoint for processing. This action may also initiate form validation and execute any associated event handlers before transmitting the data.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    submit(submitOptions?: any): void;
    /** Resets all fields in the form to their initial, default values, effectively clearing any user input or changes made.
    */
    reset(): void;
    /** Performs comprehensive validation of the form fields, ensuring that all required inputs are provided, data types and formats are correct, and any specified constraints or validation rules are met before allowing form submission.
    */
    validate(): void;
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
export default Form;
