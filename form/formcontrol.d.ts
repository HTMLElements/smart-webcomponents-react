import React from "react";
import { FormControlProperties } from "./../index";
import { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
export { FormControlProperties } from "./../index";
export { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode } from './../index';
export declare const Smart: any;
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
    /** Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit'
    *	Property type: FormControlAction
    */
    get action(): FormControlAction;
    set action(value: FormControlAction);
    /** Sets or Gets the alignment of the FormControl
    *	Property type: FormControlAlign
    */
    get align(): FormControlAlign;
    set align(value: FormControlAlign);
    /** HTML Content displayed after the Form Control
    *	Property type: any
    */
    get appendHTML(): any;
    set appendHTML(value: any);
    /** JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control.
    *	Property type: any
    */
    get controlOptions(): any;
    set controlOptions(value: any);
    /** The type of the control.
    *	Property type: FormControlControlType
    */
    get controlType(): FormControlControlType;
    set controlType(value: FormControlControlType);
    /** Sets the Form Group columns.
    *	Property type: number
    */
    get columns(): number;
    set columns(value: number);
    /** Sets the Form control column span.
    *	Property type: number
    */
    get columnSpan(): number;
    set columnSpan(value: number);
    /** Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
    *	Property type: string
    */
    get dataField(): string;
    set dataField(value: string);
    /** Sets the Form control disabled mode.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets whether the Form control is 'dirty' i.e its value is changed by the user.
    *	Property type: boolean
    */
    get dirty(): boolean;
    set dirty(value: boolean);
    /** Gets or Sets the Form control's info icon's tooltip.
    *	Property type: string
    */
    get info(): string;
    set info(value: string);
    /** Gets whether the Form control is invalid.
    *	Property type: boolean
    */
    get invalid(): boolean;
    set invalid(value: boolean);
    /** Gets or Sets the Form control's label.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Gets or Sets the Form control's label position.
    *	Property type: FormControlLabelPosition
    */
    get labelPosition(): FormControlLabelPosition;
    set labelPosition(value: FormControlLabelPosition);
    /** Gets or Sets the offset between the label and the control.
    *	Property type: number
    */
    get labelOffset(): number;
    set labelOffset(value: number);
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
    *	Property type: FormControlAlign
    */
    get labelAlign(): FormControlAlign;
    set labelAlign(value: FormControlAlign);
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label.
    *	Property type: string
    */
    get nextButtonLabel(): string;
    set nextButtonLabel(value: string);
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label.
    *	Property type: string
    */
    get backButtonLabel(): string;
    set backButtonLabel(value: string);
    /** Gets or Sets the FormControl placeholder.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** HTML Content displayed before the Form Control
    *	Property type: any
    */
    get prependHTML(): any;
    set prependHTML(value: any);
    /** Gets or Sets the Form control readonly mode.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or Sets whether this field is required.
    *	Property type: boolean
    */
    get required(): boolean;
    set required(value: boolean);
    /** Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control
    *	Property type: boolean
    */
    get untouched(): boolean;
    set untouched(value: boolean);
    /** Gets or Sets whether colon is displayed after the label.
    *	Property type: boolean
    */
    get showColonAfterLabel(): boolean;
    set showColonAfterLabel(value: boolean);
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Sets or Gets the Form control or Form group value.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Gets whether the Form control is valid.
    *	Property type: boolean
    */
    get valid(): boolean;
    set valid(value: boolean);
    /** Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
    *	Property type: [] | null
    */
    get validationRules(): [] | null;
    set validationRules(value: [] | null);
    /** FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode.
    *	Property type: FormControlViewMode
    */
    get viewMode(): FormControlViewMode;
    set viewMode(value: FormControlViewMode);
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default FormControl;
