import React from "react";
import { FormGroupProperties } from "./../index";
import { FormGroupLabelPosition, Control } from './../index';
export { FormGroupProperties } from "./../index";
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormGroupLabelPosition, Control } from './../index';
declare let Smart: any;
export { Smart };
export interface FormGroupProps extends FormGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Form Group
*/
export declare class FormGroup extends React.Component<React.HTMLAttributes<Element> & FormGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Gets or sets the number of columns used to layout the form fields, allowing for multi-column form arrangements.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Defines the data field associated with the form control. The inner input element’s name attribute will be set to the specified dataField value, ensuring correct binding and form data serialization. Additionally, this value determines how the control is referenced within the FormGroup, making the form control’s value accessible via the dataField key in the form’s data model.
    *	Property type: string
    */
    get dataField(): string;
    set dataField(value: string);
    /** Retrieves or updates the text displayed as the label for the form control, allowing you to specify or modify the descriptive text shown to users alongside the input element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /**
    *	Property type: Control[]
    */
    get controls(): Control[];
    set controls(value: Control[]);
    /** Specifies or retrieves the position of the labels relative to their associated element. This property can be used to define where labels are displayed, such as above, below, to the left, or to the right of the element.
    *	Property type: {(value: string): void}
    */
    get onStatusChanges(): {
        (value: string): void;
    };
    set onStatusChanges(value: {
        (value: string): void;
    });
    /** Sets the form to read-only mode, preventing users from editing or modifying any of the input fields while still allowing them to view the current values.
    *	Property type: {(value: any): void}
    */
    get onValueChanges(): {
        (value: any): void;
    };
    set onValueChanges(value: {
        (value: any): void;
    });
    /** Toggles the visibility of the colon character that appears immediately after label text, allowing you to choose whether or not a colon is displayed following each label.
    *	Property type: FormGroupLabelPosition | string
    */
    get labelPosition(): FormGroupLabelPosition | string;
    set labelPosition(value: FormGroupLabelPosition | string);
    /** Controls the visibility of the validation summary, allowing you to display or hide a summary of form validation errors to users.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Retrieves the current value of the form or updates it with a new value. This property can be used to access the form's data or set it programmatically.
    *	Property type: boolean
    */
    get showColonAfterLabel(): boolean;
    set showColonAfterLabel(value: boolean);
    /** undefined
    *	Property type: boolean
    */
    get showSummary(): boolean;
    set showSummary(value: boolean);
    /** undefined
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Inserts a new input control (such as a text box, dropdown, or checkbox) into the Form, allowing users to provide or select additional information as part of their submission.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions: any): void;
    /** Retrieves a specific control from the collection using its name, as specified by the dataField parameter. This function searches for a control whose name matches the provided dataField value and returns the corresponding control object, allowing you to access or manipulate its properties and methods.
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField: string): any;
    /** Adds a user interface control (such as a text box, dropdown, or button) to the specified Form, enabling users to input or interact with form data. This operation dynamically updates the Form’s layout and may include assigning default properties, event handlers, and positioning options for the new control.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index: number, controlOptions: any): void;
    /** Removes a specified control element from the Form, effectively deleting it from the Form’s structure and user interface. This operation detaches the control, ensuring it is no longer available for user interaction or data capture. Use this action to dynamically update the Form’s contents based on user actions or application logic.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions: any): void;
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
export default FormGroup;
