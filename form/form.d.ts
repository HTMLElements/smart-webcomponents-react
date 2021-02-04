import React from "react";
import { FormProperties } from "./../index";
import { FormLabelPosition, Control } from './../index';
export { FormProperties } from "./../index";
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control } from './../index';
export { FormControl } from './formcontrol';
export { FormControlProperties } from "./../index";
export { FormGroup } from './formgroup';
export { FormGroupProperties } from "./../index";
export declare const Smart: any;
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
    /** Sets or gets the form columns.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Sets or gets the form controls.
    *	Property type: Control[]
    */
    get controls(): Control[];
    set controls(value: Control[]);
    /** Callback function for handling status changes
    *	Property type: any
    */
    get onStatusChanges(): any;
    set onStatusChanges(value: any);
    /** Callback function for handling value changes
    *	Property type: any
    */
    get onValueChanges(): any;
    set onValueChanges(value: any);
    /** Sets or Gets the labels position.
    *	Property type: FormLabelPosition
    */
    get labelPosition(): FormLabelPosition;
    set labelPosition(value: FormLabelPosition);
    /** Makes the form readonly.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Shows / hides the colon after the labels.
    *	Property type: boolean
    */
    get showColonAfterLabel(): boolean;
    set showColonAfterLabel(value: boolean);
    /** Shows / hides validation summary.
    *	Property type: boolean
    */
    get showSummary(): boolean;
    set showSummary(value: boolean);
    /** Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties.
    *	Property type: any
    */
    get state(): any;
    set state(value: any);
    /** Gets or Sets the Form value.
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
    /** Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions: any): void;
    /** Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField: string): Promise<any>;
    /** Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index: number, controlOptions: any): void;
    /** Remove a control from the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    removeControl(controlOptions: any): void;
    /** Submits the form.
    * @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
    */
    submit(submitOptions?: any): void;
    /** Clears the form.
    */
    reset(): void;
    /** Validates the form.
    */
    validate(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Form;
