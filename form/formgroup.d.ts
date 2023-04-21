import React from "react";
import { FormGroupProperties } from "./../index";
import { FormGroupLabelPosition, Control } from './../index';
export { FormGroupProperties } from "./../index";
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormGroupLabelPosition, Control } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the form columns.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
    *	Property type: string
    */
    get dataField(): string;
    set dataField(value: string);
    /** Gets or Sets the Form control's label.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /**
    *	Property type: Control[]
    */
    get controls(): Control[];
    set controls(value: Control[]);
    /** Sets or Gets the labels position.
    *	Property type: {(value: string): void}
    */
    get onStatusChanges(): {
        (value: string): void;
    };
    set onStatusChanges(value: {
        (value: string): void;
    });
    /** Makes the form readonly.
    *	Property type: {(value: any): void}
    */
    get onValueChanges(): {
        (value: any): void;
    };
    set onValueChanges(value: {
        (value: any): void;
    });
    /** Shows / hides the colon after the labels.
    *	Property type: FormGroupLabelPosition | string
    */
    get labelPosition(): FormGroupLabelPosition | string;
    set labelPosition(value: FormGroupLabelPosition | string);
    /** Shows / hides validation summary.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or Sets the Form value.
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
    /** Adds a control to the Form.
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    addControl(controlOptions: any): void;
    /** Gets a control by its name(dataField).
    * @param {string} dataField. dataField of a FormControl or FormGroup
    * @returns {Control}
  */
    getControl(dataField: string): any;
    /** Inserts a control to the Form.
    * @param {number} index. Control insert index
    * @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
    */
    insertControl(index: number, controlOptions: any): void;
    /** Remove a control from the Form.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default FormGroup;
